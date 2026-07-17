export const chemVseprMolecularGeometryPart2Data = {
  topicSlug: 'vsepr-molecular-geometry',
  sections: [
    {
      id: 'vg-2-1',
      type: 'text',
      title: 'Linear Geometry (Steric Number 2)',
      content: `# 📐 Linear, Trigonal Planar, and Tetrahedral Geometries

**Part 2 of 7 — The Core Geometries**

---

### Topics in This Part

| Section |
|---------|
| Linear Geometry |
| Characteristics |
| Examples |
| Characteristics |
| Examples |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 2
- Understanding the core concepts covered in Part 2
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'vg-2-2',
      type: 'text',
      title: 'Trigonal Planar Geometry (Steric Number 3)',
      content: `## Trigonal Planar Geometry

When a central atom has **3 electron domains** (steric number = 3), they spread out equally in a flat plane, **120° apart**.

$$\\boxed{\\text{Bond angle} = 120°}$$

### Characteristics
- Shape: flat triangle with the central atom at the center
- Bond angle: exactly **120°**
- All atoms lie in the **same plane**

### Examples

| Molecule | Central Atom | Electron Domains | Lone Pairs | Geometry |
|----------|-------------|------------------|------------|----------|
| $BF_{3}$ | B | 3 (single bonds) | 0 | Trigonal planar |
| $H_{2}C$=O | C | 3 (2 single + 1 double) | 0 | Trigonal planar |
| $NO_{3}^{-}$ | N | 3 (resonance) | 0 | Trigonal planar |
| $SO_{3}$ | S | 3 (resonance) | 0 | Trigonal planar |

### Important: Boron is Special

Boron (B) commonly forms only 3 bonds and has **no lone pairs**, making it naturally trigonal planar. $BF_{3}$ has only 6 electrons around B — it is an **electron-deficient** compound (an exception to the octet rule).

---`
    },
    {
      id: 'vg-2-3',
      type: 'multiple-choice',
      title: 'Linear and Trigonal Planar Quiz',
      content: 'Test your knowledge of these geometries.',
      exercise: {
        questions: [
          {
            question: 'What is the bond angle in a molecule with trigonal planar geometry?',
            options: ['90°', '109.5°', '120°', '180°'],
            correctAnswer: 2,
            explanation: 'Trigonal planar geometry has 3 electron domains equally spaced in a plane, giving bond angles of 120°.'
          },
          {
            question: 'Which molecule has a linear geometry?',
            options: ['$H_{2}O$', '$NH_{3}$', '$CO_{2}$', '$CH_{4}$'],
            correctAnswer: 2,
            explanation: '$CO_{2}$ has 2 electron domains (two double bonds) around carbon with no lone pairs, giving it a linear geometry with 180° bond angle.'
          },
          {
            question: 'In $BF_{3}$, boron has only 6 electrons in its valence shell. What geometry does $BF_{3}$ adopt?',
            options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Bent'],
            correctAnswer: 1,
            explanation: '$BF_{3}$ has 3 bonding electron domains and 0 lone pairs on boron. With a steric number of 3, it adopts trigonal planar geometry with 120° bond angles.'
          }
        ]
      }
    },
    {
      id: 'vg-2-4',
      type: 'text',
      title: 'Tetrahedral Geometry (Steric Number 4)',
      content: `## Tetrahedral Geometry

When a central atom has **4 electron domains** (steric number = 4), they arrange in a three-dimensional shape called a **tetrahedron**.

$$\\boxed{\\text{Bond angle} = 109.5°}$$

### Characteristics
- Shape: 3D triangular pyramid with 4 vertices
- Bond angle: approximately **109.5°** (the "tetrahedral angle")
- NOT flat — atoms extend above and below a central plane

### Why 109.5°?

The angle 109.5° is the angle that maximizes the distance between 4 points on a sphere. It\'s derived from the geometry of a regular tetrahedron:

$$\\boxed{\\cos(109.5°) = -\\frac{1}{3}}$$

### Examples

| Molecule | Central Atom | Electron Domains | Lone Pairs | Geometry |
|----------|-------------|------------------|------------|----------|
| $CH_{4}$ | C | 4 (single bonds) | 0 | Tetrahedral |
| $CCl_{4}$ | C | 4 (single bonds) | 0 | Tetrahedral |
| $SiH_{4}$ | Si | 4 (single bonds) | 0 | Tetrahedral |
| $NH_{4}^{+}$ | N | 4 (single bonds) | 0 | Tetrahedral |

The tetrahedral geometry is extremely common in organic chemistry — every $sp^{3}$-hybridized carbon is tetrahedral.

---`
    },
    {
      id: 'vg-2-5',
      type: 'input-boxes',
      title: 'Bond Angle Practice',
      content: 'Enter the ideal bond angle for each geometry.',
      exercise: {
        inputs: [
          {
            label: 'Bond angle in a linear molecule (in degrees)',
            correctAnswer: '180',
            explanation: 'Linear geometry has 2 electron domains on opposite sides of the central atom, giving a 180° bond angle.'
          },
          {
            label: 'Bond angle in a trigonal planar molecule (in degrees)',
            correctAnswer: '120',
            explanation: 'Trigonal planar geometry has 3 electron domains equally spaced in a plane, giving 120° bond angles.'
          },
          {
            label: 'Bond angle in a tetrahedral molecule (in degrees, use one decimal place)',
            correctAnswer: '109.5',
            explanation: 'Tetrahedral geometry has 4 electron domains in 3D, giving the tetrahedral angle of 109.5°.'
          }
        ]
      }
    },
    {
      id: 'vg-2-6',
      type: 'text',
      title: 'Comparing the Three Geometries',
      content: `## Summary of Core Geometries

| Property | Linear | Trigonal Planar | Tetrahedral |
|----------|--------|----------------|-------------|
| Steric Number | 2 | 3 | 4 |
| Bond Angle | 180° | 120° | 109.5° |
| Dimensional | 1D (line) | 2D (flat) | 3D |
| Hybridization | sp | $sp^{2}$ | $sp^{3}$ |

### The Pattern

> 🔑 **Key Concept:** As the steric number increases, the bond angle **decreases** (180° → 120° → 109.5°). More electron domains must share the space around the central atom.

As the steric number increases:
- The bond angle **decreases** (180° → 120° → 109.5°)
- The geometry becomes more **three-dimensional**
- The electron domains spread into **more directions**

### Hybridization Connection

> 💡 **Tip:** Each base geometry maps to a specific hybridization — sp (linear), $sp^{2}$ (trigonal planar), $sp^{3}$ (tetrahedral). Knowing one tells you the other.

Each geometry corresponds to a specific hybridization of the central atom:
- **sp** → linear (2 hybrid orbitals)
- **$sp^{2}$** → trigonal planar (3 hybrid orbitals)
- **$sp^{3}$** → tetrahedral (4 hybrid orbitals)

This connection between VSEPR geometry and orbital hybridization is fundamental to understanding bonding in organic and inorganic chemistry.`
    },
    {
      id: 'vg-2-7',
      type: 'dropdown-select',
      title: 'Geometry Identification',
      content: 'Identify the electron domain geometry and bond angle for each molecule.',
      exercise: {
        dropdowns: [
          {
            id: 'vg-2-7-dd1',
            label: '$CS_{2}$ has 2 double bonds around carbon (steric number 2), giving a _______',
            options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Trigonal bipyramidal'],
            correctIndex: 0,
            explanation: '$CS_{2}$ has 2 double bonds around carbon (steric number 2), giving a linear geometry.'
          },
          {
            id: 'vg-2-7-dd2',
            label: '$CH_{4}$ has 4 single bonds and no lone pairs on carbon (steric number 4), giving a',
            options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Octahedral'],
            correctIndex: 2,
            explanation: '$CH_{4}$ has 4 single bonds and no lone pairs on carbon (steric number 4), giving a tetrahedral geometry.'
          },
          {
            id: 'vg-2-7-dd3',
            label: '$SO_{3}$ has 3 electron domains (steric number 3) → trigonal planar geometry',
            options: ['90°', '109.5°', '120°', '180°'],
            correctIndex: 2,
            explanation: '$SO_{3}$ has 3 electron domains (steric number 3) → trigonal planar geometry → 120° bond angles.'
          },
          {
            id: 'vg-2-7-dd4',
            label: 'A linear molecule with steric number 2 has _______ hybridization',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', '$sp^{3}d$'],
            correctIndex: 0,
            explanation: 'A linear molecule with steric number 2 has sp hybridization.'
          }
        ]
      }
    },
    {
      id: 'vg-2-8',
      type: 'multiple-choice',
      title: 'Part 2 Exit Quiz',
      content: 'Comprehensive check on linear, trigonal planar, and tetrahedral geometries.',
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly lists the bond angles from smallest to largest?',
            options: [
              '180° < 120° < 109.5°',
              '109.5° < 120° < 180°',
              '120° < 109.5° < 180°',
              '109.5° < 180° < 120°'
            ],
            correctAnswer: 1,
            explanation: 'The tetrahedral angle (109.5°) is the smallest, followed by trigonal planar (120°), and linear is the largest (180°).'
          },
          {
            question: 'A molecule has the formula $AX_{3}$ with no lone pairs on atom A. What is its electron domain geometry?',
            options: [
              'Linear',
              'Bent',
              'Trigonal planar',
              'Tetrahedral'
            ],
            correctAnswer: 2,
            explanation: '$AX_{3}$ with no lone pairs has 3 electron domains (steric number 3), which corresponds to trigonal planar geometry with 120° bond angles.'
          }
        ]
      }
    }
  ]
};
