export const bioNatSelectionPart2Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'bio-natural-selection-adaptation-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Natural Selection and Adaptation: Types of Selection
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through stabilizing and directional selection data.
      
      ### Worked biological example
      A student team investigates stabilizing and directional selection data. Their first interpretation step is to identify how **selection pressure** and **adaptation** work together in the same pathway.
      
      - They classify the primary signal using **selection pressure**: environmental factor influencing reproductive success.
      - They trace the downstream response using **adaptation**: trait increasing fitness in a specific environment.
      - They then compare outcomes with **sexual selection** and **allele frequency** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **selection pressure**
      - **adaptation**
      - **sexual selection**
      - **allele frequency**
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Types of Selection, what best describes selection pressure?',
            options: [
              'trait increasing fitness in a specific environment',
              'environmental factor influencing reproductive success',
              'proportion of a specific allele in a population',
              'selection driven by mating success differences'
            ],
            correctAnswer: 1,
            explanation: 'selection pressure is best matched with: environmental factor influencing reproductive success.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of adaptation?',
            options: [
              'trait increasing fitness in a specific environment',
              'selection driven by mating success differences',
              'null model where allele frequencies remain constant',
              'environmental factor influencing reproductive success'
            ],
            correctAnswer: 0,
            explanation: 'adaptation is best matched with: trait increasing fitness in a specific environment.'
          }
        ]
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Types of Selection
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → selection pressure
      - **Immediate processing** → adaptation
      - **System-level consequence** → sexual selection
      - **Measured readout** → allele frequency
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | selection pressure | environmental factor influencing reproductive success | Early shift in the primary variable |
      | adaptation | trait increasing fitness in a specific environment | Mid-pathway change in process rate |
      | sexual selection | selection driven by mating success differences | Downstream phenotype trend |
      | allele frequency | proportion of a specific allele in a population | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **environmental factor influencing reproductive success**

      2) Term for this definition: **trait increasing fitness in a specific environment**

      3) Term for this definition: **selection driven by mating success differences**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['selection pressure', 'adaptation', 'sexual selection'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'environmental factor influencing reproductive success\'.',
        hint2: 'Second blank points to adaptation; think about the role \'trait increasing fitness in a specific environment\'.',
        hint3: 'Third blank is sexual selection; connect it to \'selection driven by mating success differences\'.',
        explanation: 'Correct set: selection pressure, adaptation, sexual selection. These three terms define the core mechanism chain for Types of Selection.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'selection pressure',
            options: ['selection driven by mating success differences', 'proportion of a specific allele in a population', 'environmental factor influencing reproductive success', 'trait increasing fitness in a specific environment']
          },
          {
            label: 'adaptation',
            options: ['null model where allele frequencies remain constant', 'proportion of a specific allele in a population', 'trait increasing fitness in a specific environment', 'selection driven by mating success differences']
          },
          {
            label: 'sexual selection',
            options: ['random allele frequency change strongest in small populations', 'proportion of a specific allele in a population', 'null model where allele frequencies remain constant', 'selection driven by mating success differences']
          }
        ],
        correctAnswers: ['environmental factor influencing reproductive success', 'trait increasing fitness in a specific environment', 'selection driven by mating success differences'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'selection pressure, adaptation, and sexual selection should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because selection pressure environmental factor influencing reproductive success, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Selection acts on phenotypes, while evolution is tracked through allele frequencies.
      - Hardy-Weinberg is a baseline comparison, not a claim that real populations are static.
      - Adaptation and acclimation are different processes with different timescales.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In stabilizing and directional selection data, the observed pattern is: proportion of a specific allele in a population. What term should anchor the explanation?',
            options: [
              'adaptation',
              'selection pressure',
              'sexual selection',
              'allele frequency'
            ],
            correctAnswer: 3,
            explanation: 'Use allele frequency because it directly maps to the described biological pattern: proportion of a specific allele in a population.'
          },
          {
            question: 'In an AP-style free-response about types of selection, the observed pattern is: null model where allele frequencies remain constant. What term should anchor the explanation?',
            options: [
              'Hardy-Weinberg equilibrium',
              'sexual selection',
              'allele frequency',
              'genetic drift'
            ],
            correctAnswer: 0,
            explanation: 'Use Hardy-Weinberg equilibrium because it directly maps to the described biological pattern: null model where allele frequencies remain constant.'
          }
        ]
      }
    }
  ]
};
