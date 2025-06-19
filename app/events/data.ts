export interface EventData {
  id: string
  title: string
  date: string
  shortDescription: string
  fullDescription: string
  registerLink: string
  image: string
  slug: string
}

export const events: EventData[] = [
  {
    id: "karaoke-2025",
    title: "KARAOKE + GIVEAWAY NIGHT UPDATE!",
    date: "2025-06-15T17:00:00Z",
    shortDescription:
      "We heard your voices (some of them questionably beautiful) and now it's getting even bigger. New venue, same chaos. Raffle draw still live!",
    fullDescription: `We heard your voices (some of them questionably beautiful) and now it's getting even bigger.\n\n🔊 <strong>New Venue, Same Chaos</strong><br />We're moving the party to <strong>X Space</strong> – more room for bangers, high notes, and big vibes.\n\n📅 <strong>Date:</strong> June 15, 2025<br />⏰ <strong>Time:</strong> 5PM UTC<br />📍 <strong>Location:</strong> X Space – bring your voice, leave your shame.\n\n🎟️ <strong>RAFFLE DRAW still LIVE!</strong><br />1 TON = a shot at winning a DopeDolphins NFT<br />🐬 Didn't win? You'll still bag a VIP SBT, equal in value and vibes.\n\n✨ <strong>BONUS:</strong> Everyone who attends gets a FREE Genesis SBT – just for showing up and vibing with us. No singing skills required.\n\nSo what are you waiting for?<br />🎶 Sing. Win. Laugh. Collect. Repeat.`,
    registerLink: "https://lu.ma/bs906rwo",
    image: "/karaoke.jpg",
    slug: "karaoke-giveaway-night-2025"
  },
  {
    id: "zyperbullish-video-contest-2025",
    title: "#ZyperBullish Video Contest is LIVE!",
    date: "2025-07-07T23:59:59Z",
    shortDescription:
      "Record a 30–60 sec video on why YOU'RE bullish on Zyper! $50 for 10 winners, SBT for all, Dope Dolphins NFT for Top 3. Ends July 7, 2025.",
    fullDescription: `🚀 <strong>#ZyperBullish Video Contest is LIVE!</strong> 🎥<br />
Tell us why YOU'RE bullish on Zyper in a 30–60 sec video for a chance to win BIG!<br /><br />
🏆 <strong>Prizes:</strong><br />
💰 $50 each for 10 winners<br />
🎟️ A Zyper SBT for ALL valid entrants<br />
🐬 A Dope Dolphins NFT for the Top 3 most-liked videos!<br /><br />
<strong>How to enter:</strong><br />
1️⃣ Post your video with #ZyperBullish<br />
2️⃣ Tag @ZYPER_officialX<br />
3️⃣ Follow us<br />
4️⃣ After posting, join our Telegram to submit your wallet address <a href="https://t.me/BcFC_c/1" target="_blank">here</a>.<br /><br />
📅 <strong>Contest ends:</strong> July 7, 2025<br />
Let's see your energy, Zyper fam! 🔥`,
    registerLink: "https://t.me/BcFC_c/1",
    image: "/zyperbullish.jpg",
    slug: "zyperbullish-video-contest-2025"
  },
] 