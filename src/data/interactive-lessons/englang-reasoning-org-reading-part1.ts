export const englangReasoningOrgReadingPart1Data = {
  topicSlug: 'englang-reasoning-org-reading',
  sections: [
    {
      id: 'elror1-intro',
      type: 'text' as const,
      content: `
# 🧠 Reasoning and Organization in Reading

**Part 1 of 7 — Following the Line of Reasoning in Complex Passages**

---

## What Is a Line of Reasoning?

A **line of reasoning** is the logical sequence by which a writer moves from claim to conclusion.

Think of it as an argument chain:
\`\`\`
Claim A -> Reason 1 -> Evidence -> Inference -> Reason 2 -> Counterargument -> Rebuttal -> Conclusion
\`\`\`

If any link is weak or missing, the argument becomes less persuasive.

---

## Common Organizational Patterns

| Pattern | How It Works | Signals |
|--------|--------------|---------|
| **General to specific** | Opens broad, narrows to example/case | "For instance," "Specifically" |
| **Specific to general** | Starts with case, derives broader claim | "Therefore," "Thus" |
| **Problem-solution** | Defines problem, proposes fix | "The issue is..." "To address this..." |
| **Cause-effect** | Explains causes and consequences | "Leads to," "results in" |
| **Compare-contrast** | Weighs alternatives | "Whereas," "however," "in contrast" |
| **Concession-rebuttal** | Acknowledges other side, then counters | "Although," "while," "nevertheless" |

> 🔑 AP reading questions often ask what a paragraph "primarily does." That is a function question about organization, not a content-summary question.
      `
    },
    {
      id: 'elror1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A paragraph begins, "Although critics argue the policy is costly, long-term outcomes show clear savings." What is the paragraph doing?',
            options: [
              'Introducing background that the rest of the paragraph explains',
              'Conceding and rebutting a counterargument',
              'Narrating an example that illustrates the costs of the policy',
              'Defining a key term before the main claim is presented'
            ],
            correctAnswer: 1,
            explanation: '"Although critics argue..." signals concession, and "long-term outcomes show..." signals rebuttal. The paragraph acknowledges opposition and then counters it with evidence.'
          },
          {
            question: 'Which best describes line of reasoning?',
            options: [
              'The number and variety of rhetorical devices used in a passage',
              'The logical sequence of claims and support that advances an argument',
              'The shift in emotional tone from the opening to the conclusion',
              'The chronological order in which a writer recounts events from the past'
            ],
            correctAnswer: 1,
            explanation: 'Line of reasoning is the argument\'s logic in motion: how each idea builds toward the conclusion. AP scoring rewards clear, coherent reasoning rather than isolated points.'
          }
        ]
      }
    },
    {
      id: 'elror1-content',
      type: 'text' as const,
      content: `
## Tracking Reasoning at the Paragraph Level

Use this checklist as you read each paragraph:
1. What claim is made here?
2. What evidence appears?
3. How does this paragraph connect to the previous one?
4. What function does it serve in the whole argument?

### Paragraph Functions

| Function | Description |
|----------|-------------|
| **Set-up/context** | Introduces issue, stakes, or background |
| **Main claim** | States central thesis or sub-claim |
| **Evidence development** | Provides data, examples, or testimony |
| **Counterargument** | Presents opposing view fairly |
| **Rebuttal** | Refutes or qualifies the opposing view |
| **Synthesis/turn** | Integrates points or shifts direction |
| **Call to action** | Urges audience toward specific response |

### Cohesion and Logical Flow

Strong passages use:
- Repeated key terms for continuity
- Pronoun reference clarity
- Transitional phrases showing relationships
- Topic sentences that preview paragraph roles

Weak passages often:
- Jump between points without connection
- Offer evidence without interpretation
- Introduce counterarguments but never rebut them
      `
    },
    {
      id: 'elror1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The logical chain that moves an argument from claim to conclusion is called the line of _______.

2) A paragraph that acknowledges the opposing side is introducing a counter_______.

3) Words like "however" and "in contrast" often signal a _______-contrast structure.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['reasoning', 'argument', 'compare'],
        hint1: 'Claim -> evidence -> conclusion chain.',
        hint2: 'The other side of the issue.',
        hint3: 'Comparing similarities and differences.',
        explanation: 'Line of reasoning tracks logic. Counterargument introduces opposition. "However" often marks compare-contrast shifts.'
      }
    },
    {
      id: 'elror1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Structure** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A passage opens with a broad statement about democracy, then analyzes one Supreme Court case. This is ___',
            options: ['General to specific', 'Specific to general', 'Cause and effect', 'Chronological order']
          },
          {
            label: 'A writer presents three policy options and weighs pros/cons of each. This is primarily ___',
            options: ['Compare and contrast', 'Chronological order', 'Cause and effect', 'Extended definition']
          },
          {
            label: 'The sentence "Therefore, stricter disclosure laws are necessary" functions as ___',
            options: ['A conclusion from prior reasoning', 'Background context for the issue', 'Evidence supporting a later claim', 'A concession to the opposing side']
          }
        ],
        correctAnswers: ['General to specific', 'Compare and contrast', 'A conclusion from prior reasoning'],
        hint1: 'Starts broad, then narrows to one case.',
        hint2: 'Multiple alternatives being weighed.',
        hint3: '"Therefore" marks logical conclusion.',
        explanation: 'Broad to case = general-specific. Weighing options = compare-contrast. "Therefore" indicates inference/conclusion.'
      }
    },
    {
      id: 'elror1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Reasoning & Organization (Reading)

- Before answering questions, outline paragraph functions quickly in margins
- For "purpose of paragraph" questions, think role in argument, not topic summary
- Track transitions: they reveal logical relationships
- Look for concession-rebuttal pairs; AP frequently tests these
- If a question asks how evidence supports claim, identify the inference connecting them
- Practice recognizing patterns (problem-solution, cause-effect, compare-contrast)
      `
    },
    {
      id: 'elror1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a passage, paragraph 3 presents critics concerns, and paragraph 4 begins, "Yet these objections overlook the long-term savings." What is paragraph 4 doing?',
            options: [
              'Introducing a new topic unrelated to the critics\' concerns',
              'Rebutting the counterargument to restore the line of reasoning',
              'Concluding the essay with a call to action on savings',
              'Conceding that the critics\' objections are mostly correct'
            ],
            correctAnswer: 1,
            explanation: 'The "Yet" transition signals a turn from counterargument to rebuttal. Paragraph 4 directly responds to paragraph 3 and restores the writer\'s main line of reasoning.'
          },
          {
            question: 'Why is identifying paragraph function useful on AP Lang multiple-choice?',
            options: [
              'It helps you memorize key quotations from each paragraph faster',
              'It shows how each paragraph advances the author\'s purpose',
              'It lets you skip close reading of each paragraph\'s sentences',
              'It mainly helps with poetry passages'
            ],
            correctAnswer: 1,
            explanation: 'Many AP questions ask about rhetorical function. Knowing whether a paragraph provides evidence, concession, rebuttal, or transition helps you answer purpose and organization questions accurately.'
          }
        ]
      }
    }
  ]
};
