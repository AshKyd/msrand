# msrand seeded random number generator

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)

## About <a name = "about"></a>

msrand is a seeded random number generator compatible with the [Microsoft C
run-time-library rand](https://docs.microsoft.com/en-us/cpp/c-runtime-library/reference/rand?view=vs-2019).

The rand function returns a pseudorandom integer in the range 0 to 32,767 (max signed 16 bit integer). As this generates a _well-known_ sequence it is not appropriate for use as a cryptographic function.

It is useful for building games, deterministic randomness to your work, and especially maintaining compatibility with older algorithms such as Jim
Horne's [freecell dealing algorithm](https://rosettacode.org/wiki/Deal_cards_for_FreeCell#JavaScript).

## Getting Started <a name = "getting_started"></a>

You should be able to `npm install` this module (or copy-paste it into your
own project).

```
npm i msrand
```

## Usage <a name = "usage"></a>

Import msrand using your syntax of choice:

```js
// es6 syntax
import MSRand from msrand;
```

Then create an instance with an optional seed. If no seed is specified it defaults to 0.

```js
// Create an instance of the random number generator, with a given seed.
const myrng = new MSRand(123);
```

To get a random integer between 0 and 32,767:

```js
// Return a random integer
myrng.rand();
```

To get a random integer between 0 and a specified amount:

```js
// Return a random integer from 0-10
myrng.randMax(10);
```

To get a random decimal between 0 and 1, like you would get from `Math.random()`:

```js
// Return a random decimal from 0 to 1
myrng.randDecimal();
```

If you want a one-off pseudorandom number based on a particular seed you can chain the constructor on one line:

```js
const value = new MSRand("my seed").rand();
```

## Changelog

### 2.0.0

- This is now a native ES module only. Removed build step & CommonJS support.
- Added `randDecimal` function which as a drop-in pseudorandom replacement for `Math.random()`
- Added support for passing a string seed. The constructor now support both strings & number seeds.
- Added JSDoc documentation & Typescript support.
