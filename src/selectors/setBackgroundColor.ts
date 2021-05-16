import * as Types from '../types';

import * as BackgroundColorMaps from './maps/background-color';
import * as MdBackgroundColorMaps from './maps/md-background-color';

const map: Types.ISelectorMap = {
  ...BackgroundColorMaps.map,
  ...MdBackgroundColorMaps.map,
};

const setBackgroundColor: Types.SelectorFunction = (type = '') => map[type];

export { setBackgroundColor };
