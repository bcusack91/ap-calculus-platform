export const satReadingEvidencePart6Data = {
  topicSlug: 'sat-reading-evidence-sat',
  sections: [
    {
      id: 're6-intro',
      type: 'text' as const,
      content: `# Data Interpretation in Reading

**Part 6 of 7 — Charts, Graphs, and Tables in R&W**

The Digital SAT includes informational graphics alongside some Reading & Writing passages. You must integrate data from both the text and the visual.

### Common Graphic Types

- **Bar charts:** Compare quantities across categories
- **Line graphs:** Show trends over time
- **Tables:** Present precise numerical data
- **Scatter plots:** Show relationships between two variables

### Strategy: Text + Graphic Integration

1. Read the passage first to understand the main argument
2. Examine the graphic: title, axes, labels, units
3. Ask: "How does this graphic support or complicate the passage's claims?"

### Example Question Pattern

**Passage says:** "Renewable energy adoption has accelerated dramatically in the past decade."

**Graph shows:** Solar installation growing from 2 GW in 2010 to 150 GW in 2023.

**Question:** "Which claim from the passage is best supported by the data in the figure?"

✅ Answer: The claim about dramatic acceleration—the graph shows 75x growth.

### SAT Trap ⚠️

- Don't confuse what the **text claims** with what the **data shows**. Sometimes the data actually **contradicts** or **qualifies** the text's claims.
- Always check the **scale and units** on graphs. A graph that looks dramatic might only show a change from 50.0% to 50.5%.`
    },
    {
      id: 're6-quiz',
      type: 'multiple-choice' as const,
      content: '**Data + Reading Integration** 🎯',
      exercise: {
        questions: [
          {
            question: 'A passage claims "Exercise significantly improves test scores." A table shows students who exercised 30 min/day scored an average of 82%, while non-exercisers scored 78%. Does the data support the claim?',
            options: ['Partially—the data shows improvement but "significantly" may overstate a 4-point difference', 'Yes—any improvement counts as significant', 'No—the data completely contradicts the claim', 'The data is irrelevant to the claim'],
            correctAnswer: 0,
            explanation: 'The data does show improvement (82 vs 78), so it partially supports the claim. But a 4-percentage-point difference might not qualify as "significant"—the word choice in the passage is stronger than the data warrants.'
          },
          {
            question: 'When a graph appears with a passage, you should read:',
            options: ['The passage first, then the graph title and labels, then integrate both', 'The graph first because visual data is more objective', 'Only the passage—the graph is supplementary', 'Only the graph—the passage is just context'],
            correctAnswer: 0,
            explanation: 'Start with the passage to understand the argument, then examine the graph with attention to title, axes, and units. Integration of both is always required for correct answers.'
          }
        ]
      }
    }
  ]
};