// Mock recharts ResponsiveContainer to suppress width/height warnings in tests
jest.mock("recharts", () => {
  const original = jest.requireActual("recharts");
  return {
    ...original,
    ResponsiveContainer: ({ children }: any) => (
      <div style={{ width: 800, height: 400 }}>{children}</div>
    ),
  };
});

import { render, screen } from "@testing-library/react";
import Home from "../Home";

// Mock CryptoTicker to avoid external dependency
jest.mock("@/components/CryptoTicker", () => ({
  CryptoTicker: () => <div data-testid="crypto-ticker" />,
}));

describe("Home view", () => {
  it("renders all main sections", () => {
    render(<Home />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("crypto-ticker")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("stats")).toBeInTheDocument();
    expect(screen.getByTestId("strategy")).toBeInTheDocument();
    expect(screen.getByTestId("performance")).toBeInTheDocument();
    expect(screen.getByTestId("portfolio")).toBeInTheDocument();
    expect(screen.getByTestId("features")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
