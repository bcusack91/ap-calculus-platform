export const bioPopulationPart7Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'bio-population-community-ecology-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Population and Community Ecology: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through integrated AP population/community synthesis.
      
      ### Worked biological example
      A student team investigates integrated AP population/community synthesis. Their first interpretation step is to identify how **species richness** and **species evenness** work together in the same pathway.
      
      - They classify the primary signal using **species richness**: count of different species in a community.
      - They trace the downstream response using **species evenness**: how evenly individuals are distributed among species.
      - They then compare outcomes with **community stability** and **exponential growth** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **species richness**
      - **species evenness**
      - **community stability**
      - **exponential growth**
      `
    },
    {
      id: 'bio-population-community-ecology-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes species richness?',
            options: [
              'ability to resist or recover from disturbance',
              'population increase at a constant per-capita rate',
              'how evenly individuals are distributed among species',
              'count of different species in a community'
            ],
            correctAnswer: 3,
            explanation: 'species richness is best matched with: count of different species in a community.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of species evenness?',
            options: [
              'count of different species in a community',
              'growth slowing as population approaches carrying capacity',
              'how evenly individuals are distributed among species',
              'ability to resist or recover from disturbance'
            ],
            correctAnswer: 2,
            explanation: 'species evenness is best matched with: how evenly individuals are distributed among species.'
          }
        ]
      }
    },
    {
      id: 'bio-population-community-ecology-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → species richness
      - **Immediate processing** → species evenness
      - **System-level consequence** → community stability
      - **Measured readout** → exponential growth
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | species richness | count of different species in a community | Early shift in the primary variable |
      | species evenness | how evenly individuals are distributed among species | Mid-pathway change in process rate |
      | community stability | ability to resist or recover from disturbance | Downstream phenotype trend |
      | exponential growth | population increase at a constant per-capita rate | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-population-community-ecology-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **count of different species in a community**

      2) Term for this definition: **how evenly individuals are distributed among species**

      3) Term for this definition: **ability to resist or recover from disturbance**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['species richness', 'species evenness', 'community stability'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'count of different species in a community\'.',
        hint2: 'Second blank points to species evenness; think about the role \'how evenly individuals are distributed among species\'.',
        hint3: 'Third blank is community stability; connect it to \'ability to resist or recover from disturbance\'.',
        explanation: 'Correct set: species richness, species evenness, community stability. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-population-community-ecology-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'species richness',
            options: ['ability to resist or recover from disturbance', 'population increase at a constant per-capita rate', 'how evenly individuals are distributed among species', 'count of different species in a community']
          },
          {
            label: 'species evenness',
            options: ['ability to resist or recover from disturbance', 'population increase at a constant per-capita rate', 'how evenly individuals are distributed among species', 'growth slowing as population approaches carrying capacity']
          },
          {
            label: 'community stability',
            options: ['ability to resist or recover from disturbance', 'growth slowing as population approaches carrying capacity', 'population increase at a constant per-capita rate', 'maximum sustainable population size in an environment']
          }
        ],
        correctAnswers: ['count of different species in a community', 'how evenly individuals are distributed among species', 'ability to resist or recover from disturbance'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'species richness, species evenness, and community stability should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-population-community-ecology-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because species richness count of different species in a community, we expect ...".
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
      id: 'bio-population-community-ecology-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In integrated AP population/community synthesis, the observed pattern is: population increase at a constant per-capita rate. What term should anchor the explanation?',
            options: [
              'species richness',
              'community stability',
              'exponential growth',
              'species evenness'
            ],
            correctAnswer: 2,
            explanation: 'Use exponential growth because it directly maps to the described biological pattern: population increase at a constant per-capita rate.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: growth slowing as population approaches carrying capacity. What term should anchor the explanation?',
            options: [
              'community stability',
              'exponential growth',
              'logistic growth',
              'carrying capacity'
            ],
            correctAnswer: 2,
            explanation: 'Use logistic growth because it directly maps to the described biological pattern: growth slowing as population approaches carrying capacity.'
          }
        ]
      }
    }
  ]
};
