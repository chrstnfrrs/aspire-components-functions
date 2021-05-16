import * as Types from '../types';

const map: Types.ISelectorMap = {
  column: 'direction-column',
  'column-reverse': 'direction-column-reverse',
  row: 'direction-row',
  'row-reverse': 'direction-row-reverse',
};

const setDirection: Types.SelectorFunction = (type = '') => map[type];

export { setDirection };
