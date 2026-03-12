export const bioFitnessPart5Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Fitness and Environment: Environmental Variation
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through fitness landscapes across heterogeneous habitats.
      
      ### Worked biological example
      A student team investigates fitness landscapes across heterogeneous habitats. Their first interpretation step is to identify how **selection gradient** and **stabilizing selection** work together in the same pathway.
      
      - They classify the primary signal using **selection gradient**: direction and strength of selection on a trait.
      - They trace the downstream response using **stabilizing selection**: favors intermediate phenotypes.
      - They then compare outcomes with **directional selection** and **disruptive selection** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **selection gradient**
      - **stabilizing selection**
      - **directional selection**
      - **disruptive selection**
      `
    },
    {
      id: 'bio-fitness-environment-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Environmental Variation, what best describes selection gradient?',
            options: [
              'favors intermediate phenotypes',
              'favors multiple extremes over intermediates',
              'direction and strength of selection on a trait',
              'favors one phenotypic extreme'
            ],
            correctAnswer: 2,
            explanation: 'selection gradient is best matched with: direction and strength of selection on a trait.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of stabilizing selection?',
            options: [
              'favors one phenotypic extreme',
              'direction and strength of selection on a trait',
              'population evolves traits tuned to local conditions',
              'favors intermediate phenotypes'
            ],
            correctAnswer: 3,
            explanation: 'stabilizing selection is best matched with: favors intermediate phenotypes.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Environmental Variation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → selection gradient
      - **Immediate processing** → stabilizing selection
      - **System-level consequence** → directional selection
      - **Measured readout** → disruptive selection
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | selection gradient | direction and strength of selection on a trait | Early shift in the primary variable |
      | stabilizing selection | favors intermediate phenotypes | Mid-pathway change in process rate |
      | directional selection | favors one phenotypic extreme | Downstream phenotype trend |
      | disruptive selection | favors multiple extremes over intermediates | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-fitness-environment-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **direction and strength of selection on a trait**
      2) Term for this definition: **favors intermediate phenotypes**
      3) Term for this definition: **favors one phenotypic extreme**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['selection gradient', 'stabilizing selection', 'directional selection'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'direction and strength of selection on a trait\'.',
        hint2: 'Second blank points to stabilizing selection; think about the role \'favors intermediate phenotypes\'.',
        hint3: 'Third blank is directional selection; connect it to \'favors one phenotypic extreme\'.',
        explanation: 'Correct set: selection gradient, stabilizing selection, directional selection. These three terms define the core mechanism chain for Environmental Variation.'
      }
    },
    {
      id: 'bio-fitness-environment-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'selection gradient',
            options: ['favors one phenotypic extreme', 'favors intermediate phenotypes', 'favors multiple extremes over intermediates', 'direction and strength of selection on a trait']
          },
          {
            label: 'stabilizing selection',
            options: ['favors intermediate phenotypes', 'population evolves traits tuned to local conditions', 'favors multiple extremes over intermediates', 'favors one phenotypic extreme']
          },
          {
            label: 'directional selection',
            options: ['favors multiple extremes over intermediates', 'relative reproductive success in a specific environment', 'population evolves traits tuned to local conditions', 'favors one phenotypic extreme']
          }
        ],
        correctAnswers: ['direction and strength of selection on a trait', 'favors intermediate phenotypes', 'favors one phenotypic extreme'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'selection gradient, stabilizing selection, and directional selection should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-fitness-environment-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because selection gradient direction and strength of selection on a trait, we expect ...".
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
      id: 'bio-fitness-environment-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In fitness landscapes across heterogeneous habitats, the observed pattern is: favors multiple extremes over intermediates. What term should anchor the explanation?',
            options: [
              'directional selection',
              'selection gradient',
              'stabilizing selection',
              'disruptive selection'
            ],
            correctAnswer: 3,
            explanation: 'Use disruptive selection because it directly maps to the described biological pattern: favors multiple extremes over intermediates.'
          },
          {
            question: 'In an AP-style free-response about environmental variation, the observed pattern is: population evolves traits tuned to local conditions. What term should anchor the explanation?',
            options: [
              'disruptive selection',
              'directional selection',
              'fitness',
              'local adaptation'
            ],
            correctAnswer: 3,
            explanation: 'Use local adaptation because it directly maps to the described biological pattern: population evolves traits tuned to local conditions.'
          }
        ]
      }
    }
  ]
};
