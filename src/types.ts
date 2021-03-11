export interface FactoryMap {
  [name: string]: string;
}

export type IFactoryFunction = (type: string) => string | undefined;
