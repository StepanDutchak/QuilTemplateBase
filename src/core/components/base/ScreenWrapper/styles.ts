import {StyleSheet} from 'react-native';
import {StyleHookProp} from '../../../../../@types/theme';

export default function styles({colors}: StyleHookProp) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    containerHPadding: {
      paddingHorizontal: 12,
    },
    keyboardContainer: {
      flex: 1,
    },
    dragger: {
      marginTop: 12,
      alignSelf: 'center',
      height: 6,
      width: 46,
      borderRadius: 3,
      backgroundColor: colors.MODAL_DRAGGER,
    },
  });
}
