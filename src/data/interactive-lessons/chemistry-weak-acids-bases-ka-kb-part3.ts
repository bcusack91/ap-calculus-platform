export const chemWeakAcidsBasesKaKbPart3Data = {
  topicSlug: 'weak-acids-bases-ka-kb',
  sections: [
    {
      id: 'wk3-intro',
      type: 'text' as const,
      content: `
# 🧴 Weak Bases and $K_b$

**Part 3 of 7 — The Base Dissociation Constant**

Weak bases partially react with water to produce $OH^-$ ions. The extent of this reaction is measured by the **base dissociation constant**, $K_b$.
      `
    },
    {
      id: 'wk3-weak-base-equilibrium',
      type: 'text' as const,
      content: `
## Weak Base Equilibrium

A generic weak base $B$ in water:

$$B(aq) + H_2O(l) \\rightleftharpoons BH^+(aq) + OH^-(aq)$$

The equilibrium expression is:

$$K_b = \\frac{[BH^+][OH^-]}{[B]}$$

### Key Points

- Water is omitted (pure liquid)
- $K_b$ is small → partial reaction only
- **Larger $K_b$** = stronger weak base
- The base **accepts** a proton from water (Brønsted-Lowry)

### Common Weak Bases

| Base | Formula | $K_b$ | $pK_b$ |
|------|---------|-------|--------|
| Ammonia | $NH_3$ | $1.8 \\times 10^{-5}$ | 4.74 |
| Methylamine | $CH_3NH_2$ | $4.4 \\times 10^{-4}$ | 3.36 |
| Pyridine | $C_5H_5N$ | $1.7 \\times 10^{-9}$ | 8.77 |
| Aniline | $C_6H_5NH_2$ | $4.3 \\times 10^{-10}$ | 9.37 |

Relative strength: $CH_3NH_2 > NH_3 > C_5H_5N > C_6H_5NH_2$
      `
    },
    {
      id: 'wk3-ice-table',
      type: 'text' as const,
      content: `
## ICE Table for Weak Bases

For $NH_3$ at concentration $C$:

$$NH_3(aq) + H_2O(l) \\rightleftharpoons NH_4^+(aq) + OH^-(aq)$$

|  | $NH_3$ | $NH_4^+$ | $OH^-$ |
|--|--------|----------|--------|
| **I** | $C$ | $0$ | $0$ |
| **C** | $-x$ | $+x$ | $+x$ |
| **E** | $C - x$ | $x$ | $x$ |

$$K_b = \\frac{x^2}{C - x} \\approx \\frac{x^2}{C}$$

$$x = [OH^-] = \\sqrt{K_b \\cdot C}$$

Then: $pOH = -\\log[OH^-]$ and $pH = 14 - pOH$

### Worked Example

Find the pH of 0.15 M $NH_3$ ($K_b = 1.8 \\times 10^{-5}$).

$$[OH^-] = \\sqrt{(1.8 \\times 10^{-5})(0.15)} = \\sqrt{2.7 \\times 10^{-6}} = 1.64 \\times 10^{-3} \\text{ M}$$

$$pOH = -\\log(1.64 \\times 10^{-3}) = 2.79$$

$$pH = 14 - 2.79 = 11.21$$

5% check: $1.64 \\times 10^{-3}/0.15 = 1.1\\% < 5\\%$ ✓
      `
    },
    {
      id: 'wk3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Weak Base Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A weak base solution has a pH that is:',
            options: [
              'Less than 7',
              'Equal to 7',
              'Greater than 7',
              'Impossible to determine'
            ],
            correctAnswer: 2,
            explanation: 'Weak bases produce $OH^-$ ions, making $[OH^-] > [H^+]$, so $pH > 7$.'
          },
          {
            question: 'For 0.15 M $NH_3$, the ICE table gives $[OH^-]$. To find pH, you should:',
            options: [
              '$pH = -\\log[OH^-]$',
              '$pH = 14 - (-\\log[OH^-])$',
              '$pH = [OH^-]$',
              '$pH = 14 + \\log[OH^-]$'
            ],
            correctAnswer: 1,
            explanation: 'First calculate $pOH = -\\log[OH^-]$, then $pH = 14 - pOH$. Note that answer choices B and D are equivalent: $14 - (-\\log[OH^-]) = 14 + \\log[OH^-]$.'
          },
          {
            question: 'Which is the strongest weak base?',
            options: [
              '$K_b = 1.0 \\times 10^{-9}$',
              '$K_b = 4.4 \\times 10^{-4}$',
              '$K_b = 1.8 \\times 10^{-5}$',
              '$K_b = 6.0 \\times 10^{-7}$'
            ],
            correctAnswer: 1,
            explanation: 'Larger $K_b$ = stronger base. $4.4 \\times 10^{-4}$ is the largest value, indicating the greatest extent of reaction with water.'
          }
        ]
      }
    },
    {
      id: 'wk3-conjugate-base',
      type: 'text' as const,
      content: `
## Conjugate Bases of Weak Acids

The conjugate base of a weak acid also acts as a weak base in water:

$$A^-(aq) + H_2O(l) \\rightleftharpoons HA(aq) + OH^-(aq)$$

$$K_b = \\frac{[HA][OH^-]}{[A^-]}$$

### Example: Acetate Ion

$$CH_3COO^-(aq) + H_2O(l) \\rightleftharpoons CH_3COOH(aq) + OH^-(aq)$$

This is why solutions of sodium acetate ($NaCH_3COO$) are **basic** — the acetate ion is a weak base!

### Salts and pH

| Salt Type | Example | pH |
|-----------|---------|-----|
| Strong acid + strong base | $NaCl$ | 7 (neutral) |
| Weak acid + strong base | $NaCH_3COO$ | > 7 (basic) |
| Strong acid + weak base | $NH_4Cl$ | < 7 (acidic) |
| Weak acid + weak base | $NH_4CH_3COO$ | Depends on $K_a$ vs $K_b$ |
      `
    },
    {
      id: 'wk3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Weak Base Calculations** 🧮

1) Find the pH of 0.20 M methylamine ($CH_3NH_2$, $K_b = 4.4 \\times 10^{-4}$). (2 decimal places)

2) Find $[OH^-]$ for 0.10 M pyridine ($C_5H_5N$, $K_b = 1.7 \\times 10^{-9}$). (Enter in scientific notation, e.g. 1.3e-5)

3) A solution of 0.25 M $NaCH_3COO$ is basic. If $K_b$ for $CH_3COO^-$ is $5.6 \\times 10^{-10}$, find the pH. (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['11.97', '1.3e-5', '9.07'],
        hint1: '$[OH^-] = \\sqrt{K_b \\cdot C}$; then $pOH = -\\log[OH^-]$; $pH = 14 - pOH$.',
        hint2: '$[OH^-] = \\sqrt{(1.7 \\times 10^{-9})(0.10)}$.',
        hint3: '$[OH^-] = \\sqrt{(5.6 \\times 10^{-10})(0.25)}$; then convert to pH.',
        explanation: '1) $[OH^-] = \\sqrt{(4.4 \\times 10^{-4})(0.20)} = 9.38 \\times 10^{-3}$; $pOH = 2.03$; $pH = 11.97$. 2) $[OH^-] = \\sqrt{1.7 \\times 10^{-10}} = 1.30 \\times 10^{-5}$ M. 3) $[OH^-] = \\sqrt{(5.6 \\times 10^{-10})(0.25)} = 1.18 \\times 10^{-5}$; $pOH = 4.93$; $pH = 9.07$.'
      }
    },
    {
      id: 'wk3-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Weak Base Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A solution of $NH_4Cl$ in water is',
            options: ['acidic', 'basic', 'neutral', 'impossible to predict']
          },
          {
            label: 'The conjugate base of a strong acid is',
            options: ['a strong base', 'a moderate base', 'negligibly weak', 'also strong']
          },
          {
            label: 'To find pH of a weak base, you first calculate',
            options: ['[H⁺] directly', '[OH⁻] from ICE table', 'Kₐ of the base', 'nothing — same as strong base']
          }
        ],
        correctAnswers: ['acidic', 'negligibly weak', '[OH⁻] from ICE table'],
        hint1: '$NH_4^+$ is the conjugate acid of the weak base $NH_3$.',
        hint2: 'Strong acids dissociate completely; their conjugate bases don\'t react with water.',
        hint3: 'Weak bases produce $OH^-$, so start with $[OH^-]$.',
        explanation: '$NH_4Cl$ gives $NH_4^+$ (weak acid from conjugate of $NH_3$) + $Cl^-$ (spectator) → acidic. Conjugate bases of strong acids are negligibly weak. For weak bases, calculate $[OH^-]$ first, then convert to pH.'
      }
    },
    {
      id: 'wk3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Weak Bases** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.10 M solution of $NaF$ has a pH greater than 7 because:',
            options: [
              '$Na^+$ is a strong base',
              '$F^-$ is the conjugate base of the weak acid $HF$ and reacts with water',
              '$NaF$ is a strong base',
              '$F^-$ is a strong acid'
            ],
            correctAnswer: 1,
            explanation: '$F^-$ is the conjugate base of the weak acid $HF$. It reacts with water: $F^- + H_2O \\rightleftharpoons HF + OH^-$, producing $OH^-$ and making the solution basic.'
          },
          {
            question: 'Which solution has the highest pH?',
            options: [
              '0.10 M $NaCl$',
              '0.10 M $NH_3$ ($K_b = 1.8 \\times 10^{-5}$)',
              '0.10 M $CH_3NH_2$ ($K_b = 4.4 \\times 10^{-4}$)',
              '0.10 M $HCl$'
            ],
            correctAnswer: 2,
            explanation: '$CH_3NH_2$ has the largest $K_b$, producing the most $OH^-$ at the same concentration. More $OH^-$ means higher pH. $NaCl$ is neutral (pH 7), $HCl$ is strongly acidic (pH 1).'
          }
        ]
      }
    }
  ]
}
