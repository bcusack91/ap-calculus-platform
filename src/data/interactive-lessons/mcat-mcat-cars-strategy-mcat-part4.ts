export const mcatCarsStratPart4Data = {
  topicSlug: 'mcat-cars-strategy-mcat',
  sections: [
    {
      id: 'cs4-intro',
      type: 'text' as const,
      content: `# CARS Strategy

**Part 4 of 7 — Handling Difficult Passages**

### When You're Lost

1. **Don't panic** — difficult passages are designed to be difficult for everyone
2. **Focus on structure**: Even if content is confusing, you can track:
   - What is the author arguing?
   - Are they for or against something?
   - Where does the argument shift?

### Difficult Passage Types

| Type | Challenge | Strategy |
|------|-----------|----------|
| **Philosophy** | Abstract, dense language | Focus on the core claim, ignore jargon |
| **Art criticism** | Subjective, opinionated | Track the critic's position clearly |
| **Ethics** | Multiple perspectives | Note who says what |
| **History** | Dense dates/names | Focus on cause → effect, not memorizing specifics |

### The 2-Pass Approach for Hard Passages

**Pass 1**: Read through once, get the gist (don't stop to reread)
**Pass 2**: Use questions to guide you back to specific sections

### When to Skip a Passage

- If a passage is extremely difficult, flag ALL its questions
- Answer what you can on the first pass
- Come back with remaining time
- Always guess before time runs out!`
    },
    {
      id: 'cs4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Difficult Passages** 🎯`,
      exercise: {
        questions: [
          {
            question: `You finish reading a dense philosophy passage and cannot state the main idea. The best next step is:`,
            options: [`Start the questions — they will guide you to re-examine specific parts of the passage`, `Reread the entire passage from the beginning`, `Skip the passage entirely and move on`, `Guess on all questions immediately`],
            correctAnswer: 0,
            explanation: `Questions point you to specific sections. Often, working through the questions helps you understand the passage structure better than a second full read. This is more time-efficient than rereading everything.`
          }
        ]
      }
    },
    {
      id: 'cs4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Difficult passages are expected — don't let them derail you
- Focus on argument STRUCTURE when content is confusing
- Let questions guide your understanding on a second targeted read
- Skip wisely: flag, guess, and come back if time permits`
    }
  ]
};
