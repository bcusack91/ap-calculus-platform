export const chemActivationEnergyArrheniusPart6Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae6-intro',
      type: 'text' as const,
      content: `# 🧬 Catalysts

**Part 6 of 7 — Lowering the Energy Barrier**

---

### Catalyst Effects on the Energy Diagram

| Feature | Without Catalyst | With Catalyst |
|---------|-----------------|---------------|
| $E_a$ | Higher | **Lower** (new pathway) |
| $\\Delta H$ | Unchanged | **Unchanged** |
| $K$ (equilibrium constant) | Value X | **Still X** (unchanged!) |
| Rate | Slower | **Faster** (both directions equally) |

> 🔑 **Why this matters:** The AP exam frequently tests what catalysts do and do NOT change — especially the distinction between kinetics (rate) and thermodynamics (equilibrium).

---

### What You'll Master in Part 6
- Explaining how catalysts lower $E_a$ by providing an alternative reaction pathway
- Distinguishing homogeneous, heterogeneous, and biological (enzyme) catalysts
- Understanding that catalysts speed up both forward and reverse reactions equally`
    },
    {
      id: 'ae6-how-catalysts-work',
      type: 'text' as const,
      content: `
## 🔧 How Catalysts Work

A catalyst provides an **alternative reaction pathway** with a **lower activation energy**:

$$\\boxed{E_a(\\text{catalyzed}) < E_a(\\text{uncatalyzed})}$$

> 🔑 **Key Principle:** A catalyst lowers $E_a$ but does NOT change $\\Delta H$ or $\\Delta G$.


---

### On an Energy Diagram

The catalyzed pathway shows a **lower peak** (transition state) while the reactants and products remain at the same energy levels:

- **$\\Delta H$ is unchanged** — the catalyst does not affect thermodynamics
- **$E_a$ is reduced** — more molecules have sufficient energy to react
- **$k$ increases** — from the Arrhenius equation: lower $E_a$ → larger $e^{-E_a/(RT)}$ → larger $k$


---

### What Catalysts Do NOT Do

| ❌ Catalysts do NOT... | ✅ Catalysts DO... |
|----------------------|-------------------|
| Change $\\Delta H$ or $\\Delta G$ | Lower $E_a$ |
| Shift equilibrium | Speed up both forward and reverse equally |
| Get consumed (overall) | Participate in mechanism, then regenerate |
| Change the position of equilibrium | Help reach equilibrium faster |
      `
    },
    {
      id: 'ae6-types-of-catalysts',
      type: 'text' as const,
      content: `
## 📂 Types of Catalysts

### 1. Homogeneous Catalysts

**Same phase** as the reactants (typically all in solution).

| Feature | Detail |
|---------|--------|
| Phase | Same as reactants |
| Example | $H^{+}$ catalyzing ester hydrolysis |
| Advantage | Better mixing, uniform activity |
| Disadvantage | Hard to separate from products |


---

### 2. Heterogeneous Catalysts

**Different phase** from reactants (typically a solid catalyst with gas or liquid reactants).

| Feature | Detail |
|---------|--------|
| Phase | Different from reactants |
| Example | Pt surface in catalytic converters |
| Mechanism | Adsorption → reaction → desorption |
| Advantage | Easy to separate, reusable |
| Disadvantage | Can be poisoned (blocked) |


---

### 3. Biological Catalysts (Enzymes)

**Proteins** that catalyze specific biochemical reactions.

| Feature | Detail |
|---------|--------|
| Specificity | Very high — lock-and-key or induced fit |
| Conditions | Mild (body temperature, neutral pH) |
| Rate increase | $10^6$ to $10^{12}$ times faster |
| Sensitivity | Can be denatured by heat, pH extremes |
      `
    },
    {
      id: 'ae6-catalyst-quiz',
      type: 'multiple-choice' as const,
      content: `
**Catalyst Concepts Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A catalyst speeds up a reaction by:',
            options: [
              'Making ΔH more negative so more energy is released',
              'Lowering Ea by providing an alternative pathway',
              'Raising the average kinetic energy of the molecules',
              'Shifting the equilibrium position toward the products'
            ],
            correctAnswer: 1,
            explanation: 'Catalysts provide an alternative mechanism with lower Ea. They do not change ΔH, temperature (the average kinetic energy), or equilibrium position.'
          },
          {
            question: 'A catalyst lowers Ea from 100 kJ/mol to 60 kJ/mol at a constant 300 K. Which statement best describes the effect on the rate constant?',
            options: [
              'k is unchanged, because the temperature did not change',
              'k increases by a factor of exactly 100/60',
              'k rises, as far more collisions clear Ea',
              'k decreases, because the new pathway has more steps'
            ],
            correctAnswer: 2,
            explanation: 'Lowering the barrier means a much larger fraction of collisions at the same temperature can reach the transition state, so k rises sharply. The increase is not a simple ratio of the two Ea values, temperature alone does not set k when the pathway changes, and a catalyzed pathway is faster even when it has more steps.'
          },
          {
            question: 'Which statement about enzymes is correct?',
            options: [
              'Enzymes can catalyze almost any reaction they contact',
              'Enzymes are used up as the reaction proceeds to completion',
              'Enzymes are highly specific biological catalysts',
              'Enzymes shift the equilibrium position toward products'
            ],
            correctAnswer: 2,
            explanation: 'Enzymes are biological catalysts with high specificity — each enzyme typically catalyzes one specific reaction or class of reactions. Like all catalysts, they are regenerated and do not shift equilibrium.'
          }
        ]
      }
    },
    {
      id: 'ae6-heterogeneous-mechanism',
      type: 'text' as const,
      content: `
## 📋 Heterogeneous Catalysis: The Four Steps

When a gaseous reactant reacts on a solid catalyst surface:


---

### Step 1: Adsorption
Reactant molecules bind to the catalyst surface at **active sites**. Bonds in the reactant may be weakened.


---

### Step 2: Migration / Diffusion
Adsorbed molecules move along the surface to find each other.


---

### Step 3: Reaction
The weakened bonds allow the reaction to proceed with lower $E_a$. New bonds form.


---

### Step 4: Desorption
Product molecules detach from the surface, freeing active sites for new reactant molecules.


---

### ⚠️ Catalyst Poisoning

If a substance binds strongly to active sites and cannot be removed, the catalyst is **poisoned**:
- Lead poisons Pt catalytic converters (why leaded gas is banned)
- CO poisons iron catalysts in the Haber process
- Heavy metals poison enzymes
      `
    },
    {
      id: 'ae6-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Catalyst Types and Properties** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A solid platinum surface catalyzing a gas-phase reaction is a',
            options: ['homogeneous catalyst', 'heterogeneous catalyst', 'enzyme', 'inhibitor']
          },
          {
            label: '$H^{+}$ ions catalyzing a reaction in aqueous solution is',
            options: ['homogeneous catalysis', 'heterogeneous catalysis', 'enzyme catalysis', 'autocatalysis']
          },
          {
            label: 'A catalyst appears in the mechanism but NOT in the overall equation because it is',
            options: ['destroyed', 'regenerated', 'an intermediate', 'a product']
          },
          {
            label: 'Adding a catalyst to a reaction at equilibrium will',
            options: ['shift equilibrium right', 'shift equilibrium left', 'not shift equilibrium', 'change ΔH']
          }
        ],
        correctAnswers: ['heterogeneous catalyst', 'homogeneous catalysis', 'regenerated', 'not shift equilibrium'],
        hint1: 'Solid + gas = different phases = heterogeneous.',
        hint2: '$H^{+}$ in solution + reactants in solution = same phase = homogeneous.',
        hint3: 'Catalysts are consumed then regenerated — net effect is zero change.',
        explanation: 'Pt solid with gas = heterogeneous. $H^{+}$ in solution = homogeneous. Catalysts are regenerated (cancel out). Catalysts speed up both directions equally, so no equilibrium shift.'
      }
    },
    {
      id: 'ae6-effects-drill',
      type: 'input-boxes' as const,
      content: `
**Catalyst Effects** 🧮

A catalyst is added to a reaction at constant temperature. For each quantity, type **increases**, **decreases**, or **unchanged**.

**1)** The rate constant $k$ of the forward reaction

**2)** The enthalpy change $\\Delta H$ of the reaction

**3)** The equilibrium constant $K$
      `,
      exercise: {
        questions: [{ question: '(1)', answer: 'increases', acceptableAnswers: ['increases', 'increase'] }, { question: '(2)', answer: 'unchanged', acceptableAnswers: ['unchanged', 'no change', 'same'] }, { question: '(3)', answer: 'unchanged', acceptableAnswers: ['unchanged', 'no change', 'same'] }],
        hint1: 'The new pathway has a lower activation energy.',
        hint2: 'Do the starting and ending energy levels move?',
        hint3: 'A catalyst speeds the forward and reverse reactions equally.',
        explanation: '1) Increases: a lower Ea lets a larger fraction of collisions react. 2) Unchanged: reactants and products are at the same energies, so ΔH is the same. 3) Unchanged: the forward and reverse rates both increase, so equilibrium is reached faster but its position does not change.'
      }
    },
    {
      id: 'ae6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Catalysts** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which is TRUE about a catalyzed reaction compared to the same uncatalyzed reaction?',
            options: [
              'The catalyzed reaction has a more negative ΔH',
              'The catalyzed reaction has a lower activation energy',
              'The catalyzed reaction yields more product',
              'The catalyzed reaction has a different net equation'
            ],
            correctAnswer: 1,
            explanation: 'A catalyst lowers Ea without changing ΔH, equilibrium position, or the overall balanced equation. It only changes the pathway (mechanism).'
          },
          {
            question: 'Catalyst poisoning occurs when:',
            options: [
              'The reaction reaches equilibrium',
              'A substance blocks active sites on the catalyst surface',
              'The catalyst is used up as it converts reactants',
              'The products build up and push the reaction in reverse'
            ],
            correctAnswer: 1,
            explanation: 'Poisoning occurs when a substance (like lead or CO) binds irreversibly to catalyst active sites, blocking reactant molecules from adsorbing. A catalyst is not used up, and reaching equilibrium or product buildup does not deactivate it.'
          }
        ]
      }
    }
  ]
}
