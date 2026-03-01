export const psychPersonalityPart3Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'personality-theories-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Personality Theories

      **Part 3 of 7 — Social-Cognitive Perspectives**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **reciprocal determinism**: behavior, cognition, and environment mutually influence each other
      - **self-efficacy**: belief in one's ability to execute actions for specific outcomes
      - **projective test**: ambiguous stimulus task intended to reveal underlying motives

      ### Concrete Real-World Example
      A team is studying student confidence shifts after mastery experiences. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'personality-theories-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about student confidence shifts after mastery experiences, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'projective test',
              'self-efficacy',
              'reciprocal determinism',
              'self-report inventory'
            ],
            correctAnswer: 2,
            explanation: 'reciprocal determinism is correct because it directly matches this mechanism: behavior, cognition, and environment mutually influence each other. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'temperament',
              'self-efficacy',
              'person-situation debate',
              'projective test'
            ],
            correctAnswer: 2,
            explanation: 'person-situation debate is the strongest match here (question of trait consistency versus situational influence). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'personality-theories-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing student confidence shifts after mastery experiences, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | reciprocal determinism | behavior, cognition, and environment mutually influence each other | experimental manipulation with random assignment | possible demand characteristics |
      | self-efficacy | belief in one's ability to execute actions for specific outcomes | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | projective test | ambiguous stimulus task intended to reveal underlying motives | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | self-report inventory | structured questionnaire for personality assessment | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'personality-theories-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: behavior, cognition, and environment mutually influence each other
      2) Write the concept that matches: belief in one's ability to execute actions for specific outcomes
      3) Write the concept that matches: ambiguous stimulus task intended to reveal underlying motives

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['reciprocal determinism', 'self-efficacy', 'projective test'],
        hint1: 'Starts with: R',
        hint2: 'Starts with: S',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: reciprocal determinism, self-efficacy, and projective test. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'personality-theories-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: behavior, cognition, and environment mutually influence each other',
            options: ['self-efficacy', 'temperament', 'self-report inventory', 'reciprocal determinism']
          },
          {
            label: 'Select the concept that best matches: belief in one\'s ability to execute actions for specific outcomes',
            options: ['projective test', 'person-situation debate', 'self-report inventory', 'self-efficacy']
          },
          {
            label: 'Select the concept that best matches: ambiguous stimulus task intended to reveal underlying motives',
            options: ['person-situation debate', 'self-efficacy', 'projective test', 'reciprocal determinism']
          }
        ],
        correctAnswers: ['reciprocal determinism', 'self-efficacy', 'projective test'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are reciprocal determinism, self-efficacy, and projective test. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'personality-theories-p3-s6-strategy',
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
      - In scenario questions about student confidence shifts after mastery experiences, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'personality-theories-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating student confidence shifts after mastery experiences finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'self-report inventory',
              'self-efficacy',
              'reciprocal determinism',
              'projective test'
            ],
            correctAnswer: 0,
            explanation: 'self-report inventory is best because it reflects this mechanism (structured questionnaire for personality assessment). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'self-efficacy',
              'temperament',
              'person-situation debate',
              'projective test'
            ],
            correctAnswer: 2,
            explanation: 'person-situation debate is the strongest interpretation because it maps to the measured pattern and proposed mechanism: question of trait consistency versus situational influence. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
