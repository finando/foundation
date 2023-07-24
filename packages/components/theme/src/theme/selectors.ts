import {
  type ThemeProps,
  type Colour,
  type FontSize,
  type FontWeight,
  type Spacing,
  type Theme,
} from '../types';

import { Token } from './enums';
import { theme as defaultTheme } from './theme';
import { valueToHex } from './utils';

function getTheme({ theme = defaultTheme }: ThemeProps): Theme {
  return theme;
}

function getColour(props: ThemeProps) {
  return getTheme(props)[Token.COLOUR];
}

function getFont(props: ThemeProps) {
  return getTheme(props)[Token.TYPOGRAPHY];
}

function getSpacing(props: ThemeProps) {
  return getTheme(props)[Token.SPACING];
}

export function colour<C extends keyof Colour>(
  value: C,
  variant: keyof Colour[C],
  opacity?: number,
) {
  return function selector(props: ThemeProps): string {
    return `${String(getColour(props)[value][variant])}${valueToHex(opacity)}`;
  };
}

export function fontFamily() {
  return function selector(props: ThemeProps): string {
    return getFont(props).family;
  };
}

export function fontSize(size: keyof FontSize) {
  return function selector(props: ThemeProps): string {
    return `${getFont(props).size[size]}px`;
  };
}

export function fontWeight(weight: keyof FontWeight) {
  return function selector(props: ThemeProps): number {
    return getFont(props).weight[weight];
  };
}

export function spacing(value: keyof Spacing) {
  return function selector(props: ThemeProps): string {
    return `${getSpacing(props)[value]}px`;
  };
}
