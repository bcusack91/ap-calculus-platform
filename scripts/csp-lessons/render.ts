// Renders a CSP lesson part file matching the schema in csp-binary-data-part1.ts.

import type { PartData, Q, Topic } from './types';
import { PART_TITLES } from './types';

const j = JSON.stringify;

/** Escape a string for safe inclusion inside an output template-literal body. */
function te(s: string): string {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
}

function renderMcq(id: string, header: string, qs: Q[]): string {
  const questions = qs
    .map(
      (q) => `          {
            question: ${j(q.q)},
            options: [
${q.opts.map((o) => `              ${j(o)}`).join(',\n')}
            ],
            correctAnswer: ${q.a},
            explanation: ${j(q.exp)}
          }`,
    )
    .join(',\n');
  return `    {
      id: ${j(id)},
      type: 'multiple-choice' as const,
      content: \`
**${te(header)}**
      \`,
      exercise: {
        questions: [
${questions}
        ]
      }
    }`;
}

function renderText(id: string, body: string): string {
  return `    {
      id: ${j(id)},
      type: 'text' as const,
      content: \`
${te(body.trim())}
      \`
    }`;
}

function renderInputs(id: string, header: string, p: PartData['inputs']): string {
  const numbered = p.prompts.map((s, i) => `${i + 1}) ${s}`).join('\n\n');
  return `    {
      id: ${j(id)},
      type: 'input-boxes' as const,
      content: \`
**${te(header)}** ✍️

${te(numbered)}
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: [${p.answers.map((a) => j(a)).join(', ')}],
        hint1: ${j(p.hints[0])},
        hint2: ${j(p.hints[1])},
        hint3: ${j(p.hints[2])},
        explanation: ${j(p.explanation)}
      }
    }`;
}

function renderDropdowns(id: string, header: string, p: PartData['dropdowns']): string {
  const items = p.items
    .map(
      (it) => `          {
            label: ${j(it.label)},
            options: [${it.options.map((o) => j(o)).join(', ')}]
          }`,
    )
    .join(',\n');
  return `    {
      id: ${j(id)},
      type: 'dropdown-select' as const,
      content: \`
**${te(header)}** 🔍
      \`,
      exercise: {
        dropdowns: [
${items}
        ],
        correctAnswers: [${p.correct.map((c) => j(c)).join(', ')}],
        hint1: ${j(p.hints[0])},
        hint2: ${j(p.hints[1])},
        hint3: ${j(p.hints[2])},
        explanation: ${j(p.explanation)}
      }
    }`;
}

export function renderPart(topic: Topic, partNum: 2 | 3 | 4 | 5 | 6 | 7): string {
  const part = topic.parts[partNum];
  const title = PART_TITLES[partNum];
  const idBase = `${topic.idPrefix}${partNum}`;
  const exportName = `${topic.exportPrefix}Part${partNum}Data`;

  const introBody = `# ${topic.emoji} ${topic.display}\n\n**Part ${partNum} of 7 — ${title}**\n\n---\n\n${part.introMd.trim()}`;

  const sections = [
    renderText(`${idBase}-intro`, introBody),
    renderMcq(`${idBase}-quiz1`, 'Concept Check 🎯', part.quiz1),
    renderText(`${idBase}-content`, part.contentMd),
    renderInputs(`${idBase}-input`, 'Applied Recall', part.inputs),
    renderDropdowns(`${idBase}-dropdown`, 'Targeted Practice', part.dropdowns),
    renderText(`${idBase}-strategy`, part.strategyMd),
    renderMcq(`${idBase}-applied`, 'AP-Style Application 🎯', part.applied),
  ];

  return `export const ${exportName} = {
  topicSlug: ${j(topic.slug)},
  sections: [
${sections.join(',\n')}
  ]
};
`;
}
