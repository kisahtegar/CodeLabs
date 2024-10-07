/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Partial *
//
// The Partial type in TypeScript allows you to make all properties of a type optional. This is
// useful when you need to create an object with only a subset of the properties of an existing
// type.
//
// Here’s an example of using the Partial type in TypeScript:

interface User {
  name: string;
  age: number;
  email: string;
}

function createUser(user: Partial<User>): User {
  return {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    ...user,
  };
}

const newUser = createUser({ name: "Jane Doe" });

console.log(newUser);
// Output: { name: 'Jane Doe', age: 30, email: 'john.doe@example.com' }

// Constructs a type with all properties of Type set to optional. This utility will return a
// type that represents all subsets of a given type.

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
