export const mcatAtomicStructurePart3Data = {
  topicSlug: 'mcat-general-chemistry-atomic-structure-mcat',
  sections: [
    {
      id: 'as5-intro',
      type: 'text' as const,
      content: `# Atomic Structure & Periodic Trends

**Part 3 of 3 — Mixed MCAT Review: Passage-Style Practice**

This final part uses integrated questions that combine quantum numbers, electron configurations, and periodic trends — exactly as the MCAT mixes topics within a single passage.

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

- Atomic radius increases toward the bottom-left of the table (down a group, leftward across a period)
- Ionization energy and electronegativity increase toward the top-right (up a group, rightward across a period)
`
    },
    {
      id: 'as5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Integrated MCAT-Style Questions — Set 1** 🎯`,
      exercise: {
        questions: [
          {
            question: `Element X has a first ionization energy of 900 kJ/mol and a second ionization energy of 1,760 kJ/mol. Its third ionization energy is 14,850 kJ/mol. In which group is X?`,
            options: [
              `Group IA`,
              `Group IIA`,
              `Group IIIA`,
              `Group IVA`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The large jump is between the 2nd and 3rd ionization energies, meaning the first two electrons are valence electrons and the 3rd is a core electron. X has **2 valence electrons** → **Group IIA**.`
          },
          {
            question: `Which of the following correctly ranks $\\text{Na}^+$, $\\text{F}^-$, and $\\text{O}^{2-}$ by **decreasing** ionic radius?`,
            options: [
              `$\\text{Na}^+ > \\text{F}^- > \\text{O}^{2-}$`,
              `$\\text{O}^{2-} > \\text{F}^- > \\text{Na}^+$`,
              `$\\text{F}^- > \\text{O}^{2-} > \\text{Na}^+$`,
              `$\\text{Na}^+ > \\text{O}^{2-} > \\text{F}^-$`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `All three are isoelectronic (10 electrons). Radius decreases as $Z$ increases (same electron count pulled harder). $Z$: O=8 < F=9 < Na=11. So radius order is $\\text{O}^{2-} > \\text{F}^- > \\text{Na}^+$.`
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
            question: `Manganese (Mn, $Z=25$) has the ground-state configuration $[\\text{Ar}]\\, 3d^5\\, 4s^2$. How many unpaired electrons does $\\text{Mn}^{2+}$ have?`,
            options: [
              `3`,
              `4`,
              `5`,
              `6`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$\\text{Mn}^{2+}$ loses 2 electrons from $4s$ first: $[\\text{Ar}]\\, 3d^5$. By Hund's rule, all 5 $3d$ orbitals are singly occupied with parallel spins → **5 unpaired electrons**.`
          },
          {
            question: `Which correctly identifies a trend EXCEPTION across Period 3 for first ionization energies?`,
            options: [
              `$\\text{IE}_1(\\text{Na}) > \\text{IE}_1(\\text{Mg})$ because sodium's lone $3s$ electron is held tighter`,
              `$\\text{IE}_1(\\text{Al}) > \\text{IE}_1(\\text{Mg})$ because Al's added proton outweighs any shielding`,
              `$\\text{IE}_1(\\text{Mg}) > \\text{IE}_1(\\text{Al})$ because Al's $3p$ is shielded by $3s$`,
              `$\\text{IE}_1(\\text{S}) > \\text{IE}_1(\\text{P})$ because sulfur's $3p$ electrons are all unpaired`
            ],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The Mg → Al exception: Mg ($3s^2$) has a full $3s$ subshell; Al ($3s^2\\, 3p^1$) removes a $3p$ electron that is shielded by the $3s$ pair and is slightly higher in energy than $3s$ → **lower IE for Al than Mg** despite higher Z. The statement $\\text{IE}_1(\\text{Mg}) > \\text{IE}_1(\\text{Al})$ correctly states this. The other inequalities point the wrong way: Na's $\\text{IE}_1$ is below Mg's, Al's is below Mg's, and S's is below P's because S removes a PAIRED $3p$ electron.`
          }
        ]
      }
    },
    {
      id: 'as5-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 3

- **Quantum numbers and ions.** Check $\\ell \\leq n-1$ and $|m_\\ell| \\leq \\ell$, fill by Aufbau and Hund, and remove highest-$n$ electrons first.
- **Trends from $Z_{\\text{eff}}$.** Radius grows down-left, IE and EN up-right; an isoelectronic series shrinks as $Z$ rises.

**Common traps**

- **Smooth IE trends.** $\\text{IE}_1$ is higher for Mg than Al and for P than S, and distractors bank on a smooth trend.
- **Counting after the jump.** The group is the number of electrons removed BEFORE the big IE jump, not after it.

**Next up:** the *Atomic Spectra & Nuclear Chemistry* lesson — emission spectra and the Bohr model, the photoelectric effect and photoelectron spectroscopy, then radioactive decay and half-life.
`
    }
  ]
};
