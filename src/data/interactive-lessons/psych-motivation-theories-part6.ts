export const psychMotivationPart6Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motivation-theories-p6-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Motivation Theories

      **Part 6 of 7 — Applied Performance Cases**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **drive-reduction theory**: motivation to reduce physiological tension and restore homeostasis
      - **incentive theory**: motivation shaped by external rewards and consequences
      - **expectancy-value theory**: motivation depends on expected success and value of outcome

      ### Concrete Real-World Example
      A team is studying interpreting intervention outcomes in motivation research. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'motivation-theories-p6-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about interpreting intervention outcomes in motivation research, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'self-determination theory',
              'expectancy-value theory',
              'drive-reduction theory',
              'incentive theory'
            ],
            correctAnswer: 2,
            explanation: 'drive-reduction theory is correct because it directly matches this mechanism: motivation to reduce physiological tension and restore homeostasis. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'incentive theory',
              'expectancy-value theory',
              'extrinsic motivation',
              'intrinsic motivation'
            ],
            correctAnswer: 3,
            explanation: 'intrinsic motivation is the strongest match here (engaging in an activity for inherent interest or enjoyment). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p6-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing interpreting intervention outcomes in motivation research, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | drive-reduction theory | motivation to reduce physiological tension and restore homeostasis | experimental manipulation with random assignment | possible demand characteristics |
      | incentive theory | motivation shaped by external rewards and consequences | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | expectancy-value theory | motivation depends on expected success and value of outcome | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | self-determination theory | autonomy, competence, and relatedness support intrinsic motivation | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'motivation-theories-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: motivation to reduce physiological tension and restore homeostasis
      2) Write the concept that matches: motivation shaped by external rewards and consequences
      3) Write the concept that matches: motivation depends on expected success and value of outcome

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['drive-reduction theory', 'incentive theory', 'expectancy-value theory'],
        hint1: 'Starts with: D',
        hint2: 'Starts with: I',
        hint3: 'Starts with: E',
        explanation: 'Expected answers: drive-reduction theory, incentive theory, and expectancy-value theory. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'motivation-theories-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: motivation to reduce physiological tension and restore homeostasis',
            options: ['incentive theory', 'drive-reduction theory', 'extrinsic motivation', 'intrinsic motivation']
          },
          {
            label: 'Select the concept that best matches: motivation shaped by external rewards and consequences',
            options: ['incentive theory', 'expectancy-value theory', 'drive-reduction theory', 'extrinsic motivation']
          },
          {
            label: 'Select the concept that best matches: motivation depends on expected success and value of outcome',
            options: ['extrinsic motivation', 'incentive theory', 'intrinsic motivation', 'expectancy-value theory']
          }
        ],
        correctAnswers: ['drive-reduction theory', 'incentive theory', 'expectancy-value theory'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are drive-reduction theory, incentive theory, and expectancy-value theory. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'motivation-theories-p6-s6-strategy',
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
      - In scenario questions about interpreting intervention outcomes in motivation research, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'motivation-theories-p6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating interpreting intervention outcomes in motivation research finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'expectancy-value theory',
              'self-determination theory',
              'drive-reduction theory',
              'incentive theory'
            ],
            correctAnswer: 1,
            explanation: 'self-determination theory is best because it reflects this mechanism (autonomy, competence, and relatedness support intrinsic motivation). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'incentive theory',
              'expectancy-value theory',
              'extrinsic motivation',
              'intrinsic motivation'
            ],
            correctAnswer: 3,
            explanation: 'intrinsic motivation is the strongest interpretation because it maps to the measured pattern and proposed mechanism: engaging in an activity for inherent interest or enjoyment. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
