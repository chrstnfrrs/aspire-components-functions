import { FactoryMap } from '../../../src/types';
import { setJustify } from '../../../src/factories/setJustify';

import { checkFactory } from './checkFactory';

const map: FactoryMap = {
  around: 'justify-around',
  between: 'justify-between',
  center: 'justify-center',
  end: 'justify-end',
  evenly: 'justify-evenly',
  start: 'justify-start',
};

const keys = Object.keys(map);

describe('setJustify', () => {
  checkFactory(setJustify, 'setJustify', 'justify', keys);
});
