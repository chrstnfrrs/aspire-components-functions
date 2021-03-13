import { IFactoryFunction, FactoryMap } from '../types';

const map: FactoryMap = {
  around: 'justify-around',
  between: 'justify-between',
  center: 'justify-center',
  end: 'justify-end',
  evenly: 'justify-evenly',
  start: 'justify-start',
};

export const setJustify: IFactoryFunction = (type = '') => map[type];
