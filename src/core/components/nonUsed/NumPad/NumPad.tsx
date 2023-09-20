// import React, {useCallback, useMemo} from 'react';
// import {View, Text, TouchableOpacity} from 'react-native';

// import {NumPadProp} from '../../../../../@types/components';
// import {MAX_LENGTH} from '../../../constants/pinCode';

// import Styles from './styles';
// import BackSpaceButton from '../../../theme2/assets/icons/BackSpaceIcon';
// import {useThemedStyles} from '../../../hooks/useThemeStyles';

// const DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
// const ZERO = '0';

// const NumPad = ({onChange, value, setError, renderExtraButton}: NumPadProp) => {
//   const {styles} = useThemedStyles(Styles);

//   const handlerAddSymbol = useCallback(
//     (val: string) => {
//       if (value?.length !== MAX_LENGTH) {
//         onChange?.(value + val);
//       }
//     },
//     [onChange, value],
//   );

//   const handlerRemoveSymbol = useCallback(() => {
//     setError?.('');
//     onChange?.(value?.slice?.(0, -1));
//   }, [onChange, setError, value]);

//   const renderButton = useCallback(
//     (digit: string) => {
//       return (
//         <View key={digit} style={[styles.buttonContainer]}>
//           <TouchableOpacity
//             style={styles.numPadButton}
//             onPress={() => handlerAddSymbol(digit)}>
//             <Text style={styles.numPadDigit}>{digit ?? ''}</Text>
//           </TouchableOpacity>
//         </View>
//       );
//     },
//     [handlerAddSymbol, styles],
//   );

//   const renderDeleteButton = useMemo(() => {
//     return (
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           style={styles.numPadBackSpaceBtn}
//           onPress={handlerRemoveSymbol}>
//           <BackSpaceButton color={'fffff'} />
//         </TouchableOpacity>
//       </View>
//     );
//   }, [handlerRemoveSymbol, styles]);

//   const renderCustomButton = useMemo(() => {
//     return <View style={styles.buttonContainer}>{renderExtraButton}</View>;
//   }, [renderExtraButton, styles]);

//   return (
//     <View style={styles.container}>
//       {DIGITS.map(digit => renderButton(digit))}
//       {renderCustomButton}
//       {renderButton(ZERO)}
//       {renderDeleteButton}
//     </View>
//   );
// };

// export default React.memo(NumPad);

export {};
