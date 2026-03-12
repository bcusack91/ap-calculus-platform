export const chemReactionMechanismsPart6Data = {
  topicSlug: 'reaction-mechanisms',
  sections: [
    {
      id: 'rm6-intro',
      type: 'text' as const,
      content: `
# 🔧 Problem-Solving Workshop

**Part 6 of 7 — Mechanism Analysis Practice**

This workshop focuses on the types of mechanism problems you\'ll see on the AP Chemistry exam: analyzing mechanisms, deriving rate laws, identifying species, and validating proposals.
      `
    },
    {
      id: 'rm6-problem-1',
      type: 'text' as const,
      content: `
## Problem 1: Complete Mechanism Analysis

The reaction $2\\text{O}_3 \\rightarrow 3\\text{O}_2$ has the experimental rate law:

$$\\text{Rate} = k\\frac{[\\text{O}_3]^2}{[\\text{O}_2]}$$

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
              'O₃',
              'O₂',
              'O (oxygen atom)',
              'There is no intermediate'
            ],
            correctAnswer: 2,
            explanation: 'O is produced in Step 1 and consumed in Step 2. It does not appear in the overall equation. It is the reaction intermediate.'
          },
          {
            question: 'The rate law from the slow step is rate = k₂[O][O₃]. After eliminating [O] using pre-equilibrium, the rate law becomes:',
            options: [
              'rate = k[O₃][O₂]',
              'rate = k[O₃]²/[O₂]',
              'rate = k[O₃]²[O₂]',
              'rate = k[O₃]'
            ],
            correctAnswer: 1,
            explanation: 'Step 1 equilibrium: Keq = [O₂][O]/[O₃] → [O] = Keq[O₃]/[O₂]. Substituting: rate = k₂ × Keq[O₃]/[O₂] × [O₃] = k_obs[O₃]²/[O₂]. This matches the experimental rate law!'
          },
          {
            question: 'The negative order in [O₂] means:',
            options: [
              'O₂ speeds up the reaction',
              'O₂ is not involved in the reaction',
              'Adding O₂ slows down the reaction',
              'O₂ is a catalyst'
            ],
            correctAnswer: 2,
            explanation: '[O₂] in the denominator means rate ∝ 1/[O₂]. Adding O₂ pushes Step 1 equilibrium back toward O₃ (Le Chatelier\'s), reducing [O] and slowing the reaction.'
          }
        ]
      }
    },
    {
      id: 'rm6-problem-2',
      type: 'input-boxes' as const,
      content: `
**Problem 2: Enzyme Kinetics Mechanism** 🧮

An enzyme-catalyzed reaction has the mechanism:
- Step 1: $\\text{E} + \\text{S} \\rightleftharpoons \\text{ES}$ (fast, $K_{eq}$)
- Step 2: $\\text{ES} \\rightarrow \\text{E} + \\text{P}$ (slow)

where E = enzyme, S = substrate, ES = enzyme-substrate complex, P = product.

1) What is the intermediate? (enter formula)

2) What is the catalyst? (enter formula)

3) The derived rate law is Rate = $k_{obs}$[?][?]. Enter the two species. (separated by comma, alphabetically)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['ES', 'E', 'E,S'],
        hint1: 'ES is produced in Step 1 and consumed in Step 2 → intermediate.',
        hint2: 'E is consumed in Step 1 and regenerated in Step 2 → catalyst (enzyme).',
        hint3: 'Rate = k₂[ES]. From equilibrium: [ES] = Keq[E][S]. So Rate = k₂Keq[E][S] = k_obs[E][S].',
        explanation: '1) ES is the intermediate. 2) E (enzyme) is the catalyst. 3) Rate = k_obs[E][S]. This is the simplified Michaelis-Menten model.'
      }
    },
    {
      id: 'rm6-problem-3',
      type: 'text' as const,
      content: `
## Problem 3: Comparing Mechanisms

**Overall:** $2\\text{H}_2\\text{O}_2 \\rightarrow 2\\text{H}_2\\text{O} + \\text{O}_2$

**Experimental:** Rate = $k[\\text{H}_2\\text{O}_2][\\text{I}^-]$

Note: I⁻ is not in the overall equation — it must be a catalyst.

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
            options: ['rate = k[H₂O₂]', 'rate = k[H₂O₂][I⁻]', 'rate = k[IO⁻][H₂O₂]', 'rate = k[I⁻]']
          },
          {
            label: 'Mechanism B: rate law from slow step',
            options: ['rate = k[H₂O₂]', 'rate = k[H₂O₂][I⁻]', 'rate = k[O][H₂O₂]', 'rate = k[H₂O₂]²']
          },
          {
            label: 'Which mechanism matches the experimental rate law?',
            options: ['A only', 'B only', 'Both A and B', 'Neither']
          },
          {
            label: 'In Mechanism A, I⁻ is a(n)',
            options: ['reactant', 'product', 'intermediate', 'catalyst']
          }
        ],
        correctAnswers: ['rate = k[H₂O₂][I⁻]', 'rate = k[H₂O₂]', 'A only', 'catalyst'],
        hint1: 'Mechanism A slow step: H₂O₂ + I⁻ → ... Rate = k[H₂O₂][I⁻].',
        hint2: 'Mechanism B slow step: H₂O₂ → ... Rate = k[H₂O₂] (unimolecular).',
        hint3: 'Experimental rate = k[H₂O₂][I⁻] → matches A, not B.',
        explanation: 'A: rate = k[H₂O₂][I⁻] ✓ (matches experiment). B: rate = k[H₂O₂] ✗ (missing [I⁻]). Only A is valid. In A, I⁻ is consumed in Step 1 and regenerated in Step 2 = catalyst.'
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

1) What is the energy of the first transition state? (in kJ)

2) What is the energy of the intermediate? (in kJ)

3) What is the energy of the products? (in kJ)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['80', '-30', '-40'],
        hint1: 'TS₁ = reactants + Ea₁ = 0 + 80 = 80 kJ.',
        hint2: 'Intermediate = reactants + ΔH₁ = 0 + (−30) = −30 kJ.',
        hint3: 'Products = reactants + ΔH₁ + ΔH₂ = 0 + (−30) + (−10) = −40 kJ.',
        explanation: '1) TS₁ = 0 + 80 = 80 kJ. 2) Intermediate = 0 + (−30) = −30 kJ. 3) Products = 0 + (−30) + (−10) = −40 kJ. The overall ΔH = −40 kJ (exothermic).'
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
            question: 'The experimental rate law for a reaction is rate = k[X]²[Y]. Which mechanism is consistent?\n\n(I) X + X → Z (slow); Z + Y → P (fast)\n(II) X + Y ⇌ Z (fast); Z + X → P (slow)',
            options: [
              'I only',
              'II only',
              'Both I and II',
              'Neither'
            ],
            correctAnswer: 2,
            explanation: 'I: Step 1 slow → rate = k[X]² ✗ (missing [Y]). II: Step 2 slow → rate = k₂[Z][X]. [Z] = Keq[X][Y]. Rate = k_obs[X]²[Y] ✓. Only II matches.'
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
