#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for ACT English Grammar.
Output directory: src/data/interactive-lessons/
File pattern:    act-act-english-grammar-act-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "act-english-grammar-act"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"act-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Subject-Verb Agreement ──────────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
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
"""))


# ── Part 2: Pronoun Usage ──────────────────────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
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
"""))


# ── Part 3: Verb Tense Consistency ──────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const actEnglishGrammarPart3Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-eg3-intro',
      type: 'text' as const,
      content: `
# ⏳ Verb Tense Consistency

**Part 3 of 7 — Tense Shifts, Perfect Tenses & Sequence of Events**

The ACT tests whether you can keep verb tenses **consistent** within a sentence and across a passage. Unnecessary tense shifts are one of the most common errors tested.

| Tense | Example | When to Use |
|-------|---------|-------------|
| Simple present | *She walks* | Habitual actions, general truths |
| Simple past | *She walked* | Completed past actions |
| Present perfect | *She has walked* | Past action with present relevance |
| Past perfect | *She had walked* | Action completed before another past action |
| Future | *She will walk* | Actions that haven't happened yet |

**The Golden Rule:** Don't shift tenses unless there's a reason (a time change, a shift from general truth to specific event, etc.).
      `
    },
    {
      id: 'act-eg3-shifts',
      type: 'text' as const,
      content: `
## Unnecessary Tense Shifts

A tense shift is an error when the time frame hasn't changed but the verb tense does.

**Example 1 — Unnecessary Shift:**
- ❌ *She opened the door and **sees** a package on the porch.*
- ✅ *She opened the door and **saw** a package on the porch.*
- Both actions happened in the past — keep both verbs in past tense.

**Example 2 — Shift in a Paragraph:**
- ❌ *The explorers traveled for weeks. They **cross** rivers and **climb** mountains.*
- ✅ *The explorers traveled for weeks. They **crossed** rivers and **climbed** mountains.*

**Example 3 — Acceptable Shift (general truth):**
- ✅ *Galileo proved that the Earth **revolves** around the Sun.*
- Present tense is correct for the second verb because it states a permanent truth.

**ACT Tip:** Read the surrounding sentences to determine the established tense. If the passage is in past tense, an underlined verb in present tense is almost certainly the error.
      `
    },
    {
      id: 'act-eg3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Tense Consistency — Spot the Shift** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"The author wrote the novel in 1954 and dedicates it to her mother." What is the error?',
            options: ['"wrote" should be "writes"', '"dedicates" should be "dedicated"', 'No error', '"her" should be "their"'],
            correctAnswer: 1,
            explanation: 'The sentence describes past events (1954), so both verbs should be past tense. "Dedicates" should be "dedicated."'
          },
          {
            question: '"Every morning, Marcus jogs through the park, ate breakfast, and reads the news." Identify the tense error.',
            options: ['"jogs" should be "jogged"', '"ate" should be "eats"', '"reads" should be "read"', 'No error'],
            correctAnswer: 1,
            explanation: 'The sentence describes a daily routine (present tense). "Ate" is past tense and should be "eats" to match "jogs" and "reads."'
          }
        ]
      }
    },
    {
      id: 'act-eg3-perfect',
      type: 'text' as const,
      content: `
## Perfect Tenses & Sequence of Events

**Present perfect** (*has/have + past participle*) connects a past action to the present:
- ✅ *I **have lived** here for ten years.* (started in the past, still true now)

**Past perfect** (*had + past participle*) shows that one past action happened **before** another:
- ✅ *By the time the ambulance arrived, the patient **had already recovered**.*
- The recovering happened **first**, then the ambulance arrived.

**Common ACT Pattern — "By the time" / "Before":**
- ❌ *Before the concert started, the band **already tuned** their instruments.*
- ✅ *Before the concert started, the band **had already tuned** their instruments.*
- The tuning happened before the starting → use past perfect for the earlier event.

**ACT Tip:** Whenever you see "before," "by the time," or "after" in a sentence with two past events, check whether the earlier event uses past perfect (*had + verb*).
      `
    },
    {
      id: 'act-eg3-input1',
      type: 'input-boxes' as const,
      content: `
**Choose the Correct Tense** ✏️

1) "By the time we arrived, the movie _____ (started / had started)." — Type the correct form.
2) "She _____ (has worked / worked) at the company since 2018." — Type the correct form.
3) "Yesterday, he _____ (walks / walked) to school." — Type the correct form.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['had started', 'has worked', 'walked'],
        hint1: 'The movie starting happened BEFORE "we arrived" — which tense shows an earlier past action?',
        hint2: '"Since 2018" means the action started in the past and continues — which tense connects past to present?',
        hint3: '"Yesterday" signals a completed past action.',
        explanation: '1) "Had started" — past perfect for the earlier of two past events. 2) "Has worked" — present perfect for an action that began in the past and continues. 3) "Walked" — simple past for a completed action.'
      }
    },
    {
      id: 'act-eg3-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Tense ID — Quick Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The past perfect tense is formed with …',
            options: ['has + past participle', 'had + past participle', 'will + base verb', 'was + present participle']
          },
          {
            label: 'An unnecessary tense shift means the writer changed tense without …',
            options: ['using a comma', 'a change in time frame', 'adding a subject', 'starting a new paragraph']
          },
          {
            label: '"The scientist has discovered a new element." This is in the … tense.',
            options: ['simple past', 'present perfect', 'past perfect', 'simple present']
          }
        ],
        correctAnswers: ['had + past participle', 'a change in time frame', 'present perfect'],
        hint1: 'Past perfect = one step further back than simple past.',
        hint2: 'Tense shifts are only valid when time actually changes.',
        hint3: '"Has discovered" = has + past participle.',
        explanation: 'Past perfect uses "had." Tense shifts need a time-frame change to be valid. "Has discovered" is present perfect (has + past participle).'
      }
    },
    {
      id: 'act-eg3-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"After the team wins the championship, the fans rushed onto the field." Which revision fixes the tense error?',
            options: ['Change "wins" to "won"', 'Change "rushed" to "rush"', 'Change "rushed" to "had rushed"', 'No change needed'],
            correctAnswer: 0,
            explanation: '"Rushed" is past tense, so the other verb should also be past tense: "won." The sentence describes a completed event.'
          },
          {
            question: '"The students have completed the assignment before the bell rang." What is wrong?',
            options: ['Nothing — the sentence is correct', '"have completed" should be "had completed"', '"rang" should be "rings"', '"completed" should be "completing"'],
            correctAnswer: 1,
            explanation: 'Two past events: completing happened before the bell rang. The earlier event needs past perfect: "had completed."'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Sentence Structure ──────────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const actEnglishGrammarPart4Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-eg4-intro',
      type: 'text' as const,
      content: `
# 🔗 Sentence Structure

**Part 4 of 7 — Fragments, Run-Ons, Comma Splices & How to Fix Them**

The ACT tests your ability to recognize and fix **sentence-structure errors**. These fall into three categories:

| Error | Definition | Example |
|-------|-----------|---------|
| Fragment | Missing a subject, verb, or complete thought | *Because the rain started.* |
| Run-on | Two independent clauses joined with no punctuation | *I studied hard I passed the test.* |
| Comma splice | Two independent clauses joined with only a comma | *I studied hard, I passed the test.* |

**ACT Tip:** If an answer choice creates a fragment or a run-on, eliminate it — the ACT never rewards incomplete or improperly joined sentences.
      `
    },
    {
      id: 'act-eg4-fragments',
      type: 'text' as const,
      content: `
## Sentence Fragments

A **fragment** is a group of words that looks like a sentence but is missing a subject, a verb, or a complete thought.

**Common Fragment Types:**

1. **Dependent clause standing alone:**
   - ❌ *Because she studied every night.*
   - ✅ *Because she studied every night, she passed the exam.*

2. **Phrase without a main verb:**
   - ❌ *Running through the park on a sunny day.*
   - ✅ *She was running through the park on a sunny day.*

3. **"Which" or "That" clause standing alone:**
   - ❌ *Which was surprising to everyone.*
   - ✅ *The result, which was surprising to everyone, changed the experiment.*

**How to Fix a Fragment:**
- Attach it to a nearby independent clause, OR
- Add the missing subject or verb to make it complete.

**ACT Tip:** Words like "because," "although," "since," "when," "which," and "that" create dependent clauses. If you see one standing alone, it's a fragment.
      `
    },
    {
      id: 'act-eg4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Fragments & Run-Ons — Identify the Error** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a complete sentence?',
            options: ['Although the weather was perfect for sailing.', 'Running along the riverbank at dawn.', 'The committee reviewed the proposal and voted unanimously.', 'Because the project, which had been delayed twice.'],
            correctAnswer: 2,
            explanation: 'Option C has a clear subject ("The committee") and a complete predicate ("reviewed … and voted …"). The others are fragments — dependent clauses or phrases lacking a main clause.'
          },
          {
            question: '"The concert was canceled, the band could not travel due to the storm." This is an example of a:',
            options: ['Fragment', 'Run-on sentence', 'Comma splice', 'Correct sentence'],
            correctAnswer: 2,
            explanation: 'Two independent clauses ("The concert was canceled" and "the band could not travel…") are joined only by a comma. This is a comma splice.'
          }
        ]
      }
    },
    {
      id: 'act-eg4-fixes',
      type: 'text' as const,
      content: `
## Run-Ons & Comma Splices: Four Ways to Fix Them

**The four correct ways to join two independent clauses:**

1. **Period:** *I studied hard. I passed the test.*
2. **Semicolon:** *I studied hard; I passed the test.*
3. **Comma + coordinating conjunction (FANBOYS):** *I studied hard, and I passed the test.*
4. **Subordination:** *Because I studied hard, I passed the test.*

**FANBOYS** = For, And, Nor, But, Or, Yet, So

**Common Mistakes:**
- ❌ Comma alone: *I studied hard, I passed.* (comma splice)
- ❌ No punctuation: *I studied hard I passed.* (run-on)
- ❌ Comma + non-FANBOYS word: *I studied hard, however I passed.* (still a splice — "however" is not a FANBOYS conjunction)

**Fixing "however," "therefore," "moreover," etc.:**
- ✅ *I studied hard; however, I still failed.*
- ✅ *I studied hard. However, I still failed.*
- These are **conjunctive adverbs**, not coordinating conjunctions. They need a semicolon or period before them.

**ACT Tip:** If you see two complete sentences joined by only a comma, look for an answer that adds a FANBOYS conjunction, a semicolon, or a period.
      `
    },
    {
      id: 'act-eg4-input1',
      type: 'input-boxes' as const,
      content: `
**Classify the Error** ✏️

Type "fragment," "run-on," or "comma splice" for each sentence.

1) "Walking to the store after finishing her homework."
2) "The alarm went off we rushed outside."
3) "The cake looked delicious, nobody wanted to cut it."
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['fragment', 'run-on', 'comma splice'],
        hint1: 'Is there a subject performing an action with a complete verb?',
        hint2: 'Two independent clauses with no punctuation between them.',
        hint3: 'Two independent clauses joined by only a comma — what is that called?',
        explanation: '1) Fragment — no subject or main verb (just a participial phrase). 2) Run-on — two independent clauses with no punctuation. 3) Comma splice — two independent clauses joined by only a comma.'
      }
    },
    {
      id: 'act-eg4-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Sentence Structure Rules** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'FANBOYS stands for …',
            options: ['For, And, Nor, But, Or, Yet, So', 'First, Also, Next, Before, Or, Yet, Since', 'For, After, Nor, But, Over, Yet, So']
          },
          {
            label: '"However" is a …',
            options: ['coordinating conjunction', 'conjunctive adverb', 'preposition', 'subordinating conjunction']
          },
          {
            label: 'A comma splice can be fixed by replacing the comma with a …',
            options: ['colon', 'semicolon', 'dash', 'All of these could work depending on context']
          }
        ],
        correctAnswers: ['For, And, Nor, But, Or, Yet, So', 'conjunctive adverb', 'semicolon'],
        hint1: 'The seven coordinating conjunctions spell FANBOYS.',
        hint2: '"However" connects ideas but needs a semicolon before it at a clause boundary.',
        hint3: 'A semicolon is the most standard fix for a comma splice on the ACT.',
        explanation: 'FANBOYS = For, And, Nor, But, Or, Yet, So. "However" is a conjunctive adverb (not FANBOYS). A semicolon is the most common ACT-approved fix for a comma splice.'
      }
    },
    {
      id: 'act-eg4-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"The museum was closed for renovations, therefore visitors were turned away at the entrance." How should this be corrected?',
            options: ['No change needed', 'Change the comma to a semicolon: "…renovations; therefore, visitors…"', 'Remove "therefore"', 'Change "therefore" to "and"'],
            correctAnswer: 1,
            explanation: '"Therefore" is a conjunctive adverb, not a FANBOYS conjunction. A semicolon is needed before it: "renovations; therefore, visitors…"'
          },
          {
            question: '"Although the hypothesis was well-supported by preliminary data." What is the best revision?',
            options: ['No change needed', 'Remove "Although"', 'Add a comma after "data"', 'Change "Although" to "Moreover"'],
            correctAnswer: 1,
            explanation: '"Although" makes this a dependent clause (fragment). Removing "Although" turns it into a complete sentence: "The hypothesis was well-supported by preliminary data."'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Modifiers & Parallelism ─────────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const actEnglishGrammarPart5Data = {
  topicSlug: 'act-english-grammar-act',
  sections: [
    {
      id: 'act-eg5-intro',
      type: 'text' as const,
      content: `
# ✨ Modifiers & Parallelism

**Part 5 of 7 — Dangling Modifiers, Misplaced Modifiers & Parallel Structure**

The ACT tests your ability to place modifiers correctly and keep sentence elements parallel. These errors can be subtle, so learning the patterns is essential.

**Key Concepts:**

| Error | What Happens | Example |
|-------|-------------|---------|
| Dangling modifier | The modifier has no logical subject | *Walking to class, the bell rang.* |
| Misplaced modifier | The modifier is next to the wrong word | *She almost drove her kids to every game.* |
| Faulty parallelism | List items don't have the same form | *She likes running, swimming, and to hike.* |
      `
    },
    {
      id: 'act-eg5-dangling',
      type: 'text' as const,
      content: `
## Dangling Modifiers

A **dangling modifier** is an introductory phrase that doesn't logically modify the subject that follows it.

**The Rule:** The subject right after the comma must be the one doing the action in the introductory phrase.

**Example 1 — Dangling:**
- ❌ *Hoping to win the scholarship, the application was submitted early.*
- Who was hoping? Not "the application"!
- ✅ *Hoping to win the scholarship, **Maria** submitted the application early.*

**Example 2 — Dangling:**
- ❌ *After reviewing the data, the experiment was redesigned.*
- ✅ *After reviewing the data, **the researchers** redesigned the experiment.*

**Example 3 — Correct:**
- ✅ *Exhausted from the hike, **the campers** collapsed into their tents.*
- The campers were exhausted — the modifier matches the subject.

**ACT Tip:** When a sentence starts with an -ing phrase, a past-participle phrase, or an infinitive phrase, check that the subject right after the comma is the one performing that action.
      `
    },
    {
      id: 'act-eg5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Modifier Placement — Spot the Error** 🔍
      `,
      exercise: {
        questions: [
          {
            question: '"Covered in mud, the owner bathed the dog in the backyard." What is the problem?',
            options: ['No error', 'The sentence says the owner is covered in mud — misplaced modifier', 'The verb tense is wrong', '"backyard" should be "back yard"'],
            correctAnswer: 1,
            explanation: 'The modifier "Covered in mud" describes the subject right after the comma — "the owner." But it should describe "the dog." A correct version: "Covered in mud, the dog was bathed by the owner in the backyard" or "The owner bathed the mud-covered dog in the backyard."'
          },
          {
            question: '"She only eats vegetables on weekdays." What does "only" actually modify here?',
            options: ['It modifies "She" — she is the only one who eats vegetables', 'It modifies "eats" — she only eats (doesn\'t cook) them', 'It modifies "vegetables" — she eats nothing but vegetables', 'It modifies "weekdays" — she does this on weekdays only'],
            correctAnswer: 1,
            explanation: 'As written, "only" modifies "eats." If the intended meaning is "She eats vegetables on weekdays only," then "only" should be moved to the end: "She eats vegetables only on weekdays." If she eats nothing but vegetables, write: "She eats only vegetables on weekdays."'
          }
        ]
      }
    },
    {
      id: 'act-eg5-parallel',
      type: 'text' as const,
      content: `
## Parallel Structure

**Parallelism** means that items in a list or comparison must have the **same grammatical form**.

**Example 4 — Faulty Parallelism in a List:**
- ❌ *The camp offers hiking, swimming, and to canoe.*
- ✅ *The camp offers hiking, swimming, and canoeing.*
- All items should be gerunds (-ing forms).

**Example 5 — Parallelism with Correlative Conjunctions:**
- Use parallel forms after: *both … and, either … or, neither … nor, not only … but also*
- ❌ *She is not only a talented singer but also dances well.*
- ✅ *She is not only a talented singer but also a skilled dancer.*

**Example 6 — Parallelism in Comparisons:**
- ❌ *Reading a book is more relaxing than to watch TV.*
- ✅ *Reading a book is more relaxing than watching TV.*

**ACT Tip:** When you see a list or a comparison underlined, check that every element has the same grammatical structure (all nouns, all gerunds, all infinitives, etc.).
      `
    },
    {
      id: 'act-eg5-input1',
      type: 'input-boxes' as const,
      content: `
**Fix the Parallelism** ✏️

Rewrite the underlined portion to make it parallel. Type only the corrected word or phrase.

1) "The job requires patience, creativity, and being organized." → Change "being organized" to: _____
2) "He likes to swim, to hike, and running." → Change "running" to: _____
3) "The recipe calls for chopping the onions, dicing the tomatoes, and the peppers should be sliced." → Change the last item to: _____
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['organization', 'to run', 'slicing the peppers'],
        hint1: 'The list uses nouns: patience, creativity, and …',
        hint2: 'The pattern is "to swim, to hike, and …"',
        hint3: 'Match the pattern: "chopping …, dicing …, and …"',
        explanation: '1) "Organization" — matches the nouns "patience" and "creativity." 2) "To run" — matches the infinitive pattern "to swim, to hike." 3) "Slicing the peppers" — matches the gerund phrases "chopping the onions" and "dicing the tomatoes."'
      }
    },
    {
      id: 'act-eg5-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Modifiers & Parallelism — Quick Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A dangling modifier lacks a logical …',
            options: ['verb', 'subject', 'object', 'conjunction']
          },
          {
            label: '"Both … and" requires … structure after each part.',
            options: ['parallel', 'opposite', 'complex', 'simple']
          },
          {
            label: 'Placing "only" directly before the word it modifies is an example of …',
            options: ['parallelism', 'correct modifier placement', 'subordination', 'coordination']
          }
        ],
        correctAnswers: ['subject', 'parallel', 'correct modifier placement'],
        hint1: 'The modifier describes someone, but that someone is missing from the sentence.',
        hint2: 'Correlative conjunctions demand matching grammatical forms.',
        hint3: '"Only" should sit right next to what it limits.',
        explanation: 'A dangling modifier has no logical subject to attach to. "Both … and" requires parallel forms. Placing "only" before the word it modifies ensures clarity.'
      }
    },
    {
      id: 'act-eg5-actpractice',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Practice** 📋
      `,
      exercise: {
        questions: [
          {
            question: '"Jogging through the park, a squirrel crossed the path in front of me." What is the best revision?',
            options: ['No change needed', '"Jogging through the park, I saw a squirrel cross the path in front of me."', '"A squirrel, jogging through the park, crossed the path."', '"The path was crossed by a squirrel, jogging through the park."'],
            correctAnswer: 1,
            explanation: 'The dangling modifier "Jogging through the park" should describe "I" (the person jogging), not "a squirrel." Revision B correctly places the true subject right after the comma.'
          },
          {
            question: '"The professor told the students to study the chapter, review their notes, and that they should complete the worksheet." What is the best revision of the underlined portion?',
            options: ['No change', 'complete the worksheet', 'completing the worksheet', 'the worksheet should be completed'],
            correctAnswer: 1,
            explanation: 'The parallel structure is "to study …, review …, and ___." Since "to" is shared from the beginning, the items should all be base verbs: "study, review, and complete."'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Commonly Confused Words ─────────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
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
            options: ['Their, they\\'re, there', 'They\\'re, their, the', 'There, their, they\\'re', 'They\\'re, there, their'],
            correctAnswer: 1,
            explanation: '"They\\'re" (they are) going to submit "their" (possessive) applications before "the" deadline. The sentence uses all forms correctly in option B.'
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
        explanation: '1) "Its" — possessive, showing the tail belongs to the dog. "It\\'s" would mean "it is." 2) "Than" — used for comparisons. "Then" is for time. 3) "Who\\'s" — contraction of "who is." "Whose" is possessive.'
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
            question: '"The company released it\\'s annual report, which showed a positive affect on revenue." How many errors are in this sentence?',
            options: ['0', '1', '2', '3'],
            correctAnswer: 2,
            explanation: 'Two errors: (1) "it\\'s" should be "its" (possessive, not "it is"), and (2) "affect" should be "effect" (noun meaning result). Corrected: "The company released its annual report, which showed a positive effect on revenue."'
          },
          {
            question: '"Your never going to believe whose at the door." How should this be corrected?',
            options: ['No change needed', 'Change "Your" to "You\\'re" only', 'Change "whose" to "who\\'s" only', 'Change "Your" to "You\\'re" AND "whose" to "who\\'s"'],
            correctAnswer: 3,
            explanation: 'Both need to be contractions: "You\\'re" (you are) never going to believe "who\\'s" (who is) at the door.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 7: Review & Mixed Practice ─────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
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
            explanation: 'Dangling modifier: "Having finished the marathon" should describe the runners, but the subject after the comma is "a medal." Medals don\\'t finish marathons! Correct: "Having finished the marathon, each runner was given a medal."'
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
            question: '"The orchestra, who had been rehearsing for months, performed they\\'re best concert of the season; the affect on the audience was tremendous." How many errors are in this sentence?',
            options: ['1', '2', '3', '4'],
            correctAnswer: 2,
            explanation: 'Three errors: (1) "who" should be "which" or "that" — "orchestra" is a thing, not a person. (2) "they\\'re" should be "their" — possessive, not "they are." (3) "affect" should be "effect" — a noun (the result). The semicolon usage is correct.'
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
"""))


# ── Main ────────────────────────────────────────────────────────────────────
def main():
    os.makedirs(OUT_DIR, exist_ok=True)
    print("Generating ACT English Grammar lessons …")
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done — 7 files written.")


if __name__ == "__main__":
    main()
