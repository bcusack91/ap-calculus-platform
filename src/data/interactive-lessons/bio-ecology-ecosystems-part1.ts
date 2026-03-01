export const bioEcologyPart1Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Ecology and Ecosystems: Ecosystem Components
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through wetland food web structure and productivity.
      
      ### Worked biological example
      A student team investigates wetland food web structure and productivity. Their first interpretation step is to identify how **biotic factor** and **abiotic factor** work together in the same pathway.
      
      - They classify the primary signal using **biotic factor**: living component that influences ecosystem dynamics.
      - They trace the downstream response using **abiotic factor**: nonliving environmental variable such as light or pH.
      - They then compare outcomes with **trophic level** and **primary productivity** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **biotic factor**
      - **abiotic factor**
      - **trophic level**
      - **primary productivity**
      `
    },
    {
      id: 'bio-ecology-ecosystems-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Ecosystem Components, what best describes biotic factor?',
            options: [
              'position in feeding hierarchy based on energy source',
              'nonliving environmental variable such as light or pH',
              'living component that influences ecosystem dynamics',
              'rate at which autotrophs convert energy into biomass'
            ],
            correctAnswer: 2,
            explanation: 'biotic factor is best matched with: living component that influences ecosystem dynamics.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of abiotic factor?',
            options: [
              'organism that recycles nutrients from organic matter',
              'position in feeding hierarchy based on energy source',
              'living component that influences ecosystem dynamics',
              'nonliving environmental variable such as light or pH'
            ],
            correctAnswer: 3,
            explanation: 'abiotic factor is best matched with: nonliving environmental variable such as light or pH.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Ecosystem Components
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → biotic factor
      - **Immediate processing** → abiotic factor
      - **System-level consequence** → trophic level
      - **Measured readout** → primary productivity
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | biotic factor | living component that influences ecosystem dynamics | Early shift in the primary variable |
      | abiotic factor | nonliving environmental variable such as light or pH | Mid-pathway change in process rate |
      | trophic level | position in feeding hierarchy based on energy source | Downstream phenotype trend |
      | primary productivity | rate at which autotrophs convert energy into biomass | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **living component that influences ecosystem dynamics**
      2) Term for this definition: **nonliving environmental variable such as light or pH**
      3) Term for this definition: **position in feeding hierarchy based on energy source**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['biotic factor', 'abiotic factor', 'trophic level'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'living component that influences ecosystem dynamics\'.',
        hint2: 'Second blank points to abiotic factor; think about the role \'nonliving environmental variable such as light or pH\'.',
        hint3: 'Third blank is trophic level; connect it to \'position in feeding hierarchy based on energy source\'.',
        explanation: 'Correct set: biotic factor, abiotic factor, trophic level. These three terms define the core mechanism chain for Ecosystem Components.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'biotic factor',
            options: ['nonliving environmental variable such as light or pH', 'position in feeding hierarchy based on energy source', 'living component that influences ecosystem dynamics', 'rate at which autotrophs convert energy into biomass']
          },
          {
            label: 'abiotic factor',
            options: ['nonliving environmental variable such as light or pH', 'organism that recycles nutrients from organic matter', 'position in feeding hierarchy based on energy source', 'rate at which autotrophs convert energy into biomass']
          },
          {
            label: 'trophic level',
            options: ['interaction where both species gain fitness benefits', 'rate at which autotrophs convert energy into biomass', 'organism that recycles nutrients from organic matter', 'position in feeding hierarchy based on energy source']
          }
        ],
        correctAnswers: ['living component that influences ecosystem dynamics', 'nonliving environmental variable such as light or pH', 'position in feeding hierarchy based on energy source'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'biotic factor, abiotic factor, and trophic level should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because biotic factor living component that influences ecosystem dynamics, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Energy flows one way through ecosystems; nutrients cycle repeatedly.
      - A larger population size does not always mean greater ecological importance.
      - Succession does not imply a fixed endpoint in every environment.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In wetland food web structure and productivity, the observed pattern is: rate at which autotrophs convert energy into biomass. What term should anchor the explanation?',
            options: [
              'trophic level',
              'primary productivity',
              'biotic factor',
              'abiotic factor'
            ],
            correctAnswer: 1,
            explanation: 'Use primary productivity because it directly maps to the described biological pattern: rate at which autotrophs convert energy into biomass.'
          },
          {
            question: 'In an AP-style free-response about ecosystem components, the observed pattern is: organism that recycles nutrients from organic matter. What term should anchor the explanation?',
            options: [
              'primary productivity',
              'trophic level',
              'mutualism',
              'decomposer'
            ],
            correctAnswer: 3,
            explanation: 'Use decomposer because it directly maps to the described biological pattern: organism that recycles nutrients from organic matter.'
          }
        ]
      }
    }
  ]
};
