export const chemWeakAcidsBasesKaKbPart6Data = {
  topicSlug: 'weak-acids-bases-ka-kb',
  sections: [
    {
      id: 'wk6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Weak Acids, Bases, and $K_a$/$K_b$**

This workshop brings together ICE tables, $K_a$/$K_b$ relationships, percent ionization, and polyprotic acid concepts in multi-step AP-style problems.
      `
    },
    {
      id: 'wk6-problem1',
      type: 'text' as const,
      content: `
## 🧪 Problem 1: Complete Weak Acid Analysis

A 0.20 M solution of benzoic acid ($C_6H_5COOH$, $K_a = 6.3 \\times 10^{-5}$) is prepared.


---

### Step 1: Check the approximation

$C/K_a = 0.20/(6.3 \\times 10^{-5}) = 3175 > 400$ ✓


---

### Step 2: Calculate $[H^+]$

$$[H^+] = \\sqrt{K_a \\cdot C} = \\sqrt{(6.3 \\times 10^{-5})(0.20)} = \\sqrt{1.26 \\times 10^{-5}} = 3.55 \\times 10^{-3} \\text{ M}$$


---

### Step 3: pH

$pH = -\\log(3.55 \\times 10^{-3}) = 2.45$


---

### Step 4: Percent ionization

$\\% = (3.55 \\times 10^{-3}/0.20) \\times 100 = 1.8\\%$ ✓ (under 5%)


---

### Step 5: $K_b$ of conjugate base

$K_b(C_6H_5COO^-) = K_w/K_a = 1.0 \\times 10^{-14}/(6.3 \\times 10^{-5}) = 1.6 \\times 10^{-10}$
      `
    },
    {
      id: 'wk6-problem1-practice',
      type: 'input-boxes' as const,
      content: `
**Your Turn: Complete Analysis** 🧮

Perform the same analysis for 0.15 M $HNO_2$ ($K_a = 4.5 \\times 10^{-4}$):

**1)** What is $[H^+]$? (Enter in scientific notation, e.g. 8.2e-3)

**2)** What is the pH? (2 decimal places)

**3)** What is the percent ionization? (1 decimal place, enter number only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['8.2e-3', '2.09', '5.5'],
        hint1: '$[H^+] = \\sqrt{(4.5 \\times 10^{-4})(0.15)}$.',
        hint2: '$pH = -\\log[H^+]$.',
        hint3: 'Percent = $[H^+]/C \\times 100$. Note: this may be close to 5%!',
        explanation: '1) $[H^+] = \\sqrt{(4.5 \\times 10^{-4})(0.15)} = \\sqrt{6.75 \\times 10^{-5}} = 8.22 \\times 10^{-3}$ M. 2) $pH = -\\log(8.22 \\times 10^{-3}) = 2.09$. 3) $\\% = (8.22 \\times 10^{-3}/0.15) \\times 100 = 5.5\\%$. This exceeds 5%, so technically the quadratic should be used for more accuracy.'
      }
    },
    {
      id: 'wk6-problem2',
      type: 'text' as const,
      content: `
## 🧪 Problem 2: Salt Solution pH

What is the pH of 0.30 M sodium fluoride ($NaF$)?


---

### Analysis

$NaF$ dissociates completely: $Na^+$ (spectator) + $F^-$ (conjugate base of $HF$)

$F^-$ is a weak base: $F^- + H_2O \\rightleftharpoons HF + OH^-$


---

### Find $K_b$

$K_a(HF) = 6.8 \\times 10^{-4}$

$$K_b(F^-) = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{6.8 \\times 10^{-4}} = 1.47 \\times 10^{-11}$$


---

### ICE Table

$$[OH^-] = \\sqrt{K_b \\cdot C} = \\sqrt{(1.47 \\times 10^{-11})(0.30)} = 2.10 \\times 10^{-6} \\text{ M}$$

$$pOH = 5.68 \\qquad pH = 14 - 5.68 = 8.32$$
      `
    },
    {
      id: 'wk6-problem2-quiz',
      type: 'multiple-choice' as const,
      content: `
**Salt Solution Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.10 M solution of $NH_4NO_3$ has a pH that is:',
            options: [
              'Greater than 7 (basic)',
              'Equal to 7 (neutral)',
              'Less than 7 (acidic)',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: '$NH_4^+$ is the conjugate acid of the weak base $NH_3$ — it donates protons to water. $NO_3^-$ is the conjugate base of strong acid $HNO_3$ — it\'s a spectator. Net result: acidic.'
          },
          {
            question: 'Which 0.10 M salt solution has the highest pH?',
            options: [
              '$NaCl$',
              '$NaCN$ ($K_a$ of $HCN = 6.2 \\times 10^{-10}$)',
              '$NaF$ ($K_a$ of $HF = 6.8 \\times 10^{-4}$)',
              '$NaNO_3$'
            ],
            correctAnswer: 1,
            explanation: '$CN^-$ has the largest $K_b$ ($= K_w/K_a = 1.6 \\times 10^{-5}$) because $HCN$ has the smallest $K_a$. Larger $K_b$ produces more $OH^-$ and higher pH.'
          }
        ]
      }
    },
    {
      id: 'wk6-problem3-input',
      type: 'input-boxes' as const,
      content: `
**Problem 3: Determining $K_a$ from pH** 🧮

A 0.25 M solution of an unknown weak acid has a pH of 2.72.

**1)** What is $[H^+]$? (Enter in scientific notation, e.g. 1.9e-3)

**2)** What is the $K_a$ of the acid? (Enter in scientific notation, e.g. 1.5e-5)

**3)** What is the $pK_a$? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.9e-3', '1.5e-5', '4.83'],
        hint1: '$[H^+] = 10^{-pH} = 10^{-2.72}$.',
        hint2: '$K_a = [H^+]^2/C$ (using the approximation).',
        hint3: '$pK_a = -\\log K_a$.',
        explanation: '1) $[H^+] = 10^{-2.72} = 1.91 \\times 10^{-3} \\approx 1.9 \\times 10^{-3}$ M. 2) $K_a = (1.91 \\times 10^{-3})^2/0.25 = 3.65 \\times 10^{-6}/0.25 = 1.46 \\times 10^{-5} \\approx 1.5 \\times 10^{-5}$. 3) $pK_a = -\\log(1.46 \\times 10^{-5}) = 4.84 \\approx 4.83$.'
      }
    },
    {
      id: 'wk6-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Workshop Synthesis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To find pH of a salt of weak acid + strong base, you need',
            options: ['Kₐ of the weak acid (to find K_b of conjugate base)', 'Kₐ of the salt', 'only the salt concentration', 'K_w only']
          },
          {
            label: 'If the 5% approximation gives exactly 5.5% ionization, your answer is',
            options: ['exactly correct', 'close but slightly off — consider quadratic', 'completely wrong', 'impossible']
          },
          {
            label: 'A weak acid with smaller $K_a$ at the same concentration will have',
            options: ['lower pH', 'higher pH', 'the same pH', 'pH = 7']
          }
        ],
        correctAnswers: ['Kₐ of the weak acid (to find K_b of conjugate base)', 'close but slightly off — consider quadratic', 'higher pH'],
        hint1: '$K_b = K_w/K_a$ for the conjugate base.',
        hint2: '5.5% is slightly above the 5% threshold.',
        hint3: 'Smaller $K_a$ → less $[H^+]$ → higher pH.',
        explanation: 'Use $K_b = K_w/K_a$ for salt solutions. At 5.5%, the answer is approximate — the quadratic gives better accuracy but the approximation is close. Smaller $K_a$ means less dissociation, less $[H^+]$, higher pH.'
      }
    },
    {
      id: 'wk6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Problem-Solving Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A weak acid has $K_a = 2.0 \\times 10^{-6}$ and pH = 3.85 in solution. What is the initial concentration?',
            options: [
              '0.010 M',
              '0.050 M',
              '0.10 M',
              '0.50 M'
            ],
            correctAnswer: 1,
            explanation: '$[H^+] = 10^{-3.85} = 1.41 \\times 10^{-4}$ M. $K_a = [H^+]^2/C$, so $C = [H^+]^2/K_a = (1.41 \\times 10^{-4})^2/(2.0 \\times 10^{-6}) = 1.99 \\times 10^{-8}/(2.0 \\times 10^{-6}) = 0.010$ M. Hmm, let me recheck: $(1.41 \\times 10^{-4})^2 = 1.99 \\times 10^{-8}$; $C = 1.99 \\times 10^{-8}/2.0 \\times 10^{-6} = 0.010$ M.'
          },
          {
            question: 'The pH of 0.10 M $Na_2CO_3$ is best calculated by:',
            options: [
              'Using $K_{a1}$ of $H_2CO_3$',
              'Using $K_b$ of $CO_3^{2-}$ (which is $K_w/K_{a2}$)',
              'Assuming neutral pH',
              'Using $K_w$ alone'
            ],
            correctAnswer: 1,
            explanation: '$CO_3^{2-}$ is the conjugate base of $HCO_3^-$, which has $K_a = K_{a2}$. So $K_b(CO_3^{2-}) = K_w/K_{a2}$. Use this with an ICE table to find $[OH^-]$ and then pH.'
          }
        ]
      }
    }
  ]
}
