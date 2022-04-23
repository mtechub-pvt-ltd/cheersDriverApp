
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//Screens

import SplashScreen from './src/App/screens/Splash/Splash';
import MainScreen from './src/App/screens/mainscreen/MainScreen';
import Login from './src/App/screens/Login/Login'
import Signup from './src/App/screens/Signup/Signup'
import ForgetPassword from './src/App/screens/ForgetPassword/ForgetPassword'
import FourDigitCode from './src/App/screens/FourDigitCode/FourDigitCode'
import UpdatePassword from './src/App/screens/UpdatePassword/UpdatePassword'
import BottomTab from './src/App/navigation/BottomTab'


global.ApiPath='https://mtechub.com/samples/cheerApp/apis/'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SplashScreen" component={SplashScreen}
        options={{
        headerShown: false,
        }} />
           <Stack.Screen name="MainScreen" component={MainScreen}
        options={{
        headerShown: false,
        }} />
      <Stack.Screen name="Login" component={Login}
        options={{
        headerShown: false,
        }} />
      <Stack.Screen name="Signup" component={Signup}
        options={{
        headerShown: false,
        }} />

<Stack.Screen name="ForgetPassword" component={ForgetPassword}
        options={{
        headerShown: false,
        }} />
        <Stack.Screen name="FourDigitCode" component={FourDigitCode}
        options={{
        headerShown: false,
        }} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword}
        options={{
        headerShown: false,
        }} />
             <Stack.Screen name="BottomTab" component={BottomTab}
        options={{
        headerShown: false,
        }} />
{/*


   
                <Stack.Screen name="Categories" component={Categories}
        options={{
        headerShown: false,
        }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;