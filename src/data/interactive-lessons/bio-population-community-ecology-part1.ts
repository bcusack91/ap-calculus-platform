export const bioPopulationPart1Data = {
  topicSlug: 'population-community-ecology',
  sections: [
    {
      id: 'bio-population-community-ecology-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Population and Community Ecology: Population Growth
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through population trajectories under resource limits.
      
      ### Worked biological example
      A student team investigates population trajectories under resource limits. Their first interpretation step is to identify how **exponential growth** and **logistic growth** work together in the same pathway.
      
      - They classify the primary signal using **exponential growth**: population increase at a constant per-capita rate.
      - They trace the downstream response using **logistic growth**: growth slowing as population approaches carrying capacity.
      - They then compare outcomes with **carrying capacity** and **density-dependent factor** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **exponential growth**
      - **logistic growth**
      - **carrying capacity**
      - **density-dependent factor**
      `
    },
    {
      id: 'bio-population-community-ecology-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Population Growth, what best describes exponential growth?',
            options: [
              'growth slowing as population approaches carrying capacity',
              'population increase at a constant per-capita rate',
              'maximum sustainable population size in an environment',
              'factor whose effect changes with population density'
            ],
            correctAnswer: 1,
            explanation: 'exponential growth is best matched with: population increase at a constant per-capita rate.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of logistic growth?',
            options: [
              'maximum sustainable population size in an environment',
              'growth slowing as population approaches carrying capacity',
              'population increase at a constant per-capita rate',
              'life-history pattern favoring high reproduction in unstable settings'
            ],
            correctAnswer: 1,
            explanation: 'logistic growth is best matched with: growth slowing as population approaches carrying capacity.'
          }
        ]
      }
    },
    {
      id: 'bio-population-community-ecology-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Population Growth
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → exponential growth
      - **Immediate processing** → logistic growth
      - **System-level consequence** → carrying capacity
      - **Measured readout** → density-dependent factor
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | exponential growth | population increase at a constant per-capita rate | Early shift in the primary variable |
      | logistic growth | growth slowing as population approaches carrying capacity | Mid-pathway change in process rate |
      | carrying capacity | maximum sustainable population size in an environment | Downstream phenotype trend |
      | density-dependent factor | factor whose effect changes with population density | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-population-community-ecology-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **population increase at a constant per-capita rate**
      2) Term for this definition: **growth slowing as population approaches carrying capacity**
      3) Term for this definition: **maximum sustainable population size in an environment**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['exponential growth', 'logistic growth', 'carrying capacity'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'population increase at a constant per-capita rate\'.',
        hint2: 'Second blank points to logistic growth; think about the role \'growth slowing as population approaches carrying capacity\'.',
        hint3: 'Third blank is carrying capacity; connect it to \'maximum sustainable population size in an environment\'.',
        explanation: 'Correct set: exponential growth, logistic growth, carrying capacity. These three terms define the core mechanism chain for Population Growth.'
      }
    },
    {
      id: 'bio-population-community-ecology-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'exponential growth',
            options: ['growth slowing as population approaches carrying capacity', 'population increase at a constant per-capita rate', 'maximum sustainable population size in an environment', 'factor whose effect changes with population density']
          },
          {
            label: 'logistic growth',
            options: ['growth slowing as population approaches carrying capacity', 'maximum sustainable population size in an environment', 'life-history pattern favoring high reproduction in unstable settings', 'factor whose effect changes with population density']
          },
          {
            label: 'carrying capacity',
            options: ['factor whose effect changes with population density', 'life-history pattern favoring high reproduction in unstable settings', 'maximum sustainable population size in an environment', 'life-history pattern favoring competitive efficiency near carrying capacity']
          }
        ],
        correctAnswers: ['population increase at a constant per-capita rate', 'growth slowing as population approaches carrying capacity', 'maximum sustainable population size in an environment'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'exponential growth, logistic growth, and carrying capacity should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-population-community-ecology-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because exponential growth population increase at a constant per-capita rate, we expect ...".
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
      id: 'bio-population-community-ecology-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In population trajectories under resource limits, the observed pattern is: factor whose effect changes with population density. What term should anchor the explanation?',
            options: [
              'exponential growth',
              'carrying capacity',
              'logistic growth',
              'density-dependent factor'
            ],
            correctAnswer: 3,
            explanation: 'Use density-dependent factor because it directly maps to the described biological pattern: factor whose effect changes with population density.'
          },
          {
            question: 'In an AP-style free-response about population growth, the observed pattern is: life-history pattern favoring high reproduction in unstable settings. What term should anchor the explanation?',
            options: [
              'density-dependent factor',
              'carrying capacity',
              'K-selected strategy',
              'r-selected strategy'
            ],
            correctAnswer: 3,
            explanation: 'Use r-selected strategy because it directly maps to the described biological pattern: life-history pattern favoring high reproduction in unstable settings.'
          }
        ]
      }
    }
  ]
};
