export const psychEmotionPart5Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot5-s1-intro',
      type: 'text' as const,
      content: `
## Coping and Positive Psychology

**Part 5 of 7 — Coping, Control, and Positive Psychology**

> 🔑 **Key Concept:** **Problem-focused coping** treats stress as a problem to solve; **emotion-focused coping** manages the emotional reaction. **Positive psychology** studies what leads to well-being, resilience, and psychological health, such as gratitude, signature strengths, and posttraumatic growth.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Problem-focused coping** | Seeing stress as a problem to be solved and working through solutions until one works |
| **Emotion-focused coping** | Managing emotional reactions to stress, for example with deep breathing, meditation, or medication that reduces stressful emotional responses |
| **Learned helplessness** | Learning that you have no control over aversive events, and then giving up even when control is possible |
| **Locus of control** | Whether you believe outcomes depend on your own actions (internal) or on luck and outside forces (external) |
| **Explanatory style** | How a person explains good and bad events; it can be optimistic or pessimistic |
| **Positive psychology** | The study of factors that lead to well-being, resilience, positive emotions, and psychological health |

### Coping Comparison

| Feature | Problem-focused | Emotion-focused |
|---------|----------------|-----------------|
| **Strategy** | Change the situation | Change how you feel about the situation |
| **Example** | Failing a test → make a study plan, get a tutor | Failing a test → deep breathing, meditation, talking it through |
| **When effective** | When the situation IS controllable | When the situation is NOT controllable, or while waiting for change |

### Real-World Example

A student with test anxiety uses BOTH strategies: (1) problem-focused, she builds a study schedule and practices retrieval, changing the situation; and (2) emotion-focused, she practices deep breathing on test day, managing the emotional response. Effective coping often combines the two.
      `
    },
    {
      id: 'emot5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After being laid off from her job, Carla immediately updates her resume, networks with former colleagues, and enrolls in a skills workshop. This is an example of:',
            options: [
              'Emotion-focused coping, managing her feelings about the layoff',
              'Problem-focused coping, acting directly to change the stressor',
              'Learned helplessness, no longer expecting her efforts to work',
              'Tend-and-befriend, seeking comfort instead of solving the problem'
            ],
            correctAnswer: 1,
            explanation: 'Problem-focused coping treats stress as a problem to be solved. Carla is working on solutions to unemployment, not just managing her feelings about it.'
          },
          {
            question: 'In learned helplessness experiments, dogs that had previously received inescapable shocks later failed to escape shocks even when escape was possible. Why?',
            options: [
              'The earlier shocks had injured them, so they could not move well',
              'They expected that nothing they did would change the outcome',
              'They had been conditioned to associate the box with safety',
              'They had forgotten the escape response during the long delay'
            ],
            correctAnswer: 1,
            explanation: 'Learned helplessness occurs when organisms learn that they have no control over aversive events. The dogs learned that their actions did not matter and stopped trying, even when escape became possible.'
          }
        ]
      }
    },
    {
      id: 'emot5-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Control, Helplessness & Positive Psychology

#### Control and Stress

| Concept | How it affects stress |
|---------|----------------------|
| **Internal locus of control** | Believing your actions matter encourages problem-focused coping and is linked to lower stress |
| **External locus of control** | Believing outcomes depend on luck or others can lead to passivity |
| **Learned helplessness** | Repeated lack of control → "nothing I do matters" → passivity and low motivation, a pattern linked to depression |
| **Explanatory style** | A pessimistic style ("this will always happen, and it's my fault") is linked to helplessness and depression; an optimistic style ("this was a bad day") protects motivation |

In one classic study, nursing-home residents given small choices, such as caring for a plant, became more active and happier than residents whose choices were made for them. A sense of control, even over small things, reduces stress.

#### Positive Psychology

Positive psychology seeks to identify the factors that lead to well-being, resilience, positive emotions, and psychological health, rather than focusing only on illness.

| Concept | What the research says | Example |
|---------|----------------------|---------|
| **Gratitude** | Expressing gratitude, a positive subjective experience, increases subjective well-being | Writing three good things each night or a thank-you letter |
| **Signature strengths** | People who exercise their signature strengths or virtues report more happiness and subjective well-being | A student strong in kindness tutors younger kids |
| **Posttraumatic growth** | Positive change that may result after trauma or stress, such as deeper relationships or a new sense of purpose | A survivor of a serious illness reorders her priorities around family |

#### The Six Virtue Categories

A classification of character strengths has been built around **six categories of virtues**:

| Virtue | Example strengths |
|--------|------------------|
| **Wisdom** | Curiosity, creativity, love of learning |
| **Courage** | Bravery, persistence, honesty |
| **Humanity** | Kindness, love, social intelligence |
| **Justice** | Fairness, teamwork, leadership |
| **Temperance** | Self-control, forgiveness, humility |
| **Transcendence** | Gratitude, hope, humor, appreciation of beauty |
      `
    },
    {
      id: 'emot5-s4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Type one word for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'Coping that treats stress as a problem to be solved by changing the situation is called _____-focused coping.',
            answer: 'problem',
            acceptableAnswers: ['problem-focused', 'problem focused'],
            explanation: 'Problem-focused coping works on solutions until one is found; emotion-focused coping manages the emotional reaction.'
          },
          {
            question: 'Believing that outcomes depend on your own actions reflects an _____ locus of control.',
            answer: 'internal',
            acceptableAnswers: ['internal locus'],
            explanation: 'An internal locus of control is the belief that your actions shape outcomes; an external locus credits luck or outside forces.'
          },
          {
            question: 'Positive change that may follow trauma or stress, such as a new sense of purpose, is called posttraumatic _____.',
            answer: 'growth',
            acceptableAnswers: ['growing'],
            explanation: 'Posttraumatic growth is a positive subjective experience that may result after the experience of trauma or stress.'
          }
        ]
      }
    },
    {
      id: 'emot5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'After a breakup, Maya meditates and practices slow breathing each evening. This is _____ coping',
            options: ['problem-focused', 'emotion-focused', 'helpless', 'external']
          },
          {
            label: 'A person who explains bad events as "This always happens to me, and it\'s my fault" has a _____ explanatory style',
            options: ['optimistic', 'pessimistic', 'realistic', 'neutral']
          },
          {
            label: 'Persistence, bravery, and honesty belong to the virtue category of _____',
            options: ['wisdom', 'courage', 'temperance', 'transcendence']
          }
        ],
        correctAnswers: ['emotion-focused', 'pessimistic', 'courage'],
        hint1: 'Managing feelings rather than changing the situation.',
        hint2: 'Permanent and personal explanations for bad events.',
        hint3: 'Strengths for facing difficulty or danger.',
        explanation: 'Meditation and slow breathing manage the emotional response, so they are emotion-focused coping. "Always" and "my fault" mark a pessimistic explanatory style. Persistence, bravery, and honesty are strengths under courage.'
      }
    },
    {
      id: 'emot5-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

| Misconception | Correction |
|--------------|-----------|
| "Problem-focused coping is always better." | It works when the situation is controllable. When it is not, emotion-focused coping is often more adaptive. |
| "Emotion-focused coping means avoiding the problem." | It means managing the emotional reaction: deep breathing, meditation, or medication that reduces stressful emotional responses. |
| "Learned helplessness is laziness." | It is learned from repeated experience of uncontrollable events, not a character flaw. |
| "Positive psychology means ignoring problems." | It studies what builds well-being and resilience alongside, not instead of, the study of disorders. |
| "Trauma always leaves only damage." | Posttraumatic growth may follow trauma or stress for some people. |

> 🔑 **AP Connection:** Positive psychology research, such as gratitude studies, makes a good AAQ source. If participants are randomly assigned to a gratitude activity or a neutral activity, call it an **experiment**; the operational definition of well-being is usually a score on a well-being scale.
      `
    },
    {
      id: 'emot5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A patient with an incurable illness can no longer work toward a cure. Her therapist encourages her to practice meditation, spend meaningful time with loved ones, and write letters to her grandchildren. The therapist is mainly promoting:',
            options: [
              'Problem-focused coping, taking direct action against the illness',
              'Emotion-focused coping with a stressor she cannot change',
              'Learned helplessness, encouraging her to stop trying to get well',
              'An external locus of control, blaming outside forces for the illness'
            ],
            correctAnswer: 1,
            explanation: 'When a stressor cannot be changed, emotion-focused coping is the most adaptive choice. The therapist is helping the patient manage her emotional response rather than trying to fix the illness itself.'
          },
          {
            question: 'Students are randomly assigned to write either three things they are grateful for or three neutral events each night for two weeks. Which result would best fit the positive psychology research described in this part?',
            options: [
              'Both groups report the same well-being, since writing tasks never matter',
              'The neutral-events group reports higher well-being than the gratitude group',
              'The gratitude group reports higher subjective well-being than others',
              'Gratitude writers report more stress because they focus on what is missing'
            ],
            correctAnswer: 2,
            explanation: 'Expressing gratitude is a positive subjective experience that increases subjective well-being. Random assignment lets researchers attribute the difference to the gratitude activity.'
          }
        ]
      }
    }
  ]
}
