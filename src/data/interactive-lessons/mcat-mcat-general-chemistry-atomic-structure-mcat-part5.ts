export const mcatAtomicStructurePart5Data = {
  topicSlug: 'mcat-general-chemistry-atomic-structure-mcat',
  sections: [
    {
      id: 'as5-intro',
      type: 'text' as const,
      content: `# Atomic Structure & Periodic Trends

**Part 5 of 5 — Mixed MCAT Review: Passage-Style Practice**

This final part uses integrated questions that combine quantum numbers, periodic trends, spectra, and nuclear chemistry — exactly as the MCAT mixes topics within a single passage.

## Quick-Reference Summary

### Quantum Number Rules
- $n$: positive integer $\\geq 1$
- $\\ell$: $0$ to $n-1$
- $m_\\ell$: $-\\ell$ to $+\\ell$
- $m_s$: $\\pm 1/2$ only

### Aufbau Exceptions
| Element | Expected | Actual |
|---------|----------|--------|
| Cr ($Z=24$) | $[\\text{Ar}]\\, 3d^4\\, 4s^2$ | $[\\text{Ar}]\\, 3d^5\\, 4s^1$ |
| Cu ($Z=29$) | $[\\text{Ar}]\\, 3d^9\\, 4s^2$ | $[\\text{Ar}]\\, 3d^{10}\\, 4s^1$ |

### Periodic Trend Directions

$$\\text{Atomic radius: } \\nearrow \\text{ down-left}$$
$$\\text{IE, EN: } \\nearrow \\text{ up-right}$$

### Half-Life Formula
$$N = N_0 \\left(\\frac{1}{2}\\right)^{n_{\\text{half-lives}}}$$

### Bohr Model (Hydrogen)
$$E_n = -\\frac{13.6\\text{ eV}}{n^2}$$
`
    },
    {
      id: 'as5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Integrated MCAT-Style Questions — Set 1** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher uses PES to analyze element Q and obtains 4 peaks. Ordered by increasing binding energy, the relative heights are 2, 6, 2, 2. Identify element Q.`,
            options: [
              `Magnesium (Mg, $Z=12$)`,
              `Aluminum (Al, $Z=13$)`,
              `Silicon (Si, $Z=14$)`,
              `Sulfur (S, $Z=16$)`
            ],
            correctAnswer: 0,
            explanation: `Total electrons $= 2+6+2+2 = 12$. The subshells from lowest to highest BE are: $3s$ $(2 e^{-})$, $2p$ $(6 e^{-})$, $2s$ $(2 e^{-})$, $1s$ $(2 e^{-})$. Configuration: $1s^2 2s^2 2p^6 3s^2 = \\text{Mg}$ ($Z=12$).`
          },
          {
            question: `Element X has a first ionization energy of 900 kJ/mol and a second ionization energy of 1{,}760 kJ/mol. Its third ionization energy is 14{,}850 kJ/mol. In which group is X?`,
            options: [
              `Group IA`,
              `Group IIA`,
              `Group IIIA`,
              `Group IVA`
            ],
            correctAnswer: 1,
            explanation: `The large jump is between the 2nd and 3rd ionization energies, meaning the first two electrons are valence electrons and the 3rd is a core electron. X has **2 valence electrons** → **Group IIA**.`
          },
          {
            question: `Radium-226 ($^{226}_{88}\\text{Ra}$) undergoes alpha decay. The daughter nucleus then undergoes beta-minus decay. What is the final product?`,
            options: [
              `$^{222}_{86}\\text{Rn}$`,
              `$^{218}_{84}\\text{Po}$`,
              `$^{222}_{87}\\text{Fr}$`,
              `$^{226}_{89}\\text{Ac}$`
            ],
            correctAnswer: 2,
            explanation: `Step 1 — Alpha decay of Ra-226: $A-4=222$, $Z-2=86$. Product: $^{222}_{86}\\text{Rn}$. Step 2 — Beta-minus of Rn-222: $A$ unchanged $= 222$, $Z+1 = 87$. $Z=87$ is **Francium (Fr)**: $^{222}_{87}\\text{Fr}$.`
          },
          {
            question: `In a hydrogen emission spectrum, which transition emits the **lowest energy** photon?`,
            options: [
              `$n=2 \\to n=1$`,
              `$n=5 \\to n=1$`,
              `$n=6 \\to n=5$`,
              `$n=3 \\to n=2$`
            ],
            correctAnswer: 2,
            explanation: `$\\Delta E = 13.6|1/n_f^2 - 1/n_i^2|$ eV. For $n=6 \\to 5$: $|1/25 - 1/36| = |11/900| \\approx 0.012$ eV — very small because both levels are close in energy at high $n$. This is the smallest $\\Delta E$ among the choices.`
          },
          {
            question: `A patient receives 80 mg of a radiopharmaceutical with $t_{1/2} = 6$ hours. After 18 hours, what mass remains in the patient's body (ignoring biological clearance)?`,
            options: [
              `10 mg`,
              `20 mg`,
              `40 mg`,
              `5 mg`
            ],
            correctAnswer: 0,
            explanation: `$18\\text{ h} \\div 6\\text{ h} = 3$ half-lives. $80 \\times (1/2)^3 = 80/8 = \\mathbf{10\\text{ mg}}$.`
          }
        ]
      }
    },
    {
      id: 'as5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Integrated MCAT-Style Questions — Set 2** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which of the following correctly ranks $\\text{Na}^+$, $\\text{F}^-$, and $\\text{O}^{2-}$ by **decreasing** ionic radius?`,
            options: [
              `$\\text{Na}^+ > \\text{F}^- > \\text{O}^{2-}$`,
              `$\\text{O}^{2-} > \\text{F}^- > \\text{Na}^+$`,
              `$\\text{F}^- > \\text{O}^{2-} > \\text{Na}^+$`,
              `$\\text{Na}^+ > \\text{O}^{2-} > \\text{F}^-$`
            ],
            correctAnswer: 1,
            explanation: `All three are isoelectronic (10 electrons). Radius decreases as $Z$ increases (same electron count pulled harder). $Z$: O=8 < F=9 < Na=11. So radius order is $\\text{O}^{2-} > \\text{F}^- > \\text{Na}^+$.`
          },
          {
            question: `An electron in a hydrogen atom absorbs a photon and moves from $n=1$ to $n=3$. The energy of the absorbed photon is closest to:`,
            options: [
              `$10.2$ eV`,
              `$12.1$ eV`,
              `$13.6$ eV`,
              `$3.4$ eV`
            ],
            correctAnswer: 1,
            explanation: `$\\Delta E = 13.6(1/1^2 - 1/3^2) = 13.6(1 - 1/9) = 13.6 \\times 8/9 \\approx \\mathbf{12.1\\text{ eV}}$. This is the energy of the absorbed photon (Lyman series, UV).`
          },
          {
            question: `Manganese (Mn, $Z=25$) has the ground-state configuration $[\\text{Ar}]\\, 3d^5\\, 4s^2$. How many unpaired electrons does $\\text{Mn}^{2+}$ have?`,
            options: [
              `3`,
              `4`,
              `5`,
              `6`
            ],
            correctAnswer: 2,
            explanation: `$\\text{Mn}^{2+}$ loses 2 electrons from $4s$ first: $[\\text{Ar}]\\, 3d^5$. By Hund's rule, all 5 $3d$ orbitals are singly occupied with parallel spins → **5 unpaired electrons**.`
          },
          {
            question: `Which correctly identifies a trend EXCEPTION across Period 3 for first ionization energies?`,
            options: [
              `$\\text{IE}_1(\\text{Na}) > \\text{IE}_1(\\text{Mg})$ because Na is larger`,
              `$\\text{IE}_1(\\text{Al}) > \\text{IE}_1(\\text{Mg})$ because Al has higher Z`,
              `$\\text{IE}_1(\\text{Mg}) > \\text{IE}_1(\\text{Al})$ because Al removes a $3p$ electron shielded by the $3s$ pair`,
              `$\\text{IE}_1(\\text{S}) > \\text{IE}_1(\\text{P})$ because S has a higher $Z_{eff}$`
            ],
            correctAnswer: 2,
            explanation: `The Mg → Al exception: Mg ($3s^2$) has a full $3s$ subshell; Al ($3s^2\\, 3p^1$) removes a $3p$ electron that is shielded by the $3s$ pair and is slightly higher in energy than $3s$ → **lower IE for Al than Mg** despite higher Z. Option C correctly states this.`
          }
        ]
      }
    },
    {
      id: 'as5-summary',
      type: 'text' as const,
      content: `## Final Review: Atomic Structure High-Yield Points

**Most tested MCAT topics in this module:**

1. **Quantum number validity** — check $\\ell \\leq n-1$ and $|m_\\ell| \\leq \\ell$
2. **Electron configurations of ions** — remove highest-$n$ electrons first
3. **Unpaired electrons** — apply Hund's rule to the $d$ subshell; know Cr and Cu exceptions
4. **IE successive jumps** → identify element's group
5. **Periodic trends** — Mg > Al and P > S in IE are common distractors
6. **Isoelectronic series** — same electrons, size decreases as $Z$ increases
7. **PES spectrum reading** — peak area = electron count, lowest BE = valence
8. **Balancing nuclear equations** — conserve $A$ and $Z$
9. **Half-life countdown** — $(1/2)^n$ for $n$ half-lives elapsed
10. **Bohr model transitions** — higher $n$ difference = higher energy photon (for same $n_f$)
`
    }
  ]
};
