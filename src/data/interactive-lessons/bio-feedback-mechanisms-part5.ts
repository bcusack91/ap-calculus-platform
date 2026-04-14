export const bioFeedbackPart5Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p5-s1-intro',
      type: 'text' as const,
      content: `
      ## Feedback Mechanisms: Thermoregulation
      
      **Part 5 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through temperature regulation under heat stress.
      
      ### Worked biological example
      A student team investigates temperature regulation under heat stress. Their first interpretation step is to identify how **sensor** and **effector** work together in the same pathway.
      
      - They classify the primary signal using **sensor**: component that detects a change in a regulated variable.
      - They trace the downstream response using **effector**: component that carries out corrective response.
      - They then compare outcomes with **insulin** and **glucagon** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **sensor**
      - **effector**
      - **insulin**
      - **glucagon**
      `
    },
    {
      id: 'bio-feedback-mechanisms-p5-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Thermoregulation, what best describes sensor?',
            options: [
              'hormone raising blood glucose by mobilizing reserves',
              'component that detects a change in a regulated variable',
              'component that carries out corrective response',
              'hormone lowering blood glucose by promoting uptake/storage'
            ],
            correctAnswer: 1,
            explanation: 'sensor is best matched with: component that detects a change in a regulated variable.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of effector?',
            options: [
              'physiological control of body temperature',
              'hormone lowering blood glucose by promoting uptake/storage',
              'component that carries out corrective response',
              'component that detects a change in a regulated variable'
            ],
            correctAnswer: 2,
            explanation: 'effector is best matched with: component that carries out corrective response.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p5-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Thermoregulation
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → sensor
      - **Immediate processing** → effector
      - **System-level consequence** → insulin
      - **Measured readout** → glucagon
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | sensor | component that detects a change in a regulated variable | Early shift in the primary variable |
      | effector | component that carries out corrective response | Mid-pathway change in process rate |
      | insulin | hormone lowering blood glucose by promoting uptake/storage | Downstream phenotype trend |
      | glucagon | hormone raising blood glucose by mobilizing reserves | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **component that detects a change in a regulated variable**

      2) Term for this definition: **component that carries out corrective response**

      3) Term for this definition: **hormone lowering blood glucose by promoting uptake/storage**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sensor', 'effector', 'insulin'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'component that detects a change in a regulated variable\'.',
        hint2: 'Second blank points to effector; think about the role \'component that carries out corrective response\'.',
        hint3: 'Third blank is insulin; connect it to \'hormone lowering blood glucose by promoting uptake/storage\'.',
        explanation: 'Correct set: sensor, effector, insulin. These three terms define the core mechanism chain for Thermoregulation.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'sensor',
            options: ['component that detects a change in a regulated variable', 'hormone lowering blood glucose by promoting uptake/storage', 'hormone raising blood glucose by mobilizing reserves', 'component that carries out corrective response']
          },
          {
            label: 'effector',
            options: ['hormone raising blood glucose by mobilizing reserves', 'physiological control of body temperature', 'hormone lowering blood glucose by promoting uptake/storage', 'component that carries out corrective response']
          },
          {
            label: 'insulin',
            options: ['response amplifies the initial stimulus', 'hormone raising blood glucose by mobilizing reserves', 'hormone lowering blood glucose by promoting uptake/storage', 'physiological control of body temperature']
          }
        ],
        correctAnswers: ['component that detects a change in a regulated variable', 'component that carries out corrective response', 'hormone lowering blood glucose by promoting uptake/storage'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'sensor, effector, and insulin should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p5-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because sensor component that detects a change in a regulated variable, we expect ...".
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
      id: 'bio-feedback-mechanisms-p5-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In temperature regulation under heat stress, the observed pattern is: hormone raising blood glucose by mobilizing reserves. What term should anchor the explanation?',
            options: [
              'insulin',
              'sensor',
              'glucagon',
              'effector'
            ],
            correctAnswer: 2,
            explanation: 'Use glucagon because it directly maps to the described biological pattern: hormone raising blood glucose by mobilizing reserves.'
          },
          {
            question: 'In an AP-style free-response about thermoregulation, the observed pattern is: physiological control of body temperature. What term should anchor the explanation?',
            options: [
              'positive feedback',
              'glucagon',
              'insulin',
              'thermoregulation'
            ],
            correctAnswer: 3,
            explanation: 'Use thermoregulation because it directly maps to the described biological pattern: physiological control of body temperature.'
          }
        ]
      }
    }
  ]
};
