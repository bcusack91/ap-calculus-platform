export const bioEnergyFlowPart2Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Energy Flow and Nutrient Cycling: Food Webs
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through food-web stability after species removal.
      
      ### Worked biological example
      A student team investigates food-web stability after species removal. Their first interpretation step is to identify how **consumer** and **energy transfer efficiency** work together in the same pathway.
      
      - They classify the primary signal using **consumer**: organism obtaining energy by feeding on other organisms.
      - They trace the downstream response using **energy transfer efficiency**: fraction of energy passed to the next trophic level.
      - They then compare outcomes with **food web** and **biomass pyramid** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **consumer**
      - **energy transfer efficiency**
      - **food web**
      - **biomass pyramid**
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Food Webs, what best describes consumer?',
            options: [
              'representation of total mass at successive trophic levels',
              'network of interconnected feeding relationships',
              'organism obtaining energy by feeding on other organisms',
              'fraction of energy passed to the next trophic level'
            ],
            correctAnswer: 2,
            explanation: 'consumer is best matched with: organism obtaining energy by feeding on other organisms.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of energy transfer efficiency?',
            options: [
              'fraction of energy passed to the next trophic level',
              'incorporation of inorganic carbon into organic molecules',
              'organism obtaining energy by feeding on other organisms',
              'network of interconnected feeding relationships'
            ],
            correctAnswer: 0,
            explanation: 'energy transfer efficiency is best matched with: fraction of energy passed to the next trophic level.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Food Webs
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → consumer
      - **Immediate processing** → energy transfer efficiency
      - **System-level consequence** → food web
      - **Measured readout** → biomass pyramid
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | consumer | organism obtaining energy by feeding on other organisms | Early shift in the primary variable |
      | energy transfer efficiency | fraction of energy passed to the next trophic level | Mid-pathway change in process rate |
      | food web | network of interconnected feeding relationships | Downstream phenotype trend |
      | biomass pyramid | representation of total mass at successive trophic levels | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **organism obtaining energy by feeding on other organisms**

      2) Term for this definition: **fraction of energy passed to the next trophic level**

      3) Term for this definition: **network of interconnected feeding relationships**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['consumer', 'energy transfer efficiency', 'food web'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'organism obtaining energy by feeding on other organisms\'.',
        hint2: 'Second blank points to energy transfer efficiency; think about the role \'fraction of energy passed to the next trophic level\'.',
        hint3: 'Third blank is food web; connect it to \'network of interconnected feeding relationships\'.',
        explanation: 'Correct set: consumer, energy transfer efficiency, food web. These three terms define the core mechanism chain for Food Webs.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'consumer',
            options: ['fraction of energy passed to the next trophic level', 'network of interconnected feeding relationships', 'representation of total mass at successive trophic levels', 'organism obtaining energy by feeding on other organisms']
          },
          {
            label: 'energy transfer efficiency',
            options: ['fraction of energy passed to the next trophic level', 'incorporation of inorganic carbon into organic molecules', 'network of interconnected feeding relationships', 'representation of total mass at successive trophic levels']
          },
          {
            label: 'food web',
            options: ['representation of total mass at successive trophic levels', 'network of interconnected feeding relationships', 'oxidation of organic molecules releasing usable energy', 'incorporation of inorganic carbon into organic molecules']
          }
        ],
        correctAnswers: ['organism obtaining energy by feeding on other organisms', 'fraction of energy passed to the next trophic level', 'network of interconnected feeding relationships'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'consumer, energy transfer efficiency, and food web should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because consumer organism obtaining energy by feeding on other organisms, we expect ...".
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
      id: 'bio-energy-flow-nutrient-cycling-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In food-web stability after species removal, the observed pattern is: representation of total mass at successive trophic levels. What term should anchor the explanation?',
            options: [
              'biomass pyramid',
              'consumer',
              'food web',
              'energy transfer efficiency'
            ],
            correctAnswer: 0,
            explanation: 'Use biomass pyramid because it directly maps to the described biological pattern: representation of total mass at successive trophic levels.'
          },
          {
            question: 'In an AP-style free-response about food webs, the observed pattern is: incorporation of inorganic carbon into organic molecules. What term should anchor the explanation?',
            options: [
              'cellular respiration',
              'carbon fixation',
              'food web',
              'biomass pyramid'
            ],
            correctAnswer: 1,
            explanation: 'Use carbon fixation because it directly maps to the described biological pattern: incorporation of inorganic carbon into organic molecules.'
          }
        ]
      }
    }
  ]
};
