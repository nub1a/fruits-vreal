import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowUpIcon = memo(() => (
  <Svg width={24} height={25} fill="none">
    <Path
      stroke="#F1C40F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 15.5-6-6-6 6"
    />
  </Svg>
));
