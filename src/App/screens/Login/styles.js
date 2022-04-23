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
//marginTop:wp('5%'),
height:wp('40%'),
justifyContent:"center",
alignSelf:'center',
//backgroundColor:"red"
},
inputview:
{
    //flex:1,
    justifyContent:"center",
borderRadius:15,
    height:hp('60%'),
backgroundColor:'white',
marginTop:wp('0%'),
paddingTop:wp('6%')
},
maintextview:
{
  justifyContent:'center',
  alignSelf:'center',
  marginTop:wp('20%')
},
underlogotext:
{
color:'black',
fontWeight:'bold',
fontSize:hp('2.5%'),
fontFamily:'Raleway',
textAlign:'center'
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
  alignSelf:'center' , 
  marginBottom:wp('15%')  
},
subtext:
{
color:'black',
fontWeight:'200',
fontSize:hp('2.3%'),
marginBottom:wp('8%') 
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
    marginTop:hp('10%'),
},
forgettextview:
{
  justifyContent:'flex-end',
  alignSelf:'flex-end' ,
  marginTop:wp('2%') ,
  marginRight:'8%',
  marginTop:'5%'

},
forgettext:
{
color:Colors.Appthemecolor,
fontWeight:'300',
fontSize:hp('1.8%'),
marginBottom:wp('3%'),
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
  