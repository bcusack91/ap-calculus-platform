export const mcatGenChemPart1Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc1-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 1 of 7 — Atomic Structure & Periodic Trends**

### Atomic Structure

- **Quantum numbers**: $n$ (shell), $l$ (subshell: 0=s, 1=p, 2=d, 3=f), $m_l$ (-l to +l), $m_s$ ($\\pm 1/2$)
- **Electron configuration**: Fill in order of increasing energy (1s, 2s, 2p, 3s, 3p, 4s, 3d...)
- **Aufbau principle**: Electrons fill lowest energy orbitals first
- **Hund's rule**: Electrons occupy degenerate orbitals singly before pairing
- **Pauli exclusion**: No two electrons can share all four quantum numbers

### Periodic Trends (HIGH YIELD!)

| Property | Across Period → | Down Group ↓ |
|----------|----------------|--------------|
| Atomic radius | Decreases | Increases |
| Ionization energy | Increases | Decreases |
| Electronegativity | Increases | Decreases |
| Electron affinity | More negative | Less negative |

### MCAT Trap

Transition metals: 4s electrons are removed FIRST despite being filled first. $\\text{Fe}^{2+}$: lose 4s$^2$, keep 3d$^6$.`
    },
    {
      id: 'gc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Atomic Structure** 🎯',
      exercise: {
        questions: [
          {
            question: 'The electron configuration of $\\text{Cr}$ (Z=24) is:',
            options: ['$[\\text{Ar}]\\,3d^5\\,4s^1$ — half-filled d subshell is more stable', '$[\\text{Ar}]\\,3d^4\\,4s^2$ — following standard filling order', '$[\\text{Ar}]\\,3d^6$ — all electrons in d orbitals', '$[\\text{Ar}]\\,3d^3\\,4s^2\\,4p^1$'],
            correctAnswer: 0,
            explanation: 'Cr is an exception: a half-filled 3d subshell ($3d^5\\,4s^1$) is more stable than $3d^4\\,4s^2$. Cu has a similar exception ($3d^{10}\\,4s^1$).'
          },
          {
            question: 'Which has the LARGEST atomic radius?',
            options: ['K', 'Ca', 'Br', 'Kr'],
            correctAnswer: 0,
            explanation: 'K is furthest left and lowest in the period. Across a period, atomic radius decreases (more protons pulling electrons in). K > Ca > Br > Kr.'
          },
          {
            question: 'An element has a large jump between its 2nd and 3rd ionization energies. It is most likely in Group:',
            options: ['IIA (2)', 'IIIA (13)', 'IA (1)', 'IVA (14)'],
            correctAnswer: 0,
            explanation: 'Group IIA has 2 valence electrons. Removing the 3rd requires breaking into a noble gas core — huge energy jump.'
          }
        ]
      }
    },
    {
      id: 'gc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know quantum numbers cold — the MCAT loves "which set of quantum numbers is impossible?"
- Periodic trends: radius ↑ down/left, IE ↑ up/right, EN ↑ up/right
- Exceptions: Cr ($3d^5\\,4s^1$), Cu ($3d^{10}\\,4s^1$)
- Transition metal ions: remove 4s first`
    }
  ]
};
