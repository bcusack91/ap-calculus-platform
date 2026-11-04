export const mcatDnaReplicationPart3Data = {
  topicSlug: 'mcat-molecular-biology-dna-replication-mcat',
  sections: [
    {
      id: 'dnar3-intro',
      type: 'text' as const,
      content: `# DNA Replication for the MCAT

**Part 3 of 4 — Fidelity, Telomeres & DNA Repair**

### Three Tiers of Accuracy

Replication is extraordinarily accurate because it stacks three filters:

1. **Base selection**: correct Watson-Crick geometry fits the active site; wrong pairs distort it.
2. **Proofreading**: replicative polymerases carry a **3' to 5' exonuclease** — a mispaired 3' end will not sit properly for extension, the polymerase backs up, excises the wrong base, and retries. Note the direction: proofreading exonuclease is 3' to 5' (backwards over what was just made); primer removal is 5' to 3'.
3. **Mismatch repair (MMR)**: AFTER the fork passes, mismatch-repair proteins find distortions, identify the **new strand** (in E. coli, the strand not yet methylated at GATC sites; in eukaryotes, nicks mark it), excise the error, and resynthesize. Inherited mismatch-repair loss causes hereditary colon cancer (**Lynch syndrome**).

<!-- yield:low -->
- The numbers: base selection alone errs about once per $10^5$ nucleotides, proofreading improves that ~100-fold, and mismatch repair another ~100-1000-fold, for a final rate near one error per $10^9$-$10^{10}$ base pairs.
- The E. coli MMR proteins are MutS and MutL (MutH nicks the unmethylated new strand); humans use MSH and MLH homologs. Lynch syndrome is also called HNPCC, and its tumors show microsatellite instability.
<!-- /yield -->

### The End-Replication Problem & Telomerase

- On a linear chromosome, removing the lagging strand's final RNA primer leaves a gap no polymerase can fill (no 3'-OH upstream). Chromosomes would shorten every division.
- **Telomeres** — short repeats at chromosome ends — are disposable buffers, capped by protective proteins so ends are not mistaken for breaks.

<!-- yield:low -->
- The human telomere repeat is TTAGGG, and the protective cap is the shelterin complex.
<!-- /yield -->

- **Telomerase** is a **reverse transcriptase carrying its own RNA template**; it extends the parental 3' overhang with fresh repeats, letting standard priming and lagging-strand synthesis fill in the complement.
- Expression logic the MCAT tests: active in germ cells, stem cells, and most **cancers** (immortalization); low in most somatic cells, whose telomere erosion contributes to **replicative senescence** (the Hayflick limit).

### Repairing Damage (Not Just Copying Errors)

| Pathway | Fixes | Mechanism | Disease link |
|---------|-------|-----------|--------------|
| Base excision repair (BER) | Small chemical changes: deaminated C (uracil), oxidized bases | Glycosylase removes the base, AP endonuclease cuts the abasic site, polymerase + ligase patch | — |
| Nucleotide excision repair (NER) | Bulky, helix-distorting lesions: UV **thymine dimers**, chemical adducts | Cuts on both sides of the lesion, removes an oligonucleotide, fills and ligates | **Xeroderma pigmentosum** — extreme UV sensitivity, early skin cancers |
| Mismatch repair | Replication errors missed by proofreading | Strand-discriminating excision post-fork | Lynch syndrome (hereditary colon cancer) |
| Nonhomologous end joining (NHEJ) | Double-strand breaks, any cell-cycle phase | Direct ligation of ends — error-prone (small indels) | — |
| Homologous recombination (HR) | Double-strand breaks in S/G2 | Uses the sister chromatid as a faithful template | **BRCA1/2** — HR-deficient tumors |
| Checkpoint tie-in | Any damage sensed at G1/S or G2/M | p53 halts the cycle until repair completes; the bridge to the cell-cycle lesson | — |`
    },
    {
      id: 'dnar3-worked',
      type: 'text' as const,
      content: `### Worked Example — Telomeres and Immortal Cell Lines

**Problem 1.** Researchers culture normal human fibroblasts (line N) and track telomere length. Telomeres shorten ~50-100 bp per division, and growth arrests permanently after ~60 doublings, though the cells stay alive.

- **(a)** Why do line N telomeres shorten by a roughly fixed amount each division?
- **(b)** What is the arrested state of line N?
- **(c)** What triggers the arrest?

**(a) The end-replication problem.** Each round of lagging-strand synthesis fails to replace the terminal RNA primer's position, and end-processing trims further. Without telomerase the loss is cumulative and roughly constant, making telomere length a "mitotic clock."

**(b) Replicative senescence.** This is the Hayflick limit: the cells are metabolically alive but permanently out of the cycle. Distinguish senescence (arrest) from apoptosis (death).

**(c) Uncapped ends.** Critically short telomeres lose their protective cap, are recognized as double-strand breaks, and fire a p53-mediated checkpoint arrest.

**Problem 2.** Fibroblasts engineered to express telomerase constitutively (line T) keep long, stable telomeres. Cells from a patient tumor (line C) have telomeres that are SHORT but stable. Both lines divide indefinitely.

- **(a)** How can line C be immortal with short telomeres?
- **(b)** Why does line T show long, stable telomeres instead?
- **(c)** On telomere-length plots, what do the slopes and intercepts of lines T and C tell you?

**(a) Late reactivation.** The tumor reactivated telomerase LATE, after substantial shortening; telomerase needs only to MAINTAIN length, not restore it. Short-but-stable is the signature of reactivation during tumor progression, which most human cancers show, and it is why telomerase inhibitors are explored as therapy.

**(b) Early activation.** Line T's telomerase was switched on while its telomeres were still long, so it holds them at that length.

**(c) Slope vs intercept.** The SLOPE gives telomerase status: both lines are flat, so telomerase is on in each. The INTERCEPT records the history before measurement: line C's low level shows telomerase came on late, line T's high level that it came on early.`
    },
    {
      id: 'dnar3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Fidelity & Repair** 🎯`,
      exercise: {
        questions: [
          {
            question: `A mutant replicative polymerase retains normal synthesis activity but has lost its 3' to 5' exonuclease. The expected phenotype is:`,
            options: [`Okazaki fragments accumulate without being joined`, `Replication cannot initiate at origins`, `A mutator phenotype with an elevated mutation rate`, `Telomeres lengthen uncontrollably`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The 3' to 5' exonuclease is the proofreader: it removes the just-added wrong base before synthesis continues. Losing it leaves base-selection and mismatch repair as the only filters, raising the mutation rate ~100-fold — a "mutator" phenotype. Fragment joining (ligase), initiation (origins/helicase), and telomere length (telomerase) are separate machines. Keep the two exonuclease directions straight: 3' to 5' proofreads; 5' to 3' removes primers.`
          },
          {
            question: `In E. coli, mismatch repair excises the incorrect base from the newly synthesized strand rather than the template. The system identifies the new strand by:`,
            options: [`Its transient lack of GATC adenine methylation`, `Its higher uracil content from dUTP misincorporation`, `RNA primers still attached to the template strand`, `Its association with actively translating ribosomes`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Strand discrimination is the intellectual heart of MMR: a mismatch alone does not say which base is wrong. E. coli's Dam methylase marks GATC adenines, but methylation lags the fork — so for a few minutes the new strand is unmethylated, and the repair machinery nicks that strand for excision. Repairing the template instead would FIX the mutation into both strands. Human MMR uses strand nicks rather than methylation, but the logic is identical (Lynch syndrome when it fails).`
          },
          {
            question: `Patients with xeroderma pigmentosum develop skin cancers in childhood upon minimal sun exposure. The defective process is:`,
            options: [`Mismatch repair of replication errors`, `Nucleotide excision repair of pyrimidine dimers`, `End joining of double-strand breaks`, `Base excision repair of deaminated cytosines`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `UV crosslinks adjacent pyrimidines (thymine dimers), a bulky helix-distorting lesion — exactly NER's substrate: dual incisions flank the lesion, an oligonucleotide is removed, and the gap is filled. Without NER, dimers persist, stall polymerases, and force error-prone bypass, accumulating mutations in sun-exposed skin. BER handles small single-base chemistry, MMR handles copying errors, and NHEJ handles double-strand breaks — matching lesion type to pathway is the tested skill.`
          },
          {
            question: `Telomerase solves the end-replication problem by:`,
            options: [`Ligating the two ends of each chromosome into a circle`, `Recruiting a special DNA polymerase that synthesizes 3' to 5'`, `Removing the need for RNA primers on the lagging strand`, `Reverse-transcribing its RNA template onto the 3' overhang`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Telomerase is a ribonucleoprotein reverse transcriptase: its built-in RNA is the template, the chromosome's 3' overhang is the primer, and it processively adds telomeric repeats. The lengthened overhang then supports conventional primase/polymerase synthesis of the complementary strand. No polymerase ever synthesizes 3' to 5', and eukaryotic chromosomes stay linear — circularization is a bacterial solution, and the trap option here.`
          },
          {
            question: `A tumor with inactivated BRCA1 cannot perform homologous recombination. Double-strand breaks in these cells during G2 are most likely to be:`,
            options: [`Repaired perfectly using the sister chromatid`, `Converted to single-strand nicks by telomerase`, `Repaired by error-prone nonhomologous end joining`, `Left permanently unrepaired with no cellular response`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `HR and NHEJ are the two double-strand-break pathways; HR copies the intact sister chromatid (S/G2 only, essentially error-free), while NHEJ trims and ligates ends directly, tolerating small indels. Remove HR (BRCA1/2 loss) and the cell falls back on mutagenic NHEJ — genomic instability that drives the cancer, and the vulnerability PARP inhibitors exploit (synthetic lethality). The cell does respond — checkpoints fire — so "no response" is wrong.`
          }
        ]
      }
    },
    {
      id: 'dnar3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Three fidelity filters.** Base-pair geometry, 3' to 5' proofreading, then mismatch repair of the new (unmethylated GATC) strand.
- **End-replication problem.** The last lagging-strand primer's gap cannot be filled, so telomere buffers shorten each division.
- **Telomerase.** A reverse transcriptase with its own RNA template extends the 3' overhang; on in germ, stem and cancer cells.
- **Lesion to pathway.** BER small base damage, NER UV dimers (XP), MMR copying errors (Lynch), HR (BRCA) or NHEJ for breaks.

**Common traps**

- **Mixing exonuclease directions.** Proofreading removes bases 3' to 5'; primer removal runs 5' to 3'.
- **Senescence as death.** Short telomeres trigger a p53 arrest: senescent cells stay alive but stop dividing, unlike apoptosis.
- **Short telomeres, no telomerase.** Short but stable telomeres mean telomerase was reactivated late; the slope shows its status.
- **NHEJ as faithful repair.** NHEJ joins ends directly and leaves small indels; HR copies the sister chromatid faithfully in S/G2.

<!-- yield:low -->
- Low-yield extras: the error-rate arithmetic (about 1 in $10^5$ from base selection, ~100-fold from proofreading, ~100-1000-fold from MMR, ending near 1 in $10^9$-$10^{10}$); MMR protein names (MutS, MutL, MutH; human MSH/MLH); Lynch syndrome's other name (HNPCC) and its microsatellite instability; the TTAGGG repeat and its shelterin cap
<!-- /yield -->`
    }
  ]
};
