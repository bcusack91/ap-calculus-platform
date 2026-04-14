export const physics2NuclearPart7Data = {
  topicSlug: 'nuclear-reactions',
  sections: [
    {
      id: 'nuclearreactions-p7-intro',
      type: 'text' as const,
      content: `# 🧩 Nuclear Reactions — Synthesis & Review

**Part 7 of 7 — Comprehensive Review**

---

### Master Equation Reference

| Topic | Equation | Units |
|-------|----------|-------|
| Mass-energy | $E = mc^2$ | J |
| Mass-energy conversion | 1 u = 931.5 MeV/$c^2$ | MeV |
| Mass defect | $\\Delta m = Zm_p + Nm_n - m_{\\text{nucleus}}$ | u |
| Binding energy | $BE = \\Delta m \\times 931.5$ MeV | MeV |
| BE per nucleon | $BE/A$ | MeV/nucleon |
| Q-value | $Q = (m_{\\text{react}} - m_{\\text{prod}}) \\times 931.5$ | MeV |
| Half-life decay | $N = N_0(1/2)^{t/t_{1/2}}$ | atoms |
| Decay constant | $\\lambda = \\ln 2 / t_{1/2}$ | s$^{-1}$ |
| Activity | $A = \\lambda N = A_0 e^{-\\lambda t}$ | Bq |

### Decay Summary

| Type | Emitted | $\\Delta A$ | $\\Delta Z$ | Penetration |
|------|---------|-----------|-----------|-------------|
| Alpha | $^4_2\\text{He}$ | $-4$ | $-2$ | Low (paper) |
| Beta⁻ | $^0_{-1}e + \\bar{\\nu}$ | $0$ | $+1$ | Medium (foil) |
| Beta⁺ | $^0_{+1}e + \\nu$ | $0$ | $-1$ | Medium |
| Gamma | $^0_0\\gamma$ | $0$ | $0$ | High (lead) |
| Neutron | $^1_0n$ | $-1$ | $0$ | High |
      `
    },
    {
      id: 'nuclearreactions-p7-connections',
      type: 'text' as const,
      content: `
## The Big Picture

### The Binding Energy Curve Explains Everything

| Question | Answer from BE Curve |
|----------|---------------------|
| Why does fusion release energy? | Light nuclei → higher BE/nucleon (climb the curve) |
| Why does fission release energy? | Heavy nuclei → higher BE/nucleon (climb the curve) |
| Why can't stars burn beyond iron? | Iron is the peak — can't climb higher |
| Why is He-4 so stable? | Doubly magic → spike in BE curve |
| Where do heavy elements come from? | Supernovae — extreme energy drives endothermic reactions |

### Cross-Topic Connections

| Nuclear Concept | Connects To... |
|----------------|----------------|
| $E = mc^2$ | Photon energy ($E = hf$), particle physics |
| Radioactive decay | Exponential decay (same math as RC circuits, half-life) |
| Alpha emission | Quantum tunneling (particle escapes through potential barrier) |
| Fusion conditions | Plasma physics, electromagnetic confinement |
| Fission chain reaction | Exponential growth, critical phenomena |
| Conservation laws | Same principles as all of physics |

### AP Exam Tips

1. **Always check both $A$ and $Z$** when balancing nuclear equations
2. **Know the BE curve qualitatively** — where is iron, what happens on each side
3. **$Q > 0$** = exothermic (products lighter), **$Q < 0$** = endothermic (products heavier)
4. **Half-life problems**: identify how many half-lives have passed, then apply $(1/2)^n$
5. **Don't confuse atomic mass with nuclear mass** — atomic mass includes electrons
      `
    },
    {
      id: 'nuclearreactions-p7-check1',
      type: 'multiple-choice' as const,
      content: `
**Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about nuclear forces is correct?',
            options: [
              'The strong nuclear force has infinite range like gravity',
              'The strong nuclear force is short-range (~$10^{-15}$ m) but extremely powerful',
              'The electromagnetic force holds the nucleus together',
              'Gravity is the dominant force inside the nucleus'
            ],
            correctAnswer: 1,
            explanation: 'The strong nuclear force acts only over ~$10^{-15}$ m (about 1 femtometer) but is about 100× stronger than the electromagnetic force at that range. It binds protons and neutrons together, overcoming the proton-proton electrostatic repulsion.'
          },
          {
            question: 'Radium-226 undergoes alpha decay, then the daughter undergoes beta⁻ decay. The final nucleus has:',
            options: [
              '$A = 222$, $Z = 87$',
              '$A = 222$, $Z = 89$',
              '$A = 222$, $Z = 87$',
              '$A = 222$, $Z = 87$'
            ],
            correctAnswer: 2,
            explanation: 'Alpha: $A = 226 - 4 = 222$, $Z = 88 - 2 = 86$ (radon). Beta⁻: $A = 222$ (unchanged), $Z = 86 + 1 = 87$ (francium). Final: $^{222}_{87}\\text{Fr}$.'
          },
          {
            question: 'A sample has mass $m$ and undergoes nuclear reactions releasing 0.1% of its mass as energy. Energy released:',
            options: [
              '$0.001mc^2$',
              '$0.1mc^2$',
              '$mc^2$',
              '$0.001mc$'
            ],
            correctAnswer: 0,
            explanation: '$E = \\Delta m \\cdot c^2 = 0.001m \\cdot c^2$. Even 0.1% mass conversion is enormous: for 1 kg, $E = 0.001 \\times 9 \\times 10^{16} = 9 \\times 10^{13}$ J — equivalent to about 21,000 tons of TNT!'
          },
          {
            question: 'Carbon-14 dating works because:',
            options: [
              'C-14 is created in nuclear reactors',
              'Living organisms maintain a constant C-14/C-12 ratio; after death, C-14 decays with a known half-life of 5,730 years',
              'C-14 is stable and never decays',
              'C-14 is found only in fossils'
            ],
            correctAnswer: 1,
            explanation: 'Cosmic rays create C-14 in the atmosphere. Living things incorporate it through food/photosynthesis, maintaining equilibrium. After death, no new C-14 is added, and existing C-14 decays ($\\beta^-$) with $t_{1/2} = 5,730$ years. Measuring the remaining fraction reveals the age.'
          }
        ]
      }
    },
    {
      id: 'nuclearreactions-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Challenge** 🧮

Uranium-235 fission: $^{235}_{92}\\text{U} + ^1_0n \\to ^{140}_{54}\\text{Xe} + ^{94}_{38}\\text{Sr} + x\\,^1_0n$

**1)** How many neutrons $x$ are released?

**2)** If each fission releases 200 MeV, how much energy from 1 mol ($6 \\times 10^{23}$) of U-235 fissions? (in MeV, scientific notation like "1.2e26")

**3)** Convert to joules ($1\\text{ MeV} = 1.6 \\times 10^{-13}$ J, answer like "1.92e13")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '1.2e26', '1.92e13'],
        hint1: '$A$: $235 + 1 = 140 + 94 + x$',
        hint2: '$E = 200 \\times 6 \\times 10^{23}$',
        hint3: 'Convert total MeV to joules',
        explanation: '1) $x = 236 - 140 - 94 = 2$ neutrons. 2) $E = 200 \\times 6 \\times 10^{23} = 1.2 \\times 10^{26}$ MeV. 3) $E = 1.2 \\times 10^{26} \\times 1.6 \\times 10^{-13} = 1.92 \\times 10^{13}$ J ≈ 19.2 TJ from just 235 g of uranium!'
      }
    }
  ]
};
