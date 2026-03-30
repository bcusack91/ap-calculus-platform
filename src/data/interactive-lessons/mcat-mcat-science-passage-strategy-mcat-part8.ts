export const mcatSciPassagePart8Data = {
  topicSlug: 'mcat-science-passage-strategy-mcat',
  sections: [
    {
      id: 'mcat-feedback-graph-intro',
      type: 'text' as const,
      content: `# MCAT Science Passage Strategy

**Part 8 of 8 - Feedback Loop Graph Reasoning**

Hard MCAT graph questions often combine a passage claim with trend-shape reasoning. Your job is to decide whether the graph supports:
- positive-feedback-like amplification,
- negative-feedback-like damping, or
- no strong feedback signature in the measured range.

### 30-Second Method

1. Extract the claim (feedback sign and mechanism)
2. Compute first differences across conditions
3. Match trend shape to claim
4. Avoid overclaiming causality
5. Pick follow-up design that manipulates the proposed mediator

### Common Traps

- "Any increase proves positive feedback"
- "No interpretation without p-values"
- "One graph proves universal causality"
- "Drop intermediate points for cleaner inference"`
    },
    {
      id: 'mcat-feedback-graph-quiz',
      type: 'multiple-choice' as const,
      content: `**Feedback Loop Graph Reasoning Drill**`,
      exercise: {
        questions: [
          {
            question: `A passage claims a positive feedback loop. A graph shows condition-to-condition increases of +2, +5, and +8 units. Which conclusion is best supported?`,
            options: [
              `The graph pattern is consistent with positive-feedback-like amplification in the measured range.`,
              `The graph proves universal causality in all populations.`,
              `Any increase must be negative feedback because values remain bounded.`,
              `No interpretation is possible unless the curve decreases first.`
            ],
            correctAnswer: 0,
            explanation: `Increasing first differences (+2, +5, +8) support amplification in this range without proving universal causality.`
          },
          {
            question: `A passage claims positive feedback, but graph deltas are +9, +4, +2 across ordered conditions. What is the best evaluation?`,
            options: [
              `The claim is supported because all values increase.`,
              `The trend challenges positive feedback and better matches damping behavior.`,
              `The graph is uninterpretable because it does not include confidence intervals.`,
              `The trend proves there is no mechanism.`
            ],
            correctAnswer: 1,
            explanation: `Shrinking deltas indicate damping, which challenges positive-feedback amplification.`
          },
          {
            question: `Which follow-up most directly tests whether a proposed feedback loop drives the trend?`,
            options: [
              `Increase sample size only and compare p-values.`,
              `Drop intermediate conditions and compare baseline vs final only.`,
              `Perturb the hypothesized mediator while holding input levels fixed, then test whether trend shape changes as predicted.`,
              `Replicate once and accept causality if rank order is unchanged.`
            ],
            correctAnswer: 2,
            explanation: `Feedback mechanism tests should manipulate the mediator that closes the loop.`
          },
          {
            question: `A graph has nearly constant deltas across conditions (+4, +4, +5). A passage asks whether data support positive or negative feedback. Best answer?`,
            options: [
              `Positive feedback is proven because the response rises.`,
              `Negative feedback is proven because growth is not exponential.`,
              `The trend is roughly linear, so the graph alone does not strongly distinguish positive vs negative feedback in this range.`,
              `No trend exists.`
            ],
            correctAnswer: 2,
            explanation: `Approximately constant deltas imply near-linear behavior in the measured range.`
          }
        ]
      }
    },
    {
      id: 'mcat-feedback-graph-summary',
      type: 'text' as const,
      content: `### Key Takeaways

- Use first differences as your core graph test.
- Increasing deltas suggest amplification; decreasing deltas suggest damping.
- Trend support is not the same as causal proof.
- Strongest MCAT answers match the graph and respect inference limits.`
    }
  ]
}
