export const actPunctuationPart3Data = {
  topicSlug: 'act-english-punctuation-act',
  sections: [
    {
      id: 'act-pn3-intro',
      type: 'text' as const,
      content: `
# 🔤 Apostrophes

**Part 3 of 7 — Possessives, Contractions, Its vs. It's & Plural Possessives**

Apostrophe questions appear on virtually every ACT English section. They test two things: **possession** and **contractions**. The ACT's favorite trick is confusing possessive pronouns (which never use apostrophes) with contractions (which always do).

**Two Jobs for Apostrophes:**

| Job | Rule | Example |
|-----|------|---------|
| Possession | Add 's or ' | *the dog's bone, the dogs' bones* |
| Contraction | Replace missing letters | *don't = do not, it's = it is* |

**Critical Rule:** Possessive pronouns — *its, their, your, whose* — **NEVER** take apostrophes.
      `
    },
    {
      id: 'act-pn3-possessives',
      type: 'text' as const,
      content: `
## Possessives — Singular & Plural

**Singular Possessive — Add 's:**
- *the student's essay* (one student)
- *the boss's office* (one boss — yes, add 's even if the word ends in s)
- *James's car* (ACT follows the rule: always add 's for singular)

**Plural Possessive — Add ' after the s:**
- *the students' essays* (multiple students)
- *the teachers' lounge* (multiple teachers)

**Irregular Plurals — Add 's:**
- *the children's toys* (children is already plural)
- *the women's team*
- *the people's choice*

**Quick Decision Tree:**
1. Is the owner singular? → Add **'s** (*the cat's toy*)
2. Is the owner a regular plural (ends in s)? → Add **'** (*the cats' toys*)
3. Is the owner an irregular plural? → Add **'s** (*the children's toys*)

**ACT Trap:** The ACT will offer a plural noun with an apostrophe when no possession is intended.
- ❌ *The student's studied for hours.* (No possession — just a plural: *The students studied for hours.*)
      `
    },
    {
      id: 'act-pn3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Apostrophes — Choose Correctly** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence is correct? (A) The company released it\'s annual report. (B) The company released its annual report.',
            options: ['Sentence A', 'Sentence B', 'Both are correct', 'Neither is correct'],
            correctAnswer: 1,
            explanation: '"Its" (no apostrophe) is the possessive pronoun. "It\'s" means "it is." The sentence needs the possessive, so Sentence B is correct.'
          },
          {
            question: '"The three _____ performances were outstanding." Which option correctly fills the blank?',
            options: ["actor's", "actors'", "actors", "actor"],
            correctAnswer: 1,
            explanation: 'There are three actors (plural), and the performances belong to them. The plural possessive of "actors" is "actors\'." '
          }
        ]
      }
    },
    {
      id: 'act-pn3-contractions',
      type: 'text' as const,
      content: `
## Contractions & Commonly Confused Pairs

**Common Contractions:**
- *it's = it is / it has*
- *they're = they are*
- *you're = you are*
- *who's = who is / who has*
- *there's = there is*

**Possessive Pronouns (NO Apostrophe):**
- *its* → *The dog wagged its tail.*
- *their* → *Their house is on the corner.*
- *your* → *Your grade improved.*
- *whose* → *Whose book is this?*

**The ACT's Big Three Confusion Pairs:**

| Contraction | Possessive | Test (Expand It) |
|-------------|-----------|-------------------|
| it's (it is) | its | *Does "it is" work?* |
| they're (they are) | their | *Does "they are" work?* |
| you're (you are) | your | *Does "you are" work?* |

**Strategy:** Every time you see an apostrophe in a pronoun on the ACT, try expanding it. If "it is" or "they are" doesn't make sense, remove the apostrophe.

**ACT Tip:** The ACT will almost never use the actual contraction in the correct answer. It strongly prefers the possessive pronoun. When in doubt, choose the version without the apostrophe.
      `
    },
    {
      id: 'act-pn3-input1',
      type: 'input-boxes' as const,
      content: `
**It's vs. Its — Type the Correct Word** ✏️

1) "The university announced ___ new admissions policy." — Type "its" or "it's."

2) "___ going to be a challenging semester." — Type "Its" or "It's."

3) "The cat cleaned ___ paws after dinner." — Type "its" or "it's."
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['its', "It's", 'its'],
        hint1: 'The policy belongs to the university — possessive, no apostrophe.',
        hint2: 'Expand it: "It is going to be…" — that works, so use the contraction.',
        hint3: 'The paws belong to the cat — possessive pronoun.',
        explanation: '1) Possessive "its" (the policy belongs to the university). 2) Contraction "It\'s" = "It is." 3) Possessive "its" (the paws belong to the cat).'
      }
    },
    {
      id: 'act-pn3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Quick-Check: Apostrophe Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Possessive pronouns (its, their, your) …',
            options: ['always use apostrophes', 'never use apostrophes', 'sometimes use apostrophes', 'use apostrophes only for emphasis']
          },
          {
            label: 'The plural possessive of "teachers" is …',
            options: ["teacher's", "teachers'", "teachers's", "teachers"]
          },
          {
            label: '"Who\'s responsible?" uses an apostrophe because …',
            options: ["it shows possession", "it's a contraction of 'who is'", "it's a plural", "it follows a proper noun"]
          }
        ],
        correctAnswers: ['never use apostrophes', "teachers'", "it's a contraction of 'who is'"],
        hint1: 'Possessive pronouns are already possessive — they don\'t need apostrophes.',
        hint2: '"Teachers" is a regular plural ending in s. Where does the apostrophe go?',
        hint3: 'Try expanding: "Who is responsible?" — does that work?',
        explanation: 'Possessive pronouns never take apostrophes. Regular plural possessives add an apostrophe after the s. "Who\'s" is a contraction of "who is."'
      }
    },
    {
      id: 'act-pn3-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Passage Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The orchestra, known for it\'s innovative performances, announced that they\'re 2026 season will feature works by emerging composers." How many apostrophe errors are there?',
            options: ['Zero', 'One', 'Two', 'Three'],
            correctAnswer: 2,
            explanation: 'Two errors: "it\'s" should be "its" (possessive — the performances belong to the orchestra) and "they\'re" should be "their" (possessive — the season belongs to them). Both are possessive pronouns that should not have apostrophes.'
          },
          {
            question: '"Each of the student\'s projects demonstrated weeks\' worth of research." Which apostrophe usage is correct?',
            options: ['Both are correct', '"student\'s" should be "students\'" (multiple students)', '"weeks\'" should be "week\'s"', 'Both apostrophes should be removed'],
            correctAnswer: 1,
            explanation: '"Each of the students\' projects" — "each" tells us there are multiple students whose projects are being discussed. The plural possessive "students\'" is needed. "Weeks\' worth" is correct as-is (plural possessive — the worth of multiple weeks).'
          }
        ]
      }
    }
  ]
};
