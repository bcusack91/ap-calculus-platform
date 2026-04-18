export const englangStyleReadingPart1Data = {
  topicSlug: 'englang-style-reading',
  sections: [
    {
      id: 'elsr1-intro',
      type: 'text' as const,
      content: `
# ✍️ Style in Reading

**Part 1 of 7 — How Diction and Syntax Shape Meaning and Effect**

---

## What Is Style?

**Style** is the distinctive way a writer uses language. On AP Lang, style analysis focuses on how choices in diction and syntax advance purpose.

| Style Element | Questions to Ask |
|--------------|------------------|
| **Diction** (word choice) | Are words formal, colloquial, technical, charged, concrete, abstract? |
| **Syntax** (sentence structure) | Are sentences short/long, varied, parallel, periodic, fragmented? |
| **Imagery** | What sensory language appears, and to what effect? |
| **Tone** | What attitude does the language convey? |
| **Figurative language** | Why use metaphor, analogy, irony, etc.? |

> 🔑 On AP Lang, style is never decorative only. Every stylistic choice should be tied to rhetorical purpose.

---

## Diction Categories

| Diction Type | Example | Likely Effect |
|-------------|---------|---------------|
| **Formal** | "The proposal warrants immediate implementation." | Authority, seriousness |
| **Colloquial** | "This plan just does not work in real life." | Accessibility, relatability |
| **Technical** | "Photosynthetic efficiency declines under low PAR levels." | Precision, expertise |
| **Loaded/charged** | "This reckless policy endangers families." | Emotional urgency |
| **Concrete** | "Rusting pipes leaked brown water into kitchen sinks." | Vividness, specificity |
| **Abstract** | "Justice requires structural accountability." | Conceptual framing |
      `
    },
    {
      id: 'elsr1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why does AP style analysis focus on diction and syntax?',
            options: [
              'Because grammar rules are the only thing that matters',
              'Because language choices shape tone, audience response, and rhetorical effectiveness',
              'Because AP questions never ask about argument',
              'Because style is independent from purpose'
            ],
            correctAnswer: 1,
            explanation: 'Diction and syntax are tools that create tone and emphasis, guide interpretation, and influence audience response. AP analysis requires explaining how those choices serve purpose.'
          },
          {
            question: 'Which phrase is most clearly loaded diction?',
            options: [
              '"The committee met at 3:00 PM."',
              '"The committee reviewed three budget options."',
              '"The committee pushed through a reckless and dangerous proposal."',
              '"The committee is composed of seven members."'
            ],
            correctAnswer: 2,
            explanation: 'Words like "reckless" and "dangerous" carry strong emotional judgment. This is loaded diction, used to influence audience perception rather than neutrally report facts.'
          }
        ]
      }
    },
    {
      id: 'elsr1-content',
      type: 'text' as const,
      content: `
## Syntax and Rhetorical Effect

### Common Syntactic Moves

| Move | Description | Effect |
|------|-------------|--------|
| **Parallelism** | Repeated grammatical structure | Rhythm, clarity, emphasis |
| **Anaphora** | Repetition at sentence beginnings | Momentum, emotional force |
| **Periodic sentence** | Main clause delayed until end | Suspense, emphasis on final idea |
| **Short sentence after long ones** | Abrupt contrast | Punch, urgency, finality |
| **Rhetorical question** | Asks without expecting answer | Engages reader, provokes reflection |

### Example
"We can postpone reform, we can ignore the warnings, we can pretend nothing is wrong. But we cannot escape the consequences."

- Parallelism + anaphora in first sentence build rhythm and accumulation
- Short final sentence delivers emphatic conclusion

## How to Write Better Analysis

Weak: "The author uses short sentences."

Strong: "After a series of layered periodic sentences, the abrupt declaration 'We cannot wait' punctures abstraction and creates urgency, reinforcing the writer's call for immediate action."

### Reading Checklist for Style Questions
1. Identify specific diction/syntax choices
2. Describe literal effect (tone, pace, emphasis)
3. Explain rhetorical effect on audience
4. Connect to purpose and argument
      `
    },
    {
      id: 'elsr1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Repetition of grammatical structure to create emphasis and rhythm is called _______.

2) When a sentence delays its main clause until the end, it is a _______ sentence.

3) AP style analysis should always connect language choices to rhetorical _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['parallelism', 'periodic', 'purpose'],
        hint1: 'Parallel grammatical form.',
        hint2: 'Main point arrives late.',
        hint3: 'Why the author made the choice.',
        explanation: 'Parallelism repeats structure. Periodic sentences delay the main clause. Analysis must connect style to purpose.'
      }
    },
    {
      id: 'elsr1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Style Move** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"We will work in our schools, in our neighborhoods, in our courts." This primarily uses ___',
            options: ['Parallelism', 'Hyperbole', 'Irony', 'Metonymy']
          },
          {
            label: '"Only after years of warnings, failed negotiations, and public protest did the council act." This is a ___',
            options: ['Periodic sentence', 'Loose sentence', 'Fragment', 'Run-on sentence']
          },
          {
            label: 'Words like "reckless," "outrageous," and "shameful" create ___',
            options: ['Loaded diction and emotional tone', 'Neutral technical precision', 'Detached objectivity', 'Humorous irony']
          }
        ],
        correctAnswers: ['Parallelism', 'Periodic sentence', 'Loaded diction and emotional tone'],
        hint1: 'Repeated phrase structure.',
        hint2: 'Main clause delayed to the end.',
        hint3: 'Emotionally charged word choice.',
        explanation: 'Repeated structure = parallelism. Delayed main clause = periodic. Charged terms = loaded diction.'
      }
    },
    {
      id: 'elsr1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Style in Reading

- Quote specific words/phrases; avoid broad claims like "the diction is good"
- Name the move, then explain the effect, then connect to purpose
- Compare sentence lengths and patterns to analyze pacing and emphasis
- Watch for tone shifts; AP often tests where and why shifts occur
- For MC, eliminate answers that describe a feature without rhetorical effect
- For essays, 2-3 deeply analyzed examples beat a long list of devices
      `
    },
    {
      id: 'elsr1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer uses three long, heavily qualified sentences to explain complexity, then ends with "Act now." What is the likely rhetorical effect?',
            options: [
              'The final short sentence weakens credibility',
              'The abrupt shift to brevity creates urgency and emphasis after sustained complexity',
              'There is no meaningful effect',
              'The pattern is accidental and irrelevant'
            ],
            correctAnswer: 1,
            explanation: 'The contrast in sentence length is deliberate. After nuanced explanation, the short imperative lands with force, making the call to action more memorable and urgent.'
          },
          {
            question: 'Which AP analysis sentence is strongest?',
            options: [
              '"The author uses diction."',
              '"The language is powerful and effective."',
              "\"By describing the policy as 'reckless' and 'dangerous,' the writer frames opponents as irresponsible, steering readers toward support for stricter regulation.\"",
              '"The syntax is varied."'
            ],
            correctAnswer: 2,
            explanation: 'This option names specific language, explains connotation, and ties the effect to audience persuasion and purpose. It moves beyond identification to analysis, which AP rewards.'
          }
        ]
      }
    }
  ]
};
