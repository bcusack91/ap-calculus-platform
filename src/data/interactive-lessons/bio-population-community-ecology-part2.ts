export const bioPopulationPart2Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'bio-population-community-ecology-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Population and Community Ecology: Carrying Capacity
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through logistic growth and carrying capacity shifts.
      
      ### Worked biological example
      A student team investigates logistic growth and carrying capacity shifts. Their first interpretation step is to identify how **logistic growth** and **carrying capacity** work together in the same pathway.
      
      - They classify the primary signal using **logistic growth**: growth slowing as population approaches carrying capacity.
      - They trace the downstream response using **carrying capacity**: maximum sustainable population size in an environment.
      - They then compare outcomes with **density-dependent factor** and **r-selected strategy** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **logistic growth**
      - **carrying capacity**
      - **density-dependent factor**
      - **r-selected strategy**
      `
    },
    {
      id: 'bio-population-community-ecology-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Carrying Capacity, what best describes logistic growth?',
            options: [
              'maximum sustainable population size in an environment',
              'growth slowing as population approaches carrying capacity',
              'life-history pattern favoring high reproduction in unstable settings',
              'factor whose effect changes with population density'
            ],
            correctAnswer: 1,
            explanation: 'logistic growth is best matched with: growth slowing as population approaches carrying capacity.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of carrying capacity?',
            options: [
              'factor whose effect changes with population density',
              'maximum sustainable population size in an environment',
              'life-history pattern favoring competitive efficiency near carrying capacity',
              'growth slowing as population approaches carrying capacity'
            ],
            correctAnswer: 1,
            explanation: 'carrying capacity is best matched with: maximum sustainable population size in an environment.'
          }
        ]
      }
    },
    {
      id: 'bio-population-community-ecology-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Carrying Capacity
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → logistic growth
      - **Immediate processing** → carrying capacity
      - **System-level consequence** → density-dependent factor
      - **Measured readout** → r-selected strategy
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | logistic growth | growth slowing as population approaches carrying capacity | Early shift in the primary variable |
      | carrying capacity | maximum sustainable population size in an environment | Mid-pathway change in process rate |
      | density-dependent factor | factor whose effect changes with population density | Downstream phenotype trend |
      | r-selected strategy | life-history pattern favoring high reproduction in unstable settings | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-population-community-ecology-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **growth slowing as population approaches carrying capacity**
      2) Term for this definition: **maximum sustainable population size in an environment**
      3) Term for this definition: **factor whose effect changes with population density**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['logistic growth', 'carrying capacity', 'density-dependent factor'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'growth slowing as population approaches carrying capacity\'.',
        hint2: 'Second blank points to carrying capacity; think about the role \'maximum sustainable population size in an environment\'.',
        hint3: 'Third blank is density-dependent factor; connect it to \'factor whose effect changes with population density\'.',
        explanation: 'Correct set: logistic growth, carrying capacity, density-dependent factor. These three terms define the core mechanism chain for Carrying Capacity.'
      }
    },
    {
      id: 'bio-population-community-ecology-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'logistic growth',
            options: ['factor whose effect changes with population density', 'life-history pattern favoring high reproduction in unstable settings', 'growth slowing as population approaches carrying capacity', 'maximum sustainable population size in an environment']
          },
          {
            label: 'carrying capacity',
            options: ['life-history pattern favoring competitive efficiency near carrying capacity', 'life-history pattern favoring high reproduction in unstable settings', 'maximum sustainable population size in an environment', 'factor whose effect changes with population density']
          },
          {
            label: 'density-dependent factor',
            options: ['life-history pattern favoring high reproduction in unstable settings', 'life-history pattern favoring competitive efficiency near carrying capacity', 'factor whose effect changes with population density', 'count of different species in a community']
          }
        ],
        correctAnswers: ['growth slowing as population approaches carrying capacity', 'maximum sustainable population size in an environment', 'factor whose effect changes with population density'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'logistic growth, carrying capacity, and density-dependent factor should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-population-community-ecology-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because logistic growth growth slowing as population approaches carrying capacity, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - High biodiversity does not guarantee immunity from disturbance.
      - Carrying capacity can change with climate, resources, and species interactions.
      - Population size alone does not capture demographic structure or long-term viability.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-population-community-ecology-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In logistic growth and carrying capacity shifts, the observed pattern is: life-history pattern favoring high reproduction in unstable settings. What term should anchor the explanation?',
            options: [
              'logistic growth',
              'density-dependent factor',
              'r-selected strategy',
              'carrying capacity'
            ],
            correctAnswer: 2,
            explanation: 'Use r-selected strategy because it directly maps to the described biological pattern: life-history pattern favoring high reproduction in unstable settings.'
          },
          {
            question: 'In an AP-style free-response about carrying capacity, the observed pattern is: life-history pattern favoring competitive efficiency near carrying capacity. What term should anchor the explanation?',
            options: [
              'species richness',
              'K-selected strategy',
              'r-selected strategy',
              'density-dependent factor'
            ],
            correctAnswer: 1,
            explanation: 'Use K-selected strategy because it directly maps to the described biological pattern: life-history pattern favoring competitive efficiency near carrying capacity.'
          }
        ]
      }
    }
  ]
};
