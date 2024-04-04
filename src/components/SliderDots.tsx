import {Box, View} from 'native-base';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';

interface Props {
  onDotPress(index: number): void;
  count: number;
  activeIndex: number;
}

export const SliderDots = memo(({onDotPress, count, activeIndex}: Props) => (
  <View w="full" alignItems="center" mt="80px">
    <Box w="66px" h="16px" flexDirection="row" justifyContent="space-between">
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <TouchableOpacity onPress={() => onDotPress(index)} activeOpacity={1}>
            <Box
              h="16px"
              w="16px"
              borderRadius={50}
              bgColor={index === activeIndex ? 'yellow' : 'grey'}
            />
          </TouchableOpacity>
        ))}
    </Box>
  </View>
));
