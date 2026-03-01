export const actEnglishGrammarPart2Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-eg2-intro',
      type: 'text' as const,
      content: `
# 🗣️ Pronoun Usage

**Part 2 of 7 — Agreement, Case, Ambiguous Reference & Who/Whom**

Pronoun questions appear on every ACT English test. The test checks three things:

1. **Agreement** — Does the pronoun match its antecedent in number?
2. **Case** — Is the pronoun in the right form (subject vs. object)?
3. **Clarity** — Is it clear what the pronoun refers to?

| Pronoun Type | Subject | Object | Possessive |
|--------------|---------|--------|------------|
| First person singular | I | me | my / mine |
| Third person singular | he / she | him / her | his / her |
| Third person plural | they | them | their |
| Relative | who | whom | whose |
      `
    },
    {
      id: 'act-eg2-agreement',
      type: 'text' as const,
      content: `
## Pronoun-Antecedent Agreement

A pronoun must agree with its **antecedent** (the noun it replaces) in number and gender.

**Example 1 — Singular Antecedent:**
- ❌ *A student should always bring **their** textbook to class.*
- ✅ *A student should always bring **his or her** textbook to class.*
- (On the ACT, the singular form is preferred when the antecedent is clearly singular.)

**Example 2 — Plural Antecedent:**
- ❌ *The musicians tuned **his** instruments before the concert.*
- ✅ *The musicians tuned **their** instruments before the concert.*

**Example 3 — Collective Noun:**
- ✅ *The jury reached **its** verdict.* (American English treats collective nouns as singular.)

**ACT Tip:** When a pronoun is underlined, immediately find the antecedent. Check: Does the pronoun match in number? If not, that's the error.
      `
    },
    {
      id: 'act-eg2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Pronoun Agreement — Identify the Error** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"When a driver approaches a red light, they should begin to brake." What is the pronoun issue?',
            options: ['No error', '"they" should be "he or she" (singular antecedent)', '"they" should be "we"', '"driver" should be "drivers"'],
            correctAnswer: 1,
            explanation: '"A driver" is singular, so the matching pronoun should be "he or she" (or the sentence should be rewritten with "drivers ... they"). On the ACT, singular agreement is tested frequently.'
          },
          {
            question: '"The committee announced that they had made their decision." On the ACT, which revision is best?',
            options: ['No change needed', 'Replace "they" with "it" and "their" with "its"', 'Replace "they" with "he"', 'Replace "their" with "there"'],
            correctAnswer: 1,
            explanation: 'In American English on the ACT, "committee" is a collective noun treated as singular. The correct pronouns are "it" and "its."'
          }
        ]
      }
    },
    {
      id: 'act-eg2-case',
      type: 'text' as const,
      content: `
## Pronoun Case: Subject vs. Object

Use **subject pronouns** (I, he, she, we, they, who) as subjects or after linking verbs.
Use **object pronouns** (me, him, her, us, them, whom) as objects of verbs or prepositions.

**Example 4 — Compound Subject:**
- ❌ *Me and Sarah went to the store.*
- ✅ ***Sarah and I** went to the store.*
- Test: Remove "Sarah and" — "I went to the store" ✅; "Me went to the store" ❌.

**Example 5 — Object of Preposition:**
- ❌ *The teacher gave the award to Sarah and **I**.*
- ✅ *The teacher gave the award to Sarah and **me**.*
- Test: Remove "Sarah and" — "gave the award to me" ✅; "gave the award to I" ❌.

**Who vs. Whom:**
- **Who** = subject (like "he"): *Who is calling?* → *He is calling.*
- **Whom** = object (like "him"): *To whom did you speak?* → *You spoke to him.*

**ACT Tip:** For compound pronoun questions, mentally remove the other person. "Give it to (she / her) and me" → "Give it to her" ✅.
      `
    },
    {
      id: 'act-eg2-input1',
      type: 'input-boxes' as const,
      content: `
**Choose the Correct Pronoun** ✏️

1) "Between you and _____ (I/me), this test is difficult." — Type the correct pronoun.
2) "_____ (Who/Whom) did the principal call to the office?" — Type the correct word.
3) "The trophy belongs to my teammates and _____ (I/me)." — Type the correct pronoun.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['me', 'Whom', 'me'],
        hint1: '"Between" is a preposition — it needs an object pronoun.',
        hint2: 'Try substituting: "The principal called him" → object → whom.',
        hint3: '"Belongs to" is a prepositional phrase — it needs an object pronoun.',
        explanation: '1) "Between" is a preposition, so use the object pronoun "me." 2) "Whom" is correct because it is the object of "call" (the principal called him). 3) "Belongs to me" — object of the preposition "to."'
      }
    },
    {
      id: 'act-eg2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Pronoun Rules — Quick Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"Who" functions as a …',
            options: ['subject', 'object', 'possessive', 'conjunction']
          },
          {
            label: 'A pronoun must agree with its antecedent in …',
            options: ['tense', 'number', 'length', 'position']
          },
          {
            label: '"The report was written by my colleague and ___." (I / me)',
            options: ['I', 'me']
          }
        ],
        correctAnswers: ['subject', 'number', 'me'],
        hint1: '"Who" replaces "he" or "she" — both subject forms.',
        hint2: 'Singular antecedent → singular pronoun; plural → plural.',
        hint3: '"By" is a preposition — what case follows a preposition?',
        explanation: '"Who" is a subject pronoun. Pronouns must match their antecedents in number. "By" is a preposition, so the object pronoun "me" is required.'
      }
    },
    {
      id: 'act-eg2-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The scientist published her findings, and it received widespread attention." What should replace "it"?',
            options: ['they', 'she', 'them', 'No change'],
            correctAnswer: 0,
            explanation: '"Findings" is plural, so the pronoun must be "they." "It" is singular and does not agree.'
          },
          {
            question: '"For (whoever / whomever) is interested, the lecture begins at noon." Which is correct?',
            options: ['whoever', 'whomever', 'whom', 'who'],
            correctAnswer: 0,
            explanation: '"Whoever" is correct because it is the subject of the clause "whoever is interested." The entire clause is the object of "for," but within the clause, the subject form is needed.'
          }
        ]
      }
    }
  ]
};
