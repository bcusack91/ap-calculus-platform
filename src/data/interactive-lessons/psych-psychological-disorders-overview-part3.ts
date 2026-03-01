export const psychDisordersPart3Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psychological-disorders-overview-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Psychological Disorders Overview

      **Part 3 of 7 — Obsessive-Compulsive and Related Disorders**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **PTSD**: trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns
      - **obsession**: intrusive, unwanted thought that causes distress
      - **compulsion**: repetitive behavior performed to reduce distress or prevent feared outcomes

      ### Concrete Real-World Example
      A team is studying treatment planning for OCD symptom cycles. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'psychological-disorders-overview-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about treatment planning for OCD symptom cycles, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'PTSD',
              'obsession',
              'dissociation',
              'compulsion'
            ],
            correctAnswer: 0,
            explanation: 'PTSD is correct because it directly matches this mechanism: trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'biopsychosocial model',
              'stigma',
              'compulsion',
              'obsession'
            ],
            correctAnswer: 0,
            explanation: 'biopsychosocial model is the strongest match here (framework integrating biological, psychological, and social influences). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing treatment planning for OCD symptom cycles, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | PTSD | trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns | experimental manipulation with random assignment | possible demand characteristics |
      | obsession | intrusive, unwanted thought that causes distress | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | compulsion | repetitive behavior performed to reduce distress or prevent feared outcomes | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | dissociation | disruption in integration of consciousness, memory, or identity | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'psychological-disorders-overview-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns
      2) Write the concept that matches: intrusive, unwanted thought that causes distress
      3) Write the concept that matches: repetitive behavior performed to reduce distress or prevent feared outcomes

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['PTSD', 'obsession', 'compulsion'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: O',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: PTSD, obsession, and compulsion. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'psychological-disorders-overview-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns',
            options: ['compulsion', 'stigma', 'obsession', 'PTSD']
          },
          {
            label: 'Select the concept that best matches: intrusive, unwanted thought that causes distress',
            options: ['biopsychosocial model', 'dissociation', 'obsession', 'stigma']
          },
          {
            label: 'Select the concept that best matches: repetitive behavior performed to reduce distress or prevent feared outcomes',
            options: ['biopsychosocial model', 'obsession', 'PTSD', 'compulsion']
          }
        ],
        correctAnswers: ['PTSD', 'obsession', 'compulsion'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are PTSD, obsession, and compulsion. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'psychological-disorders-overview-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - A diagnosis requires distress or impairment, not just occasional symptoms.
      - Diagnostic categories guide treatment but do not capture every individual nuance.
      - Cultural context shapes symptom interpretation and help-seeking behavior.
      - Comorbidity is common and should influence case formulation.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about treatment planning for OCD symptom cycles, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'psychological-disorders-overview-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating treatment planning for OCD symptom cycles finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'compulsion',
              'PTSD',
              'dissociation',
              'obsession'
            ],
            correctAnswer: 2,
            explanation: 'dissociation is best because it reflects this mechanism (disruption in integration of consciousness, memory, or identity). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'stigma',
              'biopsychosocial model',
              'obsession',
              'compulsion'
            ],
            correctAnswer: 1,
            explanation: 'biopsychosocial model is the strongest interpretation because it maps to the measured pattern and proposed mechanism: framework integrating biological, psychological, and social influences. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
