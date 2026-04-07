export const chemAcidBaseTheoriesPhPart6Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Acid-Base Theories and pH**

Let\'s put everything together with multi-step problems that mirror the AP Chemistry exam. Each problem integrates acid-base theory identification, pH calculations, and conceptual reasoning.
      `
    },
    {
      id: 'ab6-problem1',
      type: 'text' as const,
      content: `
## 🧪 Problem 1: Identifying Acid-Base Behavior

Consider these reactions:

**Reaction A:** $HF(aq) + H_2O(l) \\rightleftharpoons F^-(aq) + H_3O^+(aq)$

**Reaction B:** $BF_3 + F^- \\rightarrow BF_4^-$

**Reaction C:** $NaOH(aq) \\rightarrow Na^+(aq) + OH^-(aq)$

For each reaction, the acid-base theory required is:
- Reaction A: **Brønsted-Lowry** (proton transfer from $HF$ to $H_2O$)
- Reaction B: **Lewis** ($BF_3$ accepts electron pair from $F^-$)
- Reaction C: **Arrhenius** ($NaOH$ produces $OH^-$ in water)
      `
    },
    {
      id: 'ab6-problem1-quiz',
      type: 'multiple-choice' as const,
      content: `
**Problem 1 Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Reaction A, what is the conjugate base of $HF$?',
            options: [
              '$H_2O$',
              '$F^-$',
              '$H_3O^+$',
              '$OH^-$'
            ],
            correctAnswer: 1,
            explanation: '$HF$ donates a proton to become $F^-$. The conjugate base is the species that remains after the acid loses $H^+$.'
          },
          {
            question: 'In Reaction B, $F^-$ acts as a:',
            options: [
              'Brønsted-Lowry acid',
              'Arrhenius base',
              'Lewis base',
              'Lewis acid'
            ],
            correctAnswer: 2,
            explanation: '$F^-$ donates an electron pair to $BF_3$, which has an empty orbital on boron. This makes $F^-$ a Lewis base and $BF_3$ a Lewis acid.'
          }
        ]
      }
    },
    {
      id: 'ab6-problem2',
      type: 'text' as const,
      content: `
## 🔢 Problem 2: Multi-Step pH Calculation

A chemist prepares the following solutions:

- **Solution A:** 0.035 M $HCl$
- **Solution B:** 0.035 M $NaOH$
- **Solution C:** 50.0 mL of Solution A mixed with 30.0 mL of Solution B


---

### Solution A pH

$[H^+] = 0.035$ M → $pH = -\\log(0.035) = 1.46$


---

### Solution B pH

$[OH^-] = 0.035$ M → $pOH = -\\log(0.035) = 1.46$ → $pH = 14 - 1.46 = 12.54$


---

### Solution C pH

Moles $H^+$ = $(0.050)(0.035) = 1.75 \\times 10^{-3}$ mol

Moles $OH^-$ = $(0.030)(0.035) = 1.05 \\times 10^{-3}$ mol

Excess $H^+$ = $1.75 \\times 10^{-3} - 1.05 \\times 10^{-3} = 7.0 \\times 10^{-4}$ mol

$[H^+] = \\frac{7.0 \\times 10^{-4}}{0.080} = 8.75 \\times 10^{-3}$ M

$pH = -\\log(8.75 \\times 10^{-3}) = 2.06$
      `
    },
    {
      id: 'ab6-problem2-input',
      type: 'input-boxes' as const,
      content: `
**Problem 2 Practice** 🧮

A student mixes 25.0 mL of 0.080 M $HNO_3$ with 15.0 mL of 0.080 M $KOH$.

**1)** How many moles of excess $H^+$ remain? (Enter in scientific notation, e.g. 8.0e-4)

**2)** What is the total volume in liters? (3 decimal places)

**3)** What is the pH of the resulting solution? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.0e-4', '0.040', '1.30'],
        hint1: 'Moles $H^+$ = $(0.025)(0.080)$; Moles $OH^-$ = $(0.015)(0.080)$; subtract.',
        hint2: 'Total volume = $25.0 + 15.0 = 40.0$ mL = 0.040 L.',
        hint3: '$[H^+] = \\frac{\\text{excess mol}}{\\text{total vol}}$, then $pH = -\\log[H^+]$.',
        explanation: '1) Mol $H^+$ = $2.0 \\times 10^{-3}$; mol $OH^-$ = $1.2 \\times 10^{-3}$; excess = $8.0 \\times 10^{-4}$ mol. 2) $V = 0.040$ L. 3) $[H^+] = 8.0 \\times 10^{-4}/0.040 = 0.020$ M; $pH = -\\log(0.020) = 1.70$.'
      }
    },
    {
      id: 'ab6-problem3',
      type: 'text' as const,
      content: `
## 📌 Problem 3: Conceptual Reasoning

### The pH of Very Dilute Strong Acids

When a strong acid is extremely dilute (e.g., $10^{-8}$ M $HCl$), you **cannot** simply say $pH = 8$. An acid solution can never have $pH > 7$!

The autoionization of water contributes $[H^+] = 10^{-7}$ M, which is much larger than the acid\'s contribution.

**Correct approach:**

$$[H^+]_{\\text{total}} = [H^+]_{\\text{acid}} + [H^+]_{\\text{water}} \\approx 10^{-8} + 10^{-7} = 1.1 \\times 10^{-7} \\text{ M}$$

$$pH = -\\log(1.1 \\times 10^{-7}) = 6.96$$

This is slightly below 7, as expected for an acidic solution.
      `
    },
    {
      id: 'ab6-problem3-quiz',
      type: 'multiple-choice' as const,
      content: `
**Conceptual Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The pH of $1.0 \\times 10^{-9}$ M $HCl$ is closest to:',
            options: [
              '9.0',
              '7.0',
              '6.998',
              '5.0'
            ],
            correctAnswer: 2,
            explanation: '$[H^+]_{total} \\approx 10^{-7} + 10^{-9} = 1.01 \\times 10^{-7}$ M. $pH = -\\log(1.01 \\times 10^{-7}) = 6.996 \\approx 6.998$. The acid barely shifts pH below 7 because the autoionization of water dominates.'
          },
          {
            question: 'Why can\'t a strong acid solution have a pH greater than 7?',
            options: [
              'Strong acids always have high concentrations',
              'Adding $H^+$ to water can only increase $[H^+]$ above $10^{-7}$ M',
              'The pH scale only goes to 7',
              'Strong acids don\'t dissociate at low concentrations'
            ],
            correctAnswer: 1,
            explanation: 'Adding any amount of $H^+$ (even a tiny amount) to water increases $[H^+]$ above the neutral value of $10^{-7}$ M, keeping $pH < 7$.'
          }
        ]
      }
    },
    {
      id: 'ab6-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Workshop Synthesis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find pH of a strong acid, you need to know the acid\'s',
            options: ['Kₐ value', 'initial concentration only', 'molecular weight', 'conjugate base strength']
          },
          {
            label: 'When mixing strong acid and strong base, the solution is acidic if',
            options: ['moles acid > moles base', 'moles acid < moles base', 'volumes are equal', 'concentrations are equal']
          },
          {
            label: 'The "p" in pH stands for',
            options: ['power', 'negative logarithm', 'positive', 'potential']
          }
        ],
        correctAnswers: ['initial concentration only', 'moles acid > moles base', 'negative logarithm'],
        hint1: 'Strong acids dissociate completely — no $K_a$ needed.',
        hint2: 'Compare total moles, not volumes or concentrations alone.',
        hint3: '$pX = -\\log X$.',
        explanation: 'Strong acid pH requires only concentration (100% dissociation). The solution is acidic when moles of acid exceed moles of base. The prefix "p" means $-\\log$.'
      }
    }
  ]
}
