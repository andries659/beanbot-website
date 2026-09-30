"use client";
import Link from "next/link";
import { useStatus } from "./useStatus";

export default function StatusDot() {
  const { bot, discord } = useStatus();
  let state = "unknown";
  let label = "Status";
  if (bot.state === "down") [state, label] = ["down", "Bot offline"];
  else if (bot.state === "warn" || discord.state === "warn" || discord.state === "down") [state, label] = ["warn", "Issues"];
  else if (bot.state === "up") [state, label] = ["up", "Online"];
  return (
    <Link href="/status" className="status-link">
      <span className={`dot ${state}`} aria-hidden="true" />
      {label}
    </Link>
  );
}
