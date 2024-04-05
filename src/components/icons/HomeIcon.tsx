import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  isFocused?: boolean;
}

export const HomeIcon = memo(({isFocused}: Props) => (
  <Svg width={34} height={34} fill="none">
    <Path
      stroke={isFocused ? '#F1C40F' : 'silver'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.25 12.75 17 2.833l12.75 9.917v15.583a2.833 2.833 0 0 1-2.833 2.834H7.083a2.834 2.834 0 0 1-2.833-2.834V12.75Z"
    />
    <Path
      stroke={isFocused ? '#F1C40F' : 'silver'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.75 31.167V17h8.5v14.167"
    />
  </Svg>
));
