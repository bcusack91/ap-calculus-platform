export const chemAcidBaseTheoriesPhPart1Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab1-intro',
      type: 'text' as const,
      content: `
# 🧪 Arrhenius Acids and Bases

**Part 1 of 7 — The First Modern Definition**

The study of acids and bases is central to chemistry — from biochemistry to industrial processes, these substances shape reactions across every field. We begin with the oldest modern definition: the **Arrhenius model**.
      `
    },
    {
      id: 'ab1-arrhenius-definition',
      type: 'text' as const,
      content: `
## The Arrhenius Definition

In 1884, Svante Arrhenius proposed a simple classification:

| Type | Definition | Example |
|------|-----------|---------|
| **Arrhenius Acid** | Produces $H^+$ ions in aqueous solution | $HCl(aq) \\rightarrow H^+(aq) + Cl^-(aq)$ |
| **Arrhenius Base** | Produces $OH^-$ ions in aqueous solution | $NaOH(aq) \\rightarrow Na^+(aq) + OH^-(aq)$ |

### Key Features

- Acids increase $[H^+]$ in water
- Bases increase $[OH^-]$ in water
- Neutralization produces water: $H^+(aq) + OH^-(aq) \\rightarrow H_2O(l)$

### Limitations

The Arrhenius model only works in **aqueous solutions** and cannot explain:
- Why $NH_3$ acts as a base (it doesn\'t contain $OH^-$)
- Acid-base behavior in non-aqueous solvents
- Reactions between gases that show acid-base character
      `
    },
    {
      id: 'ab1-common-acids',
      type: 'text' as const,
      content: `
## Common Arrhenius Acids

### Strong Acids (Complete Dissociation)

| Formula | Name | Dissociation |
|---------|------|-------------|
| $HCl$ | Hydrochloric acid | $HCl \\rightarrow H^+ + Cl^-$ |
| $HNO_3$ | Nitric acid | $HNO_3 \\rightarrow H^+ + NO_3^-$ |
| $H_2SO_4$ | Sulfuric acid | $H_2SO_4 \\rightarrow 2H^+ + SO_4^{2-}$ |
| $HBr$ | Hydrobromic acid | $HBr \\rightarrow H^+ + Br^-$ |
| $HI$ | Hydroiodic acid | $HI \\rightarrow H^+ + I^-$ |
| $HClO_4$ | Perchloric acid | $HClO_4 \\rightarrow H^+ + ClO_4^-$ |

### Common Strong Bases

| Formula | Name | Dissociation |
|---------|------|-------------|
| $NaOH$ | Sodium hydroxide | $NaOH \\rightarrow Na^+ + OH^-$ |
| $KOH$ | Potassium hydroxide | $KOH \\rightarrow K^+ + OH^-$ |
| $Ca(OH)_2$ | Calcium hydroxide | $Ca(OH)_2 \\rightarrow Ca^{2+} + 2OH^-$ |
| $Ba(OH)_2$ | Barium hydroxide | $Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$ |

**Memorize the 6 strong acids and 4 strong bases** — everything else is weak!
      `
    },
    {
      id: 'ab1-hydronium',
      type: 'text' as const,
      content: `
## The Hydronium Ion

In reality, free $H^+$ ions (bare protons) don\'t exist in water. Instead, they bond to water molecules:

$$H^+(aq) + H_2O(l) \\rightarrow H_3O^+(aq)$$

The **hydronium ion** $H_3O^+$ is a more accurate representation. In AP Chemistry:

- $H^+(aq)$ and $H_3O^+(aq)$ are used interchangeably
- Both notations are acceptable on the AP exam
- $H_3O^+$ is technically more correct
- $H^+$ is a convenient shorthand

### Autoionization of Water

Pure water undergoes self-ionization:

$$2H_2O(l) \\rightleftharpoons H_3O^+(aq) + OH^-(aq)$$

The equilibrium constant for this process is:

$$K_w = [H^+][OH^-] = 1.0 \\times 10^{-14} \\text{ at 25°C}$$

In pure water: $[H^+] = [OH^-] = 1.0 \\times 10^{-7}$ M
      `
    },
    {
      id: 'ab1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Arrhenius Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to the Arrhenius definition, which substance is a base?',
            options: [
              '$HCl$ — produces $H^+$ in water',
              '$NaOH$ — produces $OH^-$ in water',
              '$NaCl$ — produces ions in water',
              '$NH_3$ — accepts protons'
            ],
            correctAnswer: 1,
            explanation: 'An Arrhenius base produces $OH^-$ ions in aqueous solution. $NaOH$ dissociates to give $Na^+$ and $OH^-$. $NH_3$ does act as a base, but this is explained by the Brønsted-Lowry definition, not Arrhenius.'
          },
          {
            question: 'The Arrhenius model is limited because it:',
            options: [
              'Cannot explain neutralization reactions',
              'Only applies to aqueous solutions',
              'Does not recognize strong acids',
              'Cannot predict pH values'
            ],
            correctAnswer: 1,
            explanation: 'The Arrhenius definition requires water as the solvent. It cannot explain acid-base behavior in non-aqueous solvents or why substances like $NH_3$ act as bases without containing $OH^-$.'
          },
          {
            question: 'In pure water at 25°C, $[H^+]$ equals:',
            options: [
              '$1.0 \\times 10^{-14}$ M',
              '$1.0 \\times 10^{-7}$ M',
              '$1.0$ M',
              '$7.0$ M'
            ],
            correctAnswer: 1,
            explanation: '$K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}$. In pure water, $[H^+] = [OH^-]$, so $[H^+]^2 = 1.0 \\times 10^{-14}$, giving $[H^+] = 1.0 \\times 10^{-7}$ M.'
          }
        ]
      }
    },
    {
      id: 'ab1-neutralization',
      type: 'text' as const,
      content: `
## Arrhenius Neutralization

When an Arrhenius acid reacts with an Arrhenius base, they undergo **neutralization**:

$$\\text{Acid} + \\text{Base} \\rightarrow \\text{Salt} + \\text{Water}$$

### Examples

$$HCl(aq) + NaOH(aq) \\rightarrow NaCl(aq) + H_2O(l)$$

**Net ionic equation:**

$$H^+(aq) + OH^-(aq) \\rightarrow H_2O(l)$$

This net ionic equation is the **same for all strong acid–strong base neutralizations**!

### Double Replacement Pattern

$$H_2SO_4(aq) + 2KOH(aq) \\rightarrow K_2SO_4(aq) + 2H_2O(l)$$

Note: sulfuric acid is **diprotic** — it has 2 acidic protons, so it requires 2 moles of $KOH$.
      `
    },
    {
      id: 'ab1-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Arrhenius Classification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$HNO_3$ is classified as an Arrhenius',
            options: ['acid', 'base', 'salt', 'neutral substance']
          },
          {
            label: '$Ba(OH)_2$ produces this many $OH^-$ ions per formula unit',
            options: ['1', '2', '3', '0']
          },
          {
            label: 'The net ionic equation for all strong acid–strong base neutralizations is',
            options: ['$HCl + NaOH \\rightarrow NaCl + H_2O$', '$H^+ + OH^- \\rightarrow H_2O$', '$Na^+ + Cl^- \\rightarrow NaCl$', '$H_2O \\rightarrow H^+ + OH^-$']
          },
          {
            label: '$K_w$ at 25°C equals',
            options: ['$1.0 \\times 10^{-7}$', '$1.0 \\times 10^{-14}$', '$7.0$', '$14.0$']
          }
        ],
        correctAnswers: ['acid', '2', '$H^+ + OH^- \\rightarrow H_2O$', '$1.0 \\times 10^{-14}$'],
        hint1: '$HNO_3$ produces $H^+$ in water.',
        hint2: '$Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$.',
        hint3: 'Remove spectator ions from any strong acid–strong base reaction.',
        explanation: '$HNO_3$ is an acid (produces $H^+$). $Ba(OH)_2$ gives 2 $OH^-$ ions. The net ionic equation is always $H^+ + OH^- \\rightarrow H_2O$. $K_w = 1.0 \\times 10^{-14}$ at 25°C.'
      }
    },
    {
      id: 'ab1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Arrhenius Acids & Bases** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following is NOT one of the six strong acids?',
            options: [
              '$HCl$',
              '$HF$',
              '$HBr$',
              '$HClO_4$'
            ],
            correctAnswer: 1,
            explanation: '$HF$ (hydrofluoric acid) is a **weak** acid. The six strong acids are: $HCl$, $HBr$, $HI$, $HNO_3$, $H_2SO_4$, and $HClO_4$.'
          },
          {
            question: 'How many moles of $H_2O$ are produced when 1 mol $H_2SO_4$ reacts completely with $NaOH$?',
            options: [
              '1 mol',
              '2 mol',
              '3 mol',
              '0.5 mol'
            ],
            correctAnswer: 1,
            explanation: '$H_2SO_4 + 2NaOH \\rightarrow Na_2SO_4 + 2H_2O$. Since $H_2SO_4$ is diprotic, it produces 2 mol $H_2O$ per mol of acid.'
          }
        ]
      }
    }
  ]
}
