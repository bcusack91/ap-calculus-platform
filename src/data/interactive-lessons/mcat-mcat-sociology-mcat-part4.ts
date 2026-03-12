export const mcatSociologyPart4Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so4-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 4 of 7 — Deviance & Social Control**

### Theories of Deviance

| Theory | Key Idea |
|--------|----------|
| **Labeling theory** | Deviance is created by social labels, not inherent in the act |
| **Differential association** | Deviance is learned through interaction with others |
| **Strain theory** (Merton) | Gap between cultural goals and legitimate means → deviance |
| **Social control theory** | Strong social bonds prevent deviance |

### Merton's Strain Theory Adaptations

| Adaptation | Goals? | Means? | Example |
|-----------|--------|--------|---------|
| Conformity | Accept | Accept | Working hard for success |
| Innovation | Accept | Reject | Drug dealing for money |
| Ritualism | Reject | Accept | Going through motions at dead-end job |
| Retreatism | Reject | Reject | Dropping out of society |
| Rebellion | Replace | Replace | Revolutionary movements |

### Stigma (Goffman)

- **Stigma**: Attribute that is deeply discrediting
- Can be visible (physical) or concealable (mental illness, HIV status)
- Leads to discrimination, social exclusion
- **Medicalization**: Framing deviance as medical condition (alcoholism → AUD)

### MCAT Connection

The MCAT frequently asks about stigma in healthcare:
- Mental health stigma → delayed treatment seeking
- HIV stigma → reduced testing and disclosure
- Substance use stigma → barriers to treatment`
    },
    {
      id: 'so4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Deviance** 🎯`,
      exercise: {
        questions: [
          {
            question: `A teenager from a low-income neighborhood turns to drug dealing to achieve financial success. According to Merton's strain theory, this is:`,
            options: [`Innovation — accepting cultural goals (wealth) but using illegitimate means`, `Conformity`, `Retreatism`, `Ritualism`],
            correctAnswer: 0,
            explanation: `Innovation: the person accepts society's goals (wealth/success) but rejects conventional means of achieving them (education/career), instead using illegitimate means (crime). This is Merton's explanation for why poverty correlates with certain types of crime.`
          }
        ]
      }
    },
    {
      id: 'so4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Labeling theory: deviance isn't inherent — it's socially defined
- Merton's strain theory: innovation (illegal means for accepted goals)
- Stigma affects healthcare access and outcomes (mental health, HIV, addiction)
- Medicalization turns deviance into medical conditions`
    }
  ]
};
