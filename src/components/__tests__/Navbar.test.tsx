import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "../Navbar";
import { trackCTA, trackNavClick } from "@/lib/analytics";

let pathname = "/";

jest.mock("next/navigation", () => ({
  usePathname: () => pathname,
}));

jest.mock("@/lib/analytics", () => ({
  trackNavClick: jest.fn(),
  trackCTA: jest.fn(),
}));

describe("Navbar", () => {
  beforeEach(() => {
    pathname = "/";
    jest.clearAllMocks();
  });

  it("renders logo and main navigation links", () => {
    render(<Navbar />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText(/binbot/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
    expect(screen.getByText(/our approach/i)).toBeInTheDocument();
    expect(screen.getByText(/performance/i)).toBeInTheDocument();
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/faq/i)).toBeInTheDocument();
  });

  it("resolves anchor links back to home when rendered on a nested page", () => {
    pathname = "/privacy";

    render(<Navbar />);

    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "/#about",
    );
    expect(screen.getByRole("link", { name: /early access/i })).toHaveAttribute(
      "href",
      "/#contact",
    );
  });

  it("tracks desktop navigation clicks", async () => {
    const user = userEvent.setup();

    render(<Navbar />);

    await user.click(screen.getByRole("link", { name: /^binbot$/i }));
    await user.click(screen.getAllByRole("link", { name: /early access/i })[0]);

    expect(trackNavClick).toHaveBeenCalledWith("Logo", "/");
    expect(trackCTA).toHaveBeenCalledWith("Early Access", "navbar");
  });
});
