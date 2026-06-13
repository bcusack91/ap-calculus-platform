export const oChemElimPart3Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi3-intro',
      type: 'text' as const,
      content: `
## The E1 Mechanism

**Part 3 of 7 — Unimolecular Elimination**

The **$\\text{E}1$** (Elimination, unimolecular) mechanism is **stepwise**. Unlike the concerted $\\text{E}2$, it breaks the two bonds in two separate stages, with a **carbocation intermediate** in between.

**Step 1 — Ionization (slow, rate-determining):** The leaving group departs on its own, generating a carbocation at the $\\alpha$-carbon. This is the high-energy, rate-limiting step.

$\\text{R}_3\\text{C}{-}\\text{LG} \\rightarrow \\text{R}_3\\text{C}^+ + \\text{LG}^-$

**Step 2 — Deprotonation (fast):** A base — frequently a weak one, even the solvent itself — removes a $\\beta$-hydrogen from a carbon adjacent to the cationic center. The $\\text{C}{-}\\text{H}$ electrons collapse into the new $\\pi$-bond.

$\\text{R}_2\\text{C}^+{-}\\text{CHR}' \\rightarrow \\text{R}_2\\text{C}{=}\\text{CR}' + \\text{H}^+$

Because the base enters only **after** the rate-determining step, it is absent from the rate law:

$\\text{rate} = k[\\text{substrate}]$

This first-order kinetics — independent of base — is the experimental fingerprint of $\\text{E}1$ (and it is shared with $\\text{S}_\\text{N}1$, which has the very same rate-determining ionization step).
      `
    },
    {
      id: 'elimi3-conditions',
      type: 'text' as const,
      content: `
### What Conditions Favor E1?

Because the rate-determining step is formation of a carbocation, everything that **stabilizes a carbocation** accelerates $\\text{E}1$.

| Factor | E1 preference | Reason |
|--------|---------------|--------|
| **Substrate** | $3° > 2°$ (never $1°$) | More alkyl groups stabilize the cation via hyperconjugation and induction |
| **Base** | **Weak** (e.g. $\\text{H}_2\\text{O}$, ROH) | No strong base needed; deprotonation is the easy step |
| **Solvent** | Polar **protic** | Solvates and stabilizes the cation and the departing anion |
| **Leaving group** | Good (I, Br, OTs, $\\text{H}_2\\text{O}$ from protonated $\\text{OH}$) | A better LG ionizes more readily |
| **Temperature** | Higher favors elimination over $\\text{S}_\\text{N}1$ | Entropy term rewards elimination |

A $1°$ carbocation is far too unstable to form under normal conditions, so **$1°$ substrates essentially never react by $\\text{E}1$** (they go $\\text{S}_\\text{N}2$/$\\text{E}2$ instead). A $3°$ substrate in a polar protic solvent with a weak base is the textbook $\\text{E}1$ scenario — and it always coexists with $\\text{S}_\\text{N}1$ from the same shared carbocation.

> **$\\text{E}1$ and $\\text{S}_\\text{N}1$ are twins.** Both begin with identical rate-determining ionization to the same carbocation. After that fork, the cation can either lose a $\\beta$-proton (elimination, $\\text{E}1$) or be captured by a nucleophile (substitution, $\\text{S}_\\text{N}1$). You almost never get one without some of the other; conditions (especially temperature) shift the ratio.
      `
    },
    {
      id: 'elimi3-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — E1 Fundamentals
      `,
      exercise: {
        questions: [
          {
            question: 'Which step is rate-determining in the E1 mechanism?',
            options: [
              'Removal of the β-hydrogen by the base',
              'Ionization of the leaving group to form the carbocation',
              'Formation of the π-bond',
              'Attack of a nucleophile on the carbocation'
            ],
            correctAnswer: 1,
            explanation: 'In E1, Step 1 — the leaving group departing to give a carbocation — is the slow, rate-determining step. Step 2 (deprotonation) is fast. Because the base acts only in the fast step, it does not appear in the rate law (rate = k[substrate]).'
          },
          {
            question: 'Why do primary (1°) alkyl halides essentially never undergo E1?',
            options: [
              'They have no β-hydrogens',
              'A primary carbocation is too unstable to form under normal conditions',
              'They cannot dissolve in polar protic solvents',
              'Their leaving groups are always poor'
            ],
            correctAnswer: 1,
            explanation: 'E1 requires forming a carbocation in the rate-determining step. A 1° carbocation is prohibitively high in energy (little hyperconjugative/inductive stabilization), so 1° substrates react by SN2/E2 instead. The issue is cation instability, not a lack of β-hydrogens.'
          },
          {
            question: 'The rate of an elimination is found to be unaffected by tripling the concentration of the base. Which mechanism is most consistent with this observation?',
            options: [
              'E2, because the base is in the rate-determining step',
              'E1, because the rate-determining ionization does not involve the base (rate = k[substrate])',
              'E2, because rate = k[substrate][base]',
              'It is impossible to tell from kinetics'
            ],
            correctAnswer: 1,
            explanation: 'Independence from [base] means the base is NOT in the rate-determining step — the signature of E1 (rate = k[substrate]), whose slow step is unimolecular ionization. If it were E2, the rate would scale with [base] because rate = k[substrate][base].'
          }
        ]
      }
    },
    {
      id: 'elimi3-rearrangements',
      type: 'text' as const,
      content: `
### The Carbocation Tell: Rearrangements

The single most diagnostic feature of $\\text{E}1$ (and $\\text{S}_\\text{N}1$) is that the intermediate is a **free carbocation** — and carbocations **rearrange** to become more stable whenever a quick shift allows it. $\\text{E}2$, having no cationic intermediate, **never** rearranges. Seeing a rearranged product is proof that a carbocation formed.

Two shifts to recognize:

- **Hydride shift ($\\text{H}{:}$ shift):** A hydrogen with its bonding electrons migrates from an adjacent carbon to the cationic center, moving the positive charge to a more substituted carbon.
- **Methyl / alkyl shift:** An alkyl group with its electrons migrates the same way, used when a hydride shift would not improve stability but an adjacent quaternary-ish center can relieve it.

The driving force is always **carbocation stability**: $3° > 2° > 1°$, and resonance/allylic beats all.

> **Stability ladder:** allylic/benzylic (resonance) $>$ $3°$ $>$ $2°$ $>$ $1°$ $>$ methyl. A cation will pay the small cost of a 1,2-shift to climb this ladder, then eliminate from the *rearranged* position.
      `
    },
    {
      id: 'elimi3-worked',
      type: 'text' as const,
      content: `
### Worked Example — E1 with a Hydride Shift

**Problem:** **3-bromo-2,2-dimethylbutane** is heated in aqueous ethanol (weak base, polar protic). Predict the major **elimination** product.

$\\text{(CH}_3)_3\\text{C}{-}\\text{CHBr}{-}\\text{CH}_3$ — the leaving group sits on C3, a $2°$ carbon, right next to a quaternary C2 that carries three methyls.

**Step 1 — Ionize.** Br$^-$ leaves to give a **$2°$ carbocation** at C3.

**Step 2 — Rearrange.** A **methyl shift** is not even needed first; a **hydride is unavailable on C2** (it is quaternary), but a **methyl group migrates** from C2 to C3, moving the positive charge to C2 and converting the $2°$ cation into a far more stable **$3°$ carbocation**. (Equivalently framed: the system relieves a $2°$ cation adjacent to a congested quaternary carbon by a 1,2-alkyl shift to a $3°$ cation.)

**Step 3 — Eliminate.** A weak base removes a $\\beta$-hydrogen from a carbon adjacent to the *new* $3°$ cationic center, giving the **more substituted (Zaitsev) alkene** derived from the **rearranged** skeleton — typically **2,3-dimethyl-2-butene**, a tetrasubstituted alkene.

**Why this matters:** If you had naively applied $\\text{E}2$ logic (no rearrangement) you would predict the wrong carbon skeleton. The appearance of a rearranged, more-substituted alkene is the unmistakable signature of the carbocation-based $\\text{E}1$ pathway.

> **Exam trap:** Whenever an $\\text{E}1$/$\\text{S}_\\text{N}1$ substrate has a $2°$ cation that sits next to a $3°$ or quaternary carbon, **check for a 1,2-shift before drawing products.** Forgetting the rearrangement is the most common $\\text{E}1$ mistake.
      `
    },
    {
      id: 'elimi3-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Carbocations & Rearrangement
      `,
      exercise: {
        questions: [
          {
            question: 'Observing a product whose carbon skeleton has rearranged (e.g., the double bond appears at a more substituted position than the original leaving-group carbon allows) is strong evidence for which mechanism?',
            options: [
              'E2, because of its anti-periplanar requirement',
              'E1, because it proceeds through a carbocation that can undergo 1,2-shifts',
              'SN2, because of backside attack',
              'Any concerted mechanism'
            ],
            correctAnswer: 1,
            explanation: 'Only mechanisms with a free carbocation intermediate (E1 and SN1) can rearrange via hydride or alkyl shifts. E2 is concerted with no intermediate, so it NEVER rearranges. A rearranged product is therefore a fingerprint of E1/SN1.'
          },
          {
            question: 'A 1,2-hydride shift in an E1 intermediate occurs in order to:',
            options: [
              'Convert a more stable carbocation into a less stable one',
              'Move the positive charge to a more stable (e.g., 2° → 3°) carbocation',
              'Form the anti-periplanar geometry needed for elimination',
              'Regenerate the leaving group'
            ],
            correctAnswer: 1,
            explanation: 'Carbocations rearrange only to increase stability — a hydride (or alkyl) shift moves the charge from a less stable position to a more stable one (1° → 2° → 3°, or toward allylic/benzylic). A shift that lowered stability would not occur.'
          },
          {
            question: 'Which set of conditions is the textbook recipe for E1?',
            options: [
              'Primary substrate, strong bulky base, polar aprotic solvent',
              'Tertiary substrate, weak base, polar protic solvent, often with heat',
              'Methyl substrate, strong base, low temperature',
              'Secondary substrate, sodium tert-butoxide, DMSO'
            ],
            correctAnswer: 1,
            explanation: 'E1 needs an easily formed carbocation (3°), a weak base (so no strong base forces concerted E2), and a polar protic solvent to stabilize the ions; heat favors elimination over the competing SN1. Strong/bulky bases in aprotic solvents (options 1, 4) drive E2, and 1°/methyl substrates (options 1, 3) cannot form stable cations.'
          },
          {
            question: 'E1 and SN1 share which feature?',
            options: [
              'Both require anti-periplanar geometry',
              'Both are second order overall',
              'Both share the same rate-determining step: ionization to a common carbocation',
              'Both are favored by strong, bulky bases'
            ],
            correctAnswer: 2,
            explanation: 'E1 and SN1 branch from the SAME carbocation formed in the same rate-determining ionization; afterward the cation either loses a β-proton (E1) or is trapped by a nucleophile (SN1). Both are first order (rate = k[substrate]), neither needs anti-periplanar geometry, and strong bulky bases favor E2 instead.'
          }
        ]
      }
    },
    {
      id: 'elimi3-summary',
      type: 'text' as const,
      content: `
### Part 3 Summary

- **$\\text{E}1$ is stepwise:** Step 1 is slow **ionization** to a **carbocation** (rate-determining); Step 2 is fast **deprotonation** of a $\\beta$-carbon by a (usually weak) base.
- **Kinetics:** $\\text{rate} = k[\\text{substrate}]$ — independent of base, just like $\\text{S}_\\text{N}1$.
- **Favored by:** $3°$ (and some $2°$) substrates, **weak bases**, **polar protic solvents**, good leaving groups, and heat. **$1°$ substrates do not do $\\text{E}1$.**
- **Carbocation intermediate $\\rightarrow$ rearrangements** (hydride/alkyl 1,2-shifts) toward greater stability. Rearranged products are the diagnostic tell that separates $\\text{E}1$ from $\\text{E}2$.
- **$\\text{E}1$ always competes with $\\text{S}_\\text{N}1$** from the shared cation.

Next: **Part 4** tackles **regioselectivity** — Zaitsev vs Hofmann — deciding *which* alkene forms when multiple $\\beta$-hydrogens are available.
      `
    }
  ]
}
