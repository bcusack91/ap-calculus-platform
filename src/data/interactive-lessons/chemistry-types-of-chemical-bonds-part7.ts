export const chemTypesOfChemicalBondsPart7Data = {
  topicSlug: 'types-of-chemical-bonds',
  sections: [
    {
      id: 'cb7-intro',
      type: 'text' as const,
      content: `# Part 7: Synthesis & AP Review

**Part 7 of 7 — AP-Style Questions and Common Misconceptions**

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
      id: 'cb7-misconceptions',
      type: 'text' as const,
      content: `## 🔗 Common Misconceptions About Bonding

### ❌ Misconception 1: "Ionic bonds are stronger than covalent bonds"

**Reality:** This is an oversimplification. Individual covalent bonds can be extremely strong (e.g., C—C in diamond, N≡N at 945 kJ/mol). The distinction is between:
- **Ionic compounds**: strong interactions throughout the crystal lattice → high MP
- **Molecular covalent compounds**: strong bonds *within* molecules, but weak forces *between* molecules → low MP

It's the **intermolecular forces** (not the covalent bonds) that determine melting point in molecular substances.


---

### ❌ Misconception 2: "Electrons are completely transferred in ionic bonds"

**Reality:** Even ionic bonds have some **covalent character**. The electron cloud of the anion is distorted toward the cation (called **polarization**). Bonding is a continuum, not two separate boxes.


---

### ❌ Misconception 3: "Ionic compounds exist as discrete molecules"

**Reality:** Ionic compounds form **extended crystal lattices**, not individual molecules. The formula $\\text{NaCl}$ represents the simplest ratio of ions, not a molecule. We call it a **formula unit**.
> ⚠️ **Warning:** Never refer to ionic compounds as “molecules.” NaCl is a formula unit representing the simplest ion ratio in the crystal lattice.

---

### ❌ Misconception 4: "All covalent compounds have low melting points"

**Reality:** Molecular covalent compounds generally have low MPs, but **covalent network solids** (diamond, SiO₂) have extremely high melting points because you must break covalent bonds throughout the structure.


---

### ❌ Misconception 5: "Metals conduct because they have ionic bonds"

**Reality:** Metals conduct because of **delocalized electrons** in the electron sea. They have metallic bonds, not ionic bonds. Ionic solids do NOT conduct electricity.`
    },
    {
      id: 'cb7-misconception-quiz',
      type: 'multiple-choice' as const,
      content: `### Misconception Buster Quiz`,
      exercise: {
        questions: [
          {
            question: 'A student claims that "ionic bonds are always stronger than covalent bonds." Which observation best refutes this claim?',
            options: [
              'NaCl dissolves in water',
              'The N≡N bond energy (945 kJ/mol) is higher than the lattice energy of some ionic compounds',
              'Metals are malleable',
              'CO₂ is a gas at room temperature'
            ],
            correctAnswer: 1,
            explanation: 'The N≡N triple bond (945 kJ/mol) is stronger than the lattice energy of some ionic compounds (e.g., CsCl at 657 kJ/mol). Bond strength depends on the specific bonds, not just the category.'
          },
          {
            question: 'Why does diamond (a covalent compound) have an extremely high melting point?',
            options: [
              'It has strong intermolecular forces between molecules',
              'It has ionic bonds throughout its structure',
              'It is a covalent network solid with continuous C—C bonds that must be broken',
              'It has metallic bonding from delocalized electrons'
            ],
            correctAnswer: 2,
            explanation: 'Diamond is a covalent network solid. There are no individual molecules — just a continuous 3D network of strong C—C covalent bonds. Melting requires breaking these bonds directly, which requires enormous energy.'
          },
          {
            question: 'The formula NaCl represents:',
            options: [
              'One molecule of sodium chloride',
              'The simplest ratio of Na⁺ to Cl⁻ ions in the crystal lattice (a formula unit)',
              'Two atoms bonded covalently',
              'A metallic alloy of sodium and chlorine'
            ],
            correctAnswer: 1,
            explanation: 'Ionic compounds do not form molecules. NaCl represents a formula unit — the simplest whole-number ratio of ions in the crystal lattice (1 Na⁺ for every 1 Cl⁻).'
          }
        ]
      }
    },
    {
      id: 'cb7-ap-frq-style',
      type: 'text' as const,
      content: `## 🎯 AP-Style Free Response Strategies

On the AP Chemistry exam, bonding questions often appear in the free-response section. Here are key strategies:


---

### What They Test

1. **Identifying bond type** from a compound formula or element combination
2. **Explaining properties** (MP, conductivity, hardness) in terms of bonding
3. **Comparing substances** using Coulomb\'s law or bond polarity
4. **Lattice energy ranking** using ion charge and size


---

### How to Earn Full Points

Always connect your answer to the **underlying model**:

| Instead of Saying... | Say This... |
|---------------------|-------------|
| "Ionic bonds are strong" | "The lattice energy is high due to the strong Coulombic attraction between the $+2$ and $-2$ ions" |
| "It conducts electricity" | "The delocalized electrons in the metallic bond are free to move in response to a potential difference" |
| "It has a low melting point" | "The weak London dispersion forces between nonpolar molecules require little energy to overcome" |


---

### The Coulomb\'s Law Argument

When comparing ionic compounds, always invoke Coulomb\'s law:

$$\boxed{F \propto \frac{q_1 \times q_2}{r^2}}$$

Specify **which charges** and **which radii** you're comparing. The AP exam rewards specific, quantitative reasoning.

> 🔑 **Key Concept:** On the AP exam, always connect properties to the underlying bonding model — invoke Coulomb's law for ionic comparisons and the electron sea model for metallic properties.`,
    },
    {
      id: 'cb7-ap-mc-1',
      type: 'multiple-choice' as const,
      content: `### AP-Style Multiple Choice — Set 1`,
      exercise: {
        questions: [
          {
            question: 'Which of the following best explains why the melting point of MgO (2852 °C) is much higher than that of NaCl (801 °C)?',
            options: [
              'MgO has more atoms per formula unit',
              'MgO has higher ion charges ($+2$ and $-2$) and smaller ionic radii, producing stronger Coulombic attractions',
              'MgO forms covalent bonds while NaCl forms ionic bonds',
              'MgO has a larger molar mass'
            ],
            correctAnswer: 1,
            explanation: 'Both are ionic. MgO has ions with charges $+2/-2$ (vs. $+1/-1$), and both $\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ are smaller than $\\text{Na}^+$ and $\\text{Cl}^-$. By Coulomb\'s law, $F \\propto q_1 q_2/r^2$, the forces in MgO are much stronger → higher lattice energy → higher MP.'
          },
          {
            question: 'Substance X has a melting point of $-114$ °C and does not conduct electricity in any phase. Substance X is most likely:',
            options: [
              'An ionic compound',
              'A metallic element',
              'A molecular compound',
              'A covalent network solid'
            ],
            correctAnswer: 2,
            explanation: 'Very low melting point indicates weak intermolecular forces → molecular compound. No conductivity in any phase rules out ionic (conducts when molten) and metallic (always conducts). Too low MP for network covalent.'
          },
          {
            question: 'In which of the following substances is there both ionic and covalent bonding?',
            options: [
              '$\\text{CaCl}_2$',
              '$\\text{KNO}_3$',
              '$\\text{CCl}_4$',
              '$\\text{Fe}$'
            ],
            correctAnswer: 1,
            explanation: '$\\text{KNO}_3$ consists of $\\text{K}^+$ and $\\text{NO}_3^-$ ions (ionic bond between them). Within the nitrate ion, N and O atoms are connected by covalent bonds. Both bond types are present.'
          }
        ]
      }
    },
    {
      id: 'cb7-ap-mc-2',
      type: 'multiple-choice' as const,
      content: `### AP-Style Multiple Choice — Set 2`,
      exercise: {
        questions: [
          {
            question: 'Which pair of elements would form the most polar covalent bond?',
            options: [
              'C and H ($\\Delta\\chi = 0.4$)',
              'N and H ($\\Delta\\chi = 0.9$)',
              'O and H ($\\Delta\\chi = 1.4$)',
              'C and C ($\\Delta\\chi = 0$)'
            ],
            correctAnswer: 2,
            explanation: 'The O—H bond has the largest electronegativity difference ($\\Delta\\chi = 1.4$) among the covalent options, making it the most polar. C—C is nonpolar ($\\Delta\\chi = 0$).'
          },
          {
            question: 'Graphite conducts electricity but diamond does not, even though both are pure carbon. The best explanation is:',
            options: [
              'Graphite has ionic bonds between layers',
              'Diamond has metallic bonding',
              'In graphite, delocalized electrons between layers are free to move; in diamond, all electrons are localized in C—C bonds',
              'Diamond has a higher melting point'
            ],
            correctAnswer: 2,
            explanation: 'In graphite, each carbon is bonded to only 3 others (not 4), leaving one electron per carbon delocalized across the layers. These mobile electrons allow electrical conduction. In diamond, all 4 electrons per carbon are in localized C—C bonds — none are free to move.'
          },
          {
            question: 'A student heats an unknown solid and finds it melts at 660 °C. The liquid conducts electricity. The solid is shiny and can be bent without breaking. The substance is most likely:',
            options: [
              'An ionic compound',
              'A molecular compound',
              'A metallic element',
              'A covalent network solid'
            ],
            correctAnswer: 2,
            explanation: 'Shiny (luster), can be bent (malleable), and conducts as a liquid are all metallic properties. 660 °C is the melting point of aluminum. The key distinguishing feature is malleability — ionic compounds would shatter.'
          }
        ]
      }
    },
    {
      id: 'cb7-comprehensive-dropdown',
      type: 'dropdown-select' as const,
      content: `### Comprehensive Classification

Identify the primary bond type and predict a key property.`,
      exercise: {
        dropdowns: [
          {
            label: '$\\text{BaO}$ (Ba = metal, O = nonmetal) has what bond type?',
            options: ['nonpolar covalent', 'polar covalent', 'ionic', 'metallic'],
            correctIndex: 2,
            explanation: 'Barium is a metal and oxygen is a nonmetal → ionic bond. Ba loses 2 electrons to form $\\text{Ba}^{2+}$; O gains 2 to form $\\text{O}^{2-}$.'
          },
          {
            label: 'Solid $\\text{BaO}$ will conduct electricity:',
            options: ['yes', 'no'],
            correctIndex: 1,
            explanation: 'As a solid ionic compound, the ions are locked in the lattice. BaO conducts only when melted or dissolved.'
          },
          {
            label: '$\\text{PCl}_3$ (P and Cl are both nonmetals) has what bond type?',
            options: ['nonpolar covalent', 'polar covalent', 'ionic', 'metallic'],
            correctIndex: 1,
            explanation: 'P and Cl are both nonmetals → covalent. Since $\\Delta\\chi = |3.0 - 2.1| = 0.9$, the bonds are polar covalent.'
          },
          {
            label: 'Compared to $\\text{BaO}$, $\\text{PCl}_3$ will have a melting point that is:',
            options: ['much higher', 'much lower', 'about the same'],
            correctIndex: 1,
            explanation: '$\\text{PCl}_3$ is a molecular compound with weak intermolecular forces (MP = $-93.6$ °C). $\\text{BaO}$ is an ionic compound with strong Coulombic attractions (MP = 1923 °C). Molecular compounds almost always have much lower melting points.'
          }
        ]
      }
    },
    {
      id: 'cb7-final-input',
      type: 'input-box' as const,
      content: `### Final Challenge — Apply What You've Learned

**1.** What type of bond forms between two fluorine atoms in $\text{F}_2$? (Enter "nonpolar covalent", "polar covalent", or "ionic")

**2.** In the compound $\text{LiF}$, which element gains the electron? (Enter "Li" or "F")

**3.** How many valence electrons does nitrogen ($Z = 7$) have?`,
      exercise: {
        inputs: [
          {
            label: 'Bond type in $\\text{F}_2$:',
            correctAnswer: 'nonpolar covalent',
            explanation: 'Two identical fluorine atoms share electrons equally ($\\Delta\\chi = 0$). This is a pure nonpolar covalent bond.'
          },
          {
            label: 'Element that gains the electron in LiF:',
            correctAnswer: 'F',
            explanation: 'Fluorine ($\\chi = 4.0$) is far more electronegative than lithium ($\\chi = 1.0$). Lithium transfers its electron to fluorine: $\\text{Li} \\rightarrow \\text{Li}^+ + e^-$; $\\text{F} + e^- \\rightarrow \\text{F}^-$.'
          },
          {
            label: 'Valence electrons in nitrogen:',
            correctAnswer: '5',
            explanation: 'Nitrogen ($Z = 7$) has the configuration $1s^2\\,2s^2\\,2p^3$. It has 5 valence electrons (in the $n = 2$ shell). This is why nitrogen typically forms 3 covalent bonds ($8 - 5 = 3$).'
          }
        ]
      }
    }
  ]
}
