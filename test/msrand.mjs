import assert from "assert";
import MSRand from "../lib/msrand.js";

function getNumbers({ seed, count = 10 }) {
  const msrand = new MSRand(seed);
  return [...new Array(count)].map(() => msrand.rand()).join();
}

describe("msrand", () => {
  it("should initialise", () => {
    const msrand = new MSRand();
    assert(msrand.seed === 0, "seed should default to zero");
  });
  it("should return expected values", () => {
    assert(
      getNumbers({ seed: 0 }) ===
        [38, 7719, 21238, 2437, 8855, 11797, 8365, 32285, 10450, 30612].join()
    );
  });
  it("should return the same values with the same seed", () => {
    assert(
      getNumbers({ seed: 1, count: 1000 }) ===
        getNumbers({ seed: 1, count: 1000 })
    );
  });
  it("should return different numbers with a different seed", () => {
    assert(
      getNumbers({ seed: 1, count: 1000 }) !==
        getNumbers({ seed: 2, count: 1000 })
    );
  });
  it("should get a number with a max value", () => {
    const msrand = new MSRand();
    for (let i = 0; i < 1000; i++) {
      assert(msrand.randMax(10) < 10);
    }
  });
});
