export const bioNatSelectionPart3Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'bio-natural-selection-adaptation-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Natural Selection and Adaptation: Sexual Selection
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through mate-choice effects on trait frequencies.
      
      ### Worked biological example
      A student team investigates mate-choice effects on trait frequencies. Their first interpretation step is to identify how **adaptation** and **sexual selection** work together in the same pathway.
      
      - They classify the primary signal using **adaptation**: trait increasing fitness in a specific environment.
      - They trace the downstream response using **sexual selection**: selection driven by mating success differences.
      - They then compare outcomes with **allele frequency** and **Hardy-Weinberg equilibrium** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **adaptation**
      - **sexual selection**
      - **allele frequency**
      - **Hardy-Weinberg equilibrium**
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Sexual Selection, what best describes adaptation?',
            options: [
              'null model where allele frequencies remain constant',
              'proportion of a specific allele in a population',
              'selection driven by mating success differences',
              'trait increasing fitness in a specific environment'
            ],
            correctAnswer: 3,
            explanation: 'adaptation is best matched with: trait increasing fitness in a specific environment.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of sexual selection?',
            options: [
              'trait increasing fitness in a specific environment',
              'random allele frequency change strongest in small populations',
              'selection driven by mating success differences',
              'proportion of a specific allele in a population'
            ],
            correctAnswer: 2,
            explanation: 'sexual selection is best matched with: selection driven by mating success differences.'
          }
        ]
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Sexual Selection
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → adaptation
      - **Immediate processing** → sexual selection
      - **System-level consequence** → allele frequency
      - **Measured readout** → Hardy-Weinberg equilibrium
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | adaptation | trait increasing fitness in a specific environment | Early shift in the primary variable |
      | sexual selection | selection driven by mating success differences | Mid-pathway change in process rate |
      | allele frequency | proportion of a specific allele in a population | Downstream phenotype trend |
      | Hardy-Weinberg equilibrium | null model where allele frequencies remain constant | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **trait increasing fitness in a specific environment**

      2) Term for this definition: **selection driven by mating success differences**

      3) Term for this definition: **proportion of a specific allele in a population**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['adaptation', 'sexual selection', 'allele frequency'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'trait increasing fitness in a specific environment\'.',
        hint2: 'Second blank points to sexual selection; think about the role \'selection driven by mating success differences\'.',
        hint3: 'Third blank is allele frequency; connect it to \'proportion of a specific allele in a population\'.',
        explanation: 'Correct set: adaptation, sexual selection, allele frequency. These three terms define the core mechanism chain for Sexual Selection.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'adaptation',
            options: ['selection driven by mating success differences', 'trait increasing fitness in a specific environment', 'proportion of a specific allele in a population', 'null model where allele frequencies remain constant']
          },
          {
            label: 'sexual selection',
            options: ['selection driven by mating success differences', 'random allele frequency change strongest in small populations', 'proportion of a specific allele in a population', 'null model where allele frequencies remain constant']
          },
          {
            label: 'allele frequency',
            options: ['null model where allele frequencies remain constant', 'allele movement among populations through migration', 'random allele frequency change strongest in small populations', 'proportion of a specific allele in a population']
          }
        ],
        correctAnswers: ['trait increasing fitness in a specific environment', 'selection driven by mating success differences', 'proportion of a specific allele in a population'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'adaptation, sexual selection, and allele frequency should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because adaptation trait increasing fitness in a specific environment, we expect ...".
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
      id: 'bio-natural-selection-adaptation-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In mate-choice effects on trait frequencies, the observed pattern is: null model where allele frequencies remain constant. What term should anchor the explanation?',
            options: [
              'adaptation',
              'sexual selection',
              'allele frequency',
              'Hardy-Weinberg equilibrium'
            ],
            correctAnswer: 3,
            explanation: 'Use Hardy-Weinberg equilibrium because it directly maps to the described biological pattern: null model where allele frequencies remain constant.'
          },
          {
            question: 'In an AP-style free-response about sexual selection, the observed pattern is: random allele frequency change strongest in small populations. What term should anchor the explanation?',
            options: [
              'gene flow',
              'genetic drift',
              'Hardy-Weinberg equilibrium',
              'allele frequency'
            ],
            correctAnswer: 1,
            explanation: 'Use genetic drift because it directly maps to the described biological pattern: random allele frequency change strongest in small populations.'
          }
        ]
      }
    }
  ]
};
