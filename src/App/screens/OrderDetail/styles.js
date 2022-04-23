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
paddingHorizontal:'2%',
},
topview:
{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center',
    alignItems:'center',
    margin:'3%',
},
toptext:
{
    color:'black',
    fontWeight:'bold',
    fontSize:hp('3%'),
    fontFamily:'Raleway',
    marginTop:wp('4%')  
},
input:
{
backgroundColor:'white',
width:wp('90%'),
alignSelf:'center'
},


costview:
{
    flexDirection:'row',
    justifyContent:"space-between",
    marginHorizontal:'3%',
    marginTop:'3%'
},
subtotalview:
{
    flexDirection:'row',
    justifyContent:"space-between",
    marginHorizontal:'3%',
    marginTop:'58%'
},
costtext:
{
color:'#4A4B4D',
fontWeight:'bold',
fontSize:hp('2.5%'),
fontFamily:'Raleway'
},
costsubtitle:
{
    color:'#707070',
    fontWeight:'400',
    fontSize:hp('1.8%'),
    fontFamily:'Segoe UI'
},
container1: {
    //marginHorizontal:'5%',
    //marginVertical:'5%',
    marginLeft:"3%",
    marginTop:hp('47%'),
    marginBottom:hp('0%'),
  ...StyleSheet.absoluteFillObject,
  height: hp('25%'),
  width: Width/1.11,
  alignSelf:'center',
  justifyContent:'center',
  //alignItems: 'center',
  backgroundColor: 'white',
  //position:'absolute',
  //flex:1
},
map: {
  ...StyleSheet.absoluteFillObject,
  //position:'absolute',
  backgroundColor:'white',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
},


  });
  export default styles;
  