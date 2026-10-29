// Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW
export const mcatMicrobialGeneticsPart3Data = {
  topicSlug: 'mcat-microbiology-genetics-mcat',
  sections: [
    {
      id: 'mg3-intro',
      type: 'text' as const,
      content: `# Microbial Genetics

**Part 3 of 4 — Mobile Elements, Defense & Regulation**

### Transposable Elements ("Jumping Genes")

Transposons are DNA segments that move from one site to another **within** a cell: chromosome to plasmid, plasmid to plasmid, or to a new chromosomal site. Plasmids move genes BETWEEN cells; transposons move them between DNA molecules inside one cell. Stacked together, the two spread resistance.

- **Insertion sequence (IS):** the simplest element, a transposase gene flanked by short **inverted repeats** that the transposase recognizes as the element's ends.
- **Composite transposon:** cargo genes, often antibiotic resistance, flanked by two IS elements. The flanking IS elements supply transposase and ends, so the whole block hops as one unit.
- **Cut-and-paste (conservative) transposition** excises the element and reinserts it elsewhere, leaving a break at the donor site. **Replicative transposition** copies it, leaving one copy behind and adding one at the target.

<!-- yield:low -->
- Target-site duplication: the transposase makes staggered cuts in the target, and host repair fills the gaps, so short direct repeats of target DNA flank every inserted element.
- Replicative transposition passes through a cointegrate (donor and target fused) that a resolvase separates; Tn10 (tetracycline resistance) is the classic composite transposon.
- Integrons capture circular resistance-gene cassettes with an integrase and stack them behind one shared promoter, often riding on transposons and plasmids.
- Barbara McClintock discovered transposable elements in maize, decades before they were found in bacteria.
<!-- /yield -->

**Genetic consequences of an insertion:**

1. **Insertional inactivation:** landing in a coding sequence knocks the gene out. Transposons are a natural mutagen, and labs use them for insertional mutagenesis, since the resistance marker makes every insertion selectable.
2. **Polar effects:** an insertion in an upstream gene of an operon can silence the downstream genes of the same polycistronic transcript, though those genes are intact.
3. **Mobilization:** a resistance gene can move from the chromosome onto a conjugative plasmid, then leave the cell by conjugation.
4. **Rearrangement:** recombination between two copies of an IS element can delete, invert or fuse DNA, and IS homology is how F integrates to form an Hfr (Part 2).

### Restriction-Modification: Innate Defense

A **restriction endonuclease** cuts DNA at a short recognition sequence, often a palindrome (EcoRI cuts GAATTC). Its partner **methyltransferase** methylates the same sequence in the host's own DNA, and the enzyme cuts only **unmethylated** sites. Incoming phage DNA, unmethylated, is cut and degraded; the chromosome is spared. A rare phage genome that is methylated before it is cut escapes, and its progeny, now modified, infect that strain efficiently until they meet a strain with a different system. The system recognizes any DNA carrying the site and keeps no memory of past infections: it is innate. Its enzymes became the cutting tools of molecular cloning.

### CRISPR-Cas: Adaptive Immunity in a Single Cell

A **CRISPR array** is a row of identical repeats separated by unique **spacers**, each a short fragment copied from a past invader (phage or plasmid).

1. **Acquisition:** after surviving an infection, the cell inserts a new spacer from the invader's DNA into the array.
2. **Expression:** the array is transcribed and cut into short CRISPR RNAs, one spacer each.
3. **Interference:** each RNA guides a Cas nuclease to DNA with the matching sequence, which is cleaved.

The memory is **acquired, sequence-specific and heritable**: daughter cells inherit the array, so the immunity is passed on. That makes CRISPR adaptive, unlike restriction-modification. Reprogramming the guide RNA turned it into a genome-editing tool (Biotechnology lesson).

<!-- yield:low -->
- Targets must sit next to a short PAM motif that the Cas protein recognizes. The array's own spacers lack a PAM, which keeps the cell from cutting its own CRISPR locus.
<!-- /yield -->

### Operons: Regulation You Can Map with Mutants

An **operon** is a set of genes transcribed from one promoter into one polycistronic mRNA, controlled by an **operator** next to the promoter.

**lac (inducible, catabolic):** lacZ (β-galactosidase), lacY (permease) and lacA, with the **lacI** repressor gene expressed from its own promoter.

- **Negative control:** the repressor binds the operator; **allolactose**, made from lactose, binds the repressor and releases it.
- **Positive control:** low glucose → high cAMP → the **CAP-cAMP** complex binds near the promoter and recruits RNA polymerase.

| | Lactose absent | Lactose present |
|---|---|---|
| **Glucose present** | OFF (repressor bound) | Low (repressor off, but little CAP-cAMP) |
| **Glucose absent** | OFF (repressor still bound) | **HIGH** (repressor off + CAP-cAMP on) |

**Mutant logic** (merodiploids from Part 2 test which elements act in cis and which in trans):

| Genotype | Without lactose | Conclusion |
|----------|-----------------|------------|
| lacI$^-$ | Constitutive | No repressor |
| lacI$^-$ / F′ lacI$^+$ | Inducible (normal) | The repressor diffuses and acts in **trans**; lacI$^-$ is recessive |
| lacO$^c$ (operator cannot bind repressor) | Constitutive | The site is broken, so repressor is present but has nowhere to bind |
| lacO$^c$ lacZ$^+$ / F′ lacO$^+$ lacZ$^-$ | Constitutive | O$^c$ is **cis**-dominant: it controls only the genes on its own DNA |
| lacO$^c$ lacZ$^-$ / F′ lacO$^+$ lacZ$^+$ | Inducible | The constitutive operator drives only a dead lacZ |

A cell that cannot make cAMP (no adenylyl cyclase) expresses lac poorly even with lactose and no glucose; adding cAMP rescues it, while a CAP-deficient mutant is not rescued.

<!-- yield:low -->
- The lacI$^s$ "super-repressor" cannot bind inducer: the operon is uninducible, and lacI$^s$ is dominant over lacI$^+$.
<!-- /yield -->

**trp (repressible, anabolic):** the trp repressor is inactive alone. **Tryptophan is the corepressor**: when it is abundant it binds the repressor, which then binds the operator and shuts the operon off. The product turns off its own synthesis.

<!-- yield:low -->
- Attenuation adds a second brake: ribosomes translating a leader peptide rich in Trp codons decide, by stalling or not, whether the leader RNA folds into a terminator hairpin.
<!-- /yield -->

> Catabolic operons are inducible (the substrate turns them ON); anabolic operons are repressible (the product turns them OFF).`
    },
    {
      id: 'mg3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Transposons, Defense & Operons** 🎯`,
      exercise: {
        questions: [
          {
            question: `A gene is inactivated by a large insertion that also makes the cell kanamycin-resistant. The insertion is flanked at both ends by copies of the same insertion sequence. The insertion is best identified as:`,
            options: [`A prophage carrying a lysogenic toxin gene`, `A composite transposon whose cargo is a resistance gene`, `An integrated F plasmid that created an Hfr strain`, `A captured CRISPR spacer from a resistance plasmid`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `A resistance gene flanked by two copies of an insertion sequence is the structure of a composite transposon, and its insertion knocks out the gene it lands in. A prophage brings phage genes, not a resistance block between IS copies; an integrated F gives an Hfr without kanamycin resistance; CRISPR spacers are short fragments that encode no resistance.`
          },
          {
            question: `A transposon inserts into the first gene of a three-gene operon. The cell loses the products of all three genes, although the second and third genes are intact. This is best explained by:`,
            options: [`Deletion of the second and third genes by the transposase`, `Repressor binding to the transposon's inverted repeats`, `A polar effect on downstream genes of the transcript`, `Recombination moving the operon onto a plasmid`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `All three genes share one polycistronic transcript, so an insertion near its start can block expression of everything downstream: a polar effect. The stem says the downstream genes are intact, which rules out deletion, and neither repressor binding to the element's ends nor a move to a plasmid would silence intact genes this way.`
          },
          {
            question: `A phage grown in strain A infects strain B, and its DNA is cut, while B's own chromosome, which contains the same recognition sequences, stays intact. B's chromosome is protected because:`,
            options: [`B methylates its own recognition sites`, `B keeps its restriction enzyme outside the cytoplasm`, `B's CRISPR array holds spacers matching its genome`, `B's chromosome is too supercoiled to be reached`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The methyltransferase of a restriction-modification system marks the host's own sites, and the restriction enzyme cuts only unmethylated copies, so foreign DNA is cut and the chromosome is not. The enzyme works inside the cell, spacers matching the cell's own genome would make it attack itself, and supercoiling does not shield specific sites.`
          },
          {
            question: `A bacterium survives a phage attack and is afterward resistant to that phage but not to an unrelated one, and its daughter cells inherit the resistance. Its CRISPR array now has one extra spacer. The new spacer most likely:`,
            options: [`Encodes a repressor that blocks the lytic genes of every phage`, `Methylates the phage DNA so the host can recognize it as foreign`, `Matches the phage genome and guides a Cas nuclease to cut it`, `Silences the receptor gene that this phage uses to attach`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `A spacer is a copied fragment of the invader. Its RNA guides a Cas nuclease to the matching phage DNA, which explains immunity that is specific to that phage and inherited with the array. A repressor blocking every phage would not be specific, methylation protects DNA rather than marking it for attack, and the spacer works on the phage's DNA, not on the host's receptor gene.`
          },
          {
            question: `E. coli is grown with lactose present. Expression of the lac operon is highest when:`,
            options: [`Glucose is present, so CAP-cAMP binds and the repressor is released`, `Glucose is absent, so cAMP is low and the repressor stays bound`, `Glucose is absent, so CAP-cAMP is active and the repressor is released`, `Glucose is present, so cAMP rises and the repressor leaves the operator`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Lactose (as allolactose) pulls the repressor off the operator, and low glucose raises cAMP so that CAP-cAMP recruits RNA polymerase. Both conditions together give maximal transcription. Glucose lowers cAMP rather than raising it, and when glucose is absent cAMP is high, not low.`
          },
          {
            question: `A merodiploid has lacO$^c$ lacZ$^+$ on its chromosome and lacO$^+$ lacZ$^-$ on an F′; both copies have wild-type lacI. Without lactose, β-galactosidase is:`,
            options: [`Made constitutively from the chromosomal copy`, `Not made, because the F′ repressor binds both operators`, `Made only after induction, as in a wild-type cell`, `Not made, because lacZ$^-$ is dominant over lacZ$^+$`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The O$^c$ operator cannot bind repressor and controls only the genes on its own DNA (cis). It sits next to the working lacZ$^+$, so enzyme is made without inducer. The repressor is present, but it cannot bind an O$^c$ operator, and the lacZ$^-$ copy simply makes no active enzyme rather than suppressing the other copy.`
          },
          {
            question: `When tryptophan is abundant, the trp operon is shut off because tryptophan:`,
            options: [`Binds the operator directly and blocks RNA polymerase`, `Releases the trp repressor from the operator`, `Binds the trp repressor, enabling it to bind the operator`, `Inactivates CAP so polymerase cannot be recruited`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Tryptophan is a corepressor: the trp repressor is inactive on its own, and binding tryptophan lets it bind the operator and block transcription. Releasing a repressor is how an inducer works (lac), tryptophan does not bind DNA itself, and CAP is not the control point of trp.`
          }
        ]
      }
    },
    {
      id: 'mg3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Transposons move DNA between molecules inside a cell; plasmids move it between cells
- IS element = transposase + inverted repeats; composite transposon = cargo (often resistance) between two IS elements
- Cut-and-paste leaves the donor site empty; replicative leaves a copy behind
- Insertion consequences: gene knockout (natural and lab mutagen), polar effects on downstream operon genes, mobilizing resistance onto plasmids, rearrangements (and F integration → Hfr)
- Restriction-modification = innate: the methyltransferase marks host sites, the endonuclease cuts unmethylated foreign DNA (EcoRI: GAATTC)
- CRISPR-Cas = adaptive: spacers from past invaders → guide RNAs → Cas cuts matching DNA; heritable, sequence-specific
- lac = inducible (allolactose releases repressor) + positive control (CAP-cAMP when glucose is low): HIGH only with lactose present and glucose absent
- Merodiploids: lacI$^-$ is recessive (the repressor acts in trans); lacO$^c$ is cis-dominant
- trp = repressible: tryptophan is the corepressor that activates the repressor

<!-- yield:low -->
- Low-yield extras: target-site duplications flank inserted elements; replicative transposition via a cointegrate and resolvase; Tn10; integrons; McClintock's maize discovery; the PAM motif; the lacI$^s$ super-repressor; trp attenuation
<!-- /yield -->`
    },
    {
      id: 'mg3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Mobile DNA and Regulation

<details>
<summary><b>Example 1: A transposon mutagenesis screen</b></summary>

**Question:** A plasmid that cannot replicate in E. coli carries a transposon with a kanamycin-resistance gene. After it is introduced, cells are plated on kanamycin, and the survivors are replica-plated onto minimal medium. What do the kanamycin plates select, what do the minimal plates find, and why can one insertion knock out three enzymes?

**Solution:**
1. The plasmid cannot replicate, so a cell stays kanamycin-resistant only if the transposon hopped into its chromosome. The kanamycin plates select for insertions.
2. Insertions land at many sites. Colonies that fail on minimal medium (Part 1 replica logic) carry an insertion in a biosynthetic gene: auxotrophs.
3. The resistance gene now tags the mutated gene, so it can be mapped or cloned by selecting for kanamycin resistance.
4. If the insertion hit the first gene of an operon, a polar effect can also silence the downstream genes, so one insertion can cost a whole pathway.

**MCAT Strategy:** Transposon = mutagen + built-in selectable tag. A multi-gene loss from one insertion points to an operon and a polar effect.
</details>

<details>
<summary><b>Example 2: Phage plating depends on its last host</b></summary>

**Question:** A phage stock grown on strain X forms many plaques on X but very few on Y. Phage picked from one of those rare plaques on Y now forms many plaques on Y but few on X. Explain.

**Solution:**
1. Strains X and Y carry different restriction-modification systems.
2. Phage grown on X carry X's methylation pattern, so X's enzyme spares them while Y's enzyme cuts most of them. Rare genomes are methylated by Y before they are cut, and they escape.
3. Progeny from that escape carry Y's methylation, not X's, so they now grow well on Y and are restricted by X.
4. The phage's sequence never changed: its protection is a methylation mark set by the last host it grew in, not a mutation.

**MCAT Strategy:** A change that flips back after one passage through a different host is modification, not mutation. A mutation would persist on every host.
</details>

<details>
<summary><b>Example 3: Predict lac expression from genotype</b></summary>

**Question:** Predict β-galactosidase levels with no lactose and with lactose (no glucose) for: (a) lacI$^-$ / F′ lacI$^+$; (b) lacO$^c$ lacZ$^-$ / F′ lacO$^+$ lacZ$^+$; (c) a strain that cannot make cAMP.

**Solution:**
1. (a) The F′ makes repressor that diffuses to both operators (trans), so expression is normal and inducible: off, then on.
2. (b) The constitutive operator controls only its own, dead lacZ. The working lacZ$^+$ sits behind a normal operator, so expression is inducible: off, then on.
3. (c) The repressor is released by lactose, but without cAMP there is no CAP activation: off, then low. Adding cAMP to the medium restores high induction.
4. Rule for every merodiploid: proteins (repressor, CAP) act in trans; DNA sites (operator, promoter) act in cis.

**MCAT Strategy:** Locate each mutation: is it a gene for a diffusible product, or a site on the DNA? That answer alone predicts the merodiploid.
</details>`
    }
  ]
};
