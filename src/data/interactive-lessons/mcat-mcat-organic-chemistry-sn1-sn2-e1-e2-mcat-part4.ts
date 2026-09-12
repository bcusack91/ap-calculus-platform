export const mcatOchemSubElimPart4Data = {
  topicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  sections: [
    {
      id: 'sn4-intro',
      type: 'text' as const,
      content: `# SN1, SN2, E1 & E2 for the MCAT

**Part 4 of 4 — The Competition: MCAT Decision Framework**

### The Three-Question Algorithm

Answer these IN ORDER for any substitution/elimination problem:

**1. What is the substrate?**
- Methyl or 1° (no resonance): SN2 (or E2 only with a bulky base) — carbocation pathways are OUT
- 3°: SN1/E1/E2 — SN2 is OUT
- 2° (and allylic/benzylic 1°): everything is possible → go to question 2

**2. Is the reagent a strong nucleophile, a strong base, both, or neither?**

| Reagent character | Examples | Pathway |
|-------------------|----------|---------|
| Strong Nu, weak base | $I^-$, $Br^-$, $HS^-$, $RS^-$, $N_3^-$, $CN^-$ | SN2 |
| Strong Nu AND strong base | $HO^-$, $CH_3O^-$, $EtO^-$ | SN2 on 1°/2°; E2 on 3° (and 2° with heat) |
| Bulky strong base | $(CH_3)_3CO^-$, LDA | E2 (Hofmann) |
| Weak Nu, weak base | $H_2O$, ROH, $RCO_2H$ | SN1/E1 (needs 2°/3° substrate) |

**3. Solvent and temperature?**
- Aprotic → tips toward SN2/E2; protic → tips toward SN1/E1
- Heat → tips toward elimination (E1 or E2)

### Classic Condition Signatures

- Alkyl halide + NaCN/DMF → SN2 nitrile
- Alkyl halide + NaOEt (small base) → E2 Zaitsev on 3°, SN2 on 1°
- Alkyl halide + KOtBu → E2 Hofmann
- Alcohol + conc. H2SO4 + heat → E1 dehydration (Zaitsev, may rearrange)
- Alcohol + HBr → SN1 (3°/2°) or SN2 (1°) after protonation of OH
- 3° halide + warm ethanol alone → solvolysis: SN1 + E1 mixture

### Why the MCAT Cares

The MCAT rarely asks "SN1 or SN2?" naked. It hides the decision inside:
- **Kinetics passages** (rate law data → molecularity)
- **Drug/stereochemistry passages** (is optical purity retained? inversion vs racemization)
- **Biochemistry crossovers** — e.g., SAM (S-adenosylmethionine) methylates nucleophiles by an enzymatic **SN2** at its methyl group; DNA-alkylating agents damage guanine via substitution chemistry
- **Experimental design** (which solvent/temperature maximizes one product?)`
    },
    {
      id: 'sn4-quiz1',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration: The Full Decision** 🎯`,
      exercise: {
        questions: [
          {
            question: `Which combination gives the FASTEST SN2 reaction?`,
            options: [`1-bromobutane + NaCN in DMSO`, `1-bromobutane + NaCN in methanol`, `2-bromo-2-methylpropane + NaCN in DMSO`, `1-chlorobutane + NaCN in DMSO`],
            correctAnswer: 0,
            explanation: `Best SN2: primary substrate + strong nucleophile + polar aprotic solvent + good leaving group. Methanol (protic) slows the nucleophile; the tertiary substrate cannot do SN2 at all; chloride is a worse leaving group than bromide.`
          },
          {
            question: `S-Adenosylmethionine (SAM) transfers a methyl group to the nitrogen of norepinephrine in one concerted enzymatic step. This biological methylation is best described as:`,
            options: [`SN1 at a stabilized methyl cation`, `SN2 with the amine as nucleophile and the sulfonium sulfur compound as leaving group`, `E2 across the methyl group`, `Radical substitution`],
            correctAnswer: 1,
            explanation: `A methyl carbon can never form a stable cation (no SN1). The amine attacks the electrophilic methyl carbon while the neutral sulfide (S-adenosylhomocysteine) departs — a textbook biological SN2 with a positively charged sulfonium making an excellent leaving group.`
          },
          {
            question: `A researcher needs to convert (R)-2-butanol into (S)-2-butanethiol (net inversion). The best route is:`,
            options: [`Treat the alcohol directly with $H_2S$`, `Convert to the tosylate (retention), then displace with $HS^-$ in DMF (inversion)`, `Treat with HBr then water`, `Deprotonate with NaH, then add $HS^-$`],
            correctAnswer: 1,
            explanation: `OH is a poor leaving group, so direct displacement fails. Tosylation does not touch the C-O bond (configuration retained); the subsequent SN2 by thiolate inverts. Net result: single inversion, exactly one stereochemical flip.`
          },
          {
            question: `2-Bromopropane is treated with sodium ethoxide in ethanol at 25 °C, and separately at 70 °C. The expected trend is:`,
            options: [`More SN2 ether at higher temperature`, `More E2 propene at higher temperature`, `A switch from E2 to E1 at higher temperature`, `No change — temperature does not affect product ratios`],
            correctAnswer: 1,
            explanation: `Ethoxide (strong base/strong Nu) on a secondary halide gives a mix of SN2 and E2; heating shifts the ratio toward elimination because of elimination's more favorable entropy term. The mechanism stays E2 (strong base is present).`
          },
          {
            question: `Rate data for hydrolysis of an alkyl chloride shows first-order kinetics, and the product alcohol is racemic even though the starting material was a single enantiomer. A consistent additional observation would be:`,
            options: [`The rate doubles when the water concentration doubles`, `The rate is unchanged when a small amount of the better nucleophile azide is added, but some alkyl azide product appears`, `The product shows complete inversion`, `The reaction fails in polar protic solvents`],
            correctAnswer: 1,
            explanation: `First-order kinetics + racemization = SN1. Because the nucleophile enters AFTER the rate-determining ionization, adding azide does not change the rate but azide can intercept the carbocation and appear in the products — a classic SN1 diagnostic experiment.`
          },
          {
            question: `Which substrate/condition pair yields an alkene as the MAJOR product?`,
            options: [`$CH_3Br$ + NaOH`, `1-bromopentane + NaSH in DMSO`, `2-bromo-2-methylbutane + hot ethanolic KOH`, `1-bromopentane + NaCN in DMF`],
            correctAnswer: 2,
            explanation: `Tertiary substrate + strong small base + heat = E2 (Zaitsev alkene, 2-methyl-2-butene). Methyl halides can't eliminate (no beta-carbon on a suitable skeleton) and the primary substrates with good nucleophiles/weak bases go SN2.`
          }
        ]
      }
    },
    {
      id: 'sn4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Decide in order: substrate class → nucleophile/base strength and bulk → solvent/temperature
- Methyl/1° never SN1/E1; 3° never SN2; 2° is decided by the reagent and solvent
- Strong-Nu/weak-base reagents ($CN^-$, $N_3^-$, $RS^-$, halides) = substitution; bulky bases = Hofmann E2; weak everything = solvolysis (SN1/E1)
- SN1 diagnostics: first-order rate, racemization, rearrangements, rate unaffected by added nucleophile
- Biology runs on these mechanisms: SAM methylation = SN2; alkylating chemotherapeutics attack DNA by substitution`
    },
    {
      id: 'sn4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Full MCAT Integration

<details>
<summary><b>Example 1: Complete four-way decision</b></summary>

**Question:** Predict the major product: 2-bromobutane + sodium methoxide in methanol, room temperature.

**Solution:**
1. Substrate: secondary → all four mechanisms conceivable
2. Reagent: methoxide = strong base AND strong nucleophile → concerted pathways (SN2/E2), not SN1/E1
3. Small (unhindered) base on a secondary substrate at moderate temperature → substantial E2 with SN2 competition; E2 dominates for 2° + strong base
4. E2 regiochemistry: Zaitsev → **2-butene (trans major)**, with 1-butene and 2-methoxybutane as minor products

**MCAT Strategy:** For 2° substrate + strong small base, the tested answer is usually "Zaitsev E2 major, SN2 minor." Bulky base would flip to Hofmann.
</details>

<details>
<summary><b>Example 2: Kinetics passage synthesis</b></summary>

**Question:** A passage reports: rate = k[RBr]; adding NaN3 leaves the rate unchanged but produces RN3; the product alcohol is 90% racemized with a slight excess of inversion. Reconcile all three observations.

**Solution:**
1. First-order rate law → unimolecular ionization is rate-determining (SN1)
2. Azide doesn't change the rate (it acts after the slow step) but competes for the cation → RN3 forms
3. Slight excess of inversion: the leaving group briefly shields the front face as an **ion pair**, so backside attack is marginally favored
4. All three observations fit a single SN1 mechanism with ion-pair return

**MCAT Strategy:** Passages love the "added nucleophile changes products but not rate" experiment — it is the cleanest fingerprint of a two-step mechanism.
</details>

<details>
<summary><b>Example 3: Pharmacology crossover</b></summary>

**Question:** Mechlorethamine (a nitrogen mustard chemotherapeutic) first cyclizes its own nitrogen onto a beta-chloride to form a strained aziridinium ion, which DNA's guanine N7 then opens. Classify the two steps.

**Solution:**
1. Step 1: the amine nitrogen's lone pair displaces chloride intramolecularly — **intramolecular SN2** (backside attack on the carbon bearing Cl)
2. Step 2: guanine N7 attacks a carbon of the strained, positively charged aziridinium ring — **SN2 ring opening** (excellent "leaving group" = neutral amine released by ring strain relief)
3. Net effect: DNA alkylation → cross-links → apoptosis of rapidly dividing cells

**MCAT Strategy:** Biological alkylation chemistry is substitution chemistry. Identify nucleophile (heteroatom lone pair), electrophilic carbon, and leaving group — the vocabulary transfers unchanged.
</details>

<details>
<summary><b>Example 4: Design the experiment</b></summary>

**Question:** You must maximize the yield of 1-phenyl-1-methoxyethane from 1-phenyl-1-bromoethane. Choose between: (a) NaOMe/DMSO at 25 °C, (b) methanol alone at 40 °C, (c) KOtBu in tert-butanol at 70 °C.

**Solution:**
1. The substrate is secondary AND benzylic → both SN2 and SN1 are plausible
2. (c) Bulky base + heat → E2 (styrene) — wrong product class. Eliminate
3. (a) Strong base/nucleophile methoxide risks significant E2 on a secondary center, though some SN2 ether forms
4. (b) Methanol solvolysis: the benzylic cation is resonance-stabilized, methanol traps it → high ether yield; mild heat, no strong base → little elimination
5. Best choice: **(b)** — though the product will be racemic if the carbon was a single enantiomer

**MCAT Strategy:** "Maximize the substitution product" questions weigh elimination risk. On SN1-capable (benzylic/tertiary) substrates, weakly basic solvolysis conditions often beat strong nucleophiles that double as strong bases.
</details>`
    }
  ]
};
