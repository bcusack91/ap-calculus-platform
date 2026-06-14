export const mcatPhysElecPart7Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe7-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 7 of 7 — Atomic & Nuclear Physics**

### Atomic Models on the MCAT

- **Bohr model**: electrons occupy quantized orbits with $E_n = -13.6/n^2\\;\\text{eV}$ (for hydrogen)
- A photon is emitted when an electron drops levels: $E_{photon} = hf = E_{high} - E_{low}$

### Nuclear Notation

$^A_Z X$ where $A$ = mass number (protons + neutrons) and $Z$ = atomic number (protons)

### Radioactive Decay Types

| Type | Particle | Change in $A$ | Change in $Z$ |
|------|----------|--------------|--------------|
| Alpha ($\\alpha$) | $^4_2\\text{He}$ | $-4$ | $-2$ |
| Beta-minus ($\\beta^-$) | Electron | $0$ | $+1$ |
| Beta-plus ($\\beta^+$) | Positron | $0$ | $-1$ |
| Gamma ($\\gamma$) | Photon | $0$ | $0$ |

### Half-Life

$N = N_0\\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$

After $n$ half-lives: $N = N_0/2^n$. Activity is proportional to the number of undecayed nuclei, so activity falls off with the same half-life behavior.`
    },
    {
      id: 'pe7-worked',
      type: 'text' as const,
      content: `### Worked Example — Half-Life Decay

A radioactive isotope used in a tracer study has a half-life of $t_{1/2} = 6\\;\\text{hours}$. A sample starts with $8.0\\;\\text{mg}$. How much remains after $18\\;\\text{hours}$?

**Step 1 — Count the half-lives.**

$n = \\frac{t}{t_{1/2}} = \\frac{18}{6} = 3$ half-lives.

**Step 2 — Halve the amount once per half-life.**

After 1: $8.0 \\to 4.0\\;\\text{mg}$. After 2: $4.0 \\to 2.0\\;\\text{mg}$. After 3: $2.0 \\to 1.0\\;\\text{mg}$.

**Step 3 — Confirm with the formula.**

$N = N_0 (1/2)^n = 8.0 \\times (1/2)^3 = 8.0 \\times \\frac{1}{8} = 1.0\\;\\text{mg}$

So $1.0\\;\\text{mg}$ remains. The MCAT almost always uses a whole number of half-lives, so repeated halving is the fastest route.`
    },
    {
      id: 'pe7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nuclear Physics** 🎯`,
      exercise: {
        questions: [
          {
            question: `A radioactive sample has a half-life of 8 days. After 24 days, what fraction remains?`,
            options: [`$1/8$ (3 half-lives: $1/2^3$)`, `$1/4$`, `$1/16$`, `$1/3$`],
            correctAnswer: 0,
            explanation: `Number of half-lives $= 24/8 = 3$. Remaining $= (1/2)^3 = 1/8$.`
          },
          {
            question: `$^{238}_{92}\\text{U}$ undergoes alpha decay. The daughter nucleus is:`,
            options: [`$^{234}_{90}\\text{Th}$ ($A - 4$, $Z - 2$)`, `$^{238}_{93}\\text{Np}$`, `$^{234}_{92}\\text{U}$`, `$^{238}_{90}\\text{Th}$`],
            correctAnswer: 0,
            explanation: `Alpha decay emits $^4_2\\text{He}$: $A$ drops by 4 ($238 \\to 234$) and $Z$ drops by 2 ($92 \\to 90$). Element 90 is thorium.`
          },
          {
            question: `After 4 half-lives, the fraction of original nuclei remaining is:`,
            options: [`1/4`, `1/8`, `1/16`, `1/32`],
            correctAnswer: 2,
            explanation: `The remaining fraction is $(1/2)^n$. For $n = 4$, $(1/2)^4 = 1/16$.`
          },
          {
            question: `In beta-minus ($\\beta^-$) decay, a neutron converts to a proton and the atomic number $Z$:`,
            options: [`Increases by 1`, `Decreases by 1`, `Stays the same`, `Increases by 2`],
            correctAnswer: 0,
            explanation: `Beta-minus decay turns a neutron into a proton (emitting an electron), so $Z$ increases by 1 while the mass number $A$ is unchanged.`
          },
          {
            question: `An electron in hydrogen falls from $n = 2$ ($E = -3.4\\;\\text{eV}$) to $n = 1$ ($E = -13.6\\;\\text{eV}$). The emitted photon's energy is:`,
            options: [`$10.2\\;\\text{eV}$`, `$3.4\\;\\text{eV}$`, `$13.6\\;\\text{eV}$`, `$17.0\\;\\text{eV}$`],
            correctAnswer: 0,
            explanation: `$E_{photon} = E_{high} - E_{low} = (-3.4) - (-13.6) = 10.2\\;\\text{eV}$. The photon carries the energy difference between the two levels.`
          },
          {
            question: `A sample's activity drops from $800\\;\\text{counts/s}$ to $100\\;\\text{counts/s}$. How many half-lives elapsed?`,
            options: [`3`, `2`, `4`, `8`],
            correctAnswer: 0,
            explanation: `Activity is proportional to undecayed nuclei: $800 \\to 400 \\to 200 \\to 100$ is three halvings, so 3 half-lives ($800/2^3 = 100$).`
          }
        ]
      }
    },
    {
      id: 'pe7-summary',
      type: 'text' as const,
      content: `### Physics E&M / Optics — Complete! ✅

Master circuits, optics (the lens/mirror equation), and nuclear decay — the most-tested physics topics. Remember the patterns: collapse parallel resistor groups, read the sign of $d_i$ for real vs. virtual images, and count whole half-lives for decay. The MCAT rewards understanding WHY over heavy computation.`
    }
  ]
};
