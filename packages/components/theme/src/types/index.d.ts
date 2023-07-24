import { type Token, type theme } from '../theme';

export type Theme = typeof theme;
export type Colour = Theme[Token.COLOUR];
export type Font = Theme[Token.TYPOGRAPHY];
export type Spacing = Theme[Token.SPACING];
export type FontSize = Font['size'];
export type FontWeight = Font['weight'];

export interface ThemeProps {
  theme?: Theme;
}
