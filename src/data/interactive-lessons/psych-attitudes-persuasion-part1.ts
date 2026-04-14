export const psychAttitudesPart1Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p1-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Attitudes and Persuasion

      **Part 1 of 7 — Attitude Components and Formation**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **attitude**: a learned evaluation of a person, object, or idea
      - **ABC model**: the affective, behavioral, and cognitive components of an attitude
      - **mere exposure effect**: increased liking after repeated exposure

      ### Concrete Real-World Example
      A team is studying a school district campaign to increase student seatbelt use. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'attitudes-persuasion-p1-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about a school district campaign to increase student seatbelt use, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'mere exposure effect',
              'attitude',
              'ABC model',
              'central route'
            ],
            correctAnswer: 1,
            explanation: 'attitude is correct because it directly matches this mechanism: a learned evaluation of a person, object, or idea. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'mere exposure effect',
              'ABC model',
              'peripheral route',
              'cognitive dissonance'
            ],
            correctAnswer: 2,
            explanation: 'peripheral route is the strongest match here (persuasion through cues such as attractiveness or authority). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p1-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing a school district campaign to increase student seatbelt use, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | attitude | a learned evaluation of a person, object, or idea | experimental manipulation with random assignment | possible demand characteristics |
      | ABC model | the affective, behavioral, and cognitive components of an attitude | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | mere exposure effect | increased liking after repeated exposure | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | central route | persuasion through careful analysis of message quality | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'attitudes-persuasion-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: a learned evaluation of a person, object, or idea

      2) Write the concept that matches: the affective, behavioral, and cognitive components of an attitude

      3) Write the concept that matches: increased liking after repeated exposure

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['attitude', 'ABC model', 'mere exposure effect'],
        hint1: 'Starts with: A',
        hint2: 'Starts with: A',
        hint3: 'Starts with: M',
        explanation: 'Expected answers: attitude, ABC model, and mere exposure effect. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'attitudes-persuasion-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: a learned evaluation of a person, object, or idea',
            options: ['central route', 'attitude', 'mere exposure effect', 'cognitive dissonance']
          },
          {
            label: 'Select the concept that best matches: the affective, behavioral, and cognitive components of an attitude',
            options: ['ABC model', 'attitude', 'mere exposure effect', 'peripheral route']
          },
          {
            label: 'Select the concept that best matches: increased liking after repeated exposure',
            options: ['central route', 'mere exposure effect', 'cognitive dissonance', 'ABC model']
          }
        ],
        correctAnswers: ['attitude', 'ABC model', 'mere exposure effect'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are attitude, ABC model, and mere exposure effect. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'attitudes-persuasion-p1-s6-strategy',
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
      - In scenario questions about a school district campaign to increase student seatbelt use, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'attitudes-persuasion-p1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating a school district campaign to increase student seatbelt use finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'mere exposure effect',
              'central route',
              'attitude',
              'ABC model'
            ],
            correctAnswer: 1,
            explanation: 'central route is best because it reflects this mechanism (persuasion through careful analysis of message quality). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'peripheral route',
              'ABC model',
              'cognitive dissonance',
              'mere exposure effect'
            ],
            correctAnswer: 0,
            explanation: 'peripheral route is the strongest interpretation because it maps to the measured pattern and proposed mechanism: persuasion through cues such as attractiveness or authority. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
