import React, { useRef,useState,useEffect }from "react";
import { Text, SafeAreaView, View,FlatList,ActivityIndicator,
  TouchableOpacity } from "react-native";
import styles from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from "../../utills/Colors";
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';


const OrderHistory= ({navigation}) => {
  //flatlist state
  const [data, setData] = useState('');

  //get flatlist api calling
  const GetOrderHistory= async() => {
    var userid=await AsyncStorage.getItem('Userdata')
    axios({
      method: 'POST',
      url:BASE_URL+'orders/myOrderHistoryDriver.php',
      data:{
        user_id:userid
      }
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
      setData(response.data)
      console.log('flatlist data:',data)
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }

    
    useEffect(() => {
  
        GetOrderHistory()

    },[]);
  
  return (
    <SafeAreaView style={styles.container}>
         <View style={styles.Topicsview}>

         <Text style={styles.toptext}>Order History</Text>
      </View> 
      <View style={{width:'100%'}}>
      {
   !data?
   <ActivityIndicator animating={true} color={Colors.Appthemecolor} 
   size={30}
   />
  :null
}
      <FlatList
        data={data}
        //numColumns={3}
        renderItem={({ item, index, separators }) => (
          <View style={styles.card}> 
          <View style={styles.contentview}>
          <Text style={styles.ordertextleft}>Order No:</Text>
          <Text style={styles.ordertextright}>#{item.order_id}</Text>
          </View>
          <View style={styles.contentview}>
          <Text style={styles.subtextleft}>Subtotal</Text>
          <Text style={styles.subtextright}>R {item.total}</Text>
          </View>
      
          </View>
        )}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      
      />
      </View>
    </SafeAreaView>
  );
};


export default OrderHistory;