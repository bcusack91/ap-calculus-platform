export const mcatOchemSpectroPart4Data = {
  topicSlug: 'mcat-organic-chemistry-spectroscopy-mcat',
  sections: [
    {
      id: 'spect4-intro',
      type: 'text' as const,
      content: `# Spectroscopy for the MCAT

**Part 4 of 4 — Structure Elucidation: MCAT Integration**

Real MCAT questions rarely hand you one clean spectrum. They combine fragments of IR, NMR, and MS data inside a passage and ask you to identify a product, confirm a reaction happened, or choose which technique would settle an ambiguity. This part builds the workflow.

### The Five-Step Elucidation Algorithm

1. **Molecular formula first.** From MS ($M^{+}$) or the passage. Compute degrees of unsaturation: $DoU = (2C + 2 + N - H - X)/2$ (oxygen is ignored). DoU = 4 or more suggests a benzene ring.
2. **IR for functional groups.** Carbonyl? Broad O-H? N-H spikes? Nitrile? This partitions the formula into fragments.
3. **$^1H$ NMR for the carbon skeleton.** Scale integrations to the formula, assign signature patterns (ethyl, isopropyl, para-aromatic), and use shifts to place fragments next to O, N, or C=O.
4. **$^{13}C$ / symmetry check.** Signal count vs carbon count catches symmetric candidates.
5. **Assemble and verify.** Every atom of the formula, every degree of unsaturation, and every spectral feature must be accounted for. One contradiction kills a candidate.

### Confirming a Reaction Happened

Passages love "which spectral change confirms the product?" Answer with the band or signal that **changes**:

| Transformation | Watch for |
|----------------|-----------|
| Alcohol → ketone (oxidation) | Broad 3350 disappears; strong ~1715 appears |
| Aldehyde → carboxylic acid | 2720 doublet gone; O-H smear 2500-3300 appears; 1H signal at 9-10 replaced by 10-12 |
| Ketone → alcohol (reduction, e.g. NaBH4) | 1715 disappears; broad O-H appears; new H-C-O signal 3.5-4.5 |
| Ester hydrolysis | 1740 shifts to ~1710 with acid O-H; alkoxy 1H signals move upfield |
| Amide/peptide bond formation | Amine N-H reshapes; C=O appears 1630-1690 |

### Ranking Techniques for a Given Ambiguity

- Distinguishing **constitutional isomers** with different H patterns → $^1H$ NMR
- Distinguishing **functional group classes** (ester vs ketone) → IR
- Distinguishing **halogenated candidates** or different MW → MS
- **Enantiomers**: IR, NMR, UV, and MS are ALL identical — only optical rotation (polarimetry) or a chiral environment distinguishes them
- **Diastereomers**: physically distinct, so NMR CAN distinguish them (different shifts/couplings)

### Passage Traps

- **Integration scaling** — ratios must be rescaled to the true formula (symmetry!)
- **Exchangeable protons** — O-H/N-H wander, broaden, and vanish with $D_2O$; do not force them into the n+1 count
- **Conjugation shifts** — a C=O at 1680 can still be a ketone if conjugated; check for the aromatic/alkene evidence before calling it an amide
- **Missing molecular ions** — alcohols and branched substrates fragment readily; the highest visible m/z is not always $M^{+}$`
    },
    {
      id: 'spect4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Structure Elucidation Strategy** 🎯`,
      exercise: {
        questions: [
          {
            question: `A student oxidizes benzyl alcohol with PCC and wants to confirm benzaldehyde formed. Which IR observation is most conclusive?`,
            options: [`Disappearance of the broad 3200-3550 band together with new bands at ~1705 and the ~2720/2850 pair`, `Persistence of aromatic C-H above 3000`, `Appearance of a strong band at 1000-1300`, `A shift of the fingerprint region`],
            correctAnswer: 0,
            explanation: `Confirmation requires the features that CHANGE: the alcohol O-H must vanish and the aldehyde signature (conjugated C=O near 1705 plus the weak aldehydic C-H doublet at 2720/2850) must appear. Aromatic C-H persists in both compounds, and the fingerprint region is never interpreted band-by-band.`
          },
          {
            question: `Which pair of compounds CANNOT be distinguished by any routine spectroscopic method (IR, NMR, UV-Vis, MS)?`,
            options: [`Cis- and trans-2-butene`, `(R)- and (S)-2-butanol`, `Butanal and 2-butanone`, `1-Chloropropane and 1-bromopropane`],
            correctAnswer: 1,
            explanation: `Enantiomers have identical physical properties in an achiral environment — identical spectra by every routine method. They differ only in optical rotation or when placed in a chiral environment. Cis/trans alkenes are diastereomers (distinguishable by NMR), the aldehyde/ketone pair differs in IR and NMR, and the halides differ in MS isotope patterns and mass.`
          },
          {
            question: `An unknown has $M^{+}$ = 88, IR shows strong 1740 and 1200 bands with no O-H, and the 1H NMR shows a 3H singlet at 3.7 ppm. The compound class and one structural detail are:`,
            options: [`A carboxylic acid with an alpha methyl`, `A ketone with a methoxy group`, `An ester with a methyl group on the ester oxygen`, `An ether with an acetyl group`],
            correctAnswer: 2,
            explanation: `C=O at 1740 + strong C-O + no O-H = ester. A 3H singlet at 3.7 ppm is a methyl on oxygen (O-CH3) with no neighbors — a methyl ester. MW 88 fits methyl propanoate (C4H8O2). An acid would show the O-H smear; a simple ketone would lack the strong C-O band and its alpha CH3 would sit near 2.1, not 3.7.`
          },
          {
            question: `Two candidate structures for an unknown are 1-bromobutane and 2-bromo-2-methylpropane. The fastest spectroscopic discriminator is:`,
            options: [`UV-Vis, because branching shifts the absorption maximum`, `$^1H$ NMR, because the tertiary isomer shows a single 9H singlet while the linear isomer shows four distinct signals`, `MS, because only one isomer shows an M+2 peak`, `IR, because only one isomer has C-H stretches`],
            correctAnswer: 1,
            explanation: `Both are C4H9Br: identical mass, identical Br isotope pattern, both saturated (no useful UV), both with sp3 C-H. Only the proton environments differ — tert-butyl bromide's nine equivalent H's give one singlet, unmistakable against 1-bromobutane's four-signal spectrum. When isomers share a formula, NMR is almost always the discriminator.`
          },
          {
            question: `A passage reports that after an esterification, the crude product's IR still shows a weak broad band at 2500-3300. The best interpretation is:`,
            options: [`Residual unreacted carboxylic acid contaminates the product`, `The ester decomposed to an alkene`, `The band is the ester's own C=O overtone`, `Water of crystallization is present in all esters`],
            correctAnswer: 0,
            explanation: `The 2500-3300 smear is the hydrogen-bonded dimer O-H of a carboxylic acid — its persistence means starting acid remains. This is the classic "reaction completeness" application of IR. Esters themselves have no O-H, and product decomposition would show alkene features, not an acid O-H.`
          }
        ]
      }
    },
    {
      id: 'spect4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Workflow: formula + DoU → IR groups → 1H NMR skeleton → 13C/symmetry check → assemble and verify every feature
- Confirm reactions with the features that CHANGE (O-H disappearing, C=O appearing, shift moves)
- Technique choice: isomers with same formula → NMR; group classes → IR; mass/halogen → MS; conjugation/redox assay → UV-Vis
- Enantiomers are spectroscopically identical (need polarimetry or a chiral environment); diastereomers are NMR-distinguishable
- Traps: rescale integrations, exclude exchangeable H from n+1, allow conjugation shifts, distrust the highest m/z as M+ for alcohols`
    },
    {
      id: 'spect4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Full Elucidation

<details>
<summary><b>Example 1: Complete workflow on C9H10O2</b></summary>

**Question:** $M^{+}$ = 150. IR: 1745, 1225, no O-H. 1H NMR: 7.3 (5H, multiplet), 5.1 (2H, singlet), 2.1 (3H, singlet). Identify the compound.

**Solution:**
1. C9H10O2: $DoU = (18 + 2 - 10)/2 = 5$ → ring (4) + one C=O
2. IR: ester (1745 + strong C-O, no O-H) — uses the fifth degree
3. NMR: 5H multiplet = monosubstituted phenyl; 2H singlet at 5.1 = deshielded benzylic CH2 on oxygen; 3H singlet at 2.1 = acetyl methyl
4. Assemble: **benzyl acetate**, $CH_3CO$-$O$-$CH_2C_6H_5$

**MCAT Strategy:** The 2H singlet near 5 ppm is the giveaway: only a CH2 flanked by BOTH oxygen and an aromatic ring gets that far downfield with no splitting.
</details>

<details>
<summary><b>Example 2: Choosing the confirming experiment</b></summary>

**Question:** A passage claims NaBH4 reduced 4-tert-butylcyclohexanone to the alcohol. Rank the usefulness of (i) IR, (ii) optical rotation, (iii) MS for confirming the reduction.

**Solution:**
1. IR: excellent — 1715 vanishes, broad 3350 appears. Direct and diagnostic.
2. MS: helpful — MW rises by 2 (154 → 156), a small but real shift
3. Optical rotation: useless — both compounds are achiral (the molecule has a mirror plane), so rotation is zero before and after
4. Ranking: **IR > MS > polarimetry**

**MCAT Strategy:** Before reaching for stereochemical tools, check whether the substrate is even chiral. Passage writers plant achiral substrates to punish reflexive "measure the rotation" answers.
</details>

<details>
<summary><b>Example 3: The conjugation decoy</b></summary>

**Question:** An unknown C8H8O shows C=O at 1685, aromatic signals at 7.4-7.9 (5H), and a 3H singlet at 2.6 ppm. A student concludes "amide, because the C=O is below 1700." Correct the reasoning.

**Solution:**
1. The formula contains no nitrogen — an amide is impossible. Formula constraints outrank band positions.
2. DoU = 5: benzene ring + one C=O
3. 1685 is a KETONE C=O lowered ~30 wavenumbers by conjugation with the ring
4. 3H singlet at 2.6 (alpha to C=O, benzylic-adjacent shift) completes **acetophenone**

**MCAT Strategy:** Conjugation-lowered ketones (1680-1690) overlap the amide window. Resolve the ambiguity with the formula (any N?) and with N-H stretches (amides that have N-H show it; acetophenone shows none).
</details>

<details>
<summary><b>Example 4: Integrating MS fragments with NMR</b></summary>

**Question:** C10H14, $M^{+}$ = 134, base peak at m/z 91. NMR: 7.2 (5H, multiplet), 2.5 (2H, triplet), 1.6 (2H, multiplet), 1.3 (2H, multiplet), 0.9 (3H, triplet). What does m/z 91 tell you, and what is the compound?

**Solution:**
1. 134 - 91 = 43 → loss of $C_3H_7$ (propyl radical)
2. m/z 91 is the famous **tropylium/benzyl cation** ($C_7H_7^{+}$) — the signature of a benzylic cleavage
3. NMR: monosubstituted ring + an unbranched four-carbon chain (triplet CH3, benzylic CH2 at 2.5)
4. Compound: **n-butylbenzene**; cleavage at the benzylic bond gives the stabilized $C_7H_7^{+}$

**MCAT Strategy:** m/z 91 in any aromatic mass spectrum = benzylic cleavage. Fragmentation follows cation stability, so the strongest peaks mark the most stable cations — the same hierarchy you learned for SN1.
</details>`
    }
  ]
};
