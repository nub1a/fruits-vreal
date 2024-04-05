import React from 'react';
import {MainNavigator} from './navigation/navigators/MainNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './providers/ThemeProvider';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {persistor, store} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <NavigationContainer>
              <MainNavigator />
            </NavigationContainer>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
