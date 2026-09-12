export const mcatOchemCarbonylsPart2Data = {
  topicSlug: 'mcat-organic-chemistry-carbonyls-mcat',
  sections: [
    {
      id: 'cnyl2-intro',
      type: 'text' as const,
      content: `# Carbonyl Chemistry for the MCAT

**Part 2 of 4 — Nucleophilic Acyl Substitution: The Reactivity Ladder**

Carboxylic acid derivatives carry a **leaving group** on the carbonyl carbon, so nucleophiles do not simply add — they **replace**. The mechanism is two steps: (1) the nucleophile adds to C=O, forming a **tetrahedral intermediate**; (2) the intermediate collapses, expelling the leaving group and restoring C=O. This addition-elimination sequence is nucleophilic acyl substitution.

### The Reactivity Ladder (memorize the order)

$$\\text{acyl chloride} > \\text{anhydride} > \\text{ester} \\approx \\text{carboxylic acid} > \\text{amide} > \\text{carboxylate}$$

Two synchronized explanations:
- **Leaving group**: $Cl^-$ (weak base, superb LG) > carboxylate > alkoxide/hydroxide > amide anion ($NH_2^-$, terrible LG)
- **Resonance donation into C=O**: nitrogen donates strongly (amides are stabilized, unreactive); chlorine donates poorly (acyl chlorides stay hot)

**Downhill rule:** any derivative can be converted into one BELOW it on the ladder directly; going uphill requires activation (e.g., acid → acyl chloride with $SOCl_2$).

### The Core Conversions

| Reaction | Reagents | Product |
|----------|----------|---------|
| Fischer esterification | acid + ROH, cat. $H_2SO_4$, heat | ester + water (equilibrium; drive with excess ROH or water removal) |
| Ester hydrolysis (acid) | $H_3O^+$ | acid + ROH (reversible) |
| Saponification | $NaOH$, then workup | carboxylate + ROH (**irreversible** — the carboxylate is resonance-stabilized and unreactive) |
| Amide formation | acyl chloride or anhydride + amine | amide (direct acid + amine mostly just makes the ammonium salt at room temp) |
| Transesterification | ester + different ROH, acid or base cat. | new ester |

### Amides: the Special Case

The nitrogen lone pair delocalizes into the carbonyl, giving the C-N bond ~40% double-bond character. Consequences the MCAT loves:
- **Planar, rigid** C-N bond → the geometry of the peptide backbone
- **Least reactive** derivative → proteins survive in water; peptide hydrolysis needs strong acid + heat, or an enzyme (protease)
- Amide **nitrogen is non-basic** (the lone pair is busy); amides protonate on OXYGEN if at all

### Steric and Electronic Modifiers

Within a class, bulky groups near the carbonyl slow substitution (the tetrahedral intermediate is crowded), and electron-withdrawing substituents speed it (more electrophilic carbon). Thioesters (like **acetyl-CoA**) sit between anhydrides and esters: sulfur's 3p orbital overlaps poorly with the C=O pi system, so there is little resonance stabilization to sacrifice — hydrolysis is unusually exergonic, which is why biology uses thioesters as acyl-transfer currency.`
    },
    {
      id: 'cnyl2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Acyl Substitution** 🎯`,
      exercise: {
        questions: [
          {
            question: `Rank the following toward nucleophilic acyl substitution, most to least reactive:`,
            options: [`Amide > ester > anhydride > acyl chloride`, `Acyl chloride > anhydride > ester > amide`, `Anhydride > amide > acyl chloride > ester`, `Ester > acyl chloride > amide > anhydride`],
            correctAnswer: 1,
            explanation: `The ladder follows leaving-group ability (Cl- best, NH2- worst) and inverse resonance stabilization (N donates most, Cl least): acyl chloride > anhydride > ester > amide. Every acyl-substitution prediction on the MCAT starts from this order.`
          },
          {
            question: `Saponification of an ester with NaOH is irreversible because:`,
            options: [`Hydroxide is a catalyst and is regenerated`, `The alcohol product evaporates`, `The final deprotonation gives a resonance-stabilized carboxylate that no longer attracts nucleophiles`, `The tetrahedral intermediate is aromatic`],
            correctAnswer: 2,
            explanation: `After hydroxide substitutes at the ester, the carboxylic acid formed is instantly deprotonated by the basic medium. The carboxylate's delocalized negative charge makes its carbon a very poor electrophile — the reaction cannot run backward. Note that hydroxide is CONSUMED (stoichiometric), not catalytic.`
          },
          {
            question: `Which conversion requires "going uphill" on the reactivity ladder and therefore needs an activating reagent?`,
            options: [`Acyl chloride → amide`, `Anhydride → ester`, `Ester → carboxylic acid`, `Carboxylic acid → acyl chloride`],
            correctAnswer: 3,
            explanation: `Acid to acyl chloride climbs from mid-ladder to the top, so it needs SOCl2 (or PCl3/PCl5) to convert the poor OH leaving group into a good one. The other three all descend the ladder and proceed directly with the appropriate nucleophile.`
          },
          {
            question: `Acetyl-CoA transfers its acetyl group far more readily than an ordinary oxygen ester would because the thioester:`,
            options: [`Loses less resonance stabilization on reaching the tetrahedral intermediate, since sulfur's 3p orbital overlaps poorly with the carbonyl pi system`, `Contains a stronger C=O bond`, `Has a positively charged sulfur`, `Is aromatic`],
            correctAnswer: 0,
            explanation: `An oxygen ester is resonance-stabilized (O lone pair into C=O) and gives that stabilization up during attack. Sulfur, one row down, overlaps poorly, so the thioester starts higher in energy — hydrolysis and acyl transfer are more exergonic. This is the design principle behind CoA chemistry in metabolism.`
          },
          {
            question: `Mixing acetic acid directly with methylamine at room temperature mostly yields:`,
            options: [`N-methylacetamide immediately`, `An ester`, `An ammonium carboxylate salt, because the acid-base reaction outruns substitution`, `No reaction at all`],
            correctAnswer: 2,
            explanation: `Proton transfer is far faster than acyl substitution: the amine deprotonates the acid, giving methylammonium acetate. The carboxylate is unreactive and the protonated amine is non-nucleophilic, so amide formation stalls (it needs strong heating, a coupling reagent, or an activated derivative like an acyl chloride).`
          }
        ]
      }
    },
    {
      id: 'cnyl2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Mechanism: add nucleophile → tetrahedral intermediate → expel leaving group, C=O reforms
- Ladder: acyl chloride > anhydride > (thioester) > ester ≈ acid > amide > carboxylate; downhill is direct, uphill needs activation ($SOCl_2$)
- Saponification is irreversible (carboxylate endpoint) and consumes stoichiometric base; Fischer esterification is an acid-catalyzed equilibrium
- Amide resonance: planar C-N, nitrogen non-basic, least reactive — the physics of the peptide bond
- Thioesters (acetyl-CoA) are poorly resonance-stabilized → high acyl-transfer potential; acid + amine gives a salt, not an amide, without activation`
    },
    {
      id: 'cnyl2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Acyl Substitution

<details>
<summary><b>Example 1: Route planning with the ladder</b></summary>

**Question:** Propose the standard two-step route from benzoic acid to N-methylbenzamide, and explain why one step cannot be skipped.

**Solution:**
1. Step 1: benzoic acid + $SOCl_2$ → benzoyl chloride (activation: OH → Cl)
2. Step 2: benzoyl chloride + excess $CH_3NH_2$ → N-methylbenzamide (downhill, fast; the second equivalent of amine mops up the HCl)
3. Skipping step 1 fails because acid + amine merely forms the ammonium carboxylate salt — proton transfer beats substitution

**MCAT Strategy:** When a synthesis passage inserts SOCl2, its only job is climbing the ladder. Expect an amine, alcohol, or carboxylate to follow in the next step.
</details>

<details>
<summary><b>Example 2: Acid vs base hydrolysis of an ester</b></summary>

**Question:** Ethyl benzoate is hydrolyzed (a) in aqueous HCl and (b) in aqueous NaOH. Compare mechanisms, reversibility, and the fate of the acyl oxygen products.

**Solution:**
1. (a) Acid: protonation activates the C=O, water attacks, ethanol leaves after proton shuffling → benzoic acid + EtOH. Every step reversible — an equilibrium (excess water drives it forward)
2. (b) Base: hydroxide attacks directly, ethoxide is expelled, and the product acid is deprotonated → benzoate + EtOH. **Irreversible**
3. Product difference: (a) neutral benzoic acid; (b) sodium benzoate until acidic workup

**MCAT Strategy:** "Which conditions give complete conversion?" — always the basic ones, because the carboxylate is a thermodynamic sink.
</details>

<details>
<summary><b>Example 3: Why proteases exist</b></summary>

**Question:** A peptide bond hydrolyzes with a half-life of centuries in neutral water, yet chymotrypsin cleaves it in milliseconds. Identify the structural reason for the slowness and two catalytic strategies the enzyme uses.

**Solution:**
1. Slowness: amide resonance — nitrogen's lone pair delocalizes into C=O, deactivating the carbon and making the leaving group an amide anion (terrible LG)
2. Strategy 1: the enzyme's serine, activated by the His/Asp charge relay, is a far better nucleophile than water, and forms a covalent acyl-enzyme intermediate
3. Strategy 2: the oxyanion hole hydrogen-bonds the tetrahedral intermediate's alkoxide, stabilizing the transition state; general acid catalysis protonates the amine as it leaves
4. Chemistry is unchanged — addition-elimination through a tetrahedral intermediate — just catalyzed at every hard step

**MCAT Strategy:** Enzyme-mechanism passages describing serine proteases are acyl substitution in disguise. Map "acyl-enzyme intermediate" to "the enzyme made an ester with the substrate."
</details>

<details>
<summary><b>Example 4: Predicting relative hydrolysis rates</b></summary>

**Question:** Rank the aqueous hydrolysis rates: acetamide, acetic anhydride, methyl acetate, acetyl chloride.

**Solution:**
1. Apply the ladder directly: acetyl chloride > acetic anhydride > methyl acetate > acetamide
2. Physical anchors: acyl chlorides fume and react violently with water; anhydrides hydrolyze in minutes; esters need acid/base catalysis and heat; amides need reflux in strong acid or base
3. Cross-check with leaving groups: $Cl^-$ > acetate > methoxide > $NH_2^-$

**MCAT Strategy:** If two derivatives seem close, compare their leaving groups as bases — the weaker base leaves faster, full stop.
</details>`
    }
  ]
};
