import {StyleSheet} from 'react-native';
import {StyleHookProp} from '../../../../../@types/theme';

export default function styles({}: StyleHookProp) {
  return StyleSheet.create({
    loadingProcess: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
