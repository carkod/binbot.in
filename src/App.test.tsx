import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders without crashing and shows main content", () => {
    render(<App />);
    // check for a known element in your App
    const header = screen.getByText(/track record/i);
    expect(header).toBeInTheDocument();
  });
});