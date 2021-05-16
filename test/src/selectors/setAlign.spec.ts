import * as Types from '../../../src/types';
import * as AlignSelector from '../../../src/selectors/setAlign';

import * as Checkers from './checkers';

const map: Types.ISelectorMap = {
  baseline: 'align-baseline',
  center: 'align-center',
  end: 'align-end',
  start: 'align-start',
  stretch: 'align-stretch',
};

const keys = Object.keys(map);

describe('setAlign', () => {
  Checkers.checkSelector(AlignSelector.setAlign, 'setAlign', 'align', keys);
});
