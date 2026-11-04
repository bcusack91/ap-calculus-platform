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
- Methyl or 1° (no resonance): SN2 (a 1° substrate gives E2 only with a bulky base; a methyl substrate cannot eliminate) — carbocation pathways are OUT
- 3°: SN1/E1/E2 — SN2 is OUT
- 2° (and allylic/benzylic 1°): everything is possible → go to question 2

**2. Is the reagent a strong nucleophile, a strong base, both, or neither?**

| Reagent character | Examples | Pathway |
|-------------------|----------|---------|
| Strong Nu, weak base | $I^-$, $Br^-$, $HS^-$, $RS^-$, $N_3^-$, $CN^-$ | SN2 |
| Strong Nu AND strong base | $HO^-$, $CH_3O^-$, $EtO^-$ | SN2 on 1°; E2 on 3°; mostly E2 on 2° (SN2 minor), more so with heat |
| Bulky strong base | $(CH_3)_3CO^-$, LDA (lithium diisopropylamide) | E2 (Hofmann) |
| Weak Nu, weak base | $H_2O$, ROH, $RCO_2H$ | SN1/E1 (needs 2°/3° substrate) |

**3. Solvent and temperature?**
- Aprotic → tips toward SN2/E2; protic → tips toward SN1/E1
- Heat → tips toward elimination (E1 or E2)

### Classic Condition Signatures

- Alkyl halide + NaCN/DMF → SN2 nitrile
- Alkyl halide + NaOEt (sodium ethoxide, a small base) → E2 Zaitsev on 3°, mostly E2 on 2°, SN2 on 1°
- Alkyl halide + KOtBu (potassium tert-butoxide) → E2 Hofmann
- Alcohol + conc. $H_2SO_4$ + heat → E1 dehydration (Zaitsev, may rearrange)
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
      id: 'sn4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Full MCAT Integration

**Problem 1.** 2-Bromobutane is treated with sodium methoxide in methanol at room temperature.

- **(a)** Which mechanisms does the substrate allow?
- **(b)** Which pathways does the reagent rule in and out?
- **(c)** Which of SN2 and E2 dominates?
- **(d)** What is the major product, and what are the minor ones?

**(a) Substrate.** Secondary → all four mechanisms are conceivable.

**(b) Reagent.** Methoxide is a strong base AND a strong nucleophile → concerted pathways (SN2/E2), not SN1/E1.

**(c) Competition.** A small (unhindered) strong base on a secondary substrate at moderate temperature → E2 dominates, with SN2 competing.

**(d) Products.** E2 follows Zaitsev → **2-butene (trans major)**, with 1-butene and 2-methoxybutane as minor products. A bulky base would flip the alkene to Hofmann.

**Problem 2.** A passage on hydrolysis in aqueous acetone reports: $\\text{rate} = k[\\text{RBr}]$; adding $NaN_3$ leaves the rate unchanged but produces $RN_3$; the alcohol is 90% racemized, with a slight excess of inversion (about 55:45 inversion : retention).

- **(a)** What does the rate law say?
- **(b)** Why does azide change the products but not the rate?
- **(c)** Why is there a slight excess of inversion?
- **(d)** Which single mechanism fits all three observations?

**(a) Rate law.** First order in RBr alone → unimolecular ionization is rate-determining (SN1).

**(b) Added azide.** Azide acts after the slow step, so it cannot change the rate, but it competes for the cation → $RN_3$ forms. "Added nucleophile changes the products but not the rate" is the cleanest fingerprint of a two-step mechanism.

**(c) Ion pairing.** The leaving group briefly shields the front face as an **ion pair**, so backside attack is marginally favored.

**(d) One mechanism.** All three observations fit a single SN1 mechanism with ion pairing.

**Problem 3.** A nitrogen mustard chemotherapeutic first cyclizes: its nitrogen displaces the chloride on the carbon two atoms away, giving a strained aziridinium ion. Guanine N7 in DNA then opens that ring.

- **(a)** What kind of step is the cyclization?
- **(b)** What kind of step is the ring opening, and what leaves?
- **(c)** What is the net effect on the cell?

**(a) Cyclization.** The amine nitrogen's lone pair displaces chloride intramolecularly — an **intramolecular SN2**, backside attack on the carbon bearing Cl.

**(b) Ring opening.** Guanine N7 attacks a carbon of the strained, positively charged aziridinium ring — an **SN2 ring opening**. The "leaving group" is the neutral amine, released as ring strain is relieved.

**(c) Net effect.** A mustard has two chloroethyl arms, so each can alkylate a guanine, linking two strands: DNA cross-links → apoptosis of rapidly dividing cells. Biological alkylation is substitution chemistry: find the nucleophile (a heteroatom lone pair), the electrophilic carbon and the leaving group.

<!-- yield:low -->
- Named example: mechlorethamine, $CH_3N(CH_2CH_2Cl)_2$, the first nitrogen mustard used in chemotherapy.
<!-- /yield -->

**Problem 4.** You must maximize the yield of 1-phenyl-1-methoxyethane from 1-phenyl-1-bromoethane. The options: (i) NaOMe (sodium methoxide) in DMSO at 25 °C, (ii) methanol alone at 40 °C, (iii) KOtBu in tert-butanol at 70 °C.

- **(a)** Which mechanisms can the substrate undergo?
- **(b)** What does KOtBu in tert-butanol at 70 °C give?
- **(c)** What is the risk with NaOMe in DMSO?
- **(d)** Which option is best, and what does it cost?

**(a) Substrate.** The substrate is secondary AND benzylic → both SN2 and SN1 are plausible.

**(b) Option (iii).** Bulky base + heat → E2 (styrene) — the wrong product class. Eliminate it.

**(c) Option (i).** Methoxide is a strong base as well as a strong nucleophile, so it risks significant E2 on a secondary center, though some SN2 ether forms.

**(d) Option (ii).** Methanol solvolysis: the resonance-stabilized benzylic cation is trapped by methanol → high ether yield, with mild heat and no strong base → little elimination. The cost: the product is racemic if the carbon was a single enantiomer.`
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
            yield: 'HIGH',
            explanation: `Best SN2: primary substrate + strong nucleophile + polar aprotic solvent + good leaving group. Methanol (protic) slows the nucleophile; the tertiary substrate cannot do SN2 at all; chloride is a worse leaving group than bromide.`
          },
          {
            question: `In S-adenosylmethionine (SAM), a methyl group is bonded to a positively charged sulfur. An enzyme uses SAM to transfer that methyl group to the amine nitrogen of norepinephrine, releasing neutral S-adenosylhomocysteine. This biological methylation is best described as:`,
            options: [`SN1 via a methyl cation intermediate`, `SN2 attack at the methyl carbon`, `E2 across the methyl group`, `Radical transfer of the methyl group`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Reason from the substrate and the leaving group. The carbon being attacked is a methyl carbon, which cannot form a stable cation, so SN1 is out. The positively charged sulfonium leaves as a neutral sulfide (S-adenosylhomocysteine), an excellent leaving group, while the amine nitrogen's lone pair attacks the unhindered methyl carbon from the back side: a textbook biological SN2. The methyl carbon has no neighboring carbon bearing a beta-hydrogen, so E2 is impossible, and a nitrogen lone pair donating two electrons to carbon is a polar process, not a radical one.`
          },
          {
            question: `A researcher needs to convert (R)-2-butanol into (S)-2-butanethiol (net inversion). The best route is:`,
            options: [`Treat the alcohol directly with $H_2S$`, `Tosylate the alcohol, then add $HS^-$ in DMF`, `Treat with HBr, then add $HS^-$ in DMF`, `Deprotonate with NaH, then add $HS^-$ in DMF`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `OH is a poor leaving group, so direct displacement fails. Tosylation does not touch the C-O bond (configuration retained); the subsequent SN2 by thiolate inverts. Net result: single inversion, exactly one stereochemical flip. HBr followed by thiolate risks two inversions (net retention) or racemization through a carbocation, and NaH makes an alkoxide, an even worse leaving group than OH.`
          },
          {
            question: `tert-Butyl bromide is dissolved in ethanol (no added base) and held at 25 °C, and separately at 65 °C. The expected trend is:`,
            options: [`More tert-butyl ethyl ether at the higher temperature`, `More 2-methylpropene by E1 at the higher temperature`, `A switch from SN1 to SN2 at the higher temperature`, `No change — both products come from one cation`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `With no strong base, the tertiary halide ionizes in ethanol (solvolysis), and the one tert-butyl cation partitions between capture by ethanol (the SN1 ether) and loss of a beta-H (the E1 alkene). Elimination makes more particles, so its more positive entropy change wins as T rises: more 2-methylpropene. The ether's share therefore falls, not rises, with heat. A tertiary carbon cannot do SN2 at any temperature. Both products do come from one cation, but how that cation partitions between capture and deprotonation depends on temperature.`
          },
          {
            question: `Rate data for hydrolysis of an alkyl chloride shows first-order kinetics, and the product alcohol is racemic even though the starting material was a single enantiomer. A consistent additional observation would be:`,
            options: [`The rate doubles when the water concentration is doubled`, `Added azide gives some alkyl azide; the rate is unchanged`, `The product shows complete inversion of configuration`, `The reaction slows sharply in polar protic solvents`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `First-order kinetics + racemization = SN1. Because the nucleophile enters AFTER the rate-determining ionization, adding a small amount of azide, a better nucleophile, does not change the rate but azide can intercept the carbocation and appear in the products — a classic SN1 diagnostic experiment. A rate that doubles with the water concentration would put the nucleophile in the rate law, contradicting the first-order data. Complete inversion is the SN2 signature and contradicts the racemic product. SN1 is fastest in polar protic solvents, which stabilize the carbocation and the leaving anion, so a sharp slowdown there would contradict it too.`
          },
          {
            question: `Which substrate/condition pair yields an alkene as the MAJOR product?`,
            options: [`$CH_3Br$ + hot, concentrated aqueous NaOH`, `2-bromo-2-methylbutane in water at 25 °C`, `2-bromo-2-methylbutane + hot ethanolic KOH`, `1-bromopentane + NaCN in DMF, warmed to 60 °C`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Tertiary substrate + strong small base + heat = E2 (Zaitsev alkene, 2-methyl-2-butene). The same tertiary halide in water at 25 °C has no strong base and little heat, so it ionizes and water captures the cation: SN1 gives 2-methyl-2-butanol as the major product, with E1 alkene minor. A methyl halide cannot eliminate however hot the base (it has no beta-carbon at all), so it gives methanol by SN2. A primary halide with cyanide, a good nucleophile but weak base, still goes SN2 to the nitrile when warmed.`
          }
        ]
      }
    },
    {
      id: 'sn4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Decide in order.** Substrate class first, then nucleophile/base strength and bulk, then solvent and temperature.
- **The reagent sorts the path.** Strong Nu/weak base: substitution; bulky base: Hofmann E2; weak Nu/weak base in a protic solvent: SN1/E1 on 2°/3°.
- **SN1 fingerprints.** First-order rate, racemization, rearrangement, and a rate untouched by added nucleophile.
- **Biology runs on these.** SAM methylates by SN2, and alkylating chemotherapy drugs attack DNA by substitution.

**Common traps**

- **SN2 on 3°, SN1 on methyl.** A 3° carbon blocks backside attack, and a methyl or plain 1° carbon cannot form a cation.
- **Methoxide on 2° as clean SN2.** A small strong base on a secondary halide gives mostly E2 (Zaitsev), with SN2 minor.
- **Two inversions as one.** HBr then thiolate inverts twice (net retention) or racemizes via a cation; tosylate then SN2 inverts exactly once.
- **Strong base to substitute.** On benzylic or tertiary substrates strong bases eliminate; weakly basic solvolysis substitutes.

<!-- yield:low -->
- Low-yield extras: the name and formula of mechlorethamine, the classic nitrogen mustard.
<!-- /yield -->`
    }
  ]
};
