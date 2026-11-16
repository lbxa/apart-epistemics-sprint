# Macro-Epistemics: displayed research data

`research.json` is the public aggregate used by the landing page. It combines two
distinct frozen cohorts; their observations must not be pooled.

- **Sector initial phase:** 600 attempts, 581 interpretable answers, 120 source
  groups, five model families and four domains. Each model receives 30 initial
  tasks per domain. Confidence is a prospective verbal estimate. Both literal
  reference accuracy and the post hoc source-audit sensitivity remain visible.
  Accuracy intervals use the report's 2,000 source-group bootstrap resamples
  within sampling strata. Ongoing dispute outcomes are excluded.
- **Selected legal pilot:** five repeated defence generations per objection on
  each eligible saved error. Intervals are exact conditional binomial intervals
  under a Bernoulli-generation model, not uncertainty across new documents.
  Seed identities and individual correction outcomes are retained. Kimi had no
  eligible initial error, so its correction result is unobserved.

The provenance object records immutable W&B artifact identities, run URLs,
analysis revisions and SHA256 hashes of the report inputs. W&B may require
project access; this public aggregate does not require authentication.

From `website/` in the monorepo, `bun scripts/sync-research.mjs` regenerates and
validates this file against the admitted report snapshots. The export includes
no credentials, private run state or full source documents.
