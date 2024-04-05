import React, {memo} from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

export const MiddleButtonIcon = memo(() => (
  <Svg width={60} height={60} fill="none">
    <Circle cx={30} cy={30} r={30} fill="#F1C40F" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M30 17.703v24.594M17.703 30h24.594"
    />
  </Svg>
));
