import { features } from "../../content/features";
import Emoji from "../../components/Emoji";

export const metadata = { title: "Features" };

export default function Features() {
  return (
    <main className="wrap">
      <h1>Features</h1>
      {features.map((g) => (
        <section key={g.title}>
          <h2><Emoji text={g.title} /></h2>
          <p><Emoji text={g.blurb} /></p>
          <dl>
            {g.items.map((i) => (
              <div className="row" key={i.name}>
                <dt>
                  <Emoji text={i.name} />
                  {i.admin && <> <span className="tag">Admin</span></>}
                </dt>
                <dd><Emoji text={i.text} /></dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </main>
  );
}