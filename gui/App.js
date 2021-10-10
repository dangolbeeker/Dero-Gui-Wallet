import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();




export default function App() {
  return (

    <Drawer.Navigator initialRouteName="CreateWallet">
    <Drawer.Screen
      name="Create Wallet"
      component={CreateWallet}
      options={{ drawerLabel: 'CreateWallet' }}
    />
    <Drawer.Screen
      name="Send"
      component={Notifications}
      options={{ drawerLabel: 'Send' }}
    />
    <Drawer.Screen
      name="Receive"
      component={Profile}
      options={{ drawerLabel: 'Receive' }}
    />
    <Drawer.Screen
      name="Addresses"
      component={Addresses}
      options={{ drawerLabel: 'Addresses' }}
    />
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}
        options={{ tabBarLabel: 'Home'}} />
        <Tab.Screen name="ExportSeed" component={ExportSeedScreen}
        options={{ tabBarLabel: 'ExportSeed'}} />
        <Tab.Screen name="Settings" component={SettingsScreen}
        options={{ tabBarLabel: 'Settings'}} />
      </Tab.Navigator>
    </NavigationContainer>
    </Drawer.Navigator>
  );
}