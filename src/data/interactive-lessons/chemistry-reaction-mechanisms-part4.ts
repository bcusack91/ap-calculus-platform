export const chemReactionMechanismsPart4Data = {
  topicSlug: 'reaction-mechanisms',
  sections: [
    {
      id: 'rm4-intro',
      type: 'text' as const,
      content: `# 🧮 Deriving Rate Laws from Mechanisms

**Part 4 of 7 — From Steps to Predictions**

---

### Topics in This Part

| Section |
|---------|
| 🎯 Strategy for Deriving Rate Laws |
| Step-by-Step Method |
| 🧪 Example 1: First Step Slow |
| 🧪 Example 2: Second Step Slow (Pre-Equilibrium Required) |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'rm4-method-summary',
      type: 'text' as const,
      content: `
## 🎯 Strategy for Deriving Rate Laws

---

### 📌 Step-by-Step Method

| Step | Action | Detail |
|------|--------|--------|
| 1 | **Identify the RDS** | Find the slow step |
| 2 | **Write the rate law** for the RDS | It's an elementary step → exponents = coefficients |
| 3 | **Check for intermediates** | Are any species in the rate law not in the overall equation? |
| 4 | **Eliminate intermediates** | Use pre-equilibrium: solve $K_{eq}$ expression for [intermediate] |
| 5 | **Substitute & simplify** | Replace [intermediate] and combine constants into $k_{\\text{obs}}$ |

> 🔑 **Key Rule:** The final rate law must contain only **reactants** (and possibly catalysts) — never intermediates.
      `
    },
    {
      id: 'rm4-example-1',
      type: 'text' as const,
      content: `
## 🧪 Example 1: First Step Slow

> **Problem:** Derive the rate law for $\\text{NO}_2 + \\text{CO} \\rightarrow \\text{NO} + \\text{CO}_2$ given the mechanism below.

**Mechanism:**
- Step 1: $\\text{NO}_2 + \\text{NO}_2 \\rightarrow \\text{NO}_3 + \\text{NO}$ (slow)
- Step 2: $\\text{NO}_3 + \\text{CO} \\rightarrow \\text{NO}_2 + \\text{CO}_2$ (fast)

> **Solution:**

Step 1 is the RDS (slow, bimolecular):

$$\\text{Rate} = k_1[\\text{NO}_2][\\text{NO}_2] = k_1[\\text{NO}_2]^2$$

No intermediates in this rate law → **done!**

$$\\boxed{\\text{Rate} = k[\\text{NO}_2]^2}$$

> 💡 **Tip:** CO doesn\'t appear in the rate law even though it\'s a reactant in the overall equation! It reacts only in the fast step (after the RDS).
      `
    },
    {
      id: 'rm4-example-2',
      type: 'text' as const,
      content: `
## 🧪 Example 2: Second Step Slow (Pre-Equilibrium Required)

> **Problem:** Derive the rate law for $2\\text{NO} + \\text{Br}_2 \\rightarrow 2\\text{NOBr}$ using pre-equilibrium.

**Mechanism:**
- Step 1: $\\text{NO} + \\text{Br}_2 \\rightleftharpoons \\text{NOBr}_2$ (fast, reversible)
- Step 2: $\\text{NOBr}_2 + \\text{NO} \\rightarrow 2\\text{NOBr}$ (slow)

> **Solution:**

Step 2 is the RDS:
$$\\text{Rate} = k_2[\\text{NOBr}_2][\\text{NO}]$$

$NOBr_{2}$ is an intermediate! Eliminate it using Step 1 equilibrium:

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
            question: 'Mechanism:\nStep 1: $Cl_{2}$ ⇌ 2Cl (fast)\nStep 2: Cl + $CHCl_{3}$ → $CCl_{4}$ + H (slow)\nStep 3: H + Cl → HCl (fast)\nWhat is the rate law?',
            options: [
              'rate = k[$Cl_{2}$][$CHCl_{3}$]',
              'rate = k[Cl][$CHCl_{3}$]',
              'rate = k[$Cl_{2}$]^(1/2)[$CHCl_{3}$]',
              'rate = k[$Cl_{2}$]$ {}^{2}$[$CHCl_{3}$]'
            ],
            correctAnswer: 2,
            explanation: 'Step 2 (slow): rate = $k_{2}$[Cl][$CHCl_{3}$]. Cl is intermediate. From Step 1: Keq = [Cl]$ {}^{2}$/[$Cl_{2}$] → [Cl] = (Keq[$Cl_{2}$])^(1/2) = $Keq^{1/2}$[$Cl_{2}$]^(1/2). Rate = $k_{2}Keq^{1/2}$[$Cl_{2}$]^(1/2)[$CHCl_{3}$] = k_obs[$Cl_{2}$]^(1/2)[$CHCl_{3}$].'
          },
          {
            question: 'In the $NO_{2}$ + CO example, why doesn\'t [CO] appear in the rate law?',
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

**1)** The rate law from the slow step is Rate = $k_{2}$[?][?]. Which species are in the rate law? (enter two formulas separated by a comma, alphabetically)

**2)** The intermediate is eliminated by writing [C] = Keq × [?] × [?]. Fill in the species. (enter two formulas separated by a comma, alphabetically)

**3)** The final rate law is Rate = k_obs[A]$ {}^{n}$[B]$ {}^{m}$. What are n and m? (enter as: n,m)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['A,C', 'A,B', '2,1'],
        hint1: 'Step 2: C + A → D. Rate = $k_{2}$[C][A]. The species are A and C.',
        hint2: 'From Step 1 equilibrium: Keq = [C]/([A][B]). So [C] = Keq[A][B].',
        hint3: 'Rate = $k_{2}$ × Keq[A][B] × [A] = k_obs[A]$ {}^{2}$[B]. So n = 2, m = 1.',
        explanation: '1) Rate = $k_{2}$[C][A] → species: A, C. 2) [C] = Keq[A][B]. 3) Rate = $k_{2}Keq$[A]$ {}^{2}$[B] → n = 2, m = 1.'
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
            label: 'If the observed rate law is rate = k[A]$ {}^{2}$ but the overall equation is A + B → C, this suggests',
            options: ['the mechanism is one step', 'B reacts after the RDS', 'B is a catalyst', 'A is an intermediate']
          },
          {
            label: 'k_obs in a derived rate law typically equals',
            options: ['$k_{1}$ only', '$k_{2}$ only', '$k_{2}$ × Keq', '$k_{1}$ + $k_{2}$']
          }
        ],
        correctAnswers: ['the rate-determining step', 'a pre-equilibrium produces a dissociated species', 'B reacts after the RDS', '$k_{2}$ × Keq'],
        hint1: 'The slow step controls the rate.',
        hint2: 'For example, $Cl_{2}$ ⇌ 2Cl gives [Cl] = (Keq[$Cl_{2}$])^(1/2), producing a 1/2 order.',
        hint3: 'B not in rate law → B must react in a step after the RDS.',
        explanation: 'Rate law from RDS. Fractional orders from dissociation equilibria. Missing reactant → reacts after RDS. k_obs = $k_{2}$ × Keq when pre-equilibrium is used.'
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
              'rate = k[A]$ {}^{2}$[C]'
            ],
            correctAnswer: 1,
            explanation: 'Step 2: rate = $k_{2}$[B][C]. B is intermediate. Step 1: Keq = [B]$ {}^{2}$/[A] → [B] = (Keq[A])^(1/2). Rate = $k_{2}$(Keq[A])^(1/2)[C] = k_obs[A]^(1/2)[C].'
          },
          {
            question: 'Which rate law is consistent with a single bimolecular elementary step for A + B → products?',
            options: [
              'rate = k[A]$ {}^{2}$',
              'rate = k[A][B]',
              'rate = k[A]',
              'rate = k[A][B]$ {}^{2}$'
            ],
            correctAnswer: 1,
            explanation: 'For a single bimolecular step A + B → products, the rate law comes directly from stoichiometry: rate = k[A][B]. If the experimental rate law is different, the mechanism must be multi-step.'
          }
        ]
      }
    }
  ]
}
