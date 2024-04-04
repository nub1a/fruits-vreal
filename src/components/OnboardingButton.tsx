import {Button} from 'native-base';
import React, {memo} from 'react';

interface Props {
  buttonText: string;
  onPress(): void;
}

export const OnboardingButton = memo(({onPress, buttonText}: Props) => (
  <Button
    variant="ghost"
    onPress={onPress}
    h="50px"
    mt={60}
    _text={{color: 'yellow', fontSize: 20, fontWeight: 500}}>
    {buttonText}
  </Button>
));
