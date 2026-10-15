export const chemGibbsFreeEnergyPart5Data = {
  topicSlug: 'gibbs-free-energy',
  sections: [
    {
      id: 'gf5-intro',
      type: 'text' as const,
      content: `# 📊 Free Energy, K, and Coupled Reactions

**Part 5 of 7 — Estimating K, Predicting Direction, and Coupling Reactions**

---

### Topics in This Part

| Section |
|---------|
| ⚡ Estimating K from ΔG° |
| 📌 Which Way Will a Reaction Go? Q vs. K |
| 🔗 Coupled Reactions |
| External Energy Sources |

> 🔑 **Key Concept:** $\\Delta G°$ tells you where equilibrium lies (the size of $K$). Comparing $Q$ with $K$ tells you which way a particular mixture will shift. Coupling lets a favorable reaction drive an unfavorable one (CED 9.5, 9.7).

---

### What You'll Master in Part 5
- Estimating whether $K$ is near 1 or far from 1 from the size of $\\Delta G°$
- Predicting the direction of net reaction by comparing $Q$ and $K$
- Explaining how coupled reactions and external energy drive unfavorable processes`
    },
    {
      id: 'gf5-estimating-k',
      type: 'text' as const,
      content: `
## ⚡ Estimating K from ΔG°

From Part 4, $K = e^{-\\Delta G°/RT}$. You can often reason about $K$ without a calculator (CED 9.5.A.3):

- When $\\Delta G°$ is **near zero**, $K$ is **close to 1**.
- When $\\Delta G°$ is **much larger or smaller than $RT$**, $K$ is **far from 1**.

At 298 K, $RT \\approx 2.5$ kJ/mol. Every change of about **5.7 kJ/mol** in $\\Delta G°$ changes $K$ by a **factor of 10**.

| $\\Delta G°$ at 298 K (kJ/mol) | Approximate $K$ | Position of equilibrium |
|------------------------------|-----------------|------------------------|
| −40 | $10^{7}$ | Products strongly favored |
| −11 | $10^{2}$ | Products favored |
| 0 | 1 | Neither favored |
| +11 | $10^{-2}$ | Reactants favored |
| +40 | $10^{-7}$ | Reactants strongly favored |

> 💡 **Tip:** A few kJ/mol either side of zero gives a $K$ within a factor of about 10 of 1, so both reactants and products are present in significant amounts at equilibrium.
      `
    },
    {
      id: 'gf5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Estimating K** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'At 298 K, a reaction has ΔG° = +1.5 kJ/mol. Which best describes its equilibrium constant?',
            options: [
              'K is much greater than 1',
              'K is slightly less than 1',
              'K is exactly zero',
              'K is much less than 1'
            ],
            correctAnswer: 1,
            explanation: 'ΔG° is positive but smaller than RT (about 2.5 kJ/mol), so K is a little below 1: K = e^(−1500/2478) ≈ 0.55. A K far from 1 would require a ΔG° many times larger than RT, and K is never zero.'
          },
          {
            question: 'Which value of ΔG° at 298 K corresponds to the LARGEST equilibrium constant?',
            options: [
              '+25 kJ/mol',
              '0 kJ/mol',
              '−5 kJ/mol',
              '−30 kJ/mol'
            ],
            correctAnswer: 3,
            explanation: 'The more negative ΔG° is, the larger K is. −30 kJ/mol gives K ≈ 10^5, while −5 kJ/mol gives K ≈ 7, 0 gives K = 1, and +25 kJ/mol gives K far below 1.'
          },
          {
            question: 'A reaction has ΔG° = −57 kJ/mol at 298 K. Roughly how large is K?',
            options: [
              'About 10',
              'About $10^{3}$',
              'About $10^{10}$',
              'About $10^{57}$'
            ],
            correctAnswer: 2,
            explanation: 'Each 5.7 kJ/mol of ΔG° changes K by a factor of 10 at 298 K, so −57 kJ/mol corresponds to K ≈ 10^10. Treating each kJ/mol as a power of ten gives 10^57, and the smaller values badly underestimate the effect of a large negative ΔG°.'
          }
        ]
      }
    },
    {
      id: 'gf5-q-vs-k',
      type: 'text' as const,
      content: `
## 📌 Which Way Will a Reaction Go? Q vs. K

$\\Delta G°$ and $K$ describe the equilibrium position under standard conditions. To predict what a **particular mixture** will do, compare the reaction quotient $Q$ (same expression as $K$, using the current amounts) with $K$:

| Comparison | What happens |
|------------|--------------|
| $Q < K$ | Net reaction proceeds **forward** (toward products) |
| $Q = K$ | The system is at equilibrium; no net change |
| $Q > K$ | Net reaction proceeds in **reverse** (toward reactants) |

> 🔑 **Key Concept:** A reaction with $\\Delta G° > 0$ (so $K < 1$) still makes **some** product when you start with only reactants, because then $Q = 0 < K$. It simply stops at an equilibrium that favors the reactants.

> ⚠️ **Note:** Some textbooks also use the equation $\\Delta G = \\Delta G° + RT\\ln Q$. It is not used on the AP exam; comparing $Q$ with $K$ answers the same direction question.
      `
    },
    {
      id: 'gf5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**K and Direction** 🧮

A reaction has $\\Delta G° = -11.4$ kJ/mol at 298 K. ($R = 8.314$ J/(mol·K))

**1)** Calculate $K$ using $K = e^{-\\Delta G°/RT}$. (3 significant figures)

**2)** A mixture has $Q = 50$. Which way does the net reaction go? (type **forward** or **reverse**)

**3)** Another mixture has $Q = 500$. Which way does the net reaction go? (type **forward** or **reverse**)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['99.6', 'forward', 'reverse'],
        hint1: '$\\Delta G°/RT = -11{,}400/(8.314 \\times 298) = -4.60$; $K = e^{4.60}$.',
        hint2: 'Compare 50 with K.',
        hint3: 'Compare 500 with K.',
        explanation: '1) $K = e^{4.60} \\approx 99.6$ (about $10^2$, as the 5.7 kJ/mol rule predicts). 2) $Q = 50 < K$, so the reaction proceeds forward. 3) $Q = 500 > K$, so the reaction proceeds in reverse.'
      }
    },
    {
      id: 'gf5-coupled',
      type: 'text' as const,
      content: `
## 🔗 Coupled Reactions

A thermodynamically unfavorable reaction ($\\Delta G° > 0$) can be made to occur by **coupling** it to a favorable reaction. The two reactions share a **common intermediate**, and their sum has $\\Delta G° < 0$ (CED 9.7.A.2).

### Example: Extracting Copper

| Reaction | $\\Delta G°$ (kJ) |
|----------|-----------------|
| $\\text{Cu}_2\\text{S}(s) \\rightarrow 2\\text{Cu}(s) + \\text{S}(s)$ | +86.2 (unfavorable) |
| $\\text{S}(s) + \\text{O}_2(g) \\rightarrow \\text{SO}_2(g)$ | −300.1 (favorable) |
| **Sum:** $\\text{Cu}_2\\text{S}(s) + \\text{O}_2(g) \\rightarrow 2\\text{Cu}(s) + \\text{SO}_2(g)$ | **−213.9** (favorable) |

Sulfur is the common intermediate: produced in the first reaction and consumed in the second. Because $\\Delta G°$ values add when equations add, the overall process is favored.

### Example: ATP in Living Cells

The hydrolysis of ATP to ADP ($\\Delta G° \\approx -30.5$ kJ/mol) is coupled to unfavorable biological reactions such as adding a phosphate group to glucose ($\\Delta G° \\approx +13.8$ kJ/mol). The overall coupled process has $\\Delta G° \\approx -16.7$ kJ/mol.


---

### External Energy Sources

An unfavorable process can also be driven by energy from outside the system (CED 9.7.A.1):

- **Electrical energy** drives an electrolytic cell or charges a battery.
- **Light** drives photosynthesis, converting $\\text{CO}_2$ and $\\text{H}_2\\text{O}$ into glucose.
      `
    },
    {
      id: 'gf5-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Free Energy and Equilibrium Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When Q = K, the system is',
            options: ['shifting forward', 'at equilibrium', 'shifting in reverse', 'unable to react']
          },
          {
            label: 'When Q < K, the net reaction proceeds',
            options: ['forward', 'in reverse', 'not at all', 'both ways equally']
          },
          {
            label: 'When two reactions are added, the ΔG° of the overall reaction is',
            options: ['the product of the two ΔG° values', 'the sum of the two ΔG° values', 'the larger of the two values', 'always zero']
          },
          {
            label: 'Photosynthesis is an unfavorable process driven by',
            options: ['heat from the surroundings', 'light energy', 'a catalyst alone', 'a negative ΔH']
          }
        ],
        correctAnswers: ['at equilibrium', 'forward', 'the sum of the two ΔG° values', 'light energy'],
        hint1: 'Q equals K only at equilibrium.',
        hint2: 'Too little product compared with equilibrium.',
        hint3: 'Like ΔH in Hess\'s law.',
        explanation: 'Q = K means equilibrium. Q < K means there is too little product, so the reaction runs forward. ΔG° values add when equations add, which is why coupling works. Photosynthesis is driven by light (CED 9.7.A.1).'
      }
    },
    {
      id: 'gf5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Free Energy and Equilibrium** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Reaction 1 has ΔG° = +25 kJ and reaction 2 has ΔG° = −40 kJ. They share a common intermediate and add to give an overall reaction. What is true of the overall reaction?',
            options: [
              'ΔG° = +65 kJ, so it is not favored',
              'ΔG° = −15 kJ, so it is thermodynamically favored',
              'ΔG° = −1000 kJ, so it is strongly favored',
              'ΔG° = +25 kJ, because the unfavorable step controls it'
            ],
            correctAnswer: 1,
            explanation: 'ΔG° values add: +25 + (−40) = −15 kJ, so the coupled reaction is favored. Subtracting gives +65 kJ, multiplying gives −1000 kJ, and the unfavorable step does not set the overall ΔG°.'
          },
          {
            question: 'A reaction has ΔG° = +20 kJ/mol at 298 K. A flask initially contains only reactants. What happens?',
            options: [
              'Nothing, because ΔG° is positive',
              'Some product forms until Q = K, and reactants remain favored',
              'The reaction goes to completion, because Q = 0',
              'The reverse reaction occurs, because K < 1'
            ],
            correctAnswer: 1,
            explanation: 'K = e^(−20,000/2478) ≈ 3 × 10^−4, which is small but not zero. With only reactants, Q = 0 < K, so a small amount of product forms until Q = K. A positive ΔG° means reactants are favored at equilibrium, not that no reaction occurs; Q = 0 does not force completion, and there is no product to react in reverse.'
          }
        ]
      }
    }
  ]
}
