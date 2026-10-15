export const chemTypesOfChemicalBondsPart1Data = {
  topicSlug: 'types-of-chemical-bonds',
  sections: [
    {
      id: 'cb1-intro',
      type: 'text' as const,
      content: `# Part 1: Ionic Bonds

**Part 1 of 7 — Ionic Bonds**

---

### Topics in This Part

| Section |
|---------|
| The Process |
| Example: Sodium Chloride (NaCl) |
| Why Does This Happen? |
| What Is Lattice Energy? |
| Coulomb\'s Law for Ions |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'cb1-electron-transfer',
      type: 'text' as const,
      content: `## 🔋 Ionic Bond Formation: Electron Transfer

An **ionic bond** forms when one or more electrons are **transferred** from a metal atom to a nonmetal atom.


---

### The Process

1. A **metal** atom loses one or more valence electrons → forms a **cation** ($+$ charge)
2. A **nonmetal** atom gains those electrons → forms an **anion** ($-$ charge)
3. The oppositely charged ions attract each other via **electrostatic (Coulombic) forces**


---

### Example: Sodium Chloride (NaCl)

$$\\text{Na} \\rightarrow \\text{Na}^+ + e^-$$
$$\\text{Cl} + e^- \\rightarrow \\text{Cl}^-$$

- Sodium ($Z = 11$): $[\\text{Ne}]\\,3s^1$ → loses 1 electron → $\\text{Na}^+$ with noble gas configuration $[\\text{Ne}]$
- Chlorine ($Z = 17$): $[\\text{Ne}]\\,3s^2\\,3p^5$ → gains 1 electron → $\\text{Cl}^-$ with noble gas configuration $[\\text{Ar}]$


---

### Why Does This Happen?

Metals have **low ionization energies** (easy to remove electrons) and nonmetals have **high electron affinities** (favorable to gain electrons). Both ions achieve a stable noble gas electron configuration.

> 🔑 **Key Concept:** Ionic bonds form between metals (low IE) and nonmetals (high EA) through electron transfer, producing cations and anions held together by Coulombic forces.`
    },
    {
      id: 'cb1-transfer-quiz',
      type: 'multiple-choice' as const,
      content: `### Check: Electron Transfer`,
      exercise: {
        questions: [
          {
            question: 'In the formation of an ionic bond, electrons are:',
            options: [
              'Shared equally between atoms',
              'Transferred from nonmetal to metal',
              'Transferred from a metal to a nonmetal',
              'Shared unequally between atoms'
            ],
            correctAnswer: 2,
            explanation: 'In ionic bonding, a metal atom transfers one or more electrons to a nonmetal atom. The metal becomes a cation and the nonmetal becomes an anion.'
          },
          {
            question: 'When magnesium ($Z = 12$) forms an ionic compound with oxygen ($Z = 8$), the formula is MgO. How many electrons does magnesium transfer?',
            options: [
              '1',
              '2',
              '3',
              '6'
            ],
            correctAnswer: 1,
            explanation: 'Magnesium has the configuration $[\\text{Ne}]\\,3s^2$. It loses 2 valence electrons to form $\\text{Mg}^{2+}$, and oxygen gains 2 electrons to form $\\text{O}^{2-}$.'
          },
          {
            question: 'Which pair of elements is most likely to form an ionic bond?',
            options: [
              'Two nonmetals far apart in the table (H and F)',
              'Two metals from different groups (Na and Mg)',
              'A metal and a nonmetal (K and Br)',
              'A metalloid and a nonmetal (Si and O)'
            ],
            correctAnswer: 2,
            explanation: 'Ionic bonds typically form between a metal (low ionization energy) and a nonmetal (high electron affinity). Potassium and bromine form KBr, a classic ionic compound. H and F are both nonmetals, so even with a large electronegativity difference they share electrons (polar covalent); Na and Mg form metallic bonding; and Si and O form a covalent network.'
          }
        ]
      }
    },
    {
      id: 'cb1-lattice-energy',
      type: 'text' as const,
      content: `## 📌 Lattice Energy

Once ions form, they don't exist as isolated pairs. They arrange into a **crystal lattice** — a repeating 3D structure of alternating cations and anions.


---

### What Is Lattice Energy?

**Lattice energy** is the energy released when gaseous ions come together to form one mole of an ionic solid:

$$\\boxed{\\text{M}^{n+}(g) + \\text{X}^{m-}(g) \\rightarrow \\text{MX}(s) \\quad \\Delta H_{lattice} < 0}$$

A **larger (more negative)** lattice energy means a **more stable** ionic compound.


---

### Coulomb\'s Law for Ions

The lattice energy is proportional to the Coulombic attraction between ions:

$$\\boxed{E \\propto \\frac{q_+ \\times q_-}{r_+ + r_-}}$$

where:
- $q_+$ and $q_-$ are the charges on the cation and anion
- $r_+$ and $r_-$ are the ionic radii


---

### Trends in Lattice Energy

| Factor | Effect on Lattice Energy |
|--------|------------------------|
| Higher ion charges | **Increases** lattice energy (stronger attraction) |
| Smaller ionic radii | **Increases** lattice energy (ions closer together) |

> 🔑 **Key Concept:** Lattice energy increases with higher ion charges and smaller ionic radii — both factors strengthen the Coulombic attraction between ions.


---

### Examples

| Compound | Ion Charges | Relative Lattice Energy |
|----------|------------|------------------------|
| NaCl | $+1, -1$ | Moderate (787 kJ/mol) |
| MgO | $+2, -2$ | Very high (3850 kJ/mol) |
| CsCl | $+1, -1$ | Lower than NaCl (657 kJ/mol) — larger ions |`
    },
    {
      id: 'cb1-lattice-quiz',
      type: 'multiple-choice' as const,
      content: `### Lattice Energy Ranking`,
      exercise: {
        questions: [
          {
            question: 'Which compound has the largest lattice energy?',
            options: [
              'NaF',
              'NaCl',
              'KCl',
              'KBr'
            ],
            correctAnswer: 0,
            explanation: 'NaF has the smallest ions among the choices (Na$^+$ is smaller than K$^+$; F$^-$ is smaller than Cl$^-$ or Br$^-$). Smaller ions → shorter distance → stronger Coulombic attraction → largest lattice energy.'
          },
          {
            question: 'MgO has a much higher lattice energy than NaCl because:',
            options: [
              'Mg and O are lighter atoms, so the lattice packs more tightly',
              'MgO has ions with higher charges and smaller radii',
              'MgO has covalent character, which adds bonds on top of the ionic ones',
              'Mg is more electronegative than Na, so it holds its electrons more tightly'
            ],
            correctAnswer: 1,
            explanation: 'MgO has ions with charges $+2$ and $-2$ (vs. $+1$ and $-1$ for NaCl), and both $\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ are smaller than $\\text{Na}^+$ and $\\text{Cl}^-$. Both factors dramatically increase lattice energy. Atomic mass and electronegativity do not set lattice energy, and MgO is an ionic solid, not a covalent one.'
          }
        ]
      }
    },
    {
      id: 'cb1-properties',
      type: 'text' as const,
      content: `## 🔬 Properties of Ionic Compounds

The strong electrostatic forces in ionic crystal lattices give ionic compounds distinctive physical properties:

| Property | Explanation |
|----------|-------------|
| **High melting and boiling points** | A large amount of energy is needed to overcome the strong Coulombic attractions in the lattice |
| **Hard but brittle** | The lattice is rigid, but if layers shift, like charges align and repel — the crystal shatters |
| **Conduct electricity when molten or dissolved** | Ions are mobile in liquid state or in aqueous solution |
| **Do NOT conduct as solids** | Ions are locked in fixed positions in the crystal lattice |
| **Soluble in polar solvents** | Water molecules can stabilize separated ions through ion-dipole interactions |

> ⚠️ **Warning:** Ionic compounds do **not** exist as discrete molecules. The formula NaCl represents a **formula unit** — the simplest ratio of ions in the crystal lattice.


---

### Why Brittle?

When a force shifts one layer of the lattice, cations end up next to cations and anions next to anions. The resulting **repulsion** causes the crystal to crack along that plane.`
    },
    {
      id: 'cb1-properties-dropdown',
      type: 'dropdown-select' as const,
      content: `### Properties of Ionic Compounds — Fill in the Blanks`,
      exercise: {
        dropdowns: [
          {
            label: 'Ionic compounds have high melting points because:',
            options: ['the covalent bonds in each molecule must break', 'strong electrostatic attractions must be overcome', 'strong forces hold separate molecules together', 'dense packing traps heat inside the lattice'],
            correctIndex: 1,
            explanation: 'The strong Coulombic attractions between oppositely charged ions in the crystal lattice require a large amount of energy to break, resulting in high melting points.'
          },
          {
            label: 'Solid NaCl does NOT conduct electricity because:',
            options: ['it is made of neutral NaCl molecules', 'its ions are fixed in the lattice and cannot move', 'its electrons are held in covalent bonds', 'it is nonpolar with no separated charge'],
            correctIndex: 1,
            explanation: 'Solid ionic compounds have ions locked in fixed positions in the crystal lattice. They cannot move to carry charge. When melted or dissolved, the ions become mobile and can conduct.'
          },
          {
            label: 'When an ionic crystal is struck with a hammer, it shatters because:',
            options: ['the ionic bonds are too weak to survive impact', 'shifting layers causes like charges to align and repel', 'the impact melts the crystal along a line', 'the hammer knocks electrons off the ions'],
            correctIndex: 1,
            explanation: 'When layers in the lattice shift, ions of the same charge are forced next to each other. The resulting electrostatic repulsion causes the crystal to fracture.'
          },
          {
            label: 'Ionic compounds dissolve in water because water molecules:',
            options: ['are nonpolar and slip between the ions', 'stabilize ions through ion-dipole interactions', 'form new ionic bonds with the ions', 'share electron pairs with the ions'],
            correctIndex: 1,
            explanation: 'Water is a polar solvent. The partial charges on water molecules interact with ions (ion-dipole forces), stabilizing them in solution and overcoming the lattice energy.'
          }
        ]
      }
    },
    {
      id: 'cb1-exit-input',
      type: 'input-box' as const,
      content: `### Part 1 Practice — Ion Formation

Determine the charge on each ion formed and the formula of the resulting ionic compound.

**1.** Calcium ($Z = 20$, Group 2) loses electrons to form a cation. What is the charge on the calcium ion? (Enter as a number, e.g., 2)

**2.** Fluorine ($Z = 9$, Group 17) gains electrons to form an anion. What is the charge on the fluoride ion? (Enter as a number, e.g., -1)

**3.** What is the ratio of Ca ions to F ions in calcium fluoride? (Enter as a ratio like 1:2)`,
      exercise: {
        inputs: [
          {
            label: 'Charge on Ca ion:',
            correctAnswer: '2',
            explanation: 'Calcium is in Group 2 with configuration $[\\text{Ar}]\\,4s^2$. It loses 2 valence electrons to form $\\text{Ca}^{2+}$.'
          },
          {
            label: 'Charge on F ion:',
            correctAnswer: '-1',
            explanation: 'Fluorine is in Group 17 with 7 valence electrons. It gains 1 electron to achieve a noble gas configuration, forming $\\text{F}^-$ (charge $-1$).'
          },
          {
            label: 'Ratio of Ca to F in $CaF_{2}$:',
            correctAnswer: '1:2',
            explanation: '$\\text{Ca}^{2+}$ needs two $\\text{F}^-$ ions to balance charges: $(+2) + 2(-1) = 0$. The formula is $\\text{CaF}_2$, so the ratio is 1:2.'
          }
        ]
      }
    }
  ]
}
