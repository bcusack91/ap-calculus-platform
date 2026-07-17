export const physics2NuclearPart3Data = {
  topicSlug: 'nuclear-reactions',
  sections: [
    {
      id: 'nuclearreactions-p3-intro',
      type: 'text' as const,
      content: `# ⭐ Nuclear Fusion

**Part 3 of 7 — Combining Light Nuclei**

---

### What is Fusion?

Two light nuclei combine to form a heavier nucleus, releasing energy.

### The pp Chain (How the Sun Works)

The net reaction of the proton-proton chain:

$$4\\,^1_1\\text{H} \\to ^4_2\\text{He} + 2\\,^0_{+1}e + 2\\nu_e + 26.7\\text{ MeV}$$

Four protons fuse to form one helium-4 nucleus, releasing positrons, neutrinos, and 26.7 MeV of energy.

### Deuterium-Tritium Fusion (Most Promising for Reactors)

$$^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0n + 17.6\\text{ MeV}$$

This has the lowest ignition temperature (~$10^8$ K) of any fusion reaction.

### Conditions for Fusion

| Requirement | Why | Value for D-T |
|------------|-----|---------------|
| Extreme temperature | Overcome Coulomb repulsion ($\\sim10^8$ K) | $\\sim 10^8$ K |
| High density | Increase collision probability | $\\sim 10^{20}$ $particles/m^{3}$ |
| Sufficient confinement time | Keep plasma together long enough | $\\sim 1$ s |

> 🔑 **Coulomb barrier:** Both nuclei are positive → electrostatic repulsion. Only at extreme temperatures do nuclei have enough KE to get close enough for the strong nuclear force to bind them.

### Why Fusion Releases Energy

Light nuclei have **lower binding energy per nucleon** (~1–7 MeV) than helium-4 (~7.07 MeV). Combining them moves UP the binding energy curve, and the difference is released as energy.
      `
    },
    {
      id: 'nuclearreactions-p3-comparison',
      type: 'text' as const,
      content: `
## Fission vs. Fusion Comparison

| Feature | Fission | Fusion |
|---------|---------|--------|
| Process | Heavy nucleus splits | Light nuclei combine |
| Fuel | Uranium, Plutonium | Hydrogen isotopes |
| Products | Radioactive waste (long-lived) | Helium (harmless) |
| Energy per event | ~200 MeV | ~17.6 MeV (D-T) |
| Energy per kg of fuel | ~$8 \\times 10^{13}$ J | ~$3.4 \\times 10^{14}$ J |
| Direction on BE curve | Heavy → medium | Light → medium |
| Current status | Operational since 1950s | Still experimental |
| Main challenge | Waste disposal, safety | Achieving sustained conditions |

### Fusion in Stars

| Star Stage | Fuel | Product | Temperature |
|-----------|------|---------|-------------|
| Main sequence | Hydrogen | Helium | $\\sim 10^7$ K |
| Red giant | Helium | Carbon, Oxygen | $\\sim 10^8$ K |
| Massive stars | C, O, Si... | Up to Iron-56 | $\\sim 10^9$ K |
| Supernova | — | Elements heavier than Fe | Extreme |

> Stars cannot fuse elements heavier than iron-56 — beyond the peak of the BE curve, fusion would absorb energy instead of releasing it. Elements heavier than iron were created in supernovae!
      `
    },
    {
      id: 'nuclearreactions-p3-check1',
      type: 'multiple-choice' as const,
      content: `
**Fusion Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do fusion reactions require extremely high temperatures?',
            options: [
              'To melt the nuclei so they can merge',
              'To overcome the Coulomb (electrostatic) repulsion between positive nuclei',
              'To break apart the nuclei first',
              'To create neutrons for the reaction'
            ],
            correctAnswer: 1,
            explanation: 'Both nuclei are positively charged → they repel each other. At ~$10^8$ K, nuclei have enough kinetic energy to overcome this electrostatic barrier and get close enough (~$10^{-15}$ m) for the strong nuclear force to take over and bind them.'
          },
          {
            question: 'The Sun fuses hydrogen into helium. Why doesn\'t it fuse helium into heavier elements (yet)?',
            options: [
              'Helium is too heavy to fuse',
              'The Sun\'s core isn\'t hot enough — helium fusion requires ~$10^8$ K',
              'There\'s no helium in the Sun',
              'Helium fusion is impossible'
            ],
            correctAnswer: 1,
            explanation: 'Helium nuclei have $Z = 2$ (more charge), so the Coulomb barrier is higher. Helium fusion (the "triple-alpha process") requires ~$10^8$ K. The Sun\'s core is only ~$1.5 \\times 10^7$ K. When hydrogen runs out, the core will contract and heat up enough for helium fusion → red giant phase.'
          },
          {
            question: 'Why can\'t stars fuse iron into heavier elements through normal fusion?',
            options: [
              'Iron is too dense',
              'Iron-56 is at the PEAK of the binding energy curve — fusion beyond iron absorbs energy',
              'Iron has too many neutrons',
              'The strong force doesn\'t work on iron'
            ],
            correctAnswer: 1,
            explanation: 'Iron-56 has the maximum binding energy per nucleon (~8.79 MeV). Fusing anything heavier would move DOWN the curve — requiring energy input rather than releasing it. Elements heavier than iron are created in supernovae, where the enormous energy of the explosion drives endothermic nuclear reactions.'
          },
          {
            question: 'Fusion releases more energy per kilogram of fuel than fission because:',
            options: [
              'Fusion fuel is cheaper',
              'Light nuclei are farther from the BE peak, so more energy is released per nucleon when they move toward it',
              'Fusion produces more neutrons',
              'Fission requires more input energy'
            ],
            correctAnswer: 1,
            explanation: 'Hydrogen (~1 MeV/nucleon) → Helium (~7 MeV/nucleon) gains ~6 MeV per nucleon. U-235 (~7.6 MeV/nucleon) → products (~8.5 MeV/nucleon) gains ~0.9 MeV per nucleon. The "jump" is much larger for fusion, and hydrogen is much lighter (more nucleons per kg).'
          }
        ]
      }
    },
    {
      id: 'nuclearreactions-p3-input',
      type: 'input-boxes' as const,
      content: `
**Fusion Calculations** 🧮

In the D-T fusion reaction: $^2_1\\text{H} + ^3_1\\text{H} \\to ^4_2\\text{He} + ^1_0n$

**1)** Total mass number on the left side?

**2)** Total charge number on the left side?

**3)** Energy released = 17.6 MeV. In joules? ($1\\text{ MeV} = 1.6 \\times 10^{-13}$ J, answer in scientific notation like "2.82e-12")
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '2', '2.82e-12'],
        hint1: '$A = 2 + 3$',
        hint2: '$Z = 1 + 1$',
        hint3: '$E = 17.6 \\times 1.6 \\times 10^{-13}$',
        explanation: '1) $A = 2 + 3 = 5$ (products: $4 + 1 = 5$ ✓). 2) $Z = 1 + 1 = 2$ (products: $2 + 0 = 2$ ✓). 3) $E = 17.6 \\times 1.6 \\times 10^{-13} = 2.82 \\times 10^{-12}$ J. Tiny per reaction, but trillions of reactions per second in a star!'
      }
    }
  ]
};
