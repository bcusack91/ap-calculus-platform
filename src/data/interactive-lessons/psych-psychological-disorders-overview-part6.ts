export const psychDisordersPart6Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psychological-disorders-overview-p6-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Psychological Disorders Overview

      **Part 6 of 7 — Case Conceptualization and Data**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **diagnostic criteria**: standardized symptom and duration requirements for diagnosis
      - **reliability**: consistency of diagnostic judgments across clinicians or time
      - **validity**: extent to which a diagnosis captures a distinct clinical condition

      ### Concrete Real-World Example
      A team is studying interpreting prevalence and comorbidity data. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'psychological-disorders-overview-p6-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about interpreting prevalence and comorbidity data, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'diagnostic criteria',
              'validity',
              'reliability',
              'anxiety disorder'
            ],
            correctAnswer: 0,
            explanation: 'diagnostic criteria is correct because it directly matches this mechanism: standardized symptom and duration requirements for diagnosis. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'obsession',
              'PTSD',
              'validity',
              'reliability'
            ],
            correctAnswer: 1,
            explanation: 'PTSD is the strongest match here (trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p6-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing interpreting prevalence and comorbidity data, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | diagnostic criteria | standardized symptom and duration requirements for diagnosis | experimental manipulation with random assignment | possible demand characteristics |
      | reliability | consistency of diagnostic judgments across clinicians or time | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | validity | extent to which a diagnosis captures a distinct clinical condition | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | anxiety disorder | disorder characterized by excessive fear or anxiety and related behaviors | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'psychological-disorders-overview-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: standardized symptom and duration requirements for diagnosis

      2) Write the concept that matches: consistency of diagnostic judgments across clinicians or time

      3) Write the concept that matches: extent to which a diagnosis captures a distinct clinical condition

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['diagnostic criteria', 'reliability', 'validity'],
        hint1: 'Starts with: D',
        hint2: 'Starts with: R',
        hint3: 'Starts with: V',
        explanation: 'Expected answers: diagnostic criteria, reliability, and validity. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'psychological-disorders-overview-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: standardized symptom and duration requirements for diagnosis',
            options: ['validity', 'obsession', 'anxiety disorder', 'diagnostic criteria']
          },
          {
            label: 'Select the concept that best matches: consistency of diagnostic judgments across clinicians or time',
            options: ['reliability', 'obsession', 'anxiety disorder', 'validity']
          },
          {
            label: 'Select the concept that best matches: extent to which a diagnosis captures a distinct clinical condition',
            options: ['PTSD', 'anxiety disorder', 'validity', 'obsession']
          }
        ],
        correctAnswers: ['diagnostic criteria', 'reliability', 'validity'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are diagnostic criteria, reliability, and validity. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'psychological-disorders-overview-p6-s6-strategy',
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
      - In scenario questions about interpreting prevalence and comorbidity data, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'psychological-disorders-overview-p6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating interpreting prevalence and comorbidity data finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'validity',
              'anxiety disorder',
              'diagnostic criteria',
              'reliability'
            ],
            correctAnswer: 1,
            explanation: 'anxiety disorder is best because it reflects this mechanism (disorder characterized by excessive fear or anxiety and related behaviors). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'PTSD',
              'validity',
              'reliability',
              'obsession'
            ],
            correctAnswer: 0,
            explanation: 'PTSD is the strongest interpretation because it maps to the measured pattern and proposed mechanism: trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
