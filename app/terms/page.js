import { site } from "../../content/site";

export const metadata = { title: "Terms of Service" };

const sections = [
  ["Using the bot", `By adding or using ${site.name} you agree to these terms and to Discord's own Terms of Service and Community Guidelines. If you don't agree, remove the bot from your server and stop using it.`],
  ["Beans are not real money", "Beans, items, XP and season scores are virtual and have no real-world value. They can't be bought, sold or traded for money or anything outside the bot. We may change, reset or remove them at any time, including when we rebalance the economy."],
  ["Fair play", "Don't exploit bugs, automate commands, use alternate accounts to farm beans, or otherwise gain an unfair advantage. If you find a bug, report it. We may remove beans or items gained unfairly and block accounts or servers that abuse the bot."],
  ["Data we store", "To work, the bot stores your Discord user ID, server ID, bean balance, inventory, XP, cooldowns and season score. We don't sell this data. Ask us to delete your data at any time using the contact below."],
  ["Availability", `${site.name} is provided as is, without warranties. It may go offline, change or lose data without notice, and we aren't liable for losses arising from its use.`],
  ["Changes and removal", "We may update these terms. Continuing to use the bot after a change means you accept it. We can restrict or remove access to the bot for anyone, at any time."],
  ["Contact", `Questions, data requests or bug reports: ${site.contactEmail} or the support server.`],
];

export default function Terms() {
  return (
    <main className="wrap">
      <h1>Terms of Service</h1>
      <p className="meta">Last updated {site.termsUpdated}</p>
      {sections.map(([title, text]) => (
        <section key={title}>
          <h2>{title}</h2>
          <p>{text}</p>
        </section>
      ))}
    </main>
  );
}
