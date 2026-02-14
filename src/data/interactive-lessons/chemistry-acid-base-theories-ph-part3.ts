export const chemAcidBaseTheoriesPhPart3Data = {
  topicSlug: 'acid-base-theories-ph',
  sections: [
    {
      id: 'ab3-intro',
      type: 'text' as const,
      content: `
# 🔬 Lewis Acids and Bases

**Part 3 of 7 — Electron Pair Donors and Acceptors**

The Lewis definition is the **broadest** acid-base theory. It doesn\'t require protons at all — it focuses on **electron pairs**.
      `
    },
    {
      id: 'ab3-lewis-definition',
      type: 'text' as const,
      content: `
## The Lewis Definition

| Type | Definition | Key Feature |
|------|-----------|------------|
| **Lewis Acid** | Electron pair **acceptor** | Has an empty orbital or can make room for electrons |
| **Lewis Base** | Electron pair **donor** | Has a lone pair of electrons to share |

### Comparison of All Three Theories

| Theory | Acid | Base |
|--------|------|------|
| **Arrhenius** | Produces $H^+$ in water | Produces $OH^-$ in water |
| **Brønsted-Lowry** | Proton donor | Proton acceptor |
| **Lewis** | Electron pair acceptor | Electron pair donor |

### Key Insight

Every Arrhenius acid is a Brønsted-Lowry acid, and every Brønsted-Lowry acid involves a Lewis acid interaction. The Lewis definition is the **most inclusive**.

$$\\text{Arrhenius} \\subset \\text{Brønsted-Lowry} \\subset \\text{Lewis}$$
      `
    },
    {
      id: 'ab3-lewis-examples',
      type: 'text' as const,
      content: `
## Common Lewis Acids

### 1. Metal Cations

Metal ions have empty orbitals and accept electron pairs from ligands:

$$Cu^{2+} + 4NH_3 \\rightarrow [Cu(NH_3)_4]^{2+}$$

- $Cu^{2+}$: Lewis acid (accepts electron pairs)
- $NH_3$: Lewis base (donates lone pair)

### 2. Molecules with Incomplete Octets

$$BF_3 + NH_3 \\rightarrow F_3B\\text{-}NH_3$$

- $BF_3$: Lewis acid (boron has only 6 electrons, empty p orbital)
- $NH_3$: Lewis base (nitrogen has a lone pair)

### 3. Protons ($H^+$)

The proton itself is a Lewis acid — it accepts an electron pair:

$$H^+ + OH^- \\rightarrow H_2O$$

This shows how the Lewis definition encompasses the Brønsted-Lowry definition.

## Common Lewis Bases

Any species with a **lone pair** can be a Lewis base:
- $NH_3$, $H_2O$, $OH^-$, $F^-$, $CN^-$
- Molecules with lone pairs on N, O, S, or halide ions
      `
    },
    {
      id: 'ab3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Lewis Acid-Base Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which species acts as a Lewis acid in the reaction $AlCl_3 + Cl^- \\rightarrow AlCl_4^-$?',
            options: [
              '$Cl^-$',
              '$AlCl_3$',
              '$AlCl_4^-$',
              'None of the above'
            ],
            correctAnswer: 1,
            explanation: '$AlCl_3$ has an incomplete octet on Al (only 6 electrons). It accepts an electron pair from $Cl^-$, making it the Lewis acid. $Cl^-$ donates its lone pair, making it the Lewis base.'
          },
          {
            question: 'A Lewis base must have:',
            options: [
              'A positive charge',
              'A lone pair of electrons',
              'A hydrogen atom to donate',
              'An incomplete octet'
            ],
            correctAnswer: 1,
            explanation: 'A Lewis base donates an electron pair. It must have a lone pair available. It does not need to have hydrogen or a negative charge (though many Lewis bases are anions).'
          },
          {
            question: 'Which of these is a Lewis acid but NOT a Brønsted-Lowry acid?',
            options: [
              '$HCl$',
              '$H_2SO_4$',
              '$BF_3$',
              '$HNO_3$'
            ],
            correctAnswer: 2,
            explanation: '$BF_3$ accepts electron pairs (Lewis acid) but has no $H^+$ to donate, so it\'s not a Brønsted-Lowry acid. All the other options donate protons and are both Brønsted-Lowry and Lewis acids.'
          }
        ]
      }
    },
    {
      id: 'ab3-coordinate-bonds',
      type: 'text' as const,
      content: `
## Coordinate Covalent Bonds

When a Lewis base donates an electron pair to a Lewis acid, the resulting bond is called a **coordinate covalent bond** (or **dative bond**).

$$F_3B + :NH_3 \\rightarrow F_3B\\text{←}NH_3$$

The arrow ← shows that **both** electrons in the bond came from the nitrogen of $NH_3$.

### In Coordination Chemistry

Metal ions form **coordination compounds** with Lewis bases (called **ligands**):

$$Fe^{3+} + 6CN^- \\rightarrow [Fe(CN)_6]^{3-}$$

| Lewis Acid | Lewis Base (Ligand) | Product |
|-----------|-------------------|---------|
| $Fe^{3+}$ | $CN^-$ | $[Fe(CN)_6]^{3-}$ |
| $Ag^+$ | $NH_3$ | $[Ag(NH_3)_2]^+$ |
| $Cu^{2+}$ | $H_2O$ | $[Cu(H_2O)_6]^{2+}$ |
      `
    },
    {
      id: 'ab3-dropdown-check',
      type: 'dropdown-select' as const,
      content: `
**Lewis Acid-Base Classification** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In the reaction $Ag^+ + 2NH_3 \\rightarrow [Ag(NH_3)_2]^+$, $Ag^+$ is the Lewis',
            options: ['acid', 'base', 'salt', 'spectator']
          },
          {
            label: 'The most inclusive acid-base theory is',
            options: ['Arrhenius', 'Brønsted-Lowry', 'Lewis', 'All are equally inclusive']
          },
          {
            label: '$BF_3$ acts as a Lewis acid because boron has',
            options: ['extra electrons', 'an incomplete octet', 'a full octet', 'high electronegativity']
          },
          {
            label: 'A coordinate covalent bond forms when',
            options: ['each atom donates one electron', 'one atom donates both electrons', 'electrons are transferred', 'no electrons are shared']
          }
        ],
        correctAnswers: ['acid', 'Lewis', 'an incomplete octet', 'one atom donates both electrons'],
        hint1: '$Ag^+$ accepts electron pairs from $NH_3$.',
        hint2: 'Lewis includes all Brønsted-Lowry and Arrhenius cases plus more.',
        hint3: 'Boron in $BF_3$ has only 6 valence electrons.',
        explanation: '$Ag^+$ is a Lewis acid (electron pair acceptor). Lewis theory is most inclusive. $BF_3$ has an incomplete octet, making boron electron-deficient. In a coordinate bond, one atom (the Lewis base) donates both electrons.'
      }
    },
    {
      id: 'ab3-comparison-input',
      type: 'input-boxes' as const,
      content: `
**Theory Comparison** 🧮

For each species, identify which acid-base theory can explain its behavior as an acid or base:

1) $NaOH$ acting as a base — which is the simplest theory that explains this? (Enter: Arrhenius, Bronsted-Lowry, or Lewis)

2) $NH_3$ acting as a base (no $OH^-$ in its formula) — simplest theory? (Enter: Arrhenius, Bronsted-Lowry, or Lewis)

3) $BF_3$ acting as an acid (no $H^+$ to donate) — simplest theory? (Enter: Arrhenius, Bronsted-Lowry, or Lewis)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Arrhenius', 'Bronsted-Lowry', 'Lewis'],
        hint1: '$NaOH$ produces $OH^-$ in water — the Arrhenius definition covers this.',
        hint2: '$NH_3$ accepts a proton — this requires the Brønsted-Lowry definition.',
        hint3: '$BF_3$ accepts an electron pair but has no $H^+$ involvement.',
        explanation: '1) Arrhenius: $NaOH$ produces $OH^-$ in water. 2) Brønsted-Lowry: $NH_3$ accepts a proton. 3) Lewis: $BF_3$ accepts an electron pair — only Lewis theory can explain this as acid behavior since there\'s no proton transfer.'
      }
    },
    {
      id: 'ab3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Lewis Acids & Bases** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'In the formation of the complex ion $[Zn(OH)_4]^{2-}$, which species is the Lewis base?',
            options: [
              '$Zn^{2+}$',
              '$OH^-$',
              '$[Zn(OH)_4]^{2-}$',
              'Water'
            ],
            correctAnswer: 1,
            explanation: '$OH^-$ donates lone pairs to $Zn^{2+}$, making $OH^-$ the Lewis base and $Zn^{2+}$ the Lewis acid.'
          },
          {
            question: 'Which acid-base definition is required to explain why $CO_2$ reacts with $OH^-$?',
            options: [
              'Arrhenius only',
              'Brønsted-Lowry only',
              'Lewis',
              'None — this is not an acid-base reaction'
            ],
            correctAnswer: 2,
            explanation: '$CO_2$ accepts an electron pair from $OH^-$: $CO_2 + OH^- \\rightarrow HCO_3^-$. Since $CO_2$ has no $H^+$ to donate, only the Lewis definition identifies it as an acid.'
          }
        ]
      }
    }
  ]
}
