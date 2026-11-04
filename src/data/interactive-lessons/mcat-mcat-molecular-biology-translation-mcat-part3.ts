export const mcatTranslationPart3Data = {
  topicSlug: 'mcat-molecular-biology-translation-mcat',
  sections: [
    {
      id: 'tln3-intro',
      type: 'text' as const,
      content: `# Translation for the MCAT

**Part 3 of 4 — Mutations, Folding & Post-Translational Modification**

### Mutation Taxonomy — Predict the Protein First

| Mutation | DNA change | Protein consequence |
|---|---|---|
| Silent | Same amino acid (usually base 3) | None, usually |
| Missense, conservative | Chemically similar substitute | Often mild |
| Missense, nonconservative | Chemically different substitute | Variable; sickle cell Glu to Val (charged to hydrophobic) |
| Nonsense | Codon becomes UAA/UAG/UGA | Truncated protein; transcript often degraded |
| Frameshift | Indel not divisible by 3 | Garbled downstream + usually a premature stop |
| In-frame indel | Indel of 3n bases | Whole residues added/removed (CFTR deltaF508) |
| Splice-site | Intron boundary destroyed | Intron retention or exon skipping; acts like either |

<!-- yield:low -->
- The surveillance pathway that destroys premature-stop transcripts is **nonsense-mediated decay**.
<!-- /yield -->

**Severity heuristics the exam rewards**: earlier premature stops are worse; frameshifts are usually worse than missense; a nonsense mutation near the very END may be mild (most of the protein is made). Always ask WHERE in the gene, not just WHAT type.

### Folding & Its Failures

- Primary sequence contains the folding information (Anfinsen's ribonuclease experiment: denatured enzyme refolds and regains activity spontaneously — no instructions needed beyond sequence).
- **Chaperones** (heat shock proteins, chaperonins) do not add information — they prevent aggregation and give slow folders a protected chamber. Induced by heat/stress.
- Misfolding diseases: aggregates (amyloid), **prions** (misfolded PrP TEMPLATES the misfolding of normal PrP — protein-only inheritance of shape), and loss-of-function via degradation (deltaF508 CFTR folds imperfectly and is destroyed by quality control even though it could conduct chloride).

### Post-Translational Modifications (The Protein Isn't Done at the Stop Codon)

| Modification | Chemistry | Function example |
|--------------|-----------|------------------|
| Phosphorylation | Kinase adds PO$_4$ to Ser/Thr/Tyr (phosphatase removes) | Reversible activity switches — signaling's main currency |
| Glycosylation | N-linked (Asn, begins in ER); O-linked (Ser/Thr, Golgi) | Folding, stability, cell-surface identity (ABO antigens) |
| Proteolytic cleavage | Irreversible cutting | Preproinsulin to proinsulin to insulin; zymogens (trypsinogen) activated at the right place/time |
| Ubiquitination | Poly-ubiquitin chain tags lysines | Delivery to the **26S proteasome** (ATP-dependent cytosolic degradation) |
| Acetylation, methylation | On histones and others | Chromatin regulation (transcription lesson) |
| Lipid anchors (prenylation, myristoylation) | Hydrophobic tails added | Membrane attachment (Ras) |

- **Two disposal systems, two jobs**: proteasome = tagged, individual cytosolic/nuclear proteins (cell-cycle regulators like cyclins; misfolded ER proteins retrotranslocated out to the cytosol); lysosome = bulk material and things arriving by vesicle (endocytosed receptors, autophagy). Choosing the right one is a standard question.
- Zymogen logic: synthesize the knife folded but sheathed; unsheath (cleave) only at the destination. Pancreatitis = premature activation in the wrong compartment.`
    },
    {
      id: 'tln3-worked',
      type: 'text' as const,
      content: `### Worked Example — From Gel Bands to Mutation Mechanism

A secreted enzyme (mature form: 55 kDa) is studied in several patient cell lines. Western blots of cell LYSATE and MEDIUM (secreted fraction) are compared; each problem is one line, starting with the easy anchor.

**Problem 1.** Line 1 (mature enzyme 55 kDa): the lysate shows a 30 kDa band and the medium is empty; mRNA is slightly reduced.

- **(a)** What kind of mutation does the 30 kDa band suggest?
- **(b)** Why is the mRNA level slightly reduced?
- **(c)** Why is nothing secreted?

**(a) Truncation.** A shortened protein is the signature of a **nonsense or frameshift mutation** mid-gene: translation stops early, giving the 30 kDa truncation.

**(b) mRNA drop.** Transcripts carrying a premature stop are partly degraded, so the modest mRNA drop fits too.

**(c) No secretion.** The truncated protein also fails quality control for secretion.

**Problem 2.** Line 2 (mature enzyme 55 kDa): the lysate shows a weak 55 kDa band and the medium is empty; mRNA is normal. Adding a proteasome inhibitor makes a 55 kDa band accumulate strongly in the lysate.

- **(a)** Are transcription and translation intact?
- **(b)** What is happening to the protein, and which result shows it?
- **(c)** What kind of mutation produces this pattern?

**(a) Synthesis.** Yes. The size is right and the mRNA is normal, so synthesis is right.

**(b) Degradation.** The protein is being DEGRADED. The proteasome-inhibitor rescue is the deciding experiment.

**(c) Misfolding.** A mutation causing **misfolding** (often a missense change) lets ER quality control ubiquitinate the protein for proteasomal destruction. This is the deltaF508-CFTR pattern (there an in-frame deletion): a functional-if-it-could-fold protein lost to surveillance.

**Problem 3.** Line 3: the lysate and medium both show the 55 kDa enzyme at normal levels, but the secreted enzyme is catalytically dead.

- **(a)** Which steps from synthesis to secretion are intact?
- **(b)** Where must the lesion sit?

**(a) Intact steps.** Everything about synthesis, folding (enough to pass QC), and trafficking is intact.

**(b) Active site.** The lesion must sit in the **active site**: a missense substitution of a catalytic residue. Function and structure are separable claims; a protein can traffic perfectly and do nothing.

**Problem 4.** Line 4 (mature enzyme 55 kDa): the lysate shows 57 kDa and the medium is empty; the extra mass is removed by an enzyme that cleaves signal peptides.

- **(a)** What is the extra 2 kDa?
- **(b)** Why is the protein not secreted?
- **(c)** Could failed ER targeting give the same band?
- **(d)** What checkpoint order sorts all four lines?

**(a) Extra mass.** The mature size assumes the **signal peptide** was cleaved during ER import. Here it is still attached (for example, a mutated cleavage site), leaving the protein 1-3 kDa heavy.

**(b) Stuck inside.** The retained signal leaves the protein tethered/mislocalized, blocking secretion.

**(c) Targeting.** Yes. A protein never imported into the ER also keeps its signal, so the band alone cannot decide. Locating the 57 kDa form (ER vs cytosol) separates failed cleavage from failed ER TARGETING.

**(d) The method.** Order the checkpoints — transcribed? translated full-length? folded/stable? localized? catalytically active? — and let each line's ONE anomalous readout name the failed checkpoint.`
    },
    {
      id: 'tln3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Mutations & Protein Maturation** 🎯`,
      exercise: {
        questions: [
          {
            question: `Sickle cell disease results from a GAG-to-GTG change converting glutamate 6 of beta-globin to valine. This mutation is classified as:`,
            options: [`A conservative missense mutation`, `A nonsense mutation causing truncation`, `A nonconservative missense mutation`, `A frameshift mutation in codon 6`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `One codon, one substituted amino acid, chain length unchanged: missense. It is NONconservative because the chemistry flips — negatively charged, water-loving glutamate becomes hydrophobic valine, whose surface exposure lets deoxygenated hemoglobin molecules polymerize into fibers that deform the cell. The classification vocabulary maps directly to consequence severity, and the exam expects you to justify "nonconservative" by side-chain chemistry, not memorization.`
          },
          {
            question: `Anfinsen showed that denatured ribonuclease spontaneously refolds into active enzyme when denaturant and reducing agent are removed. The principle established is that:`,
            options: [`All proteins fold without needing chaperones`, `The primary sequence specifies the native fold`, `Disulfide bonds form at random`, `Folding requires contact with the ribosome`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Refolding succeeded with no cellular machinery present — no ribosome, no chaperones, no template — so the tertiary structure must be encoded in the primary sequence (the thermodynamic hypothesis: the native state is the free-energy minimum). Chaperones remain important IN CELLS, but as aggregation-preventers and kinetics-helpers, not information sources; claiming all proteins fold without chaperones overreaches the finding. Correct disulfides reformed because the folded conformation brings the right cysteines together.`
          },
          {
            question: `A regulatory protein must be destroyed within minutes at a specific cell-cycle transition. The machinery responsible for this targeted, ATP-dependent destruction is:`,
            options: [`Polyubiquitination and the 26S proteasome`, `Lysosomal acid hydrolases after autophagy`, `Extracellular proteases after secretion`, `Calpain cleavage triggered by calcium`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Selectivity and speed are the requirements, and only the ubiquitin-proteasome system offers both: an E3 ligase recognizes ONE substrate (often only after a phosphorylation mark), builds a polyubiquitin chain, and the proteasome unfolds and shreds that molecule while its neighbors are untouched — cyclin destruction at anaphase is the textbook case. Lysosomes handle bulk and vesicle-delivered cargo on slower timescales, with no per-molecule addressing. Match disposal system to precision required.`
          },
          {
            question: `Trypsin is synthesized in pancreatic acinar cells as inactive trypsinogen and activated by cleavage only upon reaching the intestine. The biological logic of this zymogen strategy is to:`,
            options: [`Improve the enzyme's catalytic rate`, `Allow the enzyme to be translated faster`, `Make the protein small enough to secrete`, `Keep it from digesting the cell that makes it`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Irreversible activation demands spatial control: the active site is built but conformationally masked until enteropeptidase cleaves trypsinogen in the duodenum — after which trypsin activates more trypsinogen and the other zymogens (autocatalytic cascade). Premature intrapancreatic activation is pancreatitis: self-digestion. The same synthesize-inactive-activate-on-site logic governs clotting factors, caspases, and insulin processing — cleavage as a one-way switch, contrasted with reversible phosphorylation.`
          },
          {
            question: `In prion diseases, the infectious agent contains no nucleic acid, yet the disease propagates and can be transmitted. The replication mechanism is:`,
            options: [`Reverse transcription of a protein sequence into DNA`, `A hidden viral genome inside the prion particle`, `Misfolded PrP templating conversion of normal PrP`, `Mutation of the host's PrP gene by the incoming protein`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Prions replicate SHAPE, not sequence: the pathological beta-sheet-rich conformer binds native alpha-helical PrP and catalyzes its conversion, and the growing aggregates fragment into new seeds — exponential, protein-only propagation that defies the DNA/RNA-based definitions of infectious agents. The host gene is untouched (though PrP mutations cause familial forms by easing conversion). Conceptually this is Anfinsen's exception: here two stable conformations exist, and kinetics — seeded templating — decides which wins.`
          }
        ]
      }
    },
    {
      id: 'tln3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Predict the protein.** Each mutation type has a typical outcome, and location matters: early stops are severe, near-end ones mild.
- **Sequence encodes the fold.** Anfinsen's ribonuclease refolded alone; chaperones prevent aggregation but add no information.
- **PTM switches.** Phosphorylation is a reversible switch; proteolytic cleavage (zymogens, insulin) is an irreversible one.
- **Checkpoint method.** Full-length? stable? localized? active? The one anomalous readout names the lesion.

**Common traps**

- **Missense without chemistry.** Justify "nonconservative" by side chains: sickle Glu to Val swaps charged for hydrophobic.
- **Normal size, no defect.** A full-length protein can still misfold and be destroyed by the proteasome; inhibitor rescue reveals it.
- **Lysosome for cyclins.** Selected, ubiquitin-tagged proteins go to the 26S proteasome; lysosomes take bulk and vesicle cargo.
- **Prions need a genome.** Prions carry no nucleic acid; misfolded PrP templates normal PrP into the misfolded shape.

<!-- yield:low -->
**Low-yield extras**

- Premature-stop transcripts are destroyed by nonsense-mediated decay; the export-and-destroy route for misfolded ER proteins is called ERAD (ER-associated degradation)
<!-- /yield -->`
    }
  ]
};
