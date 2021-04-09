import { setColor } from '../../../src/factories/setColor';

import { checkFactory, checkMaterialFactory } from './checkFactory';
import { expectedColorMap } from './maps/color.spec';
import { expectedMdColorMap } from './maps/md-color.spec';

const colorMapKeys = Object.keys(expectedColorMap);
const mdColorMapKeys = Object.keys(expectedMdColorMap);

describe('setColor', () => {
  checkFactory(setColor, 'setColor', 'color', colorMapKeys);
  checkMaterialFactory(setColor, 'setColor', 'color', mdColorMapKeys);
});
