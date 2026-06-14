export const physCEMInductionPart2Data = {
  topicSlug: 'em-induction-physics-c-em',
  sections: [
    {
      id: 'physicsc-em-induction-em-p2-intro',
      type: 'text' as const,
      content: `# 🚂 Motional EMF

**Part 2 of 7 — Moving Conductors in Fields**

---

### EMF in a Moving Rod

A rod of length $L$ moving at velocity $v$ perpendicular to $\\vec{B}$:

$$\\mathcal{E} = BLv$$

---

### Derivation from Faraday’s Law

As the rod moves, the area of the circuit changes:
$$\\frac{d\\Phi}{dt} = B\\frac{dA}{dt} = BL\\frac{dx}{dt} = BLv$$

---

### Motional EMF and Force

The current in the circuit: $I = BLv/R$

The force on the rod: $F = BIL = B^2L^2v/R$

> 🔑 The magnetic braking force opposes the motion — this is the principle behind magnetic braking.`
    },
    {
      id: 'physicsc-em-induction-em-p2-microscopic',
      type: 'text' as const,
      content: `### Two Views of Motional EMF

**Flux view (Faraday).** The moving rod changes the circuit area, so $\\mathcal{E} = -\\frac{d\\Phi_B}{dt} = -B\\frac{dA}{dt} = -BLv$. This is the bookkeeping picture you saw above.

**Force view (microscopic).** Inside the moving rod, each free charge $q$ feels a magnetic force $\\vec{F} = q\\vec{v}\\times\\vec{B}$ of magnitude $qvB$, pushing charges along the rod. This acts like a battery: the motional EMF is the work per unit charge,

$\\mathcal{E} = \\frac{W}{q} = \\frac{(qvB)L}{q} = BLv.$

Both views give the **same** $BLv$ — a reassuring consistency check.

### Power Balance

When you pull the rod at constant speed, you supply mechanical power $P_{\\text{mech}} = Fv = \\frac{B^2L^2v^2}{R}$. The resistor dissipates $P_{\\text{elec}} = I^2R = \\left(\\frac{BLv}{R}\\right)^2 R = \\frac{B^2L^2v^2}{R}$. They are equal — every joule of work you do reappears as heat. This is the operating principle of regenerative braking and eddy-current brakes.`
    },
    {
      id: 'physicsc-em-induction-em-p2-worked',
      type: 'text' as const,
      content: `### Worked Example — Terminal Velocity of a Sliding Rod

A conducting rod of mass $m = 0.10\\text{ kg}$ and length $L = 0.50\\text{ m}$ slides on frictionless rails of resistance-equivalent $R = 2.0\\,\\Omega$ inside a vertical field $B = 0.80\\text{ T}$. It is released from rest and falls under gravity while staying horizontal. Find its terminal velocity.

**Step 1 — Equation of motion.** As the rod falls at speed $v$, the motional EMF is $\\mathcal{E} = BLv$, driving current $I = \\frac{BLv}{R}$. The magnetic force on this current opposes motion (Lenz), with magnitude $F_B = BIL = \\frac{B^2L^2v}{R}$. Newton's second law gives

$m\\frac{dv}{dt} = mg - \\frac{B^2L^2}{R}v.$

**Step 2 — Terminal condition.** At terminal velocity the acceleration $\\frac{dv}{dt} = 0$, so $mg = \\frac{B^2L^2}{R}v_t$.

**Step 3 — Solve.** $v_t = \\frac{mgR}{B^2L^2} = \\frac{(0.10)(9.8)(2.0)}{(0.80)^2(0.50)^2} = \\frac{1.96}{0.16} = 12.25\\text{ m/s}.$

**Step 4 — The full solution (calculus).** Separating variables in Step 1 yields $v(t) = v_t\\left(1 - e^{-t/\\tau}\\right)$ with time constant $\\tau = \\frac{mR}{B^2L^2}$. The speed approaches $v_t$ exponentially — exactly like charging in an RC circuit.`
    },
    {
      id: 'physicsc-em-induction-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.5 m rod moves at 2 m/s in a 0.3 T field. The motional EMF is:',
            options: ['$0.15$ V', '$0.3$ V', '$0.6$ V', '$1.0$ V'],
            correctAnswer: 1,
            explanation: '$\\mathcal{E} = BLv = 0.3(0.5)(2) = 0.3$ V.'
          },
          {
            question: 'For the rod above moving at 2 m/s in a circuit of resistance $0.6\\,\\Omega$, the induced current is:',
            options: ['$0.2$ A', '$0.5$ A', '$1.8$ A', '$0.18$ A'],
            correctAnswer: 1,
            explanation: '$I = \\mathcal{E}/R = 0.3/0.6 = 0.5$ A.'
          },
          {
            question: 'The retarding (magnetic braking) force on a rod of length $L$ moving at speed $v$ in field $B$ through a circuit of resistance $R$ is:',
            options: ['$BLv$', '$BLv/R$', '$B^2L^2v/R$', '$B^2L^2v^2/R$'],
            correctAnswer: 2,
            explanation: '$F = BIL = B(BLv/R)L = B^2L^2v/R$. It is proportional to $v$, which produces exponential approach to terminal velocity.'
          },
          {
            question: 'A rod is pulled at constant speed $v$. The power delivered by the external agent equals:',
            options: ['Zero, since magnetic force does no work', 'The electrical power $I^2R$ dissipated in the resistor', 'The kinetic energy of the rod', 'Half the dissipated power'],
            correctAnswer: 1,
            explanation: 'At constant $v$ the net force is zero, so the applied force balances the braking force. The mechanical power input $Fv$ equals $\\frac{B^2L^2v^2}{R} = I^2R$ — energy is conserved, converted to heat.'
          },
          {
            question: 'In the falling-rod problem, doubling the field $B$ (all else fixed) changes the terminal velocity by a factor of:',
            options: ['$2$', '$1/2$', '$1/4$', '$4$'],
            correctAnswer: 2,
            explanation: '$v_t = \\frac{mgR}{B^2L^2} \\propto 1/B^2$. Doubling $B$ multiplies $v_t$ by $1/4$.'
          }
        ]
      }
    }
  ]
};
