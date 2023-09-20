import {StyleSheet} from 'react-native';
import {StyleHookProp} from '../../../../@types/theme';

export default function styles({}: StyleHookProp) {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoutButton: {
      borderWidth: 1,
      alignItems: 'center',
      padding: 10,
      borderRadius: 12,
    },
  });
}
