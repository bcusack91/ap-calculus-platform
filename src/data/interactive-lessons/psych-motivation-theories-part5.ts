export const psychMotivationPart5Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motivation-theories-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Motivation Theories

      **Part 5 of 7 — Emotion-Motivation Integration**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **Yerkes-Dodson law**: moderate arousal often optimizes performance on many tasks
      - **achievement motivation**: persistent effort toward standards of excellence
      - **drive-reduction theory**: motivation to reduce physiological tension and restore homeostasis

      ### Concrete Real-World Example
      A team is studying classroom climate effects on intrinsic interest. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'motivation-theories-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about classroom climate effects on intrinsic interest, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'achievement motivation',
              'Yerkes-Dodson law',
              'drive-reduction theory',
              'incentive theory'
            ],
            correctAnswer: 1,
            explanation: 'Yerkes-Dodson law is correct because it directly matches this mechanism: moderate arousal often optimizes performance on many tasks. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'achievement motivation',
              'self-determination theory',
              'expectancy-value theory',
              'drive-reduction theory'
            ],
            correctAnswer: 2,
            explanation: 'expectancy-value theory is the strongest match here (motivation depends on expected success and value of outcome). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing classroom climate effects on intrinsic interest, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | Yerkes-Dodson law | moderate arousal often optimizes performance on many tasks | experimental manipulation with random assignment | possible demand characteristics |
      | achievement motivation | persistent effort toward standards of excellence | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | drive-reduction theory | motivation to reduce physiological tension and restore homeostasis | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | incentive theory | motivation shaped by external rewards and consequences | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'motivation-theories-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: moderate arousal often optimizes performance on many tasks

      2) Write the concept that matches: persistent effort toward standards of excellence

      3) Write the concept that matches: motivation to reduce physiological tension and restore homeostasis

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Yerkes-Dodson law', 'achievement motivation', 'drive-reduction theory'],
        hint1: 'Starts with: Y',
        hint2: 'Starts with: A',
        hint3: 'Starts with: D',
        explanation: 'Expected answers: Yerkes-Dodson law, achievement motivation, and drive-reduction theory. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'motivation-theories-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: moderate arousal often optimizes performance on many tasks',
            options: ['expectancy-value theory', 'Yerkes-Dodson law', 'incentive theory', 'achievement motivation']
          },
          {
            label: 'Select the concept that best matches: persistent effort toward standards of excellence',
            options: ['achievement motivation', 'expectancy-value theory', 'drive-reduction theory', 'incentive theory']
          },
          {
            label: 'Select the concept that best matches: motivation to reduce physiological tension and restore homeostasis',
            options: ['achievement motivation', 'drive-reduction theory', 'self-determination theory', 'Yerkes-Dodson law']
          }
        ],
        correctAnswers: ['Yerkes-Dodson law', 'achievement motivation', 'drive-reduction theory'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are Yerkes-Dodson law, achievement motivation, and drive-reduction theory. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'motivation-theories-p5-s6-strategy',
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
      - In scenario questions about classroom climate effects on intrinsic interest, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'motivation-theories-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating classroom climate effects on intrinsic interest finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'drive-reduction theory',
              'Yerkes-Dodson law',
              'incentive theory',
              'achievement motivation'
            ],
            correctAnswer: 2,
            explanation: 'incentive theory is best because it reflects this mechanism (motivation shaped by external rewards and consequences). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'self-determination theory',
              'achievement motivation',
              'drive-reduction theory',
              'expectancy-value theory'
            ],
            correctAnswer: 3,
            explanation: 'expectancy-value theory is the strongest interpretation because it maps to the measured pattern and proposed mechanism: motivation depends on expected success and value of outcome. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
