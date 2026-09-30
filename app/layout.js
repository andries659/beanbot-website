import Link from "next/link";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { site } from "../content/site";
import StatusDot from "../components/StatusDot";
import "./globals.css";

const head = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-head" });
const body = Figtree({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: { default: `${site.name} — Discord bean bot`, template: `%s — ${site.name}` },
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${head.variable} ${body.variable}`}>
      <body>
        <header className="wrap bar">
          <Link href="/" className="brand">{site.name}</Link>
          <nav>
            <Link href="/features">Features</Link>
            <Link href="/changelog">Changelog</Link>
            <Link href="/terms">Terms</Link>
            <StatusDot />
          </nav>
        </header>
        {children}
        <footer className="wrap foot">
          <span>{site.name} is not affiliated with Discord.</span>
          <span><a href={site.supportUrl}>Support server</a> · <a href={site.githubUrl}>GitHub</a></span>
        </footer>
      </body>
    </html>
  );
}
