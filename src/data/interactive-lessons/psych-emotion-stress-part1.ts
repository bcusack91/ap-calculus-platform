export const psychEmotionPart1Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot1-s1-intro',
      type: 'text' as const,
      content: `
## How Emotion Works

**Part 1 of 7 — Body, Mind, and the Order of Emotional Experience**

> 🔑 **Key Concept:** Emotion has a **physiological** side (what the body does) and a **cognitive** side (how we interpret what is happening). Theories of emotion disagree about the ORDER of the two: one after the other, both at once, or arousal that becomes an emotion only once it gets a cognitive label.

**Emotion**, or **affect**, is a complex psychological process that is distinct from reasoning or knowledge. Emotions reflect both internal factors (a pounding heart, a memory) and external factors (a growling dog, a friend's insult) affecting a person.

### The Two Components Early Theories Separated

| Component | What it involves | Example (fear on a dark street) |
|-----------|-----------------|----------------------------------|
| **Physiological** | Autonomic arousal: heart rate, breathing, sweating, muscle tension | Heart pounds, palms sweat |
| **Cognitive** | Appraising and labeling the situation and your own state | "That shadow could be someone following me. I'm scared." |

### Three Ways to Order the Components

Early 20th-century theories of emotion argued about how these two experiences relate. The AP exam asks you to recognize the **idea**, not to name the theory. Named emotion theories such as James-Lange are not tested on the current exam; know the sequences instead.

| Idea | Sequence | Seeing a bear on a trail |
|------|----------|--------------------------|
| **In succession, body first** | Stimulus → physiological arousal → the felt emotion | Your heart races, and noticing the racing heart is what makes you feel afraid |
| **Simultaneous** | Stimulus → arousal AND the felt emotion at the same time | Your heart races and you feel fear at the same instant; neither causes the other |
| **Cognitive label required** | Stimulus → arousal → a cognitive label that names it → emotion | Your heart races; you notice the bear and conclude, "I'm racing because of that bear: this is fear" |

Some accounts reverse the succession and put a quick cognitive appraisal ("that's dangerous") **before** the arousal. Either way, a succession view says one component comes first and triggers the other.
      `
    },
    {
      id: 'emot1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After nearly being hit by a car, Sam notices his heart pounding and palms sweating. He then thinks, "I must be terrified!" Which idea about emotion does this sequence best illustrate?',
            options: [
              'Arousal and the felt emotion occur together, so neither one causes the other',
              'Bodily arousal comes first and is then felt as an emotion',
              'A cognitive appraisal of danger occurs before any bodily change begins',
              'Emotion is a form of reasoning, so it does not involve the body at all'
            ],
            correctAnswer: 1,
            explanation: 'Sam\'s body reacted first, and noticing the pounding heart is what led him to feel terrified. That is the body-first succession view; in the simultaneous view, the arousal and the feeling would occur together.'
          },
          {
            question: 'Participants receive an injection that raises their heart rate. Those who wait with a cheerful stranger report feeling happy, and those who wait with an irritable stranger report feeling angry. These results best support the idea that:',
            options: [
              'Physiological arousal alone determines which emotion a person feels',
              'Emotions are fully learned, so arousal plays no role in what is felt',
              'The same arousal can become different emotions with different labels',
              'Arousal and emotion always occur together, whatever the setting'
            ],
            correctAnswer: 2,
            explanation: 'The arousal was the same in both groups; only the social context differed, and so did the emotion people reported. That supports the view that a cognitive label is required to turn arousal into a specific emotion.'
          }
        ]
      }
    },
    {
      id: 'emot1-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Weighing the Evidence

| Idea | Evidence that fits | Problem it faces |
|------|-------------------|------------------|
| **Body first** | Facial expressions and posture can nudge feelings (see the facial-feedback hypothesis in Part 2) | Many emotions share very similar arousal: how would the body alone tell fear from excitement? |
| **Simultaneous** | Emotions can arise very quickly, as fast as the body responds | Changing bodily states, such as slow breathing, can change the feeling, which suggests the body is not independent |
| **Cognitive label required** | The same arousal is reported as different emotions in different settings | People often know exactly why they are aroused, so there is no label to search for |

**Facial feedback and the debate:** The facial-feedback hypothesis says that facial expressions influence the experience of emotion. That supports theories proposing that the physiological experience of emotion **precedes** the cognitive appraisal. Research testing it has produced **mixed results**: some studies find small effects, and some large replications find none.

### Broaden-and-Build: What Emotions Do for Us

The **broaden-and-build theory** proposes that:

| Emotion type | Effect on thinking and action | Example |
|-------------|------------------------------|---------|
| **Positive emotions** (joy, interest, contentment) | **Broaden** awareness and encourage new thoughts and actions; over time this **builds** skills, relationships, and resources | A curious, happy student tries a new club and makes friends there |
| **Negative emotions** (fear, anger, anxiety) | **Narrow** thinking and action toward the immediate threat | An anxious student fixates on one hard question and stops scanning the test |

Narrowing is useful in danger: a person fleeing a fire should not be thinking creatively about the wallpaper. Broadening is useful when it is safe to explore.

### Applying the Ideas: The Misread Racing Heart

*Lena drinks three coffees, then walks into a job interview. Her heart races.*

- **Body first:** the racing heart itself is felt as nervousness.
- **Cognitive label required:** she searches for a reason, sees the stern interviewer, and labels the arousal as anxiety, though the coffee caused it.
- **Simultaneous:** seeing the interviewer triggers the racing heart and the nervous feeling at the same moment.

The facts are the same in each version; only the order of body and mind changes.
      `
    },
    {
      id: 'emot1-s4-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

Type one word for each blank.
      `,
      exercise: {
        questions: [
          {
            question: 'The bodily side of emotion, such as a racing heart and sweaty palms, is the _____ component.',
            answer: 'physiological',
            acceptableAnswers: ['physical', 'biological', 'bodily'],
            explanation: 'The physiological component is autonomic arousal, while the cognitive component is how we appraise and label it.'
          },
          {
            question: 'Theories in which arousal and the felt emotion happen at the same time describe them as occurring _____.',
            answer: 'simultaneously',
            acceptableAnswers: ['simultaneous', 'together', 'at once', 'at the same time'],
            explanation: 'Some theories proposed that the physiological and cognitive experiences occur in succession; others proposed that they occur simultaneously.'
          },
          {
            question: 'The theory that positive emotions widen awareness and encourage new thoughts and actions is the broaden-and-_____ theory.',
            answer: 'build',
            acceptableAnswers: ['builds', 'building'],
            explanation: 'Broaden-and-build theory says positive emotions broaden awareness and, over time, build resources, while negative emotions narrow thinking and action.'
          }
        ]
      }
    },
    {
      id: 'emot1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'You see a snake, and your heart races AND you feel fear at the same instant. This fits the _____ view',
            options: ['body-first', 'simultaneous', 'cognitive-label', 'broaden-and-build']
          },
          {
            label: 'Your heart races on a roller coaster, and you think, "This must be excitement!" This fits the view that emotion requires a _____',
            options: ['facial expression', 'cognitive label', 'display rule', 'positive mood']
          },
          {
            label: 'After a great morning, a worker eagerly volunteers for a new project she would usually avoid. This fits _____ theory',
            options: ['body-first', 'simultaneous', 'cognitive-label', 'broaden-and-build']
          }
        ],
        correctAnswers: ['simultaneous', 'cognitive label', 'broaden-and-build'],
        hint1: 'Arousal and feeling at the same moment.',
        hint2: 'Arousal plus an interpretation of what it means.',
        hint3: 'Positive emotion widens what a person is willing to try.',
        explanation: 'Arousal and fear at the same instant is the simultaneous view. Explaining arousal as "excitement" is applying a cognitive label. A good mood that leads to trying something new is the broadening effect of positive emotion.'
      }
    },
    {
      id: 'emot1-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

| Misconception | Correction |
|--------------|-----------|
| "I need to memorize which theorist said what." | The exam excludes the specific names of emotion theories. Know the sequences: succession, simultaneous, cognitive label required. |
| "The simultaneous view says the body doesn't matter." | The body still responds; it just does not CAUSE the feeling. |
| "Facial feedback proves the body-first view." | It supports physiology-before-appraisal, but research results are mixed. |
| "Negative emotions are useless." | They narrow attention toward a threat, which helps in an emergency. |
| "Emotion and reasoning are the same process." | Emotion (affect) is distinct from reasoning or knowledge, though appraisal links them. |

> 🔑 **AP Connection:** When a question describes an emotional episode, ask: **What came first, the body, the thought, or both at once? Was a label needed?** Then pick the answer that describes that sequence. If a study shows the same arousal producing different emotions in different settings, it supports the cognitive-label view.
      `
    },
    {
      id: 'emot1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers give caffeine to two groups. Group A is told it will make them jittery; Group B is told nothing about side effects. Group B later reports feeling more anxious. This finding is best explained by the idea that:',
            options: [
              'The caffeine\'s arousal was felt directly as anxiety in both groups',
              'Group B lacked a reason for its arousal and labeled it anxiety',
              'Arousal and anxiety occurred at the same moment only in Group B',
              'Group B appraised the study as threatening before any arousal began'
            ],
            correctAnswer: 1,
            explanation: 'Both groups had the same arousal, but only Group A had an explanation for it. Group B searched for a reason and labeled the arousal as anxiety, which supports the view that a cognitive label shapes the emotion.'
          },
          {
            question: 'A teacher notices that students who start class after a funny video brainstorm more varied ideas than students who start after a stressful quiz. Which concept best explains the difference?',
            options: [
              'Facial feedback: students smiled more, so they learned better',
              'Display rules: students hid their feelings in front of the class',
              'Broaden-and-build: positive emotion widened students\' thinking',
              'Simultaneous emotion: the video caused arousal and joy together'
            ],
            correctAnswer: 2,
            explanation: 'Broaden-and-build theory says positive emotions broaden awareness and encourage new thoughts, while negative emotions narrow thinking. The funny video produced positive emotion, and the stressful quiz produced negative emotion.'
          }
        ]
      }
    }
  ]
}
