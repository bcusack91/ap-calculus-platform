export const bioEnergyFlowPart1Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Energy Flow and Nutrient Cycling: Trophic Levels
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through lake ecosystem trophic transfer.
      
      ### Worked biological example
      A student team investigates lake ecosystem trophic transfer. Their first interpretation step is to identify how **producer** and **consumer** work together in the same pathway.
      
      - They classify the primary signal using **producer**: organism that captures external energy to make organic molecules.
      - They trace the downstream response using **consumer**: organism obtaining energy by feeding on other organisms.
      - They then compare outcomes with **energy transfer efficiency** and **food web** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **producer**
      - **consumer**
      - **energy transfer efficiency**
      - **food web**
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Trophic Levels, what best describes producer?',
            options: [
              'organism obtaining energy by feeding on other organisms',
              'organism that captures external energy to make organic molecules',
              'network of interconnected feeding relationships',
              'fraction of energy passed to the next trophic level'
            ],
            correctAnswer: 1,
            explanation: 'producer is best matched with: organism that captures external energy to make organic molecules.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of consumer?',
            options: [
              'organism that captures external energy to make organic molecules',
              'organism obtaining energy by feeding on other organisms',
              'fraction of energy passed to the next trophic level',
              'representation of total mass at successive trophic levels'
            ],
            correctAnswer: 1,
            explanation: 'consumer is best matched with: organism obtaining energy by feeding on other organisms.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Trophic Levels
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → producer
      - **Immediate processing** → consumer
      - **System-level consequence** → energy transfer efficiency
      - **Measured readout** → food web
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | producer | organism that captures external energy to make organic molecules | Early shift in the primary variable |
      | consumer | organism obtaining energy by feeding on other organisms | Mid-pathway change in process rate |
      | energy transfer efficiency | fraction of energy passed to the next trophic level | Downstream phenotype trend |
      | food web | network of interconnected feeding relationships | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **organism that captures external energy to make organic molecules**
      2) Term for this definition: **organism obtaining energy by feeding on other organisms**
      3) Term for this definition: **fraction of energy passed to the next trophic level**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['producer', 'consumer', 'energy transfer efficiency'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'organism that captures external energy to make organic molecules\'.',
        hint2: 'Second blank points to consumer; think about the role \'organism obtaining energy by feeding on other organisms\'.',
        hint3: 'Third blank is energy transfer efficiency; connect it to \'fraction of energy passed to the next trophic level\'.',
        explanation: 'Correct set: producer, consumer, energy transfer efficiency. These three terms define the core mechanism chain for Trophic Levels.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'producer',
            options: ['organism obtaining energy by feeding on other organisms', 'fraction of energy passed to the next trophic level', 'network of interconnected feeding relationships', 'organism that captures external energy to make organic molecules']
          },
          {
            label: 'consumer',
            options: ['fraction of energy passed to the next trophic level', 'representation of total mass at successive trophic levels', 'organism obtaining energy by feeding on other organisms', 'network of interconnected feeding relationships']
          },
          {
            label: 'energy transfer efficiency',
            options: ['network of interconnected feeding relationships', 'representation of total mass at successive trophic levels', 'incorporation of inorganic carbon into organic molecules', 'fraction of energy passed to the next trophic level']
          }
        ],
        correctAnswers: ['organism that captures external energy to make organic molecules', 'organism obtaining energy by feeding on other organisms', 'fraction of energy passed to the next trophic level'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'producer, consumer, and energy transfer efficiency should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because producer organism that captures external energy to make organic molecules, we expect ...".
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
      id: 'bio-energy-flow-nutrient-cycling-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In lake ecosystem trophic transfer, the observed pattern is: network of interconnected feeding relationships. What term should anchor the explanation?',
            options: [
              'consumer',
              'food web',
              'producer',
              'energy transfer efficiency'
            ],
            correctAnswer: 1,
            explanation: 'Use food web because it directly maps to the described biological pattern: network of interconnected feeding relationships.'
          },
          {
            question: 'In an AP-style free-response about trophic levels, the observed pattern is: representation of total mass at successive trophic levels. What term should anchor the explanation?',
            options: [
              'carbon fixation',
              'biomass pyramid',
              'energy transfer efficiency',
              'food web'
            ],
            correctAnswer: 1,
            explanation: 'Use biomass pyramid because it directly maps to the described biological pattern: representation of total mass at successive trophic levels.'
          }
        ]
      }
    }
  ]
};
