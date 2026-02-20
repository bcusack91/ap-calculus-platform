export const mcatPsychBehavPart3Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb3-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 3 of 7 — Motivation, Emotion & Stress**

### Theories of Motivation

| Theory | Key Idea |
|--------|----------|
| **Drive reduction** | Behavior reduces biological needs (hunger → eat) |
| **Incentive theory** | External rewards pull behavior |
| **Maslow's hierarchy** | Physiological → Safety → Love → Esteem → Self-actualization |
| **Self-determination** | Autonomy, competence, relatedness |
| **Arousal theory** | Seek optimal level of arousal (Yerkes-Dodson law) |

### Yerkes-Dodson Law

- Performance is best at moderate arousal
- Simple tasks: higher arousal = better
- Complex tasks: lower arousal = better
- Inverted-U relationship

### Theories of Emotion

| Theory | Sequence |
|--------|----------|
| **James-Lange** | Event → Physiological response → Emotion ("I'm afraid BECAUSE I'm running") |
| **Cannon-Bard** | Event → Physiological response AND Emotion simultaneously |
| **Schachter-Singer** (Two-Factor) | Event → Physiological arousal → Cognitive label → Emotion |

### Stress

**General Adaptation Syndrome** (Selye):
1. **Alarm**: Fight-or-flight (sympathetic activation)
2. **Resistance**: Body adapts but stays alert
3. **Exhaustion**: Resources depleted → illness/burnout`
    },
    {
      id: 'pb3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Motivation & Emotion** 🎯',
      exercise: {
        questions: [
          {
            question: 'According to the Schachter-Singer (two-factor) theory, experiencing an emotion requires:',
            options: ['Physiological arousal AND a cognitive label for that arousal', 'Only physiological arousal', 'Only cognitive appraisal', 'Behavior before emotion'],
            correctAnswer: 0,
            explanation: 'Two-factor theory: you experience arousal AND then cognitively interpret it. Same arousal can become different emotions depending on context. This is why a racing heart on a date might feel like attraction vs. anxiety.'
          }
        ]
      }
    },
    {
      id: 'pb3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- James-Lange: body first. Cannon-Bard: simultaneous. Schachter-Singer: arousal + label.
- Yerkes-Dodson: moderate arousal = best performance (inverted U)
- Maslow: needs in hierarchy (must satisfy lower before higher)
- Stress: Alarm → Resistance → Exhaustion (GAS)`
    }
  ]
};
