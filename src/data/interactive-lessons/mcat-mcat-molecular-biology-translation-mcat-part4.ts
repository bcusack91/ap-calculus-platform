export const mcatTranslationPart4Data = {
  topicSlug: 'mcat-molecular-biology-translation-mcat',
  sections: [
    {
      id: 'tln4-intro',
      type: 'text' as const,
      content: `# Translation for the MCAT

**Part 4 of 4 — Translational Control, Toxins & MCAT Integration**

### Regulating Translation Itself

Transcription sets the menu; translational control sets the serving speed — faster (seconds-minutes) and reversible.

1. **Global control via eIF2 phosphorylation**: stress (unfolded proteins, viral infection, starvation) activates kinases that phosphorylate initiation factor **eIF2**, throttling delivery of initiator tRNA — bulk translation drops while select stress mRNAs continue. The integrated stress response in one sentence.
2. **mRNA-specific control — the iron story (the exam's favorite)**: **IRE-binding protein (IRP)** binds **iron response elements** (hairpins) when iron is LOW:
   - **Ferritin** mRNA (iron storage): IRE in the **5' UTR** — bound IRP blocks ribosome scanning → LESS ferritin when iron is low (no iron to store). High iron pulls IRP off → ferritin made.
   - **Transferrin receptor** mRNA (iron import): IREs in the **3' UTR** — bound IRP protects the mRNA from degradation → MORE receptor when iron is low (import more!). High iron releases IRP → mRNA degraded.
   - Same protein, opposite outcomes, decided purely by WHERE the element sits: 5' UTR occupancy blocks initiation; 3' UTR occupancy controls stability.
3. **miRNA/RNAi**: small RNAs guide silencing complexes to complementary mRNA 3' UTRs — translational repression or cleavage. (Exploited experimentally as knockdown — biotechnology lesson.)
4. **Upstream ORFs, mRNA half-life, poly-A tail length**: additional dials — regulation does not end at the promoter.

### The Toxin & Antibiotic Gallery (Ribosome Edition)

| Agent | Target | Mechanism |
|-------|--------|-----------|
| Tetracyclines | Bacterial 30S | Block A-site tRNA entry |
| Aminoglycosides | Bacterial 30S | Misreading + initiation block (bactericidal) |
| Chloramphenicol | Bacterial 50S | Inhibits peptidyl transferase |
| Macrolides (erythromycin) | Bacterial 50S | Plug the exit tunnel — chain cannot elongate past a few residues |
| Diphtheria toxin / Pseudomonas exotoxin A | Human eEF2 | ADP-ribosylation halts translocation (enzymatic — one molecule suffices) |
| Ricin | Human 60S rRNA | Depurinates one adenine of 28S rRNA — catalytically inactivates the subunit |
| Puromycin | All ribosomes | Aminoacyl-tRNA mimic; accepts the chain, then releases it — premature termination |

Selectivity rule: antibiotics exploit the 70S vs 80S difference — but remember **mitochondrial ribosomes are 70S-like**, the accepted explanation for aminoglycoside/chloramphenicol/linezolid mitochondrial toxicity (Organelles Part 3 crossover).

### Passage Strategy for the Whole Central Dogma

- **Level-of-control test**: mRNA level changed? (transcription/stability — northern, qPCR). mRNA flat but protein changed? (translation or protein stability — polysome profile and pulse-chase decide between them). Protein flat but activity changed? (PTM — phosphatase treatment, mobility shifts).
- **Polysome profiling**: an mRNA shifting from light monosomes into heavy polysome fractions = translationally ACTIVATED, even with total mRNA unchanged.
- **Pulse-chase**: label newly made protein briefly, chase, and follow — separates synthesis rate (pulse intensity) from degradation rate (chase decay).`
    },
    {
      id: 'tln4-worked',
      type: 'text' as const,
      content: `### Worked Example — The Iron Passage, End to End

**Passage-style problem.** Researchers treat cultured cells with an iron chelator (desferrioxamine) or with excess iron, then measure ferritin protein, ferritin mRNA, transferrin receptor (TfR) protein, and TfR mRNA.

Results: chelator — ferritin protein DOWN with ferritin mRNA UNCHANGED; TfR protein UP with TfR mRNA UP. Excess iron — the mirror image (ferritin protein up, mRNA unchanged; TfR protein and mRNA down).

**Question 1 — Ferritin protein falls without any mRNA change. Name the control level and mechanism.** Translational control: low iron leaves IRP iron-free and able to clamp the IRE hairpin in ferritin's 5' UTR, physically blocking 40S scanning. The transcript sits intact but unread — exactly why the mRNA measurement stays flat. Any answer invoking transcription contradicts the unchanged mRNA.

**Question 2 — TfR mRNA RISES with chelation, yet the passage states the TfR gene's transcription rate is constant. Reconcile.** Steady-state mRNA = synthesis minus decay (the transcription lesson's bathtub). Constant synthesis with rising level means slowed DECAY: IRP bound to the 3' UTR IREs shields TfR mRNA from nucleases. Same sensor, different element position, different mechanism — stability, not initiation.

**Question 3 — Predict the phenotype of a mutation deleting the IRE from ferritin's 5' UTR.** Constitutive, iron-blind ferritin translation — high ferritin even in iron deficiency. This exact class of mutation (in the related L-ferritin IRE) causes hereditary hyperferritinemia-cataract syndrome. Deleting a repressor's binding SITE de-represses permanently and cannot be rescued by more IRP (cis vs trans, again).

**Question 4 — Why does the cell wire ferritin and TfR in opposite directions off one signal?** Physiology check: low iron means import more (TfR up) and stop warehousing (ferritin down); high iron means the reverse — storage protects against iron's ROS chemistry (Fenton reactions). Regulation questions ultimately resolve to teleology-backed-by-mechanism: state the mechanism, then confirm the direction makes physiological sense. If your predicted direction serves no purpose, re-check which UTR you assigned.`
    },
    {
      id: 'tln4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Translational Control & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `During viral infection, a cellular kinase phosphorylates eIF2. The consequence for the infected cell is:`,
            options: [`Selective destruction of viral ribosomes`,`Enhanced translation of all cellular mRNAs`, `A global shutdown of translation initiation, denying the virus the host machinery it depends on`, `Increased transcription of viral genes`],
            correctAnswer: 2,
            explanation: `Viruses are obligate parasites of host ribosomes, so the cell's scorched-earth defense (via PKR, a double-stranded-RNA-activated kinase) is to disable its OWN initiation: phosphorylated eIF2 cannot be recycled to deliver initiator tRNA, and bulk protein synthesis stops — viral synthesis included. It is the same eIF2 lever the integrated stress response uses for starvation and unfolded proteins: one global brake, many hands on it. Note the specificity trade-off: the cell sacrifices its own translation too.`
          },
          {
            question: `When cellular iron is LOW, the iron regulatory protein (IRP) binds IREs on both ferritin and transferrin receptor mRNAs, yet ferritin production falls while TfR production rises. The opposite outcomes occur because:`,
            options: [`The IRE's location differs — 5' UTR binding blocks translation initiation (ferritin), while 3' UTR binding stabilizes the mRNA against degradation (TfR)`, `Two different IRPs exist with opposite activities`, `Ferritin mRNA is transcribed less when iron is low`, `TfR protein is protected from proteasomal degradation by IRP`],
            correctAnswer: 0,
            explanation: `One sensor, one binding event, two mechanisms determined purely by geography: parked in the 5' UTR, IRP is a roadblock to scanning ribosomes; parked in the 3' UTR, it is a bodyguard against nucleases. The directions serve physiology — import more, store less, when iron is scarce. This is the MCAT's canonical example of position-dependent regulation; if you find yourself inventing extra proteins (option B) to explain opposite outcomes, look for a positional explanation first.`
          },
          {
            question: `A patient on long-term aminoglycoside therapy develops hearing loss attributed to mitochondrial dysfunction in cochlear hair cells. Aminoglycosides can injure mitochondria because:`,
            options: [`Mitochondria import the drug and convert it to a DNA crosslinker`, `Mitochondrial ribosomes resemble the bacterial 70S ribosomes the drug targets — a legacy of endosymbiosis`, `The drug inhibits the 80S cytosolic ribosome`, `Aminoglycosides chelate iron needed by the electron transport chain`],
            correctAnswer: 1,
            explanation: `The selective-toxicity wall between 70S and 80S ribosomes has a documented breach: mitochondrial ribosomes descend from bacterial ancestors and retain drug-sensitive features (certain mitochondrial rRNA variants heighten susceptibility — maternally inherited aminoglycoside deafness). High-energy tissues with limited regeneration — cochlear hair cells, renal tubules — show the damage first. The same endosymbiosis argument covers chloramphenicol marrow suppression and linezolid toxicity: one evolutionary fact, several drug side effects.`
          },
          {
            question: `In a polysome-profiling experiment, insulin treatment shifts a specific mRNA from the light monosome fractions into heavy polysome fractions, while the total amount of that mRNA is unchanged. The correct conclusion is that insulin:`,
            options: [`Increased transcription of the gene`, `Stabilized the mRNA against decay`, `Induced degradation of the encoded protein`, `Increased the translational efficiency of the existing mRNA — more ribosomes now initiate on each transcript`],
            correctAnswer: 3,
            explanation: `Polysome profiles read out ribosome loading per transcript: migration into heavier fractions means more ribosomes per mRNA, i.e., faster initiation — translational activation of an unchanged mRNA pool. Increased transcription or stability would raise TOTAL mRNA (measured flat), and protein degradation is invisible to this assay entirely. Assign each assay its claim: qPCR/northern = amount of RNA; polysome profile = translation; pulse-chase = protein synthesis vs turnover.`
          },
          {
            question: `Ricin catalytically depurinates a single adenine in 28S rRNA, and one internalized ricin molecule can kill a cell. Diphtheria toxin shows similar single-molecule lethality via ADP-ribosylating eEF2. The shared design principle behind such potency is that both toxins:`,
            options: [`Form pores in the plasma membrane`, `Bind irreversibly to one ribosome each`, `Are enzymes that covalently and irreversibly inactivate essential translation components far faster than the cell can replace them`, `Trigger apoptosis receptors on the cell surface`],
            correctAnswer: 2,
            explanation: `Stoichiometric inhibitors (one toxin, one target) can be outnumbered; CATALYTIC toxins turn over — a single enzyme molecule processively destroys thousands of ribosomes or eEF2 molecules, and covalent damage (a missing purine, an ADP-ribose) cannot be reversed, only replaced by new synthesis... which requires the very machinery being destroyed. That vicious circle is the potency secret. On any toxin question, first ask: stoichiometric binder or catalytic modifier? The answer scales everything else.`
          }
        ]
      }
    },
    {
      id: 'tln4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Translational control is fast and reversible: global brake = eIF2 phosphorylation (stress, viral defense via PKR); specific dials = UTR elements, miRNAs, uORFs, poly-A length
- The iron circuit is position logic: IRP on a 5' UTR IRE blocks initiation (ferritin, low iron = less storage); IRP on 3' UTR IREs blocks decay (TfR, low iron = more import); one sensor, opposite outcomes, physiologically coherent
- Deleting a repressor's site = constitutive expression, unrescuable in trans (hyperferritinemia-cataract syndrome)
- Ribosome pharmacology: 30S (tetracycline A-site block, aminoglycoside misreading) vs 50S (chloramphenicol peptidyl transferase, macrolide exit tunnel); human targets — eEF2 (diphtheria, ADP-ribosylation), 28S rRNA (ricin depurination), any ribosome (puromycin mimic)
- Mitochondrial 70S-like ribosomes breach antibiotic selectivity: aminoglycoside deafness, chloramphenicol marrow toxicity — endosymbiosis with clinical consequences
- Catalytic toxins beat stoichiometric ones: covalent, irreversible, processive — single-molecule lethality
- Level-of-control algorithm: mRNA changed = transcription/stability; mRNA flat + protein changed = translation (polysome shift) or turnover (pulse-chase); protein flat + activity changed = PTM`
    }
  ]
};
