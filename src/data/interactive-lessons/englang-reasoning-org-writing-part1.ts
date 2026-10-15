export const englangReasoningOrgWritingPart1Data = {
  topicSlug: 'englang-reasoning-org-writing',
  sections: [
    {
      id: 'elrow1-intro',
      type: 'text' as const,
      content: `
# 🧱 Reasoning and Organization in Writing

**Part 1 of 7 — Building a Coherent Line of Reasoning in Your Essays**

---

## What AP Readers Want

High-scoring essays show a clear **line of reasoning**:
- Thesis establishes direction
- Each paragraph advances that direction
- Transitions show logic between points
- Counterargument is addressed
- Conclusion reinforces implications

---

## Practical Essay Blueprint

| Section | Goal |
|--------|------|
| Intro + thesis | Frame issue and present defensible claim |
| Body 1 | Strongest reason + evidence + commentary |
| Body 2 | Second reason + evidence + commentary |
| Body 3 | Counterargument + rebuttal (or qualification) |
| Conclusion | Synthesize reasoning and stakes |

### Topic Sentence Formula
\`\`\`
[Reason statement] + [link to thesis]
\`\`\`

Example:
"Because attendance policies shape both learning and equity, districts should replace punitive absence penalties with support-based interventions."

> 🔑 Topic sentences are mini-claims. If they are vague, your reasoning chain weakens.
      `
    },
    {
      id: 'elrow1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature most clearly indicates a coherent line of reasoning?',
            options: [
              'Frequent rhetorical questions that keep readers engaged throughout',
              'Paragraphs that each connect back to and develop the thesis',
              'Advanced vocabulary used consistently in every sentence',
              'A long introduction that previews every point in detail'
            ],
            correctAnswer: 1,
            explanation: 'Coherence depends on logical development: each paragraph must perform a clear argumentative function connected to the thesis. Style alone cannot substitute for reasoning structure.'
          },
          {
            question: 'What is the best role of a counterargument paragraph?',
            options: [
              'To demonstrate fairness by giving the opposing view the final word',
              'To show awareness of complexity and strengthen your position',
              'To introduce a second thesis that replaces the original claim',
              'To list opposing examples without ever needing to respond to them'
            ],
            correctAnswer: 1,
            explanation: 'Addressing opposition shows maturity and strengthens credibility. Effective rebuttal demonstrates why your position remains stronger after considering alternatives.'
          }
        ]
      }
    },
    {
      id: 'elrow1-content',
      type: 'text' as const,
      content: `
## Transition Logic

Use transitions to mark reasoning relationships:

| Relationship | Transition Examples |
|-------------|---------------------|
| Addition | furthermore, moreover, in addition |
| Contrast | however, by contrast, nevertheless |
| Cause | because, since, given that |
| Effect | therefore, consequently, thus |
| Qualification | admittedly, while, to be sure |
| Emphasis | indeed, notably, crucially |

### Paragraph Coherence Moves
- Repeat core terms (e.g., equity, access, sustainability)
- Use pronouns with clear antecedents
- End paragraph by linking to thesis
- Open next paragraph with logical continuation

## Common Organization Problems

| Problem | Revision Move |
|--------|----------------|
| Paragraph drift (off-topic) | Rewrite topic sentence around claim |
| Evidence pile-up | Add commentary after each piece |
| Abrupt jumps | Insert transition + logic sentence |
| Weak conclusion | Synthesize implications, do not summarize only |

### Conclusion Upgrade Formula
\`\`\`
Restate thesis with nuance -> synthesize key reasons -> explain stakes/implications
\`\`\`
      `
    },
    {
      id: 'elrow1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A sentence that states the paragraph's reason and links it to the thesis is a _______ sentence.

2) The transition "therefore" signals a cause-and-_______ relationship.

3) A counterargument paragraph should include a _______ or qualification to strengthen your position.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['topic', 'effect', 'rebuttal'],
        hint1: 'It starts the paragraph claim.',
        hint2: 'What follows from prior reasons.',
        hint3: 'You respond to opposition with this.',
        explanation: 'Topic sentence frames reasoning. "Therefore" indicates effect/conclusion. Counterarguments need rebuttal or qualification.'
      }
    },
    {
      id: 'elrow1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Best Organizational Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If paragraph 2 feels disconnected from thesis, the first fix is to revise the ___',
            options: ['Topic sentence', 'Concluding paragraph', 'Supporting quotations', 'Introduction hook']
          },
          {
            label: '"Admittedly" followed by "however" typically signals ___',
            options: ['Concession then rebuttal', 'Evidence then commentary', 'Cause then effect', 'Problem then solution']
          },
          {
            label: 'A strong conclusion should primarily ___',
            options: ['Synthesize reasoning and stakes', 'Introduce the strongest new evidence', 'Restate the thesis word for word', 'Summarize each body paragraph in turn']
          }
        ],
        correctAnswers: ['Topic sentence', 'Concession then rebuttal', 'Synthesize reasoning and stakes'],
        hint1: 'Paragraph focus starts there.',
        hint2: 'Acknowledge then respond.',
        hint3: 'Show why your argument matters.',
        explanation: 'Disconnected paragraph = topic sentence issue. "Admittedly...however" marks concession/rebuttal. Conclusions should synthesize and project implications.'
      }
    },
    {
      id: 'elrow1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Reasoning & Organization in Writing

- Build essay around 2-3 clear reasons, not many shallow points
- Make topic sentences explicit mini-claims tied to thesis
- Use transitions to reveal logic (cause, contrast, qualification)
- Add commentary after each evidence unit
- Include at least one counterargument response
- End with implications: what follows if your claim is accepted?
      `
    },
    {
      id: 'elrow1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student essay has strong evidence but reads like disconnected points. What revision would most improve line of reasoning?',
            options: [
              'Add more quotations so each point has stronger support',
              'Add topic sentences and transitions that show how the claims relate',
              'Combine short sentences into longer, more complex ones',
              'Replace plain words with more advanced vocabulary'
            ],
            correctAnswer: 1,
            explanation: 'The issue is coherence, not evidence quantity. Topic sentences and transitions make the argument\'s logical structure explicit and help readers follow the reasoning chain.'
          },
          {
            question: 'Which paragraph order best supports a persuasive line of reasoning?',
            options: [
              'Counterargument → conclusion → reasons → thesis',
              'Thesis → reasons → counterargument → conclusion',
              'Thesis → conclusion → reasons → counterargument',
              'Conclusion → thesis → counterargument → reasons'
            ],
            correctAnswer: 1,
            explanation: 'Stating the thesis first, developing it with reasons, then testing it against a counterargument (and rebutting it) before concluding creates progressive logic. The other orders bury the thesis, conclude before the support arrives, or end on the opposition, which breaks the line of reasoning AP readers value.'
          }
        ]
      }
    }
  ]
};
