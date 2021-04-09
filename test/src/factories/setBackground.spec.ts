import { setBackgroundColor } from '../../../src/factories/setBackgroundColor';

import { checkFactory, checkMaterialFactory } from './checkFactory';
import { expectedBackgroundColorMap } from './maps/background-color.spec';
import { expectedMdBackgroundColorMap } from './maps/md-background-color.spec';

const backgroundColorMapKeys = Object.keys(expectedBackgroundColorMap);
const mdBackgroundColorMapKeys = Object.keys(expectedMdBackgroundColorMap);

describe('setBackground', () => {
  checkFactory(setBackgroundColor, 'setBackground', 'backgroundColor', backgroundColorMapKeys);
  checkMaterialFactory(setBackgroundColor, 'setBackground', 'backgroundColor', mdBackgroundColorMapKeys);
});
