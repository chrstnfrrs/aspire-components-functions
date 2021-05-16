import * as Types from '../../../src/types';
import * as DisplaySelector from '../../../src/selectors/setDisplay';

import * as Checkers from './checkers';

const map: Types.ISelectorMap = {
  block: 'display-block',
  flex: 'display-flex',
  grid: 'display-grid',
  inline: 'display-inline',
  'inline-block': 'display-inline-block',
};

const mapKeys = Object.keys(map);

describe('setDisplay', () => {
  Checkers.checkSelector(DisplaySelector.setDisplay, 'setDisplay', 'display', mapKeys);
});
