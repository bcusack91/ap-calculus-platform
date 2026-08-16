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
            question: 'The team of researchers <u>have</u> published their findings in a prestigious journal. \nWhich correction, if any, should be made?',
            options: ['Change "have" to "has"', 'Change "their" to "its"', 'Both A and B', 'No change needed'],
            correctAnswer: 2,
            explanation: '"Team" is singular: "The team…has published its findings." Both the verb and the pronoun should be singular to match the collective noun.'
          },
          {
            question: '<u>Analyzing the data carefully,</u> several unexpected trends were discovered by the researchers. \nWhat error does this sentence contain?',
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
            question: 'The professor insists that every student <u>submits</u> their final paper on time. \nWhich correction(s) should be made?',
            options: ['Change "submits" to "submit" only', 'Change "their" to "his or her" only', 'Change "submits" to "submit" AND "their" to "his or her"', 'No change needed'],
            correctAnswer: 2,
            explanation: 'After "insists that," use the subjunctive: "submit" (not "submits"). Also, "every student" is singular, so "his or her" is correct (SAT standard).'
          },
          {
            question: 'The company not only increased employee salaries <u>but also was providing</u> better health benefits. \nWhich revision fixes the error?',
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
