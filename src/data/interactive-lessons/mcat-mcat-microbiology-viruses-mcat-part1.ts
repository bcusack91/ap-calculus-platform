export const mcatVirusesPart1Data = {
  topicSlug: 'mcat-microbiology-viruses-mcat',
  sections: [
    {
      id: 'vir1-intro',
      type: 'text' as const,
      content: `# Viruses

**Part 1 of 4 — Viral Architecture & the Infectious Cycle**

### What a Virus Is (and Is Not)

A **virion** is genetic material in a protein box: a DNA **or** RNA genome (never both) inside a **capsid** built from repeating protein subunits (**capsomeres**), sometimes wrapped in a host-derived lipid **envelope** studded with viral glycoproteins. Viruses are **obligate intracellular parasites**: no ribosomes, no ATP-generating metabolism, no ability to replicate outside a cell. They fail most definitions of life — no growth, no homeostasis, no independent reproduction — yet they evolve by mutation and selection. Size scale: ~20-300 nm, generally below light-microscope resolution and small enough to pass bacteria-retaining filters (their original discovery signature).

### Genome Diversity — the Widest in Biology

Viral genomes may be DNA or RNA; single- or double-stranded; linear, circular, or **segmented** (in pieces); and as small as a few genes. Two housekeeping conventions:

- **Positive (+) sense RNA** = readable directly as mRNA.
- **Negative (−) sense RNA** = complement of mRNA; must be transcribed before translation (details in Part 3).

**Enveloped vs naked** predicts real behavior: envelopes (acquired by budding through host membranes) are damaged by detergents, drying, and stomach acid — enveloped viruses favor direct contact/respiratory transmission. **Naked capsids are tougher**: fecal-oral routes, surfaces, and GI survival belong to naked viruses.

### The Six-Step Infectious Cycle

1. **Attachment (adsorption):** viral surface protein binds a specific host receptor — the interaction that defines **tropism** (which species and cell types are infectable). No receptor, no infection.
2. **Penetration:** receptor-mediated endocytosis, or (enveloped only) membrane **fusion**.
3. **Uncoating:** capsid disassembles, releasing the genome.
4. **Synthesis:** genome replication + mRNA production + protein translation — strategy depends entirely on genome type (Parts 2-3).
5. **Assembly:** capsids self-assemble around new genomes.
6. **Release:** **lysis** (kills the cell — typical of naked viruses) or **budding** through a membrane (acquires the envelope; the cell may survive for a while, continuously shedding virions).

### Quantifying Infection

The **plaque assay** counts infectious units: virus dilutions on a cell monolayer produce clear zones (plaques), each founded by ONE infectious virion — reported as plaque-forming units (PFU). The **one-step growth curve** shows an **eclipse period** (after uncoating, NO intact virions exist inside the cell — infectivity vanishes before it multiplies) followed by a **burst** of progeny per cell. The eclipse is conceptual gold: a virus is information, not a dividing cell; it disassembles to reproduce.`
    },
    {
      id: 'vir1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Viral Structure & Life Cycle** 🎯`,
      exercise: {
        questions: [
          {
            question: `During the eclipse period of a one-step growth experiment, no infectious virions can be recovered even from lysed cells because:`,
            options: [`The virions have all budded out of the cell already`, `Host restriction enzymes have destroyed the viral genome`, `The virus has integrated permanently into the host chromosome`, `The infecting virion has uncoated: its components are being synthesized but none are yet assembled into complete particles`],
            correctAnswer: 3,
            explanation: `Uncoating destroys the original particle; genomes and proteins are made separately and only later self-assemble. Between uncoating and first assembly, infectivity is literally zero — a pattern impossible for any organism that reproduces by division, and the classic proof that viruses replicate by synthesis-and-assembly.`
          },
          {
            question: `Norovirus (naked capsid) spreads efficiently by the fecal-oral route and persists on surfaces, while influenza (enveloped) transmits mainly by fresh respiratory droplets. The property that best explains this difference is:`,
            options: [`The lipid envelope's vulnerability to acid, bile, detergents, and drying`, `The larger genome of naked viruses`, `Faster replication by enveloped viruses`, `The ability of naked viruses to infect without receptors`],
            correctAnswer: 0,
            explanation: `An envelope is a fragile lipid bilayer: stomach acid, bile salts, desiccation, and soap destroy it — and with it, infectivity, since the fusion glycoproteins live there. Protein-only capsids withstand the GI tract and dry surfaces. All viruses still need receptors.`
          },
          {
            question: `A virus infects human hepatocytes but not human neurons, and chimpanzee but not mouse hepatocytes. The most direct determinant of this tropism is:`,
            options: [`The temperature of each tissue`, `Complementarity between the viral attachment protein and a receptor expressed only on certain cells`, `The GC content of the viral genome`, `The size of the host cell`],
            correctAnswer: 1,
            explanation: `Attachment is a lock-and-key event between a virion surface protein and a specific host receptor; only cells displaying the receptor (in a compatible species version) can be entered. Downstream intracellular factors refine tropism, but receptor match is the gatekeeper and the standard MCAT answer.`
          },
          {
            question: `Which feature would definitively establish that a novel infectious agent is a virus rather than a small bacterium?`,
            options: [`It passes through a 0.2 micron filter`, `It is visible only by electron microscopy`, `It replicates only inside host cells and contains RNA but no ribosomes or ATP-generating enzymes`, `It is unaffected by penicillin`],
            correctAnswer: 2,
            explanation: `Filterability and small size are suggestive but some bacteria (Mycoplasma) squeeze through, and intracellular life alone fits Rickettsia and Chlamydia too. The decisive combination is obligate intracellular replication PLUS absence of the machinery of life — no ribosomes, no energy metabolism, single nucleic acid type.`
          },
          {
            question: `In a plaque assay, 0.1 mL of a 10^-6 dilution yields 42 plaques. The titer of the original stock is closest to:`,
            options: [`4.2 x 10^7 PFU/mL`, `4.2 x 10^6 PFU/mL`, `4.2 x 10^9 PFU/mL`, `4.2 x 10^8 PFU/mL`],
            correctAnswer: 3,
            explanation: `Titer = plaques / (dilution x volume) = 42 / (10^-6 x 0.1 mL) = 42 x 10^7 = 4.2 x 10^8 PFU/mL. The factor most often dropped is the 0.1 mL plating volume, which adds one more power of ten.`
          }
        ]
      }
    },
    {
      id: 'vir1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Virion = DNA or RNA (one type only) + capsid, with or without a host-derived envelope; no ribosomes, no metabolism — obligate intracellular parasite
- Genome menu: DNA/RNA, ss/ds, linear/circular/segmented; + sense reads as mRNA, − sense must be transcribed first
- Enveloped = fragile (contact/droplet spread); naked = rugged (fecal-oral, surfaces)
- Cycle: attach (receptor = tropism) → penetrate → uncoat → synthesize → assemble → release (lysis vs budding)
- Plaque assay counts infectious units (PFU); eclipse period = zero infectivity between uncoating and first assembly`
    },
    {
      id: 'vir1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Life-Cycle Reasoning

<details>
<summary><b>Example 1: Interpret a one-step growth curve</b></summary>

**Question:** A synchronized infection shows: intracellular infectivity drops to zero at t = 0-8 h, rises steeply at 8-16 h, and extracellular virions appear only after 16 h. Assign the phases and predict what electron microscopy would show at 6 h.

**Solution:**
1. 0-8 h = **eclipse**: genomes and proteins are being synthesized; EM at 6 h shows NO intact virions — only replication complexes and free components.
2. 8-16 h = assembly: intracellular infectious particles accumulate.
3. After 16 h = release (here delayed and abrupt — consistent with lysis rather than continuous budding).

**MCAT Strategy:** Match curve features to cycle steps; 'infectivity disappears then reappears' is the eclipse signature unique to viral reproduction.
</details>

<details>
<summary><b>Example 2: Predict the effect of blocking one step</b></summary>

**Question:** Drug 1 is a soluble decoy mimicking the host receptor; drug 2 blocks endosomal acidification; drug 3 inhibits the viral protease that trims capsid proteins. For each, state the step blocked and whether already-infected cells are protected.

**Solution:**
1. Drug 1 binds virion attachment proteins → blocks ATTACHMENT; protects uninfected cells only.
2. Many enveloped viruses fuse only after endosomal acidification triggers their fusion protein → blocks PENETRATION/uncoating; again prophylactic, useless post-entry.
3. Drug 3 blocks maturation during ASSEMBLY → acts INSIDE infected cells, preventing production of infectious progeny (the logic of HIV protease inhibitors).
4. Rule: entry-step drugs prevent; late-step drugs suppress ongoing production.

**MCAT Strategy:** For any antiviral, first place it on the six-step cycle; the placement answers 'who is protected' automatically.
</details>

<details>
<summary><b>Example 3: Hemagglutination and receptor logic</b></summary>

**Question:** Influenza virions agglutinate red blood cells by binding sialic acid. Patient serum taken after vaccination blocks this agglutination. What does the assay measure, and why does it correlate with protection?

**Solution:**
1. Each virion carries many hemagglutinin (HA) spikes; by binding sialic acid on multiple RBCs simultaneously, virions crosslink cells into a lattice.
2. Anti-HA antibodies coat the receptor-binding site, so no crosslinking — the hemagglutination-inhibition titer counts receptor-blocking antibody.
3. The same HA-sialic acid interaction is the virus's ATTACHMENT step, so antibodies that inhibit agglutination also neutralize infection.

**MCAT Strategy:** Assays often exploit the same molecular event as pathogenesis; identify the shared interaction and the correlation explains itself.
</details>`
    }
  ]
};
