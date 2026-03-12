export const bioSpeciationPart4Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Speciation and Macroevolution: Reproductive Isolation
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through prezygotic and postzygotic barrier analysis.
      
      ### Worked biological example
      A student team investigates prezygotic and postzygotic barrier analysis. Their first interpretation step is to identify how **prezygotic barrier** and **postzygotic barrier** work together in the same pathway.
      
      - They classify the primary signal using **prezygotic barrier**: reproductive isolation mechanism before fertilization.
      - They trace the downstream response using **postzygotic barrier**: isolation mechanism reducing hybrid viability or fertility.
      - They then compare outcomes with **polyploidy** and **adaptive radiation** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **prezygotic barrier**
      - **postzygotic barrier**
      - **polyploidy**
      - **adaptive radiation**
      `
    },
    {
      id: 'bio-speciation-macroevolution-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Reproductive Isolation, what best describes prezygotic barrier?',
            options: [
              'rapid diversification from a common ancestor into niches',
              'isolation mechanism reducing hybrid viability or fertility',
              'reproductive isolation mechanism before fertilization',
              'genome duplication that can create instant reproductive isolation'
            ],
            correctAnswer: 2,
            explanation: 'prezygotic barrier is best matched with: reproductive isolation mechanism before fertilization.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of postzygotic barrier?',
            options: [
              'isolation mechanism reducing hybrid viability or fertility',
              'reproductive isolation mechanism before fertilization',
              'large-scale evolutionary patterns above the species level',
              'genome duplication that can create instant reproductive isolation'
            ],
            correctAnswer: 0,
            explanation: 'postzygotic barrier is best matched with: isolation mechanism reducing hybrid viability or fertility.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Reproductive Isolation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → prezygotic barrier
      - **Immediate processing** → postzygotic barrier
      - **System-level consequence** → polyploidy
      - **Measured readout** → adaptive radiation
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | prezygotic barrier | reproductive isolation mechanism before fertilization | Early shift in the primary variable |
      | postzygotic barrier | isolation mechanism reducing hybrid viability or fertility | Mid-pathway change in process rate |
      | polyploidy | genome duplication that can create instant reproductive isolation | Downstream phenotype trend |
      | adaptive radiation | rapid diversification from a common ancestor into niches | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **reproductive isolation mechanism before fertilization**
      2) Term for this definition: **isolation mechanism reducing hybrid viability or fertility**
      3) Term for this definition: **genome duplication that can create instant reproductive isolation**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['prezygotic barrier', 'postzygotic barrier', 'polyploidy'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'reproductive isolation mechanism before fertilization\'.',
        hint2: 'Second blank points to postzygotic barrier; think about the role \'isolation mechanism reducing hybrid viability or fertility\'.',
        hint3: 'Third blank is polyploidy; connect it to \'genome duplication that can create instant reproductive isolation\'.',
        explanation: 'Correct set: prezygotic barrier, postzygotic barrier, polyploidy. These three terms define the core mechanism chain for Reproductive Isolation.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'prezygotic barrier',
            options: ['reproductive isolation mechanism before fertilization', 'genome duplication that can create instant reproductive isolation', 'rapid diversification from a common ancestor into niches', 'isolation mechanism reducing hybrid viability or fertility']
          },
          {
            label: 'postzygotic barrier',
            options: ['large-scale evolutionary patterns above the species level', 'isolation mechanism reducing hybrid viability or fertility', 'rapid diversification from a common ancestor into niches', 'genome duplication that can create instant reproductive isolation']
          },
          {
            label: 'polyploidy',
            options: ['genome duplication that can create instant reproductive isolation', 'rapid diversification from a common ancestor into niches', 'restriction of gene flow between populations', 'large-scale evolutionary patterns above the species level']
          }
        ],
        correctAnswers: ['reproductive isolation mechanism before fertilization', 'isolation mechanism reducing hybrid viability or fertility', 'genome duplication that can create instant reproductive isolation'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'prezygotic barrier, postzygotic barrier, and polyploidy should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because prezygotic barrier reproductive isolation mechanism before fertilization, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Species concepts are tools with context-dependent strengths and limits.
      - Speciation can occur with or without physical barriers depending on mechanism.
      - Macroevolutionary patterns emerge from accumulated microevolutionary processes plus lineage sorting.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In prezygotic and postzygotic barrier analysis, the observed pattern is: rapid diversification from a common ancestor into niches. What term should anchor the explanation?',
            options: [
              'polyploidy',
              'adaptive radiation',
              'prezygotic barrier',
              'postzygotic barrier'
            ],
            correctAnswer: 1,
            explanation: 'Use adaptive radiation because it directly maps to the described biological pattern: rapid diversification from a common ancestor into niches.'
          },
          {
            question: 'In an AP-style free-response about reproductive isolation, the observed pattern is: large-scale evolutionary patterns above the species level. What term should anchor the explanation?',
            options: [
              'polyploidy',
              'adaptive radiation',
              'macroevolution',
              'reproductive isolation'
            ],
            correctAnswer: 2,
            explanation: 'Use macroevolution because it directly maps to the described biological pattern: large-scale evolutionary patterns above the species level.'
          }
        ]
      }
    }
  ]
};
