export const oChemNMRPart5Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s5-intro',
      type: 'text' as const,
      content: `
## Putting It Together: Structure Determination

**Part 5 of 7 — Structure Determination**

Individually, a chemical shift or a multiplicity is a clue. The power of spectroscopy comes from combining them in a disciplined order so that each piece of data *constrains* the next. This part lays out the systematic workflow that turns a molecular formula plus a few spectra into a unique structure, and walks one unknown all the way through.

The four-step routine:

1. **Molecular formula $\\rightarrow$ degrees of unsaturation.** Establish how many rings and $\\pi$ bonds the molecule must contain.
2. **IR $\\rightarrow$ functional groups.** Identify the major functional groups (C=O, O–H, N–H, C≡N, aromatic).
3. **$^1\\text{H}$ NMR $\\rightarrow$ environments, counts, neighbors.** Count signals, read integration, and decode splitting to find fragments.
4. **Assemble the fragments** into a structure consistent with *every* piece of data, then check it against the spectra.
      `
    },
    {
      id: 'nmr-s5-dou',
      type: 'text' as const,
      content: `
### Step 1 — Degrees of Unsaturation

The **degree of unsaturation** (DoU, also "index of hydrogen deficiency") counts the total number of rings plus $\\pi$ bonds in a molecule. Every ring and every $\\pi$ bond removes two hydrogens relative to the fully saturated formula, so a single number computed from the formula tells you how much unsaturation to look for.

For a compound $\\text{C}_c\\text{H}_h\\text{N}_n\\text{O}_o\\text{X}_x$ (X = halogen):

$\\text{DoU} = \\dfrac{2c + 2 + n - h - x}{2}$

Oxygen does not appear because adding an O (e.g., inserting it into a C–H or C–C bond) does not change the hydrogen count. Each halogen counts like a hydrogen; each nitrogen adds one to the numerator.

**Worked calculations:**

- $\\text{C}_4\\text{H}_8\\text{O}$: $\\text{DoU} = (2\\cdot 4 + 2 - 8)/2 = 2/2 = 1$. One ring *or* one $\\pi$ bond — consistent with a ketone, an aldehyde, or a cyclic ether/alcohol.
- $\\text{C}_7\\text{H}_8\\text{O}$: $\\text{DoU} = (14 + 2 - 8)/2 = 4$. Four degrees strongly suggests a **benzene ring** (a benzene ring is exactly 4: three $\\pi$ bonds + one ring).
- $\\text{C}_8\\text{H}_9\\text{NO}_2$: $\\text{DoU} = (16 + 2 + 1 - 9)/2 = 5$. A benzene ring (4) plus one more $\\pi$ bond (e.g., a C=O).

> **The interpretive habit:** a DoU of **4 is the fingerprint of an aromatic ring** — see it and immediately look for aromatic signals at $\\delta\\, 6.5\\text{–}8$ in $^1\\text{H}$ NMR and $100\\text{–}150\\ \\text{ppm}$ in $^{13}\\text{C}$. A DoU of 1 with an oxygen says "one C=O or one ring." DoU bounds the whole problem before you read a single peak.
      `
    },
    {
      id: 'nmr-s5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Degrees of Unsaturation
      `,
      exercise: {
        questions: [
          {
            question: 'Calculate the degree of unsaturation for $\\text{C}_5\\text{H}_8\\text{O}$.',
            options: [
              '0 — the molecule is fully saturated',
              '1',
              '2',
              '4 — it must contain a benzene ring'
            ],
            correctAnswer: 2,
            explanation: 'Using $\\text{DoU} = (2c + 2 - h)/2$ with oxygen ignored: $(2\\cdot 5 + 2 - 8)/2 = (12 - 8)/2 = 2$. Two degrees of unsaturation means some combination of two rings and/or $\\pi$ bonds (e.g., a ring plus a C=O, or a C≡C). It is neither saturated nor aromatic — a benzene ring would require DoU = 4 and at least six carbons.'
          },
          {
            question: 'An unknown has molecular formula $\\text{C}_7\\text{H}_8\\text{O}$ and DoU = 4. What is the most useful immediate inference?',
            options: [
              'The molecule must contain two carbon–carbon triple bonds',
              'The molecule very likely contains a benzene ring, which by itself accounts for all 4 degrees',
              'The molecule is fully saturated and contains an alcohol',
              'The oxygen must be a carbonyl because DoU counts oxygen'
            ],
            correctAnswer: 1,
            explanation: 'A benzene ring is exactly 4 degrees of unsaturation (three $\\pi$ bonds + one ring), so DoU = 4 in a 7-carbon compound is the classic signature of an aromatic ring — confirm with aromatic $^1\\text{H}$ signals near $7\\ \\text{ppm}$. DoU = 4 rules out "fully saturated"; oxygen does not contribute to DoU at all (so option 4’s reasoning is wrong); two triple bonds would be 4 but is far less likely here than one ring.'
          }
        ]
      }
    },
    {
      id: 'nmr-s5-ir',
      type: 'text' as const,
      content: `
### Step 2 — IR for Functional Groups

Infrared spectroscopy answers a question NMR answers only indirectly: *which functional groups are present?* A few strong, diagnostic IR bands quickly confirm or exclude the major groups, and they pair naturally with the DoU from Step 1.

| IR band ($\\text{cm}^{-1}$) | Functional group | Pairs with DoU |
|------|------|------|
| $1700\\text{–}1750$, strong, sharp | $\\text{C=O}$ (carbonyl) | uses 1 degree |
| $3200\\text{–}3550$, broad | $\\text{O-H}$ (alcohol/acid) | — |
| $3300\\text{–}3500$, medium (1–2 peaks) | $\\text{N-H}$ (amine/amide) | — |
| $\\sim 2250$, sharp | $\\text{C}\\equiv\\text{N}$ or $\\text{C}\\equiv\\text{C}$ | uses 2 degrees |
| $1600\\text{ and }1500$, medium | aromatic $\\text{C=C}$ | part of aromatic 4 |
| $\\sim 3300$, sharp | terminal alkyne $\\equiv\\text{C-H}$ | — |

**The strategy:** if DoU $\\geq 1$ and IR shows a strong band near $1715\\ \\text{cm}^{-1}$, a carbonyl accounts for one degree — now decide *which* carbonyl using NMR shift and chemistry. If DoU = 4 and IR shows bands at $1600/1500\\ \\text{cm}^{-1}$, the aromatic ring is confirmed. IR rarely gives the whole structure, but it pins down the functional groups so NMR can focus on connectivity.

> **Reading habit:** treat IR and DoU as cross-checks. A $1715\\ \\text{cm}^{-1}$ band with *no* leftover degree of unsaturation would be a contradiction — re-examine the formula. When IR and DoU agree (e.g., "one C=O uses the molecule’s single degree"), you have a firm functional-group assignment to carry into the NMR analysis.
      `
    },
    {
      id: 'nmr-s5-nmrstep',
      type: 'text' as const,
      content: `
### Step 3 — $^1\\text{H}$ NMR: Environments, Counts, and Neighbors

Now extract fragments from the proton spectrum, reading three properties of every signal in concert:

- **Chemical shift** $\\rightarrow$ *what kind* of proton (alkyl, $\\alpha$-to-O, vinyl, aromatic, aldehyde…).
- **Integration** $\\rightarrow$ *how many* protons in that environment (reduce the ratio, reconcile with the formula).
- **Multiplicity** ($n+1$) $\\rightarrow$ *how many neighbors*, which tells you what is attached to the adjacent carbon.

Translate each signal into a fragment and tally the protons:

| Signal reads as | Likely fragment |
|------|------|
| 3H triplet near $1\\ \\text{ppm}$ + 2H quartet near $2\\text{–}4$ | ethyl, $\\text{-CH}_2\\text{CH}_3$ |
| 6H doublet + 1H septet | isopropyl, $(\\text{CH}_3)_2\\text{CH-}$ |
| 9H singlet near $1\\ \\text{ppm}$ | *tert*-butyl, $(\\text{CH}_3)_3\\text{C-}$ |
| 3H singlet near $2\\ \\text{ppm}$ | $\\text{CH}_3$ next to C=O or aromatic (no H neighbors) |
| 2H singlet near $3.5\\text{–}5$ | isolated $\\text{CH}_2$ (e.g., $\\text{Ar-CH}_2\\text{-O}$, benzylic) |
| 1H singlet near $9.7$ | aldehyde $\\text{CHO}$ |
| signals at $6.5\\text{–}8$ summing to 4–5 H | aromatic ring (the pattern hints at substitution) |
| broad 1H that vanishes on $\\text{D}_2\\text{O}$ | exchangeable $\\text{O-H}$ / $\\text{N-H}$ |

A **singlet** is especially informative: it means *no* coupling neighbors, so that group is flanked by carbons bearing no hydrogens (a carbonyl, a quaternary carbon, an oxygen, or the symmetric equivalent). Add up the protons you have assigned and make sure they total the molecular formula — any shortfall points to an undetected fragment (often an exchangeable proton or a symmetric duplication).
      `
    },
    {
      id: 'nmr-s5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reading Fragments
      `,
      exercise: {
        questions: [
          {
            question: 'A $^1\\text{H}$ NMR shows a 9H singlet at $\\delta \\approx 1.0\\ \\text{ppm}$. What fragment is this, and why a singlet?',
            options: [
              'An ethyl group, split into a singlet by fast rotation',
              'A tert-butyl group, $(\\text{CH}_3)_3\\text{C-}$: nine equivalent protons with no hydrogen-bearing neighbor, hence a singlet',
              'Three separate methyl doublets that overlap',
              'An aromatic ring with nine protons'
            ],
            correctAnswer: 1,
            explanation: 'Nine equivalent protons as one singlet at ~$1\\ \\text{ppm}$ is the unmistakable tert-butyl group: the three methyls are equivalent (9H) and the quaternary carbon they attach to bears no hydrogens, so there are no neighbors to split them. An ethyl gives 5 H in two multiplets; a benzene ring has at most 6 aromatic H well downfield.'
          },
          {
            question: 'Why does an isolated $\\text{CH}_2$ such as $\\text{Ar-CH}_2\\text{-O-}$ appear as a singlet?',
            options: [
              'Because $\\text{CH}_2$ groups are always singlets',
              'Because its neighboring atoms (an aromatic carbon and an oxygen) bear no coupling hydrogens three bonds away, so there are no neighbors to apply the $n+1$ rule',
              'Because the two $\\text{CH}_2$ protons split each other into one line',
              'Because oxygen removes all splitting from the whole molecule'
            ],
            correctAnswer: 1,
            explanation: 'Splitting requires hydrogens on adjacent atoms; here the $\\text{CH}_2$ is flanked by an aromatic ring carbon and an oxygen, neither of which provides a coupling H, so $n=0$ and the signal is a singlet. A $\\text{CH}_2$ is *not* always a singlet (it is a triplet next to a $\\text{CH}_2$, etc.); equivalent protons do not split each other; and oxygen does not globally suppress coupling.'
          }
        ]
      }
    },
    {
      id: 'nmr-s5-worked',
      type: 'text' as const,
      content: `
### Worked Structure Determination — $\\text{C}_9\\text{H}_{10}\\text{O}_2$

Let us run the full pipeline on an unknown of formula $\\text{C}_9\\text{H}_{10}\\text{O}_2$.

**Step 1 — DoU:** $(2\\cdot 9 + 2 - 10)/2 = (20 - 10)/2 = 5$. Five degrees: a benzene ring (4) plus one more $\\pi$ bond — anticipate an aromatic ring and one $\\text{C=O}$.

**Step 2 — IR:** a strong band at $1740\\ \\text{cm}^{-1}$ confirms an **ester-type carbonyl** (using the 5th degree); bands at $1600/1500\\ \\text{cm}^{-1}$ confirm the aromatic ring. No broad O–H, so not a carboxylic acid.

**Step 3 — $^1\\text{H}$ NMR:**
- $\\delta\\ 7.3$, 5H, multiplet $\\rightarrow$ a **monosubstituted benzene** ($\\text{C}_6\\text{H}_5\\text{-}$).
- $\\delta\\ 5.1$, 2H, singlet $\\rightarrow$ an isolated $\\text{O-CH}_2$ deshielded by both ring and oxygen (benzylic, $\\text{Ar-CH}_2\\text{-O}$).
- $\\delta\\ 2.1$, 3H, singlet $\\rightarrow$ a $\\text{CH}_3$ next to C=O with no H neighbors (an acetyl methyl, $\\text{CH}_3\\text{-C=O}$).

Protons assigned: $5 + 2 + 3 = 10$, matching $\\text{H}_{10}$.

**Step 4 — Assemble.** Fragments: $\\text{C}_6\\text{H}_5\\text{-}$, $\\text{-CH}_2\\text{-O-}$, $\\text{CH}_3\\text{-C(=O)-}$, plus the ester carbonyl/oxygen from IR + DoU. Stitching them so the ester links the benzylic $\\text{CH}_2$ to the acetyl group gives **benzyl acetate**, $\\text{C}_6\\text{H}_5\\text{CH}_2\\text{-O-C(=O)-CH}_3$. Check: 9 C, 10 H, 2 O ✓; ester C=O at $1740\\ \\text{cm}^{-1}$ ✓; benzylic $\\text{OCH}_2$ singlet at $5.1$ ✓; acetyl singlet at $2.1$ ✓; five aromatic H ✓. Every datum is satisfied — the structure is secure.

> **Why the order matters:** DoU told us to expect a ring + a carbonyl *before* we touched the NMR; IR confirmed the ester; NMR’s singlets (no neighbors) then forced the connectivity. Each step narrowed the field, so the final assembly had essentially one consistent answer.
      `
    },
    {
      id: 'nmr-s5-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 5 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'In the worked $\\text{C}_9\\text{H}_{10}\\text{O}_2$ problem, the 2H singlet at $\\delta \\approx 5.1\\ \\text{ppm}$ was assigned to a benzylic $\\text{O-CH}_2$. Which features justify both the shift and the multiplicity?',
            options: [
              'The shift is high because of an aromatic ring current only, and it is a singlet because $\\text{CH}_2$ is always a singlet',
              'The downfield shift comes from being attached to both the ring and an oxygen, and it is a singlet because the flanking groups (aromatic C and ester O) provide no coupling hydrogens',
              'The shift is low for a $\\text{CH}_2$, and it is a triplet from the adjacent $\\text{CH}_3$',
              'It is an aldehyde proton, which always appears near $5\\ \\text{ppm}$ as a singlet'
            ],
            correctAnswer: 1,
            explanation: 'A $\\text{CH}_2$ bonded to both a benzene ring and an ester oxygen is doubly deshielded to ~$5\\ \\text{ppm}$, and because its neighbors (ring carbon, oxygen) carry no coupling hydrogens, it is a singlet ($n=0$). A $\\text{CH}_2$ is not inherently a singlet; $5\\ \\text{ppm}$ is high (not low) for a methylene; and aldehyde protons appear near $9.7\\ \\text{ppm}$, not $5$.'
          },
          {
            question: 'What is the best justification for analyzing an unknown in the order DoU $\\rightarrow$ IR $\\rightarrow$ NMR rather than starting with NMR splitting?',
            options: [
              'NMR splitting is unreliable and should be ignored',
              'Each early step constrains the problem — DoU bounds rings/$\\pi$ bonds, IR fixes functional groups — so the NMR connectivity analysis has far fewer possibilities to consider',
              'IR alone always gives the full structure, making NMR optional',
              'The order does not matter; any sequence gives the same effort'
            ],
            correctAnswer: 1,
            explanation: 'Working from coarse to fine, DoU tells you how much unsaturation to expect and IR identifies the functional groups, so by the time you decode NMR splitting the candidate structures are already tightly limited. NMR splitting is essential, not unreliable (option 1); IR rarely gives full connectivity (option 3); and a disciplined order genuinely reduces effort and error (option 4).'
          }
        ]
      }
    }
  ]
}
