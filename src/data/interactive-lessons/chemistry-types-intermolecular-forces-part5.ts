export const chemTypesIntermolecularForcesPart5Data = {
  topicSlug: 'types-intermolecular-forces',
  sections: [
    {
      id: 'if-rank-overview',
      type: 'text',
      title: 'Ranking IMF Strength',
      content: `On the AP Chemistry exam, you will frequently need to rank molecules by the strength of their intermolecular forces. Here is the general hierarchy:\n\n$$\\boxed{\\text{Ion-Dipole} > \\text{Hydrogen Bonding} > \\text{Dipole-Dipole} > \\text{London Dispersion Forces}}$$\n\n**However**, this ranking has an important caveat: it applies to molecules of **similar size**. A very large nonpolar molecule (with only LDF) can have stronger total IMF than a small polar molecule (with dipole-dipole forces).\n\nExample: Hexane ($\\text{C}_6\\text{H}_{14}$, nonpolar, only LDF) boils at 69°C, while formaldehyde ($\\text{CH}_2\\text{O}$, polar, dipole-dipole) boils at -19°C. Hexane\'s much larger size gives it stronger LDF that outweigh formaldehyde\'s dipole-dipole advantage.\n\n**Strategy for ranking:**\n1. Identify ALL types of IMF each molecule experiences\n2. The dominant IMF determines relative ranking\n3. If molecules share the same dominant IMF, compare size (molar mass)\n\n> 🔑 **Key Concept:** The IMF hierarchy applies for similar-sized molecules. A very large nonpolar molecule can have stronger total IMF than a small polar molecule.

**Part 5 of 7 — Comparing IMF Strengths**

---

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'if-rank-identify-imf',
      type: 'text',
      title: 'Step-by-Step IMF Identification',
      content: `Use this flowchart to identify which IMFs a substance has:\n\n**Step 1:** Is it an ion interacting with a polar molecule?\n- YES $\\rightarrow$ **Ion-dipole forces**\n\n**Step 2:** Does the molecule have H bonded to N, O, or F?\n- YES $\\rightarrow$ **Hydrogen bonding** (+ dipole-dipole + LDF)\n\n**Step 3:** Is the molecule polar? (Consider geometry and electronegativity)\n- YES $\\rightarrow$ **Dipole-dipole forces** (+ LDF)\n\n**Step 4:** Is the molecule nonpolar?\n- YES $\\rightarrow$ **London Dispersion Forces only**\n\nRemember: Each molecule experiences ALL of the forces at its level AND below:\n- H-bonding molecules also have dipole-dipole AND LDF\n- Dipole-dipole molecules also have LDF\n- ALL molecules have LDF\n\n---\n\n> 🔑 **Key Concept:** Each molecule experiences ALL forces at its level AND below. H-bonding molecules also have dipole-dipole AND LDF.`
    },
    {
      id: 'if-rank-practice1',
      type: 'multiple-choice',
      title: 'Identify the Dominant IMF',
      content: 'For each molecule, identify the strongest IMF it experiences.',
      exercise: {
        questions: [
          {
            question: 'What is the strongest intermolecular force experienced by CH₃OH (methanol)?',
            options: [
              'London Dispersion Forces',
              'Dipole-dipole forces',
              'Hydrogen bonding',
              'Ion-dipole forces'
            ],
            correctAnswer: 2,
            explanation: 'Methanol (CH₃OH) has an O–H bond, meeting the requirement for hydrogen bonding (H bonded to N, O, or F). Hydrogen bonding is the strongest IMF it experiences. It also has dipole-dipole forces and LDF, but hydrogen bonding is dominant.'
          },
          {
            question: 'What is the strongest intermolecular force experienced by CH₃Cl (chloromethane)?',
            options: [
              'London Dispersion Forces only',
              'Dipole-dipole forces',
              'Hydrogen bonding',
              'Ionic bonding'
            ],
            correctAnswer: 1,
            explanation: 'CH₃Cl is a polar molecule (the C–Cl bond creates a net dipole), so it has dipole-dipole forces. It does NOT have hydrogen bonding because there is no H bonded to N, O, or F. Chlorine is not one of the three required atoms for H-bonding.'
          },
          {
            question: 'What is the strongest intermolecular force experienced by CCl₄ (carbon tetrachloride)?',
            options: [
              'London Dispersion Forces only',
              'Dipole-dipole forces',
              'Hydrogen bonding',
              'Ion-dipole forces'
            ],
            correctAnswer: 0,
            explanation: 'CCl₄ has a symmetric tetrahedral geometry, so the four polar C–Cl bond dipoles cancel out. The molecule is nonpolar and only experiences London Dispersion Forces.'
          }
        ]
      }
    },
    {
      id: 'if-rank-dropdown-classify',
      type: 'dropdown-select',
      title: 'Classify Each Molecule',
      content: 'Select the strongest IMF for each molecule.',
      exercise: {
        dropdowns: [
          {
            id: 'rank-h2o',
            label: '$\\text{H}_2\\text{O}$',
            options: ['LDF only', 'Dipole-dipole', 'Hydrogen bonding', 'Ion-dipole'],
            correctIndex: 2,
            explanation: 'H₂O has O–H bonds, so it exhibits hydrogen bonding — the strongest IMF between neutral molecules of this size.'
          },
          {
            id: 'rank-co2',
            label: '$\\text{CO}_2$',
            options: ['LDF only', 'Dipole-dipole', 'Hydrogen bonding', 'Ion-dipole'],
            correctIndex: 0,
            explanation: 'CO₂ is linear and symmetric. The two C=O bond dipoles cancel, making CO₂ nonpolar. It only experiences LDF.'
          },
          {
            id: 'rank-hf',
            label: 'HF',
            options: ['LDF only', 'Dipole-dipole', 'Hydrogen bonding', 'Ion-dipole'],
            correctIndex: 2,
            explanation: 'HF has H bonded to F, one of the three atoms required for hydrogen bonding. HF exhibits hydrogen bonding.'
          },
          {
            id: 'rank-nacl-in-water',
            label: 'NaCl dissolved in water',
            options: ['LDF only', 'Dipole-dipole', 'Hydrogen bonding', 'Ion-dipole'],
            correctIndex: 3,
            explanation: 'NaCl dissociates into Na⁺ and Cl⁻ ions in water. The interaction between these ions and polar water molecules is ion-dipole.'
          }
        ]
      }
    },
    {
      id: 'if-rank-comparison',
      type: 'text',
      title: 'Comparing Molecules: A Worked Example',
      content: `> **Problem:** Rank the following in order of increasing boiling point:\n> $\\text{CH}_4$, $\\text{CH}_3\\text{Cl}$, $\\text{CH}_3\\text{OH}$, $\\text{CH}_3\\text{CH}_3$\n\n> **Solution:**\n\n| Molecule | Molar Mass | Polar? | H-bonding? | Dominant IMF |\n|----------|-----------|--------|------------|-------------|\n| CH₄ | 16 g/mol | No | No | LDF only |\n| CH₃CH₃ | 30 g/mol | No | No | LDF only |\n| CH₃Cl | 50 g/mol | Yes | No | Dipole-dipole + LDF |\n| CH₃OH | 32 g/mol | Yes | Yes (O–H) | H-bonding + DD + LDF |\n\n**Ranking (lowest to highest BP):**\n$$\\boxed{\\text{CH}_4 < \\text{CH}_3\\text{CH}_3 < \\text{CH}_3\\text{Cl} < \\text{CH}_3\\text{OH}}$$\n\n- CH₄ < CH₃CH₃: Both LDF only, but CH₃CH₃ has higher molar mass\n- CH₃CH₃ < CH₃Cl: CH₃Cl has dipole-dipole forces in addition to LDF\n- CH₃Cl < CH₃OH: CH₃OH has hydrogen bonding, the strongest IMF here (even though CH₃Cl has a higher molar mass)`
    },
    {
      id: 'if-rank-practice2',
      type: 'multiple-choice',
      title: 'Ranking Boiling Points',
      content: 'Use your IMF knowledge to rank boiling points.',
      exercise: {
        questions: [
          {
            question: 'Which substance has the highest boiling point?',
            options: [
              'Ne (MW = 20, nonpolar)',
              'HF (MW = 20, hydrogen bonding)',
              'N₂ (MW = 28, nonpolar)',
              'CO (MW = 28, polar)'
            ],
            correctAnswer: 1,
            explanation: 'HF exhibits hydrogen bonding (H bonded to F), which is much stronger than the dipole-dipole forces in CO or the LDF in Ne and N₂. Despite having one of the lowest molar masses, HF has the highest boiling point (19.5°C vs. well below 0°C for the others).'
          },
          {
            question: 'Which substance has the LOWEST boiling point?',
            options: [
              'H₂O (MW = 18, hydrogen bonding)',
              'HF (MW = 20, hydrogen bonding)',
              'He (MW = 4, LDF only)',
              'CH₃OH (MW = 32, hydrogen bonding)'
            ],
            correctAnswer: 2,
            explanation: 'He is a noble gas with no bonds and very few electrons. It only has extremely weak LDF and has the lowest boiling point of all elements (-269°C, or 4 K).'
          }
        ]
      }
    },
    {
      id: 'if-rank-caveat',
      type: 'multiple-choice',
      title: 'The Size Exception',
      content: 'Remember: the IMF hierarchy assumes similar-sized molecules. Size can override the hierarchy.',
      exercise: {
        questions: [
          {
            question: 'Octane (C₈H₁₈, MW = 114, nonpolar) boils at 126°C. Acetone (CH₃COCH₃, MW = 58, polar) boils at 56°C. Why does octane boil higher despite being nonpolar?',
            options: [
              'Octane has hydrogen bonding',
              'Octane has dipole-dipole forces',
              'Octane\'s much larger size gives it very strong LDF that outweigh acetone\'s dipole-dipole advantage',
              'Acetone is nonpolar, not polar'
            ],
            correctAnswer: 2,
            explanation: 'Octane is nonpolar (LDF only) but has nearly twice the molar mass of acetone. Its very large electron cloud and long chain shape provide enormous surface area for LDF. These strong LDF outweigh the dipole-dipole forces in the smaller acetone molecule.'
          }
        ]
      }
    },
    {
      id: 'if-rank-input-summary',
      type: 'input-boxes',
      title: 'IMF Ranking Summary',
      content: 'Test your understanding of IMF ranking.',
      exercise: {
        inputs: [
          {
            label: 'The strongest type of IMF between neutral molecules of similar size is _____ bonding',
            correctAnswer: 'hydrogen',
            explanation: 'Among neutral molecules of similar size, hydrogen bonding is the strongest IMF. Ion-dipole forces are stronger overall but involve ions, not just neutral molecules.'
          },
          {
            label: 'ALL molecules experience _____ Dispersion Forces (fill in the missing word)',
            correctAnswer: 'London',
            explanation: 'London Dispersion Forces are universal — present in every molecule and atom because all particles have electrons that can form temporary dipoles.'
          }
        ]
      }
    }
  ]
};
