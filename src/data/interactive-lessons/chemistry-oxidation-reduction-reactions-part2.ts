export const chemOxidationReductionReactionsPart2Data = {
  topicSlug: 'oxidation-reduction-reactions',
  sections: [
    {
      id: 'or2-intro',
      type: 'text' as const,
      content: `
# ⚡ Identifying Redox Reactions

**Part 2 of 7 — OIL RIG and Oxidizing/Reducing Agents**

Now that you can assign oxidation states, it\'s time to use them to **identify** redox reactions and determine which species is oxidized, which is reduced, and who the oxidizing and reducing agents are.
      `
    },
    {
      id: 'or2-oil-rig',
      type: 'text' as const,
      content: `
## 📌 OIL RIG — The Key Mnemonic

$$\\text{OIL RIG}$$

| | Meaning | Electrons | Oxidation State |
|-|---------|-----------|-----------------|
| **O**xidation | **I**s | **L**oss (of electrons) | Increases (more positive) |
| **R**eduction | **I**s | **G**ain (of electrons) | Decreases (more negative) |


---

### How to Spot a Redox Reaction

1. Assign oxidation states to **every atom** in reactants and products
2. If any oxidation state **changes**, it\'s a redox reaction
3. If NO oxidation states change, it\'s NOT redox (e.g., double replacement)


---

### Example

$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$

| Atom | Reactant | Product | Change | Process |
|------|----------|---------|--------|---------|
| Zn | 0 | +2 | ↑ +2 | **Oxidized** (lost 2e⁻) |
| Cu | +2 | 0 | ↓ −2 | **Reduced** (gained 2e⁻) |
      `
    },
    {
      id: 'or2-agents',
      type: 'text' as const,
      content: `
## ⚡ Oxidizing and Reducing Agents

### Definitions

| Agent | What It Does | What Happens to It |
|-------|-------------|-------------------|
| **Oxidizing agent** | Causes oxidation in another species | Gets **reduced** itself |
| **Reducing agent** | Causes reduction in another species | Gets **oxidized** itself |


---

### The Tricky Part

The names seem backwards! Remember:
- The **oxidizing agent** is the one that **takes** electrons (gets reduced)
- The **reducing agent** is the one that **gives** electrons (gets oxidized)


---

### Example (continued)

$$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightarrow \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$$

- **Zn** is the **reducing agent** — it gives up electrons (gets oxidized: 0 → +2)
- **Cu²⁺** is the **oxidizing agent** — it takes electrons (gets reduced: +2 → 0)


---

### Common Oxidizing Agents

| Agent | Why |
|-------|-----|
| KMnO₄ (Mn = +7) | Mn is easily reduced |
| K₂Cr₂O₇ (Cr = +6) | Cr is easily reduced |
| HNO₃ (concentrated) | NO₃⁻ is a strong oxidizer |
| O₂ | Oxygen readily gains electrons |
| Halogens (F₂, Cl₂) | Very electronegative |


---

### Common Reducing Agents

| Agent | Why |
|-------|-----|
| Active metals (Na, Mg, Zn) | Easily lose electrons |
| H₂ | Can donate electrons |
| C (carbon/coke) | Commonly reduces metal ores |
      `
    },
    {
      id: 'or2-non-redox',
      type: 'text' as const,
      content: `
## ⚗️ Redox vs. Non-Redox Reactions

### Not All Reactions Are Redox!

| Reaction Type | Redox? | Why |
|--------------|--------|-----|
| Combustion | ✅ Yes | Carbon/hydrogen oxidized, oxygen reduced |
| Synthesis (metal + nonmetal) | ✅ Yes | Metal loses e⁻, nonmetal gains e⁻ |
| Single replacement | ✅ Yes | One element displaces another |
| Double replacement | ❌ No | Ions just swap partners — no electron transfer |
| Acid-base (neutralization) | ❌ No | Proton transfer, not electron transfer |
| Precipitation | ❌ No | Ions combine to form solid — no e⁻ transfer |


---

### Quick Test

If **elements appear as reactants or products** (in their free state, oxidation state = 0), the reaction is almost certainly redox.
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
            question: 'In the reaction 2Na(s) + Cl₂(g) → 2NaCl(s), which species is oxidized?',
            options: [
              'Cl₂',
              'Na',
              'NaCl',
              'Cl⁻'
            ],
            correctAnswer: 1,
            explanation: 'Na goes from 0 to +1 — its oxidation state increases, meaning it lost an electron. Oxidation Is Loss (OIL). Na is oxidized.'
          },
          {
            question: 'In the same reaction, Na is acting as the:',
            options: [
              'Oxidizing agent',
              'Reducing agent',
              'Catalyst',
              'Spectator'
            ],
            correctAnswer: 1,
            explanation: 'Na is oxidized (loses electrons), which means it CAUSES Cl₂ to be reduced. The species that gets oxidized is the reducing agent.'
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
            explanation: 'NaCl + AgNO₃ → AgCl + NaNO₃ is a double-replacement (precipitation) reaction. No oxidation states change: Na stays +1, Cl stays −1, Ag stays +1, N stays +5, O stays −2. It is NOT redox.'
          },
          {
            question: 'In the reaction Fe₂O₃ + 3CO → 2Fe + 3CO₂, the oxidizing agent is:',
            options: [
              'Fe₂O₃',
              'CO',
              'Fe',
              'CO₂'
            ],
            correctAnswer: 0,
            explanation: 'Fe in Fe₂O₃ goes from +3 → 0 (reduced). C in CO goes from +2 → +4 (oxidized). Fe₂O₃ gets reduced, so it is the oxidizing agent (it causes CO to be oxidized).'
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
            label: 'The oxidizing agent in a reaction is the species that',
            options: ['loses electrons', 'gains electrons', 'is unchanged', 'acts as a catalyst']
          },
          {
            label: 'Double replacement reactions are typically',
            options: ['redox reactions', 'not redox reactions', 'always redox', 'combustion reactions']
          },
          {
            label: 'In combustion, the fuel is the',
            options: ['oxidizing agent', 'reducing agent', 'catalyst', 'spectator']
          }
        ],
        correctAnswers: ['increase', 'gains electrons', 'not redox reactions', 'reducing agent'],
        hint1: 'OIL — Oxidation Is Loss of electrons, oxidation state goes up.',
        hint2: 'The oxidizing agent takes electrons from the other species.',
        hint3: 'In double replacement, ions swap — no electrons transfer.',
        explanation: 'Oxidation = increase in oxidation state. The oxidizing agent gains electrons (gets reduced itself). Double replacement involves ion swapping, not electron transfer. The fuel in combustion is oxidized (gives up electrons) → reducing agent.'
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
            question: 'In the reaction 2H₂(g) + O₂(g) → 2H₂O(l), the reducing agent is:',
            options: [
              'O₂',
              'H₂',
              'H₂O',
              'There is no reducing agent'
            ],
            correctAnswer: 1,
            explanation: 'H goes from 0 to +1 (oxidized — loses electrons). O goes from 0 to −2 (reduced — gains electrons). H₂ is oxidized, so it is the reducing agent. O₂ is the oxidizing agent.'
          },
          {
            question: 'Which observation would suggest a redox reaction is occurring?',
            options: [
              'A precipitate forms when two clear solutions are mixed',
              'A shiny metal dissolves in acid while gas bubbles appear',
              'An indicator changes color',
              'Two solutions are mixed with no visible change'
            ],
            correctAnswer: 1,
            explanation: 'A metal dissolving in acid with gas evolution (H₂) is classic redox: the metal is oxidized (0 → positive) and H⁺ is reduced (H⁺ → H₂, oxidation state +1 → 0).'
          }
        ]
      }
    }
  ]
}
