/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/type-compatibility.html#advanced-topics
- https://www.youtube.com/playlist?list=PLw5h0DiJ-9PBIgIyd2ZA1CVnJf0BLFJg2
- https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#handbook-content
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Mapped Types *
//
// Mapped types in TypeScript are a way to create a new type based on an existing type, where each
// property of the existing type is transformed in some way. Mapped types are declared using a
// combination of the keyof operator and a type that maps each property of the existing type to a
// new property type.
//
// For example, the following is a mapped type that takes an object type and creates a new type
// with all properties of the original type but with their type changed to readonly:

type Readonlyy<T> = {
  readonly [P in keyof T]: T[P];
};

let obj = { x: 10, y: 20 };
let readonlyObj: Readonlyy<typeof obj> = obj;

// In this example, the Readonlyy mapped type takes an object type T and creates a new type with
// all properties of T but with their type changed to readonly. The keyof T operator is used to
// extract the names of the properties of T, and the T[P] syntax is used to access the type of
// each property of T. The readonly keyword is used to make the properties of the new type readonly.

// When you don’t want to repeat yourself, sometimes a type needs to be based on another type.
//
// Mapped types build on the syntax for index signatures, which are used to declare the types of
// properties which have not been declared ahead of time:

//      type OnlyBoolsAndHorses = {
//        [key: string]: boolean | Horse;
//      };

//      const conforms: OnlyBoolsAndHorses = {
//        del: true,
//        rodney: false,
//      };

// A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof)
// to iterate through keys to create a type:

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

// In this example, OptionsFlags will take all the properties from the type Type and change their values
// to be a boolean.

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;
//      type FeatureOptions = {
//          darkMode: boolean;
//          newUserProfile: boolean;
//      }

// * -------------------------------------------------------------------------------------------- *
// * Mapping Modifiers *
//
// There are two additional modifiers which can be applied during mapping: readonly and ? which
// affect mutability and optionality respectively.
//
// You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix,
// then + is assumed.

// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};

type LockedAccount = {
  readonly id: string;
  readonly name: string;
};

type UnlockedAccount = CreateMutable<LockedAccount>;
//      type UnlockedAccount = {
//        id: string;
//        name: string;
//      };

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};

type User = Concrete<MaybeUser>;
//      type User = {
//        id: string;
//        name: string;
//        age: number;
//      };
