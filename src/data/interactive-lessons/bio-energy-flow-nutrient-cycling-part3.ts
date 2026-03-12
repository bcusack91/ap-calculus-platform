export const bioEnergyFlowPart3Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Energy Flow and Nutrient Cycling: Ecological Pyramids
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through pyramid efficiency and biomass loss.
      
      ### Worked biological example
      A student team investigates pyramid efficiency and biomass loss. Their first interpretation step is to identify how **energy transfer efficiency** and **food web** work together in the same pathway.
      
      - They classify the primary signal using **energy transfer efficiency**: fraction of energy passed to the next trophic level.
      - They trace the downstream response using **food web**: network of interconnected feeding relationships.
      - They then compare outcomes with **biomass pyramid** and **carbon fixation** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **energy transfer efficiency**
      - **food web**
      - **biomass pyramid**
      - **carbon fixation**
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Ecological Pyramids, what best describes energy transfer efficiency?',
            options: [
              'network of interconnected feeding relationships',
              'fraction of energy passed to the next trophic level',
              'representation of total mass at successive trophic levels',
              'incorporation of inorganic carbon into organic molecules'
            ],
            correctAnswer: 1,
            explanation: 'energy transfer efficiency is best matched with: fraction of energy passed to the next trophic level.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of food web?',
            options: [
              'representation of total mass at successive trophic levels',
              'network of interconnected feeding relationships',
              'fraction of energy passed to the next trophic level',
              'oxidation of organic molecules releasing usable energy'
            ],
            correctAnswer: 1,
            explanation: 'food web is best matched with: network of interconnected feeding relationships.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Ecological Pyramids
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → energy transfer efficiency
      - **Immediate processing** → food web
      - **System-level consequence** → biomass pyramid
      - **Measured readout** → carbon fixation
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | energy transfer efficiency | fraction of energy passed to the next trophic level | Early shift in the primary variable |
      | food web | network of interconnected feeding relationships | Mid-pathway change in process rate |
      | biomass pyramid | representation of total mass at successive trophic levels | Downstream phenotype trend |
      | carbon fixation | incorporation of inorganic carbon into organic molecules | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **fraction of energy passed to the next trophic level**
      2) Term for this definition: **network of interconnected feeding relationships**
      3) Term for this definition: **representation of total mass at successive trophic levels**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['energy transfer efficiency', 'food web', 'biomass pyramid'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'fraction of energy passed to the next trophic level\'.',
        hint2: 'Second blank points to food web; think about the role \'network of interconnected feeding relationships\'.',
        hint3: 'Third blank is biomass pyramid; connect it to \'representation of total mass at successive trophic levels\'.',
        explanation: 'Correct set: energy transfer efficiency, food web, biomass pyramid. These three terms define the core mechanism chain for Ecological Pyramids.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'energy transfer efficiency',
            options: ['fraction of energy passed to the next trophic level', 'representation of total mass at successive trophic levels', 'incorporation of inorganic carbon into organic molecules', 'network of interconnected feeding relationships']
          },
          {
            label: 'food web',
            options: ['oxidation of organic molecules releasing usable energy', 'incorporation of inorganic carbon into organic molecules', 'representation of total mass at successive trophic levels', 'network of interconnected feeding relationships']
          },
          {
            label: 'biomass pyramid',
            options: ['incorporation of inorganic carbon into organic molecules', 'oxidation of organic molecules releasing usable energy', 'representation of total mass at successive trophic levels', 'microbial conversion of ammonium to nitrite and nitrate']
          }
        ],
        correctAnswers: ['fraction of energy passed to the next trophic level', 'network of interconnected feeding relationships', 'representation of total mass at successive trophic levels'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'energy transfer efficiency, food web, and biomass pyramid should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because energy transfer efficiency fraction of energy passed to the next trophic level, we expect ...".
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
      id: 'bio-energy-flow-nutrient-cycling-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In pyramid efficiency and biomass loss, the observed pattern is: incorporation of inorganic carbon into organic molecules. What term should anchor the explanation?',
            options: [
              'food web',
              'energy transfer efficiency',
              'biomass pyramid',
              'carbon fixation'
            ],
            correctAnswer: 3,
            explanation: 'Use carbon fixation because it directly maps to the described biological pattern: incorporation of inorganic carbon into organic molecules.'
          },
          {
            question: 'In an AP-style free-response about ecological pyramids, the observed pattern is: oxidation of organic molecules releasing usable energy. What term should anchor the explanation?',
            options: [
              'biomass pyramid',
              'nitrification',
              'carbon fixation',
              'cellular respiration'
            ],
            correctAnswer: 3,
            explanation: 'Use cellular respiration because it directly maps to the described biological pattern: oxidation of organic molecules releasing usable energy.'
          }
        ]
      }
    }
  ]
};
