export const psychOperantPart4Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'oper4-s1-intro',
      type: 'text' as const,
      content: `
## Schedules of Reinforcement

**Part 4 of 7 — When and How Often to Reinforce**

So far, you know WHAT consequences do (reinforce or punish). Now the question is: **WHEN** should reinforcement be delivered? The schedule of reinforcement determines how quickly behavior is learned, how steadily it's performed, and how resistant it is to extinction.

### Core Definitions

| Term | Definition | Example |
|------|-----------|---------|
| **Continuous reinforcement** | Reinforce EVERY correct response | Vending machine gives candy every time you insert money |
| **Partial (intermittent) reinforcement** | Reinforce only SOME correct responses | Slot machine pays out unpredictably |
| **Fixed-ratio (FR)** | Reinforce after a SET NUMBER of responses | Earn a free coffee after every 10 purchases |
| **Variable-ratio (VR)** | Reinforce after an UNPREDICTABLE number of responses | Slot machines, fishing — you never know which try will pay off |
| **Fixed-interval (FI)** | Reinforce the first response after a SET TIME period | Checking for a paycheck every two weeks |
| **Variable-interval (VI)** | Reinforce the first response after an UNPREDICTABLE time period | Pop quizzes — you never know when one will happen |

### Real-World Example

Think about checking your phone for new messages. Sometimes you check and find nothing; other times you check and find a text. You never know exactly when a message will arrive, so you keep checking at irregular intervals. This is a **variable-interval schedule** — and it's why people compulsively check their phones.

### The Partial Reinforcement Extinction Effect

Behaviors reinforced on a partial schedule are MORE resistant to extinction than continuously reinforced behaviors. Why? Because the organism is used to NOT being reinforced every time, so it persists longer when reinforcement stops entirely.
      `
    },
    {
      id: 'oper4-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A factory worker is paid for every 20 widgets they assemble. This is a:',
            options: [
              'Fixed-interval schedule — payment comes at regular time intervals',
              'Variable-ratio schedule — the number of widgets varies',
              'Fixed-ratio schedule — reinforcement comes after a set number of responses',
              'Variable-interval schedule — payment timing is unpredictable'
            ],
            correctAnswer: 2,
            explanation: 'The worker is reinforced after a FIXED NUMBER (20) of responses (widgets). Fixed = predictable/set, Ratio = based on number of responses. This is a fixed-ratio (FR-20) schedule.'
          },
          {
            question: 'Which schedule of reinforcement produces the HIGHEST resistance to extinction?',
            options: [
              'Continuous reinforcement — reinforcing every response',
              'Fixed-interval — reinforcing after set time periods',
              'Variable-ratio — reinforcing after unpredictable numbers of responses',
              'Fixed-ratio — reinforcing after set numbers of responses'
            ],
            correctAnswer: 2,
            explanation: 'Variable-ratio schedules produce the highest, steadiest response rates and greatest resistance to extinction. This is why gambling is so addictive — you never know which pull of the lever will pay off, so you keep going.'
          }
        ]
      }
    },
    {
      id: 'oper4-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Comparing the Four Schedules

| Schedule | Based on... | Predictable? | Response pattern | Extinction resistance | Real example |
|----------|------------|-------------|-----------------|---------------------|-------------|
| **Fixed-ratio (FR)** | Number | Yes | Pause after reward, then rapid burst | Moderate | Buy 10, get 1 free |
| **Variable-ratio (VR)** | Number | No | High, steady rate | **Highest** | Slot machines, sales calls |
| **Fixed-interval (FI)** | Time | Yes | "Scalloped" — slow then fast near reward time | Low-moderate | Weekly paycheck, checking mail |
| **Variable-interval (VI)** | Time | No | Slow, steady rate | Moderate-high | Pop quizzes, checking phone |

### Key Patterns to Know

**Ratio schedules** (based on number of responses) generally produce HIGHER response rates than interval schedules. Why? Because the faster you respond, the sooner you get reinforced.

**Variable schedules** produce MORE CONSISTENT responding than fixed schedules. Why? Because you can't predict when reinforcement is coming, so you keep responding steadily.

**The "scallop" pattern** appears in fixed-interval schedules: the organism pauses right after reinforcement, then gradually increases responding as the next interval approaches. Think of a student who procrastinates after an exam (pause) then crams before the next one (rapid responding).

### Continuous vs. Partial Reinforcement

- **Continuous** = fastest initial learning (acquisition) but lowest resistance to extinction
- **Partial** = slower initial learning but MUCH higher resistance to extinction

Best strategy: start with continuous reinforcement to teach a new behavior, then switch to partial reinforcement to maintain it long-term.
      `
    },
    {
      id: 'oper4-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) Which schedule produces the highest resistance to extinction? (two words, abbreviation accepted)

      2) "Ratio" schedules are based on ___ of responses. (one word)

      3) What pattern does a fixed-interval schedule produce? (one word — sounds like a seashell shape)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['variable-ratio', 'number', 'scalloped'],
        hint1: 'VR — think gambling, slot machines',
        hint2: 'Ratio = how many responses before reinforcement',
        hint3: 'The response curve looks like a scallop — slow start, fast finish',
        explanation: 'Expected answers: variable-ratio (most resistant to extinction — gambling effect), number (ratio schedules count responses), and scalloped (FI produces a pause-then-accelerate pattern).'
      }
    },
    {
      id: 'oper4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A teacher gives pop quizzes at unpredictable times. Students study consistently. This is a ___ schedule',
            options: ['fixed-ratio', 'variable-ratio', 'fixed-interval', 'variable-interval']
          },
          {
            label: 'A coffee shop gives a free drink after every 10 purchases. This is a ___ schedule',
            options: ['fixed-ratio', 'variable-ratio', 'fixed-interval', 'variable-interval']
          },
          {
            label: 'Slot machines reinforce after an unpredictable number of plays. This is a ___ schedule',
            options: ['fixed-ratio', 'variable-ratio', 'fixed-interval', 'variable-interval']
          }
        ],
        correctAnswers: ['variable-interval', 'fixed-ratio', 'variable-ratio'],
        hint1: 'The timing of quizzes is unpredictable (variable) and based on time (interval).',
        hint2: 'Fixed number of purchases → set number of responses = fixed-ratio.',
        hint3: 'Unpredictable number of plays → variable number of responses = variable-ratio.',
        explanation: 'Pop quizzes = variable-interval (unpredictable time). Loyalty cards = fixed-ratio (set number). Slot machines = variable-ratio (unpredictable number) — the most addictive schedule.'
      }
    },
    {
      id: 'oper4-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Fixed-interval and fixed-ratio are the same"** — Fixed-interval is based on TIME (first response after X minutes); fixed-ratio is based on NUMBER (every X responses). Very different.
- **"Continuous reinforcement is best for long-term behavior"** — Actually, continuous reinforcement makes behavior LEAST resistant to extinction. Partial reinforcement is better for maintaining behavior.
- **"Variable means random"** — Variable means unpredictable from the organism's perspective, but the average is controlled. A VR-5 schedule averages 5 responses per reinforcement, but any specific instance might be 2, 7, or 4.
- **"Interval schedules can't produce high response rates"** — Variable-interval schedules produce steady (though not extremely high) responding because the organism can't predict when reinforcement will come.

### AP Strategy Moves
- **Two-question classification:** (1) Is reinforcement based on NUMBER of responses (ratio) or TIME elapsed (interval)? (2) Is the requirement FIXED (predictable) or VARIABLE (unpredictable)?
- Gambling = variable-ratio (VR). This is the highest-yield example on the AP exam. Know it cold.
- If a scenario mentions "every 5th" or "for each" → fixed-ratio. If it mentions "on average" or "unpredictable number" → variable-ratio.
- If a scenario mentions "every 2 weeks" or "once a month" → fixed-interval. If it mentions "random times" or "you never know when" → variable-interval.
- The scallop pattern (FI) is frequently tested — students cram before an exam (high response near interval end) then relax after (low response right after reinforcement).
      `
    },
    {
      id: 'oper4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A fisherman casts his line repeatedly. Sometimes he catches a fish after 3 casts, sometimes after 20, sometimes after 8. He keeps fishing for hours despite long stretches without catching anything. This pattern is best explained by:',
            options: [
              'Fixed-interval reinforcement — he fishes at regular time intervals',
              'Continuous reinforcement — he catches a fish every time he casts',
              'Variable-ratio reinforcement — reinforcement comes after an unpredictable number of responses, producing high persistence',
              'Fixed-ratio reinforcement — he catches a fish every 10 casts'
            ],
            correctAnswer: 2,
            explanation: 'The fisherman is reinforced (catches a fish) after an unpredictable NUMBER of casts. This is a variable-ratio schedule. The unpredictability is why he persists — he can never be sure the NEXT cast won\'t be the one. VR schedules produce the highest response rates and greatest resistance to extinction.'
          },
          {
            question: 'A student procrastinates after each exam, then crams intensely as the next exam approaches. This "study, slack, cram" pattern repeats all semester. Which schedule of reinforcement explains this pattern?',
            options: [
              'Variable-ratio — studying is reinforced after unpredictable numbers of study sessions',
              'Fixed-interval — the grade (reinforcement) comes after a fixed time period, producing a scalloped response pattern',
              'Continuous reinforcement — every study session is immediately reinforced',
              'Variable-interval — exams occur at unpredictable times'
            ],
            correctAnswer: 1,
            explanation: 'Exams occur at predictable intervals (every few weeks = fixed-interval). The student shows the classic FI "scallop" pattern: low responding right after reinforcement (slacking after an exam), then accelerating as the next reinforcement approaches (cramming before the next exam). This is one of the most commonly tested FI examples.'
          }
        ]
      }
    }
  ]
}
