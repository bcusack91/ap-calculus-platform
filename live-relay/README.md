# StudyMondo live relay

A tiny WebSocket server for live class sessions. While a teacher presents,
their slide changes, pen strokes and laser pointer are broadcast to the
students in the room in well under a second; on the whiteboards, class-board
strokes and the teacher's view reach everyone the same way, and each student's
pad reaches the teacher's gallery as it is drawn. Without it the site still
works: everyone catches up through the polls, as before, and the laser stays
on the teacher's screen.

It runs on Cloudflare Workers with a Durable Object per session (hibernating
WebSockets), which is free at classroom scale: Cloudflare's free plan allows
100,000 requests a day, and a one-hour class of 20 students uses a few
thousand. The relay stores nothing; the site's database remains the record.

## One-time setup (about 15 minutes)

1. Create a free account at <https://dash.cloudflare.com> (no card needed).
2. In Terminal:

   ```
   cd ~/Projects/"AP Calculus Website - Ad Revenue Based"/live-relay
   npm install
   npx wrangler login          # opens the browser once
   npx wrangler deploy         # prints the URL, e.g. https://studymondo-live-relay.<you>.workers.dev
   openssl rand -hex 32        # a random secret: copy it
   npx wrangler secret put RELAY_SECRET   # paste the secret
   ```

3. In Vercel → Project → Settings → Environment Variables (Production), add:
   - `NEXT_PUBLIC_LIVE_RELAY_URL` — the deploy URL with `wss://` instead of
     `https://`, e.g. `wss://studymondo-live-relay.<you>.workers.dev`
   - `LIVE_RELAY_SECRET` — the same secret you pasted into wrangler
4. Redeploy the site. Presentations use the relay automatically; nothing else
   changes.

To update the relay later: `npx wrangler deploy` again from this folder.

## How it fits together

- `src/lib/live-relay-token.ts` (site) signs a 10-minute token per connection
  after checking the member is enrolled; the worker verifies it with the same
  secret and learns whether the member is a teacher (may publish) or a student
  (listens only).
- `src/hooks/useLiveRelay.ts` opens the socket from the browser and reconnects
  with a fresh token when it drops.
- `src/lib/live-relay-messages.ts` is the protocol: `deck` (slide change,
  reveal, end), `els` (changed pen elements), `laser` (pointer position),
  `board` (changed whiteboard elements), `view` (the teacher's board view and
  the follow switch) and `board-mode` (the teacher's board settings).
- `src/lib/live-relay-routing.ts` decides who may publish what and who
  receives it; the worker runs it for every message. Teachers publish
  anything; a student only their own pad (to teachers) or the class board
  while the teacher has it shared.
- `src/components/live/LiveRelayProvider.tsx` holds the one socket per live
  page; `SlideDeckSection` and `LiveBoards` publish and subscribe through it.

## Local test

```
cd live-relay && npm run dev     # http://localhost:8787, RELAY_SECRET from .dev.vars
```

`.dev.vars` holds `RELAY_SECRET=dev-secret` for local runs only (git-ignored).
