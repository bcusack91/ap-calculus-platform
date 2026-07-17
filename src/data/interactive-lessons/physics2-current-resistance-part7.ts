export const physics2CurrentResistancePart7Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr7-intro',
      type: 'text' as const,
      content: `
# 🎯 Synthesis & AP Review

**Part 7 of 7 — Putting It All Together**

You've learned about current, resistance, resistivity, Ohm's Law, power, and real-world applications. Now let's connect everything and prepare for the AP exam.
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
| $I = nAv_d e$ | Current from drift velocity |
| $R = \\rho L / A$ | Resistance from geometry & material |
| $\\rho = \\rho_0(1 + \\alpha \\Delta T)$ | Resistivity vs. temperature |
| $V = IR$ | Ohm's Law |
| $P = IV = I^2R = V^2/R$ | Electrical power |
| $E = Pt$ | Energy consumed |
| $V = \\varepsilon - Ir$ | Battery terminal voltage |

### How They Connect

1. A **battery** ($\\varepsilon$) drives current through a circuit
2. **Current** ($I$) depends on total resistance: $I = \\varepsilon / (R + r)$
3. **Resistance** ($R$) depends on material ($\\rho$), length ($L$), area ($A$), and temperature
4. **Power** dissipated in each element: $P = I^2R$
5. **Energy** over time: $E = Pt$

### Common Mistakes to Avoid

| Mistake | Correction |
|---------|------------|
| Forgetting internal resistance | Total $R$ = $R_{\\text{ext}} + r$ |
| Using wrong power formula | Match formula to known quantities |
| Confusing $\\rho$ (resistivity) with $R$ (resistance) | $\\rho$ is a material property; $R$ depends on geometry too |
| Thinking drift velocity = signal speed | Drift velocity is $\\sim 10^{-4}$ m/s; signal propagates at $\\sim c$ |
| Mixing up conventional current and electron flow | Conventional: + to −. Electrons: − to + |
| Forgetting units on $\\alpha$ | $\\alpha$ has units of °$C^{-1}$ $(or K^{-1})$ |
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
              '$4R$'
            ],
            correctAnswer: 1,
            explanation: '$R = \\rho L/A$. New wire: $R_2 = \\rho(2L)/(\\pi(2r)^2) = \\rho(2L)/(4\\pi r^2) = (2/4) \\cdot \\rho L/(\\pi r^2) = R/2$.'
          },
          {
            question: 'A battery with $\\varepsilon = 10$ V and $r = 1.0\\;\\Omega$ is connected to a variable resistor. For maximum power transfer to the external resistor, $R$ should be:',
            options: [
              '$0\\;\\Omega$',
              '$0.5\\;\\Omega$',
              '$1.0\\;\\Omega$ (equal to $r$)',
              'As large as possible'
            ],
            correctAnswer: 2,
            explanation: 'Maximum power transfer theorem: power delivered to the load is maximized when $R = r$. At this point, half the total power goes to the load and half is wasted internally.'
          },
          {
            question: 'Which graph correctly shows the $I$-$V$ relationship for an ohmic resistor?',
            options: [
              'A straight line through the origin',
              'A parabola opening upward',
              'A horizontal line',
              'An exponential curve'
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

**Part (b):** The student wants to maximize the power delivered to the external resistor. What value of $R$ should she use?

**Key insight:** $P_R = I^2 R = [\\varepsilon/(R+r)]^2 R$. Taking the derivative and setting it to zero gives $R = r$ (maximum power transfer theorem).

**Part (c):** Why is the "efficiency" (fraction of power delivered externally) only 50% at maximum power transfer?

**Key insight:** When $R = r$, the current is $I = \\varepsilon/2r$. Power to load: $I^2R = \\varepsilon^2/4r$. Total power: $\\varepsilon I = \\varepsilon^2/2r$. Efficiency = 50%.

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
            question: 'A copper wire carries 3.0 A. The wire has $n = 8.5 \\times 10^{28}$ $electrons/m^{3}$ and cross-sectional area $2.0 \\times 10^{-6}$ $m^{2}$. The drift velocity is closest to:',
            options: [
              '$1.1 \\times 10^{-4}$ m/s',
              '$2.2 \\times 10^{-4}$ m/s',
              '$1.1 \\times 10^{-2}$ m/s',
              '$3.0$ m/s'
            ],
            correctAnswer: 0,
            explanation: '$v_d = I/(nAe) = 3.0/(8.5 \\times 10^{28} \\times 2.0 \\times 10^{-6} \\times 1.6 \\times 10^{-19}) = 3.0/(2.72 \\times 10^{4}) = 1.1 \\times 10^{-4}$ m/s.'
          },
          {
            question: 'A tungsten filament ($\\alpha = 4.5 \\times 10^{-3}$ °$C^{-1}$) has resistance 15 $\\Omega$ at 20°C. At operating temperature, its resistance is 180 $\\Omega$. The operating temperature is closest to:',
            options: [
              '500°C',
              '1200°C',
              '2460°C',
              '3000°C'
            ],
            correctAnswer: 2,
            explanation: '$180 = 15(1 + 0.0045 \\Delta T)$ → $12 = 1 + 0.0045 \\Delta T$ → $\\Delta T = 11/0.0045 = 2444$ °C → $T = 20 + 2444 = 2464 \\approx 2460$ °C.'
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
            question: 'A household uses 900 kWh per month at $0.12/kWh. The monthly bill is:',
            options: [
              '$10.80',
              '$75.00',
              '$108.00',
              '$1080.00'
            ],
            correctAnswer: 2,
            explanation: 'Cost = $900 \\times 0.12 = \\$108.00$.'
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
