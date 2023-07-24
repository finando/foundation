import { createGlobalStyle } from 'styled-components';

import FontStyles from './fonts';
import NormaliseStyles from './normalise';
import ResetStyles from './reset';

export default createGlobalStyle`
  ${FontStyles}
  ${ResetStyles}
  ${NormaliseStyles}
`;
