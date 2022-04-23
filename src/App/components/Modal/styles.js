import React from 'react';
import {StyleSheet,
Dimensions
} from 'react-native';
import Colors from '../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    centeredView: {
        zIndex:0,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
      },
      modalView: {
        height: hp('48%'),
        width: wp('75%'),
        //margin: 10,
        //marginBottom:20,
        backgroundColor: "white",
        borderRadius: 20,
        //padding: 35,
        alignItems: "center",
        shadowColor: "#000",
     
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      modaltext:
      { 
          marginTop:30,
          fontSize:hp('2.5%'),
          fontWeight:'bold',
          color:'black',
          fontFamily: "Poppins",
          textAlign:'center'
      },
    
      ApprovedView:
      {
        height: hp('5%'),
        width: wp('45%'),
         borderRadius:45,
         backgroundColor:Colors.Appthemecolor,
         //marginRight:10,
         alignContent:'center',
         alignItems:'center',
         alignSelf:"center",
         justifyContent:'center'
      },
      Pendingtext:
      {
          textAlign:'center',
          margin:10,color:'white',
          fontSize:15,fontWeight:'bold'
      },

   
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 35,
        textAlign: "center"
      },
      buttonview:
      {
          flexDirection:'column', justifyContent:"flex-end",
    marginBottom:30,marginTop:'40%',
      },
      maintext:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        fontFamily: "Montserrat Bold",
      },
  });
  export default styles;
  