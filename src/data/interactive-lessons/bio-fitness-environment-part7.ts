export const bioFitnessPart7Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Fitness and Environment: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through AP synthesis of selection and ecological context.
      
      ### Worked biological example
      A student team investigates AP synthesis of selection and ecological context. Their first interpretation step is to identify how **directional selection** and **disruptive selection** work together in the same pathway.
      
      - They classify the primary signal using **directional selection**: favors one phenotypic extreme.
      - They trace the downstream response using **disruptive selection**: favors multiple extremes over intermediates.
      - They then compare outcomes with **local adaptation** and **fitness** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **directional selection**
      - **disruptive selection**
      - **local adaptation**
      - **fitness**
      `
    },
    {
      id: 'bio-fitness-environment-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes directional selection?',
            options: [
              'population evolves traits tuned to local conditions',
              'relative reproductive success in a specific environment',
              'favors multiple extremes over intermediates',
              'favors one phenotypic extreme'
            ],
            correctAnswer: 3,
            explanation: 'directional selection is best matched with: favors one phenotypic extreme.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of disruptive selection?',
            options: [
              'population evolves traits tuned to local conditions',
              'heritable trait improving performance under selection',
              'favors multiple extremes over intermediates',
              'favors one phenotypic extreme'
            ],
            correctAnswer: 2,
            explanation: 'disruptive selection is best matched with: favors multiple extremes over intermediates.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → directional selection
      - **Immediate processing** → disruptive selection
      - **System-level consequence** → local adaptation
      - **Measured readout** → fitness
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | directional selection | favors one phenotypic extreme | Early shift in the primary variable |
      | disruptive selection | favors multiple extremes over intermediates | Mid-pathway change in process rate |
      | local adaptation | population evolves traits tuned to local conditions | Downstream phenotype trend |
      | fitness | relative reproductive success in a specific environment | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-fitness-environment-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **favors one phenotypic extreme**
      2) Term for this definition: **favors multiple extremes over intermediates**
      3) Term for this definition: **population evolves traits tuned to local conditions**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['directional selection', 'disruptive selection', 'local adaptation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'favors one phenotypic extreme\'.',
        hint2: 'Second blank points to disruptive selection; think about the role \'favors multiple extremes over intermediates\'.',
        hint3: 'Third blank is local adaptation; connect it to \'population evolves traits tuned to local conditions\'.',
        explanation: 'Correct set: directional selection, disruptive selection, local adaptation. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-fitness-environment-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'directional selection',
            options: ['favors multiple extremes over intermediates', 'relative reproductive success in a specific environment', 'favors one phenotypic extreme', 'population evolves traits tuned to local conditions']
          },
          {
            label: 'disruptive selection',
            options: ['population evolves traits tuned to local conditions', 'favors multiple extremes over intermediates', 'relative reproductive success in a specific environment', 'heritable trait improving performance under selection']
          },
          {
            label: 'local adaptation',
            options: ['heritable trait improving performance under selection', 'ability of one genotype to produce different phenotypes', 'relative reproductive success in a specific environment', 'population evolves traits tuned to local conditions']
          }
        ],
        correctAnswers: ['favors one phenotypic extreme', 'favors multiple extremes over intermediates', 'population evolves traits tuned to local conditions'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'directional selection, disruptive selection, and local adaptation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-fitness-environment-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because directional selection favors one phenotypic extreme, we expect ...".
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
      id: 'bio-fitness-environment-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In AP synthesis of selection and ecological context, the observed pattern is: relative reproductive success in a specific environment. What term should anchor the explanation?',
            options: [
              'fitness',
              'disruptive selection',
              'directional selection',
              'local adaptation'
            ],
            correctAnswer: 0,
            explanation: 'Use fitness because it directly maps to the described biological pattern: relative reproductive success in a specific environment.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: heritable trait improving performance under selection. What term should anchor the explanation?',
            options: [
              'adaptation',
              'local adaptation',
              'phenotypic plasticity',
              'fitness'
            ],
            correctAnswer: 0,
            explanation: 'Use adaptation because it directly maps to the described biological pattern: heritable trait improving performance under selection.'
          }
        ]
      }
    }
  ]
};
