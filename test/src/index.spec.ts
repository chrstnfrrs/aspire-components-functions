import * as main from '../../src';
import { setAlign } from '../../src/selectors/setAlign';
import { setBackgroundColor } from '../../src/selectors/setBackgroundColor';
import { setColor } from '../../src/selectors/setColor';
import { setDirection } from '../../src/selectors/setDirection';
import { setDisplay } from '../../src/selectors/setDisplay';
import { setElement } from '../../src/selectors/setElement';
import { setElevation } from '../../src/selectors/setElevation';
import { setFontSize } from '../../src/selectors/setFontSize';
import { setGap } from '../../src/selectors/setGap';
import { setHeight } from '../../src/selectors/setHeight';
import { setJustify } from '../../src/selectors/setJustify';
import { setLayout } from '../../src/selectors/setLayout';
import { setMargin } from '../../src/selectors/setMargin';
import { setMaxHeight } from '../../src/selectors/setMaxHeight';
import { setMaxWidth } from '../../src/selectors/setMaxWidth';
import { setMinHeight } from '../../src/selectors/setMinHeight';
import { setMinWidth } from '../../src/selectors/setMinWidth';
import { setPadding } from '../../src/selectors/setPadding';
import { setWidth } from '../../src/selectors/setWidth';

describe('index', () => {
  test('should export expected functions', () => {
    // eslint-disable-next-line jest/prefer-strict-equal
    expect(main).toEqual({
      setAlign,
      setBackgroundColor,
      setColor,
      setDirection,
      setDisplay,
      setElement,
      setElevation,
      setFontSize,
      setGap,
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
