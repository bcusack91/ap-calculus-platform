export const bioSpeciationPart2Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Speciation and Macroevolution: Allopatric Speciation
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through geographic barrier formation and divergence.
      
      ### Worked biological example
      A student team investigates geographic barrier formation and divergence. Their first interpretation step is to identify how **allopatric speciation** and **sympatric speciation** work together in the same pathway.
      
      - They classify the primary signal using **allopatric speciation**: speciation following geographic isolation.
      - They trace the downstream response using **sympatric speciation**: speciation without geographic separation.
      - They then compare outcomes with **prezygotic barrier** and **postzygotic barrier** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **allopatric speciation**
      - **sympatric speciation**
      - **prezygotic barrier**
      - **postzygotic barrier**
      `
    },
    {
      id: 'bio-speciation-macroevolution-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Allopatric Speciation, what best describes allopatric speciation?',
            options: [
              'isolation mechanism reducing hybrid viability or fertility',
              'speciation without geographic separation',
              'speciation following geographic isolation',
              'reproductive isolation mechanism before fertilization'
            ],
            correctAnswer: 2,
            explanation: 'allopatric speciation is best matched with: speciation following geographic isolation.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of sympatric speciation?',
            options: [
              'reproductive isolation mechanism before fertilization',
              'speciation without geographic separation',
              'speciation following geographic isolation',
              'genome duplication that can create instant reproductive isolation'
            ],
            correctAnswer: 1,
            explanation: 'sympatric speciation is best matched with: speciation without geographic separation.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Allopatric Speciation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → allopatric speciation
      - **Immediate processing** → sympatric speciation
      - **System-level consequence** → prezygotic barrier
      - **Measured readout** → postzygotic barrier
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | allopatric speciation | speciation following geographic isolation | Early shift in the primary variable |
      | sympatric speciation | speciation without geographic separation | Mid-pathway change in process rate |
      | prezygotic barrier | reproductive isolation mechanism before fertilization | Downstream phenotype trend |
      | postzygotic barrier | isolation mechanism reducing hybrid viability or fertility | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **speciation following geographic isolation**
      2) Term for this definition: **speciation without geographic separation**
      3) Term for this definition: **reproductive isolation mechanism before fertilization**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['allopatric speciation', 'sympatric speciation', 'prezygotic barrier'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'speciation following geographic isolation\'.',
        hint2: 'Second blank points to sympatric speciation; think about the role \'speciation without geographic separation\'.',
        hint3: 'Third blank is prezygotic barrier; connect it to \'reproductive isolation mechanism before fertilization\'.',
        explanation: 'Correct set: allopatric speciation, sympatric speciation, prezygotic barrier. These three terms define the core mechanism chain for Allopatric Speciation.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'allopatric speciation',
            options: ['speciation without geographic separation', 'isolation mechanism reducing hybrid viability or fertility', 'reproductive isolation mechanism before fertilization', 'speciation following geographic isolation']
          },
          {
            label: 'sympatric speciation',
            options: ['speciation without geographic separation', 'isolation mechanism reducing hybrid viability or fertility', 'genome duplication that can create instant reproductive isolation', 'reproductive isolation mechanism before fertilization']
          },
          {
            label: 'prezygotic barrier',
            options: ['isolation mechanism reducing hybrid viability or fertility', 'genome duplication that can create instant reproductive isolation', 'reproductive isolation mechanism before fertilization', 'rapid diversification from a common ancestor into niches']
          }
        ],
        correctAnswers: ['speciation following geographic isolation', 'speciation without geographic separation', 'reproductive isolation mechanism before fertilization'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'allopatric speciation, sympatric speciation, and prezygotic barrier should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because allopatric speciation speciation following geographic isolation, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Macroevolutionary patterns emerge from accumulated microevolutionary processes plus lineage sorting.
      - Hybridization does not always erase species boundaries; outcomes depend on fitness and gene flow.
      - Species concepts are tools with context-dependent strengths and limits.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In geographic barrier formation and divergence, the observed pattern is: isolation mechanism reducing hybrid viability or fertility. What term should anchor the explanation?',
            options: [
              'prezygotic barrier',
              'allopatric speciation',
              'sympatric speciation',
              'postzygotic barrier'
            ],
            correctAnswer: 3,
            explanation: 'Use postzygotic barrier because it directly maps to the described biological pattern: isolation mechanism reducing hybrid viability or fertility.'
          },
          {
            question: 'In an AP-style free-response about allopatric speciation, the observed pattern is: genome duplication that can create instant reproductive isolation. What term should anchor the explanation?',
            options: [
              'adaptive radiation',
              'prezygotic barrier',
              'postzygotic barrier',
              'polyploidy'
            ],
            correctAnswer: 3,
            explanation: 'Use polyploidy because it directly maps to the described biological pattern: genome duplication that can create instant reproductive isolation.'
          }
        ]
      }
    }
  ]
};
