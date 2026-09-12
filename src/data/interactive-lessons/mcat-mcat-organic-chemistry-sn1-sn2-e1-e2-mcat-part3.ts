export const mcatOchemSubElimPart3Data = {
  topicSlug: 'mcat-organic-chemistry-sn1-sn2-e1-e2-mcat',
  sections: [
    {
      id: 'sn3-intro',
      type: 'text' as const,
      content: `# SN1, SN2, E1 & E2 for the MCAT

**Part 3 of 4 — Nucleophiles, Solvents & Stereochemical Outcomes**

### Nucleophile Strength

- **Charge**: an anion beats its conjugate acid ($HO^-$ > $H_2O$; $CH_3O^-$ > $CH_3OH$)
- **Same attacking atom** → nucleophilicity parallels basicity ($CH_3O^-$ > $CH_3CO_2^-$)
- **Down a group in protic solvents**: nucleophilicity INCREASES ($I^- > Br^- > Cl^- > F^-$) because small ions are caged by hydrogen bonding
- **In polar aprotic solvents** the order flips toward basicity ($F^-$ becomes the strongest halide nucleophile) — anions are "naked," not solvated

### Solvent Effects (huge MCAT yield)

| Solvent type | Examples | Favors |
|--------------|----------|--------|
| Polar protic | Water, alcohols, carboxylic acids | SN1/E1 — stabilizes the carbocation AND the leaving anion; H-bonds mute the nucleophile |
| Polar aprotic | DMSO, DMF, acetone, acetonitrile | SN2 — dissolves salts but leaves the anion unsolvated and highly reactive |
| Nonpolar | Hexane, benzene | Neither ionic mechanism (poor at dissolving ions) |

Memory hook: **protic protects the cation** (SN1); **aprotic activates the anion** (SN2).

### Stereochemical Outcomes

| Mechanism | Outcome at the reacting carbon |
|-----------|-------------------------------|
| SN2 | **Inversion** of configuration (Walden inversion) — R becomes S if priorities are unchanged |
| SN1 | **Racemization** (attack on both faces of the planar cation), often with a slight excess of inversion due to the leaving group briefly blocking one face (ion pairing) |
| E2 | **Stereospecific**: the alkene geometry is fixed by the anti-periplanar requirement |
| E1 | Zaitsev alkene, trans (E) favored; no anti-periplanar constraint |

**Caution:** SN2 inverts the spatial arrangement, but the R/S **label** only flips if the incoming and outgoing groups hold the same CIP priority rank. Always re-rank priorities in the product.

### Temperature

Heat favors **elimination** over substitution. Elimination creates more particles (alkene + conjugate acid + leaving group), so it has a more positive entropy change; the $-T\\Delta S$ term increasingly rewards elimination as T rises. "Heated with concentrated acid/base" in a passage is an elimination cue.`
    },
    {
      id: 'sn3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nucleophiles, Solvents & Stereochemistry** 🎯`,
      exercise: {
        questions: [
          {
            question: `Switching the solvent for an SN2 reaction from ethanol to DMSO dramatically increases the rate because DMSO:`,
            options: [`Stabilizes the carbocation intermediate`, `Cannot hydrogen-bond to the nucleophile, leaving it unsolvated and highly reactive`, `Acts as a stronger nucleophile itself`, `Protonates the leaving group`],
            correctAnswer: 1,
            explanation: `Polar aprotic solvents (DMSO, DMF, acetone) dissolve the salt but do not H-bond to the anion. The "naked" nucleophile is far more reactive. There is no carbocation in SN2.`
          },
          {
            question: `(R)-2-bromobutane reacts with sodium cyanide in DMF. The product is:`,
            options: [`(S)-2-methylbutanenitrile with inverted configuration at the stereocenter`, `A racemic mixture of nitriles`, `(R)-product with retention`, `Mostly 1-butene from elimination`],
            correctAnswer: 0,
            explanation: `Secondary substrate + strong unhindered nucleophile + polar aprotic solvent = SN2 → clean inversion (backside attack). Racemization would indicate SN1; cyanide is a good nucleophile but a relatively weak base, so elimination is minor.`
          },
          {
            question: `In water, iodide is a better nucleophile than fluoride. The primary reason is that:`,
            options: [`Iodide is a stronger base`, `Fluoride is tightly solvated by hydrogen bonds, while large polarizable iodide is relatively free to attack`, `Iodide has a higher charge density`, `Fluoride is a better leaving group`],
            correctAnswer: 1,
            explanation: `In protic solvents, small high-charge-density anions like fluoride are caged by H-bonding. Iodide is weakly solvated and highly polarizable, so it attacks faster — even though fluoride is the stronger base.`
          },
          {
            question: `(S)-3-bromo-3-methylhexane dissolved in warm methanol gives the methyl ether product as:`,
            options: [`Pure S enantiomer`, `Pure R enantiomer`, `A nearly racemic mixture of R and S`, `A meso compound`],
            correctAnswer: 2,
            explanation: `Tertiary substrate + weak nucleophile + protic solvent = SN1 (solvolysis). The planar carbocation is attacked from both faces, giving near-racemization (often with a small excess of inversion from ion pairing).`
          },
          {
            question: `Raising the temperature of a reaction between 2-bromopropane and sodium ethoxide shifts the product mixture toward propene. This occurs because:`,
            options: [`Elimination has a more positive entropy change, so higher T favors it thermodynamically and kinetically`, `Heat converts ethoxide into a nucleophile`, `The SN2 transition state is destabilized by heat only`, `Propene is more stable than the ether at all temperatures`],
            correctAnswer: 0,
            explanation: `Elimination generates more independent particles (alkene + alcohol + halide), so its entropy change is more positive. As T increases, the $-T\\Delta S$ contribution increasingly favors E2 over SN2 — "heat favors elimination."`
          }
        ]
      }
    },
    {
      id: 'sn3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Protic solvents (water, ROH) → SN1/E1; aprotic solvents (DMSO, DMF, acetone) → SN2
- In protic solvents nucleophilicity runs $I^- > Br^- > Cl^- > F^-$; aprotic solvents flip this toward basicity
- SN2 = clean inversion; SN1 = racemization (planar cation); E2 = stereospecific anti-periplanar; E1 = Zaitsev, trans-favored
- Inversion of geometry does not automatically flip the R/S label — re-rank CIP priorities in the product
- Heat pushes the competition toward elimination (entropy)`
    },
    {
      id: 'sn3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Conditions & Outcomes

<details>
<summary><b>Example 1: Full SN2 stereochemistry call</b></summary>

**Question:** (R)-2-bromooctane reacts with $HS^-$ in DMF. Give the product and its configuration.

**Solution:**
1. Substrate: secondary. Nucleophile: $HS^-$ — excellent (large, polarizable), weak base. Solvent: polar aprotic
2. All three point to **SN2** → backside attack → geometric inversion
3. Check CIP labels: in the reactant, priorities are Br > hexyl vs methyl comparison... Br is #1. In the product, SH is #1 (S beats C). The relative ranks of the other groups are unchanged
4. Since the #1 group simply swapped positions via inversion and keeps rank #1, the label flips: product is **(S)-octane-2-thiol**

**MCAT Strategy:** Two separate checks: (1) geometry inverts (always, for SN2); (2) does the LABEL flip? Only if the nucleophile occupies the same priority rank the leaving group had.
</details>

<details>
<summary><b>Example 2: Choose conditions to preserve or destroy optical activity</b></summary>

**Question:** You need to convert optically pure (S)-2-bromobutane to the azide with defined stereochemistry. Which conditions: $NaN_3$ in DMSO, or dilute $HN_3$ in aqueous ethanol at reflux?

**Solution:**
1. $NaN_3$/DMSO: strong nucleophile, aprotic → SN2 → single enantiomer, inverted → **(R)-2-azidobutane**. ✓
2. Aqueous ethanol at reflux with a weak nucleophile: promotes ionization → SN1 → racemization → optical purity destroyed. ✗
3. Answer: **azide in DMSO**

**MCAT Strategy:** "Optically pure product required" = the passage is steering you to SN2 conditions (aprotic solvent, strong Nu, unhindered substrate).
</details>

<details>
<summary><b>Example 3: E2 stereospecificity</b></summary>

**Question:** An E2 elimination is run on a single diastereomer of 2-bromo-3-phenylbutane and yields exclusively one alkene geometry. Why does the OTHER diastereomer give the opposite geometry?

**Solution:**
1. E2 requires the beta-H and Br to be anti-periplanar in the reactive conformation
2. Fixing that dihedral at 180° locks the positions of the remaining groups as the pi bond forms
3. Each diastereomer has a different spatial arrangement → rotating into the anti-periplanar conformation places the methyl/phenyl groups differently → **each diastereomer maps to one specific alkene geometry (E or Z)**
4. This one-to-one mapping is what "stereospecific" means

**MCAT Strategy:** Stereospecific (E2, SN2): reactant configuration DETERMINES product configuration. Stereoselective (E1): one product is merely preferred (trans/Zaitsev) regardless of the starting stereochemistry.
</details>

<details>
<summary><b>Example 4: Solvolysis product distribution</b></summary>

**Question:** tert-Butyl bromide is stirred in warm 80% aqueous ethanol. List all substitution products and the elimination product.

**Solution:**
1. Conditions: tertiary substrate, weak nucleophiles only (water, ethanol), protic solvent, warm → **SN1 + E1 competition**
2. The tert-butyl cation forms once, then partitions:
   - Water attacks → tert-butanol
   - Ethanol attacks → tert-butyl ethyl ether
   - Loss of a beta-H → isobutylene (2-methylpropene)
3. Three products from ONE intermediate; heating shifts the mix toward the alkene

**MCAT Strategy:** In solvolysis, every nucleophile in the pot (including the solvent itself) gets a share of the cation. Multiple products from a single intermediate is the SN1/E1 signature.
</details>`
    }
  ]
};
