import changelog from "../../content/changelog.json";
import Emoji from "../../components/Emoji";

export const metadata = { title: "Changelog" };

export default function Changelog() {
  return (
    <main className="wrap">
      <h1>Changelog</h1>
      {changelog.map((e) => (
        <article key={e.date + e.title}>
          <p className="meta">{e.date}</p>
          <h2>{e.title}</h2>
          <ul className="changes">
            {e.changes.map((c) => (
              <li key={c.text}>
                <span className={`tag ${c.tag.toLowerCase()}`}>{c.tag}</span> {c.text}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </main>
  );
}
