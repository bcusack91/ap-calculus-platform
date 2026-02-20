export const mcatPhysElecPart6Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe6-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 6 of 7 — Electromagnetic Spectrum & Light**

### The EM Spectrum (increasing frequency/decreasing wavelength)

Radio → Microwave → Infrared → **Visible** → Ultraviolet → X-ray → Gamma

$$c = f\\lambda = 3 \\times 10^8\\;\\text{m/s}$$

### Visible Light

Red (700 nm) → Orange → Yellow → Green → Blue → Violet (400 nm)

$$E = hf = \\frac{hc}{\\lambda}$$

- Higher frequency = higher energy = shorter wavelength

### Photoelectric Effect

$$KE_{max} = hf - \\phi$$

- $\\phi$ = work function (minimum energy to eject electron)
- Below threshold frequency: NO electrons ejected, regardless of intensity
- Above threshold: intensity affects NUMBER of electrons, not their energy

### Diffraction & Interference

- **Constructive**: $d\\sin\\theta = n\\lambda$ (bright fringes)
- **Destructive**: $d\\sin\\theta = (n + \\frac{1}{2})\\lambda$ (dark fringes)`
    },
    {
      id: 'pe6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Light & Quantum** 🎯`,
      exercise: {
        questions: [
          {
            question: `In the photoelectric effect, increasing the intensity of light above the threshold frequency:`,
            options: [`Increases the number of ejected electrons (more photons hitting surface)`, `Increases the kinetic energy of ejected electrons`, `Decreases the work function`, `Has no effect`],
            correctAnswer: 0,
            explanation: `Intensity = number of photons per unit time. More photons → more electrons ejected. The KE of each electron depends only on frequency ($KE = hf - \\phi$), not intensity.`
          }
        ]
      }
    },
    {
      id: 'pe6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

- $E = hf = hc/\\lambda$: higher frequency = higher energy
- Photoelectric effect: threshold frequency matters, not intensity
- EM spectrum order: Radio < Micro < IR < Visible < UV < X-ray < Gamma
- Double-slit: demonstrates wave nature of light (interference pattern)`
    }
  ]
};
