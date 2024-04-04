import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Box, Button, Input, Text, View} from 'native-base';
import React, {memo, useCallback, useState} from 'react';
import {ROUTES} from '../constants/constants';
import {AuthStackParamList} from '../navigation/navigators/AuthNavigator';

type NavigationProps = NativeStackNavigationProp<
  AuthStackParamList,
  ROUTES.SignUp
>;

export const SignUp = memo(() => {
  const {navigate} = useNavigation<NavigationProps>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPassword, setConfirmationPassword] = useState('');

  const onNavigateSignIn = useCallback(
    () => navigate(ROUTES.SignIn),
    [navigate],
  );

  const onNavigateOnboarding = useCallback(
    () => navigate(ROUTES.Onboarding),
    [navigate],
  );

  return (
    <View flex={1} px={30} justifyContent="space-between">
      <Box w="full" pt={40} alignItems="center">
        <Text variant="title/25">Sign Up</Text>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          mt={50}
          borderWidth={0}
        />
        <Input
          value={password}
          onChangeText={setPassword}
          type="password"
          placeholder="Password"
          mt={30}
          borderWidth={0}
        />
        <Input
          value={confirmationPassword}
          onChangeText={setConfirmationPassword}
          type="password"
          placeholder="Confirmation Password"
          mt={30}
          borderWidth={0}
        />
      </Box>
      <Box w="full">
        <Button
          variant="base"
          onPress={onNavigateOnboarding}
          _text={{fontSize: 25}}>
          Sign Up
        </Button>
        <Button
          variant="ghost"
          onPress={onNavigateSignIn}
          h="50px"
          mt={60}
          _text={{color: 'yellow', fontSize: 20, fontWeight: 500}}>
          Sign In menu
        </Button>
      </Box>
    </View>
  );
});
