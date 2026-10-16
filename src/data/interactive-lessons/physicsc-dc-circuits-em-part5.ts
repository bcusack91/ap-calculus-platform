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

### Power in a Real Battery

The emf supplies power $P_{\\mathcal{E}} = I\\mathcal{E}$. Part of it reaches the external resistor and part heats the battery's own internal resistance:

$P_{\\text{load}} = I^2 R \\qquad P_{\\text{internal}} = I^2 r$

$I\\mathcal{E} = I^2 R + I^2 r$

> Internal resistance means the terminal voltage drops as the load current increases.`
    },
    {
      id: 'physicsc-dc-circuits-em-p5-worked',
      type: 'text' as const,
      content: `### Worked Example — One Battery, Two Loads

A battery has $\\mathcal{E} = 9.0\\,\\text{V}$ and internal resistance $r = 0.50\\,\\Omega$.

**Load A: $R = 4.0\\,\\Omega$**

- Current: $I = \\mathcal{E}/(R + r) = 9.0/4.5 = 2.0\\,\\text{A}$
- Terminal voltage: $V = \\mathcal{E} - Ir = 9.0 - (2.0)(0.50) = 8.0\\,\\text{V}$, which matches $IR = (2.0)(4.0) = 8.0\\,\\text{V}$
- Power: $P_{\\text{load}} = I^2R = 16\\,\\text{W}$, $P_{\\text{internal}} = I^2 r = 2.0\\,\\text{W}$, and $I\\mathcal{E} = 18\\,\\text{W} = 16 + 2.0$ ✓

**Load B: $R = 1.0\\,\\Omega$**

- Current: $I = 9.0/1.5 = 6.0\\,\\text{A}$
- Terminal voltage: $V = 9.0 - (6.0)(0.50) = 6.0\\,\\text{V}$
- Power: $P_{\\text{load}} = 36\\,\\text{W}$, $P_{\\text{internal}} = 18\\,\\text{W}$

**Takeaway.** The smaller load draws three times the current, so the terminal voltage sags from 8.0 V to 6.0 V and the power wasted inside the battery rises ninefold, from 2.0 W to 18 W. This is why a battery feels warm when it drives a large current.`
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
            question: 'As the load current drawn from a real battery increases, the terminal voltage:',
            options: ['Increases', 'Decreases', 'Stays equal to $\\mathcal{E}$', 'Becomes negative immediately'],
            correctAnswer: 1,
            explanation: '$V_{\\text{term}} = \\mathcal{E} - Ir$. Larger $I$ means a larger drop across $r$, so the terminal voltage falls below the EMF.'
          }
        ]
      }
    },
    {
      id: 'physicsc-dc-circuits-em-p5-measure',
      type: 'text' as const,
      content: `### Measuring EMF and Internal Resistance

Connect the battery to a variable resistor and record the current $I$ and terminal voltage $V$ for several settings. Because

$V = \\mathcal{E} - rI$

a graph of $V$ versus $I$ is a straight line:

- **Vertical intercept** ($I = 0$): the EMF $\\mathcal{E}$. This is the terminal voltage when there is no current in the battery.
- **Slope:** $-r$. A steeper line means a larger internal resistance.

**Example.** Measurements give $V = 5.6\\,\\text{V}$ at $I = 0.50\\,\\text{A}$ and $V = 4.8\\,\\text{V}$ at $I = 1.5\\,\\text{A}$.

- Slope $= (4.8 - 5.6)/(1.5 - 0.50) = -0.80\\,\\text{V/A}$, so $r = 0.80\\,\\Omega$
- $\\mathcal{E} = V + rI = 5.6 + (0.80)(0.50) = 6.0\\,\\text{V}$

> Extending the line to $V = 0$ gives the short-circuit current $\\mathcal{E}/r = 7.5\\,\\text{A}$, the largest current the battery can push.`
    },
    {
      id: 'physicsc-dc-circuits-em-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Practice: Graphs and Power**
      `,
      exercise: {
        questions: [
          {
            question: 'A battery is short-circuited ($R = 0$). The current is limited only by the internal resistance and equals:',
            options: ['$0$', '$\\mathcal{E}/r$', 'Infinity', '$\\mathcal{E} r$'],
            correctAnswer: 1,
            explanation: 'With $R = 0$, $I = \\mathcal{E}/(0 + r) = \\mathcal{E}/r$. The internal resistance prevents an infinite current.'
          },
          {
            question: 'A graph of terminal voltage versus current for a battery is a straight line through $(1.0\\,\\text{A},\\ 10.0\\,\\text{V})$ and $(3.0\\,\\text{A},\\ 9.0\\,\\text{V})$. What are the battery\'s EMF and internal resistance?',
            options: [
              '$10.5\\,\\text{V}$ and $0.50\\,\\Omega$',
              '$10.0\\,\\text{V}$ and $0.50\\,\\Omega$',
              '$10.5\\,\\text{V}$ and $2.0\\,\\Omega$',
              '$9.0\\,\\text{V}$ and $3.0\\,\\Omega$'
            ],
            correctAnswer: 0,
            explanation: 'The slope is $(9.0 - 10.0)/(3.0 - 1.0) = -0.50\\,\\text{V/A}$, so $r = 0.50\\,\\Omega$. The EMF is the intercept at $I = 0$: $\\mathcal{E} = 10.0 + (0.50)(1.0) = 10.5\\,\\text{V}$. Reading $10.0\\,\\text{V}$ off the first point forgets that the battery was delivering current there, and $2.0\\,\\Omega$ inverts the slope.'
          },
          {
            question: 'A $6.0\\,\\text{V}$ battery with internal resistance $1.0\\,\\Omega$ is connected to a $2.0\\,\\Omega$ resistor. At what rate is energy dissipated inside the battery?',
            options: ['$4.0\\,\\text{W}$', '$8.0\\,\\text{W}$', '$12\\,\\text{W}$', '$36\\,\\text{W}$'],
            correctAnswer: 0,
            explanation: '$I = \\mathcal{E}/(R + r) = 6.0/3.0 = 2.0\\,\\text{A}$, so $P_{\\text{internal}} = I^2 r = (2.0)^2(1.0) = 4.0\\,\\text{W}$. $8.0\\,\\text{W}$ is the power in the external resistor, $12\\,\\text{W}$ is the total $I\\mathcal{E}$, and $36\\,\\text{W}$ is the short-circuit value $\\mathcal{E}^2/r$.'
          }
        ]
      }
    }
  ]
};
