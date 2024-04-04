import {extendTheme} from 'native-base';

import {Button, Input, Text} from './components';
import {colors, fontConfig, fonts} from './foundations';

export const theme = extendTheme({
  colors,
  fontConfig,
  fonts,
  components: {
    Text,
    Button,
    Input,
  },
});
