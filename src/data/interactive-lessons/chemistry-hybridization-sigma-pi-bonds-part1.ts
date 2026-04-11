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
| Why Do We Need Hybridization? |
| Key Principles |
| Energy Perspective |
| Properties of sp³ Orbitals |
| How sp³ Works in Methane (CH₄) |

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
      content: `## The Hybridization Process

Hybridization is the mathematical combination of atomic orbitals on the **same atom** to form new hybrid orbitals.

### Key Principles

1. **Number of hybrid orbitals = number of atomic orbitals mixed**
   - Mix 1 s + 3 p → get 4 sp³ hybrid orbitals
   - Mix 1 s + 2 p → get 3 sp² hybrid orbitals
   - Mix 1 s + 1 p → get 2 sp hybrid orbitals

2. **Hybrid orbitals are equivalent** — they have the same shape and energy

3. **Hybrid orbitals are oriented to minimize repulsion** — just like VSEPR predicts

4. **Unhybridized orbitals remain unchanged** — they can form pi bonds (more on this later)

### Energy Perspective

The energy of hybrid orbitals is an **average** of the contributing atomic orbitals:

$$E_{\\text{sp}^3} = \\frac{E_s + 3E_p}{4}$$

This costs some energy (promoting an electron from s to p), but the energy is more than recovered by forming stronger bonds.`
    },
    {
      id: 'hy-1-3',
      type: 'text',
      title: 'sp³ Hybridization',
      content: `## sp³ Hybridization — Tetrahedral

When one s orbital mixes with **three** p orbitals, four equivalent **sp³ hybrid orbitals** form.

### Properties of sp³ Orbitals

| Property | Value |
|----------|-------|
| Number of hybrid orbitals | 4 |
| Geometry | Tetrahedral |
| Bond angle | 109.5° |
| Unhybridized p orbitals remaining | 0 |
| Each orbital can hold | Up to 2 electrons |

### How sp³ Works in Methane (CH₄)

1. Carbon starts: $1s^2\\,2s^2\\,2p^2$ (only 2 unpaired electrons)
2. One $2s$ electron is promoted to the empty $2p$ orbital
3. The one $2s$ and three $2p$ orbitals hybridize → four $sp^3$ orbitals
4. Each $sp^3$ orbital overlaps with a hydrogen $1s$ orbital → 4 equivalent C–H bonds
5. The four $sp^3$ orbitals point toward the corners of a tetrahedron (109.5° apart)

### Other Examples of sp³ Hybridization

- **NH₃**: N is sp³ (3 bonds + 1 lone pair = 4 electron domains)
- **H₂O**: O is sp³ (2 bonds + 2 lone pairs = 4 electron domains)
- **CCl₄**: C is sp³ (4 bonds + 0 lone pairs)

> 🔑 **Key Concept:** Any atom with 4 electron domains is sp³ hybridized.`
    },
    {
      id: 'hy-1-4',
      type: 'multiple-choice',
      title: 'sp³ Hybridization Concepts',
      content: 'Test your understanding of hybridization fundamentals.',
      exercise: {
        questions: [
          {
            question: 'How many atomic orbitals mix together to form sp³ hybrid orbitals?',
            options: ['2', '3', '4', '5'],
            correctAnswer: 2,
            explanation: 'sp³ = one s orbital + three p orbitals = 4 atomic orbitals mixing to produce 4 hybrid orbitals.'
          },
          {
            question: 'What is the bond angle in a perfect sp³ (tetrahedral) arrangement?',
            options: ['90°', '109.5°', '120°', '180°'],
            correctAnswer: 1,
            explanation: 'The tetrahedral angle is 109.5°. This is the angle that maximizes the distance between four equivalent groups around a central atom.'
          },
          {
            question: 'The oxygen atom in H₂O has 2 bonds and 2 lone pairs. What is its hybridization?',
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctAnswer: 2,
            explanation: 'Oxygen in H₂O has 4 electron domains (2 bonds + 2 lone pairs), so it is sp³ hybridized. The lone pairs occupy sp³ orbitals just like the bonding pairs.'
          },
          {
            question: 'Why does carbon need to hybridize in CH₄?',
            options: [
              'To have enough electrons for 4 bonds',
              'To make all four C–H bonds equivalent',
              'To increase its atomic number',
              'To become an ion'
            ],
            correctAnswer: 1,
            explanation: 'Without hybridization, carbon\'s s and p orbitals have different energies and shapes, which would produce non-equivalent bonds. Hybridization creates four identical sp³ orbitals that form four equivalent C–H bonds.'
          }
        ]
      }
    },
    {
      id: 'hy-1-5',
      type: 'text',
      title: 'Visualizing sp³ Orbitals',
      content: `## Shape of Hybrid Orbitals

Each hybrid orbital has a distinctive shape: **one large lobe** pointing in the bonding direction and **one small lobe** on the opposite side.

### sp³ vs. Unhybridized Orbitals

| Feature | s orbital | p orbital | sp³ hybrid |
|---------|-----------|-----------|------------|
| Shape | Spherical | Dumbbell (two equal lobes) | One large + one small lobe |
| Directional? | No | Yes | Yes — more directional than p |
| Bonding ability | Weak overlap | Moderate overlap | **Strong overlap** |

### Why Hybrids Bond Better

The large lobe of an sp³ orbital extends **further from the nucleus** than either an s or p orbital alone. This produces:
- Greater overlap with the bonding partner
- **Stronger bonds**
- More directed electron density

### Key Takeaway

> 🔑 **Key Concept:** Hybridization is the atom\'s way of optimizing orbital geometry for bonding. The "cost" of promoting an electron is more than repaid by the **stronger, more directional bonds** that hybrid orbitals form.`
    },
    {
      id: 'hy-1-6',
      type: 'input-boxes',
      title: 'Counting Electron Domains for sp³',
      content: 'Determine the number of electron domains around the central atom and confirm sp³ hybridization.',
      exercise: {
        inputs: [
          {
            label: 'How many electron domains does nitrogen have in NH₃? (3 bonds + 1 lone pair)',
            correctAnswer: '4',
            explanation: 'Nitrogen in NH₃ has 3 bonding domains + 1 lone pair = 4 total electron domains → sp³ hybridization.'
          },
          {
            label: 'How many electron domains does carbon have in CHCl₃ (chloroform)? (4 bonds, 0 lone pairs)',
            correctAnswer: '4',
            explanation: 'Carbon in CHCl₃ has 4 single bonds (1 to H, 3 to Cl) and 0 lone pairs = 4 electron domains → sp³.'
          },
          {
            label: 'How many sp³ hybrid orbitals does a carbon atom form in ethane (C₂H₆)?',
            correctAnswer: '4',
            explanation: 'Each carbon in ethane has 4 electron domains (3 C–H bonds + 1 C–C bond), so each carbon forms 4 sp³ hybrid orbitals.'
          },
          {
            label: 'How many unhybridized p orbitals remain on an sp³-hybridized atom?',
            correctAnswer: '0',
            explanation: 'In sp³ hybridization, all three p orbitals (plus the s orbital) are used in hybridization. Zero unhybridized p orbitals remain.'
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
            options: ['sp', 'sp²', 'sp³', 'sp³d'],
            correctIndex: 2,
            explanation: 'An atom with 4 electron domains has sp³ hybridization. This applies to CH₄, NH₃, H₂O, etc.'
          },
          {
            id: 'hy-1-7-dd2',
            label: 'The ideal sp³ tetrahedral bond angle is',
            options: ['90°', '109.5°', '120°', '180°'],
            correctIndex: 1,
            explanation: 'The ideal sp³ tetrahedral bond angle is 109.5°.'
          },
          {
            id: 'hy-1-7-dd3',
            label: 'Mixing 1 s + 3 p orbitals gives exactly _______ sp³ hybrid orbitals',
            options: ['1', '2', '3', '4'],
            correctIndex: 3,
            explanation: 'Mixing 1 s + 3 p orbitals gives exactly 4 sp³ hybrid orbitals — the number of hybrids always equals the number of atomic orbitals combined.'
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

1. **Hybridization** = mixing atomic orbitals on the same atom to create new, equivalent hybrid orbitals
2. The number of hybrid orbitals formed equals the number of atomic orbitals mixed
3. **sp³ hybridization**: 1 s + 3 p → 4 equivalent orbitals, tetrahedral geometry, 109.5° angles
4. Lone pairs also occupy hybrid orbitals
5. Hybrid orbitals form stronger, more directional bonds than unhybridized orbitals

### The Pattern

| Electron Domains | Hybridization | Geometry |
|-----------------|---------------|----------|
| 4 | sp³ | Tetrahedral |
| 3 | sp² | Trigonal planar |
| 2 | sp | Linear |

Coming up in **Part 2**: sp² and sp hybridization — what happens when not all p orbitals are used.`
    }
  ]
};
