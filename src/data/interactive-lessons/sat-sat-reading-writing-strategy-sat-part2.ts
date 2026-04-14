export const satRWStrategyPart2Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw2-intro',
      type: 'text' as const,
      content: `# Subject-Verb Agreement

**Part 2 of 7 — Making Subjects and Verbs Match**

Subject-verb agreement is one of the most tested grammar concepts on the SAT. The trick is identifying the TRUE subject, which the SAT deliberately obscures.

### Basic Rule

Singular subjects take singular verbs; plural subjects take plural verbs.

- "The dog **runs**." (singular)
- "The dogs **run**." (plural)

### SAT's Favorite Tricks

**1. Prepositional phrase between subject and verb:**

❌ "The collection of rare stamps **are** valuable."  
✅ "The collection of rare stamps **is** valuable."

The subject is "collection" (singular), NOT "stamps."

**2. Inverted sentence order:**

❌ "Among the ruins **was** several ancient artifacts."  
✅ "Among the ruins **were** several ancient artifacts."

The subject is "artifacts" (plural), which comes AFTER the verb.

**3. Compound subjects with "or/nor":**

The verb agrees with the **nearer** subject:
- "Neither the teacher nor the students **were** prepared." (students = plural)
- "Neither the students nor the teacher **was** prepared." (teacher = singular)

**4. Indefinite pronouns:**

| Always Singular | Always Plural | Depends on Context |
|---|---|---|
| everyone, each, nobody, either, neither | both, few, many, several | all, some, most, none |

### Strategy: Cross Out the Clutter

When you see a long sentence, mentally cross out prepositional phrases and modifying clauses to find the bare subject-verb pair.

"The **impact** [of rising temperatures] [on coastal communities] **has** been devastating."  
Subject: impact (singular) → Verb: has (singular) ✅`
    },
    {
      id: 'rw2-quiz',
      type: 'multiple-choice' as const,
      content: '**Subject-Verb Agreement Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"Each of the scientists _____ the findings independently." Which verb is correct?',
            options: ['verified', 'were verifying', 'verify', 'have verified'],
            correctAnswer: 0,
            explanation: '"Each" is ALWAYS singular, regardless of the prepositional phrase "of the scientists." So the singular "verified" is correct.'
          },
          {
            question: '"The data from the three experiments _____ a clear pattern." Which verb is correct?',
            options: ['reveal—"data" is treated as plural in scientific writing on the SAT', 'reveals—"data" is always singular', 'has revealed—singular collective noun', 'are revealing—always use plural with "data"'],
            correctAnswer: 0,
            explanation: 'On the SAT, "data" is typically treated as plural (its original Latin form). "The data reveal" is standard. However, note that both singular and plural are accepted in modern usage—on the SAT, match the context clues.'
          },
          {
            question: '"Neither the CEO nor the board members _____ willing to compromise." Which is correct?',
            options: ['were—the verb agrees with "board members" (nearer, plural)', 'was—the verb agrees with "CEO" (first subject)', 'is—always use singular with "neither"', 'has been—use present perfect with "neither/nor"'],
            correctAnswer: 0,
            explanation: 'With "neither...nor," the verb agrees with the subject CLOSER to it. "Board members" is closer and plural, so "were" is correct.'
          }
        ]
      }    },
    {
      id: 'rw2-text2',
      type: 'text' as const,
      content: `## Deep Dive: Subject-Verb Agreement Traps

### Worked Example 1: Finding the True Subject

| Sentence | Cross Out Clutter | True Subject | Verb |
|---|---|---|---|
| "The results **of the experiment** **conducted last year** indicate…" | of the experiment, conducted last year | results (plural) | indicate ✅ |
| "A series **of lectures** **on modern philosophy** was…" | of lectures, on modern philosophy | series (singular) | was ✅ |
| "The mayor, **along with several council members,** plans…" | along with several council members | mayor (singular) | plans ✅ |

**Key:** "Along with," "together with," "as well as," and "in addition to" do NOT make a subject plural. Only "and" creates a compound subject.

### Worked Example 2: Tricky Subjects

| Subject | Singular or Plural? | Why |
|---|---|---|
| "The number of students" | Singular | "The number" = a specific quantity |
| "A number of students" | Plural | "A number of" = many/several |
| "Economics" | Singular | Academic subject = one thing |
| "The statistics" | Plural | Refers to data points |
| "The news" | Singular | Despite the -s ending |
| "Physics" | Singular | Academic subject |

### Quick Reference: Indefinite Pronouns

| Always Singular | Always Plural | Context-Dependent |
|---|---|---|
| each, every, either, neither | both, few, many, several | all, some, most, none, any |
| everyone, nobody, somebody | — | — |
| everything, nothing, something | — | — |

**Context-dependent rule:** Look at what follows "of":
- "All of the **water** is gone." (water = uncountable → singular)
- "All of the **students** are here." (students = countable plural → plural)`
    },
    {
      id: 'rw2-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Agreement Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: '"The teacher, as well as her students, _____ excited about the field trip." Which verb is correct?',
            options: ['is — "as well as" doesn\'t make the subject plural', 'are — "teacher" and "students" together are plural', 'were — past tense is needed', 'have been — present perfect required'],
            correctAnswer: 0,
            explanation: '"As well as" is NOT the same as "and." It doesn\'t create a compound subject. The true subject is still "teacher" (singular), so the verb is "is."'
          },
          {
            question: '"A number of complaints _____ been filed." Which is correct?',
            options: ['have — "a number of" = many (plural)', 'has — "number" is singular', 'is — "a" makes it singular', 'was — past tense singular'],
            correctAnswer: 0,
            explanation: '"A number of" means "many/several" and takes a plural verb. Compare: "THE number of complaints HAS increased" (singular). "A number" = plural, "The number" = singular.'
          },
          {
            question: '"None of the evidence _____ conclusive." Which verb is correct?',
            options: ['is — "evidence" is uncountable (singular)', 'are — "none" is always plural', 'were — past tense plural', 'have been — "none" takes plural'],
            correctAnswer: 0,
            explanation: '"None" is context-dependent. "Evidence" is uncountable, so it takes a singular verb: "is." If it were "None of the RESULTS," "are" would be correct.'
          }
        ]
      }
    },
    {
      id: 'rw2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Subject-Verb Agreement Check** — Select the correct answer.',
      exercise: {
        dropdowns: [
          '"Each of the students _____ prepared." [is|are|were|have been]',
          '"The news _____ surprising." [is|are|were|have been]',
          '"A number of issues _____ raised." [were|was|is|has been]',
          '"Along with" makes the subject [still singular|plural|either|unknown]'
        ],
        correctAnswers: ['is', 'is', 'were', 'still singular'],
        hint1: '"Each" is always singular.',
        hint2: '"News" looks plural but is singular.',
        hint3: '"A number of" = many → plural verb.',
        explanation: '"Each" = singular → "is." "News" = singular → "is." "A number of" = many → plural → "were." "Along with" doesn\'t change subject number.'
      }
    },
    {
      id: 'rw2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Rule | Example |
|---|---|
| Cross out prepositional phrases | "The results **of the study** indicate…" |
| "Along with" ≠ "and" | Subject stays singular |
| "A number of" = plural | "A number of students are…" |
| "The number of" = singular | "The number of students is…" |
| Indefinite pronouns | Each/every = singular; both/few = plural |
| Context-dependent | All/some/none → check what follows "of" |

*Next: Transitions & Logical Flow →*`    }
  ]
};