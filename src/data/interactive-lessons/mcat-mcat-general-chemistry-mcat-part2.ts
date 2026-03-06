export const mcatGenChemPart2Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc2-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 2 of 7 — Bonding & Molecular Geometry**

Bonding determines shape, shape determines polarity, and polarity determines intermolecular forces — which in turn control boiling points, solubility, and biological behavior. The MCAT tests this entire chain of reasoning.
`
    },
    {
      id: 'gc2-bond-types',
      type: 'text' as const,
      content: `## Types of Chemical Bonds

### Electronegativity Difference → Bond Type

| ΔEN | Bond Type | Example |
|-----|-----------|---------|
| 0 – 0.4 | Nonpolar covalent | $\\text{H}_2$, $\\text{Cl}_2$, $\\text{C-H}$ |
| 0.5 – 1.7 | Polar covalent | $\\text{H-Cl}$, $\\text{H-O}$, $\\text{C-O}$ |
| > 1.7 | Ionic | $\\text{NaCl}$, $\\text{MgO}$ |

### Formal Charge

Use formal charge to identify the best Lewis structure (lowest formal charges, negative charge on most electronegative atom):

$$\\text{FC} = V - L - \\frac{1}{2}B$$

where $V$ = valence electrons, $L$ = lone-pair electrons, $B$ = bonding electrons

**Example — $\\text{CO}_2$:**  
Central C: $V=4$, $L=0$, $B=8$ (two double bonds) → $\\text{FC} = 4 - 0 - 4 = 0$ ✓

### Resonance

When multiple valid Lewis structures exist (e.g., $\\text{SO}_3$, $\\text{NO}_3^-$, benzene), the molecule is best described as a **resonance hybrid** — all bonds are intermediate in character, not alternating.

- All bonds in $\\text{NO}_3^-$ are equivalent (bond order = $1\\tfrac{1}{3}$)
- Resonance structures share the same skeleton but differ in electron distribution
`
    },
    {
      id: 'gc2-vsepr',
      type: 'text' as const,
      content: `## VSEPR & Molecular Geometry

**Strategy:** Count electron domains (bonds + lone pairs) on the central atom → get electron-domain geometry → remove lone pairs → get molecular geometry.

| Electron Domains | Lone Pairs | Molecular Geometry | Bond Angles |
|-----------------|------------|-------------------|-------------|
| 2 | 0 | Linear | 180° |
| 3 | 0 | Trigonal planar | 120° |
| 3 | 1 | Bent | <120° |
| 4 | 0 | Tetrahedral | 109.5° |
| 4 | 1 | Trigonal pyramidal | ~107° |
| 4 | 2 | Bent | ~104.5° |
| 5 | 0 | Trigonal bipyramidal | 90°/120° |
| 6 | 0 | Octahedral | 90° |
| 6 | 2 | Square planar | 90° |

**Lone pairs compress angles** because lone pair–bonding pair repulsion > bonding pair–bonding pair repulsion.

### Polarity

A molecule is polar if:
1. It has polar bonds **AND**
2. The bond dipoles do NOT cancel symmetrically

**Nonpolar despite polar bonds:** $\\text{CO}_2$ (linear), $\\text{BF}_3$ (trigonal planar), $\\text{CCl}_4$ (tetrahedral) — bond dipoles cancel.

**Polar:** $\\text{H}_2\\text{O}$ (bent), $\\text{NH}_3$ (trigonal pyramidal), $\\text{HCl}$ (linear, only one dipole).
`
    },
    {
      id: 'gc2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bonding & Molecular Geometry** 🎯`,
      exercise: {
        questions: [
          {
            question: `$\\text{XeF}_4$ has how many lone pairs on Xe, and what is its molecular geometry?`,
            options: [
              `2 lone pairs; square planar`,
              `1 lone pair; seesaw`,
              `0 lone pairs; tetrahedral`,
              `3 lone pairs; T-shaped`
            ],
            correctAnswer: 0,
            explanation: `Xe has 8 valence electrons. Four bonds to F use 4 electrons; 4 remain as 2 lone pairs. Total 6 electron domains → octahedral arrangement. With 2 lone pairs opposed (minimizing repulsion), molecular geometry is **square planar**.`
          },
          {
            question: `Which molecule is NONPOLAR despite containing polar bonds?`,
            options: [
              `$\\text{CO}_2$`,
              `$\\text{SO}_2$`,
              `$\\text{NH}_3$`,
              `$\\text{H}_2\\text{O}$`
            ],
            correctAnswer: 0,
            explanation: `$\\text{CO}_2$ is linear. The two C=O dipoles point in exactly opposite directions and cancel, making the molecule nonpolar. The others are bent or pyramidal with net dipole moments.`
          },
          {
            question: `The bond angle in $\\text{H}_2\\text{O}$ (~104.5°) is smaller than in $\\text{CH}_4$ (109.5°) because:`,
            options: [
              `O is more electronegative than C`,
              `Two lone pairs on O compress the H-O-H angle more than bonding pairs`,
              `H is smaller than C`,
              `The O-H bond is shorter than C-H`
            ],
            correctAnswer: 1,
            explanation: `Lone pair–bonding pair repulsion > bonding pair–bonding pair repulsion. Water has 2 lone pairs compressing the bond angle from 109.5° to ~104.5°.`
          },
          {
            question: `What is the formal charge on N in $\\text{NO}_3^-$ (each N-O bond order is $1\\tfrac{1}{3}$)?`,
            options: [
              `+1`,
              `0`,
              `-1`,
              `+3`
            ],
            correctAnswer: 0,
            explanation: `In the most representative resonance structure (N forms one double bond and two single bonds): V(N)=5, L=0, B=8. FC = 5-0-4 = +1. The -1 charge resides on the singly-bonded oxygens.`
          },
          {
            question: `Which has trigonal pyramidal molecular geometry?`,
            options: [
              `$\\text{BF}_3$`,
              `$\\text{NH}_3$`,
              `$\\text{CO}_2$`,
              `$\\text{SO}_3$`
            ],
            correctAnswer: 1,
            explanation: `$\\text{NH}_3$ has 4 electron domains (3 bonds + 1 lone pair). Electron domain geometry = tetrahedral; molecular geometry = trigonal pyramidal.`
          }
        ]
      }
    },
    {
      id: 'gc2-imf',
      type: 'text' as const,
      content: `## Intermolecular Forces (IMFs)

IMFs determine physical properties: boiling point, melting point, viscosity, surface tension, vapor pressure.

**Strength ranking (weakest → strongest):**

$$\\text{London Dispersion} < \\text{Dipole-Dipole} < \\text{Hydrogen Bonding} < \\text{Ion-Dipole}$$

### London Dispersion Forces (LDF)

- Present in **all** molecules (even nonpolar)
- Arise from temporary fluctuating dipoles
- Increase with **molecular size (molar mass)** and **surface area**
- Linear molecules have more surface contact than branched → higher BP

### Dipole-Dipole Forces

- In polar molecules (permanent dipoles)
- Larger dipole moment → stronger force

### Hydrogen Bonding

Requires: **H bonded directly to N, O, or F**

Examples: $\\text{H}_2\\text{O}$, $\\text{NH}_3$, $\\text{HF}$, alcohols, carboxylic acids, DNA base pairs

**Why water is anomalous:** Each water molecule can form up to 4 H-bonds (2 donor, 2 acceptor) → unusually high BP (100°C vs. expected ~−80°C).

### MCAT Application — Boiling Point Comparisons

| Comparison | Winner | Reason |
|-----------|--------|--------|
| $\\text{CH}_3\\text{OH}$ vs $\\text{CH}_3\\text{CH}_3$ | Methanol (higher BP) | H-bonding in methanol |
| $n$-pentane vs neopentane | $n$-pentane | Greater surface area → stronger LDF |
| $\\text{H}_2\\text{O}$ vs $\\text{H}_2\\text{S}$ | Water | H-bonding; $\\text{H}_2\\text{S}$ only has LDF |
`
    },
    {
      id: 'gc2-quiz2',
      type: 'multiple-choice' as const,
      content: `**Intermolecular Forces** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which interaction is responsible for the hydration of $\\text{Na}^+$ in aqueous solution?`,
            options: [
              `London dispersion forces`,
              `Hydrogen bonding`,
              `Ion-dipole forces`,
              `Dipole-dipole forces`
            ],
            correctAnswer: 2,
            explanation: `Ion-dipole forces arise between an ionic charge and a polar molecule's dipole. The partial negative oxygen of water is attracted to $\\text{Na}^+$. This is the strongest intermolecular force.`
          },
          {
            question: `$n$-Butane (CH₃CH₂CH₂CH₃) has a higher boiling point than isobutane (same formula, branched). This is due to:`,
            options: [
              `Stronger hydrogen bonding in $n$-butane`,
              `Greater surface area in $n$-butane increases London dispersion forces`,
              `$n$-Butane is polar while isobutane is nonpolar`,
              `Isobutane has a higher molar mass`
            ],
            correctAnswer: 1,
            explanation: `Both are nonpolar hydrocarbons with identical molar masses. Linear $n$-butane has more surface area contact between molecules than compact isobutane, leading to stronger London dispersion forces and a higher boiling point.`
          },
          {
            question: `Which molecule exhibits hydrogen bonding?`,
            options: [
              `$\\text{CH}_4$`,
              `$\\text{HCl}$`,
              `$\\text{CH}_3\\text{NH}_2$`,
              `$\\text{CH}_3\\text{Cl}$`
            ],
            correctAnswer: 2,
            explanation: `Hydrogen bonding requires H directly bonded to N, O, or F. Methylamine ($\\text{CH}_3\\text{NH}_2$) has H bonded to N → hydrogen bonding occurs. HCl only has dipole-dipole despite Cl being electronegative (Cl is too large).`
          },
          {
            question: `The high surface tension of water compared to hexane is best explained by:`,
            options: [
              `Water's higher molar mass`,
              `London dispersion forces in water`,
              `Extensive hydrogen bonding network in water`,
              `Water's lower vapor pressure`
            ],
            correctAnswer: 2,
            explanation: `Water molecules form an extensive H-bonding network requiring significant energy to disrupt. This network creates high surface tension and explains water's many anomalous properties.`
          }
        ]
      }
    },
    {
      id: 'gc2-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **Bond polarity** depends on electronegativity difference; molecular polarity depends on geometry.
- **VSEPR:** count all electron domains, determine geometry, then remove lone pairs for molecular shape.
- Lone pairs compress bond angles more than bonding pairs.
- **$\\text{CO}_2$, $\\text{BF}_3$, $\\text{CCl}_4$** = nonpolar despite polar bonds (symmetric cancellation).
- **IMF strength:** LDF < dipole-dipole < H-bonding < ion-dipole.
- **Hydrogen bonding** requires H directly bonded to N, O, or F.
- Larger molecular surface area → stronger LDF → higher boiling point (branching lowers BP).
`
    }
  ]
};
          }
        ]
      }
    },
    {
      id: 'gc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Molecular shape determines dipole cancellation or net polarity.
- Distinguish electron-domain geometry from molecular geometry.
- Connect IMF strength to boiling point and phase behavior.
- Always ask: "Does this molecule have both a polar bond and asymmetric geometry?"`
    }
  ]
};
