import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const skill = readFileSync(resolve(root, 'SKILL.md'), 'utf8');
const readme = readFileSync(resolve(root, 'README.md'), 'utf8');
const triggerCases = JSON.parse(readFileSync(resolve(root, 'evals/trigger_cases.json'), 'utf8'));
const issues = [];

for (const marker of [
  'version: "0.5.0"',
  'Preserve proven strengths.',
  '## Selective Improvement Gate',
  '## Fair Before-and-After Comparison',
  '## Adoption Decision',
  'Do not confuse stylistic intensity with visual quality.',
]) {
  if (!skill.includes(marker)) issues.push(`SKILL.md missing: ${marker}`);
}

if (!readme.includes('v0.5.0')) issues.push('README.md version is not v0.5.0');

for (const phrase of ['选择性合并', '公平比较', '不要为了重构而整套换风格']) {
  if (!triggerCases.cases.some(({ prompt, should_trigger }) => should_trigger && prompt.includes(phrase))) {
    issues.push(`trigger cases missing: ${phrase}`);
  }
}

if (issues.length) {
  issues.forEach((issue) => console.error(`FAIL: ${issue}`));
  process.exitCode = 1;
} else {
  console.log('PASS: v0.5.0 selective-improvement rules and trigger cases are consistent');
}
