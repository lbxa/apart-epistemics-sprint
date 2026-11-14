# Structural scaffold review — 2026-11-14

- **Stage:** structural draft, not submission-ready.
- **Source:** `report/epistemics/main.tex`, `preamble.tex`, and
  `sections/outline.tex`; uncommitted working-tree changes.
- **Output:** `report/epistemics/build/main.pdf`, three US Letter pages.
- **Authority:** Lucas's recommended outline and supplied Apart template PDF;
  live AI x Epistemics sprint guidelines checked on 2026-11-14. Template identity,
  checksum, and adaptation are recorded in `report/template/epistemics.md`.
- **Build:** `make -C report clean`, then `make -C report`, both exit 0.
  pdfLaTeX 1.40.27, TeX Live 2025, latexmk 4.86a. No bibliography pass is needed
  while the References section is a placeholder. Final build log:
  `report/epistemics/build/main.log` (local ignored output).
- **Warnings:** no font substitution, overfull/underfull box, undefined
  reference, or LaTeX warning in the final log. The first build's arbitrary-size
  math-font substitutions were resolved with the standard `fix-cm` package.
- **Visual review:** rendered all three final pages with Poppler and inspected
  the complete pages at readable manuscript scale. Checked title rules, type,
  author/abstract positioning, heading hierarchy, body margins, footnote
  separation, page breaks, and appendix. No clipping, overlap, or unreadable
  labels found. Compared the title and body styling with the supplied template.
- **Scientific review:** all research sections explicitly say pending. No
  numerical findings, citations, invented author identities, or material
  contribution claims have been added. The draft status is visible.

## Open checks

- Confirm the final title, author roster/affiliations, track, and question.
- Admit cloud experiment evidence and create the claim-to-evidence map before
  replacing placeholders with substantive prose, plots, tables, or conclusions.
- Complete the abstract at 150–250 words after results are established.
- Complete limitations, dual-use/ethics, personal-data handling, and LLM-use
  disclosures from the actual work. Remove all draft guidance before submission.
- Recheck the eight-page main-text cap and compare the final populated report
  with the supplied template. Review every final page and verify all citations.

**Decision:** structure and initial formatting ready for iterative development;
empirical content and final submission review remain open.

## Computer Modern revision — 2026-11-14

At Lucas's request, removed OldStandard and the explicit T1 encoding override
so the manuscript uses LaTeX's native Computer Modern fonts. Retained the
section structure and layout. `make -C report` succeeded with no LaTeX warnings,
undefined references, or overfull/underfull boxes. `pdffonts` confirms embedded
Type 1 Computer Modern regular, bold, and italic faces. Re-rendered and inspected
all three Letter pages for title fit, wrapping, heading hierarchy, footnote
spacing, and appendix layout; no clipping or overlap found. Scientific content
remains placeholders, and the open submission checks above still apply.

## Shared AI panel example — 2026-11-14

Loaded the earlier report's black-header panel style from the shared
`report/trace-panels.tex` and added a dummy prompt/response under Results.
Its title and source note explicitly identify invented illustrative content.
Both `make -C report` and `make -C report agentic` succeeded. The active draft
still has three pages and no LaTeX warnings or overflowing boxes. Inspected
all three rendered pages, including the panel's header, divider, text wrapping,
source note, and resulting page breaks. Computer Modern is retained, and no
historical experiment excerpts are included in the active draft.
