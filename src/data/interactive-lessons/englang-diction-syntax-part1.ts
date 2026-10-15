export const englangDictionSyntaxPart1Data = {
  topicSlug: 'englang-diction-syntax',
  sections: [
    {
      id: 'elds1-intro',
      type: 'text' as const,
      content: `
# 🧩 Diction and Syntax

**Part 1 of 7 — The Two Core Levers of Rhetorical Style**

---

## Diction: Choosing the Right Words

**Diction** is deliberate word choice. Word-level decisions shape clarity, tone, and persuasion.

### Diction Dimensions

| Dimension | Spectrum | Impact |
|----------|----------|--------|
| **Register** | Formal <-> informal | Signals audience and context |
| **Connotation** | Positive <-> neutral <-> negative | Influences emotional response |
| **Specificity** | Abstract <-> concrete | Controls vividness and precision |
| **Technicality** | Everyday <-> specialized jargon | Signals expertise, may limit accessibility |

### Example
- Neutral: "The policy changed."
- Charged: "The policy was dismantled."
- Positive spin: "The policy was modernized."

Same event, different connotations.

---

## Syntax: Arranging the Words

**Syntax** is sentence structure. It controls pacing, emphasis, and coherence.

| Syntax Choice | Effect |
|--------------|--------|
| Short sentence | Urgency, punch, emphasis |
| Long periodic sentence | Complexity, suspense, control |
| Parallel structure | Rhythm, memorability |
| Inversion | Emphasis on unusual element |
| Fragment (intentional) | Dramatic effect |
| Repetition | Reinforcement, momentum |

> 🔑 Diction answers "which words?" Syntax answers "in what arrangement?" Together they produce rhetorical force.
      `
    },
    {
      id: 'elds1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the best definition of connotation?',
            options: [
              'The dictionary definition a word has, apart from any context',
              'The associations a word carries beyond its literal meaning',
              'The grammatical role a word plays within a particular sentence',
              'The historical origin of a word and how its spelling developed'
            ],
            correctAnswer: 1,
            explanation: 'Connotation refers to implied associations and emotional coloring beyond denotation. For example, "slim" and "skinny" may denote similar body size but carry different connotations.'
          },
          {
            question: 'A writer uses three long explanatory sentences followed by "Enough." The final one-word sentence primarily creates:',
            options: [
              'Confusion about what the writer means',
              'Emphasis through abrupt contrast in length',
              'Technical precision and a detached, neutral tone',
              'A shift from argument into narration'
            ],
            correctAnswer: 1,
            explanation: 'The sudden contraction from long syntax to a one-word sentence creates contrast and emphasis. It signals emotional intensity and decisiveness.'
          }
        ]
      }
    },
    {
      id: 'elds1-content',
      type: 'text' as const,
      content: `
## Analyzing Diction and Syntax Together

Strong AP analysis shows how these features interact.

### Example Passage
"For decades, we postponed difficult choices, deferred hard truths, and disguised structural failures as temporary setbacks. Today, that pretense ends."

- Diction: "postponed," "deferred," "disguised" imply avoidance
- Parallel syntax (three-part series) accumulates indictment
- Short final sentence delivers finality and urgency

### Common Pairings and Effects

| Diction + Syntax | Typical Rhetorical Effect |
|------------------|--------------------------|
| Concrete diction + short clauses | Immediacy, visceral impact |
| Abstract diction + long periodic syntax | Intellectual authority, reflective depth |
| Loaded diction + repetition | Intensified emotional pressure |
| Formal diction + balanced syntax | Credibility and control |

## Avoiding Superficial Analysis

Weak: "The author uses diction and syntax to persuade."

Strong: "By pairing charged verbs ('exploit,' 'abandon') with clipped declaratives, the writer casts institutional actors as morally culpable and pushes readers toward urgent reform."

### Quick AP Checklist
1. Identify specific word patterns (charged, technical, concrete)
2. Identify sentence patterns (length, repetition, structure)
3. Explain audience effect
4. Link to purpose
      `
    },
    {
      id: 'elds1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Diction refers to word _______.

2) Syntax refers to sentence _______.

3) A three-part repeated grammatical sequence is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['choice', 'structure', 'parallelism'],
        hint1: 'Which words are selected.',
        hint2: 'How those words are arranged.',
        hint3: 'Same grammatical pattern repeated.',
        explanation: 'Diction = choice of words. Syntax = sentence structure. Repeated grammar = parallelism.'
      }
    },
    {
      id: 'elds1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Diagnose the Effect** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Replacing "asked" with "demanded" changes diction by adding ___',
            options: ['A more forceful connotation', 'A more neutral connotation', 'A more technical denotation', 'A more polite, formal register']
          },
          {
            label: 'A long sentence that postpones the main clause until the end is a ___ sentence',
            options: ['Periodic', 'Loose', 'Cumulative', 'Compound']
          },
          {
            label: 'Formal diction plus balanced syntax most often projects ___',
            options: ['Authority and composure', 'Casual, conversational ease', 'Urgency and alarm', 'Irony and detachment']
          }
        ],
        correctAnswers: ['A more forceful connotation', 'Periodic', 'Authority and composure'],
        hint1: 'Demanding is stronger than asking.',
        hint2: 'Main clause delayed.',
        hint3: 'Controlled language builds credibility.',
        explanation: '"Demanded" intensifies connotation. Delayed main clause = periodic. Formal balance projects authority.'
      }
    },
    {
      id: 'elds1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Diction and Syntax

- Pair diction and syntax in your analysis; they are strongest together
- Quote short, high-impact words rather than long blocks
- Note sentence-length contrasts for pacing/emphasis analysis
- Use precise terms: periodic, parallelism, anaphora, loaded diction, concrete imagery
- Explain effect on audience and purpose every time
- Quality beats quantity: 2 strong analyses > 8 vague device labels
      `
    },
    {
      id: 'elds1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A writer describes pollution using words like "poisoned," "choked," and "scarred," then follows with short commands: "Look. Listen. Act." What is the combined rhetorical effect?',
            options: [
              'Neutral diction and long sentences that create detachment',
              'Charged diction and clipped imperatives that create urgency',
              'Technical diction and precise syntax that signal objectivity',
              'Ironic diction and playful fragments that create humor'
            ],
            correctAnswer: 1,
            explanation: 'The diction is emotionally charged and negative, framing pollution as active harm. The short imperative syntax accelerates pace and pushes readers toward immediate response.'
          },
          {
            question: 'Which analysis best meets AP expectations?',
            options: [
              '"The writer uses formal diction and periodic syntax, which are two common rhetorical devices in persuasive writing."',
              '"The passage is very well written and persuasive because its words and sentences sound formal and important."',
              '"Through formal diction and periodic syntax, the writer delays key claims to build anticipation and project authority."',
              '"The writer uses many long sentences and big words to show that the topic is serious and complicated."'
            ],
            correctAnswer: 2,
            explanation: 'This response names specific choices and explains how they produce rhetorical effect tied to argument control. The others only label devices, praise the writing in vague terms, or describe sentence length without explaining an effect, so they fall short of the precision and linkage AP analysis requires.'
          }
        ]
      }
    }
  ]
};
