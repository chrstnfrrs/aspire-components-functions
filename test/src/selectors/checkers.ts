import Chance from 'chance';

import * as Types from '../../../src/types';
import * as TestTypes from '../types';

const chance = new Chance();

const checkSelector = (
  selector: Types.SelectorFunction | Types.SelectorArrayFunction,
  selectorName: string,
  prop: string,
  keys: TestTypes.IKeyList,
): void => {
  describe.each([...keys])(`When ${selectorName} is called with %s`, (key) => {
    const validatedKey = key.split('.').join('_').split('/').join('__');

    test(`should return ${prop}-${validatedKey}`, () => {
      expect(selector(key)).toStrictEqual(`${prop}-${validatedKey}`);
    });
  });
  describe(`When ${selectorName} is called with an invalid value`, () => {
    test('should return undefined', () => {
      expect(selector(chance.string())).toStrictEqual(undefined);
    });
  });
  describe(`When ${selectorName} is called with undefined`, () => {
    test('should return undefined', () => {
      expect(selector(undefined)).toStrictEqual(undefined);
    });
  });
};

const checkSelectorArray = (
  selector: Types.SelectorArrayFunction,
  selectorName: string,
  prop: string,
  keys: TestTypes.IKeyList,
): void => {
  const pickKeyFromMap = (): string => keys[chance.natural({ max: keys.length - 1 })];
  let arrayOfKeys: string[];

  describe(`When ${selectorName} is called with an array of valid values`, () => {
    let result: string | undefined;

    beforeEach(() => {
      arrayOfKeys = chance.n(pickKeyFromMap, chance.d6());
      result = selector(arrayOfKeys);
    });
    test(`should return all correct classes in a space separated string`, () => {
      arrayOfKeys.forEach((key) => {
        const validatedKey = key.split('.').join('_').split('/').join('__');

        expect(result).toContain(`${prop}-${validatedKey}`);
      });
    });
  });
  describe(`When ${selectorName} is called with an array with an invalid value`, () => {
    let result: string | undefined, validKeys: string[], invalidKeys: string[];

    beforeEach(() => {
      validKeys = chance.n(pickKeyFromMap, chance.d6());
      invalidKeys = chance.n(chance.string, chance.d6());

      arrayOfKeys = chance.shuffle([...validKeys, ...invalidKeys]);
      result = selector(arrayOfKeys);
    });
    test(`should return all correct classes and remove invalid classes in a space separated string`, () => {
      validKeys.forEach((key) => {
        const validatedKey = key.split('.').join('_').split('/').join('__');

        expect(result).toContain(`${prop}-${validatedKey}`);
      });
      invalidKeys.forEach((key) => {
        expect(result).not.toContain(`${key}`);
      });
    });
  });
};

const checkSelectorStringList = (
  selector: Types.SelectorArrayFunction,
  selectorName: string,
  prop: string,
  keys: TestTypes.IKeyList,
): void => {
  const pickKeyFromMap = (): string => keys[chance.natural({ max: keys.length - 1 })];
  let arrayOfKeys: string[];

  describe(`When ${selectorName} is called with a string list of valid values`, () => {
    let result: string | undefined;

    beforeEach(() => {
      arrayOfKeys = chance.n(pickKeyFromMap, chance.d6());
      result = selector(arrayOfKeys.join(' '));
    });
    test(`should return all correct classes in a space separated string`, () => {
      arrayOfKeys.forEach((key) => {
        const validatedKey = key.split('.').join('_').split('/').join('__');

        expect(result).toContain(`${prop}-${validatedKey}`);
      });
    });
  });
  describe(`When ${selectorName} is called with a string list with an invalid value`, () => {
    let result: string | undefined, validKeys: string[], invalidKeys: string[];

    beforeEach(() => {
      validKeys = chance.n(pickKeyFromMap, chance.d6());
      invalidKeys = chance.n(chance.string, chance.d6());

      arrayOfKeys = chance.shuffle([...validKeys, ...invalidKeys]);
      result = selector(arrayOfKeys.join(' '));
    });
    test(`should return all correct classes and remove invalid classes in a space separated string`, () => {
      validKeys.forEach((key) => {
        const validatedKey = key.split('.').join('_').split('/').join('__');

        expect(result).toContain(`${prop}-${validatedKey}`);
      });
      invalidKeys.forEach((key) => {
        expect(result).not.toContain(`${key}`);
      });
    });
  });
};

const checkMaterialSelector = (
  selector: Types.SelectorFunction,
  selectorName: string,
  prop: string,
  keys: TestTypes.IKeyList,
): void => {
  describe.each([...keys])(`When ${selectorName} is called with %s`, (key) => {
    const expectedField = `md-${prop}-${key}`;

    test(`should return ${expectedField}`, () => {
      expect(selector(key)).toStrictEqual(expectedField);
    });
  });
  describe(`When ${selectorName} is called with an invalid value`, () => {
    test('should return undefined', () => {
      expect(selector(chance.string())).toStrictEqual(undefined);
    });
  });
  describe(`When ${selectorName} is called with undefined`, () => {
    test('should return undefined', () => {
      expect(selector(undefined)).toStrictEqual(undefined);
    });
  });
};

export { checkSelector, checkSelectorArray, checkSelectorStringList, checkMaterialSelector };
