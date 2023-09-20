import React, {useCallback, useMemo} from 'react';
import {View, KeyboardAvoidingView, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {useThemedStyles} from '../../../hooks/useThemeStyles';
// import ScreenHeader from '../Headers/ScreenHeader';

import Styles from './styles';
import Logo from '../Logo/Logo';

const DEFAULT_INSET = 20; // for screens without notch
// const TAB_BAR_HEIGHT = 80;
const isIos = Platform.OS === 'ios';

interface ScreenWrapperProp {
  children: React.ReactNode;
  useTopInset?: boolean;
  useBottomInset?: boolean;
  useScroll?: boolean;
  useHeader?: boolean;
  useTransparentHeader?: boolean;
  useRefreshControl?: boolean;
  useDragger?: boolean;
  useTabBarPusher?: boolean;
  onRefresh?: () => void;
  tabBarOptions?: object;
  useTabBar?: boolean;
  renderFooter?: () => void;
  footerContainerStyle?: object;
  style?: object;
  useAvoidingView?: boolean;
  renderOverlay?: () => void;
  keyboardVerticalOffset?: number;
}

const defaultProps = {
  useTopInset: false,
  useTransparentHeader: false,
  onRefresh: () => {},
  useBottomInset: true,
  useScroll: false,
  useHeader: true,
  useDragger: false,
  useAvoidingView: false,
  useTabBarPusher: false,
  tabBarOptions: {},
  style: {},
  keyboardVerticalOffset: 0,
  useRefreshControl: false,
  renderFooter: null,
  footerContainerStyle: {},
  renderOverlay: null,
  useTabBar: false,
  useHPadding: true,
};
const ScreenWrapper = ({
  children,
  useBottomInset,
  useScroll,
  useDragger,
  keyboardVerticalOffset, // need to add keyboardVerticalOffset to the height of done button, if we use done btn
  style,
  useAvoidingView,
  useHPadding,
}: // useTransparentHeader,
// useTabBarPusher,
// useTopInset,
// onRefresh,
// useHeader,
// tabBarOptions,
// useTabBar,
// renderFooter,
// footerContainerStyle,
// useRefreshControl,
// renderOverlay,
ScreenWrapperProp) => {
  const {styles} = useThemedStyles(Styles);
  // const [footerHeight, setFooterHeight] = useState(0);
  // const [headerHeight, setHeaderHeight] = useState(0);

  const insets = useSafeAreaInsets();

  const topInset = insets.top || DEFAULT_INSET;
  const bottomInset = insets.bottom || DEFAULT_INSET;

  const topInsetStyle = useMemo(() => {
    return {paddingTop: topInset};
  }, [topInset]);

  const bottomInsetStyle = useMemo(() => {
    return {marginBottom: useBottomInset ? bottomInset : 0};
  }, [bottomInset, useBottomInset]);

  // const footerPusherStyles = {height: footerHeight};
  // const tabBarPusherStyles = {height: TAB_BAR_HEIGHT};

  // const transparentHeaderStyles = {
  //   position: 'absolute',
  //   top: 0,
  //   paddingTop: insets.top,
  //   left: 0,
  //   right: 0,
  //   zIndex: 100,
  // };

  // const handleLayoutReady = useCallback(e => {
  //   setFooterHeight(e.nativeEvent.layout.height);
  // });

  // const handleHeaderLayoutReady = useCallback(e => {
  //   setHeaderHeight(e.nativeEvent.layout.height);
  // });

  const renderView = useCallback(() => {
    return (
      <View
        style={[
          styles.container,
          bottomInsetStyle,
          topInsetStyle,
          style,
          useHPadding && styles.containerHPadding,
        ]}>
        <Logo />
        {children}
        {/* {renderFooter && <View style={footerPusherStyles} />}
      {useTabBarPusher && <View style={tabBarPusherStyles} />} */}
      </View>
    );
  }, [
    bottomInsetStyle,
    children,
    style,
    styles.container,
    styles.containerHPadding,
    topInsetStyle,
    useHPadding,
  ]);

  const renderScrollView = useCallback(
    () => (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={'handled'}>
        {renderView()}
      </KeyboardAwareScrollView>
    ),
    [renderView],
  );

  return (
    <KeyboardAvoidingView
      enabled={useAvoidingView}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardContainer}
      keyboardVerticalOffset={keyboardVerticalOffset}>
      {isIos ? useDragger && <View style={styles.dragger} /> : null}
      {/* {useHeader ? (
          <ScreenHeader
            style={[
              useTransparentHeader && transparentHeaderStyles,
              topInsetStyle,
            ]}
            // onLayout={handleHeaderLayoutReady}
            {...props}
          />
        ) : null} */}
      {useScroll ? renderScrollView() : renderView()}
      {/* {renderFooter ? (
          <Footer
            onLayout={handleLayoutReady}
            style={[{paddingBottom: bottomInset}, footerContainerStyle]}
            {...props}>
            {renderFooter()}
          </Footer>
        ) : null} */}
      {/* {useTabBar ? <TabBar {...tabBarOptions} /> : null} */}
    </KeyboardAvoidingView>
  );
};

ScreenWrapper.defaultProps = defaultProps;

export default React.memo(ScreenWrapper);
