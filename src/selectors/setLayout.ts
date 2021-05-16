import * as AlignSelector from './setAlign';
import * as BackgroundColorSelector from './setBackgroundColor';
import * as ColorSelector from './setColor';
import * as DirectionSelector from './setDirection';
import * as DisplaySelector from './setDisplay';
import * as HeightSelector from './setHeight';
import * as JustifySelector from './setJustify';
import * as MarginSelector from './setMargin';
import * as MaxHeightSelector from './setMaxHeight';
import * as MaxWidthSelector from './setMaxWidth';
import * as MinHeightSelector from './setMinHeight';
import * as MinWidthSelector from './setMinWidth';
import * as PaddingSelector from './setPadding';
import * as WidthSelector from './setWidth';

interface ILayoutProps {
  align?: string;
  backgroundColor?: string;
  color?: string;
  direction?: string;
  display?: string;
  height?: string;
  justify?: string;
  margin?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  padding?: string;
  width?: string;
}

const setLayout = (props: ILayoutProps): (string | undefined)[] => [
  AlignSelector.setAlign(props.align),
  BackgroundColorSelector.setBackgroundColor(props.backgroundColor),
  ColorSelector.setColor(props.color),
  DirectionSelector.setDirection(props.direction),
  DisplaySelector.setDisplay(props.display),
  HeightSelector.setHeight(props.height),
  JustifySelector.setJustify(props.justify),
  MarginSelector.setMargin(props.margin),
  MaxHeightSelector.setMaxHeight(props.maxHeight),
  MaxWidthSelector.setMaxWidth(props.maxWidth),
  MinHeightSelector.setMinHeight(props.minHeight),
  MinWidthSelector.setMinWidth(props.minWidth),
  PaddingSelector.setPadding(props.padding),
  WidthSelector.setWidth(props.width),
];

export { setLayout };
