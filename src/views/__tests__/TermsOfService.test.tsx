import { render, screen } from "@testing-library/react";
import TermsOfService from "../TermsOfService";

describe("TermsOfService view", () => {
  it("renders the terms heading", () => {
    render(<TermsOfService />);

    expect(
      screen.getByRole("heading", {
        name: /terms of service/i,
        level: 1,
      }),
    ).toBeInTheDocument();
  });
});
