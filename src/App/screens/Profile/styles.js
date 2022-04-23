import {StyleSheet,Dimensions} from 'react-native';
import Colors from '../../utills/Colors';
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container:
  {
    backgroundColor:'white',
    flex:1,
    paddingVertical:30,
    paddingHorizontal:20,
  },

  input:
  {
  backgroundColor:'white',
  width:wp('85%'),
  alignSelf:'center'
  },

  toptext:{
    fontSize:hp('3%'),
    fontWeight:'bold',
    color:'black',
    fontFamily: "Montserrat Bold",
    marginLeft:25
  },
  sidetext:{
    fontSize:20,
    fontWeight:'bold',
    color:'orange',
    fontFamily: "Montserrat Bold"
  },
 Topicsview:{
   flex:1,
     marginTop:10,
    flexDirection:'row',
    marginBottom:10,
    justifyContent:'space-between'

 },
 contentsview:{
    marginTop:10,
   flexDirection:'row',
   justifyContent:'space-around' ,
   marginBottom:15
},
SeeView:
 {
    borderRadius:35,
    padding:0,
    backgroundColor:'grey'
 },
 OrderView:
 {
    borderRadius:35,
    //marginLeft:120,
    padding:8,
    paddingLeft:12,
    paddingRight:12,
    backgroundColor:Colors.Appthemecolor,
    alignSelf:'flex-end'
    //justifyContent:'flex-end'
 },
 Subscriptiontext:
{
    fontSize:15,
    color:'white',
    fontFamily: "Montserrat Bold",
    fontWeight:'bold',
},

inputiconview:
{
  borderBottomColor: '#000000',
  borderBottomWidth: 1,
  flexDirection:'row',
 justifyContent:'space-between',
 alignContent:"center",
 alignItems:'center',
 marginBottom:10
},
textinputtextview:
{
  //marginTop:5
},
button: {
  borderRadius: 20,
  padding: 5,
  //elevation: 2
 paddingVertical:5
},
buttonOpen: {
  backgroundColor: "gray",
  //marginVertical:5
},

centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  //margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 25,
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
modaltextview:
{
  flexDirection:'row',
  justifyContent:'center',
  alignContent:"center",
  alignItems:"center",
  borderColor:'orange',
      borderWidth:1,
      margin:8,
      width:300,
      borderRadius:25,
      backgroundColor:'orange'
},
endtext:{
  fontSize:16,
  fontWeight:'bold',
  color:'orange',
  fontFamily: "Montserrat Bold",
  //marginLeft:25
  marginTop:10
},
});
export default styles;
