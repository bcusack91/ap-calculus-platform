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
| Saponification | $NaOH$ (aq) | carboxylate + ROH; acid workup gives RCOOH (**irreversible** — the carboxylate is resonance-stabilized and unreactive) |
| Amide formation | acyl chloride or anhydride + amine | amide (direct acid + amine mostly just makes the ammonium salt at room temp) |
| Transesterification | ester + different ROH, acid or base cat. | new ester |

### Amides: the Special Case

The nitrogen lone pair delocalizes into the carbonyl, giving the C-N bond ~40% double-bond character. Consequences the MCAT loves:
- **Planar, rigid** C-N bond → the geometry of the peptide backbone
- **Least reactive** derivative → proteins survive in water; peptide hydrolysis needs strong acid + heat, or an enzyme (protease)
- Amide **nitrogen is non-basic** (the lone pair is busy); amides protonate on OXYGEN if at all

### Steric and Electronic Modifiers

Within a class, bulky groups near the carbonyl slow substitution (the tetrahedral intermediate is crowded), and electron-withdrawing substituents speed it (more electrophilic carbon). Thioesters (like **acetyl-CoA**) sit between anhydrides and esters: sulfur's 3p orbital overlaps poorly with the C=O pi system, so there is little resonance stabilization to sacrifice — hydrolysis is unusually exergonic, which is why biology uses thioesters as acyl-transfer currency.

**Cyclic derivatives.** A **lactone** is a cyclic ester and a **lactam** a cyclic amide; both react like their open-chain relatives. The exception is ring strain: the four-membered **beta-lactam** of penicillin is strained, and its bent geometry weakens the amide resonance, so it acylates (and inactivates) the bacterial enzyme that builds the cell wall far more readily than an ordinary amide could.`
    },
    {
      id: 'cnyl2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Acyl Substitution** 🎯`,
      exercise: {
        questions: [
          {
            question: `Rank the following toward nucleophilic acyl substitution, most to least reactive:`,
            options: [`Acyl chloride > ester > anhydride > amide`, `Acyl chloride > anhydride > ester > amide`, `Anhydride > amide > acyl chloride > ester`, `Ester > acyl chloride > amide > anhydride`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `The ladder follows leaving-group ability (Cl- best, NH2- worst) and inverse resonance stabilization (N donates most, Cl least): acyl chloride > anhydride > ester > amide. Putting the ester above the anhydride forgets that a carboxylate leaves far better than an alkoxide; the other orders place the amide or the ester too high. Every acyl-substitution prediction on the MCAT starts from this order.`
          },
          {
            question: `Saponification of an ester with NaOH is irreversible because:`,
            options: [`Hydroxide is a catalyst and is regenerated`, `The alcohol product evaporates from solution`, `Deprotonation gives a carboxylate that resists attack`, `The tetrahedral intermediate is aromatic and stable`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `After hydroxide substitutes at the ester, the carboxylic acid formed is instantly deprotonated by the basic medium. The carboxylate's delocalized negative charge makes its carbon a very poor electrophile — the reaction cannot run backward. Note that hydroxide is CONSUMED (stoichiometric), not catalytic. The alcohol stays in solution (irreversibility does not depend on removing it), and the tetrahedral intermediate is a short-lived sp3 species, nowhere near aromatic.`
          },
          {
            question: `Which conversion requires "going uphill" on the reactivity ladder and therefore needs an activating reagent?`,
            options: [`Acyl chloride → secondary amide`, `Acid anhydride → methyl ester`, `Ester → acid and alcohol`, `RCOOH → acyl chloride`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Carboxylic acid to acyl chloride climbs from mid-ladder to the top, so it needs SOCl2 (or PCl3/PCl5) to convert the poor OH leaving group into a good one. The other three run downhill or level (ester hydrolysis needs only acid or base catalysis) and proceed directly with the appropriate nucleophile.`
          },
          {
            question: `Acetyl-CoA transfers its acetyl group far more readily than an ordinary oxygen ester would because the thioester:`,
            options: [`Loses less resonance stabilization on nucleophilic attack`, `Contains an unusually strong C=O bond`, `Has a positively charged sulfur that activates the carbonyl`, `Is stabilized by strong sulfur lone-pair donation`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `An oxygen ester is resonance-stabilized (O lone pair into C=O) and gives that stabilization up during attack. Sulfur, one row down, overlaps poorly, so the thioester starts higher in energy — hydrolysis and acyl transfer are more exergonic. This is the design principle behind CoA chemistry in metabolism.`
          },
          {
            question: `Mixing acetic acid directly with methylamine at room temperature mostly yields:`,
            options: [`N-methylacetamide immediately`, `An imine (Schiff base) and water`, `An ammonium carboxylate salt`, `No reaction at all at room temperature`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Proton transfer is far faster than acyl substitution: the amine deprotonates the acid, giving methylammonium acetate. The carboxylate is unreactive and the protonated amine is non-nucleophilic, so amide formation stalls (it needs strong heating, a coupling reagent, or an activated derivative like an acyl chloride). The amide does not form "immediately", an imine needs an aldehyde or ketone partner rather than an acid, and "no reaction" overlooks the fast acid-base step.`
          }
        ]
      }
    },
    {
      id: 'cnyl2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Acyl Substitution

**Problem 1.** A synthesis must turn benzoic acid into N-methylbenzamide in the standard two steps.

- **(a)** What is the first step, and what is its job?
- **(b)** What is the second step, and why use excess amine?
- **(c)** Why can't the first step be skipped?

**(a) Activation.** Benzoic acid + $SOCl_2$ → benzoyl chloride: the poor OH leaving group becomes Cl, climbing the ladder. When a passage inserts $SOCl_2$, that is its only job; expect an amine, alcohol or carboxylate next.

**(b) Amide formation.** Benzoyl chloride + excess $CH_3NH_2$ → N-methylbenzamide, downhill and fast. The second equivalent of amine mops up the HCl.

**(c) No shortcut.** Acid + amine merely forms the ammonium carboxylate salt: proton transfer beats substitution, and the carboxylate is a dead end.

**Problem 2.** Ethyl benzoate is hydrolyzed in aqueous HCl in one flask and in aqueous NaOH in another.

- **(a)** How does the acid-catalyzed hydrolysis run, and is it reversible?
- **(b)** How does the hydrolysis in base run, and is it reversible?
- **(c)** What does each flask hold before workup, and which gives complete conversion?

**(a) Acid.** Protonation activates the C=O, water attacks, and ethanol leaves after proton shuffling → benzoic acid + EtOH. Every step is reversible: an equilibrium that excess water drives forward.

**(b) Base.** Hydroxide attacks directly, ethoxide is expelled, and the product acid is deprotonated → benzoate + EtOH. **Irreversible.**

**(c) Products.** The acid flask holds neutral benzoic acid; the base flask holds sodium benzoate until acidic workup. "Which conditions give complete conversion?" Always the basic ones, because the carboxylate is a thermodynamic sink.

**Problem 3.** A peptide bond hydrolyzes with a half-life of centuries in neutral water, yet chymotrypsin cleaves it in milliseconds.

- **(a)** What structural feature makes the uncatalyzed reaction so slow?
- **(b)** How does the enzyme get a better nucleophile than water?
- **(c)** How does it stabilize the tetrahedral intermediate and help the leaving group go?
- **(d)** Has the underlying chemistry changed?

**(a) Amide resonance.** Nitrogen's lone pair delocalizes into C=O, deactivating the carbon, and the leaving group would be an amide anion (a terrible LG).

**(b) A better nucleophile.** The enzyme's serine, activated by the His/Asp charge relay, is a far better nucleophile than water. It forms a covalent acyl-enzyme intermediate: the enzyme has made an ester with the substrate.

**(c) Intermediate and leaving group.** The oxyanion hole hydrogen-bonds the tetrahedral intermediate's alkoxide, stabilizing the transition state; general acid catalysis protonates the amine as it leaves.

**(d) Same chemistry.** No. It is still addition-elimination through a tetrahedral intermediate, just catalyzed at every hard step. Serine-protease passages are acyl substitution in disguise.

**Problem 4.** Rank the aqueous hydrolysis rates of acetamide, acetic anhydride, methyl acetate and acetyl chloride.

- **(a)** What order does the ladder predict?
- **(b)** Do the physical observations fit that order?
- **(c)** Do the leaving groups agree?

**(a) The ladder.** acetyl chloride > acetic anhydride > methyl acetate > acetamide.

**(b) Physical anchors.** Yes: acyl chlorides fume and react violently with water; anhydrides hydrolyze in minutes; esters need acid/base catalysis and heat; amides need reflux in strong acid or base.

**(c) Leaving groups.** Yes: $Cl^-$ > acetate > methoxide > $NH_2^-$. If two derivatives seem close, compare their leaving groups as bases: the weaker base leaves faster.`
    },
    {
      id: 'cnyl2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Addition, then elimination.** The nucleophile adds to give a tetrahedral intermediate, which expels the leaving group as C=O reforms.
- **The reactivity ladder.** Acyl chloride > anhydride > thioester > ester ≈ acid > amide > carboxylate; downhill steps go directly.
- **Esterification vs saponification.** Fischer esterification is an acid-catalyzed equilibrium; saponification is irreversible.
- **Amide resonance.** The C–N bond is planar and partly double, so amide nitrogen is non-basic and amides react least.

**Common traps**

- **Climbing without activation.** Going uphill (acid → acyl chloride) needs an activator such as $SOCl_2$; downhill steps need none.
- **Catalytic hydroxide.** Saponification consumes a full equivalent of base, and the carboxylate product cannot react back.
- **Acid plus amine makes amide.** At room temperature they just form an ammonium carboxylate salt; an amide needs activation.
- **Thioesters as stable esters.** Sulfur donates poorly into C=O, so thioesters such as acetyl-CoA are high-energy acyl donors.`
    }
  ]
};
