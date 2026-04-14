export const psychBrainPart6Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p6-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Biological Bases and Brain

      **Part 6 of 7 — Clinical Cases and Interpretation**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **action potential**: an all-or-none electrical impulse traveling down the axon
      - **synapse**: the junction where one neuron communicates with another cell
      - **dopamine**: a neurotransmitter linked to reward, movement, and motivation

      ### Concrete Real-World Example
      A team is studying interpreting lesion and behavior case reports. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'biological-bases-brain-p6-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about interpreting lesion and behavior case reports, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'serotonin',
              'dopamine',
              'action potential',
              'synapse'
            ],
            correctAnswer: 2,
            explanation: 'action potential is correct because it directly matches this mechanism: an all-or-none electrical impulse traveling down the axon. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'synapse',
              'hippocampus',
              'dopamine',
              'amygdala'
            ],
            correctAnswer: 1,
            explanation: 'hippocampus is the strongest match here (a medial temporal structure essential for new explicit memories). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p6-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing interpreting lesion and behavior case reports, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | action potential | an all-or-none electrical impulse traveling down the axon | experimental manipulation with random assignment | possible demand characteristics |
      | synapse | the junction where one neuron communicates with another cell | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | dopamine | a neurotransmitter linked to reward, movement, and motivation | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | serotonin | a neurotransmitter involved in mood, appetite, and sleep regulation | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'biological-bases-brain-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: an all-or-none electrical impulse traveling down the axon

      2) Write the concept that matches: the junction where one neuron communicates with another cell

      3) Write the concept that matches: a neurotransmitter linked to reward, movement, and motivation

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['action potential', 'synapse', 'dopamine'],
        hint1: 'Starts with: A',
        hint2: 'Starts with: S',
        hint3: 'Starts with: D',
        explanation: 'Expected answers: action potential, synapse, and dopamine. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'biological-bases-brain-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: an all-or-none electrical impulse traveling down the axon',
            options: ['hippocampus', 'dopamine', 'synapse', 'action potential']
          },
          {
            label: 'Select the concept that best matches: the junction where one neuron communicates with another cell',
            options: ['hippocampus', 'synapse', 'dopamine', 'amygdala']
          },
          {
            label: 'Select the concept that best matches: a neurotransmitter linked to reward, movement, and motivation',
            options: ['amygdala', 'dopamine', 'hippocampus', 'synapse']
          }
        ],
        correctAnswers: ['action potential', 'synapse', 'dopamine'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are action potential, synapse, and dopamine. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'biological-bases-brain-p6-s6-strategy',
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
      - In scenario questions about interpreting lesion and behavior case reports, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'biological-bases-brain-p6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating interpreting lesion and behavior case reports finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'serotonin',
              'synapse',
              'action potential',
              'dopamine'
            ],
            correctAnswer: 0,
            explanation: 'serotonin is best because it reflects this mechanism (a neurotransmitter involved in mood, appetite, and sleep regulation). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'dopamine',
              'amygdala',
              'synapse',
              'hippocampus'
            ],
            correctAnswer: 3,
            explanation: 'hippocampus is the strongest interpretation because it maps to the measured pattern and proposed mechanism: a medial temporal structure essential for new explicit memories. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
