export const mcatSociologyPart2Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so2-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 2 of 7 — Social Stratification & Inequality**

### Types of Social Stratification

| System | Description | Mobility |
|--------|-------------|---------|
| Caste | Birth-determined social position | None (ascribed) |
| Class | Based on economic resources | Some (achieved) |
| Meritocracy | Based on ability/effort | High (idealized) |

### Social Class Indicators

- **Income**: What you earn
- **Wealth**: What you own (assets minus debts) — much more unequal than income
- **Education**: Level of formal schooling
- **Occupation**: Type of work

### Health Disparities (ULTRA HIGH YIELD for MCAT)

Social determinants of health:
- **SES**: Lower SES → higher rates of chronic disease, lower life expectancy
- **Race/ethnicity**: Disparities in access, treatment, outcomes
- **Gender**: Different disease patterns, healthcare utilization
- **Geography**: Rural vs. urban access to care

### Intersectionality

Multiple social identities (race, class, gender) intersect to create unique experiences of privilege or disadvantage. A low-income Black woman faces different challenges than a wealthy white woman OR a low-income Black man.`
    },
    {
      id: 'so2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Stratification** 🎯`,
      exercise: {
        questions: [
          {
            question: `Research shows that low-SES individuals have higher rates of heart disease, diabetes, and early death. This is BEST explained by:`,
            options: [`Social determinants of health — limited access to care, healthy food, safe environments, and chronic stress`, `Genetic differences between social classes`, `Personal choices alone`, `Random variation`],
            correctAnswer: 0,
            explanation: `Social determinants of health include economic stability, education, healthcare access, neighborhood environment, and social context. These structural factors explain most health disparities — not individual genetics or choices alone.`
          }
        ]
      }
    },
    {
      id: 'so2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Social stratification: caste (ascribed), class (achieved), meritocracy (idealized)
- SES strongly predicts health outcomes (lower SES = worse health)
- Social determinants of health: access, environment, education, income
- Intersectionality: overlapping identities create unique experiences`
    }
  ]
};
