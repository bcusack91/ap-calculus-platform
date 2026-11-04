export const mcatAtomicStructurePart3Data = {
  topicSlug: 'mcat-general-chemistry-atomic-structure-mcat',
  sections: [
    {
      id: 'as3-intro',
      type: 'text' as const,
      content: `# Atomic Structure & Periodic Trends

**Part 3 of 5 — Emission Spectra, Photoelectron Spectroscopy & the Bohr Model**

These topics appear frequently in MCAT passages because they connect quantum mechanics to experimental data. You won't need to derive the equations — but you must interpret graphs and predict relative values.

## The Bohr Model (Hydrogen-Like Atoms)

Bohr proposed that electrons orbit the nucleus only at specific, quantized energy levels.

### Energy of Level $n$ in Hydrogen:

$$E_n = -\\frac{13.6\\text{ eV}}{n^2} = -\\frac{2.18 \\times 10^{-18}\\text{ J}}{n^2}$$

Negative sign: electron is bound to the nucleus (energy $= 0$ at $n = \\infty$, ionized).

**Ground state:** $n=1$, most negative energy, most stable.

**Excited state:** $n > 1$; higher energy (less negative).

### Energy of a Photon Emitted During a Transition:

$$\\Delta E = E_{\\text{final}} - E_{\\text{initial}} = -13.6\\left(\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right)\\text{ eV}$$

For a **downward** transition ($n_i > n_f$): $\\Delta E < 0$, photon is **emitted**.  
For an **upward** transition ($n_f > n_i$): $\\Delta E > 0$, photon is **absorbed**.

$$E_{\\text{photon}} = h\\nu = \\frac{hc}{\\lambda}$$

where $h = 6.626 \\times 10^{-34}$ J·s, $c = 3.0 \\times 10^8$ m/s.

### Spectral Series in Hydrogen

| Series | Final level $n_f$ | Region |
|--------|-------------------|--------|
| Lyman | 1 | Ultraviolet |
| Balmer | 2 | Visible (some UV) |
| Paschen | 3 | Infrared |

**MCAT rule:** The largest energy photon in a series is the transition from $n = \\infty$ (ionization) to $n_f$. The smallest energy photon is the adjacent transition ($n = n_f + 1$ to $n = n_f$).

### Worked Example: Photon Energy

**Problem.** A hydrogen electron ($E_n = -13.6/n^2$ eV) falls from $n = 3$ to $n = 1$ and emits a photon.

- **(a)** How much energy does the photon carry, in eV?
- **(b)** What is that energy in joules?
- **(c)** What is the photon's wavelength?
- **(d)** Which series and region of the spectrum is it in?

**(a) Energy in eV.** The magnitude of the level difference:

$$\\Delta E = 13.6\\left(\\frac{1}{1^2} - \\frac{1}{3^2}\\right) = 13.6 \\times \\frac{8}{9} = 12.09\\text{ eV}$$

**(b) Energy in joules.** With $12.09$ eV from (a): $12.09 \\times 1.602 \\times 10^{-19} = 1.94 \\times 10^{-18}$ J

**(c) Wavelength.** With $E = 1.94 \\times 10^{-18}$ J from (b):

$$\\lambda = \\frac{hc}{E} = \\frac{(6.626 \\times 10^{-34})(3.0 \\times 10^8)}{1.94 \\times 10^{-18}} = 1.02 \\times 10^{-7}\\text{ m} = 102\\text{ nm}$$

**(d) Series and region.** The electron ends at $n_f = 1$, so this is the Lyman series; at $102$ nm, shorter than any visible wavelength, it is ultraviolet.

## The Photoelectric Effect

- Light shining on a metal ejects electrons only if each photon carries at least the metal's **work function** $\\Phi$, the minimum energy needed to free an electron from the surface.
- The **threshold frequency** is $f_0 = \\Phi / h$. Below it, no electrons leave, however bright the light.
- Above it, the fastest electrons have $KE_{\\max} = hf - \\Phi$. Higher frequency gives faster electrons; brighter light (more photons) gives MORE electrons, not faster ones.
- This one-photon, one-electron behavior is the evidence that light comes in quanta of energy $hf$.

## Photoelectron Spectroscopy (PES)

PES applies the same idea to every subshell of an atom: it bombards a sample with high-energy photons (UV or X-ray), electrons are ejected, and their **kinetic energy** is measured.

$$KE = h\\nu - BE$$

where $BE$ = binding energy (energy needed to remove the electron from that subshell), the subshell's version of the work function.

**Configuration recap:** an $s$ subshell holds 2 electrons and a $p$ subshell 6; subshells fill in the order $1s, 2s, 2p, 3s, 3p, 4s$; and $[\\text{Ne}]\\, 3s^1$ means the 10 electrons of neon ($1s^2\\, 2s^2\\, 2p^6$) plus one $3s$ electron.

### Interpreting a PES Spectrum

- X-axis: **Binding energy** (increases left to right, or right to left depending on convention — read the axis label!)
- Y-axis: **Relative number of electrons** (peak area/height)
- Each peak corresponds to one **subshell**
- **Core electrons** (inner subshells) have higher binding energy than valence electrons
- **Peak relative height** ∝ number of electrons in that subshell

**Example — Sodium (Na, $[\\text{Ne}]\\, 3s^1$):**
- Peaks at high BE: $1s$ (2 electrons), $2s$ (2 electrons), $2p$ (6 electrons)
- Peak at low BE: $3s$ (1 electron)
- The $3s$ peak is half the height of $2s$ or $1s$ (only 1 electron vs. 2)
- The $2p$ peak is 3× the height of $2s$ (6 electrons vs. 2)
`
    },
    {
      id: 'as3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Emission Spectra & Bohr Model** 🎯`,
      exercise: {
        questions: [
          {
            question: `A hydrogen electron falls from $n=4$ to $n=2$. The emitted photon belongs to which series, and is in which region of the spectrum?`,
            options: [
              `Lyman series; ultraviolet`,
              `Balmer series; visible`,
              `Paschen series; infrared`,
              `Brackett series; infrared`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Transitions ending at $n_f = 2$ are the **Balmer series**, which falls in the visible (and near-UV) region. The $n=4 \\to n=2$ transition produces a blue-green visible photon.`
          },
          {
            question: `Which transition in hydrogen produces the **highest energy** photon?`,
            options: [
              `$n=2 \\to n=1$`,
              `$n=3 \\to n=1$`,
              `$n=4 \\to n=2$`,
              `$n=5 \\to n=4$`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Energy emitted $\\propto |\\Delta E| = 13.6\\left|\\frac{1}{n_f^2} - \\frac{1}{n_i^2}\\right|$. The $n=3\\to 1$ transition: $|1/1 - 1/9| = |8/9|$. The $n=2\\to 1$: $|1/1 - 1/4| = |3/4|$. Since $8/9 > 3/4$, the $3\\to 1$ transition has higher energy. The $4 \\to 2$ line gives only $1/4 - 1/16 = 3/16$, and $5 \\to 4$ just $1/16 - 1/25 = 9/400$: transitions that end higher up release far less. (The ionization limit $n=\\infty \\to 1$ would be highest, but that's not listed.)` 
          },
          {
            question: `In PES, the peak at the **highest binding energy** corresponds to which electrons?`,
            options: [
              `Valence electrons (outermost shell)`,
              `The innermost core $1s$ electrons`,
              `The electrons in the most recently filled subshell`,
              `Electrons with the highest kinetic energy after ejection`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Core electrons ($1s$, the innermost shell) are closest to the nucleus and most tightly bound — they require the most energy to remove. They appear at the **highest binding energy** on a PES spectrum. Valence and most-recently-filled electrons are the loosest, and because $KE = h\\nu - BE$, the most tightly bound electrons leave with the LOWEST kinetic energy.`
          },
          {
            question: `A PES spectrum shows 4 peaks. Going from lowest to highest binding energy, the relative peak heights are: 1, 6, 2, 2. What element is this? (Hint: count total electrons.)`,
            options: [
              `Sodium (Na, $Z=11$)`,
              `Magnesium (Mg, $Z=12$)`,
              `Aluminum (Al, $Z=13$)`,
              `Potassium (K, $Z=19$)`
            ],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Total electrons = $1 + 6 + 2 + 2 = 11$. With 4 subshells from lowest to highest BE: $3s$ $(1 e^{-})$, $2p$ $(6 e^{-})$, $2s$ $(2 e^{-})$, $1s$ $(2 e^{-})$. That's $[\\text{Ne}]\\, 3s^1$ = **Sodium ($Z=11$)**. Magnesium would show a $3s$ peak of height 2, aluminum a fifth ($3p$) peak, and potassium would need $3s$, $3p$ and $4s$ peaks as well.`
          }
        ]
      }
    },
    {
      id: 'as3-de-broglie',
      type: 'text' as const,
      content: `## Wave-Particle Duality & de Broglie Wavelength

Louis de Broglie proposed that matter has wave-like properties. For a particle with momentum $p = mv$:

$$\\lambda = \\frac{h}{mv}$$

**MCAT implication:** Electrons (small mass) have observable wavelengths. Macroscopic objects have negligible wavelengths.

**Higher velocity → shorter wavelength** (more momentum → smaller de Broglie wave).

### Worked Example — An Electron's de Broglie Wavelength

**Problem.** An electron ($m = 9.1 \\times 10^{-31}$ kg) moves at $1.0 \\times 10^6$ m/s. A $0.15$ kg baseball moves at $40$ m/s. Use $h = 6.626 \\times 10^{-34}$ J·s.

- **(a)** What is the electron's momentum?
- **(b)** What is its de Broglie wavelength?
- **(c)** What is the baseball's wavelength, and why is it never observed?

**(a) Momentum.** $p = mv = (9.1 \\times 10^{-31})(1.0 \\times 10^6) = 9.1 \\times 10^{-25}$ kg·m/s

**(b) Wavelength.** With $p$ from (a): $\\lambda = \\dfrac{h}{p} = \\dfrac{6.626 \\times 10^{-34}}{9.1 \\times 10^{-25}} \\approx 7.3 \\times 10^{-10}$ m $= 0.73$ nm, comparable to the spacing of atoms in a crystal, so electrons diffract off crystals.

**(c) The baseball.** $p = (0.15)(40) = 6.0$ kg·m/s, so $\\lambda = 6.626 \\times 10^{-34} / 6.0 \\approx 1.1 \\times 10^{-34}$ m, far smaller than any nucleus: no wave behavior can be detected.

## Heisenberg Uncertainty Principle

$$\\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi}$$

You cannot simultaneously know both position and momentum exactly. This is why quantum mechanics uses **probability orbitals** (regions where electrons are likely to be) rather than fixed orbits.
`
    },
    {
      id: 'as3-quiz2',
      type: 'multiple-choice' as const,
      content: `**PES Interpretation & Wave-Particle Duality** 🎯`,
      exercise: {
        questions: [
          {
            question: `A PES spectrum shows three peaks. The peak with the **lowest binding energy** has the smallest area. Which subshell does it most likely represent?`,
            options: [
              `$1s$ — the innermost core subshell`,
              `$2p$ — a full subshell of six electrons`,
              `The valence subshell, outermost and partly filled`,
              `An $f$ subshell holding many electrons`
            ],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The lowest-binding-energy peak corresponds to the **outermost valence electrons** (easiest to remove). A small peak area means fewer electrons in that subshell, consistent with a partially filled valence subshell (e.g., the $2p^1$ peak of boron, $1s^2\\, 2s^2\\, 2p^1$). The $1s$ core sits at the HIGHEST binding energy, and a full $2p$ or a many-electron subshell would give a large peak.`
          },
          {
            question: `According to de Broglie's equation $\\lambda = h/mv$, which particle has the **longest** wavelength?`,
            options: [
              `A proton moving at $1 \\times 10^6$ m/s`,
              `An electron moving at $1 \\times 10^6$ m/s`,
              `A baseball moving at $40$ m/s`,
              `A proton moving at $1 \\times 10^7$ m/s`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `$\\lambda = h/mv$. Smaller momentum $= $ longer wavelength. The electron has the smallest mass ($9.1 \\times 10^{-31}$ kg vs. proton's $1.67 \\times 10^{-27}$ kg), so at the same velocity it has ~1800× less momentum → longest wavelength. The proton at $1 \\times 10^7$ m/s has ten times the momentum of the slower proton, so an even shorter wavelength, and the baseball's momentum (about 6 kg·m/s) makes its wavelength immeasurably small.`
          },
          {
            question: `Hydrogen emits a photon of wavelength 656 nm (red, Balmer series). This corresponds to which transition?`,
            options: [
              `$n=2 \\to n=1$`,
              `$n=3 \\to n=2$`,
              `$n=4 \\to n=2$`,
              `$n=4 \\to n=3$`
            ],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `The 656 nm (red) line is the H-alpha line, the lowest-energy Balmer transition: $n=3 \\to n=2$. The Balmer series ($n_f = 2$) produces visible-light photons, with 656 nm being the lowest-energy (longest wavelength) visible Balmer line. $n=2 \\to n=1$ ends at $n_f = 1$ (Lyman, ultraviolet, 122 nm); $n=4 \\to n=2$ is a larger Balmer gap, giving the shorter blue-green 486 nm line; and $n=4 \\to n=3$ ends at $n_f = 3$ (Paschen, infrared).`
          }
        ]
      }
    },
    {
      id: 'as3-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- **Bohr transitions.** In hydrogen $E_n = -13.6/n^2$ eV; a fall emits a photon of $E = hc/\\lambda$, a rise absorbs one.
- **Spectral series.** Lyman ends at $n = 1$ (UV), Balmer at $n = 2$ (visible), Paschen at $n = 3$ (infrared).
- **Reading PES.** Peak area counts a subshell's electrons; core electrons sit at the highest binding energy, valence the lowest.
- **Matter waves.** $\\lambda = h/(mv)$ is measurable for electrons, not baseballs; position and momentum can't both be exact.

**Common traps**

- **Sign of $\\Delta E$.** A downward jump has $\\Delta E < 0$ and emits; the photon's energy is the magnitude $|\\Delta E|$.
- **Judging by the gap in $n$.** Levels crowd together at high $n$, so $6 \\to 5$ releases far less energy than $2 \\to 1$.
- **Peak height as energy.** In PES, peak size counts electrons; peak position (binding energy) shows how tightly they are held.
- **Mixing eV and joules.** Convert eV to J ($\\times 1.602 \\times 10^{-19}$) before using $\\lambda = hc/E$ with SI constants.
`
    }
  ]
};
