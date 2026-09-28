export const satGrammarPart2Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-gr2-intro',
      type: 'text' as const,
      content: `
# 🔗 Pronoun Agreement & Clarity

**Part 2 of 7 — Antecedent Agreement, Ambiguity, Who vs. Whom, Pronoun Case**

A **pronoun** must agree with its **antecedent** (the noun it refers to) in number and person.

> *The student finished **her** project.* ✅ (singular antecedent → singular pronoun)
> *The students finished **their** projects.* ✅ (plural antecedent → plural pronoun)

**Common SAT trap:** A pronoun that does not match a clearly singular or plural noun.

> ❌ *The company raised **their** prices.* ✅ *The company raised **its** prices.*
> ❌ *The new laptops each come with **its** own charger.* ✅ *…with **their** own chargers.*

**Singular "they":** The digital SAT accepts "they/their" for a person whose gender is unknown ("Everyone should bring their book"). It will not make that the error, so focus on nouns whose number is unmistakable: companies, committees, objects, and plural groups.
      `
    },
    {
      id: 'sat-gr2-ambiguous',
      type: 'text' as const,
      content: `
## Ambiguous Pronouns

A pronoun is **ambiguous** when it could refer to more than one antecedent.

> ❌ *When Sarah met Rachel, **she** smiled.*
> (Who smiled — Sarah or Rachel?)

**Fix:** Replace the pronoun with the noun.
> ✅ *When Sarah met Rachel, **Sarah** smiled.*

### Who vs. Whom
- **Who** = subject (doing the action): *Who is calling?*
- **Whom** = object (receiving the action): *To whom did you give the letter?*

**Quick test:** If you can substitute "he/she," use **who**. If you can substitute "him/her," use **whom**.

> *The manager **who** leads the team…* (he leads → who)
> *The manager **whom** we hired…* (we hired him → whom)

### Pronoun Case (I vs. Me, We vs. Us)
| Position | Use |
|----------|-----|
| Subject | I, he, she, we, they, who |
| Object | me, him, her, us, them, whom |
| After "than" / "as" | Complete the comparison to decide |

> *She is taller than **I** [am].* ✅
> *Between you and **me**, this is wrong.* ✅ ("between" takes objects)
      `
    },
    {
      id: 'sat-gr2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Pronoun Agreement & Clarity** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The twins celebrated _____ birthday with a single cake.',
            options: ['its', 'their', 'his', 'her'],
            correctAnswer: 1,
            explanation: '"Twins" is plural, so the pronoun must be plural: "their." "Its" is for things, and "his" or "her" would refer to only one person.'
          },
          {
            question: 'The committee announced _____ decision after a long debate.',
            options: ['their', 'its', 'his', 'our'],
            correctAnswer: 1,
            explanation: '"Committee" is a singular collective noun, so the pronoun is "its." (On the SAT, collective nouns are treated as singular.)'
          }
        ]
      }
    },
    {
      id: 'sat-gr2-input1',
      type: 'input-boxes' as const,
      content: `
**Choose the Correct Pronoun** 🧮

Type the correct pronoun for each blank.

1) Each of the laptops came with _____ own charger. (its / their)

2) The award was given to Maria and _____ . (I / me)

3) _____ should we contact about the project? (Who / Whom)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['its', 'me', 'Whom'],
        hint1: '"Each" is singular, and a laptop is a thing.',
        hint2: '"Given to" requires an object pronoun. "To Maria and me."',
        hint3: 'We should contact him → objective case → "Whom."',
        explanation: '1) "its" — "each" is singular and refers to a thing. 2) "me" — object of the preposition "to." 3) "Whom" — it is the object of "contact" (we should contact him/her).'
      }
    },
    {
      id: 'sat-gr2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Pronoun Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An ambiguous pronoun is one that …',
            options: ['has no antecedent', 'could refer to more than one noun', 'is in the wrong case', 'is plural']
          },
          {
            label: '"The teacher who/whom the students admire" — correct choice is …',
            options: ['who', 'whom', 'which', 'that']
          },
          {
            label: '"Between you and I/me" — correct choice is …',
            options: ['I', 'me', 'myself', 'either I or me']
          }
        ],
        correctAnswers: ['could refer to more than one noun', 'whom', 'me'],
        hint1: 'Ambiguity = unclear reference.',
        hint2: 'The students admire him → objective case.',
        hint3: '"Between" is a preposition and takes object pronouns.',
        explanation: 'Ambiguous pronouns have multiple possible antecedents. "Whom" is correct because it is the object of "admire." "Me" is correct after the preposition "between."'
      }
    },
    {
      id: 'sat-gr2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Editing** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'When the officer stopped the driver, _____ asked for identification. \nWhich choice makes clear who asked?',
            options: ['the officer', 'the person', 'he or she', 'that person'],
            correctAnswer: 0,
            explanation: 'With two people in the sentence, a pronoun or vague label ("the person," "he or she," "that person") could point to either the officer or the driver. Naming the noun, "the officer," removes the ambiguity.'
          },
          {
            question: 'Each of the new laptops comes with _____ own charger. \nWhich choice completes the text so that it conforms to the conventions of Standard English?',
            options: ['it\'s', 'its', 'their', 'they\'re'],
            correctAnswer: 1,
            explanation: '"Each" is singular and refers to a thing (a laptop), so the possessive is "its." "It\'s" means "it is," "their" is plural, and "they\'re" means "they are."'
          }
        ]
      }
    },
    {
      id: 'sat-gr2-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

1. **Pronoun-antecedent agreement:** Singular antecedents need singular pronouns.
2. **Ambiguous pronouns:** If a pronoun could refer to more than one noun, replace it with the specific noun.
3. **Who vs. whom:** Who = subject, whom = object. Test by substituting he/him.
4. **Pronoun case:** After prepositions and as objects → me, him, her, us, them, whom.
5. **Singular "they":** Accepted on the digital SAT for a person of unknown gender; the tested errors involve nouns whose number is unmistakable.

**Up next:** Verb Tense & Mood →
      `
    }
  ]
};
