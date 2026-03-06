export const satExpressionPart4Data = {
  topicSlug: 'sat-expression-ideas-sat',
  sections: [
    {
      id: 'ei4-intro',
      type: 'text' as const,
      content: `# Synthesis & Integrating Information

**Part 4 of 7 — Combining Ideas Effectively**

Synthesis questions ask you to combine information from multiple sources or multiple parts of a passage into a single, coherent statement.

### Combining with Relative Clauses

Two choppy sentences:
- "Marie Curie discovered radium in 1898."
- "She was the first woman to win a Nobel Prize."

Combined: "Marie Curie, **who was the first woman to win a Nobel Prize**, discovered radium in 1898."

### Combining with Appositives

An appositive renames or describes a noun:
- "Dr. Marcus Thompson, **a leading cardiologist at Johns Hopkins**, published the study."

### Combining with Participial Phrases

- "The hurricane destroyed 500 homes." + "It caused \\$2 billion in damage."
- → "**Destroying 500 homes**, the hurricane caused \\$2 billion in damage."

### Which Information to Keep?

When combining, ask: **What is the most important information for the passage's purpose?**

If the passage is about scientific achievement:
✅ Keep: discovery, impact, significance
❌ Cut: biographical trivia, exact dates (unless relevant)

### SAT Trap ⚠️

Trap answers combine the information correctly but **change the emphasis** or **relationship** between ideas. Always check that the relative importance of each idea is preserved.`
    },
    {
      id: 'ei4-quiz',
      type: 'multiple-choice' as const,
      content: '**Synthesis Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'Which best combines these sentences? "The Great Barrier Reef spans 2,300 kilometers. It is the world\'s largest coral reef system. It is visible from space."',
            options: ['The Great Barrier Reef, the world\'s largest coral reef system, spans 2,300 kilometers and is visible from space.', 'Spanning 2,300 kilometers, the Great Barrier Reef is large and visible from space, being the world\'s largest coral reef system.', 'The world\'s largest coral reef system is the Great Barrier Reef, which spans 2,300 kilometers, and it is visible from space.', 'The Great Barrier Reef spans 2,300 kilometers; it is the world\'s largest coral reef system; it is visible from space.'],
            correctAnswer: 0,
            explanation: 'Option A uses an appositive cleanly, flows well, and preserves all three pieces of information. The other options are either wordy (B), structurally awkward (C), or just a list with semicolons (D).'
          },
          {
            question: 'When combining sentences on the SAT, the most important factor is:',
            options: ['Maintaining the original meaning while improving flow', 'Making the sentence as short as possible', 'Using the most complex grammatical structure', 'Keeping every word from both original sentences'],
            correctAnswer: 0,
            explanation: 'The SAT values clarity and flow. You can cut words, but you must not change the meaning. Brevity and complexity are secondary to preserving meaning and improving readability.'
          }
        ]
      }
    }
  ]
};