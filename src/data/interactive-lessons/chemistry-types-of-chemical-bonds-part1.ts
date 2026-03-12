export const chemTypesOfChemicalBondsPart1Data = {
  topicSlug: 'types-of-chemical-bonds',
  sections: [
    {
      id: 'cb1-intro',
      type: 'text' as const,
      content: `# Part 1: Ionic Bonds

**Welcome to Types of Chemical Bonds!**

Chemical bonds hold atoms together to form compounds. The type of bond that forms depends on the properties of the atoms involved — particularly their **electronegativity** and whether they are metals or nonmetals.

In this seven-part series, you'll master ionic, covalent, and metallic bonding — essential knowledge for the AP Chemistry exam.

In Part 1, we focus on **ionic bonds**: how they form, what holds them together, and the properties they produce.`
    },
    {
      id: 'cb1-electron-transfer',
      type: 'text' as const,
      content: `## Ionic Bond Formation: Electron Transfer

An **ionic bond** forms when one or more electrons are **transferred** from a metal atom to a nonmetal atom.

### The Process

1. A **metal** atom loses one or more valence electrons → forms a **cation** ($+$ charge)
2. A **nonmetal** atom gains those electrons → forms an **anion** ($-$ charge)
3. The oppositely charged ions attract each other via **electrostatic (Coulombic) forces**

### Example: Sodium Chloride (NaCl)

$$\\text{Na} \\rightarrow \\text{Na}^+ + e^-$$
$$\\text{Cl} + e^- \\rightarrow \\text{Cl}^-$$

- Sodium ($Z = 11$): $[\\text{Ne}]\\,3s^1$ → loses 1 electron → $\\text{Na}^+$ with noble gas configuration $[\\text{Ne}]$
- Chlorine ($Z = 17$): $[\\text{Ne}]\\,3s^2\\,3p^5$ → gains 1 electron → $\\text{Cl}^-$ with noble gas configuration $[\\text{Ar}]$

### Why Does This Happen?

Metals have **low ionization energies** (easy to remove electrons) and nonmetals have **high electron affinities** (favorable to gain electrons). Both ions achieve a stable noble gas electron configuration.`
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
              'Transferred from a nonmetal to a metal',
              'Transferred from a metal to a nonmetal',
              'Destroyed and converted to energy'
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
              'Two nonmetals (N and O)',
              'Two metals (Na and K)',
              'A metal and a nonmetal (K and Br)',
              'Two noble gases (He and Ne)'
            ],
            correctAnswer: 2,
            explanation: 'Ionic bonds typically form between a metal (low ionization energy) and a nonmetal (high electron affinity). Potassium and bromine form KBr, a classic ionic compound.'
          }
        ]
      }
    },
    {
      id: 'cb1-lattice-energy',
      type: 'text' as const,
      content: `## Lattice Energy

Once ions form, they don't exist as isolated pairs. They arrange into a **crystal lattice** — a repeating 3D structure of alternating cations and anions.

### What Is Lattice Energy?

**Lattice energy** is the energy released when gaseous ions come together to form one mole of an ionic solid:

$$\\text{M}^{n+}(g) + \\text{X}^{m-}(g) \\rightarrow \\text{MX}(s) \\quad \\Delta H_{lattice} < 0$$

A **larger (more negative)** lattice energy means a **more stable** ionic compound.

### Coulomb\'s Law for Ions

The lattice energy is proportional to the Coulombic attraction between ions:

$$E \\propto \\frac{q_+ \\times q_-}{r_+ + r_-}$$

where:
- $q_+$ and $q_-$ are the charges on the cation and anion
- $r_+$ and $r_-$ are the ionic radii

### Trends in Lattice Energy

| Factor | Effect on Lattice Energy |
|--------|------------------------|
| Higher ion charges | **Increases** lattice energy (stronger attraction) |
| Smaller ionic radii | **Increases** lattice energy (ions closer together) |

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
              'Mg and O are lighter atoms',
              'MgO has higher ion charges ($+2, -2$) and smaller ions',
              'MgO is a gas at room temperature',
              'Mg is more electronegative than Na'
            ],
            correctAnswer: 1,
            explanation: 'MgO has ions with charges $+2$ and $-2$ (vs. $+1$ and $-1$ for NaCl), and both $\\text{Mg}^{2+}$ and $\\text{O}^{2-}$ are smaller than $\\text{Na}^+$ and $\\text{Cl}^-$. Both factors dramatically increase lattice energy.'
          }
        ]
      }
    },
    {
      id: 'cb1-properties',
      type: 'text' as const,
      content: `## Properties of Ionic Compounds

The strong electrostatic forces in ionic crystal lattices give ionic compounds distinctive physical properties:

| Property | Explanation |
|----------|-------------|
| **High melting and boiling points** | A large amount of energy is needed to overcome the strong Coulombic attractions in the lattice |
| **Hard but brittle** | The lattice is rigid, but if layers shift, like charges align and repel — the crystal shatters |
| **Conduct electricity when molten or dissolved** | Ions are mobile in liquid state or in aqueous solution |
| **Do NOT conduct as solids** | Ions are locked in fixed positions in the crystal lattice |
| **Soluble in polar solvents** | Water molecules can stabilize separated ions through ion-dipole interactions |

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
            options: ['ions are held by weak forces', 'strong electrostatic attractions must be overcome', 'they are molecular substances', 'they have low lattice energies'],
            correctIndex: 1,
            explanation: 'The strong Coulombic attractions between oppositely charged ions in the crystal lattice require a large amount of energy to break, resulting in high melting points.'
          },
          {
            label: 'Solid NaCl does NOT conduct electricity because:',
            options: ['it contains no ions', 'its ions are fixed in the lattice and cannot move', 'it has no electrons', 'it is a nonpolar substance'],
            correctIndex: 1,
            explanation: 'Solid ionic compounds have ions locked in fixed positions in the crystal lattice. They cannot move to carry charge. When melted or dissolved, the ions become mobile and can conduct.'
          },
          {
            label: 'When an ionic crystal is struck with a hammer, it shatters because:',
            options: ['the bonds are too weak', 'shifting layers causes like charges to align and repel', 'the crystal melts from the impact', 'electrons are knocked free'],
            correctIndex: 1,
            explanation: 'When layers in the lattice shift, ions of the same charge are forced next to each other. The resulting electrostatic repulsion causes the crystal to fracture.'
          },
          {
            label: 'Ionic compounds dissolve in water because water molecules:',
            options: ['are nonpolar', 'stabilize ions through ion-dipole interactions', 'form ionic bonds with the solute', 'share electrons with the ions'],
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

1. Calcium ($Z = 20$, Group 2) loses electrons to form a cation. What is the charge on the calcium ion? (Enter as a number, e.g., 2)

2. Fluorine ($Z = 9$, Group 17) gains electrons to form an anion. What is the charge on the fluoride ion? (Enter as a number, e.g., -1)

3. What is the ratio of Ca ions to F ions in calcium fluoride? (Enter as a ratio like 1:2)`,
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
            label: 'Ratio of Ca to F in CaF₂:',
            correctAnswer: '1:2',
            explanation: '$\\text{Ca}^{2+}$ needs two $\\text{F}^-$ ions to balance charges: $(+2) + 2(-1) = 0$. The formula is $\\text{CaF}_2$, so the ratio is 1:2.'
          }
        ]
      }
    }
  ]
}
