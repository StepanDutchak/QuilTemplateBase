import React, {useMemo} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ROUTES from '../constants/Routes';

import {AuthProviderProp} from '../../../@types/providers';
import {AuthStateProvider} from '../context/Auth';
import MainStack from './Main/MainStack';
import {StatusBar} from 'react-native';
import SignUpStack from './Auth/SignUpStack';
import UserSetupStack from './UserSetup/UserSetupStack';

const StackNavigation = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  gestureEnabled: false,
};

function Navigation() {
  const {isUserAuthenticated, isUserProfileSetup}: Partial<AuthProviderProp> =
    AuthStateProvider();
  console.log('fff', isUserProfileSetup);
  const stack = useMemo(() => {
    if (!isUserAuthenticated) {
      return (
        <StackNavigation.Screen
          name={ROUTES.SIGN_UP_STACK}
          component={SignUpStack}
          options={screenOptions}
        />
      );
    }
    if (isUserAuthenticated && !isUserProfileSetup) {
      return (
        <StackNavigation.Screen
          name={ROUTES.USER_SETUP_STACK}
          component={UserSetupStack}
          options={screenOptions}
        />
      );
    }

    return (
      <StackNavigation.Screen
        name={ROUTES.MAIN_STACK}
        component={MainStack}
        options={screenOptions}
      />
    );
  }, [isUserAuthenticated, isUserProfileSetup]);

  return (
    <NavigationContainer>
      <StatusBar />
      <StackNavigation.Navigator>{stack}</StackNavigation.Navigator>
    </NavigationContainer>
  );
}

export {Navigation};
