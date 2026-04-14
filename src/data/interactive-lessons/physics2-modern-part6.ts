export const physics2ModernPart6Data = {
  topicSlug: 'photons-atomic-nuclear',
  sections: [
    {
      id: 'mp6-intro',
      type: 'text' as const,
      content: `
# ☢️ Radioactive Decay

**Part 6 of 7 — Nuclear Transformations**

Unstable nuclei spontaneously transform by emitting particles and energy. Each type of radioactive decay follows strict **conservation laws** — conserving charge, mass number, and lepton number.
      `
    },
    {
      id: 'mp6-decay-types',
      type: 'text' as const,
      content: `
## Types of Radioactive Decay

### Alpha Decay ($\\alpha$)

The nucleus emits an **alpha particle**: $^{4}_{2}\\text{He}$ (2 protons + 2 neutrons).

$$^{A}_{Z}X \\to ^{A-4}_{Z-2}Y + ^{4}_{2}\\text{He}$$

- $Z$ decreases by 2, $A$ decreases by 4
- Common in heavy nuclei (e.g., uranium, radium)
- Example: $^{238}_{92}\\text{U} \\to ^{234}_{90}\\text{Th} + ^{4}_{2}\\text{He}$

### Beta-Minus Decay ($\\beta^{-}$)

A neutron converts to a proton, emitting an **electron** and an **antineutrino**:

$$n \\to p + e^{-} + \\bar{\\nu}_e$$

$$^{A}_{Z}X \\to ^{A}_{Z+1}Y + ^{\\;\\;0}_{-1}e + \\bar{\\nu}_e$$

- $Z$ increases by 1, $A$ stays the same
- Occurs in neutron-rich nuclei
- Example: $^{14}_{6}\\text{C} \\to ^{14}_{7}\\text{N} + ^{\\;\\;0}_{-1}e + \\bar{\\nu}_e$

### Beta-Plus Decay ($\\beta^{+}$)

A proton converts to a neutron, emitting a **positron** and a **neutrino**:

$$p \\to n + e^{+} + \\nu_e$$

$$^{A}_{Z}X \\to ^{A}_{Z-1}Y + ^{\\;0}_{+1}e + \\nu_e$$

- $Z$ decreases by 1, $A$ stays the same
- Occurs in proton-rich nuclei
- Example: $^{11}_{6}\\text{C} \\to ^{11}_{5}\\text{B} + ^{\\;0}_{+1}e + \\nu_e$

### Gamma Decay ($\\gamma$)

An excited nucleus emits a high-energy **photon**:

$$^{A}_{Z}X^{*} \\to ^{A}_{Z}X + \\gamma$$

- Neither $Z$ nor $A$ changes — just energy is released
- Often follows alpha or beta decay (daughter nucleus is in an excited state)
      `
    },
    {
      id: 'mp6-conservation',
      type: 'text' as const,
      content: `
## Conservation Laws in Nuclear Decay

Every nuclear reaction must conserve:

### 1. Conservation of Mass Number ($A$)

$$\\sum A_{\\text{reactants}} = \\sum A_{\\text{products}}$$

Total number of nucleons is conserved.

### 2. Conservation of Charge ($Z$)

$$\\sum Z_{\\text{reactants}} = \\sum Z_{\\text{products}}$$

Total charge (atomic number) is conserved.

### 3. Conservation of Lepton Number

- Electron ($e^-$) and neutrino ($\\nu_e$): lepton number = $+1$
- Positron ($e^+$) and antineutrino ($\\bar{\\nu}_e$): lepton number = $-1$

In beta decay, lepton number is conserved (starts at 0, products sum to 0):
- $\\beta^-$: $e^-$ (+1) and $\\bar{\\nu}_e$ (−1) → total = 0 ✓
- $\\beta^+$: $e^+$ (−1) and $\\nu_e$ (+1) → total = 0 ✓

### 4. Conservation of Energy and Momentum

The total mass-energy and momentum of the system are conserved. The kinetic energy of the products comes from the mass defect.
      `
    },
    {
      id: 'mp6-decay-quiz',
      type: 'multiple-choice' as const,
      content: `
**Radioactive Decay Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'In alpha decay, the daughter nucleus has:',
            options: [
              '$Z - 1$ protons and $A - 1$ nucleons',
              '$Z + 2$ protons and $A + 4$ nucleons',
              '$Z - 2$ protons and $A - 4$ nucleons',
              '$Z$ protons and $A - 4$ nucleons'
            ],
            correctAnswer: 2,
            explanation: 'An alpha particle ($^{4}_{2}\\text{He}$) carries away 2 protons and 2 neutrons, so the daughter has $Z - 2$ protons and $A - 4$ total nucleons.'
          },
          {
            question: 'In beta-minus decay, a neutron becomes:',
            options: [
              'A proton + alpha particle',
              'A proton + electron + antineutrino',
              'A proton + positron + neutrino',
              'Two protons + electron'
            ],
            correctAnswer: 1,
            explanation: '$n \\to p + e^{-} + \\bar{\\nu}_e$. The neutron converts to a proton, and an electron and antineutrino are emitted to conserve charge and lepton number.'
          },
          {
            question: 'After gamma decay, the nucleus has:',
            options: [
              'One fewer proton',
              'One fewer neutron',
              'The same Z and A but lower energy',
              'A different element identity'
            ],
            correctAnswer: 2,
            explanation: 'Gamma decay only releases energy as a photon. The nucleus keeps the same number of protons ($Z$) and nucleons ($A$) — it just drops to a lower energy state.'
          }
        ]
      }
    },
    {
      id: 'mp6-half-life',
      type: 'text' as const,
      content: `
## Half-Life

The **half-life** ($t_{1/2}$) is the time for half of a radioactive sample to decay:

$$N = N_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$$

where:
- $N$ = number of remaining undecayed nuclei
- $N_0$ = initial number of nuclei
- $t$ = elapsed time
- $t_{1/2}$ = half-life

### After Each Half-Life

| Half-lives elapsed | Fraction remaining | Fraction decayed |
|--------------------|--------------------|------------------|
| 0 | 1 | 0 |
| 1 | 1/2 | 1/2 |
| 2 | 1/4 | 3/4 |
| 3 | 1/8 | 7/8 |
| 4 | 1/16 | 15/16 |
| $n$ | $(1/2)^n$ | $1 - (1/2)^n$ |

### Activity

The **activity** (decay rate) also halves every half-life:

$$A = A_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$$

Activity is measured in **becquerels** (Bq) = decays per second.
      `
    },
    {
      id: 'mp6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Half-Life Calculation Drill**

A radioactive isotope has a half-life of 8.0 days. You start with $6.4 \\times 10^{20}$ atoms.

1) Number of atoms remaining after 24 days ($\\times 10^{19}$)

2) Number of half-lives that have elapsed after 24 days

3) Fraction of the original sample that has decayed after 24 days (as a decimal)

4) If the initial activity is 2400 Bq, activity after 32 days (in Bq)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['8.0', '3', '0.875', '150'],
        hint1: 'Number of half-lives $= t/t_{1/2} = 24/8 = 3$.',
        hint2: '$N = N_0 (1/2)^3 = 6.4 \\times 10^{20}/8 = 8.0 \\times 10^{19}$.',
        hint3: 'Fraction decayed $= 1 - (1/2)^3 = 1 - 1/8 = 7/8$. For activity after 32 days: $n = 32/8 = 4$ half-lives.',
        explanation: '$n = 24/8 = 3$ half-lives. $N = 6.4 \\times 10^{20} \\times (1/2)^3 = 6.4 \\times 10^{20}/8 = 8.0 \\times 10^{19}$. Fraction decayed $= 1 - 1/8 = 0.875$. After 32 days ($n = 4$): $A = 2400 \\times (1/2)^4 = 2400/16 = 150$ Bq.'
      }
    },
    {
      id: 'mp6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Radioactive Decay**
      `,
      exercise: {
        questions: [
          {
            question: '$^{226}_{88}\\text{Ra}$ undergoes alpha decay. The daughter nucleus is:',
            options: [
              '$^{222}_{86}\\text{Rn}$',
              '$^{226}_{87}\\text{Fr}$',
              '$^{222}_{88}\\text{Ra}$',
              '$^{230}_{90}\\text{Th}$'
            ],
            correctAnswer: 0,
            explanation: 'Alpha decay: $Z$ decreases by 2, $A$ decreases by 4. $^{226}_{88}\\text{Ra} \\to ^{222}_{86}\\text{Rn} + ^{4}_{2}\\text{He}$. Check: $88 = 86 + 2$ ✓, $226 = 222 + 4$ ✓.'
          },
          {
            question: 'A sample starts with 1000 radioactive atoms. After 5 half-lives, approximately how many remain?',
            options: [
              '500',
              '200',
              '31',
              '0'
            ],
            correctAnswer: 2,
            explanation: '$N = 1000 \\times (1/2)^5 = 1000/32 = 31.25 \\approx 31$ atoms remaining.'
          }
        ]
      }
    }
  ]
}
