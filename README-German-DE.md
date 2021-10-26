[![NullDev JavaScript Styleguide](https://i.imgur.com/VcFtkgK.png)](https://nulldev.org)

# NullDev JavaScript StyleGuide auf Deutsch (WIP)

<p align="center"><img height="150" width="auto" src="https://i.imgur.com/eCmJFjH.png" /></p>
<p align="center"><b>Ein <i>zumeist</i> vernünftiger Ansatz für JavaScript</b></p>
<p align="center"><sub>Oder... Hauptsächlich NodeJS...</sub></p>

</p>

## Inhalt

  1. :clipboard: [Typen](#types)
     <details>
     <summary>Inhalte anzeigen</summary>

       - [1.1](#types--primitives) Primitive Typen
       - [1.2](#types--complex) Komplexe Typen

     </details>

  1. :link: [Referenzen](#references)
     <details>
     <summary>Inhalte anzeigen</summary>

       - [2.1](#references--prefer-const) `const` bevorzugen
       - [2.2](#references--disallow-var) `var` verbieten
       - [2.3](#references--let-require) `let` für `require()`
       - [2.4](#references--block-scope) Block scope

     </details>

  1. :package: [Objekte](#objects)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [3.1](#objects--no-new) Literals
     - [3.2](#es6-computed-properties) Computed properties
     - [3.3](#es6-object-shorthand) Objekt Kurzform
     - [3.4](#es6-object-concise) Object concise
     - [3.5](#objects--grouped-shorthand) Grouped shorthand
     - [3.6](#objects--quoted-props) Quoted properties
     - [3.7](#objects--prototype-builtins) Prototype Builtins
     - [3.8](#objects--rest-spread) Rest spread

     </details>

  1. :bookmark_tabs: [Arrays](#arrays)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [4.1](#arrays--literals) Literale
     - [4.2](#arrays--push) Push
     - [4.3](#es6-array-spreads) Array spreads
     - [4.4](#arrays--from-iterable) spread für iterable
     - [4.5](#arrays--from-array-like) Array-ähnliche Objekte
     - [4.6](#arrays--mapping) Mapping
     - [4.7](#arrays--callback-return) Callback return
     - [4.8](#arrays--bracket-newline) Zeilenumbrüche

     </details>

  1. :hammer: [Destructuring](#destructuring)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [5.1](#destructuring--object) Object destructuring
     - [5.2](#destructuring--array) Array destructuring
     - [5.3](#destructuring--object-over-array) Object over array

     </details>

  1. :page_facing_up: [Strings](#strings)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [6.1](#strings--quotes) Quotes
     - [6.2](#strings--line-length) Length
     - [6.3](#es6-template-literals) Template literals
     - [6.4](#strings--eval) Eval
     - [6.5](#strings--escaping) Escaping

     </details>

  1. :pager: [Functions](#functions)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [7.1](#functions--use-strict) Strict mode
     - [7.2](#functions--declarations) Deklarationen
     - [7.3](#functions--iife) IIFE's
     - [7.4](#functions--in-blocks) Nicht-Funktionsblöcke
     - [7.5](#functions--note-on-blocks) Blöcke (Info)
     - [7.6](#functions--arguments-shadow) Arguments shadow
     - [7.7](#es6-rest) Rest
     - [7.8](#es6-default-parameters) Standard-Parameter
     - [7.9](#functions--default-side-effects) Side effects
     - [7.10](#functions--defaults-last) Standardwerte zuletzt
     - [7.11](#functions--constructor) Funktionskonstruktor
     - [7.12](#functions--signature-spacing) Signature spacing
     - [7.13](#functions--mutate-params) Mutating parameters
     - [7.14](#functions--reassign-params) Neuzuweisung von Parametern
     - [7.15](#functions--spread-vs-apply) Spread
     - [7.16](#functions--signature-invocation-indentation) Signaturaufrufseinrückungen

     </details>

  1. :arrow_right: [Arrow Functions](#arrow-functions)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [8.1](#arrows--use-them) Verwendung
     - [8.2](#arrows--implicit-return) Implizite Rückgaben
     - [8.3](#arrows--paren-wrap) Wrap
     - [8.4](#arrows--one-arg-parens) Weglassen von Klammern
     - [8.5](#arrows--confusing) Verwirrende Funktionen
     - [8.6](#whitespace--implicit-arrow-linebreak) Zeilenumbrüche

     </details>

  1. :triangular_ruler: [Classes & Constructors](#classes--constructors)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [9.1](#constructors--use-class) `class` verwenden
     - [9.2](#constructors--extends) Vererbung
     - [9.3](#constructors--chaining) Verkettung
     - [9.4](#constructors--tostring) toString Methoden
     - [9.5](#constructors--no-useless) Keine leeren Konstruktoren
     - [9.6](#classes--no-duplicate-members) Keine redundanten member

     </details>

  1. :postbox: [Modules](#modules)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [10.1](#modules--use-them) CommonJS 
     - [10.2](#modules--no-duplicate-imports) Redundante imports
     - [10.3](#modules--no-mutable-exports) Veränderbare exports
     - [10.4](#modules--imports-first) Imports zuerst
     - [10.5](#modules--multiline-imports-over-newlines) Mehrzeilige imports

     </details>

  1. :arrows_clockwise: [Iterators and Generators](#iterators-and-generators)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [11.1](#iterators--nope) Higher-order functions
     - [11.2](#generators--nope) Generators
     - [11.3](#generators--spacing) Spacing

     </details>

  1. :bookmark_tabs: [Properties](#properties)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [12.1](#properties--dot) Punkt Notation
     - [12.2](#properties--bracket) Klammer Notation
     - [12.3](#es2016-properties--exponentiation-operator) Exponenzial operator

     </details>

  1. :floppy_disk: [Variables](#variables)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [13.1](#variables--const) Globaler Namespace
     - [13.2](#variables--one-const) Deklaration per Variabel
     - [13.3](#variables--const-let-group) Gruppierung
     - [13.4](#variables--define-where-used) Platzierung
     - [13.5](#variables--no-chain-assignment) Ketten-Zuweisung
     - [13.6](#variables--unary-increment-decrement) Inkrementierung & Dekrementierung
     - [13.7](#variables--linebreak) Zeilenumbrüche
     - [13.8](#variables--no-unused-vars) Nicht benutzte Variablen
     - [13.9](#variables--bitwise-floor) Bitwise floor

     </details>

  1. :arrow_heading_up: [Hoisting](#hoisting)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [14.1](#hoisting--about) About
     - [14.2](#hoisting--anon-expressions) Anonymous function expressions
     - [14.3](#hoisting--named-expressions) Named function expressions
     - [14.4](#hoisting--declarations) Function declarations

     </details>

  1. :left_right_arrow: [Comparison Operators & Equality](#comparison-operators--equality)
     <details>
     <summary>Inhalte anzeigen</summary>

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
     <summary>Inhalte anzeigen</summary>

     - [16.1](#blocks--braces) Braces
     - [16.2](#blocks--cuddled-elses) Cuddled elses
     - [16.3](#blocks--no-else-return) Returns

     </details>

  1. :wrench: [Control Statements](#control-statements)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [17.1](#control-statements) Length
     - [17.2](#control-statements--value-selection) Selection operators

     </details>

  1. :pencil: [Comments](#comments)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [18.1](#comments--multiline) Multi-line
     - [18.2](#comments--singleline) Single-line
     - [18.3](#comments--spaces) Spaces
     - [18.4](#comments--actionitems) Prefixing / Action-items
     - [18.5](#comments--fixme) FixMe
     - [18.6](#comments--todo) ToDo

     </details>

  1. :white_circle: [Whitespace](#whitespace)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [19.1](#whitespace--spaces) Soft tabs
     - [19.2](#whitespace--before-blocks) Before blocks
     - [19.3](#whitespace--around-keywords) Around keywords
     - [19.4](#whitespace--infix-ops) Infix operators
     - [19.5](#whitespace--newline-at-end) End of file
     - [19.6](#whitespace--chains) Chains
     - [19.7](#whitespace--after-blocks) After blocks
     - [19.8](#whitespace--padded-blocks) Padded blocks
     - [19.9](#whitespace--in-parens) Inside parentheses
     - [19.10](#whitespace--in-brackets) Inside brackets
     - [19.11](#whitespace--in-braces) Inside curly braces
     - [19.12](#whitespace--max-len) Line length
     - [19.13](#whitespace--block-spacing) Block spacing
     - [19.14](#whitespace--comma-spacing) Comma spacing
     - [19.15](#whitespace--computed-property-spacing) Computed properties
     - [19.17](#whitespace--key-spacing) Key spacing
     - [19.18](#whitespace--no-trailing-spaces) Trailing spaces
     - [19.19](#whitespace--no-multiple-empty-lines) Multiple empty lines 

     </details>

  1. :small_red_triangle_down: [Commas](#commas)
     <details>
     <summary>Inhalte anzeigen</summary>

       - [20.1](#commas--leading-trailing) Leading commas
       - [20.2](#commas--dangling) Comma Dangling

     </details>

  1. :heavy_exclamation_mark: [Semicolons](#semicolons)
     <details>
     <summary>Inhalte anzeigen</summary>

       - [21.1](#semicolons--required) Use semicolons

     </details>

  1. :twisted_rightwards_arrows: [Type Casting & Coercion](#type-casting--coercion)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [22.1](#coercion--explicit) Explicit coercion
     - [22.2](#coercion--strings) Strings
     - [22.3](#coercion--numbers) Numbers
     - [22.4](#coercion--comment-deviations) Deviations
     - [22.5](#coercion--bitwise) Bitwise
     - [22.6](#coercion--booleans) Booleans

     </details>

  1. :scroll: [Naming Conventions](#naming-conventions)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [23.1](#naming--descriptive) Beschreibend
     - [23.2](#naming--camelCase) camelCase
     - [23.3](#naming--PascalCase) PascalCase
     - [23.4](#naming--leading-underscore) Unterstriche
     - [23.5](#naming--self-this) `this`
     - [23.6](#naming--filename-matches-export) Dateinamen
     - [23.7](#naming--camelCase-default-export) Standard export
     - [23.8](#naming--PascalCase-singleton) Singleton
     - [23.9](#naming--Acronyms-and-Initialisms) Akronyme und Inizialisierungen
     - [23.10](#naming--uppercase) Großbuchstaben

     </details>

  1. :arrow_down: [Accessors](#accessors)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [24.1](#accessors--not-required) Not required accessors
     - [24.2](#accessors--no-getters-setters) Getters & Setters
     - [24.3](#accessors--boolean-prefix) Boolean prefix
     - [24.4](#accessors--consistent) Consistency

     </details>

  1. :high_brightness: [Events](#events)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [25.1](#events--hash) Hash

     </details>

  1. :book: [Standard Library](#standard-library)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [26.1](#standard-library--isnan) isNaN
     - [26.2](#standard-library--isfinite) isFinite

     </details>

  1. :nut_and_bolt: [jQuery](#jquery)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [27.1](#jquery--dollar-prefix) Prefix
     - [27.2](#jquery--cache) Cache
     - [27.3](#jquery--queries) DOM Abfragen
     - [27.4](#jquery--find) Find
     - [27.5](#jquery--on) Shorthands

     </details>

  1. :arrows_counterclockwise: [ECMAScript 5 Kompartibilität](#ecmascript-5-compatibility)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [28.1](#es5-compat--kangax) Kompartibilitäts Tabelle

     </details>

  1. :six: [ECMAScript 6+ (ES 2015+) Styles](#ecmascript-6-es-2015-styles)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [29.1](#es6-styles) ES6 Styles
     - [29.2](#tc39-proposals) Proposals

     </details>

  1. :electric_plug: [Testen](#testing)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [30.1](#testing--tests) Tests

     </details>

  1. :chart_with_upwards_trend: [Performance](#performance)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [31.1](#performance--performance) Performance

     </details>

  1. :books: [Resourcen](#resources)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [32.1](#resources--learning-es6) ES6+ lernen
     - [32.2](#resources--read-this) Zum lesen
     - [32.3](#resources--tools) Tools
     - [32.4](#resources--further-reading) Mehr zum lesen
     - [32.5](#resources--books) Bücher
     - [32.6](#resources--blogs) Blogs
     - [32.7](#resources--podcasts) Podcasts

     </details>

  1. :copyright: [Copyright](#copyright)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [33.1](#copyright--base) Basis
     - [33.2](#copyright--license) Lizenz
     - [33.3](#copyright--german) Englisch

     </details>

  1. :recycle: [Änderungen](#amendments)
     <details>
     <summary>Inhalte anzeigen</summary>

     - [34.1](#amendments--forking) Forking

     </details>

## Typen
  
  <a name="types--primitives"></a><a name="1.1"></a>
  - [1.1](#types--primitives) **Primitive Typen**: Bei primitiven Datentypen wird immer direkt auf deren Wert zugegriffen.

    - `string`
    - `number`
    - `boolean`
    - `null`
    - `undefined`
    - `symbol`

    ```javascript
    const foo = 1;
    let bar = foo;

    bar = 9;

    console.log(foo, bar); // => 1, 9
    ```

    - Symbols können oft nicht richtig polyfilled werden. Deshalb sollte man sie vermeiden, wenn man für Browserumgebungen entwickelt, die diese nicht nativ unterstützen.

  <a name="types--complex"></a><a name="1.2"></a>
  - [1.2](#types--complex) **Komplexe Typen**: Bei komplexen Datentypen wird immer auf eine Referenz zugegriffen.

    - `object`
    - `array`
    - `function`

    ```javascript
    const foo = [1, 2];
    const bar = foo;

    bar[0] = 9;

    console.log(foo[0], bar[0]); // => 9, 9
    ```

**[⬆ zurück zum Anfang](#table-of-contents)**

## Referenzen

  <a name="references--prefer-const"></a><a name="2.1"></a>
  - [2.1](#references--prefer-const) `const` für alle Referenzen benutzen; Die Verwendung von `var` vermeiden. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

    > Wieso? Es stellt sicher, dass man Referenzen nicht neu zuweisen kann. Das kann sonst zu Fehlern und schwer verständlichem Code führen.

    ```javascript
    // schlecht
    var a = 1;
    var b = 2;

    // gut
    const a = 1;
    const b = 2;
    ```

  <a name="references--disallow-var"></a><a name="2.2"></a>
  - [2.2](#references--disallow-var) Wenn man eine Referenz neu zuweisen muss, sollte `let` an Stelle von `var` benutzt werden. eslint: [`no-var`](https://eslint.org/docs/rules/no-var.html)

    > Wieso? `let` ist block-scoped und nicht function-scoped wie `var`.

    ```javascript
    // schlecht
    var count = 1;
    if (true){
        count += 1;
    }

    // gut
    let count = 1;
    if (true){
        count += 1;
    }
    ```

  <a name="references--let-require"></a><a name="2.3"></a>
  - [2.3](#references--let-require) `let` für `require()` imports in NodeJS benutzen.

    > Wieso? Mit `const` kann man die Import-Variable später nicht neu definieren falls nötig. Außerdemn kann die Variable nicht verwendet werden, ohne sie explizit zu inizialisieren. 

    ```javascript
    // schlecht
    var x = require("x");
    const y = require("y");
    
    // gut
    let x = require("x");
    let y = require("y");
    ```
    
  <a name="references--block-scope"></a><a name="2.3"></a>
  - [2.4](#references--block-scope) Beachten, dass `let` und `const` block-scoped sind.

    ```javascript
    // const und let existieren nur in dem Block, in dem sie definiert wurden.
    {
        let a = 1;
        const b = 1;
        var c = 1;
    }
    console.log(a); // ReferenceError: a ist nicht definiert
    console.log(b); // ReferenceError: b ist nicht definiert
    console.log(c); // 1
    ```

**[⬆ zurück zum Anfang](#table-of-contents)**

## Objekte

  <a name="objects--no-new"></a><a name="3.1"></a>
  - [3.1](#objects--no-new) "literal syntax" für die Erstellung von Objekten benutzen. eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)

    ```javascript
    // schlecht
    const item = new Object();

    // gut
    const item = {};
    ```

  <a name="es6-computed-properties"></a><a name="3.4"></a>
  - [3.2](#es6-computed-properties) Automatisch berechnete Eigenschaftsnamen verwenden, wenn Objekte mit dynamischen Eigenschaftennamen erstellt werden.

    > Wieso? Sie erlauben es, alle Eigenschaften eines Objekts an einer Stelle zu definieren.

    ```javascript

    function getKey(k){
        return `ein key mit dem Namen ${k}`;
    }

    // schlecht
    const obj = {
        id: 5,
        name: "foo",
    };
    obj[getKey("enabled")] = true;

    // gut
    const obj = {
        id: 5,
        name: "foo",
        [getKey("enabled")]: true,
    };
    ```

  <a name="es6-object-shorthand"></a><a name="3.5"></a>
  - [3.3](#es6-object-shorthand) Objekt-Methoden-Shorthands verwenden. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

    ```javascript
    // schlecht
    const foo = {
        value: 1,

        addValue: function (value) {
            return foo.value + value;
        },
    };

    // gut
    const foo = {
        value: 1,

        addValue(value) {
            return foo.value + value;
        },
    };
    ```

  <a name="es6-object-concise"></a><a name="3.6"></a>
  - [3.4](#es6-object-concise) Eigenschaftsnamen-Shorthands benutzen. eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

    > Wieso? Es ist kürzer und funktionsbeschreibend.

    ```javascript
    const foo = "bar";

    // schlecht
    const obj = {
        foo: foo,
    };

    // gut
    const obj = {
        foo,
    };
    ```

  <a name="objects--grouped-shorthand"></a><a name="3.7"></a>
  - [3.5](#objects--grouped-shorthand) Shorthand Eigenschaften am Anfang der Objekt Deklaration gruppieren.

    > Wieso? Man kann einfacher und schneller erkennen, welche Eigenschaften den Shorthand verwenden.

    ```javascript
    const foo = "bar";
    const bar = "foo";

    // schlecht
    const obj = {
        test: 1,
        key: 2,
        foo,
        abc: 3,
        xyz: 4,
        bar,
    };

    // gut
    const obj = {
        foo,
        bar,
        test: 1,
        key: 2,
        abc: 3,
        xyz: 4,
    };
    ```

<a name="objects--quoted-props"></a><a name="3.8"></a>
  - [3.6](#objects--quoted-props) Nur Properties unter Anführungszeichen setzen, die invalide identifier darstellen würden. eslint: [`quote-props`](https://eslint.org/docs/rules/quote-props.html)

    > Warum? Im Allgemeinen ist es subjektiv einfacher zu lesen. Es verbessert die Syntaxhervorhebung und wird auch von vielen JS-Engines leichter optimiert.

    ```javascript
    // schlecht
    const bad = {
        "foo": 3,
        "bar": 4,
        "data-foo": 5
    };

    // gut
    const good = {
        foo: 3,
        bar: 4,
        "data-foo": 5
    };
    ```

  <a name="objects--prototype-builtins"></a>
  - [3.7](#objects--prototype-builtins) `Object.prototype` Methoden wie `hasOwnProperty`, `propertyIsEnumerable`, und `isPrototypeOf` niemals direkt aufrufen. eslint: [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)

    > Warum? Diese Methoden könnten durch Eigenschaften des Ursprungsobjektes "shadowed" werden - z.B. `{ hasOwnProperty: false }` - oder, das Objekt könnte ein null-Objekt sein (`Object.create(null)`).

    ```javascript
    // schlecht
    object.hasOwnProperty(key);

    // gut
    Object.prototype.hasOwnProperty.call(object, key);

    // am besten - Stage 3 Proposal:
    // https://github.com/tc39/proposal-accessible-object-hasownproperty
    Object.hasOwn(object, key);
    ```

  <a name="objects--rest-spread"></a>
  - [3.8](#objects--rest-spread) Den Objekt "spread" Operator an Stelle von [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) bevorzugen, um shallow-copy's von Objekten zu machen. Den Objekt "rest" Operator verwenden, um ein neues Objekt zu erzeugen, bei dem gewissen Eigenschaften weggelassen werden.

    ```javascript
    // sehr schlecht
    const original = { a: 1, b: 2 };
    const copy = Object.assign(original, { c: 3 }); // dies modifiziert `original`
    delete copy.a; // das auch

    // schlecht
    const original = { a: 1, b: 2 };
    const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

    // gut
    const original = { a: 1, b: 2 };
    const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

    const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
    ```

**[⬆ back to top](#table-of-contents-bookmark_tabs)**

## Copyright

  <a name="copyright--base"></a><a name="33.1"></a>
  - [33.1](#copyright--base) Dieser Styleguide basiert auf dem [AirBnB JavaScript Styleguide](https://github.com/airbnb/javascript) 
  
  <a name="copyright--license"></a><a name="33.2"></a>
  - [33.2](#copyright--license) Der Styleguide steht unter der selben [Lizenz](https://github.com/NullDevCo/JavaScript-Styleguide/blob/master/LICENSE). 

<br><br><br>

<p align="center">
<a href="https://github.com/NullDevCo/JavaScript-Styleguide/blob/master/LICENSE">
<img src="https://img.shields.io/badge/License-MIT-F8E301.svg?style=flat-square"/>
</a>
</p>

[![NullDev JavaScript Styleguide](https://i.imgur.com/52YayNH.png)](https://nulldev.org)
