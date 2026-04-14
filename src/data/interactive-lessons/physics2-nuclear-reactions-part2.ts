export const physics2NuclearPart2Data = {
  topicSlug: 'nuclear-reactions',
  sections: [
    {
      id: 'nuclearreactions-p2-intro',
      type: 'text' as const,
      content: `# 💥 Nuclear Fission

**Part 2 of 7 — Splitting Heavy Nuclei**

---

### What is Fission?

A heavy nucleus absorbs a neutron and splits into two medium-sized nuclei plus additional neutrons and energy.

### The Classic Example: Uranium-235

$$^{235}_{92}\\text{U} + ^1_0n \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3\\,^1_0n + \\sim200\\text{ MeV}$$

Check: $A$: $235 + 1 = 141 + 92 + 3$ = $236$ ✓ | $Z$: $92 = 56 + 36$ ✓

### Chain Reaction

Each fission releases 2–3 neutrons. If at least one neutron causes another fission → **self-sustaining chain reaction**.

| Condition | Neutron Multiplication | Result |
|-----------|----------------------|--------|
| **Subcritical** | $< 1$ neutron per fission causes another | Reaction dies out |
| **Critical** | Exactly 1 neutron per fission | Steady, controlled reaction (nuclear reactor) |
| **Supercritical** | $> 1$ neutron per fission | Exponential growth (bomb) |

### Why Fission Releases Energy

Heavy nuclei (like U-235) have **lower binding energy per nucleon** (~7.6 MeV) than the fission products (~8.5 MeV). Moving UP the binding energy curve releases the difference as kinetic energy and radiation.

### Critical Mass

The minimum amount of fissile material needed for a sustained chain reaction. Below this mass, too many neutrons escape through the surface before hitting another nucleus.
      `
    },
    {
      id: 'nuclearreactions-p2-applications',
      type: 'text' as const,
      content: `
## Fission Applications

### Nuclear Power Plants

| Component | Function |
|-----------|----------|
| **Fuel rods** | Contain enriched uranium (3–5% U-235) |
| **Moderator** (water) | Slows neutrons → increases fission probability |
| **Control rods** (boron/cadmium) | Absorb neutrons → regulate reaction rate |
| **Coolant** | Transfers heat to steam generators |
| **Containment** | Prevents radioactive release |

### Key Numbers

| Quantity | Value |
|----------|-------|
| Energy per fission | ~200 MeV |
| Energy per kg of U-235 | ~$8 \\times 10^{13}$ J |
| Energy per kg of coal | ~$3 \\times 10^7$ J |
| Ratio | Uranium releases ~2.7 million × more energy per kg! |

### Slow vs. Fast Neutrons

Fission neutrons are "fast" (~2 MeV). U-235 fissions more efficiently with "slow" (thermal) neutrons (~0.025 eV). The moderator slows neutrons through elastic collisions — water and graphite are common moderators.
      `
    },
    {
      id: 'nuclearreactions-p2-check1',
      type: 'multiple-choice' as const,
      content: `
**Fission Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the fission of U-235, the products have higher binding energy per nucleon than the reactant. This means:',
            options: [
              'Energy is absorbed (endothermic)',
              'Energy is released (exothermic)',
              'No energy change',
              'It depends on the specific products'
            ],
            correctAnswer: 1,
            explanation: 'Higher BE/nucleon = more tightly bound = more stable = lower total mass. The mass difference appears as released energy ($E = \\Delta mc^2$). Moving toward the peak of the BE curve (iron-56) always releases energy.'
          },
          {
            question: 'The role of control rods in a nuclear reactor is to:',
            options: [
              'Speed up neutrons',
              'Provide fuel for fission',
              'Absorb excess neutrons to maintain criticality',
              'Shield workers from radiation'
            ],
            correctAnswer: 2,
            explanation: 'Control rods (boron, cadmium) absorb neutrons. Inserting them deeper absorbs more neutrons → fewer fissions. Withdrawing them allows more fissions. This maintains exactly critical conditions.'
          },
          {
            question: 'Why is a moderator needed in a nuclear reactor?',
            options: [
              'To speed up the nuclear reaction',
              'To slow down fast neutrons so they are more likely to cause fission in U-235',
              'To absorb radiation',
              'To cool the fuel rods'
            ],
            correctAnswer: 1,
            explanation: 'U-235 has a much higher fission cross-section (probability) for slow (thermal) neutrons than fast ones. The moderator (water, graphite) slows neutrons through elastic collisions without absorbing them.'
          },
          {
            question: 'Approximately how much energy is released per fission of U-235?',
            options: ['2 MeV', '20 MeV', '200 MeV', '2000 MeV'],
            correctAnswer: 2,
            explanation: '~200 MeV per fission. Most goes to kinetic energy of the fission fragments (~170 MeV), with the rest in neutron KE, gamma rays, and neutrinos. Compare to chemical reactions: ~4 eV per molecule — fission releases about 50 million times more energy per event!'
          }
        ]
      }
    },
    {
      id: 'nuclearreactions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Fission Calculations** 🧮

$^{235}_{92}\\text{U} + ^1_0n \\to ^{144}_{56}\\text{Ba} + ^A_Z\\text{Kr} + 3\\,^1_0n$

**1)** Mass number $A$ of Kr?

**2)** Atomic number $Z$ of Kr?

**3)** Total neutrons released per fission in this reaction?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['89', '36', '3'],
        hint1: '$235 + 1 = 144 + A + 3(1)$',
        hint2: '$92 + 0 = 56 + Z + 3(0)$',
        hint3: 'Count the neutrons on the products side',
        explanation: '1) $A = 236 - 144 - 3 = 89$. 2) $Z = 92 - 56 = 36$. 3) 3 neutrons are produced, which can go on to cause more fissions in a chain reaction.'
      }
    }
  ]
};
