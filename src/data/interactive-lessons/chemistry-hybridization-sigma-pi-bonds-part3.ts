export const chemHybridizationSigmaPiBondsPart3Data = {
  topicSlug: 'hybridization-sigma-pi-bonds',
  sections: [
    {
      id: 'hy-3-1',
      type: 'text',
      title: 'Introduction to Sigma and Pi Bonds',
      content: `# ⚡ Sigma and Pi Bonds

**Part 3 of 7 — Two Kinds of Covalent Bonds**

Not all covalent bonds are the same. There are two fundamentally different types based on how the orbitals overlap:

- **Sigma (σ) bonds** — formed by head-on overlap
- **Pi (π) bonds** — formed by lateral (side-by-side) overlap

Understanding the difference between sigma and pi bonds is essential for explaining molecular structure, rotation, rigidity, and reactivity.`
    },
    {
      id: 'hy-3-2',
      type: 'text',
      title: 'Sigma (σ) Bonds',
      content: `## Sigma Bonds — Head-On Overlap

A **sigma bond** forms when two orbitals overlap **end-to-end** (head-on), with electron density concentrated **along the bond axis** (the line connecting the two nuclei).

### Types of Sigma Bond Overlap

| Overlap Type | Example |
|-------------|---------|
| s–s | H–H in H₂ |
| s–sp³ | H–C in CH₄ |
| sp³–sp³ | C–C in ethane |
| sp²–sp² | C–C sigma in ethene |
| sp–sp | C–C sigma in acetylene |

### Key Properties of Sigma Bonds

1. **Every single bond is a sigma bond**
2. Sigma bonds allow **free rotation** around the bond axis (the cylindrical symmetry of electron density means rotation doesn\'t break the overlap)
3. Sigma bonds are **stronger** than pi bonds (greater orbital overlap)
4. Every bonding pair shares **exactly one** sigma bond — it\'s always the first bond formed between two atoms`
    },
    {
      id: 'hy-3-3',
      type: 'text',
      title: 'Pi (π) Bonds',
      content: `## Pi Bonds — Lateral Overlap

A **pi bond** forms when two **unhybridized p orbitals** overlap **side-by-side** (laterally), with electron density concentrated **above and below** (or in front and behind) the bond axis.

### Key Properties of Pi Bonds

1. Pi bonds form from **unhybridized p orbitals** only
2. Electron density is in two lobes — one above and one below the internuclear axis
3. Pi bonds **prevent rotation** around the bond axis (rotating would break the side-by-side overlap)
4. Pi bonds are **weaker** than sigma bonds (less overlap)
5. Pi bonds are always the **second and third** bonds between two atoms

### Why Pi Bonds Prevent Rotation

Imagine two p orbitals overlapping side-by-side. If you rotate one atom 90°, the orbitals no longer overlap — the pi bond breaks. This is why:

- **Ethane** (C–C single bond, no π): free rotation
- **Ethene** (C=C double bond, 1 π): **no** free rotation → rigid and planar
- **Acetylene** (C≡C triple bond, 2 π): **no** free rotation → rigid and linear`
    },
    {
      id: 'hy-3-4',
      type: 'multiple-choice',
      title: 'Sigma vs. Pi Bonds Quiz',
      content: 'Distinguish between sigma and pi bonds.',
      exercise: {
        questions: [
          {
            question: 'A sigma bond is formed by which type of orbital overlap?',
            options: [
              'Side-by-side (lateral) overlap',
              'Head-on (end-to-end) overlap',
              'No overlap — electrons are shared ionically',
              'Overlap only in d orbitals'
            ],
            correctAnswer: 1,
            explanation: 'Sigma bonds form by head-on overlap of orbitals, concentrating electron density along the bond axis.'
          },
          {
            question: 'Which type of bond prevents free rotation around the bond axis?',
            options: ['Sigma bond', 'Pi bond', 'Both sigma and pi', 'Neither'],
            correctAnswer: 1,
            explanation: 'Pi bonds form from side-by-side overlap of p orbitals. Rotating around the bond axis would break this overlap, so pi bonds prevent rotation.'
          },
          {
            question: 'Which statement is true about bond strength?',
            options: [
              'Pi bonds are stronger than sigma bonds',
              'Sigma bonds are stronger than pi bonds',
              'Sigma and pi bonds have equal strength',
              'Bond strength depends only on electronegativity'
            ],
            correctAnswer: 1,
            explanation: 'Sigma bonds involve greater head-on overlap, making them stronger than pi bonds, which have less efficient lateral overlap.'
          },
          {
            question: 'In any covalent bond between two atoms, the first bond formed is always a:',
            options: ['Pi bond', 'Sigma bond', 'Hydrogen bond', 'Metallic bond'],
            correctAnswer: 1,
            explanation: 'The first bond between any two atoms is always a sigma bond. Additional bonds (in double or triple bonds) are pi bonds.'
          }
        ]
      }
    },
    {
      id: 'hy-3-5',
      type: 'text',
      title: 'Counting Sigma and Pi Bonds in Molecules',
      content: `## The Counting Rules

### The Simple Rules

$$\\text{Single bond} = 1\\sigma + 0\\pi$$
$$\\text{Double bond} = 1\\sigma + 1\\pi$$
$$\\text{Triple bond} = 1\\sigma + 2\\pi$$

### Counting Strategy

1. Draw or visualize the Lewis structure
2. Count each bond:
   - Every **line** in a Lewis structure between two atoms = 1 sigma bond
   - For double bonds: the second line = 1 pi bond
   - For triple bonds: the second and third lines = 2 pi bonds

### Worked Example: Ethene (C₂H₄)

Structure: H₂C=CH₂
- 4 C–H single bonds → 4σ
- 1 C=C double bond → 1σ + 1π
- **Total: 5σ + 1π**

### Worked Example: Acetylene (C₂H₂)

Structure: HC≡CH
- 2 C–H single bonds → 2σ
- 1 C≡C triple bond → 1σ + 2π
- **Total: 3σ + 2π**

### Worked Example: HCN (Hydrogen Cyanide)

Structure: H–C≡N
- 1 H–C single bond → 1σ
- 1 C≡N triple bond → 1σ + 2π
- **Total: 2σ + 2π**`
    },
    {
      id: 'hy-3-6',
      type: 'input-boxes',
      title: 'Sigma and Pi Bond Counting',
      content: 'Count the total number of sigma and pi bonds in each molecule.',
      exercise: {
        inputs: [
          {
            label: 'Total sigma (σ) bonds in ethane (C₂H₆): H₃C–CH₃',
            correctAnswer: '7',
            explanation: 'Ethane has 6 C–H single bonds (6σ) + 1 C–C single bond (1σ) = 7 sigma bonds total.'
          },
          {
            label: 'Total pi (π) bonds in ethane (C₂H₆)',
            correctAnswer: '0',
            explanation: 'Ethane has only single bonds. Single bonds are all sigma bonds with no pi bonds.'
          },
          {
            label: 'Total sigma (σ) bonds in CO₂ (O=C=O)',
            correctAnswer: '2',
            explanation: 'CO₂ has 2 double bonds. Each double bond contains 1 sigma bond. Total: 2σ.'
          },
          {
            label: 'Total pi (π) bonds in CO₂ (O=C=O)',
            correctAnswer: '2',
            explanation: 'CO₂ has 2 double bonds. Each double bond contains 1 pi bond. Total: 2π.'
          },
          {
            label: 'Total sigma (σ) bonds in N₂ (N≡N)',
            correctAnswer: '1',
            explanation: 'N₂ has 1 triple bond. A triple bond = 1σ + 2π. So there is 1 sigma bond.'
          }
        ]
      }
    },
    {
      id: 'hy-3-7',
      type: 'dropdown-select',
      title: 'Bond Type Identification',
      content: 'Select the correct description for each scenario.',
      exercise: {
        dropdowns: [
          {
            id: 'hy-3-7-dd1',
            label: 'A double bond between two atoms consists of:',
            options: ['1σ + 0π', '1σ + 1π', '1σ + 2π', '2σ + 1π'],
            correctIndex: 1,
            explanation: 'A double bond consists of 1 sigma bond (head-on overlap) + 1 pi bond (lateral overlap).'
          },
          {
            id: 'hy-3-7-dd2',
            label: 'A triple bond between two atoms consists of:',
            options: ['1σ + 0π', '1σ + 1π', '1σ + 2π', '2σ + 2π'],
            correctIndex: 2,
            explanation: 'A triple bond consists of 1 sigma bond + 2 pi bonds.'
          },
          {
            id: 'hy-3-7-dd3',
            label: 'The effect of a pi bond on rotation around the bond axis:',
            options: ['Allows free rotation', 'Prevents free rotation', 'Has no effect on rotation', 'Increases rotation speed'],
            correctIndex: 1,
            explanation: 'Pi bonds prevent free rotation because rotating would break the side-by-side orbital overlap.'
          },
          {
            id: 'hy-3-7-dd4',
            label: 'Comparing sigma bonds and pi bonds, which is generally weaker?',
            options: ['Sigma bond is weaker', 'Pi bond is weaker', 'They are equal in strength', 'Depends on the molecule'],
            correctIndex: 1,
            explanation: 'Pi bonds have less efficient lateral overlap compared to the head-on overlap of sigma bonds, making pi bonds weaker.'
          }
        ]
      }
    },
    {
      id: 'hy-3-8',
      type: 'multiple-choice',
      title: 'Exit Quiz — Sigma and Pi Bonds',
      content: 'Verify your understanding of sigma and pi bond concepts.',
      exercise: {
        questions: [
          {
            question: 'How many sigma and pi bonds are in acetic acid (CH₃COOH) if the structure is: H₃C–C(=O)–O–H? (3 C–H bonds, 1 C–C bond, 1 C=O, 1 C–O bond, 1 O–H bond)',
            options: [
              '6σ, 0π',
              '7σ, 1π',
              '6σ, 2π',
              '8σ, 1π'
            ],
            correctAnswer: 1,
            explanation: 'Count each bond: 3 C–H (3σ) + 1 C–C (1σ) + 1 C=O (1σ + 1π) + 1 C–O (1σ) + 1 O–H (1σ) = 7σ + 1π.'
          },
          {
            question: 'Ethene (C₂H₄) is a planar molecule because:',
            options: [
              'All bonds are sigma bonds',
              'The pi bond prevents rotation, locking atoms in a plane',
              'The molecule is too small to be nonplanar',
              'Hydrogen atoms are very light'
            ],
            correctAnswer: 1,
            explanation: 'The C=C double bond includes a pi bond formed by side-by-side p orbital overlap. This overlap requires all atoms to stay in the same plane — rotation would break the pi bond.'
          }
        ]
      }
    }
  ]
};
