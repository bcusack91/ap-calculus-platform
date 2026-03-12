export const satRWStrategyPart7Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw7-intro',
      type: 'text' as const,
      content: `# R&W Module Review & Test Strategy

**Part 7 of 7 — Putting It All Together**

### Digital SAT R&W Structure

| Module | Questions | Time | Focus |
|---|---|---|---|
| **Module 1** | 27 | 32 min | Mix of reading & writing |
| **Module 2** | 27 | 32 min | Adaptive difficulty based on Module 1 |

### Question Type Distribution

| Type | ~Questions Per Module |
|---|---|
| Craft and Structure | 6-7 |
| Information and Ideas | 6-7 |
| Standard English Conventions | 6-7 |
| Expression of Ideas | 6-7 |

### Time Strategy: The 70-Second Rule

- 32 minutes ÷ 27 questions = ~71 seconds per question
- **Easy questions:** 30-45 seconds (save time for harder ones)
- **Medium questions:** 60-90 seconds
- **Hard questions:** Flag and return if over 2 minutes

### Decision Framework for Writing Questions

1. Is there a grammar error? → Fix it (conventions)
2. Is there wordiness? → Choose concise option (eliminate redundancy)
3. Is there a transition? → Identify the relationship (addition, contrast, cause)
4. Is it a rhetorical synthesis? → Match the stated goal

### Final Tips

- **Read answer choices vertically** — compare what's different between them to identify what's being tested
- **On pronouns:** Always check what the pronoun refers to
- **On transitions:** Cover the transition word and predict the relationship first
- **On conciseness:** Among grammatically correct choices, shorter is usually better
- **When stuck:** Eliminate the two most obviously wrong choices, then compare the remaining two carefully`
    },
    {
      id: 'rw7-quiz',
      type: 'multiple-choice' as const,
      content: '**Comprehensive R&W Review** 🎯',
      exercise: {
        questions: [
          {
            question: '"The study, which was conducted by researchers at MIT, _____ that sleep deprivation affects memory." Which answer is most concise and correct?',
            options: ['found', 'was able to find out and determine', 'found and concluded definitively', 'had the finding that'],
            correctAnswer: 0,
            explanation: 'All convey similar meaning, but "found" is the most concise. The SAT consistently rewards eliminating unnecessary words. "Was able to find out and determine" is redundant; "had the finding that" is wordy.'
          },
          {
            question: 'Approximately how many seconds should you spend on each R&W question?',
            options: ['About 70 seconds (32 min ÷ 27 questions)', 'About 30 seconds to leave time for review', 'About 2 minutes per question', 'Exactly 60 seconds'],
            correctAnswer: 0,
            explanation: '32 minutes ÷ 27 questions = approximately 71 seconds each. Budget less time for easy questions (30-45s) and more for hard ones (up to 2 minutes), but 70 seconds is the target average.'
          },
          {
            question: '"The new medication proved effective. _____, it carried fewer side effects than existing treatments." Best transition:',
            options: ['Moreover — adds another positive point', 'However — this contrasts with effectiveness', 'Therefore — side effects are a result of effectiveness', 'For example — side effects illustrate effectiveness'],
            correctAnswer: 0,
            explanation: 'Both sentences present positive aspects of the medication. "Moreover" adds supporting information. "However" would imply contrast (but both points are positive). "Therefore" implies causation that isn\'t present.'
          }
        ]
      }
    }
  ]
};