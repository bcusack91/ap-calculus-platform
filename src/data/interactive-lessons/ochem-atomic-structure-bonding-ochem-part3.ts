export const oChemAtomicBondingPart3Data = {
  topicSlug: 'atomic-structure-bonding-ochem',
  sections: [
    {
      id: 'atomi3-intro',
      type: 'text' as const,
      content: `
## Hybridization

**Part 3 of 7**

In Part 1 we hit a contradiction: ground-state carbon ($1s^2\\,2s^2\\,2p^2$) has only **two** unpaired electrons, yet methane has **four** identical bonds in a perfect tetrahedron. **Hybridization** is the model that resolves this — and it is arguably the single most useful concept in all of orgo, because hybridization at a carbon predicts its geometry, its bond angles, its bond strengths, and even its acidity.

The idea, in two moves:

1. **Promotion.** One $2s$ electron is promoted into the empty $2p$ orbital, giving carbon **four** singly-occupied valence orbitals: $2s^1\\,2p^1\\,2p^1\\,2p^1$. The small energy cost of promotion is repaid many times over by forming two extra bonds.
2. **Mixing.** The pure $s$ and $p$ orbitals — which point in incompatible directions and have different energies — are mathematically **combined (hybridized)** into a new set of **equivalent** orbitals that point toward the corners of a regular shape and are perfectly suited for bonding.

The number of atomic orbitals you mix always equals the number of hybrid orbitals you get out (orbitals are conserved). Mix 1 $s$ + 3 $p$ and you get **four** $sp^3$ orbitals; mix 1 $s$ + 2 $p$ and you get **three** $sp^2$ (leaving one pure $p$ untouched); mix 1 $s$ + 1 $p$ and you get **two** $sp$ (leaving two pure $p$).
      `
    },
    {
      id: 'atomi3-three',
      type: 'text' as const,
      content: `
### The Three Hybridization States of Carbon

The fastest way to assign hybridization in practice is to **count regions of electron density** — that is, the number of $\\sigma$ bonds plus lone pairs (a multiple bond counts as just *one* region, because its $\\pi$ component does not change the geometry). This **steric number** maps directly onto hybridization:

| Regions ($\\sigma$ + LP) | Hybridization | Geometry | Bond angle | Pure $p$ left over |
|---|---|---|---|---|
| 4 | $sp^3$ | Tetrahedral | $109.5^\\circ$ | 0 |
| 3 | $sp^2$ | Trigonal planar | $120^\\circ$ | 1 |
| 2 | $sp$ | Linear | $180^\\circ$ | 2 |

What the leftover pure $p$ orbitals do is the whole point for orgo:

- **$sp^3$ carbon** (e.g., methane, the carbon in an alkane): four $\\sigma$ bonds, no leftover $p$, so **no $\\pi$ bonds** are possible. This is a saturated, tetrahedral carbon.
- **$sp^2$ carbon** (e.g., an alkene carbon, a carbonyl carbon): three $\\sigma$ bonds in a plane, plus **one perpendicular $p$ orbital** that forms a **$\\pi$ bond** (the second bond of a C=C or C=O double bond).
- **$sp$ carbon** (e.g., an alkyne carbon, a nitrile carbon): two $\\sigma$ bonds at $180^\\circ$, plus **two perpendicular $p$ orbitals** that form **two $\\pi$ bonds** (the extra two bonds of a triple bond).

So the rule of thumb that ties it together: **single bond region $\\rightarrow$ all $\\sigma$; a double bond hides one $\\pi$; a triple bond hides two $\\pi$ — and every $\\pi$ bond demands a leftover pure $p$ orbital, which only $sp^2$ and $sp$ carbons have.**
      `
    },
    {
      id: 'atomi3-scharacter',
      type: 'text' as const,
      content: `
### Worked Example: %s-Character, Bond Length, and Acidity

Hybridization is not just geometry — it changes the *energy* of the electrons in the hybrid orbital, with real chemical consequences. The key parameter is **%s-character**, the fraction of the hybrid that comes from the low-lying, tightly-held $s$ orbital:

- $sp^3$: 1 part $s$ out of 4 total $\\rightarrow$ **25% s-character**
- $sp^2$: 1 part $s$ out of 3 $\\rightarrow$ **33% s-character**
- $sp$: 1 part $s$ out of 2 $\\rightarrow$ **50% s-character**

More s-character means the orbital is **lower in energy and held closer to the nucleus**. Two consequences you must be able to reason through:

**1. Bond length / strength.** A bond using an $sp$ orbital is shorter and stronger than one using $sp^3$, because the electrons sit closer to the nucleus. This is why a $\\equiv\\text{C-H}$ bond is shorter than a $=\\text{C-H}$, which is shorter than a $-\\text{C-H}$.

**2. Acidity of terminal alkynes.** Compare the C-H bonds of ethane ($sp^3$), ethene ($sp^2$), and ethyne ($sp$). When that C-H is deprotonated, the lone pair left behind sits in the carbon hybrid orbital. An $sp$ orbital (50% s) holds that lone pair **closest to the nucleus and most stably**, so the conjugate base (the carbanion) is most stable for the $sp$ case.

$\\text{p}K_a:\\quad \\text{ethane }(sp^3)\\approx 50 \\;>\\; \\text{ethene }(sp^2)\\approx 44 \\;>\\; \\text{ethyne }(sp)\\approx 25$

A lower $\\text{p}K_a$ means a stronger acid. Terminal alkynes are dramatically more acidic than alkenes or alkanes **entirely because of the s-character of the carbon orbital holding the resulting lone pair.** This single line of reasoning — more s-character $\\rightarrow$ more stable carbanion $\\rightarrow$ stronger acid — is a favorite exam target.
      `
    },
    {
      id: 'atomi3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Assigning Hybridization
      `,
      exercise: {
        questions: [
          {
            question: 'What is the hybridization of the carbonyl carbon in formaldehyde ($\\text{H}_2\\text{C=O}$)?',
            options: [
              '$sp^3$',
              '$sp^2$',
              '$sp$',
              'unhybridized'
            ],
            correctAnswer: 1,
            explanation: 'The carbonyl carbon has 3 regions of electron density: two C-H sigma bonds and one C=O bond (the double bond counts as ONE region). 3 regions = $sp^2$, trigonal planar, $120^\\circ$. The trap is counting the C=O double bond as two regions and landing on $sp$ — but the pi component of a double bond never adds a region; only sigma bonds and lone pairs do.'
          },
          {
            question: 'A carbon is bonded to two other atoms via a triple bond and a single bond (as in the terminal carbon of an alkyne or a nitrile carbon). How many pure (unhybridized) p orbitals does it retain?',
            options: [
              'Zero',
              'One',
              'Two',
              'Three'
            ],
            correctAnswer: 2,
            explanation: 'Two regions of density (one sigma to each neighbor) means $sp$ hybridization, which uses only the $s$ + one $p$. The other TWO p orbitals stay pure and form the two pi bonds of the triple bond. The trap (option 1) confuses the number of bonds with the number of leftover p orbitals — an $sp$ carbon has plenty of bonds, but exactly two unhybridized p orbitals.'
          },
          {
            question: 'In a molecule, a nitrogen atom has two sigma bonds and one lone pair, and is part of a system with no double bond to it. Counting regions of electron density, what is its hybridization?',
            options: [
              '$sp$ (2 regions)',
              '$sp^2$ (3 regions)',
              '$sp^3$ (4 regions)',
              'It cannot be determined'
            ],
            correctAnswer: 1,
            explanation: 'Regions = sigma bonds + lone pairs = 2 + 1 = 3 regions, giving $sp^2$. The crucial habit is that LONE PAIRS count as regions just like sigma bonds. The trap (option 1) counts only the two bonds and forgets the lone pair, wrongly giving $sp$; geometry and hybridization always include lone pairs in the steric number.'
          }
        ]
      }
    },
    {
      id: 'atomi3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — s-Character & Its Consequences
      `,
      exercise: {
        questions: [
          {
            question: 'Why is the C-H bond of a terminal alkyne ($\\equiv\\!\\text{C-H}$, $\\text{p}K_a \\approx 25$) far more acidic than the C-H bond of an alkane ($-\\text{C-H}$, $\\text{p}K_a \\approx 50$)?',
            options: [
              'The alkyne C-H bond is longer and therefore weaker',
              'The conjugate base lone pair sits in an $sp$ orbital (50% s-character), which holds it close to the nucleus and stabilizes the negative charge',
              'Alkynes have more hydrogen atoms available to lose',
              'The alkyne carbon is more electronegative because it has more bonds'
            ],
            correctAnswer: 1,
            explanation: 'Acidity here is governed by conjugate-base stability. The $sp$ carbanion holds its lone pair in a 50%-s orbital, close to the nucleus and low in energy, so it is far more stable than the 25%-s $sp^3$ carbanion. The trap (option 1) has the bond-length logic backwards — the $sp$ C-H is actually SHORTER and stronger; acidity is about stabilizing the anion AFTER the proton leaves, not bond strength alone.'
          },
          {
            question: 'Rank the following C-H bonds from shortest to longest: ethyne ($sp$), ethane ($sp^3$), ethene ($sp^2$).',
            options: [
              'ethane < ethene < ethyne',
              'ethyne < ethene < ethane',
              'ethene < ethyne < ethane',
              'All three are equal in length'
            ],
            correctAnswer: 1,
            explanation: 'More s-character pulls the bonding electrons closer to the nucleus, shortening the bond. Order of s-character is $sp$ (50%) > $sp^2$ (33%) > $sp^3$ (25%), so bond length is ethyne < ethene < ethane. The trap (option 1) reverses the trend by assuming more bonds = longer reach; in fact higher s-character means a tighter, shorter bond.'
          },
          {
            question: 'An exam claims a particular carbon is $sp$ hybridized with a bond angle of $109.5^\\circ$. Why is this internally inconsistent?',
            options: [
              'It is consistent; $sp$ carbons are tetrahedral',
              '$sp$ hybridization forces a linear geometry with $180^\\circ$ bond angles, not $109.5^\\circ$',
              '$sp$ carbons cannot bond to hydrogen',
              '$109.5^\\circ$ only applies to nitrogen'
            ],
            correctAnswer: 1,
            explanation: 'Each hybridization has a fixed geometry: $sp$ = linear ($180^\\circ$), $sp^2$ = trigonal planar ($120^\\circ$), $sp^3$ = tetrahedral ($109.5^\\circ$). An $sp$ carbon cannot be $109.5^\\circ$. The trap (option 1) swaps the $sp$/$sp^3$ angles; pairing the right angle to the right hybridization is exactly the bookkeeping being tested.'
          }
        ]
      }
    },
    {
      id: 'atomi3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 3 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Promotion of an electron from the 2s to the 2p orbital costs energy, yet carbon does it before bonding. Why is this energetically favorable overall?',
            options: [
              'Promotion releases energy rather than costing it',
              'Forming four bonds (instead of two) releases far more energy than the small promotion cost, and hybridization yields four equivalent, well-directed orbitals',
              'Carbon must promote to obey the Pauli exclusion principle',
              'Promotion converts carbon into a noble gas'
            ],
            correctAnswer: 1,
            explanation: 'Promotion unlocks four singly-occupied orbitals, enabling four bonds instead of two; the energy of two extra bonds dwarfs the modest promotion cost, and hybridization makes the four orbitals equivalent and optimally oriented. The trap (option 1) denies that promotion costs energy — it does — but the bonding payoff makes the net process strongly favorable.'
          },
          {
            question: 'Allene, $\\text{H}_2\\text{C=C=C}\\text{H}_2$, has a central carbon double-bonded to two different carbons. What is the hybridization of that CENTRAL carbon?',
            options: [
              '$sp^3$, because it has four neighbors total',
              '$sp^2$, because it lies in a single plane',
              '$sp$, because it has two regions of electron density (one double bond on each side)',
              'It is unhybridized'
            ],
            correctAnswer: 2,
            explanation: 'The central carbon has exactly two regions of electron density (a double bond to the left carbon and a double bond to the right carbon); each double bond is one region, so steric number = 2 = $sp$, linear. It needs two pure p orbitals to make one pi bond on each side. The trap (option 1) counts atoms or bonds instead of regions; the central allene carbon, despite two double bonds, is $sp$.'
          }
        ]
      }
    }
  ]
}
