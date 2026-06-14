export const mcatPhysElecPart6Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe6-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 6 of 7 — Electromagnetic Spectrum & Light**

### The EM Spectrum (increasing frequency / decreasing wavelength)

Radio → Microwave → Infrared → **Visible** → Ultraviolet → X-ray → Gamma

$c = f\\lambda$ where $c = 3 \\times 10^8\\;\\text{m/s}$

### Visible Light

Red (700 nm) → Orange → Yellow → Green → Blue → Violet (400 nm)

$E = hf = \\frac{hc}{\\lambda}$ where $h = 6.63 \\times 10^{-34}\\;\\text{J}\\cdot\\text{s}$

- Higher frequency = higher energy = shorter wavelength

### Photoelectric Effect

$KE_{max} = hf - \\phi$

- $\\phi$ = work function (minimum energy to eject an electron)
- Below the threshold frequency: NO electrons are ejected, regardless of intensity
- Above the threshold: intensity sets the NUMBER of electrons, frequency sets their energy

### Diffraction & Interference

- **Constructive** (bright fringes): $d\\sin\\theta = n\\lambda$
- **Destructive** (dark fringes): $d\\sin\\theta = (n + \\tfrac{1}{2})\\lambda$

Below the threshold frequency, no electrons are emitted no matter how bright the light, because each single photon lacks the energy to overcome $\\phi$.`
    },
    {
      id: 'pe6-worked',
      type: 'text' as const,
      content: `### Worked Example — Photon Energy of Green Light

Green light has a wavelength of $\\lambda = 500\\;\\text{nm} = 5.0 \\times 10^{-7}\\;\\text{m}$. What is the energy of a single green photon?

**Step 1 — Use the photon-energy relation.**

$E = \\frac{hc}{\\lambda}$

**Step 2 — Substitute constants.**

$E = \\frac{(6.63 \\times 10^{-34})(3.0 \\times 10^{8})}{5.0 \\times 10^{-7}}$

**Step 3 — Evaluate.** Numerator $= 1.99 \\times 10^{-25}$, so

$E = \\frac{1.99 \\times 10^{-25}}{5.0 \\times 10^{-7}} \\approx 4.0 \\times 10^{-19}\\;\\text{J}$

**Step 4 — Convert to electron-volts (optional MCAT shortcut).** Dividing by $1.6 \\times 10^{-19}\\;\\text{J/eV}$ gives about $2.5\\;\\text{eV}$, a typical visible-photon energy. Remember the inverse relationship: shorter wavelength means higher energy per photon.`
    },
    {
      id: 'pe6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Light & Quantum** 🎯`,
      exercise: {
        questions: [
          {
            question: `In the photoelectric effect, increasing the intensity of light above the threshold frequency:`,
            options: [`Increases the number of ejected electrons (more photons hit the surface)`, `Increases the kinetic energy of ejected electrons`, `Decreases the work function`, `Has no effect`],
            correctAnswer: 0,
            explanation: `Intensity is the number of photons per unit time. More photons eject more electrons. The KE of each electron depends only on frequency via $KE = hf - \\phi$, not on intensity.`
          },
          {
            question: `If the frequency is below threshold, increasing intensity causes the photoelectron KE to:`,
            options: [`Increase linearly`, `Increase then plateau`, `Stay nonexistent (no emission)`, `Become negative`],
            correctAnswer: 2,
            explanation: `No emission occurs below the threshold frequency, so there are no ejected electrons and no kinetic-energy distribution to change.`
          },
          {
            question: `Which type of electromagnetic radiation has the highest energy per photon?`,
            options: [`Radio waves`, `Visible light`, `Gamma rays`, `Microwaves`],
            correctAnswer: 2,
            explanation: `$E = hf$, so the highest-frequency radiation carries the most energy per photon. Gamma rays are at the high-frequency end of the spectrum.`
          },
          {
            question: `A radio station broadcasts at $100\\;\\text{MHz}$ ($1.0 \\times 10^8\\;\\text{Hz}$). The wavelength is:`,
            options: [`$3\\;\\text{m}$`, `$0.3\\;\\text{m}$`, `$30\\;\\text{m}$`, `$3 \\times 10^8\\;\\text{m}$`],
            correctAnswer: 0,
            explanation: `$\\lambda = c/f = (3.0 \\times 10^8)/(1.0 \\times 10^8) = 3\\;\\text{m}$.`
          },
          {
            question: `A metal has a work function $\\phi = 2.0\\;\\text{eV}$. A photon of energy $3.0\\;\\text{eV}$ strikes it. The maximum kinetic energy of the ejected electron is:`,
            options: [`$1.0\\;\\text{eV}$`, `$5.0\\;\\text{eV}$`, `$2.0\\;\\text{eV}$`, `$0\\;\\text{eV}$`],
            correctAnswer: 0,
            explanation: `$KE_{max} = hf - \\phi = 3.0 - 2.0 = 1.0\\;\\text{eV}$. The photon energy exceeds the work function, so an electron is ejected with the remainder as kinetic energy.`
          },
          {
            question: `Compared to a red photon, a blue photon has:`,
            options: [`Higher frequency and higher energy`, `Lower frequency and higher energy`, `Higher frequency and lower energy`, `The same energy`],
            correctAnswer: 0,
            explanation: `Blue light has a shorter wavelength than red, so higher frequency ($c = f\\lambda$) and higher energy ($E = hf$).`
          }
        ]
      }
    },
    {
      id: 'pe6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- $E = hf = hc/\\lambda$: higher frequency = higher energy = shorter wavelength
- Photoelectric effect: threshold FREQUENCY matters for emission, not intensity
- Intensity sets the NUMBER of photoelectrons; frequency sets their kinetic energy
- EM spectrum order: Radio < Micro < IR < Visible < UV < X-ray < Gamma
- Double-slit interference demonstrates the wave nature of light`
    }
  ]
};
