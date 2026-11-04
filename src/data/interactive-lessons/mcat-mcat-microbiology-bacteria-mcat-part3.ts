export const mcatBacteriaPart3Data = {
  topicSlug: 'mcat-microbiology-bacteria-mcat',
  sections: [
    {
      id: 'bac3-intro',
      type: 'text' as const,
      content: `# Bacteria

**Part 3 of 4 — Bacterial Genetics: Transformation, Transduction & Conjugation**

### Vertical vs Horizontal

Binary fission copies genes **vertically** (parent to daughter, clonal). Bacteria have no meiosis and no true sexual reproduction — yet they shuffle genes **horizontally** through three mechanisms. Distinguishing them experimentally is a classic MCAT move:

| Mechanism | Vehicle | Blocked by DNase in medium? | Requires cell contact? | Requires phage? |
|-----------|---------|------------------------------|------------------------|-----------------|
| Transformation | Naked environmental DNA | **Yes** | No | No |
| Transduction | Phage capsid | No | No | **Yes** |
| Conjugation | Plasmid via sex pilus | No | **Yes** | No |

### Transformation

**Competent** cells import naked DNA fragments released by lysed neighbors and recombine them into the chromosome. Griffith's experiment (heat-killed smooth + live rough pneumococci → live smooth) discovered it; Avery-MacLeod-McCarty proved the transforming principle was **DNA** (DNase, but not protease or RNase, abolished transformation). Lab transformation with plasmids is the backbone of molecular cloning.

<!-- yield:low -->
Lab methods that make cells take up plasmids: CaCl$_2$ treatment with heat shock, or electroporation.
<!-- /yield -->

### Transduction (Phage-Mediated)

- **Generalized:** during LYTIC packaging, a capsid accidentally stuffs a random fragment of host chromosomal DNA. Any gene can move, at low frequency.
- **Specialized:** a LYSOGENIC prophage excises imprecisely, dragging along only the host genes that flanked its integration site. Only specific genes move.
- **Lysogenic conversion:** the intact prophage itself donates new genes — diphtheria, cholera, and Shiga-like toxins, and some botulinum toxins, are phage-encoded. (Full phage life cycles are covered in the Viruses lesson.)

### Conjugation

An **F$^+$** cell (carrying the fertility plasmid) builds a **sex pilus**, contacts an F$^-$ cell, and transfers a single strand of the F plasmid while both cells synthesize the complementary strands; both cells end up F$^+$.

<!-- yield:low -->
The transfer runs by rolling-circle replication.
<!-- /yield -->

Variations:

- **Hfr:** F integrates into the chromosome. Mating now drags CHROMOSOMAL genes across in map order; the bridge usually breaks before the full F sequence transfers, so the recipient stays F$^-$. Interrupted-mating experiments (genes appearing over time) built the first chromosome maps.
- **F':** imprecise excision of an integrated F carries adjacent chromosomal genes on the plasmid (analogous logic to specialized transduction).
- **R plasmids** use the same machinery to spread multidrug resistance, even between species.

### Mobile Elements & Operon Speed

**Transposons** ("jumping genes") hop between chromosome and plasmids, ferrying resistance cassettes onto conjugative vehicles. And remember why bacteria adapt so fast: genes sit in **operons** under single promoters (the lac operon logic), so one regulatory event retunes a whole pathway — combine that with horizontal transfer and generation times in minutes, and populations remodel their genomes on human timescales.`
    },
    {
      id: 'bac3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Transfer Experiments

**Problem 1.** Strain A (streptomycin-resistant) transfers its resistance to strain B in mixed culture. A three-condition experiment will identify the mechanism.

- **(a)** What does adding DNase to the co-culture do to each mechanism?
- **(b)** What does separating the strains with a 0.2 micron filter (U-tube) do to each mechanism?
- **(c)** What does a cell-free filtrate of strain A do to strain B under conjugation, and under transduction?
- **(d)** What is the full conjugation signature?

**(a) DNase.** Transformation is abolished (its DNA is naked); conjugation (DNA protected inside the pilus) and transduction (DNA inside the capsid) are unaffected.

**(b) Filter.** Conjugation is ABOLISHED (contact required); transformation and transduction persist.

**(c) Filtrate.** Conjugation gives NO transfer (a filtrate has no cells); transduction would, because phage particles pass filters.

**(d) Signature.** Transfer in mixed culture only, DNase-resistant, filter-blocked, filtrate-negative. Memorize the 3 × 3 grid of mechanism vs DNase/filter/filtrate — nearly every gene-transfer passage is one cell of that grid.

**Problem 2.** In an Hfr cross, recipients acquire azi-r at 9 min, ton-r at 11 min, lac+ at 18 min and gal+ at 25 min. A different Hfr strain (same species, different F integration site) transfers gal+ first.

- **(a)** What do the entry times measure?
- **(b)** Why does the second strain transfer genes in a different order?
- **(c)** What do several Hfr strains' maps add up to?

**(a) Distance from the origin.** Entry time is proportional to each gene's DISTANCE from the F integration point (the transfer origin): the time axis is literally a map axis, and minutes became the E. coli map unit.

**(b) A different start.** A different integration site (or orientation) changes the starting point and direction, so the ORDER of entry changes, but the relative SPACING between genes stays consistent.

**(c) One circle.** Combining several Hfr strains' data yields one circular chromosome map — an early proof of chromosome circularity. Time-of-entry = genetic distance; different Hfr strains = different clock-start positions on the same circle.

**Problem 3.** An F' lac+ cell mates with an F-minus lac-minus recipient.

- **(a)** What is the recipient's genotype afterward?
- **(b)** What is its phenotype, and what is such a cell used for?
- **(c)** How does an Hfr cross transferring lac+ differ?

**(a) Partial diploid.** F' transfer moves the whole plasmid efficiently: the recipient becomes F' lac+ / lac-minus — a partial diploid (merodiploid) carrying two lac copies, and it can now donate too.

**(b) Lac+, cis/trans tests.** Lac+, because the plasmid copy complements. Merodiploids are the tool that defined cis vs trans action in the lac operon (e.g., lacI works in trans, the operator only in cis).

**(c) Hfr contrast.** Chromosomal lac+ arrives as a linear fragment that must RECOMBINE to be kept; the recipient stays F-minus and no stable diploid forms. F' = stable partial diploid; Hfr = recombination required.`
    },
    {
      id: 'bac3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gene Transfer Mechanisms** 🎯`,
      exercise: {
        questions: [
          {
            question: `Gene transfer between two bacterial strains continues when they are separated by a filter that blocks cell contact, but is abolished when DNase is added to the shared medium. The mechanism is:`,
            options: [`Conjugation`, `Transformation`, `Generalized transduction`, `Transposition`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `No contact needed rules out conjugation; DNase sensitivity means the DNA traveled NAKED through the medium — transformation. Phage-protected DNA (transduction) shrugs off DNase, and transposition is intracellular movement, not transfer between cells.`
          },
          {
            question: `In an Hfr x F-minus interrupted-mating experiment, recipients acquire donor genes in a reproducible time order, and virtually none become F-plus. Recipients stay F-minus because:`,
            options: [`The F factor transfers first and is immediately degraded`, `Hfr cells lack the genes for pilus formation`, `The mating bridge breaks before F finishes transferring`, `The recipient's restriction enzymes destroy only F DNA`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `In an Hfr, transfer begins within the integrated F, proceeds through chromosomal genes in map order, and would complete F only after the ENTIRE chromosome — but mating pairs separate long before that. The time-of-entry order is precisely what made interrupted mating a mapping tool.`
          },
          {
            question: `A nonpathogenic strain becomes toxigenic only after infection by a temperate phage, and the toxin gene is found within the prophage sequence itself. This phenomenon is:`,
            options: [`Lysogenic conversion`, `Generalized transduction`, `Transformation by phage DNA`, `Conjugative transposition`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The phage's OWN genome carries the toxin gene, expressed while it sits as a prophage — lysogenic conversion (diphtheria and cholera toxins are classic examples). In generalized transduction the phage instead carries a random piece of a PREVIOUS host's chromosome.`
          },
          {
            question: `Generalized and specialized transduction differ in that generalized transduction:`,
            options: [`Occurs only with temperate phages integrating site-specifically`, `Transfers only genes adjacent to the phage integration site`, `Requires a sex pilus for DNA transfer`, `Can package and transfer essentially any host gene`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Generalized: lytic-cycle packaging errors grab random host DNA — any locus, equal (low) odds. Specialized: an imprecisely excising prophage carries only its neighboring genes. Both are phage-borne, so neither needs a pilus.`
          },
          {
            question: `A multidrug-resistance gene cluster moves from a chromosome onto a conjugative plasmid, then into another species. The element most directly responsible for the chromosome-to-plasmid step is:`,
            options: [`The conjugative pilus of the donor cell`, `A transposon carrying the resistance cassette`, `A restriction endonuclease in the donor`, `A second origin of replication`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Transposons cut-and-paste (or copy-and-paste) between replicons within a cell — the chromosome-to-plasmid hop. Conjugation then handles the BETWEEN-cell step via the pilus. Two distinct mobility layers stack to spread resistance.`
          }
        ]
      }
    },    {
      id: 'bac3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Three transfer routes.** Transformation takes up naked DNA, transduction rides in a phage, conjugation needs contact via a pilus.
- **Diagnostic tests.** DNase blocks only transformation; a filter blocks only conjugation; only transduction needs a phage.
- **Transduction types.** Generalized mispackaging moves any host gene; specialized moves only genes flanking the prophage.
- **Conjugation variants.** F$^+$ $\\times$ F$^-$ makes two F$^+$ cells; Hfr moves chromosome genes in map order; F' carries hitchhikers.

**Common traps**

- **Hfr recipients turning F$^+$.** The mating bridge usually breaks before F finishes transferring, so Hfr recipients almost always stay F$^-$.
- **Griffith proving DNA.** Griffith discovered transformation; Avery proved DNA was the transforming principle (DNase abolished it).
- **Toxin genes as host DNA.** In lysogenic conversion the toxin genes belong to the phage itself, not to a previous host.
- **Transposons between cells.** Transposons move genes between replicons inside one cell; plasmids carry them between cells.

<!-- yield:low -->
**Low-yield extras**

- Lab transformation uses CaCl$_2$ with heat shock or electroporation; F transfer runs by rolling-circle replication
<!-- /yield -->`
    }
  ]
};
