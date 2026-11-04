export const mcatSpectraNuclearPart3Data = {
  topicSlug: 'mcat-general-chemistry-spectra-nuclear-mcat',
  sections: [
    {
      id: 'as5-intro',
      type: 'text' as const,
      content: `# Atomic Spectra & Nuclear Chemistry

**Part 3 of 3 — Mixed MCAT Review: Passage-Style Practice**

This final part uses integrated questions that combine hydrogen spectra, photoelectron spectroscopy, and nuclear chemistry — exactly as the MCAT mixes topics within a single passage.

## Quick-Reference Summary

### Bohr Model (Hydrogen)
$$E_n = -\\frac{13.6\\text{ eV}}{n^2}$$

### Half-Life Formula
$$N = N_0 \\left(\\frac{1}{2}\\right)^{n_{\\text{half-lives}}}$$
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
            yield: 'MEDIUM',
            explanation: `Total electrons $= 2+6+2+2 = 12$. The subshells from lowest to highest BE are: $3s$ $(2 e^{-})$, $2p$ $(6 e^{-})$, $2s$ $(2 e^{-})$, $1s$ $(2 e^{-})$. Configuration: $1s^2 2s^2 2p^6 3s^2 = \\text{Mg}$ ($Z=12$). Aluminum (13) and silicon (14) would add a fifth, $3p$ peak of height 1 or 2, and sulfur (16) a $3p$ peak of height 4.`
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
            yield: 'HIGH',
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
            yield: 'HIGH',
            explanation: `$\\Delta E = 13.6|1/n_f^2 - 1/n_i^2|$ eV. For $n=6 \\to 5$: $|1/25 - 1/36| = 11/900 \\approx 0.012$, so $\\Delta E \\approx 13.6 \\times 0.012 \\approx 0.17$ eV — very small because both levels are close in energy at high $n$. This is the smallest $\\Delta E$ among the choices.`
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
            question: `A patient receives 80 mg of a radiopharmaceutical with $t_{1/2} = 6$ hours. After 18 hours, what mass remains in the patient's body (ignoring biological clearance)?`,
            options: [
              `10 mg`,
              `20 mg`,
              `40 mg`,
              `5 mg`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$18\\text{ h} \\div 6\\text{ h} = 3$ half-lives. $80 \\times (1/2)^3 = 80/8 = \\mathbf{10\\text{ mg}}$.`
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
            yield: 'HIGH',
            explanation: `$\\Delta E = 13.6(1/1^2 - 1/3^2) = 13.6(1 - 1/9) = 13.6 \\times 8/9 \\approx \\mathbf{12.1\\text{ eV}}$. This is the energy of the absorbed photon (Lyman series, UV).`
          }
        ]
      }
    },
    {
      id: 'as5-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- **Spectra and PES.** Photon energy is $13.6\\,|1/n_f^2 - 1/n_i^2|$ eV in hydrogen; PES peak area counts electrons.
- **Nuclear bookkeeping.** Conserve $A$ and $Z$ in every decay, and count half-lives as $(1/2)^n$.

**Common traps**

- **Large $n$, large energy.** Levels crowd together at high $n$, so $6 \\to 5$ emits far less than $3 \\to 2$.
- **One step of a chain.** Apply each decay to the previous daughter: Ra-226 by alpha then $\\beta^-$ ends at $^{222}_{87}\\text{Fr}$.

**Next up:** the *Stoichiometry: Moles & Reactions* lesson — moles, molar mass and empirical formulas, then limiting reagents, percent yield and reaction types.
`
    }
  ]
};
