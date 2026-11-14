# Epistemics Sprint venue record

The selected venue is **Apart Research: AI x Epistemics Research Sprint,
November 13–15, 2026**. The track, author list, affiliations, and final project
title remain open. This is a structural draft, not a submission-ready report.

## Official requirements, checked 2026-11-14

The [live guidelines](https://apartresearch.com/sprints/ai-x-epistemics-research-sprint-2026-11-13-to-2026-11-15#guidelines)
require the linked official template, a PDF report of at most eight main-text
pages excluding references/appendices, a 150–250-word abstract, author names and
affiliations, and a Limitations and Dual-Use / Ethical Considerations appendix.
The template recommends about four pages. Citation style is flexible but must
be consistent. Preexisting code and research must be identified in the README
and report. Template guidance must be removed from the final submission.

The deadline is November 15, 2026 at 23:59 AoE (UTC−12), equivalent to
November 16 at 11:59 UTC / **06:59 EST in America/New_York**. No submission
has been authorized or attempted by this setup task.

## Template and local manuscript

Use the [official Google document](https://docs.google.com/document/d/17b3JWki-ZkaqdmqGI5d0gof-HwlGuWU9Mc1_klNZXKs/edit),
the user-supplied [source PDF](../../report/template/apart-epistemics-template.pdf),
and [provenance/style record](../../report/template/epistemics.md). The supplied
PDF governs visual formatting, with Lucas's explicit Computer Modern font
override recorded in the provenance guide; the user's section names govern
the adapted outline. Preserve the template's additional sections and the
guidelines' required ethics appendix. These sources supersede the copied
October collusion and November swarm requirements.

The active source is `report/epistemics/main.tex`, with layout in `preamble.tex`
and placeholders in `sections/outline.tex`. `make -C report` builds
`report/epistemics/build/main.pdf` using pdfLaTeX via latexmk. The draft adapts
Letter geometry, title rules, author block, and heading hierarchy, using native
Computer Modern text and mathematics at Lucas's request. Compare the final populated PDF with the source
template, check page/abstract limits, and record remaining deviations before
declaring submission readiness.

The [historical venue records](historical-venues.md) preserve template provenance,
prior formatting choices, and original submission limits for imported manuscripts.
Their build targets are `make -C report baseline` and `make -C report agentic`.
