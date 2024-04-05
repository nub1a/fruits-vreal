import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const SearchBigIcon = memo(() => (
  <Svg width={38} height={38} fill="none">
    <Path
      stroke="#F1C40F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.417 30.083c6.995 0 12.666-5.67 12.666-12.666S24.413 4.75 17.417 4.75 4.75 10.421 4.75 17.417c0 6.995 5.671 12.666 12.667 12.666ZM33.25 33.25l-6.887-6.887"
    />
  </Svg>
));
