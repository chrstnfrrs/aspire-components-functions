import * as Types from '../../../src/types';
import * as DirectionSelector from '../../../src/selectors/setDirection';

import * as Checkers from './checkers';

const map: Types.ISelectorMap = {
  column: 'direction-column',
  'column-reverse': 'direction-column-reverse',
  row: 'direction-row',
  'row-reverse': 'direction-row-reverse',
};

const mapKeys = Object.keys(map);

describe('setDirection', () => {
  Checkers.checkSelector(DirectionSelector.setDirection, 'setDirection', 'direction', mapKeys);
});
