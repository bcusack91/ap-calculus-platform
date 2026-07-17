export const chemReactionMechanismsPart6Data = {
  topicSlug: 'reaction-mechanisms',
  sections: [
    {
      id: 'rm6-intro',
      type: 'text' as const,
      content: `# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Mechanism Analysis Practice**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'rm6-problem-1',
      type: 'text' as const,
      content: `
## ⚙️ Problem 1: Complete Mechanism Analysis

> **Problem:** Analyze the ozone decomposition mechanism and verify it matches the experimental rate law.

The reaction $2\\text{O}_3 \\rightarrow 3\\text{O}_2$ has the experimental rate law:

$$\\boxed{\\text{Rate} = k\\frac{[\\text{O}_3]^2}{[\\text{O}_2]}}$$

**Proposed mechanism:**
- Step 1: $\\text{O}_3 \\rightleftharpoons \\text{O}_2 + \\text{O}$ (fast, reversible)
- Step 2: $\\text{O} + \\text{O}_3 \\rightarrow 2\\text{O}_2$ (slow)
      `
    },
    {
      id: 'rm6-problem-1-practice',
      type: 'multiple-choice' as const,
      content: `
**Problem 1 Analysis** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is the intermediate in this mechanism?',
            options: [
              '$O_{3}$',
              '$O_{2}$',
              'O (oxygen atom)',
              'There is no intermediate'
            ],
            correctAnswer: 2,
            explanation: 'O is produced in Step 1 and consumed in Step 2. It does not appear in the overall equation. It is the reaction intermediate.'
          },
          {
            question: 'The rate law from the slow step is rate = $k_{2}$[O][$O_{3}$]. After eliminating [O] using pre-equilibrium, the rate law becomes:',
            options: [
              'rate = k[$O_{3}$][$O_{2}$]',
              'rate = k[$O_{3}$]$ {}^{2}$/[$O_{2}$]',
              'rate = k[$O_{3}$]$ {}^{2}$[$O_{2}$]',
              'rate = k[$O_{3}$]'
            ],
            correctAnswer: 1,
            explanation: 'Step 1 equilibrium: Keq = [$O_{2}$][O]/[$O_{3}$] → [O] = Keq[$O_{3}$]/[$O_{2}$]. Substituting: rate = $k_{2}$ × Keq[$O_{3}$]/[$O_{2}$] × [$O_{3}$] = k_obs[$O_{3}$]$ {}^{2}$/[$O_{2}$]. This matches the experimental rate law!'
          },
          {
            question: 'The negative order in [$O_{2}$] means:',
            options: [
              '$O_{2}$ speeds up the reaction',
              '$O_{2}$ is not involved in the reaction',
              'Adding $O_{2}$ slows down the reaction',
              '$O_{2}$ is a catalyst'
            ],
            correctAnswer: 2,
            explanation: '[$O_{2}$] in the denominator means rate ∝ 1/[$O_{2}$]. Adding $O_{2}$ pushes Step 1 equilibrium back toward $O_{3}$ (Le Chatelier\'s), reducing [O] and slowing the reaction.'
          }
        ]
      }
    },
    {
      id: 'rm6-problem-2',
      type: 'input-boxes' as const,
      content: `
**Problem 2: Enzyme Kinetics Mechanism** 🧮

> **Problem:** Derive the rate law for the simplified enzyme-catalyzed reaction and identify all species.

An enzyme-catalyzed reaction has the mechanism:
- Step 1: $\\text{E} + \\text{S} \\rightleftharpoons \\text{ES}$ (fast, $K_{eq}$)
- Step 2: $\\text{ES} \\rightarrow \\text{E} + \\text{P}$ (slow)

where E = enzyme, S = substrate, ES = enzyme-substrate complex, P = product.

**1)** What is the intermediate? (enter formula)

**2)** What is the catalyst? (enter formula)

**3)** The derived rate law is Rate = $k_{obs}$[?][?]. Enter the two species. (separated by comma, alphabetically)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ES', 'E', 'E,S'],
        hint1: 'ES is produced in Step 1 and consumed in Step 2 → intermediate.',
        hint2: 'E is consumed in Step 1 and regenerated in Step 2 → catalyst (enzyme).',
        hint3: 'Rate = $k_{2}$[ES]. From equilibrium: [ES] = Keq[E][S]. So Rate = $k_{2}Keq$[E][S] = k_obs[E][S].',
        explanation: '1) ES is the intermediate. 2) E (enzyme) is the catalyst. 3) Rate = k_obs[E][S]. This is the simplified Michaelis-Menten model.'
      }
    },
    {
      id: 'rm6-problem-3',
      type: 'text' as const,
      content: `
## ⚖️ Problem 3: Comparing Mechanisms

> **Problem:** Compare mechanisms A and B for $H_{2}O_{2}$ decomposition and determine which matches the experimental rate law Rate = $k[\\text{H}_2\\text{O}_2][\\text{I}^-]$.

**Overall:** $2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$

**Experimental:** Rate = $k[\\text{H}_2\\text{O}_2][\\text{I}^-]$

> 💡 **Tip:** A negative-order dependence (rate ∝ 1/[product]) means adding that product shifts a pre-equilibrium backward, reducing the intermediate concentration.

**Mechanism A:**
- Step 1: $\\text{H}_2\\text{O}_2 + \\text{I}^- \\rightarrow \\text{IO}^- + \\text{H}_2\\text{O}$ (slow)
- Step 2: $\\text{IO}^- + \\text{H}_2\\text{O}_2 \\rightarrow \\text{I}^- + \\text{H}_2\\text{O} + \\text{O}_2$ (fast)

**Mechanism B:**
- Step 1: $\\text{H}_2\\text{O}_2 \\rightarrow \\text{H}_2\\text{O} + \\text{O}$ (slow)
- Step 2: $\\text{O} + \\text{H}_2\\text{O}_2 \\rightarrow \\text{H}_2\\text{O} + \\text{O}_2$ (fast)
      `
    },
    {
      id: 'rm6-problem-3-quiz',
      type: 'dropdown-select' as const,
      content: `
**Comparing Mechanisms A and B** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Mechanism A: rate law from slow step',
            options: ['rate = k[$H_{2}O_{2}$]', 'rate = k[$H_{2}O_{2}$][$I^{-}$]', 'rate = k[$IO^{-}$][$H_{2}O_{2}$]', 'rate = k[$I^{-}$]']
          },
          {
            label: 'Mechanism B: rate law from slow step',
            options: ['rate = k[$H_{2}O_{2}$]', 'rate = k[$H_{2}O_{2}$][$I^{-}$]', 'rate = k[O][$H_{2}O_{2}$]', 'rate = k[$H_{2}O_{2}$]$ {}^{2}$']
          },
          {
            label: 'Which mechanism matches the experimental rate law?',
            options: ['A only', 'B only', 'Both A and B', 'Neither']
          },
          {
            label: 'In Mechanism A, $I^{-}$ is a(n)',
            options: ['reactant', 'product', 'intermediate', 'catalyst']
          }
        ],
        correctAnswers: ['rate = k[$H_{2}O_{2}$][$I^{-}$]', 'rate = k[$H_{2}O_{2}$]', 'A only', 'catalyst'],
        hint1: 'Mechanism A slow step: $H_{2}O_{2}$ + $I^{-}$ → ... Rate = k[$H_{2}O_{2}$][$I^{-}$].',
        hint2: 'Mechanism B slow step: $H_{2}O_{2}$ → ... Rate = k[$H_{2}O_{2}$] (unimolecular).',
        hint3: 'Experimental rate = k[$H_{2}O_{2}$][$I^{-}$] → matches A, not B.',
        explanation: 'A: rate = k[$H_{2}O_{2}$][$I^{-}$] ✓ (matches experiment). B: rate = k[$H_{2}O_{2}$] ✗ (missing [$I^{-}$]). Only A is valid. In A, $I^{-}$ is consumed in Step 1 and regenerated in Step 2 = catalyst.'
      }
    },
    {
      id: 'rm6-problem-4',
      type: 'input-boxes' as const,
      content: `
**Problem 4: Energy Diagram for a Mechanism** 🧮

A two-step mechanism has:
- Step 1 (slow): $E_a = 80$ kJ/mol, $\\Delta H_1 = -30$ kJ/mol
- Step 2 (fast): $E_a = 20$ kJ/mol, $\\Delta H_2 = -10$ kJ/mol

If reactants start at energy = 0 kJ:

**1)** What is the energy of the first transition state? (in kJ)

**2)** What is the energy of the intermediate? (in kJ)

**3)** What is the energy of the products? (in kJ)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['80', '-30', '-40'],
        hint1: '$TS_{1}$ = reactants + $Ea_{1}$ = 0 + 80 = 80 kJ.',
        hint2: 'Intermediate = reactants + $\\Delta H_{1}$ = 0 + (−30) = −30 kJ.',
        hint3: 'Products = reactants + $\\Delta H_{1}$ + $\\Delta H_{2}$ = 0 + (−30) + (−10) = −40 kJ.',
        explanation: '1) $TS_{1}$ = 0 + 80 = 80 kJ. 2) Intermediate = 0 + (−30) = −30 kJ. 3) Products = 0 + (−30) + (−10) = −40 kJ. The overall ΔH = −40 kJ (exothermic).'
      }
    },
    {
      id: 'rm6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Mechanism Workshop** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'The experimental rate law for a reaction is rate = k[X]$ {}^{2}$[Y]. Which mechanism is consistent?\n\n(I) X + X → Z (slow); Z + Y → P (fast)\n(II) X + Y ⇌ Z (fast); Z + X → P (slow)',
            options: [
              'I only',
              'II only',
              'Both I and II',
              'Neither'
            ],
            correctAnswer: 2,
            explanation: 'I: Step 1 slow → rate = k[X]$ {}^{2}$ ✗ (missing [Y]). II: Step 2 slow → rate = $k_{2}$[Z][X]. [Z] = Keq[X][Y]. Rate = k_obs[X]$ {}^{2}$[Y] ✓. Only II matches.'
          },
          {
            question: 'A negative-order dependence on a product (like rate ∝ 1/[P]) typically indicates:',
            options: [
              'The product is a catalyst',
              'A pre-equilibrium step where the product shifts equilibrium backward',
              'The reaction is endothermic',
              'The product is an intermediate'
            ],
            correctAnswer: 1,
            explanation: 'Negative order in a product indicates a reversible pre-equilibrium step where the product appears. Adding more product shifts the equilibrium backward, reducing the intermediate concentration and slowing the rate.'
          }
        ]
      }
    }
  ]
}
