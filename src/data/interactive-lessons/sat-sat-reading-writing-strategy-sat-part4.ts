export const satRWStrategyPart4Data = {
  topicSlug: 'sat-reading-writing-strategy-sat',
  sections: [
    {
      id: 'rw4-intro',
      type: 'text' as const,
      content: `# Conciseness & Redundancy

**Part 4 of 7 — Eliminating Wordiness**

The SAT rewards clear, concise writing. If two answer choices are grammatically correct, the **shorter one is usually right**.

### Common Redundancy Patterns

| Redundant | Concise |
|---|---|
| "In the event that" | "If" |
| "Due to the fact that" | "Because" |
| "In order to" | "To" |
| "At the present time" | "Now" / "Currently" |
| "Each and every" | "Each" or "Every" |
| "Past history" | "History" |
| "True fact" | "Fact" |
| "Completely eliminate" | "Eliminate" |
| "The reason why is because" | "The reason is" or "Because" |

### The Conciseness Rule

When choosing between answer options:

1. **Eliminate grammatically incorrect choices first**
2. **Among correct choices, pick the most concise**
3. **Don't sacrifice clarity for brevity** — the shortest answer isn't correct if it changes the meaning

### Example

"The artist, **who was known for her innovative and groundbreaking approach to sculpture**, won the award."

Best revision: "The artist, **known for her innovative approach to sculpture**, won the award."

- Removed "who was" (unnecessary)
- Removed "groundbreaking" (redundant with "innovative")
- Same meaning, fewer words

### SAT Trap ⚠️

Sometimes the most concise answer creates ambiguity. Clarity beats brevity:

❌ "She told her she was wrong." (Ambiguous: who is "she"?)  
✅ "Maria told Sarah that Sarah was wrong." (Clear but longer)`
    },
    {
      id: 'rw4-quiz',
      type: 'multiple-choice' as const,
      content: '**Conciseness Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which is the most concise and effective revision? "The CEO, who is the person in charge of leading the company, announced a new strategy."',
            options: ['The CEO announced a new strategy.', 'The CEO of the company announced a new strategy for the future.', 'The company leader and CEO announced a new strategy.', 'Being the CEO, she announced a new strategy.'],
            correctAnswer: 0,
            explanation: 'Everyone knows what a CEO does—"who is the person in charge of leading the company" is completely redundant. The simplest version preserves all essential information.'
          },
          {
            question: '"Due to the fact that the weather was bad, the game was postponed." The most concise revision is:',
            options: ['Because of bad weather, the game was postponed.', 'The game was postponed due to the fact of bad weather.', 'Since the weather was bad in nature, the game was postponed.', 'Owing to the inclement weather conditions, the game was postponed.'],
            correctAnswer: 0,
            explanation: '"Due to the fact that" → "Because of." This is one of the most common wordiness patterns the SAT tests. Always replace multi-word phrases with single words when possible.'
          }
        ]
      }    },
    {
      id: 'rw4-text2',
      type: 'text' as const,
      content: `## Deep Dive: Spotting & Eliminating Wordiness

### Worked Example 1: Wordy → Concise Transformations

| Wordy Version | Concise Version | Words Saved |
|---|---|---|
| "She was of the opinion that the data was unreliable." | "She believed the data was unreliable." | 4 words |
| "Despite the fact that it rained, they played outside." | "Despite the rain, they played outside." | 3 words |
| "He made the decision to resign from his position." | "He decided to resign." | 5 words |
| "The experiment was carried out by the research team." | "The research team conducted the experiment." | 1 word + active voice |
| "There are many students who enjoy reading." | "Many students enjoy reading." | 3 words |

### Worked Example 2: Identifying Redundancy

| Redundant Phrase | Why It's Redundant | Fix |
|---|---|---|
| "Advance planning" | Planning is always in advance | "Planning" |
| "Brief summary" | Summaries are brief by definition | "Summary" |
| "Collaborate together" | Collaborate means work together | "Collaborate" |
| "End result" | A result is the end | "Result" |
| "Free gift" | Gifts are free by definition | "Gift" |
| "Personal opinion" | Opinions are personal | "Opinion" |
| "Revert back" | Revert means go back | "Revert" |
| "Unexpected surprise" | Surprises are unexpected | "Surprise" |

### The Conciseness Decision Process

| Step | Ask Yourself | Action |
|---|---|---|
| 1 | Is any choice grammatically wrong? | Eliminate it |
| 2 | Do any choices change the meaning? | Eliminate them |
| 3 | Among remaining choices, which is shortest? | Choose it |
| 4 | Does the shortest create ambiguity? | Choose next shortest |`
    },
    {
      id: 'rw4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Advanced Conciseness Challenge** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which is most concise? "The reason why the project failed was because of insufficient funding."',
            options: ['The project failed because of insufficient funding.', 'The reason the project failed was because of insufficient funding.', 'The reason why the project failed was due to the fact that funding was insufficient.', 'It was because of insufficient funding that the project failed.'],
            correctAnswer: 0,
            explanation: '"The reason why…was because" is triply redundant. "Because" alone establishes the cause. Option A eliminates all wordiness while preserving meaning.'
          },
          {
            question: 'Which phrase is NOT redundant?',
            options: ['Essential requirement', 'Close proximity', 'Future plans', 'Combined total'],
            correctAnswer: 0,
            explanation: '"Essential requirement" is not redundant — requirements can be essential or non-essential (nice-to-have). "Close proximity" (proximity = nearness), "future plans" (plans = future), and "combined total" (total = combined) are all redundant.'
          },
          {
            question: 'When multiple answer choices are grammatically correct, the SAT almost always prefers the:',
            options: ['Most concise option that preserves meaning', 'Longest and most detailed option', 'Option with the most academic vocabulary', 'Option that sounds most formal'],
            correctAnswer: 0,
            explanation: 'The SAT\'s #1 conciseness rule: among grammatically correct options, shorter wins. Length, vocabulary sophistication, and formality are secondary to brevity + clarity.'
          }
        ]
      }
    },
    {
      id: 'rw4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Conciseness Check** — Select the concise version.',
      exercise: {
        dropdowns: [
          '"In order to succeed" → [To succeed|In order that one might succeed|For the purpose of succeeding|So as to succeed]',
          '"Past history" is [redundant|correct|formal|academic]',
          'Among correct choices, prefer the [shortest|longest|most complex|most formal]',
          '"There are many people who believe…" → [Many people believe…|There exist many people believing…|It is believed by many…|People, many of whom believe…]'
        ],
        correctAnswers: ['To succeed', 'redundant', 'shortest', 'Many people believe…'],
        hint1: '"In order to" = "to."',
        hint2: 'History is already in the past.',
        hint3: 'Concise = correct on the SAT.',
        explanation: '"In order to" simplifies to "to." History is inherently past (redundant). Shortest correct option wins. "There are…who" → remove the clutter.'
      }
    },
    {
      id: 'rw4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Concept | Key Rule |
|---|---|
| Wordy phrases | "Due to the fact that" → "Because" |
| Redundancy | "Past history" → "History" |
| Decision process | Grammar first → meaning preserved → shortest wins |
| Exception | Don't sacrifice clarity for brevity |
| Passive → active | "Was conducted by the team" → "The team conducted" |

*Next: Pronoun Clarity & Agreement →*`    }
  ]
};