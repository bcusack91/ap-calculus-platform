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
## Early Schools of Thought

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
      id: 'histo1-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Who established the first experimental psychology laboratory in 1879?

      2) Which early school of psychology used introspection to identify the basic elements of consciousness?

      3) Which school, founded by William James, focused on the purpose and adaptive function of consciousness?

      Use the exact term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Wundt', 'structuralism', 'functionalism'],
        hint1: 'Starts with: W',
        hint2: 'Starts with: S',
        hint3: 'Starts with: F',
        explanation: 'Expected answers: Wundt (first lab, Leipzig 1879), structuralism (Wundt & Titchener, introspection), and functionalism (James, purpose of behavior).'
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
        explanation: 'Wundt\'s lab opened in 1879. Structuralism broke consciousness into basic elements. Gestalt psychology emphasized that perception is more than its individual parts.'
      }
    },
    {
      id: 'histo1-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Wundt is the father of psychology, NOT Freud — Freud founded psychoanalysis but came later.
      - Structuralism and functionalism are NOT the same — structuralism asks "what is consciousness?" while functionalism asks "what is consciousness FOR?"
      - Introspection is NOT the same as simply thinking about yourself — it was a trained, systematic method of reporting conscious experience.
      - Gestalt psychology is NOT about therapy (Gestalt therapy is a different thing) — it's about perceptual organization.

      ### AP Strategy Moves
      - Know the key figures: Wundt (structuralism), James (functionalism), Wertheimer (Gestalt) — the AP exam loves matching researchers to schools.
      - 1879 is one of the most frequently tested dates in AP Psychology.
      - Be ready to compare and contrast the early schools: what each studied, their methods, and their limitations.
      - For free-response, always define the school of thought first, then connect to the specific researcher and method.
      `
    },
    {
      id: 'histo1-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher asks trained participants to describe their moment-by-moment sensory experience while looking at an apple — reporting the color, shape, texture, and emotional response. This method is most consistent with:',
            options: [
              'structuralism — using introspection to break consciousness into basic elements',
              'functionalism — studying the purpose of the experience',
              'behaviorism — observing measurable responses to stimuli',
              'Gestalt psychology — studying the whole perceptual experience'
            ],
            correctAnswer: 0,
            explanation: 'This is introspection as used by structuralists: trained participants systematically report their conscious experience of a stimulus, trying to identify its basic elements (color, shape, texture, feeling).'
          },
          {
            question: 'A psychologist studies how fear helps humans avoid danger and survive. This "what is it FOR?" approach most closely aligns with:',
            options: [
              'functionalism — studying the adaptive purpose of mental processes',
              'structuralism — identifying the elements of fear',
              'psychodynamic — exploring unconscious sources of fear',
              'Gestalt — studying how fear is perceived as a whole'
            ],
            correctAnswer: 0,
            explanation: 'Functionalism, influenced by Darwin, asks how mental processes help organisms adapt. Studying the survival purpose of fear is a classic functionalist question — "What function does this serve?"'
          }
        ]
      }
    }
  ]
}
