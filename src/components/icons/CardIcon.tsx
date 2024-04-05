import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  isFocused?: boolean;
}

export const CardIcon = memo(({isFocused}: Props) => (
  <Svg width={34} height={34} fill="none">
    <Path
      stroke={isFocused ? '#F1C40F' : 'silver'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.75 31.167a1.417 1.417 0 1 0 0-2.833 1.417 1.417 0 0 0 0 2.833ZM28.333 31.167a1.417 1.417 0 1 0 0-2.833 1.417 1.417 0 0 0 0 2.833ZM1.417 1.417h5.666l3.797 18.969a2.834 2.834 0 0 0 2.833 2.28h13.77a2.833 2.833 0 0 0 2.834-2.28L32.583 8.5H8.5"
    />
  </Svg>
));
