export const chemSolutionsSolubilityPart4Data = {
  topicSlug: 'solutions-solubility',
  sections: [
    {
      id: 'ss4-intro',
      type: 'text' as const,
      content: `# 🔬 Picturing Solutions

**Part 4 of 7 — Particulate Representations of Solutions**

---

### Topics in This Part

| Section |
|---------|
| 🔬 What a Particle Diagram Must Show |
| 📊 Reading Concentration from a Diagram |
| 💧 Drawing Solute–Solvent Interactions |
| 🧪 Before-and-After Diagrams |

> 🔑 **Key Concept:** The AP exam regularly asks you to draw or judge particle-level pictures of solutions. A correct picture gets the **ratio** of particles, the **concentration**, and the **orientation** of solvent molecules right.

---

### What You'll Master in Part 4
- Checking whether a particle diagram matches a solution's formula and concentration
- Comparing concentrations by counting particles per volume
- Showing ion–dipole and hydrogen-bonding interactions with correct orientation`
    },
    {
      id: 'ss4-what-diagram-shows',
      type: 'text' as const,
      content: `
## 🔬 What a Particle Diagram Must Show

A particulate representation is a "zoomed-in" sketch of a tiny volume of solution. To be correct, it has to agree with the chemistry in three ways.


---

### 1. Ionic Solutes Appear as Separated Ions

A soluble ionic compound is drawn as **separate, individually hydrated ions**, never as intact formula units.

| Solute | What the Diagram Shows |
|--------|------------------------|
| NaCl(aq) | Equal numbers of $Na^{+}$ and $Cl^{-}$, scattered apart |
| $CaCl_{2}$(aq) | Twice as many $Cl^{-}$ as $Ca^{2+}$ |
| $Na_{2}SO_{4}$(aq) | Twice as many $Na^{+}$ as $SO_{4}^{2-}$, with each sulfate kept as one unit |


---

### 2. Molecular Solutes Stay Intact

Glucose, ethanol, and other molecular solutes are drawn as **whole molecules** spread through the solvent. They do not split into ions.


---

### 3. Charge Must Balance

Count the charges in the diagram. For $CaCl_{2}$, three $Ca^{2+}$ ions (total $+6$) require six $Cl^{-}$ ions (total $-6$). A picture with unequal total positive and negative charge cannot be right.

> 💡 **Tip:** If a diagram shows a cation and an anion touching with no water between them, it is showing the undissolved solid or an ion pair, not a fully dissolved strong electrolyte.
      `
    },
    {
      id: 'ss4-diagram-check-quiz',
      type: 'multiple-choice' as const,
      content: `
**Does the Diagram Match?** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A particle diagram of $MgBr_{2}$(aq) shows 4 magnesium ions. How many bromide ions must it show?',
            options: [
              '2',
              '4',
              '8',
              '12'
            ],
            correctAnswer: 2,
            explanation: 'Each $MgBr_{2}$ releases one $Mg^{2+}$ and two $Br^{-}$, so 4 magnesium ions come with 8 bromide ions. The charges also balance: $4(+2) = +8$ and $8(-1) = -8$.'
          },
          {
            question: 'Which description is the most accurate particle diagram of glucose dissolved in water?',
            options: [
              'Whole glucose molecules spread evenly through the solvent',
              'Glucose split into separate C, H, and O atoms',
              'Glucose split into positive and negative ions',
              'Glucose molecules clumped together at the bottom'
            ],
            correctAnswer: 0,
            explanation: 'Glucose is a molecular compound and a nonelectrolyte. It dissolves as whole molecules surrounded by water and does not break into ions or atoms. A clump at the bottom would be undissolved solid, not a solution.'
          },
          {
            question: 'A student draws $K_{3}PO_{4}$(aq) as 6 $K^{+}$ ions and 2 $PO_{4}^{3-}$ ions. What is wrong with the drawing?',
            options: [
              'Phosphate should be drawn as P and O atoms',
              'There is no error in the ion ratio or the charges',
              'There should be 6 phosphate ions',
              'There should be 3 potassium ions'
            ],
            correctAnswer: 1,
            explanation: 'Each $K_{3}PO_{4}$ gives three $K^{+}$ and one $PO_{4}^{3-}$, so 6 potassium ions pair with 2 phosphate ions. The charges balance ($+6$ and $-6$), and phosphate correctly stays together as a polyatomic ion.'
          }
        ]
      }
    },
    {
      id: 'ss4-reading-concentration',
      type: 'text' as const,
      content: `
## 📊 Reading Concentration from a Diagram

Molarity is moles per liter, so in a diagram concentration means **solute particles per unit volume**.


---

### Comparing Two Beakers

| Diagram | Solute Particles | Volume Shown | Relative Concentration |
|---------|------------------|--------------|------------------------|
| Beaker X | 6 | 1 box | 6 per box |
| Beaker Y | 6 | 2 boxes | 3 per box |
| Beaker Z | 12 | 2 boxes | 6 per box |

Beakers X and Z have the **same concentration** even though Z contains twice as many particles. Beaker Y is half as concentrated as X.


---

### What Changes and What Doesn't

| Process | Number of Solute Particles | Volume | Concentration |
|---------|----------------------------|--------|---------------|
| Adding water (dilution) | Same | Larger | Lower |
| Evaporating water | Same | Smaller | Higher |
| Pouring out half the solution | Halved | Halved | Same |

> 🔑 **Key Concept:** Pouring out part of a solution never changes its concentration. Only changing the ratio of solute to volume does.
      `
    },
    {
      id: 'ss4-counting-drill',
      type: 'input-boxes' as const,
      content: `
**Counting from Diagrams** 🧮

Each diagram box represents the same small volume of solution.

**1)** A diagram of $Al(NO_{3})_{3}$(aq) shows 5 aluminum ions. How many nitrate ions does it show?

**2)** Box A shows 8 dissolved sugar molecules in 1 volume unit. Box B is made by adding water to Box A until the volume is 4 volume units. How many sugar molecules per volume unit does Box B have?

**3)** Beaker 1 shows 10 $Cl^{-}$ ions in 2 volume units. Beaker 2 shows 9 $Cl^{-}$ ions in 1 volume unit. What is the ratio of the chloride concentration in Beaker 2 to that in Beaker 1? (to 2 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '2', '1.8'],
        hint1: 'Each $Al(NO_{3})_{3}$ releases three nitrate ions.',
        hint2: 'Adding water keeps the 8 molecules but spreads them over 4 volume units.',
        hint3: 'Beaker 1: 10/2 = 5 per unit. Beaker 2: 9/1 = 9 per unit.',
        explanation: '1) $5 \\times 3 = 15$ nitrate ions. 2) $8 \\div 4 = 2$ molecules per volume unit. 3) Beaker 1 has 5 per unit and Beaker 2 has 9 per unit, so the ratio is $9/5 = 1.8$.'
      }
    },
    {
      id: 'ss4-interactions',
      type: 'text' as const,
      content: `
## 💧 Drawing Solute–Solvent Interactions

Particle diagrams also show **how** the solvent surrounds each solute particle. Orientation is graded.


---

### Ion–Dipole Interactions

Water is polar: the oxygen end carries a partial negative charge ($\\delta^-$) and the hydrogen ends carry partial positive charges ($\\delta^+$).

| Ion | Which End of Water Points Toward It | Reason |
|-----|-------------------------------------|--------|
| Cation ($Na^{+}$, $Ca^{2+}$) | **Oxygen** end | $\\delta^-$ oxygen is attracted to the positive ion |
| Anion ($Cl^{-}$, $SO_{4}^{2-}$) | **Hydrogen** end | $\\delta^+$ hydrogens are attracted to the negative ion |


---

### Strength of the Attraction

Coulomb's law applies: ion–dipole attraction is stronger for **higher ion charge** and **smaller ion size**. A $Mg^{2+}$ ion holds its surrounding water molecules more tightly than a $Na^{+}$ ion does.


---

### Molecular Solutes

- **Ethanol in water:** draw hydrogen bonds between the O–H of ethanol and water molecules (an H on one molecule lined up with a lone pair on the O of the other)
- **Nonpolar solutes (like $I_{2}$ in hexane):** only London dispersion forces; no special orientation is needed

> ⚠️ **Warning:** A diagram that shows water's hydrogen atoms pointing toward a cation is a classic wrong answer. Like charges would repel.
      `
    },
    {
      id: 'ss4-interaction-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Orientation and Interactions** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Around a dissolved $K^{+}$ ion, water molecules point their',
            options: ['oxygen atoms toward the ion', 'hydrogen atoms toward the ion', 'molecular planes toward the ion', 'random sides toward the ion']
          },
          {
            label: 'Around a dissolved $Br^{-}$ ion, water molecules point their',
            options: ['oxygen atoms toward the ion', 'hydrogen atoms toward the ion', 'molecular planes toward the ion', 'random sides toward the ion']
          },
          {
            label: 'The strongest ion–dipole attraction to water is expected for',
            options: ['$K^{+}$', '$Na^{+}$', '$Mg^{2+}$', '$Cs^{+}$']
          },
          {
            label: 'Between dissolved methanol and water, the main interaction to draw is',
            options: ['ion–dipole attraction', 'hydrogen bonding', 'covalent bonding', 'ionic bonding']
          }
        ],
        correctAnswers: ['oxygen atoms toward the ion', 'hydrogen atoms toward the ion', '$Mg^{2+}$', 'hydrogen bonding'],
        hint1: 'Opposite partial and full charges attract.',
        hint2: 'Coulombic attraction grows with charge and shrinks with distance.',
        hint3: 'Methanol has an O–H group, just like water.',
        explanation: 'The $\\delta^-$ oxygen faces cations and the $\\delta^+$ hydrogens face anions. $Mg^{2+}$ has the highest charge and a small radius, so it attracts water most strongly. Methanol and water both have O–H groups, so they hydrogen bond with each other.'
      }
    },
    {
      id: 'ss4-before-after',
      type: 'text' as const,
      content: `
## 🧪 Before-and-After Diagrams

AP questions often show a solution **before** and **after** a change and ask which picture is consistent.


---

### Example: Mixing Two Solutions

Equal volumes of 0.20 M NaCl and 0.20 M $KNO_{3}$ are mixed. No precipitate forms (every salt here contains $Na^{+}$, $K^{+}$, or $NO_{3}^{-}$).

- The total volume doubles, so **each ion's concentration is halved** to 0.10 M.
- The "after" diagram shows four kinds of separated ions, $Na^{+}$, $Cl^{-}$, $K^{+}$, and $NO_{3}^{-}$, in equal numbers.
- No new compound is drawn, because nothing reacted.


---

### Example: A Precipitate Forms

Equal volumes of $AgNO_{3}$(aq) and NaCl(aq) with the same molarity are mixed.

- The "after" diagram shows **solid AgCl** as a cluster of alternating $Ag^{+}$ and $Cl^{-}$ ions, usually at the bottom.
- $Na^{+}$ and $NO_{3}^{-}$ remain separated in solution as spectator ions.
- If the amounts were equal, essentially no free $Ag^{+}$ or $Cl^{-}$ remains dissolved.
      `
    },
    {
      id: 'ss4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Particulate Representations** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Diagram P shows 12 solute particles in 3 volume units. Diagram Q shows 8 solute particles in 1 volume unit. Which statement is correct?',
            options: [
              'P is more concentrated because it has more particles',
              'Q is twice as concentrated as P',
              'P and Q have the same concentration',
              'Q is three times as concentrated as P'
            ],
            correctAnswer: 1,
            explanation: 'P has $12/3 = 4$ particles per volume unit and Q has $8/1 = 8$, so Q is twice as concentrated. The total number of particles alone does not determine concentration; the volume matters too.'
          },
          {
            question: 'Half of a 0.30 M $Na_{2}SO_{4}$ solution is poured into a second beaker. Compared with a diagram of the original solution, a diagram of the poured-out portion shows',
            options: [
              'the same number of ions per unit volume',
              'half as many ions per unit volume',
              'twice as many ions per unit volume',
              'only sodium ions, since sulfate stays behind'
            ],
            correctAnswer: 0,
            explanation: 'A solution is homogeneous, so every portion has the same concentration. Pouring out half reduces the number of ions and the volume together, leaving the ions per unit volume unchanged. Both kinds of ions are spread evenly through the whole solution.'
          }
        ]
      }
    }
  ]
}
