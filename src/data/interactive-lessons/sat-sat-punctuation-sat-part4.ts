export const satPunctuationPart4Data = {
  topicSlug: 'sat-punctuation-sat',
  sections: [
    {
      id: 'sat-p4-intro',
      type: 'text' as const,
      content: `
# 📌 SAT Punctuation

**Part 4 of 7 — Dashes & Apostrophes**

Dashes and apostrophes round out the punctuation marks tested on the SAT. Dashes are surprisingly common, and apostrophe questions are some of the easiest points if you know the rules.

### Em Dashes (—)

An **em dash** (—) on the SAT works similarly to commas or parentheses — it sets off nonessential information.

**Key Rule:** If a dash opens a nonessential phrase in the middle of a sentence, a **second dash must close it**. You cannot pair a dash with a comma.

✅ *The experiment—conducted over three years—yielded breakthrough results.*

❌ *The experiment—conducted over three years, yielded breakthrough results.* (Cannot mix dash and comma)
      `
    },
    {
      id: 'sat-p4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which sentence correctly uses dashes?',
            options: [
              'The river—swollen from days of rain, overflowed its banks.',
              'The river—swollen from days of rain—overflowed its banks.',
              'The river, swollen from days of rain—overflowed its banks.',
              'The river—swollen—from days of rain—overflowed its banks.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — "Swollen from days of rain" is a nonessential phrase in the middle of the sentence. It needs matching punctuation on both sides — either two dashes, two commas, or parentheses. You cannot mix them.'
          },
          {
            question: 'A dash at the END of a sentence is used to:',
            options: [
              'Introduce a dramatic conclusion or explanation.',
              'Replace a period.',
              'Indicate a question.',
              'Show that a list follows.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — A single dash at the end of a sentence can introduce a dramatic or emphatic final element: "She had only one goal—to win."'
          }
        ]
      }
    },
    {
      id: 'sat-p4-detail1',
      type: 'text' as const,
      content: `
### When to Use Dashes vs. Commas

Both dashes and commas can set off nonessential information. On the SAT, the choice matters only when answer choices mix them:

| | Commas | Dashes |
|---|---|---|
| Tone | Neutral | Emphatic |
| Pairing | Must match (, ... ,) | Must match (— ... —) |
| At end of sentence | Not for emphasis | ✅ Can add drama |

**SAT Rule:** You will never have to choose between dashes and commas for the SAME question. The test checks whether you know that **matching marks** are required.

### Apostrophes: Possession

**Singular possession:** Add **'s**
> *the student's book* — one student

**Plural possession (regular):** Add an apostrophe after the **s**
> *the students' books* — multiple students

**Plural possession (irregular):** Add **'s**
> *the children's toys* — "children" is already plural

**Possessive pronouns NEVER use apostrophes:**
> its, yours, theirs, whose, hers, ours
      `
    },
    {
      id: 'sat-p4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is the correct possessive form? "The _____ uniforms were new this season."',
            options: [
              'players (no apostrophe)',
              'player\'s (one player has uniforms)',
              'players\' (multiple players have uniforms)',
              'players\'s (multiple players)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Multiple players own the uniforms. For regular plural nouns ending in "s," add just an apostrophe after the "s" → players\'.'
          },
          {
            question: 'Which sentence uses an apostrophe correctly?',
            options: [
              'The dog wagged it\'s tail happily.',
              'Its going to rain tomorrow.',
              'The cat cleaned its whiskers.',
              'The tree lost it\'s leaves.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "Its" (no apostrophe) is the possessive pronoun. "It\'s" means "it is." Possessive pronouns never use apostrophes.'
          }
        ]
      }
    },
    {
      id: 'sat-p4-detail2',
      type: 'text' as const,
      content: `
### Apostrophes: Contractions

Apostrophes also mark **contractions** — where letters are omitted:

| Contraction | Full Form |
|---|---|
| it's | it is / it has |
| they're | they are |
| you're | you are |
| who's | who is / who has |
| don't | do not |
| can't | cannot |

### The Big Three SAT Apostrophe Traps

1. **it's vs. its** — "It's" = "it is." "Its" = possessive.
2. **they're vs. their vs. there** — "They're" = "they are." "Their" = possessive.
3. **who's vs. whose** — "Who's" = "who is." "Whose" = possessive.

**SAT Tip:** If you can replace the word with "it is," "they are," or "who is," use the apostrophe version. If not, use the possessive (no apostrophe).
      `
    },
    {
      id: 'sat-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Correct Form** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"___ going to be a great concert."',
            options: ['Its', 'It\'s']
          },
          {
            label: '"The dog buried ___ bone in the yard."',
            options: ['its', 'it\'s']
          },
          {
            label: '"___ the author of this essay?"',
            options: ['Whose', 'Who\'s']
          },
          {
            label: '"The ___ decision was final."',
            options: ['committee\'s', 'committees', 'committees\'', 'committee']
          }
        ],
        correctAnswers: [
          'It\'s',
          'its',
          'Who\'s',
          'committee\'s'
        ],
        hint1: 'Try substituting "it is" — if it works, use "it\'s."',
        hint2: 'Possessive pronouns (its, whose) never have apostrophes.',
        hint3: '"Who\'s" = "who is." "Whose" = possessive.',
        explanation: '"It\'s going to be" = "It is going to be" → contraction. "The dog buried its bone" → possessive pronoun (no apostrophe). "Who\'s the author" = "Who is the author" → contraction. "The committee\'s decision" → singular possession.'
      }
    }
  ]
}
