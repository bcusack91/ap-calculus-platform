export const mcatPsychBehavPart4Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb4-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 4 of 7 — Cognition & Consciousness**

### Cognitive Development (Piaget)

| Stage | Age | Key Feature |
|-------|-----|-------------|
| Sensorimotor | 0-2 | Object permanence |
| Preoperational | 2-7 | Egocentrism, lack of conservation |
| Concrete operational | 7-11 | Conservation, logical thinking (concrete) |
| Formal operational | 12+ | Abstract/hypothetical reasoning |

### Language Development

| Stage | Age | Example |
|-------|-----|---------|
| Babbling | 6-9 months | "ba-ba-ba" |
| One-word (holophrastic) | 12 months | "mama" |
| Two-word (telegraphic) | 18-24 months | "want cookie" |
| Grammar explosion | 2-5 years | Complex sentences |

### Consciousness & Sleep

**Sleep Stages**:

| Stage | Features | Brain Waves |
|-------|----------|-------------|
| NREM 1 | Light sleep, hypnagogic hallucinations | Theta |
| NREM 2 | Sleep spindles, K-complexes | Theta |
| NREM 3 | Deep/slow-wave sleep, hard to wake | Delta |
| REM | Dreams, muscle atonia, rapid eye movement | Beta (like awake!) |

### Problem Solving

- **Algorithm**: Step-by-step guaranteed solution
- **Heuristic**: Mental shortcut (faster but error-prone)
- **Confirmation bias**: Seeking evidence that confirms existing beliefs
- **Functional fixedness**: Can't see new uses for familiar objects`
    },
    {
      id: 'pb4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cognition** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 4-year-old child watches liquid poured from a short wide glass into a tall narrow glass and says there is now "more." This demonstrates:`,
            options: [`Lack of conservation — a hallmark of Piaget\`s preoperational stage`, `Object permanence failure`, `Concrete operational thinking`, `Formal operational thinking'`],
            correctAnswer: 0,
            explanation: `Preoperational children (ages 2-7) lack conservation — they can't understand that quantity stays the same when appearance changes. They focus on ONE dimension (height) and ignore another (width).`
          }
        ]
      }
    },
    {
      id: 'pb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Piaget: sensorimotor → preoperational → concrete → formal operational
- REM sleep: dreams, muscle atonia, beta waves (paradoxical sleep)
- NREM 3 (slow-wave): deep restorative sleep, delta waves
- Heuristics: fast but error-prone. Confirmation bias: seeking confirming evidence.`
    }
  ]
};
