import {StyleSheet,Dimensions} from 'react-native';
import Colors from '../../utills/Colors';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} 
from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container:
  {
    backgroundColor:'white',
    flex:1,
    paddingHorizontal:wp('5%'),
  },

  toptext:{
    fontSize:hp('3%'),
    fontWeight:'bold',
    color:'black',
    fontFamily: "Montserrat Bold",
    marginTop:wp('5%')
  },

 Topicsview:{
marginBottom:20
 },
card:
{
   height:hp('10%'),
    width:wp('90%'),
    borderRadius:15,
    borderWidth: 1,
    marginVertical:wp('2%'),
 borderColor:'gray'
},
contentview:
{
    //backgroundColor:'red',
    flexDirection:'row',
          justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center',
        marginHorizontal:wp('2%'),
        marginVertical:wp('2%')
        },


ordertextleft:
{
 
    color:'black',
    fontFamily: "Montserrat Bold",
fontWeight:'bold',
fontSize:hp('2.3%')
},
ordertextright:
{
textAlign:'right',
    color:'black',
    fontFamily: "Montserrat Bold",
fontWeight:'bold',
fontSize:hp('2.3%')
},
subtextleft:
{
    color:'grey',
    fontFamily: "Montserrat Bold",
fontWeight:'bold',
fontSize:hp('2.3%')
},
subtextright:
{
    textAlign:'right',
    color:'grey',
    fontFamily: "Montserrat Bold",
fontWeight:'bold',
fontSize:hp('2.3%')
},
videotext1:
{
    marginTop:10,
    marginLeft:18,
    color:'black',
    fontFamily: "Montserrat Bold",
}
});
export default styles;
