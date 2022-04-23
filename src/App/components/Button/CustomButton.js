import * as React from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import { Button } from 'react-native-paper';
import styles from './styles';
import Colors from '../../utills/Colors';
const CustomButtonhere = ({
    icon,
    mode,
    title,
    onPress,
    loading,
    disable
}) => {
    return(
<View style={styles.container}>
  <Button 
  color={Colors.Appthemecolor}
  icon={icon} 
  mode={mode}
  contentStyle={styles.buttoncontent}
  style={styles.button}
  labelStyle={styles.label}
  onPress={onPress}
  disabled={disable}
  loading={loading}
  >
    {title}
    {/* {Loading ? (
    <ActivityIndicator color="white" />
  ) : (
    <Text>{title}</Text>
  )} */}
  </Button>
  </View>
    )
};

export default CustomButtonhere;