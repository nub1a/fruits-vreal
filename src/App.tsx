import React from 'react';
import {MainNavigator} from './navigation/navigators/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './providers/ThemeProvider';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemeProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
