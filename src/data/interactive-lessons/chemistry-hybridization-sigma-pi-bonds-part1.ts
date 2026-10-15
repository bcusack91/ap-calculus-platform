export const chemHybridizationSigmaPiBondsPart1Data = {
  topicSlug: 'hybridization-sigma-pi-bonds',
  sections: [
    {
      id: 'hy-1-1',
      type: 'text',
      title: 'Introduction to Orbital Hybridization',
      content: `# 🧬 Hybridization and Sigma/Pi Bonds

**Part 1 of 7 — Introduction to Hybridization**

---

### Topics in This Part

| Section |
|---------|
| What a Hybridization Label Means |
| Counting Electron Domains |
| $sp^{3}$ Hybridization — Tetrahedral |
| Lone Pairs and Bond Angles in $sp^{3}$ Atoms |

> 🔑 **Key Concept:** Mastering this material will strengthen your foundation for both the AP Chemistry exam and more advanced chemistry topics.

---

### What You'll Master in Part 1
- Understanding the core concepts covered in Part 1
- Applying these ideas to solve practice problems
- Building toward AP exam readiness for this topic`
    },
    {
      id: 'hy-1-2',
      type: 'text',
      title: 'What Is Hybridization?',
      content: `## What a Hybridization Label Means

The terms **hybridization** and **hybrid orbital** describe the arrangement of electron domains around an atom. Each label goes with one electron-domain arrangement and one ideal bond angle:

| Electron Domains | Hybridization | Electron-Domain Geometry | Ideal Bond Angle |
|-----------------|---------------|--------------------------|------------------|
| 4 | $sp^{3}$ | Tetrahedral | 109.5° |
| 3 | $sp^{2}$ | Trigonal planar | 120° |
| 2 | sp | Linear | 180° |

> 💡 **Note:** On the AP exam you use these labels as names that match the geometry. You will not be asked to derive hybrid orbitals or draw their shapes.

### Counting Electron Domains

An **electron domain** is any region of electron density around the atom:
- Each **single, double, or triple bond** counts as **one** domain
- Each **lone pair** counts as **one** domain

So in formaldehyde $(H_{2}C=O)$, carbon has two single bonds and one double bond: **3 domains**, so carbon is $sp^{2}$.`
    },
    {
      id: 'hy-1-3',
      type: 'text',
      title: '$sp^{3}$ Hybridization',
      content: `## $sp^{3}$ Hybridization — Tetrahedral

An atom surrounded by **four** electron domains is described as **$sp^{3}$ hybridized**.

### Features of an $sp^{3}$ Atom

| Feature | Value |
|---------|-------|
| Electron domains | 4 |
| Electron-domain geometry | Tetrahedral |
| Ideal bond angle | 109.5° |
| Pi bonds it can form | 0 (all four domains are single bonds or lone pairs) |

### Reading $sp^{3}$ from Methane $(CH_{4})$

1. Draw the Lewis structure: carbon forms four C–H single bonds and has no lone pairs
2. Count domains: 4 bonds + 0 lone pairs = **4 electron domains**
3. Four domains → **$sp^{3}$**, tetrahedral arrangement
4. The four C–H bonds point toward the corners of a tetrahedron, 109.5° apart, and all four are equivalent

### Other Examples of $sp^{3}$ Hybridization

- **$NH_{3}$**: N is $sp^{3}$ (3 bonds + 1 lone pair = 4 electron domains)
- **$H_{2}O$**: O is $sp^{3}$ (2 bonds + 2 lone pairs = 4 electron domains)
- **$CCl_{4}$**: C is $sp^{3}$ (4 bonds + 0 lone pairs)

> 🔑 **Key Concept:** Any atom with 4 electron domains is $sp^{3}$ hybridized.`
    },
    {
      id: 'hy-1-4',
      type: 'multiple-choice',
      title: '$sp^{3}$ Hybridization Concepts',
      content: 'Test your understanding of hybridization fundamentals.',
      exercise: {
        questions: [
          {
            question: 'Which molecule has an $sp^{3}$-hybridized central atom?',
            options: ['$CO_{2}$', '$BF_{3}$', '$CH_{2}O$', '$NH_{3}$'],
            correctAnswer: 3,
            explanation: 'Nitrogen in $NH_{3}$ has 3 bonds and 1 lone pair, which is 4 electron domains, so it is $sp^{3}$. Carbon in $CO_{2}$ has 2 domains (sp), and the central atoms of $BF_{3}$ and $CH_{2}O$ each have 3 domains ($sp^{2}$).'
          },
          {
            question: 'What is the bond angle in a perfect $sp^{3}$ (tetrahedral) arrangement?',
            options: ['104.5°', '109.5°', '120°', '180°'],
            correctAnswer: 1,
            explanation: 'The tetrahedral angle is 109.5°. This is the angle that maximizes the distance between four equivalent groups around a central atom. The 104.5° value is the compressed angle in $H_{2}O$, where two lone pairs squeeze the bonds together.'
          },
          {
            question: 'The oxygen atom in $H_{2}O$ has 2 bonds and 2 lone pairs. What is its hybridization?',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', 'unhybridized'],
            correctAnswer: 2,
            explanation: 'Oxygen in $H_{2}O$ has 4 electron domains (2 bonds + 2 lone pairs), so it is $sp^{3}$ hybridized. Lone pairs count as domains just like bonding pairs.'
          },
          {
            question: 'When counting electron domains, how many domains does one C=O double bond count as?',
            options: ['One', 'Two', 'Three', 'Zero'],
            correctAnswer: 0,
            explanation: 'Every bond to a neighboring atom counts as one domain, whether it is single, double, or triple. Only the number of bonded atoms and lone pairs matters, not the bond order.'
          }
        ]
      }
    },
    {
      id: 'hy-1-5',
      type: 'text',
      title: 'Lone Pairs and Bond Angles in $sp^{3}$ Atoms',
      content: `## Lone Pairs and Bond Angles in $sp^{3}$ Atoms

All three molecules below have an $sp^{3}$ central atom with four electron domains, but their bond angles differ:

| Molecule | Bonds | Lone Pairs | Molecular Shape | Bond Angle |
|----------|-------|-----------|-----------------|-----------|
| $CH_{4}$ | 4 | 0 | Tetrahedral | 109.5° |
| $NH_{3}$ | 3 | 1 | Trigonal pyramidal | about 107° |
| $H_{2}O$ | 2 | 2 | Bent | about 104.5° |

### Why the Angles Shrink

A lone pair is held by only one nucleus, so its electron density spreads out closer to the central atom and **repels more strongly** than a bonding pair. Each lone pair pushes the bonding pairs slightly closer together.

> 🔑 **Key Concept:** Hybridization tells you the **electron-domain** arrangement (and the ideal angle). The actual molecular shape and bond angles also depend on how many of those domains are **lone pairs**.`
    },
    {
      id: 'hy-1-6',
      type: 'input-boxes',
      title: 'Counting Electron Domains for $sp^{3}$',
      content: 'Determine the number of electron domains around the central atom and confirm $sp^{3}$ hybridization.',
      exercise: {
        inputs: [
          {
            label: 'How many electron domains does nitrogen have in $NH_{3}$? (3 bonds + 1 lone pair)',
            correctAnswer: '4',
            explanation: 'Nitrogen in $NH_{3}$ has 3 bonding domains + 1 lone pair = 4 total electron domains → $sp^{3}$ hybridization.'
          },
          {
            label: 'How many electron domains does carbon have in $CHCl_{3}$ (chloroform)? (4 bonds, 0 lone pairs)',
            correctAnswer: '4',
            explanation: 'Carbon in $CHCl_{3}$ has 4 single bonds (1 to H, 3 to Cl) and 0 lone pairs = 4 electron domains → $sp^{3}$.'
          },
          {
            label: 'How many electron domains surround each carbon atom in ethane $(C_{2}H_{6})$?',
            correctAnswer: '4',
            explanation: 'Each carbon in ethane has 4 electron domains (3 C–H bonds + 1 C–C bond), so each carbon is $sp^{3}$.'
          },
          {
            label: 'How many $sp^{3}$-hybridized atoms (not counting H) are in methanol, $CH_{3}OH$?',
            correctAnswer: '2',
            explanation: 'Carbon has 4 single bonds (4 domains) and oxygen has 2 bonds plus 2 lone pairs (4 domains), so both C and O are $sp^{3}$.'
          }
        ]
      }
    },
    {
      id: 'hy-1-7',
      type: 'dropdown-select',
      title: 'Hybridization Fundamentals Review',
      content: 'Select the correct answer for each statement about hybridization.',
      exercise: {
        dropdowns: [
          {
            id: 'hy-1-7-dd1',
            label: 'An atom with 4 electron domains has _______ hybridization',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', 'unhybridized'],
            correctIndex: 2,
            explanation: 'An atom with 4 electron domains has $sp^{3}$ hybridization. This applies to $CH_{4}$, $NH_{3}$, $H_{2}O$, etc.'
          },
          {
            id: 'hy-1-7-dd2',
            label: 'The ideal $sp^{3}$ tetrahedral bond angle is',
            options: ['104.5°', '109.5°', '120°', '180°'],
            correctIndex: 1,
            explanation: 'The ideal $sp^{3}$ tetrahedral bond angle is 109.5°.'
          },
          {
            id: 'hy-1-7-dd3',
            label: 'A carbon atom with two single bonds and one double bond is',
            options: ['sp', '$sp^{2}$', '$sp^{3}$', 'unhybridized'],
            correctIndex: 1,
            explanation: 'Two single bonds plus one double bond is three bonded atoms and no lone pairs: 3 electron domains, so the carbon is $sp^{2}$.'
          }
        ]
      }
    },
    {
      id: 'hy-1-8',
      type: 'text',
      title: 'Part 1 Summary',
      content: `---

## Summary — Introduction to Hybridization

### Key Ideas

1. **Hybridization labels** (sp, $sp^{2}$, $sp^{3}$) describe the electron-domain arrangement around an atom
2. Count domains: every bond (single, double, or triple) is one domain, and every lone pair is one domain
3. **$sp^{3}$**: 4 domains, tetrahedral arrangement, ideal angle 109.5°
4. Lone pairs count as domains and squeeze bond angles below the ideal value
5. You use the labels to name geometries; deriving or drawing hybrid orbitals is not assessed

### The Pattern

| Electron Domains | Hybridization | Geometry |
|-----------------|---------------|----------|
| 4 | $sp^{3}$ | Tetrahedral |
| 3 | $sp^{2}$ | Trigonal planar |
| 2 | sp | Linear |

Coming up in **Part 2**: $sp^{2}$ and sp hybridization — atoms with three and two electron domains.`
    }
  ]
};
