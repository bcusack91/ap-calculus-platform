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

1. **Global control by initiation-factor phosphorylation**: stress (unfolded proteins, viral infection, starvation) activates kinases that phosphorylate the **initiation factor that delivers initiator tRNA**, throttling initiation — bulk translation drops while select stress mRNAs continue.

<!-- yield:low -->
- That factor is **eIF2**; the kinase network is called the integrated stress response, and the virus-sensing kinase is PKR (activated by double-stranded RNA).
<!-- /yield -->

2. **mRNA-specific control — the iron story (a classic example)**: **iron regulatory protein (IRP)** binds **iron response elements** (IREs, hairpins) when iron is LOW:
   - **Ferritin** mRNA (iron storage): IRE in the **5' UTR** — bound IRP blocks ribosome scanning → LESS ferritin when iron is low (no iron to store). High iron pulls IRP off → ferritin made.
   - **Transferrin receptor** mRNA (iron import): IREs in the **3' UTR** — bound IRP protects the mRNA from degradation → MORE receptor when iron is low (import more!). High iron releases IRP → mRNA degraded.
   - Same protein, opposite outcomes, decided purely by WHERE the element sits: 5' UTR occupancy blocks initiation; 3' UTR occupancy controls stability.
3. **miRNA/RNAi**: small RNAs guide silencing complexes to complementary mRNA 3' UTRs — translational repression or cleavage. (Exploited experimentally as knockdown — biotechnology lesson.)
4. **mRNA half-life, poly-A tail length**: additional dials — regulation does not end at the promoter.

<!-- yield:low -->
- Short upstream open reading frames (uORFs) in the 5' UTR are another dial: they capture scanning ribosomes before the main start codon.
<!-- /yield -->

### The Toxin & Antibiotic Gallery (Ribosome Edition)

| Agent | Target | Mechanism |
|-------|--------|-----------|
| Tetracyclines | Bacterial 30S | Block A-site tRNA entry |
| Aminoglycosides | Bacterial 30S | Misreading + initiation block (bactericidal) |
| Chloramphenicol | Bacterial 50S | Inhibits peptidyl transferase |
| Macrolides (erythromycin) | Bacterial 50S | Plug the exit tunnel — chain cannot elongate past a few residues |
| Diphtheria toxin | Human eEF2 (translocation factor) | ADP-ribosylation halts translocation (enzymatic — one molecule suffices) |
| Ricin | Human 60S rRNA | Depurinates one adenine of 28S rRNA — catalytically inactivates the subunit |
| Puromycin | All ribosomes | Aminoacyl-tRNA mimic; accepts the chain, then releases it — premature termination |

<!-- yield:low -->
- Diphtheria toxin's mechanistic twin: **Pseudomonas exotoxin A** also ADP-ribosylates human eEF2.
<!-- /yield -->

Selectivity rule: antibiotics exploit the 70S vs 80S difference — but remember **mitochondrial ribosomes are 70S-like**, the accepted explanation for the mitochondrial toxicity of some ribosome-targeting antibiotics, such as aminoglycoside hearing loss (Organelles Part 3 crossover).

<!-- yield:low -->
- The same logic covers chloramphenicol's bone-marrow suppression and linezolid's mitochondrial toxicity.
<!-- /yield -->

### Passage Strategy for the Whole Central Dogma

- **Level-of-control test**: mRNA level changed? (transcription/stability — northern, qPCR). mRNA flat but protein changed? (translation or protein stability — polysome profile and pulse-chase decide between them). Protein flat but activity changed? (PTM — phosphatase treatment, mobility shifts).
- **Polysome profiling**: an mRNA shifting from light monosomes into heavy polysome fractions = translationally ACTIVATED, even with total mRNA unchanged.
- **Pulse-chase**: label newly made protein briefly, chase, and follow — separates synthesis rate (pulse intensity) from degradation rate (chase decay).`
    },
    {
      id: 'tln4-worked',
      type: 'text' as const,
      content: `### Worked Example — The Iron Passage, End to End

Researchers treat cultured cells with an iron chelator (desferrioxamine) or with excess iron, then measure ferritin protein, ferritin mRNA, transferrin receptor (TfR) protein, and TfR mRNA.

**Problem 1.** With the chelator, ferritin protein goes DOWN while ferritin mRNA is UNCHANGED. Excess iron gives the mirror image: ferritin protein up, mRNA unchanged.

- **(a)** At which level is ferritin being controlled?
- **(b)** What does the iron sensor do when iron is low, and where on the mRNA?
- **(c)** Why does the ferritin mRNA measurement stay flat?

**(a) Control level.** Translation or protein turnover, not transcription: any answer invoking transcription contradicts the unchanged mRNA. The 5' UTR IRE in (b) makes it translation.

**(b) Mechanism.** Low iron leaves IRP iron-free and able to clamp the IRE hairpin in ferritin's 5' UTR, physically blocking 40S scanning.

**(c) Flat mRNA.** The transcript sits intact but unread, so the amount of ferritin mRNA does not change.

**Problem 2.** With the chelator, TfR protein and TfR mRNA both go UP, yet the TfR gene's transcription rate is constant.

- **(a)** What sets an mRNA's steady-state level?
- **(b)** With synthesis constant, what must have changed?
- **(c)** How does IRP cause that change, and how does it differ from ferritin?

**(a) The bathtub.** Steady-state mRNA = synthesis minus decay (the transcription lesson's bathtub).

**(b) Slower decay.** Constant synthesis with a rising level means DECAY slowed.

**(c) Position.** IRP bound to the 3' UTR IREs shields TfR mRNA from nucleases. Same sensor, different element position, different mechanism — stability, not initiation.

**Problem 3.** A mutation deletes the IRE from ferritin's 5' UTR.

- **(a)** How does ferritin translation respond to iron now?
- **(b)** Can extra IRP restore the regulation?

**(a) Iron-blind.** Constitutive, iron-blind ferritin translation — high ferritin even in iron deficiency.

**(b) Cis vs trans.** No. Deleting a repressor's binding SITE de-represses permanently and cannot be rescued by more IRP (cis vs trans, again).

<!-- yield:low -->
This exact class of mutation (in the related L-ferritin IRE) causes hereditary hyperferritinemia-cataract syndrome.
<!-- /yield -->

**Problem 4.** One signal, cellular iron, moves ferritin and TfR in opposite directions (low iron: ferritin down, TfR up).

- **(a)** Why does low iron call for these directions?
- **(b)** Why does high iron call for the reverse?
- **(c)** How should physiology check a regulation answer?

**(a) Low iron.** Low iron means import more (TfR up) and stop warehousing (ferritin down).

**(b) High iron.** Storage protects against free iron's reactive-oxygen chemistry, so high iron means more ferritin and less TfR.

**(c) The check.** Regulation questions resolve to teleology backed by mechanism: state the mechanism, then confirm the direction makes physiological sense. If your predicted direction serves no purpose, re-check which UTR you assigned.`
    },
    {
      id: 'tln4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Translational Control & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `During viral infection, a cellular kinase phosphorylates eIF2, the initiation factor that delivers initiator tRNA. The consequence for the infected cell is:`,
            options: [`Selective destruction of viral mRNAs`, `Enhanced translation of all cellular mRNAs`, `Global shutdown of translation initiation`, `Increased transcription of viral genes`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Viruses are obligate parasites of host ribosomes, so the cell's scorched-earth defense (via a kinase activated by double-stranded RNA) is to disable its OWN initiation: phosphorylated eIF2 cannot be recycled to deliver initiator tRNA, and bulk protein synthesis stops — viral synthesis included. It is the same eIF2 lever cells pull during starvation and unfolded-protein stress: one global brake, many hands on it. Note the specificity trade-off: the cell sacrifices its own translation too.`
          },
          {
            question: `Researchers insert an iron response element (IRE) into the 5' UTR of a luciferase reporter mRNA expressed from a constant promoter. In cells grown in LOW iron, compared with high-iron cells, the reporter shows:`,
            options: [`Less protein, with mRNA level unchanged`, `More protein, as IRP shields the mRNA from decay`, `Less protein and less mRNA, as transcription drops`, `No change, since luciferase itself binds no iron`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `In low iron, IRP is free to bind IREs; parked in a 5' UTR it blocks scanning ribosomes, so less luciferase is made from an unchanged pool of mRNA — the ferritin pattern, transplanted onto a new gene. Shielding mRNA from decay is what IRP does at 3' UTR IREs (the TfR pattern), so predicting more protein assigns the wrong position. IRP acts on the mRNA, not the promoter, so transcription and mRNA level do not fall. The reporter's own chemistry is irrelevant: the element, not the encoded protein, confers iron control.`
          },
          {
            question: `A patient on long-term aminoglycoside therapy develops hearing loss attributed to mitochondrial dysfunction in cochlear hair cells. Aminoglycosides can injure mitochondria because:`,
            options: [`Mitochondria import the drug and convert it to a DNA crosslinker`, `Mitochondrial ribosomes resemble bacterial 70S ribosomes`, `The drug inhibits the 80S cytosolic ribosome`, `Aminoglycosides chelate iron needed by the electron transport chain`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `The selective-toxicity wall between 70S and 80S ribosomes has a documented breach: mitochondrial ribosomes descend from bacterial ancestors and retain drug-sensitive features (certain mitochondrial rRNA variants heighten susceptibility — maternally inherited aminoglycoside deafness). High-energy tissues with limited regeneration — cochlear hair cells, renal tubules — show the damage first. One evolutionary fact, a predictable drug side effect.`
          },
          {
            question: `In a polysome-profiling experiment, insulin treatment shifts a specific mRNA from the light monosome fractions into heavy polysome fractions, while the total amount of that mRNA is unchanged. The correct conclusion is that insulin:`,
            options: [`Increased transcription of the gene's mRNA`, `Stabilized the existing mRNA against decay`, `Induced degradation of the encoded protein`, `Increased translational efficiency of the mRNA`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Polysome profiles read out ribosome loading per transcript: migration into heavier fractions means more ribosomes per mRNA, i.e., faster initiation — translational activation of an unchanged mRNA pool. Increased transcription or stability would raise TOTAL mRNA (measured flat), and protein degradation is invisible to this assay entirely. Assign each assay its claim: qPCR/northern = amount of RNA; polysome profile = translation; pulse-chase = protein synthesis vs turnover.`
          },
          {
            question: `Ricin catalytically depurinates a single adenine in 28S rRNA, and one internalized ricin molecule can kill a cell. Diphtheria toxin shows similar single-molecule lethality via ADP-ribosylating eEF2. The shared design principle behind such potency is that both toxins:`,
            options: [`Form pores that lyse the plasma membrane`, `Bind irreversibly and stoichiometrically to ribosomes`, `Act catalytically, inactivating many targets each`, `Trigger apoptosis receptors on the cell surface`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Stoichiometric inhibitors (one toxin, one target) can be outnumbered; CATALYTIC toxins turn over — a single enzyme molecule modifies thousands of ribosomes or eEF2 molecules, and covalent damage (a missing purine, an ADP-ribose) cannot be reversed, only replaced by new synthesis... which requires the very machinery being destroyed. That vicious circle is the potency secret. On any toxin question, first ask: stoichiometric binder or catalytic modifier? The answer scales everything else.`
          }
        ]
      }
    },
    {
      id: 'tln4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Translational control.** Fast and reversible: stress phosphorylates an initiation factor; UTR elements, miRNAs and poly-A tune mRNAs.
- **Iron position logic.** IRP on ferritin's 5' UTR IRE blocks initiation, on TfR's 3' UTR IREs decay; a lost IRE can't be fixed in trans.
- **Ribosome pharmacology.** Tetracyclines and aminoglycosides hit 30S, chloramphenicol and macrolides 50S; ricin hits human 28S rRNA.
- **Level-of-control test.** mRNA changed = transcription/stability; mRNA flat, protein changed = translation (polysome shift) or turnover (pulse-chase).

**Common traps**

- **Blaming transcription.** Protein falling while its mRNA stays flat points to translation or turnover, never transcription.
- **Inventing a second IRP.** One IRP gives opposite outcomes because of where its IRE sits; look for position first.
- **Perfect 70S selectivity.** Mitochondrial ribosomes are 70S-like, so aminoglycosides can injure mitochondria (hearing loss).
- **Toxins as one-to-one binders.** Ricin and diphtheria toxin are enzymes that modify many targets, so one molecule can kill.

<!-- yield:low -->
**Low-yield extras**

- The phosphorylated factor is eIF2 (integrated stress response; PKR senses viral dsRNA); uORFs are another 5' UTR dial; Pseudomonas exotoxin A is diphtheria toxin's mechanistic twin (ADP-ribosylates eEF2); chloramphenicol marrow suppression and linezolid toxicity are mitochondrial-ribosome effects; L-ferritin IRE mutations cause hereditary hyperferritinemia-cataract syndrome; free iron is dangerous because of Fenton chemistry (hydroxyl-radical generation)
<!-- /yield -->`
    }
  ]
};
