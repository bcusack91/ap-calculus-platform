export const oChemMolRepPart3Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec3-intro',
      type: 'text' as const,
      content: `
## Molecular Representations — Constitutional Isomers

**Part 3 of 7**

**Isomers** are different compounds that share the *same molecular formula*. The most fundamental kind are **constitutional isomers** (also called *structural isomers*): molecules with the same formula but a **different connectivity** — the atoms are bonded together in a different order.

This is where molecular representations earn their keep. A molecular formula like $\\text{C}_4\\text{H}_{10}$ tells you *what* atoms are present but says nothing about *how* they are joined. Only a structural representation (condensed, skeletal, or Lewis) disambiguates the isomers. Two compounds can be made of identical atoms yet boil at different temperatures, react differently, and have entirely different names — because connectivity, not composition, dictates behavior.
      `
    },
    {
      id: 'molec3-the-idea',
      type: 'text' as const,
      content: `
### Same Formula, Different Connectivity

The textbook first example is $\\text{C}_4\\text{H}_{10}$, which has exactly two constitutional isomers:

- **n-Butane** — a straight four-carbon chain, $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_3$.
- **Isobutane (2-methylpropane)** — a three-carbon chain with a methyl branch on the middle carbon, $\\text{(CH}_3\\text{)}_3\\text{CH}$.

Both are $\\text{C}_4\\text{H}_{10}$; both are saturated alkanes; yet they are genuinely different substances. n-Butane boils at about $-1\\,°\\text{C}$ while isobutane boils at about $-12\\,°\\text{C}$, because the more compact, branched isobutane has less surface contact between molecules and therefore weaker dispersion forces. **Structure predicts property — that is the whole lesson.**

A crucial discipline: constitutional isomers must differ in *connectivity*, not merely in how the same molecule is *drawn*. Rotating a structure, flipping it, or redrawing a zig-zag with different bond angles does **not** create a new isomer. The acid test is to ask, atom by atom, "what is bonded to what?" If every atom has the same set of neighbors, it is the same compound drawn two ways — a notorious source of beginner errors and double-counting.
      `
    },
    {
      id: 'molec3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Defining the Term
      `,
      exercise: {
        questions: [
          {
            question: 'Constitutional (structural) isomers are best defined as molecules that have:',
            options: [
              'The same molecular formula but a different connectivity of atoms',
              'Different molecular formulas but the same shape',
              'The same three-dimensional arrangement but different formulas',
              'Identical structures drawn from different angles'
            ],
            correctAnswer: 0,
            explanation: 'Constitutional isomers share a molecular formula but differ in the order atoms are bonded (connectivity). Option (d) describes the same molecule redrawn — not an isomer. Differing formulas (b, c) means the substances are not isomers of each other at all.'
          },
          {
            question: 'Why do n-butane and isobutane, both C4H10, have different boiling points?',
            options: [
              'They contain different numbers of carbon atoms',
              'Their different connectivities give different molecular shapes and therefore different intermolecular forces',
              'One is an alkane and the other is an alkene',
              'They actually have the same boiling point'
            ],
            correctAnswer: 1,
            explanation: 'Same atoms, different connectivity → different shape → different dispersion forces → different boiling point. The branched isobutane is more compact and boils lower. Both have 4 carbons (trap a) and both are saturated alkanes (trap c), so those cannot be the reason.'
          },
          {
            question: 'A student draws a four-carbon zig-zag, then redraws it flipped left-to-right and claims it is a new isomer of butane. What is the error?',
            options: [
              'Flipping a molecule changes its molecular formula',
              'The two drawings have different connectivity',
              'Reflecting or rotating a drawing does not change connectivity, so it is the same compound, not a new isomer',
              'Butane has no isomers at all'
            ],
            correctAnswer: 2,
            explanation: 'A mirror-image or rotated drawing of the same connectivity is the same constitutional structure. To be a distinct constitutional isomer, the atom-to-atom bonding pattern must actually differ. (Butane does have one constitutional isomer — isobutane — but it is not produced by flipping the drawing.)'
          }
        ]
      }
    },
    {
      id: 'molec3-counting',
      type: 'text' as const,
      content: `
### Counting Isomers Grows Explosively

As the carbon count rises, the number of possible constitutional isomers grows dramatically. The alkane series makes this vivid:

| Formula | Carbons | Number of constitutional isomers |
|---------|---------|----------------------------------|
| $\\text{C}_4\\text{H}_{10}$ | 4 | 2 |
| $\\text{C}_5\\text{H}_{12}$ | 5 | 3 |
| $\\text{C}_6\\text{H}_{14}$ | 6 | 5 |
| $\\text{C}_7\\text{H}_{16}$ | 7 | 9 |
| $\\text{C}_8\\text{H}_{18}$ | 8 | 18 |
| $\\text{C}_{10}\\text{H}_{22}$ | 10 | 75 |

By $\\text{C}_{20}$ there are over 300,000 alkane isomers. There is no simple closed formula — the counts come from systematic enumeration of branching patterns. The lesson is not to memorize the numbers but to internalize the trend: **a single molecular formula can correspond to a vast family of distinct compounds, and only a structural drawing pins down which one you mean.**

> **Worked example — enumerate the isomers of $\\text{C}_5\\text{H}_{12}$ (pentane).** Work from least branched to most branched, always counting the longest continuous chain:
> 1. **n-Pentane** — straight 5-carbon chain: $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{CH}_3$.
> 2. **Isopentane (2-methylbutane)** — longest chain is 4 carbons, with a methyl on C2.
> 3. **Neopentane (2,2-dimethylpropane)** — longest chain is 3 carbons, with two methyls both on the central carbon: $\\text{C(CH}_3\\text{)}_4$.
>
> Any attempt at a "fourth" isomer (say, putting the methyl on C3 of butane) just reproduces isopentane after you re-identify the longest chain — a built-in trap that teaches you to always re-find the longest chain before declaring a new isomer.
      `
    },
    {
      id: 'molec3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Counting and Identifying
      `,
      exercise: {
        questions: [
          {
            question: 'How many constitutional isomers does C5H12 have?',
            options: [
              '2',
              '3',
              '4',
              '5'
            ],
            correctAnswer: 1,
            explanation: 'Exactly 3: n-pentane, isopentane (2-methylbutane), and neopentane (2,2-dimethylpropane). Students often over-count to 4 by drawing "3-methylbutane," but re-identifying the longest chain shows that is just isopentane drawn differently.'
          },
          {
            question: 'As the number of carbon atoms in a saturated alkane increases, the number of possible constitutional isomers:',
            options: [
              'Stays constant',
              'Increases by exactly one for each added carbon',
              'Increases rapidly, with no simple closed-form formula',
              'Decreases'
            ],
            correctAnswer: 2,
            explanation: 'The isomer count explodes (2, 3, 5, 9, 18, ...) and is not given by any simple algebraic formula; it must be enumerated. It is neither constant nor a tidy +1 per carbon, which are the trap answers.'
          },
          {
            question: 'Two structures both have the formula C2H6O. One is drawn CH3CH2OH and the other CH3OCH3. What is their relationship?',
            options: [
              'They are the same compound drawn two ways',
              'They are constitutional isomers (ethanol, an alcohol, vs. dimethyl ether, an ether)',
              'They have different molecular formulas',
              'They cannot both exist'
            ],
            correctAnswer: 1,
            explanation: 'Both are C2H6O but with different connectivity: in ethanol the O bears an H and bridges to one carbon (an alcohol); in dimethyl ether the O bridges two carbons with no O–H (an ether). Different connectivity, same formula = constitutional isomers — and notably they belong to different functional-group families.'
          }
        ]
      }
    },
    {
      id: 'molec3-properties',
      type: 'text' as const,
      content: `
### Isomers Can Belong to Different Functional-Group Families

The $\\text{C}_2\\text{H}_6\\text{O}$ example above is profound: ethanol (a drinkable liquid, bp $78\\,°\\text{C}$, hydrogen-bonding) and dimethyl ether (a gas at room temperature, bp $-24\\,°\\text{C}$) are constitutional isomers, yet one is an *alcohol* and the other an *ether*. The same atoms, rearranged, jump to a completely different functional-group family with completely different chemistry.

This is why a molecular formula alone is almost useless to an organic chemist for predicting behavior. The formula $\\text{C}_3\\text{H}_6\\text{O}$ could be:

- **Propanal** (an aldehyde, $\\text{CH}_3\\text{CH}_2\\text{CHO}$),
- **Acetone** (a ketone, $\\text{(CH}_3\\text{)}_2\\text{C=O}$),
- **Allyl alcohol / propylene oxide / others** — several more.

Each reacts differently, smells different, and serves a different purpose. Connectivity is destiny.

> **Takeaway:** Constitutional isomerism is the reason structural representations exist. A formula counts atoms; a structure specifies bonds; and bonds determine the compound. When you read or draw a structure, you are doing the one thing the formula cannot — selecting a single, real molecule out of a potentially enormous family of isomers. Part 4 shows how the *degree of unsaturation* lets you reason backward from a formula about how many rings and multiple bonds those isomers must contain.
      `
    },
    {
      id: 'molec3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 3 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'The formula C3H6O corresponds to both propanal (an aldehyde) and acetone (a ketone). This illustrates that constitutional isomers:',
            options: [
              'Always belong to the same functional-group family',
              'Can belong to entirely different functional-group families and thus have very different chemistry',
              'Must have the same boiling point',
              'Differ only in three-dimensional arrangement'
            ],
            correctAnswer: 1,
            explanation: 'Rearranging the same atoms can produce different functional groups (aldehyde vs. ketone here), and therefore different reactivity and properties. Isomers need not share a family (a) or a boiling point (c). Differing in 3D arrangement only (d) describes stereoisomers, not constitutional isomers.'
          },
          {
            question: 'A chemistry exam gives you only the molecular formula C6H14 and asks which specific compound it represents. What is the correct response?',
            options: [
              'The formula uniquely identifies one compound',
              'The formula is insufficient — C6H14 has 5 constitutional isomers, so a structural representation is needed to specify which one',
              'The formula corresponds to benzene',
              'No compound has that formula'
            ],
            correctAnswer: 1,
            explanation: 'C6H14 is a saturated hexane with 5 constitutional isomers, so the formula alone cannot single out a compound — you need a structure. Benzene is C6H6 (trap c), a very different, unsaturated molecule. The formula is perfectly valid (trap d).'
          }
        ]
      }
    }
  ]
}
