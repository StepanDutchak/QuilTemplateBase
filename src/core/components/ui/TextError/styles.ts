import {StyleSheet} from 'react-native';
import {StyleHookProp} from '../../../../../@types/theme';

export default function styles({colors, fonts}: StyleHookProp) {
  return StyleSheet.create({
    error: {
      marginTop: 8,
      color: colors.ERROR,
      fontSize: fonts.font14,
      ...fonts.medium,
    },
  });
}
