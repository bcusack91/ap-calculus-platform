export const psychObservationalPart4Data = {
  topicSlug: 'observational-learning-cognition',
  sections: [
    {
      id: 'obser4-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Observational & Cognitive Learning

**Part 4 of 7 — Insight Learning & Beyond**

While Thorndike saw learning as gradual trial-and-error, Wolfgang Köhler demonstrated something different: sometimes learning happens in a sudden flash of understanding. This "aha!" moment — insight learning — cannot be explained by behaviorism's slow, incremental reinforcement model.

| Concept | Researcher | Definition | Key Feature |
|---------|-----------|------------|-------------|
| **Insight learning** | Köhler (1925) | Sudden realization of a solution without trial-and-error | Discontinuous — "aha!" moment |
| **Trial-and-error** | Thorndike | Learning through repeated attempts and feedback | Gradual, incremental improvement |
| **Abstract learning** | Harlow | Learning a "rule" that transfers across problems | Learning to learn (learning sets) |
| **Transfer of learning** | — | Applying knowledge from one situation to another | Positive transfer (helps) vs. negative transfer (hinders) |

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
              'Insight learning — Sultan suddenly perceived the relationship between boxes and bananas',
              'Operant conditioning — Sultan was reinforced for stacking boxes',
              'Classical conditioning — boxes became associated with food'
            ],
            correctAnswer: 1,
            explanation: 'Sultan didn\'t randomly try solutions — he paused, surveyed the situation, and then acted decisively and correctly on the first attempt. This sudden reorganization of the problem (seeing boxes as a tool to reach bananas) is the hallmark of insight learning. Trial-and-error would show gradual improvement, not a sudden solution.'
          },
          {
            question: 'A student who masters algebra finds it easier to learn calculus because both require similar logical thinking. This is an example of:',
            options: [
              'Negative transfer — algebra interferes with calculus',
              'Insight learning — the student suddenly understands calculus',
              'Positive transfer — skills from algebra help with calculus',
              'Latent learning — the algebra knowledge was hidden until needed'
            ],
            correctAnswer: 2,
            explanation: 'Positive transfer occurs when learning one skill facilitates learning another related skill. Algebra develops logical reasoning and equation-solving skills that directly help with calculus. Negative transfer would occur if the prior learning INTERFERED (e.g., driving on the right making it harder to drive on the left in the UK).'
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
4. On later trials, Sultan solved similar problems immediately — showing **transfer of learning**

**Key characteristics of insight learning:**
- **Sudden** — no gradual improvement; solution appears all at once
- **Complete** — once insight occurs, the learner performs perfectly (no practice needed)
- **Transferable** — insight applies to similar problems
- **Requires prerequisites** — Sultan needed prior experience with boxes and sticks

### Thorndike vs. Köhler: The Great Comparison

| Feature | Thorndike (Trial & Error) | Köhler (Insight) |
|---------|--------------------------|-------------------|
| Animal studied | Cats in puzzle boxes | Chimpanzees with tools |
| Learning pattern | Gradual, decreasing errors | Sudden, all-or-nothing |
| Graph shape | Smooth learning curve | Flat → sudden drop in errors |
| Cognition involved? | Minimal (mechanical) | High (understanding relationships) |
| Transfer? | Limited | Strong |
| Key concept | Law of Effect | Restructuring/reorganization |

### Harlow's Learning Sets ("Learning to Learn")

Harry Harlow (also famous for attachment studies) gave monkeys a series of discrimination problems. On the FIRST problem, monkeys used trial-and-error. But by the HUNDREDTH problem, they solved it in ONE trial. They had learned the ABSTRACT RULE of how to solve discrimination problems — they "learned to learn."

This demonstrates **abstract learning** — understanding the underlying principle rather than just the specific response. It's a cognitive process that behaviorism struggles to explain.
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
          { label: 'When learning one skill helps with learning a new one, it\'s called ___ transfer', answer: 'positive' }
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
          { label: 'A cat escapes a puzzle box faster each time (gradual improvement)', options: ['Insight learning', 'Trial-and-error (Thorndike)', 'Observational learning', 'Learned helplessness'] },
          { label: 'Knowing Spanish makes learning Italian easier', options: ['Negative transfer', 'Positive transfer', 'Latent learning', 'Abstract learning'] }
        ],
        correctAnswers: ['Insight learning', 'Trial-and-error (Thorndike)', 'Positive transfer'],
        hint1: 'Sudden "aha!" moment after struggling = insight learning.',
        hint2: 'Gradual improvement with each trial = Thorndike\'s trial-and-error.',
        hint3: 'A prior skill helping with a new related skill = positive transfer.',
        explanation: 'Sudden realization = insight (Köhler). Gradual escape improvement = trial-and-error (Thorndike). Spanish helping Italian = positive transfer (similar languages facilitate learning).'
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
- **Bandura**: Attention, retention, and motivation → learning without direct reinforcement

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
            question: 'A researcher gives monkeys 200 different object discrimination problems. On the first few problems, the monkeys perform at chance level. By problem 190, they solve new problems on the first trial. This pattern best demonstrates:',
            options: [
              'Classical conditioning — the monkeys became conditioned to the correct objects',
              'Insight learning — each problem was solved with an "aha!" moment',
              'Learning sets — the monkeys learned the abstract rule for solving discrimination problems',
              'Operant conditioning — the monkeys were reinforced for choosing correctly'
            ],
            correctAnswer: 2,
            explanation: 'This is Harlow\'s learning sets experiment. The monkeys didn\'t just learn specific object-reward associations (operant) — they learned the ABSTRACT STRATEGY of how to solve discrimination problems in general. By problem 190, they needed only one trial because they had "learned to learn." This is a cognitive process beyond simple reinforcement.'
          },
          {
            question: 'A physics student who excels at Newtonian mechanics initially struggles with quantum mechanics because the rules are contradictory. This is best explained by:',
            options: [
              'Positive transfer — Newtonian skills help with quantum',
              'Negative transfer — prior Newtonian learning interferes with quantum learning',
              'Insight learning — the student will suddenly understand quantum mechanics',
              'Learned helplessness — the student gives up on quantum mechanics'
            ],
            correctAnswer: 1,
            explanation: 'Negative transfer occurs when previously learned knowledge INTERFERES with learning new material. In this case, Newtonian mechanics (deterministic, objects have definite positions) contradicts quantum mechanics (probabilistic, particles have wave-like properties), making the transition harder, not easier.'
          }
        ]
      }
    }
  ]
}
