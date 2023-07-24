import { type PropsWithChildren } from 'react';
import { ThemeProvider as BaseThemeProvider } from 'styled-components';

import GlobalStyles from '../styles';
import { theme } from '../theme';

export default function ThemeProvider({ children }: PropsWithChildren<never>) {
  return (
    <BaseThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </BaseThemeProvider>
  );
}
