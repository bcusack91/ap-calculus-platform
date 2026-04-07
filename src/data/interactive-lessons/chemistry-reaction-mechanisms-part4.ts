export const chemReactionMechanismsPart4Data = {
  topicSlug: 'reaction-mechanisms',
  sections: [
    {
      id: 'rm4-intro',
      type: 'text' as const,
      content: `
# 🧮 Deriving Rate Laws from Mechanisms

**Part 4 of 7 — From Steps to Predictions**

One of the most important skills on the AP Chemistry exam is deriving the predicted rate law from a proposed mechanism and comparing it with the experimentally observed rate law.
      `
    },
    {
      id: 'rm4-method-summary',
      type: 'text' as const,
      content: `
## Strategy for Deriving Rate Laws

### Step-by-Step Method

1. **Identify the RDS** (slow step)
2. **Write the rate law** for the RDS using its stoichiometry (it\'s an elementary step!)
3. **Check for intermediates** in the rate law
4. If intermediates present → **eliminate them**:
   - Use pre-equilibrium from a prior fast reversible step
   - Solve the equilibrium expression for [intermediate]
   - Substitute back into the rate law
5. **Simplify** — combine constants into $k_{\\text{obs}}$

### Result

The final rate law should contain only **reactants** (and possibly catalysts) — never intermediates.
      `
    },
    {
      id: 'rm4-example-1',
      type: 'text' as const,
      content: `
## Example 1: First Step Slow

**Overall:** $\\text{NO}_2 + \\text{CO} \\rightarrow \\text{NO} + \\text{CO}_2$

**Mechanism:**
- Step 1: $\\text{NO}_2 + \\text{NO}_2 \\rightarrow \\text{NO}_3 + \\text{NO}$ (slow)
- Step 2: $\\text{NO}_3 + \\text{CO} \\rightarrow \\text{NO}_2 + \\text{CO}_2$ (fast)

**Derivation:**

Step 1 is the RDS (slow, bimolecular):

$$\\text{Rate} = k_1[\\text{NO}_2][\\text{NO}_2] = k_1[\\text{NO}_2]^2$$

No intermediates in this rate law → **done!**

$$\\boxed{\\text{Rate} = k[\\text{NO}_2]^2}$$

**Note:** CO doesn\'t appear in the rate law even though it\'s a reactant in the overall equation! It reacts only in the fast step (after the RDS).
      `
    },
    {
      id: 'rm4-example-2',
      type: 'text' as const,
      content: `
## Example 2: Second Step Slow (Pre-Equilibrium Required)

**Overall:** $2\\text{NO} + \\text{Br}_2 \\rightarrow 2\\text{NOBr}$

**Mechanism:**
- Step 1: $\\text{NO} + \\text{Br}_2 \\rightleftharpoons \\text{NOBr}_2$ (fast, reversible)
- Step 2: $\\text{NOBr}_2 + \\text{NO} \\rightarrow 2\\text{NOBr}$ (slow)

**Derivation:**

Step 2 is the RDS:
$$\\text{Rate} = k_2[\\text{NOBr}_2][\\text{NO}]$$

NOBr₂ is an intermediate! Eliminate it using Step 1 equilibrium:

$$K_{eq} = \\frac{[\\text{NOBr}_2]}{[\\text{NO}][\\text{Br}_2]}$$

$$[\\text{NOBr}_2] = K_{eq}[\\text{NO}][\\text{Br}_2]$$

Substitute:

$$\\text{Rate} = k_2 \\cdot K_{eq}[\\text{NO}][\\text{Br}_2] \\cdot [\\text{NO}]$$

$$\\boxed{\\text{Rate} = k_{\\text{obs}}[\\text{NO}]^2[\\text{Br}_2]}$$

where $k_{\\text{obs}} = k_2 K_{eq}$.
      `
    },
    {
      id: 'rm4-practice-quiz',
      type: 'multiple-choice' as const,
      content: `
**Rate Law Derivation Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Mechanism:\nStep 1: Cl₂ ⇌ 2Cl (fast)\nStep 2: Cl + CHCl₃ → CCl₄ + H (slow)\nStep 3: H + Cl → HCl (fast)\nWhat is the rate law?',
            options: [
              'rate = k[Cl₂][CHCl₃]',
              'rate = k[Cl][CHCl₃]',
              'rate = k[Cl₂]^(1/2)[CHCl₃]',
              'rate = k[Cl₂]²[CHCl₃]'
            ],
            correctAnswer: 2,
            explanation: 'Step 2 (slow): rate = k₂[Cl][CHCl₃]. Cl is intermediate. From Step 1: Keq = [Cl]²/[Cl₂] → [Cl] = (Keq[Cl₂])^(1/2) = Keq^(1/2)[Cl₂]^(1/2). Rate = k₂Keq^(1/2)[Cl₂]^(1/2)[CHCl₃] = k_obs[Cl₂]^(1/2)[CHCl₃].'
          },
          {
            question: 'In the NO₂ + CO example, why doesn\'t [CO] appear in the rate law?',
            options: [
              'CO is a catalyst',
              'CO reacts only in the fast step, after the RDS',
              'CO is an intermediate',
              'CO has no effect on the reaction'
            ],
            correctAnswer: 1,
            explanation: 'CO participates only in Step 2 (the fast step). Since the rate is determined by the slow step (Step 1), and CO is not involved in Step 1, it does not appear in the rate law.'
          }
        ]
      }
    },
    {
      id: 'rm4-derivation-practice',
      type: 'input-boxes' as const,
      content: `
**Derivation Practice** 🧮

**Mechanism:**
- Step 1: $\\text{A} + \\text{B} \\rightleftharpoons \\text{C}$ (fast, $K_{eq}$)
- Step 2: $\\text{C} + \\text{A} \\rightarrow \\text{D}$ (slow)

**1)** The rate law from the slow step is Rate = k₂[?][?]. Which species are in the rate law? (enter two formulas separated by a comma, alphabetically)

**2)** The intermediate is eliminated by writing [C] = Keq × [?] × [?]. Fill in the species. (enter two formulas separated by a comma, alphabetically)

**3)** The final rate law is Rate = k_obs[A]ⁿ[B]ᵐ. What are n and m? (enter as: n,m)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['A,C', 'A,B', '2,1'],
        hint1: 'Step 2: C + A → D. Rate = k₂[C][A]. The species are A and C.',
        hint2: 'From Step 1 equilibrium: Keq = [C]/([A][B]). So [C] = Keq[A][B].',
        hint3: 'Rate = k₂ × Keq[A][B] × [A] = k_obs[A]²[B]. So n = 2, m = 1.',
        explanation: '1) Rate = k₂[C][A] → species: A, C. 2) [C] = Keq[A][B]. 3) Rate = k₂Keq[A]²[B] → n = 2, m = 1.'
      }
    },
    {
      id: 'rm4-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Mechanism → Rate Law Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The rate law for an overall reaction is determined by',
            options: ['adding all rate laws', 'the rate-determining step', 'the fastest step', 'the overall stoichiometry']
          },
          {
            label: 'Fractional orders in rate laws (like [X]^(1/2)) arise when',
            options: ['the reaction is zero order', 'a pre-equilibrium produces a dissociated species', 'temperature is very high', 'a catalyst is used']
          },
          {
            label: 'If the observed rate law is rate = k[A]² but the overall equation is A + B → C, this suggests',
            options: ['the mechanism is one step', 'B reacts after the RDS', 'B is a catalyst', 'A is an intermediate']
          },
          {
            label: 'k_obs in a derived rate law typically equals',
            options: ['k₁ only', 'k₂ only', 'k₂ × Keq', 'k₁ + k₂']
          }
        ],
        correctAnswers: ['the rate-determining step', 'a pre-equilibrium produces a dissociated species', 'B reacts after the RDS', 'k₂ × Keq'],
        hint1: 'The slow step controls the rate.',
        hint2: 'For example, Cl₂ ⇌ 2Cl gives [Cl] = (Keq[Cl₂])^(1/2), producing a 1/2 order.',
        hint3: 'B not in rate law → B must react in a step after the RDS.',
        explanation: 'Rate law from RDS. Fractional orders from dissociation equilibria. Missing reactant → reacts after RDS. k_obs = k₂ × Keq when pre-equilibrium is used.'
      }
    },
    {
      id: 'rm4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Deriving Rate Laws** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Mechanism:\nStep 1: A ⇌ 2B (fast)\nStep 2: B + C → D (slow)\nThe rate law is:',
            options: [
              'rate = k[B][C]',
              'rate = k[A]^(1/2)[C]',
              'rate = k[A][C]',
              'rate = k[A]²[C]'
            ],
            correctAnswer: 1,
            explanation: 'Step 2: rate = k₂[B][C]. B is intermediate. Step 1: Keq = [B]²/[A] → [B] = (Keq[A])^(1/2). Rate = k₂(Keq[A])^(1/2)[C] = k_obs[A]^(1/2)[C].'
          },
          {
            question: 'Which rate law is consistent with a single bimolecular elementary step for A + B → products?',
            options: [
              'rate = k[A]²',
              'rate = k[A][B]',
              'rate = k[A]',
              'rate = k[A][B]²'
            ],
            correctAnswer: 1,
            explanation: 'For a single bimolecular step A + B → products, the rate law comes directly from stoichiometry: rate = k[A][B]. If the experimental rate law is different, the mechanism must be multi-step.'
          }
        ]
      }
    }
  ]
}
