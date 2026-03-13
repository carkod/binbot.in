import { useEffect, useState, useRef } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface Coin {
  id: string;
  symbol: string;
  current_price: number | null;
  price_change_percentage_24h: number | null;
}

interface CryptoTickerProps {
  onLoaded?: () => void;
}

const COIN_IDS = [
  "bitcoin",
  "ethereum",
  "binancecoin",
  "solana",
  "ripple",
  "cardano",
  "avalanche-2",
  "matic-network",
  "chainlink",
  "polkadot",
];

function formatPrice(price: number | null | undefined): string {
  if (price == null) return "—";
  if (price >= 1000)
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  if (price >= 1) return price.toFixed(4);
  return price.toFixed(6);
}

export function CryptoTicker({ onLoaded }: CryptoTickerProps) {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [error, setError] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const notifiedRef = useRef(false);

  const fetchPrices = async () => {
    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COIN_IDS.join(",")}&order=market_cap_desc&per_page=${COIN_IDS.length}&page=1&sparkline=false&price_change_percentage=24h`,
        { cache: "no-store" },
      );
      if (!res.ok) throw new Error("API error");
      const data: Coin[] = await res.json();
      setCoins(data);
      setError(false);
      if (!notifiedRef.current && data.length > 0) {
        notifiedRef.current = true;
        onLoaded?.();
      }
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    fetchPrices();
    intervalRef.current = setInterval(fetchPrices, 10_000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (error || coins.length === 0) {
    return null;
  }

  const items = [...coins, ...coins];

  return (
    <div className="fixed top-20 left-0 right-0 z-40 h-9 bg-[#252422] border-b border-white/10 overflow-hidden flex items-center">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#252422] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#252422] to-transparent z-10 pointer-events-none" />

      <div className="ticker-track flex items-center gap-0 whitespace-nowrap">
        {items.map((coin, i) => {
          const change = coin.price_change_percentage_24h ?? 0;
          const up = change >= 0;
          return (
            <span
              key={`${coin.id}-${i}`}
              className="flex items-center gap-1.5 px-5 text-[11px] font-medium border-r border-white/10 last:border-r-0"
            >
              <span className="text-white/50 uppercase tracking-widest">
                {coin.symbol}
              </span>
              <span className="text-white/90">
                ${formatPrice(coin.current_price)}
              </span>
              <span
                className={`flex items-center gap-0.5 ${up ? "text-[#6bd098]" : "text-red-400"}`}
              >
                {up ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                {Math.abs(change).toFixed(2)}%
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
