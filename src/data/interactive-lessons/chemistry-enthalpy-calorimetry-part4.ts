export const chemEnthalpyCalorimetryPart4Data = {
  topicSlug: 'enthalpy-calorimetry',
  sections: [
    {
      id: 'eh4-intro',
      type: 'text' as const,
      content: `# 🔗 Bond Enthalpies

**Part 4 of 7 — Estimating ΔH from Bonds Broken and Formed**

---

### Topics in This Part

| Section |
|---------|
| 🔗 Bonds and Potential Energy |
| Average Bond Enthalpies |
| 📏 The Bond Enthalpy Method |
| 🧪 Worked Example — Combustion of Methane |
| Why the Estimate Is Approximate |

> 🔑 **Key Concept:** Breaking a bond always **requires** energy; forming a bond always **releases** energy. Comparing the two totals tells you whether a reaction is exothermic or endothermic and lets you estimate $\\Delta H$ (CED 6.7.A).

---

### What You'll Master in Part 4
- Explaining the sign of $\\Delta H$ in terms of bonds broken and formed
- Counting bonds from Lewis structures
- Calculating $\\Delta H$ from average bond enthalpies`
    },
    {
      id: 'eh4-bonds-energy',
      type: 'text' as const,
      content: `
## 🔗 Bonds and Potential Energy

During a reaction, bonds in the reactants break and new bonds in the products form, changing the potential energy of the system (CED 6.7.A.1).

| Process | Energy | Sign |
|---------|--------|------|
| Breaking a bond | Must be **absorbed** | Endothermic (+) |
| Forming a bond | Is **released** | Exothermic (−) |

> ⚠️ **Warning:** A common misconception is that breaking bonds releases energy (as in "energy stored in bonds"). Breaking any bond **costs** energy; the energy a reaction releases comes from forming stronger bonds in the products.


---

### Average Bond Enthalpies

A **bond enthalpy** is the energy needed to break one mole of a given bond in the gas phase. Because the same bond (for example C–H) has slightly different strengths in different molecules, tables list **average** values.

| Bond | Average bond enthalpy (kJ/mol) | Bond | Average bond enthalpy (kJ/mol) |
|------|-------------------------------|------|-------------------------------|
| H–H | 436 | C–C | 348 |
| C–H | 413 | C=C | 614 |
| O–H | 463 | C=O (in $\\text{CO}_2$) | 799 |
| O=O | 498 | N≡N | 941 |
| N–H | 391 | Cl–Cl | 242 |
| H–Cl | 431 | C–Cl | 328 |

> 💡 **Tip:** Between the same two atoms, a triple bond is stronger than a double bond, which is stronger than a single bond. Compare C–C (348), C=C (614).
      `
    },
    {
      id: 'eh4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Bond Energy Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about bond breaking and bond formation is correct?',
            options: [
              'Bond breaking releases energy and bond forming absorbs it',
              'Breaking bonds absorbs energy and forming bonds releases energy',
              'Both breaking and forming bonds release energy',
              'Only forming bonds involves an energy change'
            ],
            correctAnswer: 1,
            explanation: 'Energy must be supplied to pull bonded atoms apart, so bond breaking is endothermic. When atoms bond, the system drops to lower potential energy and releases energy, so bond formation is exothermic. Both processes involve energy changes.'
          },
          {
            question: 'A reaction absorbs 1,850 kJ to break the bonds in its reactants and releases 2,100 kJ when the product bonds form. Which is true?',
            options: [
              'The reaction is endothermic with ΔH ≈ +250 kJ',
              'The reaction is exothermic with ΔH ≈ −250 kJ',
              'The reaction is exothermic with ΔH ≈ −3,950 kJ',
              'The reaction is endothermic with ΔH ≈ +3,950 kJ'
            ],
            correctAnswer: 1,
            explanation: 'ΔH ≈ (energy to break) − (energy released) = 1,850 − 2,100 = −250 kJ. More energy is released than absorbed, so the reaction is exothermic. Adding the two values instead of subtracting gives 3,950 kJ, and subtracting in the other order flips the sign.'
          },
          {
            question: 'Why are bond enthalpy tables described as "average" values?',
            options: [
              'Each bond is measured at several different temperatures',
              'The strength of a given bond varies slightly from one molecule to another',
              'Bond enthalpies change as a reaction proceeds',
              'Bond enthalpies are averaged over forward and reverse reactions'
            ],
            correctAnswer: 1,
            explanation: 'A C–H bond in methane is not exactly as strong as a C–H bond in ethanol, because the rest of the molecule affects it. Tables report an average over many compounds, which is why bond-enthalpy results are estimates.'
          }
        ]
      }
    },
    {
      id: 'eh4-method',
      type: 'text' as const,
      content: `
## 📏 The Bond Enthalpy Method

$$\\boxed{\\Delta H \\approx \\sum (\\text{bond enthalpies of bonds broken}) - \\sum (\\text{bond enthalpies of bonds formed})}$$

### Steps

1. **Draw Lewis structures** for every reactant and product so you can see each bond, including double and triple bonds.
2. **Count the bonds broken** in the reactants (multiply by coefficients).
3. **Count the bonds formed** in the products.
4. **Subtract:** energy in (broken) minus energy out (formed).

> ⚠️ **Warning:** This is "reactants minus products," the **opposite** order from the $\\Delta H^\\circ_f$ formula. Bond enthalpies measure energy put in to break bonds, so the bonds broken come first.


---

## 🧪 Worked Example — Combustion of Methane

> **Problem:** Estimate $\\Delta H$ for $\\text{CH}_4(g) + 2\\text{O}_2(g) \\rightarrow \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(g)$.

| | Bonds | Energy (kJ) |
|-|-------|-------------|
| Broken | 4 C–H | 4(413) = 1652 |
| Broken | 2 O=O | 2(498) = 996 |
| **Total broken** | | **2648** |
| Formed | 2 C=O | 2(799) = 1598 |
| Formed | 4 O–H (2 per $\\text{H}_2\\text{O}$) | 4(463) = 1852 |
| **Total formed** | | **3450** |

$$\\Delta H \\approx 2648 - 3450 = \\boxed{-802 \\text{ kJ}}$$

The product bonds (C=O and O–H) are stronger overall than the reactant bonds, so energy is released: the reaction is exothermic.


---

### Why the Estimate Is Approximate

- Average bond enthalpies are not exact for any particular molecule.
- The method applies to **gases**; it ignores the energy of intermolecular attractions in liquids and solids.

When a question gives $\\Delta H^\\circ_f$ values, those give a more accurate answer. When it gives bond enthalpies, use this method.
      `
    },
    {
      id: 'eh4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Bond Enthalpy Practice** 🧮

Estimate $\\Delta H$ for $\\text{N}_2(g) + 3\\text{H}_2(g) \\rightarrow 2\\text{NH}_3(g)$ using N≡N = 941, H–H = 436, and N–H = 391 kJ/mol.

**1)** Total energy to break the bonds in the reactants (kJ)

**2)** Total energy released forming the bonds in the products (kJ)

**3)** Estimated $\\Delta H$ (kJ, include the sign)
      `,
      exercise: {
        questions: [{ question: '(1)', answer: '2249', acceptableAnswers: ['2249', '2,249'] }, { question: '(2)', answer: '2346', acceptableAnswers: ['2346', '2,346'] }, { question: '(3)', answer: '-97', acceptableAnswers: ['-97', '−97'] }],
        hint1: 'One N≡N bond and three H–H bonds: 941 + 3(436).',
        hint2: 'Each $\\text{NH}_3$ has three N–H bonds, and there are two $\\text{NH}_3$: six N–H bonds.',
        hint3: 'Bonds broken minus bonds formed.',
        explanation: '1) 941 + 3(436) = 941 + 1308 = 2249 kJ. 2) 6(391) = 2346 kJ. 3) ΔH ≈ 2249 − 2346 = −97 kJ, close to the measured −92 kJ; the difference comes from using average bond enthalpies.'
      }
    },
    {
      id: 'eh4-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Bond Enthalpy Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If the energy released forming bonds is greater than the energy needed to break bonds, the reaction is',
            options: ['exothermic', 'endothermic', 'at equilibrium', 'nonspontaneous']
          },
          {
            label: 'The number of C–H bonds broken when one $\\text{CH}_4$ molecule burns completely is',
            options: ['1', '2', '4', '8']
          },
          {
            label: 'Bond enthalpy values in a table are always',
            options: ['positive', 'negative', 'zero for single bonds', 'positive only for double bonds']
          },
          {
            label: 'Compared with a C–C single bond, a C=C double bond is',
            options: ['stronger', 'weaker', 'equally strong', 'not a covalent bond']
          }
        ],
        correctAnswers: ['exothermic', '4', 'positive', 'stronger'],
        hint1: 'More energy out than in.',
        hint2: 'Draw the Lewis structure of methane.',
        hint3: 'A bond enthalpy is the energy needed to break a bond.',
        explanation: 'More energy released than absorbed means ΔH < 0 (exothermic). Methane has four C–H bonds, and all of them break. Bond enthalpies are energies required to break bonds, so they are always positive. Double bonds are stronger than single bonds between the same atoms.'
      }
    },
    {
      id: 'eh4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Bond Enthalpies** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Using C=C = 614, H–H = 436, C–C = 348, and C–H = 413 kJ/mol, estimate ΔH for $\\text{C}_2\\text{H}_4(g) + \\text{H}_2(g) \\rightarrow \\text{C}_2\\text{H}_6(g)$.',
            options: [
              '−124 kJ',
              '+124 kJ',
              '−1174 kJ',
              '+289 kJ'
            ],
            correctAnswer: 0,
            explanation: 'Only the bonds that change need to be counted. Broken: C=C (614) + H–H (436) = 1050 kJ. Formed: C–C (348) + 2 C–H (826) = 1174 kJ. ΔH ≈ 1050 − 1174 = −124 kJ. Subtracting in the other order gives +124 kJ, −1174 kJ counts only bonds formed, and +289 kJ counts only one of the two new C–H bonds.'
          },
          {
            question: 'The reaction $\\text{H}_2(g) + \\text{Cl}_2(g) \\rightarrow 2\\text{HCl}(g)$ is exothermic. Which explanation is consistent with bond enthalpies?',
            options: [
              'Breaking the H–H and Cl–Cl bonds releases energy',
              'Forming 2 H–Cl releases more than breaking costs',
              'The H–Cl bond is weaker than both the H–H and the Cl–Cl bond',
              'No bonds are broken because the reactants are elements'
            ],
            correctAnswer: 1,
            explanation: 'Breaking costs 436 + 242 = 678 kJ, and forming two H–Cl bonds releases 2(431) = 862 kJ, so the net change is about −184 kJ. Bond breaking never releases energy, H–Cl (431) is stronger than Cl–Cl (242), and the H–H and Cl–Cl bonds in the elements must break.'
          }
        ]
      }
    }
  ]
}
