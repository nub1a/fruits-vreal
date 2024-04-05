import {useNavigation} from '@react-navigation/native';
import {Image, Text, View} from 'native-base';
import React, {memo, useCallback} from 'react';
import {ImageURISource, StyleSheet, TouchableOpacity} from 'react-native';
import {ROUTES} from '../constants/constants';
import {priceToDollarsString} from '../utils/priceToDollarsString';
import {DeleteIcon, EditIcon} from './icons';

interface Props {
  id: number;
  title: string;
  price: number;
  imageSource: ImageURISource;
  totalPrice: number;
  count: number;
  deleteFromCart(id: number): void;
}

export const CartRenderItem = memo(
  ({
    id,
    title,
    imageSource,
    totalPrice,
    count,
    deleteFromCart,
    price,
  }: Props) => {
    const {navigate} = useNavigation();

    const onDeleteFromCart = useCallback(
      () => deleteFromCart(id),
      [deleteFromCart, id],
    );

    const onEditProductInCart = useCallback(
      () =>
        navigate(ROUTES.CartNavigator, {
          screen: ROUTES.Shop,
          params: {
            id,
            title,
            price,
            imageSource,
            count,
            isEditMode: true,
          },
        }),
      [count, id, imageSource, navigate, price, title],
    );

    return (
      <View>
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Image w="82px" h="82px" resizeMode="contain" source={imageSource} />
          <View flexDirection="row">
            <Text>{count} Kg</Text>
            <Text ml={4}>{priceToDollarsString(totalPrice)}</Text>
          </View>
        </View>
        <View
          height="81px"
          backgroundColor="lightGrey"
          borderRadius={10}
          flexDirection="row">
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onEditProductInCart}>
            <EditIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onDeleteFromCart}>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  buttonContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
