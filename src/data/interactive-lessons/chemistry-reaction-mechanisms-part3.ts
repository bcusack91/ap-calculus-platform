export const chemReactionMechanismsPart3Data = {
  topicSlug: 'reaction-mechanisms',
  sections: [
    {
      id: 'rm3-intro',
      type: 'text' as const,
      content: `
# 🐢 Rate-Determining Step

**Part 3 of 7 — The Bottleneck**

In a multi-step mechanism, one step is usually much slower than the others. This **rate-determining step** (RDS) controls the overall rate of the reaction — just like the slowest person in a relay race determines the team\'s time.
      `
    },
    {
      id: 'rm3-rds-concept',
      type: 'text' as const,
      content: `
## ⏱️ The Rate-Determining Step (RDS)

### Definition

The **rate-determining step** is the **slowest** elementary step in a mechanism. It has the **highest activation energy** ($E_a$) of all the steps.


---

### Key Principle

$$\\text{Overall rate} \\approx \\text{Rate of the slowest step}$$


---

### On an Energy Diagram

The RDS corresponds to the **tallest peak** (largest $E_a$ barrier) on the energy diagram.


---

### Why It Matters

The rate law for the overall reaction is determined by the rate-determining step. This is how we connect mechanisms to experimentally measured rate laws.
      `
    },
    {
      id: 'rm3-rds-quiz',
      type: 'multiple-choice' as const,
      content: `
**Rate-Determining Step Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The rate-determining step is the step with:',
            options: [
              'The lowest activation energy',
              'The highest activation energy',
              'The most reactants',
              'The fastest rate'
            ],
            correctAnswer: 1,
            explanation: 'The RDS has the highest Ea barrier, making it the slowest step. The overall reaction can go no faster than this bottleneck step.'
          },
          {
            question: 'If Step 1 is slow and Step 2 is fast, the overall rate law is determined by:',
            options: [
              'Step 2',
              'Both steps equally',
              'Step 1',
              'Neither step'
            ],
            correctAnswer: 2,
            explanation: 'The rate law is determined by the rate-determining (slow) step. Step 1 is slow, so the overall rate ≈ rate of Step 1.'
          },
          {
            question: 'An analogy for the rate-determining step is:',
            options: [
              'The fastest car on a highway',
              'The narrowest point in a funnel',
              'The tallest building in a city',
              'The deepest point in the ocean'
            ],
            correctAnswer: 1,
            explanation: 'Like the narrowest point in a funnel controls flow rate, the slowest step in a mechanism controls the reaction rate. Everything else must wait for the bottleneck.'
          }
        ]
      }
    },
    {
      id: 'rm3-first-step-slow',
      type: 'text' as const,
      content: `
## ⏱️ Case 1: First Step Is Rate-Determining

This is the simplest case. When Step 1 is slow, the rate law comes directly from Step 1\'s elementary rate law.


---

### Example

Overall: $2\\text{NO}_2 + \\text{F}_2 \\rightarrow 2\\text{NO}_2\\text{F}$

Mechanism:
- Step 1: $\\text{NO}_2 + \\text{F}_2 \\rightarrow \\text{NO}_2\\text{F} + \\text{F}$ (slow — RDS)
- Step 2: $\\text{NO}_2 + \\text{F} \\rightarrow \\text{NO}_2\\text{F}$ (fast)

**Rate law from the slow step:**

$$\\text{Rate} = k_1[\\text{NO}_2][\\text{F}_2]$$

This is a bimolecular step, so exponents come from stoichiometry. The rate law is **first order in NO₂ and first order in F₂** — overall second order.


---

### Notice

The rate law only involves species from the **slow step**. The fast step has no effect on the rate law.
      `
    },
    {
      id: 'rm3-second-step-slow',
      type: 'text' as const,
      content: `
## ⚖️ Case 2: Second Step Is Rate-Determining (Pre-Equilibrium)

When a later step is rate-determining, the rate law from that step may contain an intermediate. Since intermediates cannot appear in the final rate law, we must eliminate them using the **pre-equilibrium approximation**.


---

### The Pre-Equilibrium Method

If Step 1 is fast and reversible, it establishes an equilibrium before the slow step:

$$\\text{Step 1 (fast, reversible):} \\quad \\text{A} + \\text{B} \\rightleftharpoons \\text{C}$$

$$K_{eq} = \\frac{[\\text{C}]}{[\\text{A}][\\text{B}]}$$

$$\\text{Step 2 (slow):} \\quad \\text{C} + \\text{D} \\rightarrow \\text{products}$$

Rate from slow step: $\\text{Rate} = k_2[\\text{C}][\\text{D}]$

But C is an intermediate! Solve for [C] using equilibrium:

$$[\\text{C}] = K_{eq}[\\text{A}][\\text{B}]$$

Substitute:

$$\\text{Rate} = k_2 K_{eq}[\\text{A}][\\text{B}][\\text{D}] = k_{\\text{obs}}[\\text{A}][\\text{B}][\\text{D}]$$

where $k_{\\text{obs}} = k_2 K_{eq}$.
      `
    },
    {
      id: 'rm3-pre-equilibrium-practice',
      type: 'input-boxes' as const,
      content: `
**Pre-Equilibrium Practice** 🧮

Mechanism:
- Step 1: $2\\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$ (fast, reversible; $K_{eq}$)
- Step 2: $\\text{N}_2\\text{O}_2 + \\text{O}_2 \\rightarrow 2\\text{NO}_2$ (slow)

**1)** Write the rate law from the slow step. What is the intermediate? (enter the formula)

**2)** Express $[\\text{N}_2\\text{O}_2]$ in terms of $[\\text{NO}]$ using $K_{eq}$. What power of $[\\text{NO}]$ appears? (enter a number)

**3)** The final rate law is rate = k[NO]ⁿ[O₂]ᵐ. What are n and m? (enter as: n,m)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['N2O2', '2', '2,1'],
        hint1: 'Rate = k₂[N₂O₂][O₂]. N₂O₂ is the intermediate (produced in Step 1, consumed in Step 2).',
        hint2: 'Keq = [N₂O₂]/[NO]². So [N₂O₂] = Keq[NO]². Power of [NO] is 2.',
        hint3: 'Rate = k₂Keq[NO]²[O₂] = k_obs[NO]²[O₂]. So n = 2, m = 1.',
        explanation: '1) N₂O₂ is the intermediate. 2) Keq = [N₂O₂]/[NO]² → [N₂O₂] = Keq[NO]². 3) Rate = k₂Keq[NO]²[O₂], so n = 2, m = 1. Overall third order.'
      }
    },
    {
      id: 'rm3-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**RDS Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When the first step is rate-determining, the rate law',
            options: ['contains intermediates', 'comes directly from Step 1', 'depends on all steps', 'cannot be determined']
          },
          {
            label: 'When a later step is rate-determining, intermediates are eliminated using',
            options: ['the overall equation', 'the pre-equilibrium approximation', 'dimensional analysis', 'the ideal gas law']
          },
          {
            label: 'The pre-equilibrium approximation assumes the fast step',
            options: ['is irreversible', 'reaches equilibrium before the slow step proceeds', 'has zero Ea', 'is the RDS']
          },
          {
            label: 'Intermediates cannot appear in the final rate law because they',
            options: ['are too fast', 'are not measurable reactant concentrations', 'have no effect on rate', 'are products']
          }
        ],
        correctAnswers: ['comes directly from Step 1', 'the pre-equilibrium approximation', 'reaches equilibrium before the slow step proceeds', 'are not measurable reactant concentrations'],
        hint1: 'First step slow → rate law = elementary rate law of Step 1.',
        hint2: 'Pre-equilibrium lets us express [intermediate] in terms of [reactants].',
        hint3: 'The fast reversible step reaches equilibrium quickly.',
        explanation: 'Step 1 slow → direct rate law. Pre-equilibrium eliminates intermediates. Fast step reaches equilibrium before slow step proceeds. Intermediates are transient — we express them in terms of measurable concentrations.'
      }
    },
    {
      id: 'rm3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Rate-Determining Step** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Mechanism:\nStep 1: A → B (slow)\nStep 2: B + C → D (fast)\nThe rate law is:',
            options: [
              'rate = k[A][C]',
              'rate = k[B][C]',
              'rate = k[A]',
              'rate = k[A][B][C]'
            ],
            correctAnswer: 2,
            explanation: 'Step 1 is slow (RDS). It is unimolecular: A → B. Rate = k₁[A]. No need for pre-equilibrium since the slow step is first.'
          },
          {
            question: 'Mechanism:\nStep 1: A + B ⇌ C (fast, reversible)\nStep 2: C → D (slow)\nThe rate law is:',
            options: [
              'rate = k[C]',
              'rate = k[A][B]',
              'rate = k[D]',
              'rate = k[A][B][C]'
            ],
            correctAnswer: 1,
            explanation: 'Step 2 (slow): rate = k₂[C]. But C is an intermediate. From equilibrium: [C] = Keq[A][B]. Substituting: rate = k₂Keq[A][B] = k_obs[A][B].'
          }
        ]
      }
    }
  ]
}
