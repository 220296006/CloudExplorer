import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import TabNavigator from './TabNavigator';
import ModuleDetailScreen from '../screens/ModuleDetailScreen';
import QuizzesDetailScreen from '../screens/QuizzesDetailScreen';

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
  ModuleDetail: { moduleId: string };
  MainApp: undefined;
  ModulesScreen: undefined;
  QuizzesScreen: undefined;
  QuizzesDetail: { moduleId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false, gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ModulesScreen" component={TabNavigator} />
      <Stack.Screen name="ModuleDetail" component={ModuleDetailScreen}/>
      <Stack.Screen name="QuizzesScreen" component={TabNavigator} />
      <Stack.Screen name="QuizzesDetail" component={QuizzesDetailScreen} />
      <Stack.Screen name="MainApp" component={TabNavigator} />
    </Stack.Navigator>
  );
}
export default RootNavigator;
