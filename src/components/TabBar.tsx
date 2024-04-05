import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Box, View} from 'native-base';
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {DEVICE_WIDTH} from '../constants/constants';
import {
  CardIcon,
  HomeIcon,
  MiddleButtonIcon,
  NotificationsIcon,
  SettingsIcon,
} from './icons';

const icons = [HomeIcon, NotificationsIcon, CardIcon, SettingsIcon];

export const TabBar = memo(
  ({state, descriptors, navigation}: BottomTabBarProps) => {
    return (
      <View flexDirection="row" p="8px">
        <Box position={'absolute'} left={0} top={0} h={'1px'} w="full">
          <Shadow
            distance={10}
            sides={{top: true, bottom: false, start: false, end: false}}>
            <Box w={DEVICE_WIDTH} h={'1px'} />
          </Shadow>
        </Box>
        {state.routes.map((route, index) => {
          const Icon = icons[index];
          const {options} = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <React.Fragment key={route.key}>
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={styles.tabButton}>
                <Icon isFocused={isFocused} />
              </TouchableOpacity>
              {index === 1 ? (
                <TouchableOpacity style={styles.midButton}>
                  <MiddleButtonIcon />
                </TouchableOpacity>
              ) : null}
            </React.Fragment>
          );
        })}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midButton: {paddingHorizontal: 16, marginTop: -24},
});
