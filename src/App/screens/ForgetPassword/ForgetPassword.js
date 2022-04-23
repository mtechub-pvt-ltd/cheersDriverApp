import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView,
  Image, View, Text, TouchableOpacity
} from 'react-native';
import CustomButtonhere from '../../components/Button/CustomButton';
import CustomModal from '../../components/Modal/CustomModal';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput,Snackbar} from 'react-native-paper'
 import styles from './styles';
import Colors from '../../utills/Colors';
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgetPassword = ({ navigation }) => {
 //textfields
const [Email, setEmail] = useState('');

 //button states
 const [loading, setloading] = useState(0);
 const [disable, setdisable] = useState(0);
 const [visible, setVisible] = useState(false);
 const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
 const onDismissSnackBar = () => setVisible(false);

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

//Api Calling
  const ForgetUserPassword=async() => {
      var email=Email
    await AsyncStorage.setItem('UserEmail',Email);
  axios({
    method: 'post',
    url: BASE_URL+'user/forgetPassword.php',
    data:{  
        email : Email,    
    },
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data[0]))
    setloading(0);
    setdisable(0);
          //setEmail(''),
          navigation.navigate('FourDigitCode',response.data[0])
  })
  .catch(function (error) {
    console.log("error", error)
  })
}
//Api form validation
const formValidation = async () => {
  // input validation
  if (Email == '') {
    setsnackbarValue({value: "Please Enter Email", color: 'red'});
    setVisible('true');
  }
     
  else if (!handleValidEmail(Email)) {
    console.log('a')
    setsnackbarValue({value: "Incorrect Email", color: 'red'});
    setVisible('true');
}
  else{
    setloading(1);
    setdisable(1);
    ForgetUserPassword()
  }
}
  useEffect(() => {
    //SplashScreen.hide();
  }, []);
 return (

    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
          {/* <View style={styles.imageview}>
<Image
source={require('../../assets/logo.png')}
>

</Image>
          </View> */}
    <View style={styles.inputview}>
        <View style={styles.maintextview}>
        <Text style={styles.maintext}>Forget Password?</Text>
        </View>
        <View style={styles.subtextview}>
            <Text style={styles.subtext}>Please Enter Your Email
            </Text>
        </View>
        <View style={styles.subtextview1}>
            <Text style={styles.subtext}>Below To 
            Recieve 4 Digit Code
            </Text>
        </View>
          <TextInput
      label="Email Address"
      onChangeText={setEmail}
      keyboardType='email-address'
      autoCapitalize='none'
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      right={<TextInput.Icon name="email" color={Colors.inputiconcolor} />}
      />
    <View style={styles.buttonview}>
        <CustomButtonhere
        title={'Send Code'}
        loading={loading}
        disabled={disable}
        onPress={()=> formValidation()}
        />
  </View>
</View>

       <Snackbar
          duration={400}
          visible={visible}
          onDismiss={onDismissSnackBar}
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

export default ForgetPassword;