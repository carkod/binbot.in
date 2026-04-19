export interface BotDeal {
  opening_price: number;
  closing_price: number;
  opening_timestamp: number;
  closing_timestamp: number;
  stop_loss_price: number;
}

export interface Bot {
  pair: string;
  fiat: string;
  quote_asset: string;
  close_condition: string;
  created_at: number;
  market_type: string;
  status: string;
  strategy?: string;
  position?: string;
  trailing_profit?: number;
  trailling_profit?: number;
  stop_loss: number;
  deal: BotDeal;
}
