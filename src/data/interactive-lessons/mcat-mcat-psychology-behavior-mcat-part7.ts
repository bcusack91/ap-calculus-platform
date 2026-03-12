export const mcatPsychBehavPart7Data = {
  topicSlug: 'mcat-psychology-behavior-mcat',
  sections: [
    {
      id: 'pb7-intro',
      type: 'text' as const,
      content: `# Psychology & Behavior for the MCAT

**Part 7 of 7 — Development & Identity**

### Erikson's Psychosocial Stages

| Stage | Age | Crisis |
|-------|-----|--------|
| Trust vs. Mistrust | 0-1 | Infant depends on caregiver reliability |
| Autonomy vs. Shame | 1-3 | Toddler develops independence |
| Initiative vs. Guilt | 3-6 | Child explores and leads |
| Industry vs. Inferiority | 6-12 | Competence in school and social |
| Identity vs. Role Confusion | 12-18 | Adolescent finds self |
| Intimacy vs. Isolation | 18-40 | Young adult forms close relationships |
| Generativity vs. Stagnation | 40-65 | Contributing to society |
| Integrity vs. Despair | 65+ | Reflecting on life's meaning |

### Kohlberg's Moral Development

| Level | Reasoning | Example |
|-------|-----------|---------|
| **Pre-conventional** | Self-interest (punishment/reward) | "I'll get in trouble" |
| **Conventional** | Social norms, law and order | "It's the rule" |
| **Post-conventional** | Universal ethical principles | "It's the right thing even if illegal" |

### Attachment Types (Ainsworth)

| Type | Description |
|------|-------------|
| Secure | Distressed when parent leaves, happy on return |
| Avoidant | Little distress, ignores parent's return |
| Anxious-ambivalent | Very distressed, ambivalent on return (angry + clingy) |
| Disorganized | No consistent pattern, often from abuse |`
    },
    {
      id: 'pb7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Development** 🎯`,
      exercise: {
        questions: [
          {
            question: `An adolescent struggling to define their values, career goals, and identity is in which Erikson stage?`,
            options: [`Identity vs. Role Confusion (ages 12-18)`, `Intimacy vs. Isolation`, `Industry vs. Inferiority`, `Initiative vs. Guilt`],
            correctAnswer: 0,
            explanation: `Erikson's fifth stage (Identity vs. Role Confusion) occurs during adolescence. Successfully navigating this stage produces a strong sense of identity; failure leads to role confusion and uncertainty about self.`
          }
        ]
      }
    },
    {
      id: 'pb7-summary',
      type: 'text' as const,
      content: `### Psychology & Behavior — Complete! ✅

The Psych/Soc section tests your understanding of how psychological, social, and biological factors influence behavior and health. Master the major theories (Piaget, Erikson, Kohlberg, Freud), neurotransmitters, brain regions, and learning principles.`
    }
  ]
};
