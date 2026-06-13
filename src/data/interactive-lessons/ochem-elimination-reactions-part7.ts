export const oChemElimPart7Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi7-intro',
      type: 'text' as const,
      content: `
## Synthesis & Review

**Part 7 of 7 — Tying the Unit Together**

You now have the full toolkit. This closing part fuses the six mechanisms-and-rules into one coherent picture, gives you a master decision flowchart, and stress-tests your understanding with integrative problems.

**The one-sentence summary of the whole unit:** an alkyl halide presented with a base/nucleophile can substitute or eliminate by a unimolecular or bimolecular path, and the winner is set by **substrate class, reagent (basicity vs nucleophilicity vs bulk), solvent, and temperature** — with $\\text{E}2$ additionally requiring **anti-periplanar geometry** and $\\text{E}1$ additionally allowing **carbocation rearrangement**.

**The four mechanisms at a glance:**

| | $\\text{S}_\\text{N}2$ | $\\text{E}2$ | $\\text{S}_\\text{N}1$ | $\\text{E}1$ |
|---|---|---|---|---|
| Steps | 1 (concerted) | 1 (concerted) | 2 (cation) | 2 (cation) |
| Rate law | $k[\\text{S}][\\text{Nu}]$ | $k[\\text{S}][\\text{base}]$ | $k[\\text{S}]$ | $k[\\text{S}]$ |
| Best substrate | methyl, $1°$ | $3° > 2° > 1°$ | $3°$ | $3°$ |
| Reagent | strong Nu | strong base | weak | weak base |
| Stereochem | inversion | anti-periplanar ($E/Z$) | racemization | planar cation |
| Rearrange? | no | no | yes | yes |
      `
    },
    {
      id: 'elimi7-flowchart',
      type: 'text' as const,
      content: `
### The Master Decision Flowchart

Run a substrate-plus-reagent problem through these gates in order:

**Gate 1 — Classify the substrate.**
- **Methyl or $1°$:** carbocations won't form. Go to Gate 2A.
- **$3°$:** $\\text{S}_\\text{N}2$ is impossible. Go to Gate 2B.
- **$2°$:** all four are live; the reagent decides. Go to Gate 2C.

**Gate 2A (methyl / $1°$).**
- Strong **unhindered** nucleophile $\\rightarrow$ **$\\text{S}_\\text{N}2$**.
- Strong **bulky** base ($t\\text{-BuOK}$, DBU) $\\rightarrow$ **$\\text{E}2$** (Hofmann).
- Weak base/nucleophile $\\rightarrow$ little reaction (no stable cation).

**Gate 2B ($3°$).**
- **Strong base** $\\rightarrow$ **$\\text{E}2$**.
- **Weak base/nucleophile**, polar protic $\\rightarrow$ **$\\text{S}_\\text{N}1$ + $\\text{E}1$** (heat $\\rightarrow$ more $\\text{E}1$).

**Gate 2C ($2°$).**
- Strong base, small $\\rightarrow$ mix of **$\\text{S}_\\text{N}2$ + $\\text{E}2$** (strong base raises $\\text{E}2$).
- Strong base, **bulky** $\\rightarrow$ **$\\text{E}2$** (Hofmann).
- Strong **nucleophile, weak base** ($\\text{I}^-$, $\\text{RS}^-$) $\\rightarrow$ **$\\text{S}_\\text{N}2$**.
- Weak base/nucleophile, polar protic, heat $\\rightarrow$ **$\\text{S}_\\text{N}1$ + $\\text{E}1$**.

**Gate 3 — Refine.** Apply **Zaitsev/Hofmann** for regiochemistry, **anti-periplanar** geometry for $E/Z$ and ring rates, and check for **carbocation rearrangement** on any $\\text{E}1$/$\\text{S}_\\text{N}1$ path.

> **Memory hook:** *Substrate sets the stage, the reagent picks the play, solvent and heat adjust the volume.*
      `
    },
    {
      id: 'elimi7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Integrating the Framework
      `,
      exercise: {
        questions: [
          {
            question: 'Which TWO factors are required for an E2 reaction specifically (beyond just "elimination")?',
            options: [
              'A carbocation intermediate and a weak base',
              'A strong base and anti-periplanar alignment of the β-H and leaving group',
              'A polar protic solvent and a tertiary carbocation',
              'A bulky leaving group and low temperature'
            ],
            correctAnswer: 1,
            explanation: 'E2 is concerted and bimolecular: it needs a strong base and the stereoelectronic anti-periplanar (180°) arrangement of the β-H and leaving group. Carbocations and weak bases/protic solvents belong to E1, not E2.'
          },
          {
            question: 'For a SECONDARY substrate, which reagent property most cleanly tips the outcome from substitution toward elimination?',
            options: [
              'Higher nucleophilicity of the reagent',
              'Greater basicity and/or steric bulk of the reagent',
              'A better leaving group',
              'A less polar solvent only'
            ],
            correctAnswer: 1,
            explanation: 'On the 2° battleground, a stronger and/or bulkier BASE pushes toward E2, while a strong nucleophile that is a weak base pushes toward SN2. Basicity and bulk — not nucleophilicity — are the levers that favor elimination.'
          },
          {
            question: 'A methyl halide (CH3Br) is treated with a strong base. Which elimination product forms?',
            options: [
              'The Zaitsev alkene',
              'The Hofmann alkene',
              'No elimination is possible — a methyl halide has no β-carbon and therefore no β-hydrogen',
              'A carbocation-derived rearranged alkene'
            ],
            correctAnswer: 2,
            explanation: 'Elimination needs a β-hydrogen on a carbon adjacent to the leaving group. A methyl halide has no second carbon, hence no β-position, so elimination cannot occur at all — it can only do SN2. This is a common trap.'
          }
        ]
      }
    },
    {
      id: 'elimi7-integrative',
      type: 'text' as const,
      content: `
### Integrative Worked Example — One Substrate, the Full Decision

**Problem:** Predict the dominant pathway and major organic product for **2-bromo-3-methylbutane**, $(\\text{CH}_3)_2\\text{CH}{-}\\text{CHBr}{-}\\text{CH}_3$, under each condition.

**Map the substrate.** Leaving group on C2 ($2°$). $\\beta$-carbons: C1 (a $\\text{CH}_3$) and C3 (a $\\text{CH}$ bearing an isopropyl-type branch). Note that C3 is adjacent to a more substituted center — a carbocation here could be tempted to rearrange.

**(a) $t\\text{-BuOK}$ (strong, bulky base), warm.**
- Gate 2C: bulky strong base $\\rightarrow$ **$\\text{E}2$**, **Hofmann** regiochemistry. Remove the exposed C1 methyl H $\\rightarrow$ **3-methyl-1-butene** (less substituted). No carbocation $\\rightarrow$ **no rearrangement**, even though the skeleton looks "rearrangement-prone."

**(b) $\\text{NaOCH}_2\\text{CH}_3$ (small strong base), warm.**
- Gate 2C: small strong base $\\rightarrow$ **$\\text{E}2$**, **Zaitsev**. Remove the C3 H $\\rightarrow$ **2-methyl-2-butene** (trisubstituted), the more stable alkene; trans where applicable.

**(c) $\\text{CH}_3\\text{CH}_2\\text{OH}$ alone, heated (weak base, polar protic).**
- Gate 2C: weak base + protic + heat $\\rightarrow$ ionize to a $2°$ carbocation $\\rightarrow$ **$\\text{E}1$/$\\text{S}_\\text{N}1$**. The $2°$ cation at C2 sits next to the $3°$-capable C3, so a **hydride shift** to the more stable $3°$ cation is likely, after which elimination gives the **rearranged, more-substituted** alkene (**2-methyl-2-butene**), plus substitution by-products. **The rearrangement is the tell that this run is $\\text{E}1$, not $\\text{E}2$.**

**Synthesis of the lesson:** identical connectivity, three reagents, three different mechanisms and (in two cases) three different major alkenes. Bulky base flipped regiochemistry to Hofmann; the weak-base/protic/heat run unlocked a carbocation and a rearrangement that the concerted runs could never show.

> **Final exam trap:** never assume a rearrangement. It only happens on the **cationic ($\\text{E}1$/$\\text{S}_\\text{N}1$)** pathways. A bulky-base $\\text{E}2$ on the very same substrate gives a clean, unrearranged Hofmann alkene.
      `
    },
    {
      id: 'elimi7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Final Review — Comprehensive
      `,
      exercise: {
        questions: [
          {
            question: 'Rank the relative stability of these alkenes (most stable first): I) (CH3)2C=C(CH3)2, II) CH3CH=CHCH3, III) CH2=CHCH2CH3.',
            options: [
              'III > II > I',
              'I > II > III (tetrasubstituted > disubstituted > monosubstituted)',
              'II > I > III',
              'They are all equally stable'
            ],
            correctAnswer: 1,
            explanation: 'Alkene stability increases with the number of alkyl substituents on the C=C (hyperconjugation + induction). I is tetrasubstituted, II is disubstituted, III is monosubstituted, so I > II > III. This ordering is the engine behind Zaitsev selectivity.'
          },
          {
            question: 'A substrate gives ONLY the more stable trans (E) alkene and no cis (Z) from a strong base, and the rate depends on [base]. Which mechanism and feature explain this?',
            options: [
              'E1, because the planar carbocation chooses the more stable alkene',
              'E2, because the anti-periplanar requirement plus a preference for the lower-energy transition state select the trans alkene; base-dependent rate confirms E2',
              'SN2, because of backside attack',
              'E1, because rearrangement occurred'
            ],
            correctAnswer: 1,
            explanation: 'Base-dependent rate = E2. E2 is stereospecific (anti-periplanar) and, when a choice exists, proceeds through the lower-energy transition state leading to the more stable trans alkene. E1 would be base-independent and tend to scramble geometry.'
          },
          {
            question: 'Which combination would you choose to convert 2-bromo-2-methylbutane selectively into the LESS substituted alkene (2-methyl-1-butene)?',
            options: [
              'Sodium ethoxide (small base), warm',
              'Potassium tert-butoxide (bulky base)',
              'Water, heat (E1 conditions)',
              'Sodium iodide in acetone'
            ],
            correctAnswer: 1,
            explanation: 'The less substituted (Hofmann) alkene requires a bulky base to block abstraction of the hindered internal β-H. tert-Butoxide does exactly this. A small base (ethoxide) or E1 conditions give the Zaitsev (more substituted) alkene, and NaI/acetone favors SN2 substitution.'
          },
          {
            question: 'A 3° alkyl chloride in pure ethanol with gentle warming gives a mixture of an ether and an alkene, with the rate independent of any added base. The alkene arises by:',
            options: [
              'E2, because ethanol is a strong base',
              'E1, sharing the rate-determining carbocation formation with the competing SN1 that gives the ether',
              'SN2, because chloride is a good leaving group',
              'E2 with anti-periplanar geometry'
            ],
            correctAnswer: 1,
            explanation: 'Weak base (ethanol), polar protic solvent, 3° substrate, base-independent rate → the unimolecular pair. The alkene forms by E1 and the ether by SN1, both branching from the same carbocation made in the shared rate-determining ionization. Ethanol is a weak base, so E2 is not operative here.'
          },
          {
            question: 'Across the whole unit, which factor favors ELIMINATION over substitution regardless of mechanism?',
            options: [
              'Lower temperature',
              'A small, highly nucleophilic reagent',
              'Higher temperature',
              'A polar protic solvent with a weak nucleophile'
            ],
            correctAnswer: 2,
            explanation: 'Higher temperature universally favors elimination because elimination has a more positive entropy of activation (it generates more particles), so −TΔS‡ lowers its barrier as T rises. Small strong nucleophiles favor substitution, and lower temperature favors substitution.'
          }
        ]
      }
    },
    {
      id: 'elimi7-summary',
      type: 'text' as const,
      content: `
### Unit Summary — Elimination Reactions

- **Definition:** loss of a $\\beta$-H and a leaving group from adjacent carbons builds a new $\\text{C}{=}\\text{C}$; elimination perpetually **competes with substitution**.
- **$\\text{E}2$:** concerted, $\\text{rate} = k[\\text{substrate}][\\text{base}]$, strong base, **anti-periplanar** ($180°$) geometry $\\rightarrow$ **stereospecific**; no rearrangement.
- **$\\text{E}1$:** stepwise via a **carbocation**, $\\text{rate} = k[\\text{substrate}]$, weak base + polar protic + heat; **rearrangements** possible; shares its cation with $\\text{S}_\\text{N}1$.
- **Regiochemistry:** **small base $\\rightarrow$ Zaitsev** (more substituted, more stable); **bulky base or bulky leaving group $\\rightarrow$ Hofmann** (less substituted). Ring geometry can override Zaitsev.
- **Decision framework:** **substrate $\\rightarrow$ reagent (basicity / nucleophilicity / bulk) $\\rightarrow$ solvent + temperature.** Methyl/$1°$ can't ionize; $3°$ can't do $\\text{S}_\\text{N}2$; $2°$ is decided by the reagent. **Heat always favors elimination.**

You have completed the elimination-reactions unit — from a single $\\beta$-elimination event to the full four-pathway decision map.
      `
    }
  ]
}
