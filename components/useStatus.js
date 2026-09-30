"use client";
import { useEffect, useState } from "react";
import { site } from "../content/site";

const UNKNOWN = { state: "unknown", text: "Unknown" };

// Better Stack status page JSON: data.attributes.aggregate_state
const BOT_STATES = {
  operational: ["up", "Online"],
  degraded: ["warn", "Having issues"],
  downtime: ["down", "Offline"],
  maintenance: ["warn", "Maintenance"],
};
// Discord status (Atlassian Statuspage): status.indicator
const DISCORD_STATES = {
  none: ["up", "Operational"],
  minor: ["warn", "Minor issues"],
  major: ["down", "Major outage"],
  critical: ["down", "Major outage"],
};

async function getJson(url) {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

function toStatus(map, key) {
  const [state, text] = map[key] || ["unknown", "Unknown"];
  return { state, text };
}

async function loadBot() {
  if (!site.botStatusJsonUrl) return UNKNOWN;
  try {
    const json = await getJson(site.botStatusJsonUrl);
    return toStatus(BOT_STATES, json?.data?.attributes?.aggregate_state);
  } catch {
    return UNKNOWN;
  }
}

async function loadDiscord() {
  try {
    const json = await getJson("https://discordstatus.com/api/v2/status.json");
    return toStatus(DISCORD_STATES, json?.status?.indicator);
  } catch {
    return UNKNOWN;
  }
}

export function useStatus() {
  const [status, setStatus] = useState({ bot: UNKNOWN, discord: UNKNOWN });
  useEffect(() => {
    let alive = true;
    const run = async () => {
      const [bot, discord] = await Promise.all([loadBot(), loadDiscord()]);
      if (alive) setStatus({ bot, discord });
    };
    run();
    const id = setInterval(run, 60000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);
  return status;
}
