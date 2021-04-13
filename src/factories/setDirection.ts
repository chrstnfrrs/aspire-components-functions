import { IFactoryFunction, FactoryMap } from '../types';

const map: FactoryMap = {
  column: 'direction-column',
  'column-reverse': 'direction-column-reverse',
  row: 'direction-row',
  'row-reverse': 'direction-row-reverse',
};

export const setDirection: IFactoryFunction = (type = '') => map[type];
