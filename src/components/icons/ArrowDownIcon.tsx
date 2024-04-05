import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowDownIcon = memo(() => (
  <Svg width={24} height={25} fill="none">
    <Path
      stroke="#F1C40F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 9.5 6 6 6-6"
    />
  </Svg>
));
