import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const SearchIcon = memo(() => (
  <Svg width={25} height={25} fill="none">
    <Path
      stroke="#F1C40F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.458 19.792a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667ZM21.875 21.875l-4.531-4.531"
    />
  </Svg>
));
