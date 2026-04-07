export const chemBufferSolutionsHendersonHasselbalchPart5Data = {
  topicSlug: 'buffer-solutions-henderson-hasselbalch',
  sections: [
    {
      id: 'bf5-intro',
      type: 'text' as const,
      content: `
# 🧪 Preparing Buffers

**Part 5 of 7 — Choosing the Right Acid and Designing a Buffer**

In the lab, you need to prepare buffers at specific pH values with specific capacities. This requires choosing the right weak acid and calculating the correct amounts of acid and conjugate base.
      `
    },
    {
      id: 'bf5-choosing-acid',
      type: 'text' as const,
      content: `
## Step 1: Choose the Right Weak Acid

**Rule:** Choose a weak acid whose $pK_a$ is as close as possible to the desired pH.

### Why?

- The buffer is most effective at $pH = pK_a$ (equal concentrations of $HA$ and $A^-$)
- The buffer works in the range $pK_a \\pm 1$
- Closer $pK_a$ to target pH → closer to 1:1 ratio → better capacity

### Common Buffer Acids and Their $pK_a$ Values

| Target pH | Best Acid | $pK_a$ |
|-----------|----------|--------|
| 3 – 4 | Formic acid ($HCOOH$) | 3.75 |
| 4 – 5 | Acetic acid ($CH_3COOH$) | 4.74 |
| 6 – 8 | $H_2PO_4^-$ (phosphate) | 7.21 |
| 7 – 8 | Tris buffer | 8.07 |
| 9 – 10 | $NH_4^+$ (ammonium) | 9.25 |
| 9 – 11 | $HCO_3^-$ (bicarbonate) | 10.33 |
      `
    },
    {
      id: 'bf5-calculating-amounts',
      type: 'text' as const,
      content: `
## Step 2: Calculate the Required Ratio

From the Henderson-Hasselbalch equation:

$$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$$

$$\\log\\frac{[A^-]}{[HA]} = pH - pK_a$$

$$\\frac{[A^-]}{[HA]} = 10^{(pH - pK_a)}$$

### Worked Example

Prepare 1.0 L of a pH 5.00 buffer using acetic acid ($pK_a = 4.74$) with a total buffer concentration of 0.20 M.

**Step 1:** Find the ratio

$$\\frac{[A^-]}{[HA]} = 10^{(5.00 - 4.74)} = 10^{0.26} = 1.82$$

**Step 2:** Set up equations

Let $[HA] = x$ and $[A^-] = 1.82x$

$$x + 1.82x = 0.20 \\text{ M}$$

$$2.82x = 0.20$$

$$x = 0.071 \\text{ M} = [HA]$$

$$[A^-] = 1.82(0.071) = 0.129 \\text{ M}$$

**Step 3:** Calculate moles for 1.0 L

- $CH_3COOH$: 0.071 mol
- $NaCH_3COO$: 0.129 mol
      `
    },
    {
      id: 'bf5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Buffer Preparation Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To prepare a buffer at pH 9.50, which acid/base system is best?',
            options: [
              'Acetic acid/acetate ($pK_a = 4.74$)',
              'Phosphate ($pK_a = 7.21$)',
              'Ammonia/ammonium ($pK_a = 9.25$)',
              'Formic acid/formate ($pK_a = 3.75$)'
            ],
            correctAnswer: 2,
            explanation: 'Choose the system with $pK_a$ closest to 9.50. Ammonia/ammonium ($pK_a = 9.25$) is the closest. The target pH (9.50) is within the range $9.25 \\pm 1$.'
          },
          {
            question: 'For a buffer at pH = $pK_a + 0.30$, the $[A^-]/[HA]$ ratio is:',
            options: [
              '0.30',
              '0.50',
              '1.00',
              '2.00'
            ],
            correctAnswer: 3,
            explanation: '$\\log([A^-]/[HA]) = pH - pK_a = 0.30$. $[A^-]/[HA] = 10^{0.30} = 2.00$. You need twice as much conjugate base as acid.'
          }
        ]
      }
    },
    {
      id: 'bf5-alternative-methods',
      type: 'text' as const,
      content: `
## Alternative Preparation Methods

### Method 2: Partial Neutralization

Instead of mixing weak acid + salt, you can add strong base to excess weak acid:

**Example:** To make an acetate buffer at pH 4.74:

Start with 0.20 mol $CH_3COOH$, then add 0.10 mol $NaOH$:

$$CH_3COOH + OH^- \\rightarrow CH_3COO^- + H_2O$$

- $CH_3COOH$ remaining: $0.20 - 0.10 = 0.10$ mol
- $CH_3COO^-$ formed: $0.10$ mol
- Ratio = 1:1 → $pH = pK_a = 4.74$ ✓

### Method 3: Partial Neutralization of Base

Start with weak base + add strong acid:

Start with 0.20 mol $NH_3$, add 0.10 mol $HCl$:

$$NH_3 + H^+ \\rightarrow NH_4^+$$

- $NH_3$ remaining: 0.10 mol
- $NH_4^+$ formed: 0.10 mol
- Buffer at $pH = pK_a(NH_4^+) = 9.25$
      `
    },
    {
      id: 'bf5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Buffer Preparation Calculations** 🧮

**1)** What ratio $[A^-]/[HA]$ is needed for a buffer at pH 4.00 using acetic acid ($pK_a = 4.74$)? (2 decimal places)

**2)** You have 0.30 mol $CH_3COOH$. How many moles of $NaOH$ should you add to make a buffer at pH = 4.74? (2 decimal places)

**3)** To prepare 500 mL of pH 9.55 buffer from $NH_4Cl$ and $NH_3$ ($pK_a = 9.25$), with total concentration 0.40 M, how many moles of $NH_3$ are needed? (3 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.18', '0.15', '0.133'],
        hint1: '$[A^-]/[HA] = 10^{(4.00 - 4.74)} = 10^{-0.74}$.',
        hint2: 'For $pH = pK_a$, you need equal moles of $HA$ and $A^-$. Add enough $NaOH$ to convert half the acid.',
        hint3: 'Ratio $= 10^{(9.55-9.25)} = 10^{0.30} = 2.00$. $[NH_3] = 2[NH_4^+]$. Total = $3[NH_4^+] = 0.40$ M.',
        explanation: '1) $10^{-0.74} = 0.182 \\approx 0.18$. 2) Half of 0.30 mol = 0.15 mol NaOH converts half the acid to acetate, giving 1:1 ratio. 3) $[NH_4^+] = 0.40/3 = 0.133$ M; $[NH_3] = 0.267$ M. Moles $NH_3$ = $0.267 \\times 0.500 = 0.133$ mol.'
      }
    },
    {
      id: 'bf5-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Buffer Design Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A buffer at pH 3.75 using formic acid ($pK_a = 3.75$) requires a ratio of',
            options: ['1:1', '10:1', '1:10', '100:1']
          },
          {
            label: 'Adding NaOH to excess weak acid creates a buffer because',
            options: ['NaOH is a buffer', 'it partially converts HA to A⁻', 'it neutralizes all the acid', 'it changes Kₐ']
          },
          {
            label: 'To increase both the pH and capacity of an acetate buffer, you should add',
            options: ['more CH₃COOH', 'more NaCH₃COO', 'water', 'HCl']
          }
        ],
        correctAnswers: ['1:1', 'it partially converts HA to A⁻', 'more NaCH₃COO'],
        hint1: 'At $pH = pK_a$, the ratio is 1:1.',
        hint2: 'Partial neutralization creates both buffer components.',
        hint3: 'More $A^-$ increases capacity AND increases the ratio (higher pH).',
        explanation: 'At $pH = pK_a$: ratio = 1:1. Adding $NaOH$ to excess acid partially converts $HA$ to $A^-$, creating both buffer components. Adding more $NaCH_3COO$ increases $[A^-]$, raising pH and capacity against acid.'
      }
    },
    {
      id: 'bf5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Preparing Buffers** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student needs to prepare a buffer at pH 7.40 for a biology experiment. The best choice is:',
            options: [
              'Acetic acid/sodium acetate ($pK_a = 4.74$)',
              'Sodium dihydrogen phosphate/sodium hydrogen phosphate ($pK_a = 7.21$)',
              'Ammonia/ammonium chloride ($pK_a = 9.25$)',
              'Hydrochloric acid/sodium chloride'
            ],
            correctAnswer: 1,
            explanation: '$pK_a = 7.21$ is closest to 7.40, and 7.40 is within the range $7.21 \\pm 1$. The phosphate buffer is the best choice for near-neutral pH. $HCl/NaCl$ is NOT a buffer.'
          },
          {
            question: 'To make 1.0 L of 0.10 M total phosphate buffer at pH 7.21, you need:',
            options: [
              '0.10 mol $NaH_2PO_4$ only',
              '0.10 mol $Na_2HPO_4$ only',
              '0.050 mol $NaH_2PO_4$ and 0.050 mol $Na_2HPO_4$',
              '0.10 mol $H_3PO_4$'
            ],
            correctAnswer: 2,
            explanation: 'At $pH = pK_a = 7.21$, the ratio is 1:1. Total = 0.10 M, so each component = 0.050 M. In 1.0 L, that\'s 0.050 mol of each.'
          }
        ]
      }
    }
  ]
}
