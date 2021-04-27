import * as main from '../../src';
import { setAlign } from '../../src/factories/setAlign';
import { setBackgroundColor } from '../../src/factories/setBackgroundColor';
import { setColor } from '../../src/factories/setColor';
import { setDisplay } from '../../src/factories/setDisplay';
import { setDirection } from '../../src/factories/setDirection';
import { setHeight } from '../../src/factories/setHeight';
import { setJustify } from '../../src/factories/setJustify';
import { setLayout } from '../../src/factories/setLayout';
import { setMargin } from '../../src/factories/setMargin';
import { setMaxHeight } from '../../src/factories/setMaxHeight';
import { setMaxWidth } from '../../src/factories/setMaxWidth';
import { setMinHeight } from '../../src/factories/setMinHeight';
import { setMinWidth } from '../../src/factories/setMinWidth';
import { setPadding } from '../../src/factories/setPadding';
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
      setLayout,
      setMargin,
      setMaxHeight,
      setMaxWidth,
      setMinHeight,
      setMinWidth,
      setPadding,
      setWidth,
    });
  });
});
