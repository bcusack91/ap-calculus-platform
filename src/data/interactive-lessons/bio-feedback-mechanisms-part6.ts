export const bioFeedbackPart6Data = {
  topicSlug: 'feedback-mechanisms',
  sections: [
    {
      id: 'bio-feedback-mechanisms-p6-s1-intro',
      type: 'text' as const,
      content: `
      ## Feedback Mechanisms: Problem-Solving Workshop
      
      **Part 6 of 7**
      
      In this lesson, you will connect mechanism-level biology to exam-ready reasoning through feedback loop diagnosis from data tables.
      
      ### Worked biological example
      A student team investigates feedback loop diagnosis from data tables. Their first interpretation step is to identify how **effector** and **insulin** work together in the same pathway.
      
      - They classify the primary signal using **effector**: component that carries out corrective response.
      - They trace the downstream response using **insulin**: hormone lowering blood glucose by promoting uptake/storage.
      - They then compare outcomes with **glucagon** and **thermoregulation** to separate mechanism from correlation.
      
      ### Key terms for this part
      - **effector**
      - **insulin**
      - **glucagon**
      - **thermoregulation**
      `
    },
    {
      id: 'bio-feedback-mechanisms-p6-s2-mcq-core',
      type: 'multiple-choice' as const,
      content: `
      **Checkpoint MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'For Problem-Solving Workshop, what best describes effector?',
            options: [
              'hormone lowering blood glucose by promoting uptake/storage',
              'hormone raising blood glucose by mobilizing reserves',
              'component that carries out corrective response',
              'physiological control of body temperature'
            ],
            correctAnswer: 2,
            explanation: 'effector is best matched with: component that carries out corrective response.'
          },
          {
            question: 'In this part\'s context, what is the strongest definition of insulin?',
            options: [
              'hormone raising blood glucose by mobilizing reserves',
              'component that carries out corrective response',
              'hormone lowering blood glucose by promoting uptake/storage',
              'response amplifies the initial stimulus'
            ],
            correctAnswer: 2,
            explanation: 'insulin is best matched with: hormone lowering blood glucose by promoting uptake/storage.'
          }
        ]
      }
    },
    {
      id: 'bio-feedback-mechanisms-p6-s3-deep-dive',
      type: 'text' as const,
      content: `
      ### Deep-Dive Map: Problem-Solving Workshop
      
      Use this diagram-style summary to track causation and evidence.
      
      #### Flow logic
      - **Signal/Input** → effector
      - **Immediate processing** → insulin
      - **System-level consequence** → glucagon
      - **Measured readout** → thermoregulation
      
      #### Mechanism table
      | Component | Biological role | Typical evidence pattern |
      |---|---|---|
      | effector | component that carries out corrective response | Early shift in the primary variable |
      | insulin | hormone lowering blood glucose by promoting uptake/storage | Mid-pathway change in process rate |
      | glucagon | hormone raising blood glucose by mobilizing reserves | Downstream phenotype trend |
      | thermoregulation | physiological control of body temperature | Quantifiable endpoint in data summary |
      
      #### Reasoning checkpoints
      1. Name the mechanism before describing the trend line.
      2. Separate proximate mechanism from ecological or historical context.
      3. Verify that each claim is tied to a measurable biological readout.
      `
    },
    {
      id: 'bio-feedback-mechanisms-p6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Input Practice — concrete vocabulary retrieval**
      
      Fill in each blank with the exact biological term.
      
      1) Term for this definition: **component that carries out corrective response**
      2) Term for this definition: **hormone lowering blood glucose by promoting uptake/storage**
      3) Term for this definition: **hormone raising blood glucose by mobilizing reserves**
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['effector', 'insulin', 'glucagon'],
        hint1: 'Start with the first item: it is the mechanism term used when a process is described as \'component that carries out corrective response\'.',
        hint2: 'Second blank points to insulin; think about the role \'hormone lowering blood glucose by promoting uptake/storage\'.',
        hint3: 'Third blank is glucagon; connect it to \'hormone raising blood glucose by mobilizing reserves\'.',
        explanation: 'Correct set: effector, insulin, glucagon. These three terms define the core mechanism chain for Problem-Solving Workshop.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Dropdown matching (3 prompts)**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'effector',
            options: ['hormone raising blood glucose by mobilizing reserves', 'physiological control of body temperature', 'component that carries out corrective response', 'hormone lowering blood glucose by promoting uptake/storage']
          },
          {
            label: 'insulin',
            options: ['hormone raising blood glucose by mobilizing reserves', 'response amplifies the initial stimulus', 'hormone lowering blood glucose by promoting uptake/storage', 'physiological control of body temperature']
          },
          {
            label: 'glucagon',
            options: ['response counteracts change to restore set point', 'physiological control of body temperature', 'hormone raising blood glucose by mobilizing reserves', 'response amplifies the initial stimulus']
          }
        ],
        correctAnswers: ['component that carries out corrective response', 'hormone lowering blood glucose by promoting uptake/storage', 'hormone raising blood glucose by mobilizing reserves'],
        hint1: 'Match each term to the definition that captures mechanism, not just keywords.',
        hint2: 'If two definitions feel close, choose the one with the exact process direction.',
        hint3: 'Read each label out loud, then pick the option that completes a causal sentence.',
        explanation: 'effector, insulin, and glucagon should map to their exact mechanistic definitions. When options look similar, anchor your choice to process direction and biological scale.'
      }
    },
    {
      id: 'bio-feedback-mechanisms-p6-s6-strategy',
      type: 'text' as const,
      content: `
      ### ACT/AP strategy and misconception repair
      
      On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.
      
      #### Strategy sequence
      1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
      2. **Use a causation sentence**: "Because effector component that carries out corrective response, we expect ...".
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
      id: 'bio-feedback-mechanisms-p6-s7-mcq-final',
      type: 'multiple-choice' as const,
      content: `
      **Final application MCQ (2 questions)**
      `,
      exercise: {
        questions: [
          {
            question: 'In feedback loop diagnosis from data tables, the observed pattern is: physiological control of body temperature. What term should anchor the explanation?',
            options: [
              'glucagon',
              'effector',
              'thermoregulation',
              'insulin'
            ],
            correctAnswer: 2,
            explanation: 'Use thermoregulation because it directly maps to the described biological pattern: physiological control of body temperature.'
          },
          {
            question: 'In an AP-style free-response about problem-solving workshop, the observed pattern is: response amplifies the initial stimulus. What term should anchor the explanation?',
            options: [
              'negative feedback',
              'thermoregulation',
              'glucagon',
              'positive feedback'
            ],
            correctAnswer: 3,
            explanation: 'Use positive feedback because it directly maps to the described biological pattern: response amplifies the initial stimulus.'
          }
        ]
      }
    }
  ]
};
