import React, { useState } from "react";
import {
    Text, StyleSheet,
    SafeAreaView, View,
    Image,
    StatusBar,
    TouchableOpacity

} from "react-native";
import { Button } from 'react-native-paper';
import Colors from "../../utills/Colors";
import styles from "./styles";
const MainScreen = ({navigation}) => {
    // setTimeout(() => {
    //     navigation.replace('Login'); // Stack Name
    //   }, 3000);
  
    return (
        <SafeAreaView style={styles.container}>
<StatusBar backgroundColor='white' barStyle="dark-content"/>
            <View >
                <Image
                    source={require('../../assets/splash.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
                <View style={{justifyContent:"flex-end",
              
                //marginleft:"3%",
                //width:'80%'
                }}>
                     <View style={styles.buttonsview}>
            
                  <Button  mode="contained" 
                    color={'white'}
                  onPress={() => navigation.navigate('Login')}
                  contentStyle={styles.buttoncontent}
                  style={styles.button}
                  labelStyle={styles.label}
                  >
    Login
  </Button>


  <Button  mode="outlined" 
    color={Colors.Appthemecolor}
                 onPress={() => navigation.navigate('Signup')}
                  contentStyle={styles.outlinedbuttoncontent}
                  style={styles.outlinedbutton}
                  labelStyle={styles.outlinelabel}
                  >
    SignUp
  </Button>

                  {/* {props.button1} */}
    {/* <View  style={styles.CompletedView}>
        <TouchableOpacity
         onPress={()=> navigation.navigate('Login')}>
        <Text style={styles.Completedtext}>Login</Text>
        </TouchableOpacity>
    </View> */}
    {/* <View  style={styles.ApprovedView}>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('Signup')}>
        <Text style={styles.Pendingtext}>SignUp</Text>
        </TouchableOpacity>
    </View> */}
     </View>
     </View>
     <View style={{justifyContent:'flex-end',marginTop:'10%',marginBottom:'10%',
  alignContent:'center',alignItems:'center'
  }}>
     <View style={{justifyContent:'flex-end',marginTop:'160%',
       position:"absolute",}}>
     <View style={styles.lasttextview}>
            <Text style={styles.lasttext}>By Proceeding, You Agree To Our
            </Text>
        </View>
        <View style={styles.lasttextview1}>
            <Text style={styles.lasttext}>Terms 
            & Conditions and Privacy Policy
            </Text>
        </View>
        </View>
        </View>
            </View>
        </SafeAreaView>
    );
};
export default MainScreen;