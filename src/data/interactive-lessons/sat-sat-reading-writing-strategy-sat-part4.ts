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
            options: ['The CEO announced a new strategy.', 'The CEO announced strategy.', 'The CEO of the company announced a new strategy.', 'The CEO, the company leader, announced a new strategy.'],
            correctAnswer: 0,
            explanation: 'A CEO is by definition the person leading the company, so "who is the person in charge of leading the company" is redundant. "The CEO announced a new strategy" keeps all the essential information. "Announced strategy" is shorter but drops the article and the word "new," which changes the meaning; the other two versions still repeat the idea of leading the company.'
          },
          {
            question: '"Due to the fact that the weather was bad, the game was postponed." The most concise revision is:',
            options: ['Because of bad weather, the game was postponed.', 'Bad weather, the game was postponed.', 'The game was postponed due to the fact of bad weather.', 'Since the weather was bad in nature, the game was postponed.'],
            correctAnswer: 0,
            explanation: '"Due to the fact that" → "Because of." This is one of the most common wordiness patterns the SAT tests. "Bad weather, the game was postponed" is shorter but ungrammatical (the opening noun phrase is not connected to the clause). The other two versions keep padding ("due to the fact of," "in nature").'
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
            options: ['The project failed because of insufficient funding.', 'The project failed, insufficient funding.', 'The reason the project failed was because of insufficient funding.', 'The project failed, and the reason was insufficient funding.'],
            correctAnswer: 0,
            explanation: '"The reason why…was because" is doubly redundant: "the reason" and "because" both announce the cause. "The project failed because of insufficient funding" says it once. "The project failed, insufficient funding" is shorter but ungrammatical, "The reason…was because" keeps the redundancy, and "and the reason was" adds a roundabout second clause.'
          },
          {
            question: 'Which phrase is NOT redundant?',
            options: ['Unexpected delay', 'Close proximity', 'Future plans', 'Combined total'],
            correctAnswer: 0,
            explanation: '"Unexpected delay" is not redundant, because delays can be expected (a scheduled closure) or unexpected (a sudden storm), so the adjective adds information. "Close proximity" (proximity = nearness), "future plans" (plans are always for the future), and "combined total" (a total is already combined) all repeat themselves.'
          },
          {
            question: 'When multiple answer choices are grammatically correct, the SAT almost always prefers the:',
            options: ['shortest option that keeps the meaning clear', 'briefest option, even if it drops key information', 'option with the most precise academic vocabulary', 'option that adds the greatest amount of detail'],
            correctAnswer: 0,
            explanation: 'The SAT\'s conciseness rule: among grammatically correct options that say the same thing, the shortest wins. But brevity never beats meaning: an option that drops essential information is wrong however short it is. Vocabulary sophistication and extra detail are not what the SAT rewards.'
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
          'Among correct choices with the same meaning, prefer the [shortest|most detailed|most complex|most formal]',
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