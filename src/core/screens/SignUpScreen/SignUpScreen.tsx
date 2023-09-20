import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import GoogleIcon from '../../assets/icons/auth/GoogleIcon';
import ScreenWrapper from '../../components/base/ScreenWrapper/ScreenWrapper';
import {setUserAuth} from '../../store/userAuth';
import {FIREBASE_WEB_CLIENT_ID} from '../../utils/keys';
import {useThemedStyles} from '../../hooks/useThemeStyles';

import Styles from './styles';

interface SignUpScreenProp {}

const text = {
  headerText: 'Welcome to Roffee',
  infoTextFirst: 'Please Sign-In',
  googleSignInButton: 'Google Sign-In',
};

GoogleSignin.configure({
  webClientId: FIREBASE_WEB_CLIENT_ID,
});

const SignUpScreen = ({}: SignUpScreenProp) => {
  const {styles} = useThemedStyles(Styles);

  const dispatch = useDispatch();

  async function onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    return auth().signInWithCredential(googleCredential);
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text style={styles.headerText}>{text.headerText}</Text>
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>{text.infoTextFirst}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.googleButton}
            onPress={() =>
              onGoogleButtonPress().then(() => {
                dispatch(setUserAuth({isUserAuth: true}));
              })
            }>
            <Text style={styles.googleText}>{text.googleSignInButton}</Text>
            <GoogleIcon />
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default React.memo(SignUpScreen);
