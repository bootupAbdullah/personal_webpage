# Build Notes: "Streaming a Real SNES Game From My Headless Linux Server"

Internal notes, not deployed to the live site. Summarizes the work done to write, publish, and extend this blog post.

## Source material

- `docs/blog-material-pool.md`-style narrative doc (story arc, turning points, facts to cite, what to keep private)
- Technical repo: [`headless-linux-game-streaming`](https://github.com/bootupAbdullah/headless-linux-game-streaming) (`docs/01`–`05`, `README.md`)

## Post

- Files: `frontend/src/posts/headless-linux-game-streaming.mdx`, entry in `frontend/src/posts/index.js`
- Structure locked before drafting: hook → GPU/driver → Xorg dead end ("It kind of worked…??") → diagnosis → pivot → stack build → first stream → next steps
- Cut from scope: hand-me-down laptop origin story, orchestration-scripts section, containerization tangent
- Tone passes: removed spec-dumping, softened narrator voice from confident-expert to learner/eager, cut AI-sounding contrastive phrasing ("not X, it's Y"), rewrote the hook around the coworkers/gaming-nostalgia angle
- Images: `linux-snes-hero-.png` (card image), `hero-image.png` (post hero), `first-test-stream-game.png` (inline), all in `frontend/public/images/posts/headless-linux-game-streaming/`
- Merged: [PR #53](https://github.com/bootupAbdullah/personal_webpage/pull/53)

## Repo hygiene (adjacent work, same session)

- Removed two orphaned duplicate images left over from an earlier restructure (`llm-benchmark-post-v6.png`, `ollama run.png`), verified byte-identical to their replacements first — [PR #54](https://github.com/bootupAbdullah/personal_webpage/pull/54)
- Added a "Blog Post" badge to the `headless-linux-game-streaming` README, linking back to this post
- Removed the Claude co-author trailer from that repo's commit (kept on for `personal_webpage`)

## Interactive flow chart

- New reusable page: `/flow/:slug`, built on `@xyflow/react`
- Data-driven per post via `frontend/src/flows/<slug>.js`; a post opts in with `flow: true` in its `index.js` entry
- This post's flow: `frontend/src/flows/headless-linux-game-streaming.js` — 10 cards, one per stack layer (Hardware → OS → GPU driver → compositor session → virtual display → PipeWire → Sunshine → RetroArch → network path → Moonlight)
- Linked from the post header via a new icon (`frontend/public/images/svg/flow-chart.svg`)
- Iterated on: dropped the per-card commands after the first pass, recentered the lone last-row card (Moonlight) under the middle column, disabled per-card dragging so dragging anywhere pans the canvas instead of moving a card
- Bugs hit and fixed along the way: canvas container had no real height (cards existed in the DOM but nothing painted), minimap was blank (nodes need explicit `width`/`height` for the minimap to draw them), a long command line caused card overlap
- Merged: [PR #55](https://github.com/bootupAbdullah/personal_webpage/pull/55)

## Status

All of the above is live on `main`. Nothing outstanding for this post as of 2026-09-18.
