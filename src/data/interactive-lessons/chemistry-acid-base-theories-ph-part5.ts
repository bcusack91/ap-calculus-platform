export const chemAcidBaseTheoriesPhPart5Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab5-intro',
      type: 'text' as const,
      content: `# 💪 Strong Acids and Bases — pH Calculations

**Part 5 of 7 — Complete Dissociation Means Easy Math**

---

### Strong = Complete Dissociation

| Type | Example | Key Calculation |
|------|---------|-----------------|
| Strong monoprotic acid | 0.025 M HCl | $[H^+] = 0.025$ M, pH = 1.60 |
| Sulfuric acid | 0.010 M $H_2SO_4$ | First $H^+$ complete: $[H^+]$ is between 0.010 and 0.020 M |
| Strong base (Group 1) | 0.010 M NaOH | $[OH^-] = 0.010$ M, pOH = 2.00 |
| Strong base (Group 2) | 0.005 M $Ba(OH)_2$ | $[OH^-] = 0.010$ M |

> 🔑 **Why this matters:** Strong acid/base pH problems are the foundation for all later calculations — titrations, buffers, and equilibrium all build from here.

---

### What You'll Master in Part 5
- Calculating pH of strong monoprotic acids, and why $H_2SO_4$ is not simply "2C"
- Calculating pOH and pH of strong bases (Group 1 and Group 2)
- Handling dilution before calculating pH`
    },
    {
      id: 'ab5-strong-acids',
      type: 'text' as const,
      content: `
## 🧪 pH of Strong Acids

For a strong acid $HA$ at concentration $C$:

$$HA \\rightarrow H^+ + A^-$$

Since dissociation is **100% complete**: $[H^+] = C$

$$\\boxed{pH = -\\log C}$$


---

### Example 1

> **Problem:** What is the pH of 0.025 M $HCl$?

**Solution:**

$$[H^+] = 0.025 \\text{ M}$$
$$pH = -\\log(0.025) = 1.60$$


---

### Example 2

> **Problem:** What is the pH of 0.0040 M $HNO_3$?

**Solution:**

$$[H^+] = 0.0040 \\text{ M}$$
$$pH = -\\log(0.0040) = 2.40$$


---

### Diprotic Strong Acid ($H_2SO_4$)

Only the **first** ionization is complete:

$$H_2SO_4 \\rightarrow H^+ + HSO_4^- \\quad \\text{(100\\%)}$$

The second ionization is a **weak-acid equilibrium**:

$$HSO_4^- \\rightleftharpoons H^+ + SO_4^{2-} \\quad (K_a = 0.012)$$

So a solution of $H_2SO_4$ at concentration $C$ has $[H^+]$ **at least** $C$ (from the first step) but **less than** $2C$, because only part of the $HSO_4^-$ ionizes. For 0.010 M $H_2SO_4$, $[H^+]$ is about 0.015 M, not 0.020 M.

> ⚠️ Do not write $[H^+] = 2C$ for sulfuric acid. In a **neutralization**, though, both protons do react with a strong base, so 1 mol $H_2SO_4$ needs 2 mol $NaOH$.
      `
    },
    {
      id: 'ab5-strong-bases',
      type: 'text' as const,
      content: `
## 📌 pH of Strong Bases

For a strong base like $NaOH$ at concentration $C$:

$$NaOH \\rightarrow Na^+ + OH^-$$

$[OH^-] = C$, then:

$$\\boxed{pOH = -\\log C \\quad\\Rightarrow\\quad pH = 14 - pOH}$$


---

### Example 1

> **Problem:** What is the pH of 0.010 M $NaOH$?

**Solution:**

$$[OH^-] = 0.010 \\text{ M}$$
$$pOH = -\\log(0.010) = 2.00$$
$$pH = 14 - 2.00 = 12.00$$


---

### Group 2 Hydroxides

For $Ba(OH)_2$ or $Ca(OH)_2$:

$$Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$$

$$[OH^-] = 2C$$


---

### Example 2

> **Problem:** What is the pH of 0.0050 M $Ba(OH)_2$?

**Solution:**

$$[OH^-] = 2(0.0050) = 0.010 \\text{ M}$$
$$pOH = -\\log(0.010) = 2.00$$
$$pH = 14 - 2.00 = 12.00$$
      `
    },
    {
      id: 'ab5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Strong Acid/Base pH Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the pH of 0.10 M $HBr$?',
            options: [
              '0.10',
              '1.00',
              '13.00',
              '0.90'
            ],
            correctAnswer: 1,
            explanation: '$HBr$ is a strong acid: $[H^+] = 0.10$ M. $pH = -\\log(0.10) = 1.00$.'
          },
          {
            question: 'What is the pH of $5.0 \\times 10^{-3}$ M $KOH$?',
            options: [
              '2.30',
              '10.30',
              '12.00',
              '11.70'
            ],
            correctAnswer: 3,
            explanation: '$KOH$ is a strong base: $[OH^-] = 5.0 \\times 10^{-3}$ M. $pOH = -\\log(5.0 \\times 10^{-3}) = 2.30$. $pH = 14 - 2.30 = 11.70$. Reporting 2.30 stops at the pOH; 10.30 comes from adding $\\log 5$ instead of subtracting it (pOH = 3.70); 12.00 doubles $[OH^-]$ as if $KOH$ released two hydroxide ions.'
          },
          {
            question: 'What is $[OH^-]$ in a solution of 0.020 M $Ca(OH)_2$?',
            options: [
              '0.010 M',
              '0.020 M',
              '0.040 M',
              '0.080 M'
            ],
            correctAnswer: 2,
            explanation: '$Ca(OH)_2 \\rightarrow Ca^{2+} + 2OH^-$. Each formula unit produces 2 $OH^-$ ions, so $[OH^-] = 2(0.020) = 0.040$ M.'
          }
        ]
      }
    },
    {
      id: 'ab5-dilution',
      type: 'text' as const,
      content: `
## 📌 Mixing and Dilution

### Diluting a Strong Acid

> 🔑 Use $M_1V_1 = M_2V_2$ for dilution problems:

**Example:** 25.0 mL of 0.10 M $HCl$ is diluted to 100.0 mL. What is the new pH?

$$M_2 = \\frac{M_1V_1}{V_2} = \\frac{(0.10)(25.0)}{100.0} = 0.025 \\text{ M}$$

$$pH = -\\log(0.025) = 1.60$$


---

### Mixing Strong Acid and Strong Base

**Example:** 50.0 mL of 0.10 M $HCl$ + 30.0 mL of 0.10 M $NaOH$

Moles $H^+$ = $0.050 \\times 0.10 = 0.0050$ mol

Moles $OH^-$ = $0.030 \\times 0.10 = 0.0030$ mol

Excess $H^+$ = $0.0050 - 0.0030 = 0.0020$ mol

Total volume = $80.0$ mL = $0.0800$ L

$$[H^+] = \\frac{0.0020}{0.0800} = 0.025 \\text{ M}$$

$$pH = -\\log(0.025) = 1.60$$
      `
    },
    {
      id: 'ab5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Strong Acid/Base Calculation Drill** 🧮

**1)** What is the pH of 0.0020 M $HClO_4$? (2 decimal places)

**2)** What is the pH of 0.050 M $Ba(OH)_2$? (2 decimal places)

**3)** 40.0 mL of 0.15 M $HNO_3$ is mixed with 20.0 mL of 0.15 M $NaOH$. What is the pH? (2 decimal places)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2.70', '13.00', '1.30'],
        hint1: '$HClO_4$ is a strong acid: $pH = -\\log(0.0020)$.',
        hint2: '$Ba(OH)_2$: $[OH^-] = 2(0.050) = 0.10$ M.',
        hint3: 'Find excess $H^+$: mol $H^+$ = $(0.040)(0.15)$, mol $OH^-$ = $(0.020)(0.15)$; divide excess by total volume.',
        explanation: '1) $pH = -\\log(0.0020) = 2.70$. 2) $[OH^-] = 2(0.050) = 0.10$ M; $pOH = 1.00$; $pH = 13.00$. 3) mol $H^+$ = $0.0060$, mol $OH^-$ = $0.0030$; excess $H^+$ = $0.0030$ mol in $0.060$ L; $[H^+] = 0.050$ M; $pH = -\\log(0.050) = 1.30$.'
      }
    },
    {
      id: 'ab5-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Strong Acid/Base Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The pH of a strong acid can be calculated directly from its concentration because',
            options: ['it partially dissociates', 'it completely dissociates', 'it doesn\'t ionize', 'its $K_a$ is very small']
          },
          {
            label: 'Adding water to a strong acid solution will cause the pH to',
            options: ['decrease', 'increase toward 7', 'stay the same', 'become exactly 7']
          },
          {
            label: 'Which has the lowest pH?',
            options: ['0.10 M NaOH', '0.10 M HCl', '0.10 M NaCl', 'Pure water']
          },
          {
            label: 'For 0.10 M $Ca(OH)_2$, $[OH^-]$ is',
            options: ['0.050 M', '0.10 M', '0.20 M', '0.40 M']
          }
        ],
        correctAnswers: ['it completely dissociates', 'increase toward 7', '0.10 M HCl', '0.20 M'],
        hint1: 'Strong acids dissociate 100%.',
        hint2: 'Dilution lowers $[H^+]$, moving pH toward neutral.',
        hint3: '$HCl$ is acidic (low pH), $NaOH$ is basic (high pH).',
        explanation: 'Complete dissociation means $[H^+] = C_{acid}$. Dilution increases pH toward 7 (never past it). 0.10 M HCl has pH = 1 (lowest). $Ca(OH)_2$ gives 2 $OH^-$ per unit: $[OH^-] = 0.20$ M.'
      }
    },
    {
      id: 'ab5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Strong Acid/Base pH** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Equal volumes of 0.20 M $HCl$ and 0.20 M $NaOH$ are mixed. The resulting pH is:',
            options: [
              '1.0',
              '7.0',
              '13.0',
              '0.0'
            ],
            correctAnswer: 1,
            explanation: 'Equal moles of strong acid and strong base completely neutralize each other. The resulting solution contains only $NaCl$ and water, so $pH = 7.0$.'
          },
          {
            question: 'A 0.050 M HCl solution is diluted by a factor of 10. What is the new pH?',
            options: [
              '1.30',
              '0.30',
              '2.30',
              '3.30'
            ],
            correctAnswer: 2,
            explanation: 'After a tenfold dilution, $[H_3O^+] = 0.0050$ M, so $pH = -\\log(0.0050) = 2.30$. A tenfold dilution of a strong acid raises the pH by exactly 1 unit. 1.30 is the pH before dilution, 0.30 moves the pH the wrong way, and 3.30 treats the dilution as a factor of 100.'
          }
        ]
      }
    }
  ]
}
