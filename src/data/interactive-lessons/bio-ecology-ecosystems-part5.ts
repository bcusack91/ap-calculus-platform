export const bioEcologyPart5Data = {
  topicSlug: 'ecology-ecosystems',
  sections: [
    {
      id: 'bio-ecology-ecosystems-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Ecology and Ecosystems: Ecological Succession
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through post-fire succession in a temperate biome.
      
      ### Worked biological example
      A student team investigates post-fire succession in a temperate biome. Their first interpretation step is to identify how **decomposer** and **mutualism** work together in the same pathway.
      
      - They classify the primary signal using **decomposer**: organism that recycles nutrients from organic matter.
      - They trace the downstream response using **mutualism**: interaction where both species gain fitness benefits.
      - They then compare outcomes with **competition** and **succession** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **decomposer**
      - **mutualism**
      - **competition**
      - **succession**
      `
    },
    {
      id: 'bio-ecology-ecosystems-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Ecological Succession, what best describes decomposer?',
            options: [
              'directional change in community composition over time',
              'interaction where species reduce each other\'s resource access',
              'interaction where both species gain fitness benefits',
              'organism that recycles nutrients from organic matter'
            ],
            correctAnswer: 3,
            explanation: 'decomposer is best matched with: organism that recycles nutrients from organic matter.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of mutualism?',
            options: [
              'interaction where species reduce each other\'s resource access',
              'interaction where both species gain fitness benefits',
              'organism that recycles nutrients from organic matter',
              'species with disproportionately large community impact'
            ],
            correctAnswer: 1,
            explanation: 'mutualism is best matched with: interaction where both species gain fitness benefits.'
          }
        ]
      }
    },
    {
      id: 'bio-ecology-ecosystems-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Ecological Succession
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → decomposer
      - **Immediate processing** → mutualism
      - **System-level consequence** → competition
      - **Measured readout** → succession
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | decomposer | organism that recycles nutrients from organic matter | Early shift in the primary variable |
      | mutualism | interaction where both species gain fitness benefits | Mid-pathway change in process rate |
      | competition | interaction where species reduce each other's resource access | Downstream phenotype trend |
      | succession | directional change in community composition over time | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **organism that recycles nutrients from organic matter**
      2) Term for this definition: **interaction where both species gain fitness benefits**
      3) Term for this definition: **interaction where species reduce each other's resource access**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['decomposer', 'mutualism', 'competition'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'organism that recycles nutrients from organic matter\'.',
        hint2: 'Second blank points to mutualism; think about the role \'interaction where both species gain fitness benefits\'.',
        hint3: 'Third blank is competition; connect it to \'interaction where species reduce each other\'s resource access\'.',
        explanation: 'Correct set: decomposer, mutualism, competition. These three terms define the core mechanism chain for Ecological Succession.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'decomposer',
            options: ['interaction where both species gain fitness benefits', 'interaction where species reduce each other\'s resource access', 'directional change in community composition over time', 'organism that recycles nutrients from organic matter']
          },
          {
            label: 'mutualism',
            options: ['interaction where both species gain fitness benefits', 'interaction where species reduce each other\'s resource access', 'directional change in community composition over time', 'species with disproportionately large community impact']
          },
          {
            label: 'competition',
            options: ['directional change in community composition over time', 'living component that influences ecosystem dynamics', 'interaction where species reduce each other\'s resource access', 'species with disproportionately large community impact']
          }
        ],
        correctAnswers: ['organism that recycles nutrients from organic matter', 'interaction where both species gain fitness benefits', 'interaction where species reduce each other\'s resource access'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'decomposer, mutualism, and competition should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-ecology-ecosystems-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because decomposer organism that recycles nutrients from organic matter, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Energy flows one way through ecosystems; nutrients cycle repeatedly.
      - A larger population size does not always mean greater ecological importance.
      - Succession does not imply a fixed endpoint in every environment.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-ecology-ecosystems-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In post-fire succession in a temperate biome, the observed pattern is: directional change in community composition over time. What term should anchor the explanation?',
            options: [
              'mutualism',
              'competition',
              'decomposer',
              'succession'
            ],
            correctAnswer: 3,
            explanation: 'Use succession because it directly maps to the described biological pattern: directional change in community composition over time.'
          },
          {
            question: 'In an AP-style free-response about ecological succession, the observed pattern is: species with disproportionately large community impact. What term should anchor the explanation?',
            options: [
              'biotic factor',
              'keystone species',
              'succession',
              'competition'
            ],
            correctAnswer: 1,
            explanation: 'Use keystone species because it directly maps to the described biological pattern: species with disproportionately large community impact.'
          }
        ]
      }
    }
  ]
};
