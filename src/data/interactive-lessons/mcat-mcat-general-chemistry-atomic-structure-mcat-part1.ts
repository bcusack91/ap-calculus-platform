export const mcatAtomicStructurePart1Data = {
  topicSlug: 'mcat-general-chemistry-atomic-structure-mcat',
  sections: [
    {
      id: 'as1-intro',
      type: 'text' as const,
      content: `# Atomic Structure & Periodic Trends

**Part 1 of 3 — Quantum Numbers & Electron Configuration**

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

2. **Pauli Exclusion Principle:** No two electrons in the same atom can have the same set of all four quantum numbers. Each orbital holds at most **2 electrons with opposite spins**.

3. **Hund's Rule:** Within a subshell, place one electron in each orbital before pairing. All singly-occupied orbitals have the **same spin**, which maximizes the number of parallel unpaired spins (the **multiplicity**).

### Worked Example — Counting Orbitals and Electrons in a Shell

**Problem.** Consider the $n = 3$ shell.

- **(a)** Which values of $\\ell$ are allowed, and which subshells are they?
- **(b)** How many orbitals does the shell contain?
- **(c)** How many electrons can the shell hold?
- **(d)** How many of those electrons can have $m_\\ell = +1$?

**(a) Allowed $\\ell$.** $\\ell$ runs from $0$ to $n - 1 = 2$, so $\\ell = 0, 1, 2$: the $3s$, $3p$ and $3d$ subshells. There is no $3f$.

**(b) Orbitals.** Each subshell has $2\\ell + 1$ orbitals: $1 + 3 + 5 = 9$ orbitals, which is $n^2$.

**(c) Electrons.** Pauli allows two electrons per orbital, so the 9 orbitals from (b) hold $2 \\times 9 = 18$ electrons, which is $2n^2$.

**(d) One $m_\\ell$ value.** $m_\\ell = +1$ needs $\\ell \\geq 1$, so only $3p$ and $3d$ have that orbital: 2 orbitals, holding $2 \\times 2 = 4$ electrons.

## Writing Electron Configurations — Examples

**Carbon ($Z = 6$):** $1s^2\\, 2s^2\\, 2p^2$

**Iron ($Z = 26$):** $[\\text{Ar}]\\, 3d^6\\, 4s^2$
Noble-gas shorthand: write the preceding noble gas in brackets, then continue.

**Cations:** remove electrons from the **outermost shell first**, the highest $n$, so $4s$ empties before $3d$.

### Worked Example — Iron and Its Ions

**Problem.** Neutral iron ($Z = 26$) is $[\\text{Ar}]\\, 3d^6\\, 4s^2$. It forms both $\\text{Fe}^{2+}$ and $\\text{Fe}^{3+}$.

- **(a)** Which electrons does iron lose to form $\\text{Fe}^{2+}$, and what is its configuration?
- **(b)** What is the configuration of $\\text{Fe}^{3+}$?
- **(c)** How many unpaired electrons does $\\text{Fe}^{2+}$ have?
- **(d)** Why is $\\text{Fe}^{3+}$ especially stable?

**(a) Fe²⁺.** The two $4s$ electrons leave first, because $4s$ has the highest $n$: $\\text{Fe}^{2+}$ is $[\\text{Ar}]\\, 3d^6$, not $[\\text{Ar}]\\, 3d^4\\, 4s^2$.

**(b) Fe³⁺.** Starting from $[\\text{Ar}]\\, 3d^6$ in (a), the third electron must come from $3d$: $\\text{Fe}^{3+}$ is $[\\text{Ar}]\\, 3d^5$.

**(c) Unpaired in Fe²⁺.** $\\text{Fe}^{2+}$ is $[\\text{Ar}]\\, 3d^6$ (from (a)). Hund's rule puts one electron in each of the five $3d$ orbitals before any pairs. Six electrons give five singles, then one pair: **4 unpaired electrons**.

**(d) Stability of Fe³⁺.** Its $3d^5$ from (b) is a half-filled subshell, one electron in every $d$ orbital with parallel spins, which gives extra stability.

## Paramagnetic vs. Diamagnetic

- A species with one or more **unpaired** electrons is **paramagnetic**: it is pulled into a magnetic field. $\\text{Fe}^{2+}$ (4 unpaired), O atoms and $\\text{O}_2$ are paramagnetic.
- A species with **every electron paired** is **diamagnetic**: it is weakly pushed out of a field. $\\text{Zn}^{2+}$ ($3d^{10}$), Mg ($3s^2$) and every noble gas are diamagnetic.
- To decide, write the configuration (for an ion, remove the highest-$n$ electrons first), apply Hund's rule, and look for any singly occupied orbital.

## Exceptions to Aufbau

Two common MCAT exceptions:
- **Chromium ($Z=24$):** Expected $[\\text{Ar}]\\, 3d^4\\, 4s^2$; Actual $[\\text{Ar}]\\, 3d^5\\, 4s^1$ — half-filled $3d$ is stabilized.
- **Copper ($Z=29$):** Expected $[\\text{Ar}]\\, 3d^9\\, 4s^2$; Actual $[\\text{Ar}]\\, 3d^{10}\\, 4s^1$ — fully-filled $3d$ is stabilized.

## Isotopes and Atomic Weight

- The **atomic number** $Z$ counts protons and fixes the element; the **mass number** $A$ counts protons plus neutrons, so neutrons $= A - Z$.
- **Isotopes** are atoms of one element with different numbers of neutrons, such as $^{35}\\text{Cl}$ and $^{37}\\text{Cl}$. They share $Z$, electron configuration and chemistry, but differ in mass.
- The **atomic weight** on the periodic table is the weighted average of the isotope masses, each multiplied by its natural abundance: $\\bar{m} = \\sum (\\text{fraction}_i \\times m_i)$. It lies closest to the most abundant isotope.

### Worked Example — The Atomic Weight of Chlorine

**Problem.** Natural chlorine is 75.8% $^{35}\\text{Cl}$ (34.97 u) and 24.2% $^{37}\\text{Cl}$ (36.97 u).

- **(a)** How much does each isotope contribute to the average?
- **(b)** What is chlorine's atomic weight?
- **(c)** Why is the answer closer to 35 than to 37?

**(a) Contributions.** $0.758 \\times 34.97 = 26.507$ u and $0.242 \\times 36.97 = 8.947$ u.

**(b) Weighted average.** Adding the two contributions from (a): $26.507 + 8.947 = 35.454 \\approx 35.45$ u, the value on the periodic table.

**(c) Abundance decides.** About three atoms in four are $^{35}\\text{Cl}$, so the average sits about a quarter of the way from 35 toward 37, not at the midpoint of 36.
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
            yield: 'HIGH',
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
            yield: 'HIGH',
            explanation: `Copper is an exception to Aufbau. A completely filled $3d^{10}$ subshell is extra stable, so one electron moves from $4s$ to $3d$: $[\\text{Ar}]\\, 3d^{10}\\, 4s^1$.`
          },
          {
            question: `How many unpaired electrons does $\\text{Co}^{2+}$ have? (Co: $Z=27$, $[\\text{Ar}]\\, 3d^7\\, 4s^2$)`,
            options: [`2`, `3`, `4`, `5`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `$\\text{Co}^{2+}$ loses its two $4s$ electrons first → $[\\text{Ar}]\\, 3d^7$. By Hund's rule, the first 5 electrons fill the five $3d$ orbitals singly and the last 2 pair up, leaving **3 unpaired electrons**. Answering 5 removes the two $3d$ electrons first ($[\\text{Ar}]\\, 3d^5\\, 4s^2$); 4 is the count for $3d^6$, one electron too many; 2 pairs electrons before every orbital has one.`
          },
          {
            question: `The $3d$ subshell can hold a maximum of how many electrons?`,
            options: [`2`, `6`, `10`, `14`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `$d$ orbitals have $\\ell=2$, so there are $2(2)+1=5$ orbitals, each holding 2 electrons = **10 electrons** maximum.`
          },
          {
            question: `When forming $\\text{Co}^{2+}$ from neutral Co ($[\\text{Ar}]\\, 3d^7\\, 4s^2$), which electrons are removed first?`,
            options: [
              `The two $3d$ electrons of highest energy`,
              `The two $4s$ electrons`,
              `One $3d$ and one $4s$ electron`,
              `The two electrons with $m_s = -\\tfrac{1}{2}$`
            ],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Electrons are always removed from the **outermost principal shell first**. For Co, that is $4s$ (higher $n$ than $3d$). Removing both $4s$ electrons gives $[\\text{Ar}]\\, 3d^7$. Removing $3d$ electrons first confuses filling order with removal order, and spin ($m_s$) plays no part in which electrons leave.`
          }
        ]
      }
    },
    {
      id: 'as1-worked',
      type: 'text' as const,
      content: `## Worked Example: Identifying an Element from Configuration

**Problem.** A neutral atom has the electron configuration $[\\text{Ne}]\\, 3s^2\\, 3p^4$.

- **(a)** How many electrons does the atom have?
- **(b)** Which element is it?
- **(c)** How many unpaired electrons does it have?
- **(d)** What ion does it usually form, and why?

**(a) Count electrons.** Ne has 10 electrons, and $3s^2\\, 3p^4$ adds 6 more: **16 electrons** in total.

**(b) Identify the element.** A neutral atom has as many protons as electrons, so with 16 electrons from (a), $Z = 16$: **sulfur (S)**.

**(c) Unpaired electrons.** By Hund's rule the four $3p$ electrons fill each of the three $p$ orbitals singly before one pairs: $3p$: ↑↓ ↑ ↑, so **2 unpaired electrons**.

**(d) Common ion.** S typically gains 2 electrons to form $\\text{S}^{2-}$, completing $3p^6$ and reaching the $[\\text{Ar}]$ configuration.

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
            yield: 'HIGH',
            explanation: `$[\\text{Ar}]\\, 3d^5\\, 4s^1$ is **chromium ($Z=24$)**. A half-filled $d$ subshell ($3d^5$, all spins parallel) is extra stable due to exchange energy, making it lower in energy than the Aufbau-expected $3d^4\\, 4s^2$.`
          },
          {
            question: `Which ion is isoelectronic with the noble gas neon ($Z=10$)?`,
            options: [`$\\text{Na}^+$`, `$\\text{K}^+$`, `$\\text{Cl}^-$`, `$\\text{O}^-$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `$\\text{Na}$ has 11 electrons; losing 1 gives $\\text{Na}^+$ with 10 electrons — the same as Ne. $\\text{K}^+$ and $\\text{Cl}^-$ each have 18 electrons, so they are isoelectronic with Ar, not Ne. $\\text{O}^-$ has 9 (it takes $\\text{O}^{2-}$ to reach 10).`
          },
          {
            question: `A species has the electron configuration $1s^2\\, 2s^2\\, 2p^6\\, 3s^2\\, 3p^6$. Which of the following could it be?`,
            options: [
              `$\\text{Na}^+$ or $\\text{F}^-$`,
              `$\\text{S}$ or $\\text{Ca}$`,
              `$\\text{Ne}$ or $\\text{Mg}^{2+}$`,
              `$\\text{Cl}^-$ or $\\text{K}^+$`
            ],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `This configuration has 18 electrons, the same as neutral Ar. $\\text{Cl}^-$ (17+1=18) and $\\text{K}^+$ (19−1=18) both have 18 electrons and exactly this configuration. $\\text{Na}^+$, $\\text{F}^-$, $\\text{Ne}$, and $\\text{Mg}^{2+}$ have only 10 electrons; neutral S has 16 and neutral Ca has 20.`
          },
          {
            question: `Which species is **diamagnetic** in its ground state?`,
            options: [
              `$\\text{Zn}^{2+}$, $[\\text{Ar}]\\, 3d^{10}$`,
              `$\\text{Fe}^{3+}$, $[\\text{Ar}]\\, 3d^5$`,
              `$\\text{Cu}^{2+}$, $[\\text{Ar}]\\, 3d^9$`,
              `$\\text{Na}$, $[\\text{Ne}]\\, 3s^1$`
            ],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `A diamagnetic species has every electron paired. $3d^{10}$ fills all five $d$ orbitals with pairs, so $\\text{Zn}^{2+}$ is diamagnetic. $\\text{Fe}^{3+}$ ($3d^5$) has 5 unpaired electrons, $\\text{Cu}^{2+}$ ($3d^9$) has 1, and Na ($3s^1$) has 1, so all three are paramagnetic.`
          }
        ]
      }
    },
    {
      id: 'as1-summary',
      type: 'text' as const,
      content: `## Key Takeaways — Part 1

- **Quantum number limits.** $\\ell$ runs from $0$ to $n-1$ and $m_\\ell$ from $-\\ell$ to $+\\ell$; a subshell has $2\\ell + 1$ orbitals.
- **Three filling rules.** Aufbau fills $4s$ before $3d$, Pauli allows two opposite spins per orbital, and Hund spreads electrons out.
- **Cations lose highest $n$ first.** Fe is $[\\text{Ar}]\\, 3d^6\\, 4s^2$, so $\\text{Fe}^{2+}$ is $[\\text{Ar}]\\, 3d^6$ and $\\text{Fe}^{3+}$ is $[\\text{Ar}]\\, 3d^5$.
- **Cr and Cu exceptions.** Cr is $[\\text{Ar}]\\, 3d^5\\, 4s^1$ and Cu $[\\text{Ar}]\\, 3d^{10}\\, 4s^1$: half-filled and filled $d$ are extra stable.

**Common traps**

- **Impossible quantum numbers.** $\\ell \\geq n$ or $|m_\\ell| > \\ell$ cannot occur, so a set with $n = 2$ and $\\ell = 2$ is not allowed.
- **Removing $3d$ before $4s$.** Filling order is not removal order: cations always lose the highest-$n$ ($4s$) electrons first.
- **Pairing too early.** Hund's rule fills every orbital singly first, so $3p^4$ has 2 unpaired electrons, not 0.
- **Matching charge, not electrons.** $\\text{Na}^+$ and $\\text{K}^+$ share a charge, not an electron count; $\\text{Cl}^-$ and $\\text{K}^+$ both have 18, like Ar.
`
    }
  ]
};
