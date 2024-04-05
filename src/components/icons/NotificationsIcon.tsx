import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

interface Props {
  isFocused?: boolean;
}

export const NotificationsIcon = memo(({isFocused}: Props) => (
  <Svg width={34} height={34} fill="none">
    <Path
      stroke={isFocused ? '#F1C40F' : 'silver'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M25.5 11.333a8.5 8.5 0 1 0-17 0c0 9.917-4.25 12.75-4.25 12.75h25.5s-4.25-2.833-4.25-12.75ZM19.45 29.75a2.833 2.833 0 0 1-4.9 0"
    />
  </Svg>
));
