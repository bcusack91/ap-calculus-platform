export const psychOperantPart2Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'oper2-s1-intro',
      type: 'text' as const,
      content: `
## Reinforcement Types

**Part 2 of 7 — Positive & Negative Reinforcement**

Reinforcement is any consequence that **increases** the likelihood of a behavior being repeated. There are two types, and the key to understanding them is knowing what "positive" and "negative" mean in psychology:

- **Positive** = adding/presenting something
- **Negative** = removing/taking away something

### Core Definitions

| Term | Definition | Example |
|------|-----------|---------|
| **Positive reinforcement (+R)** | Adding a pleasant stimulus to increase behavior | Giving a dog a treat for sitting |
| **Negative reinforcement (-R)** | Removing an aversive stimulus to increase behavior | Taking aspirin removes a headache, so you take aspirin again |
| **Primary reinforcer** | Naturally satisfying — no learning needed | Food, water, warmth, relief from pain |
| **Secondary (conditioned) reinforcer** | Learned through association with primary reinforcers | Money, grades, praise, tokens |

### Real-World Example

Your car makes an annoying beeping sound until you buckle your seatbelt. When you buckle up, the beeping **stops** (removing an aversive stimulus). You're more likely to buckle up quickly next time. This is **negative reinforcement** — the removal of something unpleasant increases the behavior.

### Why This Matters

The #1 mistake students make on the AP exam is confusing negative reinforcement with punishment. Remember: **ALL reinforcement increases behavior**. "Negative" doesn't mean "bad" — it means "removing."
      `
    },
    {
      id: 'oper2-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A child cleans their room and receives $5 as a reward. They clean their room more often. This is an example of:',
            options: [
              'Negative reinforcement — the mess is removed',
              'Positive reinforcement — a pleasant stimulus (money) is added to increase behavior',
              'Positive punishment — money is presented after the behavior',
              'Negative punishment — something is taken away'
            ],
            correctAnswer: 1,
            explanation: 'The child receives (positive = adding) money, a pleasant stimulus, which increases the cleaning behavior (reinforcement). Positive reinforcement = adding something desirable to strengthen a behavior.'
          },
          {
            question: 'Which of the following is an example of NEGATIVE reinforcement?',
            options: [
              'A student receives a gold star for good behavior',
              'A teenager loses phone privileges for breaking curfew',
              'A prisoner gets time reduced for good behavior — the aversive prison time is shortened',
              'A child receives a spanking for misbehavior'
            ],
            correctAnswer: 2,
            explanation: 'Negative reinforcement removes an aversive stimulus (prison time) to increase a behavior (good behavior). The prisoner is MORE LIKELY to behave well again because it led to removal of something unpleasant. This is NOT punishment — the behavior increased.'
          }
        ]
      }
    },
    {
      id: 'oper2-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Mastering the +R / -R Distinction

**The Critical Framework:**
- Ask two questions: (1) Did behavior INCREASE or DECREASE? (2) Was something ADDED or REMOVED?
- If behavior increased → it's reinforcement
- If something was added → it's positive
- If something was removed → it's negative

### Detailed Examples

| Scenario | What happened? | Behavior change | Type |
|----------|---------------|----------------|------|
| Dog gets treat for sitting | Pleasant stimulus added | Sitting increases | **+R** |
| Aspirin removes headache | Aversive stimulus removed | Taking aspirin increases | **-R** |
| Student praised for studying | Pleasant stimulus added | Studying increases | **+R** |
| Seatbelt stops annoying beep | Aversive stimulus removed | Buckling up increases | **-R** |
| Employee gets bonus for sales | Pleasant stimulus added | Sales effort increases | **+R** |
| Umbrella removes getting wet | Aversive stimulus removed | Carrying umbrella increases | **-R** |

### Primary vs. Secondary Reinforcers

**Primary reinforcers** satisfy biological needs — they work without any prior learning:
- Food, water, warmth, relief from pain, sleep

**Secondary (conditioned) reinforcers** gain their power through association with primary reinforcers:
- Money → can buy food (primary)
- Grades → associated with praise and future opportunities
- Token economies → tokens can be exchanged for primary reinforcers

The distinction matters because secondary reinforcers are **learned** and can vary across cultures. Money is meaningless to someone who has never used it.
      `
    },
    {
      id: 'oper2-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) What does "positive" mean in operant conditioning terminology? (one word)

      2) Both positive and negative reinforcement do what to behavior? (one word)

      3) Money and grades are examples of what type of reinforcer?

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['adding', 'increase', 'secondary'],
        hint1: 'Positive = presenting or ___ a stimulus',
        hint2: 'Reinforcement always makes behavior happen more, not less',
        hint3: 'Also called "conditioned" reinforcers — learned through association',
        explanation: 'Expected answers: adding (positive = presenting a stimulus), increase (all reinforcement increases behavior), and secondary (money/grades are conditioned reinforcers learned through association with primary ones).'
      }
    },
    {
      id: 'oper2-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A dog gets a treat for shaking paws → behavior increases. This is ___',
            options: ['positive reinforcement', 'negative reinforcement', 'positive punishment', 'negative punishment']
          },
          {
            label: 'Taking Tylenol removes a headache → you take Tylenol more often. This is ___',
            options: ['positive reinforcement', 'negative reinforcement', 'positive punishment', 'negative punishment']
          },
          {
            label: 'Food and water are ___ reinforcers',
            options: ['primary', 'secondary', 'conditioned', 'partial']
          }
        ],
        correctAnswers: ['positive reinforcement', 'negative reinforcement', 'primary'],
        hint1: 'Something pleasant is ADDED → behavior increases.',
        hint2: 'Something aversive is REMOVED → behavior increases.',
        hint3: 'These satisfy biological needs without learning.',
        explanation: 'Treat added = positive reinforcement. Headache removed = negative reinforcement. Food/water satisfy innate biological needs = primary reinforcers.'
      }
    },
    {
      id: 'oper2-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Negative reinforcement = punishment"** — This is the #1 AP Psychology mistake. Negative reinforcement INCREASES behavior (by removing something aversive). Punishment DECREASES behavior. They are opposites in outcome.
- **"Positive means good, negative means bad"** — In operant conditioning, positive = adding, negative = removing. Positive punishment (adding something aversive) is NOT "good."
- **"Reinforcement is always a reward"** — Negative reinforcement involves removing something unpleasant (like a headache), which doesn't feel like a "reward" but still strengthens behavior.
- **"Secondary reinforcers are less important"** — Secondary doesn't mean "less effective." Money, grades, and praise are powerful motivators even though they are learned.

### AP Strategy Moves
- **Two-question test:** (1) Did behavior increase or decrease? If increase → reinforcement. (2) Was something added or removed? Added → positive. Removed → negative.
- The AP exam LOVES negative reinforcement scenarios because students confuse them with punishment. If the question says "removes" + "behavior increases" → negative reinforcement.
- Watch for the word "escape" or "avoid" — these signal negative reinforcement (the organism escapes/avoids an aversive stimulus).
- Primary vs. secondary reinforcer questions often appear in free-response. Know examples of each.
      `
    },
    {
      id: 'oper2-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A teacher gives students extra recess time when the whole class behaves well. Students behave better more often. What type of reinforcement is this, and what type of reinforcer is "extra recess"?',
            options: [
              'Positive reinforcement with a primary reinforcer — recess satisfies a biological need',
              'Positive reinforcement with a secondary reinforcer — recess time is a learned reward',
              'Negative reinforcement — the teacher removes boredom by adding recess',
              'Negative punishment — something is being taken away from students who misbehave'
            ],
            correctAnswer: 1,
            explanation: 'Extra recess is ADDED (positive) and behavior INCREASES (reinforcement) = positive reinforcement. Recess time is a secondary/conditioned reinforcer — its value is learned through experience, not biologically innate like food or water.'
          },
          {
            question: 'Marcus puts on sunscreen before going outside because last time he didn\'t, he got a painful sunburn. Now he always applies sunscreen to AVOID the pain. This is best described as:',
            options: [
              'Positive reinforcement — sunscreen is a pleasant addition',
              'Positive punishment — the sunburn punished not wearing sunscreen',
              'Negative reinforcement — applying sunscreen removes/avoids an aversive stimulus (sunburn), increasing the behavior',
              'Classical conditioning — the sun is a conditioned stimulus'
            ],
            correctAnswer: 2,
            explanation: 'Marcus applies sunscreen to AVOID an aversive stimulus (sunburn pain). The avoidance of pain INCREASES his sunscreen-applying behavior. This is negative reinforcement — removing/avoiding something unpleasant to strengthen a behavior. The keyword "avoid" is a classic signal for negative reinforcement.'
          }
        ]
      }
    }
  ]
}
