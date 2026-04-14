export const psychOperantPart5Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'oper5-s1-intro',
      type: 'text' as const,
      content: `
## Shaping & Applications

**Part 5 of 7 — Teaching Complex Behaviors**

How do you train an animal to do something it would never do naturally, like a pigeon playing ping-pong? You can't wait for the full behavior to appear and then reinforce it. Instead, you use **shaping** — reinforcing successive approximations toward the target behavior.

### Core Definitions

| Term | Definition | Example |
|------|-----------|---------|
| **Shaping** | Reinforcing successive approximations (closer and closer attempts) toward a desired behavior | Teaching a dog to roll over by first rewarding lying down, then turning, then full roll |
| **Successive approximations** | Each step that gets progressively closer to the target behavior | Turn head → lean → lie down → roll partly → full roll |
| **Chaining** | Linking a sequence of individually shaped behaviors into a complex chain | A rat pressing a lever, then pulling a chain, then climbing stairs |
| **Token economy** | A system where secondary reinforcers (tokens) are earned and exchanged for primary reinforcers | Classroom behavior chart — earn stars, exchange for prizes |
| **Applied Behavior Analysis (ABA)** | A therapeutic application of operant conditioning, commonly used for autism spectrum disorder | Breaking social skills into steps and reinforcing each one |

### Real-World Example

Training a dolphin to jump through a hoop: First, reinforce the dolphin for swimming near the hoop (approximation 1). Then only reinforce swimming through the hoop (approximation 2). Then only reinforce jumping through the hoop above water (final target). Each step is closer to the goal — that's shaping through successive approximations.

### Why This Matters

Shaping questions appear on nearly every AP exam. You need to understand the process: reinforce close attempts, gradually require closer and closer approximations, and stop reinforcing earlier approximations once the next step is achieved.
      `
    },
    {
      id: 'oper5-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A mother wants to teach her toddler to say "mama." She first reinforces any "mmm" sound, then only "ma," then only "mama." This process is called:',
            options: [
              'Classical conditioning — associating sounds with reinforcement',
              'Shaping — reinforcing successive approximations toward the target behavior',
              'Chaining — linking multiple behaviors in sequence',
              'Negative reinforcement — removing frustration when the child speaks'
            ],
            correctAnswer: 1,
            explanation: 'The mother reinforces closer and closer attempts (mmm → ma → mama). Each reinforced step is a successive approximation toward the final target behavior. This is shaping — the most common method for teaching new behaviors.'
          },
          {
            question: 'In a psychiatric hospital, patients earn tokens for making their beds and attending therapy. They exchange tokens for TV time and snacks. This system is called a:',
            options: [
              'Primary reinforcement system',
              'Variable-ratio schedule',
              'Token economy — secondary reinforcers exchanged for primary reinforcers',
              'Classical conditioning program'
            ],
            correctAnswer: 2,
            explanation: 'Tokens are secondary (conditioned) reinforcers — they have no inherent value but can be exchanged for primary reinforcers (food, privileges). Token economies are widely used in schools, hospitals, and rehabilitation programs.'
          }
        ]
      }
    },
    {
      id: 'oper5-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: How Shaping Works Step by Step

**The Shaping Process:**
1. Define the target behavior precisely (what the final behavior looks like)
2. Identify the starting point (what the organism already does)
3. Reinforce the first approximation
4. Once that step is consistent, raise the bar — only reinforce the next closer approximation
5. Continue until the target behavior is achieved
6. Once the target is reached, maintain with a partial reinforcement schedule

**Shaping vs. Chaining**

| Feature | Shaping | Chaining |
|---------|---------|----------|
| **Goal** | Teach ONE new behavior | Link MULTIPLE behaviors into a sequence |
| **Method** | Reinforce closer and closer attempts | Teach individual steps, then link them together |
| **Example** | Teaching a pigeon to peck a specific spot | Teaching a rat to press lever → pull chain → climb stairs |
| **Key concept** | Successive approximations | Behavioral chain |

### Applied Behavior Analysis (ABA)

ABA takes operant conditioning principles and applies them therapeutically:
- **Where it's used:** Most commonly for autism spectrum disorder, but also for education, workplace training, and rehabilitation
- **How it works:** Complex social behaviors are broken into small, teachable steps. Each step is reinforced individually.
- **Example:** Teaching eye contact: First reinforce looking toward the trainer's face, then looking at the face, then making brief eye contact, then maintaining eye contact for 2+ seconds
- **Controversy:** Some advocates argue ABA can be overly rigid or attempt to eliminate natural behaviors. Modern ABA focuses on teaching functional skills rather than suppressing natural traits.

### Token Economies in Practice

Token economies work because they bridge the gap between behavior and delayed reinforcement:
- **Immediate:** Token delivered right after desired behavior
- **Delayed:** Exchange tokens for primary reinforcers later
- **Flexibility:** Individuals can choose their preferred reinforcer
- **Used in:** Classrooms, prisons, psychiatric facilities, at home
      `
    },
    {
      id: 'oper5-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) What term describes the closer-and-closer attempts reinforced during shaping? (two words)

      2) In a token economy, tokens are what type of reinforcer? (one word)

      3) What does ABA stand for? (three words)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['successive approximations', 'secondary', 'Applied Behavior Analysis'],
        hint1: 'Two words: ___ approximations — each step gets closer to the target',
        hint2: 'Tokens gain value through learning/association, not biology',
        hint3: 'A-B-A: ___ Behavior ___',
        explanation: 'Expected answers: successive approximations (the progressive steps toward the target behavior), secondary (tokens are conditioned/secondary reinforcers), and Applied Behavior Analysis (the therapeutic application of operant conditioning).'
      }
    },
    {
      id: 'oper5-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Teaching a pigeon to peck a target by reinforcing closer and closer attempts is ___',
            options: ['shaping', 'chaining', 'extinction', 'classical conditioning']
          },
          {
            label: 'A rat learns to press a lever, then pull a chain, then climb stairs — each as a linked sequence. This is ___',
            options: ['shaping', 'chaining', 'token economy', 'negative reinforcement']
          },
          {
            label: 'ABA therapy is most commonly associated with ___',
            options: ['depression treatment', 'autism spectrum disorder', 'drug addiction', 'phobia treatment']
          }
        ],
        correctAnswers: ['shaping', 'chaining', 'autism spectrum disorder'],
        hint1: 'Reinforcing successive approximations = shaping.',
        hint2: 'Linking multiple behaviors into a sequence = chaining.',
        hint3: 'ABA breaks complex social skills into teachable steps.',
        explanation: 'Shaping reinforces progressively closer approximations. Chaining links separate behaviors into a sequence. ABA is most commonly used for autism spectrum disorder.'
      }
    },
    {
      id: 'oper5-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Shaping and chaining are the same"** — Shaping teaches ONE behavior through progressive steps. Chaining links MULTIPLE already-learned behaviors into a sequence. Very different processes.
- **"Token economies use primary reinforcers"** — Tokens themselves are secondary reinforcers. They can be EXCHANGED for primary reinforcers, but the tokens themselves are learned/conditioned.
- **"ABA is only for autism"** — While ABA is most commonly associated with autism, operant principles are used in education, workplace training, animal training, and rehabilitation.
- **"Shaping means you wait for the perfect behavior"** — No! That's the whole point of shaping — you reinforce IMPERFECT attempts and gradually raise the bar. You never wait for the final behavior to appear on its own.

### AP Strategy Moves
- If an AP question describes teaching a NEW behavior step-by-step → shaping (successive approximations).
- If it describes linking EXISTING behaviors into a sequence → chaining.
- Token economy questions often appear in FRQ scenarios about classroom management or institutional settings.
- Know the shaping process: define target → identify starting point → reinforce first approximation → raise the bar → repeat until target is reached.
- ABA is a common FRQ topic — be ready to explain how operant principles are applied therapeutically.
      `
    },
    {
      id: 'oper5-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A kindergarten teacher wants to teach students to raise their hands before speaking. She first praises ANY student who lifts their arm at all, then only praises students who raise their hand high, and finally only praises students who raise their hand and wait to be called on. What principle is she using?',
            options: [
              'Chaining — she is linking multiple behaviors together',
              'Shaping — she is reinforcing successive approximations toward the target behavior',
              'Negative reinforcement — she is removing speaking out of turn',
              'Fixed-ratio reinforcement — she reinforces every 3rd hand raise'
            ],
            correctAnswer: 1,
            explanation: 'The teacher is reinforcing progressively closer approximations: any arm lift → high hand raise → hand raise + waiting. Each step gets closer to the target behavior. She stops reinforcing earlier approximations once students master the next step. This is classic shaping.'
          },
          {
            question: 'A behavioral therapy program for a child with autism uses tokens (stickers) earned for appropriate social behaviors. The child exchanges 10 stickers for 15 minutes of iPad time. Which operant conditioning concepts are being applied?',
            options: [
              'Token economy (stickers as secondary reinforcers) and fixed-ratio schedule (every 10 stickers)',
              'Classical conditioning (associating stickers with iPad) and continuous reinforcement',
              'Negative reinforcement (removing stickers reduces behavior) and variable-ratio schedule',
              'Shaping (successive approximations) and primary reinforcement (iPad time)'
            ],
            correctAnswer: 0,
            explanation: 'The stickers are secondary reinforcers in a token economy — they have no inherent value but can be exchanged for reinforcers (iPad time). The exchange rate of 10 stickers makes this a fixed-ratio schedule (FR-10). iPad time serves as the backup reinforcer. This is a textbook ABA application.'
          }
        ]
      }
    }
  ]
}
