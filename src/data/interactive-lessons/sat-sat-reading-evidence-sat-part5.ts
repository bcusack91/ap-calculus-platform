export const satReadingEvidencePart5Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're5-intro',
      type: 'text' as const,
      content: `# Purpose & Rhetoric

**Part 5 of 7 — Why Did the Author Write This?**

Purpose questions test your ability to understand not just WHAT the author says, but WHY they structured the passage the way they did.

### Author's Purpose Categories

| Purpose | Signal Words | Example |
|---|---|---|
| **Argue/Persuade** | "should," "must," "critical that" | "Schools should require financial literacy courses" |
| **Inform/Explain** | "researchers found," "data shows" | "A 2024 study revealed that bees navigate using Earth's magnetic field" |
| **Analyze/Evaluate** | "however," "on the other hand," "while" | "While the policy reduced crime, it disproportionately affected minority communities" |
| **Narrate** | descriptive language, chronological | "Maria opened the letter with trembling hands" |
| **Compare/Contrast** | "unlike," "similarly," "whereas" | "Unlike previous telescopes, JWST can detect infrared light" |

### Function of a Specific Paragraph/Sentence

Some questions ask: "The author includes the anecdote in lines 15-20 primarily to..."

**Common functions:**
- Provide a concrete example of an abstract concept
- Introduce a counterargument before refuting it
- Establish the author's credibility or emotional connection
- Transition between two main ideas
- Anticipate and address a potential objection

### Example

> "Skeptics argue that renewable energy cannot reliably power a modern grid. However, a 2024 analysis of Germany's Energiewende program shows that wind and solar provided 52% of the nation's electricity with fewer blackouts than the previous decade."

**Purpose of the first sentence:** To introduce a counterargument (the skeptics' view) that the author will then refute with evidence.`
    },
    {
      id: 're5-quiz',
      type: 'multiple-choice' as const,
      content: '**Purpose & Rhetoric Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage begins with a personal anecdote about the author\'s grandmother, then shifts to discussing the economics of elder care in America. The anecdote primarily serves to:',
            options: ['Create an emotional connection before presenting data-driven arguments', 'Prove that the author has personal expertise in elder care', 'Entertain the reader before a dry topic', 'Show that the author\'s grandmother needed better care'],
            correctAnswer: 0,
            explanation: 'Opening anecdotes in argumentative passages humanize the issue and create emotional investment before the author presents statistics and policy arguments. This is a standard rhetorical move.'
          },
          {
            question: 'In a passage about ocean acidification, the author writes: "Some might argue that marine organisms have adapted to changing conditions for millions of years." This sentence primarily serves to:',
            options: ['Acknowledge a counterargument the author will likely challenge', 'Support the author\'s central claim about adaptation', 'Shift the focus from ocean chemistry to biology', 'Conclude the author\'s argument'],
            correctAnswer: 0,
            explanation: '"Some might argue" is a classic signal that the author is introducing a counterargument. The author will almost certainly follow this with "However" or "But" and then present evidence against this view.'
          }
        ]
      }
    }
  ]
};