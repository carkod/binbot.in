import { render, screen } from "@testing-library/react";
import { HowItWorks } from "../HowItWorks";

describe("HowItWorks", () => {
  it("renders the onboarding steps and disclaimer copy", () => {
    render(<HowItWorks />);

    expect(
      screen.getByRole("heading", { name: /how it works/i, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getByText(/deposit/i)).toBeInTheDocument();
    expect(screen.getByText(/watch it grow/i)).toBeInTheDocument();
    expect(
      screen.getByText(/guarantees a minimum annualised net return of 12%/i),
    ).toBeInTheDocument();
  });
});
