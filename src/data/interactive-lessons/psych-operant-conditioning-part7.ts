export const psychOperantPart7Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'oper7-s1-intro',
      type: 'text' as const,
      content: `
## Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

This final part integrates everything you've learned about operant conditioning and connects it to broader learning concepts that appear on the AP exam.

### The Big Picture: Three Types of Learning

| Type | Mechanism | Behavior type | Key researchers |
|------|-----------|-------------|----------------|
| **Classical conditioning** | Association between stimuli (CS + UCS) | Involuntary/reflexive | Pavlov, Watson |
| **Operant conditioning** | Consequences shape behavior (R & P) | Voluntary/chosen | Thorndike, Skinner |
| **Observational learning** | Watching and imitating models | Can be either | Bandura |

### Beyond Strict Behaviorism: Cognitive Influences

Strict behaviorists like Skinner argued that only observable behavior matters. But research showed that cognition plays a role even in conditioning:

- **Cognitive maps (Tolman):** Rats navigated mazes using mental representations of the layout — not just stimulus-response connections. They had internal "maps" of the maze.
- **Latent learning (Tolman):** Rats that explored a maze without reinforcement learned the layout but didn't show it until a reward was introduced. Learning occurred WITHOUT observable behavior change — contradicting strict behaviorism.
- **Insight learning (Köhler):** Chimpanzees suddenly realized how to stack boxes to reach bananas — "aha!" moments that can't be explained by gradual reinforcement.
- **Learned helplessness (Seligman):** Dogs that received inescapable shocks eventually stopped trying to escape — even when escape became possible. This cognitive expectation of failure is linked to depression in humans.

### Why This Matters

The AP exam tests whether you understand that learning is NOT purely behavioral. Cognitive processes (expectations, mental maps, insights) influence how we learn, even in situations that look like simple conditioning.
      `
    },
    {
      id: 'oper7-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Tolman\'s rats explored a maze without receiving any reward. When a reward was later introduced, they immediately ran the maze efficiently. This demonstrates:',
            options: [
              'Classical conditioning — the maze became a conditioned stimulus',
              'Latent learning — the rats learned the maze layout but didn\'t demonstrate it until motivated',
              'Shaping — the rats were reinforced through successive approximations',
              'Fixed-ratio reinforcement — the rats were reinforced after exploring the maze a set number of times'
            ],
            correctAnswer: 1,
            explanation: 'Latent learning means learning that occurs but isn\'t demonstrated until there\'s motivation (reinforcement) to show it. The rats formed cognitive maps of the maze during unreinforced exploration — they learned without any behavioral evidence of learning. This challenged Skinner\'s view that learning requires reinforcement.'
          },
          {
            question: 'Seligman\'s dogs received inescapable electric shocks. Later, when placed in a situation where they COULD escape, they didn\'t even try. This phenomenon is called:',
            options: [
              'Extinction — the escape behavior was extinguished',
              'Negative punishment — something pleasant was removed',
              'Learned helplessness — the dogs learned that their behavior had no effect on outcomes',
              'Latent learning — the dogs learned but didn\'t show it'
            ],
            correctAnswer: 2,
            explanation: 'Learned helplessness occurs when an organism learns that it has no control over negative events. The dogs developed a cognitive expectation that nothing they did would stop the shocks. This concept is important because it\'s used to explain human depression — feeling helpless to change one\'s circumstances.'
          }
        ]
      }
    },
    {
      id: 'oper7-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: Master Comparison — All Learning Types

| Concept | Type | Key detail |
|---------|------|-----------|
| **Positive reinforcement** | Operant | Add pleasant → behavior increases |
| **Negative reinforcement** | Operant | Remove aversive → behavior increases |
| **Positive punishment** | Operant | Add aversive → behavior decreases |
| **Negative punishment** | Operant | Remove pleasant → behavior decreases |
| **Continuous reinforcement** | Schedule | Every response reinforced — fast learning, fast extinction |
| **Variable-ratio** | Schedule | Unpredictable number — highest resistance to extinction |
| **Fixed-interval** | Schedule | Set time period — produces scalloped response pattern |
| **Variable-interval** | Schedule | Unpredictable time — slow, steady responding |
| **Shaping** | Operant technique | Successive approximations toward target |
| **Token economy** | Application | Secondary reinforcers exchanged for primary |
| **Cognitive maps** | Cognitive challenge | Tolman — mental representations challenge pure behaviorism |
| **Latent learning** | Cognitive challenge | Learning without observable behavior change |
| **Learned helplessness** | Cognitive | Seligman — believing you have no control → giving up |
| **Insight learning** | Cognitive | Köhler — sudden "aha!" solutions |

### Biological Constraints on Learning

Not all behaviors are equally easy to condition:
- **Instinctive drift (Breland & Breland):** Animals tend to revert to instinctive behaviors even when trained otherwise. Pigs trained to deposit coins in a piggy bank eventually started "rooting" the coins with their snouts instead.
- **Preparedness:** Some associations are learned more easily than others because of biological predispositions. Humans develop taste aversions more readily than visual aversions — an evolutionary advantage.
      `
    },
    {
      id: 'oper7-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) Tolman demonstrated that rats form ___ ___ of maze layouts. (two words)

      2) Learning that occurs without observable behavior change is called ___ learning. (one word)

      3) When animals revert to instinctive behaviors despite training, this is called instinctive ___. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['cognitive maps', 'latent', 'drift'],
        hint1: 'Two words: ___ maps — mental representations of space',
        hint2: 'Starts with L — hidden learning that doesn\'t show until motivated',
        hint3: 'The trained behavior "drifts" back toward instinct',
        explanation: 'Expected answers: cognitive maps (Tolman\'s mental spatial representations), latent (learning occurs but is hidden until motivation appears), and drift (instinctive drift = reversion to species-typical behaviors).'
      }
    },
    {
      id: 'oper7-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Dogs receiving inescapable shocks stopped trying to escape even when they could. This is ___',
            options: ['latent learning', 'learned helplessness', 'instinctive drift', 'insight learning']
          },
          {
            label: 'Köhler\'s chimpanzees stacked boxes to reach bananas in a sudden "aha!" moment. This is ___',
            options: ['shaping', 'insight learning', 'latent learning', 'classical conditioning']
          },
          {
            label: 'Operant conditioning involves ___ behavior, while classical involves involuntary responses',
            options: ['reflexive', 'unconscious', 'voluntary', 'instinctive']
          }
        ],
        correctAnswers: ['learned helplessness', 'insight learning', 'voluntary'],
        hint1: 'Seligman — belief that nothing you do matters → giving up.',
        hint2: 'Sudden realization, not gradual reinforcement.',
        hint3: 'The organism chooses to act on the environment.',
        explanation: 'Learned helplessness = giving up after inescapable aversive events. Insight learning = sudden solutions (not gradual). Operant = voluntary; classical = involuntary.'
      }
    },
    {
      id: 'oper7-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Latent learning contradicts ALL of behaviorism"** — It challenges strict behaviorism (learning requires reinforcement) but doesn't invalidate operant conditioning. It shows that cognitive factors ALSO play a role.
- **"Learned helplessness is just laziness"** — It's a genuine psychological phenomenon with neurobiological correlates. The organism truly BELIEVES it can't control outcomes — it's not choosing not to try.
- **"Insight learning is the same as trial-and-error"** — Insight is a sudden realization, not gradual. The "aha!" moment occurs without prior reinforcement of the solution behavior.
- **"Instinctive drift means training doesn't work"** — Training works, but biology can override it. Instinctive drift shows that operant conditioning has biological limits.

### AP Strategy Moves
- **FRQ design questions:** If asked to design a behavior modification plan, include: (1) target behavior, (2) type of reinforcement, (3) reinforcement schedule, (4) shaping steps if needed, (5) how to maintain the behavior long-term.
- Know the cognitive challenges to behaviorism: Tolman (cognitive maps, latent learning), Köhler (insight), Seligman (learned helplessness), Breland & Breland (instinctive drift).
- The AP exam loves to combine topics: "Which type of conditioning best explains..." → use the voluntary/involuntary distinction first.
- Learned helplessness is linked to depression on the AP exam — know this connection.
- If a question mentions an animal reverting to natural behavior despite training → instinctive drift.
      `
    },
    {
      id: 'oper7-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student fails several math tests despite studying hard. Eventually, the student stops studying for math entirely, saying "Nothing I do makes a difference." A psychologist would connect this to:',
            options: [
              'Extinction — the studying behavior was extinguished because it wasn\'t reinforced',
              'Learned helplessness — repeated failure created a belief that effort doesn\'t affect outcomes, a concept linked to depression',
              'Latent learning — the student learned math but isn\'t showing it',
              'Negative punishment — failing grades removed the student\'s motivation'
            ],
            correctAnswer: 1,
            explanation: 'This is learned helplessness — the student experienced repeated "inescapable" failure (like Seligman\'s dogs receiving inescapable shocks) and developed the belief that their behavior (studying) has no effect on outcomes (grades). This cognitive expectation of failure is a key model for understanding depression. Note: extinction is also partially correct, but the cognitive component ("Nothing I do makes a difference") is the hallmark of learned helplessness.'
          },
          {
            question: 'An AP Psychology FRQ asks: "Using operant conditioning principles, design a plan to increase a child\'s reading behavior." Which response element would earn the MOST points?',
            options: [
              'Describe classical conditioning and pair books with pleasant sounds',
              'Explain how to use positive reinforcement (praise/rewards for reading), start with continuous reinforcement, then transition to a variable-ratio schedule for long-term maintenance',
              'Recommend positive punishment for not reading and negative punishment for reading non-academic books',
              'Suggest insight learning — the child will eventually realize reading is valuable'
            ],
            correctAnswer: 1,
            explanation: 'A complete FRQ response should: (1) identify the type of reinforcement (positive — adding rewards), (2) specify starting with continuous reinforcement for fast acquisition, (3) transition to partial reinforcement (VR) for resistance to extinction, and (4) potentially include shaping if the child isn\'t reading at all yet. Punishment-based approaches would lose points because they don\'t teach the desired behavior and have well-documented limitations.'
          }
        ]
      }
    }
  ]
}
