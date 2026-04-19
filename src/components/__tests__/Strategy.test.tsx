import { render, screen } from "@testing-library/react";
import { Strategy } from "../Strategy";

describe("Strategy", () => {
  it("renders the strategy section and its cards", () => {
    render(<Strategy />);

    expect(
      screen.getByRole("heading", {
        name: /how we generate returns/i,
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/algorithmic trading/i)).toBeInTheDocument();
    expect(
      screen.getByText(/small tokens, big opportunities/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/risk-managed/i)).toBeInTheDocument();
  });
});
