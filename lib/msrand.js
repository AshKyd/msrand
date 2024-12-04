/**
 * The maximum integer this library can return. Equivalent of
 * `Math.pow(8, 5) - 1`
 */
export const MAX_INTEGER = 32767;

/**
 * Hash the string and return a number
 *
 * To the extend possible by law, The Dark Sky Company, LLC has [waived all
 * copyright and related or neighboring rights][cc0] to this library.
 * [cc0]: http://creativecommons.org/publicdomain/zero/1.0/
 * @param {string} - string to hash
 * @returns {number} numeric hash of the given string
 */
function str2hash(str) {
  let hash = 5381;
  let i = str.length;

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  return hash >>> 0;
}

export default class MSRand {
  /**
   * Create a random number generator (RNG) instance
   * @param {number|string} seed - seed the RNG with this value. Seeds are
   *                               numeric, but strings are hashed down
   *                               to numbers.
   */
  constructor(seed = 0) {
    this.seed = typeof seed === "number" ? seed : str2hash(seed);
  }

  /**
   * Get a pseudorandom number between 0 and `MAX_INTEGER`.
   * @returns {number}
   */
  rand() {
    /* Microsoft C Run-time-Library-compatible Random Number Generator
     * Copyright 2011 Shlomi Fish
     * Released under the MIT license
     * https://opensource.org/licenses/MIT
     */
    this.seed = (this.seed * 214013 + 2531011) & 0x7fffffff;
    return (this.seed >> 16) & 0x7fff;
  }
  /**
   * Get a pseudorandom number between 0 and the specified `max`.
   * @param max {number} - The maximum number this function can return.
   * @returns {number}
   */
  randMax(max) {
    return this.rand() % max;
  }
  /**
   * Get a pseudorandom decimal between 0 and 1 inclusive. This function returns
   * the same output format as `Math.random()` so is a pseudorandom replacement.
   * @returns {number}
   */
  randDecimal() {
    return this.rand() / MAX_INTEGER;
  }
}
