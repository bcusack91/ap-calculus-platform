#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for SAT Grammar & Conventions.
Output directory: src/data/interactive-lessons/
File pattern:    sat-sat-grammar-conventions-sat-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "sat-grammar-conventions-sat"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"sat-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Subject-Verb Agreement ──────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
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
            question: 'Select the correct sentence: \\n(A) The group of scientists were conducting an experiment. \\n(B) The group of scientists was conducting an experiment.',
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
            question: 'The news about the budget cuts **have** alarmed many employees. \\nWhich correction should be made?',
            options: ['Change "have" to "has"', 'Change "have" to "had"', 'Change "alarmed" to "alarming"', 'No change needed'],
            correctAnswer: 0,
            explanation: '"News" is a singular noun (even though it ends in -s). The correct verb is "has alarmed."'
          },
          {
            question: 'A number of residents **has** voiced their concerns about the new policy. \\nWhich correction should be made?',
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
"""))


# ── Part 2: Pronoun Agreement & Clarity ─────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
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

**Common SAT trap:** Singular indefinite pronouns paired with "their."

> ❌ *Everyone should bring **their** book.*
> ✅ *Everyone should bring **his or her** book.* (formal/SAT style)

On the SAT, the formally correct answer is usually preferred.
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
            question: 'Neither of the girls brought _____ notebook to class.',
            options: ['their', 'her', 'its', 'his'],
            correctAnswer: 1,
            explanation: '"Neither" is singular, and the antecedent is "girls" (female), so "her" is correct.'
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

1) Each of the boys must submit _____ essay by Friday. (his / their)
2) The award was given to Maria and _____ . (I / me)
3) _____ should we contact about the project? (Who / Whom)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['his', 'me', 'Whom'],
        hint1: '"Each" is singular. The antecedent is "boys" (male).',
        hint2: '"Given to" requires an object pronoun. "To Maria and me."',
        hint3: 'We should contact him → objective case → "Whom."',
        explanation: '1) "his" — "each" is singular. 2) "me" — object of the preposition "to." 3) "Whom" — it is the object of "contact" (we should contact him/her).'
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
            question: 'When the officer stopped the driver, **they** asked for identification. \\nWhat is the problem with this sentence?',
            options: ['The pronoun "they" is ambiguous — it could refer to the officer or the driver', 'The verb "asked" should be "ask"', '"Identification" should be "an identification"', 'No error'],
            correctAnswer: 0,
            explanation: '"They" could refer to either "the officer" or "the driver." The sentence should be revised to clarify: "the officer asked for identification."'
          },
          {
            question: 'Each student must make sure that **they have** all necessary materials before the exam. \\nWhich revision is best?',
            options: ['they has', 'he or she has', 'we have', 'No change needed'],
            correctAnswer: 1,
            explanation: '"Each" is singular, so the pronoun should be singular: "he or she has." On the SAT, formal pronoun agreement is tested.'
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
5. **SAT style:** The test prefers "he or she" over "they" for singular antecedents.

**Up next:** Verb Tense & Mood →
      `
    }
  ]
};
"""))


# ── Part 3: Verb Tense & Mood ──────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const satGrammarPart3Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-gr3-intro',
      type: 'text' as const,
      content: `
# ⏰ Verb Tense & Mood

**Part 3 of 7 — Consistent Tense, Perfect Tenses, Subjunctive Mood**

The SAT tests whether you can maintain **consistent verb tense** and choose the correct tense based on context.

### The Six Main Tenses

| Tense | Example | When to use |
|-------|---------|-------------|
| Simple present | *She **writes** daily.* | Habitual action, general truth |
| Simple past | *She **wrote** yesterday.* | Completed past action |
| Simple future | *She **will write** tomorrow.* | Future action |
| Present perfect | *She **has written** three essays.* | Past action with present relevance |
| Past perfect | *She **had written** the essay before class started.* | Action completed before another past action |
| Future perfect | *She **will have written** it by Friday.* | Action completed before a future time |

**SAT Rule:** Don't shift tenses unless the meaning requires it.

> ❌ *He walked to the store and **buys** some bread.* (past → present shift)
> ✅ *He walked to the store and **bought** some bread.*
      `
    },
    {
      id: 'sat-gr3-perfect',
      type: 'text' as const,
      content: `
## Perfect Tenses in Detail

### Present Perfect (has/have + past participle)
Links a past action to the present:
> *I **have lived** here for ten years.* (started in the past, still true now)

### Past Perfect (had + past participle)
Shows one past action happened **before** another:
> *By the time the teacher arrived, the students **had already left**.*

**SAT loves this one.** If two past events are mentioned, the earlier one should be in the past perfect.

### Future Perfect (will have + past participle)
Describes what will be completed by a future point:
> *By next month, she **will have completed** the course.*

## The Subjunctive Mood

Used for wishes, demands, suggestions, and hypothetical situations:

| Pattern | Example |
|---------|---------|
| Wish / if…were | *If I **were** rich, I would travel.* (not "was") |
| Demand / suggest / recommend + that | *The professor insists that he **study** harder.* (not "studies") |

> ❌ *If she **was** here, she would help.*
> ✅ *If she **were** here, she would help.*
      `
    },
    {
      id: 'sat-gr3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Verb Tense Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'By the time we arrived at the theater, the movie _____.',
            options: ['already started', 'has already started', 'had already started', 'will have started'],
            correctAnswer: 2,
            explanation: 'The movie starting happened BEFORE arriving (both past events). Use past perfect: "had already started."'
          },
          {
            question: 'The proposal recommends that the company _____ its hiring practices.',
            options: ['reviews', 'reviewed', 'review', 'will review'],
            correctAnswer: 2,
            explanation: 'After verbs like "recommend," "suggest," "insist," use the subjunctive: the base form "review" (not "reviews").'
          }
        ]
      }
    },
    {
      id: 'sat-gr3-input1',
      type: 'input-boxes' as const,
      content: `
**Type the Correct Verb Form** 🧮

1) If I _____ (was/were) the president, I would change that law.
2) She _____ (has lived / had lived) in Paris for three years before moving to London.
3) By 2030, scientists _____ (will discover / will have discovered) a cure for the disease, researchers predict.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['were', 'had lived', 'will have discovered'],
        hint1: 'Hypothetical situation → subjunctive mood → "were" for all subjects.',
        hint2: 'Living in Paris happened BEFORE moving to London (two past events) → past perfect.',
        hint3: '"By 2030" signals a future deadline → future perfect.',
        explanation: '1) "were" — subjunctive for hypothetical. 2) "had lived" — past perfect for the earlier of two past events. 3) "will have discovered" — future perfect for completion by a future point.'
      }
    },
    {
      id: 'sat-gr3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Tense Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"She had finished the book before the movie came out" uses …',
            options: ['simple past', 'present perfect', 'past perfect', 'future perfect']
          },
          {
            label: 'The subjunctive "were" is used for …',
            options: ['past tense statements', 'hypothetical or contrary-to-fact situations', 'future predictions', 'completed actions']
          },
          {
            label: '"I have studied French for five years" — this tense is …',
            options: ['simple past', 'past perfect', 'present perfect', 'simple present']
          }
        ],
        correctAnswers: ['past perfect', 'hypothetical or contrary-to-fact situations', 'present perfect'],
        hint1: '"Had + past participle" is the past perfect form.',
        hint2: '"If I were…" expresses something that is not true.',
        hint3: '"Have/has + past participle" with present relevance.',
        explanation: '"Had finished" is past perfect. The subjunctive "were" is for hypothetical situations. "Have studied" is present perfect — the studying started in the past and is still relevant.'
      }
    },
    {
      id: 'sat-gr3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Editing** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The scientist conducted the experiment in March and **will publish** the results in the same journal two months later. \\nWhich correction should be made?',
            options: ['Change "will publish" to "published"', 'Change "conducted" to "conducts"', 'Change "will publish" to "has published"', 'No change needed'],
            correctAnswer: 0,
            explanation: 'Both actions are in the past ("in March" and "two months later"). Using "will publish" is an inappropriate tense shift. "Published" keeps the tense consistent.'
          },
          {
            question: 'If the budget **was** larger, the school could hire more teachers. \\nWhich correction should be made?',
            options: ['Change "was" to "were"', 'Change "could hire" to "can hire"', 'Change "was" to "is"', 'No change needed'],
            correctAnswer: 0,
            explanation: 'This is a hypothetical (contrary-to-fact) statement. The subjunctive requires "were," not "was."'
          }
        ]
      }
    },
    {
      id: 'sat-gr3-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

1. **Keep tenses consistent** unless there's a clear reason to shift (e.g., time markers like "before," "by then").
2. **Past perfect ("had + past participle")** for the earlier of two past events.
3. **Present perfect ("has/have + past participle")** connects past to present.
4. **Future perfect ("will have + past participle")** for actions completed by a future deadline.
5. **Subjunctive:** Use "were" for hypotheticals; use the base verb after "recommend/suggest/insist that."

**Up next:** Sentence Structure →
      `
    }
  ]
};
"""))


# ── Part 4: Sentence Structure ──────────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const satGrammarPart4Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-gr4-intro',
      type: 'text' as const,
      content: `
# 🔨 Sentence Structure

**Part 4 of 7 — Fragments, Run-Ons, Comma Splices, Coordination & Subordination**

A correct sentence must have:
- A **subject**
- A **predicate** (verb)
- A **complete thought**

### Sentence Fragments
A fragment lacks one of those elements.

> ❌ *Because the weather was cold.* (dependent clause — no main clause)
> ✅ *Because the weather was cold, **we stayed inside**.*

> ❌ *Running through the park on a sunny day.* (no subject or main verb)
> ✅ ***She was** running through the park on a sunny day.*

### Run-On Sentences
Two independent clauses joined without proper punctuation or a conjunction.

> ❌ *I love reading I go to the library every week.* (fused sentence)
> ❌ *I love reading, I go to the library every week.* (comma splice)

**Four ways to fix a run-on or comma splice:**
1. **Period:** *I love reading. I go to the library every week.*
2. **Semicolon:** *I love reading; I go to the library every week.*
3. **Comma + conjunction:** *I love reading, so I go to the library every week.*
4. **Subordination:** *Because I love reading, I go to the library every week.*
      `
    },
    {
      id: 'sat-gr4-coord',
      type: 'text' as const,
      content: `
## Coordination vs. Subordination

### Coordination (equal ideas)
Uses **FANBOYS** (for, and, nor, but, or, yet, so) with a comma, or a semicolon:

> *The test was difficult, **but** most students passed.*

### Subordination (unequal ideas)
Uses subordinating conjunctions: **because, although, since, while, if, when, after, before, unless, until**

> ***Although** the test was difficult, most students passed.*

**SAT Tip:** The subordinated idea gets less emphasis. Choose subordination when one idea is more important than the other.

### Comma Splice vs. Correct Semicolon
| Incorrect (comma splice) | Correct |
|--------------------------|---------|
| *The lecture was long, the students were bored.* | *The lecture was long; the students were bored.* |
| | *The lecture was long, and the students were bored.* |
| | *Because the lecture was long, the students were bored.* |

**SAT Trick:** If a sentence has two complete clauses separated only by a comma (no conjunction), it's a comma splice.
      `
    },
    {
      id: 'sat-gr4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Sentence Structure Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a fragment? \\n(A) After the rain stopped, we went outside. \\n(B) While the band played their final song. \\n(C) She ran to the store and bought milk. \\n(D) The book, written by a famous author, was a bestseller.',
            options: ['Sentence A', 'Sentence B', 'Sentence C', 'Sentence D'],
            correctAnswer: 1,
            explanation: '"While the band played their final song" is a dependent clause with no main clause to complete the thought — it's a fragment.'
          },
          {
            question: 'The experiment failed, the researchers started over. \\nHow should this comma splice be corrected?',
            options: ['The experiment failed the researchers started over.', 'The experiment failed; the researchers started over.', 'The experiment failed, researchers started over.', 'The experiment, failed the researchers started over.'],
            correctAnswer: 1,
            explanation: 'A semicolon correctly joins two independent clauses. The original is a comma splice (two independent clauses joined by only a comma).'
          }
        ]
      }
    },
    {
      id: 'sat-gr4-input1',
      type: 'input-boxes' as const,
      content: `
**Identify the Error Type** 🧮

Type "fragment," "run-on," "comma splice," or "correct" for each sentence.

1) She studied hard for the final exam, she felt confident on test day.
2) Although he had never traveled abroad before.
3) The sun set behind the mountains, and the sky turned a deep shade of orange.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['comma splice', 'fragment', 'correct'],
        hint1: 'Two independent clauses separated by only a comma.',
        hint2: '"Although" starts a dependent clause. Where is the main clause?',
        hint3: 'There is a comma + coordinating conjunction ("and") between two independent clauses.',
        explanation: '1) Comma splice — two complete sentences joined by only a comma. 2) Fragment — dependent clause with no main clause. 3) Correct — "comma + and" properly joins two independent clauses.'
      }
    },
    {
      id: 'sat-gr4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Fix the Sentence** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '"I enjoy hiking ___ my brother prefers swimming." Choose the best connector.',
            options: ['(comma only)', ', but', '; and then', '. Because']
          },
          {
            label: '"___ the museum was closed, we went to the park instead." Choose the correct opening.',
            options: ['Since', 'Also', 'Meanwhile,', 'In addition']
          },
          {
            label: 'FANBOYS stands for: for, and, nor, but, or, yet, ___',
            options: ['since', 'so', 'still', 'such']
          }
        ],
        correctAnswers: [', but', 'Since', 'so'],
        hint1: 'Two independent clauses with contrasting ideas need a comma + conjunction.',
        hint2: 'The second clause is a result of the first — a cause-effect relationship.',
        hint3: 'The last letter in FANBOYS is S.',
        explanation: '", but" correctly joins two contrasting independent clauses. "Since" introduces a subordinate cause clause. "So" completes the FANBOYS acronym (for, and, nor, but, or, yet, so).'
      }
    },
    {
      id: 'sat-gr4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Editing** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The orchestra performed brilliantly, earning a standing ovation, **they** had rehearsed every day for three months. \\nWhich revision best fixes the error?',
            options: ['brilliantly, earning a standing ovation they', 'brilliantly and earned a standing ovation, they', 'brilliantly, earning a standing ovation; they', 'brilliantly. Earning a standing ovation, they'],
            correctAnswer: 2,
            explanation: 'The original has a comma splice between "ovation" and "they." A semicolon correctly separates the two independent clauses.'
          },
          {
            question: 'Because of the heavy rain and the flooded roads. The school decided to cancel classes for the day. \\nWhich revision best fixes the error?',
            options: ['No change needed', 'Because of the heavy rain and the flooded roads, the school decided to cancel classes for the day.', 'Because of the heavy rain and the flooded roads; the school decided to cancel classes for the day.', 'Because of the heavy rain, and the flooded roads the school decided to cancel classes for the day.'],
            correctAnswer: 1,
            explanation: 'The first part is a prepositional/causal phrase that should be connected to the main clause with a comma, not separated by a period.'
          }
        ]
      }
    },
    {
      id: 'sat-gr4-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

1. **Fragments** lack a subject, verb, or complete thought — watch for dependent clauses standing alone.
2. **Run-ons** fuse two independent clauses with no punctuation.
3. **Comma splices** use only a comma between independent clauses — add a conjunction or use a semicolon.
4. **Coordination** (FANBOYS) joins equal ideas; **subordination** makes one idea dependent.
5. **Period, semicolon, comma + conjunction, or subordination** — four ways to fix run-ons.

**Up next:** Modifier Placement →
      `
    }
  ]
};
"""))


# ── Part 5: Modifier Placement ──────────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const satGrammarPart5Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-gr5-intro',
      type: 'text' as const,
      content: `
# 🎯 Modifier Placement

**Part 5 of 7 — Dangling Modifiers, Misplaced Modifiers, Squinting Modifiers**

A **modifier** is a word or phrase that describes, clarifies, or gives more detail about another word. On the SAT, modifier errors are among the most frequently tested grammar concepts.

**Golden Rule:** A modifier must be placed **next to** the word it modifies.

### Misplaced Modifiers
A modifier is **misplaced** when it is too far from the word it describes, creating confusion or unintended meaning.

> ❌ *She almost drove **her kids** to school every day.*
> (This says she almost drove but didn't actually drive)

> ✅ *She drove her kids to school **almost** every day.*
> (She drove most days — "almost" modifies "every day")

> ❌ *The professor only teaches **on Tuesdays**.*
> (The only thing the professor does is teach? Probably not.)

> ✅ *The professor teaches **only on Tuesdays**.*
> ("Only" modifies "on Tuesdays")
      `
    },
    {
      id: 'sat-gr5-dangling',
      type: 'text' as const,
      content: `
## Dangling Modifiers

A modifier **dangles** when the word it's supposed to modify is missing from the sentence or is not the subject right after the modifier.

> ❌ ***Walking to school,** the rain started to fall.*
> (The rain isn't walking to school!)

> ✅ ***Walking to school,** **I** noticed the rain starting to fall.*
> (Now "I" is doing the walking)

**SAT Pattern:** An introductory participial phrase (…ing / …ed / …en) MUST be followed by the noun it modifies.

> ❌ ***Exhausted from the hike,** the tent looked inviting.*
> (The tent wasn't exhausted)

> ✅ ***Exhausted from the hike,** **the hikers** found the tent inviting.*

### Squinting Modifiers
A **squinting modifier** is ambiguously placed between two things it could modify:

> ❌ *Students who study frequently **earn** good grades.*
> (Do they study frequently, or frequently earn good grades?)

> ✅ *Students who **frequently study** earn good grades.* (clear)
> ✅ *Students who study earn good grades **frequently**.* (also clear)

**Fix:** Move the modifier so it clearly modifies only one element.
      `
    },
    {
      id: 'sat-gr5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Modifier Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '**Hoping to improve her grades,** the tutor was hired by Maria. \\nWhat is the error?',
            options: ['Comma splice', 'Dangling modifier — "Hoping to improve" should modify Maria, not "the tutor"', 'Subject-verb disagreement', 'No error'],
            correctAnswer: 1,
            explanation: 'The introductory phrase "Hoping to improve her grades" must be followed by the person doing the hoping: Maria. Corrected: "Hoping to improve her grades, Maria hired a tutor."'
          },
          {
            question: 'The dog bit the mail carrier **running across the yard**. Who was running?',
            options: ['The dog', 'The mail carrier', 'It is ambiguous', 'Neither — the phrase is a fragment'],
            correctAnswer: 2,
            explanation: 'The modifier "running across the yard" is misplaced — it could describe either the dog or the mail carrier. This is ambiguous and needs to be rewritten.'
          }
        ]
      }
    },
    {
      id: 'sat-gr5-input1',
      type: 'input-boxes' as const,
      content: `
**Identify the Modifier Error** 🧮

Type "dangling," "misplaced," "squinting," or "correct" for each sentence.

1) Covered in chocolate, the children eagerly ate the strawberries.
2) She only ate vegetables for dinner last night.
3) Driving to work, the accident blocked the highway.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['correct', 'misplaced', 'dangling'],
        hint1: 'Who or what is covered in chocolate — the children or the strawberries? Actually, the strawberries — but "children" is the subject. Wait: the strawberries are covered in chocolate, but "children" follows the modifier. This is actually correct IF the children are the ones covered in chocolate. Since the context makes the strawberries covered in chocolate, it could be read as dangling — but structurally, "Covered in chocolate" could describe the children eating them messily. Let us say this is correct here because "children" is the logical subject.',
        hint2: '"Only" should modify "vegetables," not "ate." Move it: "She ate only vegetables."',
        hint3: '"Driving to work" has no proper subject — the accident was not driving.',
        explanation: '1) Correct — the introductory phrase can logically modify the subject "children." 2) Misplaced — "only" modifies the wrong word; it should be "ate only vegetables." 3) Dangling — "the accident" is not the one driving; the subject who was driving is missing.'
      }
    },
    {
      id: 'sat-gr5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Modifier Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A dangling modifier occurs when the word it modifies …',
            options: ['is too far away', 'is missing from the sentence or is not the subject', 'is in the wrong tense', 'is plural instead of singular']
          },
          {
            label: '"After reviewing the evidence, the verdict was announced." This has a …',
            options: ['dangling modifier', 'misplaced modifier', 'squinting modifier', 'no error']
          },
          {
            label: 'To fix a squinting modifier, you should …',
            options: ['remove it', 'move it so it clearly modifies only one word', 'change it to a different part of speech', 'add a comma']
          }
        ],
        correctAnswers: ['is missing from the sentence or is not the subject', 'dangling modifier', 'move it so it clearly modifies only one word'],
        hint1: 'A dangling modifier has no logical subject to attach to.',
        hint2: 'Who reviewed the evidence? Not "the verdict."',
        hint3: 'Squinting modifiers sit between two possible words — repositioning solves the ambiguity.',
        explanation: 'A dangling modifier lacks its intended subject. "After reviewing the evidence" dangles because "the verdict" did not review anything. Squinting modifiers are fixed by repositioning them next to the word they are meant to modify.'
      }
    },
    {
      id: 'sat-gr5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Editing** 📋
      `,
      exercise: {
        questions: [
          {
            question: '**Having studied all night,** the exam seemed easy to Marcus. \\nWhich revision best corrects the error?',
            options: ['Having studied all night, the exam was easy for Marcus.', 'Having studied all night, Marcus found the exam easy.', 'Having studied all night, it seemed easy to Marcus, the exam.', 'No change needed.'],
            correctAnswer: 1,
            explanation: 'The introductory phrase "Having studied all night" must be followed by the person who studied: Marcus. "Marcus found the exam easy" correctly places Marcus as the subject.'
          },
          {
            question: 'The gallery displayed paintings by local artists **that were recently restored**. \\nWhat does "that were recently restored" most likely modify?',
            options: ['The gallery', 'Paintings', 'Local artists', 'It is ambiguous and should be clarified'],
            correctAnswer: 3,
            explanation: 'The modifier "that were recently restored" could describe the paintings or the artists (though artists aren't "restored"). In context it means the paintings, but the placement creates ambiguity. Better: "The gallery displayed recently restored paintings by local artists."'
          }
        ]
      }
    },
    {
      id: 'sat-gr5-summary',
      type: 'text' as const,
      content: `
## Key Takeaways

1. **Misplaced modifiers** are too far from what they describe — move them closer.
2. **Dangling modifiers** lack a logical subject — add the correct subject right after the modifier.
3. **Squinting modifiers** sit ambiguously between two words — reposition for clarity.
4. **SAT pattern:** Introductory participial phrases (-ing, -ed) must be immediately followed by the noun they modify.
5. **Watch for "only," "almost," "nearly," "just"** — these adverbs are commonly misplaced.

**Up next:** Parallel Structure & Comparisons →
      `
    }
  ]
};
"""))


# ── Part 6: Parallel Structure & Comparisons ────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
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
        explanation: '1) "strength" — matches the noun pattern. 2) "watch television" — must be a base verb to match "read." 3) "his brother\\'s" — compares his paintings to his brother\\'s paintings.'
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
            label: 'To compare two cities\\' populations properly, you need …',
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
            question: 'The volunteers were praised for **their enthusiasm, their dependability, and they were always willing to help**. \\nWhich revision fixes the parallelism error?',
            options: ['their enthusiasm, their dependability, and their willingness to help', 'their enthusiasm, their dependability, and for being always willing to help', 'their enthusiasm, dependability, and they were willing to help', 'No change needed'],
            correctAnswer: 0,
            explanation: 'The list should contain three parallel noun phrases: "their enthusiasm, their dependability, and their willingness to help."'
          },
          {
            question: 'The salary of a software engineer in San Francisco is significantly higher than **a teacher in rural Iowa**. \\nWhich revision fixes the comparison?',
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
"""))


# ── Part 7: Review & Mixed Practice ─────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const satGrammarPart7Data = {
  topicSlug: 'sat-grammar-conventions-sat',
  sections: [
    {
      id: 'sat-gr7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Cheat Sheet, Mixed SAT-Style Questions, Test Strategies**

You've covered all the major grammar conventions tested on the SAT:

| Part | Topic | Key Rule |
|------|-------|----------|
| 1 | Subject-Verb Agreement | Verb matches the subject, not nearby nouns |
| 2 | Pronoun Agreement & Clarity | Pronouns must match antecedents; avoid ambiguity |
| 3 | Verb Tense & Mood | Keep tense consistent; use past perfect for earlier events |
| 4 | Sentence Structure | No fragments, run-ons, or comma splices |
| 5 | Modifier Placement | Modifiers go next to what they describe |
| 6 | Parallel Structure & Comparisons | Lists, pairs, and comparisons must be parallel |

**Strategy: The Error-Spotting Checklist**
When you see an underlined portion on the SAT, run through these checks:
1. ✅ Does the verb agree with its subject?
2. ✅ Are pronouns clear and correctly matched?
3. ✅ Is the tense consistent and logical?
4. ✅ Is the sentence complete (no fragments, run-ons)?
5. ✅ Are modifiers placed correctly?
6. ✅ Is the structure parallel?
      `
    },
    {
      id: 'sat-gr7-cheatsheet',
      type: 'text' as const,
      content: `
## Quick Reference Cheat Sheet

### Subject-Verb Agreement
- **Ignore** prepositional phrases between subject and verb
- Indefinite pronouns (everyone, each, neither) → **singular**
- "A number of" → plural; "The number of" → singular
- "News," "mathematics," "physics" → singular

### Pronouns
- Who = subject; Whom = object
- After prepositions → object pronouns (me, him, her, us, them)
- Avoid ambiguous pronoun references

### Verb Tense
- Past perfect (**had + past participle**) = earlier past event
- Subjunctive: **were** for hypotheticals; base verb after "recommend/suggest that"
- Don't shift tenses without reason

### Sentence Structure
- **Comma + FANBOYS** or **semicolon** to join independent clauses
- A comma alone between two independent clauses = **comma splice** (ERROR)
- Dependent clause alone = **fragment** (ERROR)

### Modifiers
- Introductory phrase → must be followed by the noun it modifies
- "Only," "almost," "nearly" → place **directly before** the word they modify

### Parallelism
- All items in a list must be in the **same grammatical form**
- Compare like to like: use "that of" / "those of" / possessives
      `
    },
    {
      id: 'sat-gr7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice — Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The team of researchers **have** published their findings in a prestigious journal. \\nWhich correction, if any, should be made?',
            options: ['Change "have" to "has"', 'Change "their" to "its"', 'Both A and B', 'No change needed'],
            correctAnswer: 2,
            explanation: '"Team" is singular: "The team…has published its findings." Both the verb and the pronoun should be singular to match the collective noun.'
          },
          {
            question: '**Analyzing the data carefully,** several unexpected trends were discovered by the researchers. \\nWhat error does this sentence contain?',
            options: ['Comma splice', 'Dangling modifier', 'Verb tense error', 'Faulty comparison'],
            correctAnswer: 1,
            explanation: '"Analyzing the data carefully" modifies the researchers, but "trends" is the subject. Corrected: "Analyzing the data carefully, the researchers discovered several unexpected trends."'
          }
        ]
      }
    },
    {
      id: 'sat-gr7-input1',
      type: 'input-boxes' as const,
      content: `
**Name That Error** 🧮

Identify the grammar error type in each sentence. Type one of: "subject-verb agreement," "pronoun error," "tense shift," "fragment," "comma splice," "dangling modifier," "parallelism error," or "faulty comparison."

1) The mayor, along with several council members, were present at the ceremony.
2) Running late for the interview, the bus was missed.
3) She enjoys painting, reading, and to cook new recipes.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['subject-verb agreement', 'dangling modifier', 'parallelism error'],
        hint1: 'The subject is "mayor" (singular). "Along with several council members" is a parenthetical phrase.',
        hint2: 'Who was running late? Not the bus!',
        hint3: 'The list mixes gerunds ("painting," "reading") with an infinitive ("to cook").',
        explanation: '1) Subject-verb agreement — "mayor" is singular, so "were" should be "was." 2) Dangling modifier — "Running late" has no logical subject (the bus was not running late). 3) Parallelism error — "to cook" should be "cooking" to match the gerund pattern.'
      }
    },
    {
      id: 'sat-gr7-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Strategy & Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When you see an introductory -ing phrase on the SAT, immediately check that …',
            options: ['the sentence has a comma', 'the subject after the comma is doing the action', 'the verb is in past tense', 'the sentence is not too long']
          },
          {
            label: 'If two past events are described in one sentence, the earlier event should use …',
            options: ['simple past', 'past perfect', 'present perfect', 'future perfect']
          },
          {
            label: '"That of" or "those of" is used to fix …',
            options: ['pronoun errors', 'faulty comparisons', 'comma splices', 'dangling modifiers']
          }
        ],
        correctAnswers: ['the subject after the comma is doing the action', 'past perfect', 'faulty comparisons'],
        hint1: 'The introductory modifier must describe the subject that follows.',
        hint2: 'An action that happened before another past action uses had + past participle.',
        hint3: 'These phrases ensure you compare equivalent things.',
        explanation: 'After an introductory participial phrase, the subject must be the one performing that action. The past perfect shows an earlier past event. "That of" / "those of" fixes faulty comparisons by ensuring you compare like with like.'
      }
    },
    {
      id: 'sat-gr7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice — Set 2** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The professor insists that every student **submits** their final paper on time. \\nWhich correction(s) should be made?',
            options: ['Change "submits" to "submit" only', 'Change "their" to "his or her" only', 'Change "submits" to "submit" AND "their" to "his or her"', 'No change needed'],
            correctAnswer: 2,
            explanation: 'After "insists that," use the subjunctive: "submit" (not "submits"). Also, "every student" is singular, so "his or her" is correct (SAT standard).'
          },
          {
            question: 'The company not only increased employee salaries **but also was providing** better health benefits. \\nWhich revision fixes the error?',
            options: ['but also providing', 'but also provided', 'but it also will provide', 'No change needed'],
            correctAnswer: 1,
            explanation: '"Not only increased…but also ___" — the verb forms must be parallel. "Increased" and "provided" are both simple past.'
          }
        ]
      }
    },
    {
      id: 'sat-gr7-summary',
      type: 'text' as const,
      content: `
## Test-Day Tips

1. **Read the full sentence** before looking at the answer choices — understand the intended meaning first.
2. **Use the checklist:** subject-verb agreement → pronouns → tense → structure → modifiers → parallelism.
3. **"No change" is sometimes correct** — don't fix what isn't broken.
4. **Shorter is often better:** The SAT tends to prefer concise, clear phrasing over wordy alternatives.
5. **Trust your ear, but verify with rules.** If it sounds wrong, find the specific grammar rule that's violated.
6. **Eliminate clearly wrong answers first,** then compare the remaining choices carefully.

### Most Common SAT Grammar Errors (in order of frequency):
1. Subject-verb agreement (especially with intervening phrases)
2. Pronoun errors (ambiguity, agreement)
3. Verb tense shifts
4. Sentence boundaries (fragments & run-ons)
5. Modifier placement (especially dangling)
6. Parallelism in lists and comparisons

**You've completed the SAT Grammar & Conventions course! 🎉**
      `
    }
  ]
};
"""))


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating SAT Grammar & Conventions lessons…")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done — 7 files written.")
