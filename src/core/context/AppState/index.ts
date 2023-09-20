import {useContext} from 'react';
import {AppContext} from './AppContext';

export const AppStateProvider = () => {
  return useContext(AppContext);
};
