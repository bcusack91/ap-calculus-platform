export const bioFitnessPart3Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Fitness and Environment: Phenotypic Plasticity
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through plastic growth response to light availability.
      
      ### Worked biological example
      A student team investigates plastic growth response to light availability. Their first interpretation step is to identify how **phenotypic plasticity** and **trade-off** work together in the same pathway.
      
      - They classify the primary signal using **phenotypic plasticity**: ability of one genotype to produce different phenotypes.
      - They trace the downstream response using **trade-off**: benefit in one function paired with cost in another.
      - They then compare outcomes with **selection gradient** and **stabilizing selection** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **phenotypic plasticity**
      - **trade-off**
      - **selection gradient**
      - **stabilizing selection**
      `
    },
    {
      id: 'bio-fitness-environment-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Phenotypic Plasticity, what best describes phenotypic plasticity?',
            options: [
              'direction and strength of selection on a trait',
              'favors intermediate phenotypes',
              'benefit in one function paired with cost in another',
              'ability of one genotype to produce different phenotypes'
            ],
            correctAnswer: 3,
            explanation: 'phenotypic plasticity is best matched with: ability of one genotype to produce different phenotypes.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of trade-off?',
            options: [
              'benefit in one function paired with cost in another',
              'favors one phenotypic extreme',
              'direction and strength of selection on a trait',
              'ability of one genotype to produce different phenotypes'
            ],
            correctAnswer: 0,
            explanation: 'trade-off is best matched with: benefit in one function paired with cost in another.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Phenotypic Plasticity
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → phenotypic plasticity
      - **Immediate processing** → trade-off
      - **System-level consequence** → selection gradient
      - **Measured readout** → stabilizing selection
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | phenotypic plasticity | ability of one genotype to produce different phenotypes | Early shift in the primary variable |
      | trade-off | benefit in one function paired with cost in another | Mid-pathway change in process rate |
      | selection gradient | direction and strength of selection on a trait | Downstream phenotype trend |
      | stabilizing selection | favors intermediate phenotypes | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-fitness-environment-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **ability of one genotype to produce different phenotypes**
      2) Term for this definition: **benefit in one function paired with cost in another**
      3) Term for this definition: **direction and strength of selection on a trait**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['phenotypic plasticity', 'trade-off', 'selection gradient'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'ability of one genotype to produce different phenotypes\'.',
        hint2: 'Second blank points to trade-off; think about the role \'benefit in one function paired with cost in another\'.',
        hint3: 'Third blank is selection gradient; connect it to \'direction and strength of selection on a trait\'.',
        explanation: 'Correct set: phenotypic plasticity, trade-off, selection gradient. These three terms define the core mechanism chain for Phenotypic Plasticity.'
      }
    },
    {
      id: 'bio-fitness-environment-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'phenotypic plasticity',
            options: ['favors intermediate phenotypes', 'direction and strength of selection on a trait', 'benefit in one function paired with cost in another', 'ability of one genotype to produce different phenotypes']
          },
          {
            label: 'trade-off',
            options: ['favors one phenotypic extreme', 'benefit in one function paired with cost in another', 'favors intermediate phenotypes', 'direction and strength of selection on a trait']
          },
          {
            label: 'selection gradient',
            options: ['favors one phenotypic extreme', 'direction and strength of selection on a trait', 'favors multiple extremes over intermediates', 'favors intermediate phenotypes']
          }
        ],
        correctAnswers: ['ability of one genotype to produce different phenotypes', 'benefit in one function paired with cost in another', 'direction and strength of selection on a trait'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'phenotypic plasticity, trade-off, and selection gradient should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-fitness-environment-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because phenotypic plasticity ability of one genotype to produce different phenotypes, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Adaptation does not mean perfection; constraints and trade-offs persist.
      - Selection can act differently on the same trait in different habitats.
      - Fitness is environment-specific, not an absolute ranking.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-fitness-environment-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In plastic growth response to light availability, the observed pattern is: favors intermediate phenotypes. What term should anchor the explanation?',
            options: [
              'trade-off',
              'phenotypic plasticity',
              'selection gradient',
              'stabilizing selection'
            ],
            correctAnswer: 3,
            explanation: 'Use stabilizing selection because it directly maps to the described biological pattern: favors intermediate phenotypes.'
          },
          {
            question: 'In an AP-style free-response about phenotypic plasticity, the observed pattern is: favors one phenotypic extreme. What term should anchor the explanation?',
            options: [
              'disruptive selection',
              'stabilizing selection',
              'selection gradient',
              'directional selection'
            ],
            correctAnswer: 3,
            explanation: 'Use directional selection because it directly maps to the described biological pattern: favors one phenotypic extreme.'
          }
        ]
      }
    }
  ]
};
