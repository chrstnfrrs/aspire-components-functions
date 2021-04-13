import { FactoryMap } from '../../../src/types';
import { setDirection } from '../../../src/factories/setDirection';

import { checkFactory } from './checkFactory';

const map: FactoryMap = {
  column: 'direction-column',
  'column-reverse': 'direction-column-reverse',
  row: 'direction-row',
  'row-reverse': 'direction-row-reverse',
};

const mapKeys = Object.keys(map);

describe('setDirection', () => {
  checkFactory(setDirection, 'setDirection', 'direction', mapKeys);
});
