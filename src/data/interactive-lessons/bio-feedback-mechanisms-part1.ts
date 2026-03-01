export const bioFeedbackPart1Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p1-s1-intro',
      type: 'text' as const,
      content: `
      ## Feedback Mechanisms: Positive Feedback
      
      **Part 1 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through blood clotting amplification.
      
      ### Worked biological example
      A student team investigates blood clotting amplification. Their first interpretation step is to identify how **positive feedback** and **negative feedback** work together in the same pathway.
      
      - They classify the primary signal using **positive feedback**: response amplifies the initial stimulus.
      - They trace the downstream response using **negative feedback**: response counteracts change to restore set point.
      - They then compare outcomes with **homeostasis** and **set point** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **positive feedback**
      - **negative feedback**
      - **homeostasis**
      - **set point**
      `
    },
    {
      id: 'bio-feedback-mechanisms-p1-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Positive Feedback, what best describes positive feedback?',
            options: [
              'dynamic maintenance of internal stability',
              'response counteracts change to restore set point',
              'target value around which a variable is regulated',
              'response amplifies the initial stimulus'
            ],
            correctAnswer: 3,
            explanation: 'positive feedback is best matched with: response amplifies the initial stimulus.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of negative feedback?',
            options: [
              'response amplifies the initial stimulus',
              'response counteracts change to restore set point',
              'component that detects a change in a regulated variable',
              'dynamic maintenance of internal stability'
            ],
            correctAnswer: 1,
            explanation: 'negative feedback is best matched with: response counteracts change to restore set point.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p1-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Positive Feedback
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → positive feedback
      - **Immediate processing** → negative feedback
      - **System-level consequence** → homeostasis
      - **Measured readout** → set point
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | positive feedback | response amplifies the initial stimulus | Early shift in the primary variable |
      | negative feedback | response counteracts change to restore set point | Mid-pathway change in process rate |
      | homeostasis | dynamic maintenance of internal stability | Downstream phenotype trend |
      | set point | target value around which a variable is regulated | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **response amplifies the initial stimulus**
      2) Term for this definition: **response counteracts change to restore set point**
      3) Term for this definition: **dynamic maintenance of internal stability**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['positive feedback', 'negative feedback', 'homeostasis'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'response amplifies the initial stimulus\'.',
        hint2: 'Second blank points to negative feedback; think about the role \'response counteracts change to restore set point\'.',
        hint3: 'Third blank is homeostasis; connect it to \'dynamic maintenance of internal stability\'.',
        explanation: 'Correct set: positive feedback, negative feedback, homeostasis. These three terms define the core mechanism chain for Positive Feedback.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'positive feedback',
            options: ['response amplifies the initial stimulus', 'target value around which a variable is regulated', 'response counteracts change to restore set point', 'dynamic maintenance of internal stability']
          },
          {
            label: 'negative feedback',
            options: ['response counteracts change to restore set point', 'dynamic maintenance of internal stability', 'component that detects a change in a regulated variable', 'target value around which a variable is regulated']
          },
          {
            label: 'homeostasis',
            options: ['target value around which a variable is regulated', 'component that detects a change in a regulated variable', 'component that carries out corrective response', 'dynamic maintenance of internal stability']
          }
        ],
        correctAnswers: ['response amplifies the initial stimulus', 'response counteracts change to restore set point', 'dynamic maintenance of internal stability'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'positive feedback, negative feedback, and homeostasis should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p1-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because positive feedback response amplifies the initial stimulus, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Positive feedback is not inherently harmful; context determines usefulness.
      - Homeostasis permits fluctuation within ranges rather than fixed constants.
      - Hormone concentration alone does not predict effect without receptor context.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p1-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In blood clotting amplification, the observed pattern is: target value around which a variable is regulated. What term should anchor the explanation?',
            options: [
              'set point',
              'homeostasis',
              'positive feedback',
              'negative feedback'
            ],
            correctAnswer: 0,
            explanation: 'Use set point because it directly maps to the described biological pattern: target value around which a variable is regulated.'
          },
          {
            question: 'In an AP-style free-response about positive feedback, the observed pattern is: component that detects a change in a regulated variable. What term should anchor the explanation?',
            options: [
              'homeostasis',
              'set point',
              'sensor',
              'effector'
            ],
            correctAnswer: 2,
            explanation: 'Use sensor because it directly maps to the described biological pattern: component that detects a change in a regulated variable.'
          }
        ]
      }
    }
  ]
};
