import React, {useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import auth from '@react-native-firebase/auth';

import ScreenWrapper from '../../components/base/ScreenWrapper/ScreenWrapper';

import {AuthStateProvider} from '../../context/Auth';
import {AuthProviderProp} from '../../../../@types/providers';
import {useThemedStyles} from '../../hooks/useThemeStyles';

import Styles from './styles';

const text = {
  headerText: 'Home Screen',
  logoutButtonText: 'Logout',
};

const HomeScreen = ({}) => {
  const {styles} = useThemedStyles(Styles);
  const {appSignOut}: Partial<AuthProviderProp> = AuthStateProvider();

  // const auth = getAuth();

  // console.log(auth()._user.email)
  const handleAppSignOut = useCallback(() => {
    appSignOut?.();
  }, [appSignOut]);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View>
          <Text>{text.headerText}</Text>
        </View>
        <TouchableOpacity
          onPress={handleAppSignOut}
          style={styles.logoutButton}>
          <Text>{text.logoutButtonText}</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default React.memo(HomeScreen);
