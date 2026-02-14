export const psychHistoryApproachesPart1Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo1-intro',
      type: 'text' as const,
      content: `
# 🧠 History & Approaches to Psychology

**Part 1 of 7 — Origins of Psychology**

Psychology is the **scientific study of behavior and mental processes**. It emerged as a distinct discipline in the late 19th century.

### Key Milestones

| Year | Event | Pioneer |
|------|-------|---------|
| **1879** | First psychology lab | Wilhelm Wundt (Leipzig, Germany) |
| **1890** | Principles of Psychology | William James |
| **1900** | Interpretation of Dreams | Sigmund Freud |
| **1913** | Behaviorist manifesto | John B. Watson |
| **1954** | Humanistic psychology | Abraham Maslow |
| **1967** | Cognitive revolution | Ulric Neisser |

Wundt is considered the **"father of psychology"** for establishing the first experimental laboratory.
      `
    },
    {
      id: 'histo1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Who established the first psychology laboratory?',
            options: [
              'Sigmund Freud',
              'William James',
              'Wilhelm Wundt',
              'John Watson'
            ],
            correctAnswer: 2,
            explanation: 'Wilhelm Wundt established the first experimental psychology laboratory in 1879 in Leipzig, Germany.'
          },
          {
            question: 'Structuralism used which method to study consciousness?',
            options: [
              'Dream analysis',
              'Behavioral observation',
              'Introspection',
              'Brain imaging'
            ],
            correctAnswer: 2,
            explanation: 'Structuralists used introspection — trained subjects reported their conscious experiences of stimuli.'
          }
        ]
      }
    },
    {
      id: 'histo1-schools',
      type: 'text' as const,
      content: `
# ## Early Schools of Thought

### Structuralism (Wundt, Titchener)
- Goal: identify basic elements of consciousness
- Method: **introspection** (trained self-observation)
- Criticism: too subjective, not replicable

### Functionalism (William James)
- Goal: understand the **purpose** of consciousness
- Influenced by Darwin's theory of evolution
- Asked: "How does behavior help us adapt?"
- Led to applied psychology and educational psychology

### Gestalt Psychology (Wertheimer)
- "The whole is greater than the sum of its parts"
- Studied perception and how we organize sensory information
- Principles: proximity, similarity, closure, continuity
      `
    },
    {
      id: 'histo1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Functionalism was most influenced by:',
            options: [
              'Freudian theory',
              'Darwin\'s theory of evolution',
              'Gestalt principles',
              'Classical conditioning'
            ],
            correctAnswer: 1,
            explanation: 'William James and functionalism were heavily influenced by Darwin, asking how mental processes help organisms adapt and survive.'
          }
        ]
      }
    },
    {
      id: 'histo1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The first psychology lab was established in ___',
            options: ['1859', '1879', '1900', '1920']
          },
          {
            label: 'Structuralism aimed to identify the basic ___ of consciousness',
            options: ['functions', 'elements', 'behaviors', 'dreams']
          },
          {
            label: '"The whole is greater than the sum of its parts" describes ___',
            options: ['structuralism', 'functionalism', 'Gestalt psychology', 'behaviorism']
          }
        ],
        correctAnswers: ['1879', 'elements', 'Gestalt psychology'],
        hint1: 'Wundt\'s lab date.',
        hint2: 'Structure = building blocks/elements.',
        hint3: 'This school emphasized perception and organization.',
        explanation: 'The first lab was in 1879. Structuralism studied the elements of consciousness. Gestalt psychology emphasized holistic perception.'
      }
    }
  ]
}
