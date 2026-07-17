export const oChemNMRPart3Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s3-intro',
      type: 'text' as const,
      content: `
## Integration and Spin–Spin Splitting

**Part 3 of 7 — Integration & Splitting**

Chemical shift (Parts 1–2) tells you *what kind* of proton each signal represents. This part adds the two pieces of information that make $^1\\text{H}$ NMR genuinely structure-determining:

- **Integration** — the *area* under each signal, which is proportional to the *number of protons* giving rise to it. This counts H's in each environment.
- **Spin–spin splitting (coupling)** — the way a signal is split into multiple lines by neighboring protons, which reveals *how many protons sit next door* and therefore *what is bonded to what*.

Together with shift, these turn a spectrum into a connectivity map. We will build the **$n+1$ rule**, read **integration ratios**, define the **coupling constant $J$**, and draw the **splitting trees** for the two patterns you must recognize on sight: the ethyl group and the isopropyl group.
      `
    },
    {
      id: 'nmr-s3-integration',
      type: 'text' as const,
      content: `
### Integration: Counting Protons by Area

The spectrometer can measure the area under each peak, drawn as a step ("integral trace") or printed as a number. That area is proportional to the number of protons in the environment — but only **relative** values are meaningful. Integration gives you a *ratio*, not an absolute count; you convert the ratio to actual hydrogens using the molecular formula.

**Worked example — ethyl acetate, $\\text{CH}_3\\text{-C(=O)-O-CH}_2\\text{-CH}_3$ ($\\text{C}_4\\text{H}_8\\text{O}_2$, 8 H total):**

Three environments, with integrals measured (say) as $1.5 : 1.5 : 2.25$. Divide by the smallest ($1.5$): $1 : 1 : 1.5$. Multiply to clear the fraction ($\\times 2$): $2 : 2 : 3$. That sums to 7 — but the formula says 8 H, so we scale to the real counts $2 : 3 : 3$:

| $\\delta$ ($\\text{ppm}$) | Integral ratio | Actual H | Assignment |
|------|------|------|------|
| $\\sim 4.1$ | $2$ | $2\\text{H}$ | $\\text{O-CH}_2$ (downfield: next to O) |
| $\\sim 2.0$ | $3$ | $3\\text{H}$ | $\\text{C(=O)-CH}_3$ (acetyl methyl) |
| $\\sim 1.3$ | $3$ | $3\\text{H}$ | $\\text{CH}_2\\text{-CH}_3$ (ethyl methyl) |

The lesson: integration delivers a **ratio**, you reduce it to small whole numbers, and you reconcile the total with the molecular formula. A common slip is reading the raw integral as an absolute proton count — always normalize.

> **Reading tip:** $\\text{CH}_3$ groups give the largest single-environment integrals (3H), so a tall 3H signal in the alkyl region is very often a methyl. A 1H signal is frequently a methine ($\\text{CH}$), an aldehyde, or an exchangeable O–H/N–H.
      `
    },
    {
      id: 'nmr-s3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Integration
      `,
      exercise: {
        questions: [
          {
            question: 'A compound with molecular formula $\\text{C}_3\\text{H}_8\\text{O}$ shows two signals with integral ratio $3 : 1$. How many actual hydrogens does each signal represent?',
            options: [
              '3 H and 1 H, read directly from the ratio',
              '4 H and 4 H, because the signals must be equal',
              'It cannot be determined without the field strength',
              '6 H and 2 H, scaling the $3:1$ ratio so the total equals the 8 H in the formula'
            ],
            correctAnswer: 3,
            explanation: 'Integration gives a ratio, not absolute counts. The $3:1$ ratio has 4 "parts," but the formula has 8 H, so each part equals 2 H: the signals are 6 H and 2 H. Reading the raw ratio as absolute ("3 H and 1 H") ignores the formula, equal signals are not required, and field strength does not affect integration ratios.'
          },
          {
            question: 'Which statement about NMR integration is correct?',
            options: [
              'The absolute peak area equals the exact number of protons, regardless of the rest of the spectrum',
              'Only the relative areas matter; you convert the ratio to whole numbers and reconcile with the molecular formula',
              'Integration measures the chemical shift of each signal',
              'Taller peaks always represent more protons, regardless of width'
            ],
            correctAnswer: 1,
            explanation: 'Integration is meaningful only as a ratio between signals; you reduce it to small whole numbers and match the total to the formula. Absolute area is not a direct proton count (option 1). Integration measures area, not shift (option 3), and it is *area*, not peak height, that scales with proton number — a broad short peak can integrate for more than a tall sharp one (option 4).'
          }
        ]
      }
    },
    {
      id: 'nmr-s3-nplus1',
      type: 'text' as const,
      content: `
### Spin–Spin Splitting and the $n+1$ Rule

A proton senses not only its own electronic environment but also the tiny magnetic fields of protons on *adjacent* atoms. Each neighboring proton can be aligned with or against $B_0$, nudging the observed proton's resonance slightly higher or lighter. The result is that a single signal is **split** into several lines — a *multiplet*.

For a set of protons with $n$ equivalent neighboring protons, the signal is split into

$n + 1$ lines

This is the **$n + 1$ rule** (valid for first-order spectra, where coupled protons differ substantially in chemical shift). Crucially, $n$ counts the protons on *neighboring* atoms — typically three bonds away ($\\text{H-C-C-H}$) — **not** the protons in the signal itself. Equivalent protons do not split one another.

| Neighbors $n$ | Lines ($n+1$) | Name | Relative line intensities |
|------|------|------|------|
| $0$ | $1$ | singlet (s) | $1$ |
| $1$ | $2$ | doublet (d) | $1:1$ |
| $2$ | $3$ | triplet (t) | $1:2:1$ |
| $3$ | $4$ | quartet (q) | $1:3:3:1$ |
| $4$ | $5$ | quintet | $1:4:6:4:1$ |
| $6$ | $7$ | septet | $1:6:15:20:15:6:1$ |

The intensity pattern within a multiplet follows **Pascal's triangle** — it arises from the number of equivalent ways the neighboring spins can combine. A 1:2:1 triplet, for instance, reflects that two neighbors can be (↑↑), (↑↓ or ↓↑), or (↓↓): the middle, mixed arrangement is twice as likely.

> **The number-one splitting trap:** counting the protons *in* the signal instead of the *neighbors*. A $\\text{CH}_3$ does not split itself into a quartet; it is split by what is attached to the *next* carbon. A $\\text{CH}_3$ next to a $\\text{CH}_2$ appears as a triplet ($n = 2$ neighbors), and that $\\text{CH}_2$ appears as a quartet ($n = 3$ neighbors). This reciprocal relationship is the ethyl fingerprint.
      `
    },
    {
      id: 'nmr-s3-ethyl',
      type: 'text' as const,
      content: `
### Worked Splitting Tree 1 — The Ethyl Group ($\\text{CH}_3\\text{CH}_2\\text{-X}$)

The ethyl group attached to an electron-withdrawing X (as in bromoethane, $\\text{CH}_3\\text{CH}_2\\text{Br}$) is the most important pattern in introductory NMR. Two coupled environments:

**The $\\text{CH}_3$ (3H):** its neighbors are the two $\\text{CH}_2$ protons, so $n = 2 \\rightarrow 2 + 1 = 3$ lines $\\rightarrow$ a **triplet**, intensities $1:2:1$, near $\\delta \\approx 1.7$.

**The $\\text{CH}_2$ (2H):** its neighbors are the three $\\text{CH}_3$ protons, so $n = 3 \\rightarrow 3 + 1 = 4$ lines $\\rightarrow$ a **quartet**, intensities $1:3:3:1$, near $\\delta \\approx 3.4$ (deshielded by Br).

Building the $\\text{CH}_2$ quartet as a tree — start with one line, then split successively by each of the three equivalent methyl protons (each splitting doubles the lines with spacing $J$):

- Split by H#1: $\\rightarrow$ 2 lines (doublet)
- Split by H#2: each line splits again $\\rightarrow$ 4 lines, but the inner two overlap $\\rightarrow$ $1:2:1$
- Split by H#3: $\\rightarrow$ the lines overlap into the $1:3:3:1$ quartet

Because all three methyl protons are equivalent, they share **one** coupling constant $J$, so the four lines are evenly spaced and collapse to the Pascal pattern. The integral ratio confirms the assignment: $\\text{CH}_2 : \\text{CH}_3 = 2 : 3$.

**Ethyl fingerprint to memorize:** a **2H quartet** + a **3H triplet** sharing the same $J$ ($\\approx 7\\ \\text{Hz}$) almost always means an $\\text{-CH}_2\\text{CH}_3$ group. Find that pair and you have located an ethyl.
      `
    },
    {
      id: 'nmr-s3-isopropyl',
      type: 'text' as const,
      content: `
### Worked Splitting Tree 2 — The Isopropyl Group $(\\text{CH}_3)_2\\text{CH-X}$

The isopropyl group is the second must-know pattern. In 2-bromopropane, $(\\text{CH}_3)_2\\text{CHBr}$:

**The two $\\text{CH}_3$ groups (6H, equivalent):** each methyl's only neighbor is the single methine proton, so $n = 1 \\rightarrow 2$ lines $\\rightarrow$ a **doublet**, intensity $1:1$. Because the two methyls are equivalent, they overlap into one **6H doublet** near $\\delta \\approx 1.7$.

**The methine $\\text{CH}$ (1H):** its neighbors are the *six* equivalent methyl protons, so $n = 6 \\rightarrow 6 + 1 = 7$ lines $\\rightarrow$ a **septet** ($1:6:15:20:15:6:1$), near $\\delta \\approx 4.3$ (deshielded by Br).

The outer lines of a septet are only $1/20$ the height of the center line, so a septet often looks like a weak picket fence flanking a tall central peak — easy to miss if you do not expect it.

**Isopropyl fingerprint to memorize:** a **6H doublet** + a **1H septet** sharing the same $J$ means an $(\\text{CH}_3)_2\\text{CH-}$ group.

> **Contrast the two fingerprints — a frequent exam trap:** ethyl = (3H triplet + 2H quartet); isopropyl = (6H doublet + 1H septet). Students who memorize "quartet = ethyl" get caught when the quartet really belongs to an $\\text{O-CH}_2$ or another environment. Always check the *integration* (2H vs 6H, 3H vs 1H) and the *partner* multiplicity together — the pair, not a single multiplet, identifies the group.
      `
    },
    {
      id: 'nmr-s3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Multiplicity
      `,
      exercise: {
        questions: [
          {
            question: 'In bromoethane, $\\text{CH}_3\\text{CH}_2\\text{Br}$, the $\\text{CH}_3$ group appears as a triplet. Why a triplet, and not a quartet?',
            options: [
              'Because the $\\text{CH}_3$ has three protons, giving $3+1 = 4$… so it should be a quartet',
              'Because the $\\text{CH}_3$ has two neighboring protons on the adjacent $\\text{CH}_2$, giving $n+1 = 2+1 = 3$ lines',
              'Because bromine splits the methyl into three lines',
              'Because the three methyl protons split each other into a triplet'
            ],
            correctAnswer: 1,
            explanation: 'The $n+1$ rule counts *neighbors*, not the protons in the signal: the $\\text{CH}_3$ sees the two $\\text{CH}_2$ protons, so $n=2$ gives a triplet. Option 1 commits the classic error of counting the methyl’s own three protons; bromine has no proton to couple (option 3); and equivalent protons do not split each other (option 4).'
          },
          {
            question: 'A signal integrating for 1 H appears as a septet ($1:6:15:20:15:6:1$). What structural fragment does this most strongly suggest?',
            options: [
              'A $\\text{CH}_2$ next to a single $\\text{CH}$',
              'A methine $\\text{CH}$ flanked by two equivalent $\\text{CH}_3$ groups (an isopropyl group)',
              'An aldehyde proton with no neighbors',
              'An aromatic ring with three protons'
            ],
            correctAnswer: 1,
            explanation: 'A septet means six equivalent neighboring protons ($n=6$), which is exactly a methine sitting between two equivalent methyls — the isopropyl methine. Pair it with the 6H doublet of the methyls to confirm. A $\\text{CH}_2$ next to one $\\text{CH}$ would be a doublet; an aldehyde with no neighbors is a singlet; aromatic patterns are unrelated to a clean septet.'
          },
          {
            question: 'The intensity pattern within a first-order multiplet (e.g., $1:3:3:1$ for a quartet) is governed by:',
            options: [
              'The chemical shift of the signal',
              'Pascal’s triangle, reflecting the number of equivalent spin combinations of the neighbors',
              'The integration of the signal',
              'The field strength of the spectrometer'
            ],
            correctAnswer: 1,
            explanation: 'Multiplet line intensities follow Pascal’s triangle because they count how many equivalent ways the neighboring nuclear spins can add together (e.g., the doubly-degenerate mixed state makes the center of a triplet twice as tall). Shift, integration, and field strength set where and how big the whole signal is, not the internal intensity ratios.'
          }
        ]
      }
    },
    {
      id: 'nmr-s3-jvalue',
      type: 'text' as const,
      content: `
### The Coupling Constant $J$

The horizontal *spacing* between adjacent lines of a multiplet is the **coupling constant**, $J$, reported in hertz (Hz). $J$ measures the *strength* of the magnetic interaction between two coupled protons, and it carries two crucial properties:

1. **$J$ is field-independent.** Unlike chemical shift (which we deliberately report in field-independent $\\delta$), the *splitting itself* is an intrinsic interaction, so $J$ measured in Hz is the same on a 300 MHz and a 500 MHz instrument. (This is also why a multiplet looks *narrower* in ppm on a higher-field magnet, even though its $J$ in Hz is unchanged — a useful way to distinguish a true multiplet from two separate signals.)
2. **Coupled partners share the same $J$.** Two protons that couple to each other split each other by the *identical* $J$. This is how you pair up multiplets: the $\\text{CH}_2$ quartet and the $\\text{CH}_3$ triplet of an ethyl group have matching $J \\approx 7\\ \\text{Hz}$, confirming they are neighbors.

Typical magnitudes are themselves diagnostic of geometry:

| Coupling type | Typical $J$ (Hz) |
|------|------|
| Free rotation, $\\text{H-C-C-H}$ (e.g., ethyl) | $6\\text{–}8$ |
| Vinyl *cis*, $\\text{C=C}$ | $6\\text{–}12$ |
| Vinyl *trans*, $\\text{C=C}$ | $12\\text{–}18$ |
| Geminal, $\\text{H-C-H}$ (diastereotopic) | $0\\text{–}3$ (often $\\sim 2$, or large/negative in $sp^{3}$) |
| Aromatic *ortho* | $7\\text{–}10$ |

The *trans* > *cis* relationship across a double bond is especially useful: a $J \\approx 16\\ \\text{Hz}$ between two vinyl protons is strong evidence for a *trans* (E) alkene, while $J \\approx 8\\ \\text{Hz}$ points to *cis* (Z).

> **The trap to name:** confusing $J$ (the line *spacing*, in Hz, field-independent) with chemical shift *difference* (the *separation between two signals*, which scales with field in Hz but is fixed in ppm). If a "splitting" gets wider in Hz when you change magnets, it was never a coupling — it was two distinct chemical shifts.
      `
    },
    {
      id: 'nmr-s3-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 3 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Two vinyl protons across a carbon–carbon double bond show a mutual coupling of $J = 16\\ \\text{Hz}$. What does this indicate about the alkene geometry?',
            options: [
              'A cis (Z) double bond, because cis couplings are the largest',
              'A trans (E) double bond, because trans (E) vinyl couplings ($12\\text{–}18\\ \\text{Hz}$) are larger than cis ($6\\text{–}12\\ \\text{Hz}$)',
              'A terminal alkyne, because $J$ values that large only occur for sp carbons',
              'Free rotation about a single bond, since $7\\text{–}8\\ \\text{Hz}$ is typical there'
            ],
            correctAnswer: 1,
            explanation: 'Across a double bond, trans (E) protons couple more strongly ($12\\text{–}18\\ \\text{Hz}$) than cis (Z) protons ($6\\text{–}12\\ \\text{Hz}$), so $J = 16\\ \\text{Hz}$ signals a trans alkene. Option 1 reverses the cis/trans magnitude relationship; alkynes and free-rotation couplings give much smaller or different $J$ values.'
          },
          {
            question: 'On a 300 MHz instrument a multiplet shows lines spaced 7 Hz apart. The sample is re-run on a 600 MHz instrument. What happens to the coupling constant $J$ and to the multiplet’s width in ppm?',
            options: [
              '$J$ doubles to 14 Hz and the ppm width stays the same',
              '$J$ stays 7 Hz (field-independent) and the multiplet appears narrower in ppm',
              'Both $J$ and the ppm width double',
              '$J$ stays 7 Hz and the ppm width also stays the same'
            ],
            correctAnswer: 1,
            explanation: 'The coupling constant is an intrinsic interaction, so $J$ remains 7 Hz on any field. But because ppm = Hz / spectrometer frequency, a fixed 7 Hz spacing corresponds to *fewer* ppm at higher field, so the multiplet looks narrower in ppm. This field behavior is exactly how you distinguish a real coupling (constant in Hz) from two separate chemical shifts (constant in ppm).'
          }
        ]
      }
    }
  ]
}
