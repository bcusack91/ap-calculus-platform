export const chemActivationEnergyArrheniusPart4Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae4-intro',
      type: 'text' as const,
      content: `# 📉 Linearized Arrhenius Equation

**Part 4 of 7 — Finding Ea from Graphical Data**

---

### From Exponential to Linear

| Form | Equation | Graph |
|------|----------|-------|
| Exponential | $k = Ae^{-E_a/RT}$ | Curved — hard to analyze |
| **Linear** | $\ln k = -\frac{E_a}{R} \cdot \frac{1}{T} + \ln A$ | **Straight line** |

Plot $\ln k$ vs $1/T$ → slope = $-E_a/R$, y-intercept = $\ln A$

> 🔑 **Why this matters:** The AP exam often provides data as a table of temperatures and rate constants — you need to know how to plot and analyze it graphically.

---

### What You'll Master in Part 4
- Deriving the linearized Arrhenius equation from the exponential form
- Determining $E_a$ from the slope of a $\ln k$ vs $1/T$ plot
- Interpreting Arrhenius plots for AP exam data analysis questions`
    },
    {
      id: 'ae4-linearization',
      type: 'text' as const,
      content: `
## 📌 Deriving the Linear Form

Starting from: $k = Ae^{-E_a/(RT)}$

Take the natural log of both sides:

$$\\ln k = \\ln A + \\ln(e^{-E_a/(RT)})$$

$$\\boxed{\\ln k = -\\frac{E_a}{R} \\cdot \\frac{1}{T} + \\ln A}$$


---

### This is $y = mx + b$!

| Variable | Corresponds To |
|----------|---------------|
| $y$ | $\\ln k$ |
| $x$ | $1/T$ |
| $m$ (slope) | $-E_a/R$ |
| $b$ (y-intercept) | $\\ln A$ |


---

### Key Result

A plot of $\\ln k$ vs $1/T$ gives a **straight line** with:
- Slope $= -E_a/R$ → $E_a = -R \\times \\text{slope}$
- y-intercept $= \\ln A$ → $A = e^{\\text{intercept}}$
      `
    },
    {
      id: 'ae4-graph-quiz',
      type: 'multiple-choice' as const,
      content: `
**Linearized Arrhenius Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A plot of ln k vs 1/T has a slope of −5,000 K. What is Ea?',
            options: [
              '5,000 J/mol',
              '41,600 J/mol',
              '5,000 kJ/mol',
              '601 J/mol'
            ],
            correctAnswer: 1,
            explanation: 'Ea = −R × slope = −8.314 × (−5,000) = 41,570 J/mol ≈ 41,600 J/mol = 41.6 kJ/mol.'
          },
          {
            question: 'The slope of an Arrhenius plot is always:',
            options: [
              'Positive',
              'Negative',
              'Zero',
              'Depends on the reaction'
            ],
            correctAnswer: 1,
            explanation: 'Slope = −Ea/R. Since Ea is always positive and R is positive, the slope is always negative. Higher 1/T (lower temperature) gives lower ln k.'
          },
          {
            question: 'If the y-intercept of an Arrhenius plot is 30.0, what is A?',
            options: [
              '30.0 s⁻¹',
              'e³⁰ s⁻¹',
              '30.0/R',
              'ln(30.0) s⁻¹'
            ],
            correctAnswer: 1,
            explanation: 'y-intercept = ln A = 30.0. Therefore A = e³⁰ ≈ 1.07 × 10¹³ s⁻¹ (for a first-order reaction).'
          }
        ]
      }
    },
    {
      id: 'ae4-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example: Determining Ea from Data

The rate constant for a reaction was measured at several temperatures:

| $T$ (K) | $k$ (s⁻¹) | $1/T$ (K⁻¹) | $\\ln k$ |
|---------|----------|------------|--------|
| 300 | 1.0 × 10⁻⁷ | 3.33 × 10⁻³ | −16.12 |
| 350 | 3.0 × 10⁻⁵ | 2.86 × 10⁻³ | −10.41 |
| 400 | 1.5 × 10⁻³ | 2.50 × 10⁻³ | −6.50 |
| 450 | 2.0 × 10⁻² | 2.22 × 10⁻³ | −3.91 |


---

### Finding the Slope

Using the first and last points:
$$\\text{slope} = \\frac{-3.91 - (-16.12)}{2.22 \\times 10^{-3} - 3.33 \\times 10^{-3}} = \\frac{12.21}{-1.11 \\times 10^{-3}} = -11{,}000 \\; \\text{K}$$


---

### Finding Ea

$$E_a = -R \\times \\text{slope} = -(8.314)(-11{,}000) = 91{,}500 \\; \\text{J/mol} = 91.5 \\; \\text{kJ/mol}$$
      `
    },
    {
      id: 'ae4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Arrhenius Plot Calculations** 🧮

An Arrhenius plot of ln k vs 1/T has two data points:
- Point 1: $1/T = 3.00 \\times 10^{-3}$ K⁻¹, $\\ln k = -8.00$
- Point 2: $1/T = 2.50 \\times 10^{-3}$ K⁻¹, $\\ln k = -4.00$

**1)** What is the slope of the line? (in K, include sign)

**2)** What is $E_a$ in kJ/mol? (to 3 significant figures)

**3)** What is $\\ln A$ (the y-intercept)? Use: $\\ln A = \\ln k + (E_a/R)(1/T)$, evaluated at point 1. (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-8000', '66.5', '16.0'],
        hint1: 'Slope = (−4.00 − (−8.00))/(2.50e-3 − 3.00e-3) = 4.00/(−5.00e-4) = −8,000 K.',
        hint2: 'Ea = −R × slope = −8.314 × (−8,000) = 66,512 J/mol = 66.5 kJ/mol.',
        hint3: 'ln A = ln k − slope × (1/T) = −8.00 − (−8,000)(3.00e-3) = −8.00 + 24.0 = 16.0.',
        explanation: '1) Slope = 4.00/(−5.00 × 10⁻⁴) = −8,000 K. 2) Ea = 8.314 × 8,000 = 66,512 J/mol = 66.5 kJ/mol. 3) ln A = −8.00 + 8,000 × 3.00 × 10⁻³ = −8.00 + 24.0 = 16.0.'
      }
    },
    {
      id: 'ae4-practical-tips',
      type: 'text' as const,
      content: `
## 📌 Practical Tips for AP

### Converting Temperature

Always convert °C to K before using the Arrhenius equation:

$$T(K) = T(°C) + 273.15$$


---

### Units of Ea

- In the Arrhenius equation, use $E_a$ in **J/mol** (not kJ/mol) when $R = 8.314$ J/(mol·K)
- Convert kJ to J by multiplying by 1000


---

### Common Mistakes

1. ❌ Using temperature in °C instead of K
2. ❌ Mixing units: $E_a$ in kJ/mol with $R$ in J/(mol·K)
3. ❌ Forgetting the negative sign in the slope
4. ❌ Plotting $k$ vs $T$ instead of $\\ln k$ vs $1/T$
      `
    },
    {
      id: 'ae4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Arrhenius Plot Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A steeper (more negative) slope on an Arrhenius plot means',
            options: ['smaller Ea', 'larger Ea', 'larger A', 'reaction is endothermic']
          },
          {
            label: 'If two reactions have the same A but different Ea values, their Arrhenius lines',
            options: ['are parallel', 'intersect at 1/T = 0', 'have the same slope', 'have the same y-intercept']
          },
          {
            label: 'The x-axis of an Arrhenius plot is',
            options: ['T', 'ln T', '1/T', 'T²']
          },
          {
            label: 'Moving RIGHT on an Arrhenius plot (larger 1/T) means',
            options: ['higher temperature', 'lower temperature', 'larger k', 'no change']
          }
        ],
        correctAnswers: ['larger Ea', 'have the same y-intercept', '1/T', 'lower temperature'],
        hint1: 'Slope = −Ea/R. More negative → larger Ea.',
        hint2: 'Same A → same ln A → same y-intercept.',
        hint3: 'The Arrhenius plot has 1/T on the x-axis.',
        explanation: 'Steeper slope = larger Ea. Same A means same y-intercept (ln A). x-axis is 1/T. Larger 1/T = smaller T = lower temperature.'
      }
    },
    {
      id: 'ae4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Linearized Arrhenius** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'An Arrhenius plot has slope = −12,000 K. What is Ea?',
            options: [
              '12.0 kJ/mol',
              '99.8 kJ/mol',
              '144 kJ/mol',
              '1.44 kJ/mol'
            ],
            correctAnswer: 1,
            explanation: 'Ea = −R × slope = −(8.314)(−12,000) = 99,768 J/mol ≈ 99.8 kJ/mol.'
          },
          {
            question: 'Two Arrhenius plots for different reactions have the same slope but different y-intercepts. This means:',
            options: [
              'Same Ea, different A values',
              'Different Ea, same A values',
              'Same k values at all temperatures',
              'Same Ea, same A values'
            ],
            correctAnswer: 0,
            explanation: 'Same slope → same −Ea/R → same Ea. Different y-intercepts → different ln A → different A values (different frequency factors).'
          }
        ]
      }
    }
  ]
}
