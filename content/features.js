// Use Discord emoji markup anywhere in the text: <:name:id> or <a:name:id> (animated).
// Add `admin: true` to an item to show an "Admin" badge.
export const features = [
  {
    title: "<:beans:1551903629969985546> Catching beans",
    blurb: "The bot has a 10% chance to spawn a bean as a reaction on a message, and you have to be quick enough to catch it before anyone else does.",
    items: [
      { name: "/beans", text: "Check how many beans you or someone else has." },
      { name: "/beantop", text: "Server bean leaderboard, with pages." },
      { name: "/givebeans", text: "Give beans to a member.", admin: true },
      { name: "/setbeanchance", text: "Set the chance that a bean spawns.", admin: true },
      { name: "/setbeantimeout", text: "Set how long a bean can be caught before it disappears.", admin: true },
      { name: "/blacklist-channel-add", text: "Stop beans from spawning in a channel.", admin: true },
      { name: "/blacklist-channel-remove", text: "Let beans spawn in a channel again.", admin: true },
      { name: "/blacklist-channels", text: "List the channels where beans don't spawn.", admin: true },
    ],
  },
  {
    title: "<:earn_beans:1551910179388260474> Bean economy",
    blurb: "You earn beans by catching them when the bot reacts to a message, plus the commands below. Watch out: trolls can add fake beans and we can't stop them, so make sure you catch the real one.",
    items: [
      { name: "/tutorial", text: "Learn the economy and get 50 free beans." },
      { name: "/daily", text: "Claim beans every day. Keep a streak going for flame badges." },
      { name: "/weekly", text: "A bigger reward once a week." },
      { name: "/work", text: "Steady beans on a 30-minute cooldown." },
      { name: "/beg", text: "Small reward, but sometimes nobody gives you anything." },
    ],
  },
  {
    title: "<:shop:1551908753484419142> Shop and items",
    blurb: "Server boosters get 20% off. Weekend sales (Fri to Sun) take 15% off everything, and there's a featured deal every day.",
    items: [
      { name: "/shop", text: "Browse the catalogue." },
      { name: "/buy", text: "Buy one or more items." },
      { name: "/inventory", text: "See the items you own." },
      { name: "/use", text: "Use an item from your inventory." },
      { name: "<:crate:1551902714487775242> Crates", text: "Open them for beans." },
      { name: "<:xp_boost:1551904506663665725> XP booster", text: "Doubles your XP for a while." },
      { name: "<:shield:1551903886829297715> Shield", text: "Blocks one bomb or one robbery, then breaks." },
      { name: "<:sneaky_gloves:1551904966975688825> Sneaky Gloves", text: "+20% success chance on /steal while you own them." },
      { name: "<:bomb_1min:1551906509313810453> Bombs", text: "Time out another member for a set number of minutes." },
    ],
  },
  {
    title: "<:rob:1551909538725371904> Risky business",
    blurb: "High reward, real consequences.",
    items: [
      { name: "/steal", text: "Take 10 to 30% of someone's beans. Fail and you pay a fine. 30-minute cooldown. The victim gets a DM." },
      { name: "/rob", text: "Rob the bank for a big payout, with a 40% chance of success. 2-hour cooldown." },
      { name: "/gamble", text: "Double or nothing on a 50/50. 2-hour cooldown." },
    ],
  },
  {
    title: "<:ready:1551909512900911125> Seasons",
    blurb: "Every month starts a new season. Only beans you earn during the season count.",
    items: [
      { name: "/season", text: "Current standings and time left." },
      { name: "/seasonhistory", text: "Winners of past seasons." },
      { name: "Rewards", text: "The top 5 win a bean bonus when the season ends." },
    ],
  },
  {
    title: "<:levelup_IDS:1390045729795473589> Leveling system",
    blurb: "Chat and you earn XP. Keep levelling up to reach the highest rank. You can also earn XP while in a voice channel, but it's capped to a set amount of time so it stays fair and nobody can farm XP by sitting in a VC.",
    items: [
      { name: "/rank", text: "See your level and XP." },
      { name: "/leaderboard", text: "The XP leaderboard." },
      { name: "/setxp", text: "Set a member's XP.", admin: true },
      { name: "/givexp", text: "Give XP to a member.", admin: true },
      { name: "/editlevel", text: "Change a member's level.", admin: true },
      { name: "/setvcxp", text: "Configure the XP earned in voice channels.", admin: true },
      { name: "/setlevelupchannel", text: "Choose where level-up messages are sent.", admin: true },
    ],
  },
  {
    title: "<:au_report:1261750942987190272> Lobby monitoring",
    blurb: "Add forums to a monitoring system. The posts in those forums are watched, and lobbies close automatically when they go inactive or the host forgets to close the thread. You set how long the bot waits before posting a warning, and how much more inactivity passes before it closes the thread.",
    items: [
      { name: "/lobbies", text: "See the lobbies that are being monitored." },
      { name: "/addlobby", text: "Add a forum to the monitoring system.", admin: true },
      { name: "/removelobby", text: "Stop monitoring a forum.", admin: true },
      { name: "/listlobbychannels", text: "List the forums that are monitored.", admin: true },
      { name: "/setlobbywarn", text: "Set how long before the bot posts an inactivity warning.", admin: true },
      { name: "/lobbyclosedelay", text: "Set how long after the warning the thread is closed.", admin: true },
    ],
  },
  {
    title: "<:hehe_sip:1429054759335235605> Fun",
    blurb: "Commands just for fun. Please don't abuse them.",
    items: [{ name: "/admire", text: "Admire a member." }],
  },
];