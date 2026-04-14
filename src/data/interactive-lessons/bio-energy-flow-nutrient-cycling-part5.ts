export const bioEnergyFlowPart5Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Energy Flow and Nutrient Cycling: Nitrogen Cycle
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through nitrogen limitation in agricultural runoff.
      
      ### Worked biological example
      A student team investigates nitrogen limitation in agricultural runoff. Their first interpretation step is to identify how **biomass pyramid** and **carbon fixation** work together in the same pathway.
      
      - They classify the primary signal using **biomass pyramid**: representation of total mass at successive trophic levels.
      - They trace the downstream response using **carbon fixation**: incorporation of inorganic carbon into organic molecules.
      - They then compare outcomes with **cellular respiration** and **nitrification** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **biomass pyramid**
      - **carbon fixation**
      - **cellular respiration**
      - **nitrification**
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Nitrogen Cycle, what best describes biomass pyramid?',
            options: [
              'microbial conversion of ammonium to nitrite and nitrate',
              'incorporation of inorganic carbon into organic molecules',
              'representation of total mass at successive trophic levels',
              'oxidation of organic molecules releasing usable energy'
            ],
            correctAnswer: 2,
            explanation: 'biomass pyramid is best matched with: representation of total mass at successive trophic levels.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of carbon fixation?',
            options: [
              'representation of total mass at successive trophic levels',
              'microbial reduction of nitrate to gaseous nitrogen forms',
              'oxidation of organic molecules releasing usable energy',
              'incorporation of inorganic carbon into organic molecules'
            ],
            correctAnswer: 3,
            explanation: 'carbon fixation is best matched with: incorporation of inorganic carbon into organic molecules.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Nitrogen Cycle
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → biomass pyramid
      - **Immediate processing** → carbon fixation
      - **System-level consequence** → cellular respiration
      - **Measured readout** → nitrification
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | biomass pyramid | representation of total mass at successive trophic levels | Early shift in the primary variable |
      | carbon fixation | incorporation of inorganic carbon into organic molecules | Mid-pathway change in process rate |
      | cellular respiration | oxidation of organic molecules releasing usable energy | Downstream phenotype trend |
      | nitrification | microbial conversion of ammonium to nitrite and nitrate | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **representation of total mass at successive trophic levels**

      2) Term for this definition: **incorporation of inorganic carbon into organic molecules**

      3) Term for this definition: **oxidation of organic molecules releasing usable energy**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['biomass pyramid', 'carbon fixation', 'cellular respiration'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'representation of total mass at successive trophic levels\'.',
        hint2: 'Second blank points to carbon fixation; think about the role \'incorporation of inorganic carbon into organic molecules\'.',
        hint3: 'Third blank is cellular respiration; connect it to \'oxidation of organic molecules releasing usable energy\'.',
        explanation: 'Correct set: biomass pyramid, carbon fixation, cellular respiration. These three terms define the core mechanism chain for Nitrogen Cycle.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'biomass pyramid',
            options: ['oxidation of organic molecules releasing usable energy', 'representation of total mass at successive trophic levels', 'microbial conversion of ammonium to nitrite and nitrate', 'incorporation of inorganic carbon into organic molecules']
          },
          {
            label: 'carbon fixation',
            options: ['microbial conversion of ammonium to nitrite and nitrate', 'oxidation of organic molecules releasing usable energy', 'incorporation of inorganic carbon into organic molecules', 'microbial reduction of nitrate to gaseous nitrogen forms']
          },
          {
            label: 'cellular respiration',
            options: ['oxidation of organic molecules releasing usable energy', 'microbial conversion of ammonium to nitrite and nitrate', 'microbial reduction of nitrate to gaseous nitrogen forms', 'organism that captures external energy to make organic molecules']
          }
        ],
        correctAnswers: ['representation of total mass at successive trophic levels', 'incorporation of inorganic carbon into organic molecules', 'oxidation of organic molecules releasing usable energy'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'biomass pyramid, carbon fixation, and cellular respiration should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because biomass pyramid representation of total mass at successive trophic levels, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Ten percent transfer is a rough heuristic, not a universal constant.
      - Food chains are simplified slices of broader food webs.
      - Carbon and nitrogen cycling include biological, geological, and atmospheric processes.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In nitrogen limitation in agricultural runoff, the observed pattern is: microbial conversion of ammonium to nitrite and nitrate. What term should anchor the explanation?',
            options: [
              'biomass pyramid',
              'cellular respiration',
              'carbon fixation',
              'nitrification'
            ],
            correctAnswer: 3,
            explanation: 'Use nitrification because it directly maps to the described biological pattern: microbial conversion of ammonium to nitrite and nitrate.'
          },
          {
            question: 'In an AP-style free-response about nitrogen cycle, the observed pattern is: microbial reduction of nitrate to gaseous nitrogen forms. What term should anchor the explanation?',
            options: [
              'producer',
              'denitrification',
              'nitrification',
              'cellular respiration'
            ],
            correctAnswer: 1,
            explanation: 'Use denitrification because it directly maps to the described biological pattern: microbial reduction of nitrate to gaseous nitrogen forms.'
          }
        ]
      }
    }
  ]
};
