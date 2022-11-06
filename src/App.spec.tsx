import App from "./App";
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "@jest/globals";

describe("App", () => {
  it("items render correctly", async () => {
    render(<App />);
    expect(screen.getByTestId("vehicles-id")).toBeTruthy();
    expect(screen.getByTestId("film-id")).toBeTruthy();
    expect(screen.getByTestId("film-details-id")).toBeTruthy();
  });
});
