export const englangSynthesisPart1Data = {
  topicSlug: 'englang-synthesis',
  sections: [
    {
      id: 'elsyn1-intro',
      type: 'text' as const,
      content: `
# 🧷 Synthesis Writing

**Part 1 of 7 — Combining Multiple Sources into One Coherent Argument**

---

## What Is Synthesis?

In AP Lang, **synthesis** means building your own argument by integrating information from multiple provided sources.

You are not summarizing each source separately. You are:
1. Taking a defensible position
2. Selecting relevant source evidence
3. Combining sources to support your line of reasoning
4. Explaining your own analysis between source references

> 🔑 Sources are tools, not substitutes for your thinking.

---

## Synthesis vs Summary

| Summary | Synthesis |
|--------|-----------|
| Reports what each source says | Combines source ideas to advance YOUR claim |
| Source-by-source organization | Claim-driven organization |
| Minimal analysis | Sustained commentary and reasoning |
| "Source A says... Source B says..." | "Given A and C, we can infer..." |

## Core Source Moves

| Move | Example |
|------|---------|
| **Corroborate** | Source B confirms Source A trend |
| **Qualify** | Source D introduces a condition/exception |
| **Complicate** | Source F challenges a simplistic conclusion |
| **Concede** | Acknowledge valid concerns from opposing source |
| **Synthesize** | Combine two sources to make a stronger inference |
      `
    },
    {
      id: 'elsyn1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the biggest difference between summary and synthesis on AP Lang?',
            options: [
              'Summary uses quotations while synthesis does not',
              'Synthesis organizes around your claim and combines source ideas to support reasoning',
              'Summary is always longer than synthesis',
              'Synthesis ignores sources'
            ],
            correctAnswer: 1,
            explanation: 'Synthesis is claim-driven. You use sources as evidence within your own argument structure, rather than reporting each source in isolation.'
          },
          {
            question: 'Which sentence demonstrates true synthesis?',
            options: [
              '"Source A is about schools. Source B is about money."',
              '"Source A says homework helps. Source B says homework hurts."',
              '"While Source A shows gains from structured homework, Source B indicates diminishing returns after 90 minutes, suggesting schools should cap nightly assignments."',
              '"I agree with Source C because it sounds right."'
            ],
            correctAnswer: 2,
            explanation: 'This sentence combines two sources, identifies relationship (qualification), and draws a policy inference. That is synthesis, not summary.'
          }
        ]
      }
    },
    {
      id: 'elsyn1-content',
      type: 'text' as const,
      content: `
## Building a Synthesis Essay

### Step-by-Step Plan
1. Read prompt and define the task precisely
2. Skim sources, marking each source's position and evidence type
3. Group sources by idea (not by source letter)
4. Draft thesis with qualification
5. Build body paragraphs around reasons, integrating 2+ sources per body when possible

### Source Integration Techniques

| Technique | Sentence Pattern |
|----------|------------------|
| Attribute briefly | "As Source C notes,..." |
| Compare sources | "Unlike Source E, Source B suggests..." |
| Pair with commentary | "Source A's data indicates X, which supports..." |
| Use as concession | "Although Source D raises valid concerns..." |

### Common Synthesis Mistakes
- Source parade (one paragraph per source)
- Over-quoting with little analysis
- Misreading source claim
- Using sources without connecting to thesis
- Failing to address counterarguments from sources

## Minimum Source Requirement
AP synthesis requires use of at least **three** sources. Strong essays integrate more where relevant and accurate.

> Better to analyze 3-4 sources deeply than to mention 6 sources superficially.
      `
    },
    {
      id: 'elsyn1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) In synthesis, essays should be organized by _______ rather than by source letter.

2) Combining two sources to draw a stronger inference is to _______ sources.

3) AP synthesis requires at least _______ sources.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['claim', 'synthesize', 'three'],
        hint1: 'Your line of reasoning drives structure.',
        hint2: 'Blend source insights into one argument move.',
        hint3: 'Minimum number required by task.',
        explanation: 'Synthesis is claim-driven. You synthesize sources. AP requires at least three sources.'
      }
    },
    {
      id: 'elsyn1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Stronger Source Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Best paragraph strategy in synthesis essay:',
            options: ['Reason-based paragraphs integrating multiple sources', 'One paragraph per source in source-letter order', 'Only summary of each source', 'No source attribution']
          },
          {
            label: '"Source B supports Source A claim about costs, but Source F qualifies this by showing long-term savings." This is ___',
            options: ['Corroboration plus qualification', 'Narrative sequencing', 'Pure summary', 'Ad hominem']
          },
          {
            label: 'After citing a source, strongest next step is ___',
            options: ['Commentary explaining how evidence advances your thesis', 'Another quote immediately', 'A new unrelated claim', 'End the paragraph']
          }
        ],
        correctAnswers: ['Reason-based paragraphs integrating multiple sources', 'Corroboration plus qualification', 'Commentary explaining how evidence advances your thesis'],
        hint1: 'Organize by your reasoning, not by source list.',
        hint2: 'One source supports, one adds condition.',
        hint3: 'Analysis is where AP points are earned.',
        explanation: 'Strong synthesis integrates sources around claims, uses relationships among sources, and provides commentary after citation.'
      }
    },
    {
      id: 'elsyn1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Synthesis

- Build thesis first, then select sources that serve it
- Group sources by idea clusters before drafting
- Use source attribution efficiently; do not over-quote
- Include at least one source-based concession/rebuttal move
- Keep paragraphs claim-centered, not source-centered
- Always explain source significance with commentary
      `
    },
    {
      id: 'elsyn1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student uses five sources but spends most of essay summarizing each one. Why is this likely low-scoring?',
            options: [
              'Using five sources is too many',
              'Synthesis requires claim-driven integration and analysis, not source-by-source summary',
              'AP prefers only one source',
              'Summary is always penalized automatically'
            ],
            correctAnswer: 1,
            explanation: 'Source quantity does not guarantee quality. AP scoring prioritizes coherent argument and effective source integration with commentary.'
          },
          {
            question: 'Which thesis best fits synthesis expectations?',
            options: [
              '"This topic has many opinions."',
              '"Given evidence of short-term costs (Sources A, C) and long-term gains (Sources D, F), districts should adopt phased transit reform with equity safeguards."',
              '"Source B is interesting."',
              '"I will summarize all sources."'
            ],
            correctAnswer: 1,
            explanation: 'This thesis is specific, qualified, and source-aware. It signals an argumentative path that synthesizes evidence with nuance.'
          }
        ]
      }
    }
  ]
};
