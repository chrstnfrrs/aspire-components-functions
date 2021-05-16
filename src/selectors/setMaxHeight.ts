import * as Types from '../types';

const map: Types.ISelectorMap = {
  0: 'maxHeight-0',
  '0.5': 'maxHeight-0_5',
  1: 'maxHeight-1',
  '1.5': 'maxHeight-1_5',
  '1/2': 'maxHeight-1__2',
  '1/3': 'maxHeight-1__3',
  '1/4': 'maxHeight-1__4',
  '1/5': 'maxHeight-1__5',
  '1/6': 'maxHeight-1__6',
  '1/12': 'maxHeight-1__12',
  2: 'maxHeight-2',
  '2.5': 'maxHeight-2_5',
  '2/3': 'maxHeight-2__3',
  '2/4': 'maxHeight-2__4',
  '2/5': 'maxHeight-2__5',
  '2/6': 'maxHeight-2__6',
  '2/12': 'maxHeight-2__12',
  3: 'maxHeight-3',
  '3.5': 'maxHeight-3_5',
  '3/4': 'maxHeight-3__4',
  '3/5': 'maxHeight-3__5',
  '3/6': 'maxHeight-3__6',
  '3/12': 'maxHeight-3__12',
  4: 'maxHeight-4',
  '4/5': 'maxHeight-4__5',
  '4/6': 'maxHeight-4__6',
  '4/12': 'maxHeight-4__12',
  5: 'maxHeight-5',
  '5/6': 'maxHeight-5__6',
  '5/12': 'maxHeight-5__12',
  6: 'maxHeight-6',
  '6/12': 'maxHeight-6__12',
  7: 'maxHeight-7',
  '7/12': 'maxHeight-7__12',
  8: 'maxHeight-8',
  '8/12': 'maxHeight-8__12',
  9: 'maxHeight-9',
  '9/12': 'maxHeight-9__12',
  10: 'maxHeight-10',
  '10/12': 'maxHeight-10__12',
  11: 'maxHeight-11',
  '11/12': 'maxHeight-11__12',
  12: 'maxHeight-12',
  14: 'maxHeight-14',
  16: 'maxHeight-16',
  20: 'maxHeight-20',
  24: 'maxHeight-24',
  28: 'maxHeight-28',
  32: 'maxHeight-32',
  36: 'maxHeight-36',
  40: 'maxHeight-40',
  44: 'maxHeight-44',
  48: 'maxHeight-48',
  '50vh': 'maxHeight-50vh',
  52: 'maxHeight-52',
  56: 'maxHeight-56',
  60: 'maxHeight-60',
  64: 'maxHeight-64',
  72: 'maxHeight-72',
  '75vh': 'maxHeight-75vh',
  80: 'maxHeight-80',
  96: 'maxHeight-96',
  '100vh': 'maxHeight-100vh',
  auto: 'maxHeight-auto',
  full: 'maxHeight-full',
};

const setMaxHeight: Types.SelectorFunction = (type = '') => map[type];

export { setMaxHeight };
