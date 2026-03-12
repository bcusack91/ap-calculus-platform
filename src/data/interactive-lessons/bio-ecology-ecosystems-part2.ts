export const bioEcologyPart2Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Ecology and Ecosystems: Energy Flow
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through energy transfer through trophic levels.
      
      ### Worked biological example
      A student team investigates energy transfer through trophic levels. Their first interpretation step is to identify how **abiotic factor** and **trophic level** work together in the same pathway.
      
      - They classify the primary signal using **abiotic factor**: nonliving environmental variable such as light or pH.
      - They trace the downstream response using **trophic level**: position in feeding hierarchy based on energy source.
      - They then compare outcomes with **primary productivity** and **decomposer** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **abiotic factor**
      - **trophic level**
      - **primary productivity**
      - **decomposer**
      `
    },
    {
      id: 'bio-ecology-ecosystems-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Energy Flow, what best describes abiotic factor?',
            options: [
              'rate at which autotrophs convert energy into biomass',
              'position in feeding hierarchy based on energy source',
              'organism that recycles nutrients from organic matter',
              'nonliving environmental variable such as light or pH'
            ],
            correctAnswer: 3,
            explanation: 'abiotic factor is best matched with: nonliving environmental variable such as light or pH.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of trophic level?',
            options: [
              'interaction where both species gain fitness benefits',
              'position in feeding hierarchy based on energy source',
              'rate at which autotrophs convert energy into biomass',
              'nonliving environmental variable such as light or pH'
            ],
            correctAnswer: 1,
            explanation: 'trophic level is best matched with: position in feeding hierarchy based on energy source.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Energy Flow
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → abiotic factor
      - **Immediate processing** → trophic level
      - **System-level consequence** → primary productivity
      - **Measured readout** → decomposer
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | abiotic factor | nonliving environmental variable such as light or pH | Early shift in the primary variable |
      | trophic level | position in feeding hierarchy based on energy source | Mid-pathway change in process rate |
      | primary productivity | rate at which autotrophs convert energy into biomass | Downstream phenotype trend |
      | decomposer | organism that recycles nutrients from organic matter | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **nonliving environmental variable such as light or pH**
      2) Term for this definition: **position in feeding hierarchy based on energy source**
      3) Term for this definition: **rate at which autotrophs convert energy into biomass**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['abiotic factor', 'trophic level', 'primary productivity'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'nonliving environmental variable such as light or pH\'.',
        hint2: 'Second blank points to trophic level; think about the role \'position in feeding hierarchy based on energy source\'.',
        hint3: 'Third blank is primary productivity; connect it to \'rate at which autotrophs convert energy into biomass\'.',
        explanation: 'Correct set: abiotic factor, trophic level, primary productivity. These three terms define the core mechanism chain for Energy Flow.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'abiotic factor',
            options: ['nonliving environmental variable such as light or pH', 'position in feeding hierarchy based on energy source', 'rate at which autotrophs convert energy into biomass', 'organism that recycles nutrients from organic matter']
          },
          {
            label: 'trophic level',
            options: ['organism that recycles nutrients from organic matter', 'rate at which autotrophs convert energy into biomass', 'interaction where both species gain fitness benefits', 'position in feeding hierarchy based on energy source']
          },
          {
            label: 'primary productivity',
            options: ['organism that recycles nutrients from organic matter', 'interaction where species reduce each other\'s resource access', 'rate at which autotrophs convert energy into biomass', 'interaction where both species gain fitness benefits']
          }
        ],
        correctAnswers: ['nonliving environmental variable such as light or pH', 'position in feeding hierarchy based on energy source', 'rate at which autotrophs convert energy into biomass'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'abiotic factor, trophic level, and primary productivity should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because abiotic factor nonliving environmental variable such as light or pH, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - A larger population size does not always mean greater ecological importance.
      - Succession does not imply a fixed endpoint in every environment.
      - Species interactions can shift with context, season, and disturbance.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In energy transfer through trophic levels, the observed pattern is: organism that recycles nutrients from organic matter. What term should anchor the explanation?',
            options: [
              'abiotic factor',
              'decomposer',
              'primary productivity',
              'trophic level'
            ],
            correctAnswer: 1,
            explanation: 'Use decomposer because it directly maps to the described biological pattern: organism that recycles nutrients from organic matter.'
          },
          {
            question: 'In an AP-style free-response about energy flow, the observed pattern is: interaction where both species gain fitness benefits. What term should anchor the explanation?',
            options: [
              'competition',
              'mutualism',
              'primary productivity',
              'decomposer'
            ],
            correctAnswer: 1,
            explanation: 'Use mutualism because it directly maps to the described biological pattern: interaction where both species gain fitness benefits.'
          }
        ]
      }
    }
  ]
};
