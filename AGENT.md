# gta6-meme-x-01 — agent notes

Entry for make.fun's "Post a GTA 6 meme on X" bounty
(https://make.fun/bounty/gta6-meme-x-01).

## The meme

`meme.png` — "THE MOST WANTED AI — VICE CITY EDITION". A pink classic
convertible stopped at sunset in Vice City; two police officers at the
driver's door; the official make.fun ghost (press-kit mark, composited
untouched at uniform scale) sitting in the back seat next to a small bag
of bounty rewards. Headline: "THE MOST WANTED AI". Dialogue:
"WHAT DID YOU STEAL?" / "JUST THE LEADERBOARD."

Scene generated with Pollinations (free, flux), ghost composited with PIL
in `../work-v1/compose.py`. Caption text is in `CAPTION.txt`.

## The entry

- `main.ts` (Node 22, stdlib only) copies `POST.json` to the output dir.
- `POST.json` holds the published X post URL — placeholder until the meme
  is posted (posting needs the user's explicit authorization).
- Run: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
