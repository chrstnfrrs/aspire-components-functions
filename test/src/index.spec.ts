import * as main from '../../src';
import { setAlign } from '../../src/factories/setAlign';
import { setColor } from '../../src/factories/setColor';
import { setJustify } from '../../src/factories/setJustify';

describe('index', () => {
  test('should export expected functions', () => {
    // eslint-disable-next-line jest/prefer-strict-equal
    expect(main).toEqual({
      setAlign,
      setColor,
      setJustify,
    });
  });
});
