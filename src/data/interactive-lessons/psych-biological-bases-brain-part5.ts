export const psychBrainPart5Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p5-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Biological Bases and Brain

      **Part 5 of 7 — Methods in Biological Psychology**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **EEG**: a method that records electrical brain activity with high temporal resolution
      - **fMRI**: an imaging method that infers neural activity via blood-oxygen changes
      - **action potential**: an all-or-none electrical impulse traveling down the axon

      ### Concrete Real-World Example
      A team is studying brain imaging during memory retrieval tasks. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'biological-bases-brain-p5-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about brain imaging during memory retrieval tasks, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'action potential',
              'EEG',
              'fMRI',
              'synapse'
            ],
            correctAnswer: 1,
            explanation: 'EEG is correct because it directly matches this mechanism: a method that records electrical brain activity with high temporal resolution. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'dopamine',
              'action potential',
              'serotonin',
              'fMRI'
            ],
            correctAnswer: 0,
            explanation: 'dopamine is the strongest match here (a neurotransmitter linked to reward, movement, and motivation). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p5-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing brain imaging during memory retrieval tasks, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | EEG | a method that records electrical brain activity with high temporal resolution | experimental manipulation with random assignment | possible demand characteristics |
      | fMRI | an imaging method that infers neural activity via blood-oxygen changes | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | action potential | an all-or-none electrical impulse traveling down the axon | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | synapse | the junction where one neuron communicates with another cell | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'biological-bases-brain-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: a method that records electrical brain activity with high temporal resolution

      2) Write the concept that matches: an imaging method that infers neural activity via blood-oxygen changes

      3) Write the concept that matches: an all-or-none electrical impulse traveling down the axon

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['EEG', 'fMRI', 'action potential'],
        hint1: 'Starts with: E',
        hint2: 'Starts with: F',
        hint3: 'Starts with: A',
        explanation: 'Expected answers: EEG, fMRI, and action potential. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'biological-bases-brain-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: a method that records electrical brain activity with high temporal resolution',
            options: ['EEG', 'action potential', 'serotonin', 'fMRI']
          },
          {
            label: 'Select the concept that best matches: an imaging method that infers neural activity via blood-oxygen changes',
            options: ['serotonin', 'synapse', 'action potential', 'fMRI']
          },
          {
            label: 'Select the concept that best matches: an all-or-none electrical impulse traveling down the axon',
            options: ['serotonin', 'EEG', 'synapse', 'action potential']
          }
        ],
        correctAnswers: ['EEG', 'fMRI', 'action potential'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are EEG, fMRI, and action potential. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'biological-bases-brain-p5-s6-strategy',
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
      - In scenario questions about brain imaging during memory retrieval tasks, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'biological-bases-brain-p5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating brain imaging during memory retrieval tasks finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'synapse',
              'EEG',
              'fMRI',
              'action potential'
            ],
            correctAnswer: 0,
            explanation: 'synapse is best because it reflects this mechanism (the junction where one neuron communicates with another cell). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'fMRI',
              'dopamine',
              'action potential',
              'serotonin'
            ],
            correctAnswer: 1,
            explanation: 'dopamine is the strongest interpretation because it maps to the measured pattern and proposed mechanism: a neurotransmitter linked to reward, movement, and motivation. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
