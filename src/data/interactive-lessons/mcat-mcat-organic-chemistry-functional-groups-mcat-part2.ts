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

- **Hydrogen bond donors**: O-H and N-H. Strong donors need H bonded directly to N, O or F; S-H donates only weakly
- **Acceptors only**: ethers, ketones, aldehydes, esters, tertiary amines — lone pairs but no polar H. They H-bond with WATER but not with themselves
- Everything polar has dipole-dipole; everything has dispersion, which grows with **surface area and molecular weight**

### Boiling Point Logic

Boiling separates molecules from each other, so stronger intermolecular attraction = higher bp:

- Carboxylic acids top their weight class (H-bonded **dimers** — effectively two H-bonds per pair)
- The exception: 1°/2° amides boil even higher (acetamide 221 °C vs acetic acid 118 °C) — N-H donors plus a C=O made strongly polar by N lone-pair resonance
- Alcohols are next (self H-bonding); O-H beats N-H (oxygen is more electronegative → stronger H-bond), so alcohols outboil amines
- Aldehydes/ketones/esters: dipole-dipole only among themselves — mid-range
- Ethers and alkanes at the bottom; ethers boil close to alkanes of similar mass (diethyl ether 35 °C, n-pentane 36 °C)
- Within a family: bp rises with chain length (dispersion) and FALLS with branching (less contact surface area — neopentane boils 27 °C below n-pentane)

Reference ladder at comparable molecular weight: **acid > alcohol > amine ≈ ketone/aldehyde > ester > ether ≈ alkane** (e.g., acetic acid 118 °C vs 1-propanol 97 °C vs propanal 49 °C). Primary amines and small carbonyls boil within a few degrees of each other.

### Solubility Logic

"Like dissolves like" quantified: each H-bonding group can drag roughly **4-5 carbons** into water. So 1-butanol is somewhat soluble, 1-octanol is not; glucose (six carbons, five OH + ring O) is freely soluble. Additional levers:

- **Ionization multiplies solubility**: carboxylic acids dissolve in aqueous NaOH or bicarbonate (carboxylate salt); amines dissolve in dilute HCl (ammonium salt). This is the basis of **acid-base extraction**
- Ketones/aldehydes/ethers/esters accept H-bonds from water: modestly soluble when small, but pure samples of them cannot H-bond with each other
- Amphipathic molecules (fatty acid salts, phospholipids, detergents) bury tails and face water with heads — micelles and bilayers

### Melting Points (one extra rule)

Melting also rewards **crystal packing**: symmetric molecules pack well and melt high. Para isomers melt above their ortho and meta isomers (p-xylene 13 °C vs o-xylene −25 °C, with identical forces available), and trans fatty acids pack and melt higher than cis-kinked ones — the membrane-fluidity story.`
    },
    {
      id: 'fgrp2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Properties

**Problem 1.** An ether solution holds aniline (an amine), phenol (pKa 10), benzoic acid (pKa 4.2) and anisole (an ether). Separate all four by extraction.

- **(a)** Which compound does aqueous HCl remove, and how is it recovered?
- **(b)** Which compound does aqueous $NaHCO_3$ remove next, and why not phenol?
- **(c)** What does aqueous NaOH then remove?
- **(d)** What is left in the ether layer?

**(a) HCl.** Aniline protonates to anilinium and moves into the water. Set that layer aside; basify it to recover aniline.

**(b) Bicarbonate.** Only benzoic acid (pKa 4.2) is deprotonated by this WEAK base; phenol (pKa 10) is untouched. Acidify the aqueous layer to recover the acid.

**(c) NaOH.** Now phenol deprotonates to phenoxide and transfers to the water. Acidify to recover phenol.

**(d) What remains.** Anisole (no acidic H, no basic N) stays in the ether throughout. Bicarbonate takes only true acids (pKa < ~5) while NaOH also takes phenols, so use the weak base before the strong one.

**Problem 2.** Rank by boiling point, with reasons: n-pentane, neopentane, 1-butanol, butanoic acid, diethylamine.

- **(a)** Which compound boils highest, and why?
- **(b)** How do 1-butanol and diethylamine compare?
- **(c)** How do the two alkanes compare?
- **(d)** What is the full order?

**(a) The acid.** Butanoic acid forms H-bonded dimers, so it boils highest (163 °C).

**(b) O-H vs N-H.** 1-Butanol self H-bonds through O-H (117 °C). Diethylamine has an N-H donor, but N-H bonds form weaker H-bonds than O-H (55 °C).

**(c) The alkanes.** n-Pentane has dispersion only (36 °C). Neopentane has the same formula but is nearly spherical, so it has the least surface contact and boils lowest (9 °C).

**(d) The order.** Acid > alcohol > amine > straight alkane > branched alkane. When two compounds share the strongest force, break the tie with electronegativity (O-H > N-H) or shape (linear > branched).

**Problem 3.** Sodium stearate disperses grease in water, but stearic acid itself does not.

- **(a)** Why is stearic acid insoluble in water?
- **(b)** What changes when its COOH becomes $COO^- Na^+$?
- **(c)** How does the salt disperse grease?
- **(d)** Why does soap form scum in hard water?

**(a) Stearic acid.** It is an 18-carbon chain with one COOH: the single H-bonding group cannot carry 18 carbons, so it is an insoluble wax.

**(b) The salt.** Neutralizing the acid with NaOH (or saponifying a fat) gives $COO^- Na^+$, an **ionic** head worth far more hydration energy than a neutral acid.

**(c) Micelles.** The amphipath assembles into micelles: the tails dissolve grease in the hydrophobic core, and carboxylate shells face the water.

**(d) Hard water.** $Ca^{2+}$ bridges two carboxylates into an insoluble salt: soap scum. A detergent passage is the solubility rules applied twice to one molecule, head against tail.

**Problem 4.** A passage compares three membranes, enriched in saturated C18 tails, cis-monounsaturated C18 tails or saturated C14 tails. Rank their fluidity at body temperature.

- **(a)** What force sets how tightly the tails pack?
- **(b)** Which membrane is least fluid?
- **(c)** Where does the C14 membrane fall?
- **(d)** Which membrane is most fluid, and what is the full order?

**(a) The force.** Fluidity is inverse to tail packing, which is set by dispersion contact.

**(b) Least fluid.** The straight saturated C18 chains pack tightest, so that membrane is least fluid.

**(c) The C14 tails.** Shorter C14 chains have less dispersion area than C18, so that membrane is more fluid than the saturated C18 one.

**(d) Most fluid.** The cis kink disrupts packing most, so the cis C18 membrane is most fluid: cis C18 > saturated C14 > saturated C18. Chain length sets the amount of dispersion; cis unsaturation is a packing defect. Cholesterol buffers fluidity in both directions.`
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
            yield: 'ULTRA_HIGH',
            explanation: `The acid H-bonds as a dimer (two H-bonds per pair) — highest. The alcohol self H-bonds — second. Butanal has only dipole-dipole; the ether has the weakest dipole and no donor H — lowest. Force inventory first, then rank.`
          },
          {
            question: `Diethyl ether and 1-butanol have identical molecular formulas ($C_4H_{10}O$), yet the alcohol boils about 83 degrees higher. Both, however, show similar modest solubility in water. Why the asymmetry?`,
            options: [`The ether is more polar, so it binds water just as well as the alcohol`, `The alcohol partly ionizes in water, while the ether stays neutral`, `Boiling reflects forces with water; solubility reflects self-association`, `Only the alcohol self H-bonds, but both accept H-bonds from water`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Boiling point measures molecule-to-molecule attraction in the pure liquid: only the alcohol has a donor O-H, so only it self-associates. Solubility measures interaction with WATER, and water donates H-bonds to the ether's oxygen just fine. Acceptor-only groups behave differently in the two contexts — a classic discrimination question. The ether is actually the less polar compound, neither compound ionizes appreciably in water, and the roles of the two properties are the other way around: boiling reflects self-association, solubility reflects interaction with water.`
          },
          {
            question: `Which compound is most soluble in water?`,
            options: [`Glucose`, `1-Hexanol`, `Hexanal`, `Hexane`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Glucose carries five hydroxyls plus a ring oxygen on a six-carbon frame — the OH-per-carbon ratio overwhelms the hydrophobic surface (rule of thumb: one H-bonding group carries 4-5 carbons). 1-Hexanol's single OH cannot carry six carbons well; hexanal is worse; hexane has no polar group at all.`
          },
          {
            question: `A mixture of benzoic acid and neutral naphthalene in ether can be separated by shaking with aqueous NaHCO3 because:`,
            options: [`Bicarbonate deprotonates naphthalene, making it water-soluble`, `Bicarbonate deprotonates benzoic acid, making it water-soluble`, `Bicarbonate protonates benzoic acid, making it water-soluble`, `Bicarbonate hydrolyzes benzoic acid, making it water-soluble`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Carboxylic acids (pKa ~4-5) are deprotonated by bicarbonate (conjugate acid pKa ~6.3); the resulting benzoate ion is ionic and partitions into water. The hydrocarbon has no acidic proton, so naphthalene stays in ether. Bicarbonate acts here as a base, not a proton donor, and a carboxylic acid has no bond for it to hydrolyze. Acidify the aqueous layer to recover the acid. Extraction questions are pKa questions wearing lab coats.`
          },
          {
            question: `Cis-oleic acid melts at 13 °C while its trans isomer (elaidic acid) melts at 45 °C. The difference arises because:`,
            options: [`The trans isomer forms stronger covalent bonds`, `The cis isomer has a higher molecular weight`, `Trans double bonds hydrogen bond to each other`, `The cis kink prevents the chains from packing tightly`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Same atoms, same forces available — the difference is geometry. Straight (trans) chains stack closely, maximizing dispersion contact; the cis kink spoils packing. The same physics sets membrane fluidity: unsaturated (cis) phospholipid tails keep bilayers fluid at low temperature. Melting breaks no covalent bonds, so bond strength is irrelevant; the isomers share one formula and molecular weight; and a C=C has no polar H to donate — each chain's only H-bond donor is its one COOH, the same in both.`
          }
        ]
      }
    },
    {
      id: 'fgrp2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Rank by the strongest force.** Ion-ion > ion-dipole > H-bond > dipole-dipole > dispersion; donors need H on N, O or F.
- **The boiling point ladder.** Acid dimers > alcohols > amines ≈ carbonyls > ethers ≈ alkanes; length raises bp, branching lowers it.
- **Solubility and extraction.** One H-bonding group carries 4-5 carbons; ionizing an acid (base) or amine (HCl) makes it water-soluble.
- **Melting rewards packing.** Para and trans isomers pack tightly and melt higher; cis kinks keep membranes fluid.

**Common traps**

- **Acceptors H-bonding themselves.** Ethers, ketones and esters accept H-bonds from water but cannot H-bond with each other.
- **Forgetting amides.** 1°/2° amides outboil even acids of similar mass: acetamide 221 °C vs acetic acid 118 °C.
- **Branching raising bp.** Branching cuts surface contact, so neopentane boils 27 °C below n-pentane.
- **Bicarbonate for phenols.** $NaHCO_3$ removes only acids with pKa below ~5; phenol (pKa 10) needs NaOH.`
    }
  ]
};
