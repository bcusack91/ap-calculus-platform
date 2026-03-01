export const bioPopulationPart5Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'bio-population-community-ecology-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Population and Community Ecology: Biodiversity
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through biodiversity and resilience metrics.
      
      ### Worked biological example
      A student team investigates biodiversity and resilience metrics. Their first interpretation step is to identify how **r-selected strategy** and **K-selected strategy** work together in the same pathway.
      
      - They classify the primary signal using **r-selected strategy**: life-history pattern favoring high reproduction in unstable settings.
      - They trace the downstream response using **K-selected strategy**: life-history pattern favoring competitive efficiency near carrying capacity.
      - They then compare outcomes with **species richness** and **species evenness** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **r-selected strategy**
      - **K-selected strategy**
      - **species richness**
      - **species evenness**
      `
    },
    {
      id: 'bio-population-community-ecology-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Biodiversity, what best describes r-selected strategy?',
            options: [
              'how evenly individuals are distributed among species',
              'count of different species in a community',
              'life-history pattern favoring competitive efficiency near carrying capacity',
              'life-history pattern favoring high reproduction in unstable settings'
            ],
            correctAnswer: 3,
            explanation: 'r-selected strategy is best matched with: life-history pattern favoring high reproduction in unstable settings.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of K-selected strategy?',
            options: [
              'ability to resist or recover from disturbance',
              'count of different species in a community',
              'life-history pattern favoring competitive efficiency near carrying capacity',
              'life-history pattern favoring high reproduction in unstable settings'
            ],
            correctAnswer: 2,
            explanation: 'K-selected strategy is best matched with: life-history pattern favoring competitive efficiency near carrying capacity.'
          }
        ]
      }
    },
    {
      id: 'bio-population-community-ecology-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Biodiversity
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → r-selected strategy
      - **Immediate processing** → K-selected strategy
      - **System-level consequence** → species richness
      - **Measured readout** → species evenness
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | r-selected strategy | life-history pattern favoring high reproduction in unstable settings | Early shift in the primary variable |
      | K-selected strategy | life-history pattern favoring competitive efficiency near carrying capacity | Mid-pathway change in process rate |
      | species richness | count of different species in a community | Downstream phenotype trend |
      | species evenness | how evenly individuals are distributed among species | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-population-community-ecology-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **life-history pattern favoring high reproduction in unstable settings**
      2) Term for this definition: **life-history pattern favoring competitive efficiency near carrying capacity**
      3) Term for this definition: **count of different species in a community**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['r-selected strategy', 'K-selected strategy', 'species richness'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'life-history pattern favoring high reproduction in unstable settings\'.',
        hint2: 'Second blank points to K-selected strategy; think about the role \'life-history pattern favoring competitive efficiency near carrying capacity\'.',
        hint3: 'Third blank is species richness; connect it to \'count of different species in a community\'.',
        explanation: 'Correct set: r-selected strategy, K-selected strategy, species richness. These three terms define the core mechanism chain for Biodiversity.'
      }
    },
    {
      id: 'bio-population-community-ecology-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'r-selected strategy',
            options: ['life-history pattern favoring competitive efficiency near carrying capacity', 'count of different species in a community', 'life-history pattern favoring high reproduction in unstable settings', 'how evenly individuals are distributed among species']
          },
          {
            label: 'K-selected strategy',
            options: ['life-history pattern favoring competitive efficiency near carrying capacity', 'ability to resist or recover from disturbance', 'count of different species in a community', 'how evenly individuals are distributed among species']
          },
          {
            label: 'species richness',
            options: ['ability to resist or recover from disturbance', 'how evenly individuals are distributed among species', 'population increase at a constant per-capita rate', 'count of different species in a community']
          }
        ],
        correctAnswers: ['life-history pattern favoring high reproduction in unstable settings', 'life-history pattern favoring competitive efficiency near carrying capacity', 'count of different species in a community'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'r-selected strategy, K-selected strategy, and species richness should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-population-community-ecology-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because r-selected strategy life-history pattern favoring high reproduction in unstable settings, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - r and K strategies are endpoints of a continuum, not strict categories.
      - High biodiversity does not guarantee immunity from disturbance.
      - Carrying capacity can change with climate, resources, and species interactions.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-population-community-ecology-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In biodiversity and resilience metrics, the observed pattern is: how evenly individuals are distributed among species. What term should anchor the explanation?',
            options: [
              'r-selected strategy',
              'species evenness',
              'species richness',
              'K-selected strategy'
            ],
            correctAnswer: 1,
            explanation: 'Use species evenness because it directly maps to the described biological pattern: how evenly individuals are distributed among species.'
          },
          {
            question: 'In an AP-style free-response about biodiversity, the observed pattern is: ability to resist or recover from disturbance. What term should anchor the explanation?',
            options: [
              'community stability',
              'exponential growth',
              'species richness',
              'species evenness'
            ],
            correctAnswer: 0,
            explanation: 'Use community stability because it directly maps to the described biological pattern: ability to resist or recover from disturbance.'
          }
        ]
      }
    }
  ]
};
