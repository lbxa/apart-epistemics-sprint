# Macro-Epistemics research landing page

This is the self-contained Bun / Astro 6 site for **Macro-Epistemics: Confidence
Under Dispute**. It preserves the supplied archive header, including the thick
rule above the title and the thinner rule below it. The page is a short research
companion, with source-backed callouts and an interactive findings explorer.
The main reading path is a short abstract, the playable demo, three findings,
the film and research links. Charts, intervals and provenance are available in
a native disclosure; the citation is collapsed separately.

## Local draft

From this directory:

Use Bun 1.3.14 and Node 22.12 or newer, matching the installed Astro 6 runtime.

```sh
bun install --frozen-lockfile
bun run prepare:assets
bun run dev
```

`prepare:assets` uses the repository's built PDF and the local first-draft film
in the ignored root `video/` directory. Build those artifacts before preparing
the page. It copies the small poster and captions and links the local MP4 into
the ignored `public/media/` path. Large production assets remain in `video/`.
The static build may include a copy of the movie in its ignored output. This
draft has not been deployed. The inherited Cloudflare configuration names
`epistemics.lbxa.net`; changing the site does not publish to that domain.

```sh
bunx astro sync
bun run typecheck
bun run test:demo
bun run build
```

After admitting a new frozen result snapshot in the report, run
`bun run sync:research` to regenerate the public aggregates. The exporter rejects
unexpected cohort changes rather than silently mixing new or partial runs.

The parent repository's Rust verification gate does not check this site.
Inspect the rendered page at both narrow and desktop widths after changes.

## Content and rendering boundaries

- `src/pages/index.astro` owns the narrative, artifact links and archive header.
- `src/components/FindingsExplorer.astro` and `src/data/research.json` own the
  displayed frozen initial-phase statistics and separate legal-pilot results.
- `src/components/ResearchFilm.astro` owns click-to-load video. Its poster uses
  native `astro:assets` responsive images; the MP4 is assigned only after a user
  clicks. The poster remains visible while loading; failed requests restore a
  retry and download path. There is no autoplay, eager video metadata, remote font or embed.
- `src/components/VeracityDemo.astro` owns the playable teaching round immediately
  below the abstract. Its responses and manually controlled juror votes are
  illustrative; it never calls models, the game API or a wallet. The saved
  original stays fixed when the response changes, and the arithmetic check is
  independent of the jury. The full mechanism is linked at
  [Veracity](https://veracity.lbxa.net/).
- `public/data/research.json` provides the same aggregates and provenance for
  download. It contains no credentials, raw model calls or recovery state.

Astro's native PostCSS pipeline runs Tailwind 3 and Autoprefixer directly. This
preserves the template utilities without the older Astro integration's peer
dependency constraint. The page is generated statically. Small Astro-processed scripts handle filters,
copying the citation and loading the movie; there are no hydrated frameworks,
runtime research API calls or persistence. Native tables and disclosures retain
the content without JavaScript. The archive header remains text, so the initial
render does not wait for an image or custom font.

Keep original and source-audited grades visible together. The audit is post hoc
and pending independent human review. Unavailable outputs stay in completion
denominators. Five repeated defence seeds do not create five source cases.
The initial sector phase and earlier selected-case pilot are separate cohorts;
the collecting dispute phase supplies no rates to this draft. Future updates
must pin an admitted artifact and regenerate the displayed data before changing
claims. Claims about internal beliefs, general honesty, representative industry
performance or improved human decisions are not supported by these snapshots.

Run `bun scripts/sync-research.mjs` to regenerate the aggregate data from the
paper's admitted snapshots. It validates hashes, artifact identity, assigned
and completed counts, grading sensitivity and pilot denominators before
writing identical `src/data/research.json` and `public/data/research.json`.

## Changelog

- 2026-11-16: Shortened the default reading path to three findings and compact
  resource links. Moved the full explorer behind one disclosure, removed the
  table of contents and repeated methods/scope/vision sections, and retained
  the archive header and demo behavior.
- 2026-11-16: Added a browser-only Veracity teaching round below the abstract,
  plus links to the underlying game and original framework paper. Keep this
  scripted illustration separate from the measured research findings; see
  [the demo decision](../docs/decisions/landing-page-demo-is-a-browser-only-teaching-round.md).
- 2026-11-16: Adapted the archive template to Macro-Epistemics; added a concise
  evidence narrative, native responsive film poster, click-to-load player,
  prompt disclosures, resources and a versioned draft citation. Retained the
  unrelated template PDF privately in ignored `latex-export/`, outside public
  output. Replaced the older Tailwind integration with native PostCSS while
  preserving its Tailwind 3 utilities and header design.
