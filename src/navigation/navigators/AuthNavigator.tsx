import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../../constants/constants';
import {SignIn} from '../../screens/SignIn';
import {SignUp} from '../../screens/SignUp';
import {Onboarding} from '../../screens/Onboarding';

export type AuthStackParamList = {
  [ROUTES.SignIn]: undefined;
  [ROUTES.SignUp]: undefined;
  [ROUTES.Onboarding]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthNavigator = memo(() => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.SignIn}>
      <Stack.Group
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <Stack.Screen
          name={ROUTES.SignIn}
          component={SignIn}
          options={{animationEnabled: false}}
        />
        <Stack.Screen
          name={ROUTES.SignUp}
          component={SignUp}
          options={{animationEnabled: false}}
        />
        <Stack.Screen name={ROUTES.Onboarding} component={Onboarding} />
      </Stack.Group>
    </Stack.Navigator>
  );
});
