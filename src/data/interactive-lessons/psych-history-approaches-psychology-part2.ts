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
      id: 'histo2-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Which perspective focuses on unconscious motivations and childhood experiences?

      2) Which approach recognizes the interaction of biological, psychological, and social factors?

      3) Which perspective emphasizes free will, personal growth, and self-actualization?

      Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['psychodynamic', 'biopsychosocial', 'humanistic'],
        hint1: 'Starts with: P — founded by Freud',
        hint2: 'Starts with: B — combines three levels of analysis',
        hint3: 'Starts with: H — Maslow and Rogers',
        explanation: 'Expected answers: psychodynamic (Freud, unconscious), biopsychosocial (integrates biological + psychological + social), and humanistic (Maslow, Rogers, self-actualization).'
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
    },
    {
      id: 'histo2-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - The perspectives are NOT mutually exclusive — the biopsychosocial approach shows they can complement each other.
      - "Psychodynamic" is NOT just Freud — it includes Neo-Freudians like Jung, Adler, and Erikson who modified Freud's ideas.
      - The cognitive perspective is NOT the same as cognitive behavioral therapy (CBT) — the perspective studies thinking; CBT is a therapy technique.
      - The sociocultural perspective does NOT claim culture determines everything — it highlights cultural INFLUENCE on behavior.

      ### AP Strategy Moves
      - The AP exam frequently asks you to apply MULTIPLE perspectives to the same behavior (e.g., explain aggression from biological, cognitive, and sociocultural viewpoints).
      - Know which subfield each psychologist works in — matching is a common question type.
      - The biopsychosocial approach is the modern "correct answer" when asked which approach is most comprehensive.
      - Be able to explain how each perspective would differently explain the same behavior (depression, aggression, learning, etc.).
      `
    },
    {
      id: 'histo2-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A psychologist explains depression by examining neurotransmitter imbalances, pessimistic thinking patterns, AND the patient\'s social isolation. This approach is best described as:',
            options: [
              'biopsychosocial — integrating biological, psychological, and social factors',
              'psychodynamic — focusing on unconscious conflicts',
              'behavioral — examining learned behaviors',
              'cognitive — focusing only on thinking patterns'
            ],
            correctAnswer: 0,
            explanation: 'The biopsychosocial approach integrates all three levels: biological (neurotransmitters), psychological (pessimistic thinking), and social (isolation). No single perspective captures the full picture — the biopsychosocial model combines them.'
          },
          {
            question: 'If asked "How would a behaviorist explain why a student studies hard?", the best answer would focus on:',
            options: [
              'observable rewards and punishments (e.g., praise for good grades, losing privileges for bad grades)',
              'unconscious desire to please parents rooted in childhood experiences',
              'the student\'s genetic predisposition toward conscientiousness',
              'the student\'s intrinsic motivation and desire for self-actualization'
            ],
            correctAnswer: 0,
            explanation: 'Behaviorists explain behavior through observable stimuli and responses — specifically reinforcements and punishments. They would NOT reference unconscious desires (psychodynamic), genetics (biological), or intrinsic motivation (humanistic).'
          }
        ]
      }
    }
  ]
}
