export const psychSensationPart6Data = {
  topicSlug: 'sensation-sensory-processing',
  sections: [
    {
      id: 'sensation-sensory-processing-p6-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Sensation and Sensory Processing

      **Part 6 of 7 — Applied Cases and Experimental Data**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **sensation**: detection of physical energy by sensory receptors
      - **transduction**: conversion of physical stimulus energy into neural signals
      - **absolute threshold**: minimum stimulus intensity detected 50% of the time

      ### Concrete Real-World Example
      A team is studying interpreting psychophysics experiment outputs. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'sensation-sensory-processing-p6-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about interpreting psychophysics experiment outputs, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'transduction',
              'absolute threshold',
              'sensation',
              'difference threshold'
            ],
            correctAnswer: 2,
            explanation: 'sensation is correct because it directly matches this mechanism: detection of physical energy by sensory receptors. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'transduction',
              'selective attention',
              'signal detection theory',
              'absolute threshold'
            ],
            correctAnswer: 2,
            explanation: 'signal detection theory is the strongest match here (framework separating sensitivity from response bias under uncertainty). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'sensation-sensory-processing-p6-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing interpreting psychophysics experiment outputs, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | sensation | detection of physical energy by sensory receptors | experimental manipulation with random assignment | possible demand characteristics |
      | transduction | conversion of physical stimulus energy into neural signals | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | absolute threshold | minimum stimulus intensity detected 50% of the time | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | difference threshold | smallest detectable difference between two stimuli | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'sensation-sensory-processing-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: detection of physical energy by sensory receptors

      2) Write the concept that matches: conversion of physical stimulus energy into neural signals

      3) Write the concept that matches: minimum stimulus intensity detected 50% of the time

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sensation', 'transduction', 'absolute threshold'],
        hint1: 'Starts with: S',
        hint2: 'Starts with: T',
        hint3: 'Starts with: A',
        explanation: 'Expected answers: sensation, transduction, and absolute threshold. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'sensation-sensory-processing-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: detection of physical energy by sensory receptors',
            options: ['sensation', 'signal detection theory', 'selective attention', 'transduction']
          },
          {
            label: 'Select the concept that best matches: conversion of physical stimulus energy into neural signals',
            options: ['sensation', 'selective attention', 'transduction', 'signal detection theory']
          },
          {
            label: 'Select the concept that best matches: minimum stimulus intensity detected 50% of the time',
            options: ['difference threshold', 'absolute threshold', 'selective attention', 'sensation']
          }
        ],
        correctAnswers: ['sensation', 'transduction', 'absolute threshold'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are sensation, transduction, and absolute threshold. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'sensation-sensory-processing-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Sensation and perception are related but distinct processes.
      - Missed signals can reflect response criterion shifts, not only poor sensory ability.
      - Adaptation reduces awareness of constant stimuli while preserving sensitivity to change.
      - Expectation can bias perception without conscious intent.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about interpreting psychophysics experiment outputs, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'sensation-sensory-processing-p6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating interpreting psychophysics experiment outputs finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'sensation',
              'absolute threshold',
              'transduction',
              'difference threshold'
            ],
            correctAnswer: 3,
            explanation: 'difference threshold is best because it reflects this mechanism (smallest detectable difference between two stimuli). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'selective attention',
              'absolute threshold',
              'transduction',
              'signal detection theory'
            ],
            correctAnswer: 3,
            explanation: 'signal detection theory is the strongest interpretation because it maps to the measured pattern and proposed mechanism: framework separating sensitivity from response bias under uncertainty. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
