import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ImageURISource} from 'react-native';

export interface Fruit {
  id: number;
  title: string;
  price: number;
  imageSource: ImageURISource;
}

export interface FruitSection {
  type: string;
  data: Fruit[];
}

export interface CartItem extends Fruit {
  totalPrice: number;
  count: number;
}

type initialStateType = {
  fruits: FruitSection[];
  cart: CartItem[];
};

const initialState: initialStateType = {
  fruits: [
    {
      type: 'Popular',
      data: [
        {
          id: 1,
          title: 'Pineapple',
          price: 10,
          imageSource: require('../../assets/images/pineapple.png'),
        },
        {
          id: 2,
          title: 'Banana',
          price: 13,
          imageSource: require('../../assets/images/banana.png'),
        },
        {
          id: 3,
          title: 'Green Grapes',
          price: 15,
          imageSource: require('../../assets/images/greenGrapes.png'),
        },
      ],
    },
    {
      type: 'Best Seller',
      data: [
        {
          id: 4,
          title: 'Grapes',
          price: 20,
          imageSource: require('../../assets/images/grapes.png'),
        },
        {
          id: 5,
          title: 'Melon',
          price: 30,
          imageSource: require('../../assets/images/melon.png'),
        },
        {
          id: 6,
          title: 'Mango',
          price: 45,
          imageSource: require('../../assets/images/mango.png'),
        },
        {
          id: 7,
          title: 'Apple',
          price: 80,
          imageSource: require('../../assets/images/apple.png'),
        },
        {
          id: 8,
          title: 'Nectarine',
          price: 120,
          imageSource: require('../../assets/images/nectarine.png'),
        },
      ],
    },
  ],
  cart: [],
};

const fruitsSlice = createSlice({
  name: 'fruits',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const {id, count, totalPrice} = action.payload;
      if (state.cart.some(el => el.id === id)) {
        state.cart = state.cart.map(el =>
          el.id === id
            ? {
                ...el,
                count: el.count + count,
                totalPrice: el.totalPrice + totalPrice,
              }
            : el,
        );
        return;
      }
      state.cart = [...state.cart, action.payload];
    },
    deleteFruitFromCartById(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter(
        cartItem => cartItem.id !== action.payload,
      );
    },
    changeFruitCountAndPriceById(
      state,
      action: PayloadAction<{id: number; count: number; totalPrice: number}>,
    ) {
      const {id, count, totalPrice} = action.payload;

      state.cart = state.cart.map(cartItem =>
        cartItem.id === id
          ? {
              ...cartItem,
              count,
              totalPrice,
            }
          : cartItem,
      );
    },
  },
});

const {actions, reducer} = fruitsSlice;

export const {
  addToCart,
  deleteFruitFromCartById,
  changeFruitCountAndPriceById,
} = actions;

export default reducer;
