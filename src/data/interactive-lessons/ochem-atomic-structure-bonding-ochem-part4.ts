export const oChemAtomicBondingPart4Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi4-intro',
      type: 'text' as const,
      content: `
## Sigma & Pi Bonds: Orbital Overlap and Molecular Orbitals

**Part 4 of 7**

Hybridization (Part 3) told us the *shape* of a carbon's bonding orbitals. This part tells us what happens when those orbitals **overlap** to actually form a bond — and why the two flavors of covalent bond, **$\\sigma$ (sigma)** and **$\\pi$ (pi)**, behave so differently. The distinction between $\\sigma$ and $\\pi$ is the engine behind almost every reaction of alkenes, alkynes, and carbonyls.

**Molecular orbital (MO) theory** is the underlying framework. When two atomic orbitals overlap, they combine into **two** molecular orbitals (orbitals are conserved — two in, two out):

- A **bonding MO**, formed by *constructive* (in-phase) overlap. It concentrates electron density *between* the nuclei, is **lower in energy** than the original atomic orbitals, and holds the bond together.
- An **antibonding MO** (marked with an asterisk, e.g. $\\sigma^*$), formed by *destructive* (out-of-phase) overlap. It has a **node** between the nuclei, is **higher in energy**, and weakens or breaks the bond when occupied.

Electrons fill the bonding MO first. A stable bond exists only when more electrons occupy bonding MOs than antibonding MOs.
      `
    },
    {
      id: 'atomi4-sigmapi',
      type: 'text' as const,
      content: `
### Sigma vs. Pi: It Is All About How the Orbitals Meet

The difference between $\\sigma$ and $\\pi$ bonds is purely **geometric — the direction of overlap**:

**Sigma ($\\sigma$) bond — head-on overlap.** Orbitals overlap *end-to-end*, directly along the internuclear axis. The electron density is cylindrically symmetric around that axis. Every **single bond is a $\\sigma$ bond**, and it is always the **first** bond between any two atoms. Sigma bonds form from $s$-$s$, $s$-$p$, hybrid-hybrid, or hybrid-$s$ overlap.

Because $\\sigma$ density is symmetric about the bond axis, **a $\\sigma$ bond permits free rotation**: you can twist one end relative to the other without breaking any overlap. This is why single bonds rotate freely at room temperature and alkanes adopt many conformations.

**Pi ($\\pi$) bond — side-on overlap.** Two parallel, unhybridized $p$ orbitals overlap *sideways*, above and below the internuclear axis. The electron density sits in two lobes, one on each face of the bond, with a node *in* the plane of the nuclei. A $\\pi$ bond is always the **second (and third) bond** of a multiple bond — never the first.

Because $\\pi$ overlap depends on the two $p$ orbitals staying **parallel**, **a $\\pi$ bond locks rotation**: twisting one end by $90^\\circ$ destroys the overlap and breaks the bond. This rotational rigidity is why alkenes have **cis/trans (E/Z) isomers** — the double bond cannot rotate to interconvert them.

| Feature | $\\sigma$ bond | $\\pi$ bond |
|---|---|---|
| Overlap | Head-on (end-to-end) | Side-on (parallel $p$) |
| Position | First bond (all singles) | Second/third bond only |
| Density location | On the internuclear axis | Above and below the axis |
| Rotation | Free | Locked (gives cis/trans) |
| Relative strength | Stronger | Weaker, more reactive |
      `
    },
    {
      id: 'atomi4-counting',
      type: 'text' as const,
      content: `
### Worked Example: Counting $\\sigma$ and $\\pi$ Bonds, and Bond Order

A reliable counting rule for any structure:

- A **single** bond = **1 $\\sigma$**, 0 $\\pi$.
- A **double** bond = **1 $\\sigma$ + 1 $\\pi$**.
- A **triple** bond = **1 $\\sigma$ + 2 $\\pi$**.

The first bond between two atoms is *always* the $\\sigma$; any additional bonds are $\\pi$.

**Example — propyne, $\\text{CH}_3\\!-\\!\\text{C}\\!\\equiv\\!\\text{CH}$.** Count every connection:

- 3 C-H bonds on the methyl group: $3\\,\\sigma$.
- 1 C-C single bond (methyl to the alkyne): $1\\,\\sigma$.
- The C≡C triple bond: $1\\,\\sigma + 2\\,\\pi$.
- 1 terminal ≡C-H bond: $1\\,\\sigma$.

**Total: 6 $\\sigma$ bonds and 2 $\\pi$ bonds.** Notice the triple bond contributed only *one* $\\sigma$ (its first bond) and *two* $\\pi$.

**Bond order** quantifies how many net bonding electron pairs hold two atoms together. From MO theory:

$\\text{Bond order} = \\frac{(\\text{bonding electrons}) - (\\text{antibonding electrons})}{2}$

For a triple bond like C≡C, bond order = 3 (one $\\sigma$ + two $\\pi$ = three shared pairs, none antibonding). Higher bond order means a **shorter, stronger** bond: a C≡C triple bond is shorter and stronger than a C=C double bond, which is shorter and stronger than a C-C single bond. The same MO formula explains why $\\text{O}_2$ is paramagnetic — its MO diagram forces two electrons into separate antibonding $\\pi^*$ orbitals with parallel spins, an outcome the simple Lewis dot structure completely misses.
      `
    },
    {
      id: 'atomi4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Sigma vs. Pi
      `,
      exercise: {
        questions: [
          {
            question: 'A carbon-carbon double bond (C=C) consists of which combination of bonds?',
            options: [
              'Two sigma bonds',
              'One sigma bond and one pi bond',
              'Two pi bonds',
              'One sigma bond and two pi bonds'
            ],
            correctAnswer: 1,
            explanation: 'The first bond between the two carbons is a sigma (head-on overlap of hybrid orbitals); the second is a pi (side-on overlap of leftover p orbitals). So a double bond = 1 sigma + 1 pi. The trap (option 1, two sigmas) is impossible — only the FIRST bond between two atoms can be sigma; any additional bond must be pi.'
          },
          {
            question: 'Why can a single (sigma) C-C bond rotate freely at room temperature, while a C=C double bond cannot?',
            options: [
              'Single bonds are weaker, so they break and re-form during rotation',
              'Sigma density is symmetric about the bond axis, so rotation preserves overlap; the pi bond requires parallel p orbitals, so rotation breaks its overlap',
              'Double bonds are shorter and physically cannot move',
              'Single bonds contain a hidden pi component that lubricates rotation'
            ],
            correctAnswer: 1,
            explanation: 'A sigma bond is cylindrically symmetric, so twisting one end keeps the overlap intact — free rotation. A pi bond depends on two p orbitals staying parallel; rotating to $90^\\circ$ kills the overlap, so the double bond is locked. The trap (option 1) imagines the sigma bond breaking during rotation — it does not; rotation is free precisely because no overlap is lost. This locked rotation is what creates cis/trans isomers.'
          },
          {
            question: 'In a bonding molecular orbital versus an antibonding molecular orbital, where is the electron density and how do the energies compare?',
            options: [
              'Bonding: density between nuclei, lower energy; antibonding: node between nuclei, higher energy',
              'Bonding: node between nuclei, higher energy; antibonding: density between nuclei, lower energy',
              'Both place density between the nuclei and have equal energy',
              'Antibonding orbitals do not exist for sigma bonds'
            ],
            correctAnswer: 0,
            explanation: 'Constructive (in-phase) overlap builds the bonding MO: density piles up between the nuclei and the energy drops below the atomic orbitals. Destructive (out-of-phase) overlap builds the antibonding MO: a node forms between the nuclei and the energy rises. The trap (option 2) swaps the two — remember that "bonding" literally means electron density glues the nuclei together.'
          }
        ]
      }
    },
    {
      id: 'atomi4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Counting & Bond Order
      `,
      exercise: {
        questions: [
          {
            question: 'How many sigma and pi bonds are in hydrogen cyanide, $\\text{H}\\!-\\!\\text{C}\\!\\equiv\\!\\text{N}$?',
            options: [
              '3 sigma and 0 pi',
              '2 sigma and 2 pi',
              '1 sigma and 2 pi',
              '2 sigma and 1 pi'
            ],
            correctAnswer: 1,
            explanation: 'The H-C single bond = 1 sigma. The C≡N triple bond = 1 sigma + 2 pi. Total = 2 sigma + 2 pi. The trap (option 1) treats the triple bond as three sigma bonds; in reality a triple bond is 1 sigma + 2 pi, because only the first bond between C and N can be head-on.'
          },
          {
            question: 'Using bond order to compare, which has the shortest and strongest carbon-carbon bond: ethane (C-C), ethene (C=C), or ethyne (C≡C)?',
            options: [
              'Ethane, because single bonds are most stable',
              'Ethyne, because its bond order of 3 gives the shortest, strongest bond',
              'All three are equal',
              'Ethene, because it is in the middle'
            ],
            correctAnswer: 1,
            explanation: 'Bond order rises 1 → 2 → 3 from single to double to triple, and higher bond order means more shared electron density pulling the nuclei together, hence shorter and stronger. Ethyne (bond order 3) wins. The trap (option 1) confuses "single bonds rotate freely / are common" with "single bonds are strongest" — bond strength tracks bond order, and triple beats single.'
          },
          {
            question: 'Molecular orbital theory predicts that $\\text{O}_2$ is paramagnetic (has unpaired electrons), a fact the simple Lewis structure $\\text{O=O}$ with all electrons paired cannot explain. What MO feature accounts for this?',
            options: [
              'Oxygen has no antibonding orbitals',
              "Two of oxygen's electrons occupy two degenerate antibonding $\\pi^*$ orbitals singly, with parallel spins, by Hund's rule",
              "Oxygen's bonding orbitals are higher in energy than its antibonding orbitals",
              'Oxygen forms a triple bond in MO theory'
            ],
            correctAnswer: 1,
            explanation: "Filling O2's MO diagram places the last two electrons into the two degenerate $\\pi^*$ antibonding orbitals, and Hund's rule spreads them singly with parallel spins — two unpaired electrons, hence paramagnetism. The Lewis structure pairs everything and misses this entirely. The trap (option 1) denies antibonding orbitals exist; they do, and partially filling them is exactly what gives O2 its unpaired electrons and a net bond order of 2."
          }
        ]
      }
    },
    {
      id: 'atomi4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 4 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Alkenes are far more reactive than alkanes toward electrophiles. Which property of the pi bond best explains this heightened reactivity?',
            options: [
              'The pi bond is stronger than the sigma bond, so it attracts electrophiles',
              'The pi electrons are held above and below the bond axis, are more loosely held than sigma electrons, and are exposed/accessible to electrophiles',
              'Alkenes have more sigma bonds than alkanes',
              'The pi bond allows free rotation, exposing the nucleus'
            ],
            correctAnswer: 1,
            explanation: 'Pi electrons sit in exposed lobes off the bond axis and are bound less tightly than sigma electrons, making them an easy electron source for an electron-hungry electrophile — the basis of electrophilic addition. The trap (option 1) wrongly calls the pi bond stronger; it is actually WEAKER than the sigma, which is part of why it is the reactive site. (Option 4 is also false — pi bonds lock rotation.)'
          },
          {
            question: 'For a hypothetical diatomic species, an MO diagram shows 6 electrons in bonding MOs and 2 electrons in antibonding MOs. What is the bond order?',
            options: [
              '$4$',
              '$3$',
              '$2$',
              '$1$'
            ],
            correctAnswer: 2,
            explanation: 'Bond order = (bonding − antibonding)/2 = (6 − 2)/2 = 2. The antibonding electrons cancel an equal number of bonding electrons before you divide. The trap (option 1) adds the electrons (6 + 2)/... or forgets to subtract the antibonding contribution; the formula explicitly subtracts antibonding electrons because they destabilize the bond.'
          }
        ]
      }
    }
  ]
}
