// import React, {useState} from 'react';
// import {View, Text} from 'react-native';

// import {SCREEN_TYPES} from '../../../../../constants/pinCode';
// import {PinContentProp} from '../../../../../../../@types/components';

// import {useTheme} from '../../../../../hooks';
// import OTPVerification from '../../../AppAuthInput/AppAuthInput';

// import styles from './styles';

// const CONTENT_TYPES = {
//   [SCREEN_TYPES.CREATE]: {
//     title: 'LOGO',
//     description: 'Please set up a PIN ',
//     biometric: 'Using',
//   },
//   [SCREEN_TYPES.CONFIRM]: {
//     title: 'LOGO',
//     description: 'Please confirm the PIN',
//   },
//   [SCREEN_TYPES.AUTH]: {
//     title: 'LOGO',
//     description: 'Please enter PIN',
//   },
// };
// const inputBoxesCount = 4;

// const PinContent = ({pin, screenType, error}: PinContentProp) => {
//   const {Fonts, Colors} = useTheme();

//   const [code, setCode] = useState<string[]>(
//     new Array(inputBoxesCount).fill(pin),
//   );

//   const transformCode = (pinCode: string | string[]): string[] => {
//     return Array.isArray(pinCode) ? pinCode : Array.from(pinCode);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.topContent}>
//         <Text style={[Fonts.h1Title, {color: Colors.lightBorder}]}>
//           {CONTENT_TYPES[screenType].title}
//         </Text>
//         <Text style={[Fonts.textRegular22, styles.subTitle]}>
//           {' '}
//           {CONTENT_TYPES[screenType].description}
//         </Text>
//       </View>
//       <View style={styles.bottomContainer}>
//         <OTPVerification
//           inputBoxesCount={inputBoxesCount}
//           code={code && transformCode(pin)}
//           setCode={setCode}
//           wrongCode={error}
//           disableNumPad={true}
//           isSecure={true}
//         />
//       </View>
//     </View>
//   );
// };

// export default React.memo(PinContent);
export {};
