import {NativeBaseProvider} from 'native-base';
import React, {ReactNode} from 'react';
import {theme} from '../theme/theme';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};
