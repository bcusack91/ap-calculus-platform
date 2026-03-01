export const bioFitnessPart6Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Fitness and Environment: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through dataset interpretation for trait-by-environment interactions.
      
      ### Worked biological example
      A student team investigates dataset interpretation for trait-by-environment interactions. Their first interpretation step is to identify how **stabilizing selection** and **directional selection** work together in the same pathway.
      
      - They classify the primary signal using **stabilizing selection**: favors intermediate phenotypes.
      - They trace the downstream response using **directional selection**: favors one phenotypic extreme.
      - They then compare outcomes with **disruptive selection** and **local adaptation** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **stabilizing selection**
      - **directional selection**
      - **disruptive selection**
      - **local adaptation**
      `
    },
    {
      id: 'bio-fitness-environment-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes stabilizing selection?',
            options: [
              'favors multiple extremes over intermediates',
              'population evolves traits tuned to local conditions',
              'favors intermediate phenotypes',
              'favors one phenotypic extreme'
            ],
            correctAnswer: 2,
            explanation: 'stabilizing selection is best matched with: favors intermediate phenotypes.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of directional selection?',
            options: [
              'favors one phenotypic extreme',
              'favors multiple extremes over intermediates',
              'favors intermediate phenotypes',
              'relative reproductive success in a specific environment'
            ],
            correctAnswer: 0,
            explanation: 'directional selection is best matched with: favors one phenotypic extreme.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → stabilizing selection
      - **Immediate processing** → directional selection
      - **System-level consequence** → disruptive selection
      - **Measured readout** → local adaptation
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | stabilizing selection | favors intermediate phenotypes | Early shift in the primary variable |
      | directional selection | favors one phenotypic extreme | Mid-pathway change in process rate |
      | disruptive selection | favors multiple extremes over intermediates | Downstream phenotype trend |
      | local adaptation | population evolves traits tuned to local conditions | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-fitness-environment-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **favors intermediate phenotypes**
      2) Term for this definition: **favors one phenotypic extreme**
      3) Term for this definition: **favors multiple extremes over intermediates**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['stabilizing selection', 'directional selection', 'disruptive selection'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'favors intermediate phenotypes\'.',
        hint2: 'Second blank points to directional selection; think about the role \'favors one phenotypic extreme\'.',
        hint3: 'Third blank is disruptive selection; connect it to \'favors multiple extremes over intermediates\'.',
        explanation: 'Correct set: stabilizing selection, directional selection, disruptive selection. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-fitness-environment-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'stabilizing selection',
            options: ['population evolves traits tuned to local conditions', 'favors intermediate phenotypes', 'favors multiple extremes over intermediates', 'favors one phenotypic extreme']
          },
          {
            label: 'directional selection',
            options: ['population evolves traits tuned to local conditions', 'favors one phenotypic extreme', 'relative reproductive success in a specific environment', 'favors multiple extremes over intermediates']
          },
          {
            label: 'disruptive selection',
            options: ['relative reproductive success in a specific environment', 'heritable trait improving performance under selection', 'favors multiple extremes over intermediates', 'population evolves traits tuned to local conditions']
          }
        ],
        correctAnswers: ['favors intermediate phenotypes', 'favors one phenotypic extreme', 'favors multiple extremes over intermediates'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'stabilizing selection, directional selection, and disruptive selection should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-fitness-environment-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because stabilizing selection favors intermediate phenotypes, we expect ...".
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
      id: 'bio-fitness-environment-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In dataset interpretation for trait-by-environment interactions, the observed pattern is: population evolves traits tuned to local conditions. What term should anchor the explanation?',
            options: [
              'local adaptation',
              'disruptive selection',
              'stabilizing selection',
              'directional selection'
            ],
            correctAnswer: 0,
            explanation: 'Use local adaptation because it directly maps to the described biological pattern: population evolves traits tuned to local conditions.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: relative reproductive success in a specific environment. What term should anchor the explanation?',
            options: [
              'local adaptation',
              'adaptation',
              'disruptive selection',
              'fitness'
            ],
            correctAnswer: 3,
            explanation: 'Use fitness because it directly maps to the described biological pattern: relative reproductive success in a specific environment.'
          }
        ]
      }
    }
  ]
};
