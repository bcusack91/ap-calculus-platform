export const bioFitnessPart2Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Fitness and Environment: Adaptation
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through beak-shape adaptation under resource shifts.
      
      ### Worked biological example
      A student team investigates beak-shape adaptation under resource shifts. Their first interpretation step is to identify how **adaptation** and **phenotypic plasticity** work together in the same pathway.
      
      - They classify the primary signal using **adaptation**: heritable trait improving performance under selection.
      - They trace the downstream response using **phenotypic plasticity**: ability of one genotype to produce different phenotypes.
      - They then compare outcomes with **trade-off** and **selection gradient** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **adaptation**
      - **phenotypic plasticity**
      - **trade-off**
      - **selection gradient**
      `
    },
    {
      id: 'bio-fitness-environment-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Adaptation, what best describes adaptation?',
            options: [
              'heritable trait improving performance under selection',
              'direction and strength of selection on a trait',
              'benefit in one function paired with cost in another',
              'ability of one genotype to produce different phenotypes'
            ],
            correctAnswer: 0,
            explanation: 'adaptation is best matched with: heritable trait improving performance under selection.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of phenotypic plasticity?',
            options: [
              'benefit in one function paired with cost in another',
              'heritable trait improving performance under selection',
              'favors intermediate phenotypes',
              'ability of one genotype to produce different phenotypes'
            ],
            correctAnswer: 3,
            explanation: 'phenotypic plasticity is best matched with: ability of one genotype to produce different phenotypes.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Adaptation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → adaptation
      - **Immediate processing** → phenotypic plasticity
      - **System-level consequence** → trade-off
      - **Measured readout** → selection gradient
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | adaptation | heritable trait improving performance under selection | Early shift in the primary variable |
      | phenotypic plasticity | ability of one genotype to produce different phenotypes | Mid-pathway change in process rate |
      | trade-off | benefit in one function paired with cost in another | Downstream phenotype trend |
      | selection gradient | direction and strength of selection on a trait | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-fitness-environment-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **heritable trait improving performance under selection**

      2) Term for this definition: **ability of one genotype to produce different phenotypes**

      3) Term for this definition: **benefit in one function paired with cost in another**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['adaptation', 'phenotypic plasticity', 'trade-off'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'heritable trait improving performance under selection\'.',
        hint2: 'Second blank points to phenotypic plasticity; think about the role \'ability of one genotype to produce different phenotypes\'.',
        hint3: 'Third blank is trade-off; connect it to \'benefit in one function paired with cost in another\'.',
        explanation: 'Correct set: adaptation, phenotypic plasticity, trade-off. These three terms define the core mechanism chain for Adaptation.'
      }
    },
    {
      id: 'bio-fitness-environment-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'adaptation',
            options: ['ability of one genotype to produce different phenotypes', 'benefit in one function paired with cost in another', 'direction and strength of selection on a trait', 'heritable trait improving performance under selection']
          },
          {
            label: 'phenotypic plasticity',
            options: ['direction and strength of selection on a trait', 'favors intermediate phenotypes', 'ability of one genotype to produce different phenotypes', 'benefit in one function paired with cost in another']
          },
          {
            label: 'trade-off',
            options: ['favors one phenotypic extreme', 'benefit in one function paired with cost in another', 'direction and strength of selection on a trait', 'favors intermediate phenotypes']
          }
        ],
        correctAnswers: ['heritable trait improving performance under selection', 'ability of one genotype to produce different phenotypes', 'benefit in one function paired with cost in another'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'adaptation, phenotypic plasticity, and trade-off should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-fitness-environment-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because adaptation heritable trait improving performance under selection, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Plastic responses are not the same as evolutionary change in allele frequencies.
      - Adaptation does not mean perfection; constraints and trade-offs persist.
      - Selection can act differently on the same trait in different habitats.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-fitness-environment-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In beak-shape adaptation under resource shifts, the observed pattern is: direction and strength of selection on a trait. What term should anchor the explanation?',
            options: [
              'phenotypic plasticity',
              'trade-off',
              'selection gradient',
              'adaptation'
            ],
            correctAnswer: 2,
            explanation: 'Use selection gradient because it directly maps to the described biological pattern: direction and strength of selection on a trait.'
          },
          {
            question: 'In an AP-style free-response about adaptation, the observed pattern is: favors intermediate phenotypes. What term should anchor the explanation?',
            options: [
              'directional selection',
              'stabilizing selection',
              'trade-off',
              'selection gradient'
            ],
            correctAnswer: 1,
            explanation: 'Use stabilizing selection because it directly maps to the described biological pattern: favors intermediate phenotypes.'
          }
        ]
      }
    }
  ]
};
