export const mcatDnaReplicationPart3Data = {
  topicSlug: 'mcat-molecular-biology-dna-replication-mcat',
  sections: [
    {
      id: 'dnar3-intro',
      type: 'text' as const,
      content: `# DNA Replication for the MCAT

**Part 3 of 4 — Fidelity, Telomeres & DNA Repair**

### Three Tiers of Accuracy

Replication achieves roughly one error per $10^9$-$10^{10}$ base pairs by stacking three filters:

1. **Base selection** (~1 error in $10^5$): correct Watson-Crick geometry fits the active site; wrong pairs distort it.
2. **Proofreading** (~100-fold better): replicative polymerases carry a **3' to 5' exonuclease** — a mispaired 3' end will not sit properly for extension, the polymerase backs up, excises the wrong base, and retries. Note the direction: proofreading exonuclease is 3' to 5' (backwards over what was just made); primer removal is 5' to 3'.
3. **Mismatch repair (MMR)** (~another 100-1000x): AFTER the fork passes, MutS/MutL homologs (MSH/MLH in humans) find distortions, identify the **new strand** (in E. coli, the strand not yet methylated at GATC sites; in eukaryotes, nicks mark it), excise the error, and resynthesize. Inherited MMR mutations cause **Lynch syndrome** (HNPCC) with microsatellite instability.

### The End-Replication Problem & Telomerase

- On a linear chromosome, removing the lagging strand's final RNA primer leaves a gap no polymerase can fill (no 3'-OH upstream). Chromosomes would shorten every division.
- **Telomeres** — TTAGGG repeats — are disposable buffers, capped by shelterin proteins so ends are not mistaken for breaks.
- **Telomerase** is a **reverse transcriptase carrying its own RNA template**; it extends the parental 3' overhang with fresh repeats, letting standard priming and lagging-strand synthesis fill in the complement.
- Expression logic the MCAT tests: active in germ cells, stem cells, and most **cancers** (immortalization); low in most somatic cells, whose telomere erosion contributes to **replicative senescence** (the Hayflick limit).

### Repairing Damage (Not Just Copying Errors)

| Pathway | Fixes | Mechanism | Disease link |
|---------|-------|-----------|--------------|
| Base excision repair (BER) | Small chemical changes: deaminated C (uracil), oxidized bases | Glycosylase removes the base, AP endonuclease cuts the abasic site, polymerase + ligase patch | — |
| Nucleotide excision repair (NER) | Bulky, helix-distorting lesions: UV **thymine dimers**, chemical adducts | Cuts on both sides of the lesion, removes an oligonucleotide, fills and ligates | **Xeroderma pigmentosum** — extreme UV sensitivity, early skin cancers |
| Mismatch repair | Replication errors missed by proofreading | Strand-discriminating excision post-fork | Lynch syndrome |
| Nonhomologous end joining (NHEJ) | Double-strand breaks, any cell-cycle phase | Direct ligation of ends — error-prone (small indels) | — |
| Homologous recombination (HR) | Double-strand breaks in S/G2 | Uses the sister chromatid as a faithful template | **BRCA1/2** — HR-deficient tumors |

> Checkpoint tie-in: damage detected in G1/S or G2/M halts the cycle via p53 until repair completes — the bridge to the cell-cycle lesson.`
    },
    {
      id: 'dnar3-worked',
      type: 'text' as const,
      content: `### Worked Example — Telomeres and Immortal Cell Lines

**Passage-style problem.** Researchers culture human fibroblasts: normal cells (line N), cells engineered to express telomerase constitutively (line T), and cells from a patient tumor (line C). Mean telomere length and population doublings are tracked.

- **Line N**: telomeres shorten ~50-100 bp per division; growth arrests permanently after ~60 doublings, though cells stay alive.
- **Line T**: telomere length is stable; the cells divide indefinitely.
- **Line C**: telomeres are SHORT but stable; the cells divide indefinitely.

**Question 1 — Why do line N telomeres shorten a fixed amount per division?** Each round of lagging-strand synthesis fails to replace the terminal RNA primer's position — the end-replication problem — and end-processing trims further. Without telomerase, the loss is cumulative and roughly constant per division, making telomere length a "mitotic clock."

**Question 2 — What is the arrested state of line N, and what triggers it?** Replicative **senescence** (Hayflick limit): critically short telomeres lose their protective cap, are recognized as double-strand breaks, and fire a p53-mediated checkpoint arrest. The cells are metabolically alive but permanently out of the cycle — distinguish senescence (arrest) from apoptosis (death).

**Question 3 — Reconcile line C: short telomeres, yet immortal.** The tumor reactivated telomerase LATE, after substantial shortening had already occurred; telomerase needs only to MAINTAIN length, not restore it. Short-but-stable is the signature of telomerase reactivation during tumor progression — roughly 90% of human cancers do this. It also explains why telomerase inhibitors are explored as therapy, and why line T (activated while telomeres were long) shows long stable telomeres instead.

**Data-reading habit**: on telomere plots, the SLOPE tells you telomerase status; the INTERCEPT tells you the history before measurement began.`
    },
    {
      id: 'dnar3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fidelity & Repair** 🎯`,
      exercise: {
        questions: [
          {
            question: `A mutant replicative polymerase retains normal synthesis activity but has lost its 3' to 5' exonuclease. The expected phenotype is:`,
            options: [`Okazaki fragments accumulate without being joined`, `Replication cannot initiate at origins`, `An elevated spontaneous mutation rate, since misincorporated bases are extended rather than excised`, `Telomeres lengthen uncontrollably`],
            correctAnswer: 2,
            explanation: `The 3' to 5' exonuclease is the proofreader: it removes the just-added wrong base before synthesis continues. Losing it leaves base-selection and mismatch repair as the only filters, raising the mutation rate ~100-fold — a "mutator" phenotype. Fragment joining (ligase), initiation (origins/helicase), and telomere length (telomerase) are separate machines. Keep the two exonuclease directions straight: 3' to 5' proofreads; 5' to 3' removes primers.`
          },
          {
            question: `In E. coli, mismatch repair excises the incorrect base from the newly synthesized strand rather than the template. The system identifies the new strand by:`,
            options: [`Its transient lack of methylation at GATC sequences shortly after the fork passes`, `Its higher uracil content`, `The presence of RNA primers still attached to the template strand`, `Its association with ribosomes`],
            correctAnswer: 0,
            explanation: `Strand discrimination is the intellectual heart of MMR: a mismatch alone does not say which base is wrong. E. coli's Dam methylase marks GATC adenines, but methylation lags the fork — so for a few minutes the new strand is unmethylated, and MutH nicks that strand for excision. Repairing the template instead would FIX the mutation into both strands. Human MMR uses strand nicks rather than methylation, but the logic is identical (Lynch syndrome when it fails).`
          },
          {
            question: `Patients with xeroderma pigmentosum develop skin cancers in childhood upon minimal sun exposure. The defective process is:`,
            options: [`Mismatch repair of replication errors`, `Nucleotide excision repair, which normally removes bulky UV-induced pyrimidine dimers`, `Nonhomologous end joining of double-strand breaks`, `Base excision repair of deaminated cytosines`],
            correctAnswer: 1,
            explanation: `UV crosslinks adjacent pyrimidines (thymine dimers), a bulky helix-distorting lesion — exactly NER's substrate: dual incisions flank the lesion, an oligonucleotide is removed, and the gap is filled. Without NER, dimers persist, stall polymerases, and force error-prone bypass, accumulating mutations in sun-exposed skin. BER handles small single-base chemistry, MMR handles copying errors, and NHEJ handles double-strand breaks — matching lesion type to pathway is the tested skill.`
          },
          {
            question: `Telomerase solves the end-replication problem by:`,
            options: [`Ligating the two ends of each chromosome into a circle`, `Recruiting a special DNA polymerase that synthesizes 3' to 5'`, `Removing the need for RNA primers on the lagging strand`, `Using an internal RNA template to reverse-transcribe new repeats onto the chromosome's 3' overhang`],
            correctAnswer: 3,
            explanation: `Telomerase is a ribonucleoprotein reverse transcriptase: its built-in RNA is the template, the chromosome's 3' overhang is the primer, and it processively adds TTAGGG repeats. The lengthened overhang then supports conventional primase/polymerase synthesis of the complementary strand. No polymerase ever synthesizes 3' to 5', and eukaryotic chromosomes stay linear — circularization is a bacterial solution, and the trap option here.`
          },
          {
            question: `A tumor with inactivated BRCA1 cannot perform homologous recombination. Double-strand breaks in these cells during G2 are most likely to be:`,
            options: [`Repaired perfectly using the sister chromatid`, `Converted to single-strand nicks by telomerase`, `Repaired by error-prone nonhomologous end joining, producing small insertions and deletions`, `Left permanently unrepaired with no cellular response`],
            correctAnswer: 2,
            explanation: `HR and NHEJ are the two double-strand-break pathways; HR copies the intact sister chromatid (S/G2 only, essentially error-free), while NHEJ trims and ligates ends directly, tolerating small indels. Remove HR (BRCA1/2 loss) and the cell falls back on mutagenic NHEJ — genomic instability that drives the cancer, and the vulnerability PARP inhibitors exploit (synthetic lethality). The cell does respond — checkpoints fire — so "no response" is wrong.`
          }
        ]
      }
    },
    {
      id: 'dnar3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Fidelity stacks three filters: base-pair geometry, 3' to 5' proofreading exonuclease (mutator strains when lost), and post-fork mismatch repair with strand discrimination (unmethylated GATC in E. coli; Lynch syndrome in humans)
- Directions matter: proofreading = 3' to 5'; primer removal = 5' to 3'
- End-replication problem: the last lagging-strand primer's position cannot be filled; telomeres (TTAGGG buffers) absorb the loss
- Telomerase = reverse transcriptase with internal RNA template, extending the 3' overhang; active in germ/stem cells and ~90% of cancers; its absence in somatic cells sets the Hayflick limit via p53-triggered senescence (arrest, not death)
- Telomere data: slope = telomerase status; short-but-stable = late reactivation in a tumor
- Match lesion to pathway: uracil/oxidized base = BER; bulky UV dimer = NER (xeroderma pigmentosum); replication mismatch = MMR; double-strand break = HR (faithful, sister template, BRCA) or NHEJ (error-prone, any phase)
- Damage arrests the cycle through p53 checkpoints — repair and cell-cycle control are one system`
    }
  ]
};
