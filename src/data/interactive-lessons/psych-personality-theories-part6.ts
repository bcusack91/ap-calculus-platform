export const psychPersonalityPart6Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'personality-theories-p6-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Personality Theories

      **Part 6 of 7 — Case Integration and Evidence**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **trait**: a relatively stable disposition influencing behavior across situations
      - **Big Five**: five broad trait dimensions: openness, conscientiousness, extraversion, agreeableness, neuroticism
      - **psychodynamic**: approach emphasizing unconscious processes and early relationships

      ### Concrete Real-World Example
      A team is studying integrating multi-method assessment reports. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'personality-theories-p6-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about integrating multi-method assessment reports, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'trait',
              'psychodynamic',
              'Big Five',
              'self-actualization'
            ],
            correctAnswer: 0,
            explanation: 'trait is correct because it directly matches this mechanism: a relatively stable disposition influencing behavior across situations. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'psychodynamic',
              'reciprocal determinism',
              'Big Five',
              'self-efficacy'
            ],
            correctAnswer: 1,
            explanation: 'reciprocal determinism is the strongest match here (behavior, cognition, and environment mutually influence each other). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'personality-theories-p6-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing integrating multi-method assessment reports, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | trait | a relatively stable disposition influencing behavior across situations | experimental manipulation with random assignment | possible demand characteristics |
      | Big Five | five broad trait dimensions: openness, conscientiousness, extraversion, agreeableness, neuroticism | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | psychodynamic | approach emphasizing unconscious processes and early relationships | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | self-actualization | humanistic concept of fulfilling one's potential | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'personality-theories-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: a relatively stable disposition influencing behavior across situations

      2) Write the concept that matches: five broad trait dimensions: openness, conscientiousness, extraversion, agreeableness, neuroticism

      3) Write the concept that matches: approach emphasizing unconscious processes and early relationships

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['trait', 'Big Five', 'psychodynamic'],
        hint1: 'Starts with: T',
        hint2: 'Starts with: B',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: trait, Big Five, and psychodynamic. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'personality-theories-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: a relatively stable disposition influencing behavior across situations',
            options: ['trait', 'self-actualization', 'psychodynamic', 'Big Five']
          },
          {
            label: 'Select the concept that best matches: five broad trait dimensions: openness, conscientiousness, extraversion, agreeableness, neuroticism',
            options: ['trait', 'self-actualization', 'Big Five', 'reciprocal determinism']
          },
          {
            label: 'Select the concept that best matches: approach emphasizing unconscious processes and early relationships',
            options: ['reciprocal determinism', 'psychodynamic', 'Big Five', 'trait']
          }
        ],
        correctAnswers: ['trait', 'Big Five', 'psychodynamic'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are trait, Big Five, and psychodynamic. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'personality-theories-p6-s6-strategy',
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
      - In scenario questions about integrating multi-method assessment reports, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'personality-theories-p6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating integrating multi-method assessment reports finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'psychodynamic',
              'trait',
              'self-actualization',
              'Big Five'
            ],
            correctAnswer: 2,
            explanation: 'self-actualization is best because it reflects this mechanism (humanistic concept of fulfilling one\'s potential). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'Big Five',
              'psychodynamic',
              'reciprocal determinism',
              'self-efficacy'
            ],
            correctAnswer: 2,
            explanation: 'reciprocal determinism is the strongest interpretation because it maps to the measured pattern and proposed mechanism: behavior, cognition, and environment mutually influence each other. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
