# Finando | Foundation | Components | Theme

Common theme module that provides global styles and design tokens.

## Installation

```bash
npm i @finando/theme
```

## Dependencies

- `react`
- `styled-components`

## Usage

### Basic usage

In order to add global styles and expose design tokens to the application, wrap the application in a theme provider component exposed by the library.

```tsx
import React, { FC } from 'react';

import ThemeProvider from '@finando/theme';

export default function App() {
  return (
    <ThemeProvider>
      <div>App</div>
    </ThemeProvider>
  );
}
```

### Design token selectors

Design tokens can be accessed through various selectors exposed by the library.

```ts
import styled from 'styled-components';

import { theme, Colour } from '@finando/theme';

const Box = styled.div`
  font-family: ${theme.fontFamily()};
  font-size: ${theme.fontSize('FS16')};
  font-weight: ${theme.fontWeight('FW500')};
  color: ${theme.colour(Colour.NEUTRAL, 'N60')};
`;

export default { Box }
```
