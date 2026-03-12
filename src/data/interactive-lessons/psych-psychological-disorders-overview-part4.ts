export const psychDisordersPart4Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psychological-disorders-overview-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Psychological Disorders Overview

      **Part 4 of 7 — Somatic and Dissociative Disorders**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **compulsion**: repetitive behavior performed to reduce distress or prevent feared outcomes
      - **dissociation**: disruption in integration of consciousness, memory, or identity
      - **biopsychosocial model**: framework integrating biological, psychological, and social influences

      ### Concrete Real-World Example
      A team is studying evaluating trauma exposure and functional impairment. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'psychological-disorders-overview-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about evaluating trauma exposure and functional impairment, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'dissociation',
              'compulsion',
              'stigma',
              'biopsychosocial model'
            ],
            correctAnswer: 1,
            explanation: 'compulsion is correct because it directly matches this mechanism: repetitive behavior performed to reduce distress or prevent feared outcomes. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'biopsychosocial model',
              'dissociation',
              'reliability',
              'diagnostic criteria'
            ],
            correctAnswer: 3,
            explanation: 'diagnostic criteria is the strongest match here (standardized symptom and duration requirements for diagnosis). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing evaluating trauma exposure and functional impairment, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | compulsion | repetitive behavior performed to reduce distress or prevent feared outcomes | experimental manipulation with random assignment | possible demand characteristics |
      | dissociation | disruption in integration of consciousness, memory, or identity | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | biopsychosocial model | framework integrating biological, psychological, and social influences | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | stigma | social devaluation linked to a condition or identity | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'psychological-disorders-overview-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: repetitive behavior performed to reduce distress or prevent feared outcomes
      2) Write the concept that matches: disruption in integration of consciousness, memory, or identity
      3) Write the concept that matches: framework integrating biological, psychological, and social influences

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['compulsion', 'dissociation', 'biopsychosocial model'],
        hint1: 'Starts with: C',
        hint2: 'Starts with: D',
        hint3: 'Starts with: B',
        explanation: 'Expected answers: compulsion, dissociation, and biopsychosocial model. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'psychological-disorders-overview-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: repetitive behavior performed to reduce distress or prevent feared outcomes',
            options: ['dissociation', 'diagnostic criteria', 'compulsion', 'stigma']
          },
          {
            label: 'Select the concept that best matches: disruption in integration of consciousness, memory, or identity',
            options: ['biopsychosocial model', 'diagnostic criteria', 'dissociation', 'reliability']
          },
          {
            label: 'Select the concept that best matches: framework integrating biological, psychological, and social influences',
            options: ['diagnostic criteria', 'dissociation', 'biopsychosocial model', 'compulsion']
          }
        ],
        correctAnswers: ['compulsion', 'dissociation', 'biopsychosocial model'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are compulsion, dissociation, and biopsychosocial model. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'psychological-disorders-overview-p4-s6-strategy',
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
      - In scenario questions about evaluating trauma exposure and functional impairment, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'psychological-disorders-overview-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating evaluating trauma exposure and functional impairment finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'stigma',
              'compulsion',
              'biopsychosocial model',
              'dissociation'
            ],
            correctAnswer: 0,
            explanation: 'stigma is best because it reflects this mechanism (social devaluation linked to a condition or identity). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'biopsychosocial model',
              'dissociation',
              'diagnostic criteria',
              'reliability'
            ],
            correctAnswer: 2,
            explanation: 'diagnostic criteria is the strongest interpretation because it maps to the measured pattern and proposed mechanism: standardized symptom and duration requirements for diagnosis. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
