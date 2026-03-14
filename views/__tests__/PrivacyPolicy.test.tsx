import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "../PrivacyPolicy";

describe("PrivacyPolicy view", () => {
  it("renders privacy policy", () => {
    render(<PrivacyPolicy />);
    const heading = screen.getByRole("heading", {
      name: /privacy policy/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});
