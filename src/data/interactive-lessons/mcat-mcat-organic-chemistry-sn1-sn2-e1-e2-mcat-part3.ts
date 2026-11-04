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

**Caution:** SN2 inverts the spatial arrangement, but the R/S **label** only flips if the incoming and outgoing groups hold the same CIP (Cahn–Ingold–Prelog) priority rank. Always re-rank priorities in the product.

### Temperature

Heat favors **elimination** over substitution. Elimination creates more particles (alkene + conjugate acid + leaving group), so it has a more positive entropy change; the $-T\\Delta S$ term increasingly rewards elimination as T rises. "Heated with concentrated acid/base" in a passage is an elimination cue.`
    },
    {
      id: 'sn3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Conditions & Outcomes

**Problem 1.** (R)-2-Bromooctane reacts with $HS^-$ in DMF.

- **(a)** What do the substrate, the nucleophile and the solvent each point to?
- **(b)** What happens to the geometry at the reacting carbon?
- **(c)** How do the CIP priorities compare before and after?
- **(d)** What is the product, with its configuration label?

**(a) Conditions.** Substrate: secondary. Nucleophile: $HS^-$ — excellent (large, polarizable), weak base. Solvent: polar aprotic. All three point to **SN2**.

**(b) Geometry.** SN2 is backside attack, so the geometry at C2 inverts — always, for SN2.

**(c) Priorities.** Reactant: Br > hexyl > methyl > H. Product: SH > hexyl > methyl > H, since S outranks C. The SH takes the #1 rank the Br held, and the ranks of the other groups are unchanged.

**(d) Product.** With the geometry inverted (b) and the ranks unchanged (c), the label flips: the product is **(S)-octane-2-thiol**. The label flips only when the nucleophile holds the priority rank the leaving group had.

**Problem 2.** Optically pure (S)-2-bromobutane must be converted to the azide with defined stereochemistry. The choices: $NaN_3$ in DMSO, or dilute $HN_3$ in aqueous ethanol at reflux.

- **(a)** What happens with $NaN_3$ in DMSO?
- **(b)** What happens with dilute $HN_3$ in aqueous ethanol at reflux?
- **(c)** Which conditions should be used?

**(a) Azide in DMSO.** Strong nucleophile, aprotic solvent → SN2 → a single enantiomer, inverted: **(R)-2-azidobutane**. ✓

**(b) Hot aqueous ethanol.** A weak nucleophile in a hot protic solvent promotes ionization → SN1 → racemization, so optical purity is destroyed. ✗

**(c) Choice.** **Azide in DMSO.** "Optically pure product required" means the passage is steering you to SN2 conditions: aprotic solvent, strong nucleophile, unhindered substrate.

**Problem 3.** tert-Butyl bromide is stirred in warm 80% aqueous ethanol.

- **(a)** Which mechanisms do the conditions point to?
- **(b)** Which substitution products form?
- **(c)** Which elimination product forms, and how does heat change the mix?

**(a) Conditions.** Tertiary substrate, weak nucleophiles only (water, ethanol), protic solvent, warm → **SN1 + E1 competition**: the tert-butyl cation forms once, then partitions.

**(b) Substitution.** Water attacks → tert-butanol; ethanol attacks → tert-butyl ethyl ether. In solvolysis every nucleophile in the pot, including the solvent itself, gets a share of the cation.

**(c) Elimination.** Loss of a beta-H gives isobutylene (2-methylpropene). Three products from ONE intermediate is the SN1/E1 signature, and heating shifts the mix toward the alkene.

**Problem 4.** An E2 elimination run on a single diastereomer of 2-bromo-3-phenylbutane yields exclusively one alkene geometry; the other diastereomer gives the opposite geometry.

- **(a)** Which conformation must the molecule adopt to react?
- **(b)** How does that conformation fix the alkene geometry?
- **(c)** Why do the two diastereomers give opposite geometries, and what does "stereospecific" mean?

**(a) Conformation.** E2 requires the beta-H and the Br to be anti-periplanar (dihedral 180°) in the reactive conformation.

**(b) Locked groups.** Fixing that dihedral at 180° locks the positions of the remaining groups as the pi bond forms, so the methyl and phenyl groups end up on fixed sides of the new double bond.

**(c) One-to-one mapping.** Each diastereomer places the methyl and phenyl groups differently once rotated anti-periplanar, so each maps to one geometry (E or Z): that is **stereospecific** (E2, SN2). E1 is merely stereoselective: trans is preferred whatever the start.`
    },
    {
      id: 'sn3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nucleophiles, Solvents & Stereochemistry** 🎯`,
      exercise: {
        questions: [
          {
            question: `Switching the solvent for an SN2 reaction from ethanol to DMSO dramatically increases the rate because DMSO:`,
            options: [`Stabilizes the carbocation intermediate`, `Does not hydrogen-bond to the nucleophile`, `Acts as a stronger nucleophile itself`, `Protonates the leaving group`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Polar aprotic solvents (DMSO, DMF, acetone) dissolve the salt but do not H-bond to the anion. The "naked," unsolvated nucleophile is far more reactive. There is no carbocation in SN2, and DMSO has no acidic O-H or N-H to protonate anything.`
          },
          {
            question: `(R)-2-bromobutane reacts with sodium cyanide in DMF. The product is:`,
            options: [`(S)-2-methylbutanenitrile, by inversion`, `Racemic 2-methylbutanenitrile, by racemization`, `(R)-2-methylbutanenitrile, by retention`, `Mostly butenes, by E2 elimination`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Secondary substrate + strong unhindered nucleophile + polar aprotic solvent = SN2 → clean inversion (backside attack). CN outranks ethyl just as Br did, so the inverted product is labeled (S). Racemization would indicate SN1; cyanide is a good nucleophile but a relatively weak base, so elimination is minor.`
          },
          {
            question: `In water, iodide is a better nucleophile than fluoride. The primary reason is that:`,
            options: [`Iodide is the stronger base in water`, `Water H-bonds fluoride far more tightly`, `Iodide has a higher charge density than fluoride`, `Fluoride is a better leaving group`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `In protic solvents, small high-charge-density anions like fluoride are caged by H-bonding. Iodide is weakly solvated and highly polarizable, so it attacks faster — even though fluoride is the stronger base, which is why basicity cannot be the reason. Iodide has the LOWER charge density (its charge is spread over a large ion), and leaving-group ability describes departing, not attacking (fluoride is in fact the poorer leaving group).`
          },
          {
            question: `(S)-3-bromo-3-methylhexane dissolved in warm methanol gives the methyl ether product as:`,
            options: [`Pure S enantiomer`, `Pure R enantiomer`, `A nearly racemic mixture`, `A meso compound`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Tertiary substrate + weak nucleophile + protic solvent = SN1 (solvolysis). The planar carbocation is attacked from both faces, giving near-racemization (often with a small excess of inversion from ion pairing).`
          },
          {
            question: `Raising the temperature of a reaction between 2-bromopropane and sodium ethoxide shifts the product mixture toward propene. This occurs because:`,
            options: [`Elimination has the more positive entropy change`, `Heat converts ethoxide into a nucleophile`, `The SN2 transition state is destabilized by heat only`, `Propene is more stable than the ether at all temperatures`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Elimination generates more independent particles (alkene + alcohol + halide), so its entropy change is more positive. As T increases, the $-T\\Delta S$ contribution increasingly favors E2 over SN2 — "heat favors elimination."`
          }
        ]
      }
    },
    {
      id: 'sn3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Protic vs. aprotic.** Protic solvents (water, alcohols) favor SN1/E1; aprotic ones (DMSO, DMF, acetone) favor SN2.
- **Nucleophile strength.** An anion beats its conjugate acid, and in protic solvents $I^- > Br^- > Cl^- > F^-$.
- **Stereochemical outcomes.** SN2 inverts, SN1 racemizes, E2 is stereospecific, and E1 favors the trans Zaitsev alkene.
- **Heat favors elimination.** Elimination makes more particles, so its larger entropy gain wins as the temperature rises.

**Common traps**

- **Inversion always flips R/S.** SN2 always inverts the geometry, but the label flips only if the priority ranks are unchanged.
- **One halide order everywhere.** Aprotic solvents leave anions bare, so the order flips toward basicity and $F^-$ leads.
- **SN1 as perfect racemization.** The departing anion briefly shields one face, so SN1 often shows a slight excess of inversion.
- **Stereospecific vs. stereoselective.** E2 and SN2 map each reactant isomer to one product; E1 merely prefers trans.`
    }
  ]
};
