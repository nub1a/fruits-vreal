import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const GoBackIcon = memo(() => (
  <Svg width={38} height={38} fill="none">
    <Path
      stroke="#F1C40F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 34.833c8.744 0 15.833-7.088 15.833-15.833 0-8.745-7.088-15.833-15.833-15.833-8.745 0-15.833 7.088-15.833 15.833 0 8.744 7.088 15.833 15.833 15.833Z"
    />
    <Path
      stroke="#F1C40F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 12.667 12.667 19 19 25.333M25.333 19H12.667"
    />
  </Svg>
));
