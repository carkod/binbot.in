import "server-only";
import type { Bot } from "@/lib/bots";

const PUBLIC_BOTS_URL = "https://api.terminal.binbot.in/bot/public";

export async function fetchPublicBots(): Promise<Bot[]> {
  try {
    const res = await fetch(PUBLIC_BOTS_URL, {
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
