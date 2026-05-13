import type { Metadata } from "next";
import Home from "@/views/Home";
import { fetchPublicBots } from "@/lib/bot-data";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default async function Page() {
  const bots = await fetchPublicBots();

  return <Home bots={bots} />;
}
