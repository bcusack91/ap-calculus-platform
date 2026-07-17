export const chemReactionMechanismsPart5Data = {
  topicSlug: 'reaction-mechanisms',
  sections: [
    {
      id: 'rm5-intro',
      type: 'text' as const,
      content: `# ✅ Validating Mechanisms

**Part 5 of 7 — Testing Proposed Mechanisms**

---

### Topics in This Part

| Section |
|---------|
| 📌 The Two Essential Criteria |
| Criterion 1: Steps Sum to the Overall Reaction |
| Criterion 2: Rate Law Matches Experiment |
| 🧪 Worked Example: Validating a Mechanism |
| 📌 Common AP Mistakes to Avoid |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'rm5-two-criteria',
      type: 'text' as const,
      content: `
## 📌 The Two Essential Criteria

A valid mechanism must satisfy **both** of these conditions:


---

### Criterion 1: Steps Sum to the Overall Reaction

When all elementary steps are added and intermediates/catalysts are cancelled, the result must equal the experimentally determined overall balanced equation.

$$\\boxed{\\text{Step 1} + \\text{Step 2} + \\cdots = \\text{Overall Reaction}}$$


---

### Criterion 2: Rate Law Matches Experiment

The rate law derived from the mechanism (using the RDS and pre-equilibrium as needed) must agree with the experimentally observed rate law.

$$\\boxed{\\text{Rate law}_{\\text{mechanism}} = \\text{Rate law}_{\\text{experimental}}}$$


---

> ⚠️ **Warning:** Even if both criteria are met, the mechanism is not proven — it is only **consistent with the data**. Other mechanisms might also be consistent. We can **disprove** a mechanism but never definitively prove one.
      `
    },
    {
      id: 'rm5-validation-example',
      type: 'text' as const,
      content: `
## 🧪 Worked Example: Validating a Mechanism

> **Problem:** Validate the proposed mechanisms for $2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2$ given the experimental rate law Rate = $k[\\text{NO}]^2[\\text{O}_2]$.

---

### Mechanism A: Single Termolecular Step

| Test | Check | Result |
|------|-------|--------|
| Steps | $2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2$ (slow, one step) | — |
| Criterion 1: Sum = overall? | $2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2$ | ✅ |
| Criterion 2: Rate law matches? | rate $= k[\\text{NO}]^2[\\text{O}_2]$ | ✅ |

> ⚠️ **Problem:** Termolecular collisions (3 molecules simultaneously) are extremely unlikely. This mechanism is mathematically valid but physically implausible.

---

### Mechanism B: Two-Step with Pre-Equilibrium

| Step | Elementary Reaction | Type |
|------|---------------------|------|
| 1 | $2\\text{NO} \\rightleftharpoons \\text{N}_2\\text{O}_2$ | Fast equilibrium |
| 2 | $\\text{N}_2\\text{O}_2 + \\text{O}_2 \\rightarrow 2\\text{NO}_2$ | Slow (RDS) |

| Test | Check | Result |
|------|-------|--------|
| Criterion 1: Sum = overall? | $2\\text{NO} + \\text{O}_2 \\rightarrow 2\\text{NO}_2$ | ✅ |
| Criterion 2: Rate from RDS | $k_2[\\text{N}_2\\text{O}_2][\\text{O}_2]$ | — |
| Substitute intermediate | $[\\text{N}_2\\text{O}_2] = K_{eq}[\\text{NO}]^2$ | — |
| Final rate law | $k_{obs}[\\text{NO}]^2[\\text{O}_2]$ | ✅ |

> 🔑 **Conclusion:** Mechanism B is **preferred** — it matches the experimental rate law AND avoids the improbable termolecular step.
      `
    },
    {
      id: 'rm5-validation-quiz',
      type: 'multiple-choice' as const,
      content: `
**Validation Quiz** 🎯

**Overall:** $2\\text{A} + \\text{B} \\rightarrow \\text{C} + \\text{D}$
**Experimental:** Rate = $k[\\text{A}][\\text{B}]$
      `,
      exercise: {
        questions: [
          {
            question: 'Which mechanism is consistent with the rate law?\n\nMechanism I: A + B → C + E (slow); A + E → D (fast)\nMechanism II: 2A + B → C + D (one slow step)\nMechanism III: A + A → E (slow); E + B → C + D (fast)',
            options: [
              'Mechanism I only',
              'Mechanism II only',
              'Mechanism III only',
              'Mechanisms I and II'
            ],
            correctAnswer: 0,
            explanation: 'Mech I: Step 1 slow → rate = k[A][B] ✓ (matches experiment). Sum: 2A + B → C + D ✓. Mech II: rate = k[A]$ {}^{2}$[B] ✗ (doesn\'t match — should be first order in A). Mech III: rate = k[A]$ {}^{2}$ ✗ (doesn\'t match — missing [B]).'
          },
          {
            question: 'A mechanism passes both criteria. This means the mechanism is:',
            options: [
              'Proven to be correct',
              'Consistent with the data (but not proven)',
              'The only possible mechanism',
              'Thermodynamically favorable'
            ],
            correctAnswer: 1,
            explanation: 'A mechanism can be disproven but never definitively proven. Passing both criteria means it is consistent with experimental data, but other mechanisms might also be consistent.'
          }
        ]
      }
    },
    {
      id: 'rm5-practice-validation',
      type: 'dropdown-select' as const,
      content: `
**Validating Mechanisms Practice** 🔍

**Overall:** $\\text{H}_2 + \\text{I}_2 \\rightarrow 2\\text{HI}$
**Experimental:** Rate = $k[\\text{H}_2][\\text{I}_2]$

**Mechanism X:**
- Step 1: $\\text{I}_2 \\rightleftharpoons 2\\text{I}$ (fast)
- Step 2: $2\\text{I} + \\text{H}_2 \\rightarrow 2\\text{HI}$ (slow)

**Mechanism Y:**
- Step 1: $\\text{H}_2 + \\text{I}_2 \\rightarrow 2\\text{HI}$ (one step, slow)
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Does Mechanism X sum to the overall reaction?',
            options: ['Yes', 'No']
          },
          {
            label: 'Rate law from Mechanism X (after eliminating intermediate I)',
            options: ['rate = k[$H_{2}$][$I_{2}$]', 'rate = k[I]$ {}^{2}$[$H_{2}$]', 'rate = k[$H_{2}$]', 'rate = k[$I_{2}$]']
          },
          {
            label: 'Does Mechanism Y sum to the overall reaction?',
            options: ['Yes', 'No']
          },
          {
            label: 'Which mechanism(s) is/are consistent with the experimental rate law?',
            options: ['X only', 'Y only', 'Both X and Y', 'Neither']
          }
        ],
        correctAnswers: ['Yes', 'rate = k[$H_{2}$][$I_{2}$]', 'Yes', 'Both X and Y'],
        hint1: 'X: $I_{2}$ → 2I, then 2I + $H_{2}$ → 2HI. Sum: $H_{2}$ + $I_{2}$ → 2HI ✓.',
        hint2: 'X Step 2: rate = $k_{2}$[I]$ {}^{2}$[$H_{2}$]. [I] = (Keq[$I_{2}$])^(1/2). [I]$ {}^{2}$ = Keq[$I_{2}$]. Rate = $k_{2}Keq$[$H_{2}$][$I_{2}$] = k_obs[$H_{2}$][$I_{2}$].',
        hint3: 'Y: one step → rate = k[$H_{2}$][$I_{2}$]. Both give the same rate law!',
        explanation: 'Both mechanisms sum correctly and both predict rate = k[$H_{2}$][$I_{2}$]. This illustrates that multiple mechanisms can be consistent with the same data — we cannot distinguish between them from rate law alone.'
      }
    },
    {
      id: 'rm5-common-mistakes',
      type: 'text' as const,
      content: `
## 📌 Common AP Mistakes to Avoid

> ⚠️ **Warning:** Don\'t confuse **order** (experimental: can be 0, 1, 2, fractional) with **molecularity** (theoretical: must be 1, 2, or 3). They are equal ONLY for elementary steps.


---

> ⚠️ **Warning:** The rate law for an overall reaction must be determined **experimentally**. Only for elementary steps can you write the rate law from stoichiometry.


---

> ⚠️ **Warning:** The final rate law should contain only reactants (and catalysts). If your rate law has an intermediate, you need to eliminate it.


---

> ⚠️ **Warning:** A mechanism that gives the correct rate law but doesn\'t sum to the overall equation is INVALID (and vice versa). Always check **both** criteria.
      `
    },
    {
      id: 'rm5-comprehensive-check',
      type: 'input-boxes' as const,
      content: `
**Mechanism Validation Check** 🧮

**Overall:** $\\text{A} + 2\\text{B} \\rightarrow \\text{C}$
**Experimental:** Rate = $k[\\text{A}][\\text{B}]$

**Proposed mechanism:**
- Step 1: $\\text{A} + \\text{B} \\rightarrow \\text{D}$ (slow)
- Step 2: $\\text{D} + \\text{B} \\rightarrow \\text{C}$ (fast)

**1)** Do the steps sum to A + 2B → C? (yes or no)

**2)** What is the predicted rate law from the RDS? (enter in form: k[X][Y] — use brackets)

**3)** Does the predicted rate law match the experimental rate law? (yes or no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['yes', 'k[A][B]', 'yes'],
        hint1: 'Step 1 + Step 2: A + B + D + B → D + C. Cancel D: A + 2B → C ✓.',
        hint2: 'Step 1 (slow): A + B → D. Rate = $k_{1}$[A][B].',
        hint3: '$k_{1}$[A][B] matches experimental k[A][B] ✓.',
        explanation: '1) A + B + D + B → D + C. Cancel D: A + 2B → C ✓. 2) RDS = Step 1: rate = k[A][B]. 3) Matches experimental rate law ✓. Mechanism is valid!'
      }
    },
    {
      id: 'rm5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Validating Mechanisms** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A proposed mechanism gives rate = k[A]$ {}^{2}$ but the experimental rate law is rate = k[A][B]. The mechanism is:',
            options: [
              'Valid because it satisfies Criterion 1',
              'Invalid because the rate law doesn\'t match',
              'Valid if the steps sum correctly',
              'Uncertain — need more data'
            ],
            correctAnswer: 1,
            explanation: 'The mechanism fails Criterion 2 (rate law mismatch). Even if the steps sum correctly (Criterion 1), BOTH criteria must be met. This mechanism is definitively invalid.'
          },
          {
            question: 'Two different mechanisms both satisfy the two criteria. What can we conclude?',
            options: [
              'Both are correct',
              'The simpler one is correct',
              'We cannot distinguish between them with rate law data alone',
              'Neither is correct'
            ],
            correctAnswer: 2,
            explanation: 'When multiple mechanisms are consistent with the data, additional experiments (e.g., detecting intermediates, isotope labeling) are needed to distinguish between them.'
          }
        ]
      }
    }
  ]
}
