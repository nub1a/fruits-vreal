import {Input, View} from 'native-base';
import React, {memo} from 'react';
import {StyleSheet} from 'react-native';
import {SearchIcon} from './icons';

interface Props {
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
}

export const HomeSearchBar = memo(({searchInput, setSearchInput}: Props) => {
  return (
    <View mt={15} borderRadius={30} w="full" style={styles.inputContainer}>
      <Input
        variant="unstyled"
        value={searchInput}
        onChangeText={setSearchInput}
        backgroundColor="white"
        pl="26px"
        w="full"
        height="48px"
        borderRadius={30}
        InputRightElement={
          <View mr="16px">
            <SearchIcon />
          </View>
        }
        placeholder="Search"
        placeholderTextColor="lightGrey"
      />
    </View>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.4,
  },
});
