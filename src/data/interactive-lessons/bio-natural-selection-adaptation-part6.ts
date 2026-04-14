export const bioNatSelectionPart6Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'bio-natural-selection-adaptation-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Natural Selection and Adaptation: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through multi-factor evolutionary data interpretation.
      
      ### Worked biological example
      A student team investigates multi-factor evolutionary data interpretation. Their first interpretation step is to identify how **Hardy-Weinberg equilibrium** and **genetic drift** work together in the same pathway.
      
      - They classify the primary signal using **Hardy-Weinberg equilibrium**: null model where allele frequencies remain constant.
      - They trace the downstream response using **genetic drift**: random allele frequency change strongest in small populations.
      - They then compare outcomes with **gene flow** and **evolution** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **Hardy-Weinberg equilibrium**
      - **genetic drift**
      - **gene flow**
      - **evolution**
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes Hardy-Weinberg equilibrium?',
            options: [
              'allele movement among populations through migration',
              'random allele frequency change strongest in small populations',
              'change in population allele frequencies over generations',
              'null model where allele frequencies remain constant'
            ],
            correctAnswer: 3,
            explanation: 'Hardy-Weinberg equilibrium is best matched with: null model where allele frequencies remain constant.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of genetic drift?',
            options: [
              'differential survival and reproduction tied to heritable variation',
              'null model where allele frequencies remain constant',
              'random allele frequency change strongest in small populations',
              'allele movement among populations through migration'
            ],
            correctAnswer: 2,
            explanation: 'genetic drift is best matched with: random allele frequency change strongest in small populations.'
          }
        ]
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → Hardy-Weinberg equilibrium
      - **Immediate processing** → genetic drift
      - **System-level consequence** → gene flow
      - **Measured readout** → evolution
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | Hardy-Weinberg equilibrium | null model where allele frequencies remain constant | Early shift in the primary variable |
      | genetic drift | random allele frequency change strongest in small populations | Mid-pathway change in process rate |
      | gene flow | allele movement among populations through migration | Downstream phenotype trend |
      | evolution | change in population allele frequencies over generations | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-natural-selection-adaptation-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **null model where allele frequencies remain constant**

      2) Term for this definition: **random allele frequency change strongest in small populations**

      3) Term for this definition: **allele movement among populations through migration**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Hardy-Weinberg equilibrium', 'genetic drift', 'gene flow'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'null model where allele frequencies remain constant\'.',
        hint2: 'Second blank points to genetic drift; think about the role \'random allele frequency change strongest in small populations\'.',
        hint3: 'Third blank is gene flow; connect it to \'allele movement among populations through migration\'.',
        explanation: 'Correct set: Hardy-Weinberg equilibrium, genetic drift, gene flow. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hardy-Weinberg equilibrium',
            options: ['change in population allele frequencies over generations', 'null model where allele frequencies remain constant', 'allele movement among populations through migration', 'random allele frequency change strongest in small populations']
          },
          {
            label: 'genetic drift',
            options: ['random allele frequency change strongest in small populations', 'allele movement among populations through migration', 'differential survival and reproduction tied to heritable variation', 'change in population allele frequencies over generations']
          },
          {
            label: 'gene flow',
            options: ['environmental factor influencing reproductive success', 'change in population allele frequencies over generations', 'differential survival and reproduction tied to heritable variation', 'allele movement among populations through migration']
          }
        ],
        correctAnswers: ['null model where allele frequencies remain constant', 'random allele frequency change strongest in small populations', 'allele movement among populations through migration'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'Hardy-Weinberg equilibrium, genetic drift, and gene flow should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-natural-selection-adaptation-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because Hardy-Weinberg equilibrium null model where allele frequencies remain constant, we expect ...".
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
      id: 'bio-natural-selection-adaptation-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In multi-factor evolutionary data interpretation, the observed pattern is: change in population allele frequencies over generations. What term should anchor the explanation?',
            options: [
              'gene flow',
              'Hardy-Weinberg equilibrium',
              'genetic drift',
              'evolution'
            ],
            correctAnswer: 3,
            explanation: 'Use evolution because it directly maps to the described biological pattern: change in population allele frequencies over generations.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: differential survival and reproduction tied to heritable variation. What term should anchor the explanation?',
            options: [
              'gene flow',
              'evolution',
              'selection pressure',
              'natural selection'
            ],
            correctAnswer: 3,
            explanation: 'Use natural selection because it directly maps to the described biological pattern: differential survival and reproduction tied to heritable variation.'
          }
        ]
      }
    }
  ]
};
