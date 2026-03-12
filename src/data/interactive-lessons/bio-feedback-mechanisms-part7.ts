export const bioFeedbackPart7Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p7-s1-intro',
      type: 'text' as const,
      content: `
      ## Feedback Mechanisms: AP Review
      
      **Part 7 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through AP free-response control-system synthesis.
      
      ### Worked biological example
      A student team investigates AP free-response control-system synthesis. Their first interpretation step is to identify how **insulin** and **glucagon** work together in the same pathway.
      
      - They classify the primary signal using **insulin**: hormone lowering blood glucose by promoting uptake/storage.
      - They trace the downstream response using **glucagon**: hormone raising blood glucose by mobilizing reserves.
      - They then compare outcomes with **thermoregulation** and **positive feedback** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **insulin**
      - **glucagon**
      - **thermoregulation**
      - **positive feedback**
      `
    },
    {
      id: 'bio-feedback-mechanisms-p7-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For AP Review, what best describes insulin?',
            options: [
              'response amplifies the initial stimulus',
              'physiological control of body temperature',
              'hormone raising blood glucose by mobilizing reserves',
              'hormone lowering blood glucose by promoting uptake/storage'
            ],
            correctAnswer: 3,
            explanation: 'insulin is best matched with: hormone lowering blood glucose by promoting uptake/storage.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of glucagon?',
            options: [
              'hormone lowering blood glucose by promoting uptake/storage',
              'physiological control of body temperature',
              'hormone raising blood glucose by mobilizing reserves',
              'response counteracts change to restore set point'
            ],
            correctAnswer: 2,
            explanation: 'glucagon is best matched with: hormone raising blood glucose by mobilizing reserves.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p7-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: AP Review
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → insulin
      - **Immediate processing** → glucagon
      - **System-level consequence** → thermoregulation
      - **Measured readout** → positive feedback
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | insulin | hormone lowering blood glucose by promoting uptake/storage | Early shift in the primary variable |
      | glucagon | hormone raising blood glucose by mobilizing reserves | Mid-pathway change in process rate |
      | thermoregulation | physiological control of body temperature | Downstream phenotype trend |
      | positive feedback | response amplifies the initial stimulus | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **hormone lowering blood glucose by promoting uptake/storage**
      2) Term for this definition: **hormone raising blood glucose by mobilizing reserves**
      3) Term for this definition: **physiological control of body temperature**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['insulin', 'glucagon', 'thermoregulation'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'hormone lowering blood glucose by promoting uptake/storage\'.',
        hint2: 'Second blank points to glucagon; think about the role \'hormone raising blood glucose by mobilizing reserves\'.',
        hint3: 'Third blank is thermoregulation; connect it to \'physiological control of body temperature\'.',
        explanation: 'Correct set: insulin, glucagon, thermoregulation. These three terms define the core mechanism chain for AP Review.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'insulin',
            options: ['response amplifies the initial stimulus', 'physiological control of body temperature', 'hormone raising blood glucose by mobilizing reserves', 'hormone lowering blood glucose by promoting uptake/storage']
          },
          {
            label: 'glucagon',
            options: ['physiological control of body temperature', 'response amplifies the initial stimulus', 'response counteracts change to restore set point', 'hormone raising blood glucose by mobilizing reserves']
          },
          {
            label: 'thermoregulation',
            options: ['physiological control of body temperature', 'response counteracts change to restore set point', 'dynamic maintenance of internal stability', 'response amplifies the initial stimulus']
          }
        ],
        correctAnswers: ['hormone lowering blood glucose by promoting uptake/storage', 'hormone raising blood glucose by mobilizing reserves', 'physiological control of body temperature'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'insulin, glucagon, and thermoregulation should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p7-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because insulin hormone lowering blood glucose by promoting uptake/storage, we expect ...".
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
      id: 'bio-feedback-mechanisms-p7-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In AP free-response control-system synthesis, the observed pattern is: response amplifies the initial stimulus. What term should anchor the explanation?',
            options: [
              'thermoregulation',
              'glucagon',
              'insulin',
              'positive feedback'
            ],
            correctAnswer: 3,
            explanation: 'Use positive feedback because it directly maps to the described biological pattern: response amplifies the initial stimulus.'
          },
          {
            question: 'In an AP-style free-response about ap review, the observed pattern is: response counteracts change to restore set point. What term should anchor the explanation?',
            options: [
              'negative feedback',
              'positive feedback',
              'homeostasis',
              'thermoregulation'
            ],
            correctAnswer: 0,
            explanation: 'Use negative feedback because it directly maps to the described biological pattern: response counteracts change to restore set point.'
          }
        ]
      }
    }
  ]
};
