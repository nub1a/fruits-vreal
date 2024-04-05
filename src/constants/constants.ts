import {Dimensions} from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export enum ROUTES {
  AuthNavigator = 'AuthNavigator',
  BottomTabNavigator = 'BottomTabNavigator',
  CartNavigator = 'CartNavigator',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  Onboarding = 'Onboarding',
  Home = 'Home',
  Settings = 'Settings',
  Notifications = 'Notifications',
  Cart = 'Cart',
  Shop = 'Shop',
}
