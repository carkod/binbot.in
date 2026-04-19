import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.terminal.binbot.in/bot/public", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return NextResponse.json(data);
}
