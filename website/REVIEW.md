# Landing-page draft review — 16 November 2026

The draft preserves the supplied archive header and separates the frozen sector
initial-answer cohort from the earlier selected-case legal pilot. An independent
source review checked the displayed claims against the report snapshots.

## Verification

- `bun run sync:research` validates cohort counts, reference scores and source
  revisions before regenerating the identical source/public data exports.
- `bun run lint`, `bun run typecheck` and `bun run build` pass. Astro reports no
  errors, warnings or hints. The output is a static page.
- Chromium checks at 1440 × 1000 and 390 × 844 show no horizontal page overflow.
  Domain/model filtering selects the expected science/GPT-OSS-120B row and
  updates its accessible status text. Data tables scroll inside their own region.
- With JavaScript disabled, all four domain charts remain visible, inactive
  filters stay hidden, and the film remains a working direct link.
- The initial resource list contains no MP4. Activating the film plays the
  118-second 1920 × 1080 asset with an English caption track.
- A deliberately aborted movie request preserves the poster and reveals a
  retry/download path. Retrying successfully loads the video. The intentional
  network failure produces the expected browser console entry.
- Local artifact links resolve; the unrelated template PDF is outside public
  output. The citation identifies the draft date and both frozen artifact versions.

The native Astro poster emits responsive WebP variants of approximately 4–24 KB.
The header uses system fonts, the page has no hydrated framework, and PDF/video
prefetching is disabled. An unthrottled local mobile-width navigation recorded
LCP at 228 ms with the introductory H2 as the candidate. This is a local smoke
measurement, not a production performance claim; hosted mobile-network LCP still
needs measurement after deployment.

## Evidence and remaining scope

The sector view contains 581 interpretable initial answers from 600 attempts,
120 source groups, five model families and four domains. It retains literal
grades beside post hoc source-audit sensitivity. The pilot keeps five repeated
defence generations separate from new source cases and reports conditional
uncertainty. No ongoing dispute-phase rates are admitted here.

Screenshots and browser diagnostics are in ignored `output/playwright/`. No
public deployment, full screen-reader session or hosted-network performance
audit was performed. Re-run the asset preparation step when replacing the paper
or film, and regenerate the data only after admitting a new frozen cohort.

## Browser-only Veracity demo

The scripted demo sits directly after the abstract and before the film, with one
`demo` anchor. Visitors choose an original answer, challenge it, select a
scripted response and control three jury ballots. Links beside the demo lead to
the Veracity overview and original 2025 framework paper.

`bun run test:demo` passes four tests with 32 assertions: frozen-answer preservation
after revision/retraction, independence of jury and arithmetic, all eight ballot
combinations, guarded transitions, reset and immutable previous votes. Site lint,
type checking and static build pass with zero diagnostics. The repository gate
also passes, including all 522 harness tests; its log is
`.harness/verification/website-demo.log` at the repository root.

Chromium verification covered a saved 3.95% answer revised to 3.80% while a
unanimous jury still upheld the original. A second round retracted a correct
3.80% answer and rejected it by two votes to one; the independent arithmetic
check still marked the original correct. Reset restored the original answer,
objection and response defaults. New stage headings receive keyboard focus.
At 390px, the page has no horizontal overflow. Without JavaScript, a worked
example and the research links remain readable while inactive controls stay
hidden. Demo interactions made no fetch/XHR requests. All responses and votes
are labelled illustrative rather than measured model behavior.

## Shorter reading path

The simplified default page contains a brief abstract, the demo, three findings,
the film and compact research links. The full explorer and citation use native
disclosures. The archive header and its 4px/2px title rules remain unchanged.

At 1440px, the default reading path decreased from 1,258 visible words and
8,386px of page height to approximately 350 words and 3,161px. These are local
layout measurements with the demo in its initial state and disclosures closed,
not performance benchmarks. Essential cohort denominators and the saved-error
scope remain visible beside the findings.

Browser checks confirm that the expanded science/GPT-OSS-120B filter shows the
expected single row, the citation retains its draft date and frozen versions,
and the demo still compares a saved 3.95% original with independent arithmetic
after revision. At 390px, there is no horizontal overflow. Without JavaScript,
the demo's static example remains visible and the native chart disclosure opens
all four domain charts. Lint, type checking, the four demo tests and the static
build pass after the layout changes. Screenshots are in ignored
`output/playwright/simple-*.png`.
