export interface FactoryMap {
  [name: string]: string;
}

export type IFactoryFunction = (type: string | undefined) => string | undefined;
export type IFactoryArrayFunction = (type: string | string[] | undefined) => string | undefined;
