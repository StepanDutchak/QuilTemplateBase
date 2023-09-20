import {useContext} from 'react';
import {AuthContext} from './AuthContext';

export const AuthStateProvider = () => {
  return useContext(AuthContext);
};
