export const chemEnthalpyCalorimetryPart7Data = {
  topicSlug: 'enthalpy-calorimetry',
  sections: [
    {
      id: 'eh7-intro',
      type: 'text' as const,
      content: `# 🎯 Synthesis & AP Review — Enthalpy and Calorimetry

**Part 7 of 7 — Bringing It All Together**

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
      id: 'eh7-summary',
      type: 'text' as const,
      content: `
## 📌 Complete Concept Map

### Energy and Heat

| Concept | Key Equation | Notes |
|---------|-------------|-------|
| Heat transfer | $q = mc\\Delta T$ | Specific heat version |
| Coffee-cup calorimeter | $q_p = \\Delta H$ | Constant pressure |
| Bomb calorimeter | $q_v = \\Delta E$ | Constant volume |
| Calorimeter heat | $q_{\\text{cal}} = C_{\\text{cal}}\\Delta T$ | Total heat capacity |


---

### Enthalpy

| Concept | Key Relationship | Notes |
|---------|-----------------|-------|
| Exothermic | $\\Delta H < 0$ | System releases heat |
| Endothermic | $\\Delta H > 0$ | System absorbs heat |
| Reverse reaction | $\\Delta H_{\\text{rev}} = -\\Delta H_{\\text{fwd}}$ | Sign change |
| Scaled reaction | $\\Delta H_{\\text{new}} = n \\cdot \\Delta H$ | Linear scaling |


---

### Hess's Law & Formation

| Method | Equation |
|--------|----------|
| Hess\'s Law | $\\Delta H_{\\text{total}} = \\sum \\Delta H_{\\text{steps}}$ |
| Formation enthalpies | $\\Delta H°_{\\text{rxn}} = \\sum n \\cdot \\Delta H°_f(\\text{products}) - \\sum m \\cdot \\Delta H°_f(\\text{reactants})$ |
      `
    },
    {
      id: 'eh7-ap-strategies',
      type: 'text' as const,
      content: `
## 🎯 AP Exam Strategies

### Common AP Question Types

1. **Calorimetry calculation** — given mass, specific heat, ΔT → find q → find ΔH per mole
2. **Hess\'s Law** — manipulate 2-3 reactions to find ΔH for a target reaction
3. **Formation enthalpy** — use the master equation with a table of $\\Delta H°_f$ values
4. **Conceptual** — identify exo/endothermic, explain sign conventions, predict temperature changes


---

### Common Mistakes to Avoid

- Forgetting to flip the sign of ΔH when reversing a reaction
- Using specific heat ($c$) when heat capacity ($C$) is given (or vice versa)
- Forgetting that $\\Delta H°_f = 0$ for elements in their standard states
- Mixing up $q_{\\text{rxn}}$ and $q_{\\text{solution}}$ (they have opposite signs)
- Not converting between J and kJ

> ⚠️ **Unit Warning:** $q = mc\\Delta T$ gives joules. $\\Delta H°_f$ values are in kJ/mol. Always check your units before combining!
      `
    },
    {
      id: 'eh7-comprehensive-quiz',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive AP Review Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 5.00 g sample of propane (C₃H₈, molar mass = 44.1 g/mol) is burned in a bomb calorimeter (C_cal = 12.0 kJ/°C), causing a 7.30°C temperature rise. The molar energy of combustion is approximately:',
            options: [
              '−773 kJ/mol',
              '−2220 kJ/mol',
              '−87.6 kJ/mol',
              '+773 kJ/mol'
            ],
            correctAnswer: 0,
            explanation: '$q_{\\text{cal}} = (12.0)(7.30) = 87.6$ kJ. $q_{\\text{rxn}} = -87.6$ kJ. Moles = $5.00/44.1 = 0.1134$ mol. $\\Delta E = -87.6/0.1134 = -773$ kJ/mol.'
          },
          {
            question: 'Given: (1) 2Fe(s) + 3/2 O₂(g) → Fe₂O₃(s), ΔH = −824 kJ and (2) 2Al(s) + 3/2 O₂(g) → Al₂O₃(s), ΔH = −1676 kJ. What is ΔH for Fe₂O₃(s) + 2Al(s) → Al₂O₃(s) + 2Fe(s)?',
            options: [
              '−852 kJ',
              '+852 kJ',
              '−2500 kJ',
              '+2500 kJ'
            ],
            correctAnswer: 0,
            explanation: 'Reverse (1): Fe₂O₃ → 2Fe + 3/2 O₂, ΔH = +824 kJ. Keep (2): 2Al + 3/2 O₂ → Al₂O₃, ΔH = −1676 kJ. Add: $+824 + (-1676) = -852$ kJ.'
          },
          {
            question: 'Which statement about $\\Delta H°_f$ is correct?',
            options: [
              '$\\Delta H°_f$ for H₂O(g) and H₂O(l) are the same',
              '$\\Delta H°_f$ for O₃(g) is zero',
              '$\\Delta H°_f$ for an element in its standard state is zero',
              '$\\Delta H°_f$ is always negative'
            ],
            correctAnswer: 2,
            explanation: 'By definition, $\\Delta H°_f = 0$ for elements in their standard states. O₃ is NOT the standard state of oxygen (O₂ is), so $\\Delta H°_f$(O₃) ≠ 0. H₂O(g) and H₂O(l) have different ΔH°_f values. Many compounds have positive $\\Delta H°_f$.'
          }
        ]
      }
    },
    {
      id: 'eh7-integration-drill',
      type: 'input-boxes' as const,
      content: `
**Integration Problems** 🧮

**1)** 150.0 mL of 2.00 M HCl reacts with excess NaOH in a coffee-cup calorimeter. The temperature rises by 13.4°C. Assume the solution\'s mass is 150.0 g and $c = 4.184$ J/(g·°C). What is $\\Delta H$ per mole of HCl? (in kJ/mol, to 3 significant figures, include sign)

**2)** Using the $\\Delta H°_f$ values below, calculate $\\Delta H°_{\\text{rxn}}$ for $\\text{C}_3\\text{H}_8(g) + 5\\text{O}_2(g) \\rightarrow 3\\text{CO}_2(g) + 4\\text{H}_2\\text{O}(l)$. (in kJ)

| Substance | $\\Delta H°_f$ (kJ/mol) |
|---|---|
| $\\text{CO}_2(g)$ | $-393.5$ |
| $\\text{H}_2\\text{O}(l)$ | $-285.8$ |
| $\\text{C}_3\\text{H}_8(g)$ | $-103.8$ |
      `,
      exercise: {
        boxes: 2,
        correctAnswers: ['-28.0', '-2220.0'],
        hint1: '$q = mc\\Delta T$ (for solution), then $q_{\\text{rxn}} = -q_{\\text{sol}}$, then divide by moles of HCl.',
        hint2: '$[3(-393.5) + 4(-285.8)] - [(-103.8) + 5(0)]$',
        explanation: '1) $q_{\\text{sol}} = (150.0)(4.184)(13.4) = 8409.8$ J = 8.41 kJ. $q_{\\text{rxn}} = -8.41$ kJ. Moles HCl = $(0.1500)(2.00) = 0.300$ mol. $\\Delta H = -8.41/0.300 = -28.0$ kJ/mol. 2) $[3(-393.5) + 4(-285.8)] - [-103.8] = [-1180.5 - 1143.2] + 103.8 = -2323.7 + 103.8 = -2219.9 \\approx -2220.0$ kJ.'
      }
    },
    {
      id: 'eh7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Comprehensive Concept Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A coffee-cup calorimeter directly measures',
            options: ['ΔE', 'ΔH', 'ΔG', 'ΔS']
          },
          {
            label: 'The $\\Delta H°_f$ for O₃(g) is',
            options: ['zero', 'positive', 'negative', 'undefined']
          },
          {
            label: 'Hess\'s Law is a consequence of enthalpy being a',
            options: ['path function', 'state function', 'vector quantity', 'constant']
          },
          {
            label: 'Dissolving NH₄NO₃ in water cools the solution. This process is',
            options: ['exothermic', 'endothermic', 'isothermal', 'adiabatic']
          }
        ],
        correctAnswers: ['ΔH', 'positive', 'state function', 'endothermic'],
        hint1: 'Coffee-cup operates at constant pressure.',
        hint2: 'O₃ is NOT the standard state of oxygen — forming it requires energy.',
        hint3: 'State functions depend only on initial and final states.',
        explanation: 'Coffee-cup at constant pressure measures ΔH. O₃ has positive ΔH°_f (ozone is less stable than O₂). Hess\'s Law works because ΔH is path-independent. Cooling the solution means the system absorbed heat (endothermic).'
      }
    },
    {
      id: 'eh7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Thermochemistry Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction has ΔH = −200 kJ. If the reaction occurs in reverse and the coefficients are tripled, ΔH for the new reaction is:',
            options: [
              '−600 kJ',
              '+600 kJ',
              '−66.7 kJ',
              '+200 kJ'
            ],
            correctAnswer: 1,
            explanation: 'Reversing: $\\Delta H = +200$ kJ. Tripling: $\\Delta H = 3 \\times 200 = +600$ kJ.'
          },
          {
            question: 'An AP free-response asks you to calculate ΔH°_rxn. You are given a table of ΔH°_f values. The correct formula is:',
            options: [
              'ΔH° = Σ ΔH°_f(reactants) − Σ ΔH°_f(products)',
              'ΔH° = Σ n·ΔH°_f(products) − Σ m·ΔH°_f(reactants)',
              'ΔH° = Σ ΔH°_f(products) × Σ ΔH°_f(reactants)',
              'ΔH° = Σ ΔH°_f(products) + Σ ΔH°_f(reactants)'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta H°_{\\text{rxn}} = \\sum n \\cdot \\Delta H°_f(\\text{products}) - \\sum m \\cdot \\Delta H°_f(\\text{reactants})$. Products minus reactants, each multiplied by their stoichiometric coefficients.'
          }
        ]
      }
    }
  ]
}
