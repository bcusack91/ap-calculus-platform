export const physics2QuantumPart5Data = {
  topicSlug: 'quantum-phenomena',
  sections: [
    {
      id: 'quantumphenomena-p5-intro',
      type: 'text' as const,
      content: `# 🔬 Quantum Applications

**Part 5 of 7 — Modern Technology**

---

### Quantum Tunneling

Classically, a particle with energy $E$ encountering a barrier of height $V_0 > E$ would be completely reflected. In quantum mechanics, the wave function doesn't abruptly stop at the barrier — it **decays exponentially** inside, and if the barrier is thin enough, the particle can emerge on the other side!

$$T \\propto e^{-2\\kappa d}$$

where $\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar$ and $d$ is the barrier width.

---

### Factors Affecting Tunneling Probability

| Factor | Effect on Tunneling |
|--------|-------------------|
| Barrier width $d$ ↑ | Probability decreases exponentially |
| Barrier height $(V_0 - E)$ ↑ | Probability decreases exponentially |
| Particle mass $m$ ↑ | Probability decreases exponentially |
| Particle energy $E$ ↑ (closer to $V_0$) | Probability increases |

> 🔑 **Key Insight:** Tunneling probability is EXTREMELY sensitive to barrier width. Even a tiny change in $d$ causes a dramatic change in current — this is exploited in the STM.

---

### Real-World Tunneling Applications

| Application | How Tunneling is Used |
|------------|---------------------|
| **Alpha decay** | Alpha particle tunnels out of the nuclear potential well |
| **Scanning Tunneling Microscope (STM)** | Electrons tunnel between a sharp tip and surface; current is extremely sensitive to tip-surface distance |
| **Tunnel diodes** | Electrons tunnel through thin semiconductor barriers — ultrafast switching |
| **Flash memory** | Electrons tunnel through an oxide layer to store/erase data |
| **Nuclear fusion in stars** | Protons tunnel through Coulomb barrier at temperatures too low for classical crossing |

---

### The STM — Quantum Mechanics in Action

The STM tip is positioned ~1 nm from a surface. Tunneling current:

$$I \\propto e^{-2\\kappa d}$$

With $\\kappa \\sim 10^{10}$ m⁻¹ for typical metals:
- Moving the tip 0.1 nm closer → current changes by factor $e^2 ≈ 7.4$
- This extreme sensitivity allows **atomic-resolution imaging**
- Lateral resolution: ~0.1 nm, vertical: ~0.01 nm

> The 1986 Nobel Prize was awarded to Binnig & Rohrer for inventing the STM.`
    },
    {
      id: 'quantumphenomena-p5-technology',
      type: 'text' as const,
      content: `### Band Theory — Why Some Materials Conduct

Quantum mechanics explains the difference between conductors, semiconductors, and insulators through **energy bands**:

| Material Type | Band Gap | Examples | Behavior |
|--------------|----------|----------|----------|
| **Conductor** | None (bands overlap) | Cu, Ag, Au | Electrons flow freely |
| **Semiconductor** | Small (0.5–3 eV) | Si (1.1 eV), GaAs (1.4 eV) | Conductivity increases with temperature |
| **Insulator** | Large (> 5 eV) | Diamond (5.5 eV), Glass | Almost no conduction |

---

### LEDs — Photons from Band Gaps

When an electron drops from the conduction band to the valence band, it emits a photon:

$$E_{photon} = E_{gap} = hf = \\frac{hc}{\\lambda}$$

| LED Color | $\\lambda$ (nm) | Band Gap (eV) | Material |
|-----------|---------------|--------------|----------|
| Infrared | 940 | 1.32 | GaAs |
| Red | 660 | 1.88 | GaAsP |
| Green | 520 | 2.38 | InGaN |
| Blue | 470 | 2.64 | GaN |
| UV | 370 | 3.35 | AlGaN |

> The 2014 Nobel Prize was awarded for the invention of blue LEDs (Akasaki, Amano, Nakamura) — they enabled white LED lighting.

---

### Lasers — Stimulated Emission

| Process | Description |
|---------|-------------|
| **Absorption** | Photon excites electron to higher level |
| **Spontaneous emission** | Electron drops down randomly, emits photon |
| **Stimulated emission** | Incoming photon triggers identical photon emission — same frequency, phase, and direction |

Lasers require **population inversion** — more atoms in excited state than ground state. The resulting light is **coherent** (all photons in phase), **monochromatic** (single wavelength), and **collimated** (parallel beam).

---

### Quantum Computing (Beyond AP, but good to know)

| Concept | Classical | Quantum |
|---------|-----------|---------|
| Basic unit | Bit (0 or 1) | Qubit (superposition of 0 and 1) |
| State | Definite | Probabilistic until measured |
| Scaling | $n$ bits → $n$ values | $n$ qubits → $2^n$ simultaneous states |
| Advantage | — | Exponential speedup for certain problems |

> 🔑 **AP Exam Focus:** You need to know that modern electronics (transistors, LEDs, lasers, solar cells) all rely on quantum mechanics. Be able to connect band gap energy to LED wavelength: $\\lambda = hc/E_{gap}$.`
    },
    {
      id: 'quantumphenomena-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Quantum tunneling probability decreases when:',
            options: ['The barrier gets thinner', 'The particle energy increases', 'The barrier gets wider', 'The particle mass decreases'],
            correctAnswer: 2,
            explanation: '$T \\propto e^{-2\\kappa d}$. Wider barrier ($d$ ↑) → exponentially lower probability.'
          },
          {
            question: 'An LED emits red light ($\\lambda ≈ 660$ nm). Its band gap is approximately:',
            options: ['0.5 eV', '1.1 eV', '1.9 eV', '3.1 eV'],
            correctAnswer: 2,
            explanation: '$E_{gap} = 1240/660 ≈ 1.88$ eV ≈ 1.9 eV.'
          },
          {
            question: 'In an STM, if the tip moves 0.1 nm closer to the surface, the tunneling current:',
            options: ['Barely changes', 'Approximately doubles', 'Increases by roughly a factor of 7', 'Decreases'],
            correctAnswer: 2,
            explanation: '$I \\propto e^{-2\\kappa d}$. With $\\kappa \\sim 10^{10}$, reducing $d$ by $10^{-10}$ m → $I$ increases by $e^{2} ≈ 7.4$.'
          },
          {
            question: 'Stimulated emission differs from spontaneous emission because the emitted photon:',
            options: ['Has higher energy', 'Is identical to the triggering photon (same $f$, phase, direction)', 'Is always in the UV range', 'Is emitted in a random direction'],
            correctAnswer: 1,
            explanation: 'Stimulated emission produces a photon that is a perfect copy of the incoming photon — same frequency, phase, polarization, and direction. This is the basis of laser light.'
          }
        ]
      }
    },
    {
      id: 'quantumphenomena-p5-input',
      type: 'input-boxes' as const,
      content: `
**Quantum Technology Problems** 🧮

**1)** A blue LED has $\\lambda = 470$ nm. Band gap energy? (in eV, round to 2 decimal places)

**2)** An STM tip is 1 nm from the surface with $\\kappa = 10^{10}$ m⁻¹. What is $2\\kappa d$?

**3)** If the tip moves to 1.1 nm, by what factor does the current drop? ($e^{-2} ≈ 0.135$)

**4)** A semiconductor has band gap 2.0 eV. What color LED would it produce? (wavelength in nm)
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['2.64', '20', '0.135', '620'],
        hint1: '$E = 1240/470$',
        hint2: '$2 \\times 10^{10} \\times 10^{-9}$',
        hint3: 'Extra 0.1 nm: $I_{new}/I_{old} = e^{-2\\kappa(\\Delta d)} = e^{-2(10^{10})(10^{-10})} = e^{-2}$',
        hint4: '$\\lambda = 1240/E_{gap}$',
        explanation: '1) $E = 1240/470 ≈ 2.64$ eV. 2) $2(10^{10})(10^{-9}) = 20$. 3) Extra distance 0.1 nm: ratio $= e^{-2\\kappa \\cdot 0.1\\text{nm}} = e^{-2} ≈ 0.135$ — current drops by 86.5%! 4) $\\lambda = 1240/2.0 = 620$ nm (orange-red).'
      }
    }
  ]
};