export const chemSolutionsSolubilityPart7Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Connecting Solubility Rules, Concentration, and Colligative Properties**

This final part ties together everything from the unit: solution terminology, concentration units, dilution, colligative properties, and osmotic pressure. The questions are designed in AP exam style — expect multi-step reasoning, conceptual traps, and calculations that require you to integrate multiple topics.
      `
    },
    {
      id: 'ss7-big-picture',
      type: 'text' as const,
      content: `
## The Big Picture

### How It All Connects

$$\\text{Solubility Rules} \\rightarrow \\text{Does it dissolve?} \\rightarrow \\text{How much? (Concentration)} \\rightarrow \\text{What effect? (Colligative Properties)}$$

### Unit Summary

| Topic | Key Ideas |
|-------|-----------|
| **Solubility** | Like dissolves like; solubility rules for ionic compounds |
| **Concentration** | Molarity ($M$), molality ($m$), mass %, mole fraction ($\\chi$), ppm |
| **Dilution** | $M_1V_1 = M_2V_2$; moles of solute remain constant |
| **Colligative Properties** | Depend on number of particles, not identity |
| **BPE / FPD** | $\\Delta T_b = iK_bm$, $\\Delta T_f = iK_fm$ |
| **Osmotic Pressure** | $\\Pi = iMRT$; used for molar mass of large molecules |
| **van\'t Hoff Factor** | $i$ = number of particles per formula unit |

### AP Exam Tips

- Always check whether the solute is an **electrolyte** or **nonelectrolyte** → determines $i$
- Watch units: molarity (mol/L of solution) vs. molality (mol/kg of solvent)
- Colligative properties: more particles = greater effect
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
            question: 'Equal masses of NaCl ($M = 58.44$, $i = 2$) and CaCl₂ ($M = 110.98$, $i = 3$) are each dissolved in 1.00 kg of water. Which solution has the lower freezing point?',
            options: [
              'The NaCl solution',
              'The CaCl₂ solution',
              'They are the same',
              'Cannot be determined without knowing the exact mass'
            ],
            correctAnswer: 0,
            explanation: 'Let the equal mass be $m$ grams. NaCl: $im = 2 \\times m/58.44 = 0.0342m$. CaCl₂: $im = 3 \\times m/110.98 = 0.0270m$. NaCl produces a larger $im$ product, giving a greater $\\Delta T_f$ and a lower freezing point.'
          },
          {
            question: 'A student dissolves a solid in water and the resulting solution does not conduct electricity. Which of the following could be the solute?',
            options: [
              'NaCl',
              'KNO₃',
              'C₆H₁₂O₆ (glucose)',
              'HCl'
            ],
            correctAnswer: 2,
            explanation: 'A solution that does not conduct electricity contains no ions — the solute is a nonelectrolyte. Glucose dissolves as intact molecules and does not ionize. NaCl, KNO₃, and HCl all produce ions in water.'
          },
          {
            question: 'When Ba(NO₃)₂(aq) is mixed with Na₂SO₄(aq), a precipitate forms. The precipitate is:',
            options: [
              'NaNO₃',
              'BaSO₄',
              'Ba(NO₃)₂',
              'Na₂SO₄'
            ],
            correctAnswer: 1,
            explanation: 'By solubility rules, sulfates are generally soluble EXCEPT with Ba²⁺, Pb²⁺, Ca²⁺, and Sr²⁺. BaSO₄ is insoluble and precipitates. NaNO₃ is soluble (all nitrates and all sodium salts are soluble).'
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
            question: 'Rank the following 0.10 m aqueous solutions from lowest to highest freezing point: I. C₆H₁₂O₆ ($i = 1$), II. NaCl ($i = 2$), III. CaCl₂ ($i = 3$)',
            options: [
              'I < II < III',
              'III < II < I',
              'I = II = III',
              'II < III < I'
            ],
            correctAnswer: 1,
            explanation: '$\\Delta T_f = iK_fm$. Larger $i$ → larger $\\Delta T_f$ → lower freezing point. CaCl₂ ($i = 3$) has the lowest freezing point, then NaCl ($i = 2$), then glucose ($i = 1$) has the highest. Order from lowest to highest: III < II < I.'
          },
          {
            question: '250.0 mL of 0.400 M HCl is diluted to 1.000 L. What is the pH of the resulting solution?',
            options: [
              '0.40',
              '1.00',
              '2.00',
              '0.10'
            ],
            correctAnswer: 1,
            explanation: '$M_2 = M_1V_1/V_2 = (0.400)(0.250)/(1.000) = 0.100$ M. HCl is a strong acid, so $[\\text{H}^+] = 0.100$ M. $\\text{pH} = -\\log(0.100) = 1.00$.'
          },
          {
            question: 'A lab determines that an unknown nonelectrolyte has a molar mass of 180 g/mol and the empirical formula CH₂O. The molecular formula is:',
            options: [
              'CH₂O',
              'C₂H₄O₂',
              'C₆H₁₂O₆',
              'C₃H₆O₃'
            ],
            correctAnswer: 2,
            explanation: 'Empirical formula mass of CH₂O: $12 + 2(1) + 16 = 30$ g/mol. Ratio: $180/30 = 6$. Molecular formula: $6 \\times$ CH₂O = C₆H₁₂O₆ (glucose).'
          }
        ]
      }
    },
    {
      id: 'ss7-comprehensive-calc',
      type: 'input-boxes' as const,
      content: `
**Comprehensive Calculations** 🧮

Use: $K_f = 1.86$ °C/m, $K_b = 0.512$ °C/m, $R = 0.08206$ L·atm/(mol·K)

1) An aqueous solution of MgCl₂ ($i = 3$, $M = 95.21$ g/mol) is made by dissolving 9.52 g in 200.0 g of water. What is the freezing point of the solution? (in °C, to 3 significant figures)

2) How many mL of 12.0 M HCl must be diluted to prepare 500.0 mL of 0.600 M HCl? (to 3 significant figures)

3) A 0.0250 M solution of an unknown electrolyte at 25°C has an osmotic pressure of 1.83 atm. What is the van\'t Hoff factor? (to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-2.79', '25.0', '3.0', '-2.790', '25.00', '3.00'],
        hint1: '$n = 9.52/95.21 = 0.1000$ mol. $m = 0.1000/0.200 = 0.500$ m. $\\Delta T_f = 3(1.86)(0.500)$.',
        hint2: '$V_1 = M_2V_2/M_1 = (0.600)(500.0)/(12.0)$.',
        hint3: '$i = \\Pi/(MRT) = 1.83/((0.0250)(0.08206)(298))$.',
        explanation: '1) $n = 0.1000$ mol. $m = 0.500$ m. $\\Delta T_f = 3(1.86)(0.500) = 2.79$ °C. $T_f = 0.00 - 2.79 = -2.79$ °C. 2) $V_1 = (0.600)(500.0)/(12.0) = 25.0$ mL. 3) $i = 1.83/((0.0250)(0.08206)(298)) = 1.83/(0.6114) = 2.99 \\approx 3.0$.'
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
            label: 'A compound is soluble if it contains the cation Na⁺. This is because sodium salts are',
            options: ['Always soluble', 'Soluble only with halides', 'Generally insoluble', 'Soluble only in organic solvents']
          },
          {
            label: 'The colligative property most useful for determining the molar mass of a protein is',
            options: ['Boiling point elevation', 'Freezing point depression', 'Vapor pressure lowering', 'Osmotic pressure']
          },
          {
            label: 'If you double both the molality and the van\'t Hoff factor, the freezing point depression',
            options: ['Doubles', 'Quadruples', 'Stays the same', 'Is halved']
          },
          {
            label: 'When mixing Pb(NO₃)₂(aq) and KI(aq), the spectator ions are',
            options: ['Pb²⁺ and I⁻', 'K⁺ and NO₃⁻', 'Pb²⁺ and K⁺', 'NO₃⁻ and I⁻']
          },
          {
            label: 'For a 1.0 m NaCl solution, the measured freezing point depression is slightly less than 3.72°C because',
            options: ['NaCl does not fully dissolve', 'Ion pairing reduces the effective i', 'K_f changes with concentration', 'Water evaporates']
          }
        ],
        correctAnswers: ['Always soluble', 'Osmotic pressure', 'Quadruples', 'K⁺ and NO₃⁻', 'Ion pairing reduces the effective i'],
        hint1: 'Na⁺, K⁺, and NH₄⁺ salts have no exceptions in the solubility rules.',
        hint2: 'Large molecules at low concentrations produce tiny $\\Delta T_f$ but measurable $\\Pi$.',
        hint3: '$\\Delta T_f = iK_fm$. If both $i$ and $m$ double: $\\Delta T_f$ = $(2i)(K_f)(2m) = 4iK_fm$.',
        explanation: 'Sodium salts are always soluble. Osmotic pressure is the most sensitive colligative property. $\\Delta T_f \\propto i \\times m$, so doubling both gives 4× the effect. PbI₂ is the precipitate, so K⁺ and NO₃⁻ are spectators. In real solutions, ion pairing reduces the effective $i$ below the theoretical value.'
      }
    },
    {
      id: 'ss7-frq-practice',
      type: 'text' as const,
      content: `
## AP Free-Response Practice Problem

**A student performs a freezing point depression experiment.**

She dissolves 2.56 g of an unknown compound in 50.0 g of water. The solution freezes at $-0.744$ °C.

**(a)** Calculate the molality of the solution.

$$m = \\frac{\\Delta T_f}{iK_f} = \\frac{0.744}{(1)(1.86)} = 0.400 \\; m$$

(Assuming $i = 1$ initially)

**(b)** Calculate the moles of solute.

$$n = m \\times \\text{kg solvent} = 0.400 \\times 0.0500 = 0.0200 \\text{ mol}$$

**(c)** Calculate the apparent molar mass.

$$M = \\frac{2.56}{0.0200} = 128 \\text{ g/mol}$$

**(d)** The compound is known to be naphthalene (C₁₀H₈, actual $M = 128.17$ g/mol). Is this consistent? **Yes** — the experimental value matches the actual molar mass, confirming $i = 1$ (naphthalene is a nonelectrolyte).

**(e)** If the compound were actually an electrolyte with $i = 2$, what would the molar mass be?

$$m = \\frac{0.744}{(2)(1.86)} = 0.200 \\; m, \\quad n = 0.200 \\times 0.0500 = 0.0100, \\quad M = \\frac{2.56}{0.0100} = 256 \\text{ g/mol}$$
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
            question: 'A chemist prepares two solutions: Solution A is 0.20 m NaCl ($i = 2$) and Solution B is 0.30 m glucose ($i = 1$). If both are aqueous, which has the lower freezing point?',
            options: [
              'Solution A',
              'Solution B',
              'They are the same',
              'Cannot determine without $K_f$'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta T_f = iK_fm$. A: $2(K_f)(0.20) = 0.40K_f$. B: $1(K_f)(0.30) = 0.30K_f$. Solution A has the larger $\\Delta T_f$ (0.40 vs. 0.30), so it has the lower freezing point.'
          },
          {
            question: 'When preparing a standard solution using a volumetric flask, the meniscus of the solution should be:',
            options: [
              'Above the calibration mark',
              'At the calibration mark (bottom of meniscus)',
              'Below the calibration mark',
              'It does not matter'
            ],
            correctAnswer: 1,
            explanation: 'For accurate solution preparation, the bottom of the meniscus must be aligned with the calibration mark on the volumetric flask. Reading above or below introduces systematic error in concentration.'
          },
          {
            question: 'A 0.100 M Al(NO₃)₃ solution ($i = 4$) at 25°C has an osmotic pressure closest to:',
            options: [
              '2.4 atm',
              '4.9 atm',
              '7.3 atm',
              '9.8 atm'
            ],
            correctAnswer: 3,
            explanation: '$\\Pi = iMRT = (4)(0.100)(0.08206)(298) = 9.78 \\approx 9.8$ atm. Al(NO₃)₃ produces 4 ions: Al³⁺ + 3NO₃⁻.'
          }
        ]
      }
    }
  ]
}
