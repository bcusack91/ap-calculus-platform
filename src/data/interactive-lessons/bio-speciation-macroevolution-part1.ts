export const bioSpeciationPart1Data = {
  topicSlug: 'speciation-macroevolution',
  sections: [
    {
      id: 'bio-speciation-macroevolution-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Speciation and Macroevolution: Species Concepts
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through species delimitation in closely related populations.
      
      ### Worked biological example
      A student team investigates species delimitation in closely related populations. Their first interpretation step is to identify how **biological species concept** and **allopatric speciation** work together in the same pathway.
      
      - They classify the primary signal using **biological species concept**: species defined by reproductive compatibility.
      - They trace the downstream response using **allopatric speciation**: speciation following geographic isolation.
      - They then compare outcomes with **sympatric speciation** and **prezygotic barrier** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **biological species concept**
      - **allopatric speciation**
      - **sympatric speciation**
      - **prezygotic barrier**
      `
    },
    {
      id: 'bio-speciation-macroevolution-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Species Concepts, what best describes biological species concept?',
            options: [
              'species defined by reproductive compatibility',
              'speciation following geographic isolation',
              'speciation without geographic separation',
              'reproductive isolation mechanism before fertilization'
            ],
            correctAnswer: 0,
            explanation: 'biological species concept is best matched with: species defined by reproductive compatibility.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of allopatric speciation?',
            options: [
              'speciation following geographic isolation',
              'isolation mechanism reducing hybrid viability or fertility',
              'species defined by reproductive compatibility',
              'speciation without geographic separation'
            ],
            correctAnswer: 0,
            explanation: 'allopatric speciation is best matched with: speciation following geographic isolation.'
          }
        ]
      }
    },
    {
      id: 'bio-speciation-macroevolution-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Species Concepts
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → biological species concept
      - **Immediate processing** → allopatric speciation
      - **System-level consequence** → sympatric speciation
      - **Measured readout** → prezygotic barrier
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | biological species concept | species defined by reproductive compatibility | Early shift in the primary variable |
      | allopatric speciation | speciation following geographic isolation | Mid-pathway change in process rate |
      | sympatric speciation | speciation without geographic separation | Downstream phenotype trend |
      | prezygotic barrier | reproductive isolation mechanism before fertilization | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-speciation-macroevolution-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **species defined by reproductive compatibility**
      2) Term for this definition: **speciation following geographic isolation**
      3) Term for this definition: **speciation without geographic separation**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['biological species concept', 'allopatric speciation', 'sympatric speciation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'species defined by reproductive compatibility\'.',
        hint2: 'Second blank points to allopatric speciation; think about the role \'speciation following geographic isolation\'.',
        hint3: 'Third blank is sympatric speciation; connect it to \'speciation without geographic separation\'.',
        explanation: 'Correct set: biological species concept, allopatric speciation, sympatric speciation. These three terms define the core mechanism chain for Species Concepts.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'biological species concept',
            options: ['species defined by reproductive compatibility', 'reproductive isolation mechanism before fertilization', 'speciation following geographic isolation', 'speciation without geographic separation']
          },
          {
            label: 'allopatric speciation',
            options: ['isolation mechanism reducing hybrid viability or fertility', 'speciation without geographic separation', 'speciation following geographic isolation', 'reproductive isolation mechanism before fertilization']
          },
          {
            label: 'sympatric speciation',
            options: ['reproductive isolation mechanism before fertilization', 'speciation without geographic separation', 'isolation mechanism reducing hybrid viability or fertility', 'genome duplication that can create instant reproductive isolation']
          }
        ],
        correctAnswers: ['species defined by reproductive compatibility', 'speciation following geographic isolation', 'speciation without geographic separation'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'biological species concept, allopatric speciation, and sympatric speciation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-speciation-macroevolution-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because biological species concept species defined by reproductive compatibility, we expect ...".
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
      id: 'bio-speciation-macroevolution-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In species delimitation in closely related populations, the observed pattern is: reproductive isolation mechanism before fertilization. What term should anchor the explanation?',
            options: [
              'sympatric speciation',
              'prezygotic barrier',
              'biological species concept',
              'allopatric speciation'
            ],
            correctAnswer: 1,
            explanation: 'Use prezygotic barrier because it directly maps to the described biological pattern: reproductive isolation mechanism before fertilization.'
          },
          {
            question: 'In an AP-style free-response about species concepts, the observed pattern is: isolation mechanism reducing hybrid viability or fertility. What term should anchor the explanation?',
            options: [
              'postzygotic barrier',
              'polyploidy',
              'sympatric speciation',
              'prezygotic barrier'
            ],
            correctAnswer: 0,
            explanation: 'Use postzygotic barrier because it directly maps to the described biological pattern: isolation mechanism reducing hybrid viability or fertility.'
          }
        ]
      }
    }
  ]
};
