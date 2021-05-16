import * as BackgroundColorSelector from '../../../src/selectors/setBackgroundColor';

import * as Checkers from './checkers';
import * as BackgroundColorMaps from './maps/background-color.spec';
import * as MdBackgroundColorMaps from './maps/md-background-color.spec';

const backgroundColorMapKeys = Object.keys(BackgroundColorMaps.expectedMap);
const mdBackgroundColorMapKeys = Object.keys(MdBackgroundColorMaps.expectedMap);

describe('setBackground', () => {
  Checkers.checkSelector(
    BackgroundColorSelector.setBackgroundColor,
    'setBackground',
    'backgroundColor',
    backgroundColorMapKeys,
  );
  Checkers.checkMaterialSelector(
    BackgroundColorSelector.setBackgroundColor,
    'setBackground',
    'backgroundColor',
    mdBackgroundColorMapKeys,
  );
});
