import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, KeyboardAvoidingView,
  Image, View, Text, TouchableOpacity
} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';
import CustomButtonhere from '../../components/Button/CustomButton';
 import styles from './styles';
import Colors from '../../utills/Colors';
import axios from 'axios';

const CELL_COUNT = 4;

const FourDigitCode = ({ navigation,route }) => {
 //code Confirmation states
 const [value, setValue] = useState('');
 const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
 const [props, getCellOnLayoutHandler] = useClearByFocusCell({
   value,
   setValue,
 });

 //button states
 const [loading, setloading] = useState(0);
 const [disable, setdisable] = useState(0);

 //check OTP Code
 const verifyno =()=>{
    console.log("obj:",route.params.code  ,value )
    if(route.params.code == value)
    {
        navigation.navigate('UpdatePassword')
    }
    else{
      console.log("not click")
    }
  }



  useEffect(() => {
      console.log('code',route.params.code)
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
            <Text style={styles.subtext}>Please Enter 4 Digit Code
            </Text>
        </View>
        <View style={styles.subtextview1}>
            <Text style={styles.subtext}>You 
            Recieved On Email
          
            </Text>
        </View>
        <View style={styles.subtextview1}>
            <Text style={styles.subtext}>
            {route.params.code}
            </Text>
        </View>
        <View style={styles.codefieldview}>
        <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      </View>
    <View style={styles.buttonview}>
        <CustomButtonhere
        title={'Verify'}
        //onPress={()=>  setModalVisible(true)}
        loading={loading}
        disabled={disable}
        onPress={()=> verifyno()}
        />

  </View>
</View>

      </KeyboardAvoidingView>

    </SafeAreaView>
  )
};

export default FourDigitCode;