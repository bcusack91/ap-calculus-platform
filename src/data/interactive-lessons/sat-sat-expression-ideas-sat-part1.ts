export const satExpressionPart1Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei1-intro',
      type: 'text' as const,
      content: `# Effective Language Use

**Part 1 of 7 — Precision and Word Choice**

Expression of Ideas questions test whether you can choose the most **precise**, **effective**, and **appropriate** word or phrase for a given context.

### Precision Over Generality

The SAT rewards **specific** language over **vague** language.

| Vague | Precise |
|---|---|
| "The results were good" | "The results showed a 23% improvement" |
| "The politician talked about problems" | "The senator addressed income inequality" |
| "The thing that happened" | "The earthquake that struck in March" |
| "They did stuff about it" | "The committee implemented new regulations" |

### Tone Matching

Your word choice must match the passage's established tone:

- **Academic/Formal:** "The findings corroborate previous research."
- **Journalistic/Neutral:** "The study supports earlier work."
- **Informal (rare on SAT):** "The study backs up what we already knew."

The SAT will include a correct-but-wrong-tone answer choice as a trap.

### Connotation Awareness

Words can have similar denotations but different connotations:

| Positive | Neutral | Negative |
|---|---|---|
| **thrifty** | economical | **cheap** |
| **confident** | self-assured | **arrogant** |
| **youthful** | young | **immature** |
| **firm** | decided | **stubborn** |

Choose the word whose connotation matches the author's attitude.`
    },
    {
      id: 'ei1-quiz',
      type: 'multiple-choice' as const,
      content: '**Precision Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"The scientist _____ that the species had migrated further north than any previous study had documented." Which verb is most precise?',
            options: ['discovered', 'found out', 'knew about', 'saw'],
            correctAnswer: 0,
            explanation: '"Discovered" implies finding something new and previously unknown, which matches documenting something no previous study had shown. "Found out" is informal, "knew about" implies prior knowledge, and "saw" is too literal.'
          },
          {
            question: 'In a formal academic passage about economic policy, which word best replaces "things got worse"?',
            options: ['conditions deteriorated', 'stuff declined', 'things went downhill', 'the situation got bad'],
            correctAnswer: 0,
            explanation: '"Conditions deteriorated" matches academic tone perfectly. "Stuff" and "things" are informal, and "went downhill" is colloquial.'
          },
          {
            question: 'A passage praises an architect\'s innovative design. Which word best describes her approach? "Her _____ approach to public spaces transformed urban design."',
            options: ['visionary', 'weird', 'radical', 'unusual'],
            correctAnswer: 0,
            explanation: 'The passage praises the architect, so we need a positive connotation. "Visionary" (positive), "weird" (negative), "radical" (neutral-to-negative in this context), "unusual" (neutral but underwhelming). "Visionary" best matches the praising tone.'
          }
        ]
      }    },
    {
      id: 'ei1-text2',
      type: 'text' as const,
      content: `## Deep Dive: Word Choice Mastery

### Worked Example 1: Precision Step-by-Step

| Step | Action |
|---|---|
| **Sentence** | "The experiment _____ the theory that sleep deprivation reduces cognitive performance." |
| **Choices** | A) proved B) confirmed C) showed D) demonstrated |
| **Context** | Academic passage; the theory already existed and the experiment provided supporting evidence |
| **Eliminate** | A) *proved* — too strong (science rarely "proves") |
| **Eliminate** | C) *showed* — vague, doesn't capture the confirmatory relationship |
| **Choose** | B) *confirmed* — matches the idea of supporting an existing theory |
| **Runner-up** | D) *demonstrated* — valid but less precise for confirming a prior theory |

### Worked Example 2: Connotation in Context

| Sentence Context | Word Needed | Right Choice | Wrong Choice (and why) |
|---|---|---|---|
| "The CEO's _____ response calmed investors" | Positive: composed | **measured** ✅ | *slow* ❌ (negative connotation) |
| "Critics called the plan _____" | Negative tone | **reckless** ✅ | *bold* ❌ (positive connotation) |
| "The _____ volunteers worked through the night" | Positive: hard-working | **dedicated** ✅ | *obsessive* ❌ (negative connotation) |

### Common SAT Word Traps

| Trap | Example | Why It's Wrong |
|---|---|---|
| Right meaning, wrong tone | "The data *totally* supports this" | "Totally" is informal |
| Over-specific | "The *octogenarian* speaker" when passage just says "older" | Adds information not in the passage |
| Right tone, wrong meaning | "The findings *corroborate* the decline" | "Corroborate" means confirm — you can't confirm a decline, you can document it |
| Sounds smart but redundant | "She *hypothesized a theory*" | Hypothesis IS a theory — redundant |`
    },
    {
      id: 'ei1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Word Choice Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage criticizes a historical policy. Which word best completes: "The policy\'s _____ consequences became apparent only decades later"?',
            options: ['detrimental', 'bad', 'unfortunate', 'interesting'],
            correctAnswer: 0,
            explanation: '"Detrimental" is formal, precise, and carries the right negative weight for a critical passage. "Bad" is too informal. "Unfortunate" is too mild. "Interesting" is neutral and doesn\'t match the critical tone.'
          },
          {
            question: 'A passage describes a scientist\'s careful experiment. Best fit: "She _____ each variable to ensure accurate results."',
            options: ['controlled', 'handled', 'dealt with', 'managed'],
            correctAnswer: 0,
            explanation: '"Controlled" is the precise scientific term for managing variables in experiments. "Handled" and "dealt with" are too informal. "Managed" is acceptable but less specific to the scientific context.'
          },
          {
            question: 'Which answer choice is a "right meaning, wrong tone" trap? Passage is formal academic writing.',
            options: ['"The findings were pretty significant"', '"The findings were statistically significant"', '"The findings were noteworthy"', '"The findings were consequential"'],
            correctAnswer: 0,
            explanation: '"Pretty" is colloquial/informal. In casual speech, "pretty significant" works, but in formal academic writing, it clashes with the register. The other options all maintain formal tone.'
          }
        ]
      }
    },
    {
      id: 'ei1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Word Choice Check** — Select the best answer.',
      exercise: {
        dropdowns: [
          'Formal passage: "The economy _____ in Q3." [contracted|shrank|went down|got worse]',
          'Positive connotation for a leader: [assertive|aggressive|pushy|bossy]',
          'Scientific precision: "The study _____ a link." [established|found|saw|noticed]',
          'Matching tone: formal passage ≠ [colloquial language|precise vocabulary|technical terms|academic register]'
        ],
        correctAnswers: ['contracted', 'assertive', 'established', 'colloquial language'],
        hint1: '"Contracted" is the formal economic term for decline.',
        hint2: '"Assertive" is positive; the others are negative.',
        hint3: '"Established" carries more scientific weight than "found."',
        explanation: '"Contracted" = formal economic term. "Assertive" = positive leadership connotation. "Established" = precise scientific language. Colloquial language never belongs in formal passages.'
      }
    },
    {
      id: 'ei1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Concept | Key Rule |
|---|---|
| Precision | Specific > vague ("discovered" > "found out") |
| Tone | Match the passage's register (formal/academic) |
| Connotation | Positive/negative must match author's attitude |
| Common traps | Right meaning + wrong tone, over-specific, redundant |
| Strategy | Read the sentence in context, predict your own word, then match |

*Next: Organization & Logical Sequence →*`    }
  ]
};