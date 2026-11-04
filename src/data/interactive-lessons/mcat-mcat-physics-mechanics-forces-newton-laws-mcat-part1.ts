export const mcatMechForcesPart1Data = {
  topicSlug: 'mcat-physics-mechanics-forces-newton-laws-mcat',
  sections: [
    {
      id: 'frc1-intro',
      type: 'text' as const,
      content: `# Forces & Newton's Laws

**Part 1 of 4 — Newton's Laws & Free-Body Diagrams**

Kinematics described motion; dynamics explains it. Every dynamics question on the MCAT reduces to one ritual: **draw the free-body diagram, sum the forces, apply** $F_{net} = ma$.

### The Three Laws

1. **First law (inertia):** with zero net force, velocity is constant — at rest stays at rest, moving keeps moving in a straight line. Motion needs no force to *continue*; it needs force to *change*.
2. **Second law:** $F_{net} = ma$. Acceleration is proportional to net force and inversely proportional to mass, and points in the direction of the **net force** (not necessarily the motion).
3. **Third law:** if A pushes on B, B pushes back on A with equal magnitude and opposite direction. The two forces act on **different objects**, so they never cancel each other in one object's free-body diagram.

### Mass vs. Weight (Classic Discrimination)

| Quantity | What it is | Units | Changes with location? |
|---|---|---|---|
| Mass $m$ | Amount of matter; measure of inertia | kg | Never |
| Weight $W = mg$ | Gravitational force on the mass | N | Yes ($g$ varies) |

A $60\\;\\text{kg}$ astronaut is $60\\;\\text{kg}$ everywhere; her weight is $600\\;\\text{N}$ on Earth ($g = 10\\;\\text{m/s}^2$) but only $96\\;\\text{N}$ on the Moon ($g = 1.6\\;\\text{m/s}^2$).

### Free-Body Diagrams

Draw ONE object, then every force **acting on it** (never forces it exerts on other things):

- **Weight** $mg$, always straight down
- **Normal force** $N$, perpendicular to the contact surface
- **Tension** $T$, along the rope, pulling away from the object
- **Friction** $f$, along the surface, opposing sliding (Part 2 of this lesson)

Equilibrium ($a = 0$) means forces balance in **each** direction separately: $\\Sigma F_x = 0$ and $\\Sigma F_y = 0$. Constant velocity is equilibrium too — the first law again.

When the net force has both an $x$ and a $y$ part, combine them like the sides of a right triangle: $F_{net} = \\sqrt{F_x^2 + F_y^2}$ (a $3$–$4$–$5$ pattern is common, e.g. $6\\;\\text{N}$ and $8\\;\\text{N}$ give $10\\;\\text{N}$).

**MCAT habit:** always ask "what object am I analyzing, and what forces act ON it?" Most wrong answers come from mixing forces on different objects or from inventing a leftover "force of motion" that does not exist.`
    },
    {
      id: 'frc1-worked',
      type: 'text' as const,
      content: `### Worked Example — From Free-Body Diagram to Acceleration

**Problem.** A $10\\;\\text{kg}$ crate on a horizontal floor is pushed with a $60\\;\\text{N}$ horizontal force. Friction opposes the motion with $20\\;\\text{N}$. ($g = 10\\;\\text{m/s}^2$)

- **(a)** Which forces act on the crate?
- **(b)** How large is the normal force from the floor?
- **(c)** What is the net force on the crate, and what is its acceleration?

**(a) Free-body diagram.** Four forces: weight $mg = 100\\;\\text{N}$ down, normal $N$ up, push $60\\;\\text{N}$ forward, friction $20\\;\\text{N}$ backward.

**(b) Vertical direction.** There is no vertical acceleration, so the vertical forces balance:

$N - mg = 0 \\Rightarrow N = 100\\;\\text{N}$

**(c) Horizontal direction.** With the $60\\;\\text{N}$ push forward and the $20\\;\\text{N}$ of friction backward:

$F_{net} = 60 - 20 = 40\\;\\text{N} \\Rightarrow a = \\frac{40}{10} = 4\\;\\text{m/s}^2$

### Worked Example — Hanging in Equilibrium

**Problem.** A $2\\;\\text{kg}$ picture hangs at rest from a single vertical wire. ($g = 10\\;\\text{m/s}^2$)

- **(a)** What is the tension in the wire?
- **(b)** The wire is cut. What is the picture's acceleration?
- **(c)** Would a heavier picture fall with a larger acceleration?

**(a) Tension.** The picture is in equilibrium, so the forces balance: $T - mg = 0 \\Rightarrow T = (2)(10) = 20\\;\\text{N}$.

**(b) After the cut.** The only remaining force is gravity, so $a = g = 10\\;\\text{m/s}^2$ downward.

**(c) Mass cancels.** No. A heavier object feels more gravitational force but also has proportionally more inertia, so $a = mg/m = g$ regardless of mass. That is why all objects free-fall at the same $g$.`
    },
    {
      id: 'frc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Newton's Laws & Free-Body Diagrams** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $70\\;\\text{kg}$ astronaut travels to the Moon, where $g = 1.6\\;\\text{m/s}^2$ ($g_{Earth} = 10\\;\\text{m/s}^2$). On the Moon, his mass and weight are:`,
            options: [`Mass $70\\;\\text{kg}$, weight $700\\;\\text{N}$`, `Mass $11\\;\\text{kg}$, weight $112\\;\\text{N}$`, `Mass $70\\;\\text{kg}$, weight $112\\;\\text{N}$`, `Mass $112\\;\\text{kg}$, weight $70\\;\\text{N}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Mass never changes with location: still $70$ kg. Weight is $W = mg = (70)(1.6) = 112$ N. The $700$ N option is his Earth weight, the $11$ kg option wrongly shrinks the mass along with $g$, and the last option swaps mass and weight.`
          },
          {
            question: `A puck slides on frictionless ice with zero net force acting on it. The puck:`,
            options: [`Continues at constant velocity`, `Gradually slows and stops`, `Gradually speeds up`, `Immediately stops`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Newton's first law: zero net force means zero acceleration, so velocity stays constant. The intuition that things "naturally slow down" is friction talking, not physics.`
          },
          {
            question: `A net force of $15\\;\\text{N}$ acts on a $3\\;\\text{kg}$ object. Its acceleration is:`,
            options: [`$45\\;\\text{m/s}^2$`, `$0.2\\;\\text{m/s}^2$`, `$18\\;\\text{m/s}^2$`, `$5\\;\\text{m/s}^2$`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `$a = F_{net}/m = 15/3 = 5\\;\\text{m/s}^2$. Multiplying ($45$) or adding ($18$) are the standard slips, and $0.2$ divides the mass by the force.`
          },
          {
            question: `A book rests on a table. The Newton's-third-law reaction to the Earth's gravitational pull on the book is:`,
            options: [`The normal force from the table on the book`, `The gravitational pull of the book on the Earth`, `The book's weight`, `The book pressing down on the table`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Third-law pairs swap the two objects and keep the same interaction: Earth pulls book (gravity), so book pulls Earth (gravity). The normal force is a different interaction (book-table contact), even though it happens to equal $mg$ here. The book's weight IS the Earth's pull on the book, the force itself rather than its partner, and the book pressing down on the table is the partner of the normal force.`
          },
          {
            question: `A $3\\;\\text{kg}$ lamp hangs at rest from a single cord ($g = 10\\;\\text{m/s}^2$). The tension in the cord is:`,
            options: [`$0\\;\\text{N}$`, `$3\\;\\text{N}$`, `$30\\;\\text{N}$`, `$60\\;\\text{N}$`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `At rest, forces balance: $T = mg = (3)(10) = 30$ N. Tension exists even though nothing moves — equilibrium means balanced forces, not absent forces, so $0$ N is wrong. $3$ N reports the mass in place of the weight, and $60$ N double-counts the weight.`
          }
        ]
      }
    },
    {
      id: 'frc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **First law.** Zero net force means constant velocity, rest included; force changes motion, it does not sustain it.
- **Second law.** $F_{net} = ma$, and the acceleration points along the NET force, not necessarily along the motion.
- **Third law.** Every force has an equal and opposite partner, and that partner acts on a DIFFERENT object.
- **Free-body diagrams.** Draw one object and only the forces acting ON it, then solve $x$ and $y$ separately.

**Common traps**

- **Cancelling third-law pairs.** The two forces of a pair act on different objects, so they never cancel in one diagram.
- **Normal force as the reaction.** The reaction to Earth's pull on a book is the book's pull on Earth, not the normal force.
- **Mass changing with location.** Mass in kg is the same everywhere; only the weight $W = mg$ changes with $g$.
- **A "force of motion".** A moving object needs no forward force to keep moving; with zero net force it coasts.`
    }
  ]
};
