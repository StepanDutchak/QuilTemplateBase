import React, {useCallback, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

// import auth from '@react-native-firebase/auth';

import ScreenWrapper from '../../components/base/ScreenWrapper/ScreenWrapper';

import {useThemedStyles} from '../../hooks/useThemeStyles';

import {setUserAuth} from '../../store/userAuth';
import Input from '../../components/base/Input/Input';
import {usePersonalConstructor} from './hooks/usePersonalConstructor';
import {UserSetupConstructorProp} from '../../../../@types/components';

import Styles from './styles';
import AnimatedPress from '../../components/base/AnimatedPress/AnimatedPress';

type ConstructorBlockProp = {
  rows: UserSetupConstructorProp[];
};

const text = {
  headerTitle: 'Roffee',
  headerSubTitle: 'Profile create',
  logoutButtonText: 'Next',
};

const defaultUserData = {
  firstName: '',
  lastName: '',
  email: '',
};

const ProfileSetup = ({}) => {
  const {styles} = useThemedStyles(Styles);

  const dispatch = useDispatch();

  const [userData, setUserData] = useState(defaultUserData);

  const handleUpdateParams = useCallback((key: string, value: string) => {
    setUserData(oldRequestParams => ({
      ...oldRequestParams,
      [key]: value,
    }));
  }, []);

  const userDataBlock = usePersonalConstructor({
    userData,

    handleUpdateParams,
  }) as ConstructorBlockProp;

  const handleAppSignOut = () => {
    dispatch(setUserAuth({isProfileSetup: true}));
  };

  const renderItem = useCallback(
    (item: UserSetupConstructorProp) => {
      switch (item.type) {
        case 'INPUT':
          return (
            <Input
              {...item}
              containerStyle={styles.inputContainer}
              // validationError={validationError}
            />
          );
        default:
          return null;
      }
    },
    [styles],
  );

  const renderPersonalSection = useCallback(() => {
    return (
      <>
        {userDataBlock?.rows.map(item => {
          return <View key={item.id}>{renderItem(item)}</View>;
        })}
      </>
    );
  }, [renderItem, userDataBlock]);

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>{text.headerTitle}</Text>
        <Text style={styles.headerSubtitle}>{text.headerSubTitle}</Text>

        {renderPersonalSection()}
      </View>
      <AnimatedPress onPress={handleAppSignOut} style={styles.logoutButton}>
        <Text style={styles.buttonText}>{text.logoutButtonText}</Text>
      </AnimatedPress>
    </ScreenWrapper>
  );
};

export default React.memo(ProfileSetup);

// const auth = getAuth();

// console.log(auth()._user.email)
