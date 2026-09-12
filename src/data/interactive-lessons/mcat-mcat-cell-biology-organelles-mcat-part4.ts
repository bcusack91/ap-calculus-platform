export const mcatCellOrganellesPart4Data = {
  topicSlug: 'mcat-cell-biology-organelles-mcat',
  sections: [
    {
      id: 'org4-intro',
      type: 'text' as const,
      content: `# Organelles for the MCAT

**Part 4 of 4 — The Nucleus, Organelle Dynamics & MCAT Integration**

### The Nucleus — Gatekeeping the Genome

- **Nuclear envelope**: two membranes; the outer one is continuous with the rough ER and can carry ribosomes. The envelope is perforated by **nuclear pore complexes (NPCs)**.
- **Traffic rules**: ions and proteins under ~40 kDa diffuse through pores freely; larger proteins need a **nuclear localization signal (NLS)** recognized by importins, and export needs a nuclear export signal (NES) with exportins. The **Ran-GTP gradient** (high GTP-bound Ran inside the nucleus) gives transport its direction — cargo drops off where Ran-GTP binds importin.
- **Nuclear lamina**: a mesh of lamin **intermediate filaments** under the inner membrane. Phosphorylation of lamins by mitotic CDKs disassembles the envelope in prometaphase; dephosphorylation reassembles it in telophase. Lamin mutations cause progeria — a favorite structure-to-disease link.
- **Nucleolus**: not membrane-bound; the site of rRNA transcription (RNA Pol I) and ribosomal subunit assembly. Cells ramping up protein synthesis grow larger nucleoli.
- Key consequence of the envelope: **transcription and translation are uncoupled in eukaryotes** — splicing happens before export, so introns never meet a ribosome. Prokaryotes, lacking a nucleus, translate mRNA while it is still being made.

### Organelles Are Not Static — Dynamics & Contact Sites

| Process | Machinery | Why it matters |
|---------|-----------|----------------|
| Mitochondrial fission | Drp1 (a dynamin-like GTPase) | Distributes mitochondria to daughter cells; isolates damaged segments for mitophagy |
| Mitochondrial fusion | Mitofusins (outer), OPA1 (inner) | Mixes contents, buffers mtDNA mutations — complements heteroplasmy logic from Part 3 |
| ER-mitochondria contact sites | Tethering proteins (MAMs) | Direct Ca$^{2+}$ transfer and lipid exchange without vesicles |
| Autophagy/mitophagy | Double-membrane autophagosome, then lysosome fusion | Quality control; induced by starvation (mTOR off) |

- **Inheritance at division**: organelles are not built from scratch — ER, Golgi fragments, and mitochondria are partitioned to daughters, and mitochondria arise only from existing mitochondria (fission), echoing endosymbiosis.
- **Vesicle identity refresher** (from Part 2): COPII = ER to Golgi (anterograde); COPI = Golgi to ER (retrograde, KDEL receptors); clathrin = trans-Golgi to lysosome and receptor-mediated endocytosis.

### The Passage-Strategy Layer

Organelle passages almost never ask "what does the Golgi do?" They give you an **experiment** and expect you to run four moves:

1. **Localize**: use fractionation speed, marker enzymes, or microscopy tags to decide which compartment the data describe.
2. **Trace the route**: any secreted or membrane protein must run rough ER to Golgi to vesicle; any break in the chain strands cargo one station upstream of the lesion.
3. **Classify the lesion**: enzyme broken, delivery broken (I-cell, ALD), or compartment missing (Zellweger) — Part 3's taxonomy.
4. **Check the gradient**: pH, Ca$^{2+}$, redox, or Ran-GTP — many answers reduce to "the gradient that powers this step collapsed."`
    },
    {
      id: 'org4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Nuclear Transport Experiment

**Passage-style problem.** Researchers microinject three fluorescent proteins into the cytosol of cultured fibroblasts and image nuclear fluorescence 30 minutes later:

- **Protein A** (25 kDa, no targeting sequences): fluorescence equilibrates between cytosol and nucleus.
- **Protein B** (90 kDa, carries an NLS): fluorescence concentrates strongly in the nucleus.
- **Protein C** (90 kDa, same NLS, cells pretreated with a drug that locks Ran in its GDP-bound state everywhere): fluorescence stays cytosolic.

**Question 1 — Why does Protein A enter without an NLS?** At 25 kDa it is below the ~40 kDa passive-diffusion limit of the nuclear pore. It equilibrates (equal brightness both sides) rather than accumulates — passive diffusion cannot concentrate anything.

**Question 2 — What does Protein B demonstrate?** Signal-dependent, receptor-mediated import: importins bind the NLS and ferry cargo through the pore. The nucleus becomes BRIGHTER than the cytosol — movement against a concentration gradient, which requires energy. The energy source is the Ran-GTP gradient, not ATP hydrolysis at the pore itself.

**Question 3 — Why does the Ran-GDP drug block import of Protein C?** Cargo release inside the nucleus requires Ran-GTP binding to importin. With Ran trapped as Ran-GDP, import complexes cannot be dissociated and importins cannot be recycled, so signal-dependent transport stalls; passive diffusion of small proteins is unaffected. Note the experimental logic: the drug separates the **recognition step** (NLS binding, intact) from the **directionality step** (Ran gradient, broken).

**Extension the MCAT loves**: during mitosis this whole system is moot — nuclear envelope breakdown (lamin phosphorylation) makes compartmentalization vanish until telophase. A protein "suddenly gaining access to chromatin only in M phase" needs no transport explanation at all.`
    },
    {
      id: 'org4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Nucleus, Dynamics & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `A 100 kDa transcription factor accumulates in the nucleus in healthy cells. After a mutation deletes a short basic stretch of its sequence, the protein remains functional in vitro but stays cytosolic. The deleted element is most likely:`,
            options: [`A signal peptide directing it to the rough ER`, `A mannose-6-phosphate tag`, `A nuclear localization signal recognized by importins`, `A transmembrane anchor domain`],
            correctAnswer: 2,
            explanation: `A 100 kDa protein is far above the nuclear pore's passive diffusion limit, so nuclear entry requires an NLS — classically a short, basic (lysine/arginine-rich) stretch bound by importins. A signal peptide would have sent it INTO the ER lumen (and it was nuclear before the mutation), M6P routes lysosomal hydrolases, and a transmembrane anchor would place it in a membrane, not the nucleoplasm.`
          },
          {
            question: `In prokaryotes, ribosomes commonly translate an mRNA while RNA polymerase is still transcribing it. The reason this is impossible for a eukaryotic nuclear gene is that:`,
            options: [`The nuclear envelope separates transcription from the cytosolic translation machinery, and transcripts are exported only after processing`, `Eukaryotic ribosomes cannot bind mRNA that lacks a Shine-Dalgarno sequence`, `Eukaryotic RNA polymerase degrades ribosomes on contact`, `Eukaryotic mRNAs are translated inside the nucleolus instead`],
            correctAnswer: 0,
            explanation: `Compartmentalization uncouples the two processes: pre-mRNA is capped, spliced, and polyadenylated inside the nucleus, and only mature mRNA is exported through nuclear pores to meet ribosomes. This is why intron-containing transcripts are never translated in healthy cells. The Shine-Dalgarno point is a prokaryotic initiation detail, not the barrier; the nucleolus assembles ribosomal subunits and translates nothing.`
          },
          {
            question: `At the onset of mitosis, the nuclear envelope disassembles. The direct molecular trigger is:`,
            options: [`Digestion of the envelope by lysosomal hydrolases`, `Phosphorylation of lamin intermediate filaments by mitotic CDK activity, collapsing the nuclear lamina`, `Ran-GTP hydrolysis sealing the nuclear pores`, `Fusion of the envelope with the plasma membrane`],
            correctAnswer: 1,
            explanation: `The lamina is a shell of lamin intermediate filaments; mitotic CDK (cyclin B-CDK1) phosphorylation makes lamins disassemble, and the envelope fragments into vesicles/ER until telophase, when phosphatases reverse the modification. It is a reversible phosphorylation switch — no proteolysis or membrane fusion with the cell surface is involved. The same add-phosphate/remove-phosphate logic runs the whole cell cycle lesson.`
          },
          {
            question: `Cells expressing a dominant-negative Drp1 (blocking mitochondrial fission) accumulate elongated, hyperfused mitochondria. Which downstream defect is the most direct prediction?`,
            options: [`Loss of the proton gradient across all inner membranes`, `Failure of transcription of nuclear-encoded mitochondrial genes`, `Immediate arrest of glycolysis`, `Impaired segregation of damaged mitochondrial segments into mitophagy, and unequal partitioning at cell division`],
            correctAnswer: 3,
            explanation: `Fission serves logistics: it pinches off damaged segments so autophagosomes can engulf them (mitophagy) and creates enough discrete units to distribute to daughter cells. Blocking it therefore lets damage accumulate in the network and skews inheritance. Fusion, not fission, mixes contents; the ETC can still run in a hyperfused network, and glycolysis is cytosolic — deliberately placed distractors from adjacent compartments.`
          },
          {
            question: `A secreted protease is normal in sequence, yet in patient cells it accumulates in the Golgi and never reaches secretory vesicles; all other secreted proteins behave normally. The most focused hypothesis is a defect in:`,
            options: [`The signal recognition particle shared by all secreted proteins`, `The proteasome`, `A sorting receptor or signal that packages this specific cargo at the trans-Golgi`, `General vesicle fusion machinery at the plasma membrane`],
            correctAnswer: 2,
            explanation: `Localization plus specificity is the whole question: the block is AFTER the ER (protein reached the Golgi, so SRP and translocation work) and affects ONE cargo (so shared machinery like SNARE-mediated fusion or COPII is intact). That leaves a cargo-specific sorting event at the trans-Golgi — the same one-station-upstream logic as I-cell disease, where the M6P tag fails and hydrolases are missorted. Broken-shared-machinery answers contradict the normal behavior of other proteins.`
          }
        ]
      }
    },
    {
      id: 'org4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Nuclear pores: passive diffusion below ~40 kDa; larger cargo needs an NLS + importin, with direction set by the Ran-GTP gradient (high inside); export uses NES + exportin
- Accumulation against a gradient = signal + receptor + energy; equilibration = passive diffusion — brightness patterns in injection experiments tell you which
- Nuclear lamina = lamin intermediate filaments; CDK phosphorylation dissolves the envelope in mitosis, dephosphorylation rebuilds it; nucleolus (no membrane) = rRNA synthesis and subunit assembly
- The envelope uncouples transcription from translation: splicing precedes export, so eukaryotes never translate introns; prokaryotes co-transcriptionally translate
- Mitochondria remodel constantly: Drp1 fission (segregation, mitophagy) vs mitofusin/OPA1 fusion (content mixing buffers heteroplasmy); ER-mitochondria contacts pass Ca$^{2+}$ and lipids directly
- Passage strategy: localize (markers, fractionation), trace the secretory route and stall one station upstream of the lesion, classify enzyme-vs-delivery-vs-compartment defects, and ask which gradient (pH, Ca$^{2+}$, redox, Ran-GTP) powers the step
- Specific-cargo defects point to specific sorting signals/receptors; everything-affected defects point to shared machinery`
    }
  ]
};
