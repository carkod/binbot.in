import type { Bot } from "@/lib/bots";

type BotOverrides = Omit<Partial<Bot>, "deal"> & {
  deal?: Partial<Bot["deal"]>;
};

export function createBot(overrides: BotOverrides = {}): Bot {
  const defaultBot: Bot = {
    pair: "BTCUSDTM",
    fiat: "USDT",
    quote_asset: "USDT",
    close_condition: "dynamic_trailing",
    created_at: new Date("2026-04-18T10:00:00.000Z").getTime(),
    market_type: "FUTURES",
    status: "active",
    strategy: "long",
    position: "long",
    trailing_profit: 5,
    stop_loss: 3,
    deal: {
      opening_price: 65000,
      closing_price: 68250,
      opening_timestamp: new Date("2026-04-18T10:00:00.000Z").getTime(),
      closing_timestamp: new Date("2026-04-19T10:00:00.000Z").getTime(),
      stop_loss_price: 63000,
    },
  };

  return {
    ...defaultBot,
    ...overrides,
    deal: {
      ...defaultBot.deal,
      ...overrides.deal,
    },
  };
}
