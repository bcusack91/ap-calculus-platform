export const psychMemoryEncodePart7Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memory-encoding-storage-p7-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Memory Encoding and Storage

      **Part 7 of 7 — AP Exam Synthesis**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **long-term memory**: relatively enduring store of knowledge, skills, and experiences
      - **encoding**: transforming input into a storable memory representation
      - **elaborative rehearsal**: linking new information to meaning and prior knowledge

      ### Concrete Real-World Example
      A team is studying AP-style synthesis using memory models. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'memory-encoding-storage-p7-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about AP-style synthesis using memory models, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'encoding',
              'elaborative rehearsal',
              'long-term memory',
              'chunking'
            ],
            correctAnswer: 2,
            explanation: 'long-term memory is correct because it directly matches this mechanism: relatively enduring store of knowledge, skills, and experiences. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'semantic network',
              'encoding',
              'consolidation',
              'elaborative rehearsal'
            ],
            correctAnswer: 2,
            explanation: 'consolidation is the strongest match here (stabilization of memories over time). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p7-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing AP-style synthesis using memory models, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | long-term memory | relatively enduring store of knowledge, skills, and experiences | experimental manipulation with random assignment | possible demand characteristics |
      | encoding | transforming input into a storable memory representation | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | elaborative rehearsal | linking new information to meaning and prior knowledge | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | chunking | grouping information into manageable units | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'memory-encoding-storage-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: relatively enduring store of knowledge, skills, and experiences

      2) Write the concept that matches: transforming input into a storable memory representation

      3) Write the concept that matches: linking new information to meaning and prior knowledge

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['long-term memory', 'encoding', 'elaborative rehearsal'],
        hint1: 'Starts with: L',
        hint2: 'Starts with: E',
        hint3: 'Starts with: E',
        explanation: 'Expected answers: long-term memory, encoding, and elaborative rehearsal. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'memory-encoding-storage-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: relatively enduring store of knowledge, skills, and experiences',
            options: ['encoding', 'semantic network', 'long-term memory', 'consolidation']
          },
          {
            label: 'Select the concept that best matches: transforming input into a storable memory representation',
            options: ['semantic network', 'encoding', 'elaborative rehearsal', 'chunking']
          },
          {
            label: 'Select the concept that best matches: linking new information to meaning and prior knowledge',
            options: ['semantic network', 'long-term memory', 'elaborative rehearsal', 'chunking']
          }
        ],
        correctAnswers: ['long-term memory', 'encoding', 'elaborative rehearsal'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are long-term memory, encoding, and elaborative rehearsal. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'memory-encoding-storage-p7-s6-strategy',
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
      - In scenario questions about AP-style synthesis using memory models, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'memory-encoding-storage-p7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating AP-style synthesis using memory models finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'elaborative rehearsal',
              'chunking',
              'encoding',
              'long-term memory'
            ],
            correctAnswer: 1,
            explanation: 'chunking is best because it reflects this mechanism (grouping information into manageable units). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'consolidation',
              'semantic network',
              'elaborative rehearsal',
              'encoding'
            ],
            correctAnswer: 0,
            explanation: 'consolidation is the strongest interpretation because it maps to the measured pattern and proposed mechanism: stabilization of memories over time. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
