import * as Types from '../types';

const map: Types.ISelectorMap = {
  0: 'minHeight-0',
  '0.5': 'minHeight-0_5',
  1: 'minHeight-1',
  '1.5': 'minHeight-1_5',
  '1/2': 'minHeight-1__2',
  '1/3': 'minHeight-1__3',
  '1/4': 'minHeight-1__4',
  '1/5': 'minHeight-1__5',
  '1/6': 'minHeight-1__6',
  '1/12': 'minHeight-1__12',
  2: 'minHeight-2',
  '2.5': 'minHeight-2_5',
  '2/3': 'minHeight-2__3',
  '2/4': 'minHeight-2__4',
  '2/5': 'minHeight-2__5',
  '2/6': 'minHeight-2__6',
  '2/12': 'minHeight-2__12',
  3: 'minHeight-3',
  '3.5': 'minHeight-3_5',
  '3/4': 'minHeight-3__4',
  '3/5': 'minHeight-3__5',
  '3/6': 'minHeight-3__6',
  '3/12': 'minHeight-3__12',
  4: 'minHeight-4',
  '4/5': 'minHeight-4__5',
  '4/6': 'minHeight-4__6',
  '4/12': 'minHeight-4__12',
  5: 'minHeight-5',
  '5/6': 'minHeight-5__6',
  '5/12': 'minHeight-5__12',
  6: 'minHeight-6',
  '6/12': 'minHeight-6__12',
  7: 'minHeight-7',
  '7/12': 'minHeight-7__12',
  8: 'minHeight-8',
  '8/12': 'minHeight-8__12',
  9: 'minHeight-9',
  '9/12': 'minHeight-9__12',
  10: 'minHeight-10',
  '10/12': 'minHeight-10__12',
  11: 'minHeight-11',
  '11/12': 'minHeight-11__12',
  12: 'minHeight-12',
  14: 'minHeight-14',
  16: 'minHeight-16',
  20: 'minHeight-20',
  24: 'minHeight-24',
  28: 'minHeight-28',
  32: 'minHeight-32',
  36: 'minHeight-36',
  40: 'minHeight-40',
  44: 'minHeight-44',
  48: 'minHeight-48',
  '50vh': 'minHeight-50vh',
  52: 'minHeight-52',
  56: 'minHeight-56',
  60: 'minHeight-60',
  64: 'minHeight-64',
  72: 'minHeight-72',
  '75vh': 'minHeight-75vh',
  80: 'minHeight-80',
  96: 'minHeight-96',
  '100vh': 'minHeight-100vh',
  auto: 'minHeight-auto',
  full: 'minHeight-full',
};

const setMinHeight: Types.SelectorFunction = (type = '') => map[type];

export { setMinHeight };
