export const oChemElimPart1Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi1-intro',
      type: 'text' as const,
      content: `
## Elimination Reactions — Overview

**Part 1 of 7 — Introduction to Elimination**

An **elimination reaction** removes two substituents from adjacent carbons of a substrate to create a new $\\pi$-bond, converting a saturated (sp$^3$) framework into an unsaturated (sp$^2$) one. In the reactions you will study, the two groups that leave are a **proton** ($\\text{H}^+$, pulled off by a base) and a **leaving group** (typically a halide $\\text{X}^-$ or a sulfonate such as tosylate). The product is an **alkene**:

$\\text{H}{-}\\text{C}{-}\\text{C}{-}\\text{LG} \\rightarrow \\text{C}{=}\\text{C} + \\text{H}{-}\\text{Base}^+ + \\text{LG}^-$

The carbon bearing the leaving group is the **$\\alpha$-carbon**; any carbon directly bonded to it that carries an abstractable hydrogen is a **$\\beta$-carbon**. Because the hydrogen removed in an elimination always comes from a $\\beta$-carbon, these reactions are also called **$\\beta$-eliminations** (or 1,2-eliminations).

> **Key idea:** Substitution swaps the leaving group for a nucleophile at the *same* carbon. Elimination removes the leaving group *and* a neighboring $\\beta$-hydrogen to build a double bond. The two pathways are perpetual competitors, and predicting which one wins is a central skill in Organic Chemistry I.
      `
    },
    {
      id: 'elimi1-anatomy',
      type: 'text' as const,
      content: `
### Anatomy of a $\\beta$-Elimination

Consider 2-bromobutane, $\\text{CH}_3\\text{CHBrCH}_2\\text{CH}_3$. The leaving group (Br) sits on C2, the **$\\alpha$-carbon**. Two different carbons are positioned $\\beta$ to it:

| Position | Carbon | $\\beta$-Hydrogens available? |
|----------|--------|------------------------------|
| C1 ($\\beta$) | $\\text{CH}_3$ | Yes (3 H) |
| C2 ($\\alpha$) | $\\text{CHBr}$ | — (bears the leaving group) |
| C3 ($\\beta$) | $\\text{CH}_2$ | Yes (2 H) |

Removing a $\\beta$-hydrogen from C1 gives **1-butene** ($\\text{CH}_2{=}\\text{CHCH}_2\\text{CH}_3$, a terminal/monosubstituted alkene). Removing a $\\beta$-hydrogen from C3 gives **2-butene** ($\\text{CH}_3\\text{CH}{=}\\text{CHCH}_3$, an internal/disubstituted alkene). The fact that one substrate can give two constitutionally different alkenes is the basis of **regioselectivity** (Zaitsev vs Hofmann, Part 4).

**The two leaving fragments depart from adjacent carbons:**
- The base removes $\\text{H}$ from the **$\\beta$-carbon**.
- The **leaving group** departs from the **$\\alpha$-carbon**.
- The electrons from the broken $\\text{C}{-}\\text{H}$ bond flow into the new $\\text{C}{=}\\text{C}$ $\\pi$-bond.

This electron bookkeeping is identical in spirit for both mechanisms; what differs is the *timing*.
      `
    },
    {
      id: 'elimi1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Identifying the Players
      `,
      exercise: {
        questions: [
          {
            question: 'In a β-elimination, which atom or group is removed from the β-carbon?',
            options: [
              'The leaving group',
              'A hydrogen (proton)',
              'A nucleophile',
              'A carbocation'
            ],
            correctAnswer: 1,
            explanation: 'The base abstracts a β-hydrogen from the carbon adjacent to the leaving group. The leaving group itself departs from the α-carbon. Trap: students often swap these — the leaving group is NOT removed from the β-carbon; that carbon loses a proton.'
          },
          {
            question: 'What structural change defines an elimination reaction?',
            options: [
              'A σ-bond is converted into a new π-bond, forming an alkene',
              'A π-bond is converted into two new σ-bonds',
              'A leaving group is replaced by a nucleophile at the same carbon',
              'A carbon chain is lengthened by one carbon'
            ],
            correctAnswer: 0,
            explanation: 'Elimination removes H and LG from adjacent carbons and uses those electrons to form a new C=C π-bond, increasing unsaturation. Option 3 describes substitution (the competing pathway), and option 2 describes the reverse process (addition).'
          },
          {
            question: '2-chloropentane (CH3CHClCH2CH2CH3) undergoes elimination. How many distinct β-carbons bear abstractable hydrogens?',
            options: [
              'One',
              'Two',
              'Three',
              'Zero'
            ],
            correctAnswer: 1,
            explanation: 'The leaving group is on C2 (the α-carbon). The β-carbons are C1 (a CH3) and C3 (a CH2) — two distinct β-positions. Removing H from C1 gives 1-pentene; removing H from C3 gives 2-pentene. C4 and C5 are γ and δ, too far away to participate in a 1,2-elimination.'
          }
        ]
      }
    },
    {
      id: 'elimi1-two-mechanisms',
      type: 'text' as const,
      content: `
### Two Mechanisms: E1 and E2

Just as nucleophilic substitution splits into $\\text{S}_\\text{N}1$ and $\\text{S}_\\text{N}2$, elimination splits into two limiting mechanisms that differ in how the bond-breaking events are sequenced.

| Feature | $\\text{E}2$ | $\\text{E}1$ |
|---------|-------------|-------------|
| Steps | One step, **concerted** | Two steps, **stepwise** |
| Rate law | $\\text{rate} = k[\\text{substrate}][\\text{base}]$ | $\\text{rate} = k[\\text{substrate}]$ |
| Molecularity | Bimolecular | Unimolecular |
| Intermediate | None | **Carbocation** |
| Base strength | Strong base required | Weak base sufficient |
| Geometry | **Anti-periplanar** H and LG required | No geometric requirement |
| Best substrate | $1°$, $2°$, $3°$ | $3° > 2°$ (never $1°$) |

In the **E2** mechanism (Part 2), the base pulls off the $\\beta$-hydrogen at the *same time* the leaving group departs and the $\\pi$-bond forms — a single, concerted transition state. Because the base participates in the rate-determining (only) step, its concentration appears in the rate law.

In the **E1** mechanism (Part 3), the leaving group departs *first* to form a **carbocation**, and only afterward does a (usually weak) base remove a $\\beta$-hydrogen. The slow, rate-determining step is ionization of the leaving group, so the base concentration does **not** appear in the rate law.

> **Mnemonic:** The number tells you the molecularity of the slow step. $\\text{E}2$ = bi-molecular (two species in the rate-determining step: substrate + base). $\\text{E}1$ = uni-molecular (one species: just the substrate ionizing).
      `
    },
    {
      id: 'elimi1-competition',
      type: 'text' as const,
      content: `
### Worked Example — Spotting Elimination vs Substitution

**Problem:** *tert*-butyl bromide, $(\\text{CH}_3)_3\\text{CBr}$, is heated in ethanol. A second flask of *tert*-butyl bromide is treated with concentrated sodium ethoxide, $\\text{NaOCH}_2\\text{CH}_3$. Predict the dominant pathway in each.

**Reasoning:**

*Flask 1 (ethanol, heat):* Ethanol is a **weak base** and a polar protic solvent. A $3°$ substrate cannot do $\\text{S}_\\text{N}2$ or $\\text{E}2$ efficiently (too hindered for backside attack; no strong base present). The leaving group ionizes to a stable $3°$ carbocation, opening the door to **$\\text{S}_\\text{N}1$ and $\\text{E}1$**. Heat tips this competition toward elimination, giving **2-methylpropene** as a major product alongside the ether.

*Flask 2 (strong $\\text{NaOEt}$ base):* Ethoxide is a **strong, somewhat hindered base**. With a $3°$ substrate (no room for backside attack), substitution is shut down and the concerted **$\\text{E}2$** pathway dominates, cleanly delivering **2-methylpropene**.

**Takeaway:** Same substrate, two very different mechanistic regimes — set entirely by the **base/nucleophile strength**, **solvent**, and **temperature**. Part 5 builds this into a full decision framework. For now, internalize the headline: *strong base favors the concerted $\\text{E}2$ route; weak base + ionizing solvent + heat favors the carbocation-based $\\text{E}1$ route.*
      `
    },
    {
      id: 'elimi1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Mechanistic Big Picture
      `,
      exercise: {
        questions: [
          {
            question: 'The rate of a particular elimination doubles when the base concentration doubles (substrate held constant). Which mechanism is operating?',
            options: [
              'E1, because the base appears in the rate law',
              'E2, because rate = k[substrate][base] is first-order in base',
              'E1, because ionization is rate-determining',
              'SN1, because carbocations form first'
            ],
            correctAnswer: 1,
            explanation: 'Dependence on [base] means the base is present in the rate-determining step — the signature of the concerted, bimolecular E2 (rate = k[substrate][base]). In E1 the slow step is unimolecular ionization, so rate = k[substrate] and changing [base] does not change the rate.'
          },
          {
            question: 'Which intermediate is characteristic of the E1 mechanism but absent from E2?',
            options: [
              'A pentavalent carbon transition state',
              'A carbanion',
              'A carbocation',
              'A free radical'
            ],
            correctAnswer: 2,
            explanation: 'E1 is stepwise: the leaving group leaves first to generate a carbocation, which is then deprotonated at a β-position. E2 is concerted and passes through a single transition state with NO discrete intermediate. The carbocation is why E1 favors 3° substrates and can show rearrangements.'
          },
          {
            question: 'Why does a 3° alkyl halide such as (CH3)3CBr resist both SN2 and E2 when only a weak base/nucleophile is present?',
            options: [
              'It has no β-hydrogens',
              'The carbon bearing the leaving group is too sterically hindered for backside attack, and no strong base is present to drive the concerted E2',
              'Tertiary carbons cannot form π-bonds',
              'The C–Br bond is too strong to break'
            ],
            correctAnswer: 1,
            explanation: 'A 3° α-carbon is crowded, blocking SN2 backside attack; E2 needs a strong base, which is absent here. So the substrate instead ionizes to a stable 3° carbocation and reacts by SN1/E1. (It does have β-hydrogens — nine of them — so "no β-hydrogens" is false.)'
          },
          {
            question: 'Increasing the reaction temperature most directly shifts the substitution/elimination competition in which direction, and why?',
            options: [
              'Toward substitution, because higher T speeds up nucleophiles',
              'Toward elimination, because elimination has a more positive entropy change (ΔS) and forms more product molecules',
              'Toward substitution, because elimination is exothermic',
              'It has no effect on the ratio'
            ],
            correctAnswer: 1,
            explanation: 'Elimination cleaves the substrate into an alkene plus protonated base plus leaving group — more particles and greater entropy. Because ΔG = ΔH − TΔS, raising T magnifies the favorable −TΔS term for elimination, so heat favors elimination. This is why E-vs-SN problems specify temperature.'
          }
        ]
      }
    },
    {
      id: 'elimi1-summary',
      type: 'text' as const,
      content: `
### Part 1 Summary

- **Elimination = loss of H (from a $\\beta$-carbon) + loss of a leaving group (from the $\\alpha$-carbon) $\\rightarrow$ a new $\\text{C}{=}\\text{C}$.** These are 1,2- or $\\beta$-eliminations.
- The **$\\alpha$-carbon** carries the leaving group; **$\\beta$-carbons** carry the hydrogens that can be removed. Multiple $\\beta$-positions $\\rightarrow$ multiple possible alkenes (regiochemistry).
- Two limiting mechanisms:
  - **$\\text{E}2$** — concerted, one step, $\\text{rate} = k[\\text{substrate}][\\text{base}]$, needs a **strong base** and **anti-periplanar** geometry.
  - **$\\text{E}1$** — stepwise via a **carbocation**, $\\text{rate} = k[\\text{substrate}]$, favored by **weak bases** and **polar protic solvents**.
- Elimination always **competes with substitution** ($\\text{S}_\\text{N}1/\\text{S}_\\text{N}2$). The winner is decided by **substrate class**, **base strength/bulk**, **solvent**, and **temperature** (heat favors elimination).

Next: **Part 2** dissects the $\\text{E}2$ mechanism — its concerted transition state, anti-periplanar requirement, and stereospecificity on cyclohexane rings.
      `
    }
  ]
}
