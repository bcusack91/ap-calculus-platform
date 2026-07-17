export const chemVseprMolecularGeometryPart4Data = {
  topicSlug: 'vsepr-molecular-geometry',
  sections: [
    {
      id: 'vg-4-1',
      type: 'text',
      title: 'Lone Pairs Change Everything',
      content: `# 👁️ Lone Pair Effects on Molecular Geometry

**Part 4 of 7 — Bent, Trigonal Pyramidal, Seesaw, T-Shaped, Square Pyramidal, and Square Planar**

---

### Topics in This Part

| Section |
|---------|
| Key Principle: Lone Pair Repulsion is Stronger |
| Tetrahedral (0 lone pairs) |
| Trigonal Pyramidal (1 lone pair) |
| Bent (2 lone pairs) |
| The Compression Pattern |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 4
- Understanding the core concepts covered in Part 4
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'vg-4-2',
      type: 'text',
      title: 'Geometries from Tetrahedral (Steric Number 4)',
      content: `## Molecular Shapes from Steric Number 4

All of these have **tetrahedral electron domain geometry** but different molecular geometries:

### Tetrahedral (0 lone pairs)
- **Example:** $CH_{4}$
- Bond angle: **109.5°**
- 4 bonds, 0 lone pairs

### Trigonal Pyramidal (1 lone pair)
- **Example:** $NH_{3}$
- Bond angle: **≈107°** (compressed from 109.5°)
- 3 bonds, 1 lone pair
- Shape: like a tripod or a pyramid with a triangular base

### Bent (2 lone pairs)
- **Example:** $H_{2}O$
- Bond angle: **≈104.5°** (compressed further)
- 2 bonds, 2 lone pairs
- Shape: like a boomerang or V-shape

### The Compression Pattern

> 🔑 **Key Concept:** Each additional lone pair on the central atom compresses bond angles by about 2–2.5° from the ideal value.

| Molecule | Lone Pairs | Bond Angle | Why? |
|----------|-----------|------------|------|
| $CH_{4}$ | 0 | 109.5° | Ideal tetrahedral |
| $NH_{3}$ | 1 | ≈107° | 1 LP compresses bonds |
| $H_{2}O$ | 2 | ≈104.5° | 2 LPs compress more |

Each additional lone pair compresses the bond angle by about 2–2.5°.

---`
    },
    {
      id: 'vg-4-3',
      type: 'multiple-choice',
      title: 'Steric Number 4 Shapes',
      content: 'Identify the molecular geometry for each scenario.',
      exercise: {
        questions: [
          {
            question: 'A molecule has 4 electron domains and 2 lone pairs on the central atom. What is its molecular geometry?',
            options: ['Tetrahedral', 'Trigonal pyramidal', 'Bent', 'Linear'],
            correctAnswer: 2,
            explanation: '4 electron domains with 2 lone pairs leaves 2 bonding pairs. This gives a bent (V-shaped) molecular geometry, like $H_{2}O$.'
          },
          {
            question: 'The bond angle in $NH_{3}$ (≈107°) is less than the ideal tetrahedral angle (109.5°) because:',
            options: [
              'Nitrogen is smaller than carbon',
              'Hydrogen atoms are too light',
              'The lone pair repels bonding pairs more strongly, compressing the H–N–H angles',
              '$NH_{3}$ has only 3 bonds instead of 4'
            ],
            correctAnswer: 2,
            explanation: 'Lone pair–bond pair repulsion is stronger than bond pair–bond pair repulsion. The lone pair pushes the bonding pairs closer together, reducing the bond angle from 109.5° to about 107°.'
          },
          {
            question: 'What is the molecular geometry of $NF_{3}$? (N has 5 valence $e^{-}$, each F has 7)',
            options: ['Trigonal planar', 'Tetrahedral', 'Trigonal pyramidal', 'Bent'],
            correctAnswer: 2,
            explanation: 'N in $NF_{3}$ has 3 bonds + 1 lone pair = 4 electron domains. Electron domain geometry is tetrahedral, but with 1 lone pair the molecular geometry is trigonal pyramidal.'
          }
        ]
      }
    },
    {
      id: 'vg-4-4',
      type: 'text',
      title: 'Geometries from Trigonal Bipyramidal (Steric Number 5)',
      content: `## Molecular Shapes from Steric Number 5

Starting from trigonal bipyramidal electron domain geometry, lone pairs always go in **equatorial** positions first (fewer 90° repulsions).

> 💡 **Tip:** In a trigonal bipyramid, always place lone pairs in **equatorial** positions first — they have only 2 neighbors at 90° (vs. 3 for axial), minimizing repulsion.

---

### Trigonal Bipyramidal (0 lone pairs)
- **Example:** $PCl_{5}$
- 5 bonds, 0 lone pairs
- Bond angles: 90° (ax–eq) and 120° (eq–eq)

### Seesaw (1 lone pair, equatorial)
- **Example:** $SF_{4}$
- 4 bonds, 1 lone pair
- The lone pair occupies an equatorial position
- Shape looks like a seesaw or a distorted tetrahedron
- Bond angles: slightly less than 90° and 120°

### T-Shaped (2 lone pairs, both equatorial)
- **Example:** $ClF_{3}$
- 3 bonds, 2 lone pairs
- Both lone pairs in equatorial positions
- Shape: like a capital letter T
- Bond angles: slightly less than 90°

### Linear (3 lone pairs, all equatorial)
- **Example:** $XeF_{2}$
- 2 bonds, 3 lone pairs
- All 3 lone pairs fill the equatorial plane
- The 2 bonds are axial → linear molecular geometry
- Bond angle: 180°

| Lone Pairs | Molecular Geometry | Example |
|-----------|-------------------|---------|
| 0 | Trigonal bipyramidal | $PCl_{5}$ |
| 1 | Seesaw | $SF_{4}$ |
| 2 | T-shaped | $ClF_{3}$ |
| 3 | Linear | $XeF_{2}$ |`
    },
    {
      id: 'vg-4-5',
      type: 'text',
      title: 'Geometries from Octahedral (Steric Number 6)',
      content: `## Molecular Shapes from Steric Number 6

Starting from octahedral electron domain geometry:

### Octahedral (0 lone pairs)
- **Example:** $SF_{6}$
- 6 bonds, 0 lone pairs
- All bond angles: 90°

### Square Pyramidal (1 lone pair)
- **Example:** $BrF_{5}$
- 5 bonds, 1 lone pair
- The lone pair occupies one position, leaving 5 atoms in a square pyramid
- Bond angles: slightly less than 90°

### Square Planar (2 lone pairs)
- **Example:** $XeF_{4}$
- 4 bonds, 2 lone pairs
- The 2 lone pairs are placed **opposite each other** (trans positions) to minimize LP–LP repulsion
- The 4 bonds form a flat square
- Bond angles: 90°

| Lone Pairs | Molecular Geometry | Example |
|-----------|-------------------|---------|
| 0 | Octahedral | $SF_{6}$ |
| 1 | Square pyramidal | $BrF_{5}$ |
| 2 | Square planar | $XeF_{4}$ |

### Why Trans for 2 Lone Pairs?

> 💡 **Tip:** In an octahedral arrangement with 2 lone pairs, they always adopt **trans** (180° apart) positions to minimize the very strong lone pair–lone pair repulsion.

If the 2 lone pairs were adjacent (cis), they would be only 90° apart — very strong repulsion. By placing them opposite (trans, 180° apart), LP–LP repulsion is minimized.`
    },
    {
      id: 'vg-4-6',
      type: 'dropdown-select',
      title: 'Lone Pair Geometry Match',
      content: 'Match each molecule to its molecular geometry.',
      exercise: {
        dropdowns: [
          {
            id: 'vg-4-6-dd1',
            label: 'Molecular geometry of $H_{2}O$',
            options: ['Bent', 'Trigonal pyramidal', 'Tetrahedral', 'Linear'],
            correctIndex: 0,
            explanation: '$H_{2}O$ has 2 bonds + 2 lone pairs on oxygen (steric number 4). Molecular geometry: bent.'
          },
          {
            id: 'vg-4-6-dd2',
            label: 'Molecular geometry of $SF_{4}$',
            options: ['Trigonal bipyramidal', 'Seesaw', 'T-shaped', 'Linear'],
            correctIndex: 1,
            explanation: '$SF_{4}$ has 4 bonds + 1 lone pair on sulfur (steric number 5). The lone pair goes equatorial → seesaw shape.'
          },
          {
            id: 'vg-4-6-dd3',
            label: 'Molecular geometry of $XeF_{4}$',
            options: ['Octahedral', 'Square pyramidal', 'Square planar', 'Tetrahedral'],
            correctIndex: 2,
            explanation: '$XeF_{4}$ has 4 bonds + 2 lone pairs on xenon (steric number 6). The 2 lone pairs go trans → square planar.'
          },
          {
            id: 'vg-4-6-dd4',
            label: 'Molecular geometry of $ClF_{3}$',
            options: ['Trigonal bipyramidal', 'Seesaw', 'T-shaped', 'Linear'],
            correctIndex: 2,
            explanation: '$ClF_{3}$ has 3 bonds + 2 lone pairs on chlorine (steric number 5). Both lone pairs equatorial → T-shaped.'
          }
        ]
      }
    },
    {
      id: 'vg-4-7',
      type: 'input-boxes',
      title: 'Counting Bonds and Lone Pairs',
      content: 'For each molecule, determine the number of lone pairs on the central atom.',
      exercise: {
        inputs: [
          {
            label: 'Number of lone pairs on S in $SF_{4}$',
            correctAnswer: '1',
            explanation: 'Sulfur has 6 valence electrons. 4 are used in bonds to F, leaving 2 electrons = 1 lone pair.'
          },
          {
            label: 'Number of lone pairs on Xe in $XeF_{2}$',
            correctAnswer: '3',
            explanation: 'Xenon has 8 valence electrons. 2 are used in bonds to F, leaving 6 electrons = 3 lone pairs.'
          },
          {
            label: 'Number of lone pairs on Xe in $XeF_{4}$',
            correctAnswer: '2',
            explanation: 'Xenon has 8 valence electrons. 4 are used in bonds to F, leaving 4 electrons = 2 lone pairs.'
          }
        ]
      }
    },
    {
      id: 'vg-4-8',
      type: 'multiple-choice',
      title: 'Part 4 Exit Quiz',
      content: 'Comprehensive lone pair effects quiz.',
      exercise: {
        questions: [
          {
            question: 'Which of the following molecular geometries results from a steric number of 5 with 2 lone pairs?',
            options: ['Seesaw', 'T-shaped', 'Square planar', 'Linear'],
            correctAnswer: 1,
            explanation: 'Steric number 5 → trigonal bipyramidal electron domain geometry. With 2 lone pairs (both equatorial), the molecular geometry is T-shaped (3 bonds remain).'
          },
          {
            question: 'The molecule $ICl_{4}^{-}$ has 4 bonds and 2 lone pairs on iodine. What is its molecular geometry?',
            options: ['Tetrahedral', 'Seesaw', 'Square pyramidal', 'Square planar'],
            correctAnswer: 3,
            explanation: 'Iodine has steric number 6 (4 bonds + 2 lone pairs). Electron domain geometry is octahedral. With 2 lone pairs in trans positions, the molecular geometry is square planar.'
          }
        ]
      }
    }
  ]
};
