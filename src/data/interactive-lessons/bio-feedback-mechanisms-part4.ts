export const bioFeedbackPart4Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p4-s1-intro',
      type: 'text' as const,
      content: `
      ## Feedback Mechanisms: Hormonal Regulation
      
      **Part 4 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through endocrine signaling and receptor responses.
      
      ### Worked biological example
      A student team investigates endocrine signaling and receptor responses. Their first interpretation step is to identify how **set point** and **sensor** work together in the same pathway.
      
      - They classify the primary signal using **set point**: target value around which a variable is regulated.
      - They trace the downstream response using **sensor**: component that detects a change in a regulated variable.
      - They then compare outcomes with **effector** and **insulin** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **set point**
      - **sensor**
      - **effector**
      - **insulin**
      `
    },
    {
      id: 'bio-feedback-mechanisms-p4-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Hormonal Regulation, what best describes set point?',
            options: [
              'target value around which a variable is regulated',
              'component that detects a change in a regulated variable',
              'hormone lowering blood glucose by promoting uptake/storage',
              'component that carries out corrective response'
            ],
            correctAnswer: 0,
            explanation: 'set point is best matched with: target value around which a variable is regulated.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of sensor?',
            options: [
              'target value around which a variable is regulated',
              'component that detects a change in a regulated variable',
              'hormone raising blood glucose by mobilizing reserves',
              'component that carries out corrective response'
            ],
            correctAnswer: 1,
            explanation: 'sensor is best matched with: component that detects a change in a regulated variable.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p4-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Hormonal Regulation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → set point
      - **Immediate processing** → sensor
      - **System-level consequence** → effector
      - **Measured readout** → insulin
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | set point | target value around which a variable is regulated | Early shift in the primary variable |
      | sensor | component that detects a change in a regulated variable | Mid-pathway change in process rate |
      | effector | component that carries out corrective response | Downstream phenotype trend |
      | insulin | hormone lowering blood glucose by promoting uptake/storage | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **target value around which a variable is regulated**

      2) Term for this definition: **component that detects a change in a regulated variable**

      3) Term for this definition: **component that carries out corrective response**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['set point', 'sensor', 'effector'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'target value around which a variable is regulated\'.',
        hint2: 'Second blank points to sensor; think about the role \'component that detects a change in a regulated variable\'.',
        hint3: 'Third blank is effector; connect it to \'component that carries out corrective response\'.',
        explanation: 'Correct set: set point, sensor, effector. These three terms define the core mechanism chain for Hormonal Regulation.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'set point',
            options: ['component that carries out corrective response', 'target value around which a variable is regulated', 'component that detects a change in a regulated variable', 'hormone lowering blood glucose by promoting uptake/storage']
          },
          {
            label: 'sensor',
            options: ['component that carries out corrective response', 'hormone raising blood glucose by mobilizing reserves', 'hormone lowering blood glucose by promoting uptake/storage', 'component that detects a change in a regulated variable']
          },
          {
            label: 'effector',
            options: ['hormone lowering blood glucose by promoting uptake/storage', 'hormone raising blood glucose by mobilizing reserves', 'physiological control of body temperature', 'component that carries out corrective response']
          }
        ],
        correctAnswers: ['target value around which a variable is regulated', 'component that detects a change in a regulated variable', 'component that carries out corrective response'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'set point, sensor, and effector should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p4-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because set point target value around which a variable is regulated, we expect ...".
      3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.
      
      #### Common misconceptions to avoid
      - Feedback loops can be nested and interact across organ systems.
      - Positive feedback is not inherently harmful; context determines usefulness.
      - Homeostasis permits fluctuation within ranges rather than fixed constants.
      
      #### Exam execution tip
      When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p4-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In endocrine signaling and receptor responses, the observed pattern is: hormone lowering blood glucose by promoting uptake/storage. What term should anchor the explanation?',
            options: [
              'effector',
              'sensor',
              'insulin',
              'set point'
            ],
            correctAnswer: 2,
            explanation: 'Use insulin because it directly maps to the described biological pattern: hormone lowering blood glucose by promoting uptake/storage.'
          },
          {
            question: 'In an AP-style free-response about hormonal regulation, the observed pattern is: hormone raising blood glucose by mobilizing reserves. What term should anchor the explanation?',
            options: [
              'insulin',
              'effector',
              'glucagon',
              'thermoregulation'
            ],
            correctAnswer: 2,
            explanation: 'Use glucagon because it directly maps to the described biological pattern: hormone raising blood glucose by mobilizing reserves.'
          }
        ]
      }
    }
  ]
};
