import {StyleSheet} from 'react-native';
import {StyleHookProp} from '../../../../../@types/theme';

export default function styles({colors, fonts}: StyleHookProp) {
  return StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
      borderWidth: 1,
      borderRadius: 100,
      borderColor: colors.INPUT_BORDER,
      backgroundColor: colors.INPUT_BG,
    },
    active: {
      borderColor: colors.INPUT_ACTIVE_BORDER,
    },
    placeholder: {
      position: 'absolute',
      left: 25,
      zIndex: 1,
      color: colors.TEXT_50,
      ...fonts.medium,
    },
    activePlaceholder: {
      color: colors.ACCENT,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 25,
    },
    input: {
      flex: 1,
      paddingTop: 30,
      paddingBottom: 8,
      color: colors.TEXT,
      fontSize: fonts.font16,
      lineHeight: fonts.font20,
      ...fonts.semi,
    },
    rightIcon: {
      marginLeft: 10,
    },
    leftIcon: {
      marginRight: 10,
    },
    disabled: {
      opacity: 0.5,
    },
    error: {
      borderColor: colors.INPUT_BORDER_ERROR,
      color: colors.ERROR,
    },
    errorContainer: {
      marginTop: 6,
    },
    errorText: {
      marginTop: 8,
      paddingHorizontal: 16,
      color: colors.ERROR,
      fontSize: fonts.font12,
      ...fonts.medium,
    },
    description: {
      marginTop: 8,
      paddingHorizontal: 16,
      color: colors.TEXT_50,
      fontSize: fonts.font12,
      ...fonts.medium,
    },
  });
}
