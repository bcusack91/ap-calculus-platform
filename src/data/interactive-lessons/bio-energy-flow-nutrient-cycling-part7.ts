export const bioEnergyFlowPart7Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Energy Flow and Nutrient Cycling: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through exam synthesis integrating cycles and flow.
      
      ### Worked biological example
      A student team investigates exam synthesis integrating cycles and flow. Their first interpretation step is to identify how **cellular respiration** and **nitrification** work together in the same pathway.
      
      - They classify the primary signal using **cellular respiration**: oxidation of organic molecules releasing usable energy.
      - They trace the downstream response using **nitrification**: microbial conversion of ammonium to nitrite and nitrate.
      - They then compare outcomes with **denitrification** and **producer** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **cellular respiration**
      - **nitrification**
      - **denitrification**
      - **producer**
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes cellular respiration?',
            options: [
              'microbial conversion of ammonium to nitrite and nitrate',
              'oxidation of organic molecules releasing usable energy',
              'microbial reduction of nitrate to gaseous nitrogen forms',
              'organism that captures external energy to make organic molecules'
            ],
            correctAnswer: 1,
            explanation: 'cellular respiration is best matched with: oxidation of organic molecules releasing usable energy.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of nitrification?',
            options: [
              'oxidation of organic molecules releasing usable energy',
              'microbial conversion of ammonium to nitrite and nitrate',
              'organism obtaining energy by feeding on other organisms',
              'microbial reduction of nitrate to gaseous nitrogen forms'
            ],
            correctAnswer: 1,
            explanation: 'nitrification is best matched with: microbial conversion of ammonium to nitrite and nitrate.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → cellular respiration
      - **Immediate processing** → nitrification
      - **System-level consequence** → denitrification
      - **Measured readout** → producer
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | cellular respiration | oxidation of organic molecules releasing usable energy | Early shift in the primary variable |
      | nitrification | microbial conversion of ammonium to nitrite and nitrate | Mid-pathway change in process rate |
      | denitrification | microbial reduction of nitrate to gaseous nitrogen forms | Downstream phenotype trend |
      | producer | organism that captures external energy to make organic molecules | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **oxidation of organic molecules releasing usable energy**
      2) Term for this definition: **microbial conversion of ammonium to nitrite and nitrate**
      3) Term for this definition: **microbial reduction of nitrate to gaseous nitrogen forms**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['cellular respiration', 'nitrification', 'denitrification'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'oxidation of organic molecules releasing usable energy\'.',
        hint2: 'Second blank points to nitrification; think about the role \'microbial conversion of ammonium to nitrite and nitrate\'.',
        hint3: 'Third blank is denitrification; connect it to \'microbial reduction of nitrate to gaseous nitrogen forms\'.',
        explanation: 'Correct set: cellular respiration, nitrification, denitrification. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'cellular respiration',
            options: ['organism that captures external energy to make organic molecules', 'microbial conversion of ammonium to nitrite and nitrate', 'microbial reduction of nitrate to gaseous nitrogen forms', 'oxidation of organic molecules releasing usable energy']
          },
          {
            label: 'nitrification',
            options: ['microbial conversion of ammonium to nitrite and nitrate', 'microbial reduction of nitrate to gaseous nitrogen forms', 'organism obtaining energy by feeding on other organisms', 'organism that captures external energy to make organic molecules']
          },
          {
            label: 'denitrification',
            options: ['fraction of energy passed to the next trophic level', 'organism that captures external energy to make organic molecules', 'microbial reduction of nitrate to gaseous nitrogen forms', 'organism obtaining energy by feeding on other organisms']
          }
        ],
        correctAnswers: ['oxidation of organic molecules releasing usable energy', 'microbial conversion of ammonium to nitrite and nitrate', 'microbial reduction of nitrate to gaseous nitrogen forms'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'cellular respiration, nitrification, and denitrification should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because cellular respiration oxidation of organic molecules releasing usable energy, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Carbon and nitrogen cycling include biological, geological, and atmospheric processes.
      - Nutrient abundance can still coexist with low productivity when other factors limit growth.
      - Ten percent transfer is a rough heuristic, not a universal constant.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In exam synthesis integrating cycles and flow, the observed pattern is: organism that captures external energy to make organic molecules. What term should anchor the explanation?',
            options: [
              'cellular respiration',
              'denitrification',
              'producer',
              'nitrification'
            ],
            correctAnswer: 2,
            explanation: 'Use producer because it directly maps to the described biological pattern: organism that captures external energy to make organic molecules.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: organism obtaining energy by feeding on other organisms. What term should anchor the explanation?',
            options: [
              'denitrification',
              'consumer',
              'energy transfer efficiency',
              'producer'
            ],
            correctAnswer: 1,
            explanation: 'Use consumer because it directly maps to the described biological pattern: organism obtaining energy by feeding on other organisms.'
          }
        ]
      }
    }
  ]
};
