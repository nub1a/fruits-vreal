import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import {ROUTES} from '../../constants/constants';
import {MainTabNavigator} from '../tabNavigators/MainTabNavigator';
import {AuthNavigator} from './AuthNavigator';

export type MainStackParamList = {
  [ROUTES.AuthNavigator]: undefined;
  [ROUTES.MainTabNavigator]: undefined;
};

const Stack = createStackNavigator<MainStackParamList>();

export const MainNavigator = memo(() => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.AuthNavigator}>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <Stack.Screen name={ROUTES.AuthNavigator} component={AuthNavigator} />
        <Stack.Screen
          name={ROUTES.MainTabNavigator}
          component={MainTabNavigator}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
});
