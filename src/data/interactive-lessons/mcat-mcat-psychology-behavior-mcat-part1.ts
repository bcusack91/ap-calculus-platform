export const mcatPsychBehavPart1Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb1-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 1 of 7 — Sensation & Perception**

### Sensation vs. Perception

- **Sensation**: Detection of stimuli by sensory receptors (bottom-up)
- **Perception**: Brain's interpretation of sensory information (top-down)

### Sensory Thresholds

| Concept | Definition |
|---------|-----------|
| **Absolute threshold** | Minimum stimulus detectable 50% of the time |
| **Difference threshold (JND)** | Minimum change in stimulus detectable 50% of the time |
| **Weber's Law** | $\\Delta I / I = k$ (JND is proportional to stimulus intensity) |
| **Signal detection theory** | Detection depends on signal strength AND decision criteria (hits, misses, false alarms, correct rejections) |

### Sensory Adaptation

- Decreased sensitivity to constant stimuli over time
- Example: You stop noticing the smell of your own house
- Does NOT apply to pain (for survival reasons)

### Gestalt Principles of Perception

| Principle | Description |
|-----------|-------------|
| Proximity | Near objects grouped together |
| Similarity | Similar objects grouped together |
| Closure | Brain fills in gaps to complete shapes |
| Continuity | Prefer smooth, continuous patterns |
| Figure-ground | Distinguish object from background |`
    },
    {
      id: 'pb1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Sensation & Perception** 🎯`,
      exercise: {
        questions: [
          {
            question: `According to Weber's Law, if you can just barely notice the difference between 10 lbs and 11 lbs, the JND for a 50 lb weight would be:`,
            options: [`5 lbs ($\\Delta I / I = 1/10$, so $\\Delta I = 50 \\times 1/10 = 5$)`, `1 lb`, `10 lbs`, `11 lbs`],
            correctAnswer: 0,
            explanation: `Weber's Law: $\\Delta I / I = k$. From the 10 lb example, $k = 1/10$. For 50 lbs: $\\Delta I = 50 \\times 1/10 = 5$ lbs. The JND scales with stimulus intensity — this is why you can notice a candle in a dark room but not in sunlight.`
          }
        ]
      }
    },
    {
      id: 'pb1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Sensation = detection (bottom-up). Perception = interpretation (top-down).
- Weber's Law: JND is proportional to stimulus intensity ($\\Delta I / I = k$)
- Signal detection theory: both signal AND decision criteria matter
- Gestalt principles: proximity, similarity, closure, continuity, figure-ground`
    }
  ]
};
