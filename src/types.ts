interface ISelectorMap {
  [name: string]: string;
}

type SelectorFunction = (type: string | undefined) => string | undefined;
type SelectorArrayFunction = (type: string | string[] | undefined) => string | undefined;

export { ISelectorMap, SelectorFunction, SelectorArrayFunction };
