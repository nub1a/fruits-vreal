import {View, Image, Text} from 'native-base';
import React, {memo} from 'react';
import {ImageURISource} from 'react-native';
import {DEVICE_WIDTH} from '../constants/constants';

interface Props {
  imageSource: ImageURISource;
  description: string;
}

export const OnboardingSliderRenderItem = memo(
  ({imageSource, description}: Props) => {
    return (
      <View w={DEVICE_WIDTH} alignItems="center">
        <Image w="265px" h="265px" source={imageSource} />
        <Text variant="title/25">Best Shop Fruit</Text>
        <Text mt="30px" w="200px" textAlign="center">
          {description}
        </Text>
      </View>
    );
  },
);
