import { FactoryMap } from '../../../src/types';
import { setAlign } from '../../../src/factories/setAlign';

import { checkFactory } from './checkFactory';

const map: FactoryMap = {
  baseline: 'align-baseline',
  center: 'align-center',
  end: 'align-end',
  start: 'align-start',
  stretch: 'align-stretch',
};

const keys = Object.keys(map);

describe('setAlign', () => {
  checkFactory(setAlign, 'setAlign', 'align', keys);
});
