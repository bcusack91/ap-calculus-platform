export const mcatOrgChemPart2Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc2-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 2 of 7 — SN1, SN2, E1, E2 Reactions**

### Substitution vs. Elimination Decision Tree

| Factor | SN2 | SN1 | E2 | E1 |
|--------|-----|-----|----|----|
| Substrate | Methyl/1° | 3° | 3° (or 2°) | 3° |
| Nucleophile | Strong | Weak | Strong BASE | Weak base |
| Solvent | Polar aprotic | Polar protic | — | Polar protic |
| Mechanism | 1 step, backside | 2 steps, carbocation | 1 step, anti | 2 steps |
| Stereochem | Inversion | Racemization | Anti-periplanar | — |

### Key Points

- **SN2**: Rate = $k[\\text{substrate}][\\text{nuc}]$. Backside attack → inversion. Sterically hindered substrates slow it.
- **SN1**: Rate = $k[\\text{substrate}]$. Carbocation intermediate → racemization. Favored by 3° substrates, polar protic solvents.
- **E2**: Strong BULKY base (t-BuOK) favors elimination over substitution. Anti-periplanar geometry required.
- **E1**: Shares carbocation intermediate with SN1. Heat favors elimination.

### Fast Test-Day Decision Rules

- If you see **methyl/1 degree + strong nucleophile + aprotic solvent**, think SN2 first.
- If you see **3 degree substrate + protic solvent**, think SN1/E1 competition.
- If you see **strong bulky base + heat**, think E2 (often Hofmann product favored).`
    },
    {
      id: 'oc2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Reaction Mechanisms** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 3° alkyl halide treated with NaOH in water would most likely undergo:`,
            options: [`SN1 and E1 (competing)`, `SN2`, `E2 only`, `No reaction`],
            correctAnswer: 0,
            explanation: `3° substrate blocks SN2 (too sterically hindered). Water is polar protic. NaOH is both nucleophile and base but not bulky. Both SN1 and E1 proceed through the same carbocation intermediate. Heat favors E1.`
          },
          {
            question: `An SN2 reaction on a chiral substrate produces:`,
            options: [`Inversion of configuration`, `Retention of configuration`, `Racemic mixture`, `Random configuration`],
            correctAnswer: 0,
            explanation: `SN2 proceeds through a single backside-attack step, giving 100% inversion of stereochemistry at the carbon center (Walden inversion).`
          },
          {
            question: `Which condition most strongly favors E2 over SN2 for a secondary alkyl halide?`,
            options: [`Strong bulky base and heat`, `Weak nucleophile in polar protic solvent`, `Strong nucleophile in DMSO at low temperature`, `Dilute aqueous acid`],
            correctAnswer: 0,
            explanation: `Bulky strong base and heat strongly bias elimination, especially for secondary/tertiary substrates.`
          },
          {
            question: `The rate law $rate=k[substrate]$ is consistent with:`,
            options: [`SN2 only`, `SN1 or E1`, `E2 only`, `No substitution/elimination mechanism`],
            correctAnswer: 1,
            explanation: `SN1 and E1 are unimolecular in the rate-determining step, so their rates depend only on substrate concentration.`
          },
          {
            question: `Switching the solvent for an SN2 reaction from a polar protic solvent (e.g., water) to a polar aprotic solvent (e.g., DMSO) generally:`,
            options: [`Speeds up the reaction by freeing the nucleophile from a solvation shell`, `Slows the reaction by stabilizing the carbocation`, `Has no effect on SN2 rate`, `Converts the mechanism to SN1`],
            correctAnswer: 0,
            explanation: `Polar protic solvents hydrogen-bond to (cage) the nucleophile, lowering its reactivity. Polar aprotic solvents solvate the cation but leave the nucleophile "naked" and far more reactive, accelerating SN2. This is why DMSO, DMF, and acetone favor SN2.`
          },
          {
            question: `For an E2 elimination, the leaving group and the $\\beta$-hydrogen must be:`,
            options: [`Anti-periplanar (180° dihedral angle) in the transition state`, `Syn (eclipsed) to each other`, `On the same carbon atom`, `Separated by at least three carbons`],
            correctAnswer: 0,
            explanation: `E2 is concerted and requires anti-periplanar geometry so the developing $\\pi$ bond's orbitals align as the C-H and C-LG bonds break. In rigid systems (e.g., substituted cyclohexanes) both groups must be axial, which controls which alkene forms.`
          }
        ]
      }
    },
    {
      id: 'oc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- SN2: strong nuc + methyl/1° + polar aprotic → inversion
- SN1: weak nuc + 3° + polar protic → racemization
- E2: strong bulky base + 2°/3° → Zaitsev product
- The SN1/E1/SN2/E2 decision chart is GUARANTEED on the MCAT
- Tie mechanism choice to substrate class first, then reagent/solvent/temperature.`
    },
    {
      id: 'oc2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Substitution & Elimination

<details>
<summary><b>Example 1: Determine mechanism from substrate + reagent</b></summary>

**Question:** Predict the main product(s) when (R)-2-bromopropane is treated with potassium ethoxide (KOEt) in ethanol at 75°C:
<pre>
       $CH_{3}$
       |
(R)-H-C-Br  + KOEt (excess) → ?
       |
       $CH_{3}$
</pre>

**Solution:**
1. **Substrate class**: 2° (secondary) – can undergo SN2, E2, SN1, or E1
2. **Nucleophile/Base**: KOEt is a **strong, bulky base**
3. **Solvent**: Ethanol – polar protic but alkoxide is NOT solvated as well
4. **Temperature**: 75°C – high temperature favors elimination

**Decision**:
- Strong bulky base + heat → **E2 mechanism** (elimination dominates)
- SN2 is suppressed because KOEt is too bulky for backside attack
- Product: Mainly **2-methylpropene (Hofmann/alkene product)** with R/S stereochemistry lost (now a C=C double bond)

**MCAT Strategy**: The phrase "strong bulky base + heat" is shorthand for E2. Prioritize substrate class first, then base strength, bulk, and temperature.
</details>

<details>
<summary><b>Example 2: SN1 vs. E1 from a 3° carbocation</b></summary>

**Question:** 1-bromo-1-methylcyclohexane is dissolved in water at room temperature. What is the major product?
<pre>
     Br
     |
  $(ring)-C-CH_{3}$
     |
     H
</pre>

**Solution:**
1. **Substrate class**: 3° – strongly favors SN1/E1
2. **Nucleophile**: Water – weak nucleophile, weak base
3. **Solvent**: Water – polar protic (stabilizes carbocation)
4. **Temperature**: Room temperature – doesn't favor elimination overly

**Decision**:
- Carbocation forms readily → SN1/E1 competition
- Water attacks the carbocation → **SN1 product (3° alcohol) dominates** at room temp
- E1 product (alkene) forms as minor by-product

**Products**: ~70% (1-methylcyclohexan-1-ol); ~30% (1-methylcyclohexene)

**MCAT Strategy**: At room temperature in water, nucleophilic attack dominates. Alcohol is major product. If the question said "heat," elimination would increase.
</details>

<details>
<summary><b>Example 3: Why SN2 fails on bulky substrates</b></summary>

**Question:** (1S,2S)-1-bromo-2-methylcyclohexane is treated with KCN (strong nucleophile) in DMSO. What happens?
<pre>
         |Br       4-step:
      /  \         1. Identify chiral center at C1 (2° carbon bearing Br)
      \  /         2. $CN^{-}$ is strong, DMSO is polar aprotic
      (ring)       3. BUT the cyclohexane ring creates steric hindrance
                   4. SN2 still wins: backside attack occurs
</pre>

**Solution**:
1. **Substrate**: 2° but IN A RING with bulky neighbors (gem-dimethyl effects from fused rings, methyl group on C2)
2. **Nucleophile**: $CN^{-}$ – strong, small, polar aprotic solvent
3. **Expected mechanism**: SN2 (good nucleophile + aprotic solvent)

**BUT**: The ring + adjacent methyl makes backside attack difficult. **SN2 is heavily retarded**.
- Minor: SN2 (nitrile product with config inversion, if it happens)
- Major: **E2 or SN1** (ring structure forces competing pathways)

**MCAT Strategy**: Even ideal SN2 conditions (strong nucleophile + aprotic) fail if substrate is too sterically hindered. Sometimes ring systems and bulky groups suppress SN2 entirely.
</details>

<details>
<summary><b>Example 4: Stereochemistry loss in SN1</b></summary>

**Question:** (R)-2-iodooctane in aqueous $AgNO_{3}$ (SN1 conditions) produces a 50:50 mixture of (R) and (S) alcohols. Why not 100% inversion or 100% retention?

**Solution**:
1. $Ag^{+}$ abstracts $I^{-}$ → carbocation forms
2. Carbocation is **planar** $(sp^{2} hybridized)$
3. Water can attack from either face (above or below the plane)
4. ~50% attack from above → (S) enantiomer
5. ~50% attack from below → (R) enantiomer
6. Result: **Racemic mixture** (although sometimes slightly favor one direction)

**Why not 100% one product?**
- The carbocation has no stereochemistry (planar, achiral)
- Once it forms, the stereochemical information is lost
- Product ratio depends on attack from both faces

**MCAT Strategy**: SN1 → racemization. Inversion suggests SN2. Retention is chemically rare (rearrangement-driven).
</details>`
    }
  ]
};
