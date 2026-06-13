export const oChemIRMSPart5Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra5-intro',
      type: 'text' as const,
      content: `
## Fragmentation — Reading the Wreckage

**Part 5 of 7 — Neutral Losses, McLafferty, and the Nitrogen Rule**

The high-energy electron beam in EI-MS does more than ionize: it deposits enough excess energy that the molecular ion often **shatters**. The molecular ion $\\text{M}^{+\\bullet}$ breaks apart into a smaller cation (which the instrument detects) plus a **neutral fragment** (which is invisible, because it carries no charge). Each cleavage shows up as a new peak at lower $m/z$, and the *difference* between peaks tells you the mass of the neutral that was lost.

$\\text{M}^{+\\bullet} \\rightarrow [\\text{fragment}]^+ + \\text{neutral}$

The single most important interpretive move in MS is therefore **subtraction**: take the molecular ion mass, subtract the mass of a prominent fragment, and identify the neutral that accounts for the gap. A loss of $15$ is a methyl ($\\text{CH}_3$); a loss of $18$ is water; a loss of $28$ is $\\text{CO}$ or ethylene; a loss of $29$ is $\\text{CHO}$ or $\\text{C}_2\\text{H}_5$.

Fragmentation is not random. Bonds break to give the **most stable** cation and the **most stable** neutral, so the dominant peaks reveal the weak points of the skeleton — which is exactly the structural information we want.
      `
    },
    {
      id: 'infra5-losses',
      type: 'text' as const,
      content: `
### A Catalog of Common Neutral Losses

These recurring mass differences are worth committing to memory. When you see one of them between the molecular ion and a strong fragment, you can usually name the group that left.

| Mass lost | Neutral fragment | Structural implication |
|-----------|------------------|------------------------|
| **15** | $\\text{CH}_3$ (methyl radical) | a methyl branch |
| **17** | $\\text{OH}$ | alcohol or carboxylic acid |
| **18** | $\\text{H}_2\\text{O}$ | alcohol (dehydration) |
| **28** | $\\text{CO}$ or $\\text{C}_2\\text{H}_4$ | carbonyl / ethyl-bearing chain |
| **29** | $\\text{CHO}$ or $\\text{C}_2\\text{H}_5$ | aldehyde / ethyl group |
| **31** | $\\text{OCH}_3$ | methyl ester or methyl ether |
| **43** | $\\text{C}_3\\text{H}_7$ or $\\text{CH}_3\\text{CO}$ (acylium) | propyl / acetyl (methyl ketone) |
| **45** | $\\text{COOH}$ or $\\text{OC}_2\\text{H}_5$ | carboxylic acid / ethyl ester |

**Stable cations to look for.** Some fragment ions are so stabilized that they dominate the spectrum:
- $m/z = 43$: the **acylium ion** $\\text{CH}_3\\text{CO}^+$, diagnostic of a methyl ketone, and also the propyl/isopropyl cation $\\text{C}_3\\text{H}_7^+$.
- $m/z = 77$: the **phenyl cation** $\\text{C}_6\\text{H}_5^+$, a giveaway for a monosubstituted benzene ring.
- $m/z = 91$: the **tropylium ion** $\\text{C}_7\\text{H}_7^+$, a beautifully stable aromatic seven-membered ring formed from a benzyl ($\\text{C}_6\\text{H}_5\\text{CH}_2$–) group. A strong peak at $91$ almost always means a benzylic carbon.
      `
    },
    {
      id: 'infra5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Naming the Neutral Loss
      `,
      exercise: {
        questions: [
          {
            question: 'A molecular ion at $m/z = 72$ loses a fragment to give a strong peak at $m/z = 57$. What neutral was most likely lost?',
            options: [
              'A methyl radical ($\\text{CH}_3$, 15)',
              'Water ($\\text{H}_2\\text{O}$, 18)',
              'Carbon monoxide ($\\text{CO}$, 28)',
              'A hydroxyl ($\\text{OH}$, 17)'
            ],
            correctAnswer: 0,
            explanation: 'The gap is $72 - 57 = 15$, the mass of a methyl radical $\\text{CH}_3$. Loss of 15 signals a methyl branch cleaving off. Water (18), CO (28), and OH (17) would give different mass differences, so the arithmetic alone identifies the methyl loss.'
          },
          {
            question: 'A strong fragment at $m/z = 91$ is observed for an aromatic-containing compound. This peak is best attributed to:',
            options: [
              'the phenyl cation $\\text{C}_6\\text{H}_5^+$',
              'an acylium ion $\\text{CH}_3\\text{CO}^+$',
              'a methyl cation',
              'the tropylium ion $\\text{C}_7\\text{H}_7^+$ from a benzylic position'
            ],
            correctAnswer: 3,
            explanation: 'The famously stable $m/z = 91$ peak is tropylium, $\\text{C}_7\\text{H}_7^+$, a symmetric aromatic seven-membered ring formed when a benzylic C–C bond breaks. Phenyl cation is $m/z = 77$; acylium ($\\text{CH}_3\\text{CO}^+$) is $m/z = 43$. A strong 91 thus flags a benzylic carbon.'
          },
          {
            question: 'A loss of 18 mass units from the molecular ion most strongly suggests the compound is:',
            options: [
              'a nitrile',
              'a methyl ketone',
              'an alcohol (losing water)',
              'an aromatic hydrocarbon'
            ],
            correctAnswer: 2,
            explanation: 'Loss of 18 is loss of water, the classic dehydration of an alcohol under EI conditions. Methyl ketones tend to lose 15 or show $m/z = 43$; nitriles and aromatics do not readily lose 18. The mass difference fingerprints the water loss.'
          }
        ]
      }
    },
    {
      id: 'infra5-mclafferty',
      type: 'text' as const,
      content: `
### The McLafferty Rearrangement

Most fragmentations are simple bond cleavages, but one **rearrangement** is so common and so diagnostic that it has a name. The **McLafferty rearrangement** occurs in carbonyl compounds (aldehydes, ketones, acids, esters) that possess a hydrogen on the **$\\gamma$-carbon** — the third carbon counting from the carbonyl.

In the rearrangement, the molecular ion adopts a six-membered cyclic transition state. The carbonyl oxygen plucks the $\\gamma$-hydrogen, and simultaneously the bond between the $\\alpha$ and $\\beta$ carbons breaks. The result is the loss of a neutral **alkene** and the formation of a stabilized **enol radical cation**:

$\\text{R–CO–CH}_2\\text{CH}_2\\text{CH}_2\\text{R}' \\rightarrow [\\text{enol}]^{+\\bullet} + \\text{alkene}$

**Why it matters.** The McLafferty peak appears at a *predictable, even-mass* value (when no nitrogen is present) and signals both a carbonyl and a chain at least three carbons long bearing a $\\gamma$-hydrogen. For example, 2-hexanone ($\\text{M}^{+\\bullet} = 100$) undergoes McLafferty to give a characteristic fragment at $m/z = 58$ (the enol of acetone), losing propene (mass 42). Recognizing this even-electron, even-mass fragment alongside an acylium $m/z = 43$ is strong evidence for a methyl ketone with a propyl tail.

> **Two clues, one structure.** A methyl ketone like 2-hexanone shows BOTH the $\\alpha$-cleavage acylium at $m/z = 43$ AND a McLafferty fragment at $m/z = 58$. Seeing the pair together is far more convincing than either peak alone.
      `
    },
    {
      id: 'infra5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — McLafferty
      `,
      exercise: {
        questions: [
          {
            question: 'The McLafferty rearrangement requires which structural feature in addition to a carbonyl group?',
            options: [
              'A halogen atom',
              'An aromatic ring',
              'A triple bond',
              'A hydrogen on the $\\gamma$-carbon and a six-membered cyclic transition state'
            ],
            correctAnswer: 3,
            explanation: 'McLafferty proceeds through a six-membered transition state in which the carbonyl oxygen abstracts a $\\gamma$-hydrogen while the $\\alpha$–$\\beta$ bond breaks, expelling a neutral alkene. Without a $\\gamma$-hydrogen the cyclic transfer is impossible. Halogens, aromatic rings, and triple bonds are not required.'
          },
          {
            question: 'In the McLafferty rearrangement of a ketone, what neutral species is lost?',
            options: [
              'Water',
              'Carbon monoxide',
              'An alkene',
              'A methyl radical'
            ],
            correctAnswer: 2,
            explanation: 'The rearrangement expels a neutral alkene and leaves behind a stabilized enol radical cation. This is distinct from simple $\\alpha$-cleavage (which loses a radical to give an acylium) or dehydration (which loses water). The alkene loss is the defining outcome.'
          },
          {
            question: 'A methyl ketone shows strong peaks at both $m/z = 43$ and $m/z = 58$. The best interpretation is:',
            options: [
              '$\\alpha$-cleavage gives the acylium at 43, and McLafferty gives the enol fragment at 58',
              'two different impurities',
              'both peaks are the molecular ion',
              'a chlorine isotope pattern'
            ],
            correctAnswer: 0,
            explanation: 'The acylium $\\text{CH}_3\\text{CO}^+$ at $m/z = 43$ arises from $\\alpha$-cleavage, while the even-mass $m/z = 58$ enol cation arises from McLafferty rearrangement. Their joint appearance is a hallmark of a methyl ketone with a sufficiently long chain, not impurities or isotope peaks.'
          }
        ]
      }
    },
    {
      id: 'infra5-nitrogen',
      type: 'text' as const,
      content: `
### The Nitrogen Rule

One of the quickest deductions in all of mass spectrometry comes from the *parity* of the molecular mass.

**The nitrogen rule:** a neutral organic molecule containing C, H, O, S, and the halogens has an **even** nominal molecular mass if it contains **zero or an even number of nitrogen atoms**, and an **odd** nominal molecular mass if it contains an **odd number of nitrogen atoms**.

Why? Nitrogen is the oddity among common organic elements: it has an even atomic mass (14) but an **odd valence** (3). Carbon, oxygen, sulfur all pair even mass with even valence; hydrogen and the halogens pair odd mass with odd valence. Working through the bookkeeping, each nitrogen flips the expected parity of the molecular mass.

**Worked example.** An unknown has $\\text{M}^{+\\bullet}$ at $m/z = 59$, an *odd* number. The nitrogen rule immediately says the molecule contains an odd number of nitrogens — most simply, **one nitrogen**. A reasonable formula is $\\text{C}_3\\text{H}_9\\text{N}$ (mass $59$), an amine such as propylamine or trimethylamine. Without computing anything further, the odd molecular ion has already told us a nitrogen is present.

**A corollary for fragments.** When an odd-mass molecular ion (one nitrogen) fragments by simple cleavage, the nitrogen-containing daughter ion often appears at an **even** $m/z$. So in nitrogen-containing molecules, prominent even-mass fragment ions frequently carry the nitrogen — a useful cross-check.
      `
    },
    {
      id: 'infra5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 5 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A compound has a molecular ion at $m/z = 73$. What does the nitrogen rule tell you, and what is a consistent simple formula?',
            options: [
              'It contains an odd number of nitrogens (one is simplest); consistent with $\\text{C}_4\\text{H}_{11}\\text{N}$',
              'It contains zero nitrogens; consistent with $\\text{C}_4\\text{H}_{10}\\text{O}$',
              'It must contain chlorine; consistent with $\\text{C}_3\\text{H}_6\\text{Cl}$',
              'The mass tells you nothing about nitrogen'
            ],
            correctAnswer: 0,
            explanation: 'An odd molecular mass (73) signals an odd number of nitrogen atoms, with one being the simplest case. The formula $\\text{C}_4\\text{H}_{11}\\text{N}$ (mass 73) fits, e.g. butylamine. An even-mass formula like $\\text{C}_4\\text{H}_{10}\\text{O}$ (74) would not match the odd ion, and there is no Cl isotope pattern implied.'
          },
          {
            question: 'A molecular ion at $m/z = 100$ ($\\text{C}_6\\text{H}_{12}\\text{O}$, 2-hexanone) shows fragments at $m/z = 85$, $m/z = 58$, and $m/z = 43$. Which assignment set is most consistent?',
            options: [
              '85 = loss of OH; 58 = chlorine isotope; 43 = molecular ion',
              '85 = loss of water; 58 = loss of CO; 43 = phenyl cation',
              '85 = loss of $\\text{CH}_3$ (15); 58 = McLafferty enol cation (loss of propene, 42); 43 = acylium $\\text{CH}_3\\text{CO}^+$',
              'All three peaks are isotope satellites'
            ],
            correctAnswer: 2,
            explanation: 'From $100$: losing $\\text{CH}_3$ (15) gives $85$; McLafferty expels propene (42) to give the acetone enol cation at $58$; and $\\alpha$-cleavage yields the acylium $\\text{CH}_3\\text{CO}^+$ at $43$. This trio is the textbook fingerprint of a methyl ketone. The other options misassign masses or invoke absent halogens/aromatics.'
          }
        ]
      }
    }
  ]
}
