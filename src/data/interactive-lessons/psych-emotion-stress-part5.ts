export const psychEmotionPart5Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot5-s1-intro',
      type: 'text' as const,
      content: `
## Coping Strategies

**Part 5 of 7 — Problem-Focused, Emotion-Focused & Social Support**

How people cope with stress determines its long-term impact on health. The AP exam tests two major coping categories, the role of perceived control, learned helplessness, and the protective power of social support.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Problem-focused coping** | Directly addressing the stressor itself — taking action to change the situation |
| **Emotion-focused coping** | Managing the emotional response to the stressor without changing the situation |
| **Social support** | The perception of being cared for, valued, and part of a network — acts as a stress buffer |
| **Perceived control** | The belief that you can influence events and outcomes — reduces stress even when actual control is limited |
| **Learned helplessness** | Seligman's concept: when organisms learn that they have no control, they give up even when escape is possible |
| **Explanatory style** | How you explain bad events: pessimistic (permanent, pervasive, personal) vs. optimistic (temporary, specific, external) |

### Coping Comparison

| Feature | Problem-focused | Emotion-focused |
|---------|----------------|-----------------|
| **Strategy** | Change the situation | Change how you feel about the situation |
| **Example** | Failing a test → make a study plan, get a tutor | Failing a test → talk to friends, exercise, practice relaxation |
| **When effective** | When the situation IS controllable | When the situation is NOT controllable or while waiting for change |
| **Connection** | Linked to higher perceived control | Useful but can become avoidance if overused |

### Real-World Example

A student diagnosed with test anxiety uses BOTH strategies: (1) problem-focused — she develops a structured study schedule and practices retrieval (changing the situation), AND (2) emotion-focused — she learns deep breathing techniques for test day (managing the emotional response). Effective coping often involves using both strategies together.
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
              'Emotion-focused coping — she is managing her feelings about the layoff',
              'Problem-focused coping — she is directly addressing the stressor by taking action to find new employment',
              'Learned helplessness — she is giving up on finding work',
              'Tend-and-befriend — she is seeking social support rather than addressing the problem'
            ],
            correctAnswer: 1,
            explanation: 'Problem-focused coping involves taking direct action to address or change the stressful situation. Carla is actively working to solve the problem (unemployment) by updating her resume, networking, and building new skills. She is changing the situation, not just managing her feelings about it.'
          },
          {
            question: 'In Seligman\'s learned helplessness experiments, dogs that had previously received inescapable shocks later failed to escape shocks even when escape was possible. This is because:',
            options: [
              'The dogs were physically injured and could not move',
              'The dogs learned that their actions had no effect on the outcome, so they stopped trying — even when the situation changed',
              'The dogs were conditioned to enjoy the shocks through classical conditioning',
              'The dogs forgot how to perform the escape behavior'
            ],
            correctAnswer: 1,
            explanation: 'Learned helplessness occurs when an organism learns that its actions have no effect on outcomes. The dogs that experienced inescapable shocks learned "nothing I do matters" — and this belief carried over even when escape became possible. Seligman later applied this to human depression: people who believe they have no control may develop helplessness and depression.'
          }
        ]
      }
    },
    {
      id: 'emot5-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Control, Helplessness & Social Support

#### Perceived Control and Health

| Study | Finding |
|-------|---------|
| **Nursing home study (Langer & Rodin)** | Elderly residents given control over small decisions (choosing movie night, caring for a plant) showed improved health, happiness, and LONGEVITY compared to those given no choices |
| **Workplace studies** | Workers with more autonomy and decision-making power report less stress, even with the same workload |
| **Crowding studies** | Perceived control over one's environment (e.g., access to a quiet room) reduces stress of crowding |

**Key insight:** It's the PERCEPTION of control that matters — even minor, symbolic control reduces stress dramatically.

#### Learned Helplessness → Depression

| Seligman's connection | How it works |
|----------------------|--------------|
| **Animal model** | Dogs given inescapable shocks → passivity in future escapable situations |
| **Human parallel** | Repeated failure/lack of control → belief "nothing I do matters" → depression, passivity, low motivation |
| **Explanatory style** | Pessimistic style ("bad things are permanent, pervasive, personal") predicts depression; optimistic style ("temporary, specific, external") protects against it |

#### Social Support as a Stress Buffer

| Type of social support | Example |
|-----------------------|---------|
| **Emotional support** | A friend listens and validates your feelings |
| **Informational support** | A mentor gives you advice on handling a situation |
| **Tangible support** | A neighbor brings meals after surgery |
| **Companionship** | Friends invite you out to prevent isolation |

**Research finding:** Social support doesn't eliminate the stressor — it BUFFERS its impact. People with strong social networks show lower cortisol levels, better immune function, and faster recovery from illness.
      `
    },
    {
      id: 'emot5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) Coping that directly addresses the stressor by changing the situation is called ___-focused coping. (one word)

      2) Seligman's concept where organisms stop trying after learning they have no control is called learned ___. (one word)

      3) Elderly residents given small decisions (plant care, movie choice) showed improved health due to increased perceived ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['problem', 'helplessness', 'control'],
        hint1: 'Addressing the problem directly = ___-focused',
        hint2: 'They learned to feel ___ — like nothing they do matters',
        hint3: 'The Langer & Rodin nursing home study: having ___ over decisions improved outcomes',
        explanation: 'Expected answers: problem (problem-focused coping = direct action to change the situation), helplessness (learned helplessness = giving up after learning actions don\'t affect outcomes), and control (perceived control — the Langer & Rodin study showed that even small amounts of control improve health outcomes).'
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
            label: 'After a breakup, Maya journals about her feelings and practices meditation. This is ___ coping',
            options: ['problem-focused', 'emotion-focused', 'avoidance-focused']
          },
          {
            label: 'A person who explains bad events as "This always happens to me and it\'s my fault" has a ___ explanatory style',
            options: ['optimistic', 'pessimistic', 'realistic', 'neutral']
          },
          {
            label: 'A friend bringing meals to someone recovering from surgery is providing ___ support',
            options: ['emotional', 'informational', 'tangible', 'companionship']
          }
        ],
        correctAnswers: ['emotion-focused', 'pessimistic', 'tangible'],
        hint1: 'Managing feelings (not changing the situation) = emotion-focused.',
        hint2: 'Permanent + pervasive + personal = pessimistic.',
        hint3: 'Physical, concrete help (meals, money, transportation) = tangible.',
        explanation: 'Journaling and meditation manage the emotional response = emotion-focused coping. "Always happens, my fault" = pessimistic explanatory style (permanent, personal, pervasive). Bringing meals = tangible support (concrete, physical assistance).'
      }
    },
    {
      id: 'emot5-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Problem-focused is always better than emotion-focused"** — Problem-focused works when the situation IS controllable. When it's NOT controllable (terminal illness, natural disaster), emotion-focused coping is more adaptive. Both have their place.
- **"Learned helplessness = laziness"** — Learned helplessness is a conditioned response from repeated experience of uncontrollable events, not a character flaw. Seligman drew direct parallels to clinical depression.
- **"Social support prevents stress"** — Social support doesn't prevent stressors from occurring — it BUFFERS their impact. People with support still experience stress, but they cope better and recover faster.
- **"More control = less stress always"** — Too much control or responsibility can INCREASE stress. The benefit comes from PERCEIVED control appropriate to the situation.

### AP Strategy Moves
- **Problem-focused vs. emotion-focused is a high-frequency AP question.** Read scenarios carefully: is the person changing the situation (problem-focused) or managing their emotional response (emotion-focused)?
- **Learned helplessness connects to depression.** The AP exam may ask you to connect Seligman's animal research to human depression — the explanatory style (pessimistic vs. optimistic) is the bridge.
- **The Langer & Rodin nursing home study** is a classic AP study. Know it: small decisions → perceived control → improved health and longevity.
- **Explanatory style framework:** Pessimistic = permanent ("always"), pervasive ("everything"), personal ("my fault"). Optimistic = temporary, specific, external.
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
            question: 'A patient with a terminal illness can no longer work toward a cure. Her therapist encourages her to focus on spending meaningful time with loved ones, practicing mindfulness, and writing letters to her grandchildren. The therapist is primarily promoting:',
            options: [
              'Problem-focused coping — she is addressing the medical situation directly',
              'Emotion-focused coping — since the stressor (the illness) cannot be changed, the focus is on managing the emotional experience and finding meaning',
              'Learned helplessness — the therapist is encouraging the patient to give up',
              'Denial — the therapist is helping the patient avoid thinking about death'
            ],
            correctAnswer: 1,
            explanation: 'When a stressor is uncontrollable (a terminal illness that cannot be cured), emotion-focused coping is the most adaptive approach. The therapist is helping the patient find meaning, connect with loved ones, and manage her emotional response to the situation. This is NOT giving up — it\'s wisely directing energy toward what CAN be influenced (emotional well-being) rather than what cannot (the disease).'
          },
          {
            question: 'A researcher studies two groups of students with the same GPA. Group A attributes poor grades to "I\'m just not smart enough" (permanent, personal). Group B attributes poor grades to "I didn\'t study enough this time" (temporary, specific). The researcher would predict that:',
            options: [
              'Both groups will respond identically to future academic challenges',
              'Group A (pessimistic explanatory style) is more likely to develop learned helplessness and depression, while Group B (optimistic explanatory style) is more likely to persist and improve',
              'Group B will develop learned helplessness because they blame external factors',
              'Explanatory style has no measurable effect on academic outcomes'
            ],
            correctAnswer: 1,
            explanation: 'Seligman\'s explanatory style research directly predicts this: Group A\'s pessimistic style (permanent: "just not smart," personal: "me") leads to helplessness and depression. Group B\'s optimistic style (temporary: "this time," specific: "didn\'t study enough") preserves motivation and effort. This is the foundation of Seligman\'s later work on "learned optimism" — the idea that explanatory style can be changed through intervention.'
          }
        ]
      }
    }
  ]
}
