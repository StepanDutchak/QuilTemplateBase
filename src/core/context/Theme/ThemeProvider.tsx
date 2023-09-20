import React, {useEffect, useState} from 'react';

import {
  fonts,
  weights,
  colors,
  metrics,
  constants,
  getShadows,
} from '../../theme';

import {ThemeContext} from './ThemeContext';

const defaultColorScheme = 'light';

interface ThemeProviderProp {
  children: React.ReactNode;
}

export function ThemeProvider({children}: ThemeProviderProp) {
  const [colorScheme, setColorScheme] = useState(defaultColorScheme);

  useEffect(() => {
    async function setSavedColorScheme() {
      setColorScheme(defaultColorScheme);
    }

    setSavedColorScheme();
  }, []);

  async function changeColorScheme(newScheme: string) {
    setColorScheme(newScheme);
    // await saveToAsyncStorage(asyncStorageKeys.THEME_STATE_KEY, newScheme);
  }

  const themedColors = colors[colorScheme as keyof object];
  const themedShadows = getShadows(themedColors);

  const context = {
    changeColorScheme,
    colorScheme,
    fonts,
    weights,
    metrics,
    constants,
    colors: themedColors,
    shadows: themedShadows,
    setTheme: setColorScheme,
  };

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
}
