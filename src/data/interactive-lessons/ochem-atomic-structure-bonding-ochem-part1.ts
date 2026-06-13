export const oChemAtomicBondingPart1Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi1-intro',
      type: 'text' as const,
      content: `
## Atomic Orbitals & Electron Configuration

**Part 1 of 7**

Every reaction you will draw in Organic Chemistry is, underneath the curved arrows, a story about **electrons moving between orbitals**. Before you can predict where a nucleophile attacks or why a carbocation rearranges, you need a physically honest picture of where electrons actually live around an atom. That picture is the **atomic orbital**.

An orbital is not a tiny planetary orbit. It is a **region of space** — described by a wavefunction $\\psi$ — where there is roughly a 90% probability of finding an electron. The square of the wavefunction, $\\psi^2$, gives the electron *probability density*. This matters for orgo because **bonding is orbital overlap**: a $\\sigma$ bond forms where two orbitals share electron density between two nuclei, and the *shape* of the orbital dictates the *direction* a bond can point.

The orbitals you will use constantly are:

- **$s$ orbitals** — spherical, no directional preference. One per shell.
- **$p$ orbitals** — two-lobed (dumbbell-shaped), aligned along the $x$, $y$, and $z$ axes. Three per shell from $n = 2$ upward.

For carbon and its neighbors (N, O, F), the $1s$, $2s$, and three $2p$ orbitals are the entire toolkit. Everything else in this course is built from how those five orbitals are filled, mixed, and overlapped.
      `
    },
    {
      id: 'atomi1-quantum',
      type: 'text' as const,
      content: `
### Quantum Numbers: The Orbital's Address

Each orbital is specified by a set of quantum numbers, and three rules govern how electrons fill them. You do not need to solve the Schrödinger equation, but you must be fluent with the *bookkeeping*, because it tells you the number of valence electrons — and that number is the single most important fact about an atom in orgo.

| Quantum number | Symbol | Tells you | Allowed values |
|----------------|--------|-----------|----------------|
| Principal | $n$ | Shell / energy level / size | $1, 2, 3, \\ldots$ |
| Angular momentum | $\\ell$ | Subshell shape ($s, p, d$) | $0$ to $n-1$ |
| Magnetic | $m_\\ell$ | Spatial orientation | $-\\ell$ to $+\\ell$ |
| Spin | $m_s$ | Electron spin | $+\\tfrac{1}{2}$ or $-\\tfrac{1}{2}$ |

Three filling rules:

1. **Aufbau principle** — fill the lowest-energy orbital available first ($1s$ before $2s$ before $2p$).
2. **Pauli exclusion principle** — no two electrons share all four quantum numbers, so any orbital holds **at most two** electrons, and they must have opposite spin.
3. **Hund's rule** — within a set of degenerate (equal-energy) orbitals like the three $2p$, electrons occupy them **singly with parallel spins** before any orbital is doubled up.

Hund's rule is why carbon, in its ground state, has **two unpaired electrons** in separate $2p$ orbitals — a fact we will need to confront the moment we ask how carbon makes four bonds.
      `
    },
    {
      id: 'atomi1-carbon',
      type: 'text' as const,
      content: `
### Worked Example: The Ground-State Configuration of Carbon

Carbon has **6 electrons**. Applying Aufbau, Pauli, and Hund in order:

- $1s^2$ — the first two electrons pair up in the lowest orbital (these are **core** electrons, chemically inert).
- $2s^2$ — the next two fill and pair the $2s$.
- $2p^2$ — the final two electrons enter the $2p$ set. By **Hund's rule** they go into *two different* $2p$ orbitals with parallel spin, not into the same one.

So the full configuration is $1s^2\\,2s^2\\,2p^2$, often written $[\\text{He}]\\,2s^2\\,2p^2$.

The **valence shell** is $n = 2$: that is $2s^2\\,2p^2$, a total of **4 valence electrons**. Those four electrons are what carbon uses to bond.

Here is the puzzle that motivates the rest of this unit. The ground-state orbital diagram shows a filled $2s$ pair and only **two unpaired** $2p$ electrons:

$2s\\!\\uparrow\\!\\downarrow \\quad 2p\\!\\uparrow \\;\\; 2p\\!\\uparrow \\;\\; 2p\\;\\;\\;$

Reading this literally, carbon should form only **2 bonds** (one per unpaired electron) — but methane is $\\text{CH}_4$, with **4** identical bonds. Resolving that contradiction is exactly what *promotion* and *hybridization* (Part 3) accomplish. For now, hold onto the key count: **carbon brings 4 valence electrons to the table.**

> **Why carbon is special:** With 4 valence electrons, carbon sits exactly halfway to a full octet. It has no strong drive to either lose electrons (like a metal) or grab them (like a halogen), so it overwhelmingly **shares** them in covalent bonds — and it can do so with up to four other atoms, including other carbons. That is the structural root of all of organic chemistry's diversity.
      `
    },
    {
      id: 'atomi1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Orbitals & Filling Rules
      `,
      exercise: {
        questions: [
          {
            question: 'Carbon\'s ground-state $2p$ electrons occupy two separate orbitals with parallel spins rather than pairing in one orbital. Which principle requires this?',
            options: [
              'The Pauli exclusion principle',
              'The Aufbau principle',
              "Hund's rule of maximum multiplicity",
              'The Heisenberg uncertainty principle'
            ],
            correctAnswer: 2,
            explanation: "Hund's rule says that within a set of degenerate orbitals (the three 2p), electrons spread out singly with parallel spins before pairing, because pairing two electrons in one orbital costs electron-electron repulsion energy. The trap is Pauli: Pauli only forbids two electrons from sharing all four quantum numbers (it sets the max of 2 per orbital) — it does not, by itself, say WHY they prefer separate orbitals."
          },
          {
            question: 'What does the square of the wavefunction, $\\psi^2$, physically represent for an electron in an orbital?',
            options: [
              'The exact path the electron follows around the nucleus',
              'The probability density of finding the electron at a given point in space',
              'The total energy of the electron',
              'The number of electrons the orbital can hold'
            ],
            correctAnswer: 1,
            explanation: 'The wavefunction itself ($\\psi$) has no direct physical meaning, but its square ($\\psi^2$) gives the probability density — the relative likelihood of finding the electron at each point. The trap is the planetary-orbit picture (option 1): orbitals are probability clouds, not trajectories. This is exactly why we speak of overlap and density rather than colliding particles when bonds form.'
          },
          {
            question: 'How many valence electrons does a neutral carbon atom have, and in which shell do they reside?',
            options: [
              '6 valence electrons in the n = 1 shell',
              '2 valence electrons in the n = 2 shell',
              '4 valence electrons in the n = 2 shell',
              '4 valence electrons in the n = 1 shell'
            ],
            correctAnswer: 2,
            explanation: 'Carbon is $1s^2\\,2s^2\\,2p^2$. The valence shell is the highest principal level, $n = 2$, containing $2s^2\\,2p^2$ = 4 electrons. The trap is option 1, which counts ALL 6 electrons; the $1s^2$ pair is core, not valence, and is buried too deep to participate in bonding.'
          }
        ]
      }
    },
    {
      id: 'atomi1-octet',
      type: 'text' as const,
      content: `
### The Octet Rule and Why It Works

Second-row elements (C, N, O, F) are most stable when surrounded by **eight valence electrons** — a filled $2s$ plus filled $2p$ set, the configuration of neon. This is the **octet rule**, and it is the reason Lewis structures (Part 2) are drawn the way they are.

The octet rule has a hard physical ceiling for the second row: there are only **four** valence orbitals available ($2s$ + three $2p$), and each holds two electrons, so $4 \\times 2 = 8$ is the maximum. This is why carbon, nitrogen, oxygen, and fluorine **cannot** exceed an octet — they have no $2d$ orbitals to expand into. Memorize this: an "expanded octet" on carbon is always a mistake.

Counting toward the octet, every bond and lone pair contributes:

- Each **shared (bonding) pair** counts as 2 electrons toward the octet of **both** atoms it connects.
- Each **lone pair** counts as 2 electrons toward only the atom that owns it.

Carbon reaching an octet with four single bonds (as in $\\text{CH}_4$) shares $4 \\times 2 = 8$ electrons — a complete octet, no lone pairs. Nitrogen, with 5 valence electrons, typically forms 3 bonds plus 1 lone pair ($3\\times2 + 2 = 8$); oxygen, with 6, forms 2 bonds plus 2 lone pairs ($2\\times2 + 4 = 8$). These "default" bonding patterns — **C makes 4, N makes 3, O makes 2, H and halogens make 1** — are the scaffolding you will lean on for every structure in this course.
      `
    },
    {
      id: 'atomi1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Octet Rule
      `,
      exercise: {
        questions: [
          {
            question: 'A student draws a carbon atom with five bonds in a proposed structure. Why is this structure necessarily wrong?',
            options: [
              'Carbon prefers ionic bonding over covalent bonding',
              'Second-row elements have only four valence orbitals, so carbon cannot hold more than eight bonding electrons (four bonds)',
              "Carbon's electronegativity is too low to support five bonds",
              'Five bonds would violate the Aufbau principle'
            ],
            correctAnswer: 1,
            explanation: 'Carbon has exactly four valence orbitals ($2s$ + three $2p$), capping it at 8 valence electrons = 4 bonds. A fifth bond would require a 5th orbital that does not exist in the n = 2 shell. The trap (option 1) confuses bonding TYPE with bonding CAPACITY — the issue is orbital count, not ionic vs. covalent.'
          },
          {
            question: 'Neutral nitrogen has 5 valence electrons. In a neutral, octet-satisfied molecule like ammonia ($\\text{NH}_3$), how many bonds and lone pairs does nitrogen carry?',
            options: [
              '4 bonds and 0 lone pairs',
              '2 bonds and 2 lone pairs',
              '3 bonds and 1 lone pair',
              '5 bonds and 0 lone pairs'
            ],
            correctAnswer: 2,
            explanation: 'To reach 8 electrons, nitrogen forms 3 bonds (3 x 2 = 6 shared electrons) plus 1 lone pair (2 electrons): 6 + 2 = 8. This "N makes 3" default is worth memorizing. The trap is forcing nitrogen to mimic carbon with 4 bonds — that requires a positive formal charge (as in ammonium), which is not the neutral case asked about here.'
          },
          {
            question: 'Why can chlorine show an expanded octet (more than 8 electrons) in some compounds, while fluorine never can?',
            options: [
              'Fluorine is less electronegative than chlorine',
              'Chlorine is in the third row and has accessible d orbitals, while fluorine is in the second row with no d orbitals',
              'Fluorine has more valence electrons than chlorine',
              'Chlorine obeys the Aufbau principle but fluorine does not'
            ],
            correctAnswer: 1,
            explanation: 'Both are halogens with 7 valence electrons, but chlorine (n = 3) has energetically accessible 3d orbitals to expand into, whereas fluorine (n = 2) is strictly limited to the four 2s/2p orbitals. The trap (option 3) is false — both have 7 valence electrons; the real distinction is the row and the availability of d orbitals, the same reason C/N/O/F can never expand their octets.'
          }
        ]
      }
    },
    {
      id: 'atomi1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 1 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Methane ($\\text{CH}_4$) has four identical C-H bonds, yet ground-state carbon ($1s^2\\,2s^2\\,2p^2$) has only two unpaired electrons. What does this discrepancy foreshadow about carbon\'s bonding?',
            options: [
              'Carbon must lose two electrons to become an ion before bonding',
              "Carbon's 2s and 2p orbitals must reorganize (promote and hybridize) to provide four equivalent bonding orbitals",
              'Two of the four C-H bonds in methane are actually much weaker than the others',
              'Carbon can only truly form two bonds, and methane is an exception'
            ],
            correctAnswer: 1,
            explanation: 'The ground-state count predicts only 2 bonds, but methane demonstrably has 4 equivalent bonds. The resolution (developed in Part 3) is promotion of a 2s electron into the empty 2p, then hybridization into four equivalent $sp^3$ orbitals. The trap (option 3) contradicts experiment — all four C-H bonds in methane are identical in length and strength, which is precisely the evidence that hybridization, not the raw ground-state picture, governs bonding.'
          },
          {
            question: 'An element has the ground-state configuration $1s^2\\,2s^2\\,2p^4$. How many valence electrons does it have, and how many covalent bonds will it most commonly form when neutral?',
            options: [
              '4 valence electrons, forming 4 bonds',
              '6 valence electrons, forming 2 bonds',
              '8 valence electrons, forming 0 bonds',
              '6 valence electrons, forming 6 bonds'
            ],
            correctAnswer: 1,
            explanation: 'This is oxygen: $2s^2\\,2p^4$ = 6 valence electrons. To complete its octet it needs 2 more shared electrons, so it forms 2 bonds and carries 2 lone pairs (2 x 2 + 4 = 8). The trap (option 4) assumes electrons = bonds, but bond count is set by the ELECTRON DEFICIT to reach 8, not by the total valence count.'
          }
        ]
      }
    }
  ]
}
