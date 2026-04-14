export const psychBrainPart4Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Biological Bases and Brain

      **Part 4 of 7 — Lateralization and Networks**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **prefrontal cortex**: frontal region supporting planning, inhibition, and decision-making
      - **broca area**: left frontal language region associated with speech production
      - **EEG**: a method that records electrical brain activity with high temporal resolution

      ### Concrete Real-World Example
      A team is studying decision-making under stress in emergency responders. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'biological-bases-brain-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about decision-making under stress in emergency responders, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'fMRI',
              'broca area',
              'EEG',
              'prefrontal cortex'
            ],
            correctAnswer: 3,
            explanation: 'prefrontal cortex is correct because it directly matches this mechanism: frontal region supporting planning, inhibition, and decision-making. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'synapse',
              'broca area',
              'EEG',
              'action potential'
            ],
            correctAnswer: 3,
            explanation: 'action potential is the strongest match here (an all-or-none electrical impulse traveling down the axon). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing decision-making under stress in emergency responders, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | prefrontal cortex | frontal region supporting planning, inhibition, and decision-making | experimental manipulation with random assignment | possible demand characteristics |
      | broca area | left frontal language region associated with speech production | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | EEG | a method that records electrical brain activity with high temporal resolution | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | fMRI | an imaging method that infers neural activity via blood-oxygen changes | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'biological-bases-brain-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: frontal region supporting planning, inhibition, and decision-making

      2) Write the concept that matches: left frontal language region associated with speech production

      3) Write the concept that matches: a method that records electrical brain activity with high temporal resolution

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['prefrontal cortex', 'broca area', 'EEG'],
        hint1: 'Starts with: P',
        hint2: 'Starts with: B',
        hint3: 'Starts with: E',
        explanation: 'Expected answers: prefrontal cortex, broca area, and EEG. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'biological-bases-brain-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: frontal region supporting planning, inhibition, and decision-making',
            options: ['EEG', 'synapse', 'broca area', 'prefrontal cortex']
          },
          {
            label: 'Select the concept that best matches: left frontal language region associated with speech production',
            options: ['broca area', 'EEG', 'fMRI', 'synapse']
          },
          {
            label: 'Select the concept that best matches: a method that records electrical brain activity with high temporal resolution',
            options: ['fMRI', 'EEG', 'action potential', 'prefrontal cortex']
          }
        ],
        correctAnswers: ['prefrontal cortex', 'broca area', 'EEG'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are prefrontal cortex, broca area, and EEG. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'biological-bases-brain-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Single regions rarely act alone; cognition emerges from interacting networks.
      - fMRI maps blood flow, not direct electrical firing.
      - Neurotransmitters are context dependent; the same molecule can have different effects by pathway.
      - Correlation in brain imaging does not by itself prove causation.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about decision-making under stress in emergency responders, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'biological-bases-brain-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating decision-making under stress in emergency responders finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'prefrontal cortex',
              'fMRI',
              'EEG',
              'broca area'
            ],
            correctAnswer: 1,
            explanation: 'fMRI is best because it reflects this mechanism (an imaging method that infers neural activity via blood-oxygen changes). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'synapse',
              'action potential',
              'EEG',
              'broca area'
            ],
            correctAnswer: 1,
            explanation: 'action potential is the strongest interpretation because it maps to the measured pattern and proposed mechanism: an all-or-none electrical impulse traveling down the axon. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
