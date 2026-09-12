export const mcatDnaReplicationPart4Data = {
  topicSlug: 'mcat-molecular-biology-dna-replication-mcat',
  sections: [
    {
      id: 'dnar4-intro',
      type: 'text' as const,
      content: `# DNA Replication for the MCAT

**Part 4 of 4 — Replication in Context: Cell Cycle, Drugs & MCAT Integration**

### Once and Only Once — Licensing

- Replication is confined to **S phase**, and every origin must fire **at most once per cycle**; re-replication means amplified, unstable DNA.
- The trick is temporal separation: **licensing** (loading inactive helicases at origins) is allowed only in late M/G1 when CDK activity is LOW; **firing** (activating those helicases) requires the HIGH S-phase CDK activity that simultaneously forbids new licensing. The same signal that starts replication prevents relicensing — an elegant mutual-exclusion design the MCAT phrases as "why can't an origin fire twice?"
- Checkpoint coupling: stalled forks and damage activate ATR/ATM-p53 signaling; S does not hand off to M until replication completes (G2/M checkpoint).

### Prokaryote vs Eukaryote Scorecard

| Feature | Prokaryote | Eukaryote |
|---------|-----------|-----------|
| Chromosome | Circular, one origin | Linear, many origins |
| Fork speed | ~1000 nt/s | ~50 nt/s (nucleosomes) |
| Main polymerases | Pol III (synthesis), Pol I (primer removal) | Pol alpha-primase (start), delta (lagging), epsilon (leading) |
| Ends | None — no telomere problem | Telomeres + telomerase |
| Timing | Continuous with growth | S phase only, licensed origins |
| Coupled processes | Replication, transcription, translation share one compartment | Replication in nucleus; chromatin must be disassembled/reassembled |

### Drugs That Target Replication — Mechanism Classes

1. **Chain terminators (nucleoside analogs)**: look like nucleosides but lack a usable 3'-OH. **Acyclovir** (activated by viral thymidine kinase — selectivity!) and **AZT** (azide at the 3' position; inhibits HIV reverse transcriptase) get incorporated, then nothing can be added. Same chemistry as Sanger's dideoxynucleotides in biotechnology.
2. **Topoisomerase poisons**: fluoroquinolones (bacterial gyrase), etoposide and camptothecin analogs (human topo II and I — chemotherapy). These trap cleavage complexes, converting a normal intermediate into double-strand breaks.
3. **Antimetabolites**: methotrexate (dihydrofolate reductase) and 5-fluorouracil (thymidylate synthase) starve the cell of dNTPs — replication stalls for lack of building blocks. Rapidly dividing tissues (marrow, gut, hair) take collateral damage: the classic chemotherapy side-effect triad.
4. **Crosslinkers/intercalators**: cisplatin crosslinks guanines (NER substrate); intercalators distort the helix and block fork passage.

**Selectivity logic** to carry into pharmacology passages: a good drug exploits a difference — a viral enzyme (thymidine kinase, reverse transcriptase), a bacterial-only target (gyrase), or merely a KINETIC difference (cancer cells divide more; antimetabolites hit them hardest).`
    },
    {
      id: 'dnar4-worked',
      type: 'text' as const,
      content: `### Worked Example — An Antiviral Passage, Fully Dissected

**Passage-style problem.** Acyclovir is a guanosine analog whose sugar is an incomplete ring lacking the 3'-OH. It is inert until phosphorylated; the FIRST phosphorylation can be performed efficiently only by herpesvirus thymidine kinase (TK), after which host kinases finish making the triphosphate. Resistant herpes isolates from immunocompromised patients frequently carry loss-of-function mutations in viral TK.

**Question 1 — Why does acyclovir stop viral DNA synthesis mechanistically?** Once the triphosphate is incorporated by the viral DNA polymerase opposite a template C, the new 3' end has no hydroxyl. Polymerization chemistry requires that 3'-OH to attack the next dNTP — synthesis terminates absolutely. This is chain termination, identical in principle to a dideoxynucleotide in Sanger sequencing.

**Question 2 — Explain the drug's selectivity for infected cells.** The prodrug design puts the selective step FIRST: uninfected cells lack viral TK, so acyclovir is never activated in them; infected cells convert it to the active triphosphate, which additionally inhibits and is preferentially incorporated by the VIRAL polymerase. Two multiplied selectivity filters (activation + target preference) give a wide therapeutic index — contrast with antimetabolite chemotherapy, whose only filter is division rate.

**Question 3 — Why do TK mutations cause resistance, and what does that predict about such strains?** No viral TK, no first phosphorylation, no active drug — resistance by FAILURE TO ACTIVATE, not by target alteration. Prediction: TK-negative strains remain sensitive to drugs that do not need TK activation (e.g., foscarnet, which hits the polymerase directly) — resistance mechanisms are pathway-specific.

**Question 4 — Data twist.** If a passage shows acyclovir-monophosphate accumulating but no triphosphate, the block is at the HOST kinase steps, not viral TK. Always locate the failed step in the activation cascade before naming the mechanism — the MCAT loves handing you the intermediate that pinpoints it.`
    },
    {
      id: 'dnar4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Replication Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Origin licensing (helicase loading) occurs only when CDK activity is low, while origin firing requires high CDK activity that also blocks new licensing. This arrangement guarantees that:`,
            options: [`Replication can occur in every phase of the cell cycle`, `Each origin can fire at most once per cell cycle, preventing re-replication of any genome segment`, `The lagging strand is synthesized before the leading strand`, `Telomeres are replicated first`],
            correctAnswer: 1,
            explanation: `Because loading and firing demand mutually exclusive CDK states, an origin that has fired cannot be reloaded until the next G1 — the cycle must pass through mitosis and CDK reset first. That is the whole point: once-and-only-once replication. The design generalizes: whenever a process must happen exactly once per cycle, look for two steps requiring opposite states of the same global signal.`
          },
          {
            question: `AZT (zidovudine) is a thymidine analog bearing an azide group in place of the 3'-hydroxyl. After conversion to its triphosphate, it inhibits HIV replication because:`,
            options: [`It prevents the viral RNA genome from entering the nucleus`, `It methylates the viral genome into silence`, `Reverse transcriptase incorporates it into the growing DNA strand, where the missing 3'-OH makes further elongation impossible`, `It binds the ribosome and stops translation of viral proteins`],
            correctAnswer: 2,
            explanation: `Chain termination again: every polymerase, reverse transcriptase included, elongates only from a free 3'-OH. AZT-triphosphate competes with dTTP, and once incorporated the azide dead-ends the strand. Selectivity is kinetic — HIV reverse transcriptase incorporates the analog far more readily than host polymerases do (though mitochondrial polymerase gamma inhibition explains AZT toxicity). Link this chemistry to acyclovir and to Sanger dideoxy sequencing: one mechanism, three exam contexts.`
          },
          {
            question: `Etoposide traps human topoisomerase II after it has cut both DNA strands but before it reseals them. The lesion this creates, and the repair pathway a G2 cell would prefer for it, are:`,
            options: [`A double-strand break; homologous recombination using the sister chromatid`, `A mismatched base pair; mismatch repair`, `A thymine dimer; nucleotide excision repair`, `An unsealed Okazaki fragment; DNA ligase alone`],
            correctAnswer: 0,
            explanation: `Topo II's normal catalytic intermediate is a transient double-strand break held by the enzyme; the poison makes it permanent. In G2 a sister chromatid exists, so HR can repair the break faithfully — which is also why HR-deficient (BRCA-mutant) cells are hypersensitive to such drugs. The other options mispair lesion and pathway; matching lesion type to repair pathway is among the most re-tested skills in this unit.`
          },
          {
            question: `Methotrexate inhibits dihydrofolate reductase, depleting the thymidylate (dTTP) supply. Bone marrow suppression and gut mucositis are predictable side effects because:`,
            options: [`Methotrexate also poisons gyrase in gut bacteria`, `dTTP is required for RNA synthesis in all cells equally`, `Marrow and gut cells uniquely lack dihydrofolate reductase`, `These tissues divide continuously, so their S-phase demand for dNTPs makes them most sensitive to nucleotide starvation`],
            correctAnswer: 3,
            explanation: `Antimetabolites have no molecular selectivity for tumors — their only filter is replication rate. Any tissue in constant S phase (marrow, intestinal epithelium, hair follicles) starves alongside the cancer, producing the classic triad of myelosuppression, mucositis, and alopecia. dTTP is a DNA-only nucleotide (RNA uses uracil), and DHFR is present in all human cells. Expect passages to test whether you see side effects as the mechanism applied to normal tissue.`
          },
          {
            question: `A researcher finds that a new compound halts DNA synthesis in bacterial cells within seconds, while RNA synthesis continues for several minutes and protein synthesis even longer. The compound most likely directly targets:`,
            options: [`RNA polymerase`, `A replication-specific enzyme such as the replicative polymerase or helicase, with transcription and translation failing only later as downstream consequences`, `The ribosome`, `The cell wall`],
            correctAnswer: 1,
            explanation: `Kinetics reveal the primary target: the process that dies FIRST is the one directly hit; processes using pre-existing machinery and templates coast before decaying. Immediate DNA-synthesis arrest with delayed transcription/translation decline points to the replication apparatus itself. If RNA synthesis had stopped first, you would suspect RNA polymerase (rifampin's profile). This order-of-shutdown logic is a standard experimental-design question across the molecular biology lessons.`
          }
        ]
      }
    },
    {
      id: 'dnar4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Licensing (low CDK) and firing (high CDK) require opposite CDK states, so each origin fires once per cycle; re-replication is structurally forbidden
- Scorecard: circular/one origin/fast (prokaryote) vs linear/many origins/slow with nucleosomes, telomeres, S-phase confinement (eukaryote)
- Chain terminators = nucleoside analogs without a usable 3'-OH: acyclovir (viral TK activates — prodrug selectivity), AZT (HIV reverse transcriptase), and Sanger dideoxynucleotides share one mechanism
- Topoisomerase poisons (fluoroquinolones, etoposide) freeze cleavage complexes into double-strand breaks — HR repairs them, and HR-deficient tumors are hypersensitive
- Antimetabolites (methotrexate, 5-FU) starve S phase of dNTPs; selectivity is purely kinetic, so fast-renewing tissues explain the side-effect triad
- Selectivity checklist for any drug passage: unique enzyme (viral TK, RT), unique target (gyrase), or unique kinetics (division rate)
- Integration habits: locate the failed step in an activation cascade from the accumulating intermediate; identify a compound's direct target by which process shuts down FIRST`
    }
  ]
};
