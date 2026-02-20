export const mcatSociologyPart1Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so1-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 1 of 7 — Social Structure & Institutions**

### Sociological Theories

| Theory | Focus | Key Thinker |
|--------|-------|-------------|
| **Functionalism** | Society as a system with interconnected parts | Durkheim |
| **Conflict Theory** | Power, inequality, class struggle | Marx |
| **Symbolic Interactionism** | Meaning created through social interactions | Mead, Goffman |
| **Social Constructionism** | Reality is socially constructed | Berger, Luckmann |

### Social Institutions

| Institution | Function |
|------------|----------|
| Family | Socialization, support |
| Education | Knowledge transmission, social placement |
| Religion | Meaning, social cohesion |
| Government | Order, resource allocation |
| Economy | Production and distribution of goods |
| Healthcare | Disease treatment, public health |

### Durkheim's Concept of Anomie

- **Anomie**: Normlessness — when social norms break down
- Occurs during rapid social change
- Associated with higher rates of deviance and suicide
- Connection: healthcare disparities during social upheaval`
    },
    {
      id: 'so1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Social Structure** 🎯`,
      exercise: {
        questions: [
          {
            question: `A sociologist argues that healthcare inequality exists because the wealthy benefit from maintaining the current system. This perspective is:`,
            options: [`Conflict theory — focusing on power dynamics and inequality between social classes`, `Functionalism`, `Symbolic interactionism`, `Social constructionism`],
            correctAnswer: 0,
            explanation: `Conflict theory (Marx) views society as a competition for resources. Healthcare inequality is maintained because it benefits the powerful — a classic conflict theory explanation. Functionalism would ask what purpose inequality serves for society as a whole.`
          }
        ]
      }
    },
    {
      id: 'so1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Functionalism: society works as a system. Conflict theory: power struggle. Symbolic interactionism: meaning through interaction.
- Know the major social institutions and their functions
- Anomie (Durkheim) = breakdown of social norms
- The MCAT tests sociology through healthcare and inequality scenarios`
    }
  ]
};
