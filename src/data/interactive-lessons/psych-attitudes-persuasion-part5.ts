export const psychAttitudesPart5Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Attitudes and Persuasion

      **Part 5 of 7 — Resistance to Persuasion**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **inoculation**: building resistance to persuasion by exposing weak counterarguments
      - **reactance**: motivation to reassert freedom when one feels pressured
      - **attitude**: a learned evaluation of a person, object, or idea

      ### Concrete Real-World Example
      A team is studying a social media influencer sponsorship disclosure. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'attitudes-persuasion-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about a social media influencer sponsorship disclosure, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'inoculation',
              'attitude',
              'ABC model',
              'reactance'
            ],
            correctAnswer: 0,
            explanation: 'inoculation is correct because it directly matches this mechanism: building resistance to persuasion by exposing weak counterarguments. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'reactance',
              'central route',
              'mere exposure effect',
              'attitude'
            ],
            correctAnswer: 2,
            explanation: 'mere exposure effect is the strongest match here (increased liking after repeated exposure). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing a social media influencer sponsorship disclosure, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | inoculation | building resistance to persuasion by exposing weak counterarguments | experimental manipulation with random assignment | possible demand characteristics |
      | reactance | motivation to reassert freedom when one feels pressured | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | attitude | a learned evaluation of a person, object, or idea | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | ABC model | the affective, behavioral, and cognitive components of an attitude | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'attitudes-persuasion-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: building resistance to persuasion by exposing weak counterarguments

      2) Write the concept that matches: motivation to reassert freedom when one feels pressured

      3) Write the concept that matches: a learned evaluation of a person, object, or idea

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['inoculation', 'reactance', 'attitude'],
        hint1: 'Starts with: I',
        hint2: 'Starts with: R',
        hint3: 'Starts with: A',
        explanation: 'Expected answers: inoculation, reactance, and attitude. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'attitudes-persuasion-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: building resistance to persuasion by exposing weak counterarguments',
            options: ['central route', 'inoculation', 'attitude', 'reactance']
          },
          {
            label: 'Select the concept that best matches: motivation to reassert freedom when one feels pressured',
            options: ['mere exposure effect', 'reactance', 'attitude', 'inoculation']
          },
          {
            label: 'Select the concept that best matches: a learned evaluation of a person, object, or idea',
            options: ['inoculation', 'attitude', 'ABC model', 'reactance']
          }
        ],
        correctAnswers: ['inoculation', 'reactance', 'attitude'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are inoculation, reactance, and attitude. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'attitudes-persuasion-p5-s6-strategy',
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
      - In scenario questions about a social media influencer sponsorship disclosure, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'attitudes-persuasion-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating a social media influencer sponsorship disclosure finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'attitude',
              'reactance',
              'ABC model',
              'inoculation'
            ],
            correctAnswer: 2,
            explanation: 'ABC model is best because it reflects this mechanism (the affective, behavioral, and cognitive components of an attitude). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'central route',
              'mere exposure effect',
              'reactance',
              'attitude'
            ],
            correctAnswer: 1,
            explanation: 'mere exposure effect is the strongest interpretation because it maps to the measured pattern and proposed mechanism: increased liking after repeated exposure. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
