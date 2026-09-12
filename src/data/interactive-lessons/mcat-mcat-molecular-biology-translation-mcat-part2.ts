export const mcatTranslationPart2Data = {
  topicSlug: 'mcat-molecular-biology-translation-mcat',
  sections: [
    {
      id: 'tln2-intro',
      type: 'text' as const,
      content: `# Translation for the MCAT

**Part 2 of 4 — Ribosome Mechanics: Initiation, Elongation, Termination**

### The Machine

- **Prokaryotic ribosome**: 70S = 30S small + 50S large subunit. **Eukaryotic**: 80S = 40S + 60S. (S values do not add — sedimentation is shape-dependent; a favorite detail.)
- Three tRNA slots spanning both subunits: **A site** (aminoacyl — incoming), **P site** (peptidyl — holds the growing chain), **E site** (exit). Mnemonic: APE, reading in the direction tRNAs move.
- **Peptidyl transferase** — the catalyst forming peptide bonds — is **ribosomal RNA** of the large subunit: the ribosome is a ribozyme.

### Initiation — Where Prokaryotes and Eukaryotes Diverge Most

| Feature | Prokaryote | Eukaryote |
|---------|-----------|-----------|
| Start signal location | **Shine-Dalgarno** sequence upstream of each AUG base-pairs with 16S rRNA | 5' cap recognized (eIF4E); 40S **scans** to the first AUG (Kozak context) |
| First amino acid | **fMet** (formylated) | Met (unformylated) |
| Internal starts? | YES — polycistronic mRNAs have a Shine-Dalgarno before each gene | Generally NO — one start per mRNA (monocistronic) |
| Timing | Can begin while mRNA is still being transcribed | Only after processing and export |

Order of assembly (both systems): small subunit + initiator tRNA find the start codon FIRST; the large subunit joins LAST, with the initiator tRNA landing directly in the **P site** — the only tRNA that ever enters there.

### Elongation — The Three-Step Loop

1. **Delivery**: EF-Tu (eEF1) escorts aminoacyl-tRNA into the **A site**; correct codon-anticodon pairing triggers GTP hydrolysis and release — the pairing check IS the proofreading step.
2. **Peptide bond**: the P-site chain is transferred onto the A-site amino acid (peptidyl transferase, rRNA-catalyzed, no extra energy input — the ester bond pays).
3. **Translocation**: EF-G (eEF2) + GTP ratchets the ribosome one codon 3'-ward; tRNAs shift A-to-P and P-to-E; the E-site tRNA leaves.

**Energy audit per peptide bond**: 2 ATP equivalents (charging) + 1 GTP (delivery) + 1 GTP (translocation) = **~4 high-energy bonds per residue** — protein synthesis is the cell's biggest energy line item.

### Termination & Recycling

- A stop codon enters the A site; no tRNA fits. **Release factors** (proteins mimicking tRNA shape) bind and make peptidyl transferase hydrolyze the chain onto water — releasing the protein.
- Subunits dissociate and recycle. Multiple ribosomes read one mRNA simultaneously = a **polysome** (more protein per transcript per unit time; the 5'-most ribosome started LAST).`
    },
    {
      id: 'tln2-worked',
      type: 'text' as const,
      content: `### Worked Example — Locating a Block in the Elongation Cycle

**Passage-style problem.** Four in vitro translation reactions use identical mRNA and components except one inhibitor each. Products are analyzed for peptide length; ribosome-bound tRNAs are probed.

- **Reaction 1**: only dipeptides form; ribosomes stall with peptidyl-tRNA in the A site and a deacylated (empty) tRNA still in the P site — the ribosome never moves to the next codon.
- **Reaction 2**: initiation complexes assemble on the start codon, but no first peptide bond ever forms; the A site never accepts aminoacyl-tRNA.
- **Reaction 3**: full-length peptides form but are released prematurely at random positions as free peptides when a stop-codon-mimicking compound is added.
- **Reaction 4**: on eukaryotic ribosomes only, elongation halts; analysis shows eEF2 carries an ADP-ribose group.

**Question 1 — Assign Reaction 1.** Peptide bond formed (dipeptide exists) but no movement: **translocation** (EF-G/eEF2) is blocked. The stuck geometry — grown chain still in the A site — is the fingerprint, because transfer happens before movement.

**Question 2 — Assign Reaction 2.** Initiation is fine; the failure is **A-site delivery** (EF-Tu function or an A-site blocker like tetracycline). No delivery, no substrate for peptidyl transferase, no first bond. Distinguish this from a peptidyl-transferase inhibitor (chloramphenicol): there, the A site LOADS but the bond never forms.

**Question 3 — Assign Reaction 3 and name the principle.** Premature release at random positions = forced **termination**: the compound (puromycin behaves this way — it enters the A site, accepts the chain, and falls off) hijacks the release chemistry. Random-length free peptides are the tell; a translocation block gives stuck ribosomes, not released chains.

**Question 4 — Reaction 4 is diphtheria toxin. Explain the species specificity and the catastrophic potency.** Diphtheria toxin ADP-ribosylates **eEF2** — the eukaryotic translocase — using NAD$^+$ as the ADP-ribose donor; bacterial EF-G lacks the modified residue (diphthamide). One toxin molecule is an ENZYME: it modifies thousands of eEF2 copies, shutting down all translation in the cell — why single molecules kill cells and why the toxin, not the bacterium, is vaccinated against (toxoid). Pseudomonas exotoxin A shares the identical mechanism — a repeatedly tested pairing.`
    },
    {
      id: 'tln2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Ribosome Mechanics** 🎯`,
      exercise: {
        questions: [
          {
            question: `During initiation, the initiator tRNA is unique among all tRNAs because it:`,
            options: [`Carries no amino acid until it binds the P site`, `Binds the A site with help from EF-Tu`, `Enters the P site directly, not via the A site`, `Pairs with stop codons instead of AUG`],
            correctAnswer: 2,
            explanation: `Every elongator tRNA is delivered into the A site and reaches the P site only by translocation; the initiator (fMet-tRNA in prokaryotes, Met-tRNAi in eukaryotes) instead assembles with the SMALL subunit at the start codon and occupies the P site from the outset — so the first incoming elongator finds codon 2 waiting in the A site. This P-site-first geometry is why the first peptide bond can form immediately after the large subunit docks.`
          },
          {
            question: `The Shine-Dalgarno sequence positions bacterial ribosomes by base-pairing with:`,
            options: [`The 16S rRNA of the 30S subunit`, `The anticodon of the initiator tRNA`, `The 5' cap on the bacterial mRNA`, `The sigma factor of RNA polymerase`],
            correctAnswer: 0,
            explanation: `Bacterial start-site selection is an RNA-RNA handshake: the purine-rich Shine-Dalgarno element upstream of the AUG pairs with a complementary stretch of 16S rRNA, parking the 30S subunit so the proper AUG sits in the P site. Because each cistron of a polycistronic mRNA carries its own Shine-Dalgarno, ribosomes can initiate internally — impossible in the eukaryotic cap-and-scan system, which finds only the first AUG. Bacteria have no caps, and sigma belongs to transcription.`
          },
          {
            question: `Peptide bond formation on the ribosome is catalyzed by rRNA and consumes no GTP or ATP at that step. The energetic price of the bond was paid earlier, during:`,
            options: [`GTP hydrolysis by EF-Tu during tRNA delivery`, `Translocation by EF-G`, `Ribosome assembly in the nucleolus`, `Aminoacyl-tRNA charging by synthetases`],
            correctAnswer: 3,
            explanation: `The ester bond joining amino acid to tRNA is higher-energy than a peptide bond, so transfer of the chain onto the A-site amino group is thermodynamically downhill — the rRNA peptidyl transferase merely positions substrates. GTP spent by EF-Tu (delivery) and EF-G (translocation) buys accuracy and movement, not bond formation. Full audit for exam math: ~4 high-energy phosphate bonds per residue added (2 from charging + 2 GTP).`
          },
          {
            question: `Release factors terminate translation at stop codons. Structurally and functionally, they succeed because they:`,
            options: [`Are special tRNAs whose anticodons pair with stop codons`, `Are proteins that mimic tRNA and trigger hydrolysis`, `Degrade the mRNA at the stop codon to eject the ribosome`, `Occupy the E site and push the peptidyl-tRNA out`],
            correctAnswer: 1,
            explanation: `No tRNA reads UAA, UAG, or UGA; release factors are molecular mimics — proteins whose shape lets them dock in the A site where a tRNA would. Instead of donating an amino group, they position a water molecule, so peptidyl transferase hydrolyzes rather than aminolyzes the peptidyl-tRNA ester, freeing the finished protein. The mRNA itself is untouched and can be re-translated. Mimicry-as-mechanism recurs across biochemistry — recognize the pattern, not just this instance.`
          },
          {
            question: `In an electron micrograph, a single bacterial mRNA is being translated by eight ribosomes at once while RNA polymerase is still elongating the transcript's 3' end. Which statement about this image is correct?`,
            options: [`This must be a eukaryotic cell, since polysomes exist only in eukaryotes`, `The image is impossible — translation requires a finished mRNA`, `The ribosome closest to the mRNA's 5' end loaded most recently`, `The eight ribosomes will produce one protein eight times longer than normal`],
            correctAnswer: 2,
            explanation: `Two testable ideas in one picture. Polysomes: ribosomes load at the fixed 5' start site and travel 3'-ward, so the 5'-most ribosome is the newest — spatial order encodes temporal order. Coupling: bacterial ribosomes engage nascent mRNA the moment a Shine-Dalgarno emerges, feasible only because no nuclear envelope separates the machineries (eukaryotes must finish processing and export first — Organelles Part 4 crossover). Each ribosome makes a complete, normal-length protein independently.`
          }
        ]
      }
    },
    {
      id: 'tln2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Ribosomes: 70S (30S + 50S) prokaryotic vs 80S (40S + 60S) eukaryotic; S values do not add; peptidyl transferase is rRNA — the ribosome is a ribozyme
- Sites: A accepts, P holds the chain, E exits; initiator tRNA (fMet in bacteria) is the only tRNA to enter the P site directly, riding in with the SMALL subunit before the large one joins
- Start finding: Shine-Dalgarno pairs 16S rRNA (internal starts, polycistronic OK) vs cap-binding + scanning to the first AUG in Kozak context (monocistronic)
- Elongation loop: EF-Tu delivers to A (GTP; pairing check), rRNA forms the bond (pre-paid by the charging ester), EF-G translocates (GTP); ~4 high-energy bonds per residue
- Termination: release factors are tRNA-shaped proteins that make the ribosome hydrolyze the chain onto water; subunits recycle
- Polysomes: many ribosomes, one mRNA; 5'-most ribosome initiated last; bacteria couple transcription and translation because there is no nuclear envelope
- Inhibitor fingerprints: stuck chain in A site = translocation block; loaded A site, no bond = peptidyl transferase block; empty A site = delivery block; random released peptides = puromycin-type forced termination; ADP-ribosylated eEF2 = diphtheria/Pseudomonas exotoxin A`
    }
  ]
};
