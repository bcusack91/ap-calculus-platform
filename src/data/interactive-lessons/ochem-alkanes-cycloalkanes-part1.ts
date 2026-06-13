export const oChemAlkanesPart1Data = {
  topicSlug: 'alkanes-cycloalkanes',
  sections: [
    {
      id: 'alkan1-intro',
      type: 'text' as const,
      content: `
## Alkanes & Cycloalkanes — IUPAC Nomenclature

**Part 1 of 7 — Nomenclature**

Alkanes are saturated hydrocarbons: every carbon is $sp^3$-hybridized and bonded to the maximum number of hydrogens, so the general formula for an acyclic (open-chain) alkane is $C_nH_{2n+2}$. A single ring removes two hydrogens, giving cycloalkanes the formula $C_nH_{2n}$.

A reliable, unambiguous name is not optional in organic chemistry — "hexane" and "2,2-dimethylbutane" share the formula $C_6H_{14}$ but are entirely different compounds (constitutional isomers). The **IUPAC** system encodes the exact connectivity of a molecule into its name, so that any chemist can redraw the structure from the name alone.

The unbranched (straight-chain) parents you must know cold:

| Carbons | Parent name | Formula |
|---------|-------------|---------|
| 1 | meth**ane** | $CH_4$ |
| 2 | eth**ane** | $C_2H_6$ |
| 3 | prop**ane** | $C_3H_8$ |
| 4 | but**ane** | $C_4H_{10}$ |
| 5 | pent**ane** | $C_5H_{12}$ |
| 6 | hex**ane** | $C_6H_{14}$ |
| 7 | hept**ane** | $C_7H_{16}$ |
| 8 | oct**ane** | $C_8H_{18}$ |
| 9 | non**ane** | $C_9H_{20}$ |
| 10 | dec**ane** | $C_{10}H_{22}$ |

The suffix **-ane** signals an alkane. The same numerical prefixes (meth-, eth-, prop-, …) reappear throughout organic chemistry attached to other suffixes (-ene, -yne, -ol), so memorizing them now pays off for the entire year.
      `
    },
    {
      id: 'alkan1-rules',
      type: 'text' as const,
      content: `
### The Five-Step IUPAC Algorithm

Naming a branched alkane is a deterministic procedure. Follow the steps in order and the name falls out:

**1. Find the parent chain.** Identify the *longest continuous chain* of carbons. This may not be the chain drawn horizontally — you must trace through bends. If two chains are tied in length, choose the one with *more substituents*.

**2. Number the chain.** Number the carbons consecutively, starting from the end that gives the *lowest set of locants* to the substituents (compare the first point of difference).

**3. Identify and name the substituents.** A substituent formed by removing one H from an alkane is an **alkyl group**, named by changing **-ane** to **-yl**: methyl ($-CH_3$), ethyl ($-CH_2CH_3$), propyl, etc.

**4. Assemble the name alphabetically.** List substituents in alphabetical order, each preceded by its locant. Use multiplying prefixes (**di-, tri-, tetra-**) for repeated groups — but these prefixes are *ignored* when alphabetizing (e.g. "diethyl" alphabetizes under **e**).

**5. Punctuate.** Numbers are separated from numbers by commas (2,3-) and from letters by hyphens (3-methyl). The complete name is written as one word ending in the parent.

> **Common alkyl substituents and their alphabetizing letter:** *isopropyl* (under **i**), *sec-butyl* and *tert-butyl* (the italicized *sec-* and *tert-* prefixes are **ignored**, so both alphabetize under **b**), but *isobutyl* alphabetizes under **i** because "iso" is part of the name.
      `
    },
    {
      id: 'alkan1-worked',
      type: 'text' as const,
      content: `
### Worked Example — Naming a Branched Alkane

Name the compound whose skeleton is a 6-carbon chain bearing a methyl group on the third carbon and ethyl groups on the third and fourth carbons (drawn from the left):

$CH_3-CH_2-C(CH_3)(C_2H_5)-CH(C_2H_5)-CH_2-CH_3$

**Step 1 — Parent chain.** The longest continuous chain is 6 carbons long $\\rightarrow$ **hexane**. (Check: tracing through the branch carbons does not yield anything longer than 6.)

**Step 2 — Number for lowest locants.** Numbering from the left places substituents at C3, C3, C4. Numbering from the right places them at C3, C4, C4. Compare first point of difference: $\\{3,3,4\\}$ vs $\\{3,4,4\\}$ — the left numbering wins because 3 < 4 at the second position.

**Step 3 — Substituents.** Two ethyl groups (C3 and C4) and one methyl group (C3).

**Step 4 — Alphabetize.** "Ethyl" (e) comes before "methyl" (m). The two ethyls are collected as **diethyl**, but we alphabetize using "ethyl," not "diethyl."

**Step 5 — Assemble:** $\\;$ **3,4-diethyl-3-methylhexane**.

> **Trap:** A common mistake is to call this "3-methyl-3,4-diethylhexane" by alphabetizing on the *prefix* "di." The multiplying prefix di- is invisible to alphabetization — only the substituent root ("ethyl") counts, so ethyl precedes methyl.
      `
    },
    {
      id: 'alkan1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Parent Chain & Locants
      `,
      exercise: {
        questions: [
          {
            question: 'When selecting the parent chain in an IUPAC name, what is the single most important criterion?',
            options: [
              'The chain drawn horizontally across the page',
              'The longest continuous chain of carbon atoms',
              'The chain bearing the methyl groups',
              'The chain with the fewest carbon atoms'
            ],
            correctAnswer: 1,
            explanation: 'The parent is always the LONGEST continuous carbon chain, traced through bends in the drawing — not the chain that happens to be drawn straight. Orientation on paper is irrelevant. (If two chains tie in length, the tiebreaker is the one with more substituents.)'
          },
          {
            question: 'A hexane chain has a methyl group that would be at C2 if numbered from the left, or C5 if numbered from the right. Which locant is correct, and why?',
            options: [
              'C5, because you always number from the right',
              'C2, because numbering should give the lowest locant to the substituent',
              'Either is acceptable since the molecule is symmetric',
              'C5, because higher locants indicate greater stability'
            ],
            correctAnswer: 1,
            explanation: 'Number from the end that gives the LOWEST set of locants. 2 < 5, so the group is at C2, giving 2-methylhexane. Numbering direction is chosen to minimize locants, not by a fixed left/right rule.'
          },
          {
            question: 'In the name "4-ethyl-2-methylhexane," why is ethyl written before methyl?',
            options: [
              'Because ethyl has the higher locant',
              'Because substituents are listed alphabetically and "e" precedes "m"',
              'Because ethyl is the larger group',
              'Because ethyl is closer to C1'
            ],
            correctAnswer: 1,
            explanation: 'Substituents are cited in ALPHABETICAL order regardless of locant or size. "Ethyl" (e) precedes "methyl" (m). Locants are then attached to whichever substituent they belong to; the alphabetical ordering is set first.'
          }
        ]
      }
    },
    {
      id: 'alkan1-cyclo',
      type: 'text' as const,
      content: `
### Cycloalkanes

A cycloalkane is named by adding the prefix **cyclo-** to the parent name of the ring: a six-membered ring is **cyclohexane**, a three-membered ring is **cyclopropane**, and so on. The ring itself is usually taken as the parent.

**Numbering a substituted ring:** assign C1 to a substituted carbon, then number around the ring in the direction that gives the lowest set of locants to the remaining substituents. When substituents differ, the one first in alphabetical order receives the lower locant at the first point of difference.

- One substituent: no locant is needed (e.g. **methylcyclohexane** — the ring carbon bearing the methyl is "C1" by default).
- Two or more substituents: number to give the lowest locants, breaking ties alphabetically.

**Ring vs. chain as parent:** if the ring has *more* carbons than the largest attached chain, the ring is the parent (e.g. 1-ethyl-2-methylcyclohexane). If a chain attached to the ring is *longer* than the ring, the ring becomes a **cycloalkyl substituent** on that chain (e.g. a propyl chain bearing a cyclohexane ring is named cyclohexyl-substituted propane $\\rightarrow$ "1-cyclohexylpropane" style naming, i.e. the ring is the substituent).

> **Worked check:** A cyclopentane ring with a methyl on one carbon and a chlorine two carbons away. Start numbering at a substituted carbon and go the direction giving lowest locants. With substituents alphabetized (chloro before methyl), we get **1-chloro-3-methylcyclopentane** rather than "3-chloro-1-methyl…", because the lower locant set is assigned to the first-cited (alphabetically lower) substituent at the first point of difference.
      `
    },
    {
      id: 'alkan1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Constitutional Isomers & Cyclo Naming
      `,
      exercise: {
        questions: [
          {
            question: 'How many carbons and what general formula describe an acyclic alkane versus a cycloalkane?',
            options: [
              'Both are $C_nH_{2n+2}$',
              'Acyclic is $C_nH_{2n+2}$; a cycloalkane (one ring) is $C_nH_{2n}$',
              'Acyclic is $C_nH_{2n}$; cycloalkane is $C_nH_{2n+2}$',
              'Both are $C_nH_{2n}$'
            ],
            correctAnswer: 1,
            explanation: 'An open-chain saturated alkane is $C_nH_{2n+2}$. Forming a ring requires joining two ends, which costs two hydrogens, giving $C_nH_{2n}$ for a monocyclic cycloalkane. Each additional ring or degree of unsaturation removes two more H.'
          },
          {
            question: 'Hexane and 2,2-dimethylbutane both have the molecular formula $C_6H_{14}$. What is their relationship?',
            options: [
              'They are identical compounds with two names',
              'They are conformational isomers (rotamers)',
              'They are constitutional (structural) isomers',
              'They are stereoisomers'
            ],
            correctAnswer: 2,
            explanation: 'Same molecular formula but different connectivity (atom-to-atom bonding) makes them CONSTITUTIONAL isomers. Conformational isomers differ only by bond rotation (same connectivity); stereoisomers differ in spatial arrangement with identical connectivity. Here the carbon skeletons are genuinely different.'
          },
          {
            question: 'A cyclohexane ring is attached to a straight 8-carbon chain (the ring sits on one end carbon). How should this be named?',
            options: [
              'As a cyclohexane with an octyl substituent',
              'As an octane chain bearing a cyclohexyl substituent, because the chain (8 C) is longer than the ring (6 C)',
              'As 1-octylcyclohexane regardless of chain length',
              'Rings are always the parent, so it is cyclohexane-based'
            ],
            correctAnswer: 1,
            explanation: 'The parent is the larger of ring vs. chain. The 8-carbon chain beats the 6-carbon ring, so octane is the parent and the ring becomes a "cyclohexyl" substituent: 1-cyclohexyloctane. Rings are only the default parent when they are at least as large as the competing chain.'
          },
          {
            question: 'Why does IUPAC nomenclature matter for a molecule like $C_6H_{14}$?',
            options: [
              'Because all $C_6H_{14}$ molecules are the same',
              'Because the formula alone cannot distinguish the five constitutional isomers of hexane',
              'Because alkanes cannot be drawn',
              'Because only cyclic compounds need names'
            ],
            correctAnswer: 1,
            explanation: 'The molecular formula $C_6H_{14}$ corresponds to FIVE distinct constitutional isomers (n-hexane, 2-methylpentane, 3-methylpentane, 2,2-dimethylbutane, 2,3-dimethylbutane). A systematic name pins down exactly which one is meant by encoding connectivity unambiguously.'
          }
        ]
      }
    },
    {
      id: 'alkan1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Putting a Name Together
      `,
      exercise: {
        questions: [
          {
            question: 'Consider $(CH_3)_3C-CH_2-CH_3$. What is its correct IUPAC name?',
            options: [
              '2,2-dimethylbutane',
              'tert-butylethane',
              '2-methylpentane',
              '3,3-dimethylbutane'
            ],
            correctAnswer: 0,
            explanation: 'The longest chain is 4 carbons (butane): start at a CH3 of the C(CH3)3 group, through the quaternary carbon, the CH2, to the terminal CH3. Two methyl branches sit on what is then C2. Numbering to give lowest locants places them at 2,2 (not 3,3). Result: 2,2-dimethylbutane. "tert-butylethane" is not a valid IUPAC parent because you must pick the longest chain.'
          },
          {
            question: 'For 3-ethyl-2,2-dimethylpentane, which assembly rule is correctly applied?',
            options: [
              'di- counts in alphabetization, so dimethyl precedes ethyl',
              'Ethyl (e) is alphabetized before methyl (m); the multiplying prefix di- is ignored when ordering',
              'Substituents are listed by increasing locant, not alphabetically',
              'The locants 2,2,3 should have been numbered from the other end to give 3,4,4'
            ],
            correctAnswer: 1,
            explanation: 'Ethyl precedes methyl alphabetically (di- is ignored when ordering), so "3-ethyl-2,2-dimethyl…" is correct. Numbering is also correct: 2,2,3 is lower than the alternative 3,4,4 set, so we number from the end nearer the gem-dimethyl group.'
          }
        ]
      }
    }
  ]
}
