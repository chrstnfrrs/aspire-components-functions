import * as Types from '../types';

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

const setFontSize: Types.SelectorFunction = (type = '') => map[type];

export { setFontSize };
