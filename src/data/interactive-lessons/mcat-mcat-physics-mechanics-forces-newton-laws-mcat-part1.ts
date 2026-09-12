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
- **Friction** $f$, along the surface, opposing sliding (Part 2)

Equilibrium ($a = 0$) means forces balance in **each** direction separately: $\\Sigma F_x = 0$ and $\\Sigma F_y = 0$. Constant velocity is equilibrium too — the first law again.`
    },
    {
      id: 'frc1-worked',
      type: 'text' as const,
      content: `### Worked Example — From Free-Body Diagram to Acceleration

A $10\\;\\text{kg}$ crate on a horizontal floor is pushed with a $60\\;\\text{N}$ horizontal force. Friction opposes the motion with $20\\;\\text{N}$. ($g = 10\\;\\text{m/s}^2$)

**Step 1 — Free-body diagram.** Four forces: weight $mg = 100\\;\\text{N}$ down, normal $N$ up, push $60\\;\\text{N}$ forward, friction $20\\;\\text{N}$ backward.

**Step 2 — Vertical direction.** No vertical acceleration:

$N - mg = 0 \\Rightarrow N = 100\\;\\text{N}$

**Step 3 — Horizontal direction.**

$F_{net} = 60 - 20 = 40\\;\\text{N} \\Rightarrow a = \\frac{40}{10} = 4\\;\\text{m/s}^2$

### Worked Example — Hanging in Equilibrium

A $2\\;\\text{kg}$ picture hangs at rest from a single vertical wire.

$T - mg = 0 \\Rightarrow T = (2)(10) = 20\\;\\text{N}$

Now cut the wire: the only remaining force is gravity, so $a = g = 10\\;\\text{m/s}^2$ downward — regardless of mass. Heavier objects feel more gravitational force but also have proportionally more inertia; the two effects cancel, which is why all objects free-fall at the same $g$.

**MCAT habit:** always ask "what object am I analyzing, and what forces act ON it?" Most wrong answers come from mixing forces on different objects or from inventing a leftover "force of motion" that does not exist.`
    },
    {
      id: 'frc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Newton's Laws & Free-Body Diagrams** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $60\\;\\text{kg}$ astronaut travels to the Moon, where $g = 1.6\\;\\text{m/s}^2$. On the Moon, her mass and weight are:`,
            options: [`Mass $60\\;\\text{kg}$, weight $600\\;\\text{N}$`, `Mass $10\\;\\text{kg}$, weight $96\\;\\text{N}$`, `Mass $60\\;\\text{kg}$, weight $96\\;\\text{N}$`, `Mass $96\\;\\text{kg}$, weight $60\\;\\text{N}$`],
            correctAnswer: 2,
            explanation: `Mass never changes with location: still $60$ kg. Weight is $W = mg = (60)(1.6) = 96$ N. The $600$ N option is her Earth weight.`
          },
          {
            question: `A puck slides on frictionless ice with zero net force acting on it. The puck:`,
            options: [`Continues at constant velocity`, `Gradually slows and stops`, `Gradually speeds up`, `Immediately stops`],
            correctAnswer: 0,
            explanation: `Newton's first law: zero net force means zero acceleration, so velocity stays constant. The intuition that things "naturally slow down" is friction talking, not physics.`
          },
          {
            question: `A net force of $15\\;\\text{N}$ acts on a $3\\;\\text{kg}$ object. Its acceleration is:`,
            options: [`$45\\;\\text{m/s}^2$`, `$0.2\\;\\text{m/s}^2$`, `$18\\;\\text{m/s}^2$`, `$5\\;\\text{m/s}^2$`],
            correctAnswer: 3,
            explanation: `$a = F_{net}/m = 15/3 = 5\\;\\text{m/s}^2$. Multiplying ($45$) or adding ($18$) are the standard slips.`
          },
          {
            question: `A book rests on a table. The Newton's-third-law reaction to the Earth's gravitational pull on the book is:`,
            options: [`The normal force from the table on the book`, `The gravitational pull of the book on the Earth`, `The book's weight`, `The force of the book pressing down on the table`],
            correctAnswer: 1,
            explanation: `Third-law pairs swap the two objects and keep the same interaction: Earth pulls book (gravity), so book pulls Earth (gravity). The normal force is a different interaction (book-table contact), even though it happens to equal $mg$ here.`
          },
          {
            question: `A $2\\;\\text{kg}$ picture hangs at rest from a single wire ($g = 10\\;\\text{m/s}^2$). The tension in the wire is:`,
            options: [`$0\\;\\text{N}$`, `$10\\;\\text{N}$`, `$20\\;\\text{N}$`, `$40\\;\\text{N}$`],
            correctAnswer: 2,
            explanation: `At rest, forces balance: $T = mg = (2)(10) = 20$ N. Tension exists even though nothing moves — equilibrium means balanced forces, not absent forces.`
          }
        ]
      }
    },
    {
      id: 'frc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- First law: constant velocity (including rest) whenever the net force is zero — motion needs no maintaining force
- Second law: $F_{net} = ma$; acceleration points along the NET force
- Third law: equal-and-opposite forces act on DIFFERENT objects and never cancel in one free-body diagram
- Mass (kg, invariant) vs. weight ($mg$, in newtons, location-dependent) — a favorite MCAT discrimination
- Free-body diagrams list only forces acting ON the chosen object; solve $x$ and $y$ separately`
    }
  ]
};
