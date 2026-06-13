export const oChemElimPart5Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi5-intro',
      type: 'text' as const,
      content: `
## Substitution vs Elimination: The Decision Framework

**Part 5 of 7 — Choosing Among $\\text{S}_\\text{N}1$, $\\text{S}_\\text{N}2$, $\\text{E}1$, $\\text{E}2$**

Any alkyl halide (or tosylate) presented with a reagent that is **both a nucleophile and a base** can, in principle, react by four pathways. The four constantly compete, and predicting the winner is the capstone skill of this entire unit.

The outcome is governed by four variables:

1. **Substrate class** — methyl, $1°$, $2°$, or $3°$.
2. **Reagent** — its **nucleophilicity** vs **basicity**, and its **steric bulk**.
3. **Solvent** — polar **protic** vs polar **aprotic**.
4. **Temperature** — higher temperature favors elimination.

A reliable strategy: **start with the substrate** (it eliminates whole pathways), then let the **reagent** break the remaining tie, and finally use **solvent/temperature** to fine-tune.

> **Orientation:** $\\text{S}_\\text{N}2$ and $\\text{E}2$ are the **strong-reagent / bimolecular** pair (concerted, $\\text{rate} \\propto [\\text{substrate}][\\text{reagent}]$). $\\text{S}_\\text{N}1$ and $\\text{E}1$ are the **weak-reagent / unimolecular** pair (carbocation, $\\text{rate} \\propto [\\text{substrate}]$). Most decisions reduce to: *is the reagent a strong base/nucleophile or a weak one?*
      `
    },
    {
      id: 'elimi5-substrate',
      type: 'text' as const,
      content: `
### Step 1 — Let the Substrate Narrow the Field

| Substrate | $\\text{S}_\\text{N}2$ | $\\text{E}2$ | $\\text{S}_\\text{N}1$ | $\\text{E}1$ |
|-----------|----------------------|-------------|------------------------|--------------|
| **Methyl** ($\\text{CH}_3{-}$) | Yes (fast) | — (no $\\beta$-H) | No | No |
| **$1°$** | **Favored** | Yes (strong/bulky base) | No (cation too unstable) | No |
| **$2°$** | Possible | Possible | Possible | Possible |
| **$3°$** | **No** (too hindered) | **Yes** (strong base) | **Yes** (stable cation) | **Yes** (stable cation) |

Key deductions baked into this table:

- **Methyl and $1°$ substrates never ionize** (no stable carbocation), so $\\text{S}_\\text{N}1$ and $\\text{E}1$ are off the table. They do $\\text{S}_\\text{N}2$ by default, switching to $\\text{E}2$ only with a strong, **bulky** base.
- **$3°$ substrates never do $\\text{S}_\\text{N}2$** (the $\\alpha$-carbon is too crowded for backside attack). With a **strong base** they do $\\text{E}2$; with a **weak base/nucleophile** in a protic solvent they do $\\text{S}_\\text{N}1$/$\\text{E}1$.
- **$2°$ substrates are the genuine battleground** — all four pathways are possible, so the **reagent and conditions** become decisive.
      `
    },
    {
      id: 'elimi5-reagent',
      type: 'text' as const,
      content: `
### Step 2 — Let the Reagent Break the Tie

Classify the reagent on two independent axes: **how strong a base** it is, and **how good a nucleophile / how bulky** it is.

| Reagent type | Examples | Drives toward |
|--------------|----------|---------------|
| **Strong base, strong nucleophile, small** | $\\text{HO}^-$, $\\text{CH}_3\\text{O}^-$, $\\text{CH}_3\\text{CH}_2\\text{O}^-$, $\\text{CN}^-$, $\\text{N}_3^-$ | $\\text{S}_\\text{N}2$ ($1°$) or $\\text{E}2$ ($2°$/$3°$); $\\text{E}2$ grows with substitution |
| **Strong base, poor nucleophile, bulky** | $(\\text{CH}_3)_3\\text{CO}^-$ ($t\\text{-BuOK}$), LDA, DBU | **$\\text{E}2$** (and **Hofmann** regiochemistry) |
| **Weak base, good nucleophile** | $\\text{I}^-$, $\\text{Br}^-$, $\\text{RS}^-$, $\\text{CH}_3\\text{CO}_2^-$ | **$\\text{S}_\\text{N}2$** (little elimination) |
| **Weak base, weak nucleophile** | $\\text{H}_2\\text{O}$, ROH, neutral solvent | $\\text{S}_\\text{N}1$/$\\text{E}1$ (only with $3°$/$2°$) |

Two distinctions that trip students up:

- **Basicity is not the same as nucleophilicity.** Some species are strong nucleophiles but weak bases (e.g., $\\text{I}^-$, $\\text{RS}^-$): they favor **substitution** even on $2°$ substrates. Some are strong bases but poor nucleophiles because of steric bulk ($t\\text{-BuOK}$): they favor **elimination**.
- **Bulk forces elimination.** A big base cannot reach the $\\alpha$-carbon to substitute, so it abstracts a $\\beta$-H instead — the single cleanest lever to convert a would-be $\\text{S}_\\text{N}2$ into an $\\text{E}2$.
      `
    },
    {
      id: 'elimi5-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Substrate & Reagent
      `,
      exercise: {
        questions: [
          {
            question: 'A tertiary alkyl halide is treated with a strong base such as sodium ethoxide. Which pathway dominates?',
            options: [
              'SN2, because the base is a good nucleophile',
              'E2, because 3° substrates cannot do SN2 and a strong base drives concerted elimination',
              'SN1, because the substrate is tertiary',
              'No reaction occurs'
            ],
            correctAnswer: 1,
            explanation: 'A 3° α-carbon is too hindered for SN2 backside attack, so substitution by the strong base is blocked. A strong base drives the concerted E2 pathway. SN1/E1 would dominate only with a WEAK base in a protic solvent — not with strong ethoxide.'
          },
          {
            question: 'Sodium iodide (NaI), a strong nucleophile but weak base, reacts with 2-bromobutane. The major pathway is:',
            options: [
              'E2, because iodide removes a β-hydrogen',
              'SN2, because iodide is a strong nucleophile and weak base, favoring substitution',
              'E1, because the substrate is secondary',
              'SN1, because iodide stabilizes carbocations'
            ],
            correctAnswer: 1,
            explanation: 'Nucleophilicity and basicity are separate. Iodide is a strong nucleophile but a weak base, so it substitutes rather than eliminates — giving mostly SN2 even on a 2° substrate. Strong bases (not strong nucleophiles) are what drive E2.'
          },
          {
            question: 'A primary alkyl bromide is treated with potassium tert-butoxide. What is the expected major product type?',
            options: [
              'SN1 substitution',
              'E1 elimination',
              'E2 elimination (Hofmann-oriented), because the base is strong and bulky',
              'No reaction, since 1° substrates are unreactive'
            ],
            correctAnswer: 2,
            explanation: 'A 1° substrate would normally do SN2, but a strong, BULKY base (tert-butoxide) is too big for backside attack and instead abstracts a β-hydrogen, giving E2. The bulk also steers toward the Hofmann (less substituted) alkene. 1° substrates cannot do E1/SN1 (no stable cation).'
          }
        ]
      }
    },
    {
      id: 'elimi5-solvent-temp',
      type: 'text' as const,
      content: `
### Step 3 — Solvent and Temperature Fine-Tuning

**Solvent.**

- **Polar protic** ($\\text{H}_2\\text{O}$, ROH): hydrogen-bonds to anions, stabilizing the developing **carbocation** and solvating the leaving group. Favors **$\\text{S}_\\text{N}1$/$\\text{E}1$**. It also "cages" small anionic nucleophiles, slowing $\\text{S}_\\text{N}2$.
- **Polar aprotic** (acetone, DMSO, DMF, acetonitrile): dissolves ionic reagents but cannot hydrogen-bond to the anion, leaving the nucleophile/base "naked" and highly reactive. Dramatically accelerates the **bimolecular $\\text{S}_\\text{N}2$/$\\text{E}2$** pathways.

**Temperature.**

Elimination has a **more positive entropy of activation** than substitution — it cleaves one molecule into two (alkene + leaving group) plus the protonated base. Since $\\Delta G^{\\ddagger} = \\Delta H^{\\ddagger} - T\\Delta S^{\\ddagger}$, **raising $T$** preferentially lowers the elimination barrier. **Heat favors elimination** over substitution across the board.

| Lever | Push toward substitution | Push toward elimination |
|-------|--------------------------|-------------------------|
| Solvent (for the cationic pair) | — | polar protic helps $\\text{E}1$ |
| Solvent (for the concerted pair) | aprotic + good Nu $\\rightarrow$ $\\text{S}_\\text{N}2$ | aprotic + strong base $\\rightarrow$ $\\text{E}2$ |
| Temperature | lower $T$ | **higher $T$** |
| Reagent bulk | small (good Nu) | **bulky base** |

> **Rule of thumb:** if a problem deliberately says "**heat**," "**reflux**," or "$\\Delta$," it is nudging you toward the **elimination** product.
      `
    },
    {
      id: 'elimi5-worked',
      type: 'text' as const,
      content: `
### Worked Example — Walking the Framework

**Problem:** Predict the dominant mechanism and product for **2-bromo-2-methylpropane**... no, let's use a genuine $2°$ battleground: **2-bromobutane** under three conditions.

**(a) $\\text{CH}_3\\text{CH}_2\\text{O}^-$ (NaOEt) in ethanol, warm.**
- *Substrate:* $2°$ $\\rightarrow$ all four possible. *Reagent:* strong, small base. *Result:* strong base $\\rightarrow$ **$\\text{E}2$** dominates (with some $\\text{S}_\\text{N}2$). Warmth reinforces elimination. **Major: 2-butene (Zaitsev, trans).**

**(b) $\\text{NaI}$ in acetone.**
- *Substrate:* $2°$. *Reagent:* strong nucleophile, **weak base**, in polar **aprotic** solvent. *Result:* substitution beats elimination $\\rightarrow$ **$\\text{S}_\\text{N}2$**. **Major: 2-iodobutane** (with inversion of configuration).

**(c) $\\text{H}_2\\text{O}$/ethanol, heated, no added base.**
- *Substrate:* $2°$ (can ionize, marginally). *Reagent:* **weak base, weak nucleophile** in polar **protic** solvent, with heat. *Result:* the **unimolecular** pair $\\rightarrow$ $\\text{S}_\\text{N}1$/$\\text{E}1$ mixture; heat tilts it toward **$\\text{E}1$**, giving **2-butene** plus some 2-butanol/ether.

**Method recap:** (1) substrate class to prune pathways, (2) reagent strength/bulk to choose the pair and within it, (3) solvent and temperature to confirm. Three different reagents, three different mechanisms — from one substrate.

> **Exam trap:** A "strong nucleophile" is not automatically a "strong base." Sort the reagent on **both** axes before deciding $\\text{S}_\\text{N}2$ vs $\\text{E}2$.
      `
    },
    {
      id: 'elimi5-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Solvent, Temperature, Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Why does raising the temperature favor elimination over substitution?',
            options: [
              'Elimination is always exothermic',
              'Elimination has a more positive entropy of activation (it makes more particles), so the −TΔS‡ term lowers its barrier more as T rises',
              'Higher temperature destroys the nucleophile',
              'Substitution requires a carbocation that decomposes when heated'
            ],
            correctAnswer: 1,
            explanation: 'Elimination splits one molecule into an alkene plus a leaving group (plus protonated base) — greater entropy. Because ΔG‡ = ΔH‡ − TΔS‡, increasing T magnifies the favorable −TΔS‡ term for elimination, lowering its relative barrier. This is why "heat/reflux/Δ" hints at elimination.'
          },
          {
            question: 'Switching from a polar protic solvent (ethanol) to a polar aprotic solvent (DMSO) for a reaction of a strong, small base with a 2° substrate will:',
            options: [
              'Favor SN1/E1 by stabilizing the carbocation',
              'Accelerate the bimolecular SN2/E2 pathways by leaving the base/nucleophile unsolvated and reactive',
              'Stop the reaction entirely',
              'Force a carbocation rearrangement'
            ],
            correctAnswer: 1,
            explanation: 'Polar aprotic solvents dissolve the ionic reagent but cannot hydrogen-bond to the anion, so the base/nucleophile stays "naked" and highly reactive — boosting the concerted SN2/E2 pair. Polar protic solvents do the opposite, stabilizing carbocations and favoring SN1/E1.'
          },
          {
            question: 'A 2° substrate reacts with a strong, small base (sodium ethoxide) in a warm aprotic solvent. The major pathway and product type are:',
            options: [
              'SN1 giving an alcohol',
              'E2 giving the Zaitsev alkene',
              'E1 with carbocation rearrangement',
              'SN2 with retention of configuration'
            ],
            correctAnswer: 1,
            explanation: 'Strong, small base + 2° substrate + warmth + aprotic solvent all point to the concerted bimolecular pair, and a strong base tips it to E2 over SN2 — giving the Zaitsev (more substituted) alkene. SN2 proceeds with inversion (not retention), and there is no carbocation here to rearrange.'
          },
          {
            question: 'You want to convert a 1° alkyl bromide cleanly into a nitrile (R–CN). Which reagent/conditions best avoid elimination?',
            options: [
              'Potassium tert-butoxide, heat',
              'Sodium cyanide (a good nucleophile, weaker base) in DMSO at moderate temperature',
              'DBU at reflux',
              'Dilute aqueous acid, heat'
            ],
            correctAnswer: 1,
            explanation: 'Cyanide is a strong nucleophile but only a moderate base, and a 1° substrate in polar aprotic DMSO at moderate temperature strongly favors SN2 substitution → the nitrile. Bulky strong bases (t-BuOK, DBU) and heat would promote E2 elimination instead, and aqueous acid would not install CN.'
          }
        ]
      }
    },
    {
      id: 'elimi5-summary',
      type: 'text' as const,
      content: `
### Part 5 Summary

- Four pathways compete; decide with a fixed order: **(1) substrate $\\rightarrow$ (2) reagent $\\rightarrow$ (3) solvent/temperature.**
- **Substrate:** methyl/$1°$ $\\rightarrow$ only bimolecular ($\\text{S}_\\text{N}2$ default, $\\text{E}2$ with bulky base); $3°$ $\\rightarrow$ never $\\text{S}_\\text{N}2$ ($\\text{E}2$ with strong base, $\\text{S}_\\text{N}1$/$\\text{E}1$ with weak base); $2°$ $\\rightarrow$ all four, reagent decides.
- **Reagent (two axes):** strong base $\\rightarrow$ $\\text{E}2$; strong nucleophile/weak base $\\rightarrow$ $\\text{S}_\\text{N}2$; bulky strong base $\\rightarrow$ $\\text{E}2$ (Hofmann); weak base + weak nucleophile $\\rightarrow$ $\\text{S}_\\text{N}1$/$\\text{E}1$.
- **Solvent:** polar **protic** $\\rightarrow$ $\\text{S}_\\text{N}1$/$\\text{E}1$; polar **aprotic** $\\rightarrow$ $\\text{S}_\\text{N}2$/$\\text{E}2$.
- **Temperature:** **heat favors elimination** ($-T\\Delta S^{\\ddagger}$ term).

Next: **Part 6** is a problem-solving workshop — apply this framework to predict products, distinguish $\\text{E}1$ from $\\text{E}2$, and reason through stereochemistry.
      `
    }
  ]
}
