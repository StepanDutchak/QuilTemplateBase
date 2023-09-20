// import React, {useCallback, useState} from 'react';
// import {View} from 'react-native';

// import {PinCodeProp} from '../../../../../@types/components';

// import PinCodeContent from './ui/PinCodeContent/PinContent';
// import PinCodePad from './ui/PinCodePad/PinCodePad';

// import {useThemedStyles} from '../../../hooks/useThemeStyles';

// import Styles from './styles';

// const MAX_LENGTH = 4;

// const PinCode = ({
//   error,
//   setError,
//   screenType,
//   onPinSubmit,
//   biometricType,
//   isEnableBiometric,
//   handleValidateBiometric,
//   updateAvailableBiometric,
//   isAvailableBiometric,
// }: PinCodeProp) => {
//   const {styles} = useThemedStyles(Styles);

//   const [pin, setPin] = useState<string[] | string>('');

//   const handleChangePin = useCallback(
//     (pinValue: string | string[]) => {
//       if (pinValue.length === MAX_LENGTH) {
//         onPinSubmit?.(pinValue, setPin.bind(''));
//       }
//       setPin(pinValue);
//     },
//     [onPinSubmit],
//   );

//   return (
//     <View style={styles.container}>
//       <PinCodeContent
//         updateAvailableBiometric={updateAvailableBiometric}
//         isAvailableBiometric={isAvailableBiometric}
//         isEnableBiometric={isEnableBiometric}
//         biometricType={biometricType}
//         screenType={screenType}
//         error={error}
//         pin={pin}
//       />
//       <PinCodePad
//         isAvailableBiometric={isAvailableBiometric}
//         onValidateBiometric={handleValidateBiometric}
//         isEnableBiometric={isEnableBiometric}
//         screenType={screenType}
//         onChange={handleChangePin}
//         setError={setError}
//         value={pin}
//       />
//     </View>
//   );
// };

// export default React.memo(PinCode);

export {};
