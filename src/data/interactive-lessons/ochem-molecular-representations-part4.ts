export const oChemMolRepPart4Data = {
  topicSlug: 'molecular-representations',
  sections: [
    {
      id: 'molec4-intro',
      type: 'text' as const,
      content: `
## Molecular Representations — Degrees of Unsaturation

**Part 4 of 7**

The **degree of unsaturation** (DoU), also called the **index of hydrogen deficiency** (IHD), is a single number — computed directly from a molecular formula — that tells you the *total number of rings plus $\\pi$ bonds* in the molecule. It is one of the most powerful first moves in structure determination: before drawing anything, you can learn how "unsaturated" a compound is.

The logic rests on a reference point. A saturated, acyclic (open-chain) hydrocarbon has the formula $\\text{C}_n\\text{H}_{2n+2}$ — this is the maximum number of hydrogens $n$ carbons can hold. **Every** ring and **every** multiple bond removes exactly two hydrogens from that maximum, because forming a ring or a $\\pi$ bond uses up two bonds that would otherwise have gone to H atoms. So counting the *missing pairs of hydrogens* counts the rings and $\\pi$ bonds.
      `
    },
    {
      id: 'molec4-formula',
      type: 'text' as const,
      content: `
### The Formula

For a compound containing carbon (C), hydrogen (H), nitrogen (N), and halogens (X = F, Cl, Br, I):

$\\text{DoU} = \\frac{2C + 2 + N - H - X}{2}$

Two rules make this manageable:

- **Oxygen (and sulfur) are ignored.** A divalent atom like O inserts into a chain without changing the hydrogen count, so it drops out of the formula entirely.
- **Halogens count like hydrogens** (they are monovalent), so each $\\text{X}$ is subtracted just as each H is.
- **Nitrogen adds 1** to the numerator, because trivalent nitrogen lets the molecule hold one *more* hydrogen per N than carbon-only counting would predict.

What the result means:

- **0 DoU** $\\rightarrow$ a fully saturated, acyclic molecule (only single bonds, no rings).
- **1 DoU** $\\rightarrow$ exactly one ring **or** one double bond.
- **2 DoU** $\\rightarrow$ two double bonds, **or** one triple bond, **or** two rings, **or** one ring + one double bond.
- **4 DoU** $\\rightarrow$ a strong hint of a **benzene ring** (three C=C double bonds + one ring = 4).
      `
    },
    {
      id: 'molec4-worked',
      type: 'text' as const,
      content: `
### Worked Examples

**Example 1 — a pure hydrocarbon.** Compute the DoU of $\\text{C}_5\\text{H}_8$.

$\\text{DoU} = \\frac{2(5) + 2 - 8}{2} = \\frac{10 + 2 - 8}{2} = \\frac{4}{2} = 2$

Two degrees. So $\\text{C}_5\\text{H}_8$ could be a molecule with one triple bond (e.g. pent-1-yne), or two double bonds (a pentadiene), or one ring plus one double bond (e.g. cyclopentene), or two rings. The number narrows the possibilities enormously even though it does not pick one.

**Example 2 — with oxygen and nitrogen.** Compute the DoU of $\\text{C}_4\\text{H}_7\\text{NO}$ (a small amide-like formula).

Ignore the O. Then $C=4$, $H=7$, $N=1$, $X=0$:

$\\text{DoU} = \\frac{2(4) + 2 + 1 - 7}{2} = \\frac{8 + 2 + 1 - 7}{2} = \\frac{4}{2} = 2$

Two degrees of unsaturation — consistent, for instance, with one C=O and one ring, or a C=O plus a C=C.

**Example 3 — with a halogen.** Compute the DoU of $\\text{C}_6\\text{H}_{11}\\text{Cl}$.

Halogen counts like H, so $C=6$, $H=11$, $X=1$:

$\\text{DoU} = \\frac{2(6) + 2 - 11 - 1}{2} = \\frac{12 + 2 - 11 - 1}{2} = \\frac{2}{2} = 1$

One degree — one ring or one double bond (e.g. chlorocyclohexane, a ring, or a chlorohexene).

**Example 4 — diagnosing benzene.** Toluene is $\\text{C}_7\\text{H}_8$:

$\\text{DoU} = \\frac{2(7) + 2 - 8}{2} = \\frac{14 + 2 - 8}{2} = \\frac{8}{2} = 4$

Four degrees is the classic fingerprint of an aromatic (benzene) ring: 3 double bonds + 1 ring. Whenever you see DoU $= 4$ (or more) in an unknown, a benzene ring is a leading hypothesis.
      `
    },
    {
      id: 'molec4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Computing DoU
      `,
      exercise: {
        questions: [
          {
            question: 'What is the degree of unsaturation of C6H12?',
            options: [
              '0',
              '1',
              '2',
              '3'
            ],
            correctAnswer: 1,
            explanation: 'DoU = (2·6 + 2 − 12)/2 = (12 + 2 − 12)/2 = 2/2 = 1. One degree means one ring OR one double bond — for example, cyclohexane (a ring) or hexene (a double bond). The trap answer 0 forgets that a saturated C6 chain would be C6H14, not C6H12.'
          },
          {
            question: 'When applying the degree-of-unsaturation formula to C3H6O, how should the oxygen be treated?',
            options: [
              'Subtract it like a hydrogen',
              'Add it like a nitrogen',
              'Ignore it entirely — divalent oxygen does not affect the hydrogen count',
              'Multiply the whole result by the number of oxygens'
            ],
            correctAnswer: 2,
            explanation: 'Divalent O (and S) inserts into a structure without changing how many hydrogens it holds, so it is omitted from the formula. Thus C3H6O gives DoU = (2·3 + 2 − 6)/2 = 1, matching acetone (one C=O) or propylene oxide (one ring). Treating O like H or N is a classic error.'
          },
          {
            question: 'A nitrogen-containing compound has formula C4H9N. What is its degree of unsaturation, and how does nitrogen enter the calculation?',
            options: [
              'DoU = 1; nitrogen adds 1 to the numerator because it is trivalent',
              'DoU = 0; nitrogen is ignored like oxygen',
              'DoU = 2; nitrogen is subtracted like a hydrogen',
              'DoU = 1; nitrogen is subtracted like a halogen'
            ],
            correctAnswer: 0,
            explanation: 'DoU = (2·4 + 2 + 1 − 9)/2 = (8 + 2 + 1 − 9)/2 = 2/2 = 1. Trivalent nitrogen ADDS 1 to the numerator (it lets the molecule hold one extra H per N). Ignoring it (b) or subtracting it (c, d) are the standard mistakes.'
          }
        ]
      }
    },
    {
      id: 'molec4-interpreting',
      type: 'text' as const,
      content: `
### Interpreting the Number

A degree of unsaturation is *agnostic* about which kind of unsaturation is present — it counts rings and $\\pi$ bonds together. Decoding it is a reasoning exercise:

| DoU | Possible structural interpretations |
|-----|--------------------------------------|
| 0 | Saturated, acyclic (alkane-like skeleton, only single bonds) |
| 1 | One C=C, **or** one C=O, **or** one ring |
| 2 | One C$\\equiv$C triple bond, **or** two double bonds, **or** ring + double bond, **or** two rings |
| 3 | Combinations summing to 3 (e.g. a ring plus two double bonds) |
| 4 | Often a benzene ring (3 C=C + 1 ring); also four separate units |

Notice that a **triple bond contributes 2** degrees (it is two $\\pi$ bonds on top of the $\\sigma$ bond), and a **carbonyl C=O contributes 1** (it is one $\\pi$ bond — oxygen having been ignored in the formula). When you combine DoU with the functional-group reading skills from Part 2, you can often guess a structure: a formula giving DoU $= 1$ with an oxygen present strongly suggests *either* a C=O (aldehyde/ketone/acid) *or* a cyclic ether — and spectroscopy then decides between them.

> **Strategy:** In structure elucidation the DoU is computed *first*, because it instantly tells you whether to expect rings, multiple bonds, or aromaticity. A DoU of 0 means you can stop looking for any double bonds; a DoU of 4 sends you hunting for a benzene ring. It converts a bare formula into a structural hypothesis.
      `
    },
    {
      id: 'molec4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Interpreting DoU
      `,
      exercise: {
        questions: [
          {
            question: 'A hydrocarbon has 2 degrees of unsaturation. Which of the following is NOT a valid structural interpretation?',
            options: [
              'One carbon–carbon triple bond',
              'Two carbon–carbon double bonds',
              'One ring plus one double bond',
              'One benzene ring'
            ],
            correctAnswer: 3,
            explanation: 'A benzene ring accounts for 4 degrees (three C=C plus one ring), not 2, so it cannot be explained by only 2 DoU. The other three options — a triple bond (2), two double bonds (2), or ring + double bond (2) — each total exactly 2 and are all valid.'
          },
          {
            question: 'How many degrees of unsaturation does a single carbon–carbon triple bond contribute?',
            options: [
              '1',
              '2',
              '3',
              '0'
            ],
            correctAnswer: 1,
            explanation: 'A triple bond is one sigma plus two pi bonds; each pi bond is one degree, so a triple bond contributes 2 degrees of unsaturation. A double bond (one pi bond) contributes only 1 — confusing the two is a common slip.'
          },
          {
            question: 'You compute DoU = 4 for an unknown of formula C8H8O. Which hypothesis should you investigate first?',
            options: [
              'The molecule is a fully saturated, acyclic alcohol',
              'The molecule likely contains a benzene ring (which alone accounts for 4 degrees)',
              'The molecule must contain two carbon–carbon triple bonds',
              'The oxygen contributes the 4 degrees'
            ],
            correctAnswer: 1,
            explanation: 'DoU = 4 is the signature of a benzene ring (3 C=C + 1 ring). With an O also present, a likely candidate is something like acetophenone (a benzene ring plus a C=O would actually give 5 — so here the 4 points squarely at the aromatic ring with the remaining unsaturation accounted for). A saturated molecule has DoU 0 (a), and oxygen contributes 0 degrees (d).'
          }
        ]
      }
    },
    {
      id: 'molec4-synthesis',
      type: 'text' as const,
      content: `
### Putting It Together

The degree of unsaturation is the bridge between a molecular formula and a structural drawing. Combined with the earlier parts, the workflow becomes:

1. Compute the DoU from the formula (this part).
2. Decide whether to expect rings, $\\pi$ bonds, or aromaticity.
3. Use functional-group logic (Part 2) and isomer reasoning (Part 3) to propose candidate structures.
4. Draw them as skeletal structures (Part 1) and check the implied hydrogen count against the formula.

> **Takeaway:** DoU compresses a molecule's "unsaturation budget" into one integer you can compute in seconds. It never tells you the exact structure, but it rules out vast swaths of impossibilities and points you toward rings and multiple bonds — making it the natural first step every time you are handed a formula. Part 5 turns to predicting *physical* properties from these same structural features.
      `
    },
    {
      id: 'molec4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 4 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Compute the degree of unsaturation for benzene, C6H6.',
            options: [
              '2',
              '3',
              '4',
              '6'
            ],
            correctAnswer: 2,
            explanation: 'DoU = (2·6 + 2 − 6)/2 = (12 + 2 − 6)/2 = 8/2 = 4. This matches benzene\'s structure exactly: three carbon–carbon double bonds plus one ring = 4 degrees. The value 4 is the textbook fingerprint of an aromatic ring.'
          },
          {
            question: 'An unknown has formula C5H10. You compute DoU = 1 and your lab spectra show NO evidence of any carbon–carbon double bond. What is the most reasonable structural conclusion?',
            options: [
              'The DoU calculation must be wrong',
              'The single degree of unsaturation is accounted for by a ring (e.g. cyclopentane), not a double bond',
              'The molecule must contain a triple bond',
              'The molecule is fully saturated and acyclic'
            ],
            correctAnswer: 1,
            explanation: 'DoU = (2·5 + 2 − 10)/2 = 1. One degree means one ring OR one double bond; if spectra rule out a C=C, the degree is satisfied by a ring such as cyclopentane. A triple bond would require 2 degrees (c), and DoU = 1 is incompatible with a fully saturated acyclic structure (d).'
          }
        ]
      }
    }
  ]
}
