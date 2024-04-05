import {Text, View} from 'native-base';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  SectionList,
  StyleSheet,
} from 'react-native';
import {useSelector} from 'react-redux';
import {FruitRenderItem} from '../components/FruitRenderItem';
import {HomeSearchBar} from '../components/HomeSearchBar';
import {DEVICE_WIDTH} from '../constants/constants';
import {Fruit} from '../store/slices/fruitsSlice';
import {RootState} from '../store/store';

export const Home = memo(() => {
  const [searchInput, setSearchInput] = useState('');
  const {fruits} = useSelector((state: RootState) => state.fruitsSlice);

  const renderItem = useCallback(({item}: ListRenderItemInfo<Fruit>) => {
    const {imageSource, title, price, id} = item;

    return (
      <FruitRenderItem
        id={id}
        imageSource={imageSource}
        title={title}
        price={price}
      />
    );
  }, []);

  const filteredBySearchFruits = useMemo(
    () =>
      fruits
        .map(el => el.data)
        .flat(1)
        .filter(fruit =>
          fruit.title.toLowerCase().includes(searchInput.toLowerCase()),
        ),
    [fruits, searchInput],
  );

  const itemSeparator = useCallback(() => <View h="20px" />, []);

  return (
    <View flex={1} px="16px" backgroundColor="white">
      <HomeSearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      {searchInput.length ? (
        <FlatList
          data={filteredBySearchFruits}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={itemSeparator}
          style={styles.flatList}
          contentContainerStyle={styles.flatListContainer}
          columnWrapperStyle={styles.flatListColumnWrapper}
        />
      ) : (
        <SectionList
          sections={fruits}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={itemSeparator}
          stickySectionHeadersEnabled={false}
          style={styles.sectionList}
          renderSectionHeader={({section: {type}}) => (
            <Text my="16px" fontSize={17} fontWeight={500} w={DEVICE_WIDTH}>
              {type}
            </Text>
          )}
          contentContainerStyle={styles.sectionContainer}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  sectionContainer: {
    paddingBottom: 32,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  sectionList: {
    marginTop: 16,
  },
  flatList: {
    marginTop: 32,
  },
  flatListContainer: {paddingBottom: 32},
  flatListColumnWrapper: {justifyContent: 'space-between'},
});
