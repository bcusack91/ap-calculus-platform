export const mcatGenChemPart1Data = {
  topicSlug: 'mcat-general-chemistry-mcat',
  sections: [
    {
      id: 'gc1-intro',
      type: 'text' as const,
      content: `# General Chemistry for the MCAT

**Part 1 of 7 — Atomic Structure & Periodic Trends**

### Atomic Structure: What Actually Drives Reactivity

The MCAT expects you to connect **electron structure** to bonding, acidity/basicity, and redox behavior.

- **Quantum numbers**:
  - $n$: principal shell (energy level)
  - $l$: subshell shape (0=s, 1=p, 2=d, 3=f)
  - $m_l$: orbital orientation ($-l$ to $+l$)
  - $m_s$: spin ($\\pm 1/2$)
- **Pauli exclusion**: no two electrons in an atom can have the same four quantum numbers.
- **Hund's rule**: degenerate orbitals fill singly first to minimize electron-electron repulsion.
- **Aufbau principle**: lower-energy orbitals fill first, with known transition-metal exceptions.

### Effective Nuclear Charge and Shielding

Periodic trends are best explained by **effective nuclear charge** ($Z_{eff}$):

$$Z_{eff} = Z - S$$

- $Z$ = number of protons
- $S$ = shielding from core electrons

Across a period, $Z_{eff}$ increases strongly, so valence electrons are held tighter.

### Periodic Trends You Must Reason, Not Memorize

| Property | Across Period (left -> right) | Down Group (top -> bottom) |
|----------|-------------------------------|-----------------------------|
| Atomic radius | Decreases | Increases |
| First ionization energy | Increases (with small exceptions) | Decreases |
| Electronegativity | Increases | Decreases |
| Metallic character | Decreases | Increases |

### High-Yield Exceptions and Ionization Logic

- **Cr**: $[Ar]3d^5 4s^1$
- **Cu**: $[Ar]3d^{10} 4s^1$
- For transition metal cations, remove **4s before 3d**.
  - Example: $Fe$: $[Ar]3d^6 4s^2$
  - $Fe^{2+}$: $[Ar]3d^6$`
    },
    {
      id: 'gc1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Atomic Structure** 🎯`,
      exercise: {
        questions: [
          {
            question: `The electron configuration of $\\text{Cr}$ (Z=24) is:`,
            options: [`$[\\text{Ar}]\\,3d^5\\,4s^1$ — half-filled d subshell is more stable`, `$[\\text{Ar}]\\,3d^4\\,4s^2$ — following standard filling order`, `$[\\text{Ar}]\\,3d^6$ — all electrons in d orbitals`, `$[\\text{Ar}]\\,3d^3\\,4s^2\\,4p^1$`],
            correctAnswer: 0,
            explanation: `Cr is an exception: a half-filled 3d subshell ($3d^5\\,4s^1$) is more stable than $3d^4\\,4s^2$. Cu has a similar exception ($3d^{10}\\,4s^1$).`
          },
          {
            question: `Which has the LARGEST atomic radius?`,
            options: [`K`, `Ca`, `Br`, `Kr`],
            correctAnswer: 0,
            explanation: `K is furthest left and lowest in the period. Across a period, atomic radius decreases (more protons pulling electrons in). K > Ca > Br > Kr.`
          },
          {
            question: `An element has a large jump between its 2nd and 3rd ionization energies. It is most likely in Group:`,
            options: [`IIA (2)`, `IIIA (13)`, `IA (1)`, `IVA (14)`],
            correctAnswer: 0,
            explanation: `Group IIA has 2 valence electrons. Removing the 3rd requires breaking into a noble gas core — huge energy jump.`
          },
          {
            question: `Which set of quantum numbers is NOT allowed for an electron?`,
            options: [`$n=3, l=2, m_l=-1, m_s=+1/2$`, `$n=2, l=2, m_l=0, m_s=-1/2$`, `$n=4, l=1, m_l=+1, m_s=-1/2$`, `$n=1, l=0, m_l=0, m_s=+1/2$`],
            correctAnswer: 1,
            explanation: `For a given $n$, allowed $l$ values are 0 to $n-1$. If $n=2$, then $l$ can only be 0 or 1. So $l=2$ is impossible.`
          },
          {
            question: `Compared with neutral Fe, the electron configuration of $Fe^{3+}$ is:`,
            options: [`$[Ar]3d^5$`, `$[Ar]3d^3$`, `$[Ar]4s^1 3d^4$`, `$[Ar]4s^2 3d^3$`],
            correctAnswer: 0,
            explanation: `Neutral Fe is $[Ar]3d^6 4s^2$. Remove electrons from 4s first (2), then one from 3d, giving $[Ar]3d^5$.`
          }
        ]
      }
    },
    {
      id: 'gc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Know quantum number rules cold; MCAT loves invalid-set questions.
- Explain trends with **$Z_{eff}$ and shielding**, not memorized arrows.
- Practice exceptions (Cr, Cu) and cation electron removal from transition metals.
- Use ionization-energy jump logic to infer valence electron count.`
    }
  ]
};
