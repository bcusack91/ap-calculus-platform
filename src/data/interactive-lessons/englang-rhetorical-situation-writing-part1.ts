export const englangRhetoricalSituationWritingPart1Data = {
  topicSlug: 'englang-rhetorical-situation-writing',
  sections: [
    {
      id: 'elrsw1-intro',
      type: 'text' as const,
      content: `
# 🧭 Rhetorical Situation in Writing

**Part 1 of 7 — Making Deliberate Choices for Audience, Purpose, and Context**

---

## Writing Is Situation-Dependent

Strong AP writing is not just "good prose." It is prose tailored to a rhetorical situation.

Before writing, ask:
- Who is my audience?
- What is my purpose?
- What is the context/exigence?
- What tone and evidence will this audience trust?

---

## Planning with Rhetorical Situation

| Element | What to Decide as a Writer |
|--------|-----------------------------|
| **Audience** | Knowledge level, values, concerns, likely objections |
| **Purpose** | Persuade, explain, qualify, challenge, propose |
| **Exigence** | Why this argument matters right now |
| **Context** | Social/historical circumstances shaping reception |
| **Persona (voice)** | Credible, fair, confident, urgent, reflective |

### Same Claim, Different Audience
Claim: "Cities should expand public transit."

| Audience | Strategic Choice |
|----------|------------------|
| Taxpayers | Emphasize cost savings, reduced congestion |
| Environmental advocates | Emphasize emissions reduction |
| Business leaders | Emphasize worker mobility and productivity |

> 🔑 Audience adaptation is not changing your principles. It is choosing the most persuasive framing for the people you need to reach.
      `
    },
    {
      id: 'elrsw1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the most important first step before drafting an AP argument essay?',
            options: [
              'Choose advanced vocabulary words',
              'Identify audience, purpose, and exigence',
              'Write the conclusion first',
              'Add as many rhetorical devices as possible'
            ],
            correctAnswer: 1,
            explanation: 'Rhetorical planning comes first. If you do not know who you are addressing and why, your evidence, tone, and organization will be unfocused. Effective writing starts with situational awareness.'
          },
          {
            question: 'A student keeps the same thesis but shifts examples when writing for a different audience. This is best described as:',
            options: [
              'Inconsistency',
              'Audience adaptation',
              'Logical fallacy',
              'Plagiarism'
            ],
            correctAnswer: 1,
            explanation: 'Audience adaptation means selecting framing and evidence that resonate with a specific audience while preserving the core claim. This is a hallmark of effective rhetoric, not inconsistency.'
          }
        ]
      }
    },
    {
      id: 'elrsw1-content',
      type: 'text' as const,
      content: `
## Turning Situation into Structure

### Practical Prewriting Template
1. **Thesis**: What exactly do I claim?
2. **Audience profile**: What does this audience value or resist?
3. **Evidence plan**: Which examples/statistics will they trust?
4. **Counterargument**: What objection is most likely?
5. **Tone plan**: Measured, urgent, conciliatory, assertive?

### Sample Situation Response
Prompt: Should schools ban phones in class?

- Audience: school board and families
- Purpose: persuade toward a partial phone ban with instructional exceptions
- Context: rising distraction + equity concerns
- Strategy:
  - Use local classroom data (logos)
  - Acknowledge family emergency concerns (concession)
  - Propose structured exception policy (rebuttal + compromise)

## Common Writing Mistakes

| Mistake | Consequence |
|--------|-------------|
| Ignoring audience concerns | Argument feels tone-deaf |
| No context/exigence | Writing feels generic and low stakes |
| Evidence mismatch | Audience distrusts support |
| One-note tone | Essay sounds rigid or simplistic |

### Sophistication Move
Show awareness of constraints:
"While an immediate full ban may overburden underfunded schools, phased implementation with teacher training offers a realistic path forward."

This signals nuanced engagement with real-world context.
      `
    },
    {
      id: 'elrsw1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The urgent issue that makes a writer respond now is the _______.

2) Adapting examples and framing to fit a specific audience is called audience _______.

3) Acknowledging likely objections before responding strengthens rhetorical _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['exigence', 'adaptation', 'effectiveness'],
        hint1: 'The trigger behind the writing.',
        hint2: 'You adapt to audience needs.',
        hint3: 'How well persuasion works.',
        explanation: 'Exigence drives urgency. Audience adaptation tailors strategy. Addressing objections improves effectiveness.'
      }
    },
    {
      id: 'elrsw1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Best Strategic Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Writing to budget-conscious voters, the strongest transit argument is ___',
            options: ['Cost savings and reduced congestion', 'Only moral duty language', 'Technical engineering details only', 'No evidence needed']
          },
          {
            label: 'If your audience is skeptical, an effective tone is often ___',
            options: ['Measured and fair-minded', 'Mocking and dismissive', 'Overly dramatic', 'Purely sentimental']
          },
          {
            label: 'An essay with no discussion of why the issue matters now is weak in ___',
            options: ['Exigence/context', 'Grammar', 'Word count', 'Citation style']
          }
        ],
        correctAnswers: ['Cost savings and reduced congestion', 'Measured and fair-minded', 'Exigence/context'],
        hint1: 'Match argument to what voters prioritize.',
        hint2: 'Skeptics respond better to balance than mockery.',
        hint3: 'Why now? That is exigence.',
        explanation: 'Audience values guide evidence choice. Skeptical audiences need fair tone. Missing urgency means weak exigence/context.'
      }
    },
    {
      id: 'elrsw1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Rhetorical Situation in Writing

- Spend 2-3 minutes planning audience/purpose/context before drafting
- Choose evidence your target audience finds credible
- Include one concession + rebuttal to show nuanced reasoning
- Avoid generic intros; establish stakes and exigence quickly
- Match tone to audience receptivity (hostile audience -> measured tone)
- Sophistication often comes from qualifying claims in real-world context
      `
    },
    {
      id: 'elrsw1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes an argument full of highly technical economic jargon for a general public audience. What is the biggest rhetorical issue?',
            options: [
              'Too much logos',
              'Audience mismatch undermining accessibility and persuasion',
              'Too many transitions',
              'Lack of thesis'
            ],
            correctAnswer: 1,
            explanation: 'Even strong information fails if the audience cannot process it. Effective rhetoric requires matching diction and explanation level to audience knowledge and expectations.'
          },
          {
            question: 'Which opening best demonstrates awareness of exigence?',
            options: [
              '"Pollution has existed for a long time."',
              '"In the past month alone, two local water advisories have left 40,000 residents without safe tap water, making infrastructure reform urgent."',
              '"This essay will discuss water."',
              '"People have opinions about infrastructure."'
            ],
            correctAnswer: 1,
            explanation: 'This opening establishes immediate stakes, specific context, and urgency. It gives a clear reason the argument matters now, which is exactly what exigence does.'
          }
        ]
      }
    }
  ]
};
