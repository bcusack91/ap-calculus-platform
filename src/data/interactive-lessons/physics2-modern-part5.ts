export const physics2ModernPart5Data = {
  topicSlug: 'photons-atomic-nuclear',
  sections: [
    {
      id: 'mp5-intro',
      type: 'text' as const,
      content: `
# ☢️ Nuclear Physics Fundamentals

**Part 5 of 7 — Inside the Nucleus**

Atoms have a tiny, dense nucleus containing protons and neutrons held together by the **strong nuclear force**. Understanding nuclear structure is essential for radioactivity, nuclear energy, and AP Physics 2.
      `
    },
    {
      id: 'mp5-nuclear-notation',
      type: 'text' as const,
      content: `
## Nuclear Notation

A nucleus is described by:

$$^{A}_{Z}X$$

where:
- $X$ = element symbol
- $Z$ = **atomic number** = number of protons (defines the element)
- $A$ = **mass number** = total number of nucleons (protons + neutrons)
- Number of neutrons: $N = A - Z$

### Examples

| Nucleus | $Z$ | $A$ | Protons | Neutrons |
|---------|-----|-----|---------|----------|
| $^{1}_{1}\\text{H}$ | 1 | 1 | 1 | 0 |
| $^{4}_{2}\\text{He}$ | 2 | 4 | 2 | 2 |
| $^{12}_{6}\\text{C}$ | 6 | 12 | 6 | 6 |
| $^{238}_{92}\\text{U}$ | 92 | 238 | 92 | 146 |

### Isotopes

**Isotopes** are atoms of the same element (same $Z$) with different numbers of neutrons (different $A$):

- $^{12}_{6}\\text{C}$ (6 neutrons) and $^{14}_{6}\\text{C}$ (8 neutrons) are both carbon
- Same chemical properties, different nuclear properties
- Some isotopes are stable, others are radioactive
      `
    },
    {
      id: 'mp5-nuclear-forces',
      type: 'text' as const,
      content: `
## Nuclear Forces

### The Problem
Protons are all positively charged → they repel each other via the **electromagnetic (Coulomb) force**. So why doesn't the nucleus fly apart?

### The Strong Nuclear Force

The **strong nuclear force** holds nucleons together:

| Property | Strong Force | Electromagnetic Force |
|----------|-------------|----------------------|
| Range | Very short (~$10^{-15}$ m) | Infinite ($1/r^2$) |
| Strength (at nuclear range) | ~100× stronger | Weaker |
| Acts on | All nucleons (p-p, p-n, n-n) | Only charged particles |
| Charge dependent? | No | Yes |

### Key Points for AP
- The strong force is **attractive** and acts between all nucleon pairs
- It is **short-range** — only acts between neighboring nucleons
- In large nuclei, distant protons repel but the strong force cannot reach across the entire nucleus → large nuclei tend to be **unstable**
- Neutrons help: they contribute to the strong force without adding electromagnetic repulsion
      `
    },
    {
      id: 'mp5-binding-energy',
      type: 'text' as const,
      content: `
## Binding Energy & Mass-Energy Equivalence

### Mass Defect

The mass of a nucleus is **less** than the sum of its individual protons and neutrons:

$$\\Delta m = (Zm_p + Nm_n) - m_{\\text{nucleus}}$$

This "missing mass" is the **mass defect**.

### Where Did the Mass Go?

Einstein's mass-energy equivalence:

$$E = mc^2$$

The mass defect was converted to **binding energy** — the energy holding the nucleus together:

$$E_b = \\Delta m \\cdot c^2$$

### Binding Energy per Nucleon

$$\\frac{E_b}{A} = \\text{binding energy per nucleon}$$

This tells us how tightly bound each nucleon is:

- **Iron-56** ($^{56}\\text{Fe}$) has the highest binding energy per nucleon (~8.8 MeV/nucleon) — the most stable nucleus
- Lighter nuclei: can **fuse** to move toward iron → releases energy
- Heavier nuclei: can **fission** to move toward iron → releases energy

### Useful Conversion
$$1 \\text{ u} = 931.5 \\text{ MeV/c}^2$$

where 1 u = 1 atomic mass unit = $1.66 \\times 10^{-27}$ kg.
      `
    },
    {
      id: 'mp5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Nuclear Physics Concept Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'The nucleus $^{56}_{26}\\text{Fe}$ contains:',
            options: [
              '56 protons and 26 neutrons',
              '26 protons and 56 neutrons',
              '26 protons and 30 neutrons',
              '30 protons and 26 neutrons'
            ],
            correctAnswer: 2,
            explanation: '$Z = 26$ protons, $A = 56$ total nucleons. Neutrons $= A - Z = 56 - 26 = 30$.'
          },
          {
            question: 'Two isotopes of an element have:',
            options: [
              'The same number of neutrons but different protons',
              'The same number of protons but different neutrons',
              'The same mass number but different atomic numbers',
              'Different numbers of electrons'
            ],
            correctAnswer: 1,
            explanation: 'Isotopes have the same atomic number $Z$ (same element, same number of protons) but different mass numbers $A$ (different numbers of neutrons).'
          },
          {
            question: 'The strong nuclear force:',
            options: [
              'Acts only between protons',
              'Is weaker than the electromagnetic force at all distances',
              'Has infinite range like gravity',
              'Acts between all nucleons and is very short-range'
            ],
            correctAnswer: 3,
            explanation: 'The strong force acts between all nucleon pairs (p-p, p-n, n-n), is about 100× stronger than the EM force at nuclear distances, but drops to effectively zero beyond about $10^{-15}$ m.'
          },
          {
            question: 'The mass of a helium-4 nucleus is less than the combined mass of 2 free protons and 2 free neutrons. The "missing" mass corresponds to:',
            options: [
              'Mass lost during measurement',
              'The binding energy of the nucleus via $E = mc^2$',
              'The kinetic energy of the nucleons',
              'Energy absorbed from the environment'
            ],
            correctAnswer: 1,
            explanation: 'The mass defect $\\Delta m$ was converted to binding energy: $E_b = \\Delta m \\cdot c^2$. This energy would need to be supplied to break the nucleus apart into individual nucleons.'
          }
        ]
      }
    },
    {
      id: 'mp5-binding-drill',
      type: 'input-boxes' as const,
      content: `
**Binding Energy Drill**

The mass of $^{4}_{2}\\text{He}$ is 4.0026 u. Use $m_p = 1.0073$ u, $m_n = 1.0087$ u, and 1 u = 931.5 MeV/$c^2$.

1) Total mass of 2 free protons + 2 free neutrons (in u, 3 significant figures)
2) Mass defect $\\Delta m$ (in u, 3 significant figures)
3) Binding energy of $^{4}_{2}\\text{He}$ (in MeV, 3 significant figures)
4) Binding energy per nucleon (in MeV, 3 significant figures)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['4.0320', '0.0294', '27.4', '6.85'],
        hint1: 'Total mass $= 2(1.0073) + 2(1.0087)$.',
        hint2: '$\\Delta m = 4.0320 - 4.0026$.',
        hint3: '$E_b = \\Delta m \\times 931.5$ MeV. Per nucleon: divide by $A = 4$.',
        explanation: 'Total mass $= 2(1.0073) + 2(1.0087) = 2.0146 + 2.0174 = 4.0320$ u. $\\Delta m = 4.0320 - 4.0026 = 0.0294$ u. $E_b = 0.0294 \\times 931.5 = 27.39 \\approx 27.4$ MeV. Per nucleon: $27.4/4 = 6.85$ MeV/nucleon.'
      }
    },
    {
      id: 'mp5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Nuclear Physics**
      `,
      exercise: {
        questions: [
          {
            question: 'Which nucleus is the most stable (highest binding energy per nucleon)?',
            options: [
              'Hydrogen-1',
              'Helium-4',
              'Iron-56',
              'Uranium-238'
            ],
            correctAnswer: 2,
            explanation: 'Iron-56 has the highest binding energy per nucleon (~8.8 MeV/nucleon), making it the most tightly bound and most stable nucleus. Both lighter and heavier nuclei have lower binding energy per nucleon.'
          },
          {
            question: 'Why do heavier nuclei (beyond iron) tend to be less stable?',
            options: [
              'They have too many electrons',
              'The strong force weakens with distance, so distant protons repel without sufficient strong-force attraction',
              'Gravity becomes important inside the nucleus',
              'Neutrons become repulsive in large nuclei'
            ],
            correctAnswer: 1,
            explanation: 'The strong nuclear force is short-range. In large nuclei, protons on opposite sides of the nucleus experience Coulomb repulsion but are too far apart for the strong force to compensate, leading to instability.'
          }
        ]
      }
    }
  ]
}
