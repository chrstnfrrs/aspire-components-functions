import { IFactoryFunction, FactoryMap } from '../types';

import { colorMap } from './maps/color';
import { mdColorMap } from './maps/md-color';

const map: FactoryMap = {
  ...colorMap,
  ...mdColorMap,
};

export const setColor: IFactoryFunction = (type = '') => map[type];
