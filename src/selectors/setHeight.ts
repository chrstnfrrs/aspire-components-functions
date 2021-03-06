import * as Types from '../types';

const map: Types.ISelectorMap = {
  0: 'height-0',
  '0.5': 'height-0_5',
  1: 'height-1',
  '1.5': 'height-1_5',
  '1/2': 'height-1__2',
  '1/3': 'height-1__3',
  '1/4': 'height-1__4',
  '1/5': 'height-1__5',
  '1/6': 'height-1__6',
  '1/12': 'height-1__12',
  2: 'height-2',
  '2.5': 'height-2_5',
  '2/3': 'height-2__3',
  '2/4': 'height-2__4',
  '2/5': 'height-2__5',
  '2/6': 'height-2__6',
  '2/12': 'height-2__12',
  3: 'height-3',
  '3.5': 'height-3_5',
  '3/4': 'height-3__4',
  '3/5': 'height-3__5',
  '3/6': 'height-3__6',
  '3/12': 'height-3__12',
  4: 'height-4',
  '4/5': 'height-4__5',
  '4/6': 'height-4__6',
  '4/12': 'height-4__12',
  5: 'height-5',
  '5/6': 'height-5__6',
  '5/12': 'height-5__12',
  6: 'height-6',
  '6/12': 'height-6__12',
  7: 'height-7',
  '7/12': 'height-7__12',
  8: 'height-8',
  '8/12': 'height-8__12',
  9: 'height-9',
  '9/12': 'height-9__12',
  10: 'height-10',
  '10/12': 'height-10__12',
  11: 'height-11',
  '11/12': 'height-11__12',
  12: 'height-12',
  14: 'height-14',
  16: 'height-16',
  20: 'height-20',
  24: 'height-24',
  28: 'height-28',
  32: 'height-32',
  36: 'height-36',
  40: 'height-40',
  44: 'height-44',
  48: 'height-48',
  '50vh': 'height-50vh',
  52: 'height-52',
  56: 'height-56',
  60: 'height-60',
  64: 'height-64',
  72: 'height-72',
  '75vh': 'height-75vh',
  80: 'height-80',
  96: 'height-96',
  '100vh': 'height-100vh',
  auto: 'height-auto',
  full: 'height-full',
};

const setHeight: Types.SelectorFunction = (type = '') => map[type];

export { setHeight };
