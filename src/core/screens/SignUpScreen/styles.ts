import {StyleSheet} from 'react-native';
import {StyleHookProp} from '../../../../@types/theme';

export default function styles({colors, fonts}: StyleHookProp) {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    headerText: {
      alignSelf: 'center',
      marginTop: 50,
      fontSize: fonts.font28,
      color: colors.TEXT_ACCENT,
      ...fonts.semiBold,
    },
    infoTextContainer: {
      marginTop: 8,
    },
    infoText: {
      alignItems: 'center',
      alignSelf: 'center',
      fontSize: fonts.font20,
      color: colors.TEXT_ACCENT,
      ...fonts.bold,
    },
    buttonContainer: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
    },
    googleButton: {
      backgroundColor: colors.ACCENT,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 12,
      borderWidth: 1,
      borderRadius: 40,
      width: '70%',
    },
    googleText: {
      marginLeft: 12,
      fontSize: fonts.font20,
      color: colors.TEXT_ACCENT_FIRST,
      ...fonts.bold,
    },
  });
}
