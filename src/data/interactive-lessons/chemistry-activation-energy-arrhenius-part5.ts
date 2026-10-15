export const chemActivationEnergyArrheniusPart5Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae5-intro',
      type: 'text' as const,
      content: `# 🔄 Two-Point Arrhenius Equation

**Part 5 of 7 — Finding Ea from Two Temperatures**

---

### When You Have Just Two Data Points

$$\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$

| Given | Can Solve For |
|-------|--------------|
| $k_1$, $k_2$, $T_1$, $T_2$ | $E_a$ |
| $k_1$, $E_a$, $T_1$, $T_2$ | $k_2$ |
| $k_1$, $k_2$, $E_a$, $T_1$ | $T_2$ |

> 🔑 **Why this matters:** This is the most commonly tested Arrhenius equation form on the AP exam — many free-response problems give exactly two (T, k) data points.

---

### What You'll Master in Part 5
- Using the two-point Arrhenius equation to find $E_a$, $k$, or $T$
- Correctly converting temperatures to Kelvin before substituting
- Recognizing which form to use based on given data`
    },
    {
      id: 'ae5-derivation',
      type: 'text' as const,
      content: `
## 📌 Deriving the Two-Point Form

Write the Arrhenius equation at two temperatures:

$$\\ln k_1 = -\\frac{E_a}{R} \\cdot \\frac{1}{T_1} + \\ln A$$

$$\\ln k_2 = -\\frac{E_a}{R} \\cdot \\frac{1}{T_2} + \\ln A$$

Subtract equation 1 from equation 2:

$$\\ln k_2 - \\ln k_1 = -\\frac{E_a}{R}\\left(\\frac{1}{T_2} - \\frac{1}{T_1}\\right)$$

$$\\boxed{\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)}$$


---

### Using This Equation

**To find $E_a$:**
$$E_a = \\frac{R \\cdot \\ln(k_2/k_1)}{1/T_1 - 1/T_2}$$

**To find $k$ at a new temperature:**
If you know $E_a$, $k_1$, and $T_1$, find $k_2$ at $T_2$:
$$\\ln k_2 = \\ln k_1 + \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$
      `
    },
    {
      id: 'ae5-worked-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example

A reaction has $k_1 = 0.0120$ $s^{-1}$ at $T_1 = 400$ K and $k_2 = 0.150$ $s^{-1}$ at $T_2 = 500$ K.

**Find $E_a$:**

$$\\ln\\frac{k_2}{k_1} = \\ln\\frac{0.150}{0.0120} = \\ln(12.5) = 2.526$$

$$\\frac{1}{T_1} - \\frac{1}{T_2} = \\frac{1}{400} - \\frac{1}{500} = 0.002500 - 0.002000 = 0.000500 \\; \\text{K}^{-1}$$

$$E_a = \\frac{R \\cdot \\ln(k_2/k_1)}{1/T_1 - 1/T_2} = \\frac{8.314 \\times 2.526}{0.000500}$$

$$E_a = \\frac{21.0}{0.000500} = 42{,}000 \\; \\text{J/mol} = 42.0 \\; \\text{kJ/mol}$$
      `
    },
    {
      id: 'ae5-practice-1',
      type: 'input-boxes' as const,
      content: `
**Practice: Finding Ea** 🧮

A reaction has $k = 2.0 \\times 10^{-3}$ $s^{-1}$ at 300 K and $k = 6.0 \\times 10^{-2}$ $s^{-1}$ at 400 K.

**1)** Calculate $\\ln(k_2/k_1)$. (to 3 significant figures)

**2)** Calculate $1/T_1 - 1/T_2$. (in $K^{-1}$, give as decimal: e.g., 0.000833)

**3)** Calculate $E_a$ in kJ/mol. (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.40', '0.000833', '33.9'],
        hint1: 'ln(6.0e-2 / 2.0e-3) = ln(30) = 3.401 ≈ 3.40.',
        hint2: '1/300 − 1/400 = 0.003333 − 0.002500 = 0.000833 $K^{-1}$.',
        hint3: 'Ea = (8.314 × 3.40)/0.000833 = 28.27/0.000833 = 33,935 J/mol = 33.9 kJ/mol.',
        explanation: '1) ln(30) = 3.40. 2) 1/300 − 1/400 = $8.33 \\times 10^{-4}$. 3) Ea = 8.314 × 3.40 / $8.33 \\times 10^{-4}$ = 33,900 J/mol = 33.9 kJ/mol.'
      }
    },
    {
      id: 'ae5-practice-2',
      type: 'input-boxes' as const,
      content: `
**Practice: Predicting k at a New Temperature** 🧮

A reaction has $E_a = 50.0$ kJ/mol and $k = 0.010$ $s^{-1}$ at 350 K.

**1)** Calculate $k$ at 400 K. First find $\\ln(k_2/k_1)$. (to 3 significant figures)

**2)** Now find $k_2$. (in $s^{-1}$, to 3 significant figures)

**3)** By what factor did k increase from 350 K to 400 K? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.15', '0.0857', '8.57'],
        hint1: '$\\ln (k_{2}/k_{1})$ = $(Ea/R)(1/T_{1} - 1/T_{2})$ = (50,000/8.314)(1/350 − 1/400) = 6,014 × (2.857e-3 − 2.500e-3) = 6,014 × 3.571e-4 = 2.15.',
        hint2: '$k_{2}/k_{1}$ = $e^{2.15}$ = 8.57. $k_{2}$ = 0.010 × 8.57 = 0.0857 $s^{-1}$.',
        hint3: 'Factor = $k_{2}/k_{1}$ = 0.0857/0.010 = 8.57.',
        explanation: '1) $\\ln (k_{2}/k_{1})$ = (50,000/8.314)(1/350 − 1/400) = 6,014 × $3.571 \\times 10^{-4}$ = 2.15. 2) $k_{2}$ = 0.010 × $e^{2.15}$ = 0.010 × 8.57 = 0.0857 $s^{-1}$. 3) Factor = 8.57.'
      }
    },
    {
      id: 'ae5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Two-Point Arrhenius Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the two-point Arrhenius equation, which variable cancels out?',
            options: [
              'Ea, the energy barrier',
              'R, the gas constant',
              'A, the frequency factor',
              'k, the rate constant'
            ],
            correctAnswer: 2,
            explanation: 'When we subtract ln $k_{1}$ from ln $k_{2}$, the ln A terms cancel: ln A − ln A = 0. This is why we can find Ea without knowing A. Ea and R remain in the factor $E_{a}/R$, and the two k values remain as the ratio $k_{2}/k_{1}$.'
          },
          {
            question: 'If k doubles when T increases from 300 K to 310 K, what is Ea approximately?',
            options: [
              '23 kJ/mol',
              '54 kJ/mol',
              '6.4 kJ/mol',
              '0.58 kJ/mol'
            ],
            correctAnswer: 1,
            explanation: 'ln(2) = 0.693. 1/300 − 1/310 = $1.075 \\times 10^{-4}$. Ea = 8.314 × $0.693/(1.075 \\times 10^{-4})$ = $5.763/(1.075 \\times 10^{-4})$ = 53,600 J/mol ≈ 54 kJ/mol. Using log instead of ln gives 23 kJ/mol, leaving out R gives 6.4 kJ/mol, and using °C (27 and 37) instead of kelvins gives 0.58 kJ/mol.'
          }
        ]
      }
    },
    {
      id: 'ae5-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Two-Point Arrhenius Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The two-point Arrhenius equation relates k values at two different',
            options: ['concentrations', 'pressures', 'temperatures', 'volumes']
          },
          {
            label: 'A larger Ea means k is more sensitive to changes in',
            options: ['concentration', 'pressure', 'temperature', 'surface area']
          },
          {
            label: 'If $T_{1}$ < $T_{2}$ and Ea > 0, then $k_{2}$ is',
            options: ['less than $k_{1}$', 'equal to $k_{1}$', 'greater than $k_{1}$', 'unrelated to $k_{1}$']
          },
          {
            label: 'The two-point equation can be derived by subtracting two',
            options: ['rate laws at two concentrations', 'equilibrium expressions', 'Arrhenius equations in ln form', 'integrated rate laws']
          }
        ],
        correctAnswers: ['temperatures', 'temperature', 'greater than $k_{1}$', 'Arrhenius equations in ln form'],
        hint1: 'The two-point form involves $k_{1}$, $T_{1}$, $k_{2}$, $T_{2}$.',
        hint2: 'Larger Ea → steeper Arrhenius plot → more temperature sensitivity.',
        hint3: 'Higher temperature always gives larger k (assuming Ea > 0).',
        explanation: 'Two-point relates k at different T. Larger Ea = more T-sensitive. Higher T → larger k. Derived by subtracting two linearized Arrhenius equations.'
      }
    },
    {
      id: 'ae5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Two-Point Arrhenius** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has k = $1.0 \\times 10^{-5}$ $s^{-1}$ at 500 K and Ea = 80 kJ/mol. At what temperature will k = $1.0 \\times 10^{-3}$ $s^{-1}$?',
            options: [
              '558 K',
              '657 K',
              '403 K',
              '2,090 K'
            ],
            correctAnswer: 1,
            explanation: '$\\ln (k_{2}/k_{1})$ = ln(100) = 4.605 and $E_{a}/R$ = 80,000/8.314 = 9,622 K. So 4.605 = 9,622$(1/500 - 1/T_{2})$, giving $1/500 - 1/T_{2}$ = $4.786 \\times 10^{-4}$ and $1/T_{2}$ = 0.002000 − 0.000479 = 0.001521, so $T_{2}$ = 657 K. Using log instead of ln gives 558 K, adding instead of subtracting (a sign slip, the same as inverting the k ratio) gives 403 K, and taking 1/(4.786 × 10⁻⁴) without subtracting from 1/500 gives 2,090 K.'
          },
          {
            question: 'If k triples when temperature increases from 300 K to 320 K, what is Ea?',
            options: [
              '19 kJ/mol',
              '44 kJ/mol',
              '5.3 kJ/mol',
              '−44 kJ/mol'
            ],
            correctAnswer: 1,
            explanation: 'ln(3) = 1.099. 1/300 − 1/320 = 3.333e-3 − 3.125e-3 = 2.083e-4. Ea = 8.314 × 1.099/2.083e-4 = 9.14/2.083e-4 = 43,900 J/mol ≈ 44 kJ/mol. Using log instead of ln gives 19 kJ/mol, leaving out R gives 5.3 kJ/mol, and inverting the k ratio gives −44 kJ/mol, which is impossible because Ea is always positive.'
          }
        ]
      }
    }
  ]
}
