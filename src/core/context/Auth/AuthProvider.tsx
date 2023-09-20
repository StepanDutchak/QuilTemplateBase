import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {AuthContext} from './AuthContext';

import {userAuthSelector} from '../../store/selector/userAuth';

import {setUserAuth} from '../../store/userAuth';

interface AuthProp {
  children: React.ReactNode;
}

export const AuthProvider = ({children}: AuthProp) => {
  const dispatch = useDispatch();

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isUserProfileSetup, setIsUserProfileSetup] = useState(false);

  const {isUserAuth, isProfileSetup} = useSelector(userAuthSelector);

  useEffect(() => {
    setIsUserProfileSetup(isProfileSetup);
    setIsUserAuthenticated(isUserAuth);
  }, [isUserAuth, isProfileSetup]);

  const appSignOut = useCallback(() => {
    setIsUserAuthenticated(false);
    dispatch(setUserAuth({isUserAuth: false, isProfileSetup: false}));
  }, [dispatch]);

  const context = {
    setIsUserAuthenticated,
    appSignOut,
    isUserProfileSetup,
    isUserAuthenticated,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
