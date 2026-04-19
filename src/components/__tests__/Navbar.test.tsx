import { render, screen } from "@testing-library/react";
import { Navbar } from "../Navbar";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

jest.mock("@/lib/analytics", () => ({
  trackNavClick: jest.fn(),
  trackCTA: jest.fn(),
}));

describe("Navbar", () => {
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
});
