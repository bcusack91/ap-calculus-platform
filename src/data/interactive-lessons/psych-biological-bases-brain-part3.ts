export const psychBrainPart3Data = {
  topicSlug: 'biological-bases-brain',
  sections: [
    {
      id: 'biological-bases-brain-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Biological Bases and Brain

      **Part 3 of 7 — Brain Structures and Functions**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **hippocampus**: a medial temporal structure essential for new explicit memories
      - **amygdala**: a limbic structure involved in emotional processing, especially threat
      - **prefrontal cortex**: frontal region supporting planning, inhibition, and decision-making

      ### Concrete Real-World Example
      A team is studying language deficits after a left frontal stroke. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'biological-bases-brain-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about language deficits after a left frontal stroke, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'hippocampus',
              'broca area',
              'prefrontal cortex',
              'amygdala'
            ],
            correctAnswer: 0,
            explanation: 'hippocampus is correct because it directly matches this mechanism: a medial temporal structure essential for new explicit memories. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'prefrontal cortex',
              'amygdala',
              'fMRI',
              'EEG'
            ],
            correctAnswer: 3,
            explanation: 'EEG is the strongest match here (a method that records electrical brain activity with high temporal resolution). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'biological-bases-brain-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing language deficits after a left frontal stroke, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | hippocampus | a medial temporal structure essential for new explicit memories | experimental manipulation with random assignment | possible demand characteristics |
      | amygdala | a limbic structure involved in emotional processing, especially threat | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | prefrontal cortex | frontal region supporting planning, inhibition, and decision-making | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | broca area | left frontal language region associated with speech production | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'biological-bases-brain-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: a medial temporal structure essential for new explicit memories

      2) Write the concept that matches: a limbic structure involved in emotional processing, especially threat

      3) Write the concept that matches: frontal region supporting planning, inhibition, and decision-making

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['hippocampus', 'amygdala', 'prefrontal cortex'],
        hint1: 'Starts with: H',
        hint2: 'Starts with: A',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: hippocampus, amygdala, and prefrontal cortex. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'biological-bases-brain-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: a medial temporal structure essential for new explicit memories',
            options: ['amygdala', 'EEG', 'hippocampus', 'fMRI']
          },
          {
            label: 'Select the concept that best matches: a limbic structure involved in emotional processing, especially threat',
            options: ['fMRI', 'amygdala', 'broca area', 'prefrontal cortex']
          },
          {
            label: 'Select the concept that best matches: frontal region supporting planning, inhibition, and decision-making',
            options: ['amygdala', 'EEG', 'prefrontal cortex', 'broca area']
          }
        ],
        correctAnswers: ['hippocampus', 'amygdala', 'prefrontal cortex'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are hippocampus, amygdala, and prefrontal cortex. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'biological-bases-brain-p3-s6-strategy',
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
      - In scenario questions about language deficits after a left frontal stroke, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'biological-bases-brain-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating language deficits after a left frontal stroke finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'hippocampus',
              'prefrontal cortex',
              'amygdala',
              'broca area'
            ],
            correctAnswer: 3,
            explanation: 'broca area is best because it reflects this mechanism (left frontal language region associated with speech production). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'amygdala',
              'prefrontal cortex',
              'EEG',
              'fMRI'
            ],
            correctAnswer: 2,
            explanation: 'EEG is the strongest interpretation because it maps to the measured pattern and proposed mechanism: a method that records electrical brain activity with high temporal resolution. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
