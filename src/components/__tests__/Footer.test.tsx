import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("tracks footer link clicks", async () => {
    const user = userEvent.setup();

    render(<Footer />);

    await user.click(screen.getByRole("link", { name: /privacy policy/i }));

    expect(trackLinkClick).toHaveBeenCalledWith("Privacy Policy", "/privacy");
  });
});
