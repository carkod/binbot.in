import { render, screen } from "@testing-library/react";
import TermsOfService from "../TermsOfService";

describe("TermsOfService view", () => {
  it("renders terms of service", () => {
    render(<TermsOfService />);
    const heading = screen.getByRole("heading", {
      name: /terms of service/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});
