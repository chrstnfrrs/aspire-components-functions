import Chance from 'chance';

import { setLayout } from '../../../src/selectors/setLayout';
import * as AlignSelector from '../../../src/selectors/setAlign';
import * as BackgroundColorSelector from '../../../src/selectors/setBackgroundColor';
import * as ColorSelector from '../../../src/selectors/setColor';
import * as DirectionSelector from '../../../src/selectors/setDirection';
import * as DisplaySelector from '../../../src/selectors/setDisplay';
import * as HeightSelector from '../../../src/selectors/setHeight';
import * as JustifySelector from '../../../src/selectors/setJustify';
import * as MarginSelector from '../../../src/selectors/setMargin';
import * as MaxHeightSelector from '../../../src/selectors/setMaxHeight';
import * as MaxWidthSelector from '../../../src/selectors/setMaxWidth';
import * as MinHeightSelector from '../../../src/selectors/setMinHeight';
import * as MinWidthSelector from '../../../src/selectors/setMinWidth';
import * as PaddingSelector from '../../../src/selectors/setPadding';
import * as WidthSelector from '../../../src/selectors/setWidth';

const chance = new Chance();

jest.mock('../../../src/selectors/setAlign');
jest.mock('../../../src/selectors/setBackgroundColor');
jest.mock('../../../src/selectors/setColor');
jest.mock('../../../src/selectors/setDirection');
jest.mock('../../../src/selectors/setDisplay');
jest.mock('../../../src/selectors/setHeight');
jest.mock('../../../src/selectors/setJustify');
jest.mock('../../../src/selectors/setMargin');
jest.mock('../../../src/selectors/setMaxHeight');
jest.mock('../../../src/selectors/setMaxWidth');
jest.mock('../../../src/selectors/setMinHeight');
jest.mock('../../../src/selectors/setMinWidth');
jest.mock('../../../src/selectors/setPadding');
jest.mock('../../../src/selectors/setWidth');

const { setAlign } = AlignSelector as jest.Mocked<typeof AlignSelector>;
const { setBackgroundColor } = BackgroundColorSelector as jest.Mocked<typeof BackgroundColorSelector>;
const { setColor } = ColorSelector as jest.Mocked<typeof ColorSelector>;
const { setDirection } = DirectionSelector as jest.Mocked<typeof DirectionSelector>;
const { setDisplay } = DisplaySelector as jest.Mocked<typeof DisplaySelector>;
const { setHeight } = HeightSelector as jest.Mocked<typeof HeightSelector>;
const { setJustify } = JustifySelector as jest.Mocked<typeof JustifySelector>;
const { setMargin } = MarginSelector as jest.Mocked<typeof MarginSelector>;
const { setMaxHeight } = MaxHeightSelector as jest.Mocked<typeof MaxHeightSelector>;
const { setMaxWidth } = MaxWidthSelector as jest.Mocked<typeof MaxWidthSelector>;
const { setMinHeight } = MinHeightSelector as jest.Mocked<typeof MinHeightSelector>;
const { setMinWidth } = MinWidthSelector as jest.Mocked<typeof MinWidthSelector>;
const { setPadding } = PaddingSelector as jest.Mocked<typeof PaddingSelector>;
const { setWidth } = WidthSelector as jest.Mocked<typeof WidthSelector>;

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
  test('should call selectors with proper props', () => {
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
  test('should map values from each Selector to an index in the array', () => {
    expect(result).toStrictEqual(expectedResult);
  });
});
