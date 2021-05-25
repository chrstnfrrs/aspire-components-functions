import * as Types from '../../../src/types';
import * as FontSizeSelector from '../../../src/selectors/setFontSize';

import * as Checkers from './checkers';

const map: Types.ISelectorMap = {
  '2xl': 'fontSize-2xl',
  '3xl': 'fontSize-3xl',
  '4xl': 'fontSize-4xl',
  '5xl': 'fontSize-5xl',
  '6xl': 'fontSize-6xl',
  '7xl': 'fontSize-7xl',
  '8xl': 'fontSize-8xl',
  '9xl': 'fontSize-9xl',
  base: 'fontSize-base',
  lg: 'fontSize-lg',
  sm: 'fontSize-sm',
  xl: 'fontSize-xl',
  xs: 'fontSize-xs',
};

const mapKeys = Object.keys(map);

describe('setFontSize', () => {
  Checkers.checkSelector(FontSizeSelector.setFontSize, 'setFontSize', 'fontSize', mapKeys);
});
