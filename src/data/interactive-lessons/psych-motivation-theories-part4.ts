export const psychMotivationPart4Data = {
  topicSlug: 'motivation-theories',
  sections: [
    {
      id: 'motivation-theories-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Motivation Theories

      **Part 4 of 7 — Arousal and Performance**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **approach goal**: aiming to attain a positive outcome
      - **avoidance goal**: aiming to prevent a negative outcome
      - **Yerkes-Dodson law**: moderate arousal often optimizes performance on many tasks

      ### Concrete Real-World Example
      A team is studying test anxiety and performance under time limits. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'motivation-theories-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about test anxiety and performance under time limits, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'Yerkes-Dodson law',
              'avoidance goal',
              'achievement motivation',
              'approach goal'
            ],
            correctAnswer: 3,
            explanation: 'approach goal is correct because it directly matches this mechanism: aiming to attain a positive outcome. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'Yerkes-Dodson law',
              'drive-reduction theory',
              'incentive theory',
              'avoidance goal'
            ],
            correctAnswer: 1,
            explanation: 'drive-reduction theory is the strongest match here (motivation to reduce physiological tension and restore homeostasis). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'motivation-theories-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing test anxiety and performance under time limits, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | approach goal | aiming to attain a positive outcome | experimental manipulation with random assignment | possible demand characteristics |
      | avoidance goal | aiming to prevent a negative outcome | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | Yerkes-Dodson law | moderate arousal often optimizes performance on many tasks | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | achievement motivation | persistent effort toward standards of excellence | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'motivation-theories-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: aiming to attain a positive outcome
      2) Write the concept that matches: aiming to prevent a negative outcome
      3) Write the concept that matches: moderate arousal often optimizes performance on many tasks

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['approach goal', 'avoidance goal', 'Yerkes-Dodson law'],
        hint1: 'Starts with: A',
        hint2: 'Starts with: A',
        hint3: 'Starts with: Y',
        explanation: 'Expected answers: approach goal, avoidance goal, and Yerkes-Dodson law. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'motivation-theories-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: aiming to attain a positive outcome',
            options: ['achievement motivation', 'avoidance goal', 'incentive theory', 'approach goal']
          },
          {
            label: 'Select the concept that best matches: aiming to prevent a negative outcome',
            options: ['drive-reduction theory', 'Yerkes-Dodson law', 'avoidance goal', 'achievement motivation']
          },
          {
            label: 'Select the concept that best matches: moderate arousal often optimizes performance on many tasks',
            options: ['achievement motivation', 'approach goal', 'avoidance goal', 'Yerkes-Dodson law']
          }
        ],
        correctAnswers: ['approach goal', 'avoidance goal', 'Yerkes-Dodson law'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are approach goal, avoidance goal, and Yerkes-Dodson law. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'motivation-theories-p4-s6-strategy',
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
      - In scenario questions about test anxiety and performance under time limits, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'motivation-theories-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating test anxiety and performance under time limits finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'approach goal',
              'avoidance goal',
              'achievement motivation',
              'Yerkes-Dodson law'
            ],
            correctAnswer: 2,
            explanation: 'achievement motivation is best because it reflects this mechanism (persistent effort toward standards of excellence). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'incentive theory',
              'avoidance goal',
              'Yerkes-Dodson law',
              'drive-reduction theory'
            ],
            correctAnswer: 3,
            explanation: 'drive-reduction theory is the strongest interpretation because it maps to the measured pattern and proposed mechanism: motivation to reduce physiological tension and restore homeostasis. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
