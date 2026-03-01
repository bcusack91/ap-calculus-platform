export const bioFeedbackPart3Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p3-s1-intro',
      type: 'text' as const,
      content: `
      ## Feedback Mechanisms: Homeostasis
      
      **Part 3 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through maintenance of internal osmolarity.
      
      ### Worked biological example
      A student team investigates maintenance of internal osmolarity. Their first interpretation step is to identify how **homeostasis** and **set point** work together in the same pathway.
      
      - They classify the primary signal using **homeostasis**: dynamic maintenance of internal stability.
      - They trace the downstream response using **set point**: target value around which a variable is regulated.
      - They then compare outcomes with **sensor** and **effector** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **homeostasis**
      - **set point**
      - **sensor**
      - **effector**
      `
    },
    {
      id: 'bio-feedback-mechanisms-p3-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Homeostasis, what best describes homeostasis?',
            options: [
              'component that carries out corrective response',
              'component that detects a change in a regulated variable',
              'target value around which a variable is regulated',
              'dynamic maintenance of internal stability'
            ],
            correctAnswer: 3,
            explanation: 'homeostasis is best matched with: dynamic maintenance of internal stability.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of set point?',
            options: [
              'hormone lowering blood glucose by promoting uptake/storage',
              'dynamic maintenance of internal stability',
              'component that detects a change in a regulated variable',
              'target value around which a variable is regulated'
            ],
            correctAnswer: 3,
            explanation: 'set point is best matched with: target value around which a variable is regulated.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p3-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Homeostasis
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → homeostasis
      - **Immediate processing** → set point
      - **System-level consequence** → sensor
      - **Measured readout** → effector
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | homeostasis | dynamic maintenance of internal stability | Early shift in the primary variable |
      | set point | target value around which a variable is regulated | Mid-pathway change in process rate |
      | sensor | component that detects a change in a regulated variable | Downstream phenotype trend |
      | effector | component that carries out corrective response | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **dynamic maintenance of internal stability**
      2) Term for this definition: **target value around which a variable is regulated**
      3) Term for this definition: **component that detects a change in a regulated variable**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['homeostasis', 'set point', 'sensor'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'dynamic maintenance of internal stability\'.',
        hint2: 'Second blank points to set point; think about the role \'target value around which a variable is regulated\'.',
        hint3: 'Third blank is sensor; connect it to \'component that detects a change in a regulated variable\'.',
        explanation: 'Correct set: homeostasis, set point, sensor. These three terms define the core mechanism chain for Homeostasis.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'homeostasis',
            options: ['dynamic maintenance of internal stability', 'component that carries out corrective response', 'component that detects a change in a regulated variable', 'target value around which a variable is regulated']
          },
          {
            label: 'set point',
            options: ['hormone lowering blood glucose by promoting uptake/storage', 'component that detects a change in a regulated variable', 'target value around which a variable is regulated', 'component that carries out corrective response']
          },
          {
            label: 'sensor',
            options: ['hormone lowering blood glucose by promoting uptake/storage', 'component that carries out corrective response', 'hormone raising blood glucose by mobilizing reserves', 'component that detects a change in a regulated variable']
          }
        ],
        correctAnswers: ['dynamic maintenance of internal stability', 'target value around which a variable is regulated', 'component that detects a change in a regulated variable'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'homeostasis, set point, and sensor should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p3-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because homeostasis dynamic maintenance of internal stability, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Hormone concentration alone does not predict effect without receptor context.
      - Feedback loops can be nested and interact across organ systems.
      - Positive feedback is not inherently harmful; context determines usefulness.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p3-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In maintenance of internal osmolarity, the observed pattern is: component that carries out corrective response. What term should anchor the explanation?',
            options: [
              'homeostasis',
              'sensor',
              'set point',
              'effector'
            ],
            correctAnswer: 3,
            explanation: 'Use effector because it directly maps to the described biological pattern: component that carries out corrective response.'
          },
          {
            question: 'In an AP-style free-response about homeostasis, the observed pattern is: hormone lowering blood glucose by promoting uptake/storage. What term should anchor the explanation?',
            options: [
              'insulin',
              'effector',
              'sensor',
              'glucagon'
            ],
            correctAnswer: 0,
            explanation: 'Use insulin because it directly maps to the described biological pattern: hormone lowering blood glucose by promoting uptake/storage.'
          }
        ]
      }
    }
  ]
};
