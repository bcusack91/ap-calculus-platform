export const bioEnergyFlowPart6Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Energy Flow and Nutrient Cycling: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through multi-variable ecosystem datasets.
      
      ### Worked biological example
      A student team investigates multi-variable ecosystem datasets. Their first interpretation step is to identify how **carbon fixation** and **cellular respiration** work together in the same pathway.
      
      - They classify the primary signal using **carbon fixation**: incorporation of inorganic carbon into organic molecules.
      - They trace the downstream response using **cellular respiration**: oxidation of organic molecules releasing usable energy.
      - They then compare outcomes with **nitrification** and **denitrification** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **carbon fixation**
      - **cellular respiration**
      - **nitrification**
      - **denitrification**
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes carbon fixation?',
            options: [
              'microbial reduction of nitrate to gaseous nitrogen forms',
              'incorporation of inorganic carbon into organic molecules',
              'oxidation of organic molecules releasing usable energy',
              'microbial conversion of ammonium to nitrite and nitrate'
            ],
            correctAnswer: 1,
            explanation: 'carbon fixation is best matched with: incorporation of inorganic carbon into organic molecules.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of cellular respiration?',
            options: [
              'microbial conversion of ammonium to nitrite and nitrate',
              'organism that captures external energy to make organic molecules',
              'incorporation of inorganic carbon into organic molecules',
              'oxidation of organic molecules releasing usable energy'
            ],
            correctAnswer: 3,
            explanation: 'cellular respiration is best matched with: oxidation of organic molecules releasing usable energy.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → carbon fixation
      - **Immediate processing** → cellular respiration
      - **System-level consequence** → nitrification
      - **Measured readout** → denitrification
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | carbon fixation | incorporation of inorganic carbon into organic molecules | Early shift in the primary variable |
      | cellular respiration | oxidation of organic molecules releasing usable energy | Mid-pathway change in process rate |
      | nitrification | microbial conversion of ammonium to nitrite and nitrate | Downstream phenotype trend |
      | denitrification | microbial reduction of nitrate to gaseous nitrogen forms | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **incorporation of inorganic carbon into organic molecules**

      2) Term for this definition: **oxidation of organic molecules releasing usable energy**

      3) Term for this definition: **microbial conversion of ammonium to nitrite and nitrate**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['carbon fixation', 'cellular respiration', 'nitrification'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'incorporation of inorganic carbon into organic molecules\'.',
        hint2: 'Second blank points to cellular respiration; think about the role \'oxidation of organic molecules releasing usable energy\'.',
        hint3: 'Third blank is nitrification; connect it to \'microbial conversion of ammonium to nitrite and nitrate\'.',
        explanation: 'Correct set: carbon fixation, cellular respiration, nitrification. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'carbon fixation',
            options: ['incorporation of inorganic carbon into organic molecules', 'microbial conversion of ammonium to nitrite and nitrate', 'oxidation of organic molecules releasing usable energy', 'microbial reduction of nitrate to gaseous nitrogen forms']
          },
          {
            label: 'cellular respiration',
            options: ['organism that captures external energy to make organic molecules', 'microbial reduction of nitrate to gaseous nitrogen forms', 'microbial conversion of ammonium to nitrite and nitrate', 'oxidation of organic molecules releasing usable energy']
          },
          {
            label: 'nitrification',
            options: ['microbial conversion of ammonium to nitrite and nitrate', 'microbial reduction of nitrate to gaseous nitrogen forms', 'organism obtaining energy by feeding on other organisms', 'organism that captures external energy to make organic molecules']
          }
        ],
        correctAnswers: ['incorporation of inorganic carbon into organic molecules', 'oxidation of organic molecules releasing usable energy', 'microbial conversion of ammonium to nitrite and nitrate'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'carbon fixation, cellular respiration, and nitrification should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because carbon fixation incorporation of inorganic carbon into organic molecules, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Food chains are simplified slices of broader food webs.
      - Carbon and nitrogen cycling include biological, geological, and atmospheric processes.
      - Nutrient abundance can still coexist with low productivity when other factors limit growth.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In multi-variable ecosystem datasets, the observed pattern is: microbial reduction of nitrate to gaseous nitrogen forms. What term should anchor the explanation?',
            options: [
              'carbon fixation',
              'denitrification',
              'cellular respiration',
              'nitrification'
            ],
            correctAnswer: 1,
            explanation: 'Use denitrification because it directly maps to the described biological pattern: microbial reduction of nitrate to gaseous nitrogen forms.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: organism that captures external energy to make organic molecules. What term should anchor the explanation?',
            options: [
              'consumer',
              'denitrification',
              'nitrification',
              'producer'
            ],
            correctAnswer: 3,
            explanation: 'Use producer because it directly maps to the described biological pattern: organism that captures external energy to make organic molecules.'
          }
        ]
      }
    }
  ]
};
