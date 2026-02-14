export const chemVseprMolecularGeometryPart3Data = {
  topicSlug: 'vsepr-molecular-geometry',
  sections: [
    {
      id: 'vg-3-1',
      type: 'text',
      title: 'Expanding Beyond the Octet',
      content: `# 🔷 Trigonal Bipyramidal and Octahedral Geometries

**Part 3 of 7 — 5 and 6 Electron Domains**

Elements in **Period 3 and beyond** can accommodate more than 8 electrons in their valence shell because they have access to empty **d orbitals**. This allows steric numbers of 5 and 6.

### Which Elements Can Expand?

- Must be in **Period 3 or higher** (have d orbitals available)
- Common elements: P, S, Cl, Br, I, Xe, Se
- Elements in Period 2 (C, N, O, F) **cannot** expand their octet

### Examples of Expanded Octets

| Molecule | Central Atom | Valence e⁻ Around Central | Steric Number |
|----------|-------------|---------------------------|---------------|
| PCl₅ | P (Period 3) | 10 | 5 |
| SF₆ | S (Period 3) | 12 | 6 |
| XeF₄ | Xe (Period 5) | 12 | 6 |
| IF₅ | I (Period 5) | 12 | 6 |`
    },
    {
      id: 'vg-3-2',
      type: 'text',
      title: 'Trigonal Bipyramidal Geometry (Steric Number 5)',
      content: `## Trigonal Bipyramidal Geometry

When a central atom has **5 electron domains**, they arrange in a **trigonal bipyramidal** shape. This geometry has two distinct types of positions:

### Axial vs. Equatorial Positions

- **Equatorial** (3 positions): Arranged in a flat triangle around the "equator" — 120° apart from each other
- **Axial** (2 positions): Located directly above and below the equatorial plane — 90° from equatorial positions and 180° from each other

### Bond Angles

$$\\text{Equatorial–Equatorial} = 120°$$
$$\\text{Axial–Equatorial} = 90°$$
$$\\text{Axial–Axial} = 180°$$

### Why This Matters

Unlike tetrahedral or octahedral geometries, the positions in a trigonal bipyramid are **NOT equivalent**. This has important consequences:
- Lone pairs preferentially occupy **equatorial** positions (more room)
- Axial bonds are slightly longer than equatorial bonds
- The non-equivalence leads to several different molecular geometries when lone pairs are present

### Example: PCl₅

Phosphorus pentachloride has 5 bonding pairs and 0 lone pairs:
- Steric number = 5
- Electron domain geometry = trigonal bipyramidal
- Molecular geometry = trigonal bipyramidal
- Bond angles: 90° (ax–eq) and 120° (eq–eq)`
    },
    {
      id: 'vg-3-3',
      type: 'multiple-choice',
      title: 'Trigonal Bipyramidal Concepts',
      content: 'Test your understanding of the trigonal bipyramidal geometry.',
      exercise: {
        questions: [
          {
            question: 'In a trigonal bipyramidal geometry, how many equatorial positions are there?',
            options: ['2', '3', '4', '5'],
            correctAnswer: 1,
            explanation: 'A trigonal bipyramid has 3 equatorial positions (forming a triangle in the horizontal plane) and 2 axial positions (above and below).'
          },
          {
            question: 'What is the bond angle between an axial position and an equatorial position in a trigonal bipyramid?',
            options: ['60°', '90°', '120°', '180°'],
            correctAnswer: 1,
            explanation: 'The axial–equatorial angle is 90°. The equatorial–equatorial angle is 120°, and the axial–axial angle is 180°.'
          },
          {
            question: 'Why do lone pairs prefer equatorial positions in a trigonal bipyramid?',
            options: [
              'Equatorial positions are closer to the nucleus',
              'Equatorial positions have more space (only two 90° neighbors vs. three)',
              'Axial positions don\'t exist for lone pairs',
              'Lone pairs are always in the lowest energy orbital'
            ],
            correctAnswer: 1,
            explanation: 'An equatorial position has only 2 neighbors at 90° (the axial positions), while an axial position has 3 neighbors at 90° (all equatorial). Since lone pairs need more room, they prefer equatorial spots with fewer close-range repulsions.'
          }
        ]
      }
    },
    {
      id: 'vg-3-4',
      type: 'text',
      title: 'Octahedral Geometry (Steric Number 6)',
      content: `## Octahedral Geometry

When a central atom has **6 electron domains**, they arrange in an **octahedral** shape — like two square pyramids joined at their bases.

### Bond Angles

$$\\text{Adjacent positions} = 90°$$
$$\\text{Opposite positions} = 180°$$

### Key Feature: All Positions Are Equivalent

Unlike the trigonal bipyramid, **all 6 positions in an octahedron are equivalent**. Each position has exactly 4 neighbors at 90° and 1 neighbor at 180°.

### Visualizing the Octahedron

Think of it as:
- 4 positions forming a square in the horizontal plane
- 1 position directly above
- 1 position directly below

Or equivalently: place atoms along the +x, −x, +y, −y, +z, and −z axes.

### Examples

| Molecule | Central Atom | Bonds | Lone Pairs | Geometry |
|----------|-------------|-------|------------|----------|
| SF₆ | S | 6 | 0 | Octahedral |
| PCl₆⁻ | P | 6 | 0 | Octahedral |
| SiF₆²⁻ | Si | 6 | 0 | Octahedral |

SF₆ is a classic example: sulfur forms 6 equivalent bonds to fluorine with all F–S–F angles = 90°.`
    },
    {
      id: 'vg-3-5',
      type: 'input-boxes',
      title: 'Bond Angle Practice for Expanded Geometries',
      content: 'Enter the bond angles for these geometries.',
      exercise: {
        inputs: [
          {
            label: 'Equatorial–equatorial bond angle in trigonal bipyramidal (degrees)',
            correctAnswer: '120',
            explanation: 'The three equatorial positions form a triangle in one plane, so equatorial–equatorial angles are 120°.'
          },
          {
            label: 'Adjacent bond angle in octahedral geometry (degrees)',
            correctAnswer: '90',
            explanation: 'All adjacent positions in an octahedron are 90° apart.'
          },
          {
            label: 'Axial–axial bond angle in trigonal bipyramidal (degrees)',
            correctAnswer: '180',
            explanation: 'The two axial positions are on opposite sides of the central atom, directly across from each other: 180°.'
          },
          {
            label: 'Opposite bond angle in octahedral geometry (degrees)',
            correctAnswer: '180',
            explanation: 'Positions directly across from each other in an octahedron are 180° apart.'
          }
        ]
      }
    },
    {
      id: 'vg-3-6',
      type: 'text',
      title: 'Comparing All Five Electron Domain Geometries',
      content: `## The Complete Set of Electron Domain Geometries

| Steric # | Geometry | Bond Angles | Hybridization | Example |
|----------|----------|------------|---------------|---------|
| 2 | Linear | 180° | sp | CO₂ |
| 3 | Trigonal planar | 120° | sp² | BF₃ |
| 4 | Tetrahedral | 109.5° | sp³ | CH₄ |
| 5 | Trigonal bipyramidal | 90°, 120° | sp³d | PCl₅ |
| 6 | Octahedral | 90° | sp³d² | SF₆ |

### Pattern: Bond Angles Decrease as Steric Number Increases

More electron domains must share the space around the central atom, so each pair gets pushed closer together:

$$180° \\to 120° \\to 109.5° \\to 90°$$

### Dimensionality

- Steric number 2: 1D (line)
- Steric number 3: 2D (plane)
- Steric numbers 4, 5, 6: 3D (all extend into three dimensions)`
    },
    {
      id: 'vg-3-7',
      type: 'dropdown-select',
      title: 'Expanded Geometry Identification',
      content: 'Match each property to the correct geometry.',
      exercise: {
        dropdowns: [
          {
            id: 'vg-3-7-dd1',
            options: ['Tetrahedral', 'Trigonal bipyramidal', 'Octahedral'],
            correctIndex: 1,
            explanation: 'The trigonal bipyramidal geometry has two distinct types of positions: axial and equatorial.'
          },
          {
            id: 'vg-3-7-dd2',
            options: ['Tetrahedral', 'Trigonal bipyramidal', 'Octahedral'],
            correctIndex: 2,
            explanation: 'In an octahedral geometry, all 6 positions are equivalent — each has the same environment.'
          },
          {
            id: 'vg-3-7-dd3',
            options: ['sp²', 'sp³', 'sp³d', 'sp³d²'],
            correctIndex: 2,
            explanation: 'Trigonal bipyramidal geometry (steric number 5) corresponds to sp³d hybridization.'
          },
          {
            id: 'vg-3-7-dd4',
            options: ['sp²', 'sp³', 'sp³d', 'sp³d²'],
            correctIndex: 3,
            explanation: 'Octahedral geometry (steric number 6) corresponds to sp³d² hybridization.'
          }
        ]
      }
    },
    {
      id: 'vg-3-8',
      type: 'multiple-choice',
      title: 'Part 3 Exit Quiz',
      content: 'Check your understanding of expanded geometries.',
      exercise: {
        questions: [
          {
            question: 'Why can phosphorus form PCl₅ but nitrogen cannot form NCl₅?',
            options: [
              'Nitrogen is too electronegative',
              'Phosphorus has accessible d orbitals; nitrogen does not',
              'NCl₅ would be too large a molecule',
              'Nitrogen already has a full octet and cannot bond more'
            ],
            correctAnswer: 1,
            explanation: 'Phosphorus is in Period 3 and has empty 3d orbitals available for bonding. Nitrogen is in Period 2 with no accessible d orbitals, so it cannot expand beyond an octet.'
          },
          {
            question: 'How many total bond angles of 90° exist between adjacent atoms in an octahedral molecule like SF₆?',
            options: ['4', '6', '8', '12'],
            correctAnswer: 3,
            explanation: 'Each of the 6 positions has 4 neighbors at 90°, giving 6 \\times 4 = 24, but each angle is shared between 2 atoms, so 24/2 = 12 unique 90° angles.'
          }
        ]
      }
    }
  ]
};
