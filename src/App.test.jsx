import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.jsx";

describe("App", () => {
  it("shows the React heading", () => {
    render(<App />);
    expect(
      screen.getByText("React is working!")
    ).toBeTruthy();
  });
});