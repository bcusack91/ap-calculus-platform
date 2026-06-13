export const oChemMolRepPart6Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec6-intro',
      type: 'text' as const,
      content: `
## Molecular Representations — Problem-Solving Workshop

**Part 6 of 7**

This part is a workshop: no new theory, just the disciplined application of everything from Parts 1–5 to multi-step problems. The professional skill you are building is **structure elucidation** — reasoning from a molecular formula and a few clues to a real structural drawing. The toolkit:

1. **Read and draw** skeletal structures, counting implied hydrogens (Part 1).
2. **Recognize functional groups** on sight (Part 2).
3. **Reason about constitutional isomers** that share a formula (Part 3).
4. **Compute degrees of unsaturation** to budget rings and $\\pi$ bonds (Part 4).
5. **Predict physical properties** from structure via IMFs (Part 5).

The recommended order of attack on any unknown is: **formula $\\rightarrow$ DoU $\\rightarrow$ functional-group clues $\\rightarrow$ candidate structures $\\rightarrow$ check hydrogen count.**
      `
    },
    {
      id: 'molec6-workflow',
      type: 'text' as const,
      content: `
### A Complete Worked Problem

**Problem.** An unknown compound has molecular formula $\\text{C}_4\\text{H}_8\\text{O}$. It does not hydrogen bond (no broad O$\\text{–}$H signal), but it does contain a carbonyl group. Propose structures.

**Step 1 — Degrees of unsaturation.** Oxygen is ignored:
$\\text{DoU} = \\frac{2(4) + 2 - 8}{2} = \\frac{8 + 2 - 8}{2} = \\frac{2}{2} = 1$.
One degree of unsaturation — one ring **or** one double bond.

**Step 2 — Use the clues.** A carbonyl ($\\text{C=O}$) is one double bond, which *accounts for the entire degree of unsaturation*. So the molecule has a C=O and **no ring and no other multiple bond**. The "no O$\\text{–}$H" clue rules out a carboxylic acid (it would need 2 oxygens anyway) and rules out an enol/alcohol.

**Step 3 — Candidate functional groups.** A single C=O with no O$\\text{–}$H, using exactly one oxygen, is an **aldehyde** or a **ketone**.

**Step 4 — Draw the constitutional isomers.**
- **Butanal**, $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CHO}$ — a terminal carbonyl (aldehyde).
- **2-Methylpropanal**, $\\text{(CH}_3\\text{)}_2\\text{CHCHO}$ — a branched aldehyde.
- **Butan-2-one** (MEK), $\\text{CH}_3\\text{C(=O)CH}_2\\text{CH}_3$ — an internal carbonyl (ketone).

**Step 5 — Verify the hydrogen count** on, say, butan-2-one: two $\\text{CH}_3$ (6 H) + one $\\text{CH}_2$ (2 H) + the carbonyl carbon (0 H) = 8 H, with 4 C and 1 O. $\\text{C}_4\\text{H}_8\\text{O}$ confirmed.

This five-step routine — applied here to $\\text{C}_4\\text{H}_8\\text{O}$ — is the same procedure you will use on every structure problem in the course.
      `
    },
    {
      id: 'molec6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Running the Workflow
      `,
      exercise: {
        questions: [
          {
            question: 'For the unknown C4H8O above, why does the presence of a single carbonyl (C=O) mean the molecule contains no ring?',
            options: [
              'Carbonyls and rings cannot coexist in any molecule',
              'The molecule has only 1 degree of unsaturation, and the C=O double bond uses it up entirely, leaving none for a ring',
              'Oxygen prevents rings from forming',
              'Rings always require 4 degrees of unsaturation'
            ],
            correctAnswer: 1,
            explanation: 'DoU = 1, and a C=O is itself one degree; once it is "spent" there is no remaining unsaturation budget for a ring. (Carbonyls and rings certainly can coexist in larger molecules with higher DoU — trap a is false — but not here.)'
          },
          {
            question: 'In structure elucidation, what is the recommended FIRST quantitative step after writing down the molecular formula?',
            options: [
              'Guess the boiling point',
              'Compute the degree of unsaturation to learn how many rings and pi bonds to expect',
              'Count the hydrogens on each carbon',
              'Assume the molecule is aromatic'
            ],
            correctAnswer: 1,
            explanation: 'Computing the DoU first tells you immediately whether to hunt for rings, double bonds, triple bonds, or aromaticity — it frames every later decision. Hydrogen counting comes at the verification stage, and you never assume aromaticity without evidence (a DoU of at least 4).'
          },
          {
            question: 'Butanal and butan-2-one both fit C4H8O. What is their relationship and the structural difference?',
            options: [
              'They are identical compounds',
              'They are constitutional isomers: butanal has a terminal carbonyl (aldehyde), butan-2-one has an internal carbonyl (ketone)',
              'They have different molecular formulas',
              'One is saturated and one is aromatic'
            ],
            correctAnswer: 1,
            explanation: 'Same formula (C4H8O), different connectivity of the carbonyl — terminal (aldehyde) vs. internal (ketone) — makes them constitutional isomers. Both have DoU = 1 and neither is aromatic (which would need DoU ≥ 4).'
          }
        ]
      }
    },
    {
      id: 'molec6-aromatic-problem',
      type: 'text' as const,
      content: `
### A Second Worked Problem — Spotting Aromaticity

**Problem.** An unknown has formula $\\text{C}_7\\text{H}_8\\text{O}$ and is only weakly water-soluble. Where do you start?

**Step 1 — DoU.** $\\text{DoU} = \\frac{2(7) + 2 - 8}{2} = \\frac{14 + 2 - 8}{2} = \\frac{8}{2} = 4$.

**Step 2 — Interpret.** Four degrees is the fingerprint of a **benzene ring**. So hypothesize an aromatic ring (which consumes all 4 degrees), leaving one carbon and the oxygen to form a *saturated* substituent.

**Step 3 — Place the substituent.** With a $\\text{C}_6$ aromatic ring used up, the remaining $\\text{CH}_x\\text{O}$ can be:
- A hydroxymethyl group on benzene: **benzyl alcohol**, $\\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH}$ (an aromatic ring + a $\\text{–CH}_2\\text{OH}$). It hydrogen bonds, but the big nonpolar ring keeps it only modestly water-soluble — consistent with the clue.
- A methyl + a ring $\\text{–OH}$: **the cresols** (methylphenols), $\\text{CH}_3\\text{–C}_6\\text{H}_4\\text{–OH}$.
- A methyl ether on benzene: **anisole**, $\\text{C}_6\\text{H}_5\\text{OCH}_3$ (no O$\\text{–}$H, so no hydrogen bonding; least water-soluble).

**Step 4 — Use the solubility clue** to discriminate: "weakly soluble" fits the aromatic alcohols better than the very hydrophobic anisole, but spectroscopy would settle it. The point is that **DoU $= 4$ instantly reorganized the whole problem around an aromatic ring** — turning an abstract formula into a short list of real molecules.

> **Pattern to memorize:** $\\text{DoU} \\ge 4$ with a $\\text{C}_6$ available $\\Rightarrow$ suspect benzene. It is the highest-leverage single inference in introductory structure determination.
      `
    },
    {
      id: 'molec6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Integrated Reasoning
      `,
      exercise: {
        questions: [
          {
            question: 'You compute DoU = 4 for C7H8O and the carbon count includes a possible C6 unit. What single structural hypothesis most efficiently explains the 4 degrees?',
            options: [
              'Two carbon–carbon triple bonds',
              'A benzene (aromatic) ring, which accounts for exactly 4 degrees',
              'Four separate carbonyl groups',
              'A fully saturated chain'
            ],
            correctAnswer: 1,
            explanation: 'A benzene ring = 3 C=C + 1 ring = 4 degrees, neatly using a C6 unit. Two triple bonds would be 4 degrees too but is far less likely for this formula, and a saturated chain has DoU 0. The aromatic-ring hypothesis is the standard, highest-leverage call.'
          },
          {
            question: 'Among benzyl alcohol (C6H5CH2OH) and anisole (C6H5OCH3), both C7H8O, which would you predict to be LESS soluble in water, and why?',
            options: [
              'Benzyl alcohol, because it has an O–H',
              'Anisole, because it is an ether with no O–H and therefore cannot donate hydrogen bonds',
              'They are equally soluble',
              'Anisole, because it contains no oxygen'
            ],
            correctAnswer: 1,
            explanation: 'Anisole is an ether (C–O–C) with no O–H, so it cannot donate hydrogen bonds to water and is more hydrophobic. Benzyl alcohol\'s –OH does hydrogen bond, raising its (still modest) water solubility. Anisole does contain oxygen (trap d is false); it just lacks an O–H.'
          },
          {
            question: 'A compound C5H10 is reported. You compute DoU = 1 and learn it decolorizes bromine (a test for C=C double bonds). What do you conclude?',
            options: [
              'The one degree of unsaturation is a ring',
              'The one degree of unsaturation is a carbon–carbon double bond (an alkene such as a pentene)',
              'The molecule must be aromatic',
              'The DoU must be 4'
            ],
            correctAnswer: 1,
            explanation: 'DoU = (2·5 + 2 − 10)/2 = 1. A positive bromine test indicates a C=C double bond, so the single degree is a double bond (a pentene), not a ring. Aromaticity would require DoU ≥ 4, which this formula does not have.'
          }
        ]
      }
    },
    {
      id: 'molec6-strategy',
      type: 'text' as const,
      content: `
### Consolidating the Strategy

Every problem in this workshop used the same backbone. Internalize it as a checklist:

| Step | Question you ask | Tool from earlier parts |
|------|------------------|--------------------------|
| 1 | How many rings + $\\pi$ bonds? | Degree of unsaturation (Part 4) |
| 2 | What functional groups are hinted? | Group recognition (Part 2) |
| 3 | Which constitutional isomers fit? | Isomer reasoning (Part 3) |
| 4 | What do the candidates look like? | Skeletal drawing (Part 1) |
| 5 | Do the H counts match the formula? | Implied-hydrogen counting (Part 1) |
| 6 | Which fits the property clues? | IMFs and properties (Part 5) |

> **Takeaway:** Structure elucidation is not guesswork — it is a sequence of constraints, each narrowing the field. The molecular formula and its degree of unsaturation set the boundaries; functional-group clues and physical properties pick out the answer; and skeletal drawing plus hydrogen counting verify it. Part 7 reviews and ties the entire suite together.
      `
    },
    {
      id: 'molec6-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 6 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'You are handed only the formula C4H8O with a clue that the compound contains a carbonyl and shows no O–H. Working the standard routine, which list correctly gives plausible structures?',
            options: [
              'Benzene derivatives',
              'Butanal, 2-methylpropanal, and butan-2-one (aldehydes and a ketone)',
              'Butane and isobutane',
              'Carboxylic acids only'
            ],
            correctAnswer: 1,
            explanation: 'DoU = 1, fully used by the C=O; with one oxygen and no O–H, the candidates are aldehydes (butanal, 2-methylpropanal) and a ketone (butan-2-one). Benzene needs DoU 4; butane/isobutane have no oxygen; carboxylic acids need two oxygens and an O–H.'
          },
          {
            question: 'What is the single most important reason to compute the degree of unsaturation BEFORE proposing any structures?',
            options: [
              'It tells you the exact compound immediately',
              'It bounds the problem — telling you how many rings and multiple bonds (including possible aromaticity) the structure must contain, which constrains every later step',
              'It is required to calculate molecular weight',
              'It eliminates the need to count hydrogens'
            ],
            correctAnswer: 1,
            explanation: 'The DoU sets the structural budget: it says how much unsaturation (rings + pi bonds) must be present, which immediately constrains the candidate structures. It never names the exact compound by itself (trap a), and you still verify by counting hydrogens at the end (trap d).'
          }
        ]
      }
    }
  ]
}
