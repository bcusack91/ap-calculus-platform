export const oChemNMRPart2Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s2-intro',
      type: 'text' as const,
      content: `
## Chemical Shift in Depth

**Part 2 of 7 — Chemical Shift ($\\delta$)**

In Part 1 we established that $\\delta$ is a field-independent address measured in $\\text{ppm}$ relative to TMS at $\\delta = 0$, and that **electron density around a proton sets its position**: shielded (electron-rich) protons sit upfield at small $\\delta$, deshielded (electron-poor) protons sit downfield at large $\\delta$. This part turns that qualitative idea into a working chemical-shift table and explains the three structural factors — electronegativity, hybridization, and magnetic anisotropy — that move a proton along the scale.

A practiced organic chemist reads $\\delta$ the way a reader reads words: a peak at $1\\ \\text{ppm}$ *says* "alkyl," a peak at $7\\ \\text{ppm}$ *says* "aromatic," a peak near $10\\ \\text{ppm}$ *says* "aldehyde." The goal of this part is to make those associations automatic and, more importantly, to make them *explainable* — so you can predict the shift of a proton you have never seen.
      `
    },
    {
      id: 'nmr-s2-table',
      type: 'text' as const,
      content: `
### The Benchmark Chemical-Shift Table

These ranges are the backbone of $^1\\text{H}$ NMR interpretation. Commit the order and the approximate values to memory.

| Proton environment | Typical $\\delta$ ($\\text{ppm}$) |
|--------------------|-------------------|
| $\\text{Si(CH}_3)_4$ (TMS, reference) | $0$ |
| Alkyl, $\\text{R-CH}_3$ / $\\text{R-CH}_2\\text{-R}$ | $0.8\\text{–}1.5$ |
| Allylic / $\\alpha$ to a carbonyl, $\\text{C=C-CH}_3$ or $\\text{O=C-CH}_3$ | $2.0\\text{–}2.5$ |
| $\\text{C}\\equiv\\text{C-H}$ (terminal alkyne) | $2.0\\text{–}3.0$ |
| $\\text{H-C-N}$ (amine $\\alpha$) | $2.2\\text{–}2.9$ |
| $\\text{H-C-Cl / Br}$ (halide $\\alpha$) | $3.0\\text{–}4.0$ |
| $\\text{H-C-O}$ (ether / alcohol / ester $\\alpha$) | $3.3\\text{–}4.5$ |
| Vinylic, $\\text{C=C-H}$ | $4.5\\text{–}6.5$ |
| Aromatic, $\\text{Ar-H}$ | $6.5\\text{–}8.0$ |
| Aldehyde, $\\text{R-CHO}$ | $9.0\\text{–}10.0$ |
| Carboxylic acid, $\\text{R-COOH}$ | $10\\text{–}12$ |

Two columns of "exchangeable" protons — $\\text{O-H}$ (alcohol $\\sim 1\\text{–}5$, broad) and $\\text{N-H}$ ($\\sim 1\\text{–}4$, broad) — are deliberately listed as wide ranges because their shifts depend on concentration, temperature, and hydrogen bonding. We return to them at the end of this part.
      `
    },
    {
      id: 'nmr-s2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reading the Table
      `,
      exercise: {
        questions: [
          {
            question: 'A spectrum shows a sharp signal at $\\delta = 9.7\\ \\text{ppm}$ integrating for one proton. Which functional group is most consistent with this signal?',
            options: [
              'An ordinary alkyl $\\text{CH}_3$ group',
              'An aldehyde $\\text{C-H}$ ($\\text{R-CHO}$)',
              'An aromatic ring proton',
              'A proton on a carbon bearing chlorine'
            ],
            correctAnswer: 1,
            explanation: 'The aldehyde proton resonates at $9\\text{–}10\\ \\text{ppm}$, far downfield, because it is deshielded both by the electronegative, sp²-hybridized carbonyl carbon and by the anisotropy of the $\\text{C=O}$ $\\pi$ system. Alkyl ($\\sim 1\\ \\text{ppm}$), aromatic ($\\sim 7\\ \\text{ppm}$), and $\\text{H-C-Cl}$ ($\\sim 3.5\\ \\text{ppm}$) all fall well short of $9.7\\ \\text{ppm}$.'
          },
          {
            question: 'Which of these protons would appear furthest UPFIELD (smallest $\\delta$)?',
            options: [
              'The $\\text{CH}_3$ of toluene’s methyl group ($\\text{Ar-CH}_3$)',
              'The $\\text{CH}_3$ of $\\text{CH}_3\\text{-O-R}$',
              'The $\\text{CH}_3$ of $\\text{CH}_3\\text{-CH}_2\\text{-CH}_3$ (propane, the terminal methyls)',
              'The $\\text{CH}_3$ of acetaldehyde, $\\text{CH}_3\\text{-CHO}$'
            ],
            correctAnswer: 2,
            explanation: 'A plain alkyl $\\text{CH}_3$ with only carbon and hydrogen neighbors is the most shielded of the four (~$0.9\\ \\text{ppm}$). Attachment to an aromatic ring, an oxygen, or a carbonyl all withdraw electron density and shift the methyl downfield. The trap is assuming any $\\text{CH}_3$ is equivalent — the *neighboring atoms* set the shift.'
          }
        ]
      }
    },
    {
      id: 'nmr-s2-electronegativity',
      type: 'text' as const,
      content: `
### Factor 1 — Electronegativity (Inductive Deshielding)

The largest routine influence on $\\delta$ is the electronegativity of nearby atoms. An electronegative atom pulls electron density away from the C–H bond through the $\\sigma$ framework, **reducing the shielding** at the proton and shifting it downfield. The effect is strongest on the directly attached carbon and falls off rapidly with distance.

Compare the methyl shift as the attached halogen gets more electronegative:

| Compound | Attached atom electronegativity | $\\delta$ of $\\text{CH}_3$ |
|----------|-------------------------------|----------|
| $\\text{CH}_3\\text{-F}$ | F (4.0) | $\\sim 4.3$ |
| $\\text{CH}_3\\text{-Cl}$ | Cl (3.2) | $\\sim 3.0$ |
| $\\text{CH}_3\\text{-Br}$ | Br (3.0) | $\\sim 2.7$ |
| $\\text{CH}_3\\text{-I}$ | I (2.7) | $\\sim 2.2$ |
| $\\text{CH}_3\\text{-H}$ | H (2.2) | $\\sim 0.2$ |

More electronegative neighbor $\\rightarrow$ larger $\\delta$. **Multiple** withdrawing groups add up: $\\text{CH}_3\\text{Cl}$ is at $3.0$, $\\text{CH}_2\\text{Cl}_2$ at $5.3$, $\\text{CHCl}_3$ at $7.3$ — each extra chlorine drags the lone remaining proton further downfield.

**Distance matters.** In 1-chloropropane, $\\text{Cl-CH}_2\\text{-CH}_2\\text{-CH}_3$, the protons nearest chlorine sit at $\\sim 3.5\\ \\text{ppm}$, the middle $\\text{CH}_2$ near $1.8\\ \\text{ppm}$, and the far $\\text{CH}_3$ near $1.0\\ \\text{ppm}$ — essentially back to the value of a plain alkyl group two bonds away. The inductive pull is short-range.
      `
    },
    {
      id: 'nmr-s2-anisotropy',
      type: 'text' as const,
      content: `
### Factor 2 — Hybridization and Factor 3 — Magnetic Anisotropy

**Hybridization.** Protons on $sp^2$ carbons (alkenes, aromatics) generally appear downfield of protons on $sp^3$ carbons, partly because $sp^2$ carbon is more electronegative (more s-character). But hybridization alone does not explain the *numbers*, and the famous exception — the terminal alkyne $\\text{C}\\equiv\\text{C-H}$ at only $2\\text{–}3\\ \\text{ppm}$ despite $sp$ carbon — forces us to invoke the third factor.

**Magnetic anisotropy** is the deshielding (or shielding) produced by the *circulating $\\pi$ electrons* of a nearby multiple bond, and it is the key to the most diagnostic shifts in all of $^1\\text{H}$ NMR. When a $\\pi$ system sits in $B_0$, its electrons circulate and set up a secondary field that is *not* uniform — it reinforces $B_0$ in some regions of space and opposes it in others.

- **Aromatic ring current:** the six $\\pi$ electrons of benzene circulate around the ring, generating an induced field that *opposes* $B_0$ inside the ring but *reinforces* it in the plane outside the ring — exactly where the ring protons sit. Aromatic H's are therefore strongly deshielded to $6.5\\text{–}8\\ \\text{ppm}$. (A proton held *above* a ring would instead be shielded — a real effect in some fused systems.)
- **Carbonyl and alkene:** the $\\pi$ electrons of $\\text{C=O}$ and $\\text{C=C}$ likewise deshield protons lying in the bond plane, contributing to vinylic ($4.5\\text{–}6.5$) and aldehyde ($9\\text{–}10$) shifts.
- **Alkyne (the exception explained):** the cylindrical $\\pi$ system of $\\text{C}\\equiv\\text{C}$ circulates around the molecular axis, so the *terminal proton lying along that axis* falls in the **shielding** cone. This anisotropic shielding pulls $\\equiv\\text{C-H}$ back upfield to $2\\text{–}3\\ \\text{ppm}$, opposing the $sp$-electronegativity that would otherwise push it downfield.

> **The trap to name:** "$sp$ carbon is the most electronegative, so the alkyne $\\equiv\\text{C-H}$ should be the most deshielded." It is not — the anisotropic shielding cone of the triple bond overrides hybridization and places it near $2.5\\ \\text{ppm}$, *upfield* of vinylic and aromatic protons. Whenever a shift defies the simple electronegativity argument, suspect anisotropy.
      `
    },
    {
      id: 'nmr-s2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Why Protons Deshield
      `,
      exercise: {
        questions: [
          {
            question: 'Across the series $\\text{CH}_3\\text{Cl}$ ($\\delta \\approx 3.0$), $\\text{CH}_2\\text{Cl}_2$ ($\\delta \\approx 5.3$), $\\text{CHCl}_3$ ($\\delta \\approx 7.3$), the proton shifts steadily downfield. The best explanation is:',
            options: [
              'Magnetic anisotropy from the chlorine lone pairs increases with each Cl',
              'Each additional electronegative chlorine inductively withdraws more electron density, progressively deshielding the remaining proton(s)',
              'The molecules become more aromatic as chlorines are added',
              'Hydrogen bonding to chlorine moves the signal downfield'
            ],
            correctAnswer: 1,
            explanation: 'This is a textbook additive inductive effect: each electronegative Cl pulls $\\sigma$-electron density away from C–H, reducing shielding, and the effects sum. There is no aromatic ring current or anisotropic $\\pi$ system here, and C–H to Cl hydrogen bonding is not the operative cause — the trap answers invoke mechanisms that simply are not present.'
          },
          {
            question: 'The terminal alkyne proton $\\text{C}\\equiv\\text{C-H}$ appears near $\\delta = 2.5\\ \\text{ppm}$ — upfield of vinylic and aromatic protons — even though it sits on a strongly electronegative $sp$ carbon. Why?',
            options: [
              'sp carbons are actually the least electronegative, so no deshielding occurs',
              'The acetylenic proton lies in the shielding cone of the triple bond’s circulating $\\pi$ electrons, and this anisotropic shielding overrides the inductive deshielding',
              'Alkynes have no $\\pi$ electrons, so there is no anisotropy at all',
              'The proton exchanges rapidly with solvent, averaging its shift to a low value'
            ],
            correctAnswer: 1,
            explanation: 'The cylindrical $\\pi$ system of the triple bond circulates around the molecular axis and places the axial $\\equiv\\text{C-H}$ in a region where the induced field opposes $B_0$ — a shielding cone — pulling it upfield despite the electronegative $sp$ carbon. sp carbon is in fact highly electronegative (so option 1 is false), alkynes have two $\\pi$ bonds (option 3 false), and the acetylenic C–H does not exchange like an O–H (option 4 false).'
          },
          {
            question: 'Aromatic protons resonate downfield at $6.5\\text{–}8\\ \\text{ppm}$ primarily because of:',
            options: [
              'The ring current: circulating $\\pi$ electrons create an induced field that reinforces $B_0$ at the in-plane ring protons',
              'Hydrogen bonding between adjacent aromatic protons',
              'The unusually high electronegativity of aromatic hydrogen atoms',
              'Rapid rotation of the benzene ring averaging the field upward'
            ],
            correctAnswer: 0,
            explanation: 'Benzene’s six delocalized $\\pi$ electrons circulate around the ring in $B_0$, generating an induced field that opposes $B_0$ inside the ring but reinforces it in the plane outside — exactly where the C–H protons sit — strongly deshielding them. This is magnetic anisotropy (ring current), not hydrogen bonding, special hydrogen electronegativity, or rotational averaging.'
          }
        ]
      }
    },
    {
      id: 'nmr-s2-exchangeable',
      type: 'text' as const,
      content: `
### Exchangeable Protons: O–H and N–H

Protons on oxygen and nitrogen behave differently from C–H protons in three diagnostic ways.

1. **Variable shift.** Because $\\text{O-H}$ and $\\text{N-H}$ participate in hydrogen bonding, their $\\delta$ depends on concentration, temperature, and solvent. An alcohol $\\text{O-H}$ can appear anywhere from $\\sim 1$ to $\\sim 5\\ \\text{ppm}$; a carboxylic acid $\\text{O-H}$, locked in strong hydrogen bonding, sits far downfield at $10\\text{–}12\\ \\text{ppm}$.
2. **Often broad, often a singlet.** In many samples the O–H/N–H proton exchanges rapidly between molecules. This **fast exchange** averages out spin–spin coupling, so the O–H usually appears as a broad singlet that does *not* split its neighbors and is *not* split by them. (Under scrupulously dry, acid-free conditions, exchange slows and coupling can reappear — but the broad, coupling-free singlet is the common case.)
3. **The $\\text{D}_2\\text{O}$ shake test.** Add a drop of deuterium oxide and shake: exchangeable O–H/N–H protons swap for deuterium and their signal *disappears* (or shrinks dramatically) as a new HDO peak grows in. A signal that vanishes on a $\\text{D}_2\\text{O}$ shake is diagnostic of an exchangeable proton — a quick way to flag an alcohol, acid, or amine.

> **The trap to name:** treating an O–H like an ordinary C–H and trying to apply the $n+1$ rule to it. Because of rapid chemical exchange, the alcohol O–H typically neither splits the adjacent $\\text{CH}_2$ nor is split by it — so do not predict (or expect) coupling to it in a routine spectrum.
      `
    },
    {
      id: 'nmr-s2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 2 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'You suspect an unknown is an alcohol. A broad one-proton signal at $\\delta \\approx 2.4\\ \\text{ppm}$ disappears when the sample is shaken with $\\text{D}_2\\text{O}$. What does this confirm?',
            options: [
              'The signal is an aromatic proton',
              'The signal is an exchangeable proton (O–H or N–H), consistent with the alcohol hypothesis',
              'The compound contains a terminal alkyne',
              'The proton is part of a $\\text{CH}_2$ adjacent to chlorine'
            ],
            correctAnswer: 1,
            explanation: 'Only O–H and N–H protons exchange with $\\text{D}_2\\text{O}$ and vanish from the spectrum; a broad singlet that disappears on the $\\text{D}_2\\text{O}$ shake is the signature of an exchangeable proton, supporting the alcohol assignment. Aromatic, alkyne, and $\\text{H-C-Cl}$ protons are C–H and do not exchange.'
          },
          {
            question: 'In 1-chloropropane, $\\text{Cl-CH}_2\\text{-CH}_2\\text{-CH}_3$, the three sets of protons appear at roughly $3.5$, $1.8$, and $1.0\\ \\text{ppm}$. Which assignment and reasoning are correct?',
            options: [
              'All three appear near $3.5\\ \\text{ppm}$ because chlorine deshields the whole chain equally',
              'The $\\text{CH}_2$ next to Cl is at $3.5$, the middle $\\text{CH}_2$ at $1.8$, and the terminal $\\text{CH}_3$ at $1.0$ — the inductive effect is strongest nearest Cl and falls off with distance',
              'The terminal $\\text{CH}_3$ is the most deshielded because it is furthest from the rest of the chain',
              'Chlorine’s anisotropy shields the nearest protons, putting them upfield'
            ],
            correctAnswer: 1,
            explanation: 'Inductive withdrawal by chlorine is short-range, so the $\\alpha$-$\\text{CH}_2$ is most deshielded ($\\sim 3.5$), the $\\beta$-$\\text{CH}_2$ less so ($\\sim 1.8$), and the $\\gamma$-$\\text{CH}_3$ is nearly a normal alkyl value ($\\sim 1.0$). The effect is neither uniform along the chain (option 1) nor reversed by a chlorine "anisotropy" that does not dominate here (option 4); the far methyl is the least, not most, deshielded.'
          }
        ]
      }
    }
  ]
}
