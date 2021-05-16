import * as Types from '../types';

const map: Types.ISelectorMap = {
  baseline: 'align-baseline',
  center: 'align-center',
  end: 'align-end',
  start: 'align-start',
  stretch: 'align-stretch',
};

const setAlign: Types.SelectorFunction = (type = '') => map[type];

export { setAlign };
