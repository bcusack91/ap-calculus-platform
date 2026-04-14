export const psychAttitudesPart4Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Attitudes and Persuasion

      **Part 4 of 7 — Social Judgment and Framing**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **foot-in-the-door**: gaining compliance with a small request before a larger one
      - **social judgment theory**: evaluation of messages relative to existing attitude anchors
      - **inoculation**: building resistance to persuasion by exposing weak counterarguments

      ### Concrete Real-World Example
      A team is studying public health messaging about vaccination wording. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'attitudes-persuasion-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about public health messaging about vaccination wording, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'social judgment theory',
              'reactance',
              'inoculation',
              'foot-in-the-door'
            ],
            correctAnswer: 3,
            explanation: 'foot-in-the-door is correct because it directly matches this mechanism: gaining compliance with a small request before a larger one. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'attitude',
              'social judgment theory',
              'ABC model',
              'inoculation'
            ],
            correctAnswer: 0,
            explanation: 'attitude is the strongest match here (a learned evaluation of a person, object, or idea). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing public health messaging about vaccination wording, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | foot-in-the-door | gaining compliance with a small request before a larger one | experimental manipulation with random assignment | possible demand characteristics |
      | social judgment theory | evaluation of messages relative to existing attitude anchors | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | inoculation | building resistance to persuasion by exposing weak counterarguments | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | reactance | motivation to reassert freedom when one feels pressured | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'attitudes-persuasion-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: gaining compliance with a small request before a larger one

      2) Write the concept that matches: evaluation of messages relative to existing attitude anchors

      3) Write the concept that matches: building resistance to persuasion by exposing weak counterarguments

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['foot-in-the-door', 'social judgment theory', 'inoculation'],
        hint1: 'Starts with: F',
        hint2: 'Starts with: S',
        hint3: 'Starts with: I',
        explanation: 'Expected answers: foot-in-the-door, social judgment theory, and inoculation. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'attitudes-persuasion-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: gaining compliance with a small request before a larger one',
            options: ['attitude', 'social judgment theory', 'foot-in-the-door', 'inoculation']
          },
          {
            label: 'Select the concept that best matches: evaluation of messages relative to existing attitude anchors',
            options: ['inoculation', 'social judgment theory', 'reactance', 'foot-in-the-door']
          },
          {
            label: 'Select the concept that best matches: building resistance to persuasion by exposing weak counterarguments',
            options: ['inoculation', 'social judgment theory', 'attitude', 'ABC model']
          }
        ],
        correctAnswers: ['foot-in-the-door', 'social judgment theory', 'inoculation'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are foot-in-the-door, social judgment theory, and inoculation. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'attitudes-persuasion-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Strong emotions can persuade, but lasting change usually requires attitude-consistent reasoning.
      - Peripheral cues can shift choices quickly, yet effects may fade without central processing.
      - Dissonance reduction is not always conscious; people often rationalize automatically.
      - Resistance does not mean no influence; it can mean delayed or context-dependent influence.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about public health messaging about vaccination wording, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'attitudes-persuasion-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating public health messaging about vaccination wording finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'reactance',
              'social judgment theory',
              'foot-in-the-door',
              'inoculation'
            ],
            correctAnswer: 0,
            explanation: 'reactance is best because it reflects this mechanism (motivation to reassert freedom when one feels pressured). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'ABC model',
              'inoculation',
              'social judgment theory',
              'attitude'
            ],
            correctAnswer: 3,
            explanation: 'attitude is the strongest interpretation because it maps to the measured pattern and proposed mechanism: a learned evaluation of a person, object, or idea. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
