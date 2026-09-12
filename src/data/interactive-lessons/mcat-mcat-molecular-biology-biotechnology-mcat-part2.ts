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
- Migration distance scales with log(size) — a ladder of standards calibrates the gel.
- Proteins need a trick first: **SDS** coats them with uniform negative charge and unfolds them, so SDS-PAGE separates by size alone. (Native gels and isoelectric focusing separate by shape/charge — know which gel answers which question.)

### The Blot Family — Specificity via Probes

| Blot | Detects | Probe | Typical question |
|------|---------|-------|------------------|
| **Southern** | DNA | Labeled complementary DNA | Gene present? How many copies? Restriction-site change? |
| **Northern** | RNA | Labeled complementary DNA/RNA | Is the gene transcribed here? Transcript size/splicing? |
| **Western** | Protein | **Antibody** | Is the protein made? What size? How much? |

Mnemonic: SNoW DRoP (Southern-DNA, Northern-RNA, Western-Protein). A blot = electrophoresis + transfer to membrane + probe; the probe's specificity is what turns a smear of molecules into one interpretable band.

- **RFLP analysis** (Southern application): a mutation that creates/destroys a restriction site changes fragment sizes — sickle cell's mutation famously destroys an MstII site, so the mutant allele shows one LARGER band. Genotyping by band pattern: homozygotes show one pattern, heterozygotes show BOTH.

### Sanger Sequencing — Chain Termination as Information

- The reaction: template, ONE primer, polymerase, all four dNTPs, PLUS a small fraction of **dideoxynucleotides (ddNTPs)** — no 3'-OH, so incorporation TERMINATES the chain (the same chemistry as acyclovir/AZT).
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

**Passage-style problem.** A recessive disease gene is studied in a family. The normal allele cut with enzyme X yields fragments of 3 kb + 2 kb on a Southern blot probed within the region; the disease allele has lost the internal X site, yielding a single 5 kb band. Both parents are unaffected; they have one affected child and one unaffected child.

**Question 1 — Predict each family member's Southern pattern.** The affected child (two disease alleles): 5 kb only. Both parents must be carriers: 5 kb AND 3 kb AND 2 kb — all three bands (each parent has one normal allele contributing 3+2 and one mutant contributing 5). The unaffected sibling: either three bands (carrier, probability 2/3 among unaffected offspring) or two bands (3+2 only; homozygous normal, probability 1/3). Genotype-to-band-pattern translation plus Mendelian probability in one question — a classic MCAT fusion.

**Question 2 — A northern blot of the affected child's tissue shows normal-size, normal-abundance mRNA. What does this add?** The mutation does not prevent transcription or grossly alter the transcript — consistent with the lost restriction site being a point mutation (missense) rather than a large deletion. The lesion's effect must appear at the protein level or beyond.

**Question 3 — A western blot shows the affected child's protein at normal size but reduced 10-fold in amount. Propose a mechanism.** Normal size argues against truncation; reduced quantity with normal mRNA points to post-translational loss — a missense change that destabilizes folding, with quality-control degradation removing most molecules (the deltaF508 logic from the translation lesson). A pulse-chase (normal pulse labeling, fast chase decay) would confirm accelerated turnover over reduced synthesis.

**Question 4 — Sanger sequencing of the affected child's allele uses a primer just upstream of the suspected codon. The lane read (new strand, bottom to top) begins 5'-CACGTG...-3' where the normal read begins 5'-CACGAG...-3'. Name the DNA change.** Align the reads: position 5 shows A-to-T... careful — the read is the NEW strand; the template base changed from T (pairs A) to A (pairs T). Report it on the coding convention the passage uses, and only then translate to an amino acid change. The orientation discipline — read strand vs template vs coding — is where sequencing questions are won or lost.`
    },
    {
      id: 'biot2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gels, Blots & Sequencing** 🎯`,
      exercise: {
        questions: [
          {
            question: `On an agarose gel, DNA fragments migrate toward the positive electrode with the smallest fragments traveling farthest because:`,
            options: [`Small fragments carry more negative charge per base`, `The gel matrix retards large fragments more`, `Large fragments carry a net positive charge`, `Small fragments are denatured into single strands`],
            correctAnswer: 1,
            explanation: `Charge-to-mass ratio is constant for DNA (one phosphate per nucleotide), so the field alone cannot separate sizes — the agarose mesh does, acting as a sieve that big molecules thread slowly. Distance tracks log(size), hence ladders for calibration. The same principle transfers to SDS-PAGE, where SDS must first impose the uniform charge that DNA has naturally. If a question removes the gel (free solution), size separation disappears — a favorite conceptual twist.`
          },
          {
            question: `A researcher wants to know whether a specific gene is transcribed in cardiac tissue. The most direct technique is:`,
            options: [`A Southern blot of cardiac genomic DNA`, `A western blot with an antibody to the gene's protein`, `A northern blot or RT-qPCR of cardiac RNA`, `A restriction digest of the cloned gene`],
            correctAnswer: 2,
            explanation: `Match the molecule to the question: transcription produces RNA, so measure RNA — northern blot or RT-qPCR. A Southern only reports the gene's presence in the genome (true of nearly every cell regardless of expression), and a western reports protein, which can diverge from transcription via translational control or protein turnover. The exam repeatedly tests whether you distinguish gene present / gene transcribed / protein made as three separate questions requiring three techniques (SNoW DRoP).`
          },
          {
            question: `In Sanger sequencing, dideoxynucleotides terminate chain elongation because they lack:`,
            options: [`A 5' phosphate group needed to enter the active site`, `A nitrogenous base to pair with the template`, `The 2' hydroxyl needed for phosphodiester formation`, `The 3' hydroxyl needed to add the next nucleotide`],
            correctAnswer: 3,
            explanation: `Polymerization is a 3'-OH attacking the incoming dNTP's alpha-phosphate; remove that hydroxyl (di-deoxy: missing at both 2' AND 3') and the chain is a dead end. Because ddNTPs are a small minority, termination happens at random instances of each base, generating the nested fragment set whose lengths spell the sequence. Chemically identical logic underlies acyclovir and AZT (chain-terminating drugs) — one mechanism, three exam costumes. ddNTPs retain the triphosphate and base; those options test careless reading.`
          },
          {
            question: `The sickle cell mutation destroys an MstII restriction site in the beta-globin gene. On a Southern blot of MstII-digested DNA probed at that locus, a heterozygous carrier shows:`,
            options: [`Both the normal and the mutant band patterns`, `Only the single larger mutant fragment`, `Only the two smaller normal fragments`, `One intermediate-sized hybrid fragment`],
            correctAnswer: 0,
            explanation: `Each allele reports independently: the normal chromosome still carries the internal MstII site (two fragments), while the mutant chromosome, lacking it, yields one fused larger fragment — a heterozygote therefore displays the union of both patterns. This RFLP logic is direct genotyping: homozygotes show one pattern or the other, carriers show both. Generalize it — ANY mutation that adds or removes a cut site is detectable by fragment-size change, no sequencing required.`
          },
          {
            question: `Compared with a microarray, RNA-seq (sequencing all cDNA from a sample) has the key advantage that it:`,
            options: [`Requires no reverse transcription step at all`, `Measures protein levels in the sample directly`, `Detects transcripts without predesigned probes`, `Works only for genes shorter than 1 kb`],
            correctAnswer: 2,
            explanation: `A microarray can only interrogate sequences someone printed on the chip — hybridization to KNOWN probes — while sequencing reads whatever is there, revealing unannotated transcripts, fusion mRNAs, and exon-level splice differences, with counting-based quantification that does not saturate like hybridization signal. Both start from cDNA (reverse transcription still required — option A is false). Neither touches protein; that remains the western/mass-spec domain. Probe-dependent vs probe-free is the tested contrast.`
          }
        ]
      }
    },
    {
      id: 'biot2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Electrophoresis: uniform negative DNA pulled to the anode; the GEL separates by size (small runs far, distance ~ log size); SDS gives proteins the same uniform charge for SDS-PAGE
- SNoW DRoP: Southern = DNA (gene present, copy number, RFLP), northern = RNA (transcribed? transcript size/splicing), western = protein (made? size? amount?) — probes are DNA/RNA for the first two, antibodies for the third
- RFLP: site destroyed = fewer, larger fragments; heterozygotes show BOTH allele patterns — genotyping from band patterns plus Mendelian probability
- Sanger: ddNTPs lack the 3'-OH, terminating chains at random positions of one base; read the gel bottom-up = new strand 5' to 3'; the read is the template's complement — reverse-complement before reporting
- Same missing-3'-OH chemistry: ddNTPs, acyclovir, AZT
- NGS/RNA-seq: probe-free, massively parallel, finds novel transcripts and splice variants; microarrays are hybridization to known probes
- Interpretation habits: extra bands = extra site or partial digest; DNA present but no RNA = regulation, not deletion; western shifts = PTM, cleavage, or glycosylation`
    }
  ]
};
