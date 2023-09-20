import React from 'react';
import {View} from 'react-native';
import LogoIcon from '../../../assets/icons/LogoIcon';
import {useThemedStyles} from '../../../hooks/useThemeStyles';
import Styles from './styles';
interface LogoProp {}
const defaultProps = {};

const Logo = ({}: LogoProp) => {
  const {styles} = useThemedStyles(Styles);

  return (
    <View style={styles.container}>
      <LogoIcon />
    </View>
  );
};
Logo.defaultProps = defaultProps;

export default React.memo(Logo);
