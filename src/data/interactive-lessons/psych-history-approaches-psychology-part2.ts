export const psychHistoryApproachesPart2Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo2-perspectives',
      type: 'text' as const,
      content: `
## Modern Psychological Perspectives

| Perspective | Focus | Key Figures |
|------------|-------|-------------|
| **Biological** | Brain, genetics, neurotransmitters | — |
| **Behavioral** | Observable behavior, learning | Watson, Skinner |
| **Cognitive** | Thinking, memory, perception | Piaget, Chomsky |
| **Psychodynamic** | Unconscious, childhood | Freud, Jung |
| **Humanistic** | Free will, self-actualization | Maslow, Rogers |
| **Sociocultural** | Culture, social context | Vygotsky |
| **Evolutionary** | Natural selection of behaviors | — |

### Biopsychosocial Approach

Modern psychology recognizes that behavior results from the interaction of:
- **Biological** factors (genetics, brain chemistry)
- **Psychological** factors (thoughts, emotions, personality)
- **Social** factors (culture, family, peers)
      `
    },
    {
      id: 'histo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The biopsychosocial approach emphasizes:',
            options: [
              'Only biological factors',
              'The interaction of biological, psychological, and social factors',
              'Only unconscious processes',
              'Only observable behavior'
            ],
            correctAnswer: 1,
            explanation: 'The biopsychosocial approach recognizes that behavior results from the complex interaction of biological, psychological, and social factors.'
          }
        ]
      }
    },
    {
      id: 'histo2-subfields',
      type: 'text' as const,
      content: `
## Subfields of Psychology

| Subfield | Focus |
|----------|-------|
| **Clinical** | Diagnosis and treatment of disorders |
| **Counseling** | Help with adjustment and life challenges |
| **Developmental** | Lifespan changes |
| **Cognitive** | Mental processes |
| **Social** | Group behavior and influence |
| **Industrial/Organizational** | Workplace behavior |
| **School** | Learning and education |
| **Forensic** | Psychology and law |
      `
    },
    {
      id: 'histo2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which perspective focuses on unconscious motivations and childhood experiences?',
            options: [
              'Behavioral',
              'Cognitive',
              'Psychodynamic',
              'Humanistic'
            ],
            correctAnswer: 2,
            explanation: 'The psychodynamic perspective, founded by Freud, emphasizes unconscious processes and the influence of early childhood experiences.'
          }
        ]
      }
    },
    {
      id: 'histo2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Behaviorists study only ___ behavior',
            options: ['unconscious', 'observable', 'cognitive', 'emotional']
          },
          {
            label: 'Maslow and Rogers are associated with the ___ perspective',
            options: ['behavioral', 'cognitive', 'humanistic', 'biological']
          },
          {
            label: 'The ___ perspective examines how natural selection shaped behaviors',
            options: ['cognitive', 'evolutionary', 'psychodynamic', 'sociocultural']
          }
        ],
        correctAnswers: ['observable', 'humanistic', 'evolutionary'],
        hint1: 'Behaviorists rejected introspection in favor of what can be measured.',
        hint2: 'Self-actualization and unconditional positive regard.',
        hint3: 'Darwin\'s ideas applied to behavior.',
        explanation: 'Behaviorists study observable behavior. Maslow and Rogers founded humanistic psychology. The evolutionary perspective applies natural selection to behavior.'
      }
    }
  ]
}
