export const mcatSociologyPart6Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so6-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 6 of 7 — Culture, Socialization & Identity**

### Culture

- **Material culture**: Physical objects (technology, clothing, buildings)
- **Non-material culture**: Ideas, beliefs, values, norms
- **Ethnocentrism**: Judging other cultures by your own standards
- **Cultural relativism**: Understanding a culture on its own terms

### Socialization Agents

| Agent | Influence |
|-------|----------|
| Family | Primary socialization, values, language |
| Peers | Social skills, conformity, identity exploration |
| Media | Cultural norms, body image, political views |
| Education | Knowledge, social roles, hidden curriculum |
| Religion | Moral framework, community |

### Identity Formation

| Concept | Theorist | Key Idea |
|---------|----------|----------|
| Looking-glass self | Cooley | We see ourselves through how others see us |
| Generalized other | Mead | Internalized expectations of society |
| Front/back stage | Goffman | We perform different selves in different contexts |
| Self-efficacy | Bandura | Belief in one's ability to succeed |
| Locus of control | Rotter | Internal (I control outcomes) vs. external (fate controls outcomes) |

### Self-Concept

- **Self-concept**: Overall perception of who you are
- **Self-esteem**: How you feel about yourself (evaluative)
- **Self-identity**: How you define yourself (social roles, groups)`
    },
    {
      id: 'so6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Culture & Identity** 🎯`,
      exercise: {
        questions: [
          {
            question: `A patient from a different culture refuses a blood transfusion. A physician who tries to understand the patient's cultural beliefs before making judgments is practicing:`,
            options: [`Cultural relativism — understanding behaviors within their cultural context`, `Ethnocentrism`, `Anomie`, `Medicalization`],
            correctAnswer: 0,
            explanation: `Cultural relativism means understanding beliefs and practices within their cultural context rather than judging them by your own cultural standards (ethnocentrism). This is essential for culturally competent healthcare.`
          }
        ]
      }
    },
    {
      id: 'so6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- Ethnocentrism = judging others by your standards. Cultural relativism = understanding on their terms.
- Looking-glass self (Cooley): we see ourselves as others see us
- Internal locus of control → better health outcomes (sense of agency)
- Socialization agents: family (primary), peers, media, education, religion`
    }
  ]
};
