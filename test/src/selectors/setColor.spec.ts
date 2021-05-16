import * as ColorSelector from '../../../src/selectors/setColor';

import * as Checkers from './checkers';
import * as ColorMaps from './maps/color.spec';
import * as MdColorMaps from './maps/md-color.spec';

const colorMapKeys = Object.keys(ColorMaps.expectedMap);
const mdColorMapKeys = Object.keys(MdColorMaps.expectedMap);

describe('setColor', () => {
  Checkers.checkSelector(ColorSelector.setColor, 'setColor', 'color', colorMapKeys);
  Checkers.checkMaterialSelector(ColorSelector.setColor, 'setColor', 'color', mdColorMapKeys);
});
