import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ROTES from '../../constants/Routes';

import {SignUpScreen} from '../../screens';

const SignUp = createStackNavigator();

const SignUpStack = () => {
  return (
    <SignUp.Navigator>
      <SignUp.Group
        screenOptions={{
          headerShadowVisible: false,
          headerShown: false,
          animationEnabled: false,
        }}>
        <SignUp.Screen name={ROTES.SIGN_UP_SCREEN} component={SignUpScreen} />
      </SignUp.Group>
    </SignUp.Navigator>
  );
};

export default SignUpStack;
