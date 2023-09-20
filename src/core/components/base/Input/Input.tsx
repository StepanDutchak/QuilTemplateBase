import React, {useCallback, useEffect, useRef, useState} from 'react';
import {TextInput, Pressable, View, Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import TextError from '../../ui/TextError/TextError';
import {useThemedStyles} from '../../../hooks/useThemeStyles';
// import Footer from './ui/Footer';
import Styles from './styles';

const BLURED_FONT_SIZE = 16;
const FOCUSED_FONT_SIZE = 14;
const BLURED_POSITION = 20;
const FOCUSED_POSITION = 10;
const DURATION = 200;

interface InputProp {
  maxLength?: number;
  value: string;
  onChange: () => void;
  rightIcon?: () => React.ReactNode;
  leftIcon?: () => React.ReactNode;
  onRightIconPress?: () => void;
  onLeftIconPress?: () => void;
  isShowSymbolCounter?: boolean;
  containerStyle: object;
  disabled: boolean;
  error?: boolean;
  errorText?: string;
  placeholder: string;
  onFocus?: () => void;
  onBlur?: () => void;
  style: object;
  onEndEditing?: () => void;
  useFooter?: boolean;
  description?: string;
  onKeyPress?: () => void;
  renderFooter?: () => void;
  useActivePlaceholder?: boolean;
}

const defaultProps = {
  maxLength: null,
  style: {},
  containerStyle: {},
  onChange: null,
  rightIcon: null,
  onRightIconPress: null,
  onFocus: null,
  onBlur: null,
  disabled: false,
  useFooter: false,
  isShowSymbolCounter: false,
  error: false,
  errorText: null,
  placeholder: null,
  onEndEditing: () => {},
  leftIcon: null,
  onLeftIconPress: () => {},
  description: null,
  onKeyPress: null,
  useActivePlaceholder: true,
  renderFooter: () => {},
};

function Input({
  maxLength,
  value,
  onChange,
  rightIcon,
  leftIcon,
  onRightIconPress,
  onLeftIconPress,
  isShowSymbolCounter,
  containerStyle,
  disabled,
  error,
  errorText,
  placeholder,
  onFocus,
  onBlur,
  style,
  onEndEditing,
  description,
  onKeyPress,
  //   renderFooter,
  //   useFooter,
  useActivePlaceholder,
  ...props
}: InputProp) {
  const {styles, colors} = useThemedStyles(Styles);
  const inputRef = useRef(null);

  const [isFocused, setFocused] = useState(false);
  const position = useSharedValue(
    isFocused || value ? FOCUSED_POSITION : BLURED_POSITION,
  );
  const fontSize = useSharedValue(
    isFocused || value ? FOCUSED_FONT_SIZE : BLURED_FONT_SIZE,
  );

  useEffect(() => {
    const newPosition = isFocused || value ? FOCUSED_POSITION : BLURED_POSITION;
    const newFontSize =
      isFocused || value ? FOCUSED_FONT_SIZE : BLURED_FONT_SIZE;

    position.value = withTiming(newPosition, {duration: DURATION});
    fontSize.value = withTiming(newFontSize, {duration: DURATION});
  }, [fontSize, isFocused, position, value]);

  const animStyle = useAnimatedStyle(
    () => ({
      top: position.value,
      fontSize: fontSize.value,
    }),
    [position, fontSize],
  );

  const handleInputPress = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const renderRightIcon = useCallback(() => {
    return (
      <Pressable
        style={styles.rightIcon}
        onPress={onRightIconPress}
        hitSlop={15}>
        {rightIcon?.()}
      </Pressable>
    );
  }, [onRightIconPress, rightIcon, styles.rightIcon]);

  const renderLeftIcon = useCallback(() => {
    return (
      <Pressable style={styles.leftIcon} onPress={onLeftIconPress} hitSlop={15}>
        {leftIcon?.()}
      </Pressable>
    );
  }, [leftIcon, onLeftIconPress, styles.leftIcon]);

  const handleFocus = useCallback(() => {
    setFocused(true);

    if (onFocus) {
      onFocus();
    }
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    setFocused(false);

    if (onBlur) {
      onBlur();
    }
  }, [onBlur]);

  return (
    <>
      <Pressable
        onPress={handleInputPress}
        disabled={disabled}
        style={[
          styles.container,
          containerStyle,
          disabled ? styles.disabled : {},
          isFocused ? styles.active : {},
          error ? styles.error : {},
        ]}>
        <View style={styles.inputContainer}>
          {Boolean(leftIcon) && renderLeftIcon()}
          {useActivePlaceholder && (
            <Animated.Text
              style={[
                styles.placeholder,
                animStyle,
                isFocused ? styles.activePlaceholder : {},
                error ? styles.error : {},
              ]}>
              {placeholder}
              {isFocused && isShowSymbolCounter && maxLength
                ? ` ${value.length}/${maxLength}`
                : ''}
            </Animated.Text>
          )}
          <TextInput
            {...props}
            ref={inputRef}
            style={[styles.input, style]}
            maxLength={maxLength}
            value={value}
            placeholder={useActivePlaceholder ? '' : placeholder}
            editable={!disabled}
            onChangeText={onChange}
            onKeyPress={onKeyPress}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onEndEditing={onEndEditing}
            selectionColor={colors?.ACCENT}
            placeholderTextColor={colors?.TEXT_50}
          />
          {Boolean(rightIcon) && renderRightIcon()}
        </View>
        {/* {useFooter && <Footer onChange={onChange} />} */}
        {/* {renderFooter && renderFooter()} */}
      </Pressable>
      {description && !error && (
        <Text style={[styles.description, disabled && styles.disabled]}>
          {description}
        </Text>
      )}
      {error ? <TextError error={errorText} style={styles.errorText} /> : null}
    </>
  );
}

Input.defaultProps = defaultProps;

export default React.memo(Input);
