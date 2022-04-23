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
paddingHorizontal:'5%',
paddingVertical:'5%'
},
imageview:
{
//flex:0.5,
marginTop:wp('0%'),
height:wp('40%'),
justifyContent:"center",
alignSelf:'center',
//backgroundColor:"red"
},
inputview:
{
    //flex:1,
    //justifyContent:"center",
borderRadius:15,
    height:hp('73%'),
backgroundColor:'white',
marginTop:'15%'
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
underlogotext:
{
color:'black',
fontWeight:'bold',
fontSize:hp('2.5%'),
fontFamily:'Raleway',
textAlign:'center'
},
subtextview:
{
  justifyContent:'center',
  alignSelf:'center',
  marginBottom:'10%'  
},
subtext:
{
color:'black',
fontWeight:'200',
fontSize:hp('2.5%'),
marginBottom:wp('3%') 
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
    marginTop:hp('8%'),
},
lasttextview:
{
  justifyContent:'center',
  alignSelf:'center' ,
  marginTop:wp('2%') 
},
lasttext:
{
color:'white',
fontWeight:'400',
fontSize:hp('2%'),
marginBottom:wp('3%'),
},
  });
  export default styles;
  