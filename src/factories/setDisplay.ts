import { IFactoryFunction, FactoryMap } from '../types';

const map: FactoryMap = {
  block: 'display-block',
  flex: 'display-flex',
  grid: 'display-grid',
  inline: 'display-inline',
  'inline-block': 'display-inline-block',
};

export const setDisplay: IFactoryFunction = (type = '') => map[type];
