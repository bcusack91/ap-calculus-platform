export const actRhetoricalPart5Data = {
  topicSlug: 'act-english-rhetorical-act',
  sections: [
    {
      id: 'act-rh5-intro',
      type: 'text' as const,
      content: `
# ✂️ Sentence Combining & Revision

**Part 5 of 7 — Combining Short Sentences, Eliminating Wordiness & Improving Flow**

The ACT frequently asks you to **combine short, choppy sentences** into a single, smoothly flowing sentence. It also tests your ability to **eliminate wordiness** without losing meaning.

**Why This Matters:**
- Short, repetitive sentences make writing sound immature.
- Wordy sentences obscure the point and waste the reader's time.
- The ACT rewards clear, fluent writing that communicates efficiently.

**Two Core Skills:**

| Skill | What You Do |
|-------|-------------|
| **Combining** | Merge two or more short sentences into one clear sentence |
| **Trimming** | Remove unnecessary words while keeping the full meaning |

**Combining Methods:**
1. **Subordination** — Make one idea a dependent clause: *"Although the trail was steep, hikers enjoyed the view."*
2. **Coordination** — Join equal ideas with a conjunction: *"The trail was steep, but hikers enjoyed the view."*
3. **Appositive phrases** — Rename a noun inline: *"Dr. Lee, a marine biologist, studies coral reefs."*
4. **Participial phrases** — Use -ing or -ed phrases: *"Running along the shore, she spotted a seal."*
      `
    },
    {
      id: 'act-rh5-combining',
      type: 'text' as const,
      content: `
## Combining Choppy Sentences

**Original (choppy):**
> "The painting is famous. It was created by Monet. It depicts water lilies."

**Combined options:**
- ✅ *"The famous painting by Monet depicts water lilies."* (appositives + trimming)
- ✅ *"Created by Monet, the famous painting depicts water lilies."* (participial phrase)
- ❌ *"The painting is famous and it was created by Monet and it depicts water lilies."* (run-on with repeated "and")

**ACT Approach:**
1. Identify the **main idea** — usually the most important action.
2. Turn the supporting facts into **modifiers**.
3. Check that the combined sentence is **grammatically correct** (no dangling modifiers, no comma splices).

**Another Example:**

**Original:** *"Ada Lovelace was a mathematician. She lived in the 19th century. She is considered the first computer programmer."*

**Best combination:** *"Ada Lovelace, a 19th-century mathematician, is considered the first computer programmer."*

This turns "mathematician" and "19th century" into an appositive phrase, keeping the most important claim ("first computer programmer") as the main clause.
      `
    },
    {
      id: 'act-rh5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sentence Combining** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which best combines: "The volcano erupted in 1980. It destroyed 230 square miles of forest. It was Mount St. Helens."',
            options: [
              'The volcano erupted in 1980 and it destroyed 230 square miles of forest and it was Mount St. Helens.',
              'Mount St. Helens erupted in 1980, destroying 230 square miles of forest.',
              'In 1980, a volcano that was Mount St. Helens erupted and then 230 square miles of forest was destroyed.',
              'The volcano, Mount St. Helens, it erupted in 1980 and destroyed 230 square miles.'
            ],
            correctAnswer: 1,
            explanation: 'Option B uses a participial phrase ("destroying 230 square miles") and puts the name up front, creating a concise sentence. Option A chains "and" awkwardly. C and D are grammatically clunky.'
          },
          {
            question: 'Which revision best eliminates wordiness? "It is important to note that the experiment demonstrated the fact that the hypothesis was correct."',
            options: [
              'It should be noted that the experiment showed the hypothesis was correct.',
              'The experiment demonstrated the fact that the hypothesis was correct.',
              'The experiment confirmed the hypothesis.',
              'It is important to note the experiment confirmed the hypothesis was correct.'
            ],
            correctAnswer: 2,
            explanation: '"The experiment confirmed the hypothesis" conveys the full meaning in five words. The original uses 18 words with padding phrases like "it is important to note that" and "the fact that."'
          }
        ]
      }
    },
    {
      id: 'act-rh5-wordiness',
      type: 'text' as const,
      content: `
## Eliminating Wordiness

**Common Wordy Constructions & Fixes:**

| Wordy | Concise |
|-------|---------|
| *the reason why is that* | *because* |
| *in order to* | *to* |
| *at the present time* | *now* or *currently* |
| *it is necessary that we* | *we must* |
| *despite the fact that* | *although* |
| *in a situation in which* | *when* |
| *make a decision* | *decide* |
| *come to the conclusion* | *conclude* |

**The ACT "Delete" Option:**

Sometimes the most concise answer is **"DELETE the underlined portion."** This happens when:
- The underlined words are entirely redundant.
- Removing them leaves a grammatically complete and meaningful sentence.

**Example:** *"She was very unique in her own way."*
Best fix: *"She was unique."* — "Very" can't modify "unique" (it's absolute), and "in her own way" is implied.

**ACT Tip:** Don't be afraid of the DELETE option. It's correct roughly **15–20%** of the time when it appears.
      `
    },
    {
      id: 'act-rh5-input1',
      type: 'input-boxes' as const,
      content: `
**Trim the Fat** 📝

Replace each wordy phrase with a single word (or two-word phrase).

1) "in order to achieve" → __________ (one word: "to" + a verb, or just "to")
2) "made the decision to" → __________ (past tense, one word)
3) "despite the fact that" → __________ (one word)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['to achieve', 'decided', 'although'],
        hint1: '"In order to" always simplifies — remove "in order."',
        hint2: '"Made the decision to" = simply performing the decision in one word.',
        hint3: '"Despite the fact that" is a four-word version of a common conjunction.',
        explanation: '"In order to achieve" → "to achieve." "Made the decision to" → "decided." "Despite the fact that" → "although." Each revision cuts words while preserving meaning.'
      }
    },
    {
      id: 'act-rh5-flow',
      type: 'text' as const,
      content: `
## Improving Sentence Flow

Beyond combining and trimming, the ACT tests whether you can **vary sentence structure** for readability.

**Monotonous pattern (all same structure):**
> "The team practiced every day. The team improved their skills. The team won the championship."

**Improved (varied structure):**
> "After practising every day and steadily improving their skills, the team won the championship."

**Techniques for Better Flow:**
- **Vary sentence length:** Mix short punchy sentences with longer, complex ones.
- **Begin sentences differently:** Don't start every sentence with "The" or the same subject.
- **Use parallel structure** when listing actions: *"She planned, rehearsed, and performed."*

**ACT Tip:** If you're torn between two grammatically correct answers, choose the one that **reads more smoothly** when you consider the surrounding sentences.
      `
    },
    {
      id: 'act-rh5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Combining & Revision Strategies** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An appositive phrase is used to …',
            options: ['show contrast between ideas', 'rename or describe a noun inline', 'connect two independent clauses', 'introduce a cause-effect relationship']
          },
          {
            label: 'When two choppy sentences share the same subject, the best approach is usually to …',
            options: ['keep them separate for clarity', 'combine them with a compound predicate', 'add "and" plus repeat the subject', 'insert a semicolon between them']
          },
          {
            label: 'If the ACT offers "DELETE the underlined portion" as an option, it is correct when …',
            options: ['you are unsure of the answer', 'the underlined words are redundant and removal leaves a complete sentence', 'the passage is too short', 'you want to add emphasis']
          }
        ],
        correctAnswers: ['rename or describe a noun inline', 'combine them with a compound predicate', 'the underlined words are redundant and removal leaves a complete sentence'],
        hint1: 'An appositive sits next to a noun and gives more information about it: "Dr. Lee, a biologist, …"',
        hint2: 'Same subject + two actions = compound predicate: "She ran and jumped."',
        hint3: 'DELETE is correct when removing the words leaves the sentence grammatically complete and meaningful.',
        explanation: 'Appositives rename nouns. Sentences with the same subject combine naturally with compound predicates. The DELETE option works when the underlined portion adds no meaning and the sentence stands without it.'
      }
    }
  ]
};
