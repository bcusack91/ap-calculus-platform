export const mcatBiotechnologyPart2Data = {
  topicSlug: 'mcat-molecular-biology-biotechnology-mcat',
  sections: [
    {
      id: 'biot2-intro',
      type: 'text' as const,
      content: `# Biotechnology for the MCAT

**Part 2 of 4 — Reading DNA: Gels, Blots & Sequencing**

### Gel Electrophoresis — The Universal Readout

- DNA's phosphate backbone gives uniform negative charge, so an electric field pulls all fragments toward the **positive electrode (anode)**; the agarose mesh sieves them so **small fragments run FAR, large fragments stay near the wells**.
- Migration distance falls roughly linearly as log(size) rises — a ladder of standards calibrates the gel.
- Proteins need a trick first: **SDS** coats them with uniform negative charge and unfolds them, so SDS-PAGE separates by size alone. (Native gels and isoelectric focusing separate by shape/charge — know which gel answers which question.)

### The Blot Family — Specificity via Probes

| Blot | Detects | Probe | Typical question |
|------|---------|-------|------------------|
| **Southern** | DNA | Labeled complementary DNA | Gene present? How many copies? Restriction-site change? |
| **Northern** | RNA | Labeled complementary DNA/RNA | Is the gene transcribed here? Transcript size/splicing? |
| **Western** | Protein | **Antibody** | Is the protein made? What size? How much? |

Mnemonic: SNoW DRoP (Southern-DNA, Northern-RNA, Western-Protein). A blot = electrophoresis + transfer to membrane + probe; the probe's specificity is what turns a smear of molecules into one interpretable band.

- **RFLP analysis** (Southern application): a mutation that creates/destroys a restriction site changes fragment sizes — sickle cell's mutation famously destroys a restriction site in the beta-globin gene, so the mutant allele shows one LARGER band. Genotyping by band pattern: homozygotes show one pattern, heterozygotes show BOTH.

<!-- yield:low -->
- The enzyme whose site the sickle mutation destroys is MstII.
<!-- /yield -->

### Sanger Sequencing — Chain Termination as Information

- The reaction: template, ONE primer, polymerase, all four dNTPs, PLUS a small fraction of **dideoxynucleotides (ddNTPs)** — no 3'-OH, so incorporation TERMINATES the chain.
- Nucleoside-analog drugs (e.g., AZT, acyclovir) use the same missing-3'-OH logic: once incorporated, the chain cannot be extended.
- Each termination event marks the position of that base; run the nested fragment family on a high-resolution gel and read bands **from the bottom (shortest) up** — that is the new strand 5' to 3'.
- The read is the COMPLEMENT of the template: to report the template, reverse-complement your read. Modern automation = four fluorescent ddNTP colors, one capillary lane.
- **Next-generation sequencing** (conceptual level): massively parallel short reads, assembled by overlap — cheaper per base, used for whole genomes/exomes and RNA-seq (sequence cDNA to census the whole transcriptome, replacing microarrays).

### Reading Band Patterns Like the Exam Wants

- MORE bands than expected in a digest: extra restriction site (polymorphism) or partial digestion.
- Band SHIFT on a northern: alternative splicing or different transcript; on a western: PTM (phosphorylation slows migration slightly), cleavage (smaller), or glycosylation (larger, fuzzy).
- Signal in DNA (Southern) but absent in RNA (northern): gene present but not transcribed in this tissue — a regulation story, not a deletion.`
    },
    {
      id: 'biot2-worked',
      type: 'text' as const,
      content: `### Worked Example — One Family, Three Blots

**Problem 1.** For an autosomal recessive disease gene, the normal allele cut with enzyme X gives 3 kb + 2 kb bands on a Southern blot probed within the region; the disease allele has lost the internal X site, giving one 5 kb band. Unaffected parents have one affected and one unaffected child.

- **(a)** What band pattern does the affected child show?
- **(b)** What are the parents' genotypes, and what pattern does each show?
- **(c)** What patterns could the unaffected sibling show, and how likely is each?

**(a) Affected child.** Two disease alleles: the 5 kb band only.

**(b) Parents.** An affected child needs a disease allele from each parent, so both are carriers: 5 kb AND 3 kb AND 2 kb — all three bands (the normal allele contributes 3+2, the mutant contributes 5).

**(c) Unaffected sibling.** With two carrier parents, either three bands (carrier, probability 2/3 among unaffected offspring) or two bands (3+2 only; homozygous normal, probability 1/3). Genotype-to-band-pattern translation plus Mendelian probability — a classic MCAT fusion.

**Problem 2.** In the affected child's tissue, a northern blot shows normal-size, normal-abundance mRNA from this gene. A western blot shows the protein at normal size but at one-tenth the normal amount.

- **(a)** What does the northern blot rule out?
- **(b)** What does the normal protein size rule out?
- **(c)** What mechanism fits normal mRNA but 10-fold less protein?
- **(d)** Which experiment would confirm that mechanism?

**(a) Not a transcription defect.** The mutation does not prevent transcription or grossly alter the transcript — consistent with the lost restriction site being a point mutation (missense) rather than a large deletion. The effect must appear at the protein level or beyond.

**(b) Not truncation.** A normal-size protein argues against a premature stop.

**(c) Post-translational loss.** A missense change that destabilizes folding, with quality-control degradation removing most molecules (the deltaF508 logic from the translation lesson).

**(d) Pulse-chase.** Normal pulse labeling with fast decay during the chase would confirm accelerated turnover over reduced synthesis.

**Problem 3.** Sanger sequencing of the affected child's allele uses a primer just upstream of the suspected codon. The read (new strand, bottom to top) begins 5'-CACGTG...-3'; the normal read begins 5'-CACGAG...-3'.

- **(a)** At which position do the two reads differ, and how?
- **(b)** What base change does that imply on the template strand?
- **(c)** If the new strand matches the coding strand and the reading frame starts at its first base, what codon change results?

**(a) Align the reads.** Position 5: A in the normal read, T in the patient's read.

**(b) Template change.** The read is the NEW strand, complementary to the template: the template base changed from T (pairs with A) to A (pairs with T).

**(c) Codon change.** CAC GAG becomes CAC GTG: CAC (His) is unchanged and GAG (Glu) becomes GTG (Val), a missense change. Report the DNA change in the passage's coding convention before translating — read strand vs template vs coding is where sequencing questions are won or lost.`
    },
    {
      id: 'biot2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gels, Blots & Sequencing** 🎯`,
      exercise: {
        questions: [
          {
            question: `On an agarose gel, DNA fragments migrate toward the positive electrode with the smallest fragments traveling farthest because:`,
            options: [`Small fragments carry more negative charge per base`, `The gel matrix retards large fragments more`, `Large fragments are held back by bound buffer cations`, `Small fragments are denatured into single strands`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Charge-to-mass ratio is constant for DNA (one phosphate per nucleotide), so the field alone cannot separate sizes — the agarose mesh does, acting as a sieve that big molecules thread slowly. Migration distance falls roughly linearly as log(size) rises, hence ladders for calibration. The same principle transfers to SDS-PAGE, where SDS must first impose the uniform charge that DNA has naturally. If a question removes the gel (free solution), size separation disappears — a favorite conceptual twist.`
          },
          {
            question: `A researcher wants to know whether a specific gene is transcribed in cardiac tissue. The most direct technique is:`,
            options: [`A Southern blot of cardiac tissue genomic DNA`, `A western blot with an antibody to the gene's protein`, `A northern blot or RT-qPCR of cardiac RNA`, `A restriction digest of the gene cloned from heart tissue`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Match the molecule to the question: transcription produces RNA, so measure RNA — northern blot or RT-qPCR. A Southern only reports the gene's presence in the genome (true of nearly every cell regardless of expression), and a western reports protein, which can diverge from transcription via translational control or protein turnover. The exam repeatedly tests whether you distinguish gene present / gene transcribed / protein made as three separate questions requiring three techniques (SNoW DRoP).`
          },
          {
            question: `In Sanger sequencing, dideoxynucleotides terminate chain elongation because they lack:`,
            options: [`A 5' phosphate group needed to enter the active site`, `A nitrogenous base to pair with the template`, `The 2' hydroxyl needed for phosphodiester formation`, `The 3' hydroxyl needed to add the next nucleotide`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Polymerization is a 3'-OH attacking the incoming dNTP's alpha-phosphate; remove that hydroxyl (di-deoxy: missing at both 2' AND 3') and the chain is a dead end. Because ddNTPs are a small minority, termination happens at random instances of each base, generating the nested fragment set whose lengths spell the sequence. The same logic — no usable 3'-OH — underlies the chain-terminating drugs acyclovir and AZT — one mechanism, three exam costumes. ddNTPs retain the triphosphate and base; those options test careless reading.`
          },
          {
            question: `A point mutation CREATES a new restriction site inside a 6 kb fragment, splitting it into 4 kb + 2 kb. On a Southern blot probed across the whole 6 kb region, a heterozygote shows:`,
            options: [`Both the 6 kb band and the 4 kb and 2 kb bands`, `Only the single 6 kb normal fragment`, `Only the 4 kb and 2 kb mutant fragments`, `One intermediate-sized hybrid fragment`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Each allele reports independently: the normal chromosome lacks the new site and gives the uncut 6 kb fragment, while the mutant chromosome is cut into 4 kb and 2 kb — so a heterozygote displays the union of both patterns. This is the sickle-cell RFLP logic run the other way (there the mutation destroys a site, giving one larger fragment): whether a mutation adds or removes a cut site, homozygotes show one pattern and carriers show both. Fragments never fuse into an intermediate size, because each DNA molecule is either cut at the site or not.`
          },
          {
            question: `Compared with a microarray, RNA-seq (sequencing all cDNA from a sample) has the key advantage that it:`,
            options: [`Requires no reverse transcription step at all`, `Measures protein levels in the sample directly`, `Detects transcripts without predesigned probes`, `Works only for genes shorter than 1 kb`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `A microarray can only interrogate sequences someone printed on the chip — hybridization to KNOWN probes — while sequencing reads whatever is there, revealing unannotated transcripts, fusion mRNAs, and exon-level splice differences, with counting-based quantification that does not saturate like hybridization signal. Both start from cDNA (reverse transcription still required — the no-reverse-transcription claim is false). Neither touches protein; that remains the western/mass-spec domain. Probe-dependent vs probe-free is the tested contrast.`
          }
        ]
      }
    },
    {
      id: 'biot2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Gels sort by size.** DNA's uniform negative charge pulls it to the anode; the gel sieves, so small fragments run farthest.
- **SNoW DRoP.** Southern = DNA, northern = RNA, western = protein; nucleic-acid probes for the first two, antibodies for the third.
- **RFLP genotyping.** A lost cut site gives fewer, larger fragments; heterozygotes show both allele patterns.
- **Sanger chain termination.** ddNTPs lack the 3'-OH; read the gel bottom-up to get the new strand 5' to 3'.

**Common traps**

- **Charge separating DNA.** Charge per base is constant for DNA; the gel matrix, not the charge, separates fragments by size.
- **Southern for expression.** A Southern shows only that the gene is present; transcription needs a northern blot or RT-qPCR.
- **Reporting the read as template.** The Sanger read is the template's complement; reverse-complement it before reporting the template.
- **Discordant blots as error.** DNA present but no RNA means regulation, not deletion; a shifted western band can mean a PTM or cleavage.

<!-- yield:low -->
**Low-yield extras**

- The sickle mutation destroys an MstII site.
<!-- /yield -->`
    }
  ]
};
