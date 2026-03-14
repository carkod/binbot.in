import { render, screen } from "@testing-library/react";
import NotFound from "../NotFound";

describe("NotFound view", () => {
  it("renders not found message", () => {
    render(<NotFound />);
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
