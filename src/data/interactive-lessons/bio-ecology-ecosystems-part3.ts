export const bioEcologyPart3Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Ecology and Ecosystems: Biogeochemical Cycles
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through carbon and nitrogen movement across reservoirs.
      
      ### Worked biological example
      A student team investigates carbon and nitrogen movement across reservoirs. Their first interpretation step is to identify how **trophic level** and **primary productivity** work together in the same pathway.
      
      - They classify the primary signal using **trophic level**: position in feeding hierarchy based on energy source.
      - They trace the downstream response using **primary productivity**: rate at which autotrophs convert energy into biomass.
      - They then compare outcomes with **decomposer** and **mutualism** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **trophic level**
      - **primary productivity**
      - **decomposer**
      - **mutualism**
      `
    },
    {
      id: 'bio-ecology-ecosystems-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Biogeochemical Cycles, what best describes trophic level?',
            options: [
              'organism that recycles nutrients from organic matter',
              'position in feeding hierarchy based on energy source',
              'rate at which autotrophs convert energy into biomass',
              'interaction where both species gain fitness benefits'
            ],
            correctAnswer: 1,
            explanation: 'trophic level is best matched with: position in feeding hierarchy based on energy source.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of primary productivity?',
            options: [
              'interaction where species reduce each other\'s resource access',
              'organism that recycles nutrients from organic matter',
              'position in feeding hierarchy based on energy source',
              'rate at which autotrophs convert energy into biomass'
            ],
            correctAnswer: 3,
            explanation: 'primary productivity is best matched with: rate at which autotrophs convert energy into biomass.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Biogeochemical Cycles
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → trophic level
      - **Immediate processing** → primary productivity
      - **System-level consequence** → decomposer
      - **Measured readout** → mutualism
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | trophic level | position in feeding hierarchy based on energy source | Early shift in the primary variable |
      | primary productivity | rate at which autotrophs convert energy into biomass | Mid-pathway change in process rate |
      | decomposer | organism that recycles nutrients from organic matter | Downstream phenotype trend |
      | mutualism | interaction where both species gain fitness benefits | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **position in feeding hierarchy based on energy source**

      2) Term for this definition: **rate at which autotrophs convert energy into biomass**

      3) Term for this definition: **organism that recycles nutrients from organic matter**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['trophic level', 'primary productivity', 'decomposer'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'position in feeding hierarchy based on energy source\'.',
        hint2: 'Second blank points to primary productivity; think about the role \'rate at which autotrophs convert energy into biomass\'.',
        hint3: 'Third blank is decomposer; connect it to \'organism that recycles nutrients from organic matter\'.',
        explanation: 'Correct set: trophic level, primary productivity, decomposer. These three terms define the core mechanism chain for Biogeochemical Cycles.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'trophic level',
            options: ['interaction where both species gain fitness benefits', 'organism that recycles nutrients from organic matter', 'position in feeding hierarchy based on energy source', 'rate at which autotrophs convert energy into biomass']
          },
          {
            label: 'primary productivity',
            options: ['rate at which autotrophs convert energy into biomass', 'interaction where species reduce each other\'s resource access', 'interaction where both species gain fitness benefits', 'organism that recycles nutrients from organic matter']
          },
          {
            label: 'decomposer',
            options: ['interaction where both species gain fitness benefits', 'directional change in community composition over time', 'interaction where species reduce each other\'s resource access', 'organism that recycles nutrients from organic matter']
          }
        ],
        correctAnswers: ['position in feeding hierarchy based on energy source', 'rate at which autotrophs convert energy into biomass', 'organism that recycles nutrients from organic matter'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'trophic level, primary productivity, and decomposer should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because trophic level position in feeding hierarchy based on energy source, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Succession does not imply a fixed endpoint in every environment.
      - Species interactions can shift with context, season, and disturbance.
      - Energy flows one way through ecosystems; nutrients cycle repeatedly.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In carbon and nitrogen movement across reservoirs, the observed pattern is: interaction where both species gain fitness benefits. What term should anchor the explanation?',
            options: [
              'decomposer',
              'mutualism',
              'primary productivity',
              'trophic level'
            ],
            correctAnswer: 1,
            explanation: 'Use mutualism because it directly maps to the described biological pattern: interaction where both species gain fitness benefits.'
          },
          {
            question: 'In an AP-style free-response about biogeochemical cycles, the observed pattern is: interaction where species reduce each other\'s resource access. What term should anchor the explanation?',
            options: [
              'succession',
              'mutualism',
              'decomposer',
              'competition'
            ],
            correctAnswer: 3,
            explanation: 'Use competition because it directly maps to the described biological pattern: interaction where species reduce each other\'s resource access.'
          }
        ]
      }
    }
  ]
};
