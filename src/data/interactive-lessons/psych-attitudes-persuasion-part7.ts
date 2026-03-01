export const psychAttitudesPart7Data = {
  topicSlug: 'attitudes-persuasion',
  sections: [
    {
      id: 'attitudes-persuasion-p7-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Attitudes and Persuasion

      **Part 7 of 7 — AP Exam Synthesis**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **mere exposure effect**: increased liking after repeated exposure
      - **central route**: persuasion through careful analysis of message quality
      - **peripheral route**: persuasion through cues such as attractiveness or authority

      ### Concrete Real-World Example
      A team is studying mixed-response AP free-response prompts on persuasion outcomes. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'attitudes-persuasion-p7-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about mixed-response AP free-response prompts on persuasion outcomes, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'peripheral route',
              'central route',
              'cognitive dissonance',
              'mere exposure effect'
            ],
            correctAnswer: 3,
            explanation: 'mere exposure effect is correct because it directly matches this mechanism: increased liking after repeated exposure. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'social judgment theory',
              'peripheral route',
              'central route',
              'foot-in-the-door'
            ],
            correctAnswer: 3,
            explanation: 'foot-in-the-door is the strongest match here (gaining compliance with a small request before a larger one). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'attitudes-persuasion-p7-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing mixed-response AP free-response prompts on persuasion outcomes, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | mere exposure effect | increased liking after repeated exposure | experimental manipulation with random assignment | possible demand characteristics |
      | central route | persuasion through careful analysis of message quality | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | peripheral route | persuasion through cues such as attractiveness or authority | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | cognitive dissonance | discomfort from inconsistent beliefs and behaviors | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'attitudes-persuasion-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: increased liking after repeated exposure
      2) Write the concept that matches: persuasion through careful analysis of message quality
      3) Write the concept that matches: persuasion through cues such as attractiveness or authority

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['mere exposure effect', 'central route', 'peripheral route'],
        hint1: 'Starts with: M',
        hint2: 'Starts with: C',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: mere exposure effect, central route, and peripheral route. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'attitudes-persuasion-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: increased liking after repeated exposure',
            options: ['peripheral route', 'social judgment theory', 'foot-in-the-door', 'mere exposure effect']
          },
          {
            label: 'Select the concept that best matches: persuasion through careful analysis of message quality',
            options: ['social judgment theory', 'peripheral route', 'cognitive dissonance', 'central route']
          },
          {
            label: 'Select the concept that best matches: persuasion through cues such as attractiveness or authority',
            options: ['mere exposure effect', 'foot-in-the-door', 'peripheral route', 'social judgment theory']
          }
        ],
        correctAnswers: ['mere exposure effect', 'central route', 'peripheral route'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are mere exposure effect, central route, and peripheral route. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'attitudes-persuasion-p7-s6-strategy',
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
      - In scenario questions about mixed-response AP free-response prompts on persuasion outcomes, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'attitudes-persuasion-p7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating mixed-response AP free-response prompts on persuasion outcomes finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'mere exposure effect',
              'peripheral route',
              'cognitive dissonance',
              'central route'
            ],
            correctAnswer: 2,
            explanation: 'cognitive dissonance is best because it reflects this mechanism (discomfort from inconsistent beliefs and behaviors). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'central route',
              'social judgment theory',
              'foot-in-the-door',
              'peripheral route'
            ],
            correctAnswer: 2,
            explanation: 'foot-in-the-door is the strongest interpretation because it maps to the measured pattern and proposed mechanism: gaining compliance with a small request before a larger one. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
