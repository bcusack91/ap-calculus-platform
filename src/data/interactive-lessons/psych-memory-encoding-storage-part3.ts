export const psychMemoryEncodePart3Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memory-encoding-storage-p3-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Memory Encoding and Storage

      **Part 3 of 7 — Storage and Consolidation**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **elaborative rehearsal**: linking new information to meaning and prior knowledge
      - **chunking**: grouping information into manageable units
      - **consolidation**: stabilization of memories over time

      ### Concrete Real-World Example
      A team is studying sleep effects on next-day recall. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'memory-encoding-storage-p3-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about sleep effects on next-day recall, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'chunking',
              'consolidation',
              'semantic network',
              'elaborative rehearsal'
            ],
            correctAnswer: 3,
            explanation: 'elaborative rehearsal is correct because it directly matches this mechanism: linking new information to meaning and prior knowledge. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'chunking',
              'spacing effect',
              'procedural memory',
              'consolidation'
            ],
            correctAnswer: 2,
            explanation: 'procedural memory is the strongest match here (memory for skills and actions). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p3-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing sleep effects on next-day recall, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | elaborative rehearsal | linking new information to meaning and prior knowledge | experimental manipulation with random assignment | possible demand characteristics |
      | chunking | grouping information into manageable units | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | consolidation | stabilization of memories over time | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | semantic network | concepts connected by meaningful associations | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'memory-encoding-storage-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: linking new information to meaning and prior knowledge
      2) Write the concept that matches: grouping information into manageable units
      3) Write the concept that matches: stabilization of memories over time

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['elaborative rehearsal', 'chunking', 'consolidation'],
        hint1: 'Starts with: E',
        hint2: 'Starts with: C',
        hint3: 'Starts with: C',
        explanation: 'Expected answers: elaborative rehearsal, chunking, and consolidation. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'memory-encoding-storage-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: linking new information to meaning and prior knowledge',
            options: ['chunking', 'procedural memory', 'spacing effect', 'elaborative rehearsal']
          },
          {
            label: 'Select the concept that best matches: grouping information into manageable units',
            options: ['chunking', 'semantic network', 'procedural memory', 'spacing effect']
          },
          {
            label: 'Select the concept that best matches: stabilization of memories over time',
            options: ['procedural memory', 'spacing effect', 'semantic network', 'consolidation']
          }
        ],
        correctAnswers: ['elaborative rehearsal', 'chunking', 'consolidation'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are elaborative rehearsal, chunking, and consolidation. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'memory-encoding-storage-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ## Common Misconceptions and Exam Strategy

      ### Misconceptions to Avoid
      - Rereading feels fluent but often produces weaker long-term retention than retrieval practice.
      - Working memory capacity is limited and context dependent.
      - Encoding strength matters more than time spent passively reviewing.
      - Storage and retrieval failures can look similar unless tested carefully.

      ### AP Strategy Moves
      - Define the target concept in one precise sentence before giving examples.
      - In scenario questions about sleep effects on next-day recall, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'memory-encoding-storage-p3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating sleep effects on next-day recall finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'chunking',
              'consolidation',
              'semantic network',
              'elaborative rehearsal'
            ],
            correctAnswer: 2,
            explanation: 'semantic network is best because it reflects this mechanism (concepts connected by meaningful associations). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'spacing effect',
              'consolidation',
              'procedural memory',
              'chunking'
            ],
            correctAnswer: 2,
            explanation: 'procedural memory is the strongest interpretation because it maps to the measured pattern and proposed mechanism: memory for skills and actions. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
