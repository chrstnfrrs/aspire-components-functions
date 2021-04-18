import { FactoryMap } from '../../../src/types';
import { setMinWidth } from '../../../src/factories/setMinWidth';

import { checkFactory } from './checkFactory';

const map: FactoryMap = {
  0: 'minWidth-0',
  '0.5': 'minWidth-0_5',
  1: 'minWidth-1',
  '1.5': 'minWidth-1_5',
  '1/2': 'minWidth-1__2',
  '1/3': 'minWidth-1__3',
  '1/4': 'minWidth-1__4',
  '1/5': 'minWidth-1__5',
  '1/6': 'minWidth-1__6',
  '1/12': 'minWidth-1__12',
  2: 'minWidth-2',
  '2.5': 'minWidth-2_5',
  '2/3': 'minWidth-2__3',
  '2/4': 'minWidth-2__4',
  '2/5': 'minWidth-2__5',
  '2/6': 'minWidth-2__6',
  '2/12': 'minWidth-2__12',
  3: 'minWidth-3',
  '3.5': 'minWidth-3_5',
  '3/4': 'minWidth-3__4',
  '3/5': 'minWidth-3__5',
  '3/6': 'minWidth-3__6',
  '3/12': 'minWidth-3__12',
  4: 'minWidth-4',
  '4/5': 'minWidth-4__5',
  '4/6': 'minWidth-4__6',
  '4/12': 'minWidth-4__12',
  5: 'minWidth-5',
  '5/6': 'minWidth-5__6',
  '5/12': 'minWidth-5__12',
  6: 'minWidth-6',
  '6/12': 'minWidth-6__12',
  7: 'minWidth-7',
  '7/12': 'minWidth-7__12',
  8: 'minWidth-8',
  '8/12': 'minWidth-8__12',
  9: 'minWidth-9',
  '9/12': 'minWidth-9__12',
  10: 'minWidth-10',
  '10/12': 'minWidth-10__12',
  11: 'minWidth-11',
  '11/12': 'minWidth-11__12',
  12: 'minWidth-12',
  14: 'minWidth-14',
  16: 'minWidth-16',
  20: 'minWidth-20',
  24: 'minWidth-24',
  28: 'minWidth-28',
  32: 'minWidth-32',
  36: 'minWidth-36',
  40: 'minWidth-40',
  44: 'minWidth-44',
  48: 'minWidth-48',
  '50vw': 'minWidth-50vw',
  52: 'minWidth-52',
  56: 'minWidth-56',
  60: 'minWidth-60',
  64: 'minWidth-64',
  72: 'minWidth-72',
  '75vw': 'minWidth-75vw',
  80: 'minWidth-80',
  96: 'minWidth-96',
  '100vw': 'minWidth-100vw',
  auto: 'minWidth-auto',
  full: 'minWidth-full',
  max: 'minWidth-max',
  min: 'minWidth-min',
};

const keys = Object.keys(map);

describe('setMinWidth', () => {
  checkFactory(setMinWidth, 'setMinWidth', 'minWidth', keys);
});
