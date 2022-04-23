import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView,
  Image, View, Text, TouchableOpacity,StatusBar
} from 'react-native';
import CustomModal from '../../components/Modal/CustomModal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomButtonhere from '../../components/Button/CustomButton';
import { TogglePasswordVisibility } from '../../utills/TogglePasswordVisibility';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput,Snackbar} from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker';
 import styles from './styles';
import Colors from '../../utills/Colors';
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';

const Signup = ({ navigation }) => {
  //Modal States
  const [modalVisible, setModalVisible] = useState(false);

  //textfields
  const [Fullname, setFullname] = useState('');
  const [Password, setPassword] = useState('');
  const [DateofBirth, setDateofBirth] = useState('');
 const [Email, setEmail] = useState('');
 const [UserID, setUserID] = useState('');
  const [Address, setAddress] = useState('');

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

//email
const handleValidEmail = (val) => {
  let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
  if (reg.test(val)) {
      console.log('true')
      return true;
  }
  else {
      console.log('falsse')
      return false;
  }
}
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

//Api Calling

const Signup=() => {
  //console.log("obj:",userid)
axios({
  method: 'POST',
  url: BASE_URL+'user/register.php',
  data:{ 
    email:Email,
    password:Password,
    fullname:Fullname,
    dateOfBirth:birthdaydaywise,
    address:Address,
    type: "driver"
  },
})
.then(function (response) {
  console.log("response", JSON.stringify(response.data))
  setloading(0);
  setdisable(0);
       setFullname(''),
        setEmail(''),
        setPassword(''),
        setbirthdaydaywise(''),
      setUserID(''),
      setAddress('')
      setModalVisible(true)
 
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
  else if (Email=='') {
    setsnackbarValue({value: "Please Enter Email", color: 'red'});
    setVisible('true');

    }
    
    else if (!handleValidEmail(Email)) {
      console.log('a')
      setsnackbarValue({value: "Incorrect Email", color: 'red'});
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
    Signup()
  }
}
  useEffect(() => {
    //SplashScreen.hide();
  }, []);
 return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
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
          {/* <View style={styles.imageview}>
<Image
source={require('../../assets/logo.png')}
style={{height:110, width:180}}
>
</Image>
        <Text style={styles.underlogotext}>Driver</Text>
          </View> */}
                     <Ionicons name='close' size={30} color={'grey'}
                         onPress={()=> navigation.navigate('MainScreen')}
                     />

    <View style={styles.inputview}>
        <View style={styles.maintextview}>
        <Text style={styles.maintext}>Welcome</Text>
        </View>
        <View style={styles.subtextview}>
            <Text style={styles.subtext}>Create your New account
            </Text>
        </View>
        <TextInput
      label="Full Name"
      onChangeText={setFullname}
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="account" color={Colors.inputiconcolor} />}
    />
          <TextInput
      label="Email Address"
      onChangeText={setEmail}
      keyboardType='email-address'
      autoCapitalize='none'
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="email" color={Colors.inputiconcolor} />}
      />
          <TextInput
      label="Password"
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
      onChangeText={setUserID}
      keyboardType='number-pad'
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="smart-card" color={Colors.inputiconcolor}/>}
    /> */}
          <TextInput
      label="Address"
      onChangeText={setAddress}
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="map-marker" color={Colors.inputiconcolor}/>}
    />
    <View style={styles.buttonview}>
        <CustomButtonhere
        title={'Signup'}
        loading={loading}
        disabled={disable}
        onPress={()=> formValidation()}
        />

  </View>
</View>
  {/* <TouchableOpacity onPress={()=>  navigation.navigate('Login')}>
<View style={styles.lasttextview}>
            <Text style={styles.lasttext}>have an account? Login now
            </Text>
        </View>
        </TouchableOpacity> */}
       
       <CustomModal 
                modalVisible={modalVisible}
                CloseModal={() => setModalVisible(false)}
                Icon={  <AntDesign
                  name="checkcircle"
                  color="orange"
                  size={100}
              />}
              text={'Account Created'}
          buttontext={'GET STARTED'}
 onPress={()=> {navigation.navigate('Login'),setModalVisible(false)}}
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

export default Signup;