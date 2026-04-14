export const bioEcologyPart7Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Ecology and Ecosystems: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through full AP ecology synthesis scenarios.
      
      ### Worked biological example
      A student team investigates full AP ecology synthesis scenarios. Their first interpretation step is to identify how **competition** and **succession** work together in the same pathway.
      
      - They classify the primary signal using **competition**: interaction where species reduce each other's resource access.
      - They trace the downstream response using **succession**: directional change in community composition over time.
      - They then compare outcomes with **keystone species** and **biotic factor** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **competition**
      - **succession**
      - **keystone species**
      - **biotic factor**
      `
    },
    {
      id: 'bio-ecology-ecosystems-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes competition?',
            options: [
              'species with disproportionately large community impact',
              'interaction where species reduce each other\'s resource access',
              'living component that influences ecosystem dynamics',
              'directional change in community composition over time'
            ],
            correctAnswer: 1,
            explanation: 'competition is best matched with: interaction where species reduce each other\'s resource access.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of succession?',
            options: [
              'directional change in community composition over time',
              'nonliving environmental variable such as light or pH',
              'species with disproportionately large community impact',
              'interaction where species reduce each other\'s resource access'
            ],
            correctAnswer: 0,
            explanation: 'succession is best matched with: directional change in community composition over time.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → competition
      - **Immediate processing** → succession
      - **System-level consequence** → keystone species
      - **Measured readout** → biotic factor
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | competition | interaction where species reduce each other's resource access | Early shift in the primary variable |
      | succession | directional change in community composition over time | Mid-pathway change in process rate |
      | keystone species | species with disproportionately large community impact | Downstream phenotype trend |
      | biotic factor | living component that influences ecosystem dynamics | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **interaction where species reduce each other's resource access**

      2) Term for this definition: **directional change in community composition over time**

      3) Term for this definition: **species with disproportionately large community impact**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['competition', 'succession', 'keystone species'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'interaction where species reduce each other\'s resource access\'.',
        hint2: 'Second blank points to succession; think about the role \'directional change in community composition over time\'.',
        hint3: 'Third blank is keystone species; connect it to \'species with disproportionately large community impact\'.',
        explanation: 'Correct set: competition, succession, keystone species. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'competition',
            options: ['species with disproportionately large community impact', 'interaction where species reduce each other\'s resource access', 'living component that influences ecosystem dynamics', 'directional change in community composition over time']
          },
          {
            label: 'succession',
            options: ['species with disproportionately large community impact', 'directional change in community composition over time', 'living component that influences ecosystem dynamics', 'nonliving environmental variable such as light or pH']
          },
          {
            label: 'keystone species',
            options: ['species with disproportionately large community impact', 'living component that influences ecosystem dynamics', 'position in feeding hierarchy based on energy source', 'nonliving environmental variable such as light or pH']
          }
        ],
        correctAnswers: ['interaction where species reduce each other\'s resource access', 'directional change in community composition over time', 'species with disproportionately large community impact'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'competition, succession, and keystone species should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because competition interaction where species reduce each other's resource access, we expect ...".
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
      id: 'bio-ecology-ecosystems-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In full AP ecology synthesis scenarios, the observed pattern is: living component that influences ecosystem dynamics. What term should anchor the explanation?',
            options: [
              'competition',
              'biotic factor',
              'succession',
              'keystone species'
            ],
            correctAnswer: 1,
            explanation: 'Use biotic factor because it directly maps to the described biological pattern: living component that influences ecosystem dynamics.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: nonliving environmental variable such as light or pH. What term should anchor the explanation?',
            options: [
              'trophic level',
              'biotic factor',
              'keystone species',
              'abiotic factor'
            ],
            correctAnswer: 3,
            explanation: 'Use abiotic factor because it directly maps to the described biological pattern: nonliving environmental variable such as light or pH.'
          }
        ]
      }
    }
  ]
};
