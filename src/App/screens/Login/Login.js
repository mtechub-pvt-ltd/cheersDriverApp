import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView,
  Image, View, Text, TouchableOpacity,StatusBar
} from 'react-native';
import { TogglePasswordVisibility } from '../../utills/TogglePasswordVisibility';
import CustomButtonhere from '../../components/Button/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput,Snackbar} from 'react-native-paper'
 import styles from './styles';
import Colors from '../../utills/Colors';
import axios from 'axios';
import { BASE_URL } from '../../utills/ApiRootUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
 //textfields
const [Email, setEmail] = useState('');
const [Password, setPassword] = useState('');

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

//password field
const { passwordVisibility, rightIcon, handlePasswordVisibility } =
TogglePasswordVisibility();


//Api Calling
  const LoginUser=async() => {
  axios({
    method: 'post',
    url: BASE_URL+'user/login.php',
    data:{
        
        email : Email,
        password: Password,
       
        
    },
  })
  .then(async function (response) {
    console.log("response", JSON.stringify(response.data))

    setloading(0);
    setdisable(0);
          setEmail(''),
          setPassword('')
          if(response.data[0].message ==='User exsist')
          {
            navigation.navigate('BottomTab')
   
          }
          else{
            alert('Email or Password is incorrect')
          }
          await AsyncStorage.setItem('Userid',response.data[0].id);
          await AsyncStorage.setItem('Userdata',response.data[0].fullname);
          await AsyncStorage.setItem('UserEmail',response.data[0].email);
          await AsyncStorage.setItem('UserDOB',response.data[0].dateOfBirth);  
          await AsyncStorage.setItem('UserAdd',response.data[0].address);
          await AsyncStorage.setItem('UserPass',response.data[0].password);
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
  else if (Password=='') {
    setsnackbarValue({value: "Please Enter Password", color: 'red'});
    setVisible('true');

    }

  else{
    setloading(1);
    setdisable(1);
    LoginUser()
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
        <Text style={styles.maintext}>Hello</Text>
        </View>
        <View style={styles.subtextview}>
            <Text style={styles.subtext}>Please login to your account.
            </Text>
        </View>

          <TextInput
      label="Email Address"
      onChangeText={setEmail}
      keyboardType='email-address'
      style={styles.input}
      autoCapitalize='none'
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
    <TouchableOpacity 
    onPress={()=>  navigation.navigate('ForgetPassword')}
    >
<View style={styles.forgettextview}>
            <Text style={styles.forgettext}>Forgot Password?
            </Text>
        </View>
        </TouchableOpacity>

    <View style={styles.buttonview}>
        <CustomButtonhere
        title={'LOGIN'}
        //onPress={()=>  setModalVisible(true)}
        loading={loading}
        disabled={disable}
        onPress={()=> formValidation()}
        />

  </View>
</View>
  {/* <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
<View style={styles.lasttextview}>
            <Text style={styles.lasttext}>Don’t have an account? Register now
            </Text>
        </View>
        </TouchableOpacity> */}
    
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

export default Login;