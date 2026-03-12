export const satGrammarPart1Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-gr1-intro',
      type: 'text' as const,
      content: `
# ✏️ Subject-Verb Agreement

**Part 1 of 7 — Singular & Plural Subjects, Tricky Cases**

The **#1 grammar rule** tested on the SAT: a verb must agree in number with its subject.

| Subject | Verb |
|---------|------|
| The **dog** | **runs** (singular) |
| The **dogs** | **run** (plural) |

**Golden rule:** Ignore everything between the subject and the verb — prepositional phrases, appositives, and relative clauses do **not** change subject-verb agreement.

> *The box **of chocolates is** on the table.*
> (Subject = **box**, not "chocolates")

> *The students **in the classroom have** finished the test.*
> (Subject = **students**, not "classroom")
      `
    },
    {
      id: 'sat-gr1-tricky',
      type: 'text' as const,
      content: `
## Tricky Cases

### Compound Subjects
- **And** → usually plural: *Tom **and** Jerry **are** friends.*
- **Or / nor** → verb matches the **closer** subject: *Neither the teacher **nor** the students **were** ready.*

### Indefinite Pronouns
| Always singular | Always plural | Depends on context |
|----------------|---------------|-------------------|
| everyone, everybody, everything | both, few, many, several | all, any, most, none, some |
| each, either, neither | | |
| anyone, someone, no one | | |

> *Everyone **has** a pencil.* ✅
> *Everyone **have** a pencil.* ❌

> *Few **are** willing to volunteer.* ✅

### Inverted Sentences
When the subject comes **after** the verb, agreement still applies:

> *There **are** many reasons to study.* (subject = reasons)
> *Here **is** the list of candidates.* (subject = list)
      `
    },
    {
      id: 'sat-gr1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Subject-Verb Agreement Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Select the correct sentence: \n(A) The group of scientists were conducting an experiment. \n(B) The group of scientists was conducting an experiment.',
            options: ['Sentence A is correct', 'Sentence B is correct', 'Both are correct', 'Neither is correct'],
            correctAnswer: 1,
            explanation: 'The subject is "group" (singular), not "scientists." A singular subject takes a singular verb: "was conducting."'
          },
          {
            question: 'Choose the correct verb: "Each of the students _____ required to submit a final project."',
            options: ['are', 'is', 'were', 'have been'],
            correctAnswer: 1,
            explanation: '"Each" is always singular, so the correct verb is "is." Ignore the prepositional phrase "of the students."'
          }
        ]
      }
    },
    {
      id: 'sat-gr1-input1',
      type: 'input-boxes' as const,
      content: `
**Fill in the Correct Verb** 🧮

Type the correct form of the verb in parentheses.

1) Neither the coach nor the players _____ (was/were) satisfied with the result.
2) The collection of rare stamps _____ (is/are) worth thousands of dollars.
3) Everyone in the two classes _____ (has/have) completed the assignment.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['were', 'is', 'has'],
        hint1: 'With "neither…nor," the verb agrees with the closer subject. "Players" is plural.',
        hint2: 'The subject is "collection" (singular), not "stamps."',
        hint3: '"Everyone" is always singular — it takes "has."',
        explanation: '1) "were" — verb agrees with "players" (closer to the verb). 2) "is" — "collection" is singular. 3) "has" — "everyone" is singular.'
      }
    },
    {
      id: 'sat-gr1-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Identify the Rule** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In "The list of items _____ been updated," the subject is …',
            options: ['list', 'items', 'list of items', 'updated']
          },
          {
            label: 'The pronoun "everybody" is …',
            options: ['singular', 'plural', 'either singular or plural', 'not a pronoun']
          },
          {
            label: 'With "either…or," the verb agrees with …',
            options: ['the first subject', 'the closer subject', 'both subjects combined', 'whichever is plural']
          }
        ],
        correctAnswers: ['list', 'singular', 'the closer subject'],
        hint1: 'Ignore the prepositional phrase "of items."',
        hint2: 'Indefinite pronouns ending in -body are always singular.',
        hint3: 'The proximity rule: the verb matches the subject nearer to it.',
        explanation: 'The subject is "list" (singular). "Everybody" is singular. With "either…or" and "neither…nor," the verb agrees with the subject closer to it.'
      }
    },
    {
      id: 'sat-gr1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Editing** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The news about the budget cuts **have** alarmed many employees. \nWhich correction should be made?',
            options: ['Change "have" to "has"', 'Change "have" to "had"', 'Change "alarmed" to "alarming"', 'No change needed'],
            correctAnswer: 0,
            explanation: '"News" is a singular noun (even though it ends in -s). The correct verb is "has alarmed."'
          },
          {
            question: 'A number of residents **has** voiced their concerns about the new policy. \nWhich correction should be made?',
            options: ['No change needed', 'Change "has" to "have"', 'Change "their" to "its"', 'Change "voiced" to "voicing"'],
            correctAnswer: 1,
            explanation: '"A number of" is an idiomatic expression that takes a plural verb. "A number of residents have voiced…" is correct. (Compare with "The number of residents is…" which is singular.)'
          }
        ]
      }
    },
    {
      id: 'sat-gr1-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

1. **Find the real subject** — strip away prepositional phrases and other interrupters.
2. **Indefinite pronouns:** "everyone," "each," "neither" → singular verbs.
3. **Compound subjects with "and"** → plural; **"or/nor"** → match the closer subject.
4. **Inverted sentences:** "There are" / "Here is" — find the subject after the verb.
5. **Tricky nouns:** "news," "mathematics," "athletics" → singular; "scissors," "data" (formal) → see context.

**Up next:** Pronoun Agreement & Clarity →
      `
    }
  ]
};
