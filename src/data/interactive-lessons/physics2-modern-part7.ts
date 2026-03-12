export const physics2ModernPart7Data = {
  topicSlug: 'photons-atomic-nuclear',
  sections: [
    {
      id: 'mp7-intro',
      type: 'text' as const,
      content: `
# 🧪 Synthesis & AP Review — Modern Physics

**Part 7 of 7 — Fission, Fusion & Final Mastery**

This final part covers **nuclear reactions** (fission and fusion), common AP exam mistakes, and a comprehensive mastery quiz spanning all of modern physics: photons, wave-particle duality, atomic models, and nuclear physics.
      `
    },
    {
      id: 'mp7-fission',
      type: 'text' as const,
      content: `
## Nuclear Fission

**Fission** = a heavy nucleus splits into two lighter nuclei (plus neutrons and energy).

### Example: Uranium-235

$$^{235}_{92}\\text{U} + ^{1}_{0}n \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3\\,^{1}_{0}n + \\text{energy}$$

### Key Features
- Triggered by absorbing a slow (thermal) neutron
- Releases ~200 MeV per fission event
- Products move toward iron on the binding energy curve → more tightly bound → energy released
- Released neutrons can trigger more fissions → **chain reaction**

### Conservation Check
- Mass number: $235 + 1 = 141 + 92 + 3(1) = 236$ ✓
- Charge: $92 + 0 = 56 + 36 + 0 = 92$ ✓

### Applications
- **Nuclear reactors**: controlled chain reaction, use control rods to absorb excess neutrons
- **Nuclear weapons**: uncontrolled chain reaction
      `
    },
    {
      id: 'mp7-fusion',
      type: 'text' as const,
      content: `
## Nuclear Fusion

**Fusion** = two light nuclei combine to form a heavier nucleus (plus energy).

### Example: Hydrogen Fusion (in stars)

$$^{2}_{1}\\text{H} + ^{3}_{1}\\text{H} \\to ^{4}_{2}\\text{He} + ^{1}_{0}n + 17.6 \\text{ MeV}$$

### Key Features
- Products move toward iron on the binding energy curve → energy released
- Requires extremely high temperatures (~$10^7$ K) to overcome Coulomb repulsion between positive nuclei
- Powers the Sun and all main-sequence stars
- Releases more energy per nucleon than fission
- No long-lived radioactive waste (cleaner than fission)

### Fission vs. Fusion Summary

| Feature | Fission | Fusion |
|---------|---------|--------|
| Process | Heavy → lighter nuclei | Light → heavier nucleus |
| Fuel | Uranium, plutonium | Hydrogen isotopes |
| Trigger | Neutron absorption | Extreme temperature |
| Energy per nucleon | ~0.9 MeV | ~3.5 MeV |
| Waste | Radioactive products | Mostly helium |
| On Earth | Nuclear reactors | Experimental (tokamaks) |
| In nature | Rare (spontaneous) | Powers stars |
      `
    },
    {
      id: 'mp7-fission-fusion-quiz',
      type: 'multiple-choice' as const,
      content: `
**Fission & Fusion Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'In nuclear fission, energy is released because:',
            options: [
              'Mass is created from energy',
              'The products have higher binding energy per nucleon than the original nucleus',
              'The products have lower binding energy per nucleon than the original nucleus',
              'Electrons are released from the atom'
            ],
            correctAnswer: 1,
            explanation: 'The fission products (medium-mass nuclei near iron) have HIGHER binding energy per nucleon than the heavy parent nucleus. The increase in binding energy is released as kinetic energy of the products.'
          },
          {
            question: 'Why does nuclear fusion require extremely high temperatures?',
            options: [
              'To break apart the nuclei first',
              'To melt the fuel into a liquid',
              'To give nuclei enough kinetic energy to overcome their mutual Coulomb repulsion',
              'To create neutrons for the reaction'
            ],
            correctAnswer: 2,
            explanation: 'Both nuclei are positively charged and repel each other. At extremely high temperatures, the nuclei move fast enough to overcome this electrostatic barrier and get close enough for the strong nuclear force to bind them together.'
          }
        ]
      }
    },
    {
      id: 'mp7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes to Avoid

### Photoelectric Effect
- ❌ "Brighter light → faster electrons" → ✅ Brighter light → MORE electrons (same max KE)
- ❌ "Any light can eject electrons if bright enough" → ✅ Must be above threshold frequency
- ❌ "KE of photoelectrons depends on intensity" → ✅ KE depends only on frequency

### Energy Levels
- ❌ "The electron orbits at any radius" → ✅ Only quantized orbits ($n = 1, 2, 3, \\ldots$)
- ❌ "A 10.0 eV photon will excite hydrogen from $n = 1$ to $n = 2$" → ✅ Needs EXACTLY 10.2 eV
- ❌ "Higher $n$ = higher energy = more negative" → ✅ Higher $n$ = less negative = higher energy

### Nuclear Physics
- ❌ "Beta decay changes $A$" → ✅ Beta decay keeps $A$ constant (changes $Z$ by ±1)
- ❌ "Gamma decay changes the element" → ✅ Gamma only releases energy ($Z$ and $A$ unchanged)
- ❌ "Fission and fusion both work with any nucleus" → ✅ Fission works for heavy nuclei, fusion for light nuclei

### Half-Life
- ❌ "After 2 half-lives, all atoms have decayed" → ✅ After 2 half-lives, 1/4 remain
- ❌ "Half-life depends on how much sample you have" → ✅ Half-life is a fixed property of the isotope
      `
    },
    {
      id: 'mp7-frq-preview',
      type: 'input-boxes' as const,
      content: `
**AP FRQ-Style Problem**

Light of wavelength 200 nm strikes a metal surface with work function $\\phi = 4.20$ eV. Use $h = 6.63 \\times 10^{-34}$ J·s, $c = 3.00 \\times 10^{8}$ m/s, $1 \\text{ eV} = 1.60 \\times 10^{-19}$ J.

1) Photon energy in eV (3 significant figures)
2) Maximum KE of ejected electrons in eV (3 significant figures)
3) Stopping voltage in V (3 significant figures)
4) de Broglie wavelength of the fastest ejected electron ($\\times 10^{-10}$ m, 3 significant figures). Use $m_e = 9.11 \\times 10^{-31}$ kg.
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['6.20', '2.00', '2.00', '8.7', '6.200', '6.2', '2.000', '2.0', '8.70'],
        hint1: '$E = 1240/200 = 6.20$ eV.',
        hint2: '$KE_{\\max} = E - \\phi = 6.20 - 4.20 = 2.00$ eV. $V_s = KE_{\\max}/e = 2.00$ V.',
        hint3: 'Convert $KE$ to joules: $2.00 \\times 1.60 \\times 10^{-19} = 3.20 \\times 10^{-19}$ J. $v = \\sqrt{2KE/m_e}$. Then $\\lambda = h/(m_e v)$.',
        explanation: '$E = 1240/200 = 6.20$ eV. $KE_{\\max} = 6.20 - 4.20 = 2.00$ eV $= 3.20 \\times 10^{-19}$ J. $V_s = 2.00$ V. $v = \\sqrt{2(3.20 \\times 10^{-19})/(9.11 \\times 10^{-31})} = \\sqrt{7.025 \\times 10^{11}} = 8.38 \\times 10^5$ m/s. $\\lambda = 6.63 \\times 10^{-34}/[(9.11 \\times 10^{-31})(8.38 \\times 10^5)] = 8.68 \\times 10^{-10} \\approx 8.7 \\times 10^{-10}$ m.'
      }
    },
    {
      id: 'mp7-mastery-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Mastery Quiz — All Modern Physics**
      `,
      exercise: {
        questions: [
          {
            question: 'A photon with wavelength 620 nm has energy closest to:',
            options: [
              '1.0 eV',
              '2.0 eV',
              '3.1 eV',
              '6.2 eV'
            ],
            correctAnswer: 1,
            explanation: '$E = 1240/620 = 2.0$ eV.'
          },
          {
            question: 'In the photoelectric effect, the threshold frequency depends on:',
            options: [
              'The intensity of the light',
              'The wavelength of the light',
              'The work function of the metal',
              'The number of photons per second'
            ],
            correctAnswer: 2,
            explanation: '$f_0 = \\phi/h$. The threshold frequency is determined solely by the work function $\\phi$ of the metal surface.'
          },
          {
            question: 'An electron accelerated through 400 V has a de Broglie wavelength of approximately:',
            options: [
              '$6.1 \\times 10^{-11}$ m',
              '$6.1 \\times 10^{-10}$ m',
              '$1.2 \\times 10^{-10}$ m',
              '$1.2 \\times 10^{-9}$ m'
            ],
            correctAnswer: 0,
            explanation: '$KE = eV = 400$ eV $= 6.4 \\times 10^{-17}$ J. $v = \\sqrt{2KE/m_e} = 1.19 \\times 10^7$ m/s. $\\lambda = h/(mv) = 6.63 \\times 10^{-34}/[(9.11 \\times 10^{-31})(1.19 \\times 10^7)] = 6.12 \\times 10^{-11}$ m.'
          },
          {
            question: 'A hydrogen atom transitions from $n = 2$ to $n = 1$. The emitted photon has wavelength:',
            options: [
              '122 nm (UV)',
              '656 nm (red)',
              '486 nm (blue-green)',
              '434 nm (violet)'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta E = 13.6(1/1 - 1/4) = 13.6(3/4) = 10.2$ eV. $\\lambda = 1240/10.2 = 121.6 \\approx 122$ nm (Lyman series, UV).'
          },
          {
            question: '$^{210}_{84}\\text{Po}$ undergoes alpha decay followed by beta-minus decay. The final nucleus has:',
            options: [
              '$Z = 83$, $A = 206$',
              '$Z = 82$, $A = 206$',
              '$Z = 81$, $A = 206$',
              '$Z = 83$, $A = 210$'
            ],
            correctAnswer: 0,
            explanation: 'Alpha decay: $Z: 84 \\to 82$, $A: 210 \\to 206$. Then beta-minus: $Z: 82 \\to 83$, $A$ stays 206. Final: $Z = 83$, $A = 206$.'
          },
          {
            question: 'A radioactive sample has a half-life of 10 minutes. After 30 minutes, what fraction of the original activity remains?',
            options: [
              '1/2',
              '1/4',
              '1/8',
              '1/16'
            ],
            correctAnswer: 2,
            explanation: '$n = 30/10 = 3$ half-lives. Fraction remaining $= (1/2)^3 = 1/8$.'
          },
          {
            question: 'Which process releases energy: fusing two iron-56 nuclei or splitting iron-56?',
            options: [
              'Fusing iron-56',
              'Splitting iron-56',
              'Both release energy',
              'Neither — iron-56 is at the peak of the binding energy curve'
            ],
            correctAnswer: 3,
            explanation: 'Iron-56 has the highest binding energy per nucleon. Moving away from iron in either direction (fusion of iron or fission of iron) requires energy input rather than releasing energy.'
          }
        ]
      }
    }
  ]
}
