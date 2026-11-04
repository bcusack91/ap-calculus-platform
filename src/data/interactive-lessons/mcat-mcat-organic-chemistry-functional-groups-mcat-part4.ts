export const mcatOchemFunctionalGroupsPart4Data = {
  topicSlug: 'mcat-organic-chemistry-functional-groups-mcat',
  sections: [
    {
      id: 'fgrp4-intro',
      type: 'text' as const,
      content: `# Functional Groups for the MCAT

**Part 4 of 4 — Functional Groups in Biomolecules: MCAT Integration**

The MCAT rarely asks "name this group" directly. It asks how a group's chemistry explains a biomolecule's behavior. This part is the translation table.

### The Four Biomolecule Families, as Functional Groups

| Biomolecule | Groups present | Linkage formed | Linkage chemistry |
|-------------|----------------|----------------|-------------------|
| Carbohydrates | Aldehyde/ketone + many OH | Glycosidic bond | **Acetal** (acid/enzyme hydrolysis; base-stable) |
| Proteins | Amine + carboxylic acid | Peptide bond | **Amide** (resonance-stabilized; slow hydrolysis) |
| Triacylglycerols | Alcohol (glycerol) + fatty acids | Ester x3 | **Ester** (saponifiable by base) |
| Nucleic acids | Phosphate + sugar OH | Phosphodiester | **Phosphoester** (backbone negative charge) |

Notice the pattern: every polymerization is a **condensation** (lose water; an OH or NH bonds to a carbonyl carbon, an anomeric carbon or a phosphorus), and every digestion is a **hydrolysis** running the same linkage backward.

### Group Chemistry → Biological Property

- **Phosphates**: a phosphate monoester (phosphoserine, a nucleotide's terminal phosphate) ionizes twice (pKa ~1-2 and ~6-7); each phosphodiester in DNA keeps one acidic OH (pKa ~1-2), so the backbone carries one negative charge per nucleotide → binds $Mg^{2+}$ and histone lysines/arginines (ammonium/guanidinium cations)
- **Thiols** (Cys): soft nucleophiles; pairs oxidize to **disulfides** (the only common covalent side-chain crosslink; reduced by DTT/2-mercaptoethanol in lab passages)
- **Hydroxyls** (Ser/Thr/Tyr): nucleophiles AND phosphorylation sites — kinases build phosphoesters, phosphatases hydrolyze them
- **Imidazole** (His): pKa ~6, the proton shuttle (Part 3 of this lesson)
- **Guanidinium** (Arg, pKa ~12.5): resonance over three nitrogens, always protonated — permanent cation for phosphate binding
- **Aromatic side chains** (Trp/Tyr/Phe): hydrophobic cores, 280 nm absorbance (mainly Trp and Tyr), stacking with nucleobases

### Reactivity Cross-Checks (common discriminations)

- Which linkages does mild base (NaOH) cleave? **Esters** (fats saponify). NOT acetals (glycosides) — those need acid/enzymes. Amides resist both without heat
- Acyl reactivity ladder: acid chloride > anhydride > ester > amide. The better the leaving group and the weaker its resonance donation into the C=O, the faster the group hydrolyzes
- Which side chains can be covalently modified? Nucleophilic ones: Cys-SH, Ser-OH, Lys-$NH_2$ (imine/amide formation), His-imidazole
- Reducing vs non-reducing sugar: free **hemiacetal** end vs all-acetal (sucrose is non-reducing — both anomeric carbons locked in the glycosidic bond)
- Oxidative stress passages: aldehydes (reactive electrophiles, form Schiff bases with Lys), disulfide shuffling, lipid peroxidation of cis alkenes

### Passage Strategy: the Group-Scan Method

When a passage introduces an unfamiliar molecule (a drug, toxin, metabolite):
1. **Scan and label** every functional group in the structure
2. **Ionization state** at pH 7.4 (acids anionic, amines cationic)
3. **Electrophiles vs nucleophiles**: carbonyls, Michael acceptors, alkyl halides = electrophilic; thiols, amines, alkoxides = nucleophilic
4. **Hydrolyzable linkages** (ester > amide; acetal in acid) — predicts metabolism and prodrug activation
5. Then read the questions — most answers are now pre-computed`
    },
    {
      id: 'fgrp4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Passage Integration

**Problem 1.** A passage shows aspirin: a benzene ring bearing a COOH (pKa ~3.5) and an O-acetyl ester. Run the group-scan on it.

- **(a)** Which functional groups are present?
- **(b)** What is its ionization state at pH 7.4?
- **(c)** Which bond is labile?
- **(d)** How does aspirin inactivate COX?

**(a) Scan.** Aromatic ring, carboxylic acid (pKa ~3.5), aryl ester.

**(b) Ionization.** pH 7.4 is ~4 units above the pKa, so the carboxylate anion dominates (ratio ~$10^4$:1).

**(c) Labile bond.** The ester: hydrolyzed by esterases and slowly by water (aged aspirin smells of acetic acid).

**(d) Mechanism.** The ester acetylates a serine OH of COX by transesterification (the serine OH attacks the ester carbonyl): irreversible inhibition. The group-scan answered three exam questions before they were asked; run it on every structure a passage draws.

**Problem 2.** A meal contains starch, triacylglycerols and protein. Match each to its linkage, its cleavage catalyst and its mechanism class.

- **(a)** Which linkage holds starch together, and what cleaves it?
- **(b)** Which linkage holds the fats together, and what cleaves it?
- **(c)** What cleaves the protein, and why does it need catalytic help?
- **(d)** What do the three digestions have in common?

**(a) Starch.** Glycosidic **acetals**, cleaved by amylases: enzymatic acetal hydrolysis.

<!-- yield:low -->
Glycosidases pass through an oxocarbenium-like transition state, and each enzyme either retains or inverts the anomeric configuration.
<!-- /yield -->

**(b) Fats.** **Esters**, cleaved by lipases: nucleophilic acyl substitution by water at the ester carbonyl.

**(c) Protein.** **Amides**, cleaved by proteases (pepsin, trypsin, chymotrypsin): acyl substitution through a tetrahedral intermediate. Amides are so stabilized that the enzyme needs covalent (Ser) or acid-base (Asp) catalysis.

**(d) Common thread.** All three digestions are hydrolyses of carbonyl- or acetal-family linkages. Identify the linkage first; the mechanism class follows.

**Problem 3.** A protein runs as one 100 kDa band on non-reducing SDS-PAGE, but as two bands (60 + 40 kDa) after treatment with 2-mercaptoethanol.

- **(a)** What does 2-mercaptoethanol do?
- **(b)** What was the 100 kDa species?
- **(c)** Why did SDS alone not split it?
- **(d)** Where are such disulfides usually found?

**(a) The reductant.** 2-Mercaptoethanol is a small thiol: it reduces **disulfide bonds** by thiol-disulfide exchange (its SH attacks the S-S).

**(b) The species.** Two polypeptides (60 + 40 kDa) covalently linked by at least one interchain Cys-Cys disulfide.

**(c) SDS alone.** SDS breaks noncovalent contacts only; a covalent S-S survives without the reductant.

**(d) Location.** Extracellular proteins favor disulfides (oxidizing environment); the cytosol's glutathione pool keeps thiols reduced. A band pattern that changes with a reducing agent means interchain disulfides: count subunits from the reduced lane.

**Problem 4.** Three unlabeled solutions hold a reducing sugar, a fatty acid salt and a small peptide. Assign them using only pH paper, Benedict's reagent and dilute HCl.

- **(a)** Which solution does Benedict's reagent identify?
- **(b)** How do pH paper and HCl identify the fatty acid salt?
- **(c)** How is the peptide recognized?

**(a) Benedict's (heat).** Only the reducing sugar's free hemiacetal opens to an aldehyde and reduces $Cu^{2+}$, giving a brick-red precipitate.

**(b) pH paper and HCl.** The fatty acid salt solution is basic (carboxylate is the conjugate base of a weak acid). HCl protonates it, and the free fatty acid clouds out as an insoluble film: one COOH cannot carry a C16 chain.

**(c) The peptide.** Negative Benedict's, a near-neutral solution of zwitterions and no precipitate with mild acid. Each assignment used one group property: hemiacetal redox, carboxylate ionization, amide inertness.`
    },
    {
      id: 'fgrp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Biomolecule Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Hot aqueous NaOH is applied separately to a triacylglycerol and to sucrose. Which bonds are cleaved?`,
            options: [`Both the esters and the glycosidic bond`, `Only the triacylglycerol's ester bonds`, `Only sucrose's glycosidic acetal bond`, `Neither the esters nor the glycosidic bond`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Esters saponify in base (irreversibly, to carboxylates), so the triacylglycerol is cleaved. Sucrose's glycosidic (acetal) linkage is base-stable: acetals have no carbonyl to attack and no acidic proton — they are cleaved by aqueous ACID or enzymes, not base. Matching each biological linkage to its cleavage conditions is a straight functional-group question.`
          },
          {
            question: `N-ethylmaleimide (NEM), a Michael acceptor, abolishes the activity of an enzyme, and pretreatment with substrate protects it. The residue most likely modified is:`,
            options: [`A phenylalanine in the hydrophobic core`, `A backbone amide nitrogen`, `An active-site cysteine's thiol`, `A serine hydroxyl in the active site`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Michael acceptors are trapped by soft nucleophiles, and the thiol(ate) of cysteine is the cell's premier soft nucleophile: it adds to NEM's electrophilic alkene. Substrate protection localizes the modified residue to the active site. Backbone amides and the phenylalanine side chain are non-nucleophilic, and Ser-OH (pKa ~13) is a hard, weak nucleophile at pH 7; NEM is thiol-selective.`
          },
          {
            question: `Sucrose gives a negative Benedict's test, but its hydrolysate (glucose + fructose) gives a positive one. This is because hydrolysis:`,
            options: [`Frees hemiacetal and hemiketal anomeric carbons`, `Oxidizes both anomeric carbons to carboxylic acids`, `Removes phosphate groups blocking the anomeric carbons`, `Doubles the number of glycosidic acetal linkages`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `In sucrose, BOTH anomeric carbons are tied into the glycosidic acetal — no ring can open, so nothing reduces the copper reagent. Hydrolysis frees each monosaccharide's anomeric center as a hemiacetal (glucose) or hemiketal (fructose), restoring the open-chain equilibrium and the reactive, oxidizable carbonyl. Hydrolysis is not an oxidation (a sugar already oxidized to an acid could not reduce the reagent), sucrose carries no phosphate groups, and hydrolysis breaks the glycosidic linkage rather than adding more.`
          },
          {
            question: `The arginine side chain (guanidinium, pKa ~12.5) is ideally suited to bind DNA phosphates because it:`,
            options: [`Is hydrophobic and intercalates between bases`, `Forms disulfide bonds with the phosphate backbone`, `Loses its proton at physiological pH to become neutral`, `Stays protonated with a resonance-delocalized charge`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `pKa 12.5 means the cation persists across every biological pH (far above pH 7.4, so it does not lose its proton), and resonance spreads the positive charge over three nitrogens so the group hydrogen-bonds a phosphate oxygen pair in a planar, bidentate clamp. The charged guanidinium is hydrophilic rather than an intercalator, and only cysteine thiols form disulfides. This charge complementarity (with lysine) underlies histone-DNA packaging — electrostatics from Part 2 of this lesson plus pKa logic from Part 3.`
          },
          {
            question: `A prodrug contains an ester that must be cleaved to release the active carboxylic acid drug. Compared with an amide analog, the ester was chosen because it:`,
            options: [`Is more resistant to hydrolysis than the amide`, `Is cleaved readily by esterases, unlike the amide`, `Carries a charge that blocks membrane crossing`, `Ionizes at physiological pH, like the free acid`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `On the acyl-reactivity ladder, esters sit well above amides: less resonance donation, better leaving group. Esterases (and chemical hydrolysis) cleave them within minutes; amides are too resonance-stabilized to release the drug on a useful timescale and need proteases with specific recognition or harsh conditions. Bonus: masking the acid as a neutral ester — it has no ionizable proton and carries no charge — also improves membrane permeability before cleavage.`
          }
        ]
      }
    },
    {
      id: 'fgrp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Linkages are functional groups.** Glycosidic = acetal, peptide = amide, fat = ester, nucleic acid backbone = phosphodiester.
- **Condensation builds, hydrolysis digests.** Each biopolymer forms by losing water; digestion hydrolyzes the same linkage.
- **Side chains by group chemistry.** Cys thiols form disulfides, Ser/Thr/Tyr OH get phosphorylated, His shuttles protons, Arg stays cationic.
- **Scan the groups first.** Label groups, set ionization at pH 7.4, sort electrophiles from nucleophiles, then find hydrolyzable bonds.

**Common traps**

- **Base cleaving glycosides.** NaOH saponifies esters but leaves acetals intact; glycosidic bonds need acid or enzymes.
- **Sucrose as a reducing sugar.** Both anomeric carbons are locked in its glycosidic bond, so sucrose fails the Benedict's test.
- **SDS breaking disulfides.** SDS disrupts only noncovalent contacts; a reductant such as 2-mercaptoethanol is needed to cut S-S bonds.
- **Amide prodrugs.** Esterases cleave esters readily; amides are too resonance-stabilized to release a drug quickly.`
    }
  ]
};
