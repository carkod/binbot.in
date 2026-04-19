import type { Metadata } from "next";
import Home from "@/views/Home";
import type { Bot } from "@/lib/bots";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

async function fetchBots(): Promise<Bot[]> {
  try {
    const res = await fetch("https://api.terminal.binbot.in/bot/public", {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return [];
    }

    const data: unknown = await res.json();
    const bots = (data as { data?: unknown })?.data;
    return Array.isArray(bots) ? (bots as Bot[]) : [];
  } catch {
    return [];
  }
}

export default async function Page() {
  const bots = await fetchBots();
  return <Home bots={bots} />;
}
