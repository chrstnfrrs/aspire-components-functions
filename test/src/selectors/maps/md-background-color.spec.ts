import * as MdBackgroundColorMaps from '../../../../src/selectors/maps/md-background-color';

const expectedMap = {
  'amber-50': 'md-backgroundColor-amber-50',
  'amber-100': 'md-backgroundColor-amber-100',
  'amber-200': 'md-backgroundColor-amber-200',
  'amber-300': 'md-backgroundColor-amber-300',
  'amber-400': 'md-backgroundColor-amber-400',
  'amber-500': 'md-backgroundColor-amber-500',
  'amber-600': 'md-backgroundColor-amber-600',
  'amber-700': 'md-backgroundColor-amber-700',
  'amber-800': 'md-backgroundColor-amber-800',
  'amber-900': 'md-backgroundColor-amber-900',
  'amber-a100': 'md-backgroundColor-amber-a100',
  'amber-a200': 'md-backgroundColor-amber-a200',
  'amber-a400': 'md-backgroundColor-amber-a400',
  'amber-a700': 'md-backgroundColor-amber-a700',
  'blue-50': 'md-backgroundColor-blue-50',
  'blue-100': 'md-backgroundColor-blue-100',
  'blue-200': 'md-backgroundColor-blue-200',
  'blue-300': 'md-backgroundColor-blue-300',
  'blue-400': 'md-backgroundColor-blue-400',
  'blue-500': 'md-backgroundColor-blue-500',
  'blue-600': 'md-backgroundColor-blue-600',
  'blue-700': 'md-backgroundColor-blue-700',
  'blue-800': 'md-backgroundColor-blue-800',
  'blue-900': 'md-backgroundColor-blue-900',
  'blue-a100': 'md-backgroundColor-blue-a100',
  'blue-a200': 'md-backgroundColor-blue-a200',
  'blue-a400': 'md-backgroundColor-blue-a400',
  'blue-a700': 'md-backgroundColor-blue-a700',
  'blue-grey-50': 'md-backgroundColor-blue-grey-50',
  'blue-grey-100': 'md-backgroundColor-blue-grey-100',
  'blue-grey-200': 'md-backgroundColor-blue-grey-200',
  'blue-grey-300': 'md-backgroundColor-blue-grey-300',
  'blue-grey-400': 'md-backgroundColor-blue-grey-400',
  'blue-grey-500': 'md-backgroundColor-blue-grey-500',
  'blue-grey-600': 'md-backgroundColor-blue-grey-600',
  'blue-grey-700': 'md-backgroundColor-blue-grey-700',
  'blue-grey-800': 'md-backgroundColor-blue-grey-800',
  'blue-grey-900': 'md-backgroundColor-blue-grey-900',
  'brown-50': 'md-backgroundColor-brown-50',
  'brown-100': 'md-backgroundColor-brown-100',
  'brown-200': 'md-backgroundColor-brown-200',
  'brown-300': 'md-backgroundColor-brown-300',
  'brown-400': 'md-backgroundColor-brown-400',
  'brown-500': 'md-backgroundColor-brown-500',
  'brown-600': 'md-backgroundColor-brown-600',
  'brown-700': 'md-backgroundColor-brown-700',
  'brown-800': 'md-backgroundColor-brown-800',
  'brown-900': 'md-backgroundColor-brown-900',
  'cyan-50': 'md-backgroundColor-cyan-50',
  'cyan-100': 'md-backgroundColor-cyan-100',
  'cyan-200': 'md-backgroundColor-cyan-200',
  'cyan-300': 'md-backgroundColor-cyan-300',
  'cyan-400': 'md-backgroundColor-cyan-400',
  'cyan-500': 'md-backgroundColor-cyan-500',
  'cyan-600': 'md-backgroundColor-cyan-600',
  'cyan-700': 'md-backgroundColor-cyan-700',
  'cyan-800': 'md-backgroundColor-cyan-800',
  'cyan-900': 'md-backgroundColor-cyan-900',
  'cyan-a100': 'md-backgroundColor-cyan-a100',
  'cyan-a200': 'md-backgroundColor-cyan-a200',
  'cyan-a400': 'md-backgroundColor-cyan-a400',
  'cyan-a700': 'md-backgroundColor-cyan-a700',
  'deep-orange-50': 'md-backgroundColor-deep-orange-50',
  'deep-orange-100': 'md-backgroundColor-deep-orange-100',
  'deep-orange-200': 'md-backgroundColor-deep-orange-200',
  'deep-orange-300': 'md-backgroundColor-deep-orange-300',
  'deep-orange-400': 'md-backgroundColor-deep-orange-400',
  'deep-orange-500': 'md-backgroundColor-deep-orange-500',
  'deep-orange-600': 'md-backgroundColor-deep-orange-600',
  'deep-orange-700': 'md-backgroundColor-deep-orange-700',
  'deep-orange-800': 'md-backgroundColor-deep-orange-800',
  'deep-orange-900': 'md-backgroundColor-deep-orange-900',
  'deep-orange-a100': 'md-backgroundColor-deep-orange-a100',
  'deep-orange-a200': 'md-backgroundColor-deep-orange-a200',
  'deep-orange-a400': 'md-backgroundColor-deep-orange-a400',
  'deep-orange-a700': 'md-backgroundColor-deep-orange-a700',
  'deep-purple-50': 'md-backgroundColor-deep-purple-50',
  'deep-purple-100': 'md-backgroundColor-deep-purple-100',
  'deep-purple-200': 'md-backgroundColor-deep-purple-200',
  'deep-purple-300': 'md-backgroundColor-deep-purple-300',
  'deep-purple-400': 'md-backgroundColor-deep-purple-400',
  'deep-purple-500': 'md-backgroundColor-deep-purple-500',
  'deep-purple-600': 'md-backgroundColor-deep-purple-600',
  'deep-purple-700': 'md-backgroundColor-deep-purple-700',
  'deep-purple-800': 'md-backgroundColor-deep-purple-800',
  'deep-purple-900': 'md-backgroundColor-deep-purple-900',
  'deep-purple-a100': 'md-backgroundColor-deep-purple-a100',
  'deep-purple-a200': 'md-backgroundColor-deep-purple-a200',
  'deep-purple-a400': 'md-backgroundColor-deep-purple-a400',
  'deep-purple-a700': 'md-backgroundColor-deep-purple-a700',
  'green-50': 'md-backgroundColor-green-50',
  'green-100': 'md-backgroundColor-green-100',
  'green-200': 'md-backgroundColor-green-200',
  'green-300': 'md-backgroundColor-green-300',
  'green-400': 'md-backgroundColor-green-400',
  'green-500': 'md-backgroundColor-green-500',
  'green-600': 'md-backgroundColor-green-600',
  'green-700': 'md-backgroundColor-green-700',
  'green-800': 'md-backgroundColor-green-800',
  'green-900': 'md-backgroundColor-green-900',
  'green-a100': 'md-backgroundColor-green-a100',
  'green-a200': 'md-backgroundColor-green-a200',
  'green-a400': 'md-backgroundColor-green-a400',
  'green-a700': 'md-backgroundColor-green-a700',
  'grey-50': 'md-backgroundColor-grey-50',
  'grey-100': 'md-backgroundColor-grey-100',
  'grey-200': 'md-backgroundColor-grey-200',
  'grey-300': 'md-backgroundColor-grey-300',
  'grey-400': 'md-backgroundColor-grey-400',
  'grey-500': 'md-backgroundColor-grey-500',
  'grey-600': 'md-backgroundColor-grey-600',
  'grey-700': 'md-backgroundColor-grey-700',
  'grey-800': 'md-backgroundColor-grey-800',
  'grey-900': 'md-backgroundColor-grey-900',
  'indigo-50': 'md-backgroundColor-indigo-50',
  'indigo-100': 'md-backgroundColor-indigo-100',
  'indigo-200': 'md-backgroundColor-indigo-200',
  'indigo-300': 'md-backgroundColor-indigo-300',
  'indigo-400': 'md-backgroundColor-indigo-400',
  'indigo-500': 'md-backgroundColor-indigo-500',
  'indigo-600': 'md-backgroundColor-indigo-600',
  'indigo-700': 'md-backgroundColor-indigo-700',
  'indigo-800': 'md-backgroundColor-indigo-800',
  'indigo-900': 'md-backgroundColor-indigo-900',
  'indigo-a100': 'md-backgroundColor-indigo-a100',
  'indigo-a200': 'md-backgroundColor-indigo-a200',
  'indigo-a400': 'md-backgroundColor-indigo-a400',
  'indigo-a700': 'md-backgroundColor-indigo-a700',
  'light-blue-50': 'md-backgroundColor-light-blue-50',
  'light-blue-100': 'md-backgroundColor-light-blue-100',
  'light-blue-200': 'md-backgroundColor-light-blue-200',
  'light-blue-300': 'md-backgroundColor-light-blue-300',
  'light-blue-400': 'md-backgroundColor-light-blue-400',
  'light-blue-500': 'md-backgroundColor-light-blue-500',
  'light-blue-600': 'md-backgroundColor-light-blue-600',
  'light-blue-700': 'md-backgroundColor-light-blue-700',
  'light-blue-800': 'md-backgroundColor-light-blue-800',
  'light-blue-900': 'md-backgroundColor-light-blue-900',
  'light-blue-a100': 'md-backgroundColor-light-blue-a100',
  'light-blue-a200': 'md-backgroundColor-light-blue-a200',
  'light-blue-a400': 'md-backgroundColor-light-blue-a400',
  'light-blue-a700': 'md-backgroundColor-light-blue-a700',
  'light-green-50': 'md-backgroundColor-light-green-50',
  'light-green-100': 'md-backgroundColor-light-green-100',
  'light-green-200': 'md-backgroundColor-light-green-200',
  'light-green-300': 'md-backgroundColor-light-green-300',
  'light-green-400': 'md-backgroundColor-light-green-400',
  'light-green-500': 'md-backgroundColor-light-green-500',
  'light-green-600': 'md-backgroundColor-light-green-600',
  'light-green-700': 'md-backgroundColor-light-green-700',
  'light-green-800': 'md-backgroundColor-light-green-800',
  'light-green-900': 'md-backgroundColor-light-green-900',
  'light-green-a100': 'md-backgroundColor-light-green-a100',
  'light-green-a200': 'md-backgroundColor-light-green-a200',
  'light-green-a400': 'md-backgroundColor-light-green-a400',
  'light-green-a700': 'md-backgroundColor-light-green-a700',
  'lime-50': 'md-backgroundColor-lime-50',
  'lime-100': 'md-backgroundColor-lime-100',
  'lime-200': 'md-backgroundColor-lime-200',
  'lime-300': 'md-backgroundColor-lime-300',
  'lime-400': 'md-backgroundColor-lime-400',
  'lime-500': 'md-backgroundColor-lime-500',
  'lime-600': 'md-backgroundColor-lime-600',
  'lime-700': 'md-backgroundColor-lime-700',
  'lime-800': 'md-backgroundColor-lime-800',
  'lime-900': 'md-backgroundColor-lime-900',
  'lime-a100': 'md-backgroundColor-lime-a100',
  'lime-a200': 'md-backgroundColor-lime-a200',
  'lime-a400': 'md-backgroundColor-lime-a400',
  'lime-a700': 'md-backgroundColor-lime-a700',
  'orange-50': 'md-backgroundColor-orange-50',
  'orange-100': 'md-backgroundColor-orange-100',
  'orange-200': 'md-backgroundColor-orange-200',
  'orange-300': 'md-backgroundColor-orange-300',
  'orange-400': 'md-backgroundColor-orange-400',
  'orange-500': 'md-backgroundColor-orange-500',
  'orange-600': 'md-backgroundColor-orange-600',
  'orange-700': 'md-backgroundColor-orange-700',
  'orange-800': 'md-backgroundColor-orange-800',
  'orange-900': 'md-backgroundColor-orange-900',
  'orange-a100': 'md-backgroundColor-orange-a100',
  'orange-a200': 'md-backgroundColor-orange-a200',
  'orange-a400': 'md-backgroundColor-orange-a400',
  'orange-a700': 'md-backgroundColor-orange-a700',
  'pink-50': 'md-backgroundColor-pink-50',
  'pink-100': 'md-backgroundColor-pink-100',
  'pink-200': 'md-backgroundColor-pink-200',
  'pink-300': 'md-backgroundColor-pink-300',
  'pink-400': 'md-backgroundColor-pink-400',
  'pink-500': 'md-backgroundColor-pink-500',
  'pink-600': 'md-backgroundColor-pink-600',
  'pink-700': 'md-backgroundColor-pink-700',
  'pink-800': 'md-backgroundColor-pink-800',
  'pink-900': 'md-backgroundColor-pink-900',
  'pink-a100': 'md-backgroundColor-pink-a100',
  'pink-a200': 'md-backgroundColor-pink-a200',
  'pink-a400': 'md-backgroundColor-pink-a400',
  'pink-a700': 'md-backgroundColor-pink-a700',
  'purple-50': 'md-backgroundColor-purple-50',
  'purple-100': 'md-backgroundColor-purple-100',
  'purple-200': 'md-backgroundColor-purple-200',
  'purple-300': 'md-backgroundColor-purple-300',
  'purple-400': 'md-backgroundColor-purple-400',
  'purple-500': 'md-backgroundColor-purple-500',
  'purple-600': 'md-backgroundColor-purple-600',
  'purple-700': 'md-backgroundColor-purple-700',
  'purple-800': 'md-backgroundColor-purple-800',
  'purple-900': 'md-backgroundColor-purple-900',
  'purple-a100': 'md-backgroundColor-purple-a100',
  'purple-a200': 'md-backgroundColor-purple-a200',
  'purple-a400': 'md-backgroundColor-purple-a400',
  'purple-a700': 'md-backgroundColor-purple-a700',
  'red-50': 'md-backgroundColor-red-50',
  'red-100': 'md-backgroundColor-red-100',
  'red-200': 'md-backgroundColor-red-200',
  'red-300': 'md-backgroundColor-red-300',
  'red-400': 'md-backgroundColor-red-400',
  'red-500': 'md-backgroundColor-red-500',
  'red-600': 'md-backgroundColor-red-600',
  'red-700': 'md-backgroundColor-red-700',
  'red-800': 'md-backgroundColor-red-800',
  'red-900': 'md-backgroundColor-red-900',
  'red-a100': 'md-backgroundColor-red-a100',
  'red-a200': 'md-backgroundColor-red-a200',
  'red-a400': 'md-backgroundColor-red-a400',
  'red-a700': 'md-backgroundColor-red-a700',
  'teal-50': 'md-backgroundColor-teal-50',
  'teal-100': 'md-backgroundColor-teal-100',
  'teal-200': 'md-backgroundColor-teal-200',
  'teal-300': 'md-backgroundColor-teal-300',
  'teal-400': 'md-backgroundColor-teal-400',
  'teal-500': 'md-backgroundColor-teal-500',
  'teal-600': 'md-backgroundColor-teal-600',
  'teal-700': 'md-backgroundColor-teal-700',
  'teal-800': 'md-backgroundColor-teal-800',
  'teal-900': 'md-backgroundColor-teal-900',
  'teal-a100': 'md-backgroundColor-teal-a100',
  'teal-a200': 'md-backgroundColor-teal-a200',
  'teal-a400': 'md-backgroundColor-teal-a400',
  'teal-a700': 'md-backgroundColor-teal-a700',
  'yellow-50': 'md-backgroundColor-yellow-50',
  'yellow-100': 'md-backgroundColor-yellow-100',
  'yellow-200': 'md-backgroundColor-yellow-200',
  'yellow-300': 'md-backgroundColor-yellow-300',
  'yellow-400': 'md-backgroundColor-yellow-400',
  'yellow-500': 'md-backgroundColor-yellow-500',
  'yellow-600': 'md-backgroundColor-yellow-600',
  'yellow-700': 'md-backgroundColor-yellow-700',
  'yellow-800': 'md-backgroundColor-yellow-800',
  'yellow-900': 'md-backgroundColor-yellow-900',
  'yellow-a100': 'md-backgroundColor-yellow-a100',
  'yellow-a200': 'md-backgroundColor-yellow-a200',
  'yellow-a400': 'md-backgroundColor-yellow-a400',
  'yellow-a700': 'md-backgroundColor-yellow-a700',
};

describe('Given a material design color map', () => {
  test('then the map should be as expected', () => {
    expect(MdBackgroundColorMaps.map).toStrictEqual(expectedMap);
  });
});

export { expectedMap };
