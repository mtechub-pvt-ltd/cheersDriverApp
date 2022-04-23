import { 
    Dimensions,
    StyleSheet
} from 'react-native';

const {height} = Dimensions.get("screen");
const height_logo = height * 0.80;
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;
 const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center',

    },
    image: {
        flex: 1, 
        height:200,
        width:400,
    },
    
  });
  export default styles;