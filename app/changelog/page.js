import type { ReactNode } from "react";
import changelog from "../../content/changelog.json";

export const metadata = { title: "Changelog" };

const EMOJI_RE = /<(a?):(\w+):(\d+)>/g;

function renderText(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(EMOJI_RE)) {
    const [full, animated, name, id] = m;
    const start = m.index!;
    if (start > last) parts.push(text.slice(last, start));
    parts.push(
      // eslint-disable-next-line @next/next/no-img-element
      <img
        key={start}
        className="emoji"
        src={`https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "png"}?size=48`}
        alt={`:${name}:`}
        width={20}
        height={20}
      />
    );
    last = start + full.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

export default function Changelog() {
  return (
    <main className="wrap">
      <h1>Changelog</h1>
      {changelog.map((e) => (
        <article key={e.date + e.title}>
          <p className="meta">{e.date}</p>
          <h2>{renderText(e.title)}</h2>
          <ul className="changes">
            {e.changes.map((c) => (
              <li key={c.text}>
                <span className={`tag ${c.tag.toLowerCase()}`}>{c.tag}</span>{" "}
                {renderText(c.text)}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </main>
  );
}
