import { render, screen } from "@testing-library/react";
import PrivacyPolicy from "../PrivacyPolicy";

describe("PrivacyPolicy view", () => {
  it("renders the privacy policy heading", () => {
    render(<PrivacyPolicy />);

    expect(
      screen.getByRole("heading", {
        name: /privacy policy/i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });
});
