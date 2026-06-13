export const oChemNMRPart6Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

This part is all application. We take the systematic pipeline from Part 5 and run it on a series of unknowns of increasing subtlety — predicting spectra from structures, deducing structures from data, and combining IR, mass spectrometry, and NMR. Work each example with paper in front of you: write the fragments down as you read each signal, keep a running proton tally, and only commit to a structure when *every* datum is explained.

A reliable mental checklist for any unknown:

1. **DoU** from the formula — how many rings/$\\pi$ bonds?
2. **IR** — which functional groups (C=O? O–H? N–H? C≡N? aromatic)?
3. **$^1\\text{H}$**: for each signal note *shift* (what kind), *integration* (how many), *multiplicity* (how many neighbors) $\\rightarrow$ a fragment.
4. **$^{13}\\text{C}$ / DEPT** — confirm carbon count, find carbonyls and quaternary carbons.
5. **Assemble and verify** against all data, including symmetry.
      `
    },
    {
      id: 'nmr-s6-predict',
      type: 'text' as const,
      content: `
### Forward Problem — Predicting a Spectrum From a Structure

Before deducing structures, practice the reverse: given a structure, predict its $^1\\text{H}$ NMR. This sharpens the same instincts. Take **1,1,2-trichloroethane**, $\\text{CHCl}_2\\text{-CH}_2\\text{Cl}$.

- **Environments:** two — the $\\text{CHCl}_2$ methine (1H) and the $\\text{CH}_2\\text{Cl}$ methylene (2H).
- **Shifts:** both are deshielded by chlorine. The $\\text{CHCl}_2$ proton bears two chlorines on its own carbon $\\rightarrow$ very downfield, $\\delta \\approx 5.8$. The $\\text{CH}_2\\text{Cl}$ bears one chlorine $\\rightarrow \\delta \\approx 4.0$.
- **Multiplicity:** the $\\text{CHCl}_2$ (1H) has two neighbors (the $\\text{CH}_2$) $\\rightarrow n+1 = 3 \\rightarrow$ **triplet**. The $\\text{CH}_2\\text{Cl}$ (2H) has one neighbor (the $\\text{CH}$) $\\rightarrow n+1 = 2 \\rightarrow$ **doublet**.
- **Integration:** $\\text{CH} : \\text{CH}_2 = 1 : 2$.

Predicted spectrum: a **1H triplet at $\\sim 5.8$** and a **2H doublet at $\\sim 4.0$**, sharing one $J \\approx 6\\ \\text{Hz}$. Notice the reciprocity — the *more* substituted carbon carries *fewer* protons but is split into *more* lines, because multiplicity reflects the *neighbors*, not the protons in the signal.

> **Forward-prediction trap:** writing "$\\text{CH}_2 \\rightarrow$ triplet, $\\text{CH} \\rightarrow$ doublet" by reflex. Here it is the opposite: the lone $\\text{CHCl}_2$ proton is a *triplet* (two $\\text{CH}_2$ neighbors) and the $\\text{CH}_2$ is a *doublet* (one $\\text{CH}$ neighbor). Always split by what is next door.
      `
    },
    {
      id: 'nmr-s6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Forward Prediction
      `,
      exercise: {
        questions: [
          {
            question: 'Predict the $^1\\text{H}$ NMR multiplicities for 1,1,2-trichloroethane, $\\text{CHCl}_2\\text{-CH}_2\\text{Cl}$.',
            options: [
              'A $\\text{CHCl}_2$ doublet and a $\\text{CH}_2\\text{Cl}$ triplet',
              'Two singlets, since chlorine removes all coupling',
              'A quartet and a triplet, as in an ethyl group',
              'A $\\text{CHCl}_2$ triplet (two neighbors) and a $\\text{CH}_2\\text{Cl}$ doublet (one neighbor)'
            ],
            correctAnswer: 3,
            explanation: 'The single $\\text{CHCl}_2$ proton has two neighbors on the adjacent $\\text{CH}_2$, giving $n+1 = 3$ (triplet); the $\\text{CH}_2\\text{Cl}$ has one neighbor on the adjacent $\\text{CH}$, giving $n+1 = 2$ (doublet). The "$\\text{CHCl}_2$ doublet" choice swaps the two (the common reflex error); chlorine has no protons to remove coupling; and there is no 3H methyl here to make an ethyl-style quartet/triplet.'
          },
          {
            question: 'For two coupled protons in the molecule above, what must be true of their coupling constants?',
            options: [
              'The triplet and the doublet have different $J$ values because they integrate differently',
              'The triplet and the doublet share the same $J$, because coupled partners split each other equally',
              'Only the more downfield signal has a measurable $J$',
              'The $J$ values depend on the spectrometer field and so cannot be compared'
            ],
            correctAnswer: 1,
            explanation: 'Mutually coupled protons split each other by an identical coupling constant, so the $\\text{CHCl}_2$ triplet and the $\\text{CH}_2\\text{Cl}$ doublet share one $J$ (~$6\\ \\text{Hz}$) — this matching $J$ is exactly how you confirm they are neighbors. Integration does not change $J$, both partners show the coupling, and $J$ in Hz is field-independent.'
          }
        ]
      }
    },
    {
      id: 'nmr-s6-reverse1',
      type: 'text' as const,
      content: `
### Reverse Problem 1 — Deduce $\\text{C}_3\\text{H}_6\\text{O}$ From NMR

**Given:** formula $\\text{C}_3\\text{H}_6\\text{O}$. $^1\\text{H}$ NMR: $\\delta\\ 9.8$ (1H, triplet, $J \\approx 1.5\\ \\text{Hz}$); $\\delta\\ 2.4$ (2H, doublet of quartets / multiplet); $\\delta\\ 1.1$ (3H, triplet). $^{13}\\text{C}$: a peak near $202\\ \\text{ppm}$.

**Step 1 — DoU:** $(2\\cdot 3 + 2 - 6)/2 = 1$. One ring or one $\\pi$ bond.

**Step 2 — Carbonyl?** The $^{13}\\text{C}$ line at $202\\ \\text{ppm}$ is in the aldehyde/ketone region, and the $\\delta\\ 9.8$ proton in $^1\\text{H}$ is the aldehyde signature. So the one degree of unsaturation is a $\\text{C=O}$, specifically an **aldehyde** (it has a C–H). That consumes $\\text{CHO}$: 1 C, 1 H, 1 O.

**Step 3 — Remaining fragments:** $\\text{C}_3\\text{H}_6\\text{O}$ minus $\\text{CHO}$ leaves $\\text{C}_2\\text{H}_5$. The 3H triplet ($\\delta\\ 1.1$) + 2H signal ($\\delta\\ 2.4$) is an **ethyl group**, and the 2H sits at $2.4$ because it is $\\alpha$ to the carbonyl.

**Step 4 — Assemble:** $\\text{CH}_3\\text{CH}_2\\text{-CHO}$ = **propanal**. Verify the fine splitting: the aldehyde proton is a *triplet* because it couples weakly to the adjacent $\\text{CH}_2$ (small $J \\approx 1.5\\ \\text{Hz}$); the $\\text{CH}_2$ is split by both the $\\text{CH}_3$ (3 neighbors) and the $\\text{CHO}$ (1 neighbor). 3 C, 6 H, 1 O ✓.

> **The diagnostic pivot:** a $^{13}\\text{C}$ line above $190\\ \\text{ppm}$ together with a $\\delta\\ 9.8$ proton is essentially conclusive for an aldehyde — neither datum alone is as decisive as the two together. The aldehyde proton being a *triplet* (not a singlet) is the tell that a $\\text{CH}_2$ is adjacent: propanal, not acetone (which would have no aldehyde proton at all).
      `
    },
    {
      id: 'nmr-s6-reverse2',
      type: 'text' as const,
      content: `
### Reverse Problem 2 — Two Isomers of $\\text{C}_3\\text{H}_6\\text{O}$, and Using MS

A subtle skill is *distinguishing isomers* that share a formula. $\\text{C}_3\\text{H}_6\\text{O}$ has two common carbonyl isomers:

- **Propanal**, $\\text{CH}_3\\text{CH}_2\\text{CHO}$ — aldehyde proton at $9.8$ (1H), ethyl pattern, $^{13}\\text{C}$ carbonyl ~$202$.
- **Acetone**, $(\\text{CH}_3)_2\\text{CO}$ — a single 6H singlet at $\\delta\\ 2.1$ (two equivalent methyls, no neighbors), **no** proton downfield of $3$, and a $^{13}\\text{C}$ carbonyl ~$206$ with only **2** carbon signals by symmetry.

Their $^1\\text{H}$ spectra could hardly be more different: propanal has three signals including the tell-tale $9.8$ aldehyde; acetone has *one* singlet. Even without the aldehyde region, the symmetry-driven **6H singlet** uniquely marks acetone.

**Mass spectrometry as cross-check.** The molecular ion gives the molecular weight (both isomers: $M = 58$), but **fragmentation** distinguishes them:

- Acetone loses a methyl radical to give the **acylium ion** $\\text{CH}_3\\text{CO}^+$ at $m/z = 43$ — a dominant peak (the classic $\\alpha$-cleavage of a ketone).
- Propanal shows loss of $\\text{H}$ ($m/z = 57$) and the McLafferty-type and acylium fragments characteristic of an aldehyde, with a strong $m/z = 29$ ($\\text{CHO}^+$) often visible.

> **Integrative habit:** when two structures fit the NMR, look to MS fragmentation or the $^{13}\\text{C}$ *count*. Here, acetone’s **two** carbon signals (vs. propanal’s **three**) and its $m/z = 43$ acylium peak each independently settle the assignment. Cross-confirming with a second technique is what turns a "probably" into a "certainly."
      `
    },
    {
      id: 'nmr-s6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Distinguishing Isomers
      `,
      exercise: {
        questions: [
          {
            question: 'Two unknowns share the formula $\\text{C}_3\\text{H}_6\\text{O}$. Unknown A shows a single 6H singlet at $\\delta\\ 2.1$ and only two $^{13}\\text{C}$ signals; Unknown B shows a 1H signal at $\\delta\\ 9.8$, a 2H multiplet at $2.4$, and a 3H triplet at $1.1$. Identify A and B.',
            options: [
              'A is propanal; B is acetone',
              'A is acetone (symmetric, no aldehyde H); B is propanal (aldehyde H at $9.8$, ethyl group)',
              'Both are acetone; the spectra differ only in solvent',
              'A is an alcohol and B is an ether'
            ],
            correctAnswer: 1,
            explanation: 'A’s single 6H singlet and two carbon signals demand two equivalent methyls on a symmetric carbonyl — acetone. B’s $\\delta\\ 9.8$ aldehyde proton plus an ethyl pattern is propanal. The DoU of 1 and the carbonyl shifts rule out an alcohol or ether (no C=O), and the spectra are genuinely different compounds, not a solvent artifact.'
          },
          {
            question: 'In the mass spectrum of acetone, a dominant fragment appears at $m/z = 43$. What is it, and why is it diagnostic?',
            options: [
              'The molecular ion, confirming MW = 43',
              'The acylium ion $\\text{CH}_3\\text{CO}^+$ from $\\alpha$-cleavage (loss of a methyl), characteristic of a methyl ketone',
              'A loss of water, indicating an alcohol',
              'A doubly charged ion of no structural value'
            ],
            correctAnswer: 1,
            explanation: 'Ketones undergo $\\alpha$-cleavage next to the carbonyl; acetone loses a methyl radical (15) from $M = 58$ to give the resonance-stabilized acylium cation $\\text{CH}_3\\text{CO}^+$ at $m/z = 43$ — a hallmark of methyl ketones. The molecular ion is at 58, not 43; there is no OH to lose water from; and the fragment is singly charged and highly informative.'
          }
        ]
      }
    },
    {
      id: 'nmr-s6-reverse3',
      type: 'text' as const,
      content: `
### Reverse Problem 3 — An Aromatic Unknown, $\\text{C}_8\\text{H}_8\\text{O}$

**Given:** $\\text{C}_8\\text{H}_8\\text{O}$. IR: strong band at $1685\\ \\text{cm}^{-1}$ (conjugated C=O) and $1600/1580\\ \\text{cm}^{-1}$ (aromatic). $^1\\text{H}$ NMR: $\\delta\\ 7.9$ (2H, doublet-like), $\\delta\\ 7.5$ (3H, multiplet), $\\delta\\ 2.6$ (3H, singlet). $^{13}\\text{C}$: ~$198\\ \\text{ppm}$ (carbonyl), plus aromatic carbons $128\\text{–}137$.

**Step 1 — DoU:** $(2\\cdot 8 + 2 - 8)/2 = 5$. Aromatic ring (4) + one $\\text{C=O}$ (1).

**Step 2 — IR:** carbonyl at the lowered $1685\\ \\text{cm}^{-1}$ signals **conjugation** with the ring (an aryl ketone, not an aldehyde — there is no aldehyde proton near $9.7$).

**Step 3 — $^1\\text{H}$:** the aromatic protons total 5H ($2 + 3$) $\\rightarrow$ a **monosubstituted benzene**, with the 2H further downfield ($7.9$) being the *ortho* protons next to the electron-withdrawing carbonyl. The 3H singlet at $2.6$ is a $\\text{CH}_3$ attached to C=O (no neighbors) — an acetyl methyl, shifted slightly downfield of a normal acetyl by the adjacent ring.

**Step 4 — Assemble:** $\\text{C}_6\\text{H}_5\\text{-C(=O)-CH}_3$ = **acetophenone**. Check: $5 + 3 = 8$ H ✓; aryl-conjugated C=O at $1685\\ \\text{cm}^{-1}$ and $^{13}\\text{C}\\ 198$ ✓; 5 aromatic H as 2H + 3H ✓; methyl singlet ✓.

> **Two cross-checks worth naming:** (1) the *lowered* carbonyl frequency ($1685$ vs. a normal ketone $\\sim 1715\\ \\text{cm}^{-1}$) reveals conjugation — a structural clue IR gives that NMR does not state outright. (2) The aromatic protons split into 2H + 3H, the signature of a *monosubstituted* ring; a para-disubstituted ring would instead give a symmetric 2H + 2H pattern. Reading the aromatic *count and shape* tells you the substitution pattern.
      `
    },
    {
      id: 'nmr-s6-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 6 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'In the acetophenone problem, the IR carbonyl band appears at $1685\\ \\text{cm}^{-1}$ rather than the ~$1715\\ \\text{cm}^{-1}$ typical of an isolated ketone. What does this lowered frequency indicate?',
            options: [
              'The compound is an aldehyde rather than a ketone',
              'The carbonyl has been reduced to an alcohol',
              'The carbonyl is conjugated with the aromatic ring, which lowers the C=O stretching frequency',
              'The sample is contaminated, since carbonyls cannot appear below $1700\\ \\text{cm}^{-1}$'
            ],
            correctAnswer: 2,
            explanation: 'Conjugation of a C=O with an adjacent $\\pi$ system (here the benzene ring) delocalizes electron density, giving the bond partial single-bond character and lowering its stretching frequency from ~$1715$ toward ~$1685\\ \\text{cm}^{-1}$ — a genuine structural clue, not contamination. There is no aldehyde proton at $9.7$, and an alcohol would show no strong C=O band at all.'
          },
          {
            question: 'A monosubstituted benzene shows aromatic $^1\\text{H}$ signals integrating as 2H + 3H, whereas a para-disubstituted benzene typically shows 2H + 2H. What does this contrast let you read directly from the spectrum?',
            options: [
              'The molecular weight of the compound',
              'The ring’s substitution pattern (degree and position of substitution) from the number and integration of aromatic signals',
              'The exact coupling constant of the alkyl region',
              'Whether the compound contains nitrogen'
            ],
            correctAnswer: 1,
            explanation: 'The number of aromatic environments and their integration encode how the ring is substituted: 5 aromatic H (2H + 3H) point to one substituent (monosubstituted), while a symmetric 2H + 2H pattern points to para-disubstitution. This reads the substitution pattern, not the molecular weight (that is MS), the alkyl coupling, or the presence of nitrogen (that needs the formula or other data).'
          }
        ]
      }
    }
  ]
}
