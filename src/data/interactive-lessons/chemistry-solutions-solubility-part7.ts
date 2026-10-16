export const chemSolutionsSolubilityPart7Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss7-intro',
      type: 'text' as const,
      content: `# 🎓 Synthesis & AP Review

**Part 7 of 7 — Connecting Solubility, Concentration, and Particle Representations**

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
      id: 'ss7-big-picture',
      type: 'text' as const,
      content: `
## 📌 The Big Picture

### How It All Connects

$$\\text{Does it dissolve? (IMFs)} \\rightarrow \\text{How much? (Molarity)} \\rightarrow \\text{What particles? (Ions vs. molecules)} \\rightarrow \\text{What reacts? (Precipitation)}$$


---

### Unit Summary

| Topic | Key Ideas |
|-------|-----------|
| **Solubility** | Like dissolves like; all $Na^{+}$, $K^{+}$, $NH_{4}^{+}$, and $NO_{3}^{-}$ salts are soluble |
| **Concentration** | Molarity $M = n/V$; mole fraction $\\chi$ |
| **Ions in solution** | $[\\text{ion}] = \\text{subscript} \\times M_{\\text{salt}}$; strong, weak, and nonelectrolytes |
| **Dilution** | $M_1V_1 = M_2V_2$; moles of solute remain constant |
| **Particle diagrams** | Correct ion ratio, charge balance, concentration as particles per volume, correct water orientation |
| **Mixing and precipitation** | Work in moles, find the limiting ion, divide by the combined volume |


---

### AP Exam Tips

- Always check whether the solute is an **electrolyte** or **nonelectrolyte**; this decides how many particles it makes
- Molarity uses liters of **solution**, not liters of solvent
- After mixing, divide by the **total** volume
- For free-response: show all work, label formulas, include units
      `
    },
    {
      id: 'ss7-ap-mcq-1',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 1** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Equal masses of NaCl ($\\mathcal{M} = 58.44$ g/mol) and $CaCl_{2}$ ($\\mathcal{M} = 110.98$ g/mol) are each dissolved to make 1.00 L of solution. Which solution has the greater chloride ion concentration?',
            options: [
              'The NaCl solution',
              'The $CaCl_{2}$ solution',
              'They are the same',
              'Cannot be determined without knowing the exact mass'
            ],
            correctAnswer: 1,
            explanation: 'Let the mass be $x$ grams. NaCl gives $x/58.44 = 0.0171x$ mol of $Cl^{-}$. $CaCl_{2}$ gives fewer formula units ($x/110.98$) but two chlorides each, $2x/110.98 = 0.0180x$ mol of $Cl^{-}$. Since $0.0180x > 0.0171x$ for any mass, the $CaCl_{2}$ solution has the greater chloride concentration.'
          },
          {
            question: 'A student dissolves a solid in water and the resulting solution does not conduct electricity. Which of the following could be the solute?',
            options: [
              'NaCl',
              '$Al_{2}(SO_{4})_{3}$',
              '$C_{6}H_{12}O_{6}$',
              'HCl'
            ],
            correctAnswer: 2,
            explanation: 'A solution that does not conduct electricity contains no ions — the solute is a nonelectrolyte. Glucose $(C_{6}H_{12}O_{6})$ dissolves as intact molecules and does not ionize. NaCl, $Al_{2}(SO_{4})_{3}$, and HCl all produce ions in water.'
          },
          {
            question: 'When $Ba(NO_{3})_{2}(aq)$ is mixed with $Na_{2}SO_{4}(aq)$, a white precipitate forms. The precipitate is:',
            options: [
              '$NaNO_{3}$',
              '$BaSO_{4}$',
              '$Ba(NO_{3})_{2}$',
              '$Na_{2}SO_{4}$'
            ],
            correctAnswer: 1,
            explanation: 'The two possible new pairings are $NaNO_{3}$ and $BaSO_{4}$. $NaNO_{3}$ contains $Na^{+}$ and $NO_{3}^{-}$, so it must stay dissolved, leaving $BaSO_{4}$ as the solid. The original reactants were already dissolved, so neither can be the new solid.'
          }
        ]
      }
    },
    {
      id: 'ss7-ap-mcq-2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice — Set 2** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Rank these 0.10 M aqueous solutions from lowest to highest total concentration of dissolved particles: I. $C_{6}H_{12}O_{6}$, II. NaCl, III. $CaCl_{2}$',
            options: [
              'I < II < III',
              'III < II < I',
              'I = II = III',
              'II < III < I'
            ],
            correctAnswer: 0,
            explanation: 'Glucose stays as molecules (0.10 M of particles), NaCl gives 2 ions per formula unit (0.20 M), and $CaCl_{2}$ gives 3 (0.30 M). From lowest to highest: I < II < III.'
          },
          {
            question: '250.0 mL of 0.400 M $Na_{2}SO_{4}$ is diluted to 1.000 L. What is $[Na^{+}]$ in the diluted solution?',
            options: [
              '0.800 M',
              '0.200 M',
              '0.100 M',
              '0.0500 M'
            ],
            correctAnswer: 1,
            explanation: '$M_2 = M_1V_1/V_2 = (0.400)(0.250)/(1.000) = 0.100$ M $Na_{2}SO_{4}$, and each formula unit releases two $Na^{+}$, so $[Na^{+}] = 2 \\times 0.100 = 0.200$ M. 0.100 M is the salt concentration, not the ion concentration; 0.800 M doubles the undiluted 0.400 M; and 0.0500 M halves instead of doubling.'
          },
          {
            question: 'A solution is made by mixing 0.50 mol of ethanol with 4.50 mol of water. What is the mole fraction of ethanol?',
            options: [
              '0.11',
              '0.50',
              '0.10',
              '0.90'
            ],
            correctAnswer: 2,
            explanation: '$\\chi_{\\text{ethanol}} = \\frac{n_{\\text{ethanol}}}{n_{\\text{total}}} = \\frac{0.50}{0.50 + 4.50} = \\frac{0.50}{5.00} = 0.10$. Dividing by the moles of water alone gives 0.11, 0.90 is the mole fraction of water, and 0.50 is the moles of ethanol, not a fraction.'
          }
        ]
      }
    },
    {
      id: 'ss7-comprehensive-calc',
      type: 'input-boxes' as const,
      content: `
**Comprehensive Calculations** 🧮

**1)** 9.52 g of $MgCl_{2}$ ($\\mathcal{M} = 95.21$ g/mol) is dissolved in enough water to make 200.0 mL of solution. What is $[Cl^{-}]$? (in M, to 3 significant figures)

**2)** How many mL of 12.0 M HCl must be diluted to prepare 500.0 mL of 0.600 M HCl? (to 3 significant figures)

**3)** 30.0 mL of 0.500 M $AgNO_{3}$ is mixed with 20.0 mL of 0.600 M NaCl, and AgCl precipitates. What is the concentration of $Ag^{+}$ left in solution? (in M, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.00', '25.0', '0.0600'],
        hint1: '$n = 9.52/95.21 = 0.1000$ mol $MgCl_{2}$; two $Cl^{-}$ per formula unit; divide by 0.2000 L.',
        hint2: '$V_1 = M_2V_2/M_1 = (0.600)(500.0)/(12.0)$.',
        hint3: 'Moles $Ag^{+}$ $= 0.0150$; moles $Cl^{-}$ $= 0.0120$. Excess $Ag^{+}$ in a total of 0.0500 L.',
        explanation: '1) $n = 0.1000$ mol, so $Cl^{-}$ $= 0.2000$ mol; $0.2000/0.2000 = 1.00$ M. 2) $V_1 = (0.600)(500.0)/(12.0) = 25.0$ mL. 3) $Ag^{+}$: $(0.500)(0.0300) = 0.0150$ mol; $Cl^{-}$: $(0.600)(0.0200) = 0.0120$ mol. Chloride limits, leaving $0.0030$ mol $Ag^{+}$ in 0.0500 L, so $[Ag^{+}] = 0.0600$ M.'
      }
    },
    {
      id: 'ss7-conceptual-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Conceptual Review** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A compound is soluble if it contains the cation $Na^{+}$. This is because sodium salts are',
            options: ['Always soluble', 'Soluble only with halides', 'Generally insoluble', 'Soluble only in organic solvents']
          },
          {
            label: 'In a particle diagram of $Na_{2}CO_{3}$(aq), the ratio of $Na^{+}$ to $CO_{3}^{2-}$ is',
            options: ['1 : 1', '2 : 1', '1 : 2', '2 : 3']
          },
          {
            label: 'If a solution is diluted to twice its volume, the number of solute particles',
            options: ['Doubles', 'Is halved', 'Stays the same', 'Quadruples']
          },
          {
            label: 'When mixing $Pb(NO_{3})_{2}(aq)$ and KI(aq), the spectator ions are',
            options: ['$Pb^{2+}$ and $I^{-}$', '$K^{+}$ and $NO_{3}^{-}$', '$Pb^{2+}$ and $K^{+}$', '$NO_{3}^{-}$ and $I^{-}$']
          },
          {
            label: 'Water molecules around a dissolved $Cl^{-}$ ion orient with their',
            options: ['Hydrogen atoms toward the ion', 'Oxygen atoms toward the ion', 'Lone pairs toward the ion', 'No preferred orientation']
          }
        ],
        correctAnswers: ['Always soluble', '2 : 1', 'Stays the same', '$K^{+}$ and $NO_{3}^{-}$', 'Hydrogen atoms toward the ion'],
        hint1: '$Na^{+}$, $K^{+}$, $NH_{4}^{+}$, and $NO_{3}^{-}$ salts are always soluble.',
        hint2: 'Dilution adds solvent, not solute.',
        hint3: 'The $\\delta^+$ end of water is attracted to an anion.',
        explanation: 'Sodium salts are always soluble. $Na_{2}CO_{3}$ releases two $Na^{+}$ per $CO_{3}^{2-}$. Dilution keeps the number of solute particles the same while the volume grows. $PbI_{2}$ is the precipitate, so $K^{+}$ and $NO_{3}^{-}$ are spectators. The partially positive hydrogens of water point toward an anion.'
      }
    },
    {
      id: 'ss7-frq-practice',
      type: 'text' as const,
      content: `
## ✏️ AP Free-Response Practice Problem

> **Problem:** A student wants to find the concentration of $Cl^{-}$ in a 25.00 mL water sample. She adds excess $AgNO_{3}$(aq), filters, dries, and weighs the solid AgCl ($\\mathcal{M} = 143.32$ g/mol). The dry precipitate has a mass of 0.2150 g.

> **Solution:**

**(a)** Write the net ionic equation for the precipitation.

$$\\text{Ag}^+(aq) + \\text{Cl}^-(aq) \\rightarrow \\text{AgCl}(s)$$

**(b)** Calculate the moles of AgCl collected.

$$n = \\frac{0.2150}{143.32} = 1.500 \\times 10^{-3} \\text{ mol}$$

**(c)** Calculate $[Cl^{-}]$ in the original sample.

Moles $Cl^{-}$ = moles AgCl (1 : 1), so

$$[\\text{Cl}^-] = \\frac{1.500 \\times 10^{-3}}{0.02500} = 0.06000 \\text{ M}$$

**(d)** The student forgets to dry the precipitate completely before weighing. Is the calculated $[Cl^{-}]$ too high, too low, or unaffected? **Too high.** Leftover water adds mass, which is counted as extra AgCl and therefore extra chloride.

**(e)** Why is $AgNO_{3}$ added in excess? So that every chloride ion is precipitated. If $Ag^{+}$ were limiting, some $Cl^{-}$ would stay in solution and the result would be too low.
      `
    },
    {
      id: 'ss7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — AP Synthesis** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Solution A is 0.20 M NaCl and Solution B is 0.30 M glucose. Which has the greater total concentration of dissolved particles?',
            options: [
              'Solution A',
              'Solution B',
              'They are the same',
              'Cannot be determined without the volumes'
            ],
            correctAnswer: 0,
            explanation: 'NaCl gives two ions per formula unit, so Solution A has $2 \\times 0.20 = 0.40$ M of particles. Glucose stays as molecules, so Solution B has 0.30 M. Concentration does not depend on how much solution is present.'
          },
          {
            question: 'When preparing a standard solution using a volumetric flask, the meniscus of the solution should be:',
            options: [
              'With its top edge level with the calibration mark',
              'With its bottom level with the calibration mark',
              'Just below the calibration mark, to allow mixing',
              'Just above the calibration mark, to allow for loss'
            ],
            correctAnswer: 1,
            explanation: 'For accurate solution preparation, the bottom of the meniscus must be aligned with the calibration mark on the volumetric flask. Lining up the top edge, or stopping above or below the mark, introduces a systematic error in concentration.'
          },
          {
            question: 'Which statement best explains why NaCl dissolves in water but not in hexane?',
            options: [
              'Only water can form ion–dipole attractions with the ions',
              'Hexane molecules are too small to pull the ions out of the crystal',
              'NaCl reacts chemically with water to form new soluble compounds',
              'Hexane is denser than water, so the ions sink out of it'
            ],
            correctAnswer: 0,
            explanation: 'Polar water molecules orient around each ion, and these ion–dipole attractions offset the energy needed to separate the ions from the lattice. Nonpolar hexane offers only weak dispersion forces, so the ions stay in the solid. NaCl dissolves without forming new compounds.'
          }
        ]
      }
    }
  ]
}
