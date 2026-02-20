export const mcatPsychBehavPart5Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb5-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 5 of 7 — Personality & Psychological Disorders**

### Personality Theories

| Theory | Key Idea |
|--------|----------|
| **Psychoanalytic** (Freud) | Id (pleasure), Ego (reality), Superego (morality); unconscious drives |
| **Humanistic** (Rogers, Maslow) | Self-actualization, unconditional positive regard |
| **Trait** (Big Five) | Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism (OCEAN) |
| **Social-cognitive** (Bandura) | Reciprocal determinism (behavior ↔ cognition ↔ environment) |
| **Biological** | Temperament, genetics, brain structure |

### Freud's Defense Mechanisms

| Defense | Description | Example |
|---------|-------------|---------|
| Repression | Pushing threatening thoughts unconscious | Forgetting traumatic event |
| Projection | Attributing own unacceptable feelings to others | Cheater accuses partner of cheating |
| Displacement | Redirecting emotion to safer target | Angry at boss → kicks dog |
| Rationalization | Logical excuse for unacceptable behavior | "I deserved to cheat — the test was unfair" |
| Reaction formation | Acting opposite to true feelings | Being overly kind to someone you hate |
| Sublimation | Channeling unacceptable impulses into acceptable ones | Aggression → contact sports |

### Psychological Disorders

| Disorder | Key Features |
|----------|-------------|
| Major Depressive Disorder | Persistent sadness, anhedonia, sleep/appetite changes |
| Bipolar Disorder | Manic and depressive episodes |
| Schizophrenia | Positive symptoms (hallucinations, delusions) + negative (flat affect, social withdrawal) |
| Anxiety Disorders | GAD, panic, phobias, OCD, PTSD |`
    },
    {
      id: 'pb5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Personality & Disorders** 🎯',
      exercise: {
        questions: [
          {
            question: 'A person who is extremely hostile unconsciously but acts overly friendly to everyone is demonstrating:',
            options: ['Reaction formation — acting opposite to true unconscious feelings', 'Projection', 'Sublimation', 'Displacement'],
            correctAnswer: 0,
            explanation: 'Reaction formation involves behaving in the OPPOSITE way of one\'s true (threatening) feelings. Being overly kind when harboring hostility is the classic example. Contrast with sublimation (channeling into acceptable activity).'
          }
        ]
      }
    },
    {
      id: 'pb5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Big Five (OCEAN): Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism
- Freud: Id (pleasure), Ego (reality), Superego (morality) + defense mechanisms
- Schizophrenia: positive symptoms (additions) + negative symptoms (deficits)
- Bandura: reciprocal determinism (person ↔ behavior ↔ environment)`
    }
  ]
};
