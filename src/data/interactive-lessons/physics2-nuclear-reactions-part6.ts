export const physics2NuclearPart6Data = {
  topicSlug: 'nuclear-reactions',
  sections: [
    {
      id: 'nuclearreactions-p6-intro',
      type: 'text' as const,
      content: `# 🏆 Problem-Solving Workshop

**Part 6 of 7 — AP-Style Practice**

---

### Nuclear Problem Strategy

| Step | Action | Details |
|------|--------|---------|
| 1 | **Balance** | Check $A$ and $Z$ on both sides |
| 2 | **Identify** | What type of reaction? (decay, fission, fusion) |
| 3 | **Calculate** | Mass defect or $Q$-value if needed |
| 4 | **Convert** | 1 u = 931.5 MeV/$c^2$ |
| 5 | **Interpret** | $Q > 0$ → exothermic; $Q < 0$ → endothermic |

### Worked Problem 1: Unknown Particle

**Identify X: $^{238}_{92}\\text{U} \\to ^{234}_{90}\\text{Th} + X$**

$A_X = 238 - 234 = 4$, $Z_X = 92 - 90 = 2$ → $X = ^4_2\\text{He}$ (alpha particle)

This is alpha decay of U-238, the first step in the uranium decay series.

### Worked Problem 2: Energy Released in Fusion

**D-T fusion: $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0n$**

Given: $m_D = 2.01410$ u, $m_T = 3.01605$ u, $m_{He} = 4.00260$ u, $m_n = 1.00866$ u

$$\\Delta m = (2.01410 + 3.01605) - (4.00260 + 1.00866) = 5.03015 - 5.01126 = 0.01889 \\text{ u}$$
$$Q = 0.01889 \\times 931.5 = 17.6 \\text{ MeV}$$

$Q > 0$: Exothermic — 17.6 MeV released per fusion event.
      `
    },
    {
      id: 'nuclearreactions-p6-worked2',
      type: 'text' as const,
      content: `
## Worked Problem 3: Half-Life

**C-14 has a half-life of 5,730 years. A sample initially has 1,000 C-14 atoms. How many remain after 17,190 years?**

$$n = t / t_{1/2} = 17190 / 5730 = 3 \\text{ half-lives}$$
$$N = N_0 \\times (1/2)^n = 1000 \\times (1/2)^3 = 1000/8 = 125 \\text{ atoms}$$

### Half-Life Equations

| Formula | Use When |
|---------|----------|
| $N = N_0 (1/2)^{t/t_{1/2}}$ | Finding remaining amount |
| $N = N_0 e^{-\\lambda t}$ | Continuous decay |
| $\\lambda = \\ln 2 / t_{1/2}$ | Converting between $\\lambda$ and $t_{1/2}$ |
| $A = \\lambda N$ | Activity (decays per second) |

### Common Isotope Half-Lives

| Isotope | Half-Life | Use |
|---------|-----------|-----|
| C-14 | 5,730 years | Carbon dating (up to ~50,000 years) |
| I-131 | 8 days | Thyroid treatment |
| Co-60 | 5.27 years | Cancer radiation therapy |
| U-238 | 4.5 billion years | Geological dating |
| Ra-226 | 1,600 years | Historical medical use |
      `
    },
    {
      id: 'nuclearreactions-p6-check1',
      type: 'multiple-choice' as const,
      content: `
**Problem Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Identify X: $^{14}_7\\text{N} + ^4_2\\text{He} \\to ^{17}_8\\text{O} + X$',
            options: ['Neutron $^1_0n$', 'Proton $^1_1p$', 'Electron $^0_{-1}e$', 'Gamma $^0_0\\gamma$'],
            correctAnswer: 1,
            explanation: '$A$: $14 + 4 = 17 + A_X$ → $A_X = 1$. $Z$: $7 + 2 = 8 + Z_X$ → $Z_X = 1$. $A = 1$, $Z = 1$ = proton. This was Rutherford\'s 1919 experiment — the first artificial nuclear transmutation!'
          },
          {
            question: 'After 4 half-lives, what fraction of a radioactive sample remains?',
            options: ['1/4', '1/8', '1/16', '1/32'],
            correctAnswer: 2,
            explanation: '$(1/2)^4 = 1/16$. After each half-life, half the remaining nuclei decay: $1 \\to 1/2 \\to 1/4 \\to 1/8 \\to 1/16$.'
          },
          {
            question: 'A reaction has $Q = +4.87$ MeV. The total mass of products compared to reactants is:',
            options: [
              'Greater by $4.87/931.5$ u',
              'Less by $4.87/931.5$ u',
              'Equal — mass is always conserved',
              'Less by 4.87 u'
            ],
            correctAnswer: 1,
            explanation: '$Q > 0$ means energy is released. By $E = mc^2$, the products have less mass. $\\Delta m = Q/931.5 = 4.87/931.5 = 0.00523$ u. The "missing mass" became kinetic energy and radiation.'
          },
          {
            question: 'A doctor uses I-131 (half-life 8 days) to treat a patient. How many half-lives pass in 24 days?',
            options: ['2', '3', '4', '8'],
            correctAnswer: 1,
            explanation: '$n = t/t_{1/2} = 24/8 = 3$ half-lives. After 3 half-lives, only $1/8$ of the original I-131 remains — most has decayed. This short half-life is ideal for medical use: effective treatment but radiation doesn\'t linger.'
          }
        ]
      }
    },
    {
      id: 'nuclearreactions-p6-input',
      type: 'input-boxes' as const,
      content: `
**Half-Life Calculation** 🧮

A radioactive sample has 800 atoms. Half-life = 2 hours.

**1)** Atoms remaining after 6 hours?

**2)** Number of half-lives elapsed?

**3)** Atoms that have decayed?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['100', '3', '700'],
        hint1: '$N = N_0(1/2)^{t/t_{1/2}}$',
        hint2: '$n = 6/2$',
        hint3: 'Decayed = original - remaining',
        explanation: '1) $n = 6/2 = 3$ half-lives. $N = 800 \\times (1/2)^3 = 800/8 = 100$ atoms. 2) 3 half-lives. 3) $800 - 100 = 700$ atoms have decayed.'
      }
    }
  ]
};
