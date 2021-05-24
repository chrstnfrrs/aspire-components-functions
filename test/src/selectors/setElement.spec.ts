import Chance from 'chance';

import { setElement } from '../../../src/selectors/setElement';
import * as BackgroundColorSelector from '../../../src/selectors/setBackgroundColor';
import * as ColorSelector from '../../../src/selectors/setColor';
import * as HeightSelector from '../../../src/selectors/setHeight';
import * as MarginSelector from '../../../src/selectors/setMargin';
import * as MaxHeightSelector from '../../../src/selectors/setMaxHeight';
import * as MaxWidthSelector from '../../../src/selectors/setMaxWidth';
import * as MinHeightSelector from '../../../src/selectors/setMinHeight';
import * as MinWidthSelector from '../../../src/selectors/setMinWidth';
import * as PaddingSelector from '../../../src/selectors/setPadding';
import * as WidthSelector from '../../../src/selectors/setWidth';

const chance = new Chance();

jest.mock('../../../src/selectors/setBackgroundColor');
jest.mock('../../../src/selectors/setColor');
jest.mock('../../../src/selectors/setHeight');
jest.mock('../../../src/selectors/setMargin');
jest.mock('../../../src/selectors/setMaxHeight');
jest.mock('../../../src/selectors/setMaxWidth');
jest.mock('../../../src/selectors/setMinHeight');
jest.mock('../../../src/selectors/setMinWidth');
jest.mock('../../../src/selectors/setPadding');
jest.mock('../../../src/selectors/setWidth');

const { setBackgroundColor } = BackgroundColorSelector as jest.Mocked<typeof BackgroundColorSelector>;
const { setColor } = ColorSelector as jest.Mocked<typeof ColorSelector>;
const { setHeight } = HeightSelector as jest.Mocked<typeof HeightSelector>;
const { setMargin } = MarginSelector as jest.Mocked<typeof MarginSelector>;
const { setMaxHeight } = MaxHeightSelector as jest.Mocked<typeof MaxHeightSelector>;
const { setMaxWidth } = MaxWidthSelector as jest.Mocked<typeof MaxWidthSelector>;
const { setMinHeight } = MinHeightSelector as jest.Mocked<typeof MinHeightSelector>;
const { setMinWidth } = MinWidthSelector as jest.Mocked<typeof MinWidthSelector>;
const { setPadding } = PaddingSelector as jest.Mocked<typeof PaddingSelector>;
const { setWidth } = WidthSelector as jest.Mocked<typeof WidthSelector>;

describe('setElement', () => {
  let result: (string | undefined)[],
    expectedResult: (string | undefined)[],
    backgroundColor: string,
    color: string,
    height: string,
    margin: string,
    maxHeight: string,
    maxWidth: string,
    minHeight: string,
    minWidth: string,
    padding: string,
    width: string;

  beforeEach(() => {
    backgroundColor = chance.string();
    color = chance.string();
    height = chance.string();
    margin = chance.string();
    maxHeight = chance.string();
    maxWidth = chance.string();
    minHeight = chance.string();
    minWidth = chance.string();
    padding = chance.string();
    width = chance.string();

    const props = {
      backgroundColor,
      color,
      height,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      padding,
      width,
    };

    const expectedBackgroundColor = chance.string();
    const expectedColor = chance.string();
    const expectedHeight = chance.string();
    const expectedMargin = chance.string();
    const expectedMaxHeight = chance.string();
    const expectedMaxWidth = chance.string();
    const expectedMinHeight = chance.string();
    const expectedMinWidth = chance.string();
    const expectedPadding = chance.string();
    const expectedWidth = chance.string();

    setBackgroundColor.mockReturnValue(expectedBackgroundColor);
    setColor.mockReturnValue(expectedColor);
    setHeight.mockReturnValue(expectedHeight);
    setMargin.mockReturnValue(expectedMargin);
    setMaxHeight.mockReturnValue(expectedMaxHeight);
    setMaxWidth.mockReturnValue(expectedMaxWidth);
    setMinHeight.mockReturnValue(expectedMinHeight);
    setMinWidth.mockReturnValue(expectedMinWidth);
    setPadding.mockReturnValue(expectedPadding);
    setWidth.mockReturnValue(expectedWidth);

    expectedResult = [
      expectedBackgroundColor,
      expectedColor,
      expectedHeight,
      expectedMargin,
      expectedMaxHeight,
      expectedMaxWidth,
      expectedMinHeight,
      expectedMinWidth,
      expectedPadding,
      expectedWidth,
    ];

    result = setElement(props);
  });
  test('should call selectors with proper props', () => {
    expect(setBackgroundColor).toHaveBeenCalledTimes(1);
    expect(setBackgroundColor).toHaveBeenCalledWith(backgroundColor);
    expect(setColor).toHaveBeenCalledTimes(1);
    expect(setColor).toHaveBeenCalledWith(color);
    expect(setHeight).toHaveBeenCalledTimes(1);
    expect(setHeight).toHaveBeenCalledWith(height);
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
