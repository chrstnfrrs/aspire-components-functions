import * as Types from '../types';

const map: Types.ISelectorMap = {
  '0': 'gap-0',
  '0.5': 'gap-0_5',
  '0.5x': 'gap-0_5x',
  '0.5y': 'gap-0_5y',
  '0x': 'gap-0x',
  '0y': 'gap-0y',
  '1': 'gap-1',
  '1.5': 'gap-1_5',
  '1.5x': 'gap-1_5x',
  '1.5y': 'gap-1_5y',
  '1x': 'gap-1x',
  '1y': 'gap-1y',
  '2': 'gap-2',
  '2.5': 'gap-2_5',
  '2.5x': 'gap-2_5x',
  '2.5y': 'gap-2_5y',
  '2x': 'gap-2x',
  '2y': 'gap-2y',
  '3': 'gap-3',
  '3.5': 'gap-3_5',
  '3.5x': 'gap-3_5x',
  '3.5y': 'gap-3_5y',
  '3x': 'gap-3x',
  '3y': 'gap-3y',
  '4': 'gap-4',
  '4x': 'gap-4x',
  '4y': 'gap-4y',
  '5': 'gap-5',
  '5x': 'gap-5x',
  '5y': 'gap-5y',
  '6': 'gap-6',
  '6x': 'gap-6x',
  '6y': 'gap-6y',
  '7': 'gap-7',
  '7x': 'gap-7x',
  '7y': 'gap-7y',
  '8': 'gap-8',
  '8x': 'gap-8x',
  '8y': 'gap-8y',
  '9': 'gap-9',
  '9x': 'gap-9x',
  '9y': 'gap-9y',
  '10': 'gap-10',
  '10x': 'gap-10x',
  '10y': 'gap-10y',
  '11': 'gap-11',
  '11x': 'gap-11x',
  '11y': 'gap-11y',
  '12': 'gap-12',
  '12x': 'gap-12x',
  '12y': 'gap-12y',
  '14': 'gap-14',
  '14x': 'gap-14x',
  '14y': 'gap-14y',
  '16': 'gap-16',
  '16x': 'gap-16x',
  '16y': 'gap-16y',
  '20': 'gap-20',
  '20x': 'gap-20x',
  '20y': 'gap-20y',
  '24': 'gap-24',
  '24x': 'gap-24x',
  '24y': 'gap-24y',
  '28': 'gap-28',
  '28x': 'gap-28x',
  '28y': 'gap-28y',
  '32': 'gap-32',
  '32x': 'gap-32x',
  '32y': 'gap-32y',
  '36': 'gap-36',
  '36x': 'gap-36x',
  '36y': 'gap-36y',
  '40': 'gap-40',
  '40x': 'gap-40x',
  '40y': 'gap-40y',
  '44': 'gap-44',
  '44x': 'gap-44x',
  '44y': 'gap-44y',
  '48': 'gap-48',
  '48x': 'gap-48x',
  '48y': 'gap-48y',
  '52': 'gap-52',
  '52x': 'gap-52x',
  '52y': 'gap-52y',
  '56': 'gap-56',
  '56x': 'gap-56x',
  '56y': 'gap-56y',
  '60': 'gap-60',
  '60x': 'gap-60x',
  '60y': 'gap-60y',
  '64': 'gap-64',
  '64x': 'gap-64x',
  '64y': 'gap-64y',
  '72': 'gap-72',
  '72x': 'gap-72x',
  '72y': 'gap-72y',
  '80': 'gap-80',
  '80x': 'gap-80x',
  '80y': 'gap-80y',
  '96': 'gap-96',
  '96x': 'gap-96x',
  '96y': 'gap-96y',
  px: 'gap-px',
  pxx: 'gap-pxx',
  pxy: 'gap-pxy',
};

const setGap: Types.SelectorArrayFunction = (type = '') => {
  let props: string[];

  if (typeof type === 'string') {
    props = type.split(' ');
  } else {
    props = type;
  }

  const listOfProps = props.reduce((accumulator: string[], prop: string) => {
    const className = map[prop];

    if (className) {
      accumulator.push(className);
    }

    return accumulator;
  }, []);

  return listOfProps.length > 0 ? listOfProps.join(' ') : undefined;
};

export { setGap };
