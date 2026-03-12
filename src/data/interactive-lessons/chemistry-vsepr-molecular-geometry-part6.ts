export const chemVseprMolecularGeometryPart6Data = {
  topicSlug: 'vsepr-molecular-geometry',
  sections: [
    {
      id: 'vg-6-1',
      type: 'text',
      title: 'Molecular Polarity and Dipoles',
      content: `# ⚡ Polarity of Molecules

**Part 6 of 7 — From Bond Dipoles to Molecular Dipoles**

Understanding molecular geometry is essential because it determines whether a molecule is **polar** or **nonpolar** — a property that affects solubility, boiling point, intermolecular forces, and biological behavior.

### Review: Bond Polarity

A **bond dipole** exists whenever two atoms with different electronegativities share electrons unequally. The more electronegative atom pulls electron density toward itself.

$$\\text{Bond dipole: } \\delta^+ \\text{—} \\delta^-$$

- Larger electronegativity difference → stronger bond dipole
- Equal electronegativity (e.g., C–C, O–O) → nonpolar bond

### From Bond Dipoles to Molecular Dipoles

The **molecular dipole moment** is the **vector sum** of all individual bond dipoles. This means:

- Both the **magnitude** and **direction** of each bond dipole matter
- If bond dipoles cancel out (by symmetry), the molecule is **nonpolar**
- If they don\'t cancel, the molecule is **polar**

$$\\vec{\\mu}_{\\text{molecule}} = \\sum \\vec{\\mu}_{\\text{bonds}}$$`
    },
    {
      id: 'vg-6-2',
      type: 'text',
      title: 'Symmetric vs. Asymmetric Geometries',
      content: `## Symmetry Is the Key

### Nonpolar Molecules (Symmetric — Dipoles Cancel)

Even if individual bonds are polar, the molecule can be nonpolar if the geometry is **symmetric** and all outer atoms are the **same**:

| Molecule | Geometry | Polar Bonds? | Molecular Dipole? | Why? |
|----------|----------|-------------|-------------------|------|
| CO₂ | Linear | Yes (C=O) | **No** | Two equal dipoles point in opposite directions → cancel |
| BF₃ | Trigonal planar | Yes (B–F) | **No** | Three equal dipoles at 120° → cancel |
| CH₄ | Tetrahedral | Yes (C–H) | **No** | Four equal dipoles in tetrahedral arrangement → cancel |
| SF₆ | Octahedral | Yes (S–F) | **No** | Six equal dipoles → cancel |
| XeF₂ | Linear | Yes (Xe–F) | **No** | Two equal dipoles 180° apart → cancel |

### Polar Molecules (Asymmetric — Dipoles Don\'t Cancel)

| Molecule | Geometry | Why Polar? |
|----------|----------|-----------|
| H₂O | Bent | Two O–H dipoles point in same general direction |
| NH₃ | Trigonal pyramidal | Three N–H dipoles point "upward" — no opposing dipole |
| HCl | Linear (diatomic) | Only one bond, so the bond dipole IS the molecular dipole |
| SO₂ | Bent | Two S=O dipoles don\'t cancel due to bent shape |
| CHCl₃ | Tetrahedral | Different atoms → dipoles don\'t fully cancel |

### The Two Requirements for a Nonpolar Molecule

1. The geometry must be **symmetric**
2. All surrounding atoms must be **identical**

If either condition fails, the molecule is polar.`
    },
    {
      id: 'vg-6-3',
      type: 'multiple-choice',
      title: 'Polarity Identification',
      content: 'Determine whether each molecule is polar or nonpolar.',
      exercise: {
        questions: [
          {
            question: 'Is CCl₄ polar or nonpolar?',
            options: [
              'Polar — because C–Cl bonds are polar',
              'Nonpolar — because the tetrahedral symmetry cancels all bond dipoles',
              'Polar — because chlorine is very electronegative',
              'Nonpolar — because there are no bond dipoles'
            ],
            correctAnswer: 1,
            explanation: 'Although each C–Cl bond is polar, CCl₄ has a symmetric tetrahedral geometry with 4 identical Cl atoms. The 4 bond dipoles cancel exactly, making the molecule nonpolar.'
          },
          {
            question: 'Is H₂O polar or nonpolar?',
            options: [
              'Nonpolar — the O–H bond dipoles cancel',
              'Polar — the bent geometry means bond dipoles don\'t cancel',
              'Nonpolar — oxygen is not very electronegative',
              'Polar — because it has lone pairs'
            ],
            correctAnswer: 1,
            explanation: 'H₂O has a bent geometry (104.5°). The two O–H bond dipoles both point away from the oxygen, but because the molecule is bent (not linear), they don\'t cancel. The net dipole points toward oxygen.'
          },
          {
            question: 'CH₂Cl₂ has a tetrahedral geometry with 2 H and 2 Cl around carbon. Is it polar?',
            options: [
              'Nonpolar — tetrahedral geometry always cancels dipoles',
              'Polar — the C–H and C–Cl dipoles have different magnitudes and don\'t cancel',
              'Nonpolar — H and Cl have the same electronegativity',
              'Cannot be determined without more information'
            ],
            correctAnswer: 1,
            explanation: 'Even though the geometry is tetrahedral, the surrounding atoms are NOT all the same. C–Cl dipoles are much stronger than C–H dipoles, so the net dipole does not cancel. CH₂Cl₂ is polar.'
          }
        ]
      }
    },
    {
      id: 'vg-6-4',
      type: 'text',
      title: 'Lone Pairs and Polarity',
      content: `## Lone Pairs Guarantee Asymmetry

Any molecule with **lone pairs on the central atom** and **polar bonds** will be polar, because the lone pairs create an asymmetric distribution of electron density.

### Why?

Lone pairs contribute to the electron density around the central atom but don\'t have a corresponding atom on the opposite side to balance them. This creates a region of high electron density with no opposing dipole.

### Examples

| Molecule | Lone Pairs | Geometry | Polar? |
|----------|-----------|----------|--------|
| NH₃ | 1 | Trigonal pyramidal | **Yes** — lone pair creates net dipole |
| H₂O | 2 | Bent | **Yes** — lone pairs enhance net dipole |
| SF₄ | 1 | Seesaw | **Yes** — asymmetric shape |
| ClF₃ | 2 | T-shaped | **Yes** — asymmetric shape |

### Exception: Symmetric Lone Pair Arrangements

Some molecules have lone pairs but are still **nonpolar** because the lone pairs are arranged symmetrically:

- **XeF₂**: 3 lone pairs (all equatorial) + 2 bonds (axial) → **linear** → nonpolar
- **XeF₄**: 2 lone pairs (trans) + 4 bonds → **square planar** → nonpolar

The key is whether the overall arrangement (bonds + lone pairs) produces a net dipole.`
    },
    {
      id: 'vg-6-5',
      type: 'dropdown-select',
      title: 'Polar or Nonpolar?',
      content: 'Classify each molecule as polar or nonpolar.',
      exercise: {
        dropdowns: [
          {
            id: 'vg-6-5-dd1',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: 'BF₃ has a symmetric trigonal planar geometry with 3 identical F atoms. Bond dipoles cancel → nonpolar.'
          },
          {
            id: 'vg-6-5-dd2',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 0,
            explanation: 'SO₂ has a bent geometry (steric number 3, 1 lone pair). The two S=O dipoles don\'t cancel → polar.'
          },
          {
            id: 'vg-6-5-dd3',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: 'XeF₄ has a square planar geometry with lone pairs in trans positions. The four Xe–F dipoles cancel → nonpolar.'
          },
          {
            id: 'vg-6-5-dd4',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 0,
            explanation: 'SF₄ has a seesaw geometry (steric number 5, 1 lone pair). The asymmetric shape means dipoles don\'t fully cancel → polar.'
          },
          {
            id: 'vg-6-5-dd5',
            options: ['Polar', 'Nonpolar'],
            correctIndex: 1,
            explanation: 'CO₂ is linear with 2 identical C=O double bonds pointing in opposite directions. Dipoles cancel → nonpolar.'
          }
        ]
      }
    },
    {
      id: 'vg-6-6',
      type: 'text',
      title: 'Polarity and Physical Properties',
      content: `## Why Polarity Matters

Molecular polarity directly affects physical properties:

### Solubility
- **"Like dissolves like"**
- Polar molecules dissolve in polar solvents (e.g., water)
- Nonpolar molecules dissolve in nonpolar solvents (e.g., hexane)

### Boiling Point
- Polar molecules have stronger **intermolecular forces** (dipole–dipole interactions)
- Higher polarity → higher boiling point (generally)
- Nonpolar molecules rely on weaker London dispersion forces

### Intermolecular Forces Hierarchy

$$\\text{Ion–ion} > \\text{Hydrogen bonding} > \\text{Dipole–dipole} > \\text{London dispersion}$$

Polar molecules with N–H, O–H, or F–H bonds can form **hydrogen bonds** — the strongest type of intermolecular force (excluding ionic).

### Example Comparison

| Property | CO₂ (nonpolar) | H₂O (polar) |
|----------|----------------|-------------|
| Boiling point | −78.5°C (sublimes) | 100°C |
| Solubility in water | Slightly soluble | N/A (is water) |
| Dominant IMF | London dispersion | H-bonding |

The dramatic difference in boiling points is largely due to water\'s strong hydrogen bonding, which is possible because of its polar bent geometry.`
    },
    {
      id: 'vg-6-7',
      type: 'input-boxes',
      title: 'Polarity Analysis Practice',
      content: 'Answer these questions about molecular polarity.',
      exercise: {
        inputs: [
          {
            label: 'Is PCl₃ polar or nonpolar? (Type "polar" or "nonpolar")',
            correctAnswer: 'polar',
            explanation: 'PCl₃ has a trigonal pyramidal geometry (3 bonds + 1 lone pair). The asymmetric shape means bond dipoles don\'t cancel → polar.'
          },
          {
            label: 'Is SF₆ polar or nonpolar? (Type "polar" or "nonpolar")',
            correctAnswer: 'nonpolar',
            explanation: 'SF₆ has a perfectly symmetric octahedral geometry with 6 identical F atoms. All bond dipoles cancel → nonpolar.'
          },
          {
            label: 'Is NF₃ polar or nonpolar? (Type "polar" or "nonpolar")',
            correctAnswer: 'polar',
            explanation: 'NF₃ has a trigonal pyramidal geometry (3 bonds + 1 lone pair). Like NH₃, the asymmetric shape creates a net dipole → polar.'
          }
        ]
      }
    },
    {
      id: 'vg-6-8',
      type: 'multiple-choice',
      title: 'Part 6 Exit Quiz',
      content: 'Test your understanding of molecular polarity.',
      exercise: {
        questions: [
          {
            question: 'Which of the following molecules is nonpolar despite having polar bonds?',
            options: ['NH₃', 'H₂O', 'CCl₄', 'HF'],
            correctAnswer: 2,
            explanation: 'CCl₄ has polar C–Cl bonds, but its symmetric tetrahedral geometry causes all bond dipoles to cancel, resulting in a nonpolar molecule.'
          },
          {
            question: 'Two molecules have the same molar mass. Molecule A is polar and molecule B is nonpolar. Which likely has the higher boiling point?',
            options: [
              'Molecule B (nonpolar)',
              'Molecule A (polar)',
              'They would have the same boiling point',
              'Cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'Polar molecules have additional dipole–dipole intermolecular forces beyond London dispersion forces. These stronger IMFs require more energy to overcome, resulting in a higher boiling point for the polar molecule.'
          }
        ]
      }
    }
  ]
};
