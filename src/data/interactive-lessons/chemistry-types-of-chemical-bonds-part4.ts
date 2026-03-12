export const chemTypesOfChemicalBondsPart4Data = {
  topicSlug: 'types-of-chemical-bonds',
  sections: [
    {
      id: 'cb4-intro',
      type: 'text' as const,
      content: `# Part 4: Bond Polarity

**Part 4 of 7 — Electronegativity and Polar Bonds**

Not all covalent bonds are created equal. When two atoms share electrons, the sharing may not be **equal** — one atom may attract the shared electrons more strongly. This creates a **polar covalent bond**, a concept that bridges the gap between pure covalent and ionic bonding.`
    },
    {
      id: 'cb4-electronegativity',
      type: 'text' as const,
      content: `## Electronegativity

**Electronegativity** ($\\chi$) is a measure of an atom's ability to attract shared electrons toward itself in a covalent bond.

### The Pauling Scale

Linus Pauling developed the most widely used electronegativity scale:

| Element | Electronegativity |
|---------|------------------|
| F | 4.0 (highest) |
| O | 3.5 |
| N | 3.0 |
| Cl | 3.0 |
| C | 2.5 |
| H | 2.1 |
| Na | 0.9 |
| Cs | 0.7 (lowest) |

### Periodic Trends

- **Across a period (left → right):** Electronegativity **increases** (higher $Z_{eff}$, stronger pull on shared electrons)
- **Down a group (top → bottom):** Electronegativity **decreases** (valence electrons farther from nucleus, weaker pull)

**Fluorine** is the most electronegative element. **Cesium** and **francium** are the least electronegative.

*Note: Noble gases are generally not assigned electronegativity values because they rarely form bonds.*`
    },
    {
      id: 'cb4-en-quiz',
      type: 'multiple-choice' as const,
      content: `### Electronegativity Check`,
      exercise: {
        questions: [
          {
            question: 'Which element has the highest electronegativity?',
            options: [
              'Oxygen',
              'Fluorine',
              'Chlorine',
              'Nitrogen'
            ],
            correctAnswer: 1,
            explanation: 'Fluorine ($\\chi = 4.0$) is the most electronegative element. It is in the upper right corner of the periodic table (excluding noble gases), where electronegativity is highest.'
          },
          {
            question: 'Electronegativity generally increases:',
            options: [
              'Down a group and across a period (left to right)',
              'Down a group and across a period (right to left)',
              'Up a group and across a period (left to right)',
              'Up a group and across a period (right to left)'
            ],
            correctAnswer: 2,
            explanation: 'Electronegativity increases going UP a group (smaller atoms, stronger pull) and going LEFT to RIGHT across a period (higher $Z_{eff}$).'
          }
        ]
      }
    },
    {
      id: 'cb4-en-difference',
      type: 'text' as const,
      content: `## Electronegativity Difference and Bond Type

The **electronegativity difference** ($\\Delta\\chi$) between two bonded atoms determines the bond type:

$$\\Delta\\chi = |\\chi_A - \\chi_B|$$

| $\\Delta\\chi$ Range | Bond Type | Electron Distribution |
|---------------------|-----------|----------------------|
| $0$ | **Pure (nonpolar) covalent** | Equal sharing |
| $0 < \\Delta\\chi < 0.5$ | **Nonpolar covalent** | Nearly equal sharing |
| $0.5 \\leq \\Delta\\chi < 1.7$ | **Polar covalent** | Unequal sharing |
| $\\Delta\\chi \\geq 1.7$ | **Ionic** | Electron transfer |

> ⚠️ **AP Note:** These boundaries are approximate guidelines, not rigid cutoffs. The transition from polar covalent to ionic is a **continuum**, not a sharp divide. On the AP exam, focus on the concept of a spectrum rather than memorizing exact numbers.

### Examples

| Bond | $\\Delta\\chi$ | Type |
|------|---------------|------|
| H—H | $|2.1 - 2.1| = 0$ | Nonpolar covalent |
| C—H | $|2.5 - 2.1| = 0.4$ | Nonpolar covalent (nearly) |
| O—H | $|3.5 - 2.1| = 1.4$ | Polar covalent |
| Na—Cl | $|3.0 - 0.9| = 2.1$ | Ionic |`
    },
    {
      id: 'cb4-polar-bonds',
      type: 'text' as const,
      content: `## Polar Covalent Bonds in Detail

In a **polar covalent bond**, electrons are shared **unequally**. The more electronegative atom pulls the shared electrons closer to itself.

### Partial Charges

This unequal sharing creates **partial charges** (denoted $\\delta$):

- The more electronegative atom gains a partial negative charge: $\\delta^-$
- The less electronegative atom gains a partial positive charge: $\\delta^+$

### Example: HCl

$$\\overset{\\delta^+}{\\text{H}} — \\overset{\\delta^-}{\\text{Cl}}$$

Chlorine ($\\chi = 3.0$) is more electronegative than hydrogen ($\\chi = 2.1$), so the shared electrons spend more time near Cl, giving it a $\\delta^-$ charge.

### Dipole Moment

A polar bond has a **dipole moment** ($\\mu$), which is a vector pointing from the positive end toward the negative end:

$$\\mu = q \\times d$$

where $q$ is the magnitude of the partial charge and $d$ is the bond length.

The larger the electronegativity difference and the longer the bond, the larger the dipole moment.`
    },
    {
      id: 'cb4-classify-dropdown',
      type: 'dropdown-select' as const,
      content: `### Classify These Bonds

Use electronegativity differences to classify each bond.`,
      exercise: {
        dropdowns: [
          {
            label: 'N—H bond ($\\Delta\\chi = |3.0 - 2.1| = 0.9$):',
            options: ['nonpolar covalent', 'polar covalent', 'ionic'],
            correctIndex: 1,
            explanation: '$\\Delta\\chi = 0.9$ falls in the polar covalent range ($0.5$ to $1.7$). Nitrogen is more electronegative and pulls the shared electrons toward itself.'
          },
          {
            label: 'Cl—Cl bond ($\\Delta\\chi = |3.0 - 3.0| = 0$):',
            options: ['nonpolar covalent', 'polar covalent', 'ionic'],
            correctIndex: 0,
            explanation: 'Identical atoms have equal electronegativities, so $\\Delta\\chi = 0$. The electrons are shared equally — a pure nonpolar covalent bond.'
          },
          {
            label: 'K—F bond ($\\Delta\\chi = |4.0 - 0.8| = 3.2$):',
            options: ['nonpolar covalent', 'polar covalent', 'ionic'],
            correctIndex: 2,
            explanation: '$\\Delta\\chi = 3.2$ is well above 1.7, indicating an ionic bond. Potassium effectively transfers its electron to fluorine.'
          },
          {
            label: 'C—O bond ($\\Delta\\chi = |3.5 - 2.5| = 1.0$):',
            options: ['nonpolar covalent', 'polar covalent', 'ionic'],
            correctIndex: 1,
            explanation: '$\\Delta\\chi = 1.0$ is in the polar covalent range. Oxygen is more electronegative and attracts the shared electrons more strongly.'
          }
        ]
      }
    },
    {
      id: 'cb4-continuum',
      type: 'text' as const,
      content: `## The Bonding Continuum

Bond types are not distinct categories — they form a **continuum**:

$$\\text{Nonpolar Covalent} \\longleftrightarrow \\text{Polar Covalent} \\longleftrightarrow \\text{Ionic}$$

### Percent Ionic Character

Every bond (except between identical atoms) has some degree of ionic character. As $\\Delta\\chi$ increases:
- The bond becomes more polar
- The electron distribution becomes more asymmetric
- Eventually, the bond is essentially ionic (electrons effectively transferred)

### Important AP Concept

Even bonds classified as "ionic" have some covalent character, and vice versa. The AP exam often tests whether students understand that **bonding is a spectrum**, not a set of discrete categories.

### Quick Rule of Thumb

- **Same element** → nonpolar covalent ($\\text{H}_2$, $\\text{O}_2$, $\\text{N}_2$)
- **Two different nonmetals** → usually polar covalent ($\\text{HCl}$, $\\text{H}_2\\text{O}$)
- **Metal + nonmetal** → usually ionic ($\\text{NaCl}$, $\\text{MgO}$)`
    },
    {
      id: 'cb4-exit-input',
      type: 'input-box' as const,
      content: `### Part 4 Practice — Electronegativity and Polarity

1. Calculate $\\Delta\\chi$ for an O—H bond. (O: $\\chi = 3.5$, H: $\\chi = 2.1$. Enter to 3 significant figures.)

2. In the bond H—F, which atom carries the partial negative charge ($\\delta^-$)? (Enter "H" or "F")

3. Calculate $\\Delta\\chi$ for a Na—Cl bond. (Na: $\\chi = 0.9$, Cl: $\\chi = 3.0$. Enter to 3 significant figures.)`,
      exercise: {
        inputs: [
          {
            label: '$\\Delta\\chi$ for O—H:',
            correctAnswer: '1.4',
            explanation: '$\\Delta\\chi = |3.5 - 2.1| = 1.4$. This places the O—H bond in the polar covalent range.'
          },
          {
            label: 'Atom with $\\delta^-$ in H—F:',
            correctAnswer: 'F',
            explanation: 'Fluorine ($\\chi = 4.0$) is more electronegative than hydrogen ($\\chi = 2.1$), so fluorine attracts the shared electrons and carries the partial negative charge ($\\delta^-$).'
          },
          {
            label: '$\\Delta\\chi$ for Na—Cl:',
            correctAnswer: '2.1',
            explanation: '$\\Delta\\chi = |3.0 - 0.9| = 2.1$. This large difference indicates an ionic bond — sodium effectively transfers its electron to chlorine.'
          }
        ]
      }
    }
  ]
}
