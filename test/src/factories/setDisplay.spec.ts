import { FactoryMap } from '../../../src/types';
import { setDisplay } from '../../../src/factories/setDisplay';

import { checkFactory } from './checkFactory';

const map: FactoryMap = {
  block: 'display-block',
  flex: 'display-flex',
  grid: 'display-grid',
  inline: 'display-inline',
  'inline-block': 'display-inline-block',
};

const mapKeys = Object.keys(map);

describe('setDisplay', () => {
  checkFactory(setDisplay, 'setDisplay', 'display', mapKeys);
});
