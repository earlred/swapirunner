import { getFilms } from "./getFilms";
import React from "react";
import { describe, expect, it } from "@jest/globals";

describe("Function getFilms should return data", () => {
  // Render test
  it("should return data", async () => {
    const result = await getFilms();
    expect(result.isSuccessful).toBe(true);
    expect(result.data).not.toBe(null);
  });
});
