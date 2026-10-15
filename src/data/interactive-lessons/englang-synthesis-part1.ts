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
              'Summary uses direct quotations, while synthesis relies only on paraphrase',
              'Synthesis builds your own claim by combining ideas from several sources',
              'Summary covers more sources than synthesis does in the same essay',
              'Synthesis ignores what sources say in favor of personal opinion'
            ],
            correctAnswer: 1,
            explanation: 'Synthesis is claim-driven. You use sources as evidence within your own argument structure, rather than reporting each source in isolation.'
          },
          {
            question: 'Which sentence demonstrates true synthesis?',
            options: [
              '"Source A is about homework and schools, and Source B is about how much time students spend on assignments."',
              '"Source A says homework helps students learn. Source B says homework hurts students by taking up their time."',
              '"Source A shows gains from structured homework, but Source B\'s finding of diminishing returns after 90 minutes suggests a nightly cap."',
              '"I agree with Source C more than the others because its argument about homework sounds the most convincing."'
            ],
            correctAnswer: 2,
            explanation: 'This sentence combines two sources, identifies their relationship (one qualifies the other), and draws a policy inference. That is synthesis, not summary. The others describe sources one at a time, set them side by side without connecting them, or endorse a source without reasoning.'
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
            options: ['Paragraphs built around reasons', 'One paragraph per source, in order', 'A paragraph summarizing every source', 'Sources reserved for the conclusion']
          },
          {
            label: '"Source B supports Source A claim about costs, but Source F qualifies this by showing long-term savings." This is ___',
            options: ['Corroboration and qualification', 'Contradiction and concession', 'Summary and paraphrase', 'Refutation of both earlier sources']
          },
          {
            label: 'After citing a source, strongest next step is ___',
            options: ['Commentary linking it to your thesis', 'A second quotation from that source', 'A transition to the next source', 'A citation in parentheses']
          }
        ],
        correctAnswers: ['Paragraphs built around reasons', 'Corroboration and qualification', 'Commentary linking it to your thesis'],
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
              'Using five sources is more than the rubric allows in one essay',
              'Synthesis needs integration around a claim, not summary',
              'The rubric rewards essays that rely closely on a single source',
              'Readers automatically penalize any summary of a source, however brief'
            ],
            correctAnswer: 1,
            explanation: 'Source quantity does not guarantee quality. AP scoring prioritizes coherent argument and effective source integration with commentary.'
          },
          {
            question: 'Which thesis best fits synthesis expectations?',
            options: [
              '"Transit reform is a topic on which the sources offer many different and sometimes conflicting opinions."',
              '"Given short-term costs shown in Sources A and C and long-term gains in Sources D and F, districts should phase in transit reform."',
              '"Source B makes the most interesting and persuasive argument about transit, so this essay will focus mainly on its claims and evidence."',
              '"This essay will summarize each of the six sources in order, since each offers useful information on transit."'
            ],
            correctAnswer: 1,
            explanation: 'This thesis is specific, qualified, and source-aware. It weighs costs against gains across several sources and commits to a position, signaling an argumentative path that synthesizes evidence with nuance. The others survey opinions, lean on a single source, or promise summary instead of argument.'
          }
        ]
      }
    }
  ]
};
