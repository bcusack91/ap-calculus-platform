export const mcatAtomicStructurePart4Data = {
  topicSlug: 'mcat-general-chemistry-atomic-structure-mcat',
  sections: [
    {
      id: 'as4-intro',
      type: 'text' as const,
      content: `# Atomic Structure & Periodic Trends

**Part 4 of 5 — Nuclear Chemistry: Radioactive Decay & Half-Life**

Nuclear chemistry is a distinct but related MCAT topic. You need to recognize decay types, balance nuclear equations, and calculate remaining quantity using half-life.

## Types of Radioactive Decay

| Type | Symbol | Change in $A$ | Change in $Z$ | What's emitted |
|------|--------|--------------|--------------|---------------|
| Alpha decay | $\\alpha$ | $-4$ | $-2$ | $^4_2\\text{He}$ nucleus |
| Beta-minus decay | $\\beta^-$ | $0$ | $+1$ | Electron + antineutrino |
| Beta-plus (positron) | $\\beta^+$ | $0$ | $-1$ | Positron + neutrino |
| Gamma | $\\gamma$ | $0$ | $0$ | High-energy photon |
| Electron capture | EC | $0$ | $-1$ | X-ray photon emitted |

where $A$ = mass number (protons + neutrons), $Z$ = atomic number (protons).

**Alpha decay example:**
$$^{238}_{92}\\text{U} \\to ^{234}_{90}\\text{Th} + ^4_2\\text{He}$$

**Beta-minus decay example:** A neutron converts to a proton.
$$^{14}_{6}\\text{C} \\to ^{14}_{7}\\text{N} + ^0_{-1}e + \\bar{\\nu}$$

## Conservation Laws in Nuclear Reactions

1. **Mass number ($A$)** is conserved: sum of $A$ on left = sum on right.
2. **Atomic number ($Z$)** is conserved: sum of $Z$ on left = sum on right.
3. **Charge** is conserved.

These laws let you identify unknown products:

**Example:** $^{234}_{90}\\text{Th}$ undergoes beta-minus decay. What is the product?
- $A$: $234 = 234 + 0$ ✓ (unchanged)
- $Z$: $90 = (Z_{\\text{product}}) + (-1)$ → $Z_{\\text{product}} = 91$
- $Z=91$ is **Protactinium (Pa)**: $^{234}_{91}\\text{Pa}$

## Half-Life

The half-life $t_{1/2}$ is the time for half of a radioactive sample to decay.

$$N(t) = N_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}} = N_0\\, e^{-\\lambda t}$$

where $\\lambda = \\ln 2 / t_{1/2}$ is the decay constant.

**MCAT shortcut:** Work in units of half-lives.

| Number of half-lives | Fraction remaining | Percent remaining |
|---------------------|-------------------|------------------|
| 0 | 1 | 100% |
| 1 | 1/2 | 50% |
| 2 | 1/4 | 25% |
| 3 | 1/8 | 12.5% |
| 4 | 1/16 | 6.25% |

**Worked Example:**  
A 40 g sample of $^{131}\\text{I}$ ($t_{1/2} = 8$ days) remains after 32 days. How much is left?

$32 \\div 8 = 4$ half-lives.

$\\text{Remaining} = 40 \\times (1/2)^4 = 40/16 = \\boxed{2.5\\text{ g}}$

## Binding Energy & Mass Defect

The nucleus is lighter than the sum of its individual protons and neutrons. This **mass defect** $\\Delta m$ is the mass converted to energy that holds the nucleus together.

$$E = \\Delta m \\cdot c^2 \\quad (\\text{Einstein's equation})$$

**Binding energy per nucleon** is maximized around **iron-56 ($^{56}\\text{Fe}$)** — this is the most stable nucleus. Elements heavier than Fe release energy by fission; lighter elements release energy by fusion.
`
    },
    {
      id: 'as4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nuclear Decay & Balancing** 🎯`,
      exercise: {
        questions: [
          {
            question: `$^{222}_{86}\\text{Rn}$ undergoes alpha decay. What is the product nucleus?`,
            options: [
              `$^{218}_{84}\\text{Po}$`,
              `$^{222}_{87}\\text{Fr}$`,
              `$^{218}_{86}\\text{Rn}$`,
              `$^{226}_{88}\\text{Ra}$`
            ],
            correctAnswer: 0,
            explanation: `Alpha decay: $A$ decreases by 4, $Z$ decreases by 2. $A = 222 - 4 = 218$; $Z = 86 - 2 = 84$. $Z=84$ is **Polonium (Po)**: $^{218}_{84}\\text{Po}$.`
          },
          {
            question: `A nuclide undergoes beta-minus ($\\beta^-$) decay. Which statement is correct?`,
            options: [
              `Mass number decreases by 1`,
              `A neutron converts to a proton; atomic number increases by 1`,
              `The daughter nucleus is an isotope of the same element`,
              `Atomic number decreases by 1`
            ],
            correctAnswer: 1,
            explanation: `In $\\beta^-$ decay, $n \\to p + e^- + \\bar{\\nu}$. A neutron becomes a proton, so $Z$ increases by 1 (new element) while $A$ remains constant. The daughter is a **different element** with the same mass number.`
          },
          {
            question: `An unknown nuclide $^A_Z\\text{X}$ undergoes electron capture to form $^{55}_{25}\\text{Mn}$. What is $^A_Z\\text{X}$?`,
            options: [
              `$^{55}_{26}\\text{Fe}$`,
              `$^{55}_{24}\\text{Cr}$`,
              `$^{59}_{27}\\text{Co}$`,
              `$^{51}_{23}\\text{V}$`
            ],
            correctAnswer: 0,
            explanation: `Electron capture: $Z$ decreases by 1, $A$ unchanged. So the parent has $Z = 25+1 = 26$, $A = 55$. $Z=26$ is **Iron (Fe)**: $^{55}_{26}\\text{Fe}$.`
          }
        ]
      }
    },
    {
      id: 'as4-halflife',
      type: 'text' as const,
      content: `## Half-Life Applications in Medicine

**Nuclear medicine** relies on radioactive isotopes with appropriate half-lives:

- **$^{99m}\\text{Tc}$ ($t_{1/2} = 6$ h):** Most common medical imaging isotope. Short half-life minimizes patient radiation dose. Emits gamma rays detected by SPECT scanners.
- **$^{131}\\text{I}$ ($t_{1/2} = 8$ d):** Treats thyroid cancer and hyperthyroidism. Iodine concentrates in the thyroid gland; beta emission destroys tissue locally.
- **$^{18}\\text{F}$ ($t_{1/2} = 110$ min):** Used in PET scanning (positron emission). Short half-life means it must be made on-site at a cyclotron.

### Radiocarbon Dating

$^{14}\\text{C}$ ($t_{1/2} = 5{,}730$ years) is used to date organic materials up to ~50,000 years old. Living organisms maintain a constant ratio of $^{14}\\text{C}/^{12}\\text{C}$ through metabolism. After death, $^{14}\\text{C}$ decays. Measuring the remaining ratio gives the age.

**MCAT Worked Problem:**  
A wood sample contains 12.5% of its original $^{14}\\text{C}$. How old is the sample? ($t_{1/2} = 5{,}730$ years)

$12.5\\% = (1/2)^n$ → $n = 3$ half-lives.  
Age $= 3 \\times 5{,}730 = \\boxed{17{,}190\\text{ years}}$
`
    },
    {
      id: 'as4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Half-Life Calculations** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 100 mg sample of a radioisotope ($t_{1/2} = 12$ hours) is administered to a patient. How much remains after 2 days (48 hours)?`,
            options: [
              `25 mg`,
              `12.5 mg`,
              `6.25 mg`,
              `3.125 mg`
            ],
            correctAnswer: 2,
            explanation: `$48\\text{ h} \\div 12\\text{ h} = 4$ half-lives. Remaining $= 100 \\times (1/2)^4 = 100/16 = \\mathbf{6.25\\text{ mg}}$.`
          },
          {
            question: `After 3 half-lives, what fraction of the original radioactive nuclei remains?`,
            options: [
              `$1/6$`,
              `$1/8$`,
              `$3/8$`,
              `$1/4$`
            ],
            correctAnswer: 1,
            explanation: `$(1/2)^3 = 1/8$. After each half-life, half of the remaining sample decays. Three half-lives: $100\\% \\to 50\\% \\to 25\\% \\to 12.5\\% = 1/8$.`
          },
          {
            question: `Which isotope is most appropriate for a diagnostic imaging scan where a patient should be exposed to radiation for the shortest possible time?`,
            options: [
              `$^{14}\\text{C}$ ($t_{1/2} = 5{,}730$ years)`,
              `$^{131}\\text{I}$ ($t_{1/2} = 8$ days)`,
              `$^{99m}\\text{Tc}$ ($t_{1/2} = 6$ hours)`,
              `$^{238}\\text{U}$ ($t_{1/2} = 4.5$ billion years)`
            ],
            correctAnswer: 2,
            explanation: `A short half-life means the isotope decays quickly, minimizing prolonged radiation exposure. $^{99m}\\text{Tc}$ ($t_{1/2} = 6$ h) is the best choice — it decays in hours, not days or eons, while still providing a useful imaging window.`
          },
          {
            question: `A sample initially contains 400 mg of a radioisotope. After 60 minutes, 50 mg remain. What is the half-life?`,
            options: [
              `10 minutes`,
              `15 minutes`,
              `20 minutes`,
              `30 minutes`
            ],
            correctAnswer: 2,
            explanation: `$400 \\to 200 \\to 100 \\to 50$: 3 half-lives occurred in 60 minutes. Half-life $= 60/3 = \\mathbf{20\\text{ minutes}}$.`
          }
        ]
      }
    },
    {
      id: 'as4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 4

- **Alpha decay ($\\alpha$):** $A-4$, $Z-2$. Emits an $^4_2\\text{He}$ nucleus.
- **Beta-minus ($\\beta^-$):** $A$ unchanged, $Z+1$. Neutron → proton.
- **Beta-plus ($\\beta^+$) / Electron capture:** $A$ unchanged, $Z-1$. Proton → neutron.
- **Gamma ($\\gamma$):** No change in $A$ or $Z$; releases excess nuclear energy as photons.
- **Balance nuclear equations** using conservation of $A$ and $Z$.
- **Half-life:** $N = N_0(1/2)^{t/t_{1/2}}$. Count half-lives for quick calculations.
- **Binding energy per nucleon** peaks at $^{56}\\text{Fe}$ — the most stable nucleus.
- Medical isotopes have short half-lives to minimize patient radiation exposure.
`
    }
  ]
};
