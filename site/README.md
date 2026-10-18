# archersarena.com — the new site

The rebuild of archersarena.com (off Squarespace): the lobby-and-doors concept with
Tesla-style full-screen walkthroughs and the 3-2-1 blacklight switch.

- **Plan (audiences, door scripts, dynamic rules):** https://claude.ai/artifact/SxZEKagaUctWVhEqMek4uP
- **Approved mock:** https://claude.ai/artifact/FangP28Xkxn6T1Uy77waxw
- **Goals, in order:** clarity of what we do → help the sales process → look better.

## What's built

- Lobby (`/`): full-screen hero on the real blacklight court, five doors.
- Birthday door (`/birthday`): the complete walkthrough — arrival, gear-up, your spot,
  the 3-2-1-GO countdown that drops the page into the blacklight world, the game,
  pizza, the package toggle ($849 / $1,699), the trust strip, the booking close.
- Door stubs: `/play`, `/corporate`, `/learn` (one scene + honest copy until each full
  journey is built), `/train` hands off to the Arena Fitness funnel.
- schema.org JSON-LD on the birthday page (Service + Offers) for search and AI answers.

## Still placeholder (wired in later, by plan order)

- Live availability + deposits (Pipeline / booking backend) — the date grid is samples.
- Package inclusions — waiting on the real package sheets.
- Google reviews strip — to be pulled live.
- The stylized 3D walkthrough scenes — current scenes use real venue photos.
- The dynamic per-visitor rules and the AI concierge (release 2).

## Working on it

```bash
cd site
npm install
npm run dev       # local preview
npm run build     # typecheck + production build — must pass before every push
```

All visitor-facing copy, the doors, and the packages live in `src/content.ts` —
tune the sales script there, never in layout files. Photos in `src/assets` are
pulled from the current archersarena.com.
