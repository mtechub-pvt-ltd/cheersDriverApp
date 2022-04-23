import React from 'react';
import { Text,View,StyleSheet, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../utills/Colors';

const Tab = createBottomTabNavigator();

//screeens 
import Home from '../screens/Dashboard/Home';
import Profile from '../screens/Profile/Profile';
import OrderHistory from '../screens/Orderhistory/OrderHistory';


function BottomTab() {
  return (
    <Tab.Navigator 
    labeled={false}
    activeColor={Colors.Appthemecolor}
    screenOptions={
      {
      headerShown:false,
       tabBarActiveTintColor:"white",
         tabBarInactiveTintColor:'grey',
           tabBarStyle:  {height: 70 },
           tabBarShowLabel:false,
       } }
    tabBarOptions={{
      activeTintColor:Colors.Appthemecolor,
      labelStyle: {
        fontSize: 12,
        marginBottom:12,
        padding: 0,
        fontWeight:'bold',
      },
    }}
    >
      <Tab.Screen name="Home" component={Home} 
      options={{
        headerShown: false,
        tabBarShowLabel:false,
        tabtBarVisible:false,
          tabBarLabel: (
            <Text style={{fontSize:15, fontWeight:'bold',
            marginBottom:'15px',color:'black'}}>BIIT</Text>
          ),
        tabBarIcon: ({ color,focused }) => (
          <View style={[style.tab, focused ? style.selectedTab : null]}>
         <MaterialCommunityIcons name="home" color={color} size={26}/>
         </View>
        ),
      }}/>
       <Tab.Screen name="OrderHistory" component={OrderHistory} 
       options={{
        headerShown: false,
        tabtBarVisible:false,
        showLabel: false,
        tabBarShowLabel:false,
       // title:'Saved Location',
        tabBarIcon: ({ color,focused }) => (
          <View style={[style.tab, focused ? style.selectedTab : null]}>
             <Icon name="history" color={color} size={26} />
    
          </View>
         ),
        }}/>
     
        
        <Tab.Screen name="Profile" component={Profile} 
       options={{
        headerShown: false,
        title:'My Profile',
        tabBarIcon: ({ color,focused }) => (
          <View style={[style.tab, focused ? style.selectedTab : null]}>
          <FontAwesome name="user" color={color} size={26} />
          </View>
         ),
        }}/>
    
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({

  tab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedTab: {
    backgroundColor:Colors.Appthemecolor},
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});
export default BottomTab;