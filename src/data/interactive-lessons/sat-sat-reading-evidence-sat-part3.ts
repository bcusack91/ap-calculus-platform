export const satReadingEvidencePart3Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're3-intro',
      type: 'text' as const,
      content: `# Inference & Implied Meaning

**Part 3 of 7 — Reading Between the Lines**

Inference questions ask you to determine what the passage **implies** or **suggests** without directly stating. These require careful attention to tone, word choice, and logical connections.

### Inference vs. Speculation

- **Valid inference:** A conclusion logically supported by evidence in the passage
- **Speculation:** A guess that goes beyond what the passage supports

**Rule:** If you can point to specific words or sentences that support your inference, it's valid. If you're imagining scenarios the author didn't address, it's speculation.

### Common Inference Question Stems

- "It can be inferred from the passage that..."
- "The author most likely believes that..."
- "The passage suggests that..."
- "Based on the passage, it is reasonable to conclude that..."

### Example

> Dr. Chen spent fourteen years developing the vaccine, working through three failed clinical trials before the fourth showed promising results. When asked about her persistence, she simply said, "The problem was worth solving."

**We can infer:**
- ✅ Dr. Chen is dedicated to her research (evidence: 14 years, persisted through failures)
- ✅ She is motivated by the importance of the work, not just personal success (evidence: "The problem was worth solving")
- ❌ She was the only person working on this vaccine (not stated or implied)
- ❌ The vaccine is now widely available (we only know trial 4 was promising)`
    },
    {
      id: 're3-quiz',
      type: 'multiple-choice' as const,
      content: '**Inference Practice** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage describes a musician who "abandoned a lucrative career in law to pursue composing, despite her family\'s vocal disapproval." What can most reasonably be inferred?',
            options: ['Music was more important to her than financial security or family approval', 'She was unsuccessful as a lawyer', 'Her family eventually supported her decision', 'She regretted leaving law'],
            correctAnswer: 0,
            explanation: 'She gave up something "lucrative" (financial security) and acted "despite" disapproval (family approval). This directly implies music mattered more than both. The other options require information not in the passage.'
          },
          {
            question: 'A historian writes: "While popular accounts credit Edison as the sole inventor of the lightbulb, the reality involves at least two dozen contemporaneous inventors working on similar designs." The author most likely believes:',
            options: ['Innovation is typically a collective rather than individual process', 'Edison should receive no credit for the lightbulb', 'Popular history is always inaccurate', 'The other inventors were more talented than Edison'],
            correctAnswer: 0,
            explanation: 'The contrast between "sole inventor" and "two dozen contemporaneous inventors" implies innovation is collective. The author doesn\'t say Edison deserves NO credit (just not sole credit), doesn\'t say popular history is ALWAYS wrong, and makes no comparison of talent.'
          },
          {
            question: 'Which approach is MOST reliable for inference questions?',
            options: ['Choose the answer that is supported by specific evidence in the passage', 'Choose the answer that seems most logical based on your outside knowledge', 'Choose the most detailed or specific answer', 'Choose the answer that the author would most likely agree with personally'],
            correctAnswer: 0,
            explanation: 'SAT inferences must be textually grounded. Outside knowledge, level of detail, and personal opinions are all unreliable criteria. Always ask: "What specific words in the passage support this?"'
          }
        ]
      }
    }
  ]
};