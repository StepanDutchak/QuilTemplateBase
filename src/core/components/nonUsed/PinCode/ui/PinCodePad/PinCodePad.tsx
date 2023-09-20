// import React, {useMemo} from 'react';
// import {View} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';

// import {NumPadProp} from '../../../../../../../@types/components';

// import {SCREEN_TYPES} from '../../../../../constants/pinCode';

// import {useTheme} from '../../../../../hooks';

// import FaceIDIcon from '../../../../../theme2/assets/icons/FaceIDIcon';

// import NumPad from '../../../NumPad/NumPad';

// const PinCodePad = ({
//   onValidateBiometric,
//   isAvailableBiometric,
//   isEnableBiometric,
//   screenType,
//   setError,
//   onChange,
//   value,
// }: NumPadProp) => {
//   const {Colors} = useTheme();

//   const renderBioButton = useMemo(() => {
//     return isAvailableBiometric &&
//       isEnableBiometric &&
//       screenType === SCREEN_TYPES.AUTH ? (
//       <TouchableOpacity onPress={onValidateBiometric}>
//         <FaceIDIcon color={Colors.numPadDigit} />
//       </TouchableOpacity>
//     ) : (
//       <View />
//     );
//   }, [
//     onValidateBiometric,
//     isAvailableBiometric,
//     Colors,
//     screenType,
//     isEnableBiometric,
//   ]);

//   return (
//     <NumPad
//       renderExtraButton={renderBioButton}
//       onChange={onChange}
//       setError={setError}
//       value={value}
//     />
//   );
// };

// export default React.memo(PinCodePad);

export {};
