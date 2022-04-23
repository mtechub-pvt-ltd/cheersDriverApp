import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView,StatusBar,
  Image, View, Text, TouchableOpacity, TextInput,FlatList,ScrollView
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';
 import styles from './styles';
import Colors from '../../utills/Colors';
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import { Pic_BASE_URL } from '../../utills/PicUri';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';



const Home = ({ navigation }) => {


//username state
const[username,setusename]= useState()

//current location states
const [eror, setError]=useState()
const [region, setRegion] = useState();
const [marker, setMarker] = useState();
const[currlocadd,setcurrlocadd]=useState();
//get current location
const GetcurrLocation=()=>{

  Geocoder.init("AIzaSyBI8rEv2hwtOGBcvmHyBKYgw3EsV1obr0Q"); 
    Geolocation.getCurrentPosition(
                  (position) => {
                  setRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0462,
                    longitudeDelta: 0.0261,
                  });
                  driverlocation(position)
                  Geocoder.from(position.coords.latitude,position.coords.longitude)
                  .then(json => {
                      console.log('adresss yhn ha',json.results[0]);
               var pickupaddressComponent = json.results[0].formatted_address;
               console.log("address here",pickupaddressComponent)
               setcurrlocadd(pickupaddressComponent)
                  })

                          .catch(error => console.warn(error));
                  },
                  (error) => {
                      // See error code charts below.
                  
                              setError(error.message)
                     
                          console.log(error.code, error.message);
                  },
                  {
                      enableHighAccuracy: false,
                      timeout: 10000,
                      maximumAge: 100000
                  }
              );
}

//flatlist state
  const [data, setData] = useState('');

  //get flatlist api calling
  const GetdriverNotification= async() => {
    var userid=await AsyncStorage.getItem('Userdata')
    axios({
      method: 'POST',
      url:BASE_URL+'orders/checkForNewAssignedOrder.php',
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

      //Post flatlist api calling
  const driverlocation= async(props) => {
   
   console.log('lat',props)
    console.log('lng',props.coords.longitude)
   
 
    var userid=await AsyncStorage.getItem('Userdata')
    axios({
      method: 'POST',
      url:BASE_URL+'user/updateDriverLocation.php',
      data:{
        user_id:userid,
        latitude:props.coords.latitude,
        longitude:props.coords.longitude
      }
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
 
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }
const getdata=async ()=>{
  var data=await AsyncStorage.getItem('Userdata')
  setusename(data)
  //await AsyncStorage.removeItem('userdata')
  console.log("userdata",data)
}
    
    useEffect(() => {
      console.log(setRegion.latitude),
      setTimeout(() => {
        GetdriverNotification()
    },6000);

    GetcurrLocation(),
      getdata()
    },[]);


 return (

    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='white' barStyle="dark-content"/>
      <KeyboardAvoidingView>
          <ScrollView
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          >
            <View style={styles.userview}>
<View style={styles.topview}>
<View style={{justifyContent:'center'}}>
    <Text style={styles.toptext}>Good morning</Text>
</View>
<View style={{justifyContent:'center'}}>
    <Text style={styles.usertext}>{username}</Text>
</View>
{/* <View style={{justifyContent:'center',paddingTop:'4%'}}>
    <Ionicons name='cart-sharp' color={Colors.Appthemecolor}
    size={30}
    />
</View> */}
</View>
<TouchableOpacity onPress={()=> {GetcurrLocation(),driverlocation()}}>
<View style={styles.locationview}>
<View style={{justifyContent:'center',width:'95%'}}>
    <Text style={styles.locationtext}>{currlocadd?currlocadd:'Current Location'}</Text>
</View>
{/* <View style={{paddingTop:'4%',width:'10%'}}>
    <Ionicons name='chevron-down-sharp' color={Colors.Appthemecolor}
    size={30}
    />
</View> */}
</View>
</TouchableOpacity>
</View>

<View style={styles.Topicsview}>
      <Text style={styles.maintext}>Notification</Text>
      <View style={styles.SeeView}>
      <Text style={styles.Seetext} onPress={()=>navigation.navigate('Categories')}>SEE ALL</Text>
      </View>
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
          <TouchableOpacity onPress={()=>
            navigation.navigate('OrderDetail',item.order_id)}>
          <View style={styles.notificationview}>
        
          <View style={{justifyContent:'center',width:'100%'}}>
              <Text style={styles.ordertext}>{item.Message}</Text>
           
          </View>
        
          <View style={styles.locationview}>
                    <View style={{justifyContent:'center',width:'50%'}}>
                        <Text style={styles.subtextleft}>Total
                         </Text>
                    </View>
                    <View style={{alignSelf:'flex-end',width:'50%'}}>
                        <Text style={styles.subtextright}>R {item.total}
                         </Text>
                    </View>
                    </View>
                    {/* <View style={styles.locationview}>
                    <View style={{justifyContent:'center',width:'50%'}}>
                        <Text style={{color:Colors.Appthemecolor}}>Date :
                         </Text>
                    </View>
                    <View style={{alignSelf:'flex-end',width:'50%'}}>
                        <Text style={{color:Colors.Appthemecolor,
                        textAlign:'right'}}>01-Sep-2021
                         </Text>
                    </View>
                    </View> */}
          
          </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        scrollEnabled={false}
      
      />
      </View>
        </ScrollView>
        </KeyboardAvoidingView>

    </SafeAreaView>
  )
};

export default Home;