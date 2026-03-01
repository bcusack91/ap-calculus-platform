export const bioFitnessPart4Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Fitness and Environment: Trade-offs
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through reproductive investment versus survival trade-offs.
      
      ### Worked biological example
      A student team investigates reproductive investment versus survival trade-offs. Their first interpretation step is to identify how **trade-off** and **selection gradient** work together in the same pathway.
      
      - They classify the primary signal using **trade-off**: benefit in one function paired with cost in another.
      - They trace the downstream response using **selection gradient**: direction and strength of selection on a trait.
      - They then compare outcomes with **stabilizing selection** and **directional selection** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **trade-off**
      - **selection gradient**
      - **stabilizing selection**
      - **directional selection**
      `
    },
    {
      id: 'bio-fitness-environment-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Trade-offs, what best describes trade-off?',
            options: [
              'favors intermediate phenotypes',
              'benefit in one function paired with cost in another',
              'favors one phenotypic extreme',
              'direction and strength of selection on a trait'
            ],
            correctAnswer: 1,
            explanation: 'trade-off is best matched with: benefit in one function paired with cost in another.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of selection gradient?',
            options: [
              'favors multiple extremes over intermediates',
              'direction and strength of selection on a trait',
              'favors intermediate phenotypes',
              'benefit in one function paired with cost in another'
            ],
            correctAnswer: 1,
            explanation: 'selection gradient is best matched with: direction and strength of selection on a trait.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Trade-offs
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → trade-off
      - **Immediate processing** → selection gradient
      - **System-level consequence** → stabilizing selection
      - **Measured readout** → directional selection
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | trade-off | benefit in one function paired with cost in another | Early shift in the primary variable |
      | selection gradient | direction and strength of selection on a trait | Mid-pathway change in process rate |
      | stabilizing selection | favors intermediate phenotypes | Downstream phenotype trend |
      | directional selection | favors one phenotypic extreme | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-fitness-environment-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **benefit in one function paired with cost in another**
      2) Term for this definition: **direction and strength of selection on a trait**
      3) Term for this definition: **favors intermediate phenotypes**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['trade-off', 'selection gradient', 'stabilizing selection'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'benefit in one function paired with cost in another\'.',
        hint2: 'Second blank points to selection gradient; think about the role \'direction and strength of selection on a trait\'.',
        hint3: 'Third blank is stabilizing selection; connect it to \'favors intermediate phenotypes\'.',
        explanation: 'Correct set: trade-off, selection gradient, stabilizing selection. These three terms define the core mechanism chain for Trade-offs.'
      }
    },
    {
      id: 'bio-fitness-environment-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'trade-off',
            options: ['favors intermediate phenotypes', 'benefit in one function paired with cost in another', 'direction and strength of selection on a trait', 'favors one phenotypic extreme']
          },
          {
            label: 'selection gradient',
            options: ['favors one phenotypic extreme', 'direction and strength of selection on a trait', 'favors multiple extremes over intermediates', 'favors intermediate phenotypes']
          },
          {
            label: 'stabilizing selection',
            options: ['favors multiple extremes over intermediates', 'favors intermediate phenotypes', 'favors one phenotypic extreme', 'population evolves traits tuned to local conditions']
          }
        ],
        correctAnswers: ['benefit in one function paired with cost in another', 'direction and strength of selection on a trait', 'favors intermediate phenotypes'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'trade-off, selection gradient, and stabilizing selection should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-fitness-environment-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because trade-off benefit in one function paired with cost in another, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Selection can act differently on the same trait in different habitats.
      - Fitness is environment-specific, not an absolute ranking.
      - Plastic responses are not the same as evolutionary change in allele frequencies.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-fitness-environment-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In reproductive investment versus survival trade-offs, the observed pattern is: favors one phenotypic extreme. What term should anchor the explanation?',
            options: [
              'selection gradient',
              'directional selection',
              'stabilizing selection',
              'trade-off'
            ],
            correctAnswer: 1,
            explanation: 'Use directional selection because it directly maps to the described biological pattern: favors one phenotypic extreme.'
          },
          {
            question: 'In an AP-style free-response about trade-offs, the observed pattern is: favors multiple extremes over intermediates. What term should anchor the explanation?',
            options: [
              'local adaptation',
              'stabilizing selection',
              'disruptive selection',
              'directional selection'
            ],
            correctAnswer: 2,
            explanation: 'Use disruptive selection because it directly maps to the described biological pattern: favors multiple extremes over intermediates.'
          }
        ]
      }
    }
  ]
};
