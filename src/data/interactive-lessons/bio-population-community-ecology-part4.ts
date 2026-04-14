export const bioPopulationPart4Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'bio-population-community-ecology-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Population and Community Ecology: Community Ecology
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through community interaction networks.
      
      ### Worked biological example
      A student team investigates community interaction networks. Their first interpretation step is to identify how **density-dependent factor** and **r-selected strategy** work together in the same pathway.
      
      - They classify the primary signal using **density-dependent factor**: factor whose effect changes with population density.
      - They trace the downstream response using **r-selected strategy**: life-history pattern favoring high reproduction in unstable settings.
      - They then compare outcomes with **K-selected strategy** and **species richness** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **density-dependent factor**
      - **r-selected strategy**
      - **K-selected strategy**
      - **species richness**
      `
    },
    {
      id: 'bio-population-community-ecology-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Community Ecology, what best describes density-dependent factor?',
            options: [
              'count of different species in a community',
              'life-history pattern favoring competitive efficiency near carrying capacity',
              'factor whose effect changes with population density',
              'life-history pattern favoring high reproduction in unstable settings'
            ],
            correctAnswer: 2,
            explanation: 'density-dependent factor is best matched with: factor whose effect changes with population density.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of r-selected strategy?',
            options: [
              'how evenly individuals are distributed among species',
              'life-history pattern favoring high reproduction in unstable settings',
              'factor whose effect changes with population density',
              'life-history pattern favoring competitive efficiency near carrying capacity'
            ],
            correctAnswer: 1,
            explanation: 'r-selected strategy is best matched with: life-history pattern favoring high reproduction in unstable settings.'
          }
        ]
      }
    },
    {
      id: 'bio-population-community-ecology-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Community Ecology
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → density-dependent factor
      - **Immediate processing** → r-selected strategy
      - **System-level consequence** → K-selected strategy
      - **Measured readout** → species richness
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | density-dependent factor | factor whose effect changes with population density | Early shift in the primary variable |
      | r-selected strategy | life-history pattern favoring high reproduction in unstable settings | Mid-pathway change in process rate |
      | K-selected strategy | life-history pattern favoring competitive efficiency near carrying capacity | Downstream phenotype trend |
      | species richness | count of different species in a community | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-population-community-ecology-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **factor whose effect changes with population density**

      2) Term for this definition: **life-history pattern favoring high reproduction in unstable settings**

      3) Term for this definition: **life-history pattern favoring competitive efficiency near carrying capacity**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['density-dependent factor', 'r-selected strategy', 'K-selected strategy'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'factor whose effect changes with population density\'.',
        hint2: 'Second blank points to r-selected strategy; think about the role \'life-history pattern favoring high reproduction in unstable settings\'.',
        hint3: 'Third blank is K-selected strategy; connect it to \'life-history pattern favoring competitive efficiency near carrying capacity\'.',
        explanation: 'Correct set: density-dependent factor, r-selected strategy, K-selected strategy. These three terms define the core mechanism chain for Community Ecology.'
      }
    },
    {
      id: 'bio-population-community-ecology-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'density-dependent factor',
            options: ['factor whose effect changes with population density', 'count of different species in a community', 'life-history pattern favoring competitive efficiency near carrying capacity', 'life-history pattern favoring high reproduction in unstable settings']
          },
          {
            label: 'r-selected strategy',
            options: ['life-history pattern favoring high reproduction in unstable settings', 'how evenly individuals are distributed among species', 'count of different species in a community', 'life-history pattern favoring competitive efficiency near carrying capacity']
          },
          {
            label: 'K-selected strategy',
            options: ['ability to resist or recover from disturbance', 'life-history pattern favoring competitive efficiency near carrying capacity', 'count of different species in a community', 'how evenly individuals are distributed among species']
          }
        ],
        correctAnswers: ['factor whose effect changes with population density', 'life-history pattern favoring high reproduction in unstable settings', 'life-history pattern favoring competitive efficiency near carrying capacity'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'density-dependent factor, r-selected strategy, and K-selected strategy should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-population-community-ecology-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because density-dependent factor factor whose effect changes with population density, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Population size alone does not capture demographic structure or long-term viability.
      - r and K strategies are endpoints of a continuum, not strict categories.
      - High biodiversity does not guarantee immunity from disturbance.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-population-community-ecology-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In community interaction networks, the observed pattern is: count of different species in a community. What term should anchor the explanation?',
            options: [
              'K-selected strategy',
              'species richness',
              'r-selected strategy',
              'density-dependent factor'
            ],
            correctAnswer: 1,
            explanation: 'Use species richness because it directly maps to the described biological pattern: count of different species in a community.'
          },
          {
            question: 'In an AP-style free-response about community ecology, the observed pattern is: how evenly individuals are distributed among species. What term should anchor the explanation?',
            options: [
              'species evenness',
              'K-selected strategy',
              'species richness',
              'community stability'
            ],
            correctAnswer: 0,
            explanation: 'Use species evenness because it directly maps to the described biological pattern: how evenly individuals are distributed among species.'
          }
        ]
      }
    }
  ]
};
