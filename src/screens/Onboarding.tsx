import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Box, FlatList} from 'native-base';
import React, {memo, useCallback, useRef, useState} from 'react';
import {
  ImageURISource,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent,
  FlatList as RFlatList,
} from 'react-native';
import {OnboardingButton} from '../components/OnboardingButton';
import {OnboardingSliderRenderItem} from '../components/OnboardingSliderRenderItem';
import {SliderDots} from '../components/SliderDots';
import {DEVICE_WIDTH, ROUTES} from '../constants/constants';
import {MainStackParamList} from '../navigation/navigators/MainNavigator';

interface Slide {
  id: number;
  imageSource: ImageURISource;
  description: string;
}

const slides: Slide[] = [
  {
    id: 0,
    imageSource: require('../assets/images/apples.png'),
    description: 'Sell and buy fruit from different places',
  },
  {
    id: 1,
    imageSource: require('../assets/images/multifruits.png'),
    description: 'Get fresh and healthy fruit for you',
  },
  {
    id: 2,
    imageSource: require('../assets/images/bananas.png'),
    description: 'Organic fruit that can be enjoyed by everyone',
  },
];

type NavigationProps = NativeStackNavigationProp<
  MainStackParamList,
  ROUTES.AuthNavigator
>;

export const Onboarding = memo(() => {
  const {navigate} = useNavigation<NavigationProps>();
  const sliderRef = useRef<RFlatList>(null);

  const [sliderActiveIndex, setSliderActiveIndex] = useState(0);

  const buttonText = sliderActiveIndex === slides.length - 1 ? 'Start' : 'Next';

  const renderItem = useCallback(
    ({item: {imageSource, description}}: ListRenderItemInfo<Slide>) => {
      return (
        <OnboardingSliderRenderItem
          imageSource={imageSource}
          description={description}
        />
      );
    },
    [],
  );

  const onScroll = useCallback((e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / DEVICE_WIDTH);

    setSliderActiveIndex(index);
  }, []);

  const handleDotPress = useCallback((index: number) => {
    sliderRef.current?.scrollToIndex({index, animated: true});
  }, []);

  const handleButtonPress = useCallback(() => {
    if (sliderActiveIndex < slides.length - 1) {
      sliderRef.current?.scrollToIndex({
        index: sliderActiveIndex + 1,
        animated: true,
      });
      return;
    }

    navigate(ROUTES.BottomTabNavigator);
  }, [navigate, sliderActiveIndex]);

  return (
    <>
      <Box flex={1} justifyContent="center">
        <FlatList
          overScrollMode={'never'}
          bounces={false}
          ref={sliderRef}
          pagingEnabled
          onScroll={onScroll}
          decelerationRate={'fast'}
          horizontal
          data={slides}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          flexGrow={0}
        />
        <SliderDots
          onDotPress={handleDotPress}
          count={slides.length}
          activeIndex={sliderActiveIndex}
        />
      </Box>
      <OnboardingButton onPress={handleButtonPress} buttonText={buttonText} />
    </>
  );
});
