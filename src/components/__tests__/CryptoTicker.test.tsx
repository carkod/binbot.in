import { render, screen, waitFor } from "@testing-library/react";
import { CryptoTicker } from "../CryptoTicker";

describe("CryptoTicker", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders fetched coin prices and calls onLoaded once", async () => {
    const onLoaded = jest.fn();
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => [
        {
          id: "bitcoin",
          symbol: "btc",
          current_price: 68123.45,
          price_change_percentage_24h: 4.2,
        },
      ],
    });

    render(<CryptoTicker onLoaded={onLoaded} />);

    await waitFor(() => expect(screen.getAllByText(/btc/i)).toHaveLength(2));
    expect(screen.getAllByText("$68,123.45")).toHaveLength(2);
    expect(onLoaded).toHaveBeenCalledTimes(1);
  });

  it("renders nothing when the price request fails", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("network error"));

    const { container } = render(<CryptoTicker />);

    await waitFor(() => expect(global.fetch).toHaveBeenCalled());
    expect(container.firstChild).toBeNull();
  });
});
