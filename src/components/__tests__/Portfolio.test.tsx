import { render, screen } from "@testing-library/react";
import { Portfolio } from "../Portfolio";
import { createBot } from "@/test-utils/createBot";

describe("Portfolio", () => {
  it("shows a fallback when there are no positions", () => {
    render(<Portfolio bots={[]} />);

    expect(
      screen.getByText(/no positions available at this time/i),
    ).toBeInTheDocument();
  });

  it("renders formatted bot details", () => {
    render(
      <Portfolio
        bots={[
          createBot({
            pair: "BTCUSDTM",
            quote_asset: "USDT",
            close_condition: "dynamic_trailing",
            status: "active",
            trailing_profit: 5.25,
          }),
        ]}
      />,
    );

    expect(screen.getByText("BTC/USDT")).toBeInTheDocument();
    expect(screen.getByText("Dynamic Trailing")).toBeInTheDocument();
    expect(screen.getByText("Long")).toBeInTheDocument();
    expect(screen.getByText("+5.25%")).toBeInTheDocument();
    expect(screen.getByText("active")).toBeInTheDocument();
  });
});
