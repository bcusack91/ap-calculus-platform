export const chemVseprMolecularGeometryPart1Data = {
  topicSlug: 'vsepr-molecular-geometry',
  sections: [
    {
      id: 'vg-1-1',
      type: 'text',
      title: 'Introduction to VSEPR Theory',
      content: `# 🔬 VSEPR Theory and Molecular Geometry

**Part 1 of 7 — Introduction to VSEPR**

---

### Topics in This Part

| Section |
|---------|
| Why Does Shape Matter? |
| Critical Rule |
| Example Calculation |
| Electron Domain Geometry |
| Molecular Geometry |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'vg-1-2',
      type: 'text',
      title: 'Electron Domains (Electron Groups)',
      content: `## What Is an Electron Domain?

An **electron domain** (also called an **electron group** or **region of electron density**) is any of the following around a central atom:

| Electron Domain Type | Example |
|---------------------|---------|
| Single bond | C–H |
| Double bond | C=O |
| Triple bond | N≡N |
| Lone pair | :O: |

### Critical Rule

**A double bond counts as ONE electron domain.** A triple bond also counts as ONE electron domain. Only the number of *regions* of electron density matters, not the total number of electrons.

> 🔑 **Key Concept:** A double or triple bond counts as **one** electron domain — only the number of distinct regions of electron density matters, not the bond order or total electron count.

---

**Examples:**
- **$CO_{2}$**: C has 2 double bonds → **2 electron domains**
- **$H_{2}O$**: O has 2 single bonds + 2 lone pairs → **4 electron domains**
- **$NH_{3}$**: N has 3 single bonds + 1 lone pair → **4 electron domains**
- **HCN**: C has 1 single bond + 1 triple bond → **2 electron domains**`
    },
    {
      id: 'vg-1-3',
      type: 'multiple-choice',
      title: 'Counting Electron Domains',
      content: 'Identify the number of electron domains around the central atom.',
      exercise: {
        questions: [
          {
            question: 'How many electron domains surround the carbon atom in formaldehyde ($H_{2}C$=O)? Carbon has 2 single bonds to H and 1 double bond to O.',
            options: ['2', '3', '4', '5'],
            correctAnswer: 1,
            explanation: 'Carbon has 2 single bonds (to H atoms) + 1 double bond (to O) = 3 electron domains. Remember, a double bond counts as only one electron domain.'
          },
          {
            question: 'How many electron domains surround the nitrogen atom in $NH_{3}$? Nitrogen has 3 single bonds and 1 lone pair.',
            options: ['3', '4', '5', '6'],
            correctAnswer: 1,
            explanation: 'Nitrogen has 3 single bonds + 1 lone pair = 4 electron domains. Lone pairs count as electron domains just like bonds do.'
          },
          {
            question: 'How many electron domains surround the central carbon in $CO_{2}$? Carbon has 2 double bonds to oxygen.',
            options: ['2', '3', '4', '6'],
            correctAnswer: 0,
            explanation: 'Each double bond counts as 1 electron domain. Carbon has 2 double bonds = 2 electron domains.'
          }
        ]
      }
    },
    {
      id: 'vg-1-4',
      type: 'text',
      title: 'Steric Number',
      content: `## The Steric Number

The **steric number** is the total number of electron domains around the central atom. It is calculated as:

$$\\boxed{\\text{Steric Number} = \\text{(number of atoms bonded to central atom)} + \\text{(number of lone pairs on central atom)}}$$

The steric number determines the **electron domain geometry** — the arrangement of ALL electron groups (both bonding and lone pairs) in 3D space.

> 💡 **Tip:** The steric number equals the number of "things" attached to the central atom — count each bond (regardless of type) and each lone pair as one.

---

| Steric Number | Electron Domain Geometry |
|--------------|--------------------------|
| 2 | Linear |
| 3 | Trigonal planar |
| 4 | Tetrahedral |
| 5 | Trigonal bipyramidal |
| 6 | Octahedral |

### Example Calculation

**For $H_{2}O$:**
- Bonded atoms = 2 (two H atoms)
- Lone pairs on O = 2
- Steric number = 2 + 2 = **4**
- Electron domain geometry = **Tetrahedral**

> 🔑 **Key Concept:** The steric number maps directly to the electron domain geometry — memorize the five base shapes (linear, trigonal planar, tetrahedral, trigonal bipyramidal, octahedral).

Note: The *molecular* geometry (shape based only on atom positions) may differ from the electron domain geometry when lone pairs are present. We\'ll explore this distinction next.`
    },
    {
      id: 'vg-1-5',
      type: 'input-boxes',
      title: 'Steric Number Practice',
      content: 'Determine the steric number for each central atom.',
      exercise: {
        inputs: [
          {
            label: 'Steric number of carbon in $CH_{4}$ (4 bonds, 0 lone pairs)',
            correctAnswer: '4',
            explanation: 'Carbon in $CH_{4}$ has 4 bonded atoms and 0 lone pairs. Steric number = 4 + 0 = 4.'
          },
          {
            label: 'Steric number of sulfur in $SF_{6}$ (6 bonds, 0 lone pairs)',
            correctAnswer: '6',
            explanation: 'Sulfur in $SF_{6}$ has 6 bonded atoms and 0 lone pairs. Steric number = 6 + 0 = 6.'
          },
          {
            label: 'Steric number of phosphorus in $PCl_{5}$ (5 bonds, 0 lone pairs)',
            correctAnswer: '5',
            explanation: 'Phosphorus in $PCl_{5}$ has 5 bonded atoms and 0 lone pairs. Steric number = 5 + 0 = 5.'
          },
          {
            label: 'Steric number of xenon in $XeF_{2}$ (2 bonds, 3 lone pairs)',
            correctAnswer: '5',
            explanation: 'Xenon in $XeF_{2}$ has 2 bonded atoms + 3 lone pairs = steric number of 5.'
          }
        ]
      }
    },
    {
      id: 'vg-1-6',
      type: 'text',
      title: 'Electron Domain Geometry vs. Molecular Geometry',
      content: `## Two Types of Geometry

This is one of the **most important distinctions** in VSEPR theory:

### Electron Domain Geometry
- Describes the arrangement of **all electron domains** (bonding + lone pairs)
- Determined solely by the steric number
- Think of it as the "invisible scaffolding"

### Molecular Geometry
- Describes the arrangement of **only the atoms** (ignoring lone pairs)
- This is the actual **shape** of the molecule
- It\'s what we observe experimentally

### When Are They Different?

> 🔑 **Key Concept:** Electron domain geometry ≠ molecular geometry when lone pairs are present. The electron domain geometry includes lone pairs; the molecular geometry shows only atom positions.

They are the **same** when there are **no lone pairs** on the central atom.

They are **different** when **lone pairs are present** — because lone pairs take up space in the electron domain geometry but are invisible in the molecular shape.

**Example: $CH_{4}$ vs. $NH_{3}$ vs. $H_{2}O$**

| Molecule | Steric # | Lone Pairs | Electron Domain Geometry | Molecular Geometry |
|----------|----------|-----------|--------------------------|-------------------|
| $CH_{4}$ | 4 | 0 | Tetrahedral | Tetrahedral |
| $NH_{3}$ | 4 | 1 | Tetrahedral | Trigonal pyramidal |
| $H_{2}O$ | 4 | 2 | Tetrahedral | Bent |

All three have the same electron domain geometry (tetrahedral), but the molecular geometry changes as lone pairs replace bonding pairs.

---

> 💡 **Tip:** To find the molecular geometry, start with the electron domain geometry and "remove" the lone pairs — what remains is the molecular shape.`
    },
    {
      id: 'vg-1-7',
      type: 'multiple-choice',
      title: 'Geometry Distinction Quiz',
      content: 'Test your understanding of the difference between electron domain and molecular geometry.',
      exercise: {
        questions: [
          {
            question: 'When are the electron domain geometry and molecular geometry of a molecule identical?',
            options: [
              'When there are no bonds to the central atom',
              'When there are no lone pairs on the central atom',
              'When all atoms are the same element',
              'They are always identical'
            ],
            correctAnswer: 1,
            explanation: 'The two geometries are identical when there are no lone pairs on the central atom. Lone pairs are part of the electron domain geometry but invisible in the molecular geometry.'
          },
          {
            question: 'A molecule has a steric number of 4 and 1 lone pair on the central atom. What is its molecular geometry?',
            options: [
              'Tetrahedral',
              'Trigonal planar',
              'Trigonal pyramidal',
              'Bent'
            ],
            correctAnswer: 2,
            explanation: 'Steric number 4 → tetrahedral electron domain geometry. With 1 lone pair and 3 bonding pairs, the molecular geometry is trigonal pyramidal $(like NH_{3})$.'
          }
        ]
      }
    },
    {
      id: 'vg-1-8',
      type: 'dropdown-select',
      title: 'Electron Domains and Steric Number Review',
      content: 'Select the correct answers for each scenario.',
      exercise: {
        dropdowns: [
          {
            id: 'vg-1-8-dd1',
            label: 'A double bond counts as one electron domain. Two double bonds',
            options: ['1', '2', '3', '4'],
            correctIndex: 1,
            explanation: 'A double bond counts as one electron domain. Two double bonds = 2 electron domains.'
          },
          {
            id: 'vg-1-8-dd2',
            label: 'A steric number of 4 corresponds to a _______ electron domain geometry',
            options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Trigonal bipyramidal'],
            correctIndex: 2,
            explanation: 'A steric number of 4 corresponds to a tetrahedral electron domain geometry.'
          },
          {
            id: 'vg-1-8-dd3',
            label: 'An electron domain can be a bond (single, double, or triple) or a lone pair',
            options: ['Bond only', 'Lone pair only', 'Both bonds and lone pairs', 'Neither'],
            correctIndex: 2,
            explanation: 'An electron domain can be a bond (single, double, or triple) or a lone pair. Both count.'
          }
        ]
      }
    }
  ]
};
