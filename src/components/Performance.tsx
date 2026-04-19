"use client";
import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { SectionHeader } from "./SectionHeader";
import type { Bot } from "@/lib/bots";

interface ChartPoint {
  date: string;
  value: number;
}

function buildChartData(bots: Bot[] = []): ChartPoint[] {
  if (!bots.length) return [];

  const profitByDate: Record<string, number> = {};
  bots.forEach((bot) => {
    const closeTs =
      bot.deal.closing_timestamp || bot.deal.opening_timestamp || bot.created_at;
    const date = new Date(closeTs).toISOString().split("T")[0];
    const profit = bot.trailing_profit ?? bot.trailling_profit ?? 0;
    profitByDate[date] = (profitByDate[date] ?? 0) + profit;
  });

  const allTs = bots.map((b) => b.deal.opening_timestamp || b.created_at).filter(Boolean);
  if (!allTs.length) return [];

  const start = new Date(Math.min(...allTs));
  start.setHours(0, 0, 0, 0);
  const end = new Date();
  end.setHours(0, 0, 0, 0);

  const points: ChartPoint[] = [];
  let cumulative = 100;
  const cursor = new Date(start);

  while (cursor <= end) {
    const key = cursor.toISOString().split("T")[0];
    if (profitByDate[key]) {
      cumulative = cumulative * (1 + profitByDate[key] / 100);
    }
    points.push({
      date: cursor.toLocaleDateString("en-GB", { day: "numeric", month: "short" }),
      value: Math.round(cumulative * 100) / 100,
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  return points;
}

export function Performance({ bots = [] }: { bots?: Bot[] }) {
  const chartData = buildChartData(bots);
  const lastValue = chartData.at(-1)?.value ?? 100;
  const totalReturn = ((lastValue - 100) / 100) * 100;

  return (
    <section id="performance" className="py-32 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Track Record"
          title="Consistent Growth"
          description="Cumulative performance derived from live trading data — every data point reflects a real completed position."
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-background border border-border p-6 sm:p-10 mt-12 shadow-sm rounded-sm"
        >
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-widest">
                Index Value
              </p>
              <h4 className="text-3xl font-display text-foreground">
                {lastValue.toFixed(2)}
              </h4>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-widest">
                Total Return
              </p>
              <h4 className="text-3xl font-display text-[#6bd098]">
                +{totalReturn.toFixed(2)}%
              </h4>
            </div>
          </div>

          {chartData.length === 0 ? (
            <div className="h-[400px] flex items-center justify-center text-muted-foreground text-sm">
              No chart data available.
            </div>
          ) : (
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#51cbce" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#51cbce" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e3e3e3" vertical={false} />
                  <XAxis
                    dataKey="date"
                    stroke="#a49e93"
                    tick={{ fill: "#a49e93", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    dy={10}
                    interval={Math.max(0, Math.floor(chartData.length / 6))}
                  />
                  <YAxis
                    stroke="#a49e93"
                    tick={{ fill: "#a49e93", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    dx={-10}
                    domain={["auto", "auto"]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#fffcf5",
                      borderColor: "#e3e3e3",
                      color: "#66615b",
                      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                    }}
                    itemStyle={{ color: "#51cbce" }}
                    formatter={(v: number) => [`${v.toFixed(2)}`, "Index"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#51cbce"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
