export const bioFeedbackPart2Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p2-s1-intro',
      type: 'text' as const,
      content: `
      ## Feedback Mechanisms: Negative Feedback
      
      **Part 2 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through blood glucose stabilization loops.
      
      ### Worked biological example
      A student team investigates blood glucose stabilization loops. Their first interpretation step is to identify how **negative feedback** and **homeostasis** work together in the same pathway.
      
      - They classify the primary signal using **negative feedback**: response counteracts change to restore set point.
      - They trace the downstream response using **homeostasis**: dynamic maintenance of internal stability.
      - They then compare outcomes with **set point** and **sensor** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **negative feedback**
      - **homeostasis**
      - **set point**
      - **sensor**
      `
    },
    {
      id: 'bio-feedback-mechanisms-p2-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Negative Feedback, what best describes negative feedback?',
            options: [
              'component that detects a change in a regulated variable',
              'response counteracts change to restore set point',
              'dynamic maintenance of internal stability',
              'target value around which a variable is regulated'
            ],
            correctAnswer: 1,
            explanation: 'negative feedback is best matched with: response counteracts change to restore set point.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of homeostasis?',
            options: [
              'response counteracts change to restore set point',
              'target value around which a variable is regulated',
              'dynamic maintenance of internal stability',
              'component that carries out corrective response'
            ],
            correctAnswer: 2,
            explanation: 'homeostasis is best matched with: dynamic maintenance of internal stability.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p2-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Negative Feedback
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → negative feedback
      - **Immediate processing** → homeostasis
      - **System-level consequence** → set point
      - **Measured readout** → sensor
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | negative feedback | response counteracts change to restore set point | Early shift in the primary variable |
      | homeostasis | dynamic maintenance of internal stability | Mid-pathway change in process rate |
      | set point | target value around which a variable is regulated | Downstream phenotype trend |
      | sensor | component that detects a change in a regulated variable | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **response counteracts change to restore set point**

      2) Term for this definition: **dynamic maintenance of internal stability**

      3) Term for this definition: **target value around which a variable is regulated**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['negative feedback', 'homeostasis', 'set point'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'response counteracts change to restore set point\'.',
        hint2: 'Second blank points to homeostasis; think about the role \'dynamic maintenance of internal stability\'.',
        hint3: 'Third blank is set point; connect it to \'target value around which a variable is regulated\'.',
        explanation: 'Correct set: negative feedback, homeostasis, set point. These three terms define the core mechanism chain for Negative Feedback.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'negative feedback',
            options: ['response counteracts change to restore set point', 'dynamic maintenance of internal stability', 'target value around which a variable is regulated', 'component that detects a change in a regulated variable']
          },
          {
            label: 'homeostasis',
            options: ['component that detects a change in a regulated variable', 'dynamic maintenance of internal stability', 'target value around which a variable is regulated', 'component that carries out corrective response']
          },
          {
            label: 'set point',
            options: ['component that detects a change in a regulated variable', 'component that carries out corrective response', 'target value around which a variable is regulated', 'hormone lowering blood glucose by promoting uptake/storage']
          }
        ],
        correctAnswers: ['response counteracts change to restore set point', 'dynamic maintenance of internal stability', 'target value around which a variable is regulated'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'negative feedback, homeostasis, and set point should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p2-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because negative feedback response counteracts change to restore set point, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Homeostasis permits fluctuation within ranges rather than fixed constants.
      - Hormone concentration alone does not predict effect without receptor context.
      - Feedback loops can be nested and interact across organ systems.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p2-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In blood glucose stabilization loops, the observed pattern is: component that detects a change in a regulated variable. What term should anchor the explanation?',
            options: [
              'set point',
              'negative feedback',
              'homeostasis',
              'sensor'
            ],
            correctAnswer: 3,
            explanation: 'Use sensor because it directly maps to the described biological pattern: component that detects a change in a regulated variable.'
          },
          {
            question: 'In an AP-style free-response about negative feedback, the observed pattern is: component that carries out corrective response. What term should anchor the explanation?',
            options: [
              'insulin',
              'set point',
              'effector',
              'sensor'
            ],
            correctAnswer: 2,
            explanation: 'Use effector because it directly maps to the described biological pattern: component that carries out corrective response.'
          }
        ]
      }
    }
  ]
};
