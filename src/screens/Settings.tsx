import {Text, View} from 'native-base';
import React, {memo} from 'react';

export const Settings = memo(() => {
  return (
    <View
      flex={1}
      px="16px"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white">
      <Text variant="title/32" textAlign="center" color="lightGrey">
        Settings screen is not implemented
      </Text>
    </View>
  );
});
