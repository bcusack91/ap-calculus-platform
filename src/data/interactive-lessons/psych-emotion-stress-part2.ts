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

### Are Some Emotional Expressions Universal?

Research, much of it by Paul Ekman, has explored whether the expression of emotions is universally common. Six emotions that may be commonly experienced and recognized across cultures are:

| Emotion | Typical facial expression |
|---------|--------------------------|
| **Happiness** | Smile that raises the cheeks and crinkles the eyes |
| **Sadness** | Corners of mouth down, inner brow raised |
| **Fear** | Eyes wide, mouth open, brows raised |
| **Anger** | Brows lowered, lips pressed, jaw tightened |
| **Disgust** | Nose wrinkled, upper lip raised |
| **Surprise** | Eyebrows raised, mouth open (briefly) |

Research on the universality of emotions shows **mixed results**: people across cultures recognize these expressions at rates well above chance, but accuracy is higher for faces from their own culture, and some studies find weaker agreement in remote communities.

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
            explanation: 'Galvanic skin response measures sweat gland activity — a pure physiological response controlled by the autonomic nervous system. This is the physiological component of emotion: the body\'s automatic, measurable reactions (heart rate, sweating, pupil dilation, blood pressure).'
          },
          {
            question: 'Paul Ekman\'s cross-cultural research on facial expressions demonstrated that:',
            options: [
              'Each culture has its own distinct emotional expressions, with little overlap between cultures',
              'Several basic emotions are expressed with facial expressions recognized across cultures',
              'Only people exposed to Western media can reliably recognize emotional facial expressions',
              'Facial expressions of emotion are entirely learned through each culture\'s own display rules'
            ],
            correctAnswer: 1,
            explanation: 'Ekman\'s research, including studies with isolated communities in Papua New Guinea who had little exposure to Western media, found that several basic expressions were recognized across cultures. This suggests some expressions are biologically based, although later research on universality has produced mixed results.'
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
| **Large replication** | A 2016 replication of the pen study across 17 labs found no reliable effect, while later reviews report small effects |
| **Implication** | Supports theories in which the physiological experience of emotion comes BEFORE the cognitive appraisal, but the evidence is mixed |

#### Display Rules

While some expressions may be shared across cultures, **display rules** are learned norms about WHEN, WHERE, and HOW it's appropriate to express emotions. **Elicitors**, the situations that trigger an emotion, also differ: a gesture that insults in one culture may mean nothing in another.

Display rules and elicitors differ **among cultures** and also **within a culture**, where they can regulate how people of different **genders, ages, or socioeconomic classes** display and interpret emotions.

| Culture | Display rule |
|---------|-------------|
| **American** | "Boys don't cry" — males often suppress sadness |
| **Japanese** | Public displays of negative emotion are minimized; smiling used to mask discomfort |
| **Mediterranean** | More open display of grief, with loud mourning at funerals |
| **British** | "Stiff upper lip" — emotional restraint valued publicly |
| **Within one culture** | Adults may be expected to hide anger at work, while young children are allowed to cry openly in public |

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
            label: 'In some communities, boys are told not to cry in public while girls are not. This shows display rules can differ by ___',
            options: ['gender', 'age', 'social class', 'language']
          },
          {
            label: 'In Japan, smiling when receiving bad news (to avoid burdening others) is an example of a ___',
            options: ['universal emotion', 'facial feedback response', 'display rule', 'cognitive appraisal']
          }
        ],
        correctAnswers: ['physiological', 'gender', 'display rule'],
        hint1: 'Heart rate and sweating = autonomic nervous system = physiological.',
        hint2: 'The rule applies to boys but not to girls.',
        hint3: 'Cultural norms for expressing emotions = display rules.',
        explanation: 'Heart racing and sweating = physiological (autonomic nervous system). A rule that applies to boys but not girls shows display rules can differ by gender within a culture. Culturally masking emotions = display rule (Japanese cultural norm of minimizing public negative emotion).'
      }
    },
    {
      id: 'emot2-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Those six are the ONLY emotions"** — They are emotions that may be commonly recognized across cultures. There are many more emotions (jealousy, pride, guilt, shame) without widely shared facial expressions.
- **"Display rules mean emotions are fake"** — No. Display rules affect the EXPRESSION, not the EXPERIENCE. A person following a display rule still feels the emotion internally.
- **"Facial feedback shows that emotions need a cognitive label"** — Facial feedback supports the body-first sequence (expression → feeling). The cognitive-label view says arousal must be interpreted. Don't confuse them.
- **"Universal means identical everywhere"** — Research on universality shows mixed results; recognition is above chance across cultures but better within one's own culture.

### AP Strategy Moves
- If a question asks about measuring emotion PHYSIOLOGICALLY → galvanic skin response, heart rate, blood pressure, fMRI.
- If a question asks about universal aspects of emotion → anger, disgust, sadness, happiness, surprise, and fear, with the caveat that results are mixed.
- If a question describes cultural (or gender, age, or class) variation in emotional expression → display rules.
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
              'Display rules — both cultures have learned the same norms for showing emotion',
              'Facial feedback — making the faces caused both groups to feel the same way',
              'Universality — some basic emotional displays are shared across cultures',
              'Broaden-and-build — positive emotions widened both groups\' awareness'
            ],
            correctAnswer: 2,
            explanation: 'This mirrors Ekman\'s classic cross-cultural research. If an isolated group with little Western media exposure recognizes the same emotions from the same expressions, those expressions are likely shared rather than purely learned, which supports universality (though later studies show mixed results).'
          },
          {
            question: 'A therapist tells an anxious patient, "Even though you feel nervous, try putting on a slight smile for the next few minutes." The therapist is applying which concept?',
            options: [
              'Display rules — teaching the patient the cultural norms for showing nervousness',
              'The facial feedback hypothesis — the smile itself can ease the anxious feeling',
              'Cognitive labeling — giving the patient a new name for the arousal she feels',
              'Simultaneous emotion — showing that expression and feeling are independent'
            ],
            correctAnswer: 1,
            explanation: 'The therapist is using the facial feedback hypothesis: by changing the physical expression (smiling), the patient\'s brain may receive feedback that reduces the anxious feeling. Research testing this idea has produced mixed results, so any effect is likely modest.'
          }
        ]
      }
    }
  ]
}
