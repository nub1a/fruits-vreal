import React, {memo} from 'react';
import Svg, {Path} from 'react-native-svg';

export const DeleteIcon = memo(() => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14ZM10 11v6M14 11v6"
    />
  </Svg>
));
