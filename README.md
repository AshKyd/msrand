# msrand seeded random number generator

## Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

msrand is a seeded random number generator compatible with the [Microsoft C
run-time-library rand](https://docs.microsoft.com/en-us/cpp/c-runtime-library/reference/rand?view=vs-2019).

The rand function returns a pseudorandom integer in the range 0 to 32,767 (max signed 16 bit integer). As this generates a _well-known_ sequence it is not appropriate for use as a cryptographic function.

It is useful for building games, and especially maintaining compatibility with older algorithms such as Jim
Horne's [freecell dealing algorithm](https://rosettacode.org/wiki/Deal_cards_for_FreeCell#JavaScript).

## Getting Started <a name = "getting_started"></a>

You should be able to `npm install` this module (or copy-paste it into your
own project).

```
npm i msrand
```

## Usage <a name = "usage"></a>

Import msrand using your syntax of choice:

```
// es6 syntax
import MSRand from msrand;

// or commonjs syntax
const MSRand = require('msrand').default;
```

Then create an instance with an optional seed. If no seed is specified it defaults to 0.

```
// Create an instance of the random number generator, with a given seed.
const myrng = new MSRand(123);
```

To fetch a random number between 0 and 32,767:

```
// Return a random number
myrng.rand();
```

To fetch a random number between 0 and a specified amount:

```
// Return a random number from 0-9
myrng.randMax(10);
```
