export const mcatSociologyPart5Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so5-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 5 of 7 — Demographics & Population**

### Demographic Concepts

| Term | Definition |
|------|-----------|
| **Fertility rate** | Average number of children per woman |
| **Mortality rate** | Deaths per 1,000 people per year |
| **Migration** | Movement of people between areas |
| **Demographic transition** | Shift from high birth/death rates to low birth/death rates |

### Demographic Transition Model

| Stage | Birth Rate | Death Rate | Population |
|-------|-----------|------------|-----------|
| Pre-industrial | High | High | Stable (low) |
| Urbanizing | High | Falling | Rapid growth |
| Mature industrial | Falling | Low | Slowing growth |
| Post-industrial | Low | Low | Stable or declining |

### Urbanization & Health

Urbanization effects:
- **Positive**: Better healthcare access, education, infrastructure
- **Negative**: Pollution, overcrowding, social isolation, infectious disease spread

### Global Health Patterns

- **Developed nations**: Chronic diseases (heart disease, cancer, diabetes)
- **Developing nations**: Infectious diseases (malaria, TB, HIV), maternal mortality
- **Epidemiological transition**: Countries shift from infectious to chronic disease burden as they develop`
    },
    {
      id: 'so5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Demographics** 🎯`,
      exercise: {
        questions: [
          {
            question: `During Stage 2 of the demographic transition, population grows rapidly because:`,
            options: [`Death rates fall (better sanitation, medicine) while birth rates remain high`, `Both birth and death rates increase`, `Birth rates rise dramatically`, `Immigration increases`],
            correctAnswer: 0,
            explanation: `Stage 2: Public health improvements (clean water, vaccines, medicine) reduce death rates, but cultural and economic factors keep birth rates high → population boom. This is happening in many developing nations today.`
          }
        ]
      }
    },
    {
      id: 'so5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Demographic transition: high birth/death → high birth/low death (boom) → low both
- Epidemiological transition: infectious diseases → chronic diseases as nations develop
- Urbanization: better access but pollution, overcrowding, social isolation
- SES and geography strongly predict disease patterns globally`
    }
  ]
};
