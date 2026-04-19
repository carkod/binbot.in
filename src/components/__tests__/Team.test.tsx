import { render, screen } from "@testing-library/react";
import { Team } from "../Team";

describe("Team", () => {
  it("renders the leadership roster with profile images", () => {
    render(<Team />);

    expect(
      screen.getByRole("heading", { name: /world-class expertise/i, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/alexander vance/i)).toBeInTheDocument();
    expect(screen.getByText(/dr\. elena rostova/i)).toBeInTheDocument();
    expect(screen.getByText(/marcus chen/i)).toBeInTheDocument();
    expect(screen.getByAltText(/alexander vance/i)).toHaveAttribute(
      "src",
      "/images/ceo.png",
    );
  });
});
