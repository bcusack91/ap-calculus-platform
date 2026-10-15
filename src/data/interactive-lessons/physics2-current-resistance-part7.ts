export const physics2CurrentResistancePart7Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

You've learned about current, resistance, resistivity, Ohm's Law, power and energy, graph-based experiments, and real batteries. Now let's connect everything and prepare for the AP exam.
      `
    },
    {
      id: 'cr7-concept-map',
      type: 'text' as const,
      content: `
## Concept Map: Current, Resistance & Ohm's Law

### The Core Equations

| Equation | What It Describes |
|----------|-------------------|
| $I = \\Delta Q / \\Delta t$ | Current = charge flow rate |
| $R = \\rho L / A$ | Resistance from geometry & material |
| Slope of $I$ vs. $V$ $= 1/R$ | Resistance from a graph |
| $V = IR$ | Ohm's Law |
| $P = IV = I^2R = V^2/R$ | Electrical power |
| $\\Delta E = P\\Delta t$ | Energy transferred |
| $V = \\varepsilon - Ir$ | Battery terminal voltage |

### How They Connect

1. A **battery** ($\\varepsilon$) drives current through a circuit
2. **Current** ($I$) depends on total resistance: $I = \\varepsilon / (R + r)$
3. **Resistance** ($R$) depends on material ($\\rho$), length ($L$), and area ($A$); a conductor's resistivity typically rises with temperature
4. **Power** dissipated in each element: $P = I^2R$
5. **Energy** over time: $\\Delta E = P\\Delta t$, and the battery's output $\\varepsilon I$ equals the total power dissipated

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Forgetting internal resistance | Total $R$ = $R_{\\text{ext}} + r$ |
| Using wrong power formula | Match formula to known quantities |
| Confusing $\\rho$ (resistivity) with $R$ (resistance) | $\\rho$ is a material property; $R$ depends on geometry too |
| Reading the slope of an $I$-$V$ graph as $R$ | The slope of $I$ vs. $V$ is $1/R$ |
| Mixing up conventional current and electron flow | Conventional: + to −. Electrons: − to + |
| Treating a bulb as non-ohmic by default | On the exam, bulbs are ohmic unless stated |
      `
    },
    {
      id: 'cr7-mixed-concepts',
      type: 'multiple-choice' as const,
      content: `
**Mixed Concept Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A wire of length $L$ and radius $r$ has resistance $R$. A second wire of the same material has length $2L$ and radius $2r$. Its resistance is:',
            options: [
              '$R$',
              '$R/2$',
              '$2R$',
              '$R/4$'
            ],
            correctAnswer: 1,
            explanation: '$R = \\rho L/A$. New wire: $R_2 = \\rho(2L)/(\\pi(2r)^2) = \\rho(2L)/(4\\pi r^2) = (2/4) \\cdot \\rho L/(\\pi r^2) = R/2$. Ignoring the length change gives $R/4$; ignoring the area change gives $2R$.'
          },
          {
            question: 'A battery with $\\varepsilon = 10$ V and $r = 1.0\\;\\Omega$ is connected to a $4.0\\;\\Omega$ resistor. The terminal voltage of the battery is:',
            options: [
              '$2.0$ V',
              '$8.0$ V',
              '$10$ V',
              '$12$ V'
            ],
            correctAnswer: 1,
            explanation: '$I = \\varepsilon/(R + r) = 10/5.0 = 2.0$ A, so $V_{\\text{terminal}} = 10 - (2.0)(1.0) = 8.0$ V. 10 V ignores the internal drop, 12 V adds it, and 2.0 V is the current in amperes rather than a voltage.'
          },
          {
            question: 'Which graph correctly shows the $I$-$V$ relationship for an ohmic resistor?',
            options: [
              'A straight line through the origin',
              'An upward parabola through the origin',
              'A horizontal line at constant current',
              'A curve that bends toward the $V$ axis'
            ],
            correctAnswer: 0,
            explanation: 'For an ohmic material, $V = IR$ with constant $R$. On an $I$ vs $V$ graph, this is $I = V/R$, a straight line through the origin with slope $1/R$.'
          }
        ]
      }
    },
    {
      id: 'cr7-mixed-drill',
      type: 'input-boxes' as const,
      content: `
**Mixed Problem Drill** 🧮

1) A nichrome wire ($\\rho = 1.10 \\times 10^{-6}\\;\\Omega\\cdot$m) is 2.0 m long with diameter 0.50 mm. What is its resistance? (in $\\Omega$, round to 1 decimal)

2) A battery ($\\varepsilon = 12$ V, $r = 0.40\\;\\Omega$) is connected to a $5.6\\;\\Omega$ resistor. What current flows? (in A)

3) What is the terminal voltage of the battery in #2? (in V)

4) A 1200 W hair dryer runs on 120 V for 15 minutes. How much energy does it use? (in kJ)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['11.2', '2.0', '11.2', '1080'],
        hint1: '$A = \\pi(d/2)^2 = \\pi(2.5 \\times 10^{-4})^2 = 1.96 \\times 10^{-7}$ $m^{2}$. $R = \\rho L/A$.',
        hint2: '$I = \\varepsilon/(R + r) = 12/(5.6 + 0.4)$.',
        hint3: '$V = \\varepsilon - Ir = 12 - (2.0)(0.40)$.',
        hint4: '$E = Pt = 1200 \\times (15 \\times 60) = 1200 \\times 900$ J. Convert to kJ.',
        explanation: '1) $A = \\pi(2.5 \\times 10^{-4})^2 = 1.96 \\times 10^{-7}$ $m^{2}$. $R = (1.10 \\times 10^{-6})(2.0)/(1.96 \\times 10^{-7}) = 11.2$ $\\Omega$. 2) $I = 12/6.0 = 2.0$ A. 3) $V = 12 - 0.80 = 11.2$ V. 4) $E = 1200 \\times 900 = 1{,}080{,}000$ J $= 1080$ kJ.'
      }
    },
    {
      id: 'cr7-frq-preview',
      type: 'text' as const,
      content: `
## AP FRQ Preview

On the AP Physics 2 exam, you'll encounter free-response questions that combine multiple concepts. Here's the type of reasoning you'll need:

### Example FRQ Scenario

*A student has a battery of unknown EMF and internal resistance. She connects it to a variable external resistor and measures both the terminal voltage and the current for several resistance values.*

**Part (a):** Explain how to determine $\\varepsilon$ and $r$ from a graph of $V$ vs. $I$.

**Key insight:** $V = \\varepsilon - Ir$ is a linear equation of the form $y = b + mx$:
- **y-intercept** ($I = 0$): $V = \\varepsilon$ → gives EMF
- **Slope**: $-r$ → gives internal resistance
- **x-intercept** ($V = 0$): $I = \\varepsilon/r$ → gives short-circuit current

**Part (b):** Her voltmeter breaks. Using only the ammeter and the known resistors, what should she graph to find $\\varepsilon$ and $r$?

**Key insight:** Rearrange $I = \\varepsilon/(R + r)$ into a straight-line form: $\\frac{1}{I} = \\frac{1}{\\varepsilon}R + \\frac{r}{\\varepsilon}$. Graph $\\frac{1}{I}$ versus $R$:
- **Slope** $= \\frac{1}{\\varepsilon}$, so $\\varepsilon = \\frac{1}{\\text{slope}}$
- **Vertical intercept** $= \\frac{r}{\\varepsilon}$, so $r = \\varepsilon \\times \\text{intercept}$

**Part (c):** Explain why the terminal voltage is less than $\\varepsilon$ whenever there is current in the battery.

**Key insight:** By the loop rule, the emf must account for the drop $Ir$ across the internal resistance as well as the drop across the external resistor. Only the remainder, $\\varepsilon - Ir$, appears across the terminals.

### AP Exam Tips

1. **Show your work** — write the equation, substitute, solve
2. **Include units** in every answer
3. **Justify** qualitative answers with equations
4. **Sketch graphs** when asked — label axes and key features
5. **Check limiting cases** — does your answer make sense when $R \\to 0$ or $R \\to \\infty$?
      `
    },
    {
      id: 'cr7-mastery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Mastery Quiz** 🏆
      `,
      exercise: {
        questions: [
          {
            question: 'A wire carries a steady current of 0.80 A. How many electrons pass a point in the wire in 2.0 s?',
            options: [
              '$1.0 \\times 10^{19}$',
              '$5.0 \\times 10^{18}$',
              '$2.6 \\times 10^{-19}$',
              '$1.3 \\times 10^{-19}$'
            ],
            correctAnswer: 0,
            explanation: '$Q = It = (0.80)(2.0) = 1.6$ C, and $N = Q/e = 1.6/(1.6 \\times 10^{-19}) = 1.0 \\times 10^{19}$. $5.0 \\times 10^{18}$ uses only one second, and the two tiny values multiply by $e$ instead of dividing.'
          },
          {
            question: 'A lightbulb filament\'s resistance is measured at room temperature and again while the bulb is glowing. Compared with the room-temperature value, the glowing filament\'s resistance is:',
            options: [
              'Smaller, because hot metal frees more charge carriers',
              'Larger, as hotter metal has higher resistivity',
              'The same, because resistivity is a fixed property',
              'Smaller, because the hot filament expands and thickens'
            ],
            correctAnswer: 1,
            explanation: 'The resistivity of a conductor typically increases with temperature, so the hot filament has more resistance. Resistivity is a material property but still depends on temperature, and thermal expansion changes the dimensions only slightly.'
          },
          {
            question: 'A battery ($\\varepsilon = 6.0$ V, $r = 0.50\\;\\Omega$) is connected to a $2.5\\;\\Omega$ resistor. The power dissipated in the external resistor is:',
            options: [
              '4.0 W',
              '10.0 W',
              '12.0 W',
              '14.4 W'
            ],
            correctAnswer: 1,
            explanation: '$I = \\varepsilon/(R + r) = 6.0/(2.5 + 0.5) = 6.0/3.0 = 2.0$ A. $P = I^2R = (2.0)^2(2.5) = 4 \\times 2.5 = 10.0$ W.'
          },
          {
            question: 'A 12 V battery supplies 0.50 A to a resistor for 5.0 minutes. How much energy does the resistor convert to thermal energy?',
            options: [
              '30 J',
              '360 J',
              '1800 J',
              '3600 J'
            ],
            correctAnswer: 2,
            explanation: '$P = I\\Delta V = (0.50)(12) = 6.0$ W, and $\\Delta E = P\\Delta t = (6.0)(300) = 1800$ J. 30 J uses 5.0 s instead of 300 s, 360 J uses 60 s, and 3600 J leaves out the current.'
          },
          {
            question: 'Which combination correctly describes electron flow vs. conventional current in a circuit with a battery?',
            options: [
              'Both flow from + to −',
              'Both flow from − to +',
              'Electrons: − to + through wire; Conventional: + to − through wire',
              'Electrons: + to − through wire; Conventional: − to + through wire'
            ],
            correctAnswer: 2,
            explanation: 'Electrons (negative) flow from the negative terminal to the positive terminal through the external circuit. Conventional current is defined as flowing from + to − (opposite to electron flow).'
          }
        ]
      }
    }
  ]
}
