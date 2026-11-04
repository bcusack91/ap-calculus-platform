export const mcatVirusesPart1Data = {
  topicSlug: 'mcat-microbiology-viruses-mcat',
  sections: [
    {
      id: 'vir1-intro',
      type: 'text' as const,
      content: `# Viruses

**Part 1 of 4 — Viral Architecture & the Infectious Cycle**

### What a Virus Is (and Is Not)

A **virion** is genetic material in a protein box: a DNA **or** RNA genome (never both) inside a **capsid** built from repeating protein subunits (**capsomeres**), sometimes wrapped in a host-derived lipid **envelope** studded with viral glycoproteins.

Viruses are **obligate intracellular parasites**: no ribosomes, no ATP-generating metabolism, no ability to replicate outside a cell. They fail most definitions of life — no growth, no homeostasis, no independent reproduction — yet they evolve by mutation and selection.

Size scale: ~20-300 nm, generally below light-microscope resolution and small enough to pass bacteria-retaining filters (their original discovery signature).

### Genome Diversity — the Widest in Biology

Viral genomes may be DNA or RNA; single- or double-stranded; linear, circular, or **segmented** (in pieces); and as small as a few genes. Two housekeeping conventions:

- **Positive (+) sense RNA** = readable directly as mRNA.
- **Negative (−) sense RNA** = complement of mRNA; must be transcribed before translation (details in Part 3).

**Enveloped vs naked** predicts real behavior: envelopes (acquired by budding through host membranes) are damaged by detergents, drying, and stomach acid — enveloped viruses favor direct contact/respiratory transmission.

**Naked capsids are tougher**: fecal-oral routes, surfaces, and GI survival belong to naked viruses.

### The Six-Step Infectious Cycle

1. **Attachment (adsorption):** viral surface protein binds a specific host receptor — the interaction that defines **tropism** (which species and cell types are infectable). No receptor, no infection.
2. **Penetration:** receptor-mediated endocytosis, or (enveloped only) membrane **fusion**.
3. **Uncoating:** capsid disassembles, releasing the genome.
4. **Synthesis:** genome replication + mRNA production + protein translation — strategy depends entirely on genome type (Parts 2-3).
5. **Assembly:** capsids self-assemble around new genomes.
6. **Release:** **lysis** (kills the cell — typical of naked viruses) or **budding** through a membrane (acquires the envelope; the cell may survive for a while, continuously shedding virions).

### Quantifying Infection

The **plaque assay** counts infectious units: virus dilutions on a cell monolayer produce clear zones (plaques), each founded by ONE infectious virion — reported as plaque-forming units (PFU).

The **one-step growth curve** shows an **eclipse period** (after uncoating, NO intact virions exist inside the cell — infectivity vanishes before it multiplies) followed by a **burst** of progeny per cell. The eclipse is conceptual gold: a virus is information, not a dividing cell; it disassembles to reproduce.`
    },
    {
      id: 'vir1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Life-Cycle Reasoning

**Problem 1.** A synchronized infection is tracked over time: intracellular infectivity drops to zero from 0-8 h, rises steeply from 8-16 h, and extracellular virions appear all at once after 16 h, as the cells die.

- **(a)** Which phase of the cycle is 0-8 h?
- **(b)** What would electron microscopy show inside a cell at 6 h?
- **(c)** What is happening from 8-16 h?
- **(d)** Does the release after 16 h look like lysis or budding?

**(a) The eclipse.** 0-8 h is the **eclipse**: the virion has uncoated, and genomes and proteins are being synthesized separately, so no infectious particle exists yet.

**(b) EM at 6 h.** NO intact virions, only replication complexes and free viral components.

**(c) Assembly.** From 8-16 h, components self-assemble, so intracellular infectious particles accumulate.

**(d) Lysis.** Release is delayed, abrupt and kills the cells, consistent with lysis rather than continuous budding. "Infectivity disappears, then reappears" is the eclipse signature unique to viral reproduction.

**Problem 2.** Three antivirals are tested. Drug 1 is a soluble decoy that mimics the host receptor; drug 2 blocks endosomal acidification; drug 3 inhibits the viral protease that trims capsid proteins.

- **(a)** Which step does drug 1 block, and whom does it protect?
- **(b)** Which step does drug 2 block, and does it help cells already infected?
- **(c)** Which step does drug 3 block, and where does it act?
- **(d)** What general rule links a drug's step to who is protected?

**(a) Drug 1.** It binds the virion's attachment proteins, blocking ATTACHMENT; it protects uninfected cells only.

**(b) Drug 2.** Many enveloped viruses fuse only after endosomal acidification triggers their fusion protein, so drug 2 blocks PENETRATION/uncoating. It is again prophylactic and useless once the virus is inside.

**(c) Drug 3.** It blocks maturation during ASSEMBLY and acts INSIDE infected cells, preventing production of infectious progeny (the logic of HIV protease inhibitors).

**(d) The rule.** Entry-step drugs prevent infection; late-step drugs suppress ongoing production. Place any antiviral on the six-step cycle first, and "who is protected" follows automatically.

**Problem 3.** Influenza virions agglutinate red blood cells by binding sialic acid. Serum taken from a patient after vaccination blocks this agglutination.

- **(a)** How do virions clump red blood cells together?
- **(b)** What does the hemagglutination-inhibition assay measure?
- **(c)** Why does the inhibition titer correlate with protection?

**(a) Crosslinking.** Each virion carries many hemagglutinin (HA) spikes; by binding sialic acid on several RBCs at once, virions crosslink the cells into a lattice.

**(b) What is measured.** Anti-HA antibodies coat the receptor-binding site, so no crosslinking occurs; the hemagglutination-inhibition titer counts receptor-blocking antibody.

**(c) Why it predicts protection.** The same HA-sialic acid interaction is the virus's ATTACHMENT step, so antibodies that inhibit agglutination also neutralize infection. Assays often exploit the same molecular event as pathogenesis.`
    },
    {
      id: 'vir1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Viral Structure & Life Cycle** 🎯`,
      exercise: {
        questions: [
          {
            question: `In a one-step growth experiment, a drug that completely blocks capsid assembly is added 2 h after infection, during the eclipse. Over the next 16 h, intracellular infectivity will most likely:`,
            options: [`Rise on schedule, because the genome is already uncoated`, `Return to the input level as the original virions re-form`, `Rise as soon as viral mRNA is first translated`, `Stay at zero, because new particles cannot be assembled`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Uncoating destroyed the input particles, so infectivity is already zero at 2 h; it can only return when new genomes and proteins self-assemble into complete virions. With assembly blocked, genomes and proteins may pile up, but no infectious particle forms, so infectivity stays at zero. An uncoated genome is not an infectious particle, so rising "on schedule" ignores the blocked step. The original virions never re-form, since their capsids were dismantled. Translating viral mRNA makes proteins, not assembled virions.`
          },
          {
            question: `Norovirus (naked capsid) spreads efficiently by the fecal-oral route and persists on surfaces, while influenza (enveloped) transmits mainly by fresh respiratory droplets. The property that best explains this difference is:`,
            options: [`The lipid envelope's fragility to acid, bile, and drying`, `The larger, more stable genomes of naked viruses`, `Faster replication of enveloped viruses in airway cells`, `The ability of naked viruses to infect without receptors`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `An envelope is a fragile lipid bilayer: stomach acid, bile salts, desiccation, and soap destroy it — and with it, infectivity, since the fusion glycoproteins live there. Protein-only capsids withstand the GI tract and dry surfaces. Genome size and replication speed do not explain survival outside the host, and all viruses still need receptors.`
          },
          {
            question: `A virus infects human hepatocytes but not human neurons, and chimpanzee but not mouse hepatocytes. The most direct determinant of this tropism is:`,
            options: [`Temperature differences between the tissues`, `Attachment protein fit to a host receptor`, `GC content matching the host cell's codon usage`, `Host cell size relative to the virion diameter`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Attachment is a lock-and-key event between a virion surface protein and a specific host receptor; only cells displaying the receptor (in a compatible species version) can be entered. Downstream intracellular factors refine tropism, but receptor match is the gatekeeper and the standard MCAT answer — tissue temperature, genome GC content, and cell size do not decide which cells a virus can enter.`
          },
          {
            question: `Which feature would definitively establish that a novel infectious agent is a virus rather than a small bacterium?`,
            options: [`It passes through a 0.2 micron bacteriological filter`, `It can be seen only with an electron microscope`, `It replicates only inside cells and has no ribosomes`, `It is unaffected by penicillin and other beta-lactams`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Filterability and small size are suggestive but some bacteria (Mycoplasma, which also lacks the cell wall penicillin targets) squeeze through, and intracellular life alone fits Rickettsia and Chlamydia too. The decisive combination is obligate intracellular replication PLUS absence of the machinery of life — no ribosomes, no energy metabolism, single nucleic acid type.`
          },
          {
            question: `In a plaque assay, 0.1 mL of a 10^-6 dilution yields 42 plaques. The titer of the original stock is closest to:`,
            options: [`4.2 x 10^7 PFU/mL`, `4.2 x 10^6 PFU/mL`, `4.2 x 10^9 PFU/mL`, `4.2 x 10^8 PFU/mL`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Titer = plaques / (dilution x volume) = 42 / (10^-6 x 0.1 mL) = 42 x 10^7 = 4.2 x 10^8 PFU/mL. The factor most often dropped is the 0.1 mL plating volume, which adds one more power of ten.`
          }
        ]
      }
    },
    {
      id: 'vir1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Virion basics.** One nucleic acid type in a capsid, sometimes enveloped; no ribosomes or metabolism, so it replicates only in cells.
- **Envelope predicts spread.** Enveloped viruses are fragile and spread by contact or droplets; naked capsids survive acid and surfaces.
- **Six-step cycle.** Attach, penetrate, uncoat, synthesize, assemble, release; the receptor bound at attachment sets tropism.
- **Counting infection.** A plaque assay counts infectious virions (PFU); the eclipse has zero infectivity from uncoating to assembly.

**Common traps**

- **Filterable means virus.** Some bacteria pass filters or live inside cells; only obligate replication plus no ribosomes proves a virus.
- **Dropping the plated volume.** Titer = plaques ÷ (dilution × volume plated); forgetting the plated volume (e.g., 0.1 mL) costs a factor of ten.
- **Entry drugs as treatment.** Attachment and entry blockers only protect uninfected cells; late-step drugs act inside infected ones.
- **Reading (−) RNA as mRNA.** Only (+) sense RNA is readable as mRNA; (−) sense is its complement and must be transcribed first.`
    }
  ]
};
