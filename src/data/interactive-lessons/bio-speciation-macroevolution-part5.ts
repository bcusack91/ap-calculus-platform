export const bioSpeciationPart5Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Speciation and Macroevolution: Macroevolution Patterns
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through large-scale patterns in fossil and phylogenetic records.
      
      ### Worked biological example
      A student team investigates large-scale patterns in fossil and phylogenetic records. Their first interpretation step is to identify how **postzygotic barrier** and **polyploidy** work together in the same pathway.
      
      - They classify the primary signal using **postzygotic barrier**: isolation mechanism reducing hybrid viability or fertility.
      - They trace the downstream response using **polyploidy**: genome duplication that can create instant reproductive isolation.
      - They then compare outcomes with **adaptive radiation** and **macroevolution** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **postzygotic barrier**
      - **polyploidy**
      - **adaptive radiation**
      - **macroevolution**
      `
    },
    {
      id: 'bio-speciation-macroevolution-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Macroevolution Patterns, what best describes postzygotic barrier?',
            options: [
              'genome duplication that can create instant reproductive isolation',
              'large-scale evolutionary patterns above the species level',
              'rapid diversification from a common ancestor into niches',
              'isolation mechanism reducing hybrid viability or fertility'
            ],
            correctAnswer: 3,
            explanation: 'postzygotic barrier is best matched with: isolation mechanism reducing hybrid viability or fertility.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of polyploidy?',
            options: [
              'rapid diversification from a common ancestor into niches',
              'restriction of gene flow between populations',
              'isolation mechanism reducing hybrid viability or fertility',
              'genome duplication that can create instant reproductive isolation'
            ],
            correctAnswer: 3,
            explanation: 'polyploidy is best matched with: genome duplication that can create instant reproductive isolation.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Macroevolution Patterns
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → postzygotic barrier
      - **Immediate processing** → polyploidy
      - **System-level consequence** → adaptive radiation
      - **Measured readout** → macroevolution
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | postzygotic barrier | isolation mechanism reducing hybrid viability or fertility | Early shift in the primary variable |
      | polyploidy | genome duplication that can create instant reproductive isolation | Mid-pathway change in process rate |
      | adaptive radiation | rapid diversification from a common ancestor into niches | Downstream phenotype trend |
      | macroevolution | large-scale evolutionary patterns above the species level | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **isolation mechanism reducing hybrid viability or fertility**
      2) Term for this definition: **genome duplication that can create instant reproductive isolation**
      3) Term for this definition: **rapid diversification from a common ancestor into niches**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['postzygotic barrier', 'polyploidy', 'adaptive radiation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'isolation mechanism reducing hybrid viability or fertility\'.',
        hint2: 'Second blank points to polyploidy; think about the role \'genome duplication that can create instant reproductive isolation\'.',
        hint3: 'Third blank is adaptive radiation; connect it to \'rapid diversification from a common ancestor into niches\'.',
        explanation: 'Correct set: postzygotic barrier, polyploidy, adaptive radiation. These three terms define the core mechanism chain for Macroevolution Patterns.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'postzygotic barrier',
            options: ['rapid diversification from a common ancestor into niches', 'large-scale evolutionary patterns above the species level', 'isolation mechanism reducing hybrid viability or fertility', 'genome duplication that can create instant reproductive isolation']
          },
          {
            label: 'polyploidy',
            options: ['large-scale evolutionary patterns above the species level', 'genome duplication that can create instant reproductive isolation', 'rapid diversification from a common ancestor into niches', 'restriction of gene flow between populations']
          },
          {
            label: 'adaptive radiation',
            options: ['large-scale evolutionary patterns above the species level', 'restriction of gene flow between populations', 'rapid diversification from a common ancestor into niches', 'species defined by reproductive compatibility']
          }
        ],
        correctAnswers: ['isolation mechanism reducing hybrid viability or fertility', 'genome duplication that can create instant reproductive isolation', 'rapid diversification from a common ancestor into niches'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'postzygotic barrier, polyploidy, and adaptive radiation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because postzygotic barrier isolation mechanism reducing hybrid viability or fertility, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Speciation can occur with or without physical barriers depending on mechanism.
      - Macroevolutionary patterns emerge from accumulated microevolutionary processes plus lineage sorting.
      - Hybridization does not always erase species boundaries; outcomes depend on fitness and gene flow.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In large-scale patterns in fossil and phylogenetic records, the observed pattern is: large-scale evolutionary patterns above the species level. What term should anchor the explanation?',
            options: [
              'postzygotic barrier',
              'macroevolution',
              'adaptive radiation',
              'polyploidy'
            ],
            correctAnswer: 1,
            explanation: 'Use macroevolution because it directly maps to the described biological pattern: large-scale evolutionary patterns above the species level.'
          },
          {
            question: 'In an AP-style free-response about macroevolution patterns, the observed pattern is: restriction of gene flow between populations. What term should anchor the explanation?',
            options: [
              'reproductive isolation',
              'biological species concept',
              'adaptive radiation',
              'macroevolution'
            ],
            correctAnswer: 0,
            explanation: 'Use reproductive isolation because it directly maps to the described biological pattern: restriction of gene flow between populations.'
          }
        ]
      }
    }
  ]
};
