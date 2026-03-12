export const chemElectrolyticCellsFaradayPart4Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef4-intro',
      type: 'text' as const,
      content: `
# ⚖️ Faraday\'s Laws of Electrolysis

**Part 4 of 7 — Quantitative Electrolysis: mol = It/(nF)**

Faraday\'s laws connect the **amount of substance** produced or consumed during electrolysis to the **electric current** and **time**. This is one of the most calculation-heavy topics on the AP exam.
      `
    },
    {
      id: 'ef4-faradays-laws',
      type: 'text' as const,
      content: `
## Faraday\'s Laws

### The Key Equation

$$\\text{mol of substance} = \\frac{It}{nF}$$

| Symbol | Meaning | Units |
|--------|---------|-------|
| $I$ | Current | Amperes (A) = C/s |
| $t$ | Time | Seconds (s) |
| $n$ | Electrons per ion in the half-reaction | — |
| $F$ | Faraday\'s constant | $96{,}485$ C/mol $e^-$ |
| $It$ | Total charge | Coulombs (C) |

### Step-by-Step Problem Solving

1. **Calculate total charge:** $q = It$ (coulombs)
2. **Find moles of electrons:** $\\text{mol } e^- = q/F = It/F$
3. **Use stoichiometry:** relate moles of electrons to moles of substance using $n$
4. **Convert to mass** if needed: $m = \\text{mol} \\times M$

### Important: What Is n?

$n$ = number of electrons in the **balanced half-reaction**

| Half-Reaction | $n$ |
|--------------|-----|
| $\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$ | 1 |
| $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ | 2 |
| $\\text{Al}^{3+} + 3e^- \\rightarrow \\text{Al}$ | 3 |
| $2\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2e^-$ | 2 |
      `
    },
    {
      id: 'ef4-worked-example',
      type: 'text' as const,
      content: `
## Worked Example

How many grams of Cu are deposited by passing a current of $2.00$ A through $\\text{CuSO}_4$ solution for $1.00$ hour?

### Half-reaction: $\\text{Cu}^{2+} + 2e^- \\rightarrow \\text{Cu}$ ($n = 2$)

**Step 1: Total charge**
$$q = It = (2.00)(3600) = 7200 \\text{ C}$$

**Step 2: Moles of electrons**
$$\\text{mol } e^- = \\frac{7200}{96{,}485} = 0.07462 \\text{ mol}$$

**Step 3: Moles of Cu**
$$\\text{mol Cu} = \\frac{\\text{mol } e^-}{n} = \\frac{0.07462}{2} = 0.03731 \\text{ mol}$$

**Step 4: Mass of Cu**
$$m = (0.03731)(63.55) = 2.37 \\text{ g}$$

### Alternative One-Step Formula

$$m = \\frac{It \\cdot M}{nF} = \\frac{(2.00)(3600)(63.55)}{(2)(96{,}485)} = 2.37 \\text{ g}$$
      `
    },
    {
      id: 'ef4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Faraday\'s Law Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does It (current × time) represent?',
            options: [
              'Energy in joules',
              'Power in watts',
              'Total charge in coulombs',
              'Voltage in volts'
            ],
            correctAnswer: 2,
            explanation: '$I \\times t = \\text{(C/s)(s)} = \\text{C}$ (coulombs). It represents the total electric charge passed through the cell.'
          },
          {
            question: 'To deposit 1 mole of Ag from Ag⁺ (n = 1), the charge needed is:',
            options: [
              '96,485 C (1 Faraday)',
              '192,970 C (2 Faradays)',
              '48,243 C (0.5 Faraday)',
              '289,455 C (3 Faradays)'
            ],
            correctAnswer: 0,
            explanation: 'Ag⁺ + e⁻ → Ag requires 1 electron per atom. 1 mole of Ag requires 1 mole of electrons = 1 Faraday = 96,485 C.'
          },
          {
            question: 'To deposit 1 mole of Al from Al³⁺ (n = 3), the charge needed is:',
            options: [
              '96,485 C',
              '192,970 C',
              '289,455 C',
              '385,940 C'
            ],
            correctAnswer: 2,
            explanation: 'Al³⁺ + 3e⁻ → Al requires 3 electrons per atom. 1 mole of Al requires 3 moles of electrons = 3F = 3 × 96,485 = 289,455 C.'
          }
        ]
      }
    },
    {
      id: 'ef4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Faraday\'s Law Calculations** 🧮

Use $F = 96{,}485$ C/mol, $M_{\\text{Ag}} = 107.87$ g/mol

1) A current of $5.00$ A flows for $1000$ s. Total charge = ? (in C)

2) Using the charge from (1), how many moles of electrons? (to 3 significant figures)

3) How many grams of Ag are deposited? ($\\text{Ag}^+ + e^- \\rightarrow \\text{Ag}$, $n = 1$) (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5000', '0.0518', '5.59', '0.05180', '5.590'],
        hint1: '$q = It = (5.00)(1000)$',
        hint2: '$\\text{mol } e^- = 5000/96485$',
        hint3: '$m = (0.0518)(107.87)$',
        explanation: '1) $q = 5.00 \\times 1000 = 5000$ C. 2) $\\text{mol } e^- = 5000/96485 = 0.0518$ mol. 3) Since $n = 1$: mol Ag = 0.0518. $m = 0.0518 \\times 107.87 = 5.59$ g.'
      }
    },
    {
      id: 'ef4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Faraday\'s Law Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Faraday\'s constant F equals',
            options: ['96,485 J/mol', '96,485 C/mol e⁻', '96,485 V', '96,485 A']
          },
          {
            label: 'Doubling the current while keeping time constant will',
            options: ['deposit half the mass', 'deposit the same mass', 'deposit double the mass', 'deposit no mass']
          },
          {
            label: 'For Cu²⁺ + 2e⁻ → Cu, depositing 1 mol Cu requires',
            options: ['1 F of charge', '2 F of charge', '3 F of charge', '0.5 F of charge']
          },
          {
            label: 'The time must be in',
            options: ['minutes', 'hours', 'seconds', 'any unit']
          }
        ],
        correctAnswers: ['96,485 C/mol e⁻', 'deposit double the mass', '2 F of charge', 'seconds'],
        hint1: 'F is charge per mole of electrons.',
        hint2: 'Double current → double charge → double moles.',
        hint3: 'n = 2 for Cu²⁺, so 2 moles of electrons per mole of Cu.',
        explanation: 'F = 96,485 C/mol e⁻. Double I → double q → double product. Cu²⁺ needs 2e⁻ = 2F per mole. Time must be in seconds for q = It in coulombs.'
      }
    },
    {
      id: 'ef4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Faraday\'s Laws** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A current of 10.0 A runs for 30.0 min through a solution of AuCl₃. How many grams of Au deposit? (Au³⁺ + 3e⁻ → Au, M_Au = 197.0 g/mol)',
            options: [
              '12.2 g',
              '36.7 g',
              '6.1 g',
              '1.2 g'
            ],
            correctAnswer: 0,
            explanation: '$q = (10.0)(1800) = 18{,}000$ C. mol $e^- = 18{,}000/96{,}485 = 0.1866$. mol Au = $0.1866/3 = 0.0622$. $m = 0.0622 \\times 197.0 = 12.2$ g.'
          },
          {
            question: 'Two cells are connected in series. Cell A deposits Ag (n=1) and Cell B deposits Cu (n=2). If 0.10 mol of Ag deposits, how much Cu deposits?',
            options: [
              '0.10 mol',
              '0.050 mol',
              '0.20 mol',
              '0.025 mol'
            ],
            correctAnswer: 1,
            explanation: 'In series, the same charge flows through both cells. 0.10 mol Ag needs 0.10 mol e⁻. The same 0.10 mol e⁻ flows through the Cu cell. With $n = 2$: mol Cu = $0.10/2 = 0.050$ mol.'
          }
        ]
      }
    }
  ]
}
