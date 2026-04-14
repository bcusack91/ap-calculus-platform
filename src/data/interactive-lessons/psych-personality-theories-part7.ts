export const psychPersonalityPart7Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'personality-theories-p7-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Personality Theories

      **Part 7 of 7 — AP Exam Synthesis**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **psychodynamic**: approach emphasizing unconscious processes and early relationships
      - **self-actualization**: humanistic concept of fulfilling one's potential
      - **reciprocal determinism**: behavior, cognition, and environment mutually influence each other

      ### Concrete Real-World Example
      A team is studying AP-style synthesis about personality stability and change. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'personality-theories-p7-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about AP-style synthesis about personality stability and change, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'reciprocal determinism',
              'self-actualization',
              'self-efficacy',
              'psychodynamic'
            ],
            correctAnswer: 3,
            explanation: 'psychodynamic is correct because it directly matches this mechanism: approach emphasizing unconscious processes and early relationships. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'self-report inventory',
              'projective test',
              'reciprocal determinism',
              'self-actualization'
            ],
            correctAnswer: 1,
            explanation: 'projective test is the strongest match here (ambiguous stimulus task intended to reveal underlying motives). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'personality-theories-p7-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing AP-style synthesis about personality stability and change, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | psychodynamic | approach emphasizing unconscious processes and early relationships | experimental manipulation with random assignment | possible demand characteristics |
      | self-actualization | humanistic concept of fulfilling one's potential | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | reciprocal determinism | behavior, cognition, and environment mutually influence each other | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | self-efficacy | belief in one's ability to execute actions for specific outcomes | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'personality-theories-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: approach emphasizing unconscious processes and early relationships

      2) Write the concept that matches: humanistic concept of fulfilling one's potential

      3) Write the concept that matches: behavior, cognition, and environment mutually influence each other

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['psychodynamic', 'self-actualization', 'reciprocal determinism'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: S',
        hint3: 'Starts with: R',
        explanation: 'Expected answers: psychodynamic, self-actualization, and reciprocal determinism. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'personality-theories-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: approach emphasizing unconscious processes and early relationships',
            options: ['self-report inventory', 'self-actualization', 'projective test', 'psychodynamic']
          },
          {
            label: 'Select the concept that best matches: humanistic concept of fulfilling one\'s potential',
            options: ['projective test', 'psychodynamic', 'self-actualization', 'self-report inventory']
          },
          {
            label: 'Select the concept that best matches: behavior, cognition, and environment mutually influence each other',
            options: ['projective test', 'reciprocal determinism', 'self-report inventory', 'self-efficacy']
          }
        ],
        correctAnswers: ['psychodynamic', 'self-actualization', 'reciprocal determinism'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are psychodynamic, self-actualization, and reciprocal determinism. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'personality-theories-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Traits summarize tendencies, not fixed behaviors in every context.
      - Projective methods can be clinically useful but generally have weaker psychometrics than many inventories.
      - Personality can show both stability and development across lifespan stages.
      - No single theory fully explains personality; each emphasizes different mechanisms.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about AP-style synthesis about personality stability and change, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'personality-theories-p7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating AP-style synthesis about personality stability and change finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'self-efficacy',
              'reciprocal determinism',
              'self-actualization',
              'psychodynamic'
            ],
            correctAnswer: 0,
            explanation: 'self-efficacy is best because it reflects this mechanism (belief in one\'s ability to execute actions for specific outcomes). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'projective test',
              'reciprocal determinism',
              'self-actualization',
              'self-report inventory'
            ],
            correctAnswer: 0,
            explanation: 'projective test is the strongest interpretation because it maps to the measured pattern and proposed mechanism: ambiguous stimulus task intended to reveal underlying motives. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
