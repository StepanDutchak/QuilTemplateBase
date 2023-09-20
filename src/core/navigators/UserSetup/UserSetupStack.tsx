import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {ApplicationStackParamList} from '../../../../@types/navigation';

import ROUTES from '../../constants/Routes';

import {ProfileSetup} from '../../screens';

const UserSetupStackNavigator =
  createStackNavigator<ApplicationStackParamList>();

const UserSetupStack = () => {
  return (
    <UserSetupStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <UserSetupStackNavigator.Screen
        name={ROUTES.PROFILE_SETUP_SCREEN}
        component={ProfileSetup}
      />
    </UserSetupStackNavigator.Navigator>
  );
};

export default UserSetupStack;
