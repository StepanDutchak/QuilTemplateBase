// import React, {useEffect, useRef} from 'react';
// import {Animated} from 'react-native';

// import {useThemedStyles} from '../../../hooks/useThemeStyles';
// import Styles from './styles';

// const DURATION = 350;

// interface ErrorTextProp {
//   error: string;
//   textPosition: 'left' | 'right' | 'center' | 'justify';
// }

// const TextError = ({error, textPosition}: ErrorTextProp) => {
//   const {styles} = useThemedStyles(Styles);

//   const errorOpacity = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     if (error) {
//       Animated.timing(errorOpacity, {
//         toValue: 1,
//         duration: DURATION,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       Animated.timing(errorOpacity, {
//         toValue: 0,
//         duration: DURATION,
//         useNativeDriver: true,
//       }).start();
//     }
//   }, [error, errorOpacity]);

//   const animatedErrorStyles = {
//     opacity: errorOpacity,
//   };

//   return (
//     <Animated.Text
//       numberOfLines={2}
//       style={[
//         animatedErrorStyles,
//         styles.errorText,
//         {textAlign: textPosition},
//       ]}>
//       {error}
//     </Animated.Text>
//   );
// };

// export default React.memo(TextError);

export {};
