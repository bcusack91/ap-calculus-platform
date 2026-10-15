export const chemAcidBaseTheoriesPhPart6Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab6-intro',
      type: 'text' as const,
      content: `# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Acid-Base Theories and pH**

---

### Problem Types You'll Practice

| Problem Type | Skills Combined |
|-------------|-----------------|
| Model identification | Arrhenius vs. Brønsted-Lowry |
| Multi-step pH | Dilution → dissociation → $-\\log$ |
| Conceptual reasoning | $K_w$ and neutral water at other temperatures |
| Conjugate pair analysis | Identifying donors/acceptors |

> 🔑 **Why this matters:** AP Chemistry free-response questions often combine acid-base theory with pH calculations — exactly the type of multi-step problems in this workshop.

---

### What You'll Master in Part 6
- Solving multi-step pH problems with dilution
- Identifying acid-base behavior with the Arrhenius and Brønsted-Lowry models
- Reasoning about how temperature changes $K_w$ and the pH of neutral water`
    },
    {
      id: 'ab6-problem1',
      type: 'text' as const,
      content: `
## 🧪 Problem 1: Identifying Acid-Base Behavior

Consider these reactions:

**Reaction A:** $HF(aq) + H_2O(l) \\rightleftharpoons F^-(aq) + H_3O^+(aq)$

**Reaction B:** $NH_3(aq) + H_2O(l) \\rightleftharpoons NH_4^+(aq) + OH^-(aq)$

**Reaction C:** $NaOH(aq) \\rightarrow Na^+(aq) + OH^-(aq)$

For each reaction, the model that describes it:
- Reaction A: **Brønsted-Lowry** (proton transfer from $HF$ to $H_2O$)
- Reaction B: **Brønsted-Lowry** ($NH_3$ accepts a proton from $H_2O$; ammonia contains no $OH^-$, so the Arrhenius model does not describe it well)
- Reaction C: **Arrhenius** ($NaOH$ produces $OH^-$ in water) — also Brønsted-Lowry, since $OH^-$ is a proton acceptor

> 🔑 The Brønsted-Lowry model covers every reaction here; it is the model the AP exam uses.
      `
    },
    {
      id: 'ab6-problem1-quiz',
      type: 'multiple-choice' as const,
      content: `
**Problem 1 Practice** 🎯

**Reaction A:** $HF(aq) + H_2O(l) \\rightleftharpoons F^-(aq) + H_3O^+(aq)$

**Reaction B:** $NH_3(aq) + H_2O(l) \\rightleftharpoons NH_4^+(aq) + OH^-(aq)$
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
            question: 'In Reaction B, $H_2O$ acts as a:',
            options: [
              'Brønsted-Lowry base',
              'Arrhenius base',
              'Brønsted-Lowry acid',
              'Spectator molecule'
            ],
            correctAnswer: 2,
            explanation: 'Water donates a proton to $NH_3$ and becomes $OH^-$, so here water is a Brønsted-Lowry acid. It does not accept a proton in this reaction, it does not produce $OH^-$ by dissociating a hydroxide, and it is not a spectator.'
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

**1)** How many moles of excess $H^+$ remain? (Enter in scientific notation, e.g. 3.5e-3)

**2)** What is the total volume in liters? (3 decimal places)

**3)** What is the pH of the resulting solution? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.0e-4', '0.040', '1.70'],
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

### Neutral Water at Other Temperatures

The value of $K_w$ depends on temperature (CED 8.1.A.4). Autoionization of water is endothermic, so $K_w$ **increases** as temperature rises.

| Temperature | $K_w$ | $[H_3O^+] = [OH^-]$ in pure water | pH of pure water |
|-------------|-------|----------------------------------|------------------|
| 0°C | $1.1 \\times 10^{-15}$ | $3.3 \\times 10^{-8}$ M | 7.47 |
| 25°C | $1.0 \\times 10^{-14}$ | $1.0 \\times 10^{-7}$ M | 7.00 |
| 50°C | $5.5 \\times 10^{-14}$ | $2.3 \\times 10^{-7}$ M | 6.63 |

> 🔑 **Key Concept:** Pure water is **always neutral**, because $[H_3O^+] = [OH^-]$. A pH of 6.63 at 50°C does not mean the water is acidic; "neutral = pH 7" is true only at 25°C.

**How to calculate:** In pure water, $[H_3O^+] = [OH^-] = \\sqrt{K_w}$, then $pH = -\\log[H_3O^+]$.

> 💡 A strong acid, however dilute, never makes a solution basic. Finding the exact pH of an extremely dilute strong acid (below about $10^{-6}$ M) requires including water's own ionization and is not on the AP exam.
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
            question: 'At 50°C, $K_w = 5.5 \\times 10^{-14}$. What is the pH of pure water at 50°C?',
            options: [
              '7.00',
              '7.37',
              '6.63',
              '13.26'
            ],
            correctAnswer: 2,
            explanation: 'In pure water $[H_3O^+] = \\sqrt{K_w} = \\sqrt{5.5 \\times 10^{-14}} = 2.3 \\times 10^{-7}$ M, so $pH = -\\log(2.3 \\times 10^{-7}) = 6.63$. 7.00 is the neutral pH only at 25°C, 7.37 is 14 − 6.63 (using pKw = 14 at the wrong temperature), and 13.26 is $pK_w$ rather than the pH.'
          },
          {
            question: 'Pure water at 50°C has a pH of 6.63. How should it be classified?',
            options: [
              'Acidic, because its pH is below 7',
              'Neutral, because $[H_3O^+] = [OH^-]$',
              'Basic, because heating produces extra $OH^-$',
              'Acidic, because heating breaks water into $H^+$ only'
            ],
            correctAnswer: 1,
            explanation: 'Neutral means $[H_3O^+] = [OH^-]$, and autoionization always produces the two ions in equal amounts. At 50°C both concentrations are larger than $10^{-7}$ M, so the neutral pH is below 7. The pH 7 benchmark applies only at 25°C.'
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
            options: ['$K_{a}$ and percent ionization', 'concentration', 'molecular weight', 'conjugate base strength']
          },
          {
            label: 'When mixing strong acid and strong base, the solution is acidic if',
            options: ['moles acid > moles base', 'moles acid < moles base', 'volumes are equal', 'concentrations are equal']
          },
          {
            label: 'The "p" in pH stands for',
            options: ['natural logarithm', 'negative logarithm', 'reciprocal', 'potential']
          }
        ],
        correctAnswers: ['concentration', 'moles acid > moles base', 'negative logarithm'],
        hint1: 'Strong acids dissociate completely — no $K_a$ needed.',
        hint2: 'Compare total moles, not volumes or concentrations alone.',
        hint3: '$pX = -\\log X$.',
        explanation: 'Strong acid pH requires only concentration (100% dissociation). The solution is acidic when moles of acid exceed moles of base. The prefix "p" means $-\\log$.'
      }
    }
  ]
}
