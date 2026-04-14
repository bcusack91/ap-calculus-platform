export const actEnglishGrammarPart7Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-eg7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Error-Identification Cheat Sheet & Mixed ACT English Questions**

This final lesson brings together everything from Parts 1–6. Use the cheat sheet below for quick reference, then tackle the mixed practice questions.

## Grammar Error Cheat Sheet

| Category | What to Check |
|----------|--------------|
| **Subject-Verb Agreement** | Find the true subject — ignore prepositional phrases. Singular subject → singular verb. |
| **Pronoun Usage** | Match pronouns to antecedents in number. Use subject case (I, who) for subjects and object case (me, whom) for objects. |
| **Verb Tense** | Keep tenses consistent unless the time frame changes. Use past perfect for "earlier than another past event." |
| **Sentence Structure** | No fragments, run-ons, or comma splices. Use FANBOYS + comma, semicolons, or periods to join clauses. |
| **Modifiers** | The subject after an introductory phrase must be the one doing the action. |
| **Parallelism** | Items in a list or comparison must share the same grammatical form. |
| **Confused Words** | its/it's, their/there/they're, affect/effect, then/than, your/you're, who's/whose. |
      `
    },
    {
      id: 'act-eg7-strategy',
      type: 'text' as const,
      content: `
## ACT English — Test-Day Strategy

**Time Management:**
- You have **45 minutes** for **75 questions** — that is **36 seconds per question**.
- Don't spend more than 30–45 seconds on any single question. Mark it and move on.

**The ACT English Process:**
1. **Read the sentence** with the underlined portion.
2. **Identify the error category** (agreement? tense? structure? word choice?).
3. **Eliminate wrong answers** — if an answer creates a new error, cross it out.
4. **Choose the most concise correct option** — the ACT rewards clarity and brevity.

**"NO CHANGE" Tips:**
- "NO CHANGE" is correct about 25% of the time — don't be afraid to pick it.
- But always check all four options before settling on NO CHANGE.

**Common Traps:**
- Answers that sound fancy but introduce grammatical errors.
- Answers that fix one problem but create another (e.g., fixing a comma splice but creating a fragment).
- Wordiness — the ACT prefers the shortest answer that is grammatically correct and clear.
      `
    },
    {
      id: 'act-eg7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Grammar Concepts** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The group of protesters, along with their leader, were arrested outside the courthouse." What is the error?',
            options: ['"their" should be "its"', '"were" should be "was"', '"outside" should be "out of"', 'No error'],
            correctAnswer: 1,
            explanation: 'Subject-verb agreement: "group" is singular. The phrases "of protesters" and "along with their leader" are extra. The verb should be "was."'
          },
          {
            question: '"Having finished the marathon, a medal was given to each runner." What type of error is this?',
            options: ['Comma splice', 'Dangling modifier', 'Pronoun error', 'Tense shift'],
            correctAnswer: 1,
            explanation: 'Dangling modifier: "Having finished the marathon" should describe the runners, but the subject after the comma is "a medal." Medals don\'t finish marathons! Correct: "Having finished the marathon, each runner was given a medal."'
          }
        ]
      }
    },
    {
      id: 'act-eg7-mixed',
      type: 'text' as const,
      content: `
## Quick Error-Identification Practice

Read each sentence and identify the error type before looking at the answer:

**Sentence A:** *"The effects of climate change is felt worldwide."*
→ **Subject-verb agreement** — "effects" is plural, so the verb should be "are."

**Sentence B:** *"The teacher told the students that they should bring his or her own calculator."*
→ **Pronoun agreement** — "students" is plural, so use "their" instead of "his or her."

**Sentence C:** *"She went to the store, she bought groceries."*
→ **Comma splice** — Two independent clauses joined by only a comma. Fix: add "and" or use a semicolon.

**Sentence D:** *"Tired and hungry, the pizza was devoured by the hikers."*
→ **Dangling modifier** — "Tired and hungry" describes the hikers, not the pizza. Fix: "Tired and hungry, the hikers devoured the pizza."

**Sentence E:** *"He prefers reading books more then watching television."*
→ **Commonly confused words** — "then" should be "than" (comparison).
      `
    },
    {
      id: 'act-eg7-input1',
      type: 'input-boxes' as const,
      content: `
**Name That Error** ✏️

Identify the error type in each sentence. Type your answer.

1) "Neither the students nor the teacher were happy with the results." → Error type:

2) "The report, which was written by the interns, have several typos." → Error type:

3) "Running late for the interview, the car wouldn't start." → Error type:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['subject-verb agreement', 'subject-verb agreement', 'dangling modifier'],
        hint1: 'With "nor," the verb agrees with the nearest subject. "Teacher" is singular, but "were" is plural.',
        hint2: 'What is the true subject — "report" or "interns"? Does the verb match it?',
        hint3: 'Who was running late — the person or the car?',
        explanation: '1) Subject-verb agreement — with "nor," the verb matches "teacher" (singular) → should be "was." 2) Subject-verb agreement — "report" is singular, so the verb should be "has." 3) Dangling modifier — "Running late" should describe the person, not "the car."'
      }
    },
    {
      id: 'act-eg7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Final Review — Rule Recall** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Possessive pronouns … use apostrophes.',
            options: ['always', 'sometimes', 'never']
          },
          {
            label: 'On the ACT, the best answer is usually the … correct option.',
            options: ['longest', 'most formal', 'most concise', 'most dramatic']
          },
          {
            label: 'A sentence that begins with a participial phrase requires the … to appear right after the comma.',
            options: ['verb', 'object', 'logical subject', 'conjunction']
          }
        ],
        correctAnswers: ['never', 'most concise', 'logical subject'],
        hint1: 'Its, their, whose — no apostrophes in possessive pronouns.',
        hint2: 'The ACT rewards brevity and clarity.',
        hint3: 'The subject after the comma must match the modifier.',
        explanation: 'Possessive pronouns never use apostrophes. The ACT favors the most concise correct answer. After a participial phrase, the logical subject must appear right after the comma.'
      }
    },
    {
      id: 'act-eg7-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Mixed Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The orchestra, who had been rehearsing for months, performed they\'re best concert of the season; the affect on the audience was tremendous." How many errors are in this sentence?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 2,
            explanation: 'Three errors: (1) "who" should be "which" or "that" — "orchestra" is a thing, not a person. (2) "they\'re" should be "their" — possessive, not "they are." (3) "affect" should be "effect" — a noun (the result). The semicolon usage is correct.'
          },
          {
            question: '"Each of the candidates have prepared their own speech, which they will present at the town hall." What needs to change?',
            options: ['No change needed', '"have" should be "has" and "their" should be "his or her"', '"have" should be "has" only', '"their" should be "his or her" only'],
            correctAnswer: 1,
            explanation: '"Each" is singular → "has" (not "have"). The pronoun should match the singular antecedent → "his or her" (not "their") on the ACT.'
          }
        ]
      }
    }
  ]
};
