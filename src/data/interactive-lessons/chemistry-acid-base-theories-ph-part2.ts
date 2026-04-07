export const chemAcidBaseTheoriesPhPart2Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab2-intro',
      type: 'text' as const,
      content: `
# 🔄 Brønsted-Lowry Acids and Bases

**Part 2 of 7 — Proton Donors and Acceptors**

The Brønsted-Lowry model expands our understanding of acids and bases beyond aqueous solutions. Instead of focusing on $H^+$ and $OH^-$ production, it centers on **proton transfer**.
      `
    },
    {
      id: 'ab2-definition',
      type: 'text' as const,
      content: `
## 📖 The Brønsted-Lowry Definition

| Type | Definition |
|------|-----------|
| **Brønsted-Lowry Acid** | A proton ($H^+$) **donor** |
| **Brønsted-Lowry Base** | A proton ($H^+$) **acceptor** |


---

### Key Advantage

This definition works in **any solvent** — not just water!


---

### Example: $HCl$ in Water

$$HCl(aq) + H_2O(l) \\rightarrow H_3O^+(aq) + Cl^-(aq)$$

- $HCl$ **donates** a proton → **acid**
- $H_2O$ **accepts** a proton → **base**


---

### Example: $NH_3$ in Water

$$NH_3(aq) + H_2O(l) \\rightleftharpoons NH_4^+(aq) + OH^-(aq)$$

- $NH_3$ **accepts** a proton → **base**
- $H_2O$ **donates** a proton → **acid**

Notice: water can act as either an acid or a base! This is called being **amphoteric** (or **amphiprotic**).
      `
    },
    {
      id: 'ab2-conjugate-pairs',
      type: 'text' as const,
      content: `
## 🧪 Conjugate Acid-Base Pairs

When an acid donates a proton, the product is its **conjugate base**. When a base accepts a proton, the product is its **conjugate acid**.

$$\\underbrace{HA}_{\\text{acid}} + \\underbrace{B}_{\\text{base}} \\rightleftharpoons \\underbrace{A^-}_{\\text{conjugate base}} + \\underbrace{BH^+}_{\\text{conjugate acid}}$$


---

### Examples

| Acid | Conjugate Base | Relationship |
|------|---------------|-------------|
| $HCl$ | $Cl^-$ | Differs by one $H^+$ |
| $H_2O$ | $OH^-$ | Differs by one $H^+$ |
| $NH_4^+$ | $NH_3$ | Differs by one $H^+$ |
| $H_2SO_4$ | $HSO_4^-$ | Differs by one $H^+$ |
| $HSO_4^-$ | $SO_4^{2-}$ | Differs by one $H^+$ |


---

### Critical Rule

A conjugate pair always differs by exactly **one proton** ($H^+$).


---

### Strength Relationship

**Strong acid → very weak conjugate base** (and vice versa)

- $HCl$ is strong → $Cl^-$ is a negligible base (does not accept protons)
- $CH_3COOH$ is weak → $CH_3COO^-$ is a moderate conjugate base
      `
    },
    {
      id: 'ab2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Brønsted-Lowry Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $CH_3COOH + H_2O \\rightleftharpoons CH_3COO^- + H_3O^+$, what is the conjugate base of $CH_3COOH$?',
            options: [
              '$H_2O$',
              '$H_3O^+$',
              '$CH_3COO^-$',
              '$OH^-$'
            ],
            correctAnswer: 2,
            explanation: '$CH_3COOH$ donates a proton to become $CH_3COO^-$. The conjugate base is formed when an acid loses a proton.'
          },
          {
            question: 'Water acts as a Brønsted-Lowry base when it:',
            options: [
              'Donates a proton to $NH_3$',
              'Accepts a proton from $HCl$',
              'Produces $OH^-$ ions',
              'Dissolves a salt'
            ],
            correctAnswer: 1,
            explanation: 'A Brønsted-Lowry base accepts a proton. When $HCl$ donates $H^+$ to $H_2O$, water acts as a base: $HCl + H_2O \\rightarrow H_3O^+ + Cl^-$.'
          },
          {
            question: 'Which species is amphoteric?',
            options: [
              '$HCl$',
              '$NaOH$',
              '$HSO_4^-$',
              '$Na^+$'
            ],
            correctAnswer: 2,
            explanation: '$HSO_4^-$ is amphoteric: it can donate a proton (acting as an acid: $HSO_4^- \\rightarrow SO_4^{2-} + H^+$) or accept one (acting as a base: $HSO_4^- + H^+ \\rightarrow H_2SO_4$).'
          }
        ]
      }
    },
    {
      id: 'ab2-identifying-pairs',
      type: 'text' as const,
      content: `
## ⚗️ Identifying Conjugate Pairs in Reactions

For any Brønsted-Lowry reaction, there are always **two conjugate pairs**:

$$\\underbrace{HF}_{\\text{acid}_1} + \\underbrace{H_2O}_{\\text{base}_2} \\rightleftharpoons \\underbrace{F^-}_{\\text{conj. base}_1} + \\underbrace{H_3O^+}_{\\text{conj. acid}_2}$$

**Pair 1:** $HF / F^-$

**Pair 2:** $H_2O / H_3O^+$


---

### Steps to Identify

1. Find the species that **lost** a proton → that\'s the acid; its product is the conjugate base
2. Find the species that **gained** a proton → that\'s the base; its product is the conjugate acid
3. Each acid is paired with its conjugate base (they differ by one $H^+$)
      `
    },
    {
      id: 'ab2-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Conjugate Pair Identification** 🔍

For the reaction: $NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$
      `,
      exercise: {
        dropdowns: [
          {
            label: '$NH_3$ acts as a Brønsted-Lowry',
            options: ['acid', 'base', 'salt', 'spectator']
          },
          {
            label: 'The conjugate acid of $NH_3$ is',
            options: ['NH₂⁻', 'NH₄⁺', 'OH⁻', 'H₃O⁺']
          },
          {
            label: '$H_2O$ acts as a Brønsted-Lowry',
            options: ['acid', 'base', 'amphoteric only', 'neither']
          },
          {
            label: 'The conjugate base of $H_2O$ is',
            options: ['H₃O⁺', 'OH⁻', 'O²⁻', 'H₂']
          }
        ],
        correctAnswers: ['base', 'NH₄⁺', 'acid', 'OH⁻'],
        hint1: '$NH_3$ accepts a proton from water.',
        hint2: 'When a base accepts $H^+$, it forms its conjugate acid.',
        hint3: '$H_2O$ donates a proton in this reaction, so it acts as an acid.',
        explanation: '$NH_3$ accepts $H^+$ (base) → $NH_4^+$ (conjugate acid). $H_2O$ donates $H^+$ (acid) → $OH^-$ (conjugate base). Two conjugate pairs: $NH_3/NH_4^+$ and $H_2O/OH^-$.'
      }
    },
    {
      id: 'ab2-input-practice',
      type: 'input-boxes' as const,
      content: `
**Conjugate Pair Practice** 🧮

Identify the conjugate partners:

**1)** What is the conjugate base of $H_2CO_3$? (Enter the chemical formula, e.g. HCO3-)

**2)** What is the conjugate acid of $PO_4^{3-}$? (Enter the chemical formula, e.g. HPO42-)

**3)** What is the conjugate base of $H_2O$? (Enter the chemical formula, e.g. OH-)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['HCO3-', 'HPO42-', 'OH-'],
        hint1: 'Remove one $H^+$ from $H_2CO_3$.',
        hint2: 'Add one $H^+$ to $PO_4^{3-}$.',
        hint3: 'Remove one $H^+$ from $H_2O$.',
        explanation: '1) $H_2CO_3$ loses $H^+$ → $HCO_3^-$. 2) $PO_4^{3-}$ gains $H^+$ → $HPO_4^{2-}$. 3) $H_2O$ loses $H^+$ → $OH^-$. Each conjugate pair differs by exactly one proton.'
      }
    },
    {
      id: 'ab2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Brønsted-Lowry Theory** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $HCO_3^- + H_2O \\rightleftharpoons H_2CO_3 + OH^-$, $HCO_3^-$ acts as a:',
            options: [
              'Brønsted-Lowry acid',
              'Brønsted-Lowry base',
              'Lewis acid',
              'Spectator ion'
            ],
            correctAnswer: 1,
            explanation: '$HCO_3^-$ accepts a proton from $H_2O$ to form $H_2CO_3$. Accepting a proton makes it a Brønsted-Lowry base in this reaction.'
          },
          {
            question: 'A strong acid has a conjugate base that is:',
            options: [
              'Also strong',
              'Moderate in strength',
              'Negligibly weak',
              'Amphoteric'
            ],
            correctAnswer: 2,
            explanation: 'The stronger the acid, the weaker its conjugate base. Strong acids like $HCl$ have conjugate bases ($Cl^-$) that are so weak they essentially never accept protons.'
          }
        ]
      }
    }
  ]
}
