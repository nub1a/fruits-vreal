import {Image, Text, View} from 'native-base';
import React, {memo} from 'react';
import {AppleHeaderIcon} from './icons';

export const HomeHeader = memo(() => (
  <View
    h="38px"
    flexDirection="row"
    px="16px"
    justifyContent="space-between"
    backgroundColor="white"
    alignItems="center">
    <View flexDirection="row" alignItems="flex-end">
      <AppleHeaderIcon />
      <Text ml="4px" variant="title/20" color="greyTitle">
        BestFruitShop
      </Text>
    </View>
    <Image w="30px" h="30px" source={require('../assets/images/account.png')} />
  </View>
));
