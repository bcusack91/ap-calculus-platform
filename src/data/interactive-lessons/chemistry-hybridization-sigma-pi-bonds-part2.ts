export const chemHybridizationSigmaPiBondsPart2Data = {
  topicSlug: 'hybridization-sigma-pi-bonds',
  sections: [
    {
      id: 'hy-2-1',
      type: 'text',
      title: 'Introduction to sp² Hybridization',
      content: `# 🔺 sp² and sp Hybridization

**Part 2 of 7 — Trigonal Planar and Linear Geometries**

In Part 1 we saw that four electron domains lead to sp³ hybridization. But what happens when an atom has only **three** or **two** electron domains?

The atom uses fewer p orbitals in hybridization, leaving unhybridized p orbitals available. These leftover p orbitals play a crucial role — they form **pi (π) bonds**, which we\'ll explore in depth in Part 3.

For now, let\'s focus on the geometry and properties of sp² and sp hybrid orbitals.`
    },
    {
      id: 'hy-2-2',
      type: 'text',
      title: 'sp² Hybridization — Trigonal Planar',
      content: `## sp² Hybridization

When one s orbital mixes with **two** p orbitals, three equivalent **sp² hybrid orbitals** form.

### Properties of sp² Orbitals

| Property | Value |
|----------|-------|
| Number of hybrid orbitals | 3 |
| Geometry | Trigonal planar |
| Bond angle | 120° |
| Unhybridized p orbitals remaining | 1 |
| Shape of each hybrid | One large lobe + one small lobe |

### The Unhybridized p Orbital

This is critical: the one p orbital that is **not** used in hybridization remains perpendicular to the plane of the three sp² orbitals. It is available for pi bonding.

### Example: BF₃ (Boron Trifluoride)

1. Boron has 3 valence electrons and forms 3 bonds to fluorine
2. 3 electron domains → sp² hybridization
3. The three sp² orbitals point to the corners of an equilateral triangle
4. All F–B–F angles = 120°
5. The molecule is perfectly **flat** (planar)

### Example: Formaldehyde (H₂C=O)

1. Carbon has 3 electron domains (2 single bonds to H + 1 double bond to O)
2. Carbon is sp² hybridized
3. The three sp² orbitals form sigma bonds in a trigonal planar arrangement
4. The unhybridized p orbital on carbon overlaps with a p orbital on oxygen → pi bond`
    },
    {
      id: 'hy-2-3',
      type: 'multiple-choice',
      title: 'sp² Hybridization Quiz',
      content: 'Test your understanding of sp² hybridization.',
      exercise: {
        questions: [
          {
            question: 'How many unhybridized p orbitals remain on an sp²-hybridized atom?',
            options: ['0', '1', '2', '3'],
            correctAnswer: 1,
            explanation: 'sp² uses 1 s + 2 p = 3 orbitals. Since an atom has 3 p orbitals total, 3 − 2 = 1 unhybridized p orbital remains.'
          },
          {
            question: 'What is the ideal bond angle for sp² hybridization?',
            options: ['90°', '109.5°', '120°', '180°'],
            correctAnswer: 2,
            explanation: 'Three sp² orbitals arrange in a trigonal planar geometry with 120° angles to maximize separation.'
          },
          {
            question: 'The carbon atom in ethene (C₂H₄) has 2 C–H bonds and 1 C=C double bond. Its hybridization is:',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctAnswer: 1,
            explanation: 'Carbon in ethene has 3 electron domains (2 single bonds + 1 double bond). Three electron domains → sp² hybridization.'
          }
        ]
      }
    },
    {
      id: 'hy-2-4',
      type: 'text',
      title: 'sp Hybridization — Linear',
      content: `## sp Hybridization

When one s orbital mixes with **one** p orbital, two equivalent **sp hybrid orbitals** form.

### Properties of sp Orbitals

| Property | Value |
|----------|-------|
| Number of hybrid orbitals | 2 |
| Geometry | Linear |
| Bond angle | 180° |
| Unhybridized p orbitals remaining | 2 |
| Orientation | Opposite directions (straight line) |

### Two Unhybridized p Orbitals

An sp-hybridized atom has **two** leftover p orbitals, both perpendicular to each other and to the axis of the sp hybrids. These can form **two pi bonds**, enabling triple bonds.

### Example: CO₂ (Carbon Dioxide)

1. Carbon has 2 double bonds to oxygen → 2 electron domains
2. Carbon is sp hybridized
3. The two sp orbitals point in opposite directions (180°)
4. Each unhybridized p orbital overlaps with a p orbital on an oxygen atom → 2 pi bonds
5. Result: O=C=O is perfectly linear

### Example: C₂H₂ (Acetylene)

1. Each carbon has 1 C–H bond + 1 C≡C triple bond = 2 electron domains
2. Each carbon is sp hybridized
3. The molecule is linear: H–C≡C–H (180° angles)
4. The triple bond consists of 1 sigma bond + 2 pi bonds`
    },
    {
      id: 'hy-2-5',
      type: 'input-boxes',
      title: 'sp² and sp Practice',
      content: 'Determine the hybridization and geometry for each molecule.',
      exercise: {
        inputs: [
          {
            label: 'How many electron domains does carbon have in CO₂? (2 double bonds)',
            correctAnswer: '2',
            explanation: 'Each double bond counts as 1 electron domain. Carbon in CO₂ has 2 double bonds = 2 electron domains.'
          },
          {
            label: 'What is the hybridization of carbon in CO₂? (enter sp, sp2, or sp3)',
            correctAnswer: 'sp',
            explanation: '2 electron domains → sp hybridization. The two sp orbitals point in opposite directions, giving a linear geometry.'
          },
          {
            label: 'What bond angle (in degrees) does sp² hybridization produce?',
            correctAnswer: '120',
            explanation: 'sp² hybridization gives a trigonal planar arrangement with 120° bond angles.'
          },
          {
            label: 'How many unhybridized p orbitals remain on an sp-hybridized atom?',
            correctAnswer: '2',
            explanation: 'sp uses 1 s + 1 p = 2 orbitals. Since there are 3 p orbitals total, 3 − 1 = 2 unhybridized p orbitals remain.'
          }
        ]
      }
    },
    {
      id: 'hy-2-6',
      type: 'text',
      title: 'Comparing the Three Hybridization Types',
      content: `## The Complete Hybridization Table

| Feature | sp | sp² | sp³ |
|---------|-----|------|------|
| Atomic orbitals mixed | 1s + 1p | 1s + 2p | 1s + 3p |
| Hybrid orbitals formed | 2 | 3 | 4 |
| Unhybridized p orbitals | 2 | 1 | 0 |
| Geometry | Linear | Trigonal planar | Tetrahedral |
| Bond angle | 180° | 120° | 109.5° |
| Max pi bonds possible | 2 | 1 | 0 |

### The Quick Rule

$$\\text{Hybridization} = \\text{based on number of electron domains (steric number)}$$

| Electron Domains | Hybridization |
|-----------------|---------------|
| 2 | sp |
| 3 | sp² |
| 4 | sp³ |

### Important Note

Remember that a **double bond counts as 1 electron domain** and a **triple bond counts as 1 electron domain**. Only the number of groups matters, not the bond order.`
    },
    {
      id: 'hy-2-7',
      type: 'dropdown-select',
      title: 'Hybridization Identification',
      content: 'Select the correct hybridization for the central atom in each molecule.',
      exercise: {
        dropdowns: [
          {
            id: 'hy-2-7-dd1',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctIndex: 0,
            explanation: 'HCN: carbon has 1 single bond (to H) + 1 triple bond (to N) = 2 electron domains → sp hybridization.'
          },
          {
            id: 'hy-2-7-dd2',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctIndex: 1,
            explanation: 'NO₃⁻: nitrogen has 3 electron domains (resonance structures show 3 equivalent positions) → sp² hybridization.'
          },
          {
            id: 'hy-2-7-dd3',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctIndex: 2,
            explanation: 'CF₄: carbon has 4 single bonds and 0 lone pairs = 4 electron domains → sp³ hybridization.'
          },
          {
            id: 'hy-2-7-dd4',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctIndex: 1,
            explanation: 'SO₃: sulfur has 3 double bonds (in resonance) = 3 electron domains → sp² hybridization. The molecule is trigonal planar.'
          }
        ]
      }
    },
    {
      id: 'hy-2-8',
      type: 'multiple-choice',
      title: 'Exit Quiz — sp² and sp',
      content: 'Verify your mastery of sp² and sp hybridization.',
      exercise: {
        questions: [
          {
            question: 'Which molecule has an sp-hybridized central atom?',
            options: ['CH₄', 'BF₃', 'CO₂', 'NH₃'],
            correctAnswer: 2,
            explanation: 'CO₂ has 2 electron domains around carbon (two double bonds) → sp hybridization. CH₄ and NH₃ are sp³; BF₃ is sp².'
          },
          {
            question: 'An sp²-hybridized carbon atom can form at most how many pi bonds?',
            options: ['0', '1', '2', '3'],
            correctAnswer: 1,
            explanation: 'sp² hybridization leaves 1 unhybridized p orbital, which can form at most 1 pi bond.'
          },
          {
            question: 'In acetylene (C₂H₂), the H–C–C bond angle is:',
            options: ['90°', '109.5°', '120°', '180°'],
            correctAnswer: 3,
            explanation: 'Each carbon in C₂H₂ has 2 electron domains (1 C–H bond + 1 C≡C triple bond) → sp hybridization → linear geometry → 180° bond angle.'
          }
        ]
      }
    }
  ]
};
