export const bioSpeciationPart3Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Speciation and Macroevolution: Sympatric Speciation
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through polyploidy-driven divergence in plants.
      
      ### Worked biological example
      A student team investigates polyploidy-driven divergence in plants. Their first interpretation step is to identify how **sympatric speciation** and **prezygotic barrier** work together in the same pathway.
      
      - They classify the primary signal using **sympatric speciation**: speciation without geographic separation.
      - They trace the downstream response using **prezygotic barrier**: reproductive isolation mechanism before fertilization.
      - They then compare outcomes with **postzygotic barrier** and **polyploidy** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **sympatric speciation**
      - **prezygotic barrier**
      - **postzygotic barrier**
      - **polyploidy**
      `
    },
    {
      id: 'bio-speciation-macroevolution-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Sympatric Speciation, what best describes sympatric speciation?',
            options: [
              'isolation mechanism reducing hybrid viability or fertility',
              'genome duplication that can create instant reproductive isolation',
              'speciation without geographic separation',
              'reproductive isolation mechanism before fertilization'
            ],
            correctAnswer: 2,
            explanation: 'sympatric speciation is best matched with: speciation without geographic separation.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of prezygotic barrier?',
            options: [
              'speciation without geographic separation',
              'isolation mechanism reducing hybrid viability or fertility',
              'reproductive isolation mechanism before fertilization',
              'rapid diversification from a common ancestor into niches'
            ],
            correctAnswer: 2,
            explanation: 'prezygotic barrier is best matched with: reproductive isolation mechanism before fertilization.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Sympatric Speciation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → sympatric speciation
      - **Immediate processing** → prezygotic barrier
      - **System-level consequence** → postzygotic barrier
      - **Measured readout** → polyploidy
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | sympatric speciation | speciation without geographic separation | Early shift in the primary variable |
      | prezygotic barrier | reproductive isolation mechanism before fertilization | Mid-pathway change in process rate |
      | postzygotic barrier | isolation mechanism reducing hybrid viability or fertility | Downstream phenotype trend |
      | polyploidy | genome duplication that can create instant reproductive isolation | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **speciation without geographic separation**

      2) Term for this definition: **reproductive isolation mechanism before fertilization**

      3) Term for this definition: **isolation mechanism reducing hybrid viability or fertility**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sympatric speciation', 'prezygotic barrier', 'postzygotic barrier'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'speciation without geographic separation\'.',
        hint2: 'Second blank points to prezygotic barrier; think about the role \'reproductive isolation mechanism before fertilization\'.',
        hint3: 'Third blank is postzygotic barrier; connect it to \'isolation mechanism reducing hybrid viability or fertility\'.',
        explanation: 'Correct set: sympatric speciation, prezygotic barrier, postzygotic barrier. These three terms define the core mechanism chain for Sympatric Speciation.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sympatric speciation',
            options: ['genome duplication that can create instant reproductive isolation', 'speciation without geographic separation', 'reproductive isolation mechanism before fertilization', 'isolation mechanism reducing hybrid viability or fertility']
          },
          {
            label: 'prezygotic barrier',
            options: ['genome duplication that can create instant reproductive isolation', 'rapid diversification from a common ancestor into niches', 'reproductive isolation mechanism before fertilization', 'isolation mechanism reducing hybrid viability or fertility']
          },
          {
            label: 'postzygotic barrier',
            options: ['rapid diversification from a common ancestor into niches', 'large-scale evolutionary patterns above the species level', 'genome duplication that can create instant reproductive isolation', 'isolation mechanism reducing hybrid viability or fertility']
          }
        ],
        correctAnswers: ['speciation without geographic separation', 'reproductive isolation mechanism before fertilization', 'isolation mechanism reducing hybrid viability or fertility'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'sympatric speciation, prezygotic barrier, and postzygotic barrier should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because sympatric speciation speciation without geographic separation, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Hybridization does not always erase species boundaries; outcomes depend on fitness and gene flow.
      - Species concepts are tools with context-dependent strengths and limits.
      - Speciation can occur with or without physical barriers depending on mechanism.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In polyploidy-driven divergence in plants, the observed pattern is: genome duplication that can create instant reproductive isolation. What term should anchor the explanation?',
            options: [
              'sympatric speciation',
              'prezygotic barrier',
              'polyploidy',
              'postzygotic barrier'
            ],
            correctAnswer: 2,
            explanation: 'Use polyploidy because it directly maps to the described biological pattern: genome duplication that can create instant reproductive isolation.'
          },
          {
            question: 'In an AP-style free-response about sympatric speciation, the observed pattern is: rapid diversification from a common ancestor into niches. What term should anchor the explanation?',
            options: [
              'polyploidy',
              'postzygotic barrier',
              'adaptive radiation',
              'macroevolution'
            ],
            correctAnswer: 2,
            explanation: 'Use adaptive radiation because it directly maps to the described biological pattern: rapid diversification from a common ancestor into niches.'
          }
        ]
      }
    }
  ]
};
