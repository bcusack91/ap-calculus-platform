export const psychAttitudesPart3Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Attitudes and Persuasion

      **Part 3 of 7 — Cognitive Dissonance and Self-Justification**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **peripheral route**: persuasion through cues such as attractiveness or authority
      - **cognitive dissonance**: discomfort from inconsistent beliefs and behaviors
      - **foot-in-the-door**: gaining compliance with a small request before a larger one

      ### Concrete Real-World Example
      A team is studying students defending a difficult policy after voting for it. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'attitudes-persuasion-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about students defending a difficult policy after voting for it, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'social judgment theory',
              'cognitive dissonance',
              'peripheral route',
              'foot-in-the-door'
            ],
            correctAnswer: 2,
            explanation: 'peripheral route is correct because it directly matches this mechanism: persuasion through cues such as attractiveness or authority. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'foot-in-the-door',
              'reactance',
              'inoculation',
              'cognitive dissonance'
            ],
            correctAnswer: 2,
            explanation: 'inoculation is the strongest match here (building resistance to persuasion by exposing weak counterarguments). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing students defending a difficult policy after voting for it, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | peripheral route | persuasion through cues such as attractiveness or authority | experimental manipulation with random assignment | possible demand characteristics |
      | cognitive dissonance | discomfort from inconsistent beliefs and behaviors | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | foot-in-the-door | gaining compliance with a small request before a larger one | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | social judgment theory | evaluation of messages relative to existing attitude anchors | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'attitudes-persuasion-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: persuasion through cues such as attractiveness or authority
      2) Write the concept that matches: discomfort from inconsistent beliefs and behaviors
      3) Write the concept that matches: gaining compliance with a small request before a larger one

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['peripheral route', 'cognitive dissonance', 'foot-in-the-door'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: C',
        hint3: 'Starts with: F',
        explanation: 'Expected answers: peripheral route, cognitive dissonance, and foot-in-the-door. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'attitudes-persuasion-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: persuasion through cues such as attractiveness or authority',
            options: ['social judgment theory', 'peripheral route', 'inoculation', 'foot-in-the-door']
          },
          {
            label: 'Select the concept that best matches: discomfort from inconsistent beliefs and behaviors',
            options: ['foot-in-the-door', 'social judgment theory', 'cognitive dissonance', 'peripheral route']
          },
          {
            label: 'Select the concept that best matches: gaining compliance with a small request before a larger one',
            options: ['reactance', 'peripheral route', 'social judgment theory', 'foot-in-the-door']
          }
        ],
        correctAnswers: ['peripheral route', 'cognitive dissonance', 'foot-in-the-door'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are peripheral route, cognitive dissonance, and foot-in-the-door. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'attitudes-persuasion-p3-s6-strategy',
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
      - In scenario questions about students defending a difficult policy after voting for it, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'attitudes-persuasion-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating students defending a difficult policy after voting for it finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'cognitive dissonance',
              'peripheral route',
              'social judgment theory',
              'foot-in-the-door'
            ],
            correctAnswer: 2,
            explanation: 'social judgment theory is best because it reflects this mechanism (evaluation of messages relative to existing attitude anchors). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'foot-in-the-door',
              'cognitive dissonance',
              'inoculation',
              'reactance'
            ],
            correctAnswer: 2,
            explanation: 'inoculation is the strongest interpretation because it maps to the measured pattern and proposed mechanism: building resistance to persuasion by exposing weak counterarguments. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
