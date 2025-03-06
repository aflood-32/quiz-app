import sleep from "./sleep";
import { describe, expect, it } from "@jest/globals";

describe("sleep", () => {
  it("should resolve after the specified time", async () => {
    const start = Date.now();
    await sleep(1000);

    const end = Date.now();
    const duration = end - start;

    expect(duration).toBeGreaterThanOrEqual(1000);
    expect(duration).toBeLessThan(1200);
  });

  it("should resolve instantly for 0 ms", async () => {
    const start = Date.now();
    await sleep(0);
    const end = Date.now();
    const duration = end - start;

    expect(duration).toBeLessThan(50);
  });
});
