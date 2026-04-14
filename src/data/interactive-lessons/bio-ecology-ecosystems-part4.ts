export const bioEcologyPart4Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Ecology and Ecosystems: Community Interactions
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through species interactions in a forest community.
      
      ### Worked biological example
      A student team investigates species interactions in a forest community. Their first interpretation step is to identify how **primary productivity** and **decomposer** work together in the same pathway.
      
      - They classify the primary signal using **primary productivity**: rate at which autotrophs convert energy into biomass.
      - They trace the downstream response using **decomposer**: organism that recycles nutrients from organic matter.
      - They then compare outcomes with **mutualism** and **competition** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **primary productivity**
      - **decomposer**
      - **mutualism**
      - **competition**
      `
    },
    {
      id: 'bio-ecology-ecosystems-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Community Interactions, what best describes primary productivity?',
            options: [
              'interaction where both species gain fitness benefits',
              'interaction where species reduce each other\'s resource access',
              'organism that recycles nutrients from organic matter',
              'rate at which autotrophs convert energy into biomass'
            ],
            correctAnswer: 3,
            explanation: 'primary productivity is best matched with: rate at which autotrophs convert energy into biomass.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of decomposer?',
            options: [
              'directional change in community composition over time',
              'organism that recycles nutrients from organic matter',
              'interaction where both species gain fitness benefits',
              'rate at which autotrophs convert energy into biomass'
            ],
            correctAnswer: 1,
            explanation: 'decomposer is best matched with: organism that recycles nutrients from organic matter.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Community Interactions
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → primary productivity
      - **Immediate processing** → decomposer
      - **System-level consequence** → mutualism
      - **Measured readout** → competition
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | primary productivity | rate at which autotrophs convert energy into biomass | Early shift in the primary variable |
      | decomposer | organism that recycles nutrients from organic matter | Mid-pathway change in process rate |
      | mutualism | interaction where both species gain fitness benefits | Downstream phenotype trend |
      | competition | interaction where species reduce each other's resource access | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **rate at which autotrophs convert energy into biomass**

      2) Term for this definition: **organism that recycles nutrients from organic matter**

      3) Term for this definition: **interaction where both species gain fitness benefits**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['primary productivity', 'decomposer', 'mutualism'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'rate at which autotrophs convert energy into biomass\'.',
        hint2: 'Second blank points to decomposer; think about the role \'organism that recycles nutrients from organic matter\'.',
        hint3: 'Third blank is mutualism; connect it to \'interaction where both species gain fitness benefits\'.',
        explanation: 'Correct set: primary productivity, decomposer, mutualism. These three terms define the core mechanism chain for Community Interactions.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'primary productivity',
            options: ['organism that recycles nutrients from organic matter', 'rate at which autotrophs convert energy into biomass', 'interaction where species reduce each other\'s resource access', 'interaction where both species gain fitness benefits']
          },
          {
            label: 'decomposer',
            options: ['directional change in community composition over time', 'interaction where both species gain fitness benefits', 'organism that recycles nutrients from organic matter', 'interaction where species reduce each other\'s resource access']
          },
          {
            label: 'mutualism',
            options: ['directional change in community composition over time', 'interaction where both species gain fitness benefits', 'species with disproportionately large community impact', 'interaction where species reduce each other\'s resource access']
          }
        ],
        correctAnswers: ['rate at which autotrophs convert energy into biomass', 'organism that recycles nutrients from organic matter', 'interaction where both species gain fitness benefits'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'primary productivity, decomposer, and mutualism should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because primary productivity rate at which autotrophs convert energy into biomass, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Species interactions can shift with context, season, and disturbance.
      - Energy flows one way through ecosystems; nutrients cycle repeatedly.
      - A larger population size does not always mean greater ecological importance.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In species interactions in a forest community, the observed pattern is: interaction where species reduce each other\'s resource access. What term should anchor the explanation?',
            options: [
              'decomposer',
              'competition',
              'mutualism',
              'primary productivity'
            ],
            correctAnswer: 1,
            explanation: 'Use competition because it directly maps to the described biological pattern: interaction where species reduce each other\'s resource access.'
          },
          {
            question: 'In an AP-style free-response about community interactions, the observed pattern is: directional change in community composition over time. What term should anchor the explanation?',
            options: [
              'competition',
              'succession',
              'keystone species',
              'mutualism'
            ],
            correctAnswer: 1,
            explanation: 'Use succession because it directly maps to the described biological pattern: directional change in community composition over time.'
          }
        ]
      }
    }
  ]
};
