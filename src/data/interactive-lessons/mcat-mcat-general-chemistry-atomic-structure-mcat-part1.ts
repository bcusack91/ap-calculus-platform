export const mcatAtomicStructurePart1Data = {
  topicSlug: 'mcat-general-chemistry-atomic-structure-mcat',
  sections: [
    {
      id: 'as1-intro',
      type: 'text' as const,
      content: `# Atomic Structure & Periodic Trends

**Part 1 of 5 — Quantum Numbers & Electron Configuration**

Atomic structure is tested in virtually every MCAT general chemistry passage. Questions focus on quantum number rules, electron configurations, and predicting properties from position on the periodic table.

## The Four Quantum Numbers

Every electron in an atom is described by a unique set of four quantum numbers:

| Symbol | Name | Allowed Values | Describes |
|--------|------|---------------|-----------|
| $n$ | Principal | $1, 2, 3, \\ldots$ | Energy level / shell |
| $\\ell$ | Angular momentum | $0$ to $n-1$ | Subshell shape ($s, p, d, f$) |
| $m_\\ell$ | Magnetic | $-\\ell$ to $+\\ell$ | Orbital orientation |
| $m_s$ | Spin | $+\\frac{1}{2}$ or $-\\frac{1}{2}$ | Electron spin |

**Subshell labels:** $\\ell = 0 \\to s$, $\\ell = 1 \\to p$, $\\ell = 2 \\to d$, $\\ell = 3 \\to f$

**Number of orbitals in a subshell:** $2\\ell + 1$
- $s$: 1 orbital; $p$: 3 orbitals; $d$: 5 orbitals; $f$: 7 orbitals

## Three Rules for Filling Orbitals

1. **Aufbau Principle:** Fill lowest-energy orbitals first.  
   Order: $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, \\ldots$

2. **Pauli Exclusion Principle:** No two electrons in the same atom can have identical quantum numbers. Each orbital holds at most **2 electrons with opposite spins**.

3. **Hund's Rule:** Within a subshell, place one electron in each orbital before pairing. All singly-occupied orbitals have the **same spin** (maximizes multiplicity).

## Writing Electron Configurations — Examples

**Carbon ($Z = 6$):** $1s^2\\, 2s^2\\, 2p^2$

**Iron ($Z = 26$):** $[\\text{Ar}]\\, 3d^6\\, 4s^2$  
Noble-gas shorthand: write the preceding noble gas in brackets, then continue.

**Fe²⁺:** Remove electrons from the **outermost shell first** (4s before 3d).  
$\\text{Fe}^{2+}: [\\text{Ar}]\\, 3d^6$

**Fe³⁺:** $[\\text{Ar}]\\, 3d^5$  
Note: $3d^5$ is a half-filled subshell — extra stability.

## Exceptions to Aufbau

Two common MCAT exceptions:
- **Chromium ($Z=24$):** Expected $[\\text{Ar}]\\, 3d^4\\, 4s^2$; Actual $[\\text{Ar}]\\, 3d^5\\, 4s^1$ — half-filled $3d$ is stabilized.
- **Copper ($Z=29$):** Expected $[\\text{Ar}]\\, 3d^9\\, 4s^2$; Actual $[\\text{Ar}]\\, 3d^{10}\\, 4s^1$ — fully-filled $3d$ is stabilized.
`
    },
    {
      id: 'as1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Quantum Numbers & Configuration — Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which set of quantum numbers is **impossible**?`,
            options: [
              `$n=2,\\ \\ell=1,\\ m_\\ell=0,\\ m_s=+\\tfrac{1}{2}$`,
              `$n=3,\\ \\ell=2,\\ m_\\ell=-2,\\ m_s=-\\tfrac{1}{2}$`,
              `$n=2,\\ \\ell=2,\\ m_\\ell=1,\\ m_s=+\\tfrac{1}{2}$`,
              `$n=4,\\ \\ell=0,\\ m_\\ell=0,\\ m_s=-\\tfrac{1}{2}$`
            ],
            correctAnswer: 2,
            explanation: `For $n=2$, $\\ell$ can only be $0$ or $1$ (values $0$ to $n-1$). $\\ell=2$ is not allowed when $n=2$. All other sets are valid.`
          },
          {
            question: `What is the correct ground-state electron configuration of $\\text{Cu}$ ($Z=29$)?`,
            options: [
              `$[\\text{Ar}]\\, 3d^9\\, 4s^2$`,
              `$[\\text{Ar}]\\, 3d^{10}\\, 4s^1$`,
              `$[\\text{Ar}]\\, 3d^8\\, 4s^3$`,
              `$[\\text{Ar}]\\, 4d^{10}\\, 4s^1$`
            ],
            correctAnswer: 1,
            explanation: `Copper is an exception to Aufbau. A completely filled $3d^{10}$ subshell is extra stable, so one electron moves from $4s$ to $3d$: $[\\text{Ar}]\\, 3d^{10}\\, 4s^1$.`
          },
          {
            question: `How many unpaired electrons does $\\text{Fe}^{3+}$ have? (Fe: $Z=26$)`,
            options: [`2`, `3`, `4`, `5`],
            correctAnswer: 3,
            explanation: `$\\text{Fe}^{3+}$ loses 3 electrons from Fe ($[\\text{Ar}]\\, 3d^6\\, 4s^2$): remove $4s^2$ first, then one $3d$ → $[\\text{Ar}]\\, 3d^5$. By Hund's rule, 5 electrons fill 5 $d$ orbitals singly → **5 unpaired electrons**.`
          },
          {
            question: `The $3d$ subshell can hold a maximum of how many electrons?`,
            options: [`2`, `6`, `10`, `14`],
            correctAnswer: 2,
            explanation: `$d$ orbitals have $\\ell=2$, so there are $2(2)+1=5$ orbitals, each holding 2 electrons = **10 electrons** maximum.`
          },
          {
            question: `When forming $\\text{Fe}^{2+}$ from neutral Fe ($[\\text{Ar}]\\, 3d^6\\, 4s^2$), which electrons are removed first?`,
            options: [
              `The two $3d$ electrons of highest energy`,
              `The two $4s$ electrons`,
              `One $3d$ and one $4s$ electron`,
              `The two electrons with $m_s = -\\tfrac{1}{2}$`
            ],
            correctAnswer: 1,
            explanation: `Electrons are always removed from the **outermost principal shell first**. For Fe, that is $4s$ (higher $n$ than $3d$). Removing both $4s$ electrons gives $[\\text{Ar}]\\, 3d^6$.`
          }
        ]
      }
    },
    {
      id: 'as1-worked',
      type: 'text' as const,
      content: `## Worked Example: Identifying an Element from Configuration

A neutral atom has the electron configuration $[\\text{Ne}]\\, 3s^2\\, 3p^4$.

**Step 1 — Count total electrons:**  
Ne has 10 electrons. Add $3s^2\\, 3p^4 = 6$ more → **16 total electrons**.

**Step 2 — Identify the element:**  
$Z=16$ is **sulfur (S)**.

**Step 3 — Determine unpaired electrons:**  
The $3p^4$ configuration: by Hund's rule, fill each of the 3 p-orbitals with one electron first → $3p$: ↑↓ ↑ ↑ → **2 unpaired electrons**.

**Step 4 — Common ion:**  
S typically gains 2 electrons to form $\\text{S}^{2-}$, achieving the $[\\text{Ar}]$ configuration ($3p^6$).

### MCAT Trap: $4s$ vs. $3d$ Removal Order

Students often think $3d$ electrons (lower $n$) are removed before $4s$ when forming cations. This is **wrong**. The **outermost shell** electrons are always removed first (highest $n$). Once the $4s$ electrons are gone, the $3d$ orbitals become lower in energy than $4s$ due to reduced shielding.
`
    },
    {
      id: 'as1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Configuration Application Questions** 🎯`,
      exercise: {
        questions: [
          {
            question: `A neutral atom has the configuration $[\\text{Ar}]\\, 3d^5\\, 4s^1$. What element is this, and why is this configuration preferred over $[\\text{Ar}]\\, 3d^4\\, 4s^2$?`,
            options: [
              `Vanadium; lower energy with a half-filled $4s$`,
              `Chromium; half-filled $3d$ provides extra stability`,
              `Manganese; fully-filled subshells are preferred`,
              `Iron; the $4s$ subshell is always filled last`
            ],
            correctAnswer: 1,
            explanation: `$[\\text{Ar}]\\, 3d^5\\, 4s^1$ is **chromium ($Z=24$)**. A half-filled $d$ subshell ($3d^5$, all spins parallel) is extra stable due to exchange energy, making it lower in energy than the Aufbau-expected $3d^4\\, 4s^2$.`
          },
          {
            question: `Which ion is isoelectronic with the noble gas neon ($Z=10$)?`,
            options: [`$\\text{Na}^+$`, `$\\text{Mg}^+$`, `$\\text{Al}^{2+}$`, `$\\text{O}^-$`],
            correctAnswer: 0,
            explanation: `$\\text{Na}$ has 11 electrons; losing 1 gives $\\text{Na}^+$ with 10 electrons — the same as Ne. $\\text{Al}^{2+}$ has 11 electrons (not 10). $\\text{O}^-$ has 9 electrons (not 10). $\\text{Mg}^+$ has 11 electrons.`
          },
          {
            question: `A species has the electron configuration $1s^2\\, 2s^2\\, 2p^6\\, 3s^2\\, 3p^6$. Which of the following could it be?`,
            options: [
              `$\\text{Ar}$ (neutral)`,
              `$\\text{Cl}^-$`,
              `$\\text{K}^+$`,
              `Both B and C`
            ],
            correctAnswer: 3,
            explanation: `This configuration has 18 electrons. Neutral Ar has 18 electrons but this is also the configuration of $\\text{Cl}^-$ (17+1=18) and $\\text{K}^+$ (19−1=18). Both B and C have 18 electrons and the same configuration.`
          }
        ]
      }
    },
    {
      id: 'as1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **$\\ell$ ranges from $0$ to $n-1$;** $m_\\ell$ ranges from $-\\ell$ to $+\\ell$. Impossible combos are a common MCAT trap.
- **Aufbau order:** $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p \\ldots$ Note $4s$ fills before $3d$.
- **Hund's rule:** maximize unpaired electrons within a subshell.
- **Cation formation:** remove outermost-shell (highest-$n$) electrons first, always.
- **Cr ($3d^5\\, 4s^1$) and Cu ($3d^{10}\\, 4s^1$):** exceptions due to stability of half-filled and fully-filled $d$ subshells.
- **Isoelectronic species** share the same electron configuration; differ in nuclear charge.
`
    }
  ]
};
