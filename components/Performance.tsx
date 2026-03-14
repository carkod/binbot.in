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

const data = [
  { year: "2018", value: 100 },
  { year: "2019", value: 134 },
  { year: "2020", value: 122 },
  { year: "2021", value: 189 },
  { year: "2022", value: 265 },
  { year: "2023", value: 310 },
  { year: "2024", value: 385 },
  { year: "2025", value: 450 },
];

export function Performance() {
  return (
    <section
      id="performance"
      data-testid="performance"
      className="py-32 bg-card border-y border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Track Record"
          title="Consistent Growth"
          description="Cumulative performance demonstrating our ability to navigate diverse market regimes while protecting downside risk."
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
              <h4 className="text-3xl font-display text-foreground">450.0</h4>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-widest">
                Total Return
              </p>
              <h4 className="text-3xl font-display text-[#6bd098]">+350%</h4>
            </div>
          </div>

          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e3e3e3"
                  vertical={false}
                />
                <XAxis
                  dataKey="year"
                  stroke="#a49e93"
                  tick={{ fill: "#a49e93", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="#a49e93"
                  tick={{ fill: "#a49e93", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  dx={-10}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fffcf5",
                    borderColor: "#e3e3e3",
                    color: "#66615b",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  }}
                  itemStyle={{ color: "hsl(var(--primary))" }}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
