import * as Types from '../types';

const map: Types.ISelectorMap = {
  block: 'display-block',
  flex: 'display-flex',
  grid: 'display-grid',
  inline: 'display-inline',
  'inline-block': 'display-inline-block',
};

const setDisplay: Types.SelectorFunction = (type = '') => map[type];

export { setDisplay };
