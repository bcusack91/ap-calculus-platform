export const actEnglishStratPart3Data = {
  topicSlug: 'act-english-strategy-act',
  sections: [
    {
      id: 'act-es3-intro',
      type: 'text' as const,
      content: `
# 🔧 Usage / Mechanics Approach

**Part 3 of 7 — Identifying Error Types, Agreement & Punctuation Rules**

Usage/Mechanics questions have **definite right answers** based on grammar rules. Your approach should be systematic:

**Step 1 — Identify the error type:**
Look at what's underlined. Does it contain a verb? A pronoun? Punctuation? This tells you what rule is being tested.

**Step 2 — Apply the relevant rule:**
- **Verb** → check subject-verb agreement and tense consistency.
- **Pronoun** → check antecedent agreement and case (subjective vs. objective).
- **Punctuation** → check comma rules, apostrophe usage, semicolons.
- **Sentence structure** → check for fragments, run-ons, parallelism.

**Step 3 — Pick the choice that fixes the error without creating a new one.**
      `
    },
    {
      id: 'act-es3-agreement',
      type: 'text' as const,
      content: `
## Subject-Verb Agreement

The #1 grammar rule tested on the ACT. The subject and verb must match in number.

**Common traps:**
- **Prepositional phrase between subject and verb:**
  "The box **of chocolates** ~~are~~ → **is** on the table."
  (Subject = "box," not "chocolates.")

- **Inverted sentence order:**
  "Near the lake ~~stands~~ → **stand** three old oak trees."
  (Subject = "trees," which is plural.)

- **Compound subjects:**
  "Neither the teacher **nor the students** ~~was~~ → **were** ready."
  (With "neither…nor," the verb agrees with the nearer subject: "students.")

**ACT Strategy:** Cross out prepositional phrases mentally. Find the true subject, then check the verb.
      `
    },
    {
      id: 'act-es3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Agreement Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: '"The collection of rare stamps ______ displayed in the museum." Which verb is correct?',
            options: [
              'are',
              'is',
              'were',
              'have been'
            ],
            correctAnswer: 1,
            explanation: 'The subject is "collection" (singular), not "stamps." The correct verb is "is." The prepositional phrase "of rare stamps" is a distractor.'
          },
          {
            question: '"Each of the students ______ required to submit a portfolio." Which verb is correct?',
            options: [
              'are',
              'is',
              'were',
              'have been'
            ],
            correctAnswer: 1,
            explanation: '"Each" is always singular, so the verb must be "is." Don\'t be fooled by "students" in the prepositional phrase.'
          }
        ]
      }
    },
    {
      id: 'act-es3-punctuation',
      type: 'text' as const,
      content: `
## Punctuation Rules

### Commas — The Big Four Uses
1. **Lists:** "I bought apples, oranges, and bananas."
2. **Introductory elements:** "After the movie, we went home."
3. **Non-essential clauses:** "My sister, who lives in Boston, is visiting."
4. **Compound sentences (with FANBOYS):** "I studied hard, but the test was tough."

**Never use a comma to:**
- Separate a subject from its verb: ~~"The dog, ran away."~~
- Join two independent clauses without a conjunction (that's a **comma splice**).

### Semicolons
- Join two **independent clauses** without a conjunction: "I studied hard; the test was still tough."
- Both sides must be complete sentences.

### Colons
- Introduce a list, explanation, or elaboration after an **independent clause**: "She had one goal: win the championship."

### Apostrophes
- **Possession:** "the dog's bone" / "the dogs' bones."
- **Contractions:** "it's" = "it is." "Its" (no apostrophe) = possessive.
      `
    },
    {
      id: 'act-es3-input1',
      type: 'input-boxes' as const,
      content: `
**Punctuation Quick Check** 📝

1) Two independent clauses joined by a comma alone is called a comma __________.
2) "It's" with an apostrophe is short for "it __________."
3) A colon must follow an __________ clause (a clause that can stand alone as a sentence).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['splice', 'is', 'independent'],
        hint1: 'This common comma error "splices" two sentences together incorrectly.',
        hint2: 'The apostrophe signals a contraction — "it" + a short verb.',
        hint3: 'The clause before a colon must be able to stand on its own.',
        explanation: 'A comma splice joins two independent clauses with only a comma. "It\'s" = "it is." A colon follows an independent clause.'
      }
    },
    {
      id: 'act-es3-structure',
      type: 'text' as const,
      content: `
## Sentence Structure Issues

**Fragments:** A group of words that lacks a subject, a verb, or a complete thought.
- ~~"Running through the park on a sunny afternoon."~~ (No subject or main verb.)
- Fix: "She was running through the park on a sunny afternoon."

**Run-on sentences:** Two independent clauses joined without proper punctuation or a conjunction.
- ~~"I love hiking I go every weekend."~~
- Fix: "I love hiking; I go every weekend." OR "I love hiking, and I go every weekend."

**Parallelism:** Items in a list or comparison must have the same grammatical form.
- ~~"She enjoys reading, to swim, and hiking."~~
- Fix: "She enjoys reading, swimming, and hiking."

**Misplaced modifiers:** A descriptive phrase placed next to the wrong noun.
- ~~"Covered in chocolate, the children devoured the cake."~~
- Fix: "The children devoured the cake, which was covered in chocolate."
      `
    },
    {
      id: 'act-es3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Error Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"The team of players are ready." — The error type is …',
            options: ['subject-verb agreement', 'pronoun case', 'comma splice', 'misplaced modifier']
          },
          {
            label: '"I went to the store, I bought milk." — This is a …',
            options: ['fragment', 'comma splice', 'misplaced modifier', 'parallelism error']
          },
          {
            label: '"She likes dancing, to sing, and painting." — This is a … error.',
            options: ['verb tense', 'comma usage', 'parallelism', 'pronoun reference']
          }
        ],
        correctAnswers: ['subject-verb agreement', 'comma splice', 'parallelism'],
        hint1: '"Team" is singular but "are" is plural — that\'s an agreement problem.',
        hint2: 'Two complete sentences joined by just a comma.',
        hint3: 'The items in the list aren\'t in the same grammatical form.',
        explanation: '"Team … are" is a subject-verb agreement error (should be "is"). Joining two independent clauses with only a comma is a comma splice. Mixing gerunds and infinitives in a list is a parallelism error.'
      }
    }
  ]
};
