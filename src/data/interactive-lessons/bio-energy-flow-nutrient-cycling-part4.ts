export const bioEnergyFlowPart4Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Energy Flow and Nutrient Cycling: Carbon Cycle
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through carbon flux under land-use change.
      
      ### Worked biological example
      A student team investigates carbon flux under land-use change. Their first interpretation step is to identify how **food web** and **biomass pyramid** work together in the same pathway.
      
      - They classify the primary signal using **food web**: network of interconnected feeding relationships.
      - They trace the downstream response using **biomass pyramid**: representation of total mass at successive trophic levels.
      - They then compare outcomes with **carbon fixation** and **cellular respiration** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **food web**
      - **biomass pyramid**
      - **carbon fixation**
      - **cellular respiration**
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Carbon Cycle, what best describes food web?',
            options: [
              'representation of total mass at successive trophic levels',
              'incorporation of inorganic carbon into organic molecules',
              'network of interconnected feeding relationships',
              'oxidation of organic molecules releasing usable energy'
            ],
            correctAnswer: 2,
            explanation: 'food web is best matched with: network of interconnected feeding relationships.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of biomass pyramid?',
            options: [
              'network of interconnected feeding relationships',
              'microbial conversion of ammonium to nitrite and nitrate',
              'representation of total mass at successive trophic levels',
              'incorporation of inorganic carbon into organic molecules'
            ],
            correctAnswer: 2,
            explanation: 'biomass pyramid is best matched with: representation of total mass at successive trophic levels.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Carbon Cycle
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → food web
      - **Immediate processing** → biomass pyramid
      - **System-level consequence** → carbon fixation
      - **Measured readout** → cellular respiration
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | food web | network of interconnected feeding relationships | Early shift in the primary variable |
      | biomass pyramid | representation of total mass at successive trophic levels | Mid-pathway change in process rate |
      | carbon fixation | incorporation of inorganic carbon into organic molecules | Downstream phenotype trend |
      | cellular respiration | oxidation of organic molecules releasing usable energy | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **network of interconnected feeding relationships**
      2) Term for this definition: **representation of total mass at successive trophic levels**
      3) Term for this definition: **incorporation of inorganic carbon into organic molecules**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['food web', 'biomass pyramid', 'carbon fixation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'network of interconnected feeding relationships\'.',
        hint2: 'Second blank points to biomass pyramid; think about the role \'representation of total mass at successive trophic levels\'.',
        hint3: 'Third blank is carbon fixation; connect it to \'incorporation of inorganic carbon into organic molecules\'.',
        explanation: 'Correct set: food web, biomass pyramid, carbon fixation. These three terms define the core mechanism chain for Carbon Cycle.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'food web',
            options: ['representation of total mass at successive trophic levels', 'network of interconnected feeding relationships', 'incorporation of inorganic carbon into organic molecules', 'oxidation of organic molecules releasing usable energy']
          },
          {
            label: 'biomass pyramid',
            options: ['oxidation of organic molecules releasing usable energy', 'microbial conversion of ammonium to nitrite and nitrate', 'incorporation of inorganic carbon into organic molecules', 'representation of total mass at successive trophic levels']
          },
          {
            label: 'carbon fixation',
            options: ['microbial conversion of ammonium to nitrite and nitrate', 'oxidation of organic molecules releasing usable energy', 'microbial reduction of nitrate to gaseous nitrogen forms', 'incorporation of inorganic carbon into organic molecules']
          }
        ],
        correctAnswers: ['network of interconnected feeding relationships', 'representation of total mass at successive trophic levels', 'incorporation of inorganic carbon into organic molecules'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'food web, biomass pyramid, and carbon fixation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because food web network of interconnected feeding relationships, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Nutrient abundance can still coexist with low productivity when other factors limit growth.
      - Ten percent transfer is a rough heuristic, not a universal constant.
      - Food chains are simplified slices of broader food webs.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In carbon flux under land-use change, the observed pattern is: oxidation of organic molecules releasing usable energy. What term should anchor the explanation?',
            options: [
              'biomass pyramid',
              'carbon fixation',
              'food web',
              'cellular respiration'
            ],
            correctAnswer: 3,
            explanation: 'Use cellular respiration because it directly maps to the described biological pattern: oxidation of organic molecules releasing usable energy.'
          },
          {
            question: 'In an AP-style free-response about carbon cycle, the observed pattern is: microbial conversion of ammonium to nitrite and nitrate. What term should anchor the explanation?',
            options: [
              'nitrification',
              'cellular respiration',
              'carbon fixation',
              'denitrification'
            ],
            correctAnswer: 0,
            explanation: 'Use nitrification because it directly maps to the described biological pattern: microbial conversion of ammonium to nitrite and nitrate.'
          }
        ]
      }
    }
  ]
};
