export const bioNatSelectionPart7Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'bio-natural-selection-adaptation-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Natural Selection and Adaptation: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through AP synthesis on mechanism and evidence.
      
      ### Worked biological example
      A student team investigates AP synthesis on mechanism and evidence. Their first interpretation step is to identify how **genetic drift** and **gene flow** work together in the same pathway.
      
      - They classify the primary signal using **genetic drift**: random allele frequency change strongest in small populations.
      - They trace the downstream response using **gene flow**: allele movement among populations through migration.
      - They then compare outcomes with **evolution** and **natural selection** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **genetic drift**
      - **gene flow**
      - **evolution**
      - **natural selection**
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes genetic drift?',
            options: [
              'random allele frequency change strongest in small populations',
              'allele movement among populations through migration',
              'change in population allele frequencies over generations',
              'differential survival and reproduction tied to heritable variation'
            ],
            correctAnswer: 0,
            explanation: 'genetic drift is best matched with: random allele frequency change strongest in small populations.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of gene flow?',
            options: [
              'allele movement among populations through migration',
              'change in population allele frequencies over generations',
              'random allele frequency change strongest in small populations',
              'environmental factor influencing reproductive success'
            ],
            correctAnswer: 0,
            explanation: 'gene flow is best matched with: allele movement among populations through migration.'
          }
        ]
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → genetic drift
      - **Immediate processing** → gene flow
      - **System-level consequence** → evolution
      - **Measured readout** → natural selection
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | genetic drift | random allele frequency change strongest in small populations | Early shift in the primary variable |
      | gene flow | allele movement among populations through migration | Mid-pathway change in process rate |
      | evolution | change in population allele frequencies over generations | Downstream phenotype trend |
      | natural selection | differential survival and reproduction tied to heritable variation | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **random allele frequency change strongest in small populations**

      2) Term for this definition: **allele movement among populations through migration**

      3) Term for this definition: **change in population allele frequencies over generations**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['genetic drift', 'gene flow', 'evolution'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'random allele frequency change strongest in small populations\'.',
        hint2: 'Second blank points to gene flow; think about the role \'allele movement among populations through migration\'.',
        hint3: 'Third blank is evolution; connect it to \'change in population allele frequencies over generations\'.',
        explanation: 'Correct set: genetic drift, gene flow, evolution. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'genetic drift',
            options: ['allele movement among populations through migration', 'differential survival and reproduction tied to heritable variation', 'change in population allele frequencies over generations', 'random allele frequency change strongest in small populations']
          },
          {
            label: 'gene flow',
            options: ['differential survival and reproduction tied to heritable variation', 'allele movement among populations through migration', 'environmental factor influencing reproductive success', 'change in population allele frequencies over generations']
          },
          {
            label: 'evolution',
            options: ['change in population allele frequencies over generations', 'differential survival and reproduction tied to heritable variation', 'trait increasing fitness in a specific environment', 'environmental factor influencing reproductive success']
          }
        ],
        correctAnswers: ['random allele frequency change strongest in small populations', 'allele movement among populations through migration', 'change in population allele frequencies over generations'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'genetic drift, gene flow, and evolution should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because genetic drift random allele frequency change strongest in small populations, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Hardy-Weinberg is a baseline comparison, not a claim that real populations are static.
      - Adaptation and acclimation are different processes with different timescales.
      - Individuals do not evolve genetically within a lifetime; populations evolve across generations.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In AP synthesis on mechanism and evidence, the observed pattern is: differential survival and reproduction tied to heritable variation. What term should anchor the explanation?',
            options: [
              'gene flow',
              'natural selection',
              'evolution',
              'genetic drift'
            ],
            correctAnswer: 1,
            explanation: 'Use natural selection because it directly maps to the described biological pattern: differential survival and reproduction tied to heritable variation.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: environmental factor influencing reproductive success. What term should anchor the explanation?',
            options: [
              'evolution',
              'adaptation',
              'natural selection',
              'selection pressure'
            ],
            correctAnswer: 3,
            explanation: 'Use selection pressure because it directly maps to the described biological pattern: environmental factor influencing reproductive success.'
          }
        ]
      }
    }
  ]
};
