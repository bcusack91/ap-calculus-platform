export const chemReactionMechanismsPart7Data = {
  topicSlug: 'reaction-mechanisms',
  sections: [
    {
      id: 'rm7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Comprehensive Mechanism Problems**

This final part presents AP exam-level problems that integrate all mechanism concepts: elementary steps, intermediates, catalysts, rate-determining steps, rate law derivation, and mechanism validation.
      `
    },
    {
      id: 'rm7-key-concepts',
      type: 'text' as const,
      content: `
## Key Concepts Summary

### Mechanism Fundamentals
- A mechanism is a series of **elementary steps** that sum to the overall reaction
- **Molecularity** (1, 2, or 3) = number of reactant particles in an elementary step
- For elementary steps only: rate law exponents = stoichiometric coefficients

### Species Classification
- **Intermediate**: produced in one step, consumed in another (not in overall equation)
- **Catalyst**: consumed early, regenerated later (present at start and end)
- **n steps** → **n transition states** and **n − 1 intermediates**

### Rate Law Derivation
- Rate law comes from the **rate-determining step** (slowest = highest $E_a$)
- If RDS rate law contains intermediates → use **pre-equilibrium** to eliminate
- Final rate law must contain only **reactants** (and catalysts)

### Validation
- Steps must **sum** to the overall equation
- Derived rate law must **match** the experimental rate law
- A consistent mechanism is **not proven** — only not disproven
      `
    },
    {
      id: 'rm7-ap-problem-1',
      type: 'multiple-choice' as const,
      content: `
**AP Problem 1: Mechanism Analysis** 🎯

The decomposition of hydrogen peroxide is catalyzed by iodide ion:

$2\\text{H}_2\\text{O}_2(aq) \\rightarrow 2\\text{H}_2\\text{O}(l) + \\text{O}_2(g)$

Mechanism:
- Step 1: $\\text{H}_2\\text{O}_2 + \\text{I}^- \\rightarrow \\text{IO}^- + \\text{H}_2\\text{O}$ (slow)
- Step 2: $\\text{IO}^- + \\text{H}_2\\text{O}_2 \\rightarrow \\text{I}^- + \\text{H}_2\\text{O} + \\text{O}_2$ (fast)
      `,
      exercise: {
        questions: [
          {
            question: 'The rate law predicted by this mechanism is:',
            options: [
              'rate = k[H₂O₂]²',
              'rate = k[H₂O₂][I⁻]',
              'rate = k[H₂O₂][IO⁻]',
              'rate = k[IO⁻][I⁻]'
            ],
            correctAnswer: 1,
            explanation: 'Step 1 is the RDS: rate = k₁[H₂O₂][I⁻]. No intermediates in this expression. I⁻ appears because it is a catalyst that participates in the slow step.'
          },
          {
            question: 'Identify all intermediates and catalysts:',
            options: [
              'Intermediate: I⁻; Catalyst: IO⁻',
              'Intermediate: IO⁻; Catalyst: I⁻',
              'Intermediate: H₂O₂; Catalyst: I⁻',
              'Intermediate: IO⁻; Catalyst: H₂O'
            ],
            correctAnswer: 1,
            explanation: 'IO⁻ is produced in Step 1 and consumed in Step 2 → intermediate. I⁻ is consumed in Step 1 and regenerated in Step 2 → catalyst.'
          },
          {
            question: 'If [I⁻] is doubled while [H₂O₂] is held constant, the rate will:',
            options: [
              'Stay the same',
              'Double',
              'Quadruple',
              'Be cut in half'
            ],
            correctAnswer: 1,
            explanation: 'Rate = k[H₂O₂][I⁻]. The rate is first order in [I⁻], so doubling [I⁻] doubles the rate.'
          }
        ]
      }
    },
    {
      id: 'rm7-ap-problem-2',
      type: 'input-boxes' as const,
      content: `
**AP Problem 2: Full Mechanism Derivation** 🧮

**Reaction:** $2\\text{NO} + 2\\text{H}_2 \\rightarrow \\text{N}_2 + 2\\text{H}_2\\text{O}$

**Mechanism:**
- Step 1: $2\\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$ (fast, $K_{eq}$)
- Step 2: $\\text{N}_2\\text{O}_2 + \\text{H}_2 \\rightarrow \\text{N}_2\\text{O} + \\text{H}_2\\text{O}$ (slow)
- Step 3: $\\text{N}_2\\text{O} + \\text{H}_2 \\rightarrow \\text{N}_2 + \\text{H}_2\\text{O}$ (fast)

**1)** How many intermediates? (number)

**2)** The rate law from the slow step contains an intermediate. After elimination, the rate law is Rate = k_obs[NO]ⁿ[H₂]ᵐ. What is n? (number)

**3)** What is m? (number)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '2', '1'],
        hint1: 'N₂O₂ (produced Step 1, consumed Step 2) and N₂O (produced Step 2, consumed Step 3) = 2 intermediates.',
        hint2: 'Step 2: rate = k₂[N₂O₂][H₂]. [N₂O₂] = Keq[NO]². Rate = k₂Keq[NO]²[H₂]. n = 2.',
        hint3: '[H₂] appears once in the slow step. m = 1.',
        explanation: '1) N₂O₂ and N₂O are both intermediates (2 total). 2) Rate = k₂[N₂O₂][H₂] → [N₂O₂] = Keq[NO]² → Rate = k_obs[NO]²[H₂]. n = 2. 3) m = 1. Overall third order.'
      }
    },
    {
      id: 'rm7-ap-problem-3',
      type: 'multiple-choice' as const,
      content: `
**AP Problem 3: Energy Diagram Interpretation** 🎯

An energy diagram for a two-step mechanism shows:
- First peak is higher than the second peak
- A valley between the peaks (intermediate)
- Products are lower than reactants
      `,
      exercise: {
        questions: [
          {
            question: 'Which step is the rate-determining step?',
            options: [
              'Step 1 (first peak is higher)',
              'Step 2 (second peak is lower)',
              'Both steps equally',
              'Cannot determine from the diagram'
            ],
            correctAnswer: 0,
            explanation: 'The RDS is the step with the highest activation energy barrier. The first peak is higher, so Step 1 has the larger Ea and is the RDS.'
          },
          {
            question: 'The overall reaction is:',
            options: [
              'Endothermic',
              'Exothermic',
              'Thermoneutral (ΔH = 0)',
              'Cannot determine'
            ],
            correctAnswer: 1,
            explanation: 'Products are lower in energy than reactants → ΔH < 0 → exothermic.'
          },
          {
            question: 'Adding a catalyst would:',
            options: [
              'Lower both peaks',
              'Raise the valley',
              'Lower only the first peak',
              'Move the products to lower energy'
            ],
            correctAnswer: 0,
            explanation: 'A catalyst provides an entirely new pathway with lower activation barriers. Both peaks (transition states) would be lower, while reactant, product, and intermediate energies remain unchanged.'
          }
        ]
      }
    },
    {
      id: 'rm7-dropdown-synthesis',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A species that is consumed in Step 1 and regenerated in Step 3 is a(n)',
            options: ['intermediate', 'catalyst', 'product', 'reactant']
          },
          {
            label: 'The order of a reaction can be fractional when the mechanism involves',
            options: ['a termolecular step', 'a pre-equilibrium with dissociation', 'only one step', 'a catalyst']
          },
          {
            label: 'If experimental rate law is rate = k[A] but a proposed mechanism predicts rate = k[A]², the mechanism is',
            options: ['valid', 'invalid', 'uncertain', 'proven correct']
          },
          {
            label: 'For a 4-step mechanism, the energy diagram has',
            options: ['4 peaks and 4 valleys', '4 peaks and 3 valleys', '3 peaks and 4 valleys', '4 peaks and 0 valleys']
          }
        ],
        correctAnswers: ['catalyst', 'a pre-equilibrium with dissociation', 'invalid', '4 peaks and 3 valleys'],
        hint1: 'Consumed then regenerated = catalyst. Produced then consumed = intermediate.',
        hint2: 'e.g., X₂ ⇌ 2X gives [X] ∝ [X₂]^(1/2).',
        hint3: 'If predicted ≠ experimental, the mechanism is invalid.',
        explanation: 'Consumed and regenerated = catalyst. Fractional orders from dissociation equilibria. Rate law mismatch = invalid mechanism. n steps = n peaks, (n−1) valleys.'
      }
    },
    {
      id: 'rm7-challenge',
      type: 'input-boxes' as const,
      content: `
**Challenge Problem** 🧮

**Reaction:** $\\text{A} + \\text{B} + \\text{C} \\rightarrow \\text{D} + \\text{E}$

**Experimental rate law:** Rate = $k[\\text{A}][\\text{B}]^2$

A student proposes:
- Step 1: $\\text{A} + \\text{B} \\rightarrow \\text{F}$ (slow)
- Step 2: $\\text{F} + \\text{B} \\rightarrow \\text{G}$ (fast)
- Step 3: $\\text{G} + \\text{C} \\rightarrow \\text{D} + \\text{E}$ (fast)

**1)** Does the mechanism sum to the overall reaction? (yes or no)

**2)** The rate law from Step 1 is rate = k[A][B]. Does this match the experimental rate law rate = k[A][B]²? (yes or no)

**3)** Is this proposed mechanism valid? (yes or no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['yes', 'no', 'no'],
        hint1: 'A + B + F + B + G + C → F + G + D + E. Cancel F and G: A + 2B + C → D + E. Matches overall ✓.',
        hint2: 'Step 1: rate = k[A][B]. Experimental: rate = k[A][B]². These are different (first order vs second order in B).',
        hint3: 'Criterion 1 (sum) ✓ but Criterion 2 (rate law) ✗. Mechanism is invalid.',
        explanation: '1) Steps sum correctly ✓. 2) Predicted rate = k[A][B] but experimental = k[A][B]² → mismatch ✗. 3) Since Criterion 2 fails, the mechanism is invalid. A valid mechanism would need [B] to appear twice in the rate expression.'
      }
    },
    {
      id: 'rm7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Reaction Mechanisms** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes the relationship between mechanisms and rate laws?',
            options: [
              'The rate law proves the mechanism',
              'The mechanism must predict a rate law consistent with experiment',
              'The rate law and mechanism are independent',
              'The rate law is determined by the fastest step'
            ],
            correctAnswer: 1,
            explanation: 'A valid mechanism must predict a rate law that matches experiment (Criterion 2). However, a matching rate law does not prove the mechanism — it only shows consistency.'
          },
          {
            question: 'On the AP exam, you are given a mechanism and asked to derive the rate law. Your first step should be:',
            options: [
              'Add all the steps together',
              'Identify the rate-determining step',
              'Find the intermediates',
              'Write the equilibrium expression'
            ],
            correctAnswer: 1,
            explanation: 'The first and most important step is to identify the RDS (slow step), because the overall rate law comes from the RDS. Then check for intermediates and eliminate them if needed.'
          }
        ]
      }
    }
  ]
}
