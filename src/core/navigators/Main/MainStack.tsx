import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {ApplicationStackParamList} from '../../../../@types/navigation';

import ROUTES from '../../constants/Routes';

import {HomeScreen} from '../../screens';

const MainStackNavigator = createStackNavigator<ApplicationStackParamList>();

const MainStack = () => {
  return (
    <MainStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <MainStackNavigator.Screen
        name={ROUTES.HOME_SCREEN}
        component={HomeScreen}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainStack;
