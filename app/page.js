import Link from "next/link";
import { site } from "../content/site";
import changelog from "../content/changelog.json";

export default function Home() {
  const latest = changelog[0];
  return (
    <main className="wrap">
      <section className="hero">
        <h1>Catch beans. Spend them. Steal a few.</h1>
        <p className="lead">{site.tagline} A Discord bot with a shop, risky heists and a fresh leaderboard every month.</p>
        <div className="cta">
          <a className="btn gold" href={site.inviteUrl}>Add to Discord</a>
          <Link className="btn" href="/features">See features</Link>
        </div>
        <pre className="slab" aria-label="Example commands">{`/daily     +74 beans, 5-day streak
/steal     @member  25% base chance, 30 min cooldown
/season    you're #2 this month`}</pre>
      </section>
      <section>
        <h2>Latest update</h2>
        <p className="meta">{latest.date}</p>
        <h3>{latest.title}</h3>
        <p>{latest.changes[0].text}</p>
        <Link href="/changelog">Read the full changelog</Link>
      </section>
    </main>
  );
}
