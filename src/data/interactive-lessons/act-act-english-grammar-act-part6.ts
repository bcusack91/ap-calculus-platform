export const actEnglishGrammarPart6Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-eg6-intro',
      type: 'text' as const,
      content: `
# 🔤 Commonly Confused Words

**Part 6 of 7 — Affect/Effect, Their/There/They're, Its/It's & More**

The ACT includes several questions that test whether you know the difference between **commonly confused words**. These are easy points once you learn the pairs.

| Pair | Rule |
|------|------|
| **affect** / **effect** | *Affect* = verb (to influence); *Effect* = noun (the result) |
| **their** / **there** / **they're** | *Their* = possessive; *There* = place; *They're* = they are |
| **its** / **it's** | *Its* = possessive; *It's* = it is / it has |
| **your** / **you're** | *Your* = possessive; *You're* = you are |
| **then** / **than** | *Then* = time; *Than* = comparison |
| **who's** / **whose** | *Who's* = who is; *Whose* = possessive |
| **to** / **too** / **two** | *To* = preposition/infinitive; *Too* = also/excessively; *Two* = 2 |
      `
    },
    {
      id: 'act-eg6-affecteffect',
      type: 'text' as const,
      content: `
## Affect vs. Effect & Their/There/They're

**Affect vs. Effect:**
- **Affect** is usually a **verb**: *The weather will **affect** the game.*
- **Effect** is usually a **noun**: *The **effect** of the storm was devastating.*
- Memory trick: **A**ffect = **A**ction (verb); **E**ffect = **E**nd result (noun).
- Exception: "effect" can be a verb meaning "to bring about": *The new CEO **effected** major changes.*

**Their / There / They're:**
- **Their** = possessive: *The students opened **their** books.*
- **There** = location or existence: ***There** are three reasons.*
- **They're** = contraction of "they are": ***They're** going to the movies.*

**Example 1:**
- ❌ *The new policy had a negative **affect** on employee morale.*
- ✅ *The new policy had a negative **effect** on employee morale.*
- "Effect" is correct because it is a noun (the result).

**Example 2:**
- ❌ *The team celebrated **they're** victory at the restaurant.*
- ✅ *The team celebrated **their** victory at the restaurant.*
- "Their" shows possession.

**ACT Tip:** Substitute "they are" for "they're" — if it doesn't make sense, you need "their" or "there."
      `
    },
    {
      id: 'act-eg6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Confused Words — Pick the Right One** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The medication did not _____ the patient\'s condition." Which word completes the sentence?',
            options: ['affect', 'effect', 'affective', 'effective'],
            correctAnswer: 0,
            explanation: 'A verb is needed here ("did not ___"), and "affect" is the verb meaning "to influence." "Effect" is typically a noun.'
          },
          {
            question: '"_____ going to submit _____ applications before _____ deadline." Fill in the blanks with the correct words.',
            options: ['Their, they\'re, there', 'They\'re, their, the', 'There, their, they\'re', 'They\'re, there, their'],
            correctAnswer: 1,
            explanation: '"They\'re" (they are) going to submit "their" (possessive) applications before "the" deadline. The sentence uses all forms correctly in option B.'
          }
        ]
      }
    },
    {
      id: 'act-eg6-itsyour',
      type: 'text' as const,
      content: `
## Its/It's, Your/You're, Then/Than & Who's/Whose

**Its vs. It's:**
- **Its** = possessive (no apostrophe!): *The cat licked **its** paw.*
- **It's** = "it is" or "it has": ***It's** been a long day.*
- Test: If you can replace it with "it is," use "it's." Otherwise, use "its."

**Your vs. You're:**
- **Your** = possessive: *Is this **your** jacket?*
- **You're** = "you are": ***You're** going to love this.*

**Then vs. Than:**
- **Then** = time or sequence: *We ate dinner, **then** watched a movie.*
- **Than** = comparison: *She is taller **than** her brother.*

**Who's vs. Whose:**
- **Who's** = "who is" or "who has": ***Who's** coming to the party?*
- **Whose** = possessive: ***Whose** book is this?*

**ACT Tip:** Possessive pronouns NEVER use apostrophes: its, your, whose, their. Apostrophes in these words always mean contractions.
      `
    },
    {
      id: 'act-eg6-input1',
      type: 'input-boxes' as const,
      content: `
**Choose the Correct Word** ✏️

1) "The dog wagged _____ (its/it's) tail happily." — Type the correct word.
2) "She is smarter _____ (then/than) her older brother." — Type the correct word.
3) "_____ (Whose/Who's) responsible for this mess?" — Type the correct word.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['its', 'than', "Who's"],
        hint1: 'Can you replace it with "it is"? "The dog wagged it is tail" — does that work?',
        hint2: 'Is this a comparison or a time sequence?',
        hint3: 'Try replacing with "Who is" — "Who is responsible for this mess?"',
        explanation: '1) "Its" — possessive, showing the tail belongs to the dog. "It\'s" would mean "it is." 2) "Than" — used for comparisons. "Then" is for time. 3) "Who\'s" — contraction of "who is." "Whose" is possessive.'
      }
    },
    {
      id: 'act-eg6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Commonly Confused Words — Quick Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Possessive pronouns (its, your, whose, their) use …',
            options: ['an apostrophe', 'no apostrophe', 'a hyphen', 'quotation marks']
          },
          {
            label: '"Affect" is usually a …; "effect" is usually a …',
            options: ['noun; verb', 'verb; noun', 'adjective; adverb', 'verb; verb']
          },
          {
            label: '"We practiced, _____ we played the game." (then / than)',
            options: ['then', 'than']
          }
        ],
        correctAnswers: ['no apostrophe', 'verb; noun', 'then'],
        hint1: 'Apostrophes in these words signal contractions, not possession.',
        hint2: 'Remember: Affect = Action (verb), Effect = End result (noun).',
        hint3: 'Is this describing a sequence of events or making a comparison?',
        explanation: 'Possessive pronouns never take apostrophes. "Affect" is a verb; "effect" is a noun. "Then" is used for time/sequence.'
      }
    },
    {
      id: 'act-eg6-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The company released it\'s annual report, which showed a positive affect on revenue." How many errors are in this sentence?',
            options: ['0', '1', '2', '3'],
            correctAnswer: 2,
            explanation: 'Two errors: (1) "it\'s" should be "its" (possessive, not "it is"), and (2) "affect" should be "effect" (noun meaning result). Corrected: "The company released its annual report, which showed a positive effect on revenue."'
          },
          {
            question: '"Your never going to believe whose at the door." How should this be corrected?',
            options: ['No change needed', 'Change "Your" to "You\'re" only', 'Change "whose" to "who\'s" only', 'Change "Your" to "You\'re" AND "whose" to "who\'s"'],
            correctAnswer: 3,
            explanation: 'Both need to be contractions: "You\'re" (you are) never going to believe "who\'s" (who is) at the door.'
          }
        ]
      }
    }
  ]
};
