export const bioPopulationPart3Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'bio-population-community-ecology-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Population and Community Ecology: r vs K Selection
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through life-history strategy contrasts.
      
      ### Worked biological example
      A student team investigates life-history strategy contrasts. Their first interpretation step is to identify how **carrying capacity** and **density-dependent factor** work together in the same pathway.
      
      - They classify the primary signal using **carrying capacity**: maximum sustainable population size in an environment.
      - They trace the downstream response using **density-dependent factor**: factor whose effect changes with population density.
      - They then compare outcomes with **r-selected strategy** and **K-selected strategy** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **carrying capacity**
      - **density-dependent factor**
      - **r-selected strategy**
      - **K-selected strategy**
      `
    },
    {
      id: 'bio-population-community-ecology-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For r vs K Selection, what best describes carrying capacity?',
            options: [
              'life-history pattern favoring competitive efficiency near carrying capacity',
              'maximum sustainable population size in an environment',
              'factor whose effect changes with population density',
              'life-history pattern favoring high reproduction in unstable settings'
            ],
            correctAnswer: 1,
            explanation: 'carrying capacity is best matched with: maximum sustainable population size in an environment.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of density-dependent factor?',
            options: [
              'life-history pattern favoring high reproduction in unstable settings',
              'factor whose effect changes with population density',
              'count of different species in a community',
              'maximum sustainable population size in an environment'
            ],
            correctAnswer: 1,
            explanation: 'density-dependent factor is best matched with: factor whose effect changes with population density.'
          }
        ]
      }
    },
    {
      id: 'bio-population-community-ecology-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: r vs K Selection
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → carrying capacity
      - **Immediate processing** → density-dependent factor
      - **System-level consequence** → r-selected strategy
      - **Measured readout** → K-selected strategy
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | carrying capacity | maximum sustainable population size in an environment | Early shift in the primary variable |
      | density-dependent factor | factor whose effect changes with population density | Mid-pathway change in process rate |
      | r-selected strategy | life-history pattern favoring high reproduction in unstable settings | Downstream phenotype trend |
      | K-selected strategy | life-history pattern favoring competitive efficiency near carrying capacity | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-population-community-ecology-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **maximum sustainable population size in an environment**

      2) Term for this definition: **factor whose effect changes with population density**

      3) Term for this definition: **life-history pattern favoring high reproduction in unstable settings**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['carrying capacity', 'density-dependent factor', 'r-selected strategy'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'maximum sustainable population size in an environment\'.',
        hint2: 'Second blank points to density-dependent factor; think about the role \'factor whose effect changes with population density\'.',
        hint3: 'Third blank is r-selected strategy; connect it to \'life-history pattern favoring high reproduction in unstable settings\'.',
        explanation: 'Correct set: carrying capacity, density-dependent factor, r-selected strategy. These three terms define the core mechanism chain for r vs K Selection.'
      }
    },
    {
      id: 'bio-population-community-ecology-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'carrying capacity',
            options: ['factor whose effect changes with population density', 'life-history pattern favoring high reproduction in unstable settings', 'life-history pattern favoring competitive efficiency near carrying capacity', 'maximum sustainable population size in an environment']
          },
          {
            label: 'density-dependent factor',
            options: ['count of different species in a community', 'life-history pattern favoring competitive efficiency near carrying capacity', 'life-history pattern favoring high reproduction in unstable settings', 'factor whose effect changes with population density']
          },
          {
            label: 'r-selected strategy',
            options: ['count of different species in a community', 'how evenly individuals are distributed among species', 'life-history pattern favoring competitive efficiency near carrying capacity', 'life-history pattern favoring high reproduction in unstable settings']
          }
        ],
        correctAnswers: ['maximum sustainable population size in an environment', 'factor whose effect changes with population density', 'life-history pattern favoring high reproduction in unstable settings'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'carrying capacity, density-dependent factor, and r-selected strategy should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-population-community-ecology-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because carrying capacity maximum sustainable population size in an environment, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Carrying capacity can change with climate, resources, and species interactions.
      - Population size alone does not capture demographic structure or long-term viability.
      - r and K strategies are endpoints of a continuum, not strict categories.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-population-community-ecology-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In life-history strategy contrasts, the observed pattern is: life-history pattern favoring competitive efficiency near carrying capacity. What term should anchor the explanation?',
            options: [
              'density-dependent factor',
              'r-selected strategy',
              'carrying capacity',
              'K-selected strategy'
            ],
            correctAnswer: 3,
            explanation: 'Use K-selected strategy because it directly maps to the described biological pattern: life-history pattern favoring competitive efficiency near carrying capacity.'
          },
          {
            question: 'In an AP-style free-response about r vs k selection, the observed pattern is: count of different species in a community. What term should anchor the explanation?',
            options: [
              'K-selected strategy',
              'species evenness',
              'r-selected strategy',
              'species richness'
            ],
            correctAnswer: 3,
            explanation: 'Use species richness because it directly maps to the described biological pattern: count of different species in a community.'
          }
        ]
      }
    }
  ]
};
