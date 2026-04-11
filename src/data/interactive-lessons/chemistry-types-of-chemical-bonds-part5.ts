export const chemTypesOfChemicalBondsPart5Data = {
  topicSlug: 'types-of-chemical-bonds',
  sections: [
    {
      id: 'cb5-intro',
      type: 'text' as const,
      content: `# Part 5: Comparing Bond Types

**Part 5 of 7 — Ionic, Covalent, and Metallic Properties Side by Side**

---

### Topics in This Part

| Section |
|---------|
| Key Distinctions to Remember |
| Decision Tree |
| Exceptions and Special Cases |
| The Polyatomic Ion Exception |
| What Are They? |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 5
- Understanding the core concepts covered in Part 5
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'cb5-comparison-table',
      type: 'text' as const,
      content: `## ⚖️ The Big Comparison Table

| Property | Ionic | Covalent (Molecular) | Metallic |
|----------|-------|---------------------|----------|
| **Particles** | Cations and anions | Molecules (atoms sharing electrons) | Cations in an electron sea |
| **Formation** | Metal + nonmetal | Nonmetal + nonmetal | Metal + metal |
| **Electron behavior** | Transferred | Shared | Delocalized |
| **Melting point** | High | Low to moderate | Variable (often high) |
| **Boiling point** | High | Low to moderate | Variable (often high) |
| **Hardness** | Hard but brittle | Soft (molecular crystals) | Variable; malleable |
| **Electrical conductivity (solid)** | No | No | Yes |
| **Electrical conductivity (liquid/dissolved)** | Yes | No (unless ionizes) | Yes |
| **Solubility in water** | Often soluble | Polar dissolves in polar | Insoluble |
| **Examples** | NaCl, MgO, CaF₂ | H₂O, CO₂, CH₄ | Fe, Cu, Al |


---

### Key Distinctions to Remember

1. **Ionic solids** don't conduct; ionic **liquids/solutions** do
2. **Metals** conduct in **all** states (solid and liquid)
3. **Molecular (covalent) compounds** generally don't conduct in any state
4. **Ionic and metallic** compounds have high melting points; **molecular** compounds have low melting points

> 🔑 **Key Concept:** Only metals conduct electricity as solids (delocalized electrons). Ionic compounds conduct only when molten or dissolved (mobile ions). Molecular compounds generally don’t conduct in any state.`
    },
    {
      id: 'cb5-comparison-quiz',
      type: 'multiple-choice' as const,
      content: `### Comparing Bond Types Quiz`,
      exercise: {
        questions: [
          {
            question: 'A substance has a high melting point, conducts electricity only when dissolved in water, and forms a brittle crystal. It is most likely:',
            options: [
              'A molecular compound',
              'A metal',
              'An ionic compound',
              'A covalent network solid'
            ],
            correctAnswer: 2,
            explanation: 'These are classic ionic compound properties: high melting point (strong lattice), conducts only when dissolved (mobile ions in solution), and brittle (layer shifting causes repulsion).'
          },
          {
            question: 'Which substance would you expect to have the lowest melting point?',
            options: [
              'NaCl (ionic)',
              'Fe (metallic)',
              'CH₄ (molecular)',
              'MgO (ionic)'
            ],
            correctAnswer: 2,
            explanation: 'Molecular compounds like CH₄ have weak intermolecular forces (London dispersion forces only). These require very little energy to overcome, resulting in very low melting points (CH₄ melts at $-182$ °C).'
          },
          {
            question: 'A solid conducts electricity and can be hammered into a thin sheet. It is most likely:',
            options: [
              'An ionic compound',
              'A molecular compound',
              'A metallic element',
              'A noble gas'
            ],
            correctAnswer: 2,
            explanation: 'Conductivity in the solid state and malleability are hallmarks of metals. The delocalized electron sea allows both electrical conduction and layer sliding without fracture.'
          }
        ]
      }
    },
    {
      id: 'cb5-predicting',
      type: 'text' as const,
      content: `## 📂 Predicting Bond Type from Elements

You can predict the most likely bond type based on the **types of elements** involved:


---

### Decision Tree

1. **Metal + nonmetal** → **Ionic bond**
   - Large $\\Delta\\chi$; electron transfer
   - Examples: NaCl, CaO, KBr

2. **Nonmetal + nonmetal** → **Covalent bond**
   - Similar electronegativities; electron sharing
   - Examples: H₂O, CO₂, NH₃

3. **Metal + metal** → **Metallic bond**
   - Delocalized valence electrons
   - Examples: Fe, Cu, brass (Cu + Zn alloy)

> 💡 **Tip:** Quick decision — Metal + Nonmetal → Ionic; Nonmetal + Nonmetal → Covalent; Metal + Metal → Metallic.


---

### Exceptions and Special Cases

| Case | Bond Type | Example |
|------|-----------|---------|
| **Polyatomic ions** | Covalent bonds *within* the ion; ionic bonds *between* ions | $\\text{NH}_4^+$, $\\text{SO}_4^{2-}$ |
| **Metal + metal (different)** | Metallic (alloy) | Bronze (Cu + Sn) |
| **Metalloid compounds** | Can be ionic or covalent | Depends on partner |


---

### The Polyatomic Ion Exception

Consider ammonium chloride ($\\text{NH}_4\\text{Cl}$):
- Inside $\\text{NH}_4^+$: nitrogen and hydrogen share electrons (**covalent** bonds)
- Between $\\text{NH}_4^+$ and $\\text{Cl}^-$: electrostatic attraction (**ionic** bond)

Many real compounds contain **both** ionic and covalent bonds!`
    },
    {
      id: 'cb5-predict-dropdown',
      type: 'dropdown-select' as const,
      content: `### Predict the Bond Type

For each pair of elements, predict the primary bond type.`,
      exercise: {
        dropdowns: [
          {
            label: 'Li and F (metal + nonmetal):',
            options: ['ionic', 'covalent', 'metallic'],
            correctIndex: 0,
            explanation: 'Lithium is a metal and fluorine is a nonmetal. The large electronegativity difference ($\\Delta\\chi = 3.0$) means electron transfer occurs → ionic bond.'
          },
          {
            label: 'S and O (nonmetal + nonmetal):',
            options: ['ionic', 'covalent', 'metallic'],
            correctIndex: 1,
            explanation: 'Both sulfur and oxygen are nonmetals. They share electrons to form covalent bonds (as in $\\text{SO}_2$ or $\\text{SO}_3$).'
          },
          {
            label: 'Cu and Zn (metal + metal):',
            options: ['ionic', 'covalent', 'metallic'],
            correctIndex: 2,
            explanation: 'Two metals form a metallic bond. Copper and zinc together form the alloy brass, held together by metallic bonding with delocalized electrons.'
          },
          {
            label: 'H and Cl (nonmetal + nonmetal):',
            options: ['ionic', 'covalent', 'metallic'],
            correctIndex: 1,
            explanation: 'Hydrogen and chlorine are both nonmetals. They share electrons to form HCl, a polar covalent bond ($\\Delta\\chi = 0.9$).'
          },
          {
            label: 'Ca and O (metal + nonmetal):',
            options: ['ionic', 'covalent', 'metallic'],
            correctIndex: 0,
            explanation: 'Calcium is a metal and oxygen is a nonmetal. Calcium transfers 2 electrons to oxygen, forming $\\text{Ca}^{2+}$ and $\\text{O}^{2-}$ → ionic bond (CaO).'
          }
        ]
      }
    },
    {
      id: 'cb5-network-covalent',
      type: 'text' as const,
      content: `## ⭐ Special Case: Covalent Network Solids

Not all covalent compounds are soft with low melting points. **Covalent network solids** are an important exception:


---

### What Are They?

In a covalent network solid, atoms are connected by **continuous covalent bonds** throughout the entire structure — there are no individual molecules.


---

### Examples

| Substance | Structure | Melting Point |
|-----------|-----------|---------------|
| **Diamond** (C) | Each C bonded to 4 others in a 3D tetrahedral network | 3550 °C |
| **Silicon dioxide** ($\\text{SiO}_2$) | Each Si bonded to 4 O atoms; each O bridges 2 Si atoms | 1710 °C |
| **Silicon carbide** (SiC) | Similar to diamond structure | 2730 °C |


---

### Properties of Network Covalent Solids

- **Extremely high** melting points (must break strong covalent bonds)
- **Very hard** (diamond is the hardest natural substance)
- **Do not conduct** electricity (no mobile charges)
  - Exception: **Graphite** — delocalized electrons in its layered structure allow conduction
- **Insoluble** in virtually all solvents`
    },
    {
      id: 'cb5-identification-quiz',
      type: 'multiple-choice' as const,
      content: `### Substance Identification Quiz`,
      exercise: {
        questions: [
          {
            question: 'Diamond has an extremely high melting point (3550 °C) because:',
            options: [
              'It has strong ionic bonds',
              'It has strong metallic bonds',
              'It is a covalent network solid with continuous C—C bonds throughout',
              'It has strong intermolecular forces between molecules'
            ],
            correctAnswer: 2,
            explanation: 'Diamond is a covalent network solid. Every carbon atom is covalently bonded to 4 others in a continuous 3D network. Melting requires breaking these strong covalent bonds, not just intermolecular forces.'
          },
          {
            question: 'A substance melts at $-78$ °C and does not conduct electricity in any state. It is most likely:',
            options: [
              'An ionic compound',
              'A metallic element',
              'A molecular (covalent) compound',
              'A covalent network solid'
            ],
            correctAnswer: 2,
            explanation: 'Very low melting point = weak intermolecular forces = molecular compound. It doesn\'t conduct in any state because there are no mobile ions or delocalized electrons. (This describes CO₂, which sublimes at $-78$ °C.)'
          }
        ]
      }
    },
    {
      id: 'cb5-exit-input',
      type: 'input-box' as const,
      content: `### Part 5 Practice

**1.** Do ionic solids conduct electricity? (Enter "yes" or "no")

**2.** What type of bonding is present in a sample of pure copper? (Enter "ionic", "covalent", or "metallic")

**3.** A substance is hard, brittle, has a high melting point, and conducts when dissolved. What bond type is present? (Enter "ionic", "covalent", or "metallic")`,
      exercise: {
        inputs: [
          {
            label: 'Ionic solids conduct electricity:',
            correctAnswer: 'no',
            explanation: 'Ionic solids do NOT conduct electricity because their ions are fixed in the crystal lattice and cannot move. They conduct only when melted or dissolved in water.'
          },
          {
            label: 'Bond type in pure copper:',
            correctAnswer: 'metallic',
            explanation: 'Pure copper consists of copper atoms held together by metallic bonding — cations in a sea of delocalized electrons.'
          },
          {
            label: 'Bond type (hard, brittle, high MP, conducts dissolved):',
            correctAnswer: 'ionic',
            explanation: 'Hard but brittle + high melting point + conducts when dissolved = ionic compound. The ionic lattice is rigid (brittle), requires lots of energy to melt (high MP), and releases mobile ions when dissolved.'
          }
        ]
      }
    }
  ]
}
