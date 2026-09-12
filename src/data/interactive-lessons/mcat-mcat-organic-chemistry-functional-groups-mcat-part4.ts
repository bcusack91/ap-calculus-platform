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

Notice the pattern: every polymerization is a **condensation** (lose water; an OH or NH attacks a carbonyl or phosphate), and every digestion is a **hydrolysis** running the same linkage backward.

### Group Chemistry → Biological Property

- **Phosphates** ionize twice (pKa ~2 and ~7): DNA's backbone is polyanionic → binds $Mg^{2+}$ and histone lysines/arginines (ammonium/guanidinium cations)
- **Thiols** (Cys): soft nucleophiles; pairs oxidize to **disulfides** (the only common covalent side-chain crosslink; reduced by DTT/2-mercaptoethanol in lab passages)
- **Hydroxyls** (Ser/Thr/Tyr): nucleophiles AND phosphorylation sites — kinases build phosphoesters, phosphatases hydrolyze them
- **Imidazole** (His): pKa ~6, the proton shuttle (Part 3)
- **Guanidinium** (Arg, pKa ~12.5): resonance over three nitrogens, always protonated — permanent cation for phosphate binding
- **Aromatic side chains** (Trp/Tyr/Phe): hydrophobic cores, 280 nm absorbance, stacking with nucleobases

### Reactivity Cross-Checks (common discriminations)

- Which linkages does mild base (NaOH) cleave? **Esters** (fats saponify). NOT acetals (glycosides) — those need acid/enzymes. Amides resist both without heat
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
      id: 'fgrp4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Biomolecule Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Treatment of a triacylglycerol with hot aqueous NaOH, followed by treatment of sucrose with the same reagent, cleaves:`,
            options: [`Both molecules' linkages`, `Only the triacylglycerol's ester bonds; sucrose's glycosidic (acetal) linkage is base-stable`, `Only sucrose's glycosidic bond`, `Neither molecule`],
            correctAnswer: 1,
            explanation: `Esters saponify in base (irreversibly, to carboxylates). Acetals have no carbonyl to attack and no acidic proton — they are cleaved by aqueous ACID or enzymes, not base. Matching each biological linkage to its cleavage conditions is a straight functional-group question.`
          },
          {
            question: `N-ethylmaleimide (NEM), a Michael acceptor, abolishes the activity of an enzyme, and pretreatment with substrate protects it. The residue most likely modified is:`,
            options: [`A phenylalanine in the hydrophobic core`, `A backbone amide nitrogen`, `An active-site cysteine, whose thiol adds to the electrophilic alkene`, `A glycine with no side chain`],
            correctAnswer: 2,
            explanation: `Michael acceptors are trapped by soft nucleophiles, and the thiol(ate) of cysteine is the cell's premier soft nucleophile. Substrate protection localizes the modified residue to the active site. Backbone amides and aromatic/aliphatic side chains are non-nucleophilic.`
          },
          {
            question: `Sucrose gives a negative Benedict's test, but its hydrolysate (glucose + fructose) gives a positive one. This is because hydrolysis:`,
            options: [`Liberates free hemiacetal/hemiketal anomeric carbons that can open to oxidizable carbonyls`, `Converts the sugars to carboxylic acids`, `Removes the phosphate groups`, `Denatures an inhibitory protein`],
            correctAnswer: 0,
            explanation: `In sucrose, BOTH anomeric carbons are tied into the glycosidic acetal — no ring can open, so nothing reduces the copper reagent. Hydrolysis frees each monosaccharide's anomeric center as a hemiacetal, restoring the open-chain equilibrium and the reactive carbonyl.`
          },
          {
            question: `The arginine side chain (guanidinium, pKa ~12.5) is ideally suited to bind DNA phosphates because it:`,
            options: [`Is hydrophobic and intercalates between bases`, `Forms disulfide bonds with the backbone`, `Is neutral at physiological pH`, `Remains fully protonated at any physiological pH and delocalizes its positive charge over three nitrogens for multidentate ion pairing`],
            correctAnswer: 3,
            explanation: `pKa 12.5 means the cation persists across every biological pH, and resonance spreads the charge so the group hydrogen-bonds a phosphate oxygen pair in a planar, bidentate clamp. This charge complementarity (with lysine) underlies histone-DNA packaging — electrostatics from Part 2 plus pKa logic from Part 3.`
          },
          {
            question: `A prodrug contains an ester that must be cleaved to release the active carboxylic acid drug. Compared with an amide analog, the ester was chosen because it:`,
            options: [`Is more resistant to hydrolysis than the amide`, `Hydrolyzes readily via serum esterases and chemical hydrolysis, while amides are too resonance-stabilized to release the drug on a useful timescale`, `Cannot cross membranes in either form`, `Ionizes at physiological pH`],
            correctAnswer: 1,
            explanation: `On the acyl-reactivity ladder, esters sit well above amides: less resonance donation, better leaving group. Esterases cleave them within minutes; amides need proteases with specific recognition or harsh conditions. Bonus: masking the acid as a neutral ester also improves membrane permeability before cleavage.`
          }
        ]
      }
    },
    {
      id: 'fgrp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Biological linkages ARE functional groups: glycosidic = acetal, peptide = amide, fat = ester, nucleic backbone = phosphodiester; polymerize by condensation, digest by hydrolysis
- Cleavage matching: base saponifies esters only; acid/enzymes open acetals; amides resist both (proteases required)
- Side-chain toolkit: Cys thiol (soft Nu, disulfides), Ser/Thr/Tyr OH (phosphorylation), His imidazole (proton shuttle), Arg guanidinium (permanent delocalized cation), Trp/Tyr (280 nm)
- Reducing sugar = free hemiacetal; sucrose is the classic non-reducing exception
- Group-scan method: label groups → ionization at 7.4 → sort electrophiles/nucleophiles → find hydrolyzable bonds → then answer`
    },
    {
      id: 'fgrp4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Passage Integration

<details>
<summary><b>Example 1: Group-scan on an unfamiliar drug</b></summary>

**Question:** A passage shows aspirin: a benzene ring bearing a COOH and an O-acetyl ester. Predict its ionization at pH 7.4, its labile bond, and its acetylation chemistry.

**Solution:**
1. Scan: aromatic ring, carboxylic acid (pKa ~3.5), aryl ester
2. Ionization: pH 7.4 is ~4 units above the pKa → carboxylate anion dominates (ratio ~$10^4$:1)
3. Labile bond: the ester — hydrolyzed by esterases and slowly by water (aged aspirin smells of acetic acid)
4. Mechanism of action: the ester acetylates a serine OH of COX (transesterification — the serine alkoxide/OH attacks the ester carbonyl); irreversible inhibition

**MCAT Strategy:** The group-scan answered three exam questions before they were asked. Run it on every structure the passage draws.
</details>

<details>
<summary><b>Example 2: Which bonds survive digestion?</b></summary>

**Question:** A meal contains starch, triacylglycerols, and protein. Match each to its linkage type, cleavage catalyst, and cleavage mechanism class.

**Solution:**
1. Starch: glycosidic **acetals** → amylases; enzymatic acetal hydrolysis (oxocarbenium-like transition state, retaining/inverting mechanisms)
2. Fat: **esters** → lipases; nucleophilic acyl substitution by water at the ester carbonyl
3. Protein: **amides** → proteases (pepsin, trypsin, chymotrypsin); acyl substitution through a tetrahedral intermediate, needing covalent (Ser) or acid-base (Asp) catalysis because amides are so stabilized
4. Common thread: all three digestions are hydrolyses of carbonyl- or acetal-family linkages

**MCAT Strategy:** Digestion biochemistry is Parts 1-2 of carbonyl chemistry wearing enzyme names. Identify the linkage first; the mechanism class follows automatically.
</details>

<details>
<summary><b>Example 3: Disulfides in the lab</b></summary>

**Question:** A protein runs as one 100 kDa band on non-reducing SDS-PAGE but as two bands (60 + 40 kDa) after 2-mercaptoethanol treatment. Interpret in functional-group terms.

**Solution:**
1. 2-Mercaptoethanol is a small thiol: it reduces **disulfide bonds** by thiol-disulfide exchange (its SH attacks the S-S)
2. Result: the 100 kDa species was two polypeptides (60 + 40) covalently linked by at least one interchain Cys-Cys disulfide
3. SDS alone breaks noncovalent contacts only — covalent S-S survives without the reductant
4. Extracellular proteins favor disulfides (oxidizing environment); the cytosol's glutathione pool keeps thiols reduced

**MCAT Strategy:** "Band pattern changes with/without reducing agent" always means interchain disulfides. Count subunits from the reduced lane.
</details>

<details>
<summary><b>Example 4: Designing the discrimination</b></summary>

**Question:** You are given three unlabeled biomolecule solutions: a reducing sugar, a fatty acid salt, and a small peptide. Using only pH paper, Benedict's reagent, and dilute HCl, assign them.

**Solution:**
1. Benedict's (heat): only the reducing sugar's free hemiacetal opens to an aldehyde and reduces $Cu^{2+}$ → brick-red precipitate
2. pH paper: the fatty acid salt solution is basic (carboxylate is the conjugate base of a weak acid); confirm by adding HCl — the free fatty acid precipitates/clouds as an insoluble film (protonated, 4-5 carbons-per-group rule fails for a C16 chain)
3. The peptide: negative Benedict's, near-neutral zwitterionic solution, no precipitate with mild acid
4. Each assignment used one functional-group property: hemiacetal redox, carboxylate ionization/solubility, amide inertness

**MCAT Strategy:** Bench-test questions are property tables in disguise. For each candidate, ask which single group would react with the given reagent — the odd one out is your answer.
</details>`
    }
  ]
};
