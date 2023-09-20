// import metrics from './metrics';

// const MIN_SUPPORTED_SCREEN_WIDTH = 375;

function getFontSize(font: number) {
  return font;
  // return metrics.screenWidth * (font / MIN_SUPPORTED_SCREEN_WIDTH);
}

const lightFont = {
  fontFamily: 'Quicksand-Light',
  fontWeight: '300',
};

const regularFont = {
  fontFamily: 'Quicksand-Regular',
  fontWeight: '400',
};

const mediumFont = {
  fontFamily: 'Quicksand-Medium',
  fontWeight: '500',
};

const boldFont = {
  fontFamily: 'Quicksand-Bold',
  fontWeight: '600',
};

const semiBoldFont = {
  fontFamily: 'Quicksand-SemiBold',
  fontWeight: '700',
};

export default {
  light: lightFont,
  bold: boldFont,
  semiBold: semiBoldFont,
  medium: mediumFont,
  regular: regularFont,
  font6: getFontSize(6),
  font8: getFontSize(8),
  font10: getFontSize(10),
  font12: getFontSize(12),
  font13: getFontSize(13),
  font14: getFontSize(14),
  font16: getFontSize(16),
  font18: getFontSize(18),
  font20: getFontSize(20),
  font22: getFontSize(22),
  font24: getFontSize(24),
  font26: getFontSize(26),
  font28: getFontSize(28),
  font30: getFontSize(30),
  font32: getFontSize(32),
  font36: getFontSize(36),
  font38: getFontSize(38),
  font40: getFontSize(40),
  font48: getFontSize(48),
};
