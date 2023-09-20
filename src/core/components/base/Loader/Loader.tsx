// import React, {useEffect, useRef} from 'react';
// import {Animated, Easing} from 'react-native';

// import LoaderIcon from '../../../theme2/assets/icons/loader/LoaderIcon';
// import {useTheme} from '../../../../src/hooks';
// import {directionMovementLoader} from '../../../../src/constants/uiComponents';

// type LoaderTypeProp = {
//   default: {size: 45; strokeWidth: 6};
// };

// const LOADERS = {
//   small: {size: 18, strokeWidth: 3},
//   medium: {size: 35, strokeWidth: 4},
//   default: {size: 45, strokeWidth: 6},
//   large: {size: 100, strokeWidth: 12},
// };

// interface LoaderProp {
//   size?: string;
//   style?: {};
//   color?: string;
//   loaderIcon?: React.ReactNode;
//   directionMovement?: string;
// }
// const defaultProps = {
//   size: 'default',
//   style: {},
//   color: '',
//   loaderIcon: null,
//   directionMovement: directionMovementLoader.RIGHT,
// };

// const Loader = ({
//   size,
//   style,
//   color,
//   loaderIcon,
//   directionMovement,
// }: LoaderProp) => {
//   const {Colors, Layout} = useTheme();

//   const rotateAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotateAnim, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       }),
//     ).start();
//   }, [rotateAnim]);

//   const sizeProps = LOADERS[size as keyof LoaderTypeProp] || LOADERS.default;

//   const interpolateRotatingRight = rotateAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['0deg', '360deg'],
//   });

//   const interpolateRotatingLeft = rotateAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['360deg', '0deg'],
//   });

//   const transformStyles = {
//     transform: [
//       {
//         rotate:
//           directionMovement === directionMovementLoader.RIGHT
//             ? interpolateRotatingRight
//             : interpolateRotatingLeft,
//       },
//     ],
//   };

//   return (
//     <Animated.View style={[Layout.center, style, transformStyles]}>
//       {loaderIcon ? (
//         loaderIcon
//       ) : (
//         <LoaderIcon
//           color={color || Colors.productPrimary}
//           sizeProps={sizeProps}
//         />
//       )}
//     </Animated.View>
//   );
// };
// Loader.defaultProps = defaultProps;

// export default React.memo(Loader);
