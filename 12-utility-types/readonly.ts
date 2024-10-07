/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Readonly *
//
// Readonly constructs a type with all properties of Type set to readonly, meaning the properties of
// the constructed type cannot be reassigned.

interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

// Cannot assign to 'title' because it is a read-only property.
// todo.title = "Hello";
