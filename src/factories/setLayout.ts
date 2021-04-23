import { setAlign } from './setAlign';
import { setBackgroundColor } from './setBackgroundColor';
import { setColor } from './setColor';
import { setDirection } from './setDirection';
import { setDisplay } from './setDisplay';
import { setHeight } from './setHeight';
import { setJustify } from './setJustify';
import { setMargin } from './setMargin';
import { setMaxHeight } from './setMaxHeight';
import { setMaxWidth } from './setMaxWidth';
import { setMinHeight } from './setMinHeight';
import { setMinWidth } from './setMinWidth';
import { setPadding } from './setPadding';
import { setWidth } from './setWidth';

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
  setAlign(props.align),
  setBackgroundColor(props.backgroundColor),
  setColor(props.color),
  setDirection(props.direction),
  setDisplay(props.display),
  setHeight(props.height),
  setJustify(props.justify),
  setMargin(props.margin),
  setMaxHeight(props.maxHeight),
  setMaxWidth(props.maxWidth),
  setMinHeight(props.minHeight),
  setMinWidth(props.minWidth),
  setPadding(props.padding),
  setWidth(props.width),
];

export { setLayout };
