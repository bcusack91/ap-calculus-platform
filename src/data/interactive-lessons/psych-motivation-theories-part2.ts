export const psychMotivationPart2Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motivation-theories-p2-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Motivation Theories

      **Part 2 of 7 — Incentive and Expectancy Models**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **expectancy-value theory**: motivation depends on expected success and value of outcome
      - **self-determination theory**: autonomy, competence, and relatedness support intrinsic motivation
      - **intrinsic motivation**: engaging in an activity for inherent interest or enjoyment

      ### Concrete Real-World Example
      A team is studying employee bonus systems and task engagement. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'motivation-theories-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about employee bonus systems and task engagement, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'extrinsic motivation',
              'intrinsic motivation',
              'expectancy-value theory',
              'self-determination theory'
            ],
            correctAnswer: 2,
            explanation: 'expectancy-value theory is correct because it directly matches this mechanism: motivation depends on expected success and value of outcome. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'approach goal',
              'avoidance goal',
              'self-determination theory',
              'intrinsic motivation'
            ],
            correctAnswer: 0,
            explanation: 'approach goal is the strongest match here (aiming to attain a positive outcome). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p2-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing employee bonus systems and task engagement, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | expectancy-value theory | motivation depends on expected success and value of outcome | experimental manipulation with random assignment | possible demand characteristics |
      | self-determination theory | autonomy, competence, and relatedness support intrinsic motivation | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | intrinsic motivation | engaging in an activity for inherent interest or enjoyment | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | extrinsic motivation | engaging in an activity for external outcomes | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'motivation-theories-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: motivation depends on expected success and value of outcome

      2) Write the concept that matches: autonomy, competence, and relatedness support intrinsic motivation

      3) Write the concept that matches: engaging in an activity for inherent interest or enjoyment

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['expectancy-value theory', 'self-determination theory', 'intrinsic motivation'],
        hint1: 'Starts with: E',
        hint2: 'Starts with: S',
        hint3: 'Starts with: I',
        explanation: 'Expected answers: expectancy-value theory, self-determination theory, and intrinsic motivation. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'motivation-theories-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: motivation depends on expected success and value of outcome',
            options: ['expectancy-value theory', 'extrinsic motivation', 'intrinsic motivation', 'self-determination theory']
          },
          {
            label: 'Select the concept that best matches: autonomy, competence, and relatedness support intrinsic motivation',
            options: ['expectancy-value theory', 'self-determination theory', 'extrinsic motivation', 'approach goal']
          },
          {
            label: 'Select the concept that best matches: engaging in an activity for inherent interest or enjoyment',
            options: ['expectancy-value theory', 'self-determination theory', 'avoidance goal', 'intrinsic motivation']
          }
        ],
        correctAnswers: ['expectancy-value theory', 'self-determination theory', 'intrinsic motivation'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are expectancy-value theory, self-determination theory, and intrinsic motivation. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'motivation-theories-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Extrinsic rewards can help or hurt motivation depending on how they are framed.
      - High arousal is not always beneficial; task complexity changes the optimal level.
      - Motivation is dynamic and can change with feedback, context, and goals.
      - Value without expectancy, or expectancy without value, often yields weak persistence.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about employee bonus systems and task engagement, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'motivation-theories-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating employee bonus systems and task engagement finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'intrinsic motivation',
              'self-determination theory',
              'extrinsic motivation',
              'expectancy-value theory'
            ],
            correctAnswer: 2,
            explanation: 'extrinsic motivation is best because it reflects this mechanism (engaging in an activity for external outcomes). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'intrinsic motivation',
              'avoidance goal',
              'approach goal',
              'self-determination theory'
            ],
            correctAnswer: 2,
            explanation: 'approach goal is the strongest interpretation because it maps to the measured pattern and proposed mechanism: aiming to attain a positive outcome. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
