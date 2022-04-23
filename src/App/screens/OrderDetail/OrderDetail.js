import React, { useEffect, useState,useRef } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView,ScrollView,
  Image, View, Text, 
} from 'react-native';
import CustomButtonhere from '../../components/Button/CustomButton';
import { TextInput,Snackbar } from 'react-native-paper'
import MapView, { PROVIDER_GOOGLE,Polyline,Marker } from 'react-native-maps';
import CustomModal from '../../components/Modal/CustomModal';
 import styles from './styles';
import Colors from '../../utills/Colors';
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import { Pic_BASE_URL } from '../../utills/PicUri';
import AsyncStorage from '@react-native-async-storage/async-storage';


const OrderDetail = ({ navigation,route }) => {
  console.log("subtotal",route.params)
  //params data
  const[orderid]=useState(route.params)
//map states
const [eror, setError]=useState()
const [region, setRegion] = useState();
const [marker, setMarker] = useState();


//shipping cost state
const[shippingcost]=useState(500)
const[subtotal]=useState(route.params)
const[total,settotal]=useState()


//modal state
    const [modalVisible, setModalVisible] = useState(false);
    
     //textfields
  const [Fullname, setFullname] = useState('');
 const [Email, setEmail] = useState('');
 const [UserID, setUserID] = useState('');
  const [DeliveryAddress, setDeliveryAddress] = useState('');
  const [PhoneNo, setPhoneNo] = useState('');

 

  //button states
  const [loading, setloading] = useState(0);
  const [disable, setdisable] = useState(0);
  const [visible, setVisible] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
  const onDismissSnackBar = () => setVisible(false);


    //Checkout 
    const orderComplete= async() => {
        setloading(1);
        setdisable(1);
    axios({
      method: 'POST',
      url: BASE_URL+'orders/updateAssignedOrderStatus.php',
      data:{ 
        order_id:orderid
      },
    })
    .then(async function (response) {
      console.log("response", JSON.stringify(response.data))
      setloading(0);
      setdisable(0);
          if(response.data[0].status ==='true')
          {
            setModalVisible(true)
          }
          else{
            alert('Cart is empty')
          }
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }
  

    //flatlist state
  const [data, setData] = useState('');

  //get flatlist api calling
  const GetOrderDetail= async() => {
    axios({
      method: 'POST',
      url:BASE_URL+'orders/viewAssignedOrder.php',
      data:{
        order_id:orderid
      }
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
      setData(response.data[0])
      console.log('flatlist data:',data)
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }
  useEffect(() => {
    GetOrderDetail()
    //SplashScreen.hide();
  }, []);
 return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
      <ScrollView
      nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          >
<View style={styles.topview}>
<View style={{justifyContent:'center'}}>
    <Text style={styles.toptext}>Order Detail</Text>
</View>
<View style={{justifyContent:'center',paddingTop:'4%'}}>
    {/* <Ionicons name='cart-sharp' color={Colors.Appthemecolor}
    size={30}
    /> */}
</View>
</View>
<View>
<TextInput
      label={'FullName'}
      value={data.full_name}
      editable={false}
      onChangeText={setFullname}
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="account" color={Colors.inputiconcolor} />}
    />
    <TextInput
      label="Email Address"
      value={data.email}
      editable={false}
      onChangeText={setEmail}
      keyboardType='email-address'
      autoCapitalize='none'
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="email" color={Colors.inputiconcolor} />}
      />
{/*     
          <TextInput
      label="User ID"
      value={data.full_name}
      editable={false}
      onChangeText={setUserID}
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="smart-card" color={Colors.inputiconcolor}/>}
    /> */}
          <TextInput
      label="Delivery Address"
      value={data.delivery_address}
      editable={false}
      onChangeText={setDeliveryAddress}
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="map-marker" color={Colors.inputiconcolor}/>}
    />
          <TextInput
      label="Phone No"
      value={data.phone_no}
      editable={false}
      onChangeText={setPhoneNo}
      style={styles.input}
      keyboardType='number-pad'
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="phone" color={Colors.inputiconcolor}/>}
    />
    </View>
    {/* <View style={styles.container1}>
<MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            showsUserLocation={true}
            zoomEnabled={true}
            initialRegion={{latitude:33.2,longitude:73.21,latitudeDelta:5,
                longitudeDelta:3}}
            //region={region}
            >
              <Marker
       //draggable
       coordinate={{
        latitude:39.2,longitude:79.21,
      }}
       // icon={require('../../Assets/markericon.jpg')}
       //image={require('../../Assets/markericon.jpg')}
       height= {50} width= {50}
       onDragEnd={
         (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
       }
       title={'Test Marker'}
       description={'This is a description of the marker'}
 
       
     />
         <Marker
       //draggable
       coordinate={{
        latitude:33.2,longitude:73.21,
      }}
       // icon={require('../../Assets/markericon.jpg')}
       //image={require('../../Assets/markericon.jpg')}
       height= {50} width= {50}
       onDragEnd={
         (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
       }
       title={'Test Marker'}
       description={'This is a description of the marker'}
 
     />
	<Polyline
		coordinates={[
			{          latitude:39.2,longitude:79.21},
			{ latitude:33.2,longitude:73.21 },
			// { latitude: 37.7665248, longitude: -122.4161628 },
			// { latitude: 37.7734153, longitude: -122.4577787 },
			// { latitude: 37.7948605, longitude: -122.4596065 },
			// { latitude: 37.8025259, longitude: -122.4351431 }
		]}
		strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'#7F0000',
			'#00000000', // no color, creates a "long" gradient between the previous and next coordinate
			'#B24112',
			'#E5845C',
			'#238C23',
			'#7F0000'
		]}
		strokeWidth={5}
	/>
          </MapView>
</View> */}
<View style={styles.subtotalview}>
    <View>
<Text style={styles.costtext}>Total</Text>
    </View>
    <View>
    <Text style={styles.costtext}>{data.total} R</Text>
        </View>
</View>    
<View style={styles.costview}>
    <View>
<Text style={styles.costtext}>Shipping Cost </Text>
    </View>
    <View>
    <Text style={styles.costtext}>{shippingcost} R</Text>
        </View>
</View>
{/* <View style={styles.costview}>
    <View>
<Text style={styles.costtext}>Total </Text>
    </View>
    <View>
    <Text style={styles.costtext}>{subtotal+shippingcost} R</Text>
        </View>
</View> */}


  <View style={{marginBottom:'10%',marginTop:'10%'}}>
  <CustomButtonhere
  title={'Mark AS COMPLETED'}
  loading={loading}
  disabled={disable}
  onPress={()=> orderComplete()}
  //onPress={()=> setModalVisible(true)}

  />
</View>
</ScrollView>

   <CustomModal 
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
             
              text={'Order Completed'}
          buttontext={'Back To Home'}
 onPress={()=> {navigation.navigate('BottomTab'),setModalVisible(false)}}
                /> 
                    <Snackbar
          duration={400}
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={
            {
              // label: 'Undo',
              // onPress: () => {
              //   // Do something
              // },
            }
          }
          style={{
            backgroundColor: snackbarValue.color,
            marginBottom:'20%',
            zIndex: 999,
          }}>
          {snackbarValue.value}
        </Snackbar>
      </KeyboardAvoidingView>

    </SafeAreaView>
  )
};

export default OrderDetail;