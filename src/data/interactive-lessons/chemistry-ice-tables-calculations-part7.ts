export const chemIceTablesCalculationsPart7Data = {
  topicSlug: 'ice-tables-calculations',
  sections: [
    {
      id: 'ic7-intro',
      type: 'text' as const,
      content: `# 🎓 Synthesis & AP Review

**Part 7 of 7 — ICE Tables and Equilibrium Calculations**

---

### Bringing It All Together

This comprehensive review connects every concept from Parts 1–6 with AP-style problems. The questions are designed to mirror what you'll see on the actual exam — multi-step, multi-concept, and requiring clear written explanations.

> 🔑 **Why this matters:** AP Chemistry exam questions rarely test one concept in isolation — success requires connecting ideas across topics.

---

### What You'll Master in Part 7
- Solving AP-style questions that integrate multiple concepts from this unit
- Writing clear, concise explanations using proper chemistry terminology
- Identifying and avoiding common AP exam traps and mistakes`
    },
    {
      id: 'ic7-summary',
      type: 'text' as const,
      content: `
## 📋 Complete ICE Table Summary

### The ICE Table

|  | Reactant | Product |
|--|----------|---------|
| **I** | Initial concentration | Initial concentration (often 0) |
| **C** | $-($coeff$)(x)$ | $+($coeff$)(x)$ |
| **E** | I + C | I + C |


---

### Problem Types

| Given | Find | Method |
|-------|------|--------|
| All equilibrium conc. | K | Plug directly into K expression |
| Initial + one eq. conc. | K | Find x from ICE, then all eq. conc., then K |
| K + initial conc. | Eq. conc. | Full ICE → solve for x |


---

### Solving Strategies

| Condition | Strategy |
|-----------|----------|
| Perfect square | Take square root |
| $K$ very small vs. $[\\text{init}]$ | Small-x approximation, then check $x < 5\\%$ of $[\\text{init}]$ |
| $K$ not small vs. $[\\text{init}]$ | Full quadratic |
| Approx gives > 5% | Switch to quadratic |


---

### Key Formulas

$$\\boxed{E = I + C \\quad \\text{(for each species)}}$$

$$\\boxed{\\frac{x}{[\\text{initial}]} \\times 100\\% < 5\\% \\quad \\text{(validation test)}}$$


---

> 🔑 **Verification:** Always check — plug equilibrium concentrations back into the K expression. The calculated K should match the given K.


---

> 💡 **Tip:** For a quick mental check, confirm all equilibrium concentrations are non-negative and that the shift direction is consistent with $Q$ vs $K$.


---

> ⚠️ **Warning:** The most common ICE table error is forgetting that stoichiometric coefficients multiply $x$ in the Change row — e.g., for $2\\text{A} \\rightleftharpoons \\text{B}$, $\\Delta[\\text{A}] = -2x$, not $-x$.
      `
    },
    {
      id: 'ic7-ap-mc1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{PCl}_5(g) \\rightleftharpoons \\text{PCl}_3(g) + \\text{Cl}_2(g)$, $K_c = 0.042$. If 1.00 mol $PCl_{5}$ is placed in a 10.0 L flask, what approach is best?',
            options: [
              'Use the 5% approximation ($[\\text{init}]/K = 0.10/0.042 = 2.4 < 100$)',
              'Use the quadratic formula ($[\\text{init}]/K = 2.4 < 100$)',
              'Plug directly into K (all eq. conc. are known)',
              'No calculation needed'
            ],
            correctAnswer: 1,
            explanation: '$[\\text{PCl}_5]_0 = 1.00/10.0 = 0.10$ M. $0.10/0.042 = 2.4 < 100$. The ratio is too small for the approximation, so the quadratic formula is needed.'
          },
          {
            question: 'In an ICE table for $\\text{A} \\rightleftharpoons \\text{B} + \\text{C}$, the change row shows $-x$, $+x$, $+x$. This assumes the reaction shifts:',
            options: [
              'Left, toward reactant A',
              'Right, toward B and C',
              'Neither; the system is already at equilibrium',
              'Both directions equally, so x cancels out'
            ],
            correctAnswer: 1,
            explanation: 'Reactant A decreases ($-x$) and products B, C increase ($+x$). This corresponds to a rightward shift (forward reaction).'
          },
          {
            question: 'After solving an ICE problem, a student gets $[\\text{B}] = -0.10$ M. What should the student do?',
            options: [
              'Report −0.10 M; the sign shows B is being consumed',
              'Take the absolute value and report 0.10 M',
              'Recheck the work — likely the wrong quadratic root or the wrong shift direction',
              'Set [B] = 0 M, since the reaction must not occur'
            ],
            correctAnswer: 2,
            explanation: 'A negative concentration is physically impossible. The student should check: (1) Did they pick the correct root of the quadratic? (2) Did they assume the correct direction of shift? (3) Is there an arithmetic error?'
          }
        ]
      }
    },
    {
      id: 'ic7-ap-frq',
      type: 'input-boxes' as const,
      content: `
**AP Free-Response Style** 🧮

> **Problem:** For $\\text{CO}(g) + \\text{Cl}_2(g) \\rightleftharpoons \\text{COCl}_2(g)$ with $K_c = 255$ at 100°C, a 1.00 L flask is charged with 0.400 mol CO and 0.400 mol $Cl_{2}$. No $COCl_{2}$ is initially present.

**1)** Write the K expression and set up the ICE table. What is $[\\text{COCl}_2]$ at equilibrium in terms of x? (Enter an expression in x, e.g., "0.400 - x")

**2)** The K expression becomes $255 = \\frac{x}{(0.400-x)^2}$. Because $K$ is large, $x$ is NOT small compared with 0.400. Must you avoid the small-x approximation $0.400 - x \\approx 0.400$ here (using the quadratic or a completion-and-back-calculate approach instead)? (Enter "yes" or "no")

**3)** Because $K$ is large, the reaction goes nearly to completion, so a useful approach is to let it go to completion first and then back-calculate. If the reaction goes to completion, how many moles of $COCl_{2}$ form? (Enter in mol)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['x', 'yes', '0.400'],
        hint1: '$COCl_{2}$ starts at 0 and gains $+x$.',
        hint2: 'With $K = 255$, the reaction goes far to the right, so $x$ ends up close to 0.400 — not small.',
        hint3: 'CO and $Cl_{2}$ are in a 1:1 ratio, both at 0.400 mol. They are equally limiting → 0.400 mol $COCl_{2}$.',
        explanation: '1) $[\\text{COCl}_2]_{eq} = x$. 2) Yes — when K is very large, the standard small-x approximation doesn\'t apply either; a quadratic or limiting-reagent approach is needed. 3) Both CO and $Cl_{2}$ start at 0.400 mol with 1:1 stoichiometry, so 0.400 mol $COCl_{2}$ can form at completion.'
      }
    },
    {
      id: 'ic7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The E row in an ICE table equals',
            options: ['I × C', 'I + C', 'I − C', 'I / C']
          },
          {
            label: 'The 5% approximation works best when K is',
            options: ['very large relative to initial concentration', 'small next to the initial concentration', 'close to 1, with reactants and products balanced', 'larger than the initial concentration of reactant']
          },
          {
            label: 'After solving for x, you should always',
            options: ['stop once x is found', 'check by substituting back into K', 'assume x is wrong and redo it', 'round x to a whole number']
          },
          {
            label: 'Stoichiometric coefficients in the C row appear as',
            options: ['exponents on x', 'multipliers of x', 'added terms', 'powers of K']
          }
        ],
        correctAnswers: [
          'I + C',
          'small next to the initial concentration',
          'check by substituting back into K',
          'multipliers of x'
        ],
        hint1: 'Equilibrium = Initial + Change.',
        hint2: 'Small K → small x → valid approximation.',
        hint3: 'Always verify your answer by checking against the given K.',
        explanation: 'E = I + C. Small K (relative to initial conc.) → valid approximation. Always verify by plugging back into K. Coefficients are multipliers of x in the C row.'
      }
    },
    {
      id: 'ic7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For $\\text{HA}(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{A}^-(aq)$, $K_a = 6.8 \\times 10^{-4}$, $[\\text{HA}]_0 = 0.10$ M. Using the approximation, $[\\text{H}^+]$ is:',
            options: [
              '$\\sqrt{(6.8 \\times 10^{-4})(0.10)} = 8.2 \\times 10^{-3}$ M',
              '$(6.8 \\times 10^{-4})(0.10) = 6.8 \\times 10^{-5}$ M',
              '$[\\text{HA}]_0 = 0.10$ M (complete ionization)',
              '$\\sqrt{6.8 \\times 10^{-4}} = 0.026$ M'
            ],
            correctAnswer: 0,
            explanation: '$K_a = x^2/[\\text{HA}]_0 \\implies x = \\sqrt{K_a \\times [\\text{HA}]_0} = \\sqrt{(6.8 \\times 10^{-4})(0.10)} = \\sqrt{6.8 \\times 10^{-5}} = 8.2 \\times 10^{-3}$ M. Forgetting the square root leaves $6.8 \\times 10^{-5}$ M, leaving out $[\\text{HA}]_0$ gives $\\sqrt{K_a} = 0.026$ M, and 0.10 M treats the weak acid as fully ionized. 5% check: $8.2 \\times 10^{-3}/0.10 = 8.2\\%$ — this slightly exceeds 5%, so the quadratic would be more accurate.'
          },
          {
            question: 'An ICE table will always give you:',
            options: [
              'The rate at which the system approaches equilibrium',
              'The equilibrium concentrations of all species',
              'The activation energy of the forward reaction step',
              'The enthalpy change for the reaction as it is written'
            ],
            correctAnswer: 1,
            explanation: 'ICE tables are designed to find equilibrium concentrations. They track how concentrations change from initial to equilibrium values. They do not provide kinetic information (rates, activation energy) or thermodynamic quantities like enthalpy.'
          }
        ]
      }
    }
  ]
}
