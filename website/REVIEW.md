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

## Completed-study update

This update supersedes the initial-only evidence scope above. The default page
keeps the archive header, immediately following scripted demo, three findings
and closed explorer. It now admits sector artifact v128: 120 source cases,
12,000 assigned branches, 11,620 executed, 11,483 valid defences and 11,469
settled verdicts. Failed and unavailable work remains distinguishable.

The explorer covers all 20 initial and 80 dispute cells across five models,
four domains and four challenge conditions. It shows literal and post hoc
audited grading, eligible denominators, source-group bootstrap intervals and
descriptive variation across five defence seeds. The one-source arithmetic
diagnostic and offline objection-validity audit remain separate; the page
explicitly identifies the unintegrated candidate fix and the absence of evidence
that participants exploited the encoding.

Read-only W&B inspection confirmed the completed primary and diagnostic runs
and their immutable artifact digests. The paper download matches report archive
v1, SHA256 `9ab732be30fca65d052e027c1e50b1e07e86c0320ebd8d5e077c5c4cb56b9afc`.
Asset preparation now preserves that admitted PDF when the concurrent working
manuscript changes.

Chromium checks on the fresh local preview verified all four domain/condition
examples against exported counts, initial confidence filtering, an unobserved
0/0 cell, the condition-specific validity notice, arithmetic seed tables,
provenance links and PDF delivery. At 1440px and 390px there is no horizontal
page overflow; wide tables scroll within their own regions. With JavaScript
disabled, the legal audit chart and demo's worked example remain usable. A
failed lazy data request preserves the static chart and explains the fallback.
The aggregate loads only after opening the explorer; the MP4 loads only after
activation and plays with its caption track. A fresh preview also serves the
native Astro poster correctly; an older running preview had a stale Sharp
loader failure. Screenshots are in ignored `output/playwright/latest-*.png`.

Research-export tests, demo tests, lint, Astro/TypeScript checks and the static
build pass. The complete repository verification gate passes, including 532
harness tests; log: `.harness/verification/website-completed-study.log`.
No paid model calls or public deployment were performed. Hosted-network
performance and a full screen-reader review remain outside this local check.
