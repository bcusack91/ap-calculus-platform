export const bioPopulationPart6Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'bio-population-community-ecology-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Population and Community Ecology: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through population graph troubleshooting.
      
      ### Worked biological example
      A student team investigates population graph troubleshooting. Their first interpretation step is to identify how **K-selected strategy** and **species richness** work together in the same pathway.
      
      - They classify the primary signal using **K-selected strategy**: life-history pattern favoring competitive efficiency near carrying capacity.
      - They trace the downstream response using **species richness**: count of different species in a community.
      - They then compare outcomes with **species evenness** and **community stability** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **K-selected strategy**
      - **species richness**
      - **species evenness**
      - **community stability**
      `
    },
    {
      id: 'bio-population-community-ecology-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes K-selected strategy?',
            options: [
              'how evenly individuals are distributed among species',
              'count of different species in a community',
              'life-history pattern favoring competitive efficiency near carrying capacity',
              'ability to resist or recover from disturbance'
            ],
            correctAnswer: 2,
            explanation: 'K-selected strategy is best matched with: life-history pattern favoring competitive efficiency near carrying capacity.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of species richness?',
            options: [
              'population increase at a constant per-capita rate',
              'life-history pattern favoring competitive efficiency near carrying capacity',
              'how evenly individuals are distributed among species',
              'count of different species in a community'
            ],
            correctAnswer: 3,
            explanation: 'species richness is best matched with: count of different species in a community.'
          }
        ]
      }
    },
    {
      id: 'bio-population-community-ecology-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → K-selected strategy
      - **Immediate processing** → species richness
      - **System-level consequence** → species evenness
      - **Measured readout** → community stability
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | K-selected strategy | life-history pattern favoring competitive efficiency near carrying capacity | Early shift in the primary variable |
      | species richness | count of different species in a community | Mid-pathway change in process rate |
      | species evenness | how evenly individuals are distributed among species | Downstream phenotype trend |
      | community stability | ability to resist or recover from disturbance | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-population-community-ecology-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **life-history pattern favoring competitive efficiency near carrying capacity**

      2) Term for this definition: **count of different species in a community**

      3) Term for this definition: **how evenly individuals are distributed among species**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['K-selected strategy', 'species richness', 'species evenness'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'life-history pattern favoring competitive efficiency near carrying capacity\'.',
        hint2: 'Second blank points to species richness; think about the role \'count of different species in a community\'.',
        hint3: 'Third blank is species evenness; connect it to \'how evenly individuals are distributed among species\'.',
        explanation: 'Correct set: K-selected strategy, species richness, species evenness. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-population-community-ecology-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'K-selected strategy',
            options: ['life-history pattern favoring competitive efficiency near carrying capacity', 'ability to resist or recover from disturbance', 'how evenly individuals are distributed among species', 'count of different species in a community']
          },
          {
            label: 'species richness',
            options: ['count of different species in a community', 'how evenly individuals are distributed among species', 'ability to resist or recover from disturbance', 'population increase at a constant per-capita rate']
          },
          {
            label: 'species evenness',
            options: ['population increase at a constant per-capita rate', 'ability to resist or recover from disturbance', 'growth slowing as population approaches carrying capacity', 'how evenly individuals are distributed among species']
          }
        ],
        correctAnswers: ['life-history pattern favoring competitive efficiency near carrying capacity', 'count of different species in a community', 'how evenly individuals are distributed among species'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'K-selected strategy, species richness, and species evenness should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-population-community-ecology-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because K-selected strategy life-history pattern favoring competitive efficiency near carrying capacity, we expect ...".
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
      id: 'bio-population-community-ecology-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In population graph troubleshooting, the observed pattern is: ability to resist or recover from disturbance. What term should anchor the explanation?',
            options: [
              'species evenness',
              'species richness',
              'community stability',
              'K-selected strategy'
            ],
            correctAnswer: 2,
            explanation: 'Use community stability because it directly maps to the described biological pattern: ability to resist or recover from disturbance.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: population increase at a constant per-capita rate. What term should anchor the explanation?',
            options: [
              'exponential growth',
              'logistic growth',
              'species evenness',
              'community stability'
            ],
            correctAnswer: 0,
            explanation: 'Use exponential growth because it directly maps to the described biological pattern: population increase at a constant per-capita rate.'
          }
        ]
      }
    }
  ]
};
