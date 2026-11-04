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

- **1. Molecular formula first.** From MS ($M^{+}$) or the passage; compute $\\text{DoU} = (2C + 2 + N - H - X)/2$ (oxygen ignored). DoU ≥ 4 suggests a benzene ring.
- **2. IR for functional groups.** Carbonyl? Broad O-H? N-H spikes? Nitrile? Partition the formula into fragments.
- **3. $^1H$ NMR for the carbon skeleton.** Scale integrations to the formula, spot signature patterns (ethyl, isopropyl, para-aromatic); shifts place fragments next to O, N or C=O.
- **4. $^{13}C$ / symmetry check.** Signal count vs carbon count flags symmetry.
- **5. Assemble and verify.** Every atom, degree of unsaturation and spectral feature must be accounted for; one contradiction kills a candidate.

### Confirming a Reaction Happened

Passages love "which spectral change confirms the product?" Answer with the band or signal that **changes**:

| Transformation | Watch for |
|----------------|-----------|
| Alcohol → ketone (oxidation) | Broad 3350 disappears; strong ~1715 appears |
| Aldehyde → carboxylic acid | 2720/2850 pair gone; O-H smear 2500-3300 appears; 1H 9-10 → 10-12 |
| Ketone → alcohol (reduction, e.g. NaBH4) | 1715 disappears; broad O-H appears; new H-C-O signal 3.5-4.5 |
| Ester hydrolysis | 1740 → ~1710 with acid O-H; alkoxy 1H signals move upfield |
| Amide/peptide bond formation | C=O drops from ~1710-1740 to 1630-1690; the acid O-H smear vanishes |

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
            options: [`No O-H band; new bands at ~1705 and ~2720/2850`, `O-H band still present; new band at 1000-1300`, `Aromatic C-H above 3000 persists; fingerprint pattern changes`, `A sharp new band near 2250`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Confirmation requires the features that CHANGE: the broad alcohol O-H (3200-3550) must vanish and the aldehyde signature (conjugated C=O near 1705 plus the weak aldehydic C-H pair at 2720/2850) must appear. A persisting O-H means alcohol remains, and a strong 1000-1300 C-O stretch belongs to the alcohol starting material rather than the aldehyde. Aromatic C-H persists in both compounds, the fingerprint region is never interpreted band-by-band, and a sharp band near 2250 would signal a nitrile, not an aldehyde.`
          },
          {
            question: `Which pair of compounds CANNOT be distinguished by any routine spectroscopic method (IR, NMR, UV-Vis, MS)?`,
            options: [`Cis- and trans-2-butene`, `(R)- and (S)-2-butanol`, `Butanal and 2-butanone`, `1-Chloropropane and 1-bromopropane`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Enantiomers have identical physical properties in an achiral environment — identical spectra by every routine method. They differ only in optical rotation or when placed in a chiral environment. Cis/trans alkenes are diastereomers (distinguishable by NMR), the aldehyde/ketone pair differs in IR and NMR, and the halides differ in MS isotope patterns and mass.`
          },
          {
            question: `An unknown has $M^{+}$ = 88, IR shows strong 1740 and 1200 bands with no O-H, and the 1H NMR shows a 3H singlet at 3.7 ppm. The compound class and one structural detail are:`,
            options: [`A carboxylic acid with a methyl group on the alpha carbon`, `A ketone with a methyl group on the carbonyl carbon`, `An ester with a methyl group on the ester oxygen`, `An ether with a methyl group bonded to the oxygen`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `C=O at 1740 + strong C-O + no O-H = ester. A 3H singlet at 3.7 ppm is a methyl on oxygen (O-CH3) with no neighbors — a methyl ester. MW 88 fits methyl propanoate (C4H8O2). An acid would show the O-H smear; a methyl ketone would lack the strong C-O band and its CH3 would sit near 2.1, not 3.7; a simple ether has no C=O band at all.`
          },
          {
            question: `Two candidate structures for an unknown are 1-bromobutane and 2-bromo-2-methylpropane. The fastest spectroscopic discriminator is:`,
            options: [`UV-Vis, because branching shifts the absorption maximum`, `$^1H$ NMR, because one isomer gives a lone 9H singlet`, `MS, because only one isomer shows an M+2 peak`, `IR, because only one isomer has C-H stretches`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Both are C4H9Br: identical mass, identical Br isotope pattern, both saturated (no useful UV), both with sp3 C-H. Only the proton environments differ — tert-butyl bromide's nine equivalent H's give one singlet, unmistakable against 1-bromobutane's four-signal spectrum. When isomers share a formula, NMR is almost always the discriminator.`
          },
          {
            question: `A passage reports that after an esterification, the crude product's IR still shows a weak broad band at 2500-3300. The best interpretation is:`,
            options: [`Unreacted carboxylic acid remains in the product`, `The ester partly decomposed into an alkene`, `The band is the ester's own C=O overtone`, `Ester molecules hydrogen-bond to each other`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The 2500-3300 smear is the hydrogen-bonded dimer O-H of a carboxylic acid — its persistence means starting acid remains. This is the classic "reaction completeness" application of IR. Esters themselves have no O-H, so they cannot hydrogen-bond to one another or show an O-H band; an overtone of the C=O would be weak and sharp, not a broad smear; and product decomposition would show alkene features, not an acid O-H.`
          }
        ]
      }
    },
    {
      id: 'spect4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Full Elucidation

**Problem 1.** An unknown C9H10O2 has $M^{+}$ = 150. IR: 1745, 1225, no O-H. $^1H$ NMR: 7.3 (5H, multiplet), 5.1 (2H, singlet), 2.1 (3H, singlet).

- **(a)** How many degrees of unsaturation are there, and how are they likely spent?
- **(b)** Which functional group does the IR show?
- **(c)** What does each NMR signal represent?
- **(d)** What is the compound?

**(a) Formula.** $\\text{DoU} = (18 + 2 - 10)/2 = 5$: a benzene ring (4) plus one C=O.

**(b) IR.** 1745 + a strong C-O at 1225 and no O-H: an **ester**, whose C=O uses the fifth degree.

**(c) NMR.** 5H multiplet = monosubstituted phenyl; 2H singlet at 5.1 = a benzylic CH2 on oxygen, strongly deshielded; 3H singlet at 2.1 = an acetyl methyl.

**(d) Assemble.** The ester from (b) joining the phenyl-CH2 and the acetyl methyl from (c): **benzyl acetate**, $CH_3CO$-$O$-$CH_2C_6H_5$.

**MCAT Strategy:** The 2H singlet near 5 ppm is the giveaway: only a CH2 flanked by BOTH oxygen and an aromatic ring gets that far downfield with no splitting.

**Problem 2.** A passage claims NaBH4 reduced 4-tert-butylcyclohexanone to the alcohol. IR, MS and optical rotation are available to confirm the reduction.

- **(a)** What would IR show, and how useful is it?
- **(b)** What would MS show, and how useful is it?
- **(c)** What would optical rotation show?
- **(d)** How do the three techniques rank?

**(a) IR.** Excellent: the 1715 C=O vanishes and a broad O-H near 3350 appears. Direct and diagnostic.

**(b) MS.** Helpful: the molecular weight rises by 2 (154 → 156), a small but real shift.

**(c) Optical rotation.** Useless: ketone and alcohol are both achiral (each has a mirror plane), so the rotation is zero before and after.

**(d) Ranking.** From (a)-(c): **IR > MS > polarimetry**.

**MCAT Strategy:** Before reaching for stereochemical tools, check whether the substrate is even chiral. Passage writers plant achiral substrates to punish reflexive "measure the rotation" answers.

**Problem 3.** An unknown C8H8O shows C=O at 1685, aromatic signals at 7.4-7.9 (5H) and a 3H singlet at 2.6 ppm. A student concludes "amide, because the C=O is below 1700."

- **(a)** What is wrong with the student's conclusion?
- **(b)** How many degrees of unsaturation are there, and what uses them?
- **(c)** What explains a C=O at 1685?
- **(d)** What is the compound?

**(a) No nitrogen.** The formula contains no nitrogen, so an amide is impossible. Formula constraints outrank band positions.

**(b) Formula.** $\\text{DoU} = (16 + 2 - 8)/2 = 5$: a benzene ring plus one C=O.

**(c) Conjugation.** 1685 is a KETONE C=O lowered ~30 wavenumbers (from ~1715) by conjugation with the ring.

**(d) The compound.** A conjugated ketone from (c) on a monosubstituted ring (5H), plus a 3H singlet at 2.6 (a methyl alpha to the C=O): **acetophenone**, $C_6H_5COCH_3$.

**MCAT Strategy:** Conjugation-lowered ketones (1680-1690) overlap the amide window. Resolve the ambiguity with the formula (any N?) and with N-H stretches (amides that have N-H show it; acetophenone shows none).

**Problem 4.** An unknown C10H14 has $M^{+}$ = 134 and a base peak at m/z 91. $^1H$ NMR: 7.2 (5H, m), 2.5 (2H, triplet), 1.6 (2H, m), 1.3 (2H, m), 0.9 (3H, triplet).

- **(a)** What is lost in going from m/z 134 to 91?
- **(b)** What ion is m/z 91?
- **(c)** What carbon skeleton do the NMR signals show?
- **(d)** What is the compound?

**(a) The loss.** $134 - 91 = 43$: loss of $C_3H_7$, a propyl radical.

**(b) m/z 91.** The famous **tropylium/benzyl cation**, $C_7H_7^{+}$: the signature of a benzylic cleavage.

**(c) Skeleton.** A monosubstituted ring (5H at 7.2) plus an unbranched four-carbon chain: a CH3 triplet at 0.9, a benzylic CH2 triplet at 2.5 and two CH2 multiplets between them.

**(d) The compound.** **n-Butylbenzene**, $C_6H_5CH_2CH_2CH_2CH_3$: breaking the bond between the benzylic CH2 and the next chain carbon loses the propyl from (a) and leaves the stabilized $C_7H_7^{+}$ from (b).

**MCAT Strategy:** m/z 91 in an alkylbenzene's mass spectrum = benzylic cleavage. Fragmentation follows cation stability, so the strongest peaks mark the most stable cations: the same hierarchy you learned for SN1.`
    },
    {
      id: 'spect4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Formula first.** Get $\\text{DoU} =(2C + 2 + N - H - X)/2$ from $M^{+}$ or the passage; 4 or more suggests a benzene ring.
- **One tool per question.** IR = functional groups, $^1H$ NMR = H arrangement, $^{13}C$ = carbons, MS = mass, UV-Vis = conjugation.
- **Watch what changes.** Confirm a reaction by the band or signal that appears or vanishes, such as O-H lost and C=O gained.
- **Stereoisomers and spectra.** Enantiomers give identical spectra (use polarimetry); diastereomers can be told apart by NMR.

**Common traps**

- **Rotation on an achiral product.** If substrate and product both have a mirror plane, rotation is zero before and after.
- **Confirming with a band that persists.** Aromatic C-H survives benzyl alcohol → benzaldehyde; cite the O-H lost and C=O gained.
- **Every low C=O an amide.** A conjugated ketone absorbs near 1685 too; with no N in the formula, an amide is impossible.
- **Highest m/z as M⁺.** Alcohols and branched compounds fragment readily, so the true molecular ion can be weak or missing.`
    }
  ]
};
