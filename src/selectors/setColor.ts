import * as Types from '../types';

import * as ColorMaps from './maps/color';
import * as MdColorMaps from './maps/md-color';

const map: Types.ISelectorMap = {
  ...ColorMaps.map,
  ...MdColorMaps.map,
};

const setColor: Types.SelectorFunction = (type = '') => map[type];

export { setColor };
