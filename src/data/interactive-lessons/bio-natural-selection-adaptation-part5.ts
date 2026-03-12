export const bioNatSelectionPart5Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'bio-natural-selection-adaptation-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Natural Selection and Adaptation: Hardy-Weinberg
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through Hardy-Weinberg model checks with allele frequencies.
      
      ### Worked biological example
      A student team investigates Hardy-Weinberg model checks with allele frequencies. Their first interpretation step is to identify how **allele frequency** and **Hardy-Weinberg equilibrium** work together in the same pathway.
      
      - They classify the primary signal using **allele frequency**: proportion of a specific allele in a population.
      - They trace the downstream response using **Hardy-Weinberg equilibrium**: null model where allele frequencies remain constant.
      - They then compare outcomes with **genetic drift** and **gene flow** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **allele frequency**
      - **Hardy-Weinberg equilibrium**
      - **genetic drift**
      - **gene flow**
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Hardy-Weinberg, what best describes allele frequency?',
            options: [
              'random allele frequency change strongest in small populations',
              'proportion of a specific allele in a population',
              'null model where allele frequencies remain constant',
              'allele movement among populations through migration'
            ],
            correctAnswer: 1,
            explanation: 'allele frequency is best matched with: proportion of a specific allele in a population.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of Hardy-Weinberg equilibrium?',
            options: [
              'proportion of a specific allele in a population',
              'null model where allele frequencies remain constant',
              'random allele frequency change strongest in small populations',
              'change in population allele frequencies over generations'
            ],
            correctAnswer: 1,
            explanation: 'Hardy-Weinberg equilibrium is best matched with: null model where allele frequencies remain constant.'
          }
        ]
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Hardy-Weinberg
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → allele frequency
      - **Immediate processing** → Hardy-Weinberg equilibrium
      - **System-level consequence** → genetic drift
      - **Measured readout** → gene flow
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | allele frequency | proportion of a specific allele in a population | Early shift in the primary variable |
      | Hardy-Weinberg equilibrium | null model where allele frequencies remain constant | Mid-pathway change in process rate |
      | genetic drift | random allele frequency change strongest in small populations | Downstream phenotype trend |
      | gene flow | allele movement among populations through migration | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **proportion of a specific allele in a population**
      2) Term for this definition: **null model where allele frequencies remain constant**
      3) Term for this definition: **random allele frequency change strongest in small populations**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['allele frequency', 'Hardy-Weinberg equilibrium', 'genetic drift'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'proportion of a specific allele in a population\'.',
        hint2: 'Second blank points to Hardy-Weinberg equilibrium; think about the role \'null model where allele frequencies remain constant\'.',
        hint3: 'Third blank is genetic drift; connect it to \'random allele frequency change strongest in small populations\'.',
        explanation: 'Correct set: allele frequency, Hardy-Weinberg equilibrium, genetic drift. These three terms define the core mechanism chain for Hardy-Weinberg.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'allele frequency',
            options: ['null model where allele frequencies remain constant', 'allele movement among populations through migration', 'random allele frequency change strongest in small populations', 'proportion of a specific allele in a population']
          },
          {
            label: 'Hardy-Weinberg equilibrium',
            options: ['allele movement among populations through migration', 'null model where allele frequencies remain constant', 'change in population allele frequencies over generations', 'random allele frequency change strongest in small populations']
          },
          {
            label: 'genetic drift',
            options: ['differential survival and reproduction tied to heritable variation', 'random allele frequency change strongest in small populations', 'change in population allele frequencies over generations', 'allele movement among populations through migration']
          }
        ],
        correctAnswers: ['proportion of a specific allele in a population', 'null model where allele frequencies remain constant', 'random allele frequency change strongest in small populations'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'allele frequency, Hardy-Weinberg equilibrium, and genetic drift should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because allele frequency proportion of a specific allele in a population, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Individuals do not evolve genetically within a lifetime; populations evolve across generations.
      - Selection acts on phenotypes, while evolution is tracked through allele frequencies.
      - Hardy-Weinberg is a baseline comparison, not a claim that real populations are static.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In Hardy-Weinberg model checks with allele frequencies, the observed pattern is: allele movement among populations through migration. What term should anchor the explanation?',
            options: [
              'allele frequency',
              'genetic drift',
              'gene flow',
              'Hardy-Weinberg equilibrium'
            ],
            correctAnswer: 2,
            explanation: 'Use gene flow because it directly maps to the described biological pattern: allele movement among populations through migration.'
          },
          {
            question: 'In an AP-style free-response about hardy-weinberg, the observed pattern is: change in population allele frequencies over generations. What term should anchor the explanation?',
            options: [
              'evolution',
              'natural selection',
              'genetic drift',
              'gene flow'
            ],
            correctAnswer: 0,
            explanation: 'Use evolution because it directly maps to the described biological pattern: change in population allele frequencies over generations.'
          }
        ]
      }
    }
  ]
};
