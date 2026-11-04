export const mcatSpectraNuclearPart2Data = {
  topicSlug: 'mcat-general-chemistry-spectra-nuclear-mcat',
  sections: [
    {
      id: 'as4-intro',
      type: 'text' as const,
      content: `# Atomic Spectra & Nuclear Chemistry

**Part 2 of 3 — Nuclear Chemistry: Radioactive Decay & Half-Life**

Nuclear chemistry is a distinct but related MCAT topic. You need to recognize decay types, balance nuclear equations, and calculate remaining quantity using half-life.

## Types of Radioactive Decay

| Type | Symbol | Change in $A$ | Change in $Z$ | What's emitted |
|------|--------|--------------|--------------|---------------|
| Alpha decay | $\\alpha$ | $-4$ | $-2$ | $^4_2\\text{He}$ nucleus |
| Beta-minus decay | $\\beta^-$ | $0$ | $+1$ | Electron + antineutrino |
| Beta-plus (positron) | $\\beta^+$ | $0$ | $-1$ | Positron + neutrino |
| Gamma | $\\gamma$ | $0$ | $0$ | High-energy photon |
| Electron capture | EC | $0$ | $-1$ | Neutrino (an inner electron is absorbed; X-rays follow) |

where $A$ = mass number (protons + neutrons), $Z$ = atomic number (protons).

**Alpha decay example:**
$$^{238}_{92}\\text{U} \\to {}^{234}_{90}\\text{Th} + {}^4_2\\text{He}$$

**Beta-minus decay example:** A neutron converts to a proton.
$$^{14}_{6}\\text{C} \\to {}^{14}_{7}\\text{N} + {}^0_{-1}e + \\bar{\\nu}$$

## Conservation Laws in Nuclear Reactions

1. **Mass number ($A$)** is conserved: sum of $A$ on left = sum on right.
2. **Atomic number ($Z$)** is conserved: sum of $Z$ on left = sum on right.
3. **Charge** is conserved.

These laws let you identify unknown products.

### Worked Example — Balancing a Beta-Minus Decay

**Problem.** Thorium-234, $^{234}_{90}\\text{Th}$, undergoes beta-minus decay, emitting $^{0}_{-1}e$ and an antineutrino.

- **(a)** What is the mass number of the product?
- **(b)** What is its atomic number?
- **(c)** Which nuclide is formed?

**(a) Mass number.** The beta particle carries no mass number: $234 = A_{\\text{product}} + 0$, so $A_{\\text{product}} = 234$, unchanged.

**(b) Atomic number.** $90 = Z_{\\text{product}} + (-1)$, so $Z_{\\text{product}} = 91$.

**(c) The product.** With $A = 234$ from (a) and $Z = 91$ from (b), the product is **protactinium**: $^{234}_{90}\\text{Th} \\to {}^{234}_{91}\\text{Pa} + {}^{0}_{-1}e + \\bar{\\nu}$.

## Half-Life

The half-life $t_{1/2}$ is the time for half of a radioactive sample to decay.

$$N(t) = N_0 \\left(\\frac{1}{2}\\right)^{t/t_{1/2}} = N_0\\, e^{-\\lambda t}$$

where $\\lambda = \\ln 2 / t_{1/2}$ (this $\\lambda$ is the decay constant, not a wavelength).

**MCAT shortcut:** Work in units of half-lives.

| Number of half-lives | Fraction remaining | Percent remaining |
|---------------------|-------------------|------------------|
| 0 | 1 | 100% |
| 1 | 1/2 | 50% |
| 2 | 1/4 | 25% |
| 3 | 1/8 | 12.5% |
| 4 | 1/16 | 6.25% |

### Worked Example — An Iodine-131 Countdown

**Problem.** A 40 g sample of $^{131}\\text{I}$ ($t_{1/2} = 8$ days) is left to decay for 32 days.

- **(a)** How many half-lives pass?
- **(b)** What fraction of the sample remains?
- **(c)** How many grams are left, and how many have decayed?

**(a) Half-lives.** $32 \\div 8 = 4$ half-lives.

**(b) Fraction left.** With 4 half-lives from (a): $(1/2)^4 = 1/16$, or $6.25\\%$.

**(c) Mass.** $\\text{Remaining} = 40 \\times 1/16 = \\boxed{2.5\\text{ g}}$, so $40 - 2.5 = 37.5$ g has decayed.

## Binding Energy & Mass Defect

Protons repel one another electrically, yet nuclei hold together. The **strong nuclear force** does it: it attracts protons and neutrons alike, is far stronger than the electrostatic repulsion, and acts only over about the width of a nucleus (around $10^{-15}$ m).

The nucleus is lighter than the sum of its individual protons and neutrons. This **mass defect** $\\Delta m$ is the mass converted to energy that holds the nucleus together.

$$E = \\Delta m \\cdot c^2 \\quad (\\text{Einstein's equation})$$

With masses in atomic mass units, use $1\\text{ u} = 931.5\\text{ MeV}$ of energy, so $E\\,(\\text{MeV}) = \\Delta m\\,(\\text{u}) \\times 931.5$.

**Binding energy per nucleon** is maximized around **iron-56 ($^{56}\\text{Fe}$)** — this is the most stable nucleus. Elements heavier than Fe release energy by fission; lighter elements release energy by fusion.

### Worked Example — Binding Energy of Helium-4

**Problem.** A $^4_2\\text{He}$ nucleus has a mass of $4.0015$ u. A proton is $1.0073$ u and a neutron $1.0087$ u.

- **(a)** What is the mass of the separate nucleons?
- **(b)** What is the mass defect?
- **(c)** What is the binding energy, and the binding energy per nucleon?

**(a) Separate nucleons.** Two protons and two neutrons: $2(1.0073) + 2(1.0087) = 4.0320$ u.

**(b) Mass defect.** With $4.0320$ u from (a): $\\Delta m = 4.0320 - 4.0015 = 0.0305$ u.

**(c) Binding energy.** $E = 0.0305 \\times 931.5 \\approx 28.4$ MeV for the nucleus, or $28.4 / 4 \\approx 7.1$ MeV per nucleon.
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
            yield: 'HIGH',
            explanation: `Alpha decay: $A$ decreases by 4, $Z$ decreases by 2. $A = 222 - 4 = 218$; $Z = 86 - 2 = 84$. $Z=84$ is **Polonium (Po)**: $^{218}_{84}\\text{Po}$. $^{222}_{87}\\text{Fr}$ is the beta-minus product, $^{218}_{86}\\text{Rn}$ subtracts 4 from $A$ but forgets the 2 protons, and $^{226}_{88}\\text{Ra}$ adds the alpha particle instead of removing it (Ra-226 is Rn-222's parent).`
          },
          {
            question: `A nuclide undergoes beta-minus ($\\beta^-$) decay. Which statement is correct?`,
            options: [
              `A proton is ejected, so the mass number falls by 1`,
              `A neutron becomes a proton; $Z$ rises by 1`,
              `The daughter is an isotope of the same element`,
              `An orbital electron is captured; $Z$ falls by 1`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `In $\\beta^-$ decay, $n \\to p + e^- + \\bar{\\nu}$. A neutron becomes a proton, so the atomic number $Z$ increases by 1 (new element) while $A$ remains constant. The daughter is a **different element** with the same mass number. No proton leaves the nucleus, and capturing an orbital electron is electron capture, which lowers $Z$ instead.`
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
            yield: 'HIGH',
            explanation: `Electron capture: $Z$ decreases by 1, $A$ unchanged. So the parent has $Z = 25+1 = 26$, $A = 55$. $Z=26$ is **Iron (Fe)**: $^{55}_{26}\\text{Fe}$. $^{55}_{24}\\text{Cr}$ runs the change backward (it would be Mn-55's daughter, not its parent), and $^{59}_{27}\\text{Co}$ and $^{51}_{23}\\text{V}$ change $A$ by 4, which only alpha decay does.`
          },
          {
            question: `A deuteron (one proton, $1.0073$ u, and one neutron, $1.0087$ u) has a mass of $2.0136$ u. What is its binding energy? ($1\\text{ u} = 931.5$ MeV)`,
            options: [`$2.2$ MeV`, `$1.1$ MeV`, `$0.0024$ MeV`, `$1{,}876$ MeV`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The separate nucleons total $1.0073 + 1.0087 = 2.0160$ u, so $\\Delta m = 2.0160 - 2.0136 = 0.0024$ u, and $E = 0.0024 \\times 931.5 \\approx 2.2$ MeV. $1.1$ MeV is the binding energy PER NUCLEON, $0.0024$ is the mass defect left in u, and $1{,}876$ MeV converts the whole deuteron mass instead of the defect.`
          }
        ]
      }
    },
    {
      id: 'as4-halflife',
      type: 'text' as const,
      content: `## Half-Life Applications in Medicine

**Nuclear medicine** relies on radioactive isotopes with appropriate half-lives:

- **$^{99m}\\text{Tc}$ ($t_{1/2} = 6$ h):** Most common medical imaging isotope. Short half-life minimizes patient radiation dose. Emits gamma rays, which pass out of the body to an external camera.
- **$^{131}\\text{I}$ ($t_{1/2} = 8$ d):** Treats thyroid cancer and hyperthyroidism. Iodine concentrates in the thyroid gland; beta emission destroys tissue locally.
- **$^{18}\\text{F}$ ($t_{1/2} = 110$ min):** Used in PET scanning (positron emission). Its short half-life means it must be made close to where it is used, within hours.

<!-- yield:low -->
- The camera that images $^{99m}\\text{Tc}$ is a SPECT scanner, and $^{18}\\text{F}$ is produced in a cyclotron, usually a regional one that ships doses the same day.
<!-- /yield -->

### Radiocarbon Dating

$^{14}\\text{C}$ ($t_{1/2} = 5{,}730$ years) is used to date organic materials up to ~50,000 years old. Living organisms maintain a constant ratio of $^{14}\\text{C}/^{12}\\text{C}$ through metabolism. After death, $^{14}\\text{C}$ decays. Measuring the remaining ratio gives the age.

### Worked Example — Radiocarbon Age of a Wood Sample

**Problem.** A wood sample contains 12.5% of its original $^{14}\\text{C}$ ($t_{1/2} = 5{,}730$ years).

- **(a)** How many half-lives have passed?
- **(b)** How old is the sample?
- **(c)** What percentage will remain after another 5,730 years?

**(a) Half-lives.** $12.5\\% = 1/8 = (1/2)^n$, so $n = 3$ half-lives.

**(b) Age.** With 3 half-lives from (a): Age $= 3 \\times 5{,}730 = \\boxed{17{,}190\\text{ years}}$

**(c) One more half-life.** Each half-life removes half of what is LEFT: $12.5\\% \\div 2 = 6.25\\%$ remains, at an age of $4 \\times 5{,}730 = 22{,}920$ years.
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
            yield: 'HIGH',
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
            yield: 'HIGH',
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
            yield: 'MEDIUM',
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
            yield: 'HIGH',
            explanation: `$400 \\to 200 \\to 100 \\to 50$: 3 half-lives occurred in 60 minutes. Half-life $= 60/3 = \\mathbf{20\\text{ minutes}}$.`
          }
        ]
      }
    },
    {
      id: 'as4-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 2

- **Alpha decay.** An alpha particle, $^4_2\\text{He}$, leaves: $A$ falls by 4 and $Z$ by 2, and both totals balance.
- **Beta and capture.** $\\beta^-$ turns a neutron into a proton ($Z + 1$); $\\beta^+$ and electron capture do the reverse ($Z - 1$).
- **Count half-lives.** $N = N_0(1/2)^{t/t_{1/2}}$: divide the elapsed time by $t_{1/2}$, then halve that many times.
- **Binding energy peaks at iron.** The mass defect is binding energy, $E = \\Delta m c^2$; heavy nuclei fission, light ones fuse.

**Common traps**

- **Changing $A$ in beta decay.** $\\beta^-$, $\\beta^+$ and electron capture all leave $A$ unchanged; only $Z$ shifts, by 1.
- **Gamma changing the element.** Gamma emission only releases energy: $A$ and $Z$ stay exactly the same.
- **Subtracting instead of halving.** Each half-life halves what is LEFT, so two half-lives leave 25%, not 0%.
- **Long half-lives for imaging.** Diagnostic isotopes need SHORT half-lives, like $^{99m}\\text{Tc}$ (6 h), to limit the dose.

<!-- yield:low -->
- Low-yield extras: the SPECT camera used for Tc-99m imaging; cyclotron production of F-18.
<!-- /yield -->
`
    }
  ]
};
