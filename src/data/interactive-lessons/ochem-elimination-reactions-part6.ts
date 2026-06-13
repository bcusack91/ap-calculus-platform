export const oChemElimPart6Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi6-intro',
      type: 'text' as const,
      content: `
## Problem-Solving Workshop

**Part 6 of 7 — Putting It All Together**

This part is a guided studio. You will practice the four recurring tasks of an elimination problem:

1. **Predict the elimination product(s)** — map every $\\beta$-hydrogen, then apply regiochemistry.
2. **Distinguish $\\text{E}1$ from $\\text{E}2$** — using kinetics, base strength, solvent, and the rearrangement tell.
3. **Choose between substitution and elimination** — run the Part 5 framework.
4. **Reason through stereochemistry** — anti-periplanar geometry and the $E/Z$ outcome.

A dependable five-question checklist for any substrate-plus-reagent prompt:

| Ask | What it decides |
|-----|-----------------|
| What **class** is the substrate ($1°/2°/3°$)? | Which pathways are even possible |
| Is the reagent a **strong or weak base**? | Bimolecular ($\\text{E}2/\\text{S}_\\text{N}2$) vs unimolecular ($\\text{E}1/\\text{S}_\\text{N}1$) |
| Is the base **bulky**? | Zaitsev vs Hofmann; $\\text{S}_\\text{N}2$ vs $\\text{E}2$ |
| Is the solvent **protic or aprotic**, and is there **heat**? | Cationic vs concerted; substitution vs elimination |
| Could a **carbocation rearrange**? | Whether the product skeleton shifts ($\\text{E}1$ only) |
      `
    },
    {
      id: 'elimi6-worked1',
      type: 'text' as const,
      content: `
### Worked Problem 1 — Predict the E2 Product on a Ring

**Problem:** *trans*-1-bromo-4-*tert*-butylcyclohexane is treated with sodium ethoxide. Predict the product and comment on the rate, paying attention to anti-periplanar geometry.

**Set up the chair.** The bulky *tert*-butyl group is an "anchor": it is essentially **locked equatorial** because an axial *tert*-butyl is prohibitively strained. In the *trans* isomer, the C1 bromine is therefore forced **equatorial** in the favored chair.

**Apply the $\\text{E}2$ geometry rule.** $\\text{E}2$ on a ring needs the leaving group **axial** (trans-diaxial to a $\\beta$-H). But here Br is locked equatorial. The molecule must **ring-flip** to put Br axial — which also forces *tert*-butyl axial, a very high-energy conformer that is present only in tiny amounts.

**Consequence.** Elimination *can* occur (from that rare diaxial conformer, Br axial finds axial $\\beta$-H's on C2/C6), giving **4-*tert*-butylcyclohexene**, but the reaction is **slow** because the reactive conformer is sparsely populated.

**Contrast:** the *cis* isomer holds Br **axial** in the favored chair (since *tert*-butyl stays equatorial), so it eliminates **much faster**. Same connectivity, opposite stereochemistry, very different rate.

> **Lesson:** On rings, the rate and feasibility of $\\text{E}2$ hinge on whether the leaving group can be **axial**. Anchor groups (like *tert*-butyl) freeze the chair and let you predict that directly.
      `
    },
    {
      id: 'elimi6-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Predicting Products & Geometry
      `,
      exercise: {
        questions: [
          {
            question: 'cis-1-bromo-4-tert-butylcyclohexane undergoes E2 much faster than its trans isomer. Why?',
            options: [
              'The cis isomer has more β-hydrogens',
              'In the cis isomer the tert-butyl group locks equatorial, forcing the bromine axial — the geometry E2 requires — whereas in the trans isomer bromine is locked equatorial and must ring-flip to react',
              'The trans isomer cannot form an alkene at all',
              'The cis isomer reacts by E1 instead of E2'
            ],
            correctAnswer: 1,
            explanation: 'The bulky tert-butyl group anchors equatorial. In the cis isomer that places Br axial (trans-diaxial to β-H, ready for E2). In the trans isomer Br is equatorial and the molecule must populate a high-energy flipped chair (tert-butyl axial) before E2 can occur — hence much slower. Both isomers have the same number of β-hydrogens.'
          },
          {
            question: 'For a cyclohexyl halide, the prerequisite for an E2 elimination is that the leaving group must be:',
            options: [
              'Equatorial',
              'Axial (so a β-hydrogen can be trans-diaxial/anti-periplanar to it)',
              'Either axial or equatorial',
              'Attached to a 3° carbon'
            ],
            correctAnswer: 1,
            explanation: 'Anti-periplanar geometry on a chair is satisfied only when the leaving group is axial, lining up trans-diaxial with an axial β-hydrogen. An equatorial leaving group must ring-flip to axial before E2 can proceed.'
          },
          {
            question: '2-bromo-2,3-dimethylbutane reacts with a SMALL strong base (NaOEt). Which is the major (Zaitsev) alkene?',
            options: [
              '2,3-dimethyl-1-butene (less substituted)',
              '2,3-dimethyl-2-butene (tetrasubstituted, more substituted)',
              '2-bromo-3-methylbutane',
              '3,3-dimethyl-1-butene'
            ],
            correctAnswer: 1,
            explanation: 'With a small base, Zaitsev applies: remove the β-H that gives the more substituted alkene. Eliminating toward C3 yields tetrasubstituted 2,3-dimethyl-2-butene, the most stable alkene available, as the major product. A bulky base would instead favor the less substituted 2,3-dimethyl-1-butene (Hofmann).'
          }
        ]
      }
    },
    {
      id: 'elimi6-worked2',
      type: 'text' as const,
      content: `
### Worked Problem 2 — Is It E1 or E2?

**Problem:** 2-bromo-2-methylbutane gives the same constitutional alkenes under two different conditions. How do you decide whether a given run is $\\text{E}1$ or $\\text{E}2$? Diagnose each:

**Run A:** $t\\text{-BuOK}$ in *tert*-butanol. **Run B:** dilute ethanol, heated, no added strong base.

**Diagnose Run A.** Strong, bulky base present $\\rightarrow$ the rate-determining step is concerted attack on a $\\beta$-H $\\rightarrow$ **$\\text{E}2$**. Predictions: $\\text{rate} = k[\\text{substrate}][\\text{base}]$; **no rearrangement** possible; bulky base $\\rightarrow$ **Hofmann** product (2-methyl-1-butene) favored.

**Diagnose Run B.** Weak base, polar protic solvent, heat $\\rightarrow$ ionization to a $3°$ carbocation $\\rightarrow$ **$\\text{E}1$**. Predictions: $\\text{rate} = k[\\text{substrate}]$ (base-independent); **Zaitsev** product (2-methyl-2-butene) favored; **rearrangement possible** if it would stabilize the cation.

**Four tests to tell them apart:**

| Diagnostic | $\\text{E}2$ | $\\text{E}1$ |
|------------|-------------|-------------|
| Effect of doubling [base] on rate | rate doubles | no change |
| Base strength used | strong | weak |
| Carbocation rearrangement seen? | never | possible |
| Stereospecific (anti-periplanar control)? | yes | no (cation is planar) |

> **Decisive single clue:** if the question reports that the **rate depends on base concentration**, it is $\\text{E}2$. If it reports a **rearranged skeleton**, it is $\\text{E}1$. Either observation alone settles the mechanism.
      `
    },
    {
      id: 'elimi6-worked3',
      type: 'text' as const,
      content: `
### Worked Problem 3 — Substitution or Elimination?

**Problem:** Decide the dominant product for each, then name the pathway.

**(i) 1-bromobutane + $\\text{NaOCH}_2\\text{CH}_3$ (small strong base).**
$1°$ substrate $\\rightarrow$ no $\\text{S}_\\text{N}1$/$\\text{E}1$. A small strong base/good nucleophile favors **$\\text{S}_\\text{N}2$** (substitution) over $\\text{E}2$ on a $1°$ substrate. **Major: butyl ethyl ether** (some 1-butene as a minor product).

**(ii) 1-bromobutane + $t\\text{-BuOK}$ (bulky strong base).**
Same $1°$ substrate, but the **bulky** base cannot do backside attack $\\rightarrow$ **$\\text{E}2$**. **Major: 1-butene** (Hofmann is moot — only one $\\beta$-position pattern here, terminal alkene).

**(iii) 2-bromo-2-methylpropane (*t*-BuBr) + $\\text{H}_2\\text{O}$, warm.**
$3°$ substrate, **weak base/nucleophile**, polar protic, heat $\\rightarrow$ ionizes to a stable $3°$ cation $\\rightarrow$ **$\\text{S}_\\text{N}1$/$\\text{E}1$**; heat favors **$\\text{E}1$**. **Major: 2-methylpropene** (plus some *tert*-butanol).

**(iv) 2-bromopropane + $\\text{NaSH}$ (strong nucleophile, weak base).**
$2°$ substrate; reagent is a strong nucleophile but **weak base** $\\rightarrow$ **$\\text{S}_\\text{N}2$** (substitution) dominates. **Major: 2-propanethiol**.

> **Pattern to internalize:** *small good nucleophile* $\\rightarrow$ substitution; *bulky strong base* $\\rightarrow$ elimination; *$3°$ + weak base + protic + heat* $\\rightarrow$ $\\text{E}1$. The reagent's two-axis identity (nucleophilicity vs basicity vs bulk) is what decides $2°$ cases.
      `
    },
    {
      id: 'elimi6-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Mechanism Diagnosis & Competition
      `,
      exercise: {
        questions: [
          {
            question: 'A reaction produces an alkene whose double bond is at a carbon that was NOT adjacent to the original leaving group, accompanied by a more substituted skeleton than expected. The mechanism is almost certainly:',
            options: [
              'E2, because of anti-periplanar geometry',
              'E1, because a carbocation rearranged before losing a proton',
              'SN2, because of inversion',
              'A concerted, rearrangement-free pathway'
            ],
            correctAnswer: 1,
            explanation: 'A rearranged carbon skeleton can only arise from a free carbocation (hydride/alkyl shift), which is unique to E1 (and SN1). E2 is concerted with no intermediate and never rearranges, so a rearranged product rules out E2.'
          },
          {
            question: 'Which single experimental observation, by itself, confirms an E2 (not E1) mechanism?',
            options: [
              'A more substituted (Zaitsev) alkene forms',
              'The reaction rate increases when the base concentration is increased',
              'The reaction is run in a polar protic solvent',
              'The substrate is tertiary'
            ],
            correctAnswer: 1,
            explanation: 'Rate dependence on [base] means the base is in the rate-determining step — only E2 (rate = k[substrate][base]) behaves this way; E1 rate is base-independent. Zaitsev products, protic solvents, and tertiary substrates are each consistent with E1 too, so they cannot distinguish the mechanisms alone.'
          },
          {
            question: '2-bromopropane reacts with sodium acetate (CH3CO2Na), a weak base and modest nucleophile, in acetic acid. The most likely outcome is:',
            options: [
              'E2 giving propene as the major product',
              'Predominantly substitution (SN2-like) giving isopropyl acetate, with little elimination',
              'E1 with extensive rearrangement',
              'No reaction'
            ],
            correctAnswer: 1,
            explanation: 'Acetate is a weak base, so it will not drive E2; it is still nucleophilic enough to substitute. On a 2° substrate with a weak-base nucleophile, substitution dominates over elimination, giving isopropyl acetate. A strong base would be needed to make propene the major product via E2.'
          },
          {
            question: '1-chlorobutane is heated with potassium tert-butoxide. Predict the major product and pathway.',
            options: [
              'Butyl tert-butyl ether via SN2',
              '1-butene via E2, because the bulky base blocks backside substitution',
              '2-butene via E1 after rearrangement',
              'sec-butanol via SN1'
            ],
            correctAnswer: 1,
            explanation: 'A 1° substrate cannot do SN1/E1 (no stable cation). With a bulky strong base (tert-butoxide), SN2 is blocked by sterics, so E2 dominates, giving 1-butene. There is no carbocation, so no rearrangement to 2-butene occurs.'
          },
          {
            question: 'Why can E2 be stereospecific (giving a single alkene geometry) while E1 generally is not?',
            options: [
              'E2 forms a planar carbocation; E1 does not',
              'E2 requires a specific anti-periplanar arrangement that fixes the product geometry, whereas E1 proceeds through a planar carbocation that can lose either β-proton',
              'E1 requires anti-periplanar geometry; E2 does not',
              'Both are equally stereospecific'
            ],
            correctAnswer: 1,
            explanation: 'In E2, only the β-H anti-periplanar to the leaving group is removed, locking in the alkene geometry from the substrate configuration. In E1 the intermediate is a planar (sp²) carbocation with free rotation, so it can lose either available β-proton, scrambling stereochemistry and giving a mix.'
          }
        ]
      }
    },
    {
      id: 'elimi6-summary',
      type: 'text' as const,
      content: `
### Part 6 Summary

- **Predicting products:** map all $\\beta$-hydrogens, then apply Zaitsev (small base) or Hofmann (bulky base); on rings, screen first for **anti-periplanar / axial** geometry, which can override regiochemistry and dictate rate.
- **$\\text{E}1$ vs $\\text{E}2$:** rate depends on [base] $\\rightarrow$ **$\\text{E}2$**; a **rearranged** skeleton or base-independent rate $\\rightarrow$ **$\\text{E}1$**. $\\text{E}2$ is stereospecific; $\\text{E}1$ (planar cation) is not.
- **Substitution vs elimination:** small good nucleophile $\\rightarrow$ substitution; bulky strong base $\\rightarrow$ elimination; $3°$ + weak base + protic + heat $\\rightarrow$ $\\text{E}1$/$\\text{S}_\\text{N}1$.
- **Stereochemistry:** $\\text{E}2$'s anti-periplanar requirement fixes $E/Z$ geometry; $\\text{S}_\\text{N}2$ gives inversion; carbocation pathways scramble.

Next: **Part 7** consolidates everything into a one-page synthesis, a master decision flowchart, and a final integrative review.
      `
    }
  ]
}
