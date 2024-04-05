import {StackActions, useNavigation} from '@react-navigation/native';
import {StackHeaderProps} from '@react-navigation/stack';
import {Text, View} from 'native-base';
import React, {memo, useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {ROUTES} from '../constants/constants';
import {GoBackIcon, SearchBigIcon} from './icons';

export const CartHeader = memo(({route}: StackHeaderProps) => {
  const {dispatch} = useNavigation();

  const onGoBack = useCallback(() => {
    dispatch({
      ...StackActions.replace(ROUTES.BottomTabNavigator, {
        screen: ROUTES.Home,
      }),
    });
  }, [dispatch]);

  return (
    <View
      h="38px"
      flexDirection="row"
      px="16px"
      backgroundColor="white"
      alignItems="center">
      <TouchableOpacity onPress={onGoBack}>
        <GoBackIcon />
      </TouchableOpacity>
      <View flex={1} alignItems="center">
        <Text ml="4px" variant="title/20" color="yellow">
          {route.name}
        </Text>
      </View>
      <TouchableOpacity>
        <SearchBigIcon />
      </TouchableOpacity>
    </View>
  );
});
