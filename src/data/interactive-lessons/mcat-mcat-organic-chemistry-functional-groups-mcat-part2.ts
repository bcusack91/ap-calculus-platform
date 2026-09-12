export const mcatOchemFunctionalGroupsPart2Data = {
  topicSlug: 'mcat-organic-chemistry-functional-groups-mcat',
  sections: [
    {
      id: 'fgrp2-intro',
      type: 'text' as const,
      content: `# Functional Groups for the MCAT

**Part 2 of 4 — Physical Properties: Forces, Boiling Points & Solubility**

Physical-property questions reduce to one skill: identify the strongest **intermolecular force** each functional group supports, then rank.

### The Force Hierarchy

$$\\text{ion-ion} > \\text{ion-dipole} > \\text{H-bond} > \\text{dipole-dipole} > \\text{London dispersion}$$

- **Hydrogen bond donors**: O-H, N-H (and to a lesser degree S-H). A donor requires H bonded directly to N, O, or F
- **Acceptors only**: ethers, ketones, aldehydes, esters, tertiary amines — lone pairs but no polar H. They H-bond with WATER but not with themselves
- Everything polar has dipole-dipole; everything has dispersion, which grows with **surface area and molecular weight**

### Boiling Point Logic

Boiling separates molecules from each other, so stronger intermolecular attraction = higher bp:

- Carboxylic acids top their weight class (H-bonded **dimers** — effectively two H-bonds per pair)
- Alcohols and 1°/2° amides are next (self H-bonding); O-H beats N-H (oxygen is more electronegative → stronger H-bond)
- Aldehydes/ketones/esters: dipole-dipole only among themselves — mid-range
- Ethers and alkanes at the bottom; ethers barely beat comparable alkanes
- Within a family: bp rises with chain length (dispersion) and FALLS with branching (less contact surface area — neopentane boils 27 degrees below n-pentane)

Reference ladder at comparable molecular weight: **acid > alcohol > amine > ketone/aldehyde > ester > ether > alkane** (e.g., acetic acid 118 C vs 1-propanol 97 C vs propanal 49 C).

### Solubility Logic

"Like dissolves like" quantified: each H-bonding group can drag roughly **4-5 carbons** into water. So 1-butanol is somewhat soluble, 1-octanol is not; glucose (six carbons, five OH + ring O) is freely soluble. Additional levers:

- **Ionization multiplies solubility**: carboxylic acids dissolve in aqueous NaOH or bicarbonate (carboxylate salt); amines dissolve in dilute HCl (ammonium salt). This is the basis of **acid-base extraction**
- Ketones/aldehydes/ethers/esters accept H-bonds from water: modestly soluble when small, but pure samples of them cannot H-bond with each other
- Amphipathic molecules (fatty acid salts, phospholipids, detergents) bury tails and face water with heads — micelles and bilayers

### Melting Points (one extra rule)

Melting also rewards **crystal packing**: symmetric molecules pack well and melt high (para isomers melt above ortho/meta; trans fatty acids pack and melt higher than cis-kinked ones — the membrane-fluidity story).`
    },
    {
      id: 'fgrp2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Properties & Forces** 🎯`,
      exercise: {
        questions: [
          {
            question: `Rank by boiling point (highest first) for these similar-MW compounds: butanal, 1-butanol, propanoic acid, diethyl ether.`,
            options: [`1-Butanol > propanoic acid > butanal > diethyl ether`, `Butanal > 1-butanol > propanoic acid > diethyl ether`, `Propanoic acid > 1-butanol > butanal > diethyl ether`, `Diethyl ether > butanal > 1-butanol > propanoic acid`],
            correctAnswer: 2,
            explanation: `The acid H-bonds as a dimer (two H-bonds per pair) — highest. The alcohol self H-bonds — second. Butanal has only dipole-dipole; the ether has the weakest dipole and no donor H — lowest. Force inventory first, then rank.`
          },
          {
            question: `Diethyl ether and 1-butanol have identical molecular formulas ($C_4H_{10}O$), yet the alcohol boils about 83 degrees higher. Both, however, show similar modest solubility in water. Why the asymmetry?`,
            options: [`The ether is more polar than the alcohol`, `The alcohol ionizes in water`, `Boiling point reflects forces with water; solubility reflects self-association`, `Boiling requires breaking the alcohol's self H-bonds, which the ether lacks; but in water BOTH can hydrogen bond with the solvent`],
            correctAnswer: 3,
            explanation: `Boiling point measures molecule-to-molecule attraction in the pure liquid: only the alcohol has a donor O-H, so only it self-associates. Solubility measures interaction with WATER, and water donates H-bonds to the ether's oxygen just fine. Acceptor-only groups behave differently in the two contexts — a classic discrimination question.`
          },
          {
            question: `Which compound is most soluble in water?`,
            options: [`Glucose`, `1-Hexanol`, `Hexanal`, `Hexane`],
            correctAnswer: 0,
            explanation: `Glucose carries five hydroxyls plus a ring oxygen on a six-carbon frame — the OH-per-carbon ratio overwhelms the hydrophobic surface (rule of thumb: one H-bonding group carries 4-5 carbons). 1-Hexanol's single OH cannot carry six carbons well; hexanal is worse; hexane has no polar group at all.`
          },
          {
            question: `A mixture of benzoic acid and neutral naphthalene in ether can be separated by shaking with aqueous NaHCO3 because:`,
            options: [`Naphthalene reacts with bicarbonate`, `Bicarbonate deprotonates benzoic acid to the water-soluble benzoate ion, leaving naphthalene in the ether layer`, `Benzoic acid is destroyed by the base`, `Both compounds move to the aqueous layer at different rates`],
            correctAnswer: 1,
            explanation: `Carboxylic acids (pKa ~4-5) are deprotonated by bicarbonate (conjugate acid pKa ~6.3); the resulting carboxylate is ionic and partitions into water. The hydrocarbon stays in ether. Acidify the aqueous layer to recover the acid. Extraction questions are pKa questions wearing lab coats.`
          },
          {
            question: `Cis-oleic acid melts at 13 C while its trans isomer (elaidic acid) melts at 45 C. The difference arises because:`,
            options: [`The trans isomer forms stronger covalent bonds`, `The cis isomer has a higher molecular weight`, `Trans double bonds hydrogen bond with each other`, `The cis double bond kinks the chain, disrupting the tight packing that maximizes dispersion contact in the trans/straight-chain crystal`],
            correctAnswer: 3,
            explanation: `Same atoms, same forces available — the difference is geometry. Straight (trans) chains stack closely, maximizing dispersion contact; the cis kink spoils packing. The same physics sets membrane fluidity: unsaturated (cis) phospholipid tails keep bilayers fluid at low temperature.`
          }
        ]
      }
    },
    {
      id: 'fgrp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Force ladder: ion > ion-dipole > H-bond > dipole-dipole > dispersion; donors need H on N/O/F, acceptor-only groups (ethers, ketones, esters, 3° amines) H-bond with water but not themselves
- Boiling: acid dimers > alcohols > amines/amides > carbonyls > ethers > alkanes; longer chains raise bp, branching lowers it
- Solubility: ~4-5 carbons per H-bonding group; ionization (carboxylate, ammonium) makes anything soluble — the engine of acid-base extraction
- Bicarbonate pulls out acids; HCl pulls out amines; neutrals stay in the organic layer
- Melting rewards packing: para and trans isomers melt higher; cis kinks = fluid membranes`
    },
    {
      id: 'fgrp2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Properties

<details>
<summary><b>Example 1: Full extraction scheme</b></summary>

**Question:** An ether solution contains aniline (an amine), phenol (pKa 10), benzoic acid (pKa 4.2), and anisole (an ether). Design a separation.

**Solution:**
1. Shake with aqueous HCl → aniline protonates to anilinium, moves to water. Set that layer aside; basify to recover aniline
2. Shake with aqueous $NaHCO_3$ → only benzoic acid (pKa 4.2) is deprotonated by this WEAK base; phenol (pKa 10) is untouched. Acidify to recover the acid
3. Shake with aqueous NaOH → now phenol deprotonates to phenoxide and transfers. Acidify to recover phenol
4. Anisole (no acidic H, no basic N) remains in ether throughout

**MCAT Strategy:** Bicarbonate vs hydroxide is the pKa discriminator: bicarbonate takes only true acids (pKa < ~5); NaOH also takes phenols. Sequence weak base before strong base.
</details>

<details>
<summary><b>Example 2: Boiling point ranking with reasons</b></summary>

**Question:** Rank and justify: n-pentane, neopentane, 1-butanol, butanoic acid, diethylamine.

**Solution:**
1. Butanoic acid: H-bonded dimer → highest (163 C)
2. 1-Butanol: O-H self H-bonding (117 C)
3. Diethylamine: N-H donor, but N-H bonds are weaker H-bonds than O-H (55 C)
4. n-Pentane: dispersion only (36 C); neopentane: same formula, spherical → least surface contact → lowest (9 C)
5. Order: acid > alcohol > amine > straight alkane > branched alkane

**MCAT Strategy:** When two compounds share the strongest force type, break the tie with electronegativity (O-H > N-H) or shape (linear > branched).
</details>

<details>
<summary><b>Example 3: Why soap works</b></summary>

**Question:** Explain, in functional-group terms, why sodium stearate disperses grease in water while stearic acid itself does not.

**Solution:**
1. Stearic acid: an 18-carbon chain with one COOH — the single H-bonding group cannot carry 18 carbons → insoluble wax
2. Saponification converts COOH to $COO^- Na^+$: an **ionic** head worth far more hydration energy than a neutral acid
3. The amphipath assembles into micelles: tails dissolve grease in the hydrophobic core, carboxylate shells face water
4. In hard water, $Ca^{2+}$ bridges two carboxylates into an insoluble salt — soap scum

**MCAT Strategy:** Any "detergent/micelle/emulsion" passage is the solubility rules applied twice to one molecule: count the head's H-bonding/ionic strength against the tail's carbons.
</details>

<details>
<summary><b>Example 4: Predicting membrane behavior from structure</b></summary>

**Question:** A passage compares membranes enriched in (a) saturated C18 tails, (b) cis-monounsaturated C18 tails, (c) shorter C14 saturated tails. Rank membrane fluidity at body temperature and name the governing force.

**Solution:**
1. Fluidity is inverse to tail packing, which is set by dispersion contact
2. (a) Straight C18 chains pack tightest → least fluid
3. (c) C14 chains have less dispersion area than C18 → more fluid than (a)
4. (b) The cis kink disrupts packing most → most fluid: order (b) > (c) > (a). Cholesterol buffers fluidity in both directions

**MCAT Strategy:** Chain length = amount of dispersion; cis unsaturation = packing defect. Two structural dials, one force. This exact ranking appears repeatedly in membrane passages.
</details>`
    }
  ]
};
