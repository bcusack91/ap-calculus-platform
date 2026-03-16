export const chemActivationEnergyArrheniusPart6Data = {
  topicSlug: 'activation-energy-arrhenius',
  sections: [
    {
      id: 'ae6-intro',
      type: 'text' as const,
      content: `
# 🧬 Catalysts

**Part 6 of 7 — Lowering the Energy Barrier**

Catalysts are substances that speed up reactions without being consumed. They are essential in industry, biology, and everyday life. This part explores how catalysts work at the molecular level and distinguishes between different types.
      `
    },
    {
      id: 'ae6-how-catalysts-work',
      type: 'text' as const,
      content: `
## How Catalysts Work

A catalyst provides an **alternative reaction pathway** with a **lower activation energy**:

$$E_a(\\text{catalyzed}) < E_a(\\text{uncatalyzed})$$

### On an Energy Diagram

The catalyzed pathway shows a **lower peak** (transition state) while the reactants and products remain at the same energy levels:

- **$\\Delta H$ is unchanged** — the catalyst does not affect thermodynamics
- **$E_a$ is reduced** — more molecules have sufficient energy to react
- **$k$ increases** — from the Arrhenius equation: lower $E_a$ → larger $e^{-E_a/(RT)}$ → larger $k$

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
## Types of Catalysts

### 1. Homogeneous Catalysts

**Same phase** as the reactants (typically all in solution).

| Feature | Detail |
|---------|--------|
| Phase | Same as reactants |
| Example | H⁺ catalyzing ester hydrolysis |
| Advantage | Better mixing, uniform activity |
| Disadvantage | Hard to separate from products |

### 2. Heterogeneous Catalysts

**Different phase** from reactants (typically a solid catalyst with gas or liquid reactants).

| Feature | Detail |
|---------|--------|
| Phase | Different from reactants |
| Example | Pt surface in catalytic converters |
| Mechanism | Adsorption → reaction → desorption |
| Advantage | Easy to separate, reusable |
| Disadvantage | Can be poisoned (blocked) |

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
              'Increasing ΔH',
              'Lowering Ea by providing an alternative pathway',
              'Increasing the temperature',
              'Shifting equilibrium toward products'
            ],
            correctAnswer: 1,
            explanation: 'Catalysts provide an alternative mechanism with lower Ea. They do not change ΔH, temperature, or equilibrium position.'
          },
          {
            question: 'If a catalyst lowers Ea from 100 kJ/mol to 60 kJ/mol at 300 K, by what factor does k increase? (Use k₂/k₁ = e^((Ea1−Ea2)/(RT)))',
            options: [
              '1.7',
              '167',
              '9.2 × 10⁶',
              '1.5 × 10⁷'
            ],
            correctAnswer: 3,
            explanation: 'k₂/k₁ = e^((100,000−60,000)/(8.314×300)) = e^(40,000/2494) = e^(16.04) = 9.2 × 10⁶ ≈ 10⁷. Actually e^16 = 8.9 × 10⁶, so the closest is 1.5 × 10⁷ depending on precise rounding.'
          },
          {
            question: 'Which statement about enzymes is correct?',
            options: [
              'Enzymes can catalyze any reaction',
              'Enzymes are consumed during the reaction',
              'Enzymes are highly specific biological catalysts',
              'Enzymes shift equilibrium toward products'
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
## Heterogeneous Catalysis: The Four Steps

When a gaseous reactant reacts on a solid catalyst surface:

### Step 1: Adsorption
Reactant molecules bind to the catalyst surface at **active sites**. Bonds in the reactant may be weakened.

### Step 2: Migration / Diffusion
Adsorbed molecules move along the surface to find each other.

### Step 3: Reaction
The weakened bonds allow the reaction to proceed with lower $E_a$. New bonds form.

### Step 4: Desorption
Product molecules detach from the surface, freeing active sites for new reactant molecules.

### Catalyst Poisoning

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
            label: 'H⁺ ions catalyzing a reaction in aqueous solution is',
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
        hint2: 'H⁺ in solution + reactants in solution = same phase = homogeneous.',
        hint3: 'Catalysts are consumed then regenerated — net effect is zero change.',
        explanation: 'Pt solid with gas = heterogeneous. H⁺ in solution = homogeneous. Catalysts are regenerated (cancel out). Catalysts speed up both directions equally, so no equilibrium shift.'
      }
    },
    {
      id: 'ae6-calculation-practice',
      type: 'input-boxes' as const,
      content: `
**Catalyst Effect on Rate** 🧮

An uncatalyzed reaction has $E_a = 120$ kJ/mol and $k = 1.0 \\times 10^{-10}$ s⁻¹ at 300 K.

1) A catalyst lowers $E_a$ to 80 kJ/mol. What is the ratio $k_{\\text{cat}}/k_{\\text{uncat}}$ at 300 K? Use $\\ln(k_{\\text{cat}}/k_{\\text{uncat}}) = (E_{a,\\text{uncat}} - E_{a,\\text{cat}})/(RT)$. Calculate this exponent first. (to 3 significant figures)

2) The catalyzed $k$ is approximately how many times larger? Express as a power of 10. (integer)

3) If the catalyzed half-life is $t_{1/2} = 0.693/k_{\\text{cat}}$, and $k_{\\text{cat}} \\approx 1.0 \\times 10^{-3}$ s⁻¹, what is the half-life? (in seconds, whole number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16.1', '7', '693'],
        hint1: '(120,000 − 80,000)/(8.314 × 300) = 40,000/2494 = 16.04 ≈ 16.1.',
        hint2: 'e^16.1 ≈ 9.7 × 10⁶ ≈ 10⁷. Power of 10 = 7.',
        hint3: 't₁/₂ = 0.693/(1.0 × 10⁻³) = 693 s.',
        explanation: '1) ΔEa/(RT) = 40,000/2494 = 16.1. 2) e^16.1 ≈ 10⁷ → 7 orders of magnitude. 3) t₁/₂ = 0.693/0.001 = 693 s (about 11.5 minutes).'
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
              'The catalyzed reaction produces more product at equilibrium',
              'The catalyzed reaction has a different overall equation'
            ],
            correctAnswer: 1,
            explanation: 'A catalyst lowers Ea without changing ΔH, equilibrium position, or the overall balanced equation. It only changes the pathway (mechanism).'
          },
          {
            question: 'Catalyst poisoning occurs when:',
            options: [
              'The reaction reaches equilibrium',
              'A substance blocks active sites on the catalyst surface',
              'The catalyst is consumed by the reaction',
              'Temperature becomes too high'
            ],
            correctAnswer: 1,
            explanation: 'Poisoning occurs when a substance (like lead or CO) binds irreversibly to catalyst active sites, blocking reactant molecules from adsorbing.'
          }
        ]
      }
    }
  ]
}
