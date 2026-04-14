export const psychObservationalPart3Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser3-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Observational & Cognitive Learning

**Part 3 of 7 — Cognitive Factors in Learning**

The cognitive revolution in psychology showed that learning involves MORE than just stimulus-response connections. Organisms form mental representations, learn without showing it, and even develop beliefs about their own abilities — all invisible processes that pure behaviorism couldn't explain.

| Concept | Researcher | Core Idea | Challenge to Behaviorism |
|---------|-----------|-----------|-------------------------|
| **Cognitive maps** | Tolman (1948) | Mental representations of spatial layouts | Rats learn WITHOUT reinforcement |
| **Latent learning** | Tolman & Honzik | Learning occurs but isn't shown until motivated | Learning ≠ performance |
| **Learned helplessness** | Seligman (1967) | Giving up after repeated uncontrollable events | Cognition (expectation) causes behavior |
| **Self-efficacy** | Bandura | Belief in one's ability to succeed at a task | Internal beliefs affect behavior |

### 🗣️ Real-World Example

You walk through your school every day without a map. You've formed a **cognitive map** — a mental layout of hallways, classrooms, and exits. If someone asks you to find a new room, you can navigate using this internal representation. Tolman showed that even rats form cognitive maps while exploring mazes — a finding that challenged behaviorists who denied mental representations.

> **Why This Matters for the AP Exam:** Tolman's latent learning experiment and Seligman's learned helplessness study are both high-frequency AP topics. They represent the "cognitive challenge to behaviorism" — a major theme across the learning unit.
      `
    },
    {
      id: 'obser3-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Tolman\'s rats explored a maze without receiving food rewards. When food was finally introduced, they immediately navigated the maze as well as rats who had been rewarded from the start. This demonstrates:',
            options: [
              'Classical conditioning — the maze became a CS paired with food',
              'Operant conditioning — the food reinforced maze running',
              'Latent learning — the rats had learned the maze but didn\'t show it until motivated',
              'Instinctive drift — the rats relied on innate navigational instincts'
            ],
            correctAnswer: 2,
            explanation: 'The rats explored the maze and formed cognitive maps (learned the layout) without any reinforcement. When food was introduced, they PERFORMED what they had already LEARNED. This is latent learning — learning that exists but is not demonstrated until there is a reason (motivation) to show it.'
          },
          {
            question: 'Seligman\'s dogs who received inescapable shocks later failed to escape when escape was possible. This demonstrates:',
            options: [
              'Extinction — the escape response was extinguished',
              'Learned helplessness — the dogs expected they could not control outcomes',
              'Habituation — the dogs habituated to the shocks',
              'Operant conditioning — the dogs were reinforced for staying still'
            ],
            correctAnswer: 1,
            explanation: 'Learned helplessness occurs when an organism learns that its actions have no effect on outcomes (uncontrollable events) and then STOPS TRYING even when the situation changes. The dogs developed a COGNITIVE EXPECTATION ("nothing I do matters") — a mental state that pure behaviorism cannot explain.'
          }
        ]
      }
    },
    {
      id: 'obser3-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: Landmark Cognitive Learning Studies

**Tolman's Cognitive Map Experiment (1948)**
- **Procedure:** Three groups of rats ran through a complex maze
  - Group 1: Rewarded with food at the end from Day 1
  - Group 2: No reward for 10 days, then food introduced on Day 11
  - Group 3: No reward ever
- **Results:** Group 2 performed just as well as Group 1 immediately after food was introduced — they had been learning all along
- **Conclusion:** Learning can occur WITHOUT reinforcement (latent learning). Rats formed cognitive maps during unreinforced exploration.

**Seligman's Learned Helplessness (1967)**

| Phase | Experimental Group | Control Group |
|-------|-------------------|---------------|
| Phase 1 | Dogs receive INESCAPABLE shocks | Dogs receive escapable shocks (or none) |
| Phase 2 | Dogs placed in shuttle box where they CAN escape | Same shuttle box |
| **Result** | Dogs just lay down and whimpered — didn't try to escape | Dogs quickly jumped to safe side |

**Connection to human depression:** Seligman later proposed that learned helplessness is a model for depression — people who experience uncontrollable negative events may develop the belief that nothing they do matters, leading to passivity and hopelessness.

**Bandura's Self-Efficacy**

| Self-Efficacy Level | Belief | Behavior | Outcome |
|---------------------|--------|----------|---------|
| **High** | "I can do this" | Persists, takes on challenges | Greater success |
| **Low** | "I can't do this" | Avoids challenges, gives up easily | Lower achievement |

Sources of self-efficacy (strongest → weakest):
1. **Mastery experiences** — past successes (strongest source)
2. **Vicarious experiences** — watching similar others succeed
3. **Verbal persuasion** — encouragement from others
4. **Emotional arousal** — interpreting your physical state (calm = "I've got this")
      `
    },
    {
      id: 'obser3-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Who demonstrated that rats form mental representations of maze layouts?', answer: 'Tolman' },
          { label: 'Learning that occurs but is not shown until motivation is present is called ___ learning', answer: 'latent' },
          { label: 'Who discovered learned helplessness using inescapable electric shocks with dogs?', answer: 'Seligman' }
        ]
      }
    },
    {
      id: 'obser3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A student who failed repeatedly stops studying and says "Why bother?"', options: ['Cognitive map', 'Latent learning', 'Learned helplessness', 'Self-efficacy'] },
          { label: 'You navigate a new route to school because your usual road is closed', options: ['Cognitive map', 'Latent learning', 'Learned helplessness', 'Vicarious learning'] },
          { label: '"I aced the last exam, so I know I can do well on this one"', options: ['Latent learning', 'Learned helplessness', 'Self-efficacy from mastery experience', 'Cognitive map'] }
        ],
        correctAnswers: ['Learned helplessness', 'Cognitive map', 'Self-efficacy from mastery experience'],
        hint1: 'Giving up because past efforts seemed futile = learned helplessness.',
        hint2: 'Using a mental representation of spatial layout = cognitive map.',
        hint3: 'Past success building confidence in future ability = mastery experience → self-efficacy.',
        explanation: 'Giving up after failure = learned helplessness (Seligman). Navigating using mental spatial knowledge = cognitive map (Tolman). Past success building confidence = self-efficacy through mastery experience (Bandura — strongest source).'
      }
    },
    {
      id: 'obser3-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Cognitive Learning Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Latent learning = not learning | The organism DID learn — it just didn't SHOW it | Learning and performance are different |
| Learned helplessness = laziness | It's a COGNITIVE condition, not a personality flaw | It comes from uncontrollable negative experiences |
| Self-efficacy = self-esteem | Self-esteem = overall self-worth; self-efficacy = task-specific confidence | High self-esteem ≠ high self-efficacy on math |
| Cognitive maps = actual maps | They are MENTAL representations, not physical | You can't see a cognitive map — it exists in the mind |

**Key Distinction: Learned Helplessness vs. Self-Efficacy**

| Feature | Learned Helplessness | Self-Efficacy |
|---------|---------------------|---------------|
| Researcher | Seligman | Bandura |
| Core belief | "Nothing I do matters" | "I can succeed at this" |
| Caused by | Uncontrollable events | Mastery experiences, models, encouragement |
| Effect on behavior | Passivity, giving up | Persistence, challenge-seeking |
| Connection to | Depression | Achievement, motivation |

> **AP Tip:** These concepts are OPPOSITES in their effect on behavior. If an FRQ asks you to discuss how cognitive factors affect learning, use BOTH — learned helplessness as the negative example and self-efficacy as the positive.
      `
    },
    {
      id: 'obser3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A new employee is told by an encouraging manager, "You\'re going to do great here!" According to Bandura, this would be LEAST effective at building self-efficacy because:',
            options: [
              'Encouragement has no effect on self-efficacy',
              'Verbal persuasion is weaker than mastery experiences at building self-efficacy',
              'Self-efficacy cannot be changed once established',
              'Only vicarious experiences build self-efficacy'
            ],
            correctAnswer: 1,
            explanation: 'Bandura identified four sources of self-efficacy ranked by strength: (1) mastery experiences (strongest), (2) vicarious experiences, (3) verbal persuasion, (4) physiological arousal. While verbal persuasion CAN help, it is relatively weak compared to actual experience of success. The new employee would build stronger self-efficacy by actually succeeding at tasks.'
          },
          {
            question: 'Which scenario best illustrates the difference between learning and performance?',
            options: [
              'A student studies hard and gets an A on the test',
              'A rat runs a maze faster each day with food rewards',
              'A child knows how to solve a math problem but refuses to do homework',
              'A dog salivates when hearing a bell paired with food'
            ],
            correctAnswer: 2,
            explanation: 'The child has LEARNED the math skill (cognitive acquisition) but chooses not to PERFORM it (behavioral demonstration). This is exactly what Tolman demonstrated — learning can exist without performance. The child has the knowledge (latent learning) but lacks the motivation to demonstrate it. This distinction is Bandura and Tolman\'s core challenge to behaviorism.'
          }
        ]
      }
    }
  ]
}
