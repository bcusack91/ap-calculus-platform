export const chemElectrolyticCellsFaradayPart7Data = {
  topicSlug: 'electrolytic-cells-faraday',
  sections: [
    {
      id: 'ef7-intro',
      type: 'text' as const,
      content: `# 🎯 Synthesis & AP Review — Electrolytic Cells and Faraday

**Part 7 of 7 — Complete Mastery**

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
      id: 'ef7-master-summary',
      type: 'text' as const,
      content: `
## 📋 Master Summary

### Galvanic vs. Electrolytic

| | Galvanic | Electrolytic |
|--|:--------:|:------------:|
| $\\Delta G$ | $< 0$ | $> 0$ |
| $E_{\\text{cell}}$ | $> 0$ | $< 0$ |
| Energy | Chemical → Electrical | Electrical → Chemical |
| Anode | − | + |
| Cathode | + | − |

> 💡 **Memory Trick:** In both cell types, the anode is where oxidation occurs (AN OX) and the cathode is where reduction occurs (RED CAT). Only the signs flip!


---

### Predicting Aqueous Electrolysis Products

**Cathode:** Metal deposits if $E°_{\\text{metal}} > -0.83$ V; otherwise H₂

**Anode:** Halide → halogen; oxyanion/F⁻ → O₂

> 🔑 **AP Quick Check:** If the metal is above H₂ in the activity series (active metals like Na, K, Al), then H₂ forms at the cathode instead of the metal.


---

### Faraday\'s Law

$$\\boxed{m = \\frac{ItM}{nF}}$$

$$q = It \\quad \\text{mol } e^- = \\frac{q}{F} \\quad \\text{mol substance} = \\frac{\\text{mol } e^-}{n}$$


---

### Industrial Applications

| Process | Input | Product |
|---------|-------|---------|
| Hall-Héroult | Al₂O₃ in cryolite | Al metal |
| Chlor-alkali | NaCl(aq) | Cl₂, H₂, NaOH |
| Electrorefining | Impure Cu | 99.99% pure Cu |
| Electroplating | Metal ion solution | Metal-coated object |
      `
    },
    {
      id: 'ef7-comprehensive-quiz',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive AP Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student electrolyzes aqueous CuCl₂. At which electrode does each product form?',
            options: [
              'Cathode: H₂, Anode: O₂',
              'Cathode: Cu, Anode: Cl₂',
              'Cathode: Cu, Anode: O₂',
              'Cathode: H₂, Anode: Cl₂'
            ],
            correctAnswer: 1,
            explanation: 'Cu²⁺ has $E° = +0.34$ V (more positive than water), so Cu deposits at the cathode. Cl⁻ is a simple halide, so Cl₂ forms at the anode.'
          },
          {
            question: 'In ALL electrochemical cells, reduction occurs at the:',
            options: [
              'Anode',
              'Cathode',
              'Salt bridge',
              'External circuit'
            ],
            correctAnswer: 1,
            explanation: 'RED CAT — reduction at the cathode. This is a universal rule for all electrochemical cells (galvanic, electrolytic, concentration, fuel cells).'
          },
          {
            question: 'A current of 1.50 A deposits 1.00 g of a metal (M = 63.55 g/mol, n = 2). How long did it take?',
            options: [
              '33.7 min',
              '16.8 min',
              '67.4 min',
              '50.6 min'
            ],
            correctAnswer: 1,
            explanation: 'mol = $1.00/63.55 = 0.01573$. mol $e^- = 0.01573 \\times 2 = 0.03147$. $q = 0.03147 \\times 96{,}485 = 3036$ C. $t = 3036/1.50 = 2024$ s $= 33.7$ min. Wait — let me recalculate: $t = 2024$ s $= 33.7$ min. Hmm, checking: 2024/60 = 33.7 min.'
          }
        ]
      }
    },
    {
      id: 'ef7-integration-drill',
      type: 'input-boxes' as const,
      content: `
**Integration Problems** 🧮

**1)** How many grams of Al can be produced from Al³⁺ ($n = 3$, $M = 26.98$ g/mol) using $I = 100$ A for $1.00$ hour?

**2)** In the electrolysis of aqueous NaI, what gas forms at the cathode? (type "H2" or "O2" or "Na")

**3)** In the electrolysis of aqueous NaI, what forms at the anode? (type "I2" or "O2" or "Na")

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['33.6', 'H2', 'I2'],
        hint1: '$m = (100)(3600)(26.98)/((3)(96485))$',
        hint2: 'Na⁺ is too reactive to deposit from water.',
        hint3: 'I⁻ is a simple halide.',
        explanation: '1) $m = 360{,}000 \\times 26.98/(3 \\times 96{,}485) = 9{,}712{,}800/289{,}455 = 33.6$ g. 2) Na⁺ has E° = −2.71 V << −0.83 V → H₂ forms. 3) I⁻ is a halide → I₂ forms at the anode.'
      }
    },
    {
      id: 'ef7-dropdown-review',
      type: 'dropdown-select' as const,
      content: `
**Final Concept Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'AN OX and RED CAT apply to',
            options: ['only galvanic cells', 'only electrolytic cells', 'all electrochemical cells', 'neither type']
          },
          {
            label: 'Faraday\'s constant F equals the charge of',
            options: ['one electron', 'one proton', 'one mole of electrons', 'one coulomb']
          },
          {
            label: 'In a lead-acid battery being recharged, the process is',
            options: ['galvanic', 'electrolytic', 'neither', 'both simultaneously']
          },
          {
            label: 'To electroplate an object with gold, the object should be the',
            options: ['anode', 'cathode', 'electrolyte', 'power supply']
          }
        ],
        correctAnswers: ['all electrochemical cells', 'one mole of electrons', 'electrolytic', 'cathode'],
        hint1: 'AN OX and RED CAT are universal rules.',
        hint2: 'F = 96,485 C/mol e⁻.',
        hint3: 'Charging = forcing the non-spontaneous reverse reaction.',
        explanation: 'AN OX/RED CAT: universal. F = charge of 1 mol e⁻. Charging = electrolysis. Plating object = cathode (where metal deposits).'
      }
    },
    {
      id: 'ef7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Electrolysis Mastery** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Three cells in series electrolyze solutions of AgNO₃ (n=1), Cu(NO₃)₂ (n=2), and Au(NO₃)₃ (n=3). If 1.00 mol of Ag deposits, how much Au deposits?',
            options: [
              '1.00 mol',
              '0.500 mol',
              '0.333 mol',
              '3.00 mol'
            ],
            correctAnswer: 2,
            explanation: 'In series: same charge flows through all cells. 1.00 mol Ag needs 1.00 mol e⁻. In the Au cell ($n = 3$): mol Au = $1.00/3 = 0.333$ mol.'
          },
          {
            question: 'Which best summarizes the relationship between galvanic and electrolytic cells?',
            options: [
              'They are completely different processes with no connection',
              'They are the same process viewed from different perspectives',
              'Galvanic cells produce electricity from spontaneous reactions; electrolytic cells use electricity to drive non-spontaneous reactions',
              'Galvanic cells require a power source; electrolytic cells do not'
            ],
            correctAnswer: 2,
            explanation: 'Galvanic: spontaneous → produces electricity. Electrolytic: uses electricity → forces non-spontaneous reactions. They are complementary processes — a rechargeable battery switches between both modes!'
          }
        ]
      }
    }
  ]
}
