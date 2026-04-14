export const psychOperantPart1Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'oper1-s1-intro',
      type: 'text' as const,
      content: `
# 🧠 Operant Conditioning

**Part 1 of 7 — Thorndike, Skinner & the Foundations**

Operant conditioning is learning through **consequences** — behaviors that are followed by favorable outcomes are repeated, while behaviors followed by unfavorable outcomes are suppressed. Unlike classical conditioning (which involves involuntary reflexes), operant conditioning involves **voluntary behaviors**.

### Core Definitions

| Term | Definition |
|------|-----------|
| **Thorndike's Law of Effect** | Behaviors followed by satisfying consequences are more likely to be repeated; behaviors followed by unpleasant consequences are less likely |
| **Operant conditioning** | A type of learning where behavior is strengthened or weakened by its consequences (reinforcement or punishment) |
| **Skinner box** | An operant conditioning chamber Skinner designed to study how animals learn through consequences (lever pressing → food pellet) |
| **Respondent vs. operant behavior** | Respondent = involuntary/reflexive (classical conditioning); Operant = voluntary/chosen (operant conditioning) |

### Real-World Example

Think about studying for a test. If you study hard and get an A (positive consequence), you're more likely to study hard again. If you skip studying and fail (negative consequence), you're less likely to skip again. You're learning through the **consequences** of your voluntary behavior — that's operant conditioning.

### Why This Matters for AP Psychology

Operant conditioning is one of the most heavily tested topics on the AP exam. You'll need to classify scenarios as reinforcement or punishment, identify schedules, and compare operant with classical conditioning. This part builds the foundation that everything else rests on.
      `
    },
    {
      id: 'oper1-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Thorndike\'s Law of Effect states that:',
            options: [
              'All behavior is reflexive and involuntary',
              'Behaviors followed by satisfying consequences are more likely to be repeated',
              'Learning occurs only through observation of others',
              'Punishment is always more effective than reinforcement'
            ],
            correctAnswer: 1,
            explanation: 'Thorndike placed cats in puzzle boxes and observed that behaviors leading to escape (satisfying consequence) were repeated faster in subsequent trials. This principle — that consequences shape future behavior — became the foundation for operant conditioning.'
          },
          {
            question: 'What is the key difference between classical and operant conditioning?',
            options: [
              'Classical uses punishment; operant uses reinforcement',
              'Classical involves voluntary behavior; operant involves involuntary reflexes',
              'Classical involves involuntary responses to stimuli; operant involves voluntary behaviors shaped by consequences',
              'There is no meaningful difference between them'
            ],
            correctAnswer: 2,
            explanation: 'Classical conditioning pairs stimuli to produce involuntary responses (like salivation or fear). Operant conditioning shapes voluntary behaviors through consequences (reinforcement and punishment). This distinction is one of the most common AP exam questions.'
          }
        ]
      }
    },
    {
      id: 'oper1-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: From Thorndike to Skinner

**Thorndike's Puzzle Box (1898)**
Edward Thorndike placed cats inside wooden crates with a latch mechanism. The cat had to figure out how to escape to reach food outside. At first, the cat scratched randomly — but over trials, escape time decreased dramatically. The cat "stamped in" the successful behavior because it was followed by a satisfying consequence (food + freedom).

**Skinner's Operant Chamber (1930s–1950s)**
B.F. Skinner took Thorndike's principle and made it systematic. His "Skinner box" contained a lever (for rats) or a disk (for pigeons) that, when pressed, delivered food. Skinner could precisely control:
- **When** reinforcement was delivered
- **How often** it was delivered
- **What type** of consequence followed

### Comparing the Pioneers

| Feature | Thorndike | Skinner |
|---------|-----------|---------|
| **Era** | Late 1800s | Mid 1900s |
| **Apparatus** | Puzzle box (cats) | Operant chamber (rats, pigeons) |
| **Key concept** | Law of Effect | Reinforcement schedules |
| **Focus** | Which behaviors get "stamped in" | Precisely controlling consequences |
| **Legacy** | Foundation of behaviorism | Most systematic study of operant learning |

### The Four Consequences (Preview)

Skinner identified four types of consequences that shape behavior. You'll study each in depth in the next parts:

1. **Positive reinforcement** — adding something pleasant → behavior increases
2. **Negative reinforcement** — removing something unpleasant → behavior increases  
3. **Positive punishment** — adding something unpleasant → behavior decreases
4. **Negative punishment** — removing something pleasant → behavior decreases
      `
    },
    {
      id: 'oper1-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) What is the name of Thorndike's principle that behaviors followed by satisfying consequences are repeated?

      2) What type of behavior does operant conditioning involve — voluntary or involuntary?

      3) What apparatus did Skinner use to study operant conditioning in animals?

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Law of Effect', 'voluntary', 'Skinner box'],
        hint1: 'Three words: Law of ___',
        hint2: 'Operant = chosen behaviors, not reflexes',
        hint3: 'Two words: ___ box — named after the researcher',
        explanation: 'Expected answers: Law of Effect (Thorndike\'s foundational principle), voluntary (operant conditioning involves chosen, not reflexive, behaviors), and Skinner box (the operant conditioning chamber).'
      }
    },
    {
      id: 'oper1-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Thorndike studied learning using a ___',
            options: ['Skinner box', 'puzzle box', 'maze', 'mirror']
          },
          {
            label: 'Operant conditioning shapes ___ behavior through consequences',
            options: ['involuntary', 'reflexive', 'voluntary', 'unconscious']
          },
          {
            label: 'Skinner\'s key contribution was precisely controlling ___',
            options: ['stimuli pairing', 'reinforcement delivery', 'brain chemistry', 'dream analysis']
          }
        ],
        correctAnswers: ['puzzle box', 'voluntary', 'reinforcement delivery'],
        hint1: 'Cats escaped from this apparatus.',
        hint2: 'Operant = chosen actions, not reflexes.',
        hint3: 'He controlled when, how often, and what type of consequence followed behavior.',
        explanation: 'Thorndike used puzzle boxes with cats. Operant conditioning involves voluntary behavior. Skinner\'s major advance was precise control over reinforcement delivery.'
      }
    },
    {
      id: 'oper1-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- Operant conditioning is NOT the same as classical conditioning — operant involves voluntary behaviors and consequences; classical involves involuntary reflexes and stimulus associations.
- Skinner did NOT invent operant conditioning — Thorndike established the Law of Effect first. Skinner systematized and expanded the study.
- "Operant" does NOT mean "operation" or "surgery" — it comes from "operate," meaning the organism operates on its environment to produce consequences.
- Negative reinforcement is NOT punishment — "negative" means removing something, and reinforcement always INCREASES behavior. You'll explore this crucial distinction in Part 2.

### AP Strategy Moves
- When an AP question describes a scenario, first ask: "Is this voluntary behavior (operant) or an involuntary reflex (classical)?"
- Know both Thorndike AND Skinner — the exam tests which pioneer contributed what.
- The four consequences grid (positive/negative × reinforcement/punishment) is the single most important framework in this unit. Master it.
- If a question mentions a "Skinner box" or "operant chamber," you're in operant conditioning territory.
      `
    },
    {
      id: 'oper1-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A dog learns to sit on command because it receives a treat each time. A different dog flinches at the sound of a loud noise. Which type of conditioning explains each behavior?',
            options: [
              'Sitting = operant conditioning (voluntary behavior shaped by a consequence); Flinching = classical conditioning (involuntary reflex)',
              'Both are operant conditioning because both involve learning',
              'Sitting = classical conditioning; Flinching = operant conditioning',
              'Neither involves conditioning — they are instinctive behaviors'
            ],
            correctAnswer: 0,
            explanation: 'Sitting on command is a voluntary behavior reinforced by a treat (operant conditioning). Flinching at a loud noise is an involuntary reflex triggered by a stimulus (classical conditioning). The voluntary vs. involuntary distinction is the clearest way to differentiate the two types.'
          },
          {
            question: 'Thorndike observed that his cats escaped the puzzle box faster with each trial. According to the Law of Effect, why?',
            options: [
              'The cats were classically conditioned to associate the box with food',
              'The successful escape behavior was "stamped in" because it was followed by a satisfying consequence',
              'The cats observed other cats escaping and imitated them',
              'The cats\' reflexes improved through physical practice'
            ],
            correctAnswer: 1,
            explanation: 'The Law of Effect states that behaviors followed by satisfying consequences (escape + food) are strengthened and repeated, while behaviors followed by unsatisfying consequences weaken. The cats\' random scratching decreased while the successful latch-opening behavior increased — it was "stamped in" by its favorable outcome.'
          }
        ]
      }
    }
  ]
}
