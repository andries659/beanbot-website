# BeanBot site

Website for the bot: features, changelog and terms of service. Built with Next.js (app router), exported as a static site.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Editing

- **Site name and links** — `content/site.js` (replace the placeholder invite, support, GitHub and email values)
- **Post a changelog entry** — add an object to the top of the array in `content/changelog.js`
- **Feature list** — `content/features.js`
- **Terms of service** — `app/terms/page.js`. This is a general template, not legal advice; review it before relying on it.

If you host on GitHub Pages under `username.github.io/repo`, add `basePath: "/repo"` to `next.config.mjs`.
