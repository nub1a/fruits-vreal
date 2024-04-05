import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React, {memo, useCallback} from 'react';
import {HomeHeader} from '../../components/HomeHeader';
import {TabBar} from '../../components/TabBar';
import {ROUTES} from '../../constants/constants';
import {Home} from '../../screens/Home';
import {Notifications} from '../../screens/Notifications';
import {Settings} from '../../screens/Settings';
import {CartNavigator} from '../navigators/CartNavigator';

export type BottomTabNavigatorParamList = {
  [ROUTES.Home]: undefined;
  [ROUTES.Notifications]: undefined;
  [ROUTES.CartNavigator]: undefined;
  [ROUTES.Settings]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

export const BottomTabNavigator = memo(() => {
  const tabBar = useCallback(
    (props: BottomTabBarProps) => <TabBar {...props} />,
    [],
  );

  const homeHeader = useCallback(() => <HomeHeader />, []);

  return (
    <Tab.Navigator tabBar={tabBar} initialRouteName={ROUTES.Home}>
      <Tab.Screen
        name={ROUTES.Home}
        component={Home}
        options={{header: homeHeader}}
      />
      <Tab.Screen
        name={ROUTES.Notifications}
        component={Notifications}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ROUTES.CartNavigator}
        component={CartNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ROUTES.Settings}
        component={Settings}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
});
