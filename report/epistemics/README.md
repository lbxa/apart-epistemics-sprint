# Epistemics Sprint report

This is the active structural draft for Apart's **AI x Epistemics Research
Sprint, November 13–15, 2026**. It follows the current linked template's order
and visual conventions; see [template provenance](../template/epistemics.md).
The working title is *Epistemics Sprint: Research Report*. Authors, affiliations,
track, research question, and final title remain open.

The [initial review](review.md) records the clean build and three-page visual
inspection. It approves a structural draft only, with substantive and
submission-readiness checks still open.

Build from the repository root with `make -C report`. The PDF is
`report/epistemics/build/main.pdf`. Edit front matter in `main.tex`, shared layout
in `preamble.tex`, and section placeholders in `sections/outline.tex`. Split
sections into individual files when substantive writing begins. Preserve
concurrent report edits. Existing manuscripts elsewhere in `report/` remain
historical, with `make -C report baseline` and `make -C report agentic` as their
explicit build targets.

Use the [editor skill](../../.agents/skills/editor/SKILL.md) and
[reporting guide](../../docs/reporting/README.md). Until the experiments support
material contributions, retain clearly marked placeholders. As cloud results
arrive, update the active brief's claim-to-evidence map, pin run IDs, artifact
versions/hashes and analysis revisions, and write only supported claims.

## Changelog

### 2026-11-14

- Use `editor` for report prose and substantive review. Keep the draft structural
  until results arrive, then update the brief's claim-to-evidence map before
  strengthening claims; preserve concurrent edits rather than replacing the
  manuscript wholesale.
- Preserve the supplied Apart PDF alongside the user's Methodology and
  Discussion headings. `make -C report` builds this active draft; `baseline`
  and `agentic` select historical manuscripts so old findings cannot silently
  become current sprint results. See the
  [report setup decision](../../docs/decisions/cloud-experiments-and-evidence-led-apart-report.md).
- Reuse the earlier report's black-header prompt/response panels through
  `report/trace-panels.tex`. The dummy exchange under Results is illustrative
  only and must be replaced with admitted evidence or removed.
- Use LaTeX's default Computer Modern text and mathematics at Lucas's request,
  overriding the source PDF's Old Standard TT font while retaining its structure
  and layout. Preserve this deliberate
  [font override](../../docs/decisions/report-uses-native-computer-modern.md)
  when checking template fidelity.
- Establish a separate sprint scaffold using the current Apart template,
  preserving imported research unchanged. Report development follows the
  experiments rather than anticipating their results.
