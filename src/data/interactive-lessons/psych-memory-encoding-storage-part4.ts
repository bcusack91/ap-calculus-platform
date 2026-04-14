export const psychMemoryEncodePart4Data = {
  topicSlug: 'memory-encoding-storage',
  sections: [
    {
      id: 'memory-encoding-storage-p4-s1-intro',
      type: 'text' as const,
      content: `
      # 🧠 Memory Encoding and Storage

      **Part 4 of 7 — Working Memory and Capacity**

      In this part, you will connect core psychological vocabulary to realistic contexts and AP-style reasoning. Focus on mechanism first, then evidence.

      ### Core Definitions
      - **consolidation**: stabilization of memories over time
      - **semantic network**: concepts connected by meaningful associations
      - **procedural memory**: memory for skills and actions

      ### Concrete Real-World Example
      A team is studying dual-task limitations during note-taking. They operationalize variables, compare plausible explanations, and look for the interpretation that best matches observed behavior instead of relying on intuition.

      ### Why This Matters
      Strong AP responses define terms precisely, apply them to evidence, and justify why one interpretation is stronger than alternatives.
      `
    },
    {
      id: 'memory-encoding-storage-p4-s2-check',
      type: 'multiple-choice' as const,
      content: `
      **Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a study about dual-task limitations during note-taking, participants change behavior after repeatedly seeing the same cue. Which concept is the best fit?',
            options: [
              'consolidation',
              'spacing effect',
              'procedural memory',
              'semantic network'
            ],
            correctAnswer: 0,
            explanation: 'consolidation is correct because it directly matches this mechanism: stabilization of memories over time. The distractors describe related but different processes.'
          },
          {
            question: 'Researchers report that behavior shifts when participants receive a specific cue and then justify their choices afterward. Which concept best explains that pattern?',
            options: [
              'procedural memory',
              'working memory',
              'sensory memory',
              'semantic network'
            ],
            correctAnswer: 2,
            explanation: 'sensory memory is the strongest match here (brief retention of sensory information). The other options do not explain both the cue-driven shift and the observed response pattern as directly.'
          }
        ]
      }
    },
    {
      id: 'memory-encoding-storage-p4-s3-deep',
      type: 'text' as const,
      content: `
      ## Deep Dive: Comparing Explanations with Evidence

      When analyzing dual-task limitations during note-taking, the best interpretation ties a clear psychological mechanism to measurable evidence.

      | Theory / Concept | Core claim | Typical evidence | Common limitation |
      |---|---|---|---|
      | consolidation | stabilization of memories over time | experimental manipulation with random assignment | possible demand characteristics |
      | semantic network | concepts connected by meaningful associations | longitudinal trend with repeated measurement | third-variable risk in natural settings |
      | procedural memory | memory for skills and actions | cross-sectional comparison with matched groups | limited generalizability across cultures |
      | spacing effect | improved retention when practice is distributed over time | mixed-method evidence combining survey and behavioral indicators | measurement validity depends on construct quality |

      ### Interpretation Strategy
      1. Name the mechanism before describing outcomes.
      2. Match the claim to the strongest available evidence type.
      3. Acknowledge one limitation and explain whether it changes the conclusion.

      This structure helps you earn reasoning points on free-response and avoid vague claims.
      `
    },
    {
      id: 'memory-encoding-storage-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall (exact term answers)** ✍️

      1) Write the concept that matches: stabilization of memories over time

      2) Write the concept that matches: concepts connected by meaningful associations

      3) Write the concept that matches: memory for skills and actions

      Use the exact vocabulary term from this part.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['consolidation', 'semantic network', 'procedural memory'],
        hint1: 'Starts with: C',
        hint2: 'Starts with: S',
        hint3: 'Starts with: P',
        explanation: 'Expected answers: consolidation, semantic network, and procedural memory. Each response should use the precise term connected to the definition cue.'
      }
    },
    {
      id: 'memory-encoding-storage-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Model Matching** 🔎
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Select the concept that best matches: stabilization of memories over time',
            options: ['sensory memory', 'procedural memory', 'consolidation', 'spacing effect']
          },
          {
            label: 'Select the concept that best matches: concepts connected by meaningful associations',
            options: ['semantic network', 'sensory memory', 'spacing effect', 'procedural memory']
          },
          {
            label: 'Select the concept that best matches: memory for skills and actions',
            options: ['semantic network', 'procedural memory', 'sensory memory', 'working memory']
          }
        ],
        correctAnswers: ['consolidation', 'semantic network', 'procedural memory'],
        hint1: 'Start by matching the key mechanism in each prompt to the most specific concept.',
        hint2: 'Eliminate options that describe a different level of analysis (biological vs cognitive vs social).',
        hint3: 'Use the definition language from this part to avoid near-miss terms.',
        explanation: 'Correct matches are consolidation, semantic network, and procedural memory. These choices align with the mechanism-language in each definition, not just broad topic similarity.'
      }
    },
    {
      id: 'memory-encoding-storage-p4-s6-strategy',
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
      - In scenario questions about dual-task limitations during note-taking, identify the manipulated variable and measured outcome.
      - Use one competing explanation and explain why it is weaker.
      - If data are provided, mention trend direction and at least one design limitation.

      This combination of precision and evidence improves both multiple-choice accuracy and free-response scoring.
      `
    },
    {
      id: 'memory-encoding-storage-p4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A team investigating dual-task limitations during note-taking finds that participants rely on a persuasive cue when they are distracted, but use argument quality when they are highly focused. Which concept best captures the focused-processing route?',
            options: [
              'semantic network',
              'procedural memory',
              'spacing effect',
              'consolidation'
            ],
            correctAnswer: 2,
            explanation: 'spacing effect is best because it reflects this mechanism (improved retention when practice is distributed over time). The other options describe different levels of explanation or related constructs.'
          },
          {
            question: 'After an intervention, scores improve in the treatment group but not in a matched comparison group. Which interpretation is most defensible for the targeted mechanism?',
            options: [
              'semantic network',
              'working memory',
              'procedural memory',
              'sensory memory'
            ],
            correctAnswer: 3,
            explanation: 'sensory memory is the strongest interpretation because it maps to the measured pattern and proposed mechanism: brief retention of sensory information. Good AP reasoning also notes alternative explanations and design limits.'
          }
        ]
      }
    }
  ]
}
