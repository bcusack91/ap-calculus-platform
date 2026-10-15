export const chemOxidationReductionReactionsPart2Data = {
  topicSlug: 'oxidation-reduction-reactions',
  sections: [
    {
      id: 'or2-intro',
      type: 'text' as const,
      content: `# ⚡ Identifying Redox Reactions

**Part 2 of 7 — OIL RIG and Following the Electrons**

---

### Topics in This Part

| Section |
|---------|
| 📌 OIL RIG — The Key Mnemonic |
| How to Spot a Redox Reaction |
| Example |
| ⚡ Following the Electrons |
| ⚗️ Redox vs. Non-Redox Reactions |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'or2-oil-rig',
      type: 'text' as const,
      content: `
## 📌 OIL RIG — The Key Mnemonic

> 🔑 **Key Concept:** OIL RIG — **O**xidation **I**s **L**oss, **R**eduction **I**s **G**ain of electrons.

$$\\boxed{\\text{OIL RIG}}$$

| | Meaning | Electrons | Oxidation State |
|-|---------|-----------|-----------------|
| **O**xidation | **I**s | **L**oss (of electrons) | Increases (more positive) |
| **R**eduction | **I**s | **G**ain (of electrons) | Decreases (more negative) |


---

### How to Spot a Redox Reaction

1. Assign oxidation states to **every atom** in reactants and products
2. If any oxidation state **changes**, it\'s a redox reaction
3. If NO oxidation states change, it\'s NOT redox (e.g., a precipitation or acid–base reaction)


---

### Example

$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$

| Atom | Reactant | Product | Change | Process |
|------|----------|---------|--------|---------|
| Zn | 0 | +2 | ↑ +2 | **Oxidized** $(lost 2e^{-})$ |
| Cu | +2 | 0 | ↓ −2 | **Reduced** $(gained 2e^{-})$ |
      `
    },
    {
      id: 'or2-electron-flow',
      type: 'text' as const,
      content: `
## ⚡ Following the Electrons

In every redox reaction, electrons are transferred **from the species that is oxidized to the species that is reduced** (CED 4.7.A.3). Describe each species by what happens to it.

| Species | Electrons | Oxidation number |
|---------|-----------|------------------|
| **Oxidized** | Loses them (gives them away) | Increases |
| **Reduced** | Gains them (receives them) | Decreases |


---

### Electrons Lost = Electrons Gained

Electrons are not created or destroyed, so the total lost by the oxidized species must equal the total gained by the reduced species.

$$2\\text{Al}(s) + 3\\text{Cu}^{2+}(aq) \\rightarrow 2\\text{Al}^{3+}(aq) + 3\\text{Cu}(s)$$

- Each Al loses 3 electrons → 2 Al lose **6**
- Each $\\text{Cu}^{2+}$ gains 2 electrons → 3 $\\text{Cu}^{2+}$ gain **6**

The coefficients 2 and 3 are exactly what makes the electron count match.


---

### Naming the Species Correctly

When the element that changes is inside a compound or polyatomic ion, name the **whole species** that contains it.

$$\\text{Fe}_2\\text{O}_3(s) + 3\\text{CO}(g) \\rightarrow 2\\text{Fe}(s) + 3\\text{CO}_2(g)$$

| Element | Change | Species |
|---------|--------|---------|
| Fe | +3 → 0 | $\\text{Fe}_2\\text{O}_3$ is reduced |
| C | +2 → +4 | CO is oxidized |
| O | −2 → −2 | no change |

> 💡 **Tip:** In free-response answers, write "the species that is oxidized" and "the species that is reduced," and support each claim with the oxidation numbers before and after.
      `
    },
    {
      id: 'or2-non-redox',
      type: 'text' as const,
      content: `
## ⚗️ Redox vs. Non-Redox Reactions

### Not All Reactions Are Redox!

The AP exam classifies reactions as acid–base, redox, or precipitation (CED 4.7.A). Only one of the three involves electron transfer.

| Reaction | Redox? | Why |
|----------|--------|-----|
| Combustion (a redox subclass) | ✅ Yes | Carbon/hydrogen oxidized, oxygen reduced |
| Metal + nonmetal element | ✅ Yes | Metal loses $e^{-}$, nonmetal gains $e^{-}$ |
| Metal + another metal's ions | ✅ Yes | One metal is oxidized, the other metal ion is reduced |
| Acid–base (neutralization) | ❌ No | Proton transfer, not electron transfer |
| Precipitation | ❌ No | Ions combine to form solid — no $e^{-}$ transfer |


---

### Quick Test

> 💡 **Tip:** If **elements appear as reactants or products** (in their free state, oxidation state = 0), the reaction is almost certainly redox.
      `
    },
    {
      id: 'or2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Identifying Redox Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction 2Na(s) + $Cl_{2}(g)$ → 2NaCl(s), which species is oxidized?',
            options: [
              '$Cl_{2}$',
              'Na',
              'NaCl',
              '$Cl^{-}$'
            ],
            correctAnswer: 1,
            explanation: 'Na goes from 0 to +1 — its oxidation state increases, meaning it lost an electron. Oxidation Is Loss (OIL). Na is oxidized.'
          },
          {
            question: 'In the same reaction, how many electrons are transferred in total as written?',
            options: [
              '1',
              '2',
              '4',
              '0'
            ],
            correctAnswer: 1,
            explanation: 'Each Na loses 1 electron and there are 2 Na, so 2 electrons are lost; each of the 2 Cl atoms in $Cl_{2}$ gains 1, so 2 are gained. One electron is the per-atom change, and 4 double-counts by adding lost and gained.'
          },
          {
            question: 'Which of these reactions is NOT a redox reaction?',
            options: [
              '$\\text{2Mg}(s) + \\text{O}_2(g) \\rightarrow 2\\text{MgO}(s)$',
              '$\\text{Zn}(s) + \\text{CuSO}_4(aq) \\rightarrow \\text{ZnSO}_4(aq) + \\text{Cu}(s)$',
              '$\\text{NaCl}(aq) + \\text{AgNO}_3(aq) \\rightarrow \\text{AgCl}(s) + \\text{NaNO}_3(aq)$',
              '$\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g)$'
            ],
            correctAnswer: 2,
            explanation: 'NaCl + $AgNO_{3}$ → AgCl + $NaNO_{3}$ is a precipitation reaction. No oxidation states change: Na stays +1, Cl stays −1, Ag stays +1, N stays +5, O stays −2. It is NOT redox.'
          },
          {
            question: 'In the reaction $Fe_{2}O_{3}$ + 3CO → 2Fe + $3CO_{2}$, which reactant species is reduced?',
            options: [
              '$Fe_{2}O_{3}$',
              'CO',
              'Fe',
              '$CO_{2}$'
            ],
            correctAnswer: 0,
            explanation: 'Fe in $Fe_{2}O_{3}$ goes from +3 → 0, so $Fe_{2}O_{3}$ is the species reduced. C in CO goes from +2 → +4, so CO is oxidized. Fe and $CO_{2}$ are products, not reactant species.'
          }
        ]
      }
    },
    {
      id: 'or2-identify-drill',
      type: 'input-boxes' as const,
      content: `
**Identify the Redox Components** 🧮

For the reaction: $\\text{2Al}(s) + 3\\text{Cl}_2(g) \\rightarrow 2\\text{AlCl}_3(s)$

**1)** What element is oxidized? (type the element symbol)

**2)** What element is reduced? (type the element symbol)

**3)** How many electrons are transferred per Al atom?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Al', 'Cl', '3'],
        hint1: 'Al goes from 0 to +3. Did its oxidation state increase or decrease?',
        hint2: 'Cl goes from 0 to −1. Did its oxidation state increase or decrease?',
        hint3: 'Al goes from 0 to +3 — how many units did it change?',
        explanation: '1) Al is oxidized (0 → +3, lost 3 electrons). 2) Cl is reduced (0 → −1, gained 1 electron). 3) Al loses 3 electrons per atom (oxidation state changes by 3).'
      }
    },
    {
      id: 'or2-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Redox Terminology** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A species that is oxidized has its oxidation state',
            options: ['decrease', 'increase', 'stay the same', 'become zero']
          },
          {
            label: 'The species that is reduced in a reaction is the one that',
            options: ['loses electrons', 'gains electrons', 'is unchanged', 'acts as a catalyst']
          },
          {
            label: 'Precipitation reactions are',
            options: ['redox reactions', 'not redox reactions', 'combustion reactions', 'electron-transfer reactions']
          },
          {
            label: 'In combustion, the fuel is the species that is',
            options: ['oxidized', 'reduced', 'a catalyst', 'a spectator']
          }
        ],
        correctAnswers: ['increase', 'gains electrons', 'not redox reactions', 'oxidized'],
        hint1: 'OIL — Oxidation Is Loss of electrons, oxidation state goes up.',
        hint2: 'RIG — Reduction Is Gain.',
        hint3: 'In precipitation, ions combine — no electrons transfer.',
        explanation: 'Oxidation = increase in oxidation state. The species reduced gains electrons. Precipitation involves ions combining into a solid, not electron transfer. The fuel in combustion is oxidized (its carbon gives up electrons to oxygen).'
      }
    },
    {
      id: 'or2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Identifying Redox** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $2H_{2}(g)$ + $O_{2}(g)$ → $2H_{2}O(l)$, which reactant is oxidized?',
            options: [
              '$O_{2}$',
              '$H_{2}$',
              '$H_{2}O$',
              'Neither; no electrons transfer'
            ],
            correctAnswer: 1,
            explanation: 'H goes from 0 to +1 (oxidized — loses electrons). O goes from 0 to −2 (reduced — gains electrons). Electrons flow from $H_{2}$ to $O_{2}$; water is the product, not a reactant.'
          },
          {
            question: 'Which observation would suggest a redox reaction is occurring?',
            options: [
              'A precipitate forms when two clear solutions are mixed',
              'A shiny metal dissolves in acid while gas bubbles appear',
              'An acid-base indicator changes color as base is added',
              'Mixing an acid with a base warms the solution'
            ],
            correctAnswer: 1,
            explanation: 'A metal dissolving in acid with gas evolution $(H_{2})$ is classic redox: the metal is oxidized (0 → positive) and $H^{+}$ is reduced ($H^{+}$ → $H_{2}$, oxidation state +1 → 0). A precipitate, an indicator color change and the warmth of neutralization all come from reactions in which no oxidation state changes.'
          }
        ]
      }
    }
  ]
}
