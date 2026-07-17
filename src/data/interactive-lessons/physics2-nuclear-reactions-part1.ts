export const physics2NuclearPart1Data = {
  topicSlug: 'nuclear-reactions',
  sections: [
    {
      id: 'nuclearreactions-p1-intro',
      type: 'text' as const,
      content: `# ☢️ Nuclear Reactions

**Part 1 of 7 — Nuclear Notation & Conservation Laws**

---

### Nuclear Notation

$$^A_Z X$$

| Symbol | Meaning | Example ($^{12}_6\\text{C}$) |
|--------|---------|---------------------------|
| $A$ | Mass number (protons + neutrons) | 12 |
| $Z$ | Atomic number (protons) | 6 |
| $N = A - Z$ | Neutron number | 6 |
| $X$ | Element symbol | C (carbon) |

### Common Particles to Know

| Particle | Symbol | $A$ | $Z$ |
|----------|--------|-----|-----|
| Proton | $^1_1p$ or $^1_1\\text{H}$ | 1 | 1 |
| Neutron | $^1_0n$ | 1 | 0 |
| Electron $(beta^{-})$ | $^0_{-1}e$ or $\\beta^-$ | 0 | $-1$ |
| Positron $(beta^{+})$ | $^0_{+1}e$ or $\\beta^+$ | 0 | $+1$ |
| Alpha particle | $^4_2\\text{He}$ or $\\alpha$ | 4 | 2 |
| Gamma ray | $^0_0\\gamma$ | 0 | 0 |
| Neutrino | $\\nu$ | 0 | 0 |

### Conservation Laws in Nuclear Reactions

Every nuclear reaction must conserve:

1. **Mass number:** $\\sum A_{\\text{reactants}} = \\sum A_{\\text{products}}$
2. **Charge (atomic number):** $\\sum Z_{\\text{reactants}} = \\sum Z_{\\text{products}}$
3. **Energy-momentum** (includes mass-energy via $E = mc^2$)
4. **Lepton number** (neutrinos balance beta decay)

> 🔑 **Balancing trick:** Check $A$ first (simple addition), then $Z$. If one is off, you have the wrong particle.
      `
    },
    {
      id: 'nuclearreactions-p1-decay',
      type: 'text' as const,
      content: `
## Radioactive Decay Types

| Decay Type | What Happens | $\\Delta Z$ | $\\Delta A$ | Penetrating Power |
|-----------|-------------|-----------|-----------|-------------------|
| **Alpha** ($\\alpha$) | Emits $^4_2\\text{He}$ | $-2$ | $-4$ | Low (paper stops it) |
| **Beta$ {}^{-}$** ($\\beta^-$) | $n \\to p + e^- + \\bar{\\nu}_e$ | $+1$ | $0$ | Medium (metal foil) |
| **Beta$ {}^{+}$** ($\\beta^+$) | $p \\to n + e^+ + \\nu_e$ | $-1$ | $0$ | Medium |
| **Gamma** ($\\gamma$) | Emits high-energy photon | $0$ | $0$ | High (lead/concrete) |
| **Electron capture** | $p + e^- \\to n + \\nu_e$ | $-1$ | $0$ | — |

### Example: Alpha Decay of Uranium-238

$$^{238}_{92}\\text{U} \\to ^{234}_{90}\\text{Th} + ^4_2\\text{He}$$

Check: $A$: $238 = 234 + 4$ ✓ | $Z$: $92 = 90 + 2$ ✓

### Example: Beta$ {}^{-}$ Decay of Carbon-14

$$^{14}_6\\text{C} \\to ^{14}_7\\text{N} + ^0_{-1}e + \\bar{\\nu}_e$$

Check: $A$: $14 = 14 + 0$ ✓ | $Z$: $6 = 7 + (-1)$ ✓
      `
    },
    {
      id: 'nuclearreactions-p1-check1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the reaction $^{226}_{88}\\text{Ra} \\to ^{222}_{86}\\text{Rn} + X$, particle $X$ is:',
            options: ['A neutron', 'A beta particle', 'An alpha particle ($^4_2\\text{He}$)', 'A gamma ray'],
            correctAnswer: 2,
            explanation: '$A$: $226 = 222 + A_X$ → $A_X = 4$. $Z$: $88 = 86 + Z_X$ → $Z_X = 2$. Particle with $A = 4$, $Z = 2$ is an alpha particle ($^4_2\\text{He}$).'
          },
          {
            question: '$^{14}_6\\text{C}$ undergoes beta$ {}^{-}$ decay. The daughter nucleus is:',
            options: ['$^{14}_5\\text{B}$', '$^{14}_7\\text{N}$', '$^{10}_4\\text{Be}$', '$^{13}_6\\text{C}$'],
            correctAnswer: 1,
            explanation: 'Beta$ {}^{-}$: $Z$ increases by 1, $A$ stays the same. $Z = 6 + 1 = 7$ (nitrogen), $A = 14$. This is the basis of radiocarbon dating!'
          },
          {
            question: 'Which decay does NOT change the mass number $A$?',
            options: ['Alpha decay', 'Beta$ {}^{-}$ decay', 'Neutron emission', 'All change $A$'],
            correctAnswer: 1,
            explanation: 'Beta decay (both $\\beta^-$ and $\\beta^+$) only changes $Z$ by ±1; $A$ stays constant. Alpha decay changes $A$ by 4, and neutron emission changes $A$ by 1.'
          },
          {
            question: 'Gamma emission changes the nucleus by:',
            options: ['Reducing $A$ by 4 and $Z$ by 2', 'Increasing $Z$ by 1', 'Changing neither $A$ nor $Z$', 'Reducing $A$ by 1'],
            correctAnswer: 2,
            explanation: 'Gamma rays are photons ($^0_0\\gamma$) with zero mass number and zero charge. The nucleus loses energy but its composition (protons and neutrons) doesn\'t change. Gamma emission often follows alpha or beta decay as the daughter nucleus de-excites.'
          }
        ]
      }
    },
    {
      id: 'nuclearreactions-p1-input',
      type: 'input-boxes' as const,
      content: `
**Balancing Practice** 🧮

Complete: $^{210}_{84}\\text{Po} \\to ^A_Z\\text{Pb} + ^4_2\\text{He}$

**1)** Mass number $A$ of Pb?

**2)** Atomic number $Z$ of Pb?

**3)** How many protons does the Pb nucleus have?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['206', '82', '82'],
        hint1: '$A_{\\text{Po}} = A_{\\text{Pb}} + 4$',
        hint2: '$Z_{\\text{Po}} = Z_{\\text{Pb}} + 2$',
        hint3: 'The atomic number equals the number of protons',
        explanation: '1) $A = 210 - 4 = 206$. 2) $Z = 84 - 2 = 82$. 3) $Z$ = number of protons = 82. This is lead-206, the stable end product of the uranium-238 decay series.'
      }
    }
  ]
};
