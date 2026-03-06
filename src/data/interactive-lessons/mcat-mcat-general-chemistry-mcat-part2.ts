export const mcatGenChemPart2Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc2-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 2 of 7 — Bonding & Molecular Geometry**

    ### Bonding Models and Polarity

    Bonding on the MCAT is about predicting **shape -> polarity -> intermolecular forces -> physical behavior**.

    - **Ionic**: full electron transfer (large electronegativity difference)
    - **Polar covalent**: unequal sharing
    - **Nonpolar covalent**: nearly equal sharing
    - **Coordinate covalent**: both bonding electrons from one donor atom

    ### VSEPR Strategy (Fast and Reliable)

    1. Draw a Lewis structure.
    2. Count electron domains around central atom.
    3. Determine electron-domain geometry.
    4. Convert to molecular geometry after removing lone pairs.

    | Electron domains | Lone pairs on central atom | Molecular geometry | Approx angle |
    |------------------|---------------------------|--------------------|--------------|
    | 2 | 0 | Linear | 180° |
    | 3 | 0 | Trigonal planar | 120° |
    | 3 | 1 | Bent | <120° |
    | 4 | 0 | Tetrahedral | 109.5° |
    | 4 | 1 | Trigonal pyramidal | ~107° |
    | 4 | 2 | Bent | ~104.5° |

    Lone pairs repel more strongly than bonding pairs, compressing angles.

    ### Intermolecular Forces and Macroscopic Consequences

    **Strength trend** (for comparable molecules):

    London < dipole-dipole < H-bonding < ion-dipole

    Stronger IMFs generally increase boiling point, viscosity, and surface tension and reduce vapor pressure.`
    },
    {
      id: 'gc2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Bonding & Geometry** 🎯`,
      exercise: {
        questions: [
          {
            question: `$\\text{XeF}_4$ has what molecular geometry?`,
            options: [`Square planar (6 electron groups, 2 lone pairs)`, `Tetrahedral`, `Seesaw`, `Octahedral`],
            correctAnswer: 0,
            explanation: `Xe has 8 valence e$^-$ + 4 from F bonds + 4 remain = 6 electron groups total (4 bonds + 2 lone pairs on Xe). This gives square planar geometry.`
          },
          {
            question: `Which intermolecular force explains why $\\text{CH}_3\\text{OH}$ (MW 32) has a higher boiling point than $\\text{CH}_3\\text{CH}_3$ (MW 30)?`,
            options: [`Hydrogen bonding in methanol`, `Greater London dispersion forces in ethane`, `Ion-dipole interactions`, `Covalent bonding differences`],
            correctAnswer: 0,
            explanation: `Methanol has O-H bonds capable of hydrogen bonding (O is electronegative with lone pairs). Ethane only has weak London dispersion forces.`
          },
          {
            question: `Which molecule is NONPOLAR despite containing polar bonds?`,
            options: [`$CO_2$`, `$SO_2$`, `$NH_3$`, `$H_2O$`],
            correctAnswer: 0,
            explanation: `$CO_2$ is linear, so equal and opposite bond dipoles cancel. $SO_2$, $NH_3$, and $H_2O$ are bent/pyramidal and therefore polar.`
          },
          {
            question: `Which species has trigonal pyramidal molecular geometry?`,
            options: [`$BF_3$`, `$NH_3$`, `$CO_2$`, `$SO_3$`],
            correctAnswer: 1,
            explanation: `$NH_3$ has 4 electron domains (3 bonds + 1 lone pair), giving trigonal pyramidal molecular geometry.`
          },
          {
            question: `Which interaction is strongest between $Na^+$ and $H_2O$ molecules in solution?`,
            options: [`London dispersion`, `Hydrogen bonding`, `Ion-dipole`, `Dipole-dipole`],
            correctAnswer: 2,
            explanation: `Hydration of ions in water is driven primarily by ion-dipole attraction between ionic charge and water dipole.`
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
