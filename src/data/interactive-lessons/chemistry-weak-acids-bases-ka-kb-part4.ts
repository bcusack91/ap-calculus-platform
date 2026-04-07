export const chemWeakAcidsBasesKaKbPart4Data = {
  topicSlug: 'weak-acids-bases-ka-kb',
  sections: [
    {
      id: 'wk4-intro',
      type: 'text' as const,
      content: `
# 🔗 The $K_a \\times K_b = K_w$ Relationship

**Part 4 of 7 — Connecting Conjugate Pairs**

One of the most powerful relationships in acid-base chemistry connects the strength of a conjugate acid-base pair through the ion product of water.
      `
    },
    {
      id: 'wk4-derivation',
      type: 'text' as const,
      content: `
## 🔗 Deriving the Relationship

Consider acetic acid and its conjugate base, acetate:

**Acid dissociation:**

$$CH_3COOH \\rightleftharpoons H^+ + CH_3COO^- \\qquad K_a = \\frac{[H^+][CH_3COO^-]}{[CH_3COOH]}$$

**Base hydrolysis (conjugate base):**

$$CH_3COO^- + H_2O \\rightleftharpoons CH_3COOH + OH^- \\qquad K_b = \\frac{[CH_3COOH][OH^-]}{[CH_3COO^-]}$$

**Multiply $K_a \\times K_b$:**

$$K_a \\times K_b = \\frac{[H^+][CH_3COO^-]}{[CH_3COOH]} \\times \\frac{[CH_3COOH][OH^-]}{[CH_3COO^-]}$$

$$K_a \\times K_b = [H^+][OH^-] = K_w$$

$$\\boxed{K_a \\times K_b = K_w = 1.0 \\times 10^{-14} \\text{ at 25°C}}$$

This is true for **any** conjugate acid-base pair!
      `
    },
    {
      id: 'wk4-pka-pkb',
      type: 'text' as const,
      content: `
## 🔗 The $pK_a + pK_b = 14$ Relationship

Taking $-\\log$ of both sides of $K_a \\times K_b = K_w$:

$$-\\log K_a + (-\\log K_b) = -\\log K_w$$

$$\\boxed{pK_a + pK_b = pK_w = 14 \\text{ at 25°C}}$$


---

### Applications

If you know $K_a$ for an acid, you can find $K_b$ for its conjugate base:

$$K_b = \\frac{K_w}{K_a} = \\frac{1.0 \\times 10^{-14}}{K_a}$$


---

### Example

> **Problem:** $CH_3COOH$ has $K_a = 1.8 \\times 10^{-5}$. What is $K_b$ for $CH_3COO^-$?

**Solution:**

$$K_b = \\frac{1.0 \\times 10^{-14}}{1.8 \\times 10^{-5}} = 5.6 \\times 10^{-10}$$

$pK_b = 14 - 4.74 = 9.26$


---

### Key Insight

- **Strong acid** ($K_a$ very large) → **very weak conjugate base** ($K_b$ very small)
- **Weak acid** ($K_a$ small) → **relatively stronger conjugate base** ($K_b$ less small)
      `
    },
    {
      id: 'wk4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**$K_a \\times K_b$ Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $K_a$ for $HCN$ is $6.2 \\times 10^{-10}$, what is $K_b$ for $CN^-$?',
            options: [
              '$6.2 \\times 10^{-10}$',
              '$1.6 \\times 10^{-5}$',
              '$1.0 \\times 10^{-14}$',
              '$6.2 \\times 10^{-4}$'
            ],
            correctAnswer: 1,
            explanation: '$K_b = K_w/K_a = (1.0 \\times 10^{-14})/(6.2 \\times 10^{-10}) = 1.6 \\times 10^{-5}$. Note that $CN^-$ is a moderately strong base because $HCN$ is a very weak acid.'
          },
          {
            question: 'For any conjugate acid-base pair at 25°C, $pK_a + pK_b$ always equals:',
            options: [
              '7',
              '14',
              '$K_w$',
              'It depends on the pair'
            ],
            correctAnswer: 1,
            explanation: '$pK_a + pK_b = pK_w = 14$ at 25°C. This is a universal relationship for all conjugate pairs.'
          },
          {
            question: 'The conjugate base of a weak acid with $K_a = 10^{-3}$ has $K_b$ equal to:',
            options: [
              '$10^{-3}$',
              '$10^{-11}$',
              '$10^{-7}$',
              '$10^{3}$'
            ],
            correctAnswer: 1,
            explanation: '$K_b = K_w/K_a = 10^{-14}/10^{-3} = 10^{-11}$.'
          }
        ]
      }
    },
    {
      id: 'wk4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**$K_a$/$K_b$ Conversion Drill** 🧮

**1)** $HF$ has $K_a = 6.8 \\times 10^{-4}$. Find $K_b$ for $F^-$. (Enter in scientific notation, e.g. 1.5e-11)

**2)** $NH_3$ has $K_b = 1.8 \\times 10^{-5}$. Find $K_a$ for $NH_4^+$. (Enter in scientific notation, e.g. 5.6e-10)

**3)** A weak acid has $pK_a = 3.75$. Find $pK_b$ for its conjugate base. (3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.5e-11', '5.6e-10', '10.25'],
        hint1: '$K_b = K_w/K_a = 1.0 \\times 10^{-14}/(6.8 \\times 10^{-4})$.',
        hint2: '$K_a = K_w/K_b = 1.0 \\times 10^{-14}/(1.8 \\times 10^{-5})$.',
        hint3: '$pK_b = 14 - pK_a$.',
        explanation: '1) $K_b = 1.0 \\times 10^{-14}/(6.8 \\times 10^{-4}) = 1.47 \\times 10^{-11} \\approx 1.5 \\times 10^{-11}$. 2) $K_a = 1.0 \\times 10^{-14}/(1.8 \\times 10^{-5}) = 5.56 \\times 10^{-10} \\approx 5.6 \\times 10^{-10}$. 3) $pK_b = 14 - 3.75 = 10.25$.'
      }
    },
    {
      id: 'wk4-predicting-ph',
      type: 'text' as const,
      content: `
## 🧪 Using $K_a/K_b$ to Predict Salt Solutions

For salts of weak acid + strong base (e.g., $NaCH_3COO$):

1. Identify the ion that reacts with water ($CH_3COO^-$)
2. Find its $K_b$ using $K_b = K_w/K_a$
3. Use ICE table with $K_b$ to find $[OH^-]$
4. Convert to pH


---

### Example: pH of 0.20 M NaCN

$K_a(HCN) = 6.2 \\times 10^{-10}$ → $K_b(CN^-) = 1.6 \\times 10^{-5}$

$$[OH^-] = \\sqrt{(1.6 \\times 10^{-5})(0.20)} = \\sqrt{3.2 \\times 10^{-6}} = 1.8 \\times 10^{-3} \\text{ M}$$

$$pOH = 2.74 \\qquad pH = 11.26$$
      `
    },
    {
      id: 'wk4-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Conjugate Pair Strength** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The conjugate base of a very weak acid (small $K_a$) is',
            options: ['very weak', 'relatively strong', 'neutral', 'impossible to determine']
          },
          {
            label: '$K_a \\times K_b = K_w$ applies to',
            options: ['strong acids only', 'weak acids only', 'any conjugate pair', 'only at high temperature']
          },
          {
            label: 'A solution of $KNO_2$ (where $HNO_2$ is a weak acid) is',
            options: ['acidic', 'neutral', 'basic', 'depends on concentration']
          }
        ],
        correctAnswers: ['relatively strong', 'any conjugate pair', 'basic'],
        hint1: 'Weak acid → conjugate base that reacts significantly with water.',
        hint2: 'The relationship is universal at a given temperature.',
        hint3: '$NO_2^-$ is the conjugate base of weak acid $HNO_2$.',
        explanation: 'Very weak acids have relatively stronger conjugate bases ($K_b = K_w/K_a$ is larger when $K_a$ is smaller). The relationship holds for any conjugate pair. $KNO_2$ is basic because $NO_2^-$ hydrolyzes to produce $OH^-$.'
      }
    },
    {
      id: 'wk4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — $K_a \\times K_b = K_w$** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If $K_b$ for $NH_3$ is $1.8 \\times 10^{-5}$, the $K_a$ for $NH_4^+$ is:',
            options: [
              '$1.8 \\times 10^{-5}$',
              '$5.6 \\times 10^{-10}$',
              '$1.0 \\times 10^{-14}$',
              '$1.8 \\times 10^{-9}$'
            ],
            correctAnswer: 1,
            explanation: '$K_a = K_w/K_b = (1.0 \\times 10^{-14})/(1.8 \\times 10^{-5}) = 5.6 \\times 10^{-10}$. $NH_4^+$ is a weak acid with a small $K_a$.'
          },
          {
            question: 'Which salt solution has the highest pH?',
            options: [
              '0.10 M NaCl',
              '0.10 M NaCN ($K_a$ of HCN = $6.2 \\times 10^{-10}$)',
              '0.10 M $NaCH_3COO$ ($K_a$ of $CH_3COOH = 1.8 \\times 10^{-5}$)',
              '0.10 M NaF ($K_a$ of HF = $6.8 \\times 10^{-4}$)'
            ],
            correctAnswer: 1,
            explanation: 'Weakest parent acid → strongest conjugate base → highest pH. $HCN$ has the smallest $K_a$ ($6.2 \\times 10^{-10}$), so $CN^-$ has the largest $K_b$ ($1.6 \\times 10^{-5}$), giving the highest pH.'
          }
        ]
      }
    }
  ]
}
