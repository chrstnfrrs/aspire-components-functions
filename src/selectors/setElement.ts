import * as BackgroundColorSelector from './setBackgroundColor';
import * as ColorSelector from './setColor';
import * as HeightSelector from './setHeight';
import * as MarginSelector from './setMargin';
import * as MaxHeightSelector from './setMaxHeight';
import * as MaxWidthSelector from './setMaxWidth';
import * as MinHeightSelector from './setMinHeight';
import * as MinWidthSelector from './setMinWidth';
import * as PaddingSelector from './setPadding';
import * as WidthSelector from './setWidth';

interface IElementProps {
  backgroundColor?: string;
  color?: string;
  height?: string;
  margin?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  padding?: string;
  width?: string;
}

const setElement = (props: IElementProps): (string | undefined)[] => [
  BackgroundColorSelector.setBackgroundColor(props.backgroundColor),
  ColorSelector.setColor(props.color),
  HeightSelector.setHeight(props.height),
  MarginSelector.setMargin(props.margin),
  MaxHeightSelector.setMaxHeight(props.maxHeight),
  MaxWidthSelector.setMaxWidth(props.maxWidth),
  MinHeightSelector.setMinHeight(props.minHeight),
  MinWidthSelector.setMinWidth(props.minWidth),
  PaddingSelector.setPadding(props.padding),
  WidthSelector.setWidth(props.width),
];

export { setElement };
