import { IFactoryFunction, FactoryMap } from '../types';

import { backgroundColorMap } from './maps/background-color';
import { mdBackgroundColorMap } from './maps/md-background-color';

const map: FactoryMap = {
  ...backgroundColorMap,
  ...mdBackgroundColorMap,
};

const setBackgroundColor: IFactoryFunction = (type = '') => map[type];

export { setBackgroundColor };
