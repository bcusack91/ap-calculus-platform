export const chemBufferSolutionsHendersonHasselbalchPart1Data = {
  topicSlug: 'buffer-solutions-henderson-hasselbalch',
  sections: [
    {
      id: 'bf1-intro',
      type: 'text' as const,
      content: `
# 🛡️ What Is a Buffer?

**Part 1 of 7 — Resisting pH Change**

Buffer solutions are among the most important concepts in AP Chemistry and biochemistry. They maintain a nearly constant pH even when small amounts of acid or base are added. Your blood, for example, is buffered at pH 7.4!
      `
    },
    {
      id: 'bf1-definition',
      type: 'text' as const,
      content: `
## 📖 Buffer Definition

A **buffer** is a solution that resists changes in pH when small amounts of strong acid or strong base are added.


---

### Composition

A buffer contains two key components:

| Buffer Type | Component 1 | Component 2 | Example |
|------------|-------------|-------------|---------|
| **Acidic buffer** | Weak acid ($HA$) | Conjugate base ($A^-$) | $CH_3COOH / CH_3COO^-$ |
| **Basic buffer** | Weak base ($B$) | Conjugate acid ($BH^+$) | $NH_3 / NH_4^+$ |


---

### Why Two Components?

- The **weak acid** neutralizes added **base**: $HA + OH^- \\rightarrow A^- + H_2O$
- The **conjugate base** neutralizes added **acid**: $A^- + H^+ \\rightarrow HA$

Neither component is consumed quickly because both are present in significant amounts — the pH changes only slightly!


---

### What Does NOT Make a Buffer?

- Strong acid + strong base → complete reaction, no equilibrium
- Strong acid alone → no conjugate base reservoir
- Weak acid alone (no added conjugate base) → limited buffering
- A salt of a strong acid + strong base (e.g., $NaCl$)
      `
    },
    {
      id: 'bf1-how-it-works',
      type: 'text' as const,
      content: `
## 🔧 How Buffers Maintain pH

Consider the acetic acid/acetate buffer ($CH_3COOH / CH_3COO^-$):


---

### When Strong Acid ($H^+$) Is Added:

$$CH_3COO^-(aq) + H^+(aq) \\rightarrow CH_3COOH(aq)$$

The conjugate base **consumes** the added $H^+$, converting it to weak acid. The pH barely changes because the ratio $[A^-]/[HA]$ changes only slightly.


---

### When Strong Base ($OH^-$) Is Added:

$$CH_3COOH(aq) + OH^-(aq) \\rightarrow CH_3COO^-(aq) + H_2O(l)$$

The weak acid **consumes** the added $OH^-$, converting it to conjugate base. Again, the ratio changes only slightly.


---

### Key Insight

The buffer works because the added strong acid or base is **completely consumed** by reaction with one buffer component, and the $[A^-]/[HA]$ ratio changes only slightly if the buffer is concentrated enough.
      `
    },
    {
      id: 'bf1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Buffer Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is a buffer solution?',
            options: [
              '0.10 M $HCl$ and 0.10 M $NaCl$',
              '0.10 M $CH_3COOH$ and 0.10 M $NaCH_3COO$',
              '0.10 M $NaOH$ and 0.10 M $NaCl$',
              '0.10 M $HCl$ and 0.10 M $NaOH$'
            ],
            correctAnswer: 1,
            explanation: 'A buffer requires a weak acid and its conjugate base (or weak base and conjugate acid). $CH_3COOH/NaCH_3COO$ is a weak acid/conjugate base pair. $HCl$ is a strong acid — it cannot form a buffer.'
          },
          {
            question: 'When $H^+$ is added to an acetate buffer, which species reacts with it?',
            options: [
              '$CH_3COOH$ (acetic acid)',
              '$CH_3COO^-$ (acetate ion)',
              '$H_2O$ (water)',
              '$Na^+$ (sodium ion)'
            ],
            correctAnswer: 1,
            explanation: 'The conjugate base $CH_3COO^-$ reacts with added $H^+$: $CH_3COO^- + H^+ \\rightarrow CH_3COOH$. This consumes the acid and prevents a large pH change.'
          },
          {
            question: 'Why can\'t a strong acid and strong base mixture act as a buffer?',
            options: [
              'They don\'t dissolve in water',
              'They react completely — no equilibrium reservoir remains',
              'They have the same pH',
              'They don\'t contain ions'
            ],
            correctAnswer: 1,
            explanation: 'Strong acid + strong base react completely (neutralization). After reaction, you have either excess strong acid, excess strong base, or a neutral salt — none of which can buffer.'
          }
        ]
      }
    },
    {
      id: 'bf1-examples',
      type: 'text' as const,
      content: `
## 🛡️ Common Buffer Systems

| Buffer System | Weak Acid | Conjugate Base | Approximate pH Range |
|--------------|-----------|---------------|---------------------|
| Acetic acid/Acetate | $CH_3COOH$ | $CH_3COO^-$ | 3.7 – 5.7 |
| Carbonic acid/Bicarbonate | $H_2CO_3$ | $HCO_3^-$ | 5.4 – 7.4 |
| Dihydrogen phosphate/Hydrogen phosphate | $H_2PO_4^-$ | $HPO_4^{2-}$ | 6.2 – 8.2 |
| Ammonia/Ammonium | $NH_4^+$ | $NH_3$ | 8.2 – 10.2 |


---

### Biological Buffers

- **Blood:** Carbonic acid/bicarbonate system ($H_2CO_3/HCO_3^-$), maintained at pH 7.4
- **Cells:** Phosphate buffer system ($H_2PO_4^-/HPO_4^{2-}$), around pH 7.2
- **Proteins:** Amino acid side chains act as buffers
      `
    },
    {
      id: 'bf1-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Buffer Identification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$HF$ and $NaF$ together form a',
            options: ['buffer', 'strong acid solution', 'neutral solution', 'precipitate']
          },
          {
            label: 'When $OH^-$ is added to a buffer, the species that reacts is the',
            options: ['weak acid', 'conjugate base', 'water', 'salt']
          },
          {
            label: 'The blood buffer system uses',
            options: ['HCl/NaCl', 'H₂CO₃/HCO₃⁻', 'NaOH/NaCl', 'H₂SO₄/NaHSO₄']
          },
          {
            label: 'A buffer works best when $[HA]$ and $[A^-]$ are',
            options: ['very different', 'approximately equal', 'both very small', 'both zero']
          }
        ],
        correctAnswers: ['buffer', 'weak acid', 'H₂CO₃/HCO₃⁻', 'approximately equal'],
        hint1: '$HF$ is a weak acid; $F^-$ (from $NaF$) is its conjugate base.',
        hint2: 'The weak acid neutralizes added base.',
        hint3: 'The carbonic acid/bicarbonate system is the primary blood buffer.',
        explanation: '$HF/NaF$ is a weak acid/conjugate base buffer. $OH^-$ reacts with the weak acid ($HA + OH^- \\rightarrow A^- + H_2O$). Blood uses $H_2CO_3/HCO_3^-$. Buffers work best when $[HA] \\approx [A^-]$ (maximum capacity).'
      }
    },
    {
      id: 'bf1-input-practice',
      type: 'input-boxes' as const,
      content: `
**Buffer Component Identification** 🧮

For each buffer, identify the missing component:

**1)** Buffer: $HNO_2$ / ___. What is the conjugate base? (Enter formula, e.g. NO2-)

**2)** Buffer: ___ / $NH_3$. What is the conjugate acid? (Enter formula, e.g. NH4+)

**3)** To make a phosphate buffer at pH ≈ 7.2, you mix $NaH_2PO_4$ with what? (Enter formula, e.g. Na2HPO4)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['NO2-', 'NH4+', 'Na2HPO4'],
        hint1: 'Remove one $H^+$ from $HNO_2$.',
        hint2: 'Add one $H^+$ to $NH_3$.',
        hint3: 'The conjugate base of $H_2PO_4^-$ is $HPO_4^{2-}$, provided as $Na_2HPO_4$.',
        explanation: '1) $HNO_2$ loses $H^+$ → $NO_2^-$. 2) $NH_3$ gains $H^+$ → $NH_4^+$. 3) $H_2PO_4^-/HPO_4^{2-}$ is the buffer pair; $Na_2HPO_4$ provides $HPO_4^{2-}$.'
      }
    },
    {
      id: 'bf1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — What Is a Buffer?** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A student mixes 0.10 M $NH_3$ with 0.10 M $NH_4Cl$. This solution:',
            options: [
              'Is not a buffer — $NH_3$ is a weak base',
              'Is a buffer — it contains a weak base and its conjugate acid',
              'Is a neutral solution',
              'Will have pH = 7'
            ],
            correctAnswer: 1,
            explanation: '$NH_3$ (weak base) + $NH_4^+$ (conjugate acid from $NH_4Cl$) forms a buffer. Buffers can be made from either weak acid/conjugate base OR weak base/conjugate acid pairs.'
          },
          {
            question: 'If 0.001 mol $HCl$ is added to 1.0 L of a buffer containing 0.10 mol $CH_3COOH$ and 0.10 mol $CH_3COO^-$, the pH will:',
            options: [
              'Decrease dramatically',
              'Increase dramatically',
              'Decrease only slightly',
              'Not change at all'
            ],
            correctAnswer: 2,
            explanation: 'The $CH_3COO^-$ reacts with $H^+$: 0.10 mol becomes 0.099 mol, while $CH_3COOH$ goes from 0.10 to 0.101 mol. The ratio changes very little, so pH changes very slightly.'
          }
        ]
      }
    }
  ]
}
