export const chemTypesOfChemicalBondsPart6Data = {
  topicSlug: 'types-of-chemical-bonds',
  sections: [
    {
      id: 'cb6-intro',
      type: 'text' as const,
      content: `# Part 6: Problem-Solving Workshop

**Part 6 of 7 — Mixed Practice with Chemical Bonds**

---

### Practice Makes Perfect

This workshop features multi-step problems that mirror the AP Chemistry exam format. Each problem requires you to combine concepts from previous parts and show your work clearly.

> 🔑 **Why this matters:** The AP Chemistry exam rewards students who can apply concepts to unfamiliar problems — structured practice is the best preparation.

---

### What You'll Master in Part 6
- Working through complete multi-step problems from start to finish
- Building problem-solving strategies you can apply on the AP exam
- Identifying which concepts to apply and in what order`
    },
    {
      id: 'cb6-identify-bonds',
      type: 'multiple-choice' as const,
      content: `### Round 1: Identify the Bond Type

Classify the primary bond type in each substance.`,
      exercise: {
        questions: [
          {
            question: 'What type of bond is present in $\\text{KBr}$?',
            options: [
              'Nonpolar covalent',
              'Polar covalent',
              'Ionic',
              'Metallic'
            ],
            correctAnswer: 2,
            explanation: 'K is a metal (Group 1) and Br is a nonmetal (Group 17). The large electronegativity difference means electron transfer occurs, forming $\\text{K}^+$ and $\\text{Br}^-$ → ionic bond.'
          },
          {
            question: 'What type of bond is present in $\\text{H}_2\\text{O}$?',
            options: [
              'Nonpolar covalent',
              'Polar covalent',
              'Ionic',
              'Metallic'
            ],
            correctAnswer: 1,
            explanation: 'Both H and O are nonmetals → covalent bonding. Since $\\Delta\\chi = |3.5 - 2.1| = 1.4$, the O—H bonds are polar covalent. Oxygen attracts the shared electrons more strongly.'
          },
          {
            question: 'What type of bonding holds atoms together in a sample of silver (Ag)?',
            options: [
              'Nonpolar covalent',
              'Polar covalent',
              'Ionic',
              'Metallic'
            ],
            correctAnswer: 3,
            explanation: 'Silver is a pure metal. Metal atoms are held together by metallic bonding — cations in a delocalized electron sea.'
          },
          {
            question: 'What type of bond is present in $\\text{Cl}_2$?',
            options: [
              'Nonpolar covalent',
              'Polar covalent',
              'Ionic',
              'Metallic'
            ],
            correctAnswer: 0,
            explanation: 'Two identical chlorine atoms share electrons equally ($\\Delta\\chi = 0$). This is a pure nonpolar covalent bond.'
          }
        ]
      }
    },
    {
      id: 'cb6-property-matching',
      type: 'dropdown-select' as const,
      content: `### Round 2: Match Properties to Bond Type

A substance is described. Identify its bond type.`,
      exercise: {
        dropdowns: [
          {
            label: 'Melts at 801 °C, brittle solid, conducts only when melted or dissolved:',
            options: ['ionic', 'molecular covalent', 'metallic', 'covalent network'],
            correctIndex: 0,
            explanation: 'High melting point + brittle + conducts only when melted/dissolved = ionic. This describes NaCl (table salt).'
          },
          {
            label: 'Melts at 1085 °C, ductile, conducts electricity as a solid:',
            options: ['ionic', 'molecular covalent', 'metallic', 'covalent network'],
            correctIndex: 2,
            explanation: 'Ductile + conducts as solid = metallic. This describes copper (Cu). Metals are ductile because the electron sea allows layer sliding.'
          },
          {
            label: 'Melts at $-78$ °C (sublimes), does not conduct in any state:',
            options: ['ionic', 'molecular covalent', 'metallic', 'covalent network'],
            correctIndex: 1,
            explanation: 'Very low melting/sublimation point + no conductivity = molecular covalent. This describes $\\text{CO}_2$ (dry ice).'
          },
          {
            label: 'Melts at 1710 °C, very hard, does not conduct electricity:',
            options: ['ionic', 'molecular covalent', 'metallic', 'covalent network'],
            correctIndex: 3,
            explanation: 'Extremely high melting point + very hard + non-conducting = covalent network solid. This describes $\\text{SiO}_2$ (quartz).'
          }
        ]
      }
    },
    {
      id: 'cb6-lattice-energy-ranking',
      type: 'multiple-choice' as const,
      content: `### Round 3: Lattice Energy Comparisons`,
      exercise: {
        questions: [
          {
            question: 'Rank these ionic compounds from lowest to highest lattice energy: NaCl, MgO, KBr.',
            options: [
              'KBr < NaCl < MgO',
              'MgO < NaCl < KBr',
              'NaCl < KBr < MgO',
              'MgO < KBr < NaCl'
            ],
            correctAnswer: 0,
            explanation: 'Lattice energy: $E \\propto \\frac{q_+ \\times q_-}{r_+ + r_-}$. KBr has $+1/-1$ charges and large ions (lowest). NaCl has $+1/-1$ charges but smaller ions (middle). MgO has $+2/-2$ charges and small ions (highest: 3850 kJ/mol vs. 787 for NaCl vs. 657 for KBr).'
          },
          {
            question: 'Which of the following changes would INCREASE the lattice energy of an ionic compound?',
            options: [
              'Replacing the cation with a larger one',
              'Reducing the charges on both ions',
              'Replacing the cation with one that has a higher charge',
              'Increasing the distance between ions'
            ],
            correctAnswer: 2,
            explanation: 'Lattice energy increases with higher ion charges and smaller ionic radii. Replacing a $+1$ cation with a $+2$ cation (keeping anion the same) increases the Coulombic attraction and thus the lattice energy.'
          }
        ]
      }
    },
    {
      id: 'cb6-polarity-practice',
      type: 'input-box' as const,
      content: `### Round 4: Bond Polarity Calculations

> **Problem:** Calculate the electronegativity difference and classify each bond.

**1.** $\\Delta\\chi$ for C—Cl (C: 2.5, Cl: 3.0). Enter the value.

**2.** Classify the C—Cl bond as "nonpolar covalent", "polar covalent", or "ionic".

**3.** $\\Delta\\chi$ for Na—F (Na: 0.9, F: 4.0). Enter the value.

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        inputs: [
          {
            label: '$\\Delta\\chi$ for C—Cl:',
            correctAnswer: '0.5',
            explanation: '$\\Delta\\chi = |3.0 - 2.5| = 0.5$. This places the bond right at the boundary between nonpolar and polar covalent.'
          },
          {
            label: 'Classification of C—Cl:',
            correctAnswer: 'polar covalent',
            explanation: 'With $\\Delta\\chi = 0.5$, the C—Cl bond is classified as polar covalent. Chlorine is more electronegative and carries a partial negative charge ($\\delta^-$).'
          },
          {
            label: '$\\Delta\\chi$ for Na—F:',
            correctAnswer: '3.1',
            explanation: '$\\Delta\\chi = |4.0 - 0.9| = 3.1$. This very large difference indicates a strongly ionic bond — sodium transfers its electron to fluorine.'
          }
        ]
      }
    },
    {
      id: 'cb6-mixed-concepts',
      type: 'multiple-choice' as const,
      content: `### Round 5: Mixed Concept Questions`,
      exercise: {
        questions: [
          {
            question: 'Which compound contains BOTH ionic and covalent bonds?',
            options: [
              '$\\text{NaCl}$',
              '$\\text{H}_2\\text{O}$',
              '$\\text{Na}_2\\text{SO}_4$',
              '$\\text{CH}_4$'
            ],
            correctAnswer: 2,
            explanation: '$\\text{Na}_2\\text{SO}_4$ contains $\\text{Na}^+$ ions bonded ionically to $\\text{SO}_4^{2-}$. Within the sulfate ion, S and O are connected by covalent bonds. So the compound has both bond types.'
          },
          {
            question: 'A triple bond compared to a single bond between the same two atoms has:',
            options: [
              'Lower bond energy and shorter bond length',
              'Higher bond energy and longer bond length',
              'Higher bond energy and shorter bond length',
              'Lower bond energy and longer bond length'
            ],
            correctAnswer: 2,
            explanation: 'A triple bond has 3 shared pairs vs. 1 for a single bond. More shared electron density → stronger bond (higher energy) and nuclei pulled closer together (shorter length).'
          },
          {
            question: 'Which best explains why metals are malleable but ionic compounds are brittle?',
            options: [
              'Metals have weaker bonds than ionic compounds',
              'In metals, the non-directional electron sea accommodates layer shifts; in ionic compounds, shifted layers cause like-charge repulsion',
              'Ionic compounds have higher melting points',
              'Metals have directional bonds that bend easily'
            ],
            correctAnswer: 1,
            explanation: 'When metal layers shift, the delocalized electron sea adjusts and continues bonding (malleable). When ionic layers shift, cations face cations and anions face anions — the repulsion shatters the crystal (brittle).'
          }
        ]
      }
    },
    {
      id: 'cb6-exit-dropdown',
      type: 'dropdown-select' as const,
      content: `### Round 6: Quick Classification Drill`,
      exercise: {
        dropdowns: [
          {
            label: '$\\text{CaF}_2$ (calcium fluoride):',
            options: ['ionic', 'polar covalent', 'nonpolar covalent', 'metallic'],
            correctIndex: 0,
            explanation: 'Ca is a metal, F is a nonmetal → ionic bonding. Calcium transfers 2 electrons (one to each fluorine).'
          },
          {
            label: '$\\text{N}_2$ (nitrogen gas):',
            options: ['ionic', 'polar covalent', 'nonpolar covalent', 'metallic'],
            correctIndex: 2,
            explanation: 'Two identical nitrogen atoms share electrons equally → $\\Delta\\chi = 0$ → nonpolar covalent (triple bond).'
          },
          {
            label: 'Bronze (Cu + Sn alloy):',
            options: ['ionic', 'polar covalent', 'nonpolar covalent', 'metallic'],
            correctIndex: 3,
            explanation: 'Two metals combined → metallic bonding. Bronze is a substitutional alloy with delocalized electrons.'
          },
          {
            label: '$\\text{HF}$ (hydrogen fluoride):',
            options: ['ionic', 'polar covalent', 'nonpolar covalent', 'metallic'],
            correctIndex: 1,
            explanation: 'Both are nonmetals → covalent. $\\Delta\\chi = |4.0 - 2.1| = 1.9$ — this is borderline but HF is typically classified as polar covalent (it does form molecules in the gas phase).'
          }
        ]
      }
    }
  ]
}
