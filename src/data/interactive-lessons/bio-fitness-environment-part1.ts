export const bioFitnessPart1Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Fitness and Environment: Natural Selection & Fitness
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through trait survival differences in variable climates.
      
      ### Worked biological example
      A student team investigates trait survival differences in variable climates. Their first interpretation step is to identify how **fitness** and **adaptation** work together in the same pathway.
      
      - They classify the primary signal using **fitness**: relative reproductive success in a specific environment.
      - They trace the downstream response using **adaptation**: heritable trait improving performance under selection.
      - They then compare outcomes with **phenotypic plasticity** and **trade-off** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **fitness**
      - **adaptation**
      - **phenotypic plasticity**
      - **trade-off**
      `
    },
    {
      id: 'bio-fitness-environment-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Natural Selection & Fitness, what best describes fitness?',
            options: [
              'relative reproductive success in a specific environment',
              'benefit in one function paired with cost in another',
              'ability of one genotype to produce different phenotypes',
              'heritable trait improving performance under selection'
            ],
            correctAnswer: 0,
            explanation: 'fitness is best matched with: relative reproductive success in a specific environment.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of adaptation?',
            options: [
              'relative reproductive success in a specific environment',
              'direction and strength of selection on a trait',
              'ability of one genotype to produce different phenotypes',
              'heritable trait improving performance under selection'
            ],
            correctAnswer: 3,
            explanation: 'adaptation is best matched with: heritable trait improving performance under selection.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Natural Selection & Fitness
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → fitness
      - **Immediate processing** → adaptation
      - **System-level consequence** → phenotypic plasticity
      - **Measured readout** → trade-off
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | fitness | relative reproductive success in a specific environment | Early shift in the primary variable |
      | adaptation | heritable trait improving performance under selection | Mid-pathway change in process rate |
      | phenotypic plasticity | ability of one genotype to produce different phenotypes | Downstream phenotype trend |
      | trade-off | benefit in one function paired with cost in another | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-fitness-environment-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **relative reproductive success in a specific environment**
      2) Term for this definition: **heritable trait improving performance under selection**
      3) Term for this definition: **ability of one genotype to produce different phenotypes**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['fitness', 'adaptation', 'phenotypic plasticity'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'relative reproductive success in a specific environment\'.',
        hint2: 'Second blank points to adaptation; think about the role \'heritable trait improving performance under selection\'.',
        hint3: 'Third blank is phenotypic plasticity; connect it to \'ability of one genotype to produce different phenotypes\'.',
        explanation: 'Correct set: fitness, adaptation, phenotypic plasticity. These three terms define the core mechanism chain for Natural Selection & Fitness.'
      }
    },
    {
      id: 'bio-fitness-environment-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'fitness',
            options: ['relative reproductive success in a specific environment', 'benefit in one function paired with cost in another', 'heritable trait improving performance under selection', 'ability of one genotype to produce different phenotypes']
          },
          {
            label: 'adaptation',
            options: ['benefit in one function paired with cost in another', 'heritable trait improving performance under selection', 'ability of one genotype to produce different phenotypes', 'direction and strength of selection on a trait']
          },
          {
            label: 'phenotypic plasticity',
            options: ['direction and strength of selection on a trait', 'favors intermediate phenotypes', 'benefit in one function paired with cost in another', 'ability of one genotype to produce different phenotypes']
          }
        ],
        correctAnswers: ['relative reproductive success in a specific environment', 'heritable trait improving performance under selection', 'ability of one genotype to produce different phenotypes'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'fitness, adaptation, and phenotypic plasticity should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-fitness-environment-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because fitness relative reproductive success in a specific environment, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Fitness is environment-specific, not an absolute ranking.
      - Plastic responses are not the same as evolutionary change in allele frequencies.
      - Adaptation does not mean perfection; constraints and trade-offs persist.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-fitness-environment-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In trait survival differences in variable climates, the observed pattern is: benefit in one function paired with cost in another. What term should anchor the explanation?',
            options: [
              'phenotypic plasticity',
              'trade-off',
              'adaptation',
              'fitness'
            ],
            correctAnswer: 1,
            explanation: 'Use trade-off because it directly maps to the described biological pattern: benefit in one function paired with cost in another.'
          },
          {
            question: 'In an AP-style free-response about natural selection & fitness, the observed pattern is: direction and strength of selection on a trait. What term should anchor the explanation?',
            options: [
              'stabilizing selection',
              'phenotypic plasticity',
              'selection gradient',
              'trade-off'
            ],
            correctAnswer: 2,
            explanation: 'Use selection gradient because it directly maps to the described biological pattern: direction and strength of selection on a trait.'
          }
        ]
      }
    }
  ]
};
