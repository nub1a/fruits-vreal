import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Image, Text} from 'native-base';
import React, {memo, useCallback} from 'react';
import {ImageURISource, StyleSheet, TouchableOpacity} from 'react-native';
import {DEVICE_WIDTH, ROUTES} from '../constants/constants';
import {BottomTabNavigatorParamList} from '../navigation/tabNavigators/BottomTabNavigator';
import {priceToDollarsString} from '../utils/priceToDollarsString';

type NavigationProps = NativeStackNavigationProp<
  BottomTabNavigatorParamList,
  ROUTES.Home
>;

interface Props {
  id: number;
  imageSource: ImageURISource;
  title: string;
  price: number;
}

export const FruitRenderItem = memo(
  ({id, imageSource, title, price}: Props) => {
    const {navigate} = useNavigation<NavigationProps>();

    const onNavigateToShop = useCallback(() => {
      navigate(ROUTES.CartNavigator, {
        screen: ROUTES.Shop,
        params: {
          id,
          title,
          price,
          imageSource,
          count: 1,
          isEditMode: false,
        },
      });
    }, [id, imageSource, price, navigate, title]);
    return (
      <TouchableOpacity style={styles.container} onPress={onNavigateToShop}>
        <Image h="100px" resizeMode="contain" source={imageSource} />
        <Text fontWeight={500}>{title}</Text>
        <Text fontSize={12}>{priceToDollarsString(price)}</Text>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH / 2 - 26,
    height: DEVICE_WIDTH / 2 - 26,
    padding: 8,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 2,
    shadowOpacity: 0.4,
  },
});
