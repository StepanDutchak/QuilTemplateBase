// import React, {useCallback} from 'react';
// import {View, Text} from 'react-native';
// import PropTypes from 'prop-types';
// import {useNavigation} from '@react-navigation/native';

// import {useThemedStyles} from '../../../../hooks/useThemeStyles';
// import NavBackButtonIcon from '../../../../assets/icons/navigation/backArrow';

// import NavButton from '../ui/NavButton';

// import Styles from './styles';

// function ScreenHeader({
//   title,
//   titleStyle,
//   onLeftPress,
//   onRightPress,
//   leftIcon,
//   rightIcon,
//   canGoBack,
//   renderHeader,
//   style,
// }) {
//   const {colors, styles} = useThemedStyles(Styles);
//   const navigation = useNavigation();

//   const handleGoBack = useCallback(() => {
//     navigation?.goBack();
//   }, []);

//   const renderLeftButton = useCallback(() => {
//     if (!canGoBack) {
//       return null;
//     }

//     return (
//       <NavButton onPress={onLeftPress || handleGoBack} style={styles.button}>
//         {leftIcon ? (
//           leftIcon()
//         ) : (
//           <NavBackButtonIcon style={styles.backArrow} color={colors.ICON} />
//         )}
//       </NavButton>
//     );
//   }, [onLeftPress, leftIcon, colors]);

//   const renderRightButton = useCallback(() => {
//     if (!rightIcon) {
//       return null;
//     }

//     return (
//       <NavButton onPress={onRightPress} style={styles.button}>
//         {rightIcon()}
//       </NavButton>
//     );
//   }, [onRightPress, rightIcon, colors]);

//   const renderTitle = useCallback(() => {
//     if (!title) {
//       return null;
//     }

//     return typeof title === 'string' ? (
//       <Text style={[styles.title, titleStyle]}>{title}</Text>
//     ) : (
//       title?.()
//     );
//   }, [title, colors]);

//   if (renderHeader) {
//     return <View style={[styles.container, style]}>{renderHeader()}</View>;
//   }

//   return (
//     <View style={[styles.container, style]}>
//       <View style={styles.leftButton}>{renderLeftButton()}</View>
//       <View style={styles.titleContainer}>{renderTitle()}</View>
//       <View style={styles.rightButton}>{renderRightButton()}</View>
//     </View>
//   );
// }

// ScreenHeader.propTypes = {
//   style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
//   title: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   onLeftPress: PropTypes.func,
//   onRightPress: PropTypes.func,
//   leftIcon: PropTypes.func,
//   rightIcon: PropTypes.func,
//   renderHeader: PropTypes.func,
//   canGoBack: PropTypes.bool,
// };

// ScreenHeader.defaultProps = {
//   style: {},
//   titleStyle: {},
//   title: null,
//   onLeftPress: null,
//   onRightPress: () => {},
//   leftIcon: null,
//   rightIcon: null,
//   renderHeader: null,
//   canGoBack: true,
// };

// export default React.memo(ScreenHeader);
