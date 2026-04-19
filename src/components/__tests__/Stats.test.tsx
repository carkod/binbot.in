import { render, screen } from "@testing-library/react";
import { Stats } from "../Stats";

describe("Stats", () => {
  it("renders the key fund statistics", () => {
    render(<Stats />);

    expect(screen.getByText("1487+")).toBeInTheDocument();
    expect(screen.getByText("2.6%")).toBeInTheDocument();
    expect(screen.getByText("2.1")).toBeInTheDocument();
    expect(screen.getByText("7+")).toBeInTheDocument();
    expect(screen.getByText(/assets/i)).toBeInTheDocument();
    expect(screen.getByText(/sharpe ratio/i)).toBeInTheDocument();
  });
});
