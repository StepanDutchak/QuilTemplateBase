// import React, {useMemo} from 'react';
// import {View} from 'react-native';
// import {useTheme} from '../../../../../hooks';

// import styles from './styles';

// interface PinDot {
//   isActive: boolean;
// }

// const PinDot = ({isActive}: PinDot) => {
//   const {Common} = useTheme();

//   const conditionStyle = useMemo(() => {
//     if (isActive) {
//       return Common.numPadDot;
//     }

//     return Common.numPadDefaultDot;
//   }, [Common, isActive]);

//   return <View style={[styles.defaultDot, conditionStyle]} />;
// };

// export default React.memo(PinDot);

export {};
