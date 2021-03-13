import { IFactoryFunction, FactoryMap } from '../types';

const map: FactoryMap = {
  baseline: 'align-baseline',
  center: 'align-center',
  end: 'align-end',
  start: 'align-start',
  stretch: 'align-stretch',
};

export const setAlign: IFactoryFunction = (type = '') => map[type];
