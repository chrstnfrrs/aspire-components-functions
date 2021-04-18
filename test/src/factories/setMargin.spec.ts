import { FactoryMap } from '../../../src/types';
import { setMargin } from '../../../src/factories/setMargin';

import { checkFactory, checkFactoryArray, checkFactoryStringList } from './checkFactory';

/* eslint-disable sort-keys */
const map: FactoryMap = {
  '0': 'margin-0',
  '0_5': 'margin-0_5',
  '1': 'margin-1',
  '1_5': 'margin-1_5',
  '2': 'margin-2',
  '2_5': 'margin-2_5',
  '3': 'margin-3',
  '3_5': 'margin-3_5',
  '4': 'margin-4',
  '5': 'margin-5',
  '6': 'margin-6',
  '7': 'margin-7',
  '8': 'margin-8',
  '9': 'margin-9',
  '10': 'margin-10',
  '11': 'margin-11',
  '12': 'margin-12',
  '14': 'margin-14',
  '16': 'margin-16',
  '20': 'margin-20',
  '24': 'margin-24',
  '28': 'margin-28',
  '32': 'margin-32',
  '36': 'margin-36',
  '40': 'margin-40',
  '44': 'margin-44',
  '48': 'margin-48',
  '52': 'margin-52',
  '56': 'margin-56',
  '60': 'margin-60',
  '64': 'margin-64',
  '72': 'margin-72',
  '80': 'margin-80',
  '96': 'margin-96',
  '-0_5': 'margin--0_5',
  '-1': 'margin--1',
  '-1_5': 'margin--1_5',
  '-2': 'margin--2',
  '-2_5': 'margin--2_5',
  '-3': 'margin--3',
  '-3_5': 'margin--3_5',
  '-4': 'margin--4',
  '-5': 'margin--5',
  '-6': 'margin--6',
  '-7': 'margin--7',
  '-8': 'margin--8',
  '-9': 'margin--9',
  '-10': 'margin--10',
  '-11': 'margin--11',
  '-12': 'margin--12',
  '-14': 'margin--14',
  '-16': 'margin--16',
  '-20': 'margin--20',
  '-24': 'margin--24',
  '-28': 'margin--28',
  '-32': 'margin--32',
  '-36': 'margin--36',
  '-40': 'margin--40',
  '-44': 'margin--44',
  '-48': 'margin--48',
  '-52': 'margin--52',
  '-56': 'margin--56',
  '-60': 'margin--60',
  '-64': 'margin--64',
  '-72': 'margin--72',
  '-80': 'margin--80',
  '-96': 'margin--96',
  '0x': 'margin-0x',
  '0_5x': 'margin-0_5x',
  '1x': 'margin-1x',
  '1_5x': 'margin-1_5x',
  '2x': 'margin-2x',
  '2_5x': 'margin-2_5x',
  '3x': 'margin-3x',
  '3_5x': 'margin-3_5x',
  '4x': 'margin-4x',
  '5x': 'margin-5x',
  '6x': 'margin-6x',
  '7x': 'margin-7x',
  '8x': 'margin-8x',
  '9x': 'margin-9x',
  '10x': 'margin-10x',
  '11x': 'margin-11x',
  '12x': 'margin-12x',
  '14x': 'margin-14x',
  '16x': 'margin-16x',
  '20x': 'margin-20x',
  '24x': 'margin-24x',
  '28x': 'margin-28x',
  '32x': 'margin-32x',
  '36x': 'margin-36x',
  '40x': 'margin-40x',
  '44x': 'margin-44x',
  '48x': 'margin-48x',
  '52x': 'margin-52x',
  '56x': 'margin-56x',
  '60x': 'margin-60x',
  '64x': 'margin-64x',
  '72x': 'margin-72x',
  '80x': 'margin-80x',
  '96x': 'margin-96x',
  '-0_5x': 'margin--0_5x',
  '-1x': 'margin--1x',
  '-1_5x': 'margin--1_5x',
  '-2x': 'margin--2x',
  '-2_5x': 'margin--2_5x',
  '-3x': 'margin--3x',
  '-3_5x': 'margin--3_5x',
  '-4x': 'margin--4x',
  '-5x': 'margin--5x',
  '-6x': 'margin--6x',
  '-7x': 'margin--7x',
  '-8x': 'margin--8x',
  '-9x': 'margin--9x',
  '-10x': 'margin--10x',
  '-11x': 'margin--11x',
  '-12x': 'margin--12x',
  '-14x': 'margin--14x',
  '-16x': 'margin--16x',
  '-20x': 'margin--20x',
  '-24x': 'margin--24x',
  '-28x': 'margin--28x',
  '-32x': 'margin--32x',
  '-36x': 'margin--36x',
  '-40x': 'margin--40x',
  '-44x': 'margin--44x',
  '-48x': 'margin--48x',
  '-52x': 'margin--52x',
  '-56x': 'margin--56x',
  '-60x': 'margin--60x',
  '-64x': 'margin--64x',
  '-72x': 'margin--72x',
  '-80x': 'margin--80x',
  '-96x': 'margin--96x',
  '0y': 'margin-0y',
  '0_5y': 'margin-0_5y',
  '1y': 'margin-1y',
  '1_5y': 'margin-1_5y',
  '2y': 'margin-2y',
  '2_5y': 'margin-2_5y',
  '3y': 'margin-3y',
  '3_5y': 'margin-3_5y',
  '4y': 'margin-4y',
  '5y': 'margin-5y',
  '6y': 'margin-6y',
  '7y': 'margin-7y',
  '8y': 'margin-8y',
  '9y': 'margin-9y',
  '10y': 'margin-10y',
  '11y': 'margin-11y',
  '12y': 'margin-12y',
  '14y': 'margin-14y',
  '16y': 'margin-16y',
  '20y': 'margin-20y',
  '24y': 'margin-24y',
  '28y': 'margin-28y',
  '32y': 'margin-32y',
  '36y': 'margin-36y',
  '40y': 'margin-40y',
  '44y': 'margin-44y',
  '48y': 'margin-48y',
  '52y': 'margin-52y',
  '56y': 'margin-56y',
  '60y': 'margin-60y',
  '64y': 'margin-64y',
  '72y': 'margin-72y',
  '80y': 'margin-80y',
  '96y': 'margin-96y',
  '-0_5y': 'margin--0_5y',
  '-1y': 'margin--1y',
  '-1_5y': 'margin--1_5y',
  '-2y': 'margin--2y',
  '-2_5y': 'margin--2_5y',
  '-3y': 'margin--3y',
  '-3_5y': 'margin--3_5y',
  '-4y': 'margin--4y',
  '-5y': 'margin--5y',
  '-6y': 'margin--6y',
  '-7y': 'margin--7y',
  '-8y': 'margin--8y',
  '-9y': 'margin--9y',
  '-10y': 'margin--10y',
  '-11y': 'margin--11y',
  '-12y': 'margin--12y',
  '-14y': 'margin--14y',
  '-16y': 'margin--16y',
  '-20y': 'margin--20y',
  '-24y': 'margin--24y',
  '-28y': 'margin--28y',
  '-32y': 'margin--32y',
  '-36y': 'margin--36y',
  '-40y': 'margin--40y',
  '-44y': 'margin--44y',
  '-48y': 'margin--48y',
  '-52y': 'margin--52y',
  '-56y': 'margin--56y',
  '-60y': 'margin--60y',
  '-64y': 'margin--64y',
  '-72y': 'margin--72y',
  '-80y': 'margin--80y',
  '-96y': 'margin--96y',
  '0t': 'margin-0t',
  '0_5t': 'margin-0_5t',
  '1t': 'margin-1t',
  '1_5t': 'margin-1_5t',
  '2t': 'margin-2t',
  '2_5t': 'margin-2_5t',
  '3t': 'margin-3t',
  '3_5t': 'margin-3_5t',
  '4t': 'margin-4t',
  '5t': 'margin-5t',
  '6t': 'margin-6t',
  '7t': 'margin-7t',
  '8t': 'margin-8t',
  '9t': 'margin-9t',
  '10t': 'margin-10t',
  '11t': 'margin-11t',
  '12t': 'margin-12t',
  '14t': 'margin-14t',
  '16t': 'margin-16t',
  '20t': 'margin-20t',
  '24t': 'margin-24t',
  '28t': 'margin-28t',
  '32t': 'margin-32t',
  '36t': 'margin-36t',
  '40t': 'margin-40t',
  '44t': 'margin-44t',
  '48t': 'margin-48t',
  '52t': 'margin-52t',
  '56t': 'margin-56t',
  '60t': 'margin-60t',
  '64t': 'margin-64t',
  '72t': 'margin-72t',
  '80t': 'margin-80t',
  '96t': 'margin-96t',
  '-0_5t': 'margin--0_5t',
  '-1t': 'margin--1t',
  '-1_5t': 'margin--1_5t',
  '-2t': 'margin--2t',
  '-2_5t': 'margin--2_5t',
  '-3t': 'margin--3t',
  '-3_5t': 'margin--3_5t',
  '-4t': 'margin--4t',
  '-5t': 'margin--5t',
  '-6t': 'margin--6t',
  '-7t': 'margin--7t',
  '-8t': 'margin--8t',
  '-9t': 'margin--9t',
  '-10t': 'margin--10t',
  '-11t': 'margin--11t',
  '-12t': 'margin--12t',
  '-14t': 'margin--14t',
  '-16t': 'margin--16t',
  '-20t': 'margin--20t',
  '-24t': 'margin--24t',
  '-28t': 'margin--28t',
  '-32t': 'margin--32t',
  '-36t': 'margin--36t',
  '-40t': 'margin--40t',
  '-44t': 'margin--44t',
  '-48t': 'margin--48t',
  '-52t': 'margin--52t',
  '-56t': 'margin--56t',
  '-60t': 'margin--60t',
  '-64t': 'margin--64t',
  '-72t': 'margin--72t',
  '-80t': 'margin--80t',
  '-96t': 'margin--96t',
  '0b': 'margin-0b',
  '0_5b': 'margin-0_5b',
  '1b': 'margin-1b',
  '1_5b': 'margin-1_5b',
  '2b': 'margin-2b',
  '2_5b': 'margin-2_5b',
  '3b': 'margin-3b',
  '3_5b': 'margin-3_5b',
  '4b': 'margin-4b',
  '5b': 'margin-5b',
  '6b': 'margin-6b',
  '7b': 'margin-7b',
  '8b': 'margin-8b',
  '9b': 'margin-9b',
  '10b': 'margin-10b',
  '11b': 'margin-11b',
  '12b': 'margin-12b',
  '14b': 'margin-14b',
  '16b': 'margin-16b',
  '20b': 'margin-20b',
  '24b': 'margin-24b',
  '28b': 'margin-28b',
  '32b': 'margin-32b',
  '36b': 'margin-36b',
  '40b': 'margin-40b',
  '44b': 'margin-44b',
  '48b': 'margin-48b',
  '52b': 'margin-52b',
  '56b': 'margin-56b',
  '60b': 'margin-60b',
  '64b': 'margin-64b',
  '72b': 'margin-72b',
  '80b': 'margin-80b',
  '96b': 'margin-96b',
  '-0_5b': 'margin--0_5b',
  '-1b': 'margin--1b',
  '-1_5b': 'margin--1_5b',
  '-2b': 'margin--2b',
  '-2_5b': 'margin--2_5b',
  '-3b': 'margin--3b',
  '-3_5b': 'margin--3_5b',
  '-4b': 'margin--4b',
  '-5b': 'margin--5b',
  '-6b': 'margin--6b',
  '-7b': 'margin--7b',
  '-8b': 'margin--8b',
  '-9b': 'margin--9b',
  '-10b': 'margin--10b',
  '-11b': 'margin--11b',
  '-12b': 'margin--12b',
  '-14b': 'margin--14b',
  '-16b': 'margin--16b',
  '-20b': 'margin--20b',
  '-24b': 'margin--24b',
  '-28b': 'margin--28b',
  '-32b': 'margin--32b',
  '-36b': 'margin--36b',
  '-40b': 'margin--40b',
  '-44b': 'margin--44b',
  '-48b': 'margin--48b',
  '-52b': 'margin--52b',
  '-56b': 'margin--56b',
  '-60b': 'margin--60b',
  '-64b': 'margin--64b',
  '-72b': 'margin--72b',
  '-80b': 'margin--80b',
  '-96b': 'margin--96b',
  '0l': 'margin-0l',
  '0_5l': 'margin-0_5l',
  '1l': 'margin-1l',
  '1_5l': 'margin-1_5l',
  '2l': 'margin-2l',
  '2_5l': 'margin-2_5l',
  '3l': 'margin-3l',
  '3_5l': 'margin-3_5l',
  '4l': 'margin-4l',
  '5l': 'margin-5l',
  '6l': 'margin-6l',
  '7l': 'margin-7l',
  '8l': 'margin-8l',
  '9l': 'margin-9l',
  '10l': 'margin-10l',
  '11l': 'margin-11l',
  '12l': 'margin-12l',
  '14l': 'margin-14l',
  '16l': 'margin-16l',
  '20l': 'margin-20l',
  '24l': 'margin-24l',
  '28l': 'margin-28l',
  '32l': 'margin-32l',
  '36l': 'margin-36l',
  '40l': 'margin-40l',
  '44l': 'margin-44l',
  '48l': 'margin-48l',
  '52l': 'margin-52l',
  '56l': 'margin-56l',
  '60l': 'margin-60l',
  '64l': 'margin-64l',
  '72l': 'margin-72l',
  '80l': 'margin-80l',
  '96l': 'margin-96l',
  '-0_5l': 'margin--0_5l',
  '-1l': 'margin--1l',
  '-1_5l': 'margin--1_5l',
  '-2l': 'margin--2l',
  '-2_5l': 'margin--2_5l',
  '-3l': 'margin--3l',
  '-3_5l': 'margin--3_5l',
  '-4l': 'margin--4l',
  '-5l': 'margin--5l',
  '-6l': 'margin--6l',
  '-7l': 'margin--7l',
  '-8l': 'margin--8l',
  '-9l': 'margin--9l',
  '-10l': 'margin--10l',
  '-11l': 'margin--11l',
  '-12l': 'margin--12l',
  '-14l': 'margin--14l',
  '-16l': 'margin--16l',
  '-20l': 'margin--20l',
  '-24l': 'margin--24l',
  '-28l': 'margin--28l',
  '-32l': 'margin--32l',
  '-36l': 'margin--36l',
  '-40l': 'margin--40l',
  '-44l': 'margin--44l',
  '-48l': 'margin--48l',
  '-52l': 'margin--52l',
  '-56l': 'margin--56l',
  '-60l': 'margin--60l',
  '-64l': 'margin--64l',
  '-72l': 'margin--72l',
  '-80l': 'margin--80l',
  '-96l': 'margin--96l',
  '0r': 'margin-0r',
  '0_5r': 'margin-0_5r',
  '1r': 'margin-1r',
  '1_5r': 'margin-1_5r',
  '2r': 'margin-2r',
  '2_5r': 'margin-2_5r',
  '3r': 'margin-3r',
  '3_5r': 'margin-3_5r',
  '4r': 'margin-4r',
  '5r': 'margin-5r',
  '6r': 'margin-6r',
  '7r': 'margin-7r',
  '8r': 'margin-8r',
  '9r': 'margin-9r',
  '10r': 'margin-10r',
  '11r': 'margin-11r',
  '12r': 'margin-12r',
  '14r': 'margin-14r',
  '16r': 'margin-16r',
  '20r': 'margin-20r',
  '24r': 'margin-24r',
  '28r': 'margin-28r',
  '32r': 'margin-32r',
  '36r': 'margin-36r',
  '40r': 'margin-40r',
  '44r': 'margin-44r',
  '48r': 'margin-48r',
  '52r': 'margin-52r',
  '56r': 'margin-56r',
  '60r': 'margin-60r',
  '64r': 'margin-64r',
  '72r': 'margin-72r',
  '80r': 'margin-80r',
  '96r': 'margin-96r',
  '-0_5r': 'margin--0_5r',
  '-1r': 'margin--1r',
  '-1_5r': 'margin--1_5r',
  '-2r': 'margin--2r',
  '-2_5r': 'margin--2_5r',
  '-3r': 'margin--3r',
  '-3_5r': 'margin--3_5r',
  '-4r': 'margin--4r',
  '-5r': 'margin--5r',
  '-6r': 'margin--6r',
  '-7r': 'margin--7r',
  '-8r': 'margin--8r',
  '-9r': 'margin--9r',
  '-10r': 'margin--10r',
  '-11r': 'margin--11r',
  '-12r': 'margin--12r',
  '-14r': 'margin--14r',
  '-16r': 'margin--16r',
  '-20r': 'margin--20r',
  '-24r': 'margin--24r',
  '-28r': 'margin--28r',
  '-32r': 'margin--32r',
  '-36r': 'margin--36r',
  '-40r': 'margin--40r',
  '-44r': 'margin--44r',
  '-48r': 'margin--48r',
  '-52r': 'margin--52r',
  '-56r': 'margin--56r',
  '-60r': 'margin--60r',
  '-64r': 'margin--64r',
  '-72r': 'margin--72r',
  '-80r': 'margin--80r',
  '-96r': 'margin--96r',
};
/* eslint-enable sort-keys */

const keys = Object.keys(map);

describe('setMargin', () => {
  checkFactory(setMargin, 'setMargin', 'margin', keys);
  checkFactoryArray(setMargin, 'setMargin', 'margin', keys);
  checkFactoryStringList(setMargin, 'setMargin', 'margin', keys);
});
