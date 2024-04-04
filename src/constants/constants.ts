import {Dimensions, Platform} from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const IS_IOS = Platform.OS === 'ios';

export const IS_ANDROID = Platform.OS === 'android';

export enum ROUTES {
  AuthNavigator = 'AuthNavigator',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  Onboarding = 'Onboarding',
  MainTabNavigator = 'MainTabNavigator',
  Home = 'Home',
  Settings = 'Settings',
}
