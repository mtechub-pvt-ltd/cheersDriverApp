import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView,
  Image, View, Text, TouchableOpacity
} from 'react-native';
import { TogglePasswordVisibility } from '../../utills/TogglePasswordVisibility';
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

const UpdatePassword = ({ navigation }) => {
 
 //textfields
 const [Password, setPassword] = useState('');
const [ConfirmPassword, setConfirmPassword] = useState('');

 //button states
 const [loading, setloading] = useState(0);
 const [disable, setdisable] = useState(0);
 const [visible, setVisible] = useState(false);
 const [snackbarValue, setsnackbarValue] = useState({value: '', color: ''});
 const onDismissSnackBar = () => setVisible(false);
 
 //Modal States
  const [modalVisible, setModalVisible] = useState(false);

//password field
const { passwordVisibility, rightIcon, handlePasswordVisibility } =
TogglePasswordVisibility();


//Api Calling
  const UserUpdatePassword=async() => {
    var useremail = await AsyncStorage.getItem('UserEmail');
    console.log("email",useremail)
  axios({
    method: 'post',
    url: BASE_URL+'user/updatePassword.php',
    data:{
        email : useremail,
        password: Password, 
    },
  })
  .then(async function (response) {
    console.log("response", JSON.stringify(response.data))
    setloading(0);
    setdisable(0);
    await AsyncStorage.removeItem('UserEmail');
 navigation.navigate('Login')
   
  })
  .catch(function (error) {
    console.log("error", error)
  })
}
//Api form validation
const formValidation = async () => {
  // input validation
  if (Password=='') {
    setsnackbarValue({value: "Please Enter Password", color: 'red'});
    setVisible('true');

    }
  else if (ConfirmPassword=='') {
    setsnackbarValue({value: "Please Enter Confirm Password", color: 'red'});
    setVisible('true');

    }
    else if (Password!=ConfirmPassword) {
        setsnackbarValue({value: "Please Enter Same Password", color: 'red'});
        setVisible('true');
    
        }
  else{
    setloading(1);
    setdisable(1);
    UserUpdatePassword()
  }
}
const email=async()=>{
    var useremail = await AsyncStorage.getItem('UserEmail');
    console.log("email",useremail)
}
  useEffect(() => {
    console.log('API>>....',BASE_URL)
    email()
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
        <Text style={styles.maintext}>Update Password</Text>
        </View>
        <View style={styles.subtextview}>
            <Text style={styles.subtext}>Create New Password
            </Text>
        </View>

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
          <TextInput
      label="Confirm Password"
      onChangeText={setConfirmPassword}
      style={styles.input}
      activeUnderlineColor={Colors.Appthemecolor}
      secureTextEntry={passwordVisibility}
      enablesReturnKeyAutomatically
      right={<TextInput.Icon name={rightIcon} color={Colors.inputiconcolor} 
      onPress={handlePasswordVisibility}
      />}
    />


    <View style={styles.buttonview}>
        <CustomButtonhere
        title={'Update'}
        //onPress={()=>  setModalVisible(true)}
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

export default UpdatePassword;