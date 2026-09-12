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
|----------|-----------|---------------------|
| Silent | Codon changes, same amino acid (usually position 3) | None (usually) |
| Missense (conservative) | One amino acid becomes a chemically similar one | Often mild |
| Missense (nonconservative) | Chemically different substitution | Variable — sickle cell (Glu to Val, charged to hydrophobic) is the archetype |
| Nonsense | Codon becomes UAA/UAG/UGA | Truncated protein; transcript often destroyed by nonsense-mediated decay |
| Frameshift | Insertion/deletion not divisible by 3 | Garbled sequence downstream + usually a premature stop |
| In-frame indel | Insertion/deletion of 3n bases | Adds/removes whole residues (CFTR deltaF508) |
| Splice-site | Intron boundary destroyed | Intron retention/exon skipping — behaves like frameshift or indel |

**Severity heuristics the exam rewards**: earlier premature stops are worse; frameshifts are usually worse than missense; a nonsense mutation near the very END may be mild (most of the protein is made). Always ask WHERE in the gene, not just WHAT type.

### Folding & Its Failures

- Primary sequence contains the folding information (Anfinsen's ribonuclease experiment: denatured enzyme refolds and regains activity spontaneously — no instructions needed beyond sequence).
- **Chaperones** (heat shock proteins, chaperonins) do not add information — they prevent aggregation and give slow folders a protected chamber. Induced by heat/stress.
- Misfolding diseases: aggregates (amyloid), **prions** (misfolded PrP TEMPLATES the misfolding of normal PrP — protein-only inheritance of shape), and loss-of-function via degradation (deltaF508 CFTR folds imperfectly and is destroyed by quality control even though it could conduct chloride).

### Post-Translational Modifications — The Protein Isn't Done at the Stop Codon

| Modification | Chemistry | Function example |
|--------------|-----------|------------------|
| Phosphorylation | Kinase adds PO$_4$ to Ser/Thr/Tyr (phosphatase removes) | Reversible activity switches — signaling's main currency |
| Glycosylation | N-linked (Asn, begins in ER); O-linked (Ser/Thr, Golgi) | Folding, stability, cell-surface identity (ABO antigens) |
| Proteolytic cleavage | Irreversible cutting | Preproinsulin to proinsulin to insulin; zymogens (trypsinogen) activated at the right place/time |
| Ubiquitination | Poly-ubiquitin chain tags lysines | Delivery to the **26S proteasome** (ATP-dependent cytosolic degradation) |
| Acetylation, methylation | On histones and others | Chromatin regulation (transcription lesson) |
| Lipid anchors (prenylation, myristoylation) | Hydrophobic tails added | Membrane attachment (Ras) |

- **Two disposal systems, two jobs**: proteasome = tagged, individual cytosolic/nuclear proteins (cell-cycle regulators like cyclins; misfolded ER proteins retrotranslocated out — ERAD); lysosome = bulk material and things arriving by vesicle (endocytosed receptors, autophagy). Choosing the right one is a standard question.
- Zymogen logic: synthesize the knife folded but sheathed; unsheath (cleave) only at the destination. Pancreatitis = premature activation in the wrong compartment.`
    },
    {
      id: 'tln3-worked',
      type: 'text' as const,
      content: `### Worked Example — From Gel Bands to Mutation Mechanism

**Passage-style problem.** A secreted enzyme (mature form: 55 kDa) is studied in four patient cell lines. Western blots of cell LYSATE and MEDIUM (secreted fraction) show:

- **Line A**: lysate 55 kDa (weak), medium empty; mRNA level normal; adding a proteasome inhibitor makes a 55 kDa band accumulate strongly in the lysate.
- **Line B**: lysate 30 kDa band, medium empty; mRNA slightly reduced.
- **Line C**: lysate and medium both show 55 kDa at normal levels, but the secreted enzyme is catalytically dead.
- **Line D**: lysate 57 kDa, medium empty; the extra mass is removed by an enzyme that cleaves signal peptides.

**Question 1 — Line B first (the easy anchor).** A shortened protein with somewhat reduced mRNA is the signature of a **nonsense or frameshift mutation** mid-gene: translation stops early (30 kDa truncation) and nonsense-mediated decay trims transcript levels. The truncated protein also fails quality control for secretion.

**Question 2 — Line A: full-length protein, normal mRNA, rescued by proteasome inhibition.** Size is right, synthesis is right — the protein is being DEGRADED. A missense mutation causing **misfolding** lets ER quality control ubiquitinate the protein for proteasomal destruction (ERAD). This is the deltaF508-CFTR pattern: a functional-if-it-could-fold protein lost to surveillance. The proteasome-inhibitor rescue is the deciding experiment.

**Question 3 — Line C: normal size, normal secretion, dead enzyme.** Everything about synthesis, folding (enough to pass QC), and trafficking is intact — the lesion must sit in the **active site**: a missense substitution of a catalytic residue. Function and structure are separable claims; a protein can traffic perfectly and do nothing.

**Question 4 — Line D: 2 kDa TOO BIG and stuck inside.** The mature size assumes the **signal peptide** was cleaved during ER import. An uncleaved signal (mutated cleavage site) leaves the protein 1-3 kDa heavy and tethered/mislocalized, blocking secretion. Alternatively a wholly cytosolic 57 kDa form would suggest failed ER TARGETING — the passage's cleavage-enzyme result pins it to the cleavage step instead.

**The method**: order the checkpoints — transcribed? translated full-length? folded/stable? localized? catalytically active? — and let each line's ONE anomalous readout name the failed checkpoint.`
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
            explanation: `One codon, one substituted amino acid, chain length unchanged: missense. It is NONconservative because the chemistry flips — negatively charged, water-loving glutamate becomes hydrophobic valine, whose surface exposure lets deoxygenated hemoglobin molecules polymerize into fibers that deform the cell. The classification vocabulary maps directly to consequence severity, and the exam expects you to justify "nonconservative" by side-chain chemistry, not memorization.`
          },
          {
            question: `Anfinsen showed that denatured ribonuclease spontaneously refolds into active enzyme when denaturant and reducing agent are removed. The principle established is that:`,
            options: [`All proteins fold without needing chaperones`, `The primary sequence specifies the native fold`, `Disulfide bonds form at random`, `Folding requires contact with the ribosome`],
            correctAnswer: 1,
            explanation: `Refolding succeeded with no cellular machinery present — no ribosome, no chaperones, no template — so the tertiary structure must be encoded in the primary sequence (the thermodynamic hypothesis: the native state is the free-energy minimum). Chaperones remain important IN CELLS, but as aggregation-preventers and kinetics-helpers, not information sources; option A overreaches the finding. Correct disulfides reformed because the folded conformation brings the right cysteines together.`
          },
          {
            question: `A regulatory protein must be destroyed within minutes at a specific cell-cycle transition. The machinery responsible for this targeted, ATP-dependent destruction is:`,
            options: [`Polyubiquitination and the 26S proteasome`, `Lysosomal acid hydrolases after autophagy`, `Extracellular proteases after secretion`, `Calpain cleavage triggered by calcium`],
            correctAnswer: 0,
            explanation: `Selectivity and speed are the requirements, and only the ubiquitin-proteasome system offers both: an E3 ligase recognizes ONE substrate (often only after a phosphorylation mark), builds a polyubiquitin chain, and the proteasome unfolds and shreds that molecule while its neighbors are untouched — cyclin destruction at anaphase is the textbook case. Lysosomes handle bulk and vesicle-delivered cargo on slower timescales, with no per-molecule addressing. Match disposal system to precision required.`
          },
          {
            question: `Trypsin is synthesized in pancreatic acinar cells as inactive trypsinogen and activated by cleavage only upon reaching the intestine. The biological logic of this zymogen strategy is to:`,
            options: [`Improve the enzyme's catalytic rate`, `Allow the enzyme to be translated faster`, `Make the protein small enough to secrete`, `Keep it from digesting the cell that makes it`],
            correctAnswer: 3,
            explanation: `Irreversible activation demands spatial control: the active site is built but conformationally masked until enteropeptidase cleaves trypsinogen in the duodenum — after which trypsin activates more trypsinogen and the other zymogens (autocatalytic cascade). Premature intrapancreatic activation is pancreatitis: self-digestion. The same synthesize-inactive-activate-on-site logic governs clotting factors, caspases, and insulin processing — cleavage as a one-way switch, contrasted with reversible phosphorylation.`
          },
          {
            question: `In prion diseases, the infectious agent contains no nucleic acid, yet the disease propagates and can be transmitted. The replication mechanism is:`,
            options: [`Reverse transcription of a protein sequence into DNA`, `A hidden viral genome inside the prion particle`, `Misfolded PrP templating conversion of normal PrP`, `Mutation of the host's PrP gene by the incoming protein`],
            correctAnswer: 2,
            explanation: `Prions replicate SHAPE, not sequence: the pathological beta-sheet-rich conformer binds native alpha-helical PrP and catalyzes its conversion, and the growing aggregates fragment into new seeds — exponential, protein-only propagation that defies the DNA/RNA-based definitions of infectious agents. The host gene is untouched (though PrP mutations cause familial forms by easing conversion). Conceptually this is Anfinsen's exception: here two stable conformations exist, and kinetics — seeded templating — decides which wins.`
          }
        ]
      }
    },
    {
      id: 'tln3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Mutation taxonomy predicts protein outcome: silent (position 3), missense (conservative vs NONconservative — argue from side-chain chemistry; sickle Glu to Val), nonsense (truncation + nonsense-mediated decay), frameshift (garbled + premature stop), in-frame indel (deltaF508), splice-site (masquerades as either)
- Location matters as much as type: early stops are severe, near-end stops can be mild
- Anfinsen: sequence encodes structure (native state = energy minimum); chaperones prevent aggregation and assist kinetics without adding information
- Folding failures: degradation of fixable proteins (deltaF508 CFTR via ERAD — proteasome-inhibitor rescue is the fingerprint), aggregation/amyloid, prions (conformational templating — shape replicates without nucleic acid)
- PTM toolkit: phosphorylation = reversible switch; cleavage = irreversible switch (zymogens, insulin); N-glycosylation starts in the ER, O-linked in Golgi; ubiquitin = proteasome address label; lipid anchors = membrane attachment
- Disposal division: proteasome for selected, tagged, cytosolic/nuclear individuals (cyclins); lysosome for bulk and vesicle-delivered cargo
- Diagnostic method: run the checkpoints (full-length? stable? localized? active?) and let the single anomalous readout name the lesion`
    }
  ]
};
