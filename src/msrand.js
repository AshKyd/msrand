/*
 * Microsoft C Run-time-Library-compatible Random Number Generator
 * Copyright by Shlomi Fish, Ash Kyd 2019.
 * Released under the MIT license
 * https://opensource.org/licenses/MIT
 * */
export default class MSRand {
  constructor(seed) {
    this.seed = seed || 0;
  }
  rand() {
    this.seed = (this.seed * 214013 + 2531011) & 0x7fffffff;
    return (this.seed >> 16) & 0x7fff;
  }
  randMax(max) {
    return this.rand() % max;
  }
}
