export const bioSpeciationPart7Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Speciation and Macroevolution: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through full AP synthesis across micro to macro patterns.
      
      ### Worked biological example
      A student team investigates full AP synthesis across micro to macro patterns. Their first interpretation step is to identify how **adaptive radiation** and **macroevolution** work together in the same pathway.
      
      - They classify the primary signal using **adaptive radiation**: rapid diversification from a common ancestor into niches.
      - They trace the downstream response using **macroevolution**: large-scale evolutionary patterns above the species level.
      - They then compare outcomes with **reproductive isolation** and **biological species concept** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **adaptive radiation**
      - **macroevolution**
      - **reproductive isolation**
      - **biological species concept**
      `
    },
    {
      id: 'bio-speciation-macroevolution-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes adaptive radiation?',
            options: [
              'large-scale evolutionary patterns above the species level',
              'rapid diversification from a common ancestor into niches',
              'restriction of gene flow between populations',
              'species defined by reproductive compatibility'
            ],
            correctAnswer: 1,
            explanation: 'adaptive radiation is best matched with: rapid diversification from a common ancestor into niches.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of macroevolution?',
            options: [
              'large-scale evolutionary patterns above the species level',
              'speciation following geographic isolation',
              'rapid diversification from a common ancestor into niches',
              'restriction of gene flow between populations'
            ],
            correctAnswer: 0,
            explanation: 'macroevolution is best matched with: large-scale evolutionary patterns above the species level.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → adaptive radiation
      - **Immediate processing** → macroevolution
      - **System-level consequence** → reproductive isolation
      - **Measured readout** → biological species concept
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | adaptive radiation | rapid diversification from a common ancestor into niches | Early shift in the primary variable |
      | macroevolution | large-scale evolutionary patterns above the species level | Mid-pathway change in process rate |
      | reproductive isolation | restriction of gene flow between populations | Downstream phenotype trend |
      | biological species concept | species defined by reproductive compatibility | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **rapid diversification from a common ancestor into niches**
      2) Term for this definition: **large-scale evolutionary patterns above the species level**
      3) Term for this definition: **restriction of gene flow between populations**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['adaptive radiation', 'macroevolution', 'reproductive isolation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'rapid diversification from a common ancestor into niches\'.',
        hint2: 'Second blank points to macroevolution; think about the role \'large-scale evolutionary patterns above the species level\'.',
        hint3: 'Third blank is reproductive isolation; connect it to \'restriction of gene flow between populations\'.',
        explanation: 'Correct set: adaptive radiation, macroevolution, reproductive isolation. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'adaptive radiation',
            options: ['rapid diversification from a common ancestor into niches', 'species defined by reproductive compatibility', 'restriction of gene flow between populations', 'large-scale evolutionary patterns above the species level']
          },
          {
            label: 'macroevolution',
            options: ['speciation following geographic isolation', 'large-scale evolutionary patterns above the species level', 'restriction of gene flow between populations', 'species defined by reproductive compatibility']
          },
          {
            label: 'reproductive isolation',
            options: ['species defined by reproductive compatibility', 'restriction of gene flow between populations', 'speciation following geographic isolation', 'speciation without geographic separation']
          }
        ],
        correctAnswers: ['rapid diversification from a common ancestor into niches', 'large-scale evolutionary patterns above the species level', 'restriction of gene flow between populations'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'adaptive radiation, macroevolution, and reproductive isolation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because adaptive radiation rapid diversification from a common ancestor into niches, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Hybridization does not always erase species boundaries; outcomes depend on fitness and gene flow.
      - Species concepts are tools with context-dependent strengths and limits.
      - Speciation can occur with or without physical barriers depending on mechanism.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In full AP synthesis across micro to macro patterns, the observed pattern is: species defined by reproductive compatibility. What term should anchor the explanation?',
            options: [
              'adaptive radiation',
              'biological species concept',
              'macroevolution',
              'reproductive isolation'
            ],
            correctAnswer: 1,
            explanation: 'Use biological species concept because it directly maps to the described biological pattern: species defined by reproductive compatibility.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: speciation following geographic isolation. What term should anchor the explanation?',
            options: [
              'sympatric speciation',
              'biological species concept',
              'reproductive isolation',
              'allopatric speciation'
            ],
            correctAnswer: 3,
            explanation: 'Use allopatric speciation because it directly maps to the described biological pattern: speciation following geographic isolation.'
          }
        ]
      }
    }
  ]
};
