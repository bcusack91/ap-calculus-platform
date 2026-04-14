export const psychHistoryApproachesPart7Data = {
  topicSlug: 'history-approaches-psychology',
  sections: [
    {
      id: 'histo7-synthesis',
      type: 'text' as const,
      content: `
## AP Psychology: History & Methods Review

### Key Comparisons

| Topic | Key Points |
|-------|------------|
| **Wundt** | First lab, structuralism, introspection |
| **James** | Functionalism, adaptation |
| **Freud** | Psychodynamic, unconscious |
| **Watson/Skinner** | Behaviorism, observable behavior |
| **Maslow/Rogers** | Humanistic, self-actualization |
| **Experiments** | Causation, IV/DV, random assignment |
| **Correlation** | Association only, no causation |
| **Ethics** | Informed consent, debriefing, IRB |
      `
    },
    {
      id: 'histo7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair correctly matches a researcher with their perspective?',
            options: [
              'Freud — Behavioral',
              'Skinner — Psychodynamic',
              'Rogers — Humanistic',
              'Watson — Cognitive'
            ],
            correctAnswer: 2,
            explanation: 'Carl Rogers is associated with the humanistic perspective, emphasizing unconditional positive regard and client-centered therapy.'
          }
        ]
      }
    },
    {
      id: 'histo7-tips',
      type: 'text' as const,
      content: `
## AP Exam Tips

- Know the **key figures** and their contributions
- Be able to **design an experiment** from a research question
- Understand the **difference between correlation and causation**
- Know **ethical guidelines** and famous ethical controversies
- Practice **interpreting statistics** (mean, SD, p-value)
- Remember the **biopsychosocial approach**
      `
    },
    {
      id: 'histo7-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Who established the first psychology laboratory in 1879?

      2) Which perspective focuses on unconscious drives and childhood experiences?

      3) What does the abbreviation "DV" stand for in an experiment?

      Use the exact name or term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Wundt', 'psychodynamic', 'dependent variable'],
        hint1: 'Last name: W___ — the "father of psychology"',
        hint2: 'Starts with: P — Freud\'s perspective',
        hint3: 'Two words: ___ variable — the outcome that is measured',
        explanation: 'Expected answers: Wundt (first psychology lab, 1879), psychodynamic (Freud\'s approach emphasizing the unconscious), and dependent variable (the measured outcome in an experiment).'
      }
    },
    {
      id: 'histo7-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The father of psychology is ___',
            options: ['Freud', 'James', 'Wundt', 'Skinner']
          },
          {
            label: 'Behaviorism rejected the study of ___',
            options: ['behavior', 'mental processes', 'animals', 'statistics']
          },
          {
            label: 'p < 0.05 means results are statistically ___',
            options: ['insignificant', 'significant', 'invalid', 'unreliable']
          }
        ],
        correctAnswers: ['Wundt', 'mental processes', 'significant'],
        hint1: 'He established the first lab in 1879.',
        hint2: 'Watson said psychology should only study what is observable.',
        hint3: 'The standard threshold for significance.',
        explanation: 'Wundt is the father of psychology. Behaviorists rejected studying unobservable mental processes. p < 0.05 = statistically significant.'
      }
    },
    {
      id: 'histo7-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Freud is NOT the "father of psychology" — that's Wundt. Freud founded psychoanalysis, a specific approach within psychology.
      - Behaviorism did NOT deny that thoughts exist — it argued that psychology should only study OBSERVABLE behavior, not unobservable mental processes.
      - The biopsychosocial model does NOT favor one perspective — it integrates biological, psychological, AND social factors equally.
      - Humanistic psychology did NOT reject all previous approaches — it emerged as a "third force" alongside (not replacing) psychoanalysis and behaviorism.
      - A strong correlation (e.g., r = -0.85) does NOT imply causation — no matter how strong the number, only experiments with random assignment can establish cause and effect.

      ### AP Strategy Moves
      - Match key figures to perspectives: Wundt/structuralism, James/functionalism, Freud/psychodynamic, Watson & Skinner/behaviorism, Maslow & Rogers/humanistic.
      - For FRQ questions about research design: state the IV, DV, control group, random assignment, and operational definitions.
      - The AP loves "which perspective would explain..." questions — know each perspective's unique lens (unconscious? observable behavior? brain chemistry? social context?).
      - When interpreting correlation coefficients: sign (±) = direction, absolute value = strength. r = -0.85 is stronger than r = +0.40.
      `
    },
    {
      id: 'histo7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A teenager develops anxiety after a car accident. How would a psychodynamic psychologist and a behavioral psychologist explain this differently?',
            options: [
              'Psychodynamic: repressed unconscious fear from childhood resurfaced; Behavioral: anxiety was classically conditioned by pairing cars with the traumatic event',
              'Psychodynamic: neurotransmitter imbalance; Behavioral: the teen chose to be anxious',
              'Psychodynamic: classical conditioning; Behavioral: unconscious conflict',
              'Both perspectives would explain it the same way — through learning'
            ],
            correctAnswer: 0,
            explanation: 'The psychodynamic perspective focuses on unconscious processes and past experiences (perhaps the accident triggered deeper repressed fears). The behavioral perspective focuses on learning — the car became a conditioned stimulus associated with fear through classical conditioning. This contrast is a common AP question format.'
          },
          {
            question: 'An AP Psychology FRQ asks you to design an experiment testing whether classical music improves test performance. Which element is MOST critical for establishing causation?',
            options: [
              'Using a large sample size from multiple schools',
              'Random assignment of participants to music vs. no-music groups',
              'Ensuring all participants like classical music',
              'Collecting qualitative data through interviews'
            ],
            correctAnswer: 1,
            explanation: 'Random assignment is the single most critical element for establishing causation. It ensures that the groups are equivalent before the IV (music/no music) is applied, so any difference in the DV (test scores) can be attributed to the IV rather than pre-existing differences between groups.'
          }
        ]
      }
    }
  ]
}
