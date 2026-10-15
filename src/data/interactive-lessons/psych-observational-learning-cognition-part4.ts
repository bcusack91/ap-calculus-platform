export const psychObservationalPart4Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Observational & Cognitive Learning

**Part 4 of 7 — Insight Learning vs. Trial and Error**

While Thorndike saw learning as gradual trial-and-error, Wolfgang Köhler demonstrated something different: sometimes learning happens in a sudden flash of understanding. This "aha!" moment — insight learning — cannot be explained by behaviorism's slow, incremental reinforcement model.

| Concept | Researcher | Definition | Key Feature |
|---------|-----------|------------|-------------|
| **Insight learning** | Köhler (1925) | Sudden realization of a solution without trial-and-error | Discontinuous — "aha!" moment |
| **Trial-and-error** | Thorndike | Learning through repeated attempts and feedback | Gradual, incremental improvement |
| **Latent learning** | Tolman | Learning without reinforcement that is not immediately evident | Shows up later, once there is a reason to use it |

> 🔑 **CED 3.9.B.1:** Insight learning occurs when the solution to a problem appears **without any association, consequence, or model being present**. That phrase is the test: no pairing (classical), no reinforcement (operant), and no one to imitate (observational).

### 🗣️ Real-World Example

You're stuck on a difficult puzzle for 30 minutes. Suddenly, while getting a glass of water, the solution pops into your head — you see how all the pieces fit together. You didn't try random solutions; the answer came all at once. This is insight learning, and it's fundamentally different from the gradual trial-and-error that Thorndike's cats showed in puzzle boxes.

> **Why This Matters for the AP Exam:** Insight learning (Köhler) vs. trial-and-error (Thorndike) is a classic comparison question. Know that insight is SUDDEN and involves REORGANIZATION of the problem, while trial-and-error is GRADUAL and involves random attempts.
      `
    },
    {
      id: 'obser4-s2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Köhler\'s chimpanzee Sultan was in a cage with bananas hanging from the ceiling and boxes on the floor. After pausing and looking around, Sultan suddenly stacked the boxes and reached the bananas. This demonstrates:',
            options: [
              'Trial-and-error learning — Sultan tried random solutions until one worked',
              'Insight learning — Sultan grasped the problem\'s structure all at once',
              'Operant conditioning — Sultan was reinforced each time he stacked boxes',
              'Classical conditioning — the boxes became associated with getting food'
            ],
            correctAnswer: 1,
            explanation: 'Sultan didn\'t randomly try solutions — he paused, surveyed the situation, and then acted decisively and correctly on the first attempt. This sudden reorganization of the problem (seeing boxes as a tool to reach bananas) is the hallmark of insight learning. Trial-and-error would show gradual improvement, not a sudden solution.'
          },
          {
            question: 'A toddler\'s ball rolls under the couch. Nobody is in the room, and she has never seen anyone fetch a ball this way. She stares for a moment, then picks up a toy broom and sweeps the ball out on her very first try. This BEST illustrates:',
            options: [
              'Observational learning — she is copying a model she saw retrieve a ball before',
              'Shaping — she is reinforced for successive approximations of using the broom',
              'Insight learning — the solution appears with no association, consequence or model',
              'Latent learning — she learned the couch layout earlier and only now has a reason to show it'
            ],
            correctAnswer: 2,
            explanation: 'The solution appears suddenly, on the first attempt, with no model to imitate, no prior reinforcement, and no conditioned association, which matches the CED definition of insight learning. Observational learning requires a model, shaping requires a series of reinforced approximations, and latent learning involves knowledge acquired earlier without reinforcement.'
          }
        ]
      }
    },
    {
      id: 'obser4-s3-deep-dive',
      type: 'text' as const,
      content: `
### 📚 Deep Dive: Köhler's Insight Studies

**The Banana & Box Problem (Sultan the Chimpanzee)**
1. Bananas hung from the ceiling, out of reach
2. Boxes (and sometimes sticks) available in the cage
3. Sultan sat, looked around, then SUDDENLY stacked boxes and reached the bananas
4. On later trials, Sultan solved similar problems immediately, without returning to random attempts

**Key characteristics of insight learning:**
- **Sudden** — no gradual improvement; solution appears all at once
- **Complete** — once insight occurs, the learner performs perfectly (no practice needed)
- **Applies to new versions** — once grasped, the solution works on similar problems
- **Requires prerequisites** — Sultan needed prior experience with boxes and sticks

### Thorndike vs. Köhler: The Great Comparison

| Feature | Thorndike (Trial & Error) | Köhler (Insight) |
|---------|--------------------------|-------------------|
| Animal studied | Cats in puzzle boxes | Chimpanzees with tools |
| Learning pattern | Gradual, decreasing errors | Sudden, all-or-nothing |
| Graph shape | Smooth learning curve | Flat → sudden drop in errors |
| Cognition involved? | Minimal (mechanical) | High (understanding relationships) |
| Key concept | Law of Effect | Restructuring/reorganization |

### Reading the Learning Curve

On the AP exam you may be asked to identify a learning process from a graph or table of errors across trials (skill 3.A). The SHAPE of the curve is the clue.

| Trial | Errors: cat in puzzle box (trial and error) | Errors: chimp with boxes (insight) |
|-------|--------------------------------------------|-----------------------------------|
| 1 | 12 | 10 |
| 2 | 10 | 10 |
| 3 | 8 | 9 |
| 4 | 6 | 0 |
| 5 | 4 | 0 |
| 6 | 3 | 0 |

- **Trial and error:** errors fall a little on each trial, a smooth downward slope.
- **Insight:** errors stay high, then drop to zero at once and stay there, a step-shaped curve.

> **AP Connection:** A step-shaped drop with no reinforcement during the "flat" trials is the data signature of insight. A gradual slope is the signature of learning by consequences.
      `
    },
    {
      id: 'obser4-s4-input-boxes',
      type: 'input-boxes' as const,
      content: `
**Recall Practice** ✍️
      `,
      exercise: {
        inputs: [
          { label: 'Who demonstrated insight learning with chimpanzees?', answer: 'Köhler' },
          { label: 'Learning through gradual repeated attempts is called ___ and error', answer: 'trial' },
          { label: 'Learning that happens without reinforcement and is not immediately evident is called ___ learning', answer: 'latent' }
        ]
      }
    },
    {
      id: 'obser4-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Learning Type** 🔍
      `,
      exercise: {
        dropdowns: [
          { label: 'A student suddenly sees how to solve a math proof after struggling for hours', options: ['Trial-and-error', 'Insight learning', 'Latent learning', 'Classical conditioning'] },
          { label: 'A cat escapes a puzzle box faster each time (gradual improvement)', options: ['Insight learning', 'Trial-and-error learning', 'Observational learning', 'Learned helplessness'] },
          { label: 'A rat that wandered a maze for days without food takes the shortest route as soon as food is placed at the end', options: ['Insight learning', 'Latent learning', 'Trial-and-error learning', 'Learned helplessness'] }
        ],
        correctAnswers: ['Insight learning', 'Trial-and-error learning', 'Latent learning'],
        hint1: 'Sudden "aha!" moment after struggling = insight learning.',
        hint2: 'Gradual improvement with each trial = Thorndike\'s trial-and-error.',
        hint3: 'The rat learned the maze without reinforcement; the learning only showed once food gave it a reason.',
        explanation: 'Sudden realization = insight (Köhler). Gradual escape improvement = trial-and-error (Thorndike). Rat taking the shortest route once food appears = latent learning (learned without reinforcement, shown later).'
      }
    },
    {
      id: 'obser4-s6-strategy',
      type: 'text' as const,
      content: `
### 🎯 AP Exam Strategy: Insight Learning Traps

| Common Mistake | Why It's Wrong | Correct Understanding |
|----------------|---------------|----------------------|
| Insight = lucky guess | Insight involves genuine understanding, not luck | Sultan understood the box-banana relationship |
| Insight requires no prior knowledge | Prior experience with materials is needed | Sultan needed to know boxes can be stacked |
| Trial-and-error = no learning | It IS learning — just gradual | Thorndike's cats DID learn to escape faster |
| All learning is either insight or trial-and-error | Observational, classical, and operant are other types | Multiple learning mechanisms exist |

**The Cognitive Revolution in Learning:**

The common thread connecting insight (Köhler), cognitive maps (Tolman), latent learning (Tolman), and observational learning (Bandura) is that they all challenged strict behaviorism by showing that MENTAL PROCESSES are involved in learning:
- **Köhler**: Reorganization of mental representations → sudden solution
- **Tolman**: Internal spatial maps → navigation without reinforcement
- **Bandura**: Watching a model and the model's consequences → learning without direct reinforcement

> **AP Tip:** If a question asks "Which finding challenged strict behaviorism?" — look for answers involving cognitive maps, latent learning, insight, or observational learning. All of these demonstrated that organisms do more than just respond to stimuli.
      `
    },
    {
      id: 'obser4-s7-applied',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🔬
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher records how many wrong moves a chimpanzee makes on each of eight trials of a new tool problem: 9, 9, 8, 9, 0, 0, 0, 0. No food is given until the problem is solved. Which interpretation BEST fits these data?',
            options: [
              'Trial-and-error learning, because errors drop steadily across the trials',
              'Insight learning, because errors stay high and then fall to zero all at once',
              'Shaping, because each small improvement on the early trials was reinforced',
              'Spontaneous recovery, because the errors return after a period of no responding'
            ],
            correctAnswer: 1,
            explanation: 'The errors hover near 9 and then drop to zero at trial 5 and stay there, the step-shaped pattern of insight learning. A steady decline would suggest trial and error, no reinforcement was given for small improvements, and spontaneous recovery describes a conditioned response returning after extinction.'
          },
          {
            question: 'Which finding would MOST directly support the claim that cognition, not just reinforcement, plays a role in learning?',
            options: [
              'A cat escapes a puzzle box a little faster on each trial as its errors decline',
              'A dog salivates at a bell that has been paired with food many times',
              'A pigeon pecks a key more often after its pecks are followed by grain',
              'A chimpanzee solves a new problem on its first try after surveying the materials'
            ],
            correctAnswer: 3,
            explanation: 'Solving a new problem on the first attempt, with no reinforcement history for that solution, points to a mental reorganization of the problem, which is insight learning. The cat\'s gradual improvement, the pigeon\'s reinforced pecking, and the dog\'s conditioned salivation can all be explained by conditioning alone.'
          }
        ]
      }
    }
  ]
}
