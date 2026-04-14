export const psychEmotionPart1Data = {
  topicSlug: 'emotion-stress',
  sections: [
    {
      id: 'emot1-s1-intro',
      type: 'text' as const,
      content: `
## Theories of Emotion

**Part 1 of 7 — How Do We Experience Emotion?**

One of the most heavily tested topics on the AP Psychology exam: four theories explain the relationship between physiological arousal, cognitive interpretation, and the subjective experience of emotion. You MUST know all four and be able to distinguish them from scenario descriptions.

### The Four Theories of Emotion

| Theory | Theorist(s) | Sequence | Key idea |
|--------|------------|----------|----------|
| **James-Lange** | William James, Carl Lange | Stimulus → Body response → Emotion | "I'm trembling, therefore I must be afraid" — the body reacts FIRST, then we interpret the reaction as an emotion |
| **Cannon-Bard** | Walter Cannon, Philip Bard | Stimulus → Body response AND Emotion (simultaneously) | Arousal and emotion happen at the SAME TIME, independently — neither causes the other |
| **Schachter-Singer (Two-Factor)** | Stanley Schachter, Jerome Singer | Stimulus → Arousal + Cognitive label → Emotion | We experience arousal, then LOOK AROUND to figure out why — emotion = arousal + interpretation |
| **Lazarus (Cognitive Appraisal)** | Richard Lazarus | Stimulus → Cognitive appraisal → Emotion + Arousal | Thinking comes FIRST — we must cognitively evaluate a situation before we can feel an emotion |

### Real-World Example: Seeing a Bear

| Theory | What happens when you see a bear on a trail? |
|--------|---------------------------------------------|
| **James-Lange** | Your heart races → you interpret the racing heart → you feel fear |
| **Cannon-Bard** | Your heart races AND you feel fear simultaneously |
| **Schachter-Singer** | Your heart races → you see the bear → "My heart is racing because of that bear!" → fear |
| **Lazarus** | You evaluate "that's a dangerous bear" → THEN your heart races and you feel fear |
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
            question: 'After nearly being hit by a car, Sam notices his heart pounding and palms sweating. He then thinks, "I must be terrified!" Which theory of emotion does this sequence best illustrate?',
            options: [
              'Cannon-Bard — arousal and emotion occur simultaneously',
              'James-Lange — physiological arousal occurs first, then the emotion is identified based on the body\'s response',
              'Schachter-Singer — arousal is labeled based on context',
              'Lazarus — cognitive appraisal comes before any arousal'
            ],
            correctAnswer: 1,
            explanation: 'James-Lange theory says the body reacts FIRST (heart pounding, sweating), and then we interpret those physical sensations as a specific emotion ("I must be terrified"). The key: the physical response comes BEFORE the emotional experience. Sam felt the arousal first, then labeled it as fear.'
          },
          {
            question: 'In Schachter and Singer\'s classic experiment, participants were injected with epinephrine (causing arousal) and placed with either a euphoric or angry confederate. Participants in the "euphoric" condition reported feeling happy, while those in the "angry" condition reported feeling angry. This supports which claim?',
            options: [
              'Emotions are purely physiological — the injection directly caused the emotion',
              'Arousal and emotion always occur simultaneously regardless of context',
              'The same physiological arousal can be interpreted as different emotions depending on the cognitive context/label applied',
              'Cognitive appraisal must occur before any arousal can be experienced'
            ],
            correctAnswer: 2,
            explanation: 'This is the classic support for the Schachter-Singer (Two-Factor) theory: the SAME arousal (from epinephrine) was interpreted as different emotions depending on the social context. This proves that emotion = arousal + cognitive label. The arousal was identical; only the interpretation changed — and so did the reported emotion.'
          }
        ]
      }
    },
    {
      id: 'emot1-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Comparing the Theories

#### The Key Debate: What Comes First?

| Theory | Body first? | Mind first? | Simultaneous? |
|--------|------------|------------|---------------|
| **James-Lange** | ✅ Yes — body reacts, then emotion follows | ❌ No | ❌ No |
| **Cannon-Bard** | ❌ No | ❌ No | ✅ Yes — both at the same time |
| **Schachter-Singer** | ✅ Body arousal occurs first | Then cognitive labeling ➡️ | ❌ No — sequential but both needed |
| **Lazarus** | ❌ No | ✅ Yes — appraisal comes first | ❌ No |

#### Evidence and Criticisms

| Theory | Supporting evidence | Criticism |
|--------|-------------------|-----------|
| **James-Lange** | Facial feedback hypothesis — forcing a smile can make you feel happier; spinal cord injury patients sometimes report diminished emotional intensity | Different emotions have very similar physiological responses (fear and excitement feel alike) — how do we tell them apart? |
| **Cannon-Bard** | Emotions can occur very rapidly, seemingly before body has time to respond | Doesn't explain why modifying bodily states (e.g., relaxation) can change emotions |
| **Schachter-Singer** | Epinephrine/Confederate experiment: same arousal → different emotions based on context | Arousal isn't always ambiguous — sometimes we know exactly why we're aroused |
| **Lazarus** | Reappraisal techniques (cognitive therapy) effectively change emotional responses | Some emotions (phobias, startle response) seem to bypass conscious appraisal |

#### Zajonc's Response to Lazarus

Robert Zajonc (pronounced "ZYE-ence") argued that some emotional responses occur WITHOUT cognitive appraisal — they are immediate and automatic. For example:
- You flinch at a loud noise BEFORE you think about what it is
- You feel an instant attraction to someone before analyzing why
- The "mere exposure effect" — we prefer familiar things without knowing why

**The Lazarus-Zajonc debate** is a classic AP exam topic: Lazarus says cognition is ALWAYS first; Zajonc says some emotions bypass cognition entirely.
      `
    },
    {
      id: 'emot1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) Which theory says emotion = arousal + cognitive label? (one hyphenated name, e.g., "Schachter-Singer")

      2) Which theory says the body reacts FIRST and then we interpret the reaction as an emotion? (one hyphenated name)

      3) The psychologist who argued that some emotions bypass cognitive appraisal entirely was ___. (last name only)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Schachter-Singer', 'James-Lange', 'Zajonc'],
        hint1: 'Two factors: arousal + label. Also called "two-factor theory"',
        hint2: 'Body first → then emotion. Named after two researchers',
        hint3: 'Rhymes with "science" — argued against Lazarus about cognition-first',
        explanation: 'Expected answers: Schachter-Singer (two-factor: arousal + cognitive label = emotion), James-Lange (body reacts first → then we feel the emotion), and Zajonc (argued that some emotional responses are immediate and don\'t require cognitive appraisal — the Lazarus-Zajonc debate).'
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
            label: 'You see a snake → your heart races AND you feel fear at the same instant. This is ___',
            options: ['James-Lange', 'Cannon-Bard', 'Schachter-Singer', 'Lazarus']
          },
          {
            label: 'You evaluate "this neighborhood looks dangerous" → then you feel anxious. This is ___',
            options: ['James-Lange', 'Cannon-Bard', 'Schachter-Singer', 'Lazarus']
          },
          {
            label: 'Your heart races on a roller coaster and you think "this must be excitement!" This is ___',
            options: ['James-Lange', 'Cannon-Bard', 'Schachter-Singer', 'Lazarus']
          }
        ],
        correctAnswers: ['Cannon-Bard', 'Lazarus', 'Schachter-Singer'],
        hint1: 'Simultaneous arousal and emotion = Cannon-Bard.',
        hint2: 'Thinking/evaluating FIRST = cognitive appraisal = Lazarus.',
        hint3: 'Arousal + looking for a reason = two-factor = Schachter-Singer.',
        explanation: 'Simultaneous heart racing AND fear = Cannon-Bard (both at the same time). Evaluating first, then feeling = Lazarus (cognitive appraisal precedes emotion). Arousal + interpretation ("this must be excitement") = Schachter-Singer (two-factor: arousal + label).'
      }
    },
    {
      id: 'emot1-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"James-Lange and Schachter-Singer are the same"** — Both involve body-first, but James-Lange says the SPECIFIC body response determines the emotion (crying → sad), while Schachter-Singer says AMBIGUOUS arousal is labeled by context.
- **"Cannon-Bard means the body doesn't matter"** — No, Cannon-Bard says body AND mind respond simultaneously. The body absolutely matters — it just doesn't CAUSE the emotion.
- **"Lazarus says emotions are purely intellectual"** — Lazarus says cognitive APPRAISAL comes first, but the emotion is still felt — it's not just thinking about it.
- **"There's one correct theory of emotion"** — Each theory captures part of the truth. The AP exam tests your ability to identify which theory a scenario describes, not which one is "right."

### AP Strategy Moves
- **The #1 tested topic in this unit is comparing emotion theories via scenarios.** If a question describes a sequence of events, ask: What came first — the body, the thought, or both at once?
- **Body first → emotion:** James-Lange
- **Both at once:** Cannon-Bard
- **Arousal + context/label:** Schachter-Singer
- **Thinking first:** Lazarus
- **Tricky question pattern:** "Same arousal, different emotion" = Schachter-Singer. This is because only two-factor theory explains how identical physical arousal can produce different emotions.
- Know the **Lazarus-Zajonc debate** — Lazarus: cognition always first; Zajonc: some emotions are precognitive (instant, automatic).
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
            question: 'A researcher gives caffeine (which causes arousal) to two groups. Group A is told the caffeine will make them jittery. Group B is not told about the jittery side effects. Group B reports feeling more anxious than Group A. This finding is best explained by:',
            options: [
              'James-Lange — the caffeine directly caused anxiety through bodily arousal',
              'Cannon-Bard — arousal and anxiety occurred simultaneously',
              'Schachter-Singer — Group B had unexplained arousal and attributed it to anxiety, while Group A correctly attributed their arousal to the caffeine',
              'Lazarus — Group B cognitively appraised their situation as threatening'
            ],
            correctAnswer: 2,
            explanation: 'This is a classic Schachter-Singer setup: both groups had the SAME arousal (caffeine), but Group A had an explanation ("it\'s just the caffeine"), while Group B had unexplained arousal and searched for a label. Group B misattributed their caffeine-induced arousal to anxiety. This is called "misattribution of arousal" — a key concept from two-factor theory.'
          },
          {
            question: 'Which scenario best illustrates the Lazarus-Zajonc debate about whether cognition must precede emotion?',
            options: [
              'A person feels happy after receiving a gift — both theorists would agree this involves cognitive appraisal',
              'A person jumps at a sudden loud noise before identifying what caused it — Zajonc would say this is an emotion without prior appraisal, while Lazarus would argue some minimal cognitive processing still occurred',
              'A person experiences arousal and looks around for a label — this is the Schachter-Singer model',
              'A person\'s body reacts before they feel the emotion — this is James-Lange theory'
            ],
            correctAnswer: 1,
            explanation: 'The Lazarus-Zajonc debate centers on whether cognition must ALWAYS precede emotion. Zajonc points to instant reactions (startle, phobias, mere exposure preferences) as evidence that some emotions occur automatically without conscious appraisal. Lazarus counters that even these reactions involve some form of minimal cognitive processing — just very fast and unconscious. The jumping-at-a-noise scenario perfectly captures this disagreement.'
          }
        ]
      }
    }
  ]
}
