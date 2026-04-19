import { render, screen } from "@testing-library/react";
import { Performance } from "../Performance";
import { createBot } from "@/test-utils/createBot";

jest.mock("recharts", () => {
  const React = require("react");

  const passthrough = (name: string) => () =>
    React.createElement("div", { "data-testid": name });

  return {
    ResponsiveContainer: ({ children }: { children?: React.ReactNode }) =>
      React.createElement(
        "div",
        { "data-testid": "responsive-container" },
        children,
      ),
    AreaChart: passthrough("area-chart"),
    Area: passthrough("area"),
    XAxis: passthrough("x-axis"),
    YAxis: passthrough("y-axis"),
    CartesianGrid: passthrough("cartesian-grid"),
    Tooltip: passthrough("tooltip"),
  };
});

describe("Performance", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2026-04-19T12:00:00.000Z"));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("shows an empty state when no bots are provided", () => {
    render(<Performance bots={[]} />);

    expect(screen.getByText(/no chart data available/i)).toBeInTheDocument();
    expect(screen.getByText("100.00")).toBeInTheDocument();
    expect(screen.getByText("+0.00%")).toBeInTheDocument();
  });

  it("renders chart data and computed return for live bots", () => {
    render(
      <Performance
        bots={[
          createBot({
            created_at: new Date("2026-04-19T10:00:00.000Z").getTime(),
            trailing_profit: 10,
            deal: {
              opening_timestamp: new Date("2026-04-19T10:00:00.000Z").getTime(),
              closing_timestamp: new Date("2026-04-19T10:00:00.000Z").getTime(),
            },
          }),
        ]}
      />,
    );

    expect(screen.getByText("110.00")).toBeInTheDocument();
    expect(screen.getByText("+10.00%")).toBeInTheDocument();
    expect(screen.getByTestId("area-chart")).toBeInTheDocument();
  });
});
