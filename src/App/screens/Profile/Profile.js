import React, { useRef,useState,useEffect }from "react";
import { Text, SafeAreaView, KeyboardAvoidingView, View,Image,
  Modal,Pressable,TouchableOpacity,ImageBackground,Alert,
ScrollView} from "react-native";
import styles from "./styles";
import CamerBottomSheet from "../../components/CameraBottomSheet/CameraBottomSheet";
import { TogglePasswordVisibility } from "../../utills/TogglePasswordVisibility";
import { TextInput,Snackbar } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomButtonhere from "../../components/Button/CustomButton";
import ImagePicker from 'react-native-image-crop-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import RBSheet from "react-native-raw-bottom-sheet";
import Colors from '../../utills/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';

const Profile= ({navigation}) => {
  //camerasheet state
  const refRBSheet = useRef();
  //image state
  const [image,  setImage] = useState('');

  //textfields
  const [Fullname, setFullname] = useState('');
  const [Password, setPassword] = useState('');
 const [Email, setEmail] = useState('');
 const [UserID, setUserID] = useState('');
  const [Address, setAddress] = useState('');

  //modal state
    const [modalVisible, setModalVisible] = React.useState(false);

      //button states
  const [loading, setloading] = useState(0);
  const [disable, setdisable] = useState(0);
  const [visible, setVisible] = useState(false);
  const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
  const onDismissSnackBar = () => setVisible(false);

    //datepicker states
const [date, setDate] = useState(new Date());
const [mode, setMode] = useState('date');
const [show, setShow] = useState(false);
const [showyearwise, setshowyearwise] = useState(false);
const [birthdaydaywise, setbirthdaydaywise] = useState('');

//password field
const { passwordVisibility, rightIcon, handlePasswordVisibility } =
TogglePasswordVisibility();

//datepicker
const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShow(Platform.OS === 'ios');
  setDate(currentDate);
  var d = new Date();
  d = selectedDate
  if (d != undefined) {
    let year = d.getFullYear();
    let month = (d.getMonth() + 1).toString().padStart(2, "0");
    let day = d.getDate().toString().padStart(2, "0");
    console.log(year + '-' + month + '-' + day);
    console.log(typeof (year + '-' + month + '-' + day))
    setshowyearwise(year + "-" + month + "-" + day)
    setbirthdaydaywise(day + "-" + month + "-" + year)
    //console('date ha yhn',showyearwise)
  }

}

const showMode = (currentMode) => {
  setShow(true);
  setMode(currentMode);
  console.log('mode',mode)
};

const showDatepicker = () => {
  showMode('date');
};


    const takePhotoFromCamera = () => {
        setModalVisible(!modalVisible);
      ImagePicker.openCamera({
        compressImageMaxWidth: 300,
        compressImageMaxHeight: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        refRBSheet.current.close()
        console.log(image);
        setImage(image.path);
        //this.bs.current.snapTo(1);
      });
    }
  
    const choosePhotoFromLibrary = () => {
        setModalVisible(!modalVisible);
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        compressImageQuality: 0.7
      }).then(image => {
        refRBSheet.current.close()
        console.log(image);
        setImage(image.path);
        //setModalVisible(!modalVisible);
        //this.bs.current.snapTo(1);
      });
    }

        //change image api
        const pic =async()=>{
          var email= await AsyncStorage.getItem('UserEmail');
          RNFetchBlob.fetch('PUT',
           BASE_URL+'user/updateProfileData.php',
           //+route.params.UserID,
          {
            Authorization: "Bearer access-token",
            otherHeader: "foo",
            'Content-Type': 'multipart/form-data',
          }, [
          // part file from storage
          {
            name: 'image', filename: 'avatar-foo.jpg', type: 'image/jpg',
            data: RNFetchBlob.wrap(image)
          },
          {
            name: 'email', type:email, data: email
          },
         
          // elements without property `filename` will be sent as plain text
        ]).then((resp) => {
          // ...
          //console.log('Imagehere',resp)
          let obj = JSON.parse(resp.data)
          console.log('data here is',obj)
          if (obj) {
            setloading(0);
            setdisable(0);
            console.log('Sucess')
            setModalVisible(true)
            //Alert.alert("Successfully Add Manager")
          //navigation.navigate('BottomTab')
          }
        }).catch((err) => {
          // ...
          //console.log('Eror',err)
          Alert.alert(err)
        })
        }
    
    //Api Calling
    
    const Updateuserinfo=async () => {
      var email= await AsyncStorage.getItem('UserEmail');
      //console.log("obj:",userid)
    axios({
      method: 'POST',
      url: BASE_URL+'user/updateProfileData.php',
      data:{ 
        email:email,
        password:Password,
        fullname:Fullname,
        dateOfBirth:birthdaydaywise,
        address:Address,
      },
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
      setloading(0);
      setdisable(0);
          pic()
    })
    .catch(function (error) {
      console.log("error", error)
    })
    }
    //Api form validation
    const formValidation = async () => {
      // input validation
      if (Fullname == '') {
        setsnackbarValue({value: "Please Enter Fullname", color: 'red'});
        setVisible('true');
      }
    
     else if (Password=='') {
      console.log("lastNmae")
      setsnackbarValue({value: "Please Enter Password", color: 'red'});
      setVisible('true');
      }
      else if (birthdaydaywise=='') {
        setsnackbarValue({value: "Please Enter Date of Birth", color: 'red'});
        setVisible('true');
        }
      // else if (UserID=='') {
      //   setsnackbarValue({value: "Please Enter UserID", color: 'red'});
      //   setVisible('true');
      //   }
      else if (Address=='') {
        setsnackbarValue({value: "Please Enter Address", color: 'red'});
        setVisible('true');
        }
    
      else{
        setloading(1);
        setdisable(1);
        Updateuserinfo()
      }
    }
    const logout=async()=>
    {
      await AsyncStorage.removeItem('Userid');
      await AsyncStorage.removeItem('Userdata');
      await AsyncStorage.removeItem('UserEmail');
      await AsyncStorage.removeItem('UserDOB');
      await AsyncStorage.removeItem('UserAdd');
      await AsyncStorage.removeItem('UserPass');
      navigation.navigate('Login')
    }
    const getuserinfo=async()=>{
      var email= await AsyncStorage.getItem('UserEmail');
      setEmail(email)
      var name=await AsyncStorage.getItem('Userdata'); 
      setFullname(name)
      var DOB=await AsyncStorage.getItem('UserDOB'); 
      setbirthdaydaywise(DOB) 
      var Address=await AsyncStorage.getItem('UserAdd');
      setAddress(Address)
      var Password=await AsyncStorage.getItem('UserPass');
      setPassword(Password)
      var Id=await AsyncStorage.getItem('Userid');
      setUserID(Id)
      console.log(email,name,DOB,Address,Password)
    }
      useEffect(() => {
        getuserinfo()
        //SplashScreen.hide();
      }, []);
 
  return (
    <SafeAreaView style={styles.container}>
       {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          
          is24Hour={true}
          display="default"
          textColor="red"
          themeVariant="light"
          onChange={onChange}
          style={{
            shadowColor: '#fff',
            shadowRadius: 0,
            shadowOpacity: 1,
            shadowOffset: { height: 0, width: 0 },
            color:'#1669F',
            textColor:'#1669F'
          }}
        />
      )}
       <KeyboardAvoidingView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
    
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{alignSelf:'flex-start'}}>
         <Text style={styles.toptext}>Profile</Text>
         </View>
      <View style={styles.OrderView}>
        <TouchableOpacity onPress={()=>{logout()}}>
        <Text style={styles.Subscriptiontext}>Logout</Text>
        </TouchableOpacity>
    
      </View>
      </View>

      <View style={{alignItems:'center'}}>
      <Image
        style={styles.imageView}
        source={{ uri: image}}
      />
      <ImageBackground
        source={{ uri: image}}
           //source={require('../../Assets/profile.png')}
                  // source={{
                  //   uri: image,
                  // }}
                  style={{height: 110, width: 110}}
                  imageStyle={{borderRadius: 75}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderColor:'black',
                      borderWidth: 1,
                      borderRadius: 75,
                      borderColor:'orange'
                    }}>
                 <Ionicons
                          name="camera"
                          size={30}
                          color="orange"
                          style={{
                            opacity: 0.7,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: '#fff',
                            borderRadius: 10,
                          }}
                        />
                  </View>
                </ImageBackground>
      </View>
          <View style={styles.contentsview}>
      <View style={styles.SeeView}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() =>  refRBSheet.current.open()}
      >
        <Text style={styles.Subscriptiontext}>ADD PROFILE</Text>
      </Pressable>
      {/* <Text style={styles.Subscriptiontext}>ADD PROFILE</Text> */}
      {/* <CustomImagePicker/> */}
      </View> 
      </View>
      <TextInput
      label="Full Name"
      value={Fullname}
      onChangeText={setFullname}
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="account" color={Colors.inputiconcolor} />}
    />
          <TextInput
      label="Email Address"
      value={Email}
      onChangeText={setEmail}
      keyboardType='email-address'
      autoCapitalize='none'
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="email" color={Colors.inputiconcolor} />}
      />
          <TextInput
      label="Password"
      value={Password}
      onChangeText={setPassword}
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      secureTextEntry={passwordVisibility}
      enablesReturnKeyAutomatically
      right={<TextInput.Icon name={rightIcon} color={Colors.inputiconcolor} 
      onPress={handlePasswordVisibility}
      />}
    />
      <TouchableOpacity onPress={showDatepicker}>
          <TextInput
      label="Date of Birth"
      value={birthdaydaywise}
      onChangeText={onChange}
      editable={false}
      style={styles.input}
      placeholderTextColor='black'
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="calendar-range" color={Colors.inputiconcolor}
      onPress={showDatepicker}
      />}
    />
    </TouchableOpacity>
          {/* <TextInput
      label="User ID"
      value={UserID}
      onChangeText={setUserID}
      keyboardType='number-pad'
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="smart-card" color={Colors.inputiconcolor}/>}
    /> */}
          <TextInput
      label="Address"
      value={Address}
      onChangeText={setAddress}
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="map-marker" color={Colors.inputiconcolor}/>}
    />
 

       <View style={{flex:2,marginTop:'15%'}}>
       <CustomButtonhere
        title="UPDATE"
        loading={loading}
        disabled={disable}
    
        //onPress={()=>navigation.navigate('BottomTab')}
        onPress={()=> formValidation()}
      />
        
       </View>
       
       <CamerBottomSheet 
                refRBSheet={refRBSheet}
                onClose={()=> refRBSheet.current.close()}
                title={'Gallery'}
                takePhotoFromCamera={takePhotoFromCamera}
                choosePhotoFromLibrary={choosePhotoFromLibrary}
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
      </ScrollView>
      </KeyboardAvoidingView>
   
    </SafeAreaView>
  );
};


export default Profile;