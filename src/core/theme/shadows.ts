export function getShadows(colors) {
  const block = {
    shadowColor: colors.SHADOW_BLOCK,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 2,
  };

  const toast = {
    shadowColor: colors.SHADOW_BLOCK,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 4,
  };

  const icon = {
    shadowColor: colors.SHADOW_NAV_ICON,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 2,
  };

  const tabSwitcher = {
    shadowColor: colors.SHADOW_BLOCK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  };

  const tabSwitcherInner = {
    shadowColor: colors.TAB_SWITCHER_INNER_SHADOW,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
  };

  const tabBar = {
    shadowColor: colors.SHADOW_NAV_TAB,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  };

  const button = {
    shadowColor: colors.ACCENT,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  };

  const footer = {
    shadowColor: colors.SHADOW_NAV_TAB,
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  };

  const switcherThumb = {
    shadowColor: colors.SWITCHER_SHADOW,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
  };

  return {
    block,
    toast,
    icon,
    tabSwitcher,
    tabSwitcherInner,
    button,
    tabBar,
    footer,
    switcherThumb,
  };
}
