export const mcatTranscriptionPart2Data = {
  topicSlug: 'mcat-molecular-biology-transcription-mcat',
  sections: [
    {
      id: 'txn2-intro',
      type: 'text' as const,
      content: `# Transcription for the MCAT

**Part 2 of 4 — Eukaryotic mRNA Processing**

### Three Modifications, All Before Export

The primary transcript (pre-mRNA, hnRNA) is edited co-transcriptionally inside the nucleus; only the finished product leaves through nuclear pores.

1. **5' cap**: a **7-methylguanosine** added backwards — via an unusual **5'-to-5' triphosphate linkage** — almost as soon as the transcript emerges. Jobs: protects against 5' exonucleases, and is the docking site for translation initiation (eIF4E binds the cap; ribosome scanning starts here).
2. **3' poly-A tail**: the sequence AAUAAA in the transcript signals cleavage ~10-30 nt downstream; **poly-A polymerase** then adds ~200 adenosines **without any template**. Jobs: stability (tail length is a decay timer), export, and translation efficiency. Histone mRNAs are the famous exception (no tail).
3. **Splicing**: **introns out, exons out of the building** — no: introns OUT, exons JOINED. Exons exit the nucleus as mRNA; introns are degraded.

### Splicing Mechanics

- Carried out by the **spliceosome**: five snRNPs (U1, U2, U4/U6, U5 — "snurps," snRNA + protein) assembled on the intron.
- Landmarks: intron begins with **GU** (5' splice/donor site), ends with **AG** (3' splice/acceptor site), with a **branch-point A** upstream of the 3' end.
- Two transesterifications: the branch A's 2'-OH attacks the 5' splice site, forming a looped **lariat**; the freed exon's 3'-OH then attacks the 3' splice site, joining exons and releasing the lariat intron.
- Some RNAs self-splice (group I/II introns) — RNA acting as an enzyme, i.e., a **ribozyme** (the spliceosome's catalytic core and rRNA's peptidyl transferase are also RNA catalysis — a recurring MCAT theme).

### Why Bother? Alternative Splicing & One Gene, Many Proteins

- ~20,000 human genes produce far more proteins because exons can be **included or skipped combinatorially** — tissue-specific splicing factors decide.
- Consequences for analysis: one gene can yield several mRNA sizes (northern blot bands) and several protein isoforms (western bands) from a single locus.
- **RNA editing** (rare, e.g., ApoB): base changes post-transcriptionally create tissue-specific variants — ApoB-100 (liver) vs ApoB-48 (intestine, where editing creates a premature stop).

### When Processing Breaks — Clinical Anchors

- **Beta-thalassemia**: many alleles are **splice-site mutations** in the beta-globin gene — a destroyed GU donor site forces the spliceosome to use a **cryptic splice site**, yielding a frameshifted or intron-retaining mRNA and little functional globin.
- **Systemic lupus erythematosus**: autoantibodies against snRNPs (anti-Smith) — spliceosome components as autoantigens.
- Intron retention usually shifts reading frames or introduces premature stops → the transcript is often destroyed by **nonsense-mediated decay** (a surveillance pathway that flags stop codons upstream of the final exon junction).`
    },
    {
      id: 'txn2-worked',
      type: 'text' as const,
      content: `### Worked Example — A Splicing Mutation Passage

**Passage-style problem.** A patient with severe anemia has normal beta-globin promoter and coding sequences, but sequencing reveals a G-to-A change at the first base of intron 1. Northern blot of reticulocyte RNA shows: healthy control — one sharp mRNA band; patient — a faint band of normal size plus a prominent LARGER band. A western blot shows drastically reduced beta-globin protein.

**Question 1 — Why does this single intronic base matter when introns are discarded anyway?** The first two intron bases are the invariant **GU donor site** the U1 snRNP recognizes. G-to-A destroys it: the spliceosome cannot initiate splicing of intron 1 at the correct position. "Introns don't matter" is true of their middles, not their boundaries — boundaries are functional sequence.

**Question 2 — Interpret the larger northern band.** RNA larger than normal mRNA from the same gene means **intron retention** (or use of a cryptic splice site adding partial intron). The retained intron adds length AND, almost inevitably, premature stop codons or a frameshift — hence protein loss on the western despite plenty of RNA being transcribed. Transcription is fine; PROCESSING is broken: the northern/western combination localizes the lesion between synthesis and translation.

**Question 3 — Why does a faint normal-size band persist?** Splice-site choice is probabilistic: a crippled donor site may still be used occasionally, or a cryptic site may reproduce a near-normal product at low frequency. This explains beta-thalassemia's clinical spectrum — "plus" alleles (reduced normal splicing) versus "zero" alleles (none) — severity tracks residual correct splicing.

**Question 4 — Predict the effect of the same G-to-A change at the LAST base of the intron.** The acceptor AG would become AA — also destroyed, same class of outcome (skipped acceptor, cryptic 3' site or exon skipping). Donor GU and acceptor AG are equally mutable Achilles heels; the branch-point A completes the trio of vulnerable positions.`
    },
    {
      id: 'txn2-quiz1',
      type: 'multiple-choice' as const,
      content: `**mRNA Processing** 🎯`,
      exercise: {
        questions: [
          {
            question: `The 5' cap of eukaryotic mRNA is distinctive because it is attached through:`,
            options: [`A standard 3'-5' phosphodiester bond`, `A peptide bond to the first amino acid`, `Hydrogen bonds pairing it with the poly-A tail`, `An inverted 5'-to-5' triphosphate linkage`],
            correctAnswer: 3,
            explanation: `The cap is added "backwards": the 7-methylguanosine's 5' carbon connects through three phosphates to the 5' end of the mRNA — a 5'-to-5' bridge found nowhere else in the molecule. This odd geometry is functional: 5' exonucleases cannot engage it (stability), and the cap-binding initiation factor eIF4E recognizes it specifically to begin ribosome loading. Distractor A describes the backbone everywhere EXCEPT the cap.`
          },
          {
            question: `Poly-A polymerase adds roughly 200 adenosines to cleaved pre-mRNA. This synthesis is unusual among nucleic acid polymerizations because it:`,
            options: [`Occurs in the cytoplasm before splicing`, `Proceeds with no nucleic acid template`, `Proceeds in the 3' to 5' direction`, `Requires a short DNA primer`],
            correctAnswer: 1,
            explanation: `Search the gene for 200 consecutive T's and you will not find them: the tail is added untemplated after cleavage at the AAUAAA signal. (Synthesis is still chemically 5' to 3' — additions to a free 3'-OH.) Exam relevance is practical too: oligo-dT primers exploit the tail to reverse-transcribe mRNA selectively into cDNA, and tail shortening in the cytoplasm times mRNA decay. Processing happens in the nucleus, and histone mRNAs are the tail-less exception.`
          },
          {
            question: `During splicing, the intron is released as a lariat. The loop of the lariat forms when:`,
            options: [`The branch-point A's 2'-OH attacks the 5' splice site`, `Exon 1's free 3'-OH attacks the 3' splice site`, `A guanosine cofactor attacks the 5' splice site`, `DNA ligase circularizes the excised intron`],
            correctAnswer: 0,
            explanation: `First transesterification: the branch A — using the 2'-OH that only RNA possesses — attacks the GU donor site, looping the intron's 5' end back onto the branch point via a 2'-5' phosphodiester bond. The second transesterification then joins the exons and releases the lariat. Note the chemistry lesson embedded here: RNA's "destabilizing" 2'-OH is precisely what makes splicing (and ribozymes generally) possible. An exogenous guanosine attacking the 5' splice site is group I self-splicing, which releases a linear intron rather than a lariat, and exon 1's 3'-OH attacking the 3' splice site is the SECOND step, which joins exons rather than closing the loop.`
          },
          {
            question: `A single human gene produces one protein isoform in muscle and a different, shorter isoform in liver. Genomic DNA from both tissues is identical. The most likely mechanism is:`,
            options: [`A somatic mutation present only in liver`, `Two different promoters transcribing two different genes`, `Alternative splicing of the same pre-mRNA`, `Faster mRNA degradation in muscle`],
            correctAnswer: 2,
            explanation: `Same DNA, different mature mRNAs is the definition of alternative splicing: regulatory proteins expressed differently in each tissue bind the pre-mRNA and shift splice-site choice, so the liver product simply omits exons the muscle product keeps. This is how ~20,000 genes yield a far larger proteome. A somatic mutation contradicts the identical-DNA finding, and degradation rates change protein AMOUNT, not length. (ApoB is the related but distinct RNA-editing example — a created stop codon, not exon skipping.)`
          },
          {
            question: `A mutation deep inside an intron, 400 bases from either splice site, creates a new AG sequence followed by a strong downstream GU. Patient mRNA is longer than normal and contains a premature stop. The best mechanistic explanation is:`,
            options: [`The mutation blocked the poly-A signal`, `Intronic sequence was included as a pseudo-exon`, `The promoter was relocated into the intron`, `The mutation prevented 5' capping`],
            correctAnswer: 1,
            explanation: `New splice-site consensus sequences arising within introns can compete with the real ones: a new acceptor AG with a new donor GU downstream of it outlines an exon-shaped block in mid-intron, so the spliceosome joins the authentic donor to the new AG and the new GU to the authentic acceptor, stitching that block into the mature mRNA as a pseudo-exon. Extra sequence brings frameshifts and premature stops — typically triggering nonsense-mediated decay. The lesson generalizes: intron interiors are usually silent, EXCEPT where a mutation creates splicing signals; boundaries and branch points are always critical.`
          }
        ]
      }
    },
    {
      id: 'txn2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Processing trio, all nuclear and co-transcriptional: 7-methylguanosine cap (5'-to-5' triphosphate linkage; exonuclease shield + eIF4E docking), poly-A tail (untemplated ~200 A after AAUAAA cleavage; stability timer; histone mRNAs excepted), splicing (introns out, exons joined)
- Spliceosome: U1/U2/U4/U6/U5 snRNPs; invariant GU donor, branch-point A, AG acceptor; two transesterifications; lariat via a 2'-5' bond only RNA's 2'-OH can make
- RNA can catalyze: self-splicing introns, the spliceosome core, and rRNA peptidyl transferase are ribozymes
- Alternative splicing multiplies the proteome — same DNA, tissue-specific isoforms differing by whole exons; ApoB is RNA editing (created stop), a different mechanism
- Splice pathology: boundary mutations cause intron retention, exon skipping, or cryptic-site use (beta-thalassemia); deep intronic mutations matter when they CREATE splice signals; nonsense-mediated decay removes premature-stop transcripts; anti-snRNP antibodies = lupus
- Blot logic: larger-than-normal mRNA + reduced protein = processing defect downstream of transcription, upstream of translation — localize lesions by which measurement first deviates`
    }
  ]
};
