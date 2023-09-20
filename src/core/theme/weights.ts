import {Platform} from 'react-native';

const isIos = Platform.OS === 'ios';

export default {
  semi: isIos ? '600' : '700',
  medium: '500',
  regular: '400',
};
