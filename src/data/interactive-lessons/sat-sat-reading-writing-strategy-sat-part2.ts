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
      }
    }
  ]
};