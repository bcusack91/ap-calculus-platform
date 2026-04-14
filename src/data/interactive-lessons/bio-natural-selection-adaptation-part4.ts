export const bioNatSelectionPart4Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'bio-natural-selection-adaptation-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Natural Selection and Adaptation: Adaptation Mechanisms
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through adaptive trait mechanisms under stress.
      
      ### Worked biological example
      A student team investigates adaptive trait mechanisms under stress. Their first interpretation step is to identify how **sexual selection** and **allele frequency** work together in the same pathway.
      
      - They classify the primary signal using **sexual selection**: selection driven by mating success differences.
      - They trace the downstream response using **allele frequency**: proportion of a specific allele in a population.
      - They then compare outcomes with **Hardy-Weinberg equilibrium** and **genetic drift** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **sexual selection**
      - **allele frequency**
      - **Hardy-Weinberg equilibrium**
      - **genetic drift**
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Adaptation Mechanisms, what best describes sexual selection?',
            options: [
              'random allele frequency change strongest in small populations',
              'null model where allele frequencies remain constant',
              'selection driven by mating success differences',
              'proportion of a specific allele in a population'
            ],
            correctAnswer: 2,
            explanation: 'sexual selection is best matched with: selection driven by mating success differences.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of allele frequency?',
            options: [
              'proportion of a specific allele in a population',
              'selection driven by mating success differences',
              'allele movement among populations through migration',
              'null model where allele frequencies remain constant'
            ],
            correctAnswer: 0,
            explanation: 'allele frequency is best matched with: proportion of a specific allele in a population.'
          }
        ]
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Adaptation Mechanisms
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → sexual selection
      - **Immediate processing** → allele frequency
      - **System-level consequence** → Hardy-Weinberg equilibrium
      - **Measured readout** → genetic drift
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | sexual selection | selection driven by mating success differences | Early shift in the primary variable |
      | allele frequency | proportion of a specific allele in a population | Mid-pathway change in process rate |
      | Hardy-Weinberg equilibrium | null model where allele frequencies remain constant | Downstream phenotype trend |
      | genetic drift | random allele frequency change strongest in small populations | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **selection driven by mating success differences**

      2) Term for this definition: **proportion of a specific allele in a population**

      3) Term for this definition: **null model where allele frequencies remain constant**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sexual selection', 'allele frequency', 'Hardy-Weinberg equilibrium'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'selection driven by mating success differences\'.',
        hint2: 'Second blank points to allele frequency; think about the role \'proportion of a specific allele in a population\'.',
        hint3: 'Third blank is Hardy-Weinberg equilibrium; connect it to \'null model where allele frequencies remain constant\'.',
        explanation: 'Correct set: sexual selection, allele frequency, Hardy-Weinberg equilibrium. These three terms define the core mechanism chain for Adaptation Mechanisms.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sexual selection',
            options: ['selection driven by mating success differences', 'proportion of a specific allele in a population', 'null model where allele frequencies remain constant', 'random allele frequency change strongest in small populations']
          },
          {
            label: 'allele frequency',
            options: ['null model where allele frequencies remain constant', 'allele movement among populations through migration', 'proportion of a specific allele in a population', 'random allele frequency change strongest in small populations']
          },
          {
            label: 'Hardy-Weinberg equilibrium',
            options: ['null model where allele frequencies remain constant', 'change in population allele frequencies over generations', 'allele movement among populations through migration', 'random allele frequency change strongest in small populations']
          }
        ],
        correctAnswers: ['selection driven by mating success differences', 'proportion of a specific allele in a population', 'null model where allele frequencies remain constant'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'sexual selection, allele frequency, and Hardy-Weinberg equilibrium should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because sexual selection selection driven by mating success differences, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Adaptation and acclimation are different processes with different timescales.
      - Individuals do not evolve genetically within a lifetime; populations evolve across generations.
      - Selection acts on phenotypes, while evolution is tracked through allele frequencies.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In adaptive trait mechanisms under stress, the observed pattern is: random allele frequency change strongest in small populations. What term should anchor the explanation?',
            options: [
              'Hardy-Weinberg equilibrium',
              'genetic drift',
              'sexual selection',
              'allele frequency'
            ],
            correctAnswer: 1,
            explanation: 'Use genetic drift because it directly maps to the described biological pattern: random allele frequency change strongest in small populations.'
          },
          {
            question: 'In an AP-style free-response about adaptation mechanisms, the observed pattern is: allele movement among populations through migration. What term should anchor the explanation?',
            options: [
              'Hardy-Weinberg equilibrium',
              'genetic drift',
              'gene flow',
              'evolution'
            ],
            correctAnswer: 2,
            explanation: 'Use gene flow because it directly maps to the described biological pattern: allele movement among populations through migration.'
          }
        ]
      }
    }
  ]
};
