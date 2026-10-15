export const englangDevelopingArgumentsPart1Data = {
  topicSlug: 'englang-developing-arguments',
  sections: [
    {
      id: 'elda1-intro',
      type: 'text' as const,
      content: `
# 🧠 Developing Arguments

**Part 1 of 7 — Moving from Initial Claim to Sophisticated Reasoning**

---

## From Opinion to Argument

An opinion says what you think.
An argument demonstrates WHY your claim should persuade others.

### Argument Development Ladder

| Stage | Description |
|------|-------------|
| **Assertion** | Initial claim stated |
| **Support** | Evidence introduced |
| **Analysis** | Evidence interpreted |
| **Qualification** | Limits/conditions acknowledged |
| **Synthesis** | Counterviews integrated into stronger final position |

> 🔑 High AP scores come from development across stages, not from assertion alone.

---

## Building a Reasoned Position

### Start with a Defensible Thesis
Weak: "Standardized testing is bad."
Strong: "While standardized tests can provide broad benchmarking data, over-reliance on test scores distorts curriculum and should be balanced with performance-based assessment."

### Expand with Reasons
Use 2-3 core reasons:
1. Educational quality effects
2. Equity implications
3. Policy feasibility

### Support with Layered Evidence
- Statistics for scope
- Examples for concreteness
- Counterexample for qualification
- Policy comparison for practicality
      `
    },
    {
      id: 'elda1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What most distinguishes a developed argument from a simple opinion?',
            options: [
              'Longer sentences and more formal, academic-sounding vocabulary throughout',
              'Evidence and analysis that build a coherent line of reasoning',
              'Stronger emotional language that conveys conviction',
              'A confident tone that avoids any qualification'
            ],
            correctAnswer: 1,
            explanation: 'Argument development requires support and reasoning progression: claim -> evidence -> analysis -> qualification. Opinion alone lacks this structure.'
          },
          {
            question: 'Why does qualification improve argument quality?',
            options: [
              'It weakens the thesis by letting the writer avoid commitment',
              'It acknowledges complexity and prevents overstatement',
              'It removes the need to support the claim with evidence',
              'It shifts the essay\'s focus from the claim to the audience'
            ],
            correctAnswer: 1,
            explanation: 'Qualification demonstrates intellectual honesty and nuance. It strengthens credibility by showing awareness of limits and exceptions rather than making absolute claims.'
          }
        ]
      }
    },
    {
      id: 'elda1-content',
      type: 'text' as const,
      content: `
## Development Moves That Raise Scores

### 1. Deepen, Do Not Just Add
Instead of adding many points, deepen fewer points with stronger analysis.

### 2. Use Counterargument Strategically
| Move | Purpose |
|------|---------|
| Concession | Shows fairness |
| Rebuttal | Protects thesis |
| Qualification | Refines claim |

### 3. Connect Paragraphs Logically
End each paragraph by forecasting the next reasoning step.

Example transition:
"If curricular narrowing is one cost of test overuse, equity disparities reveal an even deeper systemic consequence."

### 4. Project Implications
Ask: If my argument is accepted, what follows?
- Policy implications
- Ethical implications
- Social consequences

## Common Development Problems
- Repeating thesis in different words
- Evidence without interpretation
- Counterargument as token mention
- No progression in reasoning
- Ending without implications
      `
    },
    {
      id: 'elda1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Moving from claim to evidence to interpretation builds a line of _______.

2) A nuanced argument often avoids absolute language by using _______.

3) A concession should usually be followed by a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['reasoning', 'qualification', 'rebuttal'],
        hint1: 'Logical chain in argument.',
        hint2: 'Adds conditions/limits.',
        hint3: 'Response that defends your position.',
        explanation: 'Claim-evidence-analysis forms line of reasoning. Qualification adds nuance. Concession is strongest with rebuttal.'
      }
    },
    {
      id: 'elda1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Stronger Development Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Best revision for "Testing is bad" thesis:',
            options: ['A qualified claim with a policy direction', 'An absolute claim stated more forcefully', 'A rhetorical question about testing', 'A statement of how widespread testing is']
          },
          {
            label: 'If paragraph includes data but no explanation, the missing element is ___',
            options: ['Commentary', 'Topic sentence', 'Citation', 'Counterargument']
          },
          {
            label: 'A conclusion that projects policy and ethical consequences shows ___',
            options: ['Depth of development', 'Restatement of thesis', 'Summary of evidence', 'Narrative exposition']
          }
        ],
        correctAnswers: ['A qualified claim with a policy direction', 'Commentary', 'Depth of development'],
        hint1: 'Nuance + direction > blunt assertion.',
        hint2: 'Interpret what the data means.',
        hint3: 'Implications extend reasoning beyond recap.',
        explanation: 'Qualified thesis is stronger. Data needs commentary. Implications signal deeper argument development.'
      }
    },
    {
      id: 'elda1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Developing Arguments

- Focus on depth: 2-3 well-developed reasons are enough
- After each evidence point, add explicit interpretation
- Qualify claims to show complexity and control
- Use concession/rebuttal to strengthen credibility
- Build transitions that show progression, not repetition
- End with implications to demonstrate mature reasoning
      `
    },
    {
      id: 'elda1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student essay has clear thesis and examples but little analysis. Which revision most improves argument development?',
            options: [
              'Add more examples so the thesis has broader support',
              'Add commentary explaining how each example supports the thesis',
              'Rewrite the thesis in more emotional, vivid language',
              'Cut the thesis and let the examples speak for themselves'
            ],
            correctAnswer: 1,
            explanation: 'The missing piece is analysis. Commentary that explains how each example supports the thesis turns examples into reasoning, which is essential for high-scoring development. More examples, a rewritten thesis, or no thesis at all would leave the same gap.'
          },
          {
            question: 'Which thesis is most development-ready?',
            options: [
              '"Technology is bad for society because it takes away jobs, ruins human connection, and makes everyone lazier than before."',
              '"Although automation raises productivity in some sectors, labor policy must pair it with retraining to prevent worker displacement."',
              '"Technology has changed society in many ways since the Industrial Revolution, and it will certainly keep changing society in many more ways in the future."',
              '"People disagree about automation, with some seeing it as helpful and others seeing it as harmful to workers and their families."'
            ],
            correctAnswer: 1,
            explanation: 'This thesis is specific, qualified, and policy-oriented. It contains built-in complexity, making it easier to develop with layered reasons and counterarguments. The others overgeneralize, state an undisputed fact, or report a disagreement without taking a side.'
          }
        ]
      }
    }
  ]
};
