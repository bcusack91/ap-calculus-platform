export const psychEmotionPart2Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot2-s1-intro',
      type: 'text' as const,
      content: `
## Components of Emotion

**Part 2 of 7 — Physiology, Behavior & Cognition**

Every emotional experience has three components. The AP exam tests whether you can identify which component is present in a scenario.

### The Three Components

| Component | What it involves | Example (fear) |
|-----------|-----------------|----------------|
| **Physiological** | Autonomic nervous system activation — heart rate, sweating, pupil dilation, hormone release | Heart pounds, palms sweat, adrenaline surges |
| **Behavioral (expressive)** | Facial expressions, body language, vocal tone, gestures | Eyes widen, mouth opens, body tenses, voice rises |
| **Cognitive (subjective)** | Conscious interpretation, appraisal, and labeling of the experience | "I'm scared" — the mental awareness and interpretation |

### Ekman's Universal Emotions

Paul Ekman identified **six basic emotions** expressed through universally recognized facial expressions across all cultures:

| Emotion | Universal expression | Cross-cultural? |
|---------|---------------------|----------------|
| **Happiness** | Duchenne smile (activates both mouth AND eyes) | ✅ Yes |
| **Sadness** | Corners of mouth down, inner brow raised | ✅ Yes |
| **Fear** | Eyes wide, mouth open, brows raised | ✅ Yes |
| **Anger** | Brows lowered, lips pressed, jaw tightened | ✅ Yes |
| **Disgust** | Nose wrinkled, upper lip raised | ✅ Yes |
| **Surprise** | Eyebrows raised, mouth open (briefly) | ✅ Yes |

### Real-World Example

A student receives an A+ on a test she studied hard for. The physiological component: her heart rate increases slightly. The behavioral component: she smiles broadly and pumps her fist. The cognitive component: she thinks, "I'm so happy — all my work paid off!" All three components contribute to the full emotional experience.
      `
    },
    {
      id: 'emot2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher measures participants\' galvanic skin response (sweat-based conductivity) while they watch emotional film clips. The researcher is specifically studying which component of emotion?',
            options: [
              'The cognitive component — how participants interpret the film',
              'The behavioral/expressive component — facial reactions to the film',
              'The physiological component — autonomic nervous system responses',
              'The social component — how participants discuss the film with others'
            ],
            correctAnswer: 2,
            explanation: 'Galvanic skin response measures sweat gland activity — a pure physiological response controlled by the autonomic nervous system. This is the physiological component of emotion: the body\'s automatic, measurable reactions (heart rate, sweating, pupil dilation, cortisol levels).'
          },
          {
            question: 'Paul Ekman\'s cross-cultural research on facial expressions demonstrated that:',
            options: [
              'Each culture has completely unique emotional expressions with no overlap',
              'Six basic emotions (happiness, sadness, fear, anger, disgust, surprise) are expressed through universally recognized facial expressions across cultures',
              'Only Western cultures display recognizable emotional expressions',
              'Facial expressions are entirely learned and vary completely by culture'
            ],
            correctAnswer: 1,
            explanation: 'Ekman\'s research — including studies with isolated tribes in Papua New Guinea who had no exposure to Western media — demonstrated that six basic emotions are expressed and recognized universally. This is strong evidence that some emotional expressions are innate (biological), not entirely learned.'
          }
        ]
      }
    },
    {
      id: 'emot2-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Facial Feedback Hypothesis & Display Rules

#### The Facial Feedback Hypothesis

The facial feedback hypothesis proposes that facial expressions can actually INFLUENCE our emotional experience — not just reflect it.

| Study/finding | What happened |
|--------------|---------------|
| **Strack's pen study** | Participants who held a pen in their teeth (forcing a smile) rated cartoons as funnier than those who held the pen with their lips (forcing a frown) |
| **Botox research** | People who received Botox (reducing ability to frown) reported feeling LESS negative emotion — their inability to make the expression reduced the emotion |
| **Implication** | Supports James-Lange theory: bodily states (including facial expressions) can CAUSE emotional feelings |

#### Display Rules

While basic emotions may be universal, **display rules** are culturally learned norms about WHEN, WHERE, and HOW it's appropriate to express emotions.

| Culture | Display rule |
|---------|-------------|
| **American** | "Boys don't cry" — males often suppress sadness |
| **Japanese** | Public displays of negative emotion are minimized; smiling used to mask discomfort |
| **Mediterranean** | More open display of grief, with loud mourning at funerals |
| **British** | "Stiff upper lip" — emotional restraint valued publicly |

#### Key Distinction: Emotion vs. Expression

- **Emotion** is the internal experience (potentially universal)
- **Expression** is the outward display (shaped by display rules)
- A person can feel intense grief but display a calm exterior if display rules demand it
- This means expression is NOT always a reliable indicator of emotion
      `
    },
    {
      id: 'emot2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) The researcher who identified six universal basic emotions through cross-cultural facial expression studies was ___. (last name)

      2) Culturally learned norms about when and how to express emotions are called ___ rules. (one word)

      3) The hypothesis that facial expressions can actually influence our emotional experience (not just reflect it) is the facial ___ hypothesis. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Ekman', 'display', 'feedback'],
        hint1: 'Six universal emotions — his research included isolated cultures',
        hint2: 'These rules "display" when emotions should or shouldn\'t be shown',
        hint3: 'Your face gives "feedback" to your brain about what you\'re feeling',
        explanation: 'Expected answers: Ekman (identified six universal emotions through cross-cultural research), display (culturally learned rules governing emotional expression — when, where, and how to show emotions), and feedback (the facial feedback hypothesis — facial expressions can influence the emotion we feel, not just reflect it).'
      }
    },
    {
      id: 'emot2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A student\'s heart races and palms sweat during a test — this is the ___ component of emotion',
            options: ['physiological', 'behavioral', 'cognitive']
          },
          {
            label: 'A genuine smile that activates the muscles around both the mouth AND the eyes is called a ___ smile',
            options: ['forced', 'social', 'Duchenne', 'display']
          },
          {
            label: 'In Japan, smiling when receiving bad news (to avoid burdening others) is an example of a ___',
            options: ['universal emotion', 'facial feedback response', 'display rule', 'cognitive appraisal']
          }
        ],
        correctAnswers: ['physiological', 'Duchenne', 'display rule'],
        hint1: 'Heart rate and sweating = autonomic nervous system = physiological.',
        hint2: 'Named after a French neurologist who studied genuine vs. fake smiles.',
        hint3: 'Cultural norms for expressing emotions = display rules.',
        explanation: 'Heart racing and sweating = physiological (autonomic nervous system). A genuine smile engaging the eye muscles = Duchenne smile (vs. a social/polite smile that only uses the mouth). Culturally masking emotions = display rule (Japanese cultural norm of minimizing public negative emotion).'
      }
    },
    {
      id: 'emot2-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Ekman's six emotions are the ONLY emotions"** — Ekman identified six BASIC emotions with universal facial expressions. There are many more emotions (jealousy, pride, guilt, shame) — they just don't have universally recognized facial expressions.
- **"Display rules mean emotions are fake"** — No. Display rules affect the EXPRESSION, not the EXPERIENCE. A person following a display rule still feels the emotion internally.
- **"Facial feedback = Schachter-Singer"** — Facial feedback supports JAMES-LANGE (body → emotion). Schachter-Singer requires a cognitive label. Don't confuse them.
- **"All smiles are genuine"** — Duchenne smiles (eyes + mouth) indicate genuine happiness. Social/polite smiles use only the mouth.

### AP Strategy Moves
- If a question asks about measuring emotion PHYSIOLOGICALLY → galvanic skin response, heart rate, fMRI, cortisol levels.
- If a question asks about universal aspects of emotion → Ekman's six basic emotions and their facial expressions.
- If a question describes cultural variation in emotional expression → display rules.
- **The three components (physiological, behavioral, cognitive) appear frequently in free-response questions.** You'll be asked to identify which component is illustrated in a scenario.
- Remember: expression ≠ experience. A calm-looking person may be intensely emotional but following display rules.
      `
    },
    {
      id: 'emot2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers show photographs of facial expressions to both American college students and members of an isolated tribe in Papua New Guinea. Both groups identify the same emotions from the same faces. This finding most strongly supports:',
            options: [
              'Display rules — both cultures have learned the same emotional norms',
              'The cognitive appraisal theory — both groups are interpreting the faces intellectually',
              'Ekman\'s theory that basic emotional expressions are universal and likely innate, not entirely learned',
              'The James-Lange theory — both groups experience the same physiological responses'
            ],
            correctAnswer: 2,
            explanation: 'This is the exact design of Ekman\'s classic cross-cultural research. If an isolated group with no Western media exposure can recognize the same emotions from the same expressions, those expressions must be biologically innate — not culturally learned. This supports the universality of basic emotional expressions.'
          },
          {
            question: 'A therapist tells an anxious patient, "Even though you feel nervous, try putting on a slight smile for the next few minutes." The therapist is applying which concept?',
            options: [
              'Display rules — teaching the patient cultural norms for expression',
              'The facial feedback hypothesis — changing the facial expression may reduce the negative emotional experience',
              'Schachter-Singer theory — relabeling the patient\'s arousal',
              'Cannon-Bard theory — expression and emotion are independent'
            ],
            correctAnswer: 1,
            explanation: 'The therapist is using the facial feedback hypothesis: by changing the physical expression (smiling), the patient\'s brain may receive feedback that reduces the anxious feeling. This is actually used in some therapeutic approaches — forcing a different facial expression can modestly shift the emotional experience.'
          }
        ]
      }
    }
  ]
}
