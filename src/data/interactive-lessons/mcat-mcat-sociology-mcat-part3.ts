export const mcatSociologyPart3Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so3-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 3 of 7 — Social Interaction & Groups**

### Types of Social Groups

| Type | Description | Example |
|------|-------------|---------|
| Primary group | Close, personal, long-term | Family, close friends |
| Secondary group | Formal, task-oriented | Work colleagues, classmates |
| In-group | Group you belong to | "Us" |
| Out-group | Group you don't belong to | "Them" |
| Reference group | Group you compare yourself to | Aspirational peers |

### Group Dynamics

| Concept | Description |
|---------|-------------|
| **Groupthink** | Group conformity overrides critical thinking |
| **Social facilitation** | Performance improves on simple tasks with audience |
| **Social loafing** | Individuals exert less effort in groups |
| **Deindividuation** | Loss of self-awareness in groups → impulsive behavior |
| **Bystander effect** | Less likely to help when others are present |

### Social Roles

- **Role**: Expected behaviors for a social position
- **Role conflict**: Two roles with incompatible demands (doctor + parent)
- **Role strain**: Tension within a SINGLE role (nurse: caregiving vs. efficiency)
- **Dramaturgical theory** (Goffman): Life as performance — front stage (public) vs. back stage (private)`
    },
    {
      id: 'so3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Groups & Interaction** 🎯`,
      exercise: {
        questions: [
          {
            question: `A medical team makes a poor treatment decision because no one wants to disagree with the attending physician. This is:`,
            options: [`Groupthink — desire for group harmony suppresses dissenting opinions`, `Social loafing`, `Deindividuation`, `Bystander effect`],
            correctAnswer: 0,
            explanation: `Groupthink occurs when the desire for conformity/harmony overrides realistic appraisal. In medical settings, this is particularly dangerous — it can be combated by explicitly encouraging dissent and assigning a "devil's advocate" role.`
          }
        ]
      }
    },
    {
      id: 'so3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Primary groups = close/emotional. Secondary groups = formal/task-oriented.
- Groupthink: conformity suppresses critical thinking (dangerous in medicine!)
- Role conflict = between roles. Role strain = within one role.
- Goffman: front stage (public performance) vs. backstage (private self)`
    }
  ]
};
