export const englangEthosPathosLogosPart1Data = {
  topicSlug: 'englang-ethos-pathos-logos',
  sections: [
    {
      id: 'elepl1-intro',
      type: 'text' as const,
      content: `
# ⚖️ Ethos, Pathos, and Logos

**Part 1 of 7 — The Three Appeals in Depth**

---

## The Three Pillars of Persuasion

Aristotle argued that persuasion depends on three types of appeal. Understanding them deeply is essential for AP English Language.

---

### Ethos (Credibility and Character)

Ethos establishes WHY the audience should trust the speaker.

| Ethos Strategy | Example |
|---------------|---------|
| **Credentials** | "As a neurosurgeon with 25 years of experience..." |
| **Shared values** | "Like many of you, I believe every child deserves a quality education..." |
| **Fair-mindedness** | "While my opponents make some valid points..." |
| **Reputation** | A Nobel laureate speaking on physics carries inherent ethos |
| **Tone and style** | Professional, measured language builds credibility |

> 🔑 Ethos can be **established** (existing reputation) or **constructed** (built through the text itself). A writer with no prior reputation can still build ethos through fair, knowledgeable, expert-sounding writing.

---

### Pathos (Emotion)

Pathos appeals to the audience's feelings to move them to action.

| Emotion | Strategy |
|---------|----------|
| **Sympathy** | Vivid stories of individual suffering |
| **Fear** | Describing dire consequences of inaction |
| **Pride** | Appealing to national or cultural identity |
| **Anger** | Highlighting injustice or wrongdoing |
| **Hope** | Painting a vision of a better future |

---

### Logos (Logic and Evidence)

| Evidence Type | Example |
|--------------|---------|
| **Statistics** | "Graduation rates increased by 18% after the program launched" |
| **Expert testimony** | "According to the CDC, vaccinations prevent..." |
| **Historical precedent** | "When Finland reformed its education system in 1970..." |
| **Logical reasoning** | "If A causes B, and B causes C, then A contributes to C" |
| **Analogies** | "Managing a budget is like managing your health..." |
      `
    },
    {
      id: 'elepl1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer with no prior expertise on a topic can still build ethos by:',
            options: [
              'Using emotional stories exclusively',
              'Demonstrating thorough research, fair-mindedness, and knowledgeable tone',
              'Ignoring counterarguments',
              'Using slang and informal language'
            ],
            correctAnswer: 1,
            explanation: 'Ethos can be constructed within the text itself. Through careful research, acknowledging opposing views, and writing with a knowledgeable and measured tone, a writer builds credibility even without prior reputation.'
          },
          {
            question: 'Which of the following uses pathos?',
            options: [
              '"The data clearly shows a 40% reduction in emissions."',
              '"Picture a child sitting alone in an empty house, wondering when a parent will come home."',
              '"Dr. Smith, a leading researcher at MIT, concluded..."',
              '"The population of the city grew by 12% between 2010 and 2020."'
            ],
            correctAnswer: 1,
            explanation: 'The vivid, emotionally charged image of a lonely child is designed to evoke sympathy and concern — this is pathos. The other options use statistics (logos) or expert authority (ethos).'
          }
        ]
      }
    },
    {
      id: 'elepl1-content',
      type: 'text' as const,
      content: `
## How Appeals Work Together

Rarely does an effective argument rely on a single appeal. The strongest writing weaves all three together:

### Example Paragraph
"As a pediatrician who has treated thousands of children [**ethos**], I have seen firsthand how untreated ear infections can lead to permanent hearing loss [**pathos** — fear and concern]. Research from Johns Hopkins shows that children who receive early treatment recover fully 94% of the time [**logos**]. We owe it to our children to fund early screening programs [**pathos** — moral obligation]."

### The Danger of Over-Relying on One Appeal

| Overuse | Risk |
|---------|------|
| Too much ethos | Comes across as arrogant or credential-waving |
| Too much pathos | Seems manipulative; audience distrusts emotional exploitation |
| Too much logos | Feels cold and disconnected; audience disengages |

## Analyzing Appeals on the AP Exam

When you identify an appeal, always follow this pattern:

1. **Name** the appeal (ethos, pathos, logos)
2. **Quote or cite** the specific evidence from the text
3. **Explain** HOW it works on the audience
4. **Connect** it to the writer's PURPOSE

> ⛔ Avoid: "The author uses pathos." (too vague)
> ✅ Better: "The author evokes sympathy by describing the child's isolation, which compels the audience to support the proposed legislation."
      `
    },
    {
      id: 'elepl1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) A Nobel laureate speaking on physics carries _______ ethos (ethos from an existing reputation).

2) An argument that relies too heavily on emotional stories risks seeming _______.

3) When analyzing appeals on the AP exam, always connect the appeal to the writer's _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['established', 'manipulative', 'purpose'],
        hint1: 'Already existing credibility.',
        hint2: 'The audience feels manipulated.',
        hint3: 'Why is the writer making this choice?',
        explanation: 'Established ethos = pre-existing reputation. Too much pathos = manipulative. Always connect to purpose.'
      }
    },
    {
      id: 'elepl1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Appeal** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"When Finland reformed its education system, test scores rose 30% over a decade." This is ___',
            options: ['Logos (historical evidence and data)', 'Pathos (emotional story)', 'Ethos (speaker credibility)', 'None']
          },
          {
            label: '"I understand your concerns — like you, I have children in public school and want the best for them." This builds ___',
            options: ['Ethos (shared values and common ground)', 'Logos (statistical evidence)', 'Pathos (fear)', 'None']
          },
          {
            label: '"Without immediate action, thousands more families will lose their homes this winter." This uses ___',
            options: ['Pathos (fear and urgency)', 'Logos (data)', 'Ethos (credibility)', 'None']
          }
        ],
        correctAnswers: ['Logos (historical evidence and data)', 'Ethos (shared values and common ground)', 'Pathos (fear and urgency)'],
        hint1: 'Historical precedent with statistics.',
        hint2: 'Finding common ground builds trust.',
        hint3: 'Urgency and consequences evoke fear.',
        explanation: 'Finland data = logos. Common ground = ethos. "Thousands will lose homes" = pathos.'
      }
    },
    {
      id: 'elepl1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Ethos, Pathos, Logos

- These appear on EVERY rhetorical analysis question — know them deeply
- Do not just identify the appeal — explain HOW it works and WHY the writer uses it
- Look for appeals WORKING TOGETHER, not in isolation
- Acknowledge when an appeal is weak or when a writer over-relies on one
- Quote the text specifically — vague references earn fewer points
- Connect every observation to the writer's PURPOSE and the AUDIENCE's response
      `
    },
    {
      id: 'elepl1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer argues for stricter food safety regulations. She opens by describing her experience as a former FDA inspector, shares the story of a toddler hospitalized from contaminated food, then cites CDC data showing a 35% increase in food-borne illnesses. This argument is effective because:',
            options: [
              'It uses only logos, which is the strongest appeal',
              'It layers all three appeals — ethos (FDA experience), pathos (sick toddler), and logos (CDC data) — to build a comprehensive case',
              'The emotional story is the only persuasive element',
              'Statistics are all that matter in policy arguments'
            ],
            correctAnswer: 1,
            explanation: 'The argument layers all three Aristotelian appeals: ethos (professional experience), pathos (emotional anecdote), and logos (statistical evidence). This multi-layered approach addresses different facets of persuasion and is strongest when woven together.'
          },
          {
            question: 'On the AP rhetorical analysis essay, which approach will earn the highest score?',
            options: [
              'Listing every rhetorical device you can find in the passage',
              "Analyzing how specific rhetorical choices serve the writer's purpose for the intended audience",
              'Stating your personal opinion on the topic',
              'Summarizing the passage in your own words'
            ],
            correctAnswer: 1,
            explanation: 'The AP rubric rewards analysis of HOW and WHY, not just identification. Connecting specific choices to purpose and audience demonstrates deep rhetorical understanding — which is what earns top scores.'
          }
        ]
      }
    }
  ]
};
