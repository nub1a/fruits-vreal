import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {ROUTES} from '../../constants/constants';

export type BottomTabNavigatorParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.Settings]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

export const MainTabNavigator = memo(() => {
  return (
    <Tab.Navigator initialRouteName={ROUTES.Home}>
      <Tab.Screen name={ROUTES.Home} component={HomeScreen} />
      <Tab.Screen name={ROUTES.Settings} component={SettingsScreen} />
    </Tab.Navigator>
  );
});
