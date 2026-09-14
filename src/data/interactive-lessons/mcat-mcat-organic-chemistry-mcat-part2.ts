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
            question: `A 3° alkyl halide treated with concentrated NaOH in ethanol with heat would most likely undergo:`,
            options: [`SN1 predominates`, `SN2 predominates`, `E2 predominates`, `E1 predominates`],
            correctAnswer: 2,
            explanation: `3° substrate blocks SN2 (too sterically hindered). Hydroxide is a STRONG base, and concentrated base in ethanol with heat removes a $\\beta$-hydrogen in a single concerted E2 step, faster than the substrate can ionize to the carbocation that SN1 and E1 both require. Contrast a 3° halide with only a weak base/nucleophile such as methanol, where no strong base is present and SN1/E1 competition through a carbocation is the expected answer.`
          },
          {
            question: `An SN2 reaction on a chiral substrate produces:`,
            options: [`Inversion of configuration`, `Retention of configuration`, `Complete racemization`, `Random configuration`],
            correctAnswer: 0,
            explanation: `SN2 proceeds through a single backside-attack step, giving 100% inversion of stereochemistry at the carbon center (Walden inversion).`
          },
          {
            question: `Which condition most strongly favors E2 over SN2 for a secondary alkyl halide?`,
            options: [`Bulky strong base in t-BuOH with heat`, `Weak nucleophile in polar protic solvent`, `Strong nucleophile in DMSO at low temperature`, `Dilute aqueous acid at room temperature`],
            correctAnswer: 0,
            explanation: `Bulky strong base and heat strongly bias elimination, especially for secondary/tertiary substrates.`
          },
          {
            question: `The rate law $rate=k[substrate]$ is consistent with:`,
            options: [`SN2 only`, `SN1 or E1`, `E2 only`, `SN2 or E2`],
            correctAnswer: 1,
            explanation: `SN1 and E1 are unimolecular in the rate-determining step, so their rates depend only on substrate concentration. SN2 and E2 are bimolecular: their rates also depend on the nucleophile or base concentration.`
          },
          {
            question: `Switching the solvent for an SN2 reaction from a polar protic solvent (e.g., water) to a polar aprotic solvent (e.g., DMSO) generally:`,
            options: [`Speeds it up by leaving the nucleophile poorly solvated`, `Slows it by stabilizing a carbocation intermediate`, `Has no effect, because SN2 rates ignore the solvent`, `Slows it by caging the nucleophile in hydrogen bonds`],
            correctAnswer: 0,
            explanation: `Polar protic solvents hydrogen-bond to (cage) the nucleophile, lowering its reactivity. Polar aprotic solvents solvate the cation but leave the nucleophile "naked" and far more reactive, accelerating SN2. This is why DMSO, DMF, and acetone favor SN2. An aprotic solvent has no O-H or N-H to hydrogen-bond with, and SN2 has no carbocation intermediate to stabilize.`
          },
          {
            question: `For an E2 elimination, the leaving group and the $\\beta$-hydrogen must be:`,
            options: [`Anti-periplanar (180° dihedral)`, `Gauche to each other (60° dihedral)`, `On the same carbon atom (geminal)`, `Separated by at least three carbons`],
            correctAnswer: 0,
            explanation: `E2 is concerted and requires anti-periplanar geometry (a 180° dihedral angle in the transition state) so the developing $\\pi$ bond's orbitals align as the C-H and C-LG bonds break. A gauche arrangement does not align those orbitals, and the two groups must sit on ADJACENT carbons, since the new $\\pi$ bond forms between them. In rigid systems (e.g., substituted cyclohexanes) both groups must be axial, which controls which alkene forms.`
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

**Question:** Predict the main product(s) when 2-bromopropane is treated with potassium ethoxide (KOEt) in ethanol at 75°C:
<pre>
       $CH_{3}$
       |
    H-C-Br  + KOEt (excess) → ?
       |
       $CH_{3}$
</pre>

**Solution:**
1. **Substrate class**: 2° (secondary) – can undergo SN2, E2, SN1, or E1
2. **Nucleophile/Base**: KOEt is a **strong base** (not bulky)
3. **Solvent**: Ethanol – polar protic (the conjugate-acid solvent of the base)
4. **Temperature**: 75°C – high temperature favors elimination

**Decision**:
- Strong base + heat on a 2° substrate → **E2 mechanism** (elimination dominates)
- SN2 is only a minor competitor, because heat and a strong base favor elimination at a 2° carbon
- Product: Mainly **propene** (the only alkene this substrate can form)

**MCAT Strategy**: A strong base plus heat on a 2° substrate is shorthand for E2, even when the base is not bulky; a bulky base (t-BuOK) pushes further toward elimination and the less-substituted (Hofmann) alkene. Prioritize substrate class first, then base strength, bulk, and temperature.
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
<summary><b>Example 3: SN2 on a hindered 2° substrate</b></summary>

**Question:** (1S,2S)-1-bromo-2-methylcyclohexane is treated with KCN (strong nucleophile) in DMSO. What happens?
<pre>
         |Br       4-step:
      /  \         1. Identify chiral center at C1 (2° carbon bearing Br)
      \  /         2. $CN^{-}$ is strong, DMSO is polar aprotic
      (ring)       3. BUT the cyclohexane ring creates steric hindrance
                   4. SN2 still wins: backside attack occurs
</pre>

**Solution**:
1. **Substrate**: 2° but IN A RING, with a methyl group on the adjacent carbon (C2)
2. **Nucleophile**: $CN^{-}$ – strong, small, polar aprotic solvent
3. **Expected mechanism**: SN2 (good nucleophile + aprotic solvent)

**BUT**: The ring + adjacent methyl makes backside attack slower. **SN2 is retarded but still wins**, because $CN^{-}$ is a weak base and DMSO does not support a 2° carbocation.
- Major: **SN2** (nitrile product with config inversion at C1)
- Minor: E2 (competes more than on an unhindered substrate)

**MCAT Strategy**: Steric hindrance strongly disfavors SN2 at 3° carbons and slows it at hindered 2° centers. With a strong, weakly basic nucleophile in a polar aprotic solvent, a hindered 2° substrate still reacts mainly by SN2.
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
