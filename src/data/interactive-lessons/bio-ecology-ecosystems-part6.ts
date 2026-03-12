export const bioEcologyPart6Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Ecology and Ecosystems: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through ecosystem graph interpretation with disturbance data.
      
      ### Worked biological example
      A student team investigates ecosystem graph interpretation with disturbance data. Their first interpretation step is to identify how **mutualism** and **competition** work together in the same pathway.
      
      - They classify the primary signal using **mutualism**: interaction where both species gain fitness benefits.
      - They trace the downstream response using **competition**: interaction where species reduce each other's resource access.
      - They then compare outcomes with **succession** and **keystone species** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **mutualism**
      - **competition**
      - **succession**
      - **keystone species**
      `
    },
    {
      id: 'bio-ecology-ecosystems-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes mutualism?',
            options: [
              'interaction where species reduce each other\'s resource access',
              'directional change in community composition over time',
              'species with disproportionately large community impact',
              'interaction where both species gain fitness benefits'
            ],
            correctAnswer: 3,
            explanation: 'mutualism is best matched with: interaction where both species gain fitness benefits.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of competition?',
            options: [
              'interaction where both species gain fitness benefits',
              'interaction where species reduce each other\'s resource access',
              'directional change in community composition over time',
              'living component that influences ecosystem dynamics'
            ],
            correctAnswer: 1,
            explanation: 'competition is best matched with: interaction where species reduce each other\'s resource access.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → mutualism
      - **Immediate processing** → competition
      - **System-level consequence** → succession
      - **Measured readout** → keystone species
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | mutualism | interaction where both species gain fitness benefits | Early shift in the primary variable |
      | competition | interaction where species reduce each other's resource access | Mid-pathway change in process rate |
      | succession | directional change in community composition over time | Downstream phenotype trend |
      | keystone species | species with disproportionately large community impact | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **interaction where both species gain fitness benefits**
      2) Term for this definition: **interaction where species reduce each other's resource access**
      3) Term for this definition: **directional change in community composition over time**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['mutualism', 'competition', 'succession'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'interaction where both species gain fitness benefits\'.',
        hint2: 'Second blank points to competition; think about the role \'interaction where species reduce each other\'s resource access\'.',
        hint3: 'Third blank is succession; connect it to \'directional change in community composition over time\'.',
        explanation: 'Correct set: mutualism, competition, succession. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'mutualism',
            options: ['interaction where both species gain fitness benefits', 'species with disproportionately large community impact', 'interaction where species reduce each other\'s resource access', 'directional change in community composition over time']
          },
          {
            label: 'competition',
            options: ['interaction where species reduce each other\'s resource access', 'directional change in community composition over time', 'living component that influences ecosystem dynamics', 'species with disproportionately large community impact']
          },
          {
            label: 'succession',
            options: ['directional change in community composition over time', 'living component that influences ecosystem dynamics', 'species with disproportionately large community impact', 'nonliving environmental variable such as light or pH']
          }
        ],
        correctAnswers: ['interaction where both species gain fitness benefits', 'interaction where species reduce each other\'s resource access', 'directional change in community composition over time'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'mutualism, competition, and succession should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because mutualism interaction where both species gain fitness benefits, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - A larger population size does not always mean greater ecological importance.
      - Succession does not imply a fixed endpoint in every environment.
      - Species interactions can shift with context, season, and disturbance.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In ecosystem graph interpretation with disturbance data, the observed pattern is: species with disproportionately large community impact. What term should anchor the explanation?',
            options: [
              'keystone species',
              'competition',
              'mutualism',
              'succession'
            ],
            correctAnswer: 0,
            explanation: 'Use keystone species because it directly maps to the described biological pattern: species with disproportionately large community impact.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: living component that influences ecosystem dynamics. What term should anchor the explanation?',
            options: [
              'biotic factor',
              'abiotic factor',
              'succession',
              'keystone species'
            ],
            correctAnswer: 0,
            explanation: 'Use biotic factor because it directly maps to the described biological pattern: living component that influences ecosystem dynamics.'
          }
        ]
      }
    }
  ]
};
