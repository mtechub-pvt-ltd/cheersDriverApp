import React, { useState,useEffect} from "react";
import {
    Text, StyleSheet,
    SafeAreaView, View,
    Image,
    StatusBar

} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";
const SplashScreen = ({navigation}) => {
    // setTimeout(() => {
    //     navigation.replace('MainScreen'); // Stack Name
    //   }, 4000);
      useEffect(() => {
        getData();
   
    },[]);

    const getData = async () => {
     
        try {
           await AsyncStorage.getItem('UserEmail')
                .then(db => {
                    console.log('usertype',{db})
                    if(db)
                    {
                            navigation.navigate('BottomTab');
                    }
                    else{
                        setTimeout(() => {
                            navigation.replace('MainScreen'); // Stack Name
                          }, 3000);
                    }
                            }  
                ).done();
            } catch (error) {
            }
   
    }
    return (
        <SafeAreaView style={styles.container}>
<StatusBar backgroundColor='white' barStyle="dark-content"/>
            <View >
                <Image
                    source={require('../../assets/splash.png')}
                    style={styles.image}
                    resizeMode='contain'
                />
            </View>
        </SafeAreaView>
    );
};
export default SplashScreen;