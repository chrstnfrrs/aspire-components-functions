import * as Types from '../../../src/types';
import * as PaddingSelector from '../../../src/selectors/setPadding';

import * as Checkers from './checkers';

/* eslint-disable sort-keys */
const map: Types.ISelectorMap = {
  0: 'padding-0',
  '0_5': 'padding-0_5',
  1: 'padding-1',
  '1_5': 'padding-1_5',
  2: 'padding-2',
  '2_5': 'padding-2_5',
  3: 'padding-3',
  '3_5': 'padding-3_5',
  4: 'padding-4',
  5: 'padding-5',
  6: 'padding-6',
  7: 'padding-7',
  8: 'padding-8',
  9: 'padding-9',
  10: 'padding-10',
  11: 'padding-11',
  12: 'padding-12',
  14: 'padding-14',
  16: 'padding-16',
  20: 'padding-20',
  24: 'padding-24',
  28: 'padding-28',
  32: 'padding-32',
  36: 'padding-36',
  40: 'padding-40',
  44: 'padding-44',
  48: 'padding-48',
  52: 'padding-52',
  56: 'padding-56',
  60: 'padding-60',
  64: 'padding-64',
  72: 'padding-72',
  80: 'padding-80',
  96: 'padding-96',
  '0x': 'padding-0x',
  '0_5x': 'padding-0_5x',
  '1x': 'padding-1x',
  '1_5x': 'padding-1_5x',
  '2x': 'padding-2x',
  '2_5x': 'padding-2_5x',
  '3x': 'padding-3x',
  '3_5x': 'padding-3_5x',
  '4x': 'padding-4x',
  '5x': 'padding-5x',
  '6x': 'padding-6x',
  '7x': 'padding-7x',
  '8x': 'padding-8x',
  '9x': 'padding-9x',
  '10x': 'padding-10x',
  '11x': 'padding-11x',
  '12x': 'padding-12x',
  '14x': 'padding-14x',
  '16x': 'padding-16x',
  '20x': 'padding-20x',
  '24x': 'padding-24x',
  '28x': 'padding-28x',
  '32x': 'padding-32x',
  '36x': 'padding-36x',
  '40x': 'padding-40x',
  '44x': 'padding-44x',
  '48x': 'padding-48x',
  '52x': 'padding-52x',
  '56x': 'padding-56x',
  '60x': 'padding-60x',
  '64x': 'padding-64x',
  '72x': 'padding-72x',
  '80x': 'padding-80x',
  '96x': 'padding-96x',
  '0y': 'padding-0y',
  '0_5y': 'padding-0_5y',
  '1y': 'padding-1y',
  '1_5y': 'padding-1_5y',
  '2y': 'padding-2y',
  '2_5y': 'padding-2_5y',
  '3y': 'padding-3y',
  '3_5y': 'padding-3_5y',
  '4y': 'padding-4y',
  '5y': 'padding-5y',
  '6y': 'padding-6y',
  '7y': 'padding-7y',
  '8y': 'padding-8y',
  '9y': 'padding-9y',
  '10y': 'padding-10y',
  '11y': 'padding-11y',
  '12y': 'padding-12y',
  '14y': 'padding-14y',
  '16y': 'padding-16y',
  '20y': 'padding-20y',
  '24y': 'padding-24y',
  '28y': 'padding-28y',
  '32y': 'padding-32y',
  '36y': 'padding-36y',
  '40y': 'padding-40y',
  '44y': 'padding-44y',
  '48y': 'padding-48y',
  '52y': 'padding-52y',
  '56y': 'padding-56y',
  '60y': 'padding-60y',
  '64y': 'padding-64y',
  '72y': 'padding-72y',
  '80y': 'padding-80y',
  '96y': 'padding-96y',
  '0t': 'padding-0t',
  '0_5t': 'padding-0_5t',
  '1t': 'padding-1t',
  '1_5t': 'padding-1_5t',
  '2t': 'padding-2t',
  '2_5t': 'padding-2_5t',
  '3t': 'padding-3t',
  '3_5t': 'padding-3_5t',
  '4t': 'padding-4t',
  '5t': 'padding-5t',
  '6t': 'padding-6t',
  '7t': 'padding-7t',
  '8t': 'padding-8t',
  '9t': 'padding-9t',
  '10t': 'padding-10t',
  '11t': 'padding-11t',
  '12t': 'padding-12t',
  '14t': 'padding-14t',
  '16t': 'padding-16t',
  '20t': 'padding-20t',
  '24t': 'padding-24t',
  '28t': 'padding-28t',
  '32t': 'padding-32t',
  '36t': 'padding-36t',
  '40t': 'padding-40t',
  '44t': 'padding-44t',
  '48t': 'padding-48t',
  '52t': 'padding-52t',
  '56t': 'padding-56t',
  '60t': 'padding-60t',
  '64t': 'padding-64t',
  '72t': 'padding-72t',
  '80t': 'padding-80t',
  '96t': 'padding-96t',
  '0b': 'padding-0b',
  '0_5b': 'padding-0_5b',
  '1b': 'padding-1b',
  '1_5b': 'padding-1_5b',
  '2b': 'padding-2b',
  '2_5b': 'padding-2_5b',
  '3b': 'padding-3b',
  '3_5b': 'padding-3_5b',
  '4b': 'padding-4b',
  '5b': 'padding-5b',
  '6b': 'padding-6b',
  '7b': 'padding-7b',
  '8b': 'padding-8b',
  '9b': 'padding-9b',
  '10b': 'padding-10b',
  '11b': 'padding-11b',
  '12b': 'padding-12b',
  '14b': 'padding-14b',
  '16b': 'padding-16b',
  '20b': 'padding-20b',
  '24b': 'padding-24b',
  '28b': 'padding-28b',
  '32b': 'padding-32b',
  '36b': 'padding-36b',
  '40b': 'padding-40b',
  '44b': 'padding-44b',
  '48b': 'padding-48b',
  '52b': 'padding-52b',
  '56b': 'padding-56b',
  '60b': 'padding-60b',
  '64b': 'padding-64b',
  '72b': 'padding-72b',
  '80b': 'padding-80b',
  '96b': 'padding-96b',
  '0l': 'padding-0l',
  '0_5l': 'padding-0_5l',
  '1l': 'padding-1l',
  '1_5l': 'padding-1_5l',
  '2l': 'padding-2l',
  '2_5l': 'padding-2_5l',
  '3l': 'padding-3l',
  '3_5l': 'padding-3_5l',
  '4l': 'padding-4l',
  '5l': 'padding-5l',
  '6l': 'padding-6l',
  '7l': 'padding-7l',
  '8l': 'padding-8l',
  '9l': 'padding-9l',
  '10l': 'padding-10l',
  '11l': 'padding-11l',
  '12l': 'padding-12l',
  '14l': 'padding-14l',
  '16l': 'padding-16l',
  '20l': 'padding-20l',
  '24l': 'padding-24l',
  '28l': 'padding-28l',
  '32l': 'padding-32l',
  '36l': 'padding-36l',
  '40l': 'padding-40l',
  '44l': 'padding-44l',
  '48l': 'padding-48l',
  '52l': 'padding-52l',
  '56l': 'padding-56l',
  '60l': 'padding-60l',
  '64l': 'padding-64l',
  '72l': 'padding-72l',
  '80l': 'padding-80l',
  '96l': 'padding-96l',
  '0r': 'padding-0r',
  '0_5r': 'padding-0_5r',
  '1r': 'padding-1r',
  '1_5r': 'padding-1_5r',
  '2r': 'padding-2r',
  '2_5r': 'padding-2_5r',
  '3r': 'padding-3r',
  '3_5r': 'padding-3_5r',
  '4r': 'padding-4r',
  '5r': 'padding-5r',
  '6r': 'padding-6r',
  '7r': 'padding-7r',
  '8r': 'padding-8r',
  '9r': 'padding-9r',
  '10r': 'padding-10r',
  '11r': 'padding-11r',
  '12r': 'padding-12r',
  '14r': 'padding-14r',
  '16r': 'padding-16r',
  '20r': 'padding-20r',
  '24r': 'padding-24r',
  '28r': 'padding-28r',
  '32r': 'padding-32r',
  '36r': 'padding-36r',
  '40r': 'padding-40r',
  '44r': 'padding-44r',
  '48r': 'padding-48r',
  '52r': 'padding-52r',
  '56r': 'padding-56r',
  '60r': 'padding-60r',
  '64r': 'padding-64r',
  '72r': 'padding-72r',
  '80r': 'padding-80r',
  '96r': 'padding-96r',
};
/* eslint-enable sort-keys */

const keys = Object.keys(map);

describe('setPadding', () => {
  Checkers.checkSelector(PaddingSelector.setPadding, 'setPadding', 'padding', keys);
  Checkers.checkSelectorArray(PaddingSelector.setPadding, 'setPadding', 'padding', keys);
  Checkers.checkSelectorStringList(PaddingSelector.setPadding, 'setPadding', 'padding', keys);
});
