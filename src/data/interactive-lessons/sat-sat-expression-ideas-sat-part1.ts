export const satExpressionPart1Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei1-intro',
      type: 'text' as const,
      content: `# Effective Language Use

**Part 1 of 7 — Precision and Word Choice**

Expression of Ideas questions test whether you can choose the most **precise**, **effective**, and **appropriate** word or phrase for a given context.

### Precision Over Generality

The SAT rewards **specific** language over **vague** language.

| Vague | Precise |
|---|---|
| "The results were good" | "The results showed a 23% improvement" |
| "The politician talked about problems" | "The senator addressed income inequality" |
| "The thing that happened" | "The earthquake that struck in March" |
| "They did stuff about it" | "The committee implemented new regulations" |

### Tone Matching

Your word choice must match the passage's established tone:

- **Academic/Formal:** "The findings corroborate previous research."
- **Journalistic/Neutral:** "The study supports earlier work."
- **Informal (rare on SAT):** "The study backs up what we already knew."

The SAT will include a correct-but-wrong-tone answer choice as a trap.

### Connotation Awareness

Words can have similar denotations but different connotations:

| Positive | Neutral | Negative |
|---|---|---|
| **thrifty** | economical | **cheap** |
| **confident** | self-assured | **arrogant** |
| **youthful** | young | **immature** |
| **firm** | decided | **stubborn** |

Choose the word whose connotation matches the author's attitude.`
    },
    {
      id: 'ei1-quiz',
      type: 'multiple-choice' as const,
      content: '**Precision Practice** 🎯',
      exercise: {
        questions: [
          {
            question: '"The scientist _____ that the species had migrated further north than any previous study had documented." Which verb is most precise?',
            options: ['discovered', 'found out', 'knew about', 'saw'],
            correctAnswer: 0,
            explanation: '"Discovered" implies finding something new and previously unknown, which matches documenting something no previous study had shown. "Found out" is informal, "knew about" implies prior knowledge, and "saw" is too literal.'
          },
          {
            question: 'In a formal academic passage about economic policy, which word best replaces "things got worse"?',
            options: ['conditions deteriorated', 'stuff declined', 'things went downhill', 'the situation got bad'],
            correctAnswer: 0,
            explanation: '"Conditions deteriorated" matches academic tone perfectly. "Stuff" and "things" are informal, and "went downhill" is colloquial.'
          },
          {
            question: 'A passage praises an architect\'s innovative design. Which word best describes her approach? "Her _____ approach to public spaces transformed urban design."',
            options: ['visionary', 'weird', 'radical', 'unusual'],
            correctAnswer: 0,
            explanation: 'The passage praises the architect, so we need a positive connotation. "Visionary" (positive), "weird" (negative), "radical" (neutral-to-negative in this context), "unusual" (neutral but underwhelming). "Visionary" best matches the praising tone.'
          }
        ]
      }
    }
  ]
};