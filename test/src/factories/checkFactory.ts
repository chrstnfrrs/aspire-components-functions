import Chance from 'chance';

import { IFactoryFunction } from '../../../src/types';
import { IKeyList } from '../types';

const chance = new Chance();

export const checkFactory = (factory: IFactoryFunction, factoryName: string, prop: string, keys: IKeyList): void => {
  describe.each([...keys])(`When ${factoryName} is called with %s`, (key) => {
    test(`should return ${prop}-${key}`, () => {
      expect(factory(key)).toStrictEqual(`${prop}-${key}`);
    });
  });
  describe(`When ${factoryName} is called with an invalid value`, () => {
    test('should return undefined', () => {
      expect(factory(chance.string())).toStrictEqual(undefined);
    });
  });
};
