import {StackHeaderProps, createStackNavigator} from '@react-navigation/stack';
import React, {memo, useCallback} from 'react';
import {ImageURISource} from 'react-native';
import {CartHeader} from '../../components/CartHeader';
import {ROUTES} from '../../constants/constants';
import {Cart} from '../../screens/Cart';
import {Shop} from '../../screens/Shop';

export type CartStackParamList = {
  [ROUTES.Shop]: {
    id: number;
    title: string;
    price: number;
    count: number;
    imageSource: ImageURISource;
    isEditMode?: boolean;
  };
  [ROUTES.Cart]: undefined;
};

const Stack = createStackNavigator<CartStackParamList>();

export const CartNavigator = memo(() => {
  const header = useCallback(
    (props: StackHeaderProps) => <CartHeader {...props} />,
    [],
  );

  return (
    <Stack.Navigator initialRouteName={ROUTES.Cart}>
      <Stack.Group
        screenOptions={{
          header,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <Stack.Screen name={ROUTES.Cart} component={Cart} />
        <Stack.Screen name={ROUTES.Shop} component={Shop} />
      </Stack.Group>
    </Stack.Navigator>
  );
});
