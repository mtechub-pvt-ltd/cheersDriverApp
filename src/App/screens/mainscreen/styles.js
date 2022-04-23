import { 
    Dimensions,
    StyleSheet
} from 'react-native';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';
import Colors from '../../utills/Colors';
 const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center',
        paddingVertical:'1%',
        //paddingHorizontal:'5%'
    },
    image: {
        flex: 1, 
        height:200,
        width:400,
    },
    buttoncontent:
    {
        height: hp('6%'),
        width: wp('40%'),
        backgroundColor:Colors.Appthemecolor,
        padding:0,
        color:Colors.Appthemecolor
    },
    button:
    {
        borderRadius:35,
        marginleft:"5%",
        height: hp('6%'),
        width: wp('40%'),
        alignItems:'center',
        backgroundColor:Colors.Appthemecolor,
    },   
    outlinedbuttoncontent:
    {
        height: hp('6%'),
        width: wp('40%'),
        borderColor:Colors.Appthemecolor,
        padding:0,
        color:Colors.Appthemecolor,
        
        
    },
    outlinedbutton:
    {
        borderRadius:35,
        //margin:5,
        height: hp('6%'),
        width: wp('40%'),
        alignItems:'center',
        borderColor:Colors.Appthemecolor,
        borderWidth:1,marginBottom:'3%'
    },
    outlinelabel:
    {
        color:'black',
        fontSize: hp('1.8%') ,
        fontWeight:'bold',
        backgroundColor:'white',

    },
    label:
    {
        color:'black',
        fontSize: hp('1.8%') ,
        fontWeight:'bold',
        backgroundColor:Colors.Appthemecolor,
    },
  
    lasttextview:
{
    width:wp('60%'),
  justifyContent:'center',
  alignSelf:'center' ,

},
lasttextview1:
{
    width:wp('80%'),
  justifyContent:'center',
  alignSelf:'center' ,

  //marginBottom:wp('25%') 
},
lasttext:
{
color:Colors.carttextcolor,
fontWeight:'bold',
fontSize:wp('3.2%'),
textAlign:'center'
},
buttonsview:
{
    flex:1,
flexDirection:'row',
width:wp('85%'),
position:"absolute",
justifyContent:'space-between',
alignSelf:'center',
//backgroundColor:'red',
marginHorizontal:wp('15%'),
//marginBottom:'20%',
},
  });
  export default styles;