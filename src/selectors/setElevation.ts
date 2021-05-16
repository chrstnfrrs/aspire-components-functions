import * as Types from '../types';

const map: Types.ISelectorMap = {
  0: 'md-elevation-0',
  1: 'md-elevation-1',
  2: 'md-elevation-2',
  3: 'md-elevation-3',
  4: 'md-elevation-4',
  6: 'md-elevation-6',
  8: 'md-elevation-8',
  9: 'md-elevation-9',
  12: 'md-elevation-12',
  16: 'md-elevation-16',
  24: 'md-elevation-24',
};

const setElevation: Types.SelectorFunction = (type = '') => map[type];

export { setElevation };
