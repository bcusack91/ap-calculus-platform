export const physCEMCircuitsPart5Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p5-intro',
      type: 'text' as const,
      content: `# EMF and Internal Resistance

**Part 5 of 7 — Real Batteries**

---

### Electromotive Force (EMF)

EMF ($\\mathcal{E}$) is the potential difference a battery provides with no current flowing (open circuit).

With internal resistance $r$, the terminal voltage under load is:

$V_{\\text{terminal}} = \\mathcal{E} - Ir$

For a single external resistor $R$, the current is set by both resistances:

$I = \\frac{\\mathcal{E}}{R + r}$

---

### Power Delivered

$P_{\\text{delivered}} = I^2 R_{\\text{external}}$

$P_{\\text{wasted}} = I^2 r$

Maximum power transfer to the load occurs when $R_{\\text{ext}} = r$.

> Internal resistance means the terminal voltage drops as the load current increases.`
    },
    {
      id: 'physicsc-dc-circuits-em-p5-worked',
      type: 'text' as const,
      content: `### Worked Example — Maximum Power Transfer (a Calculus Optimization)

**Problem.** A battery has EMF $\\mathcal{E}$ and internal resistance $r$. Show that the external resistance $R$ which maximizes the power delivered to the load is $R = r$, and find that maximum power.

**Step 1 — Write the load power as a function of $R$.** The current is $I = \\mathcal{E}/(R+r)$, so

$P(R) = I^2 R = \\frac{\\mathcal{E}^2 R}{(R + r)^2}$

**Step 2 — Differentiate with respect to $R$** (quotient rule):

$\\frac{dP}{dR} = \\mathcal{E}^2\\,\\frac{(R+r)^2 - R\\cdot 2(R+r)}{(R+r)^4}$

**Step 3 — Simplify the numerator.** Factor $(R+r)$:

$\\frac{dP}{dR} = \\mathcal{E}^2\\,\\frac{(R+r) - 2R}{(R+r)^3} = \\mathcal{E}^2\\,\\frac{r - R}{(R+r)^3}$

**Step 4 — Set the derivative to zero.** The denominator is always positive, so

$r - R = 0 \\;\\Rightarrow\\; R = r$

Because $dP/dR > 0$ for $R < r$ and $dP/dR < 0$ for $R > r$, this critical point is a maximum.

**Step 5 — Evaluate the maximum power.** Substitute $R = r$:

$P_{\\max} = \\frac{\\mathcal{E}^2\\,r}{(2r)^2} = \\frac{\\mathcal{E}^2}{4r}$

**Takeaway.** Impedance matching ($R = r$) is a genuine calculus optimization, and at the optimum exactly half the total power is delivered to the load (the other half is lost in $r$).`
    },
    {
      id: 'physicsc-dc-circuits-em-p5-deepen',
      type: 'text' as const,
      content: `### Efficiency vs. Maximum Power — A Subtle Trade-Off

Maximum *power* transfer is **not** the same as maximum *efficiency*.

Define efficiency as the fraction of the battery's chemical power that reaches the load:

$\\eta = \\frac{P_{\\text{load}}}{P_{\\text{total}}} = \\frac{I^2 R}{I^2(R + r)} = \\frac{R}{R + r}$

- At the **maximum-power** condition $R = r$, the efficiency is only $\\eta = r/(2r) = 50\\%$ — half the energy is wasted heating the battery's interior.
- Efficiency *increases* toward $100\\%$ as $R \\to \\infty$ (large load), but then the *amount* of power delivered shrinks toward zero.

This is why power utilities use very low source resistance and high load resistance: they prioritize efficiency, not maximum power transfer.

> "Most power" and "most efficient" pull in opposite directions; know which one a problem is asking for.`
    },
    {
      id: 'physicsc-dc-circuits-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A battery with $\\mathcal{E} = 12\\,\\text{V}$ and $r = 2\\,\\Omega$ drives $I = 2\\,\\text{A}$. Terminal voltage:',
            options: ['$12\\,\\text{V}$', '$8\\,\\text{V}$', '$16\\,\\text{V}$', '$4\\,\\text{V}$'],
            correctAnswer: 1,
            explanation: '$V = \\mathcal{E} - Ir = 12 - 2(2) = 8\\,\\text{V}$.'
          },
          {
            question: 'A $9\\,\\text{V}$ battery with internal resistance $1\\,\\Omega$ is connected to a $2\\,\\Omega$ external resistor. The current is:',
            options: ['$9\\,\\text{A}$', '$4.5\\,\\text{A}$', '$3\\,\\text{A}$', '$1\\,\\text{A}$'],
            correctAnswer: 2,
            explanation: '$I = \\mathcal{E}/(R+r) = 9/(2+1) = 3\\,\\text{A}$.'
          },
          {
            question: 'For a battery of EMF $\\mathcal{E}$ and internal resistance $r$, maximum power is delivered to an external load when:',
            options: ['$R \\to 0$', '$R \\to \\infty$', '$R = r$', '$R = 2r$'],
            correctAnswer: 2,
            explanation: 'Maximizing $P = \\mathcal{E}^2 R/(R+r)^2$ gives $dP/dR = 0$ at $R = r$ (the impedance-matching condition).'
          },
          {
            question: 'At the maximum-power-transfer condition $R = r$, the power delivered to the load is:',
            options: ['$\\mathcal{E}^2/r$', '$\\mathcal{E}^2/(2r)$', '$\\mathcal{E}^2/(4r)$', '$\\mathcal{E}^2 r$'],
            correctAnswer: 2,
            explanation: 'Substituting $R = r$ into $P = \\mathcal{E}^2 R/(R+r)^2$ gives $P_{\\max} = \\mathcal{E}^2 r/(2r)^2 = \\mathcal{E}^2/(4r)$.'
          },
          {
            question: 'As the load current drawn from a real battery increases, the terminal voltage:',
            options: ['Increases', 'Decreases', 'Stays equal to $\\mathcal{E}$', 'Becomes negative immediately'],
            correctAnswer: 1,
            explanation: '$V_{\\text{term}} = \\mathcal{E} - Ir$. Larger $I$ means a larger drop across $r$, so the terminal voltage falls below the EMF.'
          },
          {
            question: 'A battery is short-circuited ($R = 0$). The current is limited only by the internal resistance and equals:',
            options: ['$0$', '$\\mathcal{E}/r$', 'Infinity', '$\\mathcal{E} r$'],
            correctAnswer: 1,
            explanation: 'With $R = 0$, $I = \\mathcal{E}/(0 + r) = \\mathcal{E}/r$. The internal resistance prevents an infinite current.'
          }
        ]
      }
    }
  ]
};
