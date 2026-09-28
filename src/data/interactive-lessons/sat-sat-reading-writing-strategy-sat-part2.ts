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
            options: ['has verified', 'are verifying', 'verify', 'have verified'],
            correctAnswer: 0,
            explanation: '"Each" is ALWAYS singular, regardless of the prepositional phrase "of the scientists." So the singular "has verified" is correct; "are verifying," "verify," and "have verified" are plural forms that agree with "scientists."'
          },
          {
            question: '"The results from the three experiments _____ a clear pattern." Which verb is correct?',
            options: ['have revealed', 'has revealed', 'is revealing', 'reveals'],
            correctAnswer: 0,
            explanation: 'Cross out "from the three experiments": the subject is "results," which is plural, so the verb must be plural: "have revealed." "Has revealed," "is revealing," and "reveals" are all singular forms that agree with "experiment," not with the true subject.'
          },
          {
            question: '"Neither the CEO nor the board members _____ willing to compromise." Which is correct?',
            options: ['were', 'was', 'is', 'has been'],
            correctAnswer: 0,
            explanation: 'With "neither...nor," the verb agrees with the subject CLOSER to it. "Board members" is closer and plural, so "were" is correct. "Was," "is," and "has been" are singular forms that agree with "CEO," the farther subject.'
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
            options: ['was', 'were', 'are', 'seem'],
            correctAnswer: 0,
            explanation: '"As well as" is NOT the same as "and." It doesn\'t create a compound subject. The true subject is still "teacher" (singular), so the verb must be singular: "was." "Were," "are," and "seem" are all plural forms.'
          },
          {
            question: '"A number of complaints _____ filed last week." Which is correct?',
            options: ['were', 'was', 'is', 'has been'],
            correctAnswer: 0,
            explanation: '"A number of" means "many/several" and takes a plural verb: "were filed." Compare: "THE number of complaints HAS increased" (singular). "A number" = plural, "The number" = singular.'
          },
          {
            question: '"None of the evidence _____ conclusive." Which verb is correct?',
            options: ['was', 'were', 'have been', 'seem'],
            correctAnswer: 0,
            explanation: '"None" is context-dependent. "Evidence" is uncountable, so it takes a singular verb: "was." "Were," "have been," and "seem" are plural. If it were "None of the RESULTS," a plural verb would be correct.'
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
          '"Along with" makes a singular subject [still singular|plural|compound|either one]'
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