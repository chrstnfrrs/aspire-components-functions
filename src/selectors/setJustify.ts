import * as Types from '../types';

const map: Types.ISelectorMap = {
  around: 'justify-around',
  between: 'justify-between',
  center: 'justify-center',
  end: 'justify-end',
  evenly: 'justify-evenly',
  start: 'justify-start',
};

const setJustify: Types.SelectorFunction = (type = '') => map[type];

export { setJustify };
