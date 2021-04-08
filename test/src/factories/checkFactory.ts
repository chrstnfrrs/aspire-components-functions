import Chance from 'chance';

import { IFactoryFunction } from '../../../src/types';
import { IKeyList } from '../types';

const chance = new Chance();

const checkFactory = (factory: IFactoryFunction, factoryName: string, prop: string, keys: IKeyList): void => {
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
  describe(`When ${factoryName} is called with undefined`, () => {
    test('should return undefined', () => {
      expect(factory(undefined)).toStrictEqual(undefined);
    });
  });
};

const checkMaterialFactory = (factory: IFactoryFunction, factoryName: string, keys: IKeyList): void => {
  describe.each([...keys])(`When ${factoryName} is called with %s`, (key) => {
    test(`should return md-${key}`, () => {
      expect(factory(key)).toStrictEqual(`md-${key}`);
    });
  });
  describe(`When ${factoryName} is called with an invalid value`, () => {
    test('should return undefined', () => {
      expect(factory(chance.string())).toStrictEqual(undefined);
    });
  });
  describe(`When ${factoryName} is called with undefined`, () => {
    test('should return undefined', () => {
      expect(factory(undefined)).toStrictEqual(undefined);
    });
  });
};

export { checkFactory, checkMaterialFactory };
