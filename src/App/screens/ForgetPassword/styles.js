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
    container:
    {
flex:1,
backgroundColor:'white',
paddingHorizontal:'7%',
paddingVertical:'5%'
},
imageview:
{
//flex:0.5,
height:wp('50%'),
justifyContent:"center",
alignSelf:'center'
},
inputview:
{
    //flex:1,
    justifyContent:"center",
borderRadius:15,
    height:hp('50%'),
backgroundColor:'white',
marginTop:wp('20%'),
paddingTop:wp('6%')
},
maintextview:
{
  justifyContent:'center',
  alignSelf:'center',

},
maintext:
{
color:'black',
fontWeight:'bold',
fontSize:hp('3.2%'),
fontFamily:'Raleway',
marginTop:wp('4%')  
},
subtextview:
{
  justifyContent:'center',
  alignSelf:'center',
  width:wp('60%') ,
  marginBottom:wp('2%'),
  //backgroundColor:'red' 
},
subtextview1:
{
  justifyContent:'center',
  alignSelf:'center',
  width:wp('80%') ,
  marginBottom:wp('20%'),
  //backgroundColor:'red' 
},
subtext:
{
    color:'#1D2226',
    fontWeight:'200',
    fontSize:hp('2.2%'),
textAlign:'center'
},
input:
{
backgroundColor:'white',
width:wp('75%'),
alignSelf:'center'
},
buttonview:
{
    flex:1,
    marginTop:hp('15%'),
},


  });
  export default styles;
  