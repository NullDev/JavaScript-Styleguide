[![NullDev JavaScript Styleguide](https://i.imgur.com/VcFtkgK.png)](https://nulldev.org)

# NullDev JavaScript StyleGuide

✨ _**Now with the new ESLint Flat Config Format!**_ ✨

<p align="center"><img height="150" width="auto" src="https://i.imgur.com/eCmJFjH.png" /></p>
<p align="center"><b>A <i>mostly</i> reasonable approach to JavaScript</b></p>
<p align="center"><sub>Or... Mainly NodeJS...</sub></p>

</p>

---

## Setup :gear:

### To integrate into your own project:

- Make sure ESLint is installed. For VSCode, [download the extension here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Navigate inside your project
- Install [Babel-ESLint](https://www.npmjs.com/package/@babel/eslint-parser)*: <br>
    $ `npm i -D @babel/eslint-parser @babel/core eslint @types/node` <br>
    Or with Bun: <br>
    $ `bun i -D @babel/eslint-parser @babel/core eslint @types/bun`
- Get the config: <br>
    $ `wget https://raw.githubusercontent.com/NullDev/JavaScript-Styleguide/master/eslint.config.js`
- Done! :) 

<sub>*) The rationale for using Babel-ESLint is that it supports the newest Stage-3 ECMAScript features.</sub>

### Or use the [NullDev Project Template](https://github.com/NullDev/JavaScript-Styleguide/tree/master/nulldev-template) ...

... with already preset config files and project structure

[DOWNLOAD](https://downgit.github.io/#/home?url=https://github.com/NullDev/JavaScript-Styleguide/tree/master/nulldev-template)

$ `npm i` - and you're ready to go!

---

## Table of Contents :bookmark_tabs:

  1. :clipboard: [Types](#types)
     <details>
     <summary>View contents</summary>

       - [1.1](#types--primitives) Primitives
       - [1.2](#types--complex) Complex

     </details>

  1. :link: [References](#references)
     <details>
     <summary>View contents</summary>

       - [2.1](#references--prefer-const) Prefer `const`
       - [2.2](#references--disallow-var) Disallow `var`
       - [2.3](#references--block-scope) Block scope

     </details>

  1. :package: [Objects](#objects)
     <details>
     <summary>View contents</summary>

     - [3.1](#objects--no-new) Literals
     - [3.2](#es6-computed-properties) Computed properties
     - [3.3](#es6-object-shorthand) Object shorthand
     - [3.4](#es6-object-concise) Object concise
     - [3.5](#objects--grouped-shorthand) Grouped shorthand
     - [3.6](#objects--quoted-props) Quoted properties
     - [3.7](#objects--prototype-builtins) Prototype Builtins
     - [3.8](#objects--rest-spread) Rest spread

     </details>

  1. :bookmark_tabs: [Arrays](#arrays)
     <details>
     <summary>View contents</summary>

     - [4.1](#arrays--literals) Literals
     - [4.2](#arrays--push) Push
     - [4.3](#es6-array-spreads) Array spreads
     - [4.4](#arrays--from-iterable) spread for iterable
     - [4.5](#arrays--from-array-like) Array-like objects
     - [4.6](#arrays--mapping) Mapping
     - [4.7](#arrays--callback-return) Callback return
     - [4.8](#arrays--bracket-newline) Linebreaks

     </details>

  1. :hammer: [Destructuring](#destructuring)
     <details>
     <summary>View contents</summary>

     - [5.1](#destructuring--object) Object destructuring
     - [5.2](#destructuring--array) Array destructuring
     - [5.3](#destructuring--object-over-array) Object over array

     </details>

  1. :page_facing_up: [Strings](#strings)
     <details>
     <summary>View contents</summary>

     - [6.1](#strings--quotes) Quotes
     - [6.2](#strings--line-length) Length
     - [6.3](#es6-template-literals) Template literals
     - [6.4](#strings--eval) Eval
     - [6.5](#strings--escaping) Escaping
     - [6.6](#strings--regex) Regular Expressions (RegEx)

     </details>

  1. :pager: [Functions](#functions)
     <details>
     <summary>View contents</summary>

     - [7.1](#functions--use-strict) Strict mode
     - [7.2](#functions--declarations) Declarations
     - [7.3](#functions--iife) IIFE's
     - [7.4](#functions--in-blocks) Non-function blocks
     - [7.5](#functions--note-on-blocks) Blocks (Info)
     - [7.6](#functions--arguments-shadow) Arguments shadow
     - [7.7](#es6-rest) Rest
     - [7.8](#es6-default-parameters) Default parameters
     - [7.9](#functions--default-side-effects) Side effects
     - [7.10](#functions--defaults-last) Defaults last
     - [7.11](#functions--constructor) Function constructor
     - [7.12](#functions--signature-spacing) Signature spacing
     - [7.13](#functions--mutate-params) Mutating parameters
     - [7.14](#functions--reassign-params) Reassigning parameters
     - [7.15](#functions--spread-vs-apply) Spread
     - [7.16](#functions--signature-invocation-indentation) Signature invocation indentation

     </details>

  1. :arrow_right: [Arrow Functions](#arrow-functions)
     <details>
     <summary>View contents</summary>

     - [8.1](#arrows--use-them) Usage
     - [8.2](#arrows--implicit-return) Implicit return
     - [8.3](#arrows--paren-wrap) Wrap
     - [8.4](#arrows--one-arg-parens) Omitting parentheses
     - [8.5](#arrows--confusing) Confusing functions
     - [8.6](#whitespace--implicit-arrow-linebreak) Linebreaks

     </details>

  1. :triangular_ruler: [Classes & Constructors](#classes--constructors)
     <details>
     <summary>View contents</summary>

     - [9.1](#constructors--use-class) Use `class`
     - [9.2](#constructors--extends) Inheritance
     - [9.3](#constructors--chaining) Chaining
     - [9.4](#constructors--tostring) toString methods
     - [9.5](#constructors--no-useless) No empty constructors
     - [9.6](#classes--no-duplicate-members) No duplicate members
     - [9.7](#classes--methods-use-this) `this` in Class-Methods

     </details>

  1. :postbox: [Modules](#modules)
     <details>
     <summary>View contents</summary>

     - [10.1](#modules--use-them) CommonJS 
     - [10.2](#modules--no-duplicate-imports) Duplicate imports
     - [10.3](#modules--no-mutable-exports) Mutable exports
     - [10.4](#modules--imports-first) Imports first
     - [10.5](#modules--import-extensions) Imports extensions
     - [10.6](#modules--multiline-imports-over-newlines) Multiline imports

     </details>

  1. :arrows_clockwise: [Iterators and Generators](#iterators-and-generators)
     <details>
     <summary>View contents</summary>

     - [11.1](#iterators--nope) Higher-order functions
     - [11.2](#generators--nope) Generators
     - [11.3](#generators--spacing) Spacing

     </details>

  1. :bookmark_tabs: [Properties](#properties)
     <details>
     <summary>View contents</summary>

     - [12.1](#properties--dot) Dot notation
     - [12.2](#properties--bracket) Bracket notation
     - [12.3](#es2016-properties--exponentiation-operator) Exponentiation operator

     </details>

  1. :floppy_disk: [Variables](#variables)
     <details>
     <summary>View contents</summary>

     - [13.1](#variables--const) Global namespace
     - [13.2](#variables--one-const) Declaration per variable
     - [13.3](#variables--const-let-group) Grouping
     - [13.4](#variables--define-where-used) Placing
     - [13.5](#variables--no-chain-assignment) Chain assignment
     - [13.6](#variables--unary-increment-decrement) Increment & decrement
     - [13.7](#variables--linebreak) Linebreaks
     - [13.8](#variables--no-unused-vars) Unused variables
     - [13.9](#variables--bitwise-floor) Bitwise floor

     </details>

  1. :arrow_heading_up: [Hoisting](#hoisting)
     <details>
     <summary>View contents</summary>

     - [14.1](#hoisting--about) About
     - [14.2](#hoisting--anon-expressions) Anonymous function expressions
     - [14.3](#hoisting--named-expressions) Named function expressions
     - [14.4](#hoisting--declarations) Function declarations

     </details>

  1. :left_right_arrow: [Comparison Operators & Equality](#comparison-operators--equality)
     <details>
     <summary>View contents</summary>

     - [15.1](#comparison--eqeqeq) Strict comparison
     - [15.2](#comparison--if) Conditional statements
     - [15.3](#comparison--shortcuts) Shortcuts
     - [15.4](#comparison--moreinfo) Truth Equality
     - [15.5](#comparison--switch-blocks) Switch blocks
     - [15.6](#comparison--nested-ternaries) Nested ternaries
     - [15.7](#comparison--unneeded-ternary) Unneeded-ternaries
     - [15.8](#comparison--no-mixed-operators) Mixed operators

     </details>

  1. :black_square_button: [Blocks](#blocks)
     <details>
     <summary>View contents</summary>

     - [16.1](#blocks--braces) Braces
     - [16.2](#blocks--cuddled-elses) Cuddled elses
     - [16.3](#blocks--no-else-return) Returns

     </details>

  1. :wrench: [Control Statements](#control-statements)
     <details>
     <summary>View contents</summary>

     - [17.1](#control-statements) Length
     - [17.2](#control-statements--value-selection) Selection operators

     </details>

  1. :pencil: [Comments](#comments)
     <details>
     <summary>View contents</summary>

     - [18.1](#comments--language) Language
     - [18.2](#comments--multiline) Multi-line
     - [18.3](#comments--singleline) Single-line
     - [18.4](#comments--spaces) Spaces
     - [18.5](#comments--actionitems) Prefixing / Action-items
     - [18.6](#comments--fixme) FixMe
     - [18.7](#comments--todo) ToDo

     </details>

  1. :white_circle: [Whitespace](#whitespace)
     <details>
     <summary>View contents</summary>

     - [19.1](#whitespace--spaces) Soft tabs
     - [19.2](#whitespace--before-blocks) Space Before blocks
     - [19.3](#whitespace--around-keywords) Around keywords
     - [19.4](#whitespace--infix-ops) Infix operators
     - [19.5](#whitespace--lf-linebreaks) LF Line-breaks
     - [19.6](#whitespace--newline-at-end) End of file
     - [19.7](#whitespace--chains) Chains
     - [19.8](#whitespace--after-blocks) After blocks
     - [19.9](#whitespace--padded-blocks) Padded blocks
     - [19.10](#whitespace--in-parens) Inside parentheses
     - [19.11](#whitespace--in-brackets) Inside brackets
     - [19.12](#whitespace--in-braces) Inside curly braces
     - [19.13](#whitespace--max-len) Line length
     - [19.14](#whitespace--block-spacing) Block spacing
     - [19.15](#whitespace--comma-spacing) Comma spacing
     - [19.16](#whitespace--computed-property-spacing) Computed properties
     - [16.17](#whitespace--func-call-spacing) Function call spacing
     - [19.18](#whitespace--key-spacing) Key spacing
     - [19.19](#whitespace--no-trailing-spaces) No Trailing spaces
     - [19.20](#whitespace--no-multiple-empty-lines) Multiple empty lines 

     </details>

  1. :small_red_triangle_down: [Commas](#commas)
     <details>
     <summary>View contents</summary>

       - [20.1](#commas--leading-trailing) Leading commas
       - [20.2](#commas--dangling) Comma Dangling

     </details>

  1. :heavy_exclamation_mark: [Semicolons](#semicolons)
     <details>
     <summary>View contents</summary>

       - [21.1](#semicolons--required) Use semicolons

     </details>

  1. :twisted_rightwards_arrows: [Type Casting & Coercion](#type-casting--coercion)
     <details>
     <summary>View contents</summary>

     - [22.1](#coercion--explicit) Explicit coercion
     - [22.2](#coercion--strings) Strings
     - [22.3](#coercion--numbers) Numbers
     - [22.4](#coercion--comment-deviations) Deviations
     - [22.5](#coercion--bitwise) Bitwise
     - [22.6](#coercion--booleans) Booleans
     - [22.7](#coercion--valid-typeof) Valid Typeof

     </details>

  1. :scroll: [Naming Conventions](#naming-conventions)
     <details>
     <summary>View contents</summary>

     - [23.0](#naming--language) Language
     - [23.1](#naming--descriptive) Descriptive
     - [23.2](#naming--camelCase) camelCase
     - [23.3](#naming--PascalCase) PascalCase
     - [23.4](#naming--leading-underscore) Underscores
     - [23.5](#naming--self-this) `this`
     - [23.6](#naming--filename-matches-export) Filename
     - [23.7](#naming--camelCase-default-export) Default export
     - [23.8](#naming--PascalCase-singleton) Singleton
     - [23.9](#naming--Acronyms-and-Initialisms) Acronyms and initialisms
     - [23.10](#naming--uppercase) Uppercase
     - [23.11](#naming--state-booleans) State-Booleans

     </details>

  1. :arrow_down: [Accessors](#accessors)
     <details>
     <summary>View contents</summary>

     - [24.1](#accessors--not-required) Not required accessors
     - [24.2](#accessors--no-getters-setters) Getters & Setters
     - [24.3](#accessors--boolean-prefix) Boolean prefix
     - [24.4](#accessors--consistent) Consistency

     </details>

  1. :high_brightness: [Events](#events)
     <details>
     <summary>View contents</summary>

     - [25.1](#events--hash) Hash

     </details>

  1. :book: [Standard Library](#standard-library)
     <details>
     <summary>View contents</summary>

     - [26.1](#standard-library--isnan) isNaN
     - [26.2](#standard-library--isfinite) isFinite

     </details>

  1. :nut_and_bolt: [jQuery](#jquery)
     <details>
     <summary>View contents</summary>

     - [27.1](#jquery--dollar-prefix) Prefix
     - [27.2](#jquery--cache) Cache
     - [27.3](#jquery--queries) DOM queries
     - [27.4](#jquery--find) Find
     - [27.5](#jquery--on) Shorthands
     - [27.6](#jquery--ready) Don't bloat `.ready()`

     </details>

  1. :arrows_counterclockwise: [ECMAScript 5 Compatibility](#ecmascript-5-compatibility)
     <details>
     <summary>View contents</summary>

     - [28.1](#es5-compat--kangax) Compatibility table

     </details>

  1. :six: [ECMAScript 6+ (ES 2015+) Styles](#ecmascript-6-es-2015-styles)
     <details>
     <summary>View contents</summary>

     - [29.1](#es6-styles) ES6 Styles
     - [29.2](#tc39-proposals) Proposals

     </details>

  1. :electric_plug: [Testing](#testing)
     <details>
     <summary>View contents</summary>

     - [30.1](#testing--tests) Tests

     </details>

  1. :chart_with_upwards_trend: [Performance](#performance)
     <details>
     <summary>View contents</summary>

     - [31.1](#performance--performance) Performance

     </details>

  1. :books: [Resources](#resources)
     <details>
     <summary>View contents</summary>

     - [32.1](#resources--learning-es6) Learning ES6+
     - [32.2](#resources--read-this) Read This
     - [32.3](#resources--tools) Tools
     - [32.4](#resources--further-reading) Further Reading
     - [32.5](#resources--books) Books
     - [32.6](#resources--blogs) Blogs
     - [32.7](#resources--podcasts) Podcasts

     </details>

  1. :copyright: [Copyright](#copyright)
     <details>
     <summary>View contents</summary>

     - [33.1](#copyright--base) Base
     - [33.2](#copyright--license) License

     </details>

  1. :recycle: [Amendments](#amendments)
     <details>
     <summary>View contents</summary>

     - [34.1](#amendments--forking) Forking

     </details>

## Types
  
  <a name="types--primitives"></a><a name="1.1"></a>
  - [1.1](#types--primitives) **Primitives**: When you access a primitive type you work directly on its value.

    - `string`
    - `number`
    - `boolean`
    - `null`
    - `undefined`
    - `symbol`
    - `bigint`

    ```javascript
    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```

    - Symbols and BigInts cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that don't support them natively.

  <a name="types--complex"></a><a name="1.2"></a>
  - [1.2](#types--complex) **Complex**: When you access a complex type you work on a reference to its value.

    - `object`
    - `array`
    - `function`

    ```javascript
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## References

  <a name="references--prefer-const"></a><a name="2.1"></a>
  - [2.1](#references--prefer-const) Use `const` for all of your references; avoid using `var`. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

    > Why? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code.

    ```javascript
    // bad
    var a = 1;
    var b = 2;

    // good
    const a = 1;
    const b = 2;
    ```

  <a name="references--disallow-var"></a><a name="2.2"></a>
  - [2.2](#references--disallow-var) If you must reassign references, use `let` instead of `var`. eslint: [`no-var`](https://eslint.org/docs/rules/no-var.html)

    > Why? `let` is block-scoped rather than function-scoped like `var`.

    ```javascript
    // bad
    var count = 1;
    if (true){
        count += 1;
    }

    // good
    let count = 1;
    if (true){
        count += 1;
    }
    ```
    
  <a name="references--block-scope"></a><a name="2.3"></a>
  - [2.3](#references--block-scope) Note that both `let` and `const` are block-scoped.

    ```javascript
    // const and let only exist in the blocks they are defined in.
    {
        let a = 1;
        const b = 1;
        var c = 1;
    }
    console.log(a); // ReferenceError: a is not defined
    console.log(b); // ReferenceError: b is not defined
    console.log(c); // 1
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Objects

  <a name="objects--no-new"></a><a name="3.1"></a>
  - [3.1](#objects--no-new) Use the literal syntax for object creation. eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)

    ```javascript
    // bad
    const item = new Object();

    // good
    const item = {};
    ```

  <a name="es6-computed-properties"></a><a name="3.2"></a>
  - [3.2](#es6-computed-properties) Use computed property names when creating objects with dynamic property names.

    > Why? They allow you to define all the properties of an object in one place.

    ```javascript

    function getKey(k){
        return `a key named ${k}`;
    }

    // bad
    const obj = {
        id: 5,
        name: "foo",
    };
    obj[getKey("enabled")] = true;

    // good
    const obj = {
        id: 5,
        name: "foo",
        [getKey("enabled")]: true,
    };
    ```

  <a name="es6-object-shorthand"></a><a name="3.3"></a>
  - [3.3](#es6-object-shorthand) Use object method shorthand. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

    ```javascript
    // bad
    const foo = {
        value: 1,

        addValue: function (value) {
            return foo.value + value;
        }
    };

    // good
    const foo = {
        value: 1,

        addValue(value) {
            return foo.value + value;
        }
    };
    ```

  <a name="es6-object-concise"></a><a name="3.4"></a>
  - [3.4](#es6-object-concise) Use property value shorthand. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

    > Why? It is shorter and descriptive.

    ```javascript
    const foo = "bar";

    // bad
    const obj = {
        foo: foo,
    };

    // good
    const obj = {
        foo,
    };
    ```

  <a name="objects--grouped-shorthand"></a><a name="3.5"></a>
  - [3.5](#objects--grouped-shorthand) Group your shorthand properties at the beginning of your object declaration.

    > Why? It’s easier to tell which properties are using the shorthand.

    ```javascript
    const foo = "bar";
    const bar = "foo";

    // bad
    const obj = {
        test: 1,
        key: 2,
        foo,
        abc: 3,
        xyz: 4,
        bar,
    };

    // good
    const obj = {
        foo,
        bar,
        test: 1,
        key: 2,
        abc: 3,
        xyz: 4,
    };
    ```

  <a name="objects--quoted-props"></a><a name="3.6"></a>
  - [3.6](#objects--quoted-props) Only quote properties that are invalid identifiers. eslint: [`quote-props`](https://eslint.org/docs/rules/quote-props.html)

    > Why? In general it is subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

    ```javascript
    // bad
    const bad = {
        "foo": 3,
        "bar": 4,
        "data-foo": 5,
    };

    // good
    const good = {
        foo: 3,
        bar: 4,
        "data-foo": 5,
    };
    ```

  <a name="objects--prototype-builtins"></a><a name="3.7"></a>
  - [3.7](#objects--prototype-builtins) Do not call `Object.prototype` methods directly, such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`. eslint: [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)

    > Why? These methods may be shadowed by properties on the object in question - consider `{ hasOwnProperty: false }` - or, the object may be a null object (`Object.create(null)`).

    ```javascript
    // bad
    object.hasOwnProperty(key);

    // good
    Object.prototype.hasOwnProperty.call(object, key);

    // best - Stage 3 Proposal:
    // https://github.com/tc39/proposal-accessible-object-hasownproperty
    Object.hasOwn(object, key);
    ```

  <a name="objects--rest-spread"></a><a name="3.8"></a>
  - [3.8](#objects--rest-spread) Prefer the object spread operator over [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

    ```javascript
    // very bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign(original, { c: 3 }); // this mutates `original`
    delete copy.a; // so does this

    // bad
    const original = { a: 1, b: 2 };
    const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

    // good
    const original = { a: 1, b: 2 };
    const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

    const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Arrays

  <a name="arrays--literals"></a><a name="4.1"></a>
  - [4.1](#arrays--literals) Use the literal syntax for array creation. eslint: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor.html)

    ```javascript
    // bad
    const items = new Array();

    // good
    const items = [];
    ```

  <a name="arrays--push"></a><a name="4.2"></a>
  - [4.2](#arrays--push) Use [Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) instead of direct assignment to add items to an array.

    ```javascript
    const someStack = [];

    // bad
    someStack[someStack.length] = "foobar";

    // good
    someStack.push("foobar");
    ```

  <a name="es6-array-spreads"></a><a name="4.3"></a>
  - [4.3](#es6-array-spreads) Use array spreads `...` to copy arrays. ([Read more...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax))

    ```javascript
    // bad
    const len = items.length;
    const itemsCopy = [];
    let i;

    for (i = 0; i < len; i += 1){
        itemsCopy[i] = items[i];
    }

    // good
    const itemsCopy = [...items];
    ```

  <a name="arrays--from"></a>
  <a name="arrays--from-iterable"></a><a name="4.4"></a>
  - [4.4](#arrays--from-iterable) To convert an iterable object to an array, use spreads `...` instead of [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

    ```javascript
    const foo = document.querySelectorAll(".foo");

    // good
    const nodes = Array.from(foo);

    // best
    const nodes = [...foo];
    ```

  <a name="arrays--from-array-like"></a><a name="4.5"></a>
  - [4.5](#arrays--from-array-like) Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for converting an array-like object to an array.

    ```javascript
    const arrLike = { 0: "foo", 1: "bar", 2: "baz", length: 3 };

    // bad
    const arr = Array.prototype.slice.call(arrLike);

    // good
    const arr = Array.from(arrLike);
    ```

  <a name="arrays--mapping"></a><a name="4.6"></a>
  - [4.6](#arrays--mapping) Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) instead of spread `...` for mapping over iterables, because it avoids creating an intermediate array.

    ```javascript
    // bad
    const baz = [...foo].map(bar);

    // good
    const baz = Array.from(foo, bar);
    ```

  <a name="arrays--callback-return"></a><a name="4.7"></a>
  - [4.7](#arrays--callback-return) Use return statements in array method callbacks. It’s ok to omit the return if the function body consists of a single statement returning an expression without side effects, following [8.2](#arrows--implicit-return). eslint: [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

    ```javascript
    // good
    [1, 2, 3].map((x) => {
        const y = x + 1;
        return x * y;
    });

    // good
    [1, 2, 3].map(x => x + 1);

    // bad - no returned value means `acc` becomes undefined after the first iteration
    [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
        const flatten = acc.concat(item);
    });

    // good
    [[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
        const flatten = acc.concat(item);
        return flatten;
    });

    // bad
    inbox.filter((msg) => {
        const { subject, response } = msg;
        if (subject === "foo") return response === "bar";
        else return false;
    });

    // good
    inbox.filter((msg) => {
        const { subject, response } = msg;
        if (subject === "foo") return response === "bar";
        return false;
    });
    ```

  <a name="arrays--bracket-newline"></a><a name="4.8"></a>
  - [4.8](#arrays--bracket-newline) Use line breaks after open and before close array brackets if an array has multiple lines

    ```javascript
    // bad
    const arr = [[0, 1], [2, 3], [4, 5]];

    const objectInArray = [{
        id: 1,
    }, {
        id: 2,
    }];

    const numberInArray = [
        1, 2, ...
    ];

    // good
    const arr = [
        [0, 1], 
        [2, 3], 
        [4, 5],
        ...
    ];

    const objectInArray = [
        {
            id: 1,
        },
        {
            id: 2,
        },
    ];

    const numberInArray = [
        1,
        2,
        ...
    ];
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Destructuring

  <a name="destructuring--object"></a><a name="5.1"></a>
  - [5.1](#destructuring--object) Use object destructuring when accessing and using multiple properties of an object. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

    > Why? Destructuring saves you from creating temporary references for those properties, and from repetitive access of the object. Repeating object access creates more repetitive code, requires more reading, and creates more opportunities for mistakes. Destructuring objects also provides a single site of definition of the object structure that is used in the block, rather than requiring reading the entire block to determine what is used.

    ```javascript
    // bad
    function getFullName(user){
        const firstName = user.firstName;
        const lastName = user.lastName;

        return `${firstName} ${lastName}`;
    }

    // good
    function getFullName(user){
        const { firstName, lastName } = user;
        return `${firstName} ${lastName}`;
    }

    // best
    function getFullName({ firstName, lastName }){
        return `${firstName} ${lastName}`;
    }
    ```

  <a name="destructuring--array"></a><a name="5.2"></a>
  - [5.2](#destructuring--array) Use array destructuring. eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

    ```javascript
    const arr = [1, 2, 3, 4];

    // bad
    const first = arr[0];
    const second = arr[1];

    // good
    const [first, second] = arr;
    ```

  <a name="destructuring--object-over-array"></a><a name="5.3"></a>
  - [5.3](#destructuring--object-over-array) Use object destructuring for multiple return values, not array destructuring.

    > Why? You can add new properties over time or change the order of things without breaking call sites.

    ```javascript
    // bad
    function processInput(input){
        // then a miracle occurs
        return [left, right, top, bottom];
    }

    // the caller needs to think about the order of return data
    const [left, __, top] = processInput(input);

    // good
    function processInput(input){
        // then a miracle occurs
        return { left, right, top, bottom };
    }

    // the caller selects only the data they need
    const { left, top } = processInput(input);
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Strings

  <a name="strings--quotes"></a><a name="6.1"></a>
  - [6.1](#strings--quotes) Use double quotes `""` for strings instead of single quotes `''`. eslint: [`quotes`](https://eslint.org/docs/rules/quotes.html)

    > Why? While other Styleguides may enforce single quotes, they mostly do it because of consistency (in favor of older projects). Here are some reasons for using double quotes: <br>
    > - Double quotes eliminate the need to escape apostrophes: `"I'm"` vs `'I\'m'`. 
    > - From a linguistic point of view, double quotes identify a passage of quoted text while single quotes are commonly used as a contraction. 
    > - Double quotes are used to define strings in many other languages. Single quotes are used to define `char`'s in some. 
    > - JSON Strings are only valid with double quotes. 
   
    ```javascript
    // bad
    const name = 'foo bar';

    // bad - template literals should contain interpolation or newlines
    const name = `foo bar`;

    // good
    const name = "foo bar";
    ```

  <a name="strings--line-length"></a><a name="6.2"></a>
  - [6.2](#strings--line-length) Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.

    > Why? Broken strings are painful to work with and make code less searchable.

    ```javascript
    // bad
    const errorMessage = "This is a super long error - lorem ipsum dolor \
    sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget \
    dolor. Aenean massa. Cum sociis natoque \
    penatibus et.";

    // bad
    const errorMessage = "This is a super long error - lorem ipsum dolor " +
        "sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget " +
        "dolor. Aenean massa. Cum sociis natoque " +
        "penatibus et.";

    // good
    const errorMessage = "This is a super long error - lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et.";
    ```

  <a name="es6-template-literals"></a><a name="6.3"></a>
  - [6.3](#es6-template-literals) When programmatically building up strings, use template strings instead of concatenation. eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)

    > Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

    ```javascript
    // bad
    function sayHi(name){
        return "How are you, " + name + "?";
    }

    // very bad
    function sayHi(name){
        return ["How are you, ", name, "?"].join();
    }

    // bad as well
    function sayHi(name){
        return `How are you, ${ name }?`;
    }

    // good
    function sayHi(name){
        return `How are you, ${name}?`;
    }
    ```

  <a name="strings--eval"></a><a name="6.4"></a>
  - [6.4](#strings--eval) Never use `eval()` on a string, it opens too many vulnerabilities. eslint: [`no-eval`](https://eslint.org/docs/rules/no-eval)

  <a name="strings--escaping"></a><a name="6.5"></a>
  - [6.5](#strings--escaping) Do not unnecessarily escape characters in strings. eslint: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

    > Why? Backslashes harm readability, thus they should only be present when necessary.

    ```javascript
    // bad
    const foo = '\'this\' \i\s \"quoted\"';

    // good
    const foo = "\"this\" is 'quoted'";
    const foo = `my name is "${name}"`;
    ```

  <a name="strings--regex"></a><a name="6.6"></a>
  - [6.6](#strings--regex) Do not split regular expressions, even if some parts are used multiple times. The only exception are computed RegEx'es.
  
    > Why? It has a great impact on readability and can lead to extremely confusing code
    
    ```javascript
    // bad
    const baseSite = "http(?:s?):\/\/website\.com\/";
    const topic = "(?:top|new|user\/\w+\/(?:uploads|likes))(?:(?:\/\w+)?)\/(\d+)";
    const comment = "(?:(?::)comment(\d+))";
    
    const uploadsRegex = new RegExp(baseSite + topic, "gi");
    const commentRegex = new RegExp(baseSite + topic + comment, "gi");
    const profileRegex = new RegExp(baseSite + "user\/(\w+)", "gi");
    
    // good
    const uploadsRegex = /http(?:s?):\/\/website\.com\/(?:top|new|user\/\w+\/(?:uploads|likes))(?:(?:\/\w+)?)\/(\d+)/gi;
    const commentRegex = /http(?:s?):\/\/website\.com\/(?:top|new|user\/\w+\/(?:uploads|likes))(?:(?:\/\w+)?)\/(\d+)(?:(?::)comment(\d+))/gi;
    const profileRegex = /http(?:s?):\/\/website\.com\/user\/(\w+)/gi;
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Functions

  <a name="functions--use-strict"></a><a name="7.1"></a>
  - [7.1](#functions--use-strict) Write the `"use strict";` directive in each and every script you code and put it on the first line to scope it globally. Also, make an empty line below it. eslint: [`strict`](https://eslint.org/docs/rules/strict)

    > Why? It is a good way to make your code safer. This is because strict mode doesn't allow the usage of dangerous features which could work in a way you wouldn't expect. Some things it does: <br>
    > - It disallows non-explicit global variables. 
    > - Silent failing assignments will throw errors instead.
    > - It requires all property names in an object literal to be unique. 
    > - Function parameter names must be unique as well. <br><br>
    > 
    > Also you do not need to worry about browser compartibility. It is not a statement, but a literal expression, ignored by earlier versions of JavaScript. [Read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) about strict mode and [why you should use it](https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it). <br><br>
    > **Note:** Modules are exempt from this rule because they always run in strict-mode.

    ```javascript
    0    // bad
    1    console.log("Foo");
    2    let x = function(){
    3        console.log("Bar");
    4    };
    5
    
    ---
    
    0    // bad
    1    console.log("Foo");
    2    let x = function(){
    3        "use strict";
    4        // strict mode is enabled in the scope of this function only!
    5        console.log("Bar");
    6    };
    7
    
    ---
    
    0    "use strict";
    1
    2    // ^ Good
    3    console.log("Foo");
    4    let x = function(){
    5        console.log("Bar");
    6    };
    7
    ```

  <a name="functions--declarations"></a><a name="7.2"></a>
  - [7.2](#functions--declarations) Use named function expressions instead of function declarations. eslint: [`func-style`](https://eslint.org/docs/rules/func-style)

    > Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error's call stack. ([Discussion](https://github.com/airbnb/javascript/issues/794))

    ```javascript
    // bad
    function foo(){
        // ...
    }

    // okay
    let foo = function(){
        // ...
    };

    // good
    // lexical name distinguished from the variable-referenced invocation(s)
    let short = function longUniqueMoreDescriptiveLexicalFoo(){
        // ...
    };
    ```

  <a name="functions--iife"></a><a name="7.3"></a>
  - [7.3](#functions--iife) Wrap immediately invoked function expressions in parentheses. eslint: [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife.html)

    > Why? An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.

    ```javascript
    // immediately-invoked function expression (IIFE)
    
    // bad
    !function(){ /* ... */ }();
    ~function(){ /* ... */ }();
    -function(){ /* ... */ }();
    +function(){ /* ... */ }();
    void function(){ /* ... */ }();
    
    // good
    (function(){
        console.log("I'm an IIFE");
    }());
    ```

  <a name="functions--in-blocks"></a><a name="7.4"></a>
  - [7.4](#functions--in-blocks) Never declare a function in a non-function block (`if`, `while`, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently, which is bad news bears. eslint: [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func.html)

  <a name="functions--note-on-blocks"></a><a name="7.5"></a>
  - [7.5](#functions--note-on-blocks) **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement.

    ```javascript
    // bad
    if (currentUser){
        function test(){
            console.log("Foo");
        }
    }

    // good
    let test;
    if (currentUser){
        test = () => {
            console.log("Foo");
        };
    }
    ```

  <a name="functions--arguments-shadow"></a><a name="7.6"></a>
  - [7.6](#functions--arguments-shadow) Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

    ```javascript
    // bad
    function foo(name, options, arguments){
        // ...
    }

    // good
    function foo(name, options, args){
        // ...
    }
    ```

  <a name="es6-rest"></a><a name="7.7"></a>
  - [7.7](#es6-rest) Never use `arguments`, opt to use rest syntax `...` instead. eslint: [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

    > Why? `...` is explicit about which arguments you want pulled. Plus, rest arguments are a real Array, and not merely Array-like like `arguments`.

    ```javascript
    // bad
    function concatenateAll(){
        const args = Array.prototype.slice.call(arguments);
        return args.join("");
    }

    // good
    function concatenateAll(...args){
        return args.join("");
    }
    ```

  <a name="es6-default-parameters"></a><a name="7.8"></a>
  - [7.8](#es6-default-parameters) Use default parameter syntax rather than mutating function arguments.

    ```javascript
    // really bad
    function handleThings(opts){
        // No! We shouldn't mutate function arguments.
        // Double bad: if opts is falsy it'll be set to an object which may
        // be what you want but it can introduce subtle bugs.
        opts = opts || {};
        // ...
    }

    // still bad
    function handleThings(opts){
        if (opts === void 0){
            opts = {};
        }
        // ...
    }

    // good
    function handleThings(opts = {}){
        // ...
    }
    ```

  <a name="functions--default-side-effects"></a><a name="7.9"></a>
  - [7.9](#functions--default-side-effects) Avoid side effects with default parameters.

    > Why? They are confusing to reason about.

    ```javascript
    let b = 1;
    // bad
    function count(a = b++){
        console.log(a);
    }
    count();  // 1
    count();  // 2
    count(3); // 3
    count();  // 3
    ```

  <a name="functions--defaults-last"></a><a name="7.10"></a>
  - [7.10](#functions--defaults-last) Always put default parameters last.

    ```javascript
    // bad
    function handleThings(opts = {}, name){
        // ...
    }

    // good
    function handleThings(name, opts = {}){
        // ...
    }
    ```

  <a name="functions--constructor"></a><a name="7.11"></a>
  - [7.11](#functions--constructor) Never use the Function constructor to create a new function. eslint: [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

    > Why? Creating a function in this way evaluates a string similarly to `eval()`, which opens vulnerabilities.

    ```javascript
    // bad
    let add = new Function("a", "b", "return a + b");

    // still bad
    let subtract = Function("a", "b", "return a - b");
    ```

  <a name="functions--signature-spacing"></a><a name="7.12"></a>
  - [7.12](#functions--signature-spacing) Spacing in a function signature. eslint: [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

    > Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.

    ```javascript
    // bad
    const f = function () {};
    const g = function (){};
    const h = function() {};

    // good
    const x = function(){};
    const y = function a(){};
    ```

  <a name="functions--mutate-params"></a><a name="7.13"></a>
  - [7.13](#functions--mutate-params) Never mutate parameters. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

    > Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

    ```javascript
    // bad
    function f1(obj){
        obj.key = 1;
    }

    // good
    function f2(obj){
        const key = Object.prototype.hasOwnProperty.call(obj, "key") ? obj.key : 1;
    }
    ```

  <a name="functions--reassign-params"></a><a name="7.14"></a>
  - [7.14](#functions--reassign-params) Never reassign parameters. eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

    > Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8 (and therefore NodeJS as well).

    ```javascript
    // bad
    function f1(a){
        a = 1;
        // ...
    }

    function f2(a){
        if (!a) a = 1;
        // ...
    }

    // good
    function f3(a){
        const b = a || 1;
        // ...
    }

    function f4(a = 1){
        // ...
    }
    ```

  <a name="functions--spread-vs-apply"></a><a name="7.15"></a>
  - [7.15](#functions--spread-vs-apply) Prefer the use of the spread operator `...` to call variadic functions. eslint: [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

    > Why? It’s cleaner, you don’t need to supply a context, and you can not easily compose `new` with `apply`.

    ```javascript
    // bad
    const x = [1, 2, 3, 4, 5];
    console.log.apply(console, x);

    // good
    const x = [1, 2, 3, 4, 5];
    console.log(...x);

    // bad
    new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

    // good
    new Date(...[2016, 8, 5]);
    ```

  <a name="functions--signature-invocation-indentation"></a><a name="7.16"></a>
  - [7.16](#functions--signature-invocation-indentation) Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself and with a trailing comma on the last item. eslint: [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)

    ```javascript
    // bad
    function foo(bar,
                 baz,
                 quux){
      // ...
    }

    // good
    function foo(
        bar,
        baz,
        quux,
        ...
    ){
      // ...
    }

    // bad
    console.log(foo,
        bar,
        baz);

    // good
    console.log(
        foo,
        bar,
        baz,
        ...
    );
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Arrow Functions

  <a name="arrows--use-them"></a><a name="8.1"></a>
  - [8.1](#arrows--use-them) When you must use an anonymous function (as when passing an inline callback), use arrow function notation. eslint: [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback.html), [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing.html)

    > Why? It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.

    > Why not? If you have a fairly complicated function, you might move that logic out into its own named function expression.

    ```javascript
    // bad
    [1, 2, 3].map(function (x){
        const y = x + 1;
        return x * y;
    });

    // good
    [1, 2, 3].map((x) => {
        const y = x + 1;
        return x * y;
    });
    ```

  <a name="arrows--implicit-return"></a><a name="8.2"></a>
  - [8.2](#arrows--implicit-return) If the function body consists of a single statement returning an [expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions) without side effects, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html), [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style.html)

    > Why? Syntactic sugar. It reads well when multiple functions are chained together.

    ```javascript
    // bad
    [1, 2, 3].map(number => {
        const nextNumber = number + 1;
        `A string containing the ${nextNumber}.`;
    });

    // good
    [1, 2, 3].map(number => `A string containing the ${number + 1}.`);

    // good
    [1, 2, 3].map((number) => {
        const nextNumber = number + 1;
        return `A string containing the ${nextNumber}.`;
    });

    // good
    [1, 2, 3].map((number, index) => ({
        [index]: number,
    }));

    // No implicit return with side effects
    function foo(callback){
        const val = callback();
        if (val === true){
            // Do something if callback returns true
        }
    }

    let bool = false;

    // bad
    foo(() => bool = true);

    // good
    foo(() => {
        bool = true;
    });
    ```

  <a name="arrows--paren-wrap"></a><a name="8.3"></a>
  - [8.3](#arrows--paren-wrap) In case the expression spans over multiple lines, wrap it in parentheses for better readability.

    > Why? It shows clearly where the function starts and ends.

    ```javascript
    // bad
    ["get", "post", "put"].map(httpMethod => Object.prototype.hasOwnProperty.call(
            httpMagicObjectWithAVeryLongName,
            httpMethod,
        )
    );

    // good
    ["get", "post", "put"].map(httpMethod => (
        Object.prototype.hasOwnProperty.call(
            httpMagicObjectWithAVeryLongName,
            httpMethod,
        )
    ));
    ```

  <a name="arrows--one-arg-parens"></a><a name="8.4"></a>
  - [8.4](#arrows--one-arg-parens) If your function takes a single argument and doesn’t use braces, omit the parentheses. Otherwise, always include parentheses around arguments for clarity and consistency. Note: it is also acceptable to always use parentheses, in which case use the [“always” option](https://eslint.org/docs/rules/arrow-parens#always) for eslint. eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html)

    > Why? Less visual clutter.

    ```javascript
    // bad
    [1, 2, 3].map((x) => x * x);

    // good
    [1, 2, 3].map(x => x * x);

    // good
    [1, 2, 3].map(number => (
        `A long string with the ${number}. It’s so long that we don’t want it to take up space on the .map line!`
    ));

    // bad
    [1, 2, 3].map(x => {
        const y = x + 1;
        return x * y;
    });

    // good
    [1, 2, 3].map((x) => {
        const y = x + 1;
        return x * y;
    });
    ```

  <a name="arrows--confusing"></a><a name="8.5"></a>
  - [8.5](#arrows--confusing) Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`). eslint: [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)

    ```javascript
    // bad
    const itemHeight = item => item.height > 256 ? item.largeSize : item.smallSize;

    // bad
    const itemHeight = (item) => item.height > 256 ? item.largeSize : item.smallSize;

    // good
    const itemHeight = item => (item.height > 256 ? item.largeSize : item.smallSize);

    // good
    const itemHeight = (item) => {
        const { height, largeSize, smallSize } = item;
        return height > 256 ? largeSize : smallSize;
    };
    ```

  <a name="whitespace--implicit-arrow-linebreak"></a><a name="8.6"></a>
  - [8.6](#whitespace--implicit-arrow-linebreak) Enforce the location of arrow function bodies with implicit returns. eslint: [`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak)

    ```javascript
    // bad
    (foo) =>
        bar;

    (foo) =>
        (bar);

    // good
    (foo) => bar;
    (foo) => (bar);
    (foo) => (
         bar
    )
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Classes & Constructors

  <a name="constructors--use-class"></a><a name="9.1"></a>
  - [9.1](#constructors--use-class) Always use `class`. Avoid manipulating `prototype` directly.

    > Why? `class` syntax is more concise and easier to reason about.

    ```javascript
    // bad
    function Queue(contents = []){
        this.queue = [...contents];
    }
    
    Queue.prototype.pop = function(){
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    };

    // good
    class Queue {
        constructor(contents = []){
            this.queue = [...contents];
        }
        pop(){
            const value = this.queue[0];
            this.queue.splice(0, 1);
            return value;
        }
    }
    ```

  <a name="constructors--extends"></a><a name="9.2"></a>
  - [9.2](#constructors--extends) Use `extends` for inheritance.

    > Why? It is a built-in way to inherit prototype functionality without breaking `instanceof`.

    ```javascript
    // bad
    const inherits = require("inherits");
    function PeekableQueue(contents){
        Queue.apply(this, contents);
    }
    
    inherits(PeekableQueue, Queue);
    PeekableQueue.prototype.peek = function(){
        return this.queue[0];
    };

    // good
    class PeekableQueue extends Queue {
        peek(){
            return this.queue[0];
        }
    }
    ```

  <a name="constructors--chaining"></a><a name="9.3"></a>
  - [9.3](#constructors--chaining) Methods can return `this` to help with method chaining.

    ```javascript
    // bad
    Player.prototype.jump = function(){
        this.jumping = true;
        return true;
    };

    Player.prototype.setHeight = function(height){
        this.height = height;
    };

    const foo = new Player();
    foo.jump(); // => true
    foo.setHeight(20); // => undefined

    // good
    class Player {
        jump(){
            this.jumping = true;
            return this;
        }

        setHeight(height){
            this.height = height;
            return this;
        }
    }

    const foo = new Player();

    foo.jump().setHeight(20);
    ```

  <a name="constructors--tostring"></a><a name="9.4"></a>
  - [9.4](#constructors--tostring) It’s okay to write a custom `toString()` method, just make sure it works successfully and causes no side effects.

    ```javascript
    class Player {
        constructor(options = {}) {
            this.name = options.name || "no name";
        }

        getName(){
            return this.name;
        }

        toString(){
            return `Player - ${this.getName()}`;
        }
    }
    ```

  <a name="constructors--no-useless"></a><a name="9.5"></a>
  - [9.5](#constructors--no-useless) Classes have a default constructor if one is not specified. An empty constructor function or one that just delegates to a parent class is unnecessary. eslint: [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

    ```javascript
    // bad
    class Player {
        constructor() {}

        getName(){
            return this.name;
        }
    }

    // bad
    class Foo extends Player {
        constructor(...args){
            super(...args);
        }
    }

    // good
    class Foo extends Player {
        constructor(...args){
            super(...args);
            this.name = "Foo";
        }
    }
    ```

  <a name="classes--no-duplicate-members"></a><a name="9.6"></a>
  - [9.6](#classes--no-duplicate-members) Avoid duplicate class members. eslint: [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

    > Why? Duplicate class member declarations will silently prefer the last one - having duplicates is almost certainly a bug.

    ```javascript
    // bad
    class Foo {
        bar(){ return 1; }
        bar(){ return 2; }
    }

    // good
    class Foo {
        bar(){ return 1; }
    }

    // good
    class Foo {
        bar(){ return 2; }
    }
    ```
    
  <a name="classes--methods-use-this"></a><a name="9.7"></a>
  - [9.7](#classes--methods-use-this) Class methods should use `this` or be made into a static method unless an external library or framework requires to use specific non-static methods. Being an instance method should indicate that it behaves differently based on properties of the receiver. eslint: [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)

    ```javascript
    // bad
    class Foo {
        bar(){
            console.log("bar");
        }
    }

    // good - this is used
    class Foo {
        bar(){
            console.log(this.bar);
        }
    }

    // good - constructor is exempt
    class Foo {
        constructor(){
            // ...
        }
    }

    // good - static methods aren't expected to use this
    class Foo {
        static bar(){
            console.log("bar");
        }
    }
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Modules

  <a name="modules--use-them"></a><a name="10.1"></a>
  - [10.1](#modules--use-them) Stick to CommonJS Imports (RequireJS / module.exports).

    > Why? Not many of the current browser engines implements import/export from the ES6 standard. In NodeJS, `require()` is still the standard way of importing modules. Plus, in NodeJS you can make use of dynamic module loading and [Require's API's](https://requirejs.org/docs/api.html#config) in general, where you can control caching as well. 

    ```javascript
    // bad
    import foo from "bar";
    export default bar;

    // bad
    import { foo } from "bar";
    export default bar;

    // good
    let foo = require("bar");
    module.exports = bar;
    ```

  <a name="modules--no-duplicate-imports"></a><a name="10.2"></a>
  - [10.2](#modules--no-duplicate-imports) Only import from a path in one place.
 eslint: [`no-duplicate-imports`](https://eslint.org/docs/rules/no-duplicate-imports)
    > Why? Having multiple lines that import from the same path can make code harder to maintain.

    ```javascript
    // bad
    let foo = require("bar");
    // … some other imports … 
    let { foo2, foo3 } = require("bar");

    // good
    let { foo, foo1, foo2 } = require("bar");

    // good
    let {
        foo,
        foo1,
        foo2,
    } = require("bar");
    ```

  <a name="modules--no-mutable-exports"></a><a name="10.3"></a>
  - [10.3](#modules--no-mutable-exports) Do not export mutable bindings.
 eslint: [`import/no-mutable-exports`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md)
    > Why? Mutation should be avoided in general, but in particular when exporting mutable bindings. While this technique may be needed for some special cases, in general, only constant references should be exported.

    ```javascript
    // bad
    let foo = 3;
    module.exports = foo;

    // good
    const foo = 3;
    module.exports = foo;
    ```

  <a name="modules--imports-first"></a><a name="10.4"></a>
  - [10.4](#modules--imports-first) Put all `import`s above non-import statements.
 eslint: [`import/first`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)
    > Why? Since `import`s are hoisted, keeping them all at the top prevents surprising behavior.

    ```javascript
    // bad
    let foo = require("foo");
    foo.init();

    let bar = require("bar");

    // good
    let foo = require("foo");
    let bar = require("bar");

    foo.init();
    ```
    
  <a name="modules--import-extensions"></a><a name="10.5"></a>
  - [10.5](#modules--import-extensions) Do not include JavaScript filename extensions
 eslint: [`import/extensions`](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md)
    > Why? Including extensions inhibits refactoring, and inappropriately hardcodes implementation details of the module you're importing in every consumer.
 
    ```javascript
    // bad
    import foo from "./foo.js";
    import bar from "./bar.jsx";
    import baz from "./baz/index.jsx";
    
    // good
    import foo from "./foo";
    import bar from "./bar";
    import baz from "./baz";
    ```
    
  <a name="modules--multiline-imports-over-newlines"></a><a name="10.6"></a>
  - [10.6](#modules--multiline-imports-over-newlines) Multiline imports should be indented just like multiline array and object literals. eslint: [`object-curly-newline`](https://eslint.org/docs/rules/object-curly-newline)

    > Why? The curly braces follow the same indentation rules as every other curly brace block in the style guide.

    ```javascript
    // bad
    let { longNameA, longNameB, longNameC, longNameD, longNameE } = require("path");

    // good
    let {
        longNameA,
        longNameB,
        longNameC,
        longNameD,
        longNameE,
    } = require("path");
    ```

## Iterators and Generators

  <a name="iterators--nope"></a><a name="11.1"></a>
  - [11.1](#iterators--nope) Don’t use iterators. Prefer JavaScript’s higher-order functions instead of loops like `for-in` or `for-of`. eslint: [`no-iterator`](https://eslint.org/docs/rules/no-iterator.html) [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)

    > Why? Dealing with pure functions that return values is easier to reason about than side effects.

    > Use `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... to iterate over arrays, and `Object.keys()` / `Object.values()` / `Object.entries()` to produce arrays so you can iterate over objects.

    **Note:** `for-in` and `for-of` are mostly OK as well. Especially for small operations. Higher-order functions however are best practice.

    ```javascript
    const numbers = [1, 2, 3, 4, 5];

    // ok...
    let sum = 0;
    for (let num of numbers){
        sum += num;
    }
    sum === 15;

    // good
    let sum = 0;
    numbers.forEach((num) => {
        sum += num;
    });
    sum === 15;

    // best (use the functional force)
    const sum = numbers.reduce((total, num) => total + num, 0);
    sum === 15;

    // bad
    const increasedByOne = [];
    for (let i = 0; i < numbers.length; i++){
        increasedByOne.push(numbers[i] + 1);
    }

    // good
    const increasedByOne = [];
    numbers.forEach((num) => {
        increasedByOne.push(num + 1);
    });

    // best (keeping it functional)
    const increasedByOne = numbers.map(num => num + 1);
    ```

  <a name="generators--nope"></a><a name="11.2"></a>
  - [11.2](#generators--nope) Use generators only in NodeJS for now.

    > Why? They don’t transpile well to ES5.

  <a name="generators--spacing"></a>
  - [11.3](#generators--spacing) If you must use generators, or if you disagree with [11.2](#generators--nope), make sure their function signature is spaced properly. eslint: [`generator-star-spacing`](https://eslint.org/docs/rules/generator-star-spacing)

    > Why? `function` and `*` are part of the same conceptual keyword - `*` is not a modifier for `function`, `function*` is a unique construct, different from `function`.

    ```javascript
    // bad
    function * foo(){
        // ...
    }

    // bad
    let bar = function * (){
        // ...
    };

    // bad
    let baz = function *(){
        // ...
    };

    // bad
    let quux = function* (){
        // ...
    };

    // bad
    function*foo(){
        // ...
    }

    // bad
    function *foo(){
        // ...
    }

    // very bad
    function
    *
    foo(){
        // ...
    }

    // very bad
    let foo = function
    *
    (){
        // ...
    };

    // good
    function* foo(){
        // ...
    }

    // good
    let foo = function*(){
        // ...
    };
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Properties

  <a name="properties--dot"></a><a name="12.1"></a>
  - [12.1](#properties--dot) Use dot notation when accessing properties. eslint: [`dot-notation`](https://eslint.org/docs/rules/dot-notation.html)

    ```javascript
    const foo = {
        bar: true,
        baz: 5,
    };

    // bad
    const isTrue = foo["bar"];

    // good
    const isTrue = foo.bar;
    ```

  <a name="properties--bracket"></a><a name="12.2"></a>
  - [12.2](#properties--bracket) Use bracket notation `[]` when accessing properties with a variable or if the key includes illegal characters.

    ```javascript
    const foo = {
        bar: true,
        baz: 5,
        "test-1": "foo"
    };

    function getProp(prop) {
        return foo[prop];
    }

    const isTrue = getProp("bar");
    const bar = foo["test-1"];
    ```
  <a name="es2016-properties--exponentiation-operator"></a><a name="12.3"></a>
  - [12.3](#es2016-properties--exponentiation-operator) Use exponentiation operator `**` when calculating exponentiations. eslint: [`no-restricted-properties`](https://eslint.org/docs/rules/no-restricted-properties).

    ```javascript
    // bad
    const binary = Math.pow(2, 10);

    // good
    const binary = 2 ** 10;
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Variables

  <a name="variables--const"></a><a name="13.1"></a>
  - [13.1](#variables--const) Always use `const` or `let` to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Variables declared without `const`, `let` or `var` are disallowed in [strict mode](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Strict_mode) as well. eslint: [`no-undef`](https://eslint.org/docs/rules/no-undef) [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

    ```javascript
    // bad
    foo = new Foo();

    // good
    const foo = new Foo();
    ```

  <a name="variables--one-const"></a><a name="13.2"></a>
  - [13.2](#variables--one-const) Use one `const` or `let` declaration per variable or assignment. eslint: [`one-var`](https://eslint.org/docs/rules/one-var.html)

    > Why? It’s easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

    ```javascript
    // bad
    const items = getItems(),
        foo = true,
        bar = "baz";

    // bad
    // (compare to above, and try to spot the mistake)
    const items = getItems(),
        foo = true;
        bar = "baz";

    // good
    const items = getItems();
    const foo = true;
    const bar = "baz";
    ```

  <a name="variables--const-let-group"></a><a name="13.3"></a>
  - [13.3](#variables--const-let-group) Group all your `const`s and then group all your `let`s.

    > Why? This is helpful when later on you might need to assign a variable depending on one of the previously assigned variables.

    ```javascript
    // bad
    let i, len, foo,
        items = getItems(),
        bar = true;

    // bad
    let i;
    const items = getItems();
    let foo;
    const bar = true;
    let len;

    // good
    const bar = true;
    const items = getItems();
    let foo;
    let i;
    let length;
    ```

  <a name="variables--define-where-used"></a><a name="13.4"></a>
  - [13.4](#variables--define-where-used) Assign variables where you need them, but place them in a reasonable place.

    > Why? `let` and `const` are block scoped and not function scoped.

    ```javascript
    // bad - unnecessary function call
    function checkName(hasName){
        const name = getName();

        if (hasName === "test") return false;

        if (name === "test"){
            this.setName("");
            return false;
        }

        return name;
    }

    // good
    function checkName(hasName){
        if (hasName === "test") return false;

        const name = getName();

        if (name === "test"){
            this.setName("");
            return false;
        }

        return name;
    }
    ```
  <a name="variables--no-chain-assignment"></a><a name="13.5"></a>
  - [13.5](#variables--no-chain-assignment) Don’t chain variable assignments. eslint: [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)

    > Why? Chaining variable assignments creates implicit global variables.

    ```javascript
    // bad
    (function example(){
        /**
         * JavaScript interprets this as
         * let a = ( b = ( c = 1 ) );
         * The let keyword only applies to variable a; variables b and c become
         * global variables.
         */
        let a = b = c = 1;
    }());

    console.log(a); // throws ReferenceError
    console.log(b); // 1
    console.log(c); // 1

    // good
    (function example(){
        let a = 1;
        let b = a;
        let c = a;
    }());

    console.log(a); // throws ReferenceError
    console.log(b); // throws ReferenceError
    console.log(c); // throws ReferenceError

    // the same applies for `const`
    ```

  <a name="variables--unary-increment-decrement"></a><a name="13.6"></a>
  - [13.6](#variables--unary-increment-decrement) Avoid using unary increments and decrements (`++`, `--`). eslint [`no-plusplus`](https://eslint.org/docs/rules/no-plusplus)

    > Why? Per the eslint documentation, unary increment and decrement statements are subject to automatic semicolon insertion and can cause silent errors with incrementing or decrementing values within an application. It is also more expressive to mutate your values with statements like `num += 1` instead of `num++` or `num ++`. Disallowing unary increment and decrement statements also prevents you from pre-incrementing/pre-decrementing values unintentionally which can also cause unexpected behavior in your programs.

    ```javascript
    // bad

    const array = [1, 2, 3];
    let num = 1;
    num++;
    --num;

    let sum = 0;
    let truthyCount = 0;
    for (let i = 0; i < array.length; i++){
        let value = array[i];
        sum += value;
        if (value) truthyCount++;
    }

    // good

    const array = [1, 2, 3];
    let num = 1;
    num += 1;
    num -= 1;

    const sum = array.reduce((a, b) => a + b, 0);
    const truthyCount = array.filter(Boolean).length;
    ```

<a name="variables--linebreak"></a><a name="13.7"></a>
  - [13.7](#variables--linebreak) Avoid linebreaks before or after `=` in an assignment. If your assignment violates [`max-len`](https://eslint.org/docs/rules/max-len.html), surround the value in parens. eslint [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak.html).

    > Why? Linebreaks surrounding `=` can obfuscate the value of an assignment.

    ```javascript
    // bad
    const foo =
      superLongLongLongLongLongLongLongLongFunctionName();

    // bad
    const foo
      = "superLongLongLongLongLongLongLongLongString";

    // good
    const foo = (
        superLongLongLongLongLongLongLongLongFunctionName()
    );

    // good
    const foo = "superLongLongLongLongLongLongLongLongString";
    ```

<a name="variables--no-unused-vars"></a><a name="13.8"></a>
  - [13.8](#variables--no-unused-vars) Disallow unused variables. eslint: [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)

    > Why? Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.

    ```javascript
    // bad

    let some_unused_var = 42;

    // Write-only variables are not considered as used.
    let y = 10;
    y = 5;

    // A read for a modification of itself is not considered as used.
    let z = 0;
    z = z + 1;

    // Unused function arguments.
    function getX(x, y){
        return x;
    }

    // good

    function getXPlusY(x, y){
        return x + y;
    }

    let x = 1;
    let y = a + 2;

    alert(getXPlusY(x, y));

    // 'type' is ignored even if unused because it has a rest property sibling.
    // This is a form of extracting an object that omits the specified keys.
    let { type, ...coords } = data;
    // 'coords' is now the 'data' object without its 'type' property.
    ```

  <a name="variables--bitwise-floor"></a><a name="13.9"></a>
  - [13.9](#variables--bitwise-floor) Do not floor variables with the bitwise or (`x | 0`). Use `Math.floor()` or if you must `Math.trunc()`.
    > Why? First off, it does **not** _floor_ the number. It _truncates_ it (rounding towards 0). It causes odd Comparative behavior as well: `Math.floor(NaN) === NaN`, while `(NaN | 0) === 0`. Also, it works with 32-bit signed integers only. As mentioned above, use `Math.trunc()` if you have to. It is the ES5 equivalent of `| 0` and it is able to work with numbers higher or equal to 2^31. 

    ```javascript
    let x = 42.835
    
    // Bad
    let y = x | 0;
    
    // Okay
    let y = Math.trunc(x);
    
    // Good 
    let y = Math.floor(x);
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Hoisting

  <a name="hoisting--about"></a><a name="14.1"></a>
  - [14.1](#hoisting--about) `var` declarations get hoisted to the top of their closest enclosing function scope, their assignment does not. `const` and `let` declarations are blessed with a new concept called [Temporal Dead Zones (TDZ)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone). It’s important to know why [typeof is no longer safe](https://web.archive.org/web/20200121061528/http://es-discourse.com/t/why-typeof-is-no-longer-safe/15).

    ```javascript
    // this wouldn’t work (assuming there
    // is no notDefined global variable)
    function example(){
        console.log(notDefined); // => throws a ReferenceError
    }

    // creating a variable declaration after you
    // reference the variable will work due to
    // variable hoisting. Note: the assignment
    // value of `true` is not hoisted.
    function example(){
        console.log(declaredButNotAssigned); // => undefined
        var declaredButNotAssigned = true;
    }

    // the interpreter is hoisting the variable
    // declaration to the top of the scope,
    // which means our example could be rewritten as:
    function example(){
        let declaredButNotAssigned;
        console.log(declaredButNotAssigned); // => undefined
        declaredButNotAssigned = true;
    }

    // using const and let
    function example(){
        console.log(declaredButNotAssigned); // => throws a ReferenceError
        console.log(typeof declaredButNotAssigned); // => throws a ReferenceError
        const declaredButNotAssigned = true;
    }
    ```

  <a name="hoisting--anon-expressions"></a><a name="14.2"></a>
  - [14.2](#hoisting--anon-expressions) Anonymous function expressions hoist their variable name, but not the function assignment.

    ```javascript
    function example(){
        console.log(anonymous); // => undefined

        anonymous(); // => TypeError anonymous is not a function

        var anonymous = function(){
            console.log("anonymous function expression");
        };
    }
    ```

  <a name="hoisting--named-expresions"></a><a name="hoisting--named-expressions"></a><a name="14.3"></a>
  - [14.3](#hoisting--named-expressions) Named function expressions hoist the variable name, not the function name or the function body.

    ```javascript
    function example(){
        console.log(named); // => undefined

        named(); // => TypeError named is not a function

        foo(); // => ReferenceError foo is not defined

        var named = function foo(){
            console.log("bar");
        };
    }

    // the same is true when the function name
    // is the same as the variable name.
    function example(){
        console.log(named); // => undefined

        named(); // => TypeError named is not a function

        var named = function named(){
            console.log("named");
        };
    }
    ```

  <a name="hoisting--declarations"></a><a name="14.4"></a>
  - [14.4](#hoisting--declarations) Function declarations hoist their name and the function body.

    ```javascript
    function example(){
        foo(); // => bar

        function foo(){
            console.log("bar");
        }
    }
    ```

  - For more information refer to [JavaScript Scoping & Hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting/) by [Ben Cherry](http://www.adequatelygood.com/).

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Comparison Operators & Equality

  <a name="comparison--eqeqeq"></a><a name="15.1"></a>
  - [15.1](#comparison--eqeqeq) Use `===` and `!==` over `==` and `!=` (Strict comparison). eslint: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)

  <a name="comparison--if"></a><a name="15.2"></a>
  - [15.2](#comparison--if) Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

    - **Objects** evaluate to **true**
    - **Undefined** evaluates to **false**
    - **Null** evaluates to **false**
    - **Booleans** evaluate to **the value of the boolean**
    - **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
    - **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

    ```javascript
    if ([0] && []){
        // true
        // an array (even an empty one) is an object, objects will evaluate to true
    }
    ```

  <a name="comparison--shortcuts"></a><a name="15.3"></a>
  - [15.3](#comparison--shortcuts) Use shortcuts for booleans, but explicit comparisons for strings and numbers.

    ```javascript
    // bad
    if (isValid === true){
        // ...
    }

    // good
    if (isValid){
        // ...
    }

    // bad
    if (name){
        // ...
    }

    // good
    if (name !== ""){
        // ...
    }

    // bad
    if (collection.length){
        // ...
    }

    // good
    if (collection.length > 0){
        // ...
    }
    ```

  <a name="comparison--moreinfo"></a><a name="15.4"></a>
  - [15.4](#comparison--moreinfo) For more information see [Truth Equality and JavaScript](https://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/#more-2108) by Angus Croll.

  <a name="comparison--switch-blocks"></a><a name="15.5"></a>
  - [15.5](#comparison--switch-blocks) Use braces to create blocks in `case` and `default` clauses. This is especially useful for those, which contain lexical declarations (e.g. `let`, `const`, `function`, and `class`). eslint: [`no-case-declarations`](https://eslint.org/docs/rules/no-case-declarations.html)

    > Why? Lexical declarations are visible in the entire `switch` block but only get initialized when assigned, which only happens when its `case` is reached. This causes problems when multiple `case` clauses attempt to define the same thing.

    ```javascript
    // bad
    switch (foo){
        case 1:
            let x = 1;
            break;
        case 2:
            const y = 2;
            break;
        case 3:
            function f(){
                // ...
            }
            break;
        default:
            class C {}
    }

    // good
    switch (foo) {
        case 1: {
            let x = 1;
            break;
        }
        case 2: {
            const y = 2;
            break;
        }
        case 3: {
            function f(){
                // ...
            }
            break;
        }
        case 4: {
            bar();
            break;
        }
        default: {
            class C {}
        }
    }
    ```

  <a name="comparison--nested-ternaries"></a><a name="15.6"></a>
  - [15.6](#comparison--nested-ternaries) Ternaries should not be nested and generally be single line expressions. eslint: [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary.html)

    ```javascript
    // bad
    const foo = maybe1 > maybe2
      ? "bar"
      : value1 > value2 ? "baz" : null;

    // split into 2 separated ternary expressions
    const maybeNull = value1 > value2 ? "baz" : null;

    // better
    const foo = maybe1 > maybe2
      ? "bar"
      : maybeNull;

    // best
    const foo = maybe1 > maybe2 ? "bar" : maybeNull;
    ```

  <a name="comparison--unneeded-ternary"></a><a name="15.7"></a>
  - [15.7](#comparison--unneeded-ternary) Avoid unneeded ternary statements. eslint: [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary.html)

    ```javascript
    // bad
    const foo = a ? a : b;
    const bar = c ? true : false;
    const baz = c ? false : true;

    // good
    const foo = a || b;
    const bar = !!c;
    const baz = !c;
    ```

  <a name="comparison--no-mixed-operators"></a><a name="15.8"></a>
  - [15.8](#comparison--no-mixed-operators) When mixing operators, enclose them in parentheses. The only exception is the standard arithmetic operators (`+`, `-`, `*`, & `/`) since their precedence is broadly understood. eslint: [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators.html)

    > Why? This improves readability and clarifies the developer’s intention.

    ```javascript
    // bad
    const foo = a && b < 0 || c > 0 || d + 1 === 0;

    // bad
    const bar = a ** b - 5 % d;

    // bad
    // one may be confused into thinking (a || b) && c
    if (a || b && c){
        return d;
    }

    // good
    const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

    // good
    const bar = (a ** b) - (5 % d);

    // good
    if (a || (b && c)){
        return d;
    }

    // good
    const bar = a + b / c * d;
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Blocks

  <a name="blocks--braces"></a><a name="16.1"></a>
  - [16.1](#blocks--braces) Use braces with all multi-line blocks. eslint: [`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)
  
    > Note: Use one-line statements only with short commands. Like `if (x) y();`<br> They look nicer but can be hard to debug

    ```javascript
    // bad
    if (test)
      return false;

    // good
    if (test) return false;

    // bad - it is too bulky and doesn't fit nicely in one row
    if (test1) if (test2) stuff();
    
    // good
    if (test1){
        if (test2) stuff();
    }

    // good (multiline)
    if (test){
        doStuff();
        // ...
        return false;
    }

    // bad
    function foo(){ return false; }

    // good
    function bar(){
        return false;
    }
    ```

  <a name="blocks--cuddled-elses"></a><a name="16.2"></a>
  - [16.2](#blocks--cuddled-elses) If you're using multi-line blocks with `if` and `else`, do not put `else` on the same line as your `if` block’s closing brace. eslint: [`brace-style`](https://eslint.org/docs/rules/brace-style.html)

    ```javascript
    // bad
    if (test){
        thing1();
        thing2();
    } else {
        thing3();
        thing4();
    }

    // good
    if (test){
        thing1();
        thing2();
    }
    else {
        thing3();
        thing4();
    }
    
    // bad 
    if (test){
        thing1();
        thing2();
    } else thing3();
    
    // good
    if (test){
        thing1();
        thing2();
    } 
    else thing3();
    ```

  <a name="blocks--no-else-return"></a><a name="16.3"></a>
  - [16.3](#blocks--no-else-return) If an `if` block always executes a `return` statement, the subsequent `else` block is unnecessary. A `return` in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks. eslint: [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

    ```javascript
    // bad
    function foo(){
        if (x) return x;
        else return y;
    }

    // bad
    function bar(){
        if (x) return x;
        else if (y) return y;
    }

    // bad
    function baz(){
        if (x) return x;
        else {
            if (y) return y;
        }
    }

    // good
    function foo(){
        if (x) return x;
        return y;
    }

    // good
    function bar(){
        if (x) return x;
        if (y) return y;
    }

    // good
    function baz(x){
        if (x){
            if (z) return y;
        } 
        else return z;
    }
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Control Statements

  <a name="control-statements"></a><a name="17.1"></a>
  - [17.1](#control-statements) In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line. The logical operator should begin the line.

    > Why? Requiring operators at the beginning of the line keeps the operators aligned and follows a pattern similar to method chaining. This also improves readability by making it easier to visually follow complex logic.

    ```javascript
    // bad
    if ((foo === 123 || bar === "abc") && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()){
        thing1();
    }

    // bad
    if (foo === 123 &&
        bar === "abc"){
        thing1();
    }

    // bad
    if (foo === 123
        && bar === "abc"){
        thing1();
    }

    // bad
    if (
        foo === 123 &&
        bar === "abc"
    ){
        thing1();
    }

    // good
    if (
        foo === 123
        && bar === "abc"
    ){
        thing1();
    }

    // good
    if (
        (foo === 123 || bar === "abc")
        && doesItLookGoodWhenItBecomesThatLong()
        && isThisReallyHappening()
    ){
        thing1();
    }

    // good
    if (foo === 123 && bar === "abc"){
        thing1();
    }
    ```

  <a name="control-statements--value-selection"></a><a name="17.2"></a>
  - [17.2](#control-statements--value-selection) Don't use selection operators in place of control statements.

    ```javascript
    // bad
    !isRunning && startRunning();

    // good
    if (!isRunning) startRunning();
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Comments

  <a name="comments--language"></a><a name="18.1"></a>
  - [18.1](#comments--language) Stick to the english language. Always write variable names, function names, comments and co in english.

    > Why? Some reasons:
    > - Consistency.
    > - English is a global language. What if you're part of a german developer team, write code in german and then want to hire someone from another country? 
    > - JavaScript's keywords are english.
    > - Some languages use symbols from different charsets (ö, ä, ü, ß, Ѱ, Ω, etc. pp.). Some of them are illegal as variable/function names and others could break your encoding.

  <a name="comments--multiline"></a><a name="18.2"></a>
  - [18.2](#comments--multiline) Use `/** ... */` for multi-line comments.

    ```javascript
    // bad
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param {String} tag
    // @return {Element} element
    function make(tag){

        // ...

        return element;
    }

    // good
    /**
     * make() returns a new element
     * based on the passed-in tag name
     */
    function make(tag){

        // ...

        return element;
    }
    ```

  <a name="comments--singleline"></a><a name="18.3"></a>
  - [18.3](#comments--singleline) Use `//` for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless it’s on the first line of a block.

    ```javascript
    // bad
    const active = true;  // is current tab

    // good
    // is current tab
    const active = true;

    // bad
    function getType(){
        console.log("fetching type...");
        // set the default type to 'no type'
        const type = this.type || "no type";

        return type;
    }

    // good
    function getType(){
        console.log("fetching type...");

        // set the default type to 'no type'
        const type = this.type || "no type";

        return type;
    }

    // also good
    function getType(){
        // set the default type to 'no type'
        const type = this.type || "no type";

        return type;
    }
    ```

  <a name="comments--spaces"></a><a name="18.4"></a>
  - [18.4](#comments--spaces) Start all comments with a space to make it easier to read. eslint: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

    ```javascript
    // bad
    //is current tab
    const active = true;

    // good
    // is current tab
    const active = true;

    // bad
    /**
     *make() returns a new element
     *based on the passed-in tag name
     */
    function make(tag){

        // ...

        return element;
    }

    // good
    /**
     * make() returns a new element
     * based on the passed-in tag name
     */
    function make(tag){

        // ...

        return element;
    }
    ```

  <a name="comments--actionitems"></a><a name="18.5"></a>
  - [18.5](#comments--actionitems) Prefixing your comments with `FIXME` or `TODO` (action-items) helps other developers quickly understand if you're pointing out a problem that needs to be revisited, or if you're suggesting a solution to the problem that needs to be implemented. These are different than regular comments because they are actionable. The actions are `FIXME: -- need to figure this out` or `TODO: -- need to implement`.

  <a name="comments--fixme"></a><a name="18.6"></a>
  - [18.6](#comments--fixme) Use `// FIXME:` to annotate problems.

    ```javascript
    class Calculator extends Abacus {
        constructor(){
            super();

            // FIXME: shouldn’t use a global here
            total = 0;
        }
    }
    ```

  <a name="comments--todo"></a><a name="18.7"></a>
  - [18.7](#comments--todo) Use `// TODO:` to annotate solutions to problems.

    ```javascript
    class Calculator extends Abacus {
        constructor(){
            super();

            // TODO: total should be configurable by an options param
            this.total = 0;
        }
    }
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Whitespace

  <a name="whitespace--spaces"></a><a name="19.1"></a>
  - [19.1](#whitespace--spaces) Use soft tabs (space character instead of tabulator) set to **4** spaces. eslint: [`indent`](https://eslint.org/docs/rules/indent.html)

    ```javascript
    // bad
    function foo(){
    ∙∙let name;
      let foo;
    }

    // bad
    function bar(){
    ∙let name;
     let foo;
    }

    // good
    function baz(){
    ∙∙∙∙let name;
        let foo;
    }
    ```

  <a name="whitespace--before-blocks"></a><a name="19.2"></a>
  - [19.2](#whitespace--before-blocks) Place 1 space before the leading brace **if** the character before it is _not_ a parenthesis. eslint: [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks.html)

    > Why? Technically speaking, the block is part of the expression. A space doesn't really make sense unless it is simpler to read.

    ```javascript
    // bad
    function test() {
        console.log("test");
    }

    // good
    function test(){
        console.log("test");
    }

    // bad
    foo.set("attr",{
        bar: "baz"
    });

    // good
    foo.set("attr", {
        bar: "baz"
    });
    
    // bad
    class Foo{
        // ...
    }
    
    // good 
    class Foo {
        // ...
    }
    
    // bad
    constructor() {
        // ...
    }
    
    // good
    constructor(){
        // ...
    }
    
    // bad
    if (foo) {
        bar();
    }
    else{
        baz();
    }
    
    // good
    if (foo){
        bar();
    }
    else {
        baz();
    }
    
    // bad
    let x ={
        foo: "bar",
    };
    
    // good
    let x = {
        foo: "bar",
    };
    ```

  <a name="whitespace--around-keywords"></a><a name="19.3"></a>
  - [19.3](#whitespace--around-keywords) Place 1 space before the opening parenthesis in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. eslint: [`keyword-spacing`](https://eslint.org/docs/rules/keyword-spacing.html)

    ```javascript
    // bad
    if(foo){
        bar ();
    }

    // good
    if (foo){
        bar();
    }

    // bad
    function foo (){
        console.log ("bar");
    }

    // good
    function foo(){
        console.log("bar");
    }
    ```

  <a name="whitespace--infix-ops"></a><a name="19.4"></a>
  - [19.4](#whitespace--infix-ops) Set off operators with spaces. eslint: [`space-infix-ops`](https://eslint.org/docs/rules/space-infix-ops.html)

    ```javascript
    // bad
    const x=y+5;

    // good
    const x = y + 5;
    ```

  <a name="whitespace--lf-linebreaks"></a><a name="19.5"></a>
  - [19.5](#whitespace--lf-linebreaks) Use Unix/Linux-Style Linebreaks - `LF` (`\n`) instead of `CR` + `LF` (`\r\n`). eslint: [`linebreak-style`](https://eslint.org/docs/rules/linebreak-style)

  <a name="whitespace--newline-at-end"></a><a name="19.6"></a>
  - [19.6](#whitespace--newline-at-end) End files with a single newline character. eslint: [`eol-last`](https://eslint.org/docs/rules/eol-last)

    > Why? Because that's how the POSIX standard defines a line. [Read more...](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap03.html#tag_03_206)

    ```javascript
    // bad
    let foo = require("foo");
    // ...
    module.exports = foo;
    ```

    ```javascript
    // bad
    let foo = require("foo");
    // ...
    module.exports = foo;↵
    ↵
    ```

    ```javascript
    // good
    let foo = require("foo");
    // ...
    module.exports = foo;↵
    ```

  <a name="whitespace--chains"></a><a name="19.7"></a>
  - [19.7](#whitespace--chains) Use indentation when making long method chains (more than 2 method chains). Use a leading dot, which
    emphasizes that the line is a method call, not a new statement. eslint: [`newline-per-chained-call`](https://eslint.org/docs/rules/newline-per-chained-call) [`no-whitespace-before-property`](https://eslint.org/docs/rules/no-whitespace-before-property)

    ```javascript
    // bad
    $("#items").find(".selected").highlight().end().find(".open").updateCount();

    // bad
    $("#items").
        find(".selected").
            highlight().
            end().
        find(".open").
            updateCount();

    // good
    $("#items")
        .find(".selected")
            .highlight()
            .end()
        .find(".open")
            .updateCount();

    // bad
    const leds = stage.selectAll(".led").data(data).enter().append("svg:svg").classed("led", true)
        .attr("width", (radius + margin) * 2).append("svg:g")
        .attr("transform", `translate(${radius + margin}, ${radius + margin})`)
        .call(tron.led);

    // good
    const leds = stage.selectAll(".led")
            .data(data)
        .enter().append("svg:svg")
            .classed("led", true)
            .attr("width", (radius + margin) * 2)
        .append("svg:g")
            .attr("transform", `translate(${radius + margin}, ${radius + margin})`)
            .call(tron.led);

    // good
    const leds = stage.selectAll(".led").data(data);
    ```

  <a name="whitespace--after-blocks"></a><a name="19.8"></a>
  - [19.8](#whitespace--after-blocks) Leave a blank line after blocks and before the next statement.

    ```javascript
    // bad
    if (foo){
        return bar;
    }
    return baz;

    // good
    if (foo){
        return bar;
    }

    return baz;

    // bad
    const obj = {
        foo(){
        },
        bar(){
        }
    };
    return obj;

    // good
    const obj = {
        foo(){
        },

        bar(){
        }
    };

    return obj;

    // bad
    const arr = [
        function foo(){
        },
        function bar(){
        }
    ];
    return arr;

    // good
    const arr = [
        function foo(){
        },

        function bar(){
        }
    ];

    return arr;
    ```

  <a name="whitespace--padded-blocks"></a><a name="19.9"></a>
  - [19.9](#whitespace--padded-blocks) Do not pad your blocks with blank lines. eslint: [`padded-blocks`](https://eslint.org/docs/rules/padded-blocks.html)

    ```javascript
    // bad
    function bar(){

        console.log(foo);

    }

    // bad
    if (baz){

        console.log(qux);
    } 
    else {
        console.log(foo);

    }

    // bad
    class Foo {

        constructor(bar){
            this.bar = bar;
        }
    }

    // good
    function bar(){
        console.log(foo);
    }

    // good
    if (baz){
        console.log(qux);
    } 
    else {
        console.log(foo);
    }
    ```

  <a name="whitespace--in-parens"></a><a name="19.10"></a>
  - [19.10](#whitespace--in-parens) Do not add spaces inside parentheses. eslint: [`space-in-parens`](https://eslint.org/docs/rules/space-in-parens.html)

    ```javascript
    // bad
    function bar( foo ){
        return foo;
    }

    // good
    function bar(foo){
        return foo;
    }

    // bad
    if ( foo ){
        console.log(foo);
    }

    // good
    if (foo){
        console.log(foo);
    }
    ```

  <a name="whitespace--in-brackets"></a><a name="19.11"></a>
  - [19.11](#whitespace--in-brackets) Do not add spaces inside brackets. eslint: [`array-bracket-spacing`](https://eslint.org/docs/rules/array-bracket-spacing.html)

    ```javascript
    // bad
    const foo = [ 1, 2, 3 ];
    console.log(foo[ 0 ]);

    // good
    const foo = [1, 2, 3];
    console.log(foo[0]);
    ```

  <a name="whitespace--in-braces"></a><a name="19.12"></a>
  - [19.12](#whitespace--in-braces) Add spaces inside curly braces. eslint: [`object-curly-spacing`](https://eslint.org/docs/rules/object-curly-spacing.html)

    ```javascript
    // bad
    const foo = {foo: "bar"};

    // good
    const foo = { foo: "bar" };
    ```

  <a name="whitespace--max-len"></a><a name="19.13"></a>
  - [19.13](#whitespace--max-len) Avoid having lines of code that are longer than 100 characters (including whitespace). Note: per [above](#strings--line-length), long strings are exempt from this rule, and should not be broken up. eslint: [`max-len`](https://eslint.org/docs/rules/max-len.html)

    > Why? This ensures readability and maintainability.

    ```javascript
    // bad
    const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

    // bad
    $.ajax({ method: "POST", url: "https://nulldev.org", data: { foo: "bar" } }).done(() => console.log("Done")).fail(() => console.log("Error"));

    // good
    const foo = jsonData
        && jsonData.foo
        && jsonData.foo.bar
        && jsonData.foo.bar.baz
        && jsonData.foo.bar.baz.quux
        && jsonData.foo.bar.baz.quux.xyzzy;

    // good
    $.ajax({
        method: "POST", 
        url: "https://nulldev.org", 
        data: { 
            foo: "bar" 
        },
    }).done(() => {
        console.log("Done");
    }).fail(() => {
        console.log("Error");
    });
    ```

  <a name="whitespace--block-spacing"></a><a name="19.14"></a>
  - [19.14](#whitespace--block-spacing) Require consistent spacing inside an open block token and the next token on the same line. This rule also enforces consistent spacing inside a close block token and previous token on the same line. eslint: [`block-spacing`](https://eslint.org/docs/rules/block-spacing)

    ```javascript
    // bad
    function foo(){return true;}
    if (foo){ bar = 0;}

    // good
    function foo(){ return true; }
    if (foo){ bar = 0; }
    ```

  <a name="whitespace--comma-spacing"></a><a name="19.15"></a>
  - [19.15](#whitespace--comma-spacing) Avoid spaces before commas and require a space after commas. eslint: [`comma-spacing`](https://eslint.org/docs/rules/comma-spacing)

    ```javascript
    // bad
    let foo = 1,bar = 2;
    let arr = [1 , 2];

    // good
    let foo = 1, bar = 2;
    let arr = [1, 2];
    ```

  <a name="whitespace--computed-property-spacing"></a><a name="19.16"></a>
  - [19.16](#whitespace--computed-property-spacing) Enforce spacing inside of computed property brackets. eslint: [`computed-property-spacing`](https://eslint.org/docs/rules/computed-property-spacing)

    ```javascript
    // bad
    obj[foo ]
    obj[ "foo"]
    let x = {[ b ]: a}
    obj[foo[ bar ]]

    // good
    obj[foo]
    obj["foo"]
    let x = { [b]: a }
    obj[foo[bar]]
    ```

  <a name="whitespace--func-call-spacing"></a><a name="19.17"></a>
  - [19.17](#whitespace--func-call-spacing) Avoid spacing between functions and their invocations. eslint: [`func-call-spacing`](https://eslint.org/docs/rules/func-call-spacing)

    ```javascript
    // bad
    func ();

    func
    ();

    // good
    func();
    ```

  <a name="whitespace--key-spacing"></a><a name="19.18"></a>
  - [19.18](#whitespace--key-spacing) Enforce spacing between keys and values in object literal properties. eslint: [`key-spacing`](https://eslint.org/docs/rules/key-spacing)

    ```javascript
    // bad
    let obj = { "foo" : 42 };
    let obj2 = { "foo":42 };

    // good
    let obj = { "foo": 42 };
    ```

  <a name="whitespace--no-trailing-spaces"></a><a name="19.19"></a>
  - [19.19](#whitespace--no-trailing-spaces) Avoid trailing spaces at the end of lines. eslint: [`no-trailing-spaces`](https://eslint.org/docs/rules/no-trailing-spaces)

  <a name="whitespace--no-multiple-empty-lines"></a><a name="19.20"></a>
  - [19.20](#whitespace--no-multiple-empty-lines) Avoid multiple empty lines and only allow one newline at the end of files. eslint: [`no-multiple-empty-lines`](https://eslint.org/docs/rules/no-multiple-empty-lines)

    <!-- markdownlint-disable MD012 -->
    ```javascript
    // bad
    let x = 1;



    let y = 2;

    // good
    let x = 1;

    let y = 2;
    ```
    <!-- markdownlint-enable MD012 -->

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Commas

  <a name="commas--leading-trailing"></a><a name="20.1"></a>
  - [20.1](#commas--leading-trailing) Do not write leading commas. eslint: [`comma-style`](https://eslint.org/docs/rules/comma-style.html)

    ```javascript
    // bad
    const x = [
          foo
        , bar
        , baz
    ];

    // good
    const x = [
        foo,
        bar,
        baz,
    ];

    // bad
    const x = {
          foo: "foo1"
        , bar: "bar1"
        , baz: "baz1"
        , abc: "abc1"
    };

    // good
    const x = {
        foo: "foo1",
        bar: "bar1",
        baz: "baz1",
        abc: "abc1",
    };
    ```

  <a name="commas--dangling"></a><a name="20.2"></a>
  - [20.2](#commas--dangling) Write additional trailing commas. eslint: [`comma-dangle`](https://eslint.org/docs/rules/comma-dangle.html)

    > Why? It leads to cleaner git diffs and allows easier copy-pasting. **Careful**: A comma must not appear after a [rest element](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters). [Read more...](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas)

    ```diff
    // git diff without trailing comma (bad)
    const hero = {
         bar: "bar",
    -    baz: "baz"
    +    baz: "baz",
    +    abc: [1, 2, 3]
    };
    
    // git diff with trailing comma (good)
    const foo = {
         bar: "bar",
         baz: "baz",
    +    abc: [1, 2, 3],
    };
    ```

    ```javascript
    // bad
    const foo = {
        bar: true,
        baz: false
    };

    const foo = [
        "bar",
        "baz"
    ];

    // good
    const foo = {
        bar: true,
        baz: false,
    };

    const foo = [
        "bar",
        "baz",
    ];

    // bad
    function foo(
        arg1,
        arg2,
        agr3
    ){
        // ..
    }

    // good
    function foo(
        arg1,
        arg2,
        agr3,
    ){
        // ..
    }

    // bad
    createUser(
        firstName,
        lastName,
        birthday
    );

    // good
    createUser(
        firstName,
        lastName,
        birthday,
    );
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Semicolons

  <a name="semicolons--required"></a><a name="21.1"></a>
  - [21.1](#semicolons--required) **Use semicolons.** eslint: [`semi`](https://eslint.org/docs/rules/semi.html)

    > Why? When JavaScript encounters a line break without a semicolon, it uses a set of rules called [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion) to determine whether or not it should regard that line break as the end of a statement, and (as the name implies) place a semicolon into your code before the line break if it thinks so. ASI contains a few eccentric behaviors, though, and your code will break if JavaScript misinterprets your line break. These rules will become more complicated as new features become a part of JavaScript. Explicitly terminating your statements and configuring your linter to catch missing semicolons will help prevent you from encountering issues. In other words: You could say ASI is a feature to help out, when you _forget_ a semicolon. This doesn't mean you _shouldn't_ use them. Not using semicolons may also slow down the execution because of the additional parsing. 

    ```javascript
    // bad - raises exception
    const foo = {}
    const bar = {}
    [foo, bar].forEach(baz => baz.x = "test")

    // bad - raises exception
    const abc = "Another test"
    (async function tempFoo(){
        // ...
    }())

    // bad - returns `undefined` instead of the value on the next line
    // this always happens when `return` is on a line by itself because of ASI!
    function tempBar(){
      return
          "Some string..."
    }

    // good
    const foo = {};
    const bar = {};
    [foo, bar].forEach((baz) => {
        baz.x = "test";
    });

    // good
    const abc = "Another test";
    (async function tempFoo(){
        // ...
    }());

    // good
    function tempBar(){
        return "Some string...";
    }
    ```

    [Read more](https://stackoverflow.com/questions/7365172/semicolon-before-self-invoking-function/7365214#7365214).

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Type Casting & Coercion

  <a name="coercion--explicit"></a><a name="22.1"></a>
  - [22.1](#coercion--explicit) Perform type coercion at the beginning of the statement.

  <a name="coercion--strings"></a><a name="22.2"></a>
  - [22.2](#coercion--strings) Strings: Prefer [`String()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) over [`.toString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

    > Why? `.toString()` is a prototype of `Number`. `String()` on the other hand, is globally available and thus allows casting of any type. Also, `.toString()` can be overridden as seen in [section 9.4](#constructors--tostring)

    ```javascript
    // => this.reviewScore = 9;

    // bad
    const totalScore = new String(this.reviewScore); // typeof totalScore is "object" not "string"

    // bad
    const totalScore = this.reviewScore + ""; // invokes this.reviewScore.valueOf()

    // bad
    const totalScore = this.reviewScore.toString(); // isn't guaranteed to return a string

    // good
    const totalScore = String(this.reviewScore);
    ```

  <a name="coercion--numbers"></a><a name="22.3"></a>
  - [22.3](#coercion--numbers) Numbers: Use [`Number()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) for type casting and [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) only with a radix for parsing strings. Do prefer `Number()` over `parseInt()` though. eslint: [`radix`](https://eslint.org/docs/rules/radix) [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

    > Why? Mostly because of the same reasons listed in [the section above](#coercion--strings). Also, since `parseInt()` always expects a string, it does show odd behaviour when parsing very small numbers ([source](https://dmitripavlutin.com/parseint-mystery-javascript/))

    ```javascript
    const inputValue = "4";

    // bad
    const val = new Number(inputValue);

    // bad
    const val = +inputValue;

    // bad
    const val = inputValue >> 0;

    // bad
    const val = parseInt(inputValue);

    // best
    const val = Number(inputValue);

    // good
    const val = parseInt(inputValue, 10);
    ```

  <a name="coercion--comment-deviations"></a><a name="22.4"></a>
  - [22.4](#coercion--comment-deviations) If for whatever reason you are doing something wild and `parseInt` is your bottleneck and need to use Bitshift for [performance reasons](https://jsperf.com/coercion-vs-casting/3), leave a comment explaining why and what you're doing.

    ```javascript
    // good
    /**
     * parseInt was the reason my code was slow.
     * Bitshifting the String to coerce it to a
     * Number made it a lot faster.
     */
    const val = inputValue >> 0;
    ```

  <a name="coercion--bitwise"></a><a name="22.5"></a>
  - [22.5](#coercion--bitwise) **Note:** Be careful when using bitshift operations. Numbers are represented as [64-bit values](https://es5.github.io/#x4.3.19), but bitshift operations always return a 32-bit integer ([source](https://es5.github.io/#x11.7)). Bitshift can lead to unexpected behavior for integer values larger than 32 bits. [More info](https://stackoverflow.com/questions/2373791/bitshift-in-javascript). Largest signed 32-bit Int is 2,147,483,647:

    ```javascript
    2147483647 >> 0; // => 2147483647
    2147483648 >> 0; // => -2147483648
    2147483649 >> 0; // => -2147483647
    ```

  <a name="coercion--booleans"></a><a name="22.6"></a>
  - [22.6](#coercion--booleans) Booleans: eslint: [`no-new-wrappers`](https://eslint.org/docs/rules/no-new-wrappers)

    ```javascript
    const age = 0;

    // bad
    const hasAge = new Boolean(age);

    // good
    const hasAge = Boolean(age);

    // best
    const hasAge = !!age;
    ```

  <a name="coercion--valid-typeof"></a><a name="22.6"></a>
  - [22.6](#coercion--valid-typeof) Only compare returned strings by `typeof` to valid strings: eslint: [`valid-typeof`](https://eslint.org/docs/rules/valid-typeof)

    ```javascript
    
    // bad - will be prevented by linter
    typeof foo === "strnig";
    
    // good
    typeof foo === "string";
    typeof bar === typeof foo;
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Naming Conventions

  <a name="naming--language"></a><a name="23.0"></a>
  - [23.0](#naming--language) Stick to the english language. Always write variable names, function names, comments and co in english.

    > Why? Some reasons:
    > - Consistency.
    > - English is a global language. What if you're part of a german developer team, write code in german and then want to hire someone from another country? 
    > - JavaScript's keywords are english.
    > - Some languages use symbols from different charsets (ö, ä, ü, ß, Ѱ, Ω, etc. pp.). Some of them are illegal as variable/function names and others could break your encoding.

  <a name="naming--descriptive"></a><a name="23.1"></a>
  - [23.1](#naming--descriptive) Avoid single letter names. Be descriptive with your naming. eslint: [`id-length`](https://eslint.org/docs/rules/id-length)

    ```javascript
    // bad
    function q(){
        // ...
    }

    // good
    function query(){
        // ...
    }
    ```

  <a name="naming--camelCase"></a><a name="23.2"></a>
  - [23.2](#naming--camelCase) Use camelCase when naming objects, functions, and instances. eslint: [`camelcase`](https://eslint.org/docs/rules/camelcase.html)

    ```javascript
    // bad
    const OBJEcttsssss = {};
    const this_is_my_object = {};
    function c(){}

    // good
    const thisIsMyObject = {};
    function thisIsMyFunction(){}
    ```

  <a name="naming--PascalCase"></a><a name="23.3"></a>
  - [23.3](#naming--PascalCase) Use PascalCase only when naming constructors or classes. eslint: [`new-cap`](https://eslint.org/docs/rules/new-cap.html)

    ```javascript
    // bad
    function user(options){
        this.name = options.name;
    }

    const bad = new user({
        name: "...",
    });

    // good
    class User {
        constructor(options){
            this.name = options.name;
        }
    }

    const good = new User({
        name: "...",
    });
    ```

  <a name="naming--leading-underscore"></a><a name="23.4"></a>
  - [23.4](#naming--leading-underscore) Do not use trailing or leading underscores. eslint: [`no-underscore-dangle`](https://eslint.org/docs/rules/no-underscore-dangle.html)

    > Why? JavaScript does not have the concept of privacy in terms of properties or methods. Although a leading underscore is a common convention to mean “private”, in fact, these properties are fully public, and as such, are part of your public API contract. This convention might lead developers to wrongly think that a change won’t count as breaking, or that tests aren’t needed. tl;dr: if you want something to be “private”, it must not be observably present.

    ```javascript
    // bad
    this.__firstName__ = "Foo";
    this.firstName_ = "Foo";
    this._firstName = "Foo";

    // good
    this.firstName = "Foo";

    // good, in environments where WeakMaps are available
    // see https://kangax.github.io/compat-table/es6/#test-WeakMap
    const firstNames = new WeakMap();
    firstNames.set(this, "Foo");
    ```

  <a name="naming--self-this"></a><a name="23.5"></a>
  - [23.5](#naming--self-this) Don’t save references to `this`. Use arrow functions or [Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

    ```javascript
    // bad
    function foo(){
        const self = this;
        return function(){
            console.log(self);
        };
    }

    // bad
    function foo(){
        const that = this;
        return function(){
            console.log(that);
        };
    }

    // good
    function foo(){
        return () => {
            console.log(this);
        };
    }
    ```

  <a name="naming--filename-matches-export"></a><a name="23.6"></a>
  - [23.6](#naming--filename-matches-export) A base filename should exactly match the name of its default export.

    ```javascript
    // file 1 contents
    class CheckBox {
        // ...
    }
    module.exports = CheckBox;

    // file 2 contents
    module.exports = function fortyTwo(){ return 42; }

    // file 3 contents
    module.exports = function insideDirectory(){}

    // in some other file
    // bad
    let CheckBox = require("./checkBox"); // PascalCase import/export, camelCase filename
    let FortyTwo = require("./FortyTwo"); // PascalCase import/filename, camelCase export
    let InsideDirectory = require("./InsideDirectory"); // PascalCase import/filename, camelCase export

    // bad
    let CheckBox = require("./check_box"); // PascalCase import/export, snake_case filename
    let forty_two = require("./forty_two"); // snake_case import/filename, camelCase export
    let inside_directory = require("./inside_directory"); // snake_case import, camelCase export
    let index = require("./inside_directory/index"); // requiring the index file explicitly
    let insideDirectory = require("./insideDirectory/index"); // requiring the index file explicitly

    // good
    let CheckBox = require("./CheckBox"); // PascalCase export/import/filename
    let fortyTwo = require("./fortyTwo"); // camelCase export/import/filename
    let insideDirectory = require("./insideDirectory"); // camelCase export/import/directory name/implicit "index"
    // ^ supports both insideDirectory.js and insideDirectory/index.js
    ```

  <a name="naming--camelCase-default-export"></a><a name="23.7"></a>
  - [23.7](#naming--camelCase-default-export) Use camelCase when you export-default a function. Your filename should be identical to your function’s name.

    ```javascript
    function makeStyleGuide(){
        // ...
    }

    module.exports = makeStyleGuide;
    ```

  <a name="naming--PascalCase-singleton"></a><a name="23.8"></a>
  - [23.8](#naming--PascalCase-singleton) Use PascalCase when you export a constructor / class / singleton / function library / bare object.

    ```javascript
    const Foo = {
        bar: {
        }
    };

    module.exports = Foo;
    ```

  <a name="naming--Acronyms-and-Initialisms"></a><a name="23.9"></a>
  - [23.9](#naming--Acronyms-and-Initialisms) Acronyms and initialisms should always be all capitalized, or all lowercased.

    > Why? Names are for readability, not to appease a computer algorithm.

    ```javascript
    // bad
    let SmsContainer = require("./containers/SmsContainer");

    // bad
    const HttpRequests = [
        // ...
    ];

    // good
    let SMSContainer = require("./containers/SMSContainer");

    // good
    const HTTPRequests = [
        // ...
    ];

    // also good (sticks to camelCase)
    const httpRequests = [
        // ...
    ];

    // best
    let TextMessageContainer = require("./containers/TextMessageContainer");

    // best
    const requests = [
        // ...
    ];
    ```

  <a name="naming--uppercase"></a><a name="23.10"></a>
  - [23.10](#naming--uppercase) You may optionally uppercase a constant only if it (1) is exported, (2) is a `const` (it can not be reassigned), and (3) the programmer can trust it (and its nested properties) to never change. <br>
    **Note**: This is about ES6 import/export, **not** CommonJS require()

    > Why? This is an additional tool to assist in situations where the programmer would be unsure if a variable might ever change. UPPERCASE_VARIABLES are letting the programmer know that they can trust the variable (and its properties) not to change. <br>
    - What about all `const` variables? This is unnecessary, so uppercasing should not be used for constants within a file. It should be used for exported constants however. <br>
    - What about exported objects? Uppercase at the top level of export (e.g. `EXPORTED_OBJECT.key`) and maintain that all nested properties do not change.

    ```javascript
    // bad
    const PRIVATE_VARIABLE = "should not be unnecessarily uppercased within a file";

    // bad
    export const THING_TO_BE_CHANGED = "should obviously not be uppercased";

    // bad
    export let REASSIGNABLE_VARIABLE = "do not use let with uppercase variables";

    // ---

    // allowed but does not supply semantic value
    export const apiKey = "SOMEKEY";

    // better in most cases
    export const API_KEY = "SOMEKEY";

    // ---

    // bad - unnecessarily uppercases key while adding no semantic value
    export const MAPPING = {
        KEY: "value",
    };

    // good
    export const MAPPING = {
        key: "value",
    };
    ```
  <a name="naming--state-booleans"></a><a name="23.11"></a>
  - [23.11](#naming--state-booleans) Write `isCondition` instead of `conditionState` for boolean state checks.
  
    > Why? It makes the intentions clear.
    
    ```javascript
    // bad - this is very vague
    if (activeState) doSomething();

    // bad - the "=== true" check makes the intentions clear, but is also unnecessary
    if (activeState === true) doSomething();
    
    // good - short and clear
    if (isActive) doSomething();
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Accessors

  <a name="accessors--not-required"></a><a name="24.1"></a>
  - [24.1](#accessors--not-required) Accessor functions for properties are not required.

  <a name="accessors--no-getters-setters"></a><a name="24.2"></a>
  - [24.2](#accessors--no-getters-setters) Do not use JavaScript getters/setters as they cause unexpected side effects and are harder to test, maintain, and reason about. Instead, if you do make accessor functions, use `getVal()` and `setVal("foo")`.

    ```javascript
    // bad
    class Foo {
        get bar(){
            // ...
        }

        set bar(value){
            // ...
        }
    }

    // good
    class Foo {
        getBar(){
            // ...
        }

        setBar(value){
            // ...
        }
    }
    ```

  <a name="accessors--boolean-prefix"></a><a name="24.3"></a>
  - [24.3](#accessors--boolean-prefix) If the property/method is a `boolean`, use `isVal()` or `hasVal()`.

    ```javascript
    // bad
    if (!foo.bar()){
        return false;
    }

    // good
    if (!foo.hasBar()){
        return false;
    }
    ```

  <a name="accessors--consistent"></a><a name="24.4"></a>
  - [24.4](#accessors--consistent) It’s okay to create `get()` and `set()` functions, but be consistent.

    ```javascript
    class Foo {
        constructor(options = {}){
            const bar = options.bar || "Default bar";
            this.set("bar", bar);
        }

        set(key, val){
            this[key] = val;
        }

        get(key){
            return this[key];
        }
    }
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Events

  <a name="events--hash"></a><a name="25.1"></a>
  - [25.1](#events--hash) When attaching data payloads to events (whether DOM events or something more proprietary like Backbone events), pass an object literal (also known as a "hash") instead of a raw value. This allows a subsequent contributor to add more data to the event payload without finding and updating every handler for the event. For example, instead of:

    ```javascript
    // bad
    $(this).trigger("listingUpdated", listing.id);

    // ...

    $(this).on("listingUpdated", (e, listingID) => {
        // do something with listingID
    });
    ```

    prefer:

    ```javascript
    // good
    $(this).trigger("listingUpdated", { 
        listingID: listing.id 
    });

    // ...

    $(this).on("listingUpdated", (e, data) => {
        // do something with data.listingID
    });
    ```

  **[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Standard Library

  The [Standard Library](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects)
  contains utilities that are functionally broken but remain for legacy reasons.

  <a name="standard-library--isnan"></a><a name="26.1"></a>
  - [26.1](#standard-library--isnan) Use `Number.isNaN` instead of global `isNaN`.
    eslint: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

    > Why? The global `isNaN` coerces non-numbers to numbers, returning true for anything that coerces to NaN.
    > If this behavior is desired, make it explicit.

    ```javascript
    // bad
    isNaN("1.2"); // false
    isNaN("1.2.3"); // true

    // good
    Number.isNaN("1.2.3"); // false
    Number.isNaN(Number("1.2.3")); // true
    ```

  <a name="standard-library--isfinite"></a><a name="26.2"></a>
  - [26.2](#standard-library--isfinite) Use `Number.isFinite` instead of global `isFinite`.
    eslint: [`no-restricted-globals`](https://eslint.org/docs/rules/no-restricted-globals)

    > Why? The global `isFinite` coerces non-numbers to numbers, returning true for anything that coerces to a finite number.
    > If this behavior is desired, make it explicit.

    ```javascript
    // bad
    isFinite("2e3"); // true

    // good
    Number.isFinite("2e3"); // false
    Number.isFinite(parseInt("2e3", 10)); // true
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## jQuery

  <a name="jquery--dollar-prefix"></a><a name="27.1"></a>
  - [27.1](#jquery--dollar-prefix) Prefix jQuery object variables with a `$`.

    ```javascript
    // bad
    const sidebar = $(".sidebar");

    // good
    const $sidebar = $(".sidebar");

    // good
    const $sidebarBtn = $(".sidebar-btn");
    ```

  <a name="jquery--cache"></a><a name="27.2"></a>
  - [27.2](#jquery--cache) Cache jQuery lookups.

    ```javascript
    // bad
    function setSidebar(){
        $(".sidebar").hide();

        // ...

        $(".sidebar").css({
            "background-color": "green",
        });
    }

    // good
    function setSidebar(){
        const $sidebar = $(".sidebar");
        $sidebar.hide();

        // ...

        $sidebar.css({
            "background-color": "green",
        });
    }
    ```

  <a name="jquery--queries"></a><a name="27.3"></a>
  - [27.3](#jquery--queries) For DOM queries use Cascading `$(".sidebar ul")` or parent > child `$(".sidebar > ul")`. [jsPerf](http://jsperf.com/jquery-find-vs-context-sel/16)

  <a name="jquery--find"></a><a name="27.4"></a>
  - [27.4](#jquery--find) Use `find` with scoped jQuery object queries.

    ```javascript
    // bad
    $("ul", ".sidebar").hide();

    // bad
    $(".sidebar").find("ul").hide();

    // good
    $(".sidebar ul").hide();

    // good
    $(".sidebar > ul").hide();

    // good
    $sidebar.find("ul").hide();
    ```
    
  <a name="jquery--find"></a><a name="27.5"></a>
  - [27.5](#jquery--on) Use `.on` instead of the event name (shorthands) when doing bindings.

    > Why? `.on()` works on dynamically added elements and is better in performance. [Read more...](https://stackoverflow.com/questions/9122078/difference-between-onclick-vs-click)

    ```javascript
    // bad
    $("a.test").click(function(){
        // ...
    });
    
    $("div.test").mouseover(function(){
        // ...
    });
    
    // good
    $("a.test").on("click", function(){
        // ...
    });
    
    $("div.test").on("mouseover", function(){
        // ...
    });
    ```

  <a name="jquery--ready"></a><a name="27.6"></a>
  - [27.6](#jquery--ready) Don't bloat the `$(document).ready()` function
  
    > Why? It actively harms readability and generally the structure of the code.
    
    ```javascript
    
    // Bad
    $(document).ready(function(){
        $(foo).on("click", function(){
            doStuff();
            doMoreStuff();
            doEvenMoreStuff(function(stuff){
                // ...
            });
        });
        
        $(bar).on("click", function(){
            doMoreStuff();
            doStuff();
        });
        
        $(baz).on("click", function(){
            doMoreStuff();
            doEvenMoreStuff(function(stuff){
                // ...
            });
        });
    });
    
    // Good
    function stuffHandler(){
        // ...
    }
    
    $(document).ready(function(){
        $(foo).on("click", stuffHandler);
        $(bar).on("click", stuffHandler);
        $(baz).on("click", stuffHandler);
    });
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## ECMAScript 5 Compatibility

  <a name="es5-compat--kangax"></a><a name="28.1"></a>
  - [28.1](#es5-compat--kangax) Refer to [Kangax](https://twitter.com/kangax/)’s ES5 [compatibility table](https://kangax.github.io/es5-compat-table/).

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

<a name="ecmascript-6-styles"></a>
## ECMAScript 6+ (ES 2015+) Styles

  <a name="es6-styles"></a><a name="29.1"></a>
  - [29.1](#es6-styles) This is a collection of links to the various ES6+ features.

1. [Arrow Functions](#arrow-functions)
1. [Classes](#classes--constructors)
1. [Object Shorthand](#es6-object-shorthand)
1. [Object Concise](#es6-object-concise)
1. [Object Computed Properties](#es6-computed-properties)
1. [Template Strings](#es6-template-literals)
1. [Destructuring](#destructuring)
1. [Default Parameters](#es6-default-parameters)
1. [Rest](#es6-rest)
1. [Array Spreads](#es6-array-spreads)
1. [Let and Const](#references)
1. [Exponentiation Operator](#es2016-properties--exponentiation-operator)
1. [Iterators and Generators](#iterators-and-generators)
1. [Modules](#modules)

  <a name="tc39-proposals"></a><a name="29.2"></a>
  - [29.2](#tc39-proposals) Do not use [TC39 proposals](https://github.com/tc39/proposals) that have not reached stage 3.

    > Why? [They are not finalized](https://tc39.github.io/process-document/), and they are subject to change or to be withdrawn entirely. We want to use JavaScript, and proposals are not JavaScript yet.

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Testing

  <a name="testing--tests"></a><a name="30.1"></a>
  - [30.1](#testing--tests) **Tests**
    - Whichever testing framework you use, you should be writing tests!
    - Strive to write many small pure functions, and minimize where mutations occur.
    - Be cautious about stubs and mocks - they can make your tests more brittle.
    - Recommendations: [`mocha`](https://www.npmjs.com/package/mocha) and [`jest`](https://www.npmjs.com/package/jest) or [`tape`](https://www.npmjs.com/package/tape) for small, separate modules.
    - 100% test coverage is a good goal to strive for, even if it’s not always practical to reach it.
    - Whenever you fix a bug, _write a regression test_. A bug fixed without a regression test is almost certainly going to break again in the future.

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Performance

  <a name="performance--performance"></a><a name="31.1"></a>
  - [31.1](#performance--performance) **Performance**
    - [On Layout & Web Performance](https://www.kellegous.com/j/2013/01/26/layout-performance/)
    - [String vs Array Concat](https://jsperf.com/string-vs-array-concat/2)
    - [Try/Catch Cost In a Loop](https://jsperf.com/try-catch-in-loop-cost)
    - [Bang Function](https://jsperf.com/bang-function)
    - [jQuery Find vs Context, Selector](https://jsperf.com/jquery-find-vs-context-sel/13)
    - [innerHTML vs textContent for script text](https://jsperf.com/innerhtml-vs-textcontent-for-script-text)
    - [Long String Concatenation](https://jsperf.com/ya-string-concat)
    - [Are JavaScript functions like `map()`, `reduce()`, and `filter()` optimized for traversing arrays?](https://www.quora.com/JavaScript-programming-language-Are-Javascript-functions-like-map-reduce-and-filter-already-optimized-for-traversing-array/answer/Quildreen-Motta)

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Resources

  <a name="resources--learning-es6"></a><a name="32.1"></a>
  - [32.1](#resources--learning-es6) **Learning ES6+**
    - [Latest ECMA spec](https://tc39.github.io/ecma262/)
    - [ExploringJS](http://exploringjs.com/)
    - [ES6 Compatibility Table](https://kangax.github.io/compat-table/es6/)
    - [Comprehensive Overview of ES6 Features](http://es6-features.org/)
    - [More on ES6 Features](https://github.com/lukehoban/es6features/)
    - [Useful JavaScript snippets that you can understand in 30 seconds](https://github.com/30-seconds/30-seconds-of-code)
    - [Common JS interview questions (test yourself here)](https://github.com/30-seconds/30-seconds-of-interviews)
    - [Common JS Algorithms and Data Structures](https://github.com/trekhleb/javascript-algorithms)

  <a name="resources--read-this"></a><a name="32.2"></a>
  - [32.2](#resources--read-this) **Read This**
    - [Standard ECMA-262](http://www.ecma-international.org/ecma-262/6.0/index.html)
    - [NodeJS Best practices](https://github.com/goldbergyoni/nodebestpractices)

  <a name="resources--tools"></a><a name="32.3"></a>
  - [32.3](#resources--tools) **Tools**
    - Code Style Linters
      - [ESlint](https://eslint.org/) - [NullDev Style .eslintrc](https://github.com/NullDev/JavaScript-Styleguide/blob/master/.eslintrc)

  <a name="resources--further-reading"></a><a name="32.4"></a>
  - [32.4](#resources--further-reading) **Further Reading**
    - [Understanding JavaScript Closures](https://javascriptweblog.wordpress.com/2010/10/25/understanding-javascript-closures/) - Angus Croll
    - [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html) - Dr. Axel Rauschmayer
    - [You Might Not Need jQuery](http://youmightnotneedjquery.com/) - Zack Bloom & Adam Schwartz
    - [ES6 Features](https://github.com/lukehoban/es6features) - Luke Hoban
    - [Frontend Guidelines](https://github.com/bendc/frontend-guidelines) - Benjamin De Cock

  <a name="resources--books"></a><a name="32.5"></a>
  - [32.5](#resources--books) **Books**
    - [JavaScript: The Good Parts](https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742) - Douglas Crockford
    - [JavaScript Patterns](https://www.amazon.com/JavaScript-Patterns-Stoyan-Stefanov/dp/0596806752) - Stoyan Stefanov
    - [Pro JavaScript Design Patterns](https://www.amazon.com/JavaScript-Design-Patterns-Recipes-Problem-Solution/dp/159059908X) - Ross Harmes and Dustin Diaz
    - [High Performance Web Sites: Essential Knowledge for Front-End Engineers](https://www.amazon.com/High-Performance-Web-Sites-Essential/dp/0596529309) - Steve Souders
    - [Maintainable JavaScript](https://www.amazon.com/Maintainable-JavaScript-Nicholas-C-Zakas/dp/1449327680) - Nicholas C. Zakas
    - [JavaScript Web Applications](https://www.amazon.com/JavaScript-Web-Applications-Alex-MacCaw/dp/144930351X) - Alex MacCaw
    - [Pro JavaScript Techniques](https://www.amazon.com/Pro-JavaScript-Techniques-John-Resig/dp/1590597273) - John Resig
    - [Smashing Node.js: JavaScript Everywhere](https://www.amazon.com/Smashing-Node-js-JavaScript-Everywhere-Magazine/dp/1119962595) - Guillermo Rauch
    - [Secrets of the JavaScript Ninja](https://www.amazon.com/Secrets-JavaScript-Ninja-John-Resig/dp/193398869X) - John Resig and Bear Bibeault
    - [Human JavaScript](http://humanjavascript.com/) - Henrik Joreteg
    - [Superhero.js](http://superherojs.com/) - Kim Joar Bekkelund, Mads Mobæk, & Olav Bjorkoy
    - [JSBooks](http://jsbooks.revolunet.com/) - Julien Bouquillon
    - [Third Party JavaScript](https://www.manning.com/books/third-party-javascript) - Ben Vinegar and Anton Kovalyov
    - [Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript](http://amzn.com/0321812182) - David Herman
    - [Eloquent JavaScript](http://eloquentjavascript.net/) - Marijn Haverbeke
    - [You Don’t Know JS: ES6 & Beyond](http://shop.oreilly.com/product/0636920033769.do) - Kyle Simpson

  <a name="resources--blogs"></a><a name="32.6"></a>
  - [32.6](#resources--blogs) **Blogs**
    - [JavaScript Weekly](http://javascriptweekly.com/)
    - [JavaScript, JavaScript...](https://javascriptweblog.wordpress.com/)
    - [Bocoup Weblog](https://bocoup.com/weblog)
    - [Adequately Good](http://www.adequatelygood.com/)
    - [NCZOnline](https://www.nczonline.net/)
    - [Perfection Kills](http://perfectionkills.com/)
    - [Ben Alman](http://benalman.com/)
    - [Dmitry Baranovskiy](http://dmitry.baranovskiy.com/)
    - [nettuts](http://code.tutsplus.com/?s=javascript)

  <a name="resources--podcasts"></a><a name="32.7"></a>
  - [32.7](#resources--podcasts) **Podcasts**
    - [JavaScript Air](https://javascriptair.com/)
    - [JavaScript Jabber](https://devchat.tv/js-jabber/)

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Copyright

  <a name="copyright--base"></a><a name="33.1"></a>
  - [33.1](#copyright--base) This Styleguide is based on [AirBnB's JavaScript Styleguide](https://github.com/airbnb/javascript) 
  
  <a name="copyright--license"></a><a name="33.2"></a>
  - [33.2](#copyright--license) It uses the same [License](https://github.com/NullDev/JavaScript-Styleguide/blob/master/LICENSE). 

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Amendments

  <a name="amendments--forking"></a><a name="34.1"></a>
  - [34.1](#amendments--forking) We encourage you to fork this guide and change the rules to fit your team’s style guide. :smile_cat:

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

<br><br><br>

<p align="center">
<a href="https://github.com/NullDev/JavaScript-Styleguide/blob/master/LICENSE">
<img src="https://img.shields.io/badge/License-MIT-F8E301.svg?style=flat-square"/>
</a>
</p>

[![NullDev JavaScript Styleguide](https://i.imgur.com/52YayNH.png)](https://nulldev.org)
