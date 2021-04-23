import Chance from 'chance';

import { setLayout } from '../../../src/factories/setLayout';
import * as AlignFactory from '../../../src/factories/setAlign';
import * as BackgroundColorFactory from '../../../src/factories/setBackgroundColor';
import * as ColorFactory from '../../../src/factories/setColor';
import * as DirectionFactory from '../../../src/factories/setDirection';
import * as DisplayFactory from '../../../src/factories/setDisplay';
import * as HeightFactory from '../../../src/factories/setHeight';
import * as JustifyFactory from '../../../src/factories/setJustify';
import * as MarginFactory from '../../../src/factories/setMargin';
import * as MaxHeightFactory from '../../../src/factories/setMaxHeight';
import * as MaxWidthFactory from '../../../src/factories/setMaxWidth';
import * as MinHeightFactory from '../../../src/factories/setMinHeight';
import * as MinWidthFactory from '../../../src/factories/setMinWidth';
import * as PaddingFactory from '../../../src/factories/setPadding';
import * as WidthFactory from '../../../src/factories/setWidth';

const chance = new Chance();

jest.mock('../../../src/factories/setAlign');
jest.mock('../../../src/factories/setBackgroundColor');
jest.mock('../../../src/factories/setColor');
jest.mock('../../../src/factories/setDirection');
jest.mock('../../../src/factories/setDisplay');
jest.mock('../../../src/factories/setHeight');
jest.mock('../../../src/factories/setJustify');
jest.mock('../../../src/factories/setMargin');
jest.mock('../../../src/factories/setMaxHeight');
jest.mock('../../../src/factories/setMaxWidth');
jest.mock('../../../src/factories/setMinHeight');
jest.mock('../../../src/factories/setMinWidth');
jest.mock('../../../src/factories/setPadding');
jest.mock('../../../src/factories/setWidth');

const { setAlign } = AlignFactory as jest.Mocked<typeof AlignFactory>;
const { setBackgroundColor } = BackgroundColorFactory as jest.Mocked<typeof BackgroundColorFactory>;
const { setColor } = ColorFactory as jest.Mocked<typeof ColorFactory>;
const { setDirection } = DirectionFactory as jest.Mocked<typeof DirectionFactory>;
const { setDisplay } = DisplayFactory as jest.Mocked<typeof DisplayFactory>;
const { setHeight } = HeightFactory as jest.Mocked<typeof HeightFactory>;
const { setJustify } = JustifyFactory as jest.Mocked<typeof JustifyFactory>;
const { setMargin } = MarginFactory as jest.Mocked<typeof MarginFactory>;
const { setMaxHeight } = MaxHeightFactory as jest.Mocked<typeof MaxHeightFactory>;
const { setMaxWidth } = MaxWidthFactory as jest.Mocked<typeof MaxWidthFactory>;
const { setMinHeight } = MinHeightFactory as jest.Mocked<typeof MinHeightFactory>;
const { setMinWidth } = MinWidthFactory as jest.Mocked<typeof MinWidthFactory>;
const { setPadding } = PaddingFactory as jest.Mocked<typeof PaddingFactory>;
const { setWidth } = WidthFactory as jest.Mocked<typeof WidthFactory>;

describe('setLayout', () => {
  let result: (string | undefined)[],
    expectedResult: (string | undefined)[],
    align: string,
    backgroundColor: string,
    color: string,
    direction: string,
    display: string,
    height: string,
    justify: string,
    margin: string,
    maxHeight: string,
    maxWidth: string,
    minHeight: string,
    minWidth: string,
    padding: string,
    width: string;

  beforeEach(() => {
    align = chance.string();
    backgroundColor = chance.string();
    color = chance.string();
    direction = chance.string();
    display = chance.string();
    height = chance.string();
    justify = chance.string();
    margin = chance.string();
    maxHeight = chance.string();
    maxWidth = chance.string();
    minHeight = chance.string();
    minWidth = chance.string();
    padding = chance.string();
    width = chance.string();

    const props = {
      align,
      backgroundColor,
      color,
      direction,
      display,
      height,
      justify,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
      width,
    };

    const expectedAlign = chance.string();
    const expectedBackgroundColor = chance.string();
    const expectedColor = chance.string();
    const expectedDirection = chance.string();
    const expectedDisplay = chance.string();
    const expectedHeight = chance.string();
    const expectedJustify = chance.string();
    const expectedMargin = chance.string();
    const expectedMaxHeight = chance.string();
    const expectedMaxWidth = chance.string();
    const expectedMinHeight = chance.string();
    const expectedMinWidth = chance.string();
    const expectedPadding = chance.string();
    const expectedWidth = chance.string();

    setAlign.mockReturnValue(expectedAlign);
    setBackgroundColor.mockReturnValue(expectedBackgroundColor);
    setColor.mockReturnValue(expectedColor);
    setDirection.mockReturnValue(expectedDirection);
    setDisplay.mockReturnValue(expectedDisplay);
    setHeight.mockReturnValue(expectedHeight);
    setJustify.mockReturnValue(expectedJustify);
    setMargin.mockReturnValue(expectedMargin);
    setMaxHeight.mockReturnValue(expectedMaxHeight);
    setMaxWidth.mockReturnValue(expectedMaxWidth);
    setMinHeight.mockReturnValue(expectedMinHeight);
    setMinWidth.mockReturnValue(expectedMinWidth);
    setPadding.mockReturnValue(expectedPadding);
    setWidth.mockReturnValue(expectedWidth);

    expectedResult = [
      expectedAlign,
      expectedBackgroundColor,
      expectedColor,
      expectedDirection,
      expectedDisplay,
      expectedHeight,
      expectedJustify,
      expectedMargin,
      expectedMaxHeight,
      expectedMaxWidth,
      expectedMinHeight,
      expectedMinWidth,
      expectedPadding,
      expectedWidth,
    ];

    result = setLayout(props);
  });
  test('should call factories with proper props', () => {
    expect(setAlign).toHaveBeenCalledTimes(1);
    expect(setAlign).toHaveBeenCalledWith(align);
    expect(setBackgroundColor).toHaveBeenCalledTimes(1);
    expect(setBackgroundColor).toHaveBeenCalledWith(backgroundColor);
    expect(setColor).toHaveBeenCalledTimes(1);
    expect(setColor).toHaveBeenCalledWith(color);
    expect(setDirection).toHaveBeenCalledTimes(1);
    expect(setDirection).toHaveBeenCalledWith(direction);
    expect(setDisplay).toHaveBeenCalledTimes(1);
    expect(setDisplay).toHaveBeenCalledWith(display);
    expect(setHeight).toHaveBeenCalledTimes(1);
    expect(setHeight).toHaveBeenCalledWith(height);
    expect(setJustify).toHaveBeenCalledTimes(1);
    expect(setJustify).toHaveBeenCalledWith(justify);
    expect(setMargin).toHaveBeenCalledTimes(1);
    expect(setMargin).toHaveBeenCalledWith(margin);
    expect(setMaxHeight).toHaveBeenCalledTimes(1);
    expect(setMaxHeight).toHaveBeenCalledWith(maxHeight);
    expect(setMaxWidth).toHaveBeenCalledTimes(1);
    expect(setMaxWidth).toHaveBeenCalledWith(maxWidth);
    expect(setMinHeight).toHaveBeenCalledTimes(1);
    expect(setMinHeight).toHaveBeenCalledWith(minHeight);
    expect(setMinWidth).toHaveBeenCalledTimes(1);
    expect(setMinWidth).toHaveBeenCalledWith(minWidth);
    expect(setPadding).toHaveBeenCalledTimes(1);
    expect(setPadding).toHaveBeenCalledWith(padding);
    expect(setWidth).toHaveBeenCalledTimes(1);
    expect(setWidth).toHaveBeenCalledWith(width);
  });
  test('should map values from each factory to an index in the array', () => {
    expect(result).toStrictEqual(expectedResult);
  });
});
