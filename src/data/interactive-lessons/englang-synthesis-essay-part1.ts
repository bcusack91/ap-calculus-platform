export const englangSynthesisEssayPart1Data = {
  topicSlug: 'englang-synthesis-essay',
  sections: [
    {
      id: 'else1-intro',
      type: 'text' as const,
      content: `
# 📝 The Synthesis Essay

**Part 1 of 7 — Executing a High-Scoring AP Synthesis Response Under Time Pressure**

---

## Time-Smart Synthesis Workflow

Recommended 40-minute plan:

| Minutes | Task |
|--------|------|
| 0-5 | Read prompt, define task, annotate source positions |
| 5-10 | Group sources, draft thesis + paragraph plan |
| 10-33 | Write intro + body paragraphs + concession/rebuttal |
| 33-40 | Write conclusion, revise for clarity, source accuracy |

---

## What the Rubric Rewards

| Rubric Category | High-Scoring Features |
|-----------------|-----------------------|
| **Thesis** | Defensible, specific, responsive to prompt |
| **Evidence/Commentary** | Accurate source use, strong integration, clear analysis |
| **Sophistication** | Nuance, qualification, complexity, strategic style |

### Core Body Paragraph Template
1. Topic claim
2. Source evidence (A)
3. Commentary
4. Source evidence (B or contrast source)
5. Commentary + synthesis move
6. Link to thesis

> 🔑 You are not writing about sources. You are writing an argument with sources.
      `
    },
    {
      id: 'else1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the best use of source material in a synthesis essay?',
            options: [
              'Quote full paragraphs to prove you read each source carefully',
              'Use brief source references and prioritize your commentary',
              'Mention every source once so the reader sees broad coverage',
              'Skip attribution so more time remains for your own analysis'
            ],
            correctAnswer: 1,
            explanation: 'High-scoring essays use sources efficiently and devote most space to analysis. Long quotations reduce room for reasoning and often weaken control.'
          },
          {
            question: 'What is the biggest advantage of grouping sources before writing?',
            options: [
              'It helps you memorize which source letter matches which author',
              'It enables claim-centered organization and smoother synthesis',
              'It earns the sophistication point automatically',
              'It lets the source groups stand in for a thesis'
            ],
            correctAnswer: 1,
            explanation: 'Grouping by idea lets you integrate sources around argumentative reasons, avoiding source-by-source summary and producing stronger structure.'
          }
        ]
      }
    },
    {
      id: 'else1-content',
      type: 'text' as const,
      content: `
## Intro and Conclusion Strategy

### Intro Goals
- Establish issue quickly
- Signal complexity (if appropriate)
- State defensible thesis

### Conclusion Goals
- Synthesize key reasoning (not repeat intro verbatim)
- Reassert stakes and implications
- End with controlled rhetorical force

## Source Attribution Options

| Style | Example |
|------|---------|
| Parenthetical | "Public trust declines when transparency drops" (Source C). |
| Integrated | "As Source E's survey indicates, trust rises when..." |
| Comparative | "Unlike Source B, Source F emphasizes..." |

## Common Pitfalls on Timed Synthesis
- Mislabeling or misreading a source
- Claim drift (thesis changes mid-essay)
- Source mentions without commentary
- Ignoring strongest opposing source
- Conclusion that adds unrelated new claim

### Rapid Revision Checklist
1. Thesis still clear and defensible?
2. At least three sources used accurately?
3. Each source followed by commentary?
4. Counterargument addressed?
5. Paragraph transitions logical?
      `
    },
    {
      id: 'else1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In a timed synthesis essay, sources should be grouped by _______ rather than summarized one-by-one.

2) After source evidence, the highest-value next move is analytical _______.

3) A strong conclusion should restate stakes and _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['idea', 'commentary', 'implications'],
        hint1: 'Group by argument reason/theme.',
        hint2: 'Your explanation of meaning.',
        hint3: 'Why your argument matters going forward.',
        explanation: 'Group by ideas, not source order. Commentary earns points. Conclusions should project implications.'
      }
    },
    {
      id: 'else1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Select the Higher-Scoring Choice** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Best paragraph sequence in synthesis:',
            options: ['Claim -> source -> commentary -> source -> commentary', 'Source A summary -> Source B summary -> Source C summary', 'Quotation -> quotation -> quotation -> claim', 'Anecdote -> claim -> conclusion -> source']
          },
          {
            label: '"Unlike Source D, Source B suggests..." is a move that ___',
            options: ['Compares sources to deepen analysis', 'Summarizes one source in isolation', 'Concedes the opposing argument', 'Shows that one source is unreliable']
          },
          {
            label: 'Most effective revision in final 5 minutes is ___',
            options: ['Sharpen the thesis and commentary', 'Add longer quotations as extra support', 'Rewrite the whole introduction', 'Add a fourth source to the essay']
          }
        ],
        correctAnswers: ['Claim -> source -> commentary -> source -> commentary', 'Compares sources to deepen analysis', 'Sharpen the thesis and commentary'],
        hint1: 'Reasoning should lead, sources should support.',
        hint2: 'Comparison is core synthesis behavior.',
        hint3: 'Thesis + commentary quality drives score.',
        explanation: 'High-scoring paragraphs are claim-centered with layered source analysis. Source comparison strengthens synthesis. Final revision should prioritize thesis and commentary quality.'
      }
    },
    {
      id: 'else1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Synthesis Essay Execution

- Spend up to 10 minutes planning source clusters and thesis
- Use short source references; reserve space for analysis
- Integrate at least one source relationship move (corroborate/qualify/contrast)
- Address a meaningful counter-source argument
- Keep argument line consistent from intro to conclusion
- In final minutes, fix clarity and source-commentary balance
      `
    },
    {
      id: 'else1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student has 8 minutes left and has a full draft with weak commentary. Best use of remaining time?',
            options: [
              'Add two more quotations from sources you have not used',
              'Strengthen commentary after existing evidence and sharpen the thesis',
              'Start over and rewrite the whole essay with new commentary',
              'Delete citations so the argument reads as your own'
            ],
            correctAnswer: 1,
            explanation: 'At this stage, improving commentary and thesis clarity yields the biggest rubric gain. More quotes without analysis rarely helps.'
          },
          {
            question: 'Which sentence best demonstrates synthesis sophistication?',
            options: [
              '"Source A says one thing about reform and Source B says another, and both of them raise points worth considering."',
              '"Sources A and C support immediate reform, but Source F\'s caution about implementation suggests a phased model that keeps urgency."',
              '"Many of the sources are interesting, and each one offers a different and valuable perspective on reform that all readers should know about."',
              '"I used four sources in this essay, Sources A, C, D, and F, because they were the most relevant to reform."'
            ],
            correctAnswer: 1,
            explanation: 'This response integrates multiple sources, acknowledges the tension between them, and resolves it through a qualified policy inference. That is sophisticated synthesis reasoning. The others note disagreement without resolving it, praise the sources in general, or simply list which sources were used.'
          }
        ]
      }
    }
  ]
};
