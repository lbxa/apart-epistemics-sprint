/** Export only public, aggregate findings from the report's admitted snapshots. */
import { createHash } from "node:crypto";
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import sector from "../../report/data/sector-initial.json";
import sectorStats from "../../report/epistemics/sector-statistics.json";
import pilot from "../../report/data/epistemics-pilot.json";
import pilotStats from "../../report/epistemics/statistics.json";

const inputPaths = [
  "report/data/sector-initial.json", "report/epistemics/sector-statistics.json",
  "report/data/epistemics-pilot.json", "report/epistemics/statistics.json",
];
const root = new URL("../../", import.meta.url);
const inputHashes = Object.fromEntries(inputPaths.map((path) => [
  path, createHash("sha256").update(readFileSync(new URL(path, root))).digest("hex"),
]));

function requireEvidence(condition, message) {
  if (!condition) throw new Error(`Research export rejected: ${message}`);
}

requireEvidence(inputHashes["report/data/epistemics-pilot.json"] === pilotStats.source_snapshot_sha256,
  "pilot statistics do not match the frozen source snapshot");
requireEvidence(sector.provenance.artifact === sectorStats.provenance.artifact
  && sector.provenance.analysis_sha256 === sectorStats.provenance.analysis_sha256,
  "sector statistics and snapshot use different artifact or analysis revisions");
requireEvidence(sector.initials.length === 600 && sector.cases.length === 120,
  "the admitted initial-phase cohort has changed; review its public description");
requireEvidence(sector.branches.length === 0, "dispute results require separate admission");

const models = [
  { id: "@cf/deepseek-ai/deepseek-v4-pro-0813", label: "DeepSeek V4 Pro" },
  { id: "@cf/zai-org/glm-5.3", label: "GLM 5.3" },
  { id: "@cf/moonshotai/kimi-k2.6", label: "Kimi K2.6" },
  { id: "@cf/openai/gpt-oss-120b", label: "GPT-OSS-120B" },
  { id: "@cf/thinkingmachines/inkling-2-small", label: "Inkling 2 Small" },
];
const domains = [
  { id: "finance", label: "Finance", benchmarks: "FinQA · TAT-QA" },
  { id: "legal", label: "Legal", benchmarks: "ContractNLI" },
  { id: "science", label: "Science", benchmarks: "SciFact" },
  { id: "education", label: "Education", benchmarks: "MathDial" },
];
const arms = [
  { id: "neutral", label: "Review" },
  { id: "pressure", label: "Empty pressure" },
  { id: "invalid_argument", label: "Misleading argument" },
  { id: "source_audit", label: "Source audit" },
];

const initial = models.flatMap(({ id: model }) => domains.map(({ id: domain }) => {
  const rows = sector.initials.filter((row) => row.model === model && row.domain === domain);
  const usable = rows.filter((row) => row.correct !== null && row.confidence !== null);
  const stats = sectorStats.initial[model][`domain:${domain}`];
  const literalCorrect = usable.filter((row) => row.literal_correct === true).length;
  const auditedCorrect = usable.filter((row) => row.correct === true).length;
  requireEvidence(rows.length === 30 && usable.length === stats.accuracy.completed,
    `completion denominator differs for ${model}/${domain}`);
  requireEvidence(Math.abs(literalCorrect / usable.length - stats.literal_accuracy.mean) < 1e-10
    && Math.abs(auditedCorrect / usable.length - stats.accuracy.mean) < 1e-10,
    `reference counts differ from report statistics for ${model}/${domain}`);
  return {
    model, domain, assigned: rows.length, completed: usable.length,
    literalCorrect, auditedCorrect, confidence: stats.confidence.mean,
    literal: { mean: stats.literal_accuracy.mean, low: stats.literal_accuracy.ci_low,
      high: stats.literal_accuracy.ci_high },
    audited: { mean: stats.accuracy.mean, low: stats.accuracy.ci_low,
      high: stats.accuracy.ci_high },
  };
}));

const correction = models.slice(0, 3).flatMap(({ id: model }) => {
  if (!(model in pilotStats.correction)) return [];
  const statistics = pilotStats.correction[model];
  return arms.map(({ id: arm, label }) => {
    const stats = statistics[arm];
    const seeds = pilot.cells.filter((cell) => cell.model === model && !cell.initial_correct
      && cell.arm === arm).sort((a, b) => a.seed - b.seed).map((cell) => ({
      seed: cell.seed,
      correct: cell.defence_status === "complete" ? cell.final_correct : null,
    }));
    requireEvidence(seeds.filter((seed) => seed.correct === true).length === stats.successes,
      `pilot successes differ for ${model}/${arm}`);
    return { model, arm, label, assigned: stats.assigned, completed: stats.completed,
      successes: stats.successes, mean: stats.mean, ciLow: stats.ci_low, ciHigh: stats.ci_high,
      sd: stats.sd, seeds };
  });
});

const initialCompleted = initial.reduce((sum, row) => sum + row.completed, 0);
const auditChangedGrades = initial.reduce((sum, row) => sum + row.auditedCorrect - row.literalCorrect, 0);
const settled = pilot.cells.filter((cell) => cell.jury_outcome !== null
  && ["CREATOR_SUPPORTED", "CHALLENGER_SUPPORTED"].includes(cell.jury_outcome));
const juryDisagreements = settled.filter((cell) => !cell.initial_correct
  && cell.jury_outcome === "CREATOR_SUPPORTED").length;
requireEvidence(initialCompleted === 581 && auditChangedGrades === 30, "headline counts changed");
requireEvidence(settled.length === 95 && juryDisagreements === 7, "jury cohort counts changed");

const research = {
  version: 1,
  summary: { initialAssigned: 600, initialCompleted, sourceGroups: 120,
    modelCount: models.length, domainCount: domains.length, unavailable: 600 - initialCompleted,
    auditChangedGrades, juryDisagreements, settledVerdicts: settled.length },
  models, domains, initial, pilot: correction,
  provenance: {
    exportedFrom: "Frozen initial phase and selected legal pilot; no ongoing dispute rates",
    sectorArtifact: sector.provenance.artifact,
    sectorRun: "https://forge.coreweave.com/wandb/lbxa-corp/apart-epistemics-sprint/runs/da7e42f28ba54247",
    sectorAnalysis: sector.provenance.analysis_sha256,
    sectorMethod: sectorStats.method,
    pilotArtifact: pilot.provenance.artifact,
    pilotDigest: pilot.provenance.digest,
    pilotRun: "https://forge.coreweave.com/wandb/lbxa-corp/apart-epistemics-sprint/runs/g9t35ump",
    pilotMethod: pilotStats.method,
    inputHashes,
  },
};
const output = JSON.stringify(research, null, 2) + "\n";
for (const path of ["src/data/research.json", "public/data/research.json"]) {
  const destination = new URL(`../${path}`, import.meta.url);
  mkdirSync(fileURLToPath(new URL("./", destination)), { recursive: true });
  writeFileSync(destination, output);
}
console.log(`Exported ${initial.length} model/domain cells and ${correction.length} pilot strata; `
  + `${initialCompleted}/600 interpretable initial answers.`);
