export const psychDisordersPart2Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psychological-disorders-overview-p2-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Psychological Disorders Overview

      **Part 2 of 7 — Anxiety and Trauma-Related Disorders**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **validity**: extent to which a diagnosis captures a distinct clinical condition
      - **anxiety disorder**: disorder characterized by excessive fear or anxiety and related behaviors
      - **PTSD**: trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns

      ### Concrete Real-World Example
      A team is studying differentiating panic symptoms from medical conditions. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'psychological-disorders-overview-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about differentiating panic symptoms from medical conditions, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'validity',
              'PTSD',
              'anxiety disorder',
              'obsession'
            ],
            correctAnswer: 0,
            explanation: 'validity is correct because it directly matches this mechanism: extent to which a diagnosis captures a distinct clinical condition. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'anxiety disorder',
              'compulsion',
              'PTSD',
              'dissociation'
            ],
            correctAnswer: 1,
            explanation: 'compulsion is the strongest match here (repetitive behavior performed to reduce distress or prevent feared outcomes). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'psychological-disorders-overview-p2-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing differentiating panic symptoms from medical conditions, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | validity | extent to which a diagnosis captures a distinct clinical condition | experimental manipulation with random assignment | possible demand characteristics |
      | anxiety disorder | disorder characterized by excessive fear or anxiety and related behaviors | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | PTSD | trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | obsession | intrusive, unwanted thought that causes distress | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'psychological-disorders-overview-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: extent to which a diagnosis captures a distinct clinical condition

      2) Write the concept that matches: disorder characterized by excessive fear or anxiety and related behaviors

      3) Write the concept that matches: trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['validity', 'anxiety disorder', 'PTSD'],
        hint1: 'Starts with: V',
        hint2: 'Starts with: A',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: validity, anxiety disorder, and PTSD. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'psychological-disorders-overview-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: extent to which a diagnosis captures a distinct clinical condition',
            options: ['compulsion', 'PTSD', 'validity', 'dissociation']
          },
          {
            label: 'Select the concept that best matches: disorder characterized by excessive fear or anxiety and related behaviors',
            options: ['obsession', 'anxiety disorder', 'validity', 'PTSD']
          },
          {
            label: 'Select the concept that best matches: trauma-related disorder involving intrusion, avoidance, and hyperarousal patterns',
            options: ['PTSD', 'compulsion', 'dissociation', 'validity']
          }
        ],
        correctAnswers: ['validity', 'anxiety disorder', 'PTSD'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are validity, anxiety disorder, and PTSD. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'psychological-disorders-overview-p2-s6-strategy',
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
      - In scenario questions about differentiating panic symptoms from medical conditions, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'psychological-disorders-overview-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating differentiating panic symptoms from medical conditions finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'obsession',
              'validity',
              'PTSD',
              'anxiety disorder'
            ],
            correctAnswer: 0,
            explanation: 'obsession is best because it reflects this mechanism (intrusive, unwanted thought that causes distress). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'anxiety disorder',
              'dissociation',
              'PTSD',
              'compulsion'
            ],
            correctAnswer: 3,
            explanation: 'compulsion is the strongest interpretation because it maps to the measured pattern and proposed mechanism: repetitive behavior performed to reduce distress or prevent feared outcomes. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
