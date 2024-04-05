import {Button, ScrollView, Text, View} from 'native-base';
import React, {memo, useCallback, useMemo} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {CartRenderItem} from '../components/CartRenderItem';
import {CartItem, deleteFruitFromCartById} from '../store/slices/fruitsSlice';
import {RootState} from '../store/store';
import {priceToDollarsString} from '../utils/priceToDollarsString';

const DELIVERY_PRICE = 5.75;

export const Cart = memo(() => {
  const {cart} = useSelector((state: RootState) => state.fruitsSlice);
  const dispatch = useDispatch();

  const deleteFromCart = useCallback(
    (id: number) => dispatch(deleteFruitFromCartById(id)),
    [dispatch],
  );

  const totalCartPrice = useMemo(
    () => cart.reduce((a, b) => a + b.totalPrice, 0) + DELIVERY_PRICE,
    [cart],
  );

  const renderItem = useCallback(
    ({
      item: {id, title, imageSource, totalPrice, count, price},
    }: ListRenderItemInfo<CartItem>) => (
      <CartRenderItem
        id={id}
        title={title}
        price={price}
        imageSource={imageSource}
        totalPrice={totalPrice}
        count={count}
        deleteFromCart={deleteFromCart}
      />
    ),
    [deleteFromCart],
  );

  return (
    <View flex={1} px="32px">
      {cart.length ? (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
          <View pb={30}>
            <View>
              <ScrollView
                maxH="90px"
                mt={2}
                contentContainerStyle={{paddingBottom: 8}}
                showsVerticalScrollIndicator={false}>
                {cart.map(({title, totalPrice}) => (
                  <View flexDirection="row" justifyContent="space-between">
                    <Text fontSize={18} fontWeight={500}>
                      {title}
                    </Text>
                    <Text fontSize={18} fontWeight={500}>
                      {priceToDollarsString(totalPrice)}
                    </Text>
                  </View>
                ))}
                <View flexDirection="row" justifyContent="space-between">
                  <Text fontSize={18} fontWeight={500}>
                    Delivery
                  </Text>
                  <Text fontSize={18} fontWeight={500}>
                    {priceToDollarsString(DELIVERY_PRICE)}
                  </Text>
                </View>
              </ScrollView>
              <View mt={4} flexDirection="row" justifyContent="space-between">
                <Text fontSize={22} fontWeight={500}>
                  Total
                </Text>
                <Text fontSize={22}>
                  {priceToDollarsString(totalCartPrice)}
                </Text>
              </View>
            </View>
            <Button mt={4} variant="base" h="60px" _text={{fontSize: 18}}>
              Checkout
            </Button>
          </View>
        </>
      ) : (
        <View flex={1} justifyContent="center" alignItems="center">
          <Text variant="title/32" textAlign="center" color="lightGrey">
            No items in cart yet
          </Text>
        </View>
      )}
    </View>
  );
});
