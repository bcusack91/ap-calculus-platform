export const chemAcidBaseTheoriesPhPart1Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab1-intro',
      type: 'text' as const,
      content: `# 🧪 Acids and Bases in Water

**Part 1 of 7 — Acid-Base Definitions**

---

### The Model the AP Exam Uses

| Model | Acid Is... | Base Is... | Used On the AP Exam? |
|-------|-----------|-----------|-----------|
| **Brønsted-Lowry** | Proton ($H^+$) donor | Proton ($H^+$) acceptor | ✅ Yes (CED 4.8) |
| Arrhenius (older) | Produces $H^+$ in water | Produces $OH^-$ in water | Background only |

> 🔑 **Why this matters:** Every AP acid-base question is about a proton moving from one species to another in aqueous solution. This part sets up that proton-transfer view; Part 2 adds conjugate pairs, and Part 3 connects acid strength to molecular structure.

---

### What You'll Master in Part 1
- Identifying the proton donor and proton acceptor in an aqueous reaction
- Recognizing the strong acids and strong bases and what "strong" means
- Using hydronium, $K_w$ and the strong acid–strong base net ionic equation`
    },
    {
      id: 'ab1-arrhenius-definition',
      type: 'text' as const,
      content: `
## 📖 Acids Donate Protons, Bases Accept Them

In the **Brønsted-Lowry** model, an acid-base reaction is a **proton transfer**:

| Type | Definition | Example in Water |
|------|-----------|---------|
| **Acid** | Donates $H^+$ | $HCl(aq) + H_2O(l) \\rightarrow H_3O^+(aq) + Cl^-(aq)$ |
| **Base** | Accepts $H^+$ | $NH_3(aq) + H_2O(l) \\rightleftharpoons NH_4^+(aq) + OH^-(aq)$ |


---

### Key Features

- An acid in water transfers a proton to $H_2O$, raising $[H_3O^+]$
- A base in water takes a proton from $H_2O$ (or supplies $OH^-$ directly, as $NaOH$ does), raising $[OH^-]$
- Water can play either role: it accepts a proton from $HCl$ but donates one to $NH_3$

> 🔑 **Key idea:** Identify the acid and base by following the proton: the species that loses $H^+$ is the acid, and the species that gains it is the base.

---

### Why Not the Older Arrhenius Model?

The older Arrhenius model called a base anything that **produces $OH^-$**. It cannot explain why $NH_3$, which contains no $OH^-$, is a base. In the proton-transfer view the answer is simple: $NH_3$ accepts a proton from water, and the $OH^-$ that remains makes the solution basic.

> ⚠️ Use the Brønsted-Lowry (proton-transfer) language on the AP exam.
      `
    },
    {
      id: 'ab1-common-acids',
      type: 'text' as const,
      content: `
## 🧪 Strong Acids and Strong Bases

### Strong Acids (Complete Proton Transfer to Water)

| Formula | Name | Dissociation |
|---------|------|-------------|
| $HCl$ | Hydrochloric acid | $HCl \\rightarrow H^+ + Cl^-$ |
| $HNO_3$ | Nitric acid | $HNO_3 \\rightarrow H^+ + NO_3^-$ |
| $H_2SO_4$ | Sulfuric acid | $H_2SO_4 \\rightarrow H^+ + HSO_4^-$ (first step only) |
| $HBr$ | Hydrobromic acid | $HBr \\rightarrow H^+ + Br^-$ |
| $HI$ | Hydroiodic acid | $HI \\rightarrow H^+ + I^-$ |
| $HClO_4$ | Perchloric acid | $HClO_4 \\rightarrow H^+ + ClO_4^-$ |


---

### Common Strong Bases

| Formula | Name | Dissociation |
|---------|------|-------------|
| $NaOH$ | Sodium hydroxide | $NaOH \\rightarrow Na^+ + OH^-$ |
| $KOH$ | Potassium hydroxide | $KOH \\rightarrow K^+ + OH^-$ |
| $Ca(OH)_2$ | Calcium hydroxide | $Ca(OH)_2 \\rightarrow Ca^{2+} + 2OH^-$ |
| $Ba(OH)_2$ | Barium hydroxide | $Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$ |

> ⚠️ Only the **first** ionization of $H_2SO_4$ is complete. The second step, $HSO_4^- \\rightleftharpoons H^+ + SO_4^{2-}$, is a weak-acid equilibrium.

> 💡 **Memorize the 6 strong acids and 4 strong bases** — everything else is weak!
      `
    },
    {
      id: 'ab1-hydronium',
      type: 'text' as const,
      content: `
## ⚛️ The Hydronium Ion

In reality, free $H^+$ ions (bare protons) don\'t exist in water. Instead, they bond to water molecules:

$$H^+(aq) + H_2O(l) \\rightarrow H_3O^+(aq)$$

The **hydronium ion** $H_3O^+$ is a more accurate representation. In AP Chemistry:

- $H^+(aq)$ and $H_3O^+(aq)$ are used interchangeably
- Both notations are acceptable on the AP exam
- $H_3O^+$ is technically more correct
- $H^+$ is a convenient shorthand


---

### Autoionization of Water

Pure water undergoes self-ionization:

$$2H_2O(l) \\rightleftharpoons H_3O^+(aq) + OH^-(aq)$$

The equilibrium constant for this process is:

$$\\boxed{K_w = [H^+][OH^-] = 1.0 \\times 10^{-14} \\text{ at 25°C}}$$

> 🔑 In pure water: $[H^+] = [OH^-] = 1.0 \\times 10^{-7}$ M
      `
    },
    {
      id: 'ab1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Acid-Base Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $NH_3(aq) + H_2O(l) \\rightleftharpoons NH_4^+(aq) + OH^-(aq)$, which species acts as the Brønsted-Lowry acid?',
            options: [
              '$NH_3$, because it gains a hydrogen',
              '$H_2O$, because it donates a proton',
              '$NH_4^+$, because it holds the proton',
              '$OH^-$, because it forms in solution'
            ],
            correctAnswer: 1,
            explanation: 'Follow the proton: $H_2O$ loses $H^+$ (becoming $OH^-$), so water is the acid, and $NH_3$ gains $H^+$ (becoming $NH_4^+$), so ammonia is the base. $NH_4^+$ and $OH^-$ are products, not the species that donated the proton in this reaction.'
          },
          {
            question: 'Ammonia, $NH_3$, contains no $OH^-$. Why is it classified as a base?',
            options: [
              'It releases its own $OH^-$ ions once it melts',
              'It accepts a proton from water, leaving $OH^-$',
              'It donates a proton to water, forming $H_3O^+$',
              'It is a gas, and all gases dissolve as bases'
            ],
            correctAnswer: 1,
            explanation: 'A Brønsted-Lowry base is a proton acceptor: $NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$, so the $OH^-$ comes from the water molecule that lost a proton. Ammonia contains no $OH^-$ to release, donating a proton would make it an acid, and being a gas says nothing about acid-base behavior.'
          },
          {
            question: 'In pure water at 25°C, $[H^+]$ equals:',
            options: [
              '$1.0 \\times 10^{-14}$ M',
              '$1.0 \\times 10^{-7}$ M',
              '$1.0 \\times 10^{7}$ M',
              '$7.0$ M'
            ],
            correctAnswer: 1,
            explanation: '$K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}$. In pure water, $[H^+] = [OH^-]$, so $[H^+]^2 = 1.0 \\times 10^{-14}$, giving $[H^+] = 1.0 \\times 10^{-7}$ M. $1.0 \\times 10^{-14}$ M is $K_w$ itself, $1.0 \\times 10^{7}$ M drops the negative sign on the exponent, and 7.0 M mistakes the pH value for a concentration.'
          }
        ]
      }
    },
    {
      id: 'ab1-neutralization',
      type: 'text' as const,
      content: `
## 📌 Strong Acid–Strong Base Neutralization

When a strong acid reacts with a strong base, they undergo **neutralization**:

$$\\text{Acid} + \\text{Base} \\rightarrow \\text{Salt} + \\text{Water}$$


---

### Examples

$$HCl(aq) + NaOH(aq) \\rightarrow NaCl(aq) + H_2O(l)$$

**Net ionic equation:**

$$\\boxed{H^+(aq) + OH^-(aq) \\rightarrow H_2O(l)}$$

> 🔑 This net ionic equation is the **same for all strong acid–strong base neutralizations**!


---

### Neutralization with a Diprotic Acid

$$H_2SO_4(aq) + 2KOH(aq) \\rightarrow K_2SO_4(aq) + 2H_2O(l)$$

> 💡 Sulfuric acid is **diprotic** — it has 2 acidic protons, so it requires 2 moles of $KOH$.
      `
    },
    {
      id: 'ab1-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Acid-Base Classification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In water, $HNO_3$ acts as a Brønsted-Lowry',
            options: ['acid', 'base', 'salt', 'neutral substance']
          },
          {
            label: '$Ba(OH)_2$ produces this many $OH^-$ ions per formula unit',
            options: ['1', '2', '3', '0']
          },
          {
            label: 'The net ionic equation for all strong acid–strong base neutralizations is',
            options: ['HCl + NaOH \→ NaCl + $H_{2}O$', '$H^{+}$ + $OH^{-}$ \→ $H_{2}O$', '$Na^{+}$ + $Cl^{-}$ \→ NaCl', '$H_{2}O$ \→ $H^{+}$ + $OH^{-}$']
          },
          {
            label: '$K_w$ at 25°C equals',
            options: ['1.0 \× $10^{-7}$', '1.0 \× $10^{-14}$', '7.0', '14.0']
          }
        ],
        correctAnswers: ['acid', '2', '$H^{+}$ + $OH^{-}$ \→ $H_{2}O$', '1.0 \× $10^{-14}$'],
        hint1: '$HNO_3$ donates a proton to water.',
        hint2: '$Ba(OH)_2 \\rightarrow Ba^{2+} + 2OH^-$.',
        hint3: 'Remove spectator ions from any strong acid–strong base reaction.',
        explanation: '$HNO_3$ is an acid (it donates a proton to water). $Ba(OH)_2$ gives 2 $OH^-$ ions. The net ionic equation is always $H^+ + OH^- \\rightarrow H_2O$. $K_w = 1.0 \\times 10^{-14}$ at 25°C.'
      }
    },
    {
      id: 'ab1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Acid-Base Definitions** ✅
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
