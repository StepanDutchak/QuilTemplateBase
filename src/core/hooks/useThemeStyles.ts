import {useTheme} from '../context/Theme';

interface useThemedStylesProp {
  colors: {
    [key: string]: string;
  };
  constants: string;
}

export function useThemedStyles(styles: any) {
  const theme: Partial<useThemedStylesProp> = useTheme();

  return {
    styles: styles ? styles(theme) : {},
    colors: theme.colors,
    constants: theme.constants,
  };
}
