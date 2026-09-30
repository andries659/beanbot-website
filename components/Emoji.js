// Renders Discord emoji markup inside text.
//   <:name:123456789>  custom emoji (server or bot-uploaded)
//   <a:name:123456789> animated custom emoji
// Standard emoji (😀) are plain text and render natively.
export default function Emoji({ text }) {
  const re = /<(a?):(\w+):(\d+)>/g;
  const out = [];
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, animated, name, id] = m;
    out.push(
      <img
        key={m.index}
        src={`https://cdn.discordapp.com/emojis/${id}.${animated ? "gif" : "webp"}?size=64`}
        alt={`:${name}:`}
        title={`:${name}:`}
        width="20"
        height="20"
        loading="lazy"
        style={{ verticalAlign: "-4px" }}
      />
    );
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}
