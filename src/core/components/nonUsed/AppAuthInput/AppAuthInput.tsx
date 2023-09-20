// import React, {useCallback, useEffect, useRef, useState} from 'react';
// import {View, TextInput, StyleProp, ViewStyle} from 'react-native';

// import TextError from '../../base/TextError/TextError';
// import {getLastNonEmptyStringIndex} from '../../../utils/arrayTransformers';

// import Styles from './styles';
// import {useThemedStyles} from '../../../hooks/useThemeStyles';

// type OTPVerificationProps = {
//   inputBoxesCount: number;
//   code: string[];
//   setCode: React.Dispatch<React.SetStateAction<string[]>>;
//   wrongCode: string | null | undefined;
//   isSecure: boolean;
//   disableNumPad: boolean;
// };

// const range = (start: number, end: number) => {
//   return [...Array(end - start + 1).keys()];
// };

// const OTPVerification = ({
//   inputBoxesCount,
//   code,
//   setCode,
//   wrongCode,
//   isSecure,
//   disableNumPad,
// }: OTPVerificationProps) => {
//   const {styles} = useThemedStyles(Styles);

//   // const verificationRef = useRef(null);
//   const inputRefs = useRef<TextInput[]>([]);
//   const [focusedIndex, setFocusedIndex] = useState(0);

//   const inputPrefix = 'verification-code-';

//   const getInputRef = useCallback((index: number) => {
//     return inputRefs.current[index];
//   }, []);

//   const textInputStyle = useCallback(
//     (i: number) => {
//       let newStyles: StyleProp<ViewStyle>[] = [styles.OtpInput];

//       if (focusedIndex === i) {
//         newStyles.push(styles.OtpSelectedInput);
//       }
//       if (wrongCode) {
//         newStyles.push(styles.inputError);
//       }

//       return newStyles;
//     },
//     [focusedIndex, wrongCode, styles],
//   );

//   const handleInput = useCallback(
//     (index: number, value: string) => {
//       const inputElement = getInputRef(index + 1);

//       if (index !== inputBoxesCount - 1 && value) {
//         inputElement?.focus();
//         setFocusedIndex(index + 1);
//       } else if (index !== 0 && !value) {
//         const previousInputElement = getInputRef(index - 1);
//         previousInputElement?.focus();
//         setFocusedIndex(index - 1);
//       }

//       setCode(prevCode =>
//         prevCode.map((codeValue, id) => (index === id ? value : codeValue)),
//       );
//     },
//     [inputBoxesCount, setCode, getInputRef, setFocusedIndex],
//   );

//   useEffect(() => {
//     isSecure && setFocusedIndex(getLastNonEmptyStringIndex(code) + 1);
//     inputRefs.current.forEach((inputRef, index) => {
//       const securedArr = code.map(() => '*');
//       const text = isSecure ? securedArr[index] || '' : code[index] || '';
//       inputRef?.setNativeProps({text});
//     });
//   }, [code, inputRefs, isSecure]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputsContainer}>
//         {range(0, inputBoxesCount - 1).map(i => (
//           <TextInput
//             style={textInputStyle(i)}
//             key={`${inputPrefix}${i}`}
//             id={`${inputPrefix}${i}`}
//             keyboardType="numeric"
//             maxLength={1}
//             ref={(el: TextInput) => (inputRefs.current[i] = el)}
//             onTextInput={el => handleInput(i, el.nativeEvent.text)}
//             showSoftInputOnFocus={!disableNumPad}
//             caretHidden={disableNumPad}
//             secureTextEntry={false}
//           />
//         ))}
//       </View>
//       <View style={styles.bottomContent}>
//         {wrongCode && wrongCode.length > 0 && (
//           <TextError error={wrongCode} textPosition="center" />
//         )}
//       </View>
//     </View>
//   );
// };

// export default OTPVerification;
export {};
