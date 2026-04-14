export const bioNatSelectionPart1Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'bio-natural-selection-adaptation-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Natural Selection and Adaptation: Darwin's Theory
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through population shifts after environmental change.
      
      ### Worked biological example
      A student team investigates population shifts after environmental change. Their first interpretation step is to identify how **natural selection** and **selection pressure** work together in the same pathway.
      
      - They classify the primary signal using **natural selection**: differential survival and reproduction tied to heritable variation.
      - They trace the downstream response using **selection pressure**: environmental factor influencing reproductive success.
      - They then compare outcomes with **adaptation** and **sexual selection** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **natural selection**
      - **selection pressure**
      - **adaptation**
      - **sexual selection**
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Darwin\'s Theory, what best describes natural selection?',
            options: [
              'selection driven by mating success differences',
              'environmental factor influencing reproductive success',
              'trait increasing fitness in a specific environment',
              'differential survival and reproduction tied to heritable variation'
            ],
            correctAnswer: 3,
            explanation: 'natural selection is best matched with: differential survival and reproduction tied to heritable variation.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of selection pressure?',
            options: [
              'differential survival and reproduction tied to heritable variation',
              'trait increasing fitness in a specific environment',
              'proportion of a specific allele in a population',
              'environmental factor influencing reproductive success'
            ],
            correctAnswer: 3,
            explanation: 'selection pressure is best matched with: environmental factor influencing reproductive success.'
          }
        ]
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Darwin's Theory
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → natural selection
      - **Immediate processing** → selection pressure
      - **System-level consequence** → adaptation
      - **Measured readout** → sexual selection
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | natural selection | differential survival and reproduction tied to heritable variation | Early shift in the primary variable |
      | selection pressure | environmental factor influencing reproductive success | Mid-pathway change in process rate |
      | adaptation | trait increasing fitness in a specific environment | Downstream phenotype trend |
      | sexual selection | selection driven by mating success differences | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **differential survival and reproduction tied to heritable variation**

      2) Term for this definition: **environmental factor influencing reproductive success**

      3) Term for this definition: **trait increasing fitness in a specific environment**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['natural selection', 'selection pressure', 'adaptation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'differential survival and reproduction tied to heritable variation\'.',
        hint2: 'Second blank points to selection pressure; think about the role \'environmental factor influencing reproductive success\'.',
        hint3: 'Third blank is adaptation; connect it to \'trait increasing fitness in a specific environment\'.',
        explanation: 'Correct set: natural selection, selection pressure, adaptation. These three terms define the core mechanism chain for Darwin\'s Theory.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'natural selection',
            options: ['environmental factor influencing reproductive success', 'trait increasing fitness in a specific environment', 'differential survival and reproduction tied to heritable variation', 'selection driven by mating success differences']
          },
          {
            label: 'selection pressure',
            options: ['trait increasing fitness in a specific environment', 'proportion of a specific allele in a population', 'environmental factor influencing reproductive success', 'selection driven by mating success differences']
          },
          {
            label: 'adaptation',
            options: ['proportion of a specific allele in a population', 'null model where allele frequencies remain constant', 'selection driven by mating success differences', 'trait increasing fitness in a specific environment']
          }
        ],
        correctAnswers: ['differential survival and reproduction tied to heritable variation', 'environmental factor influencing reproductive success', 'trait increasing fitness in a specific environment'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'natural selection, selection pressure, and adaptation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because natural selection differential survival and reproduction tied to heritable variation, we expect ...".
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
      id: 'bio-natural-selection-adaptation-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In population shifts after environmental change, the observed pattern is: selection driven by mating success differences. What term should anchor the explanation?',
            options: [
              'sexual selection',
              'natural selection',
              'adaptation',
              'selection pressure'
            ],
            correctAnswer: 0,
            explanation: 'Use sexual selection because it directly maps to the described biological pattern: selection driven by mating success differences.'
          },
          {
            question: 'In an AP-style free-response about darwin\'s theory, the observed pattern is: proportion of a specific allele in a population. What term should anchor the explanation?',
            options: [
              'allele frequency',
              'adaptation',
              'sexual selection',
              'Hardy-Weinberg equilibrium'
            ],
            correctAnswer: 0,
            explanation: 'Use allele frequency because it directly maps to the described biological pattern: proportion of a specific allele in a population.'
          }
        ]
      }
    }
  ]
};
