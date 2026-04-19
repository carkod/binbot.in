import { fireEvent, render, screen } from "@testing-library/react";
import { Footer } from "../Footer";
import { trackLinkClick } from "@/lib/analytics";

jest.mock("@/lib/analytics", () => ({
  trackLinkClick: jest.fn(),
}));

describe("Footer", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the legal links and current copyright range", () => {
    render(<Footer />);

    expect(screen.getByText(/privacy policy/i)).toBeInTheDocument();
    expect(screen.getByText(/terms of service/i)).toBeInTheDocument();
    expect(screen.getByText(/form adv/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        new RegExp(
          `${new Date().getFullYear()} BINBOT LTD\\. All rights reserved\\.`,
          "i",
        ),
      ),
    ).toBeInTheDocument();
  });

  it("tracks footer link clicks", () => {
    render(<Footer />);

    fireEvent.click(screen.getByRole("link", { name: /privacy policy/i }));

    expect(trackLinkClick).toHaveBeenCalledWith("Privacy Policy", "/privacy");
  });
});
