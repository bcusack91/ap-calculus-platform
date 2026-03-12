export const actEnglishGrammarPart1Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-eg1-intro',
      type: 'text' as const,
      content: `
# 📝 Subject-Verb Agreement

**Part 1 of 7 — Tricky Subjects, Prepositional Phrases & Compound Subjects**

The ACT English section frequently tests whether you can match a **subject** to its **verb** in number (singular or plural). The trick is that the ACT hides the true subject behind extra words.

**The Core Rule:** A singular subject takes a singular verb; a plural subject takes a plural verb.

| Subject | Verb | Example |
|---------|------|---------|
| Singular | Singular | *The dog **runs** in the yard.* |
| Plural | Plural | *The dogs **run** in the yard.* |

**Why it matters on the ACT:** About 3–5 questions per test target subject-verb agreement — making it one of the highest-yield grammar topics you can study.
      `
    },
    {
      id: 'act-eg1-tricky',
      type: 'text' as const,
      content: `
## Tricky Subjects & Prepositional Phrases

The ACT loves to insert a **prepositional phrase** between the subject and verb to confuse you.

**Strategy:** Cross out the prepositional phrase to find the real subject.

**Example 1 — Prepositional Phrase Trap:**
- ❌ *The bouquet of roses **were** beautiful.*
- ✅ *The bouquet of roses **was** beautiful.*
- The subject is *bouquet* (singular), not *roses*.

**Example 2 — Long Interruption:**
- ❌ *The results of the experiment, which was conducted over several months, **shows** a clear trend.*
- ✅ *The results of the experiment, which was conducted over several months, **show** a clear trend.*
- The subject is *results* (plural).

**Example 3 — Compound Prepositional Phrase:**
- ❌ *The box of chocolates on the table near the flowers **have** been opened.*
- ✅ *The box of chocolates on the table near the flowers **has** been opened.*
- The subject is *box* (singular). Everything from "of" to "flowers" is extra.

**ACT Tip:** When you see a verb underlined, immediately find the subject. Ignore everything between commas, and cross out prepositional phrases mentally.
      `
    },
    {
      id: 'act-eg1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Subject-Verb Agreement — Spot the Error** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Choose the correct sentence: (A) The list of ingredients are on the counter. (B) The list of ingredients is on the counter.',
            options: ['Sentence A is correct', 'Sentence B is correct', 'Both are correct', 'Neither is correct'],
            correctAnswer: 1,
            explanation: 'The subject is "list" (singular), so the verb must be "is." The prepositional phrase "of ingredients" does not change the subject.'
          },
          {
            question: 'Which underlined verb is correct? "The players on the team (has / have) improved their skills this season."',
            options: ['has', 'have', 'is having', 'was having'],
            correctAnswer: 1,
            explanation: '"Players" is the subject (plural), so "have" is correct. "On the team" is a prepositional phrase that does not affect the verb.'
          }
        ]
      }
    },
    {
      id: 'act-eg1-compound',
      type: 'text' as const,
      content: `
## Compound Subjects & Special Cases

**Compound subjects joined by "and"** are usually plural:
- *Tom **and** Jerry **are** coming.* ✅

**Subjects joined by "or" / "nor"** — the verb agrees with the **nearer** subject:
- *Neither the teacher **nor** the students **were** ready.* ✅
- *Neither the students **nor** the teacher **was** ready.* ✅

**Indefinite pronouns — always singular:**
- *Everyone, somebody, each, either, neither, nobody, anything*
- *Each of the students **has** a textbook.* ✅
- *Everyone **is** welcome.* ✅

**Collective nouns** (team, group, jury, family) are usually **singular** in American English:
- *The committee **has** reached a decision.* ✅

**ACT Tip:** "Each" and "every" always signal a singular verb, even when followed by a compound phrase: *Each boy and girl **has** a seat.*
      `
    },
    {
      id: 'act-eg1-input1',
      type: 'input-boxes' as const,
      content: `
**Fill in the Correct Verb** ✏️

1) "The group of scientists _____ (is/are) publishing their findings." — Type the correct verb.
2) "Neither the coach nor the players _____ (was/were) satisfied." — Type the correct verb.
3) "Everybody in the two classes _____ (has/have) finished the test." — Type the correct verb.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['is', 'were', 'has'],
        hint1: '"Group" is a collective noun — singular in American English.',
        hint2: 'With "nor," the verb agrees with the nearer subject: "players" (plural).',
        hint3: '"Everybody" is an indefinite pronoun — always singular.',
        explanation: '1) "Group" → singular → "is." 2) "nor" → verb matches "players" → "were." 3) "Everybody" → singular → "has."'
      }
    },
    {
      id: 'act-eg1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Agreement Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A prepositional phrase between the subject and verb …',
            options: ['changes the subject', 'does NOT change the subject', 'always makes the verb plural', 'is always removed']
          },
          {
            label: '"Each of the answers" takes a … verb.',
            options: ['singular', 'plural', 'either singular or plural']
          },
          {
            label: 'With "or" / "nor," the verb agrees with …',
            options: ['the first subject', 'the nearer subject', 'both subjects combined', 'whichever is singular']
          }
        ],
        correctAnswers: ['does NOT change the subject', 'singular', 'the nearer subject'],
        hint1: 'The real subject stays the same no matter what comes after it.',
        hint2: '"Each" is an indefinite pronoun.',
        hint3: 'Think about proximity — which subject is closest to the verb?',
        explanation: 'Prepositional phrases never change the subject. "Each" is always singular. With "or/nor," the verb agrees with the subject nearest to it.'
      }
    },
    {
      id: 'act-eg1-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The collection of rare stamps, which were donated by several alumni, (is / are) now on display in the library." Which verb is correct?',
            options: ['is', 'are', 'were', 'have been'],
            correctAnswer: 0,
            explanation: 'The subject is "collection" (singular). The clause "which were donated by several alumni" is a relative clause modifying "stamps," not the main subject. The correct verb is "is."'
          },
          {
            question: '"Either the manager or her assistants (is / are) responsible for locking up the office." Which verb is correct?',
            options: ['is', 'are', 'was', 'has been'],
            correctAnswer: 1,
            explanation: 'With "or," the verb agrees with the nearer subject — "assistants" (plural) — so "are" is correct.'
          }
        ]
      }
    }
  ]
};
