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

where $r$ is the distance from pivot to the point of application and $\\theta$ is the angle between $r$ and $F$. Maximum torque comes from pushing perpendicular to the lever arm ($\\sin 90^\\circ = 1$); a force aimed straight through the pivot ($r = 0$ or $\\theta = 0$) produces **zero** torque, no matter how large.

### Complete Equilibrium — Two Conditions

| Condition | Prevents |
|---|---|
| $\\Sigma F = 0$ (translational) | Linear acceleration |
| $\\Sigma\\tau = 0$ (rotational) | Angular acceleration |

For balance problems, pick the pivot cleverly: any force acting **at** the pivot drops out of the torque equation. Counterclockwise torques balance clockwise torques:

$r_1F_1 = r_2F_2 \\quad \\text{(perpendicular forces)}$

### The Body Is Built from Levers

MCAT passages love musculoskeletal setups. Most limb muscles insert **close to the joint**, while the load sits far away (a weight in the hand). Torque balance then demands:

$F_{muscle} \\times r_{small} = F_{load} \\times r_{large} \\Rightarrow F_{muscle} \\gg F_{load}$

Muscles routinely exert forces several times the load's weight. The trade-off: the load end moves through a large arc quickly — anatomy sacrifices force advantage for **speed and range of motion**.

**Center of gravity:** an object balances when the support is under its center of gravity; for torque problems, treat the object's entire weight as acting at that single point (the middle of a uniform beam).`
    },
    {
      id: 'frc4-worked',
      type: 'text' as const,
      content: `### Worked Example — The Forearm as a Lever (Passage Style)

*Biomechanics researchers model the forearm as a rigid bar pivoting at the elbow. The biceps inserts* $5\\;\\text{cm}$ *from the elbow and pulls vertically upward. A subject holds a* $20\\;\\text{N}$ *ball in the hand,* $40\\;\\text{cm}$ *from the elbow, with the forearm horizontal and stationary. (Neglect the forearm's own weight.)*

**Step 1 — Torque balance about the elbow.** Choosing the elbow as the pivot eliminates the unknown joint-reaction force:

$F_{biceps}(0.05) = (20)(0.40)$

**Step 2 — Solve.**

$F_{biceps} = \\frac{8}{0.05} = 160\\;\\text{N}$

The muscle pulls with **eight times** the ball's weight — the ratio of the lever arms ($40/5 = 8$).

**Step 3 — Joint reaction force.** Translational equilibrium: upward forces $160\\;\\text{N}$ (biceps) must balance downward forces $20\\;\\text{N}$ (ball) plus the elbow joint force $R$:

$160 = 20 + R \\Rightarrow R = 140\\;\\text{N}$

The humerus presses **down** on the forearm at the joint with $140\\;\\text{N}$ — joints bear forces far exceeding the loads we carry, which is exactly the punchline such passages build toward.

**Passage strategy:** (1) draw the bar, pivot, and every force with its distance; (2) put the pivot where the ugliest unknown acts; (3) use torque balance for the muscle force, then force balance for the joint force. Data-table versions simply repeat this at several angles — remember only the perpendicular component $F\\sin\\theta$ contributes.`
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
            explanation: `$\\tau = rF\\sin 90^\\circ = (0.5)(10)(1) = 5\\;\\text{N}\\cdot\\text{m}$. Dividing instead of multiplying gives $20$.`
          },
          {
            question: `A $30\\;\\text{kg}$ child sits $2\\;\\text{m}$ from a seesaw's pivot. For balance, a $40\\;\\text{kg}$ child must sit on the other side at:`,
            options: [`$2.67\\;\\text{m}$`, `$2\\;\\text{m}$`, `$1\\;\\text{m}$`, `$1.5\\;\\text{m}$`],
            correctAnswer: 3,
            explanation: `Torque balance: $(30)(2) = (40)d \\Rightarrow d = 60/40 = 1.5$ m. The heavier child sits closer; $2.67$ m inverts the ratio.`
          },
          {
            question: `A force applied directly at the pivot point of a lever produces:`,
            options: [`Maximum torque`, `Torque equal to $rF$`, `Zero torque`, `Torque equal to $F\\sin\\theta$`],
            correctAnswer: 2,
            explanation: `Torque needs a lever arm: with $r = 0$, $\\tau = rF\\sin\\theta = 0$ regardless of the force's size. This is also why choosing the pivot at an unknown force's location removes it from the torque equation.`
          },
          {
            question: `For an object to be in complete static equilibrium, which must be true?`,
            options: [`Net force AND net torque are both zero`, `Net force is zero; net torque may be anything`, `Net torque is zero; net force may be anything`, `Its speed is constant and nonzero`],
            correctAnswer: 0,
            explanation: `Zero net force alone still allows spinning (a couple of equal, opposite, offset forces); zero net torque alone still allows linear acceleration. Statics requires both conditions.`
          },
          {
            question: `The biceps inserts much closer to the elbow than the load held in the hand. To hold the load stationary, the biceps force must be:`,
            options: [`Less than the load's weight`, `Exactly equal to the load's weight`, `Greater than the load's weight`, `Zero, since the joint bears the load`],
            correctAnswer: 2,
            explanation: `Torque balance with a shorter lever arm demands a proportionally larger force: $F_{muscle} = F_{load}(r_{load}/r_{muscle})$, often 5-10 times the load. The anatomy trades force for speed and range of motion.`
          }
        ]
      }
    },
    {
      id: 'frc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- $\\tau = rF\\sin\\theta$: only the perpendicular component of force rotates; forces through the pivot give zero torque
- Complete equilibrium needs BOTH $\\Sigma F = 0$ and $\\Sigma\\tau = 0$
- Choose the pivot where an unknown force acts to eliminate it from the torque equation
- Body levers: muscles insert near joints, so muscle forces exceed loads by the lever-arm ratio; joints bear even more
- Treat an object's weight as acting at its center of gravity (midpoint of a uniform beam)
- Passage recipe: torque balance first for the muscle, then force balance for the joint reaction`
    }
  ]
};
