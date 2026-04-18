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
              'Many rhetorical questions',
              'Paragraphs that each connect back to and develop the thesis',
              'Advanced vocabulary in every sentence',
              'A very long introduction'
            ],
            correctAnswer: 1,
            explanation: 'Coherence depends on logical development: each paragraph must perform a clear argumentative function connected to the thesis. Style alone cannot substitute for reasoning structure.'
          },
          {
            question: 'What is the best role of a counterargument paragraph?',
            options: [
              'Ignore opposing views to keep writing concise',
              'Demonstrate awareness of complexity and strengthen your position through rebuttal or qualification',
              'Replace the thesis with a new claim',
              'Add unrelated examples'
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

2) The transition "therefore" signals a logical _______.

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
            options: ['Topic sentence and claim link', 'Title only', 'Font size', 'Conclusion punctuation']
          },
          {
            label: '"Admittedly" followed by "however" typically signals ___',
            options: ['Concession then rebuttal', 'Narrative flashback', 'Definition sequence', 'Cause-effect only']
          },
          {
            label: 'A strong conclusion should primarily ___',
            options: ['Synthesize reasoning and explain stakes', 'Introduce new evidence', 'Repeat intro word-for-word', 'Add unrelated anecdotes']
          }
        ],
        correctAnswers: ['Topic sentence and claim link', 'Concession then rebuttal', 'Synthesize reasoning and explain stakes'],
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
              'Add more quotations only',
              'Insert clear topic sentences and transitions showing relationships among claims',
              'Replace all short sentences with long ones',
              'Use more advanced vocabulary'
            ],
            correctAnswer: 1,
            explanation: 'The issue is coherence, not evidence quantity. Topic sentences and transitions make the argument-s logical structure explicit and help readers follow the reasoning chain.'
          },
          {
            question: 'Which paragraph order best supports a persuasive line of reasoning?',
            options: [
              'Counterargument first, then random examples, then thesis',
              'Thesis, reason 1, reason 2, counterargument/rebuttal, synthesis conclusion',
              'Only one long paragraph with many ideas',
              'Conclusion first, intro last'
            ],
            correctAnswer: 1,
            explanation: 'This order creates progressive logic: state claim, develop support, test against opposition, and synthesize implications. It reflects coherent argumentative structure AP readers value.'
          }
        ]
      }
    }
  ]
};
