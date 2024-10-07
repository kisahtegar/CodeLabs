/*! ********************************************************************************
Reference:
- https://javascript.info/strict-mode
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
************************************************************************************ */

// * -------------------------------------------------------------------------------------------- *
// * Strict Mode *
//
// For a long time, JavaScript evolved without compatibility issues. New features were added to
// the language while old functionality didn’t change.
//
// That had the benefit of never breaking existing code. But the downside was that any mistake or
// an imperfect decision made by JavaScript’s creators got stuck in the language forever.
//
// This was the case until 2009 when ECMAScript 5 (ES5) appeared. It added new features to the language
// and modified some of the existing ones. To keep the old code working, most such modifications are
// off by default. You need to explicitly enable them with a special directive: "use strict".
//
// “use strict”
//
// The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of
// a script, the whole script works the “modern” way. Ensure that “use strict” is at the top
//
// For example:

"use strict";
// this code works the modern way
// ...

// Quite soon we’re going to learn functions (a way to group commands), so let’s note in advance
// that "use strict" can be put at the beginning of a function. Doing that enables strict mode
// in that function only. But usually people use it for the whole script.

// Should we “use strict”?
// The question may sound obvious, but it’s not so.
//
// One could recommend to start scripts with "use strict"… But you know what’s cool?
//
// Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll
// surely get to them), that enable use strict automatically. So we don’t need to add the
// "use strict" directive, if we use them.
//
// So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your
// code is all in classes and modules, you may omit it.
//
// As of now, we’ve got to know about use strict in general.
//
// In the next chapters, as we learn language features, we’ll see the differences between the
// strict and old modes. Luckily, there aren’t many and they actually make our lives better.
//
// All examples in this tutorial assume strict mode unless (very rarely) specified otherwise.
