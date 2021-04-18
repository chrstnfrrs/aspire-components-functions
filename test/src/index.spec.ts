import * as main from '../../src';
import { setAlign } from '../../src/factories/setAlign';
import { setBackgroundColor } from '../../src/factories/setBackgroundColor';
import { setColor } from '../../src/factories/setColor';
import { setDisplay } from '../../src/factories/setDisplay';
import { setDirection } from '../../src/factories/setDirection';
import { setJustify } from '../../src/factories/setJustify';
import { setHeight } from '../../src/factories/setHeight';
import { setMaxHeight } from '../../src/factories/setMaxHeight';
import { setMaxWidth } from '../../src/factories/setMaxWidth';
import { setMinHeight } from '../../src/factories/setMinHeight';
import { setMinWidth } from '../../src/factories/setMinWidth';
import { setWidth } from '../../src/factories/setWidth';

describe('index', () => {
  test('should export expected functions', () => {
    // eslint-disable-next-line jest/prefer-strict-equal
    expect(main).toEqual({
      setAlign,
      setBackgroundColor,
      setColor,
      setDirection,
      setDisplay,
      setHeight,
      setJustify,
      setMaxHeight,
      setMaxWidth,
      setMinHeight,
      setMinWidth,
      setWidth,
    });
  });
});
