import React, {useCallback, useRef} from 'react';
import {Pressable, Animated, ActivityIndicator} from 'react-native';
import {AnimatedPressProp} from '../../../../../@types/components';
import {useThemedStyles} from '../../../hooks/useThemeStyles';
import Styles from './styles';

const PRESS_DURATION = 100;
const DEFAULT_SCALE = 0.98;

const AnimatedPress = ({
  children,
  style,
  containerStyle,
  disabled,
  isLoading,
  onLayout,
  onPress,
}: AnimatedPressProp) => {
  const {styles} = useThemedStyles(Styles);

  const animScale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.timing(animScale, {
      useNativeDriver: false,
      toValue: DEFAULT_SCALE,
      duration: PRESS_DURATION,
    }).start();
  }, [animScale]);

  const pressOut = useCallback(() => {
    Animated.timing(animScale, {
      useNativeDriver: false,
      toValue: 1,
      duration: PRESS_DURATION,
    }).start();
  }, [animScale]);

  return (
    <Pressable
      disabled={disabled || isLoading}
      style={containerStyle}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}>
      <Animated.View
        onLayout={onLayout}
        style={[
          style,
          isLoading && styles.loadingProcess,
          {transform: [{scale: animScale}]},
        ]}>
        {isLoading ? <ActivityIndicator /> : children}
      </Animated.View>
    </Pressable>
  );
};

export default React.memo(AnimatedPress);
