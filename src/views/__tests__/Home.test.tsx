jest.mock("recharts", () => {
  const original = jest.requireActual("recharts");

  return {
    ...original,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div style={{ width: 800, height: 400 }}>{children}</div>
    ),
  };
});

import { render, screen } from "@testing-library/react";
import Home from "../Home";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

jest.mock("@/lib/analytics", () => ({
  trackNavClick: jest.fn(),
  trackCTA: jest.fn(),
  trackFormSubmit: jest.fn(),
  trackLinkClick: jest.fn(),
}));

jest.mock("@/components/CryptoTicker", () => ({
  CryptoTicker: () => <div data-testid="crypto-ticker" />,
}));

describe("Home view", () => {
  it("renders the main sections with an empty bot list", () => {
    render(<Home bots={[]} />);

    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("crypto-ticker")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /algorithmic alpha in digital assets/i,
        level: 1,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/how we generate returns/i)).toBeInTheDocument();
    expect(screen.getByText(/consistent growth/i)).toBeInTheDocument();
    expect(screen.getByText(/real-time positions/i)).toBeInTheDocument();
    expect(screen.getByText(/how it works/i)).toBeInTheDocument();
    expect(screen.getByText(/schedule a call/i)).toBeInTheDocument();
  });
});
