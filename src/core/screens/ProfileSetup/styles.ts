import {StyleSheet} from 'react-native';
import {StyleHookProp} from '../../../../@types/theme';

export default function styles({colors, fonts}: StyleHookProp) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    headerTitle: {
      alignItems: 'center',
      alignSelf: 'center',
      fontSize: fonts.font16,
      color: colors.TEXT_ACCENT,
      marginTop: 12,
      ...fonts.bold,
    },
    headerSubtitle: {
      marginTop: 12,
      alignItems: 'center',
      alignSelf: 'center',
      fontSize: fonts.font28,
      color: colors.TEXT_ACCENT,
      ...fonts.bold,
    },
    inputContainer: {
      marginTop: 24,
    },
    logoutButton: {
      borderWidth: 1,
      backgroundColor: colors.BORDER_BUTTON,
      alignItems: 'center',
      width: '70%',
      alignSelf: 'center',
      paddingVertical: 12,
      borderRadius: 12,
    },
    buttonText: {
      fontSize: fonts.font18,
      color: colors.WHITE,
      ...fonts.bold,
    },
  });
}
