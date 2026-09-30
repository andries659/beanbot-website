"use client";
import { site } from "../content/site";
import { useStatus } from "./useStatus";

function Row({ name, note, status }) {
  return (
    <div className="status-row">
      <div>
        <strong>{name}</strong>
        <div className="note">{note}</div>
      </div>
      <div>
        <span className={`dot ${status.state}`} aria-hidden="true" />
        {status.text}
      </div>
    </div>
  );
}

export default function StatusBoard() {
  const { bot, discord } = useStatus();
  return (
    <>
      <Row name={site.name} note="The bot itself. It reports in every minute." status={bot} />
      <Row name="Discord" note="If Discord is having problems, the bot can be affected too." status={discord} />
      {site.hostStatusPageUrl && (
        <div className="status-row">
          <div>
            <strong>Hosting</strong>
            <div className="note">Where the bot runs.</div>
          </div>
          <a href={site.hostStatusPageUrl}>Check host status</a>
        </div>
      )}
      <p className="note">
        Updates every minute.
        {site.botStatusPageUrl && <> <a href={site.botStatusPageUrl}>Full uptime history</a>.</>}
      </p>
    </>
  );
}
