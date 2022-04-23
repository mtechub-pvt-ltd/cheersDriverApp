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
//paddingVertical:'5%'
},
userview:
{
    borderColor:Colors.Appthemecolor,
    borderWidth:1,marginTop:'10%',
    //marginVertical:'5%'
    padding:'5%',borderRadius:20
    
},
topview:
{
    //flex:1,
    //flexDirection:'row',
    justifyContent:'flex-start',
    alignContent:'flex-start',
    alignItems:'flex-start',
    //marginTop:'5%'
    //backgroundColor:'red'
},
toptext:
{
    color:'#4A4B4D',
    fontWeight:'bold',
    fontSize:hp('2.5%'),
    fontFamily:'Raleway',
    //marginTop:wp('4%')  
},
usertext:
{
    color:'black',
    fontWeight:'bold',
    fontSize:hp('2.3%'),
    fontFamily:'Raleway',
    //marginTop:wp('4%')  
},
notificationview:
{
    borderColor:Colors.Appcontenttext,
    borderWidth:1,
    marginTop:'2%',
    //marginVertical:'5%'
    padding:'3%',borderRadius:20
    
},
orderdetailview:
{
    flexDirection:'row',
    justifyContent:'space-between',
},
ordertext:
{
    color:'#4A4B4D',
    fontWeight:'bold',
    fontSize:hp('2.1%'),
    fontFamily:'Raleway',
    //marginTop:wp('4%')  
},
locationview:
{
    //flex:1,
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',


},
locationtext:
{
    color:'#7C7D7E',
    fontWeight:'bold',
    fontSize:hp('1.8%'),
    fontFamily:'Raleway',
    marginTop:wp('2%'),
    textAlign:'left'
    //width:'100%'  
},
subtextleft:
{
    color:'#7C7D7E',
    fontWeight:'bold',
    fontSize:hp('2%'),
    fontFamily:'Raleway',
    marginTop:wp('4%'),
    textAlign:'left'
    //width:'100%'  
},
subtextright:
{
    color:'#7C7D7E',
    fontWeight:'bold',
    fontSize:hp('2%'),
    fontFamily:'Raleway',
    marginTop:wp('4%'),
    textAlign:'right'
    //width:'100%'  
},
input: {
    position:'absolute',
    marginLeft:40,
color:'black',
width:wp('80%'),
backgroundColor:'#F2F2F2',
//backgroundColor:'red',
borderRadius:50,
  },
  
  inputView:{
    flexDirection:'row',
    justifyConten:'space-around',
    alignItems:'center',
    alignContent:'center',
    borderRadius:50,
    height: hp('6.3%'),
    width:wp('90%'),
    //width:wp('10%'),
    marginBottom:wp('2%'),
    marginTop:wp('2%'),
    //borderColor:Colors.bordercolors,
    backgroundColor:'#F2F2F2'
    //backgroundColor:'green',
  },
  Icon:
  {
      color:'#7C7D7E',
      marginLeft:10

  },

mainviewflat:
{
  height:wp('50%'),
          alignItems:'center',
          //backgroundColor:'green'
},
itemview:
{
margin:'10%',
height:wp('35%'),
    alignItems:'center',
    //backgroundColor:'red'
},
card:
{
    height:wp('25%'),
    width:wp('25%'),
    borderRadius:20,
    borderWidth: 1,
    marginVertical:wp('12%'),
    position:'absolute',
    color:"orange"
},
itemimageView:
{
    height:wp('35%'),
    width:50,
    marginBottom:wp('5%')
},
itemtitle:
{
 fontSize:hp('2%'),
color:'black',
textAlign:'center'
},
Topicsview:{
   
   flexDirection:'row',
   justifyContent: 'space-between' ,
},
SeeView:
{
   borderRadius:25,
   justifyContent:'center',
   margin:'4%',
   backgroundColor:Colors.Appthemecolor
},
Seetext:
{
   color:'black',
   fontFamily: "Montserrat Bold",
   fontWeight:'bold',
   marginLeft:8,
   marginRight:8,
   marginBottom:5,
   marginTop:3,
   textAlign:'center'
 
},

inputview:
{
    //flex:1,
    //justifyContent:"center",
borderRadius:15,
    height:hp('73%'),
backgroundColor:'white',
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
fontSize:hp('3%'),
fontFamily:'Raleway',
marginTop:wp('4%')  
},



  });
  export default styles;
  