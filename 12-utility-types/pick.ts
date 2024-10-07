/*! ********************************************************************************
Reference:
- https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Pick *
//
// Pick constructs a type by picking the set of properties Keys (string literal or union of string
// literals) from Type.

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
