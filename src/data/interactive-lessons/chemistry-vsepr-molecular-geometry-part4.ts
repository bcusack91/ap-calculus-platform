export const chemVseprMolecularGeometryPart4Data = {
  topicSlug: 'vsepr-molecular-geometry',
  sections: [
    {
      id: 'vg-4-1',
      type: 'text',
      title: 'Lone Pairs Change Everything',
      content: `# 👁️ Lone Pair Effects on Molecular Geometry

**Part 4 of 7 — Bent, Trigonal Pyramidal, Seesaw, T-Shaped, Square Pyramidal, and Square Planar**

When lone pairs occupy electron domain positions, they are "invisible" to molecular geometry but still exert repulsive forces. This creates molecular shapes that differ from the electron domain geometry.

### Key Principle: Lone Pair Repulsion is Stronger

Lone pairs repel more strongly than bonding pairs because they are held closer to the central atom and spread out more. The repulsion strength order is:

$$\\text{Lone pair–Lone pair} > \\text{Lone pair–Bond pair} > \\text{Bond pair–Bond pair}$$

This means:
- Lone pairs **compress** bond angles slightly below the ideal values
- The more lone pairs present, the smaller the bond angles become`
    },
    {
      id: 'vg-4-2',
      type: 'text',
      title: 'Geometries from Tetrahedral (Steric Number 4)',
      content: `## Molecular Shapes from Steric Number 4

All of these have **tetrahedral electron domain geometry** but different molecular geometries:

### Tetrahedral (0 lone pairs)
- **Example:** CH₄
- Bond angle: **109.5°**
- 4 bonds, 0 lone pairs

### Trigonal Pyramidal (1 lone pair)
- **Example:** NH₃
- Bond angle: **≈107°** (compressed from 109.5°)
- 3 bonds, 1 lone pair
- Shape: like a tripod or a pyramid with a triangular base

### Bent (2 lone pairs)
- **Example:** H₂O
- Bond angle: **≈104.5°** (compressed further)
- 2 bonds, 2 lone pairs
- Shape: like a boomerang or V-shape

### The Compression Pattern

| Molecule | Lone Pairs | Bond Angle | Why? |
|----------|-----------|------------|------|
| CH₄ | 0 | 109.5° | Ideal tetrahedral |
| NH₃ | 1 | ≈107° | 1 LP compresses bonds |
| H₂O | 2 | ≈104.5° | 2 LPs compress more |

Each additional lone pair compresses the bond angle by about 2–2.5°.`
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
            explanation: '4 electron domains with 2 lone pairs leaves 2 bonding pairs. This gives a bent (V-shaped) molecular geometry, like H₂O.'
          },
          {
            question: 'The bond angle in NH₃ (≈107°) is less than the ideal tetrahedral angle (109.5°) because:',
            options: [
              'Nitrogen is smaller than carbon',
              'Hydrogen atoms are too light',
              'The lone pair repels bonding pairs more strongly, compressing the H–N–H angles',
              'NH₃ has only 3 bonds instead of 4'
            ],
            correctAnswer: 2,
            explanation: 'Lone pair–bond pair repulsion is stronger than bond pair–bond pair repulsion. The lone pair pushes the bonding pairs closer together, reducing the bond angle from 109.5° to about 107°.'
          },
          {
            question: 'What is the molecular geometry of NF₃? (N has 5 valence e⁻, each F has 7)',
            options: ['Trigonal planar', 'Tetrahedral', 'Trigonal pyramidal', 'Bent'],
            correctAnswer: 2,
            explanation: 'N in NF₃ has 3 bonds + 1 lone pair = 4 electron domains. Electron domain geometry is tetrahedral, but with 1 lone pair the molecular geometry is trigonal pyramidal.'
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

### Trigonal Bipyramidal (0 lone pairs)
- **Example:** PCl₅
- 5 bonds, 0 lone pairs
- Bond angles: 90° (ax–eq) and 120° (eq–eq)

### Seesaw (1 lone pair, equatorial)
- **Example:** SF₄
- 4 bonds, 1 lone pair
- The lone pair occupies an equatorial position
- Shape looks like a seesaw or a distorted tetrahedron
- Bond angles: slightly less than 90° and 120°

### T-Shaped (2 lone pairs, both equatorial)
- **Example:** ClF₃
- 3 bonds, 2 lone pairs
- Both lone pairs in equatorial positions
- Shape: like a capital letter T
- Bond angles: slightly less than 90°

### Linear (3 lone pairs, all equatorial)
- **Example:** XeF₂
- 2 bonds, 3 lone pairs
- All 3 lone pairs fill the equatorial plane
- The 2 bonds are axial → linear molecular geometry
- Bond angle: 180°

| Lone Pairs | Molecular Geometry | Example |
|-----------|-------------------|---------|
| 0 | Trigonal bipyramidal | PCl₅ |
| 1 | Seesaw | SF₄ |
| 2 | T-shaped | ClF₃ |
| 3 | Linear | XeF₂ |`
    },
    {
      id: 'vg-4-5',
      type: 'text',
      title: 'Geometries from Octahedral (Steric Number 6)',
      content: `## Molecular Shapes from Steric Number 6

Starting from octahedral electron domain geometry:

### Octahedral (0 lone pairs)
- **Example:** SF₆
- 6 bonds, 0 lone pairs
- All bond angles: 90°

### Square Pyramidal (1 lone pair)
- **Example:** BrF₅
- 5 bonds, 1 lone pair
- The lone pair occupies one position, leaving 5 atoms in a square pyramid
- Bond angles: slightly less than 90°

### Square Planar (2 lone pairs)
- **Example:** XeF₄
- 4 bonds, 2 lone pairs
- The 2 lone pairs are placed **opposite each other** (trans positions) to minimize LP–LP repulsion
- The 4 bonds form a flat square
- Bond angles: 90°

| Lone Pairs | Molecular Geometry | Example |
|-----------|-------------------|---------|
| 0 | Octahedral | SF₆ |
| 1 | Square pyramidal | BrF₅ |
| 2 | Square planar | XeF₄ |

### Why Trans for 2 Lone Pairs?

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
            label: 'Molecular geometry of H₂O',
            options: ['Bent', 'Trigonal pyramidal', 'Tetrahedral', 'Linear'],
            correctIndex: 0,
            explanation: 'H₂O has 2 bonds + 2 lone pairs on oxygen (steric number 4). Molecular geometry: bent.'
          },
          {
            id: 'vg-4-6-dd2',
            label: 'Molecular geometry of SF₄',
            options: ['Trigonal bipyramidal', 'Seesaw', 'T-shaped', 'Linear'],
            correctIndex: 1,
            explanation: 'SF₄ has 4 bonds + 1 lone pair on sulfur (steric number 5). The lone pair goes equatorial → seesaw shape.'
          },
          {
            id: 'vg-4-6-dd3',
            label: 'Molecular geometry of XeF₄',
            options: ['Octahedral', 'Square pyramidal', 'Square planar', 'Tetrahedral'],
            correctIndex: 2,
            explanation: 'XeF₄ has 4 bonds + 2 lone pairs on xenon (steric number 6). The 2 lone pairs go trans → square planar.'
          },
          {
            id: 'vg-4-6-dd4',
            label: 'Molecular geometry of ClF₃',
            options: ['Trigonal bipyramidal', 'Seesaw', 'T-shaped', 'Linear'],
            correctIndex: 2,
            explanation: 'ClF₃ has 3 bonds + 2 lone pairs on chlorine (steric number 5). Both lone pairs equatorial → T-shaped.'
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
            label: 'Number of lone pairs on S in SF₄',
            correctAnswer: '1',
            explanation: 'Sulfur has 6 valence electrons. 4 are used in bonds to F, leaving 2 electrons = 1 lone pair.'
          },
          {
            label: 'Number of lone pairs on Xe in XeF₂',
            correctAnswer: '3',
            explanation: 'Xenon has 8 valence electrons. 2 are used in bonds to F, leaving 6 electrons = 3 lone pairs.'
          },
          {
            label: 'Number of lone pairs on Xe in XeF₄',
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
            question: 'The molecule ICl₄⁻ has 4 bonds and 2 lone pairs on iodine. What is its molecular geometry?',
            options: ['Tetrahedral', 'Seesaw', 'Square pyramidal', 'Square planar'],
            correctAnswer: 3,
            explanation: 'Iodine has steric number 6 (4 bonds + 2 lone pairs). Electron domain geometry is octahedral. With 2 lone pairs in trans positions, the molecular geometry is square planar.'
          }
        ]
      }
    }
  ]
};
