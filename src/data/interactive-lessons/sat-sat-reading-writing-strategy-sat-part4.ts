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
      }
    }
  ]
};