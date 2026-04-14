export const psychOperantPart6Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'oper6-s1-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Classifying Scenarios & Comparing Conditioning Types**

The AP exam will give you real-world scenarios and ask you to classify them. This part gives you a systematic framework for tackling these questions confidently.

### The Classification Framework

**Step 1: Is this operant or classical conditioning?**
- Does it involve a voluntary behavior and its consequence? → **Operant**
- Does it involve an involuntary response paired with a stimulus? → **Classical**

**Step 2: If operant — did behavior increase or decrease?**
- Behavior INCREASED → **Reinforcement**
- Behavior DECREASED → **Punishment**

**Step 3: Was something added or removed?**
- Something ADDED → **Positive**
- Something REMOVED → **Negative**

### Quick Reference: The Complete Classification

| Scenario cue | Classification |
|-------------|---------------|
| Pleasant stimulus added → behavior increases | **Positive reinforcement** |
| Aversive stimulus removed → behavior increases | **Negative reinforcement** |
| Aversive stimulus added → behavior decreases | **Positive punishment** |
| Pleasant stimulus removed → behavior decreases | **Negative punishment** |
| Involuntary response + stimulus pairing | **Classical conditioning** |
| Learning by watching others | **Observational learning** |

### Practice Scenario

A teenager texts during class. The teacher takes away the student's phone for the rest of the day. The student texts less in class afterward.

**Classification:** Something pleasant (phone) was REMOVED (negative) and behavior DECREASED (punishment) = **negative punishment**.
      `
    },
    {
      id: 'oper6-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A rat in a Skinner box presses a lever and an electric shock stops. The rat presses the lever more quickly in future trials. This is:',
            options: [
              'Positive reinforcement — the lever press adds a reward',
              'Negative reinforcement — an aversive stimulus (shock) is removed, increasing lever pressing',
              'Positive punishment — the shock is an aversive stimulus',
              'Classical conditioning — the lever is associated with shock removal'
            ],
            correctAnswer: 1,
            explanation: 'The shock (aversive stimulus) is REMOVED when the rat presses the lever, and lever pressing INCREASES. Removing aversive + behavior increases = negative reinforcement. This is called "escape learning" — the rat learns to escape the shock.'
          },
          {
            question: 'After eating bad sushi, Maria feels nauseated every time she sees sushi. She avoids sushi restaurants. The nausea response is best explained by ___, while the avoidance of restaurants is best explained by ___.',
            options: [
              'Operant conditioning; classical conditioning',
              'Classical conditioning (involuntary nausea paired with sushi); operant conditioning (voluntary avoidance reinforced by removing nausea)',
              'Positive punishment; negative punishment',
              'Shaping; chaining'
            ],
            correctAnswer: 1,
            explanation: 'The nausea is an involuntary response that was classically conditioned (sushi = CS, nausea = CR). The avoidance is a voluntary behavior maintained by negative reinforcement — avoiding sushi REMOVES the unpleasant nausea. This scenario combines both types of conditioning, which is a common AP question format.'
          }
        ]
      }
    },
    {
      id: 'oper6-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Classical vs. Operant Conditioning

| Feature | Classical Conditioning | Operant Conditioning |
|---------|----------------------|---------------------|
| **Behavior type** | Involuntary/reflexive | Voluntary/chosen |
| **Learning mechanism** | Association between stimuli | Consequences of behavior |
| **Key researchers** | Pavlov, Watson | Thorndike, Skinner |
| **Role of organism** | Passive — responds to stimuli | Active — operates on environment |
| **What's learned** | A stimulus predicts an event | A behavior produces a consequence |
| **Examples** | Salivating at a bell, fearing a white rat | Studying for grades, avoiding hot stoves |
| **Extinction** | CS presented without UCS | Behavior no longer reinforced |

### Tricky Scenarios — Practice Classification

**Scenario 1:** A child touches a hot stove and pulls their hand back. They avoid touching stoves in the future.
- Pulling hand back = **classical conditioning** (involuntary reflex)
- Avoiding stoves = **operant conditioning** (voluntary avoidance = negative reinforcement)

**Scenario 2:** An employee works overtime and receives a bonus. They work overtime more often.
- Bonus ADDED → behavior INCREASES = **positive reinforcement**

**Scenario 3:** A dog chews shoes. The owner sprays the shoes with bitter apple spray. The dog stops chewing shoes.
- Bitter taste ADDED → behavior DECREASES = **positive punishment**

**Scenario 4:** A child throws a tantrum at the grocery store. The parent buys them candy to stop the tantrum.
- For the CHILD: Candy ADDED → tantrum behavior INCREASES = **positive reinforcement** of tantrums
- For the PARENT: Tantrum REMOVED → buying candy behavior INCREASES = **negative reinforcement** of giving in

This last example shows how the same scenario involves different consequences for different individuals — a common AP trick question.
      `
    },
    {
      id: 'oper6-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) Operant conditioning involves ___ behavior, while classical involves involuntary. (one word)

      2) If behavior INCREASES and something is REMOVED, the classification is ___ reinforcement. (one word)

      3) In operant conditioning, the organism is ___ (active or passive)?

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['voluntary', 'negative', 'active'],
        hint1: 'The organism chooses to act — not a reflex',
        hint2: 'Removing = negative; increasing = reinforcement',
        hint3: 'The organism operates on its environment to produce consequences',
        explanation: 'Expected answers: voluntary (operant = chosen behaviors), negative (removing something + behavior increases = negative reinforcement), and active (the organism actively operates on the environment).'
      }
    },
    {
      id: 'oper6-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Classify These Scenarios** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A student studies hard and gets an A. They study more. This is ___',
            options: ['positive reinforcement', 'negative reinforcement', 'positive punishment', 'negative punishment']
          },
          {
            label: 'A child is grounded (no friends, no TV) for lying. They lie less. This is ___',
            options: ['positive reinforcement', 'negative reinforcement', 'positive punishment', 'negative punishment']
          },
          {
            label: 'An employee\'s boss stops criticizing them when they meet deadlines. Meeting deadlines increases. This is ___',
            options: ['positive reinforcement', 'negative reinforcement', 'positive punishment', 'negative punishment']
          }
        ],
        correctAnswers: ['positive reinforcement', 'negative punishment', 'negative reinforcement'],
        hint1: 'A (pleasant) is ADDED → behavior increases.',
        hint2: 'Pleasant things are REMOVED → behavior decreases.',
        hint3: 'Criticism (aversive) is REMOVED → behavior increases.',
        explanation: 'Getting an A (added pleasant) + studying increases = positive reinforcement. Grounding (removing pleasures) + lying decreases = negative punishment. Criticism removed + deadlines met = negative reinforcement.'
      }
    },
    {
      id: 'oper6-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"The same scenario always has one classification"** — The grocery store tantrum example shows that the SAME event can be positive reinforcement for the child AND negative reinforcement for the parent. Always ask: "From whose perspective?"
- **"If it involves pain, it's punishment"** — Not necessarily! Removing pain is NEGATIVE REINFORCEMENT (behavior increases). Adding pain is positive punishment. The direction of behavior change determines the classification.
- **"Classical and operant can't coexist"** — Many real scenarios involve BOTH. A conditioned fear response (classical) can lead to avoidance behavior (operant/negative reinforcement).
- **"Extinction means the behavior is gone forever"** — Extinction means reinforcement stops, so behavior decreases. But spontaneous recovery can bring it back temporarily.

### AP Strategy Moves
- **Always ask these three questions in order:** (1) Is behavior voluntary or involuntary? (2) Did behavior increase or decrease? (3) Was something added or removed?
- The AP exam loves "who is being reinforced/punished?" questions — analyze from EACH person's perspective.
- Escape learning = negative reinforcement (ending a current aversive stimulus). Avoidance learning = negative reinforcement (preventing an aversive stimulus from occurring).
- If a scenario combines classical AND operant conditioning, address both — don't pick just one.
      `
    },
    {
      id: 'oper6-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A teenager cleans their room to stop their mother from nagging. The nagging stops, and the teenager cleans their room more often in the future. Meanwhile, the mother nags more often because it gets the room cleaned. From the MOTHER\'s perspective, her nagging behavior is being maintained by:',
            options: [
              'Positive punishment — the messy room is an aversive stimulus',
              'Negative punishment — she loses her patience',
              'Positive reinforcement — a clean room (pleasant stimulus) is added after nagging, increasing nagging behavior',
              'Negative reinforcement — cleaning the room removes the mess'
            ],
            correctAnswer: 2,
            explanation: 'From the mother\'s perspective: she nags, and a clean room (pleasant outcome) APPEARS (positive = added). Her nagging behavior INCREASES (reinforcement). So the mother is positively reinforced for nagging. Meanwhile, the teenager is negatively reinforced (nagging removed → cleaning increases). Both people are being reinforced — classic AP Psychology trick!'
          },
          {
            question: 'Classify this scenario: A dog begs at the dinner table. Sometimes family members give the dog food scraps. Even though the family tries to stop, the dog continues begging persistently despite not getting food every time. What schedule of reinforcement explains the dog\'s persistence?',
            options: [
              'Continuous reinforcement — the dog expects food every time',
              'Variable-ratio — the dog is reinforced after an unpredictable number of begging attempts, making the behavior highly resistant to extinction',
              'Fixed-interval — the dog begs at scheduled meal times',
              'Negative reinforcement — the dog\'s begging removes the family\'s guilt'
            ],
            correctAnswer: 1,
            explanation: 'The dog sometimes gets food and sometimes doesn\'t — reinforcement comes after an unpredictable number of begging attempts. This is a variable-ratio schedule, which produces the highest resistance to extinction. The dog persists because "maybe THIS time" it will get food — the same psychology behind gambling.'
          }
        ]
      }
    }
  ]
}
