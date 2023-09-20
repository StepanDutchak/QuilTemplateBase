import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {AppContext} from './AppContext';
import {appSettingSelector} from '../../store/selector/appSetting';

interface AppStateProp {
  children: React.ReactNode;
}

export const AppProvider = ({children}: AppStateProp) => {
  const {isAppAuthSetup} = useSelector(appSettingSelector);

  const [tabBarOptions, setTabBarOptions] = useState({});

  const context = {
    setTabBarOptions,
    tabBarOptions,
    isAppAuthSetup,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};
