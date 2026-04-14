export const psychBrainPart2Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p2-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Biological Bases and Brain

      **Part 2 of 7 — Neurotransmitters and Behavior**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **dopamine**: a neurotransmitter linked to reward, movement, and motivation
      - **serotonin**: a neurotransmitter involved in mood, appetite, and sleep regulation
      - **hippocampus**: a medial temporal structure essential for new explicit memories

      ### Concrete Real-World Example
      A team is studying medication effects on mood and sleep patterns. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'biological-bases-brain-p2-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about medication effects on mood and sleep patterns, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'dopamine',
              'amygdala',
              'hippocampus',
              'serotonin'
            ],
            correctAnswer: 0,
            explanation: 'dopamine is correct because it directly matches this mechanism: a neurotransmitter linked to reward, movement, and motivation. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'prefrontal cortex',
              'broca area',
              'hippocampus',
              'serotonin'
            ],
            correctAnswer: 0,
            explanation: 'prefrontal cortex is the strongest match here (frontal region supporting planning, inhibition, and decision-making). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p2-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing medication effects on mood and sleep patterns, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | dopamine | a neurotransmitter linked to reward, movement, and motivation | experimental manipulation with random assignment | possible demand characteristics |
      | serotonin | a neurotransmitter involved in mood, appetite, and sleep regulation | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | hippocampus | a medial temporal structure essential for new explicit memories | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | amygdala | a limbic structure involved in emotional processing, especially threat | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'biological-bases-brain-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: a neurotransmitter linked to reward, movement, and motivation

      2) Write the concept that matches: a neurotransmitter involved in mood, appetite, and sleep regulation

      3) Write the concept that matches: a medial temporal structure essential for new explicit memories

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['dopamine', 'serotonin', 'hippocampus'],
        hint1: 'Starts with: D',
        hint2: 'Starts with: S',
        hint3: 'Starts with: H',
        explanation: 'Expected answers: dopamine, serotonin, and hippocampus. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'biological-bases-brain-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: a neurotransmitter linked to reward, movement, and motivation',
            options: ['dopamine', 'broca area', 'prefrontal cortex', 'amygdala']
          },
          {
            label: 'Select the concept that best matches: a neurotransmitter involved in mood, appetite, and sleep regulation',
            options: ['amygdala', 'dopamine', 'broca area', 'serotonin']
          },
          {
            label: 'Select the concept that best matches: a medial temporal structure essential for new explicit memories',
            options: ['prefrontal cortex', 'amygdala', 'serotonin', 'hippocampus']
          }
        ],
        correctAnswers: ['dopamine', 'serotonin', 'hippocampus'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are dopamine, serotonin, and hippocampus. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'biological-bases-brain-p2-s6-strategy',
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
      - In scenario questions about medication effects on mood and sleep patterns, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'biological-bases-brain-p2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating medication effects on mood and sleep patterns finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'hippocampus',
              'serotonin',
              'dopamine',
              'amygdala'
            ],
            correctAnswer: 3,
            explanation: 'amygdala is best because it reflects this mechanism (a limbic structure involved in emotional processing, especially threat). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'broca area',
              'prefrontal cortex',
              'hippocampus',
              'serotonin'
            ],
            correctAnswer: 1,
            explanation: 'prefrontal cortex is the strongest interpretation because it maps to the measured pattern and proposed mechanism: frontal region supporting planning, inhibition, and decision-making. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
