import * as Types from '../../../src/types';
import * as JustifySelector from '../../../src/selectors/setJustify';

import * as Checkers from './checkers';

const map: Types.ISelectorMap = {
  around: 'justify-around',
  between: 'justify-between',
  center: 'justify-center',
  end: 'justify-end',
  evenly: 'justify-evenly',
  start: 'justify-start',
};

const keys = Object.keys(map);

describe('setJustify', () => {
  Checkers.checkSelector(JustifySelector.setJustify, 'setJustify', 'justify', keys);
});
