import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Text, View} from 'native-base';
import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useDispatch} from 'react-redux';
import {ArrowDownIcon, ArrowUpIcon} from '../components/icons';
import {ROUTES} from '../constants/constants';
import {CartStackParamList} from '../navigation/navigators/CartNavigator';
import {
  addToCart,
  changeFruitCountAndPriceById,
} from '../store/slices/fruitsSlice';
import {priceToDollarsString} from '../utils/priceToDollarsString';

type Props = NativeStackScreenProps<CartStackParamList, ROUTES.Shop>;

export const Shop = memo(({route}: Props) => {
  const {navigate} = useNavigation();
  const {id, title, imageSource, price, count, isEditMode} = route.params;
  const [counter, setCounter] = useState(isEditMode ? count : 1);
  const dispatch = useDispatch();

  const totalPrice = counter * price;

  const onAddToCart = useCallback(() => {
    if (isEditMode) {
      dispatch(changeFruitCountAndPriceById({id, count: counter, totalPrice}));
      navigate(ROUTES.Cart);
      return;
    }

    dispatch(
      addToCart({id, title, imageSource, price, totalPrice, count: counter}),
    );
    navigate(ROUTES.Cart);
  }, [
    counter,
    dispatch,
    id,
    imageSource,
    isEditMode,
    navigate,
    price,
    title,
    totalPrice,
  ]);

  const onDecreaseCount = useCallback(
    () => (counter > 1 ? setCounter(counter - 1) : null),
    [counter],
  );

  const onIncrementCount = useCallback(
    () => setCounter(counter + 1),
    [counter],
  );

  return (
    <View flex={1} px="32px">
      <View
        flex={1}
        backgroundColor="white"
        justifyContent="center"
        alignItems="center">
        <View style={styles.imageContainer}>
          <FastImage
            style={{height: 258, width: 258}}
            resizeMode="contain"
            source={imageSource}
          />
        </View>
        <Text mt={4} fontWeight={500}>
          {title}
        </Text>
        <View
          height="25px"
          mt={4}
          flexDirection="row"
          backgroundColor="grey"
          borderRadius={20}>
          <TouchableOpacity onPress={onDecreaseCount}>
            <ArrowDownIcon />
          </TouchableOpacity>
          <Text color="yellow">{counter} Kg</Text>
          <TouchableOpacity onPress={onIncrementCount}>
            <ArrowUpIcon />
          </TouchableOpacity>
        </View>
        <Text mt={4} variant="title/32" color="yellow">
          {priceToDollarsString(totalPrice)}
        </Text>
      </View>
      <View pb={30}>
        <Button
          variant="base"
          h="60px"
          onPress={onAddToCart}
          _text={{fontSize: 18}}>
          Add to Cart
        </Button>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  imageContainer: {
    height: 258,
    width: 258,
    backgroundColor: 'white',
    shadowColor: 'grey',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 2,
    shadowOpacity: 0.4,
  },
});
