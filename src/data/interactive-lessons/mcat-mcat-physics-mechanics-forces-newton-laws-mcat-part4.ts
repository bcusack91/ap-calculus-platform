export const mcatMechForcesPart4Data = {
  topicSlug: 'mcat-physics-mechanics-forces-newton-laws-mcat',
  sections: [
    {
      id: 'frc4-intro',
      type: 'text' as const,
      content: `# Forces & Newton's Laws

**Part 4 of 4 — MCAT Integration: Torque, Equilibrium & the Body as Levers**

### Torque: Force with Leverage

A force's ability to rotate an object about a pivot is its **torque**:

$\\tau = rF\\sin\\theta$

where $r$ is the distance from pivot to the point of application and $\\theta$ is the angle between $r$ and $F$. Maximum torque comes from pushing perpendicular to the lever arm ($\\sin 90^\\circ = 1$); a force aimed straight through the pivot ($r = 0$, or $\\theta = 0^\\circ$ or $180^\\circ$) produces **zero** torque, no matter how large.

### Complete Equilibrium — Two Conditions

| Condition | Prevents |
|---|---|
| $\\Sigma F = 0$ (translational) | Linear acceleration |
| $\\Sigma\\tau = 0$ (rotational) | Angular acceleration |

For balance problems, pick the pivot cleverly: any force acting **at** the pivot drops out of the torque equation. Counterclockwise torques balance clockwise torques; for forces perpendicular to the lever arm:

$r_1F_1 = r_2F_2$

### The Body Is Built from Levers

MCAT passages love musculoskeletal setups. Most limb muscles insert **close to the joint**, while the load sits far away (a weight in the hand). Torque balance then demands:

$F_{muscle} \\times r_{small} = F_{load} \\times r_{large} \\Rightarrow F_{muscle} \\gg F_{load}$

Muscles routinely exert forces several times the load's weight. The trade-off: the load end moves through a large arc quickly — anatomy sacrifices force advantage for **speed and range of motion**.

**Center of gravity:** an object balances when the support is under its center of gravity; for torque problems, treat the object's entire weight as acting at that single point (the middle of a uniform beam).

**Lever-problem recipe:** (1) draw the bar, pivot, and every force with its distance; (2) put the pivot where the ugliest unknown acts; (3) use torque balance for the muscle force, then force balance for the joint force. Data-table versions repeat this at several angles — only the perpendicular component $F\\sin\\theta$ contributes.`
    },
    {
      id: 'frc4-worked',
      type: 'text' as const,
      content: `### Worked Example — The Forearm as a Lever

**Problem.** A forearm pivoting at the elbow is held horizontal and still. The biceps inserts $5\\;\\text{cm}$ from the elbow and pulls straight up; a $20\\;\\text{N}$ ball in the hand sits $40\\;\\text{cm}$ from the elbow. (Neglect the forearm's weight.)

- **(a)** Where should the pivot go, and what does torque balance about it say?
- **(b)** How hard must the biceps pull?
- **(c)** What force does the elbow joint exert on the forearm?
- **(d)** The forearm is lowered to $30^\\circ$ below horizontal; the biceps and ball forces stay vertical. Does the biceps force change?

**(a) Torque balance about the elbow.** Choosing the elbow as the pivot eliminates the unknown joint-reaction force:

$F_{biceps}(0.05) = (20)(0.40)$

**(b) Solve.** From (a), $F_{biceps}(0.05) = (20)(0.40) = 8\\;\\text{N}\\cdot\\text{m}$, so:

$F_{biceps} = \\frac{8}{0.05} = 160\\;\\text{N}$

The muscle pulls with **eight times** the ball's weight — the ratio of the lever arms ($40/5 = 8$).

**(c) Joint reaction force.** Translational equilibrium: the $160\\;\\text{N}$ biceps force from (b) must balance the $20\\;\\text{N}$ ball plus the downward elbow joint force $R$:

$160 = 20 + R \\Rightarrow R = 140\\;\\text{N}$

The humerus presses **down** on the forearm with $140\\;\\text{N}$, seven times the load.

**(d) Tilted forearm.** No. Each vertical force's perpendicular lever arm is its distance times $\\cos 30^\\circ$, so both lever arms shrink by the same factor. Their ratio stays $40/5 = 8$, and $F_{biceps} = 8(20) = 160\\;\\text{N}$ still.`
    },
    {
      id: 'frc4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Torque, Equilibrium & Levers** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $10\\;\\text{N}$ force is applied perpendicular to a wrench $0.5\\;\\text{m}$ from the bolt. The torque about the bolt is:`,
            options: [`$20\\;\\text{N}\\cdot\\text{m}$`, `$5\\;\\text{N}\\cdot\\text{m}$`, `$0.05\\;\\text{N}\\cdot\\text{m}$`, `$10\\;\\text{N}\\cdot\\text{m}$`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `$\\tau = rF\\sin 90^\\circ = (0.5)(10)(1) = 5\\;\\text{N}\\cdot\\text{m}$. Dividing the force by the distance gives $20$, dividing the distance by the force gives $0.05$, and $10$ is the force alone with no lever arm.`
          },
          {
            question: `A $30\\;\\text{kg}$ child sits $2\\;\\text{m}$ from a seesaw's pivot. For balance, a $40\\;\\text{kg}$ child must sit on the other side at:`,
            options: [`$2.67\\;\\text{m}$`, `$2\\;\\text{m}$`, `$1\\;\\text{m}$`, `$1.5\\;\\text{m}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Torque balance: $(30)(2) = (40)d \\Rightarrow d = 60/40 = 1.5$ m. The heavier child sits closer; $2.67$ m inverts the ratio, $2$ m ignores the mass difference, and $1$ m halves the distance although the mass ratio is only $3/4$.`
          },
          {
            question: `A force applied directly at the pivot point of a lever produces:`,
            options: [`Maximum torque`, `Torque equal to $F$ times the lever's length`, `Zero torque`, `Torque equal to $F\\sin\\theta$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Torque needs a lever arm: with $r = 0$, $\\tau = rF\\sin\\theta = 0$ regardless of the force's size. The lever's length is irrelevant, because $r$ is measured from the pivot to where the force acts, and $F\\sin\\theta$ is a force, not a torque. This is also why choosing the pivot at an unknown force's location removes it from the torque equation.`
          },
          {
            question: `For an object to be in complete static equilibrium, which must be true?`,
            options: [`Zero net force and zero net torque`, `Zero net force; any net torque`, `Zero net torque; any net force`, `Neither; it need only be at rest`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Zero net force alone still allows spinning (a couple of equal, opposite, offset forces); zero net torque alone still allows linear acceleration. Statics requires both conditions. Being at rest for an instant is not enough: a ball thrown straight up is momentarily at rest at the top but still accelerating.`
          },
          {
            question: `The biceps inserts much closer to the elbow than the load held in the hand. To hold the load stationary, the biceps force must be:`,
            options: [`Less than the load's weight`, `Exactly equal to the load's weight`, `Greater than the load's weight`, `Zero, since the joint bears the load`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Torque balance with a shorter lever arm demands a proportionally larger force: $F_{muscle} = F_{load}(r_{load}/r_{muscle})$, often 5-10 times the load. The anatomy trades force for speed and range of motion.`
          }
        ]
      }
    },
    {
      id: 'frc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Torque.** $\\tau = rF\\sin\\theta$: only the perpendicular part of a force rotates, and a force through the pivot gives zero.
- **Two equilibrium conditions.** Complete equilibrium needs both $\\Sigma F = 0$ and $\\Sigma\\tau = 0$.
- **Choose the pivot.** Pivot where an unknown force acts, and place a uniform beam's weight at its center of gravity.
- **Body levers.** Muscles insert near joints, so muscle force exceeds the load by the lever-arm ratio.

**Common traps**

- **One condition is enough.** Zero net force still allows spinning; zero net torque still allows linear acceleration.
- **Muscle force equals the load.** A short lever arm demands several times the load: $160\\;\\text{N}$ to hold a $20\\;\\text{N}$ ball.
- **Ignoring the joint force.** Force balance gives the joint reaction, which exceeds the load itself ($140\\;\\text{N}$ vs. $20\\;\\text{N}$).
- **Using the full force.** At an angle, only the perpendicular component $F\\sin\\theta$ contributes torque.`
    }
  ]
};
