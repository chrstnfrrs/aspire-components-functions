import Chance from 'chance';

import { IFactoryArrayFunction, IFactoryFunction } from '../../../src/types';
import { IKeyList } from '../types';

const chance = new Chance();

const checkFactory = (
  factory: IFactoryFunction | IFactoryArrayFunction,
  factoryName: string,
  prop: string,
  keys: IKeyList,
): void => {
  describe.each([...keys])(`When ${factoryName} is called with %s`, (key) => {
    const validatedKey = key.replaceAll('.', '_').replaceAll('/', '__');

    test(`should return ${prop}-${validatedKey}`, () => {
      expect(factory(key)).toStrictEqual(`${prop}-${validatedKey}`);
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

const checkFactoryArray = (factory: IFactoryArrayFunction, factoryName: string, prop: string, keys: IKeyList): void => {
  const pickKeyFromMap = (): string => keys[chance.natural({ max: keys.length - 1 })];
  let arrayOfKeys: string[];

  describe(`When ${factoryName} is called with an array of valid values`, () => {
    let result: string | undefined;

    beforeEach(() => {
      arrayOfKeys = chance.n(pickKeyFromMap, chance.d6());
      result = factory(arrayOfKeys);
    });
    test(`should return all correct classes in a space separated string`, () => {
      arrayOfKeys.forEach((key) => {
        expect(result).toContain(`${prop}-${key}`);
      });
    });
  });
  describe(`When ${factoryName} is called with an array with an invalid value`, () => {
    let result: string | undefined, validKeys: string[], invalidKeys: string[];

    beforeEach(() => {
      validKeys = chance.n(pickKeyFromMap, chance.d6());
      invalidKeys = chance.n(chance.string, chance.d6());

      arrayOfKeys = chance.shuffle([...validKeys, ...invalidKeys]);
      result = factory(arrayOfKeys);
    });
    test(`should return all correct classes and remove invalid classes in a space separated string`, () => {
      validKeys.forEach((key) => {
        expect(result).toContain(`${prop}-${key}`);
      });
      invalidKeys.forEach((key) => {
        expect(result).not.toContain(`${key}`);
      });
    });
  });
};

const checkFactoryStringList = (
  factory: IFactoryArrayFunction,
  factoryName: string,
  prop: string,
  keys: IKeyList,
): void => {
  const pickKeyFromMap = (): string => keys[chance.natural({ max: keys.length - 1 })];
  let arrayOfKeys: string[];

  describe(`When ${factoryName} is called with a string list of valid values`, () => {
    let result: string | undefined;

    beforeEach(() => {
      arrayOfKeys = chance.n(pickKeyFromMap, chance.d6());
      result = factory(arrayOfKeys.join(' '));
    });
    test(`should return all correct classes in a space separated string`, () => {
      arrayOfKeys.forEach((key) => {
        expect(result).toContain(`${prop}-${key}`);
      });
    });
  });
  describe(`When ${factoryName} is called with a string list with an invalid value`, () => {
    let result: string | undefined, validKeys: string[], invalidKeys: string[];

    beforeEach(() => {
      validKeys = chance.n(pickKeyFromMap, chance.d6());
      invalidKeys = chance.n(chance.string, chance.d6());

      arrayOfKeys = chance.shuffle([...validKeys, ...invalidKeys]);
      result = factory(arrayOfKeys.join(' '));
    });
    test(`should return all correct classes and remove invalid classes in a space separated string`, () => {
      validKeys.forEach((key) => {
        expect(result).toContain(`${prop}-${key}`);
      });
      invalidKeys.forEach((key) => {
        expect(result).not.toContain(`${key}`);
      });
    });
  });
};

const checkMaterialFactory = (factory: IFactoryFunction, factoryName: string, prop: string, keys: IKeyList): void => {
  describe.each([...keys])(`When ${factoryName} is called with %s`, (key) => {
    const expectedField = `md-${prop}-${key}`;

    test(`should return ${expectedField}`, () => {
      expect(factory(key)).toStrictEqual(expectedField);
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

export { checkFactory, checkFactoryArray, checkFactoryStringList, checkMaterialFactory };
