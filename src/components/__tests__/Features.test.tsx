import { render, screen } from "@testing-library/react";
import { Features } from "../Features";

describe("Features", () => {
  it("renders the feature section and its key cards", () => {
    render(<Features />);

    expect(
      screen.getByRole("heading", { name: /why binbot/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/crypto exposure without the complexity/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/fully algorithmic\. always on\./i),
    ).toBeInTheDocument();
  });
});
