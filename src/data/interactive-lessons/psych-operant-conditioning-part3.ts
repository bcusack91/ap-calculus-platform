export const psychOperantPart3Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'oper3-s1-intro',
      type: 'text' as const,
      content: `
## Punishment

**Part 3 of 7 — Positive & Negative Punishment**

Punishment is any consequence that **decreases** the likelihood of a behavior being repeated. Just like reinforcement, punishment comes in two forms:

- **Positive punishment** = adding an aversive stimulus → behavior decreases
- **Negative punishment** = removing a pleasant stimulus → behavior decreases

### Core Definitions

| Term | Definition | Example |
|------|-----------|---------|
| **Positive punishment (+P)** | Adding an unpleasant stimulus after a behavior to decrease it | A speeding ticket (adding a fine) reduces speeding |
| **Negative punishment (-P)** | Removing a pleasant stimulus after a behavior to decrease it | Losing phone privileges reduces rule-breaking |
| **Punishment limitations** | Punishment suppresses behavior temporarily but doesn't teach what TO do; can cause fear, aggression, and avoidance |
| **Reinforcement vs. punishment** | Reinforcement increases behavior; punishment decreases behavior |

### Real-World Example

A teenager stays out past curfew. Their parents take away their car keys for a week (removing a pleasant stimulus). The teenager is less likely to break curfew again. This is **negative punishment** — something desirable was removed to decrease the behavior.

### Why This Matters

The AP exam requires you to classify ANY scenario into one of four categories: +R, -R, +P, or -P. Mastering the 2×2 grid (positive/negative × reinforcement/punishment) is essential. This part completes that grid.
      `
    },
    {
      id: 'oper3-s2-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A parent spanks a child for hitting their sibling. The child hits less often afterward. This is:',
            options: [
              'Negative reinforcement — physical contact is involved',
              'Positive punishment — an aversive stimulus (spanking) is added to decrease hitting',
              'Negative punishment — something pleasant was removed',
              'Positive reinforcement — the parent is responding to the behavior'
            ],
            correctAnswer: 1,
            explanation: 'Spanking ADDS an aversive stimulus (positive = adding) and the hitting behavior DECREASES (punishment). Therefore: positive punishment. Remember, "positive" doesn\'t mean "good" — it means something is being added.'
          },
          {
            question: 'A student talks in class, so the teacher takes away 10 minutes of recess. The student talks less in class afterwards. This is:',
            options: [
              'Positive punishment — recess removal is unpleasant',
              'Negative reinforcement — the talking is removed',
              'Negative punishment — a pleasant stimulus (recess) is removed to decrease the behavior',
              'Positive reinforcement — the teacher is correcting the student'
            ],
            correctAnswer: 2,
            explanation: 'Recess (something pleasant) is REMOVED (negative = removing) and the talking behavior DECREASES (punishment). Negative punishment = removing something desirable to weaken a behavior.'
          }
        ]
      }
    },
    {
      id: 'oper3-s3-deep',
      type: 'text' as const,
      content: `
### Deep Dive: The Complete 2×2 Grid

This is the most important framework in the operant conditioning unit:

|  | **Positive (add)** | **Negative (remove)** |
|--|-------------------|---------------------|
| **Reinforcement (increase behavior)** | +R: Add pleasant stimulus (treat for sitting) | -R: Remove aversive stimulus (aspirin removes headache) |
| **Punishment (decrease behavior)** | +P: Add aversive stimulus (speeding ticket) | -P: Remove pleasant stimulus (lose phone privileges) |

### Why Punishment Has Limitations

Psychologists generally recommend reinforcement over punishment because:

1. **Suppression, not elimination** — Punishment suppresses behavior temporarily but doesn't eliminate the desire. A child punished for lying may just lie better next time.
2. **Doesn't teach alternatives** — Punishment tells you what NOT to do but not what TO do. Reinforcing desired behavior is more effective.
3. **Emotional side effects** — Punishment can cause fear, anxiety, aggression, and avoidance of the punisher (not the behavior).
4. **Models aggression** — Physical punishment teaches children that force is an acceptable way to solve problems (Bandura's social learning theory).
5. **Requires consistency** — Punishment only works if it's immediate and consistent. Inconsistent punishment is largely ineffective.

### When Punishment Works Best

Despite limitations, punishment is most effective when it is:
- **Immediate** — right after the behavior
- **Consistent** — every time the behavior occurs
- **Combined with reinforcement** — reinforcing the desired alternative behavior
- **Explained** — the person understands WHY the behavior is wrong
      `
    },
    {
      id: 'oper3-s4-input',
      type: 'input-boxes' as const,
      content: `
      **Applied Recall** ✍️

      1) In operant conditioning, "positive" means ___ a stimulus. (one word)

      2) Punishment always does what to behavior? (one word — starts with D)

      3) What is a major limitation of punishment — it ___ behavior but doesn't eliminate it. (one word)

      Type the exact term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['adding', 'decreases', 'suppresses'],
        hint1: 'Positive = presenting or ___',
        hint2: 'The opposite of what reinforcement does',
        hint3: 'Punishment pushes behavior down temporarily, but it doesn\'t remove the desire',
        explanation: 'Expected answers: adding (positive = presenting a stimulus), decreases (all punishment decreases behavior), and suppresses (punishment temporarily suppresses behavior but doesn\'t eliminate the underlying motivation).'
      }
    },
    {
      id: 'oper3-s5-dropdown',
      type: 'dropdown-select' as const,
      content: `
      **Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A child gets grounded (loses TV and friends) for misbehaving → behavior decreases. This is ___',
            options: ['positive reinforcement', 'negative reinforcement', 'positive punishment', 'negative punishment']
          },
          {
            label: 'A student gets detention (extra time after school) for cheating → cheating decreases. This is ___',
            options: ['positive reinforcement', 'negative reinforcement', 'positive punishment', 'negative punishment']
          },
          {
            label: 'A major drawback of punishment is that it can cause ___ and avoidance',
            options: ['happiness', 'fear', 'motivation', 'reinforcement']
          }
        ],
        correctAnswers: ['negative punishment', 'positive punishment', 'fear'],
        hint1: 'Pleasant things (TV, friends) are REMOVED → behavior decreases.',
        hint2: 'Detention is ADDED as an aversive consequence → behavior decreases.',
        hint3: 'Punishment often produces negative emotional side effects.',
        explanation: 'Grounding removes pleasant stimuli = negative punishment. Detention adds an aversive stimulus = positive punishment. Punishment can cause fear, aggression, and avoidance of the punisher.'
      }
    },
    {
      id: 'oper3-s6-strategy',
      type: 'text' as const,
      content: `
## Common Misconceptions and Exam Strategy

### Misconceptions to Avoid
- **"Negative punishment is worse than positive punishment"** — "Negative" refers to removing, not severity. Losing phone privileges (negative punishment) isn't necessarily "worse" than a verbal reprimand (positive punishment).
- **"Punishment is always physical"** — Most punishment examples on the AP exam are non-physical: fines, lost privileges, verbal reprimands, detention.
- **"Punishment and negative reinforcement are the same"** — Punishment DECREASES behavior. Negative reinforcement INCREASES behavior. They produce opposite outcomes.
- **"If punishment works, it's always the best approach"** — Psychologists generally recommend reinforcement because it teaches desired behaviors and avoids the negative side effects of punishment.

### AP Strategy Moves
- **Use the 2×2 grid:** First determine if behavior increased (reinforcement) or decreased (punishment). Then determine if something was added (positive) or removed (negative).
- Watch for trick questions where "positive punishment" sounds like reinforcement because something is being "given." A speeding ticket is "given" to you, but it's still positive PUNISHMENT because the behavior decreases.
- FRQ questions often ask you to design a behavior plan — always explain WHY reinforcement is preferred over punishment and what limitations punishment has.
- If a scenario mentions grounding, losing privileges, or having something taken away → think negative punishment first.
      `
    },
    {
      id: 'oper3-s7-applied',
      type: 'multiple-choice' as const,
      content: `
      **Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A company fines employees $50 every time they arrive late. Tardiness decreases initially, but after a few months, some employees start calling in sick instead of arriving late. This outcome best illustrates:',
            options: [
              'Positive reinforcement — the fine motivates on-time behavior',
              'A limitation of punishment — it suppressed tardiness but created avoidance behavior instead',
              'Negative reinforcement — removing the fine increases attendance',
              'Classical conditioning — employees associate work with punishment'
            ],
            correctAnswer: 1,
            explanation: 'The fine is positive punishment (adding an aversive stimulus to decrease tardiness). However, it illustrates a key limitation: punishment can cause avoidance of the punisher/situation rather than genuinely changing the underlying behavior. Employees avoided the fine by calling in sick — a worse outcome.'
          },
          {
            question: 'A parent wants to reduce their child\'s screen time. They decide to give the child extra chores every time they exceed 2 hours of screen time. Classify this consequence AND suggest a more effective alternative:',
            options: [
              'This is positive punishment (adding chores); reinforcing reading or outdoor play instead would be more effective',
              'This is negative punishment (removing screen time); the approach is already ideal',
              'This is negative reinforcement (removing screen access); adding more punishments would be more effective',
              'This is positive reinforcement (adding chores as a reward); the child will enjoy extra responsibilities'
            ],
            correctAnswer: 0,
            explanation: 'Extra chores are an aversive stimulus ADDED after the behavior = positive punishment. A more effective approach would be positive reinforcement of alternative activities — rewarding the child for reading, playing outside, or choosing to turn off screens. This teaches what TO do rather than just what NOT to do.'
          }
        ]
      }
    }
  ]
}
