import { IFactoryFunction, FactoryMap } from '../types';

const map: FactoryMap = {
  0: 'maxWidth-0',
  '0.5': 'maxWidth-0_5',
  1: 'maxWidth-1',
  '1.5': 'maxWidth-1_5',
  '1/2': 'maxWidth-1__2',
  '1/3': 'maxWidth-1__3',
  '1/4': 'maxWidth-1__4',
  '1/5': 'maxWidth-1__5',
  '1/6': 'maxWidth-1__6',
  '1/12': 'maxWidth-1__12',
  2: 'maxWidth-2',
  '2.5': 'maxWidth-2_5',
  '2/3': 'maxWidth-2__3',
  '2/4': 'maxWidth-2__4',
  '2/5': 'maxWidth-2__5',
  '2/6': 'maxWidth-2__6',
  '2/12': 'maxWidth-2__12',
  3: 'maxWidth-3',
  '3.5': 'maxWidth-3_5',
  '3/4': 'maxWidth-3__4',
  '3/5': 'maxWidth-3__5',
  '3/6': 'maxWidth-3__6',
  '3/12': 'maxWidth-3__12',
  4: 'maxWidth-4',
  '4/5': 'maxWidth-4__5',
  '4/6': 'maxWidth-4__6',
  '4/12': 'maxWidth-4__12',
  5: 'maxWidth-5',
  '5/6': 'maxWidth-5__6',
  '5/12': 'maxWidth-5__12',
  6: 'maxWidth-6',
  '6/12': 'maxWidth-6__12',
  7: 'maxWidth-7',
  '7/12': 'maxWidth-7__12',
  8: 'maxWidth-8',
  '8/12': 'maxWidth-8__12',
  9: 'maxWidth-9',
  '9/12': 'maxWidth-9__12',
  10: 'maxWidth-10',
  '10/12': 'maxWidth-10__12',
  11: 'maxWidth-11',
  '11/12': 'maxWidth-11__12',
  12: 'maxWidth-12',
  14: 'maxWidth-14',
  16: 'maxWidth-16',
  20: 'maxWidth-20',
  24: 'maxWidth-24',
  28: 'maxWidth-28',
  32: 'maxWidth-32',
  36: 'maxWidth-36',
  40: 'maxWidth-40',
  44: 'maxWidth-44',
  48: 'maxWidth-48',
  '50vw': 'maxWidth-50vw',
  52: 'maxWidth-52',
  56: 'maxWidth-56',
  60: 'maxWidth-60',
  64: 'maxWidth-64',
  72: 'maxWidth-72',
  '75vw': 'maxWidth-75vw',
  80: 'maxWidth-80',
  96: 'maxWidth-96',
  '100vw': 'maxWidth-100vw',
  auto: 'maxWidth-auto',
  full: 'maxWidth-full',
  max: 'maxWidth-max',
  min: 'maxWidth-min',
};

export const setMaxWidth: IFactoryFunction = (type = '') => map[type];
