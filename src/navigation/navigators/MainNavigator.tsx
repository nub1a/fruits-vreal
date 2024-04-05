import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import {ROUTES} from '../../constants/constants';
import {BottomTabNavigator} from '../tabNavigators/BottomTabNavigator';
import {AuthNavigator} from './AuthNavigator';

export type MainStackParamList = {
  [ROUTES.AuthNavigator]: undefined;
  [ROUTES.BottomTabNavigator]: undefined;
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
          animationEnabled: false,
        }}>
        <Stack.Screen name={ROUTES.AuthNavigator} component={AuthNavigator} />
        <Stack.Screen
          name={ROUTES.BottomTabNavigator}
          component={BottomTabNavigator}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
});
