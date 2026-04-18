export const englangClaimsEvidenceWritingPart1Data = {
  topicSlug: 'englang-claims-evidence-writing',
  sections: [
    {
      id: 'elcew1-intro',
      type: 'text' as const,
      content: `
# 🛠️ Claims and Evidence in Writing

**Part 1 of 7 — Crafting Defensible Claims and Supporting Them Effectively**

---

## Defensible Claims

On AP argument essays, your claim must be:

| Quality | What It Means |
|--------|----------------|
| **Clear** | Readers know exactly what you argue |
| **Debatable** | Reasonable people could disagree |
| **Specific** | Narrow enough to support in one essay |
| **Qualified** | Not absolute when complexity exists |

### Weak vs Strong Claims
- Weak: "Technology is bad."
- Better: "While educational technology improves access, schools should limit passive screen-based instruction to preserve discussion-based learning."

---

## Building an Evidence Set

Use a balanced evidence mix:

| Evidence Type | Best Use |
|--------------|----------|
| Historical example | Show precedent/pattern |
| Current event | Show relevance and urgency |
| Research/statistics | Establish measurable support |
| Hypothetical scenario | Test logic of policy outcomes |
| Literary/cultural reference | Add conceptual depth |

> 🔑 AP readers reward evidence that is **specific and explained**, not just dropped into paragraphs.
      `
    },
    {
      id: 'elcew1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which claim is most defensible for an AP argument essay?',
            options: [
              '"All social media is evil and should be banned immediately everywhere."',
              '"Social media has both benefits and risks, and schools should teach digital literacy to reduce harm."',
              '"Social media exists."',
              '"People use phones a lot."'
            ],
            correctAnswer: 1,
            explanation: 'This claim is specific, debatable, and qualified. It recognizes complexity and proposes a concrete policy response, which supports nuanced development.'
          },
          {
            question: 'What is the biggest problem with evidence "Everyone I know agrees with me"?',
            options: [
              'It is too formal',
              'It is anecdotal and unrepresentative',
              'It uses a concession',
              'It has too much data'
            ],
            correctAnswer: 1,
            explanation: 'A personal social circle is a narrow sample and cannot support broad claims. AP arguments need representative examples, credible sources, or well-developed reasoning beyond personal consensus.'
          }
        ]
      }
    },
    {
      id: 'elcew1-content',
      type: 'text' as const,
      content: `
## Commentary: The Most Important Step

Evidence does not speak for itself. You must explain:
- Why this evidence matters
- How it supports your claim
- What inference the reader should draw

### Commentary Frame
\`\`\`
Evidence: [specific fact/example]
Interpretation: This demonstrates that...
Connection: Therefore, this supports my claim that...
\`\`\`

## Integrating Counterarguments

Strong AP essays include an opposing view and response.

| Move | Sentence Starter |
|------|------------------|
| Concession | "Admittedly, ..." |
| Qualification | "This concern is valid in cases where..." |
| Rebuttal | "However, this objection overlooks..." |

### Example Paragraph Spine
1. Topic claim
2. Evidence 1 + commentary
3. Evidence 2 + commentary
4. Counterargument + rebuttal
5. Link back to thesis

## Avoiding Common Failures
- Claim too broad to prove
- Evidence list with no analysis
- Repetition of same evidence type
- Counterargument mentioned but never answered
- Conclusion that introduces new evidence
      `
    },
    {
      id: 'elcew1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A claim that avoids absolute language and acknowledges complexity is _______.

2) The explanation that links evidence back to your claim is called _______.

3) "Admittedly" usually signals a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['qualified', 'commentary', 'concession'],
        hint1: 'Not all-or-nothing.',
        hint2: 'Your analytical bridge.',
        hint3: 'Acknowledging part of the opposing view.',
        explanation: 'Qualified claims show nuance. Commentary connects evidence to argument. "Admittedly" signals concession.'
      }
    },
    {
      id: 'elcew1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Stronger Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Best evidence set for a policy essay on public transit:',
            options: ['City ridership data + budget analysis + commuter case study', 'Only personal opinion', 'Only one anecdote', 'No evidence, just moral language']
          },
          {
            label: 'After presenting evidence, the next strongest move is to add ___',
            options: ['Commentary explaining significance', 'A random quote', 'A new unrelated claim', 'A rhetorical question only']
          },
          {
            label: 'A claim that says "always" and "never" is often rhetorically ___',
            options: ['Vulnerable/overstated', 'Sophisticated', 'Unquestionable', 'Ideal for every topic']
          }
        ],
        correctAnswers: ['City ridership data + budget analysis + commuter case study', 'Commentary explaining significance', 'Vulnerable/overstated'],
        hint1: 'Blend quantitative and contextual evidence.',
        hint2: 'Interpretation is the key AP skill.',
        hint3: 'Absolute claims are easy to attack.',
        explanation: 'Best support is mixed and specific. Commentary is essential. Absolute language weakens defensibility.'
      }
    },
    {
      id: 'elcew1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Claims & Evidence in Writing

- Write a claim that is specific, debatable, and qualified
- Use at least 2-3 distinct evidence types across essay
- Prioritize commentary over evidence-dumping
- Include one meaningful concession/rebuttal sequence
- Use evidence you can explain deeply, not just name-drop
- End each body paragraph by reconnecting to thesis
      `
    },
    {
      id: 'elcew1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student includes four statistics in one paragraph but only one sentence of explanation. Why is this weak?',
            options: [
              'Statistics are never persuasive',
              'Insufficient commentary leaves unclear how evidence supports the claim',
              'Too much ethos',
              'AP forbids numbers in essays'
            ],
            correctAnswer: 1,
            explanation: 'AP readers value analysis. Without commentary, evidence becomes a list rather than an argument. The writer must explain significance, inference, and claim connection.'
          },
          {
            question: 'Which thesis is strongest?',
            options: [
              '"Homework is bad."',
              '"Because moderate practice can reinforce learning but excessive assignments harm sleep and equity, schools should cap nightly homework at grade-specific limits."',
              '"Homework exists in many countries."',
              '"Students and teachers disagree sometimes."'
            ],
            correctAnswer: 1,
            explanation: 'This thesis is nuanced, qualified, and policy-oriented. It acknowledges tradeoffs while proposing a concrete, defensible action.'
          }
        ]
      }
    }
  ]
};
