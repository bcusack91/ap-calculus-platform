export const satGrammarPart6Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-gr6-intro',
      type: 'text' as const,
      content: `
# ⚖️ Parallel Structure & Comparisons

**Part 6 of 7 — Parallel Lists, Correlative Conjunctions, Faulty Comparisons**

**Parallel structure** means using the same grammatical form for items in a list, pair, or series.

> ❌ *She likes **hiking**, **swimming**, and **to ride** bikes.*
> ✅ *She likes **hiking**, **swimming**, and **riding** bikes.*

> ❌ *The job requires **creativity**, **dedication**, and **being organized**.*
> ✅ *The job requires **creativity**, **dedication**, and **organization**.*

**Rule:** All items in a series must be in the same form — all nouns, all gerunds, all infinitives, etc.

### Parallel Structure in Pairs
When two elements are joined by **and**, **but**, or **or**, they must match:

> ❌ *The CEO was known for **her vision** and **being decisive**.*
> ✅ *The CEO was known for **her vision** and **her decisiveness**.*
      `
    },
    {
      id: 'sat-gr6-correlative',
      type: 'text' as const,
      content: `
## Correlative Conjunctions

These always come in pairs and demand parallel structure:

| Correlative pair | Example |
|-----------------|---------|
| **both…and** | *Both the teacher **and** the students…* |
| **either…or** | *Either **study** harder **or** accept a lower grade.* |
| **neither…nor** | *Neither the heat **nor** the humidity…* |
| **not only…but also** | *Not only **intelligent** but also **hardworking*** |
| **whether…or** | *Whether by **bus** or by **train**…* |

**Key rule:** What follows each part of the pair must be grammatically identical.

> ❌ *She **not only** sings **but also** is a talented dancer.*
> ✅ *She is **not only** a talented singer **but also** a talented dancer.*
> (noun phrase + noun phrase)

## Faulty Comparisons

Comparisons must compare **like things**.

> ❌ *The climate of Florida is warmer than **New York**.* (comparing climate to a state)
> ✅ *The climate of Florida is warmer than **that of New York**.* (climate to climate)

> ❌ *My essay is longer than **Sarah**.* (essay vs. a person)
> ✅ *My essay is longer than **Sarah's**.* (essay vs. Sarah's essay)

**SAT keywords:** "that of," "those of," possessive forms. These fix faulty comparisons.
      `
    },
    {
      id: 'sat-gr6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Parallel Structure Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The new policy aims to reduce waste, lower costs, and _____.',
            options: ['the improvement of efficiency', 'improve efficiency', 'improving efficiency', 'efficiency will be improved'],
            correctAnswer: 1,
            explanation: 'The pattern is: "reduce…lower…and ___." All items should be base-form verbs: "reduce, lower, and improve."'
          },
          {
            question: 'The cost of living in Tokyo is higher than _____.',
            options: ['most cities', 'most cities are', 'that of most cities', 'they are in most cities'],
            correctAnswer: 2,
            explanation: 'You must compare costs to costs. "That of most cities" refers back to "the cost of living," creating a proper comparison.'
          }
        ]
      }
    },
    {
      id: 'sat-gr6-input1',
      type: 'input-boxes' as const,
      content: `
**Fix the Parallel Structure** 🧮

Rewrite ONLY the underlined/incorrect element to make each sentence parallel.

1) The coach emphasized **speed**, **agility**, and **being strong**. → Type the corrected third item.

2) She would rather **read a book** than **watching television**. → Type the corrected second activity.

3) His paintings are more abstract than **his brother**. → Type the corrected comparison.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['strength', 'watch television', "his brother's"],
        hint1: 'The list has two nouns (speed, agility). The third should also be a noun.',
        hint2: '"Would rather X than Y" — both X and Y must be in the same form (base verb).',
        hint3: 'Compare paintings to paintings. Use a possessive.',
        explanation: '1) "strength" — matches the noun pattern. 2) "watch television" — must be a base verb to match "read." 3) "his brother\'s" — compares his paintings to his brother\'s paintings.'
      }
    },
    {
      id: 'sat-gr6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Parallelism & Comparison Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Not only…but also" requires what on each side?',
            options: ['A comma and a period', 'The same grammatical structure', 'A subject and a verb', 'Two different structures for variety']
          },
          {
            label: 'To compare two cities\' populations properly, you need …',
            options: ['no special phrasing', '"that of" or "those of"', 'a semicolon', 'the subjunctive mood']
          },
          {
            label: 'In a list, mixing gerunds and infinitives is …',
            options: ['encouraged for variety', 'a parallelism error', 'only wrong in formal writing', 'always acceptable']
          }
        ],
        correctAnswers: ['The same grammatical structure', '"that of" or "those of"', 'a parallelism error'],
        hint1: 'Correlative conjunctions demand parallel elements.',
        hint2: 'You must compare population to population, not population to city.',
        hint3: 'All items in a list must use the same grammatical form.',
        explanation: 'Correlative conjunctions demand parallel form. "That of" / "those of" ensures you compare equivalent things. Mixing gerunds and infinitives in a list breaks parallelism.'
      }
    },
    {
      id: 'sat-gr6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Editing** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The volunteers were praised for **their enthusiasm, their dependability, and they were always willing to help**. \nWhich revision fixes the parallelism error?',
            options: ['their enthusiasm, their dependability, and their willingness to help', 'their enthusiasm, their dependability, and for being always willing to help', 'their enthusiasm, dependability, and they were willing to help', 'No change needed'],
            correctAnswer: 0,
            explanation: 'The list should contain three parallel noun phrases: "their enthusiasm, their dependability, and their willingness to help."'
          },
          {
            question: 'The salary of a software engineer in San Francisco is significantly higher than **a teacher in rural Iowa**. \nWhich revision fixes the comparison?',
            options: ['that of a teacher in rural Iowa', 'a teacher in rural Iowa is', 'teachers from rural Iowa', 'No change needed'],
            correctAnswer: 0,
            explanation: 'You must compare salary to salary. "That of a teacher in rural Iowa" refers back to "the salary of," making the comparison logical.'
          }
        ]
      }
    },
    {
      id: 'sat-gr6-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

1. **Parallel structure:** Items in a list or pair must share the same grammatical form.
2. **Correlative conjunctions** (both…and, either…or, not only…but also) require parallel elements after each part.
3. **Faulty comparisons:** Compare like to like — use "that of," "those of," or possessives.
4. **SAT tip:** Read the first item in a list to set the pattern, then check that all remaining items match.
5. **Common trap:** Mixing nouns, gerunds, infinitives, and clauses in a single list.

**Up next:** Review & Mixed Practice →
      `
    }
  ]
};
