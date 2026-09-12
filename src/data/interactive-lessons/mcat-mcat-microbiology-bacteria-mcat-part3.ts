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

**Competent** cells import naked DNA fragments released by lysed neighbors and recombine them into the chromosome. Griffith's experiment (heat-killed smooth + live rough pneumococci → live smooth) discovered it; Avery-MacLeod-McCarty proved the transforming principle was **DNA** (DNase, but not protease or RNase, abolished transformation). Lab transformation with plasmids (heat shock/CaCl$_2$, electroporation) is the backbone of molecular cloning.

### Transduction (Phage-Mediated)

- **Generalized:** during LYTIC packaging, a capsid accidentally stuffs a random fragment of host chromosomal DNA. Any gene can move, at low frequency.
- **Specialized:** a LYSOGENIC prophage excises imprecisely, dragging along only the host genes that flanked its integration site. Only specific genes move.
- **Lysogenic conversion:** the intact prophage itself donates new genes — diphtheria, cholera, botulinum, and Shiga toxins are all phage-encoded. (Full phage life cycles are covered in the Viruses lesson.)

### Conjugation

An **F$^+$** cell (carrying the fertility plasmid) builds a **sex pilus**, contacts an F$^-$ cell, and transfers a single strand of the F plasmid by **rolling-circle replication**; both cells end up F$^+$. Variations:

- **Hfr:** F integrates into the chromosome. Mating now drags CHROMOSOMAL genes across in map order; the bridge usually breaks before the full F sequence transfers, so the recipient stays F$^-$. Interrupted-mating experiments (genes appearing over time) built the first chromosome maps.
- **F':** imprecise excision of an integrated F carries adjacent chromosomal genes on the plasmid (analogous logic to specialized transduction).
- **R plasmids** use the same machinery to spread multidrug resistance, even between species.

### Mobile Elements & Operon Speed

**Transposons** ("jumping genes") hop between chromosome and plasmids, ferrying resistance cassettes onto conjugative vehicles. And remember why bacteria adapt so fast: genes sit in **operons** under single promoters (the lac operon logic), so one regulatory event retunes a whole pathway — combine that with horizontal transfer and generation times in minutes, and populations remodel their genomes on human timescales.`
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
            explanation: `No contact needed rules out conjugation; DNase sensitivity means the DNA traveled NAKED through the medium — transformation. Phage-protected DNA (transduction) shrugs off DNase, and transposition is intracellular movement, not transfer between cells.`
          },
          {
            question: `In an Hfr x F-minus interrupted-mating experiment, recipients acquire donor genes in a reproducible time order, and virtually none become F-plus. Recipients stay F-minus because:`,
            options: [`The F factor transfers first and is immediately degraded`, `Hfr cells lack the genes for pilus formation`, `The conjugation bridge usually breaks before the integrated F sequence, which transfers LAST, crosses over`, `The recipient's restriction enzymes destroy only F DNA`],
            correctAnswer: 2,
            explanation: `In an Hfr, transfer begins within the integrated F, proceeds through chromosomal genes in map order, and would complete F only after the ENTIRE chromosome — but mating pairs separate long before that. The time-of-entry order is precisely what made interrupted mating a mapping tool.`
          },
          {
            question: `A nonpathogenic strain becomes toxigenic only after infection by a temperate phage, and the toxin gene is found within the prophage sequence itself. This phenomenon is:`,
            options: [`Lysogenic conversion`, `Generalized transduction`, `Transformation by phage DNA`, `Conjugative transposition`],
            correctAnswer: 0,
            explanation: `The phage's OWN genome carries the toxin gene, expressed while it sits as a prophage — lysogenic conversion (diphtheria, cholera, Shiga, botulinum toxins). In generalized transduction the phage instead carries a random piece of a PREVIOUS host's chromosome.`
          },
          {
            question: `Generalized and specialized transduction differ in that generalized transduction:`,
            options: [`Occurs only with temperate phages integrating site-specifically`, `Transfers only genes adjacent to the phage integration site`, `Requires a sex pilus`, `Can package and transfer essentially ANY host gene, because random chromosome fragments are mispackaged during lytic growth`],
            correctAnswer: 3,
            explanation: `Generalized: lytic-cycle packaging errors grab random host DNA — any locus, equal (low) odds. Specialized: an imprecisely excising prophage carries only its neighboring genes. Both are phage-borne, so neither needs a pilus.`
          },
          {
            question: `A multidrug-resistance gene cluster moves from a chromosome onto a conjugative plasmid, then into another species. The element most directly responsible for the chromosome-to-plasmid step is:`,
            options: [`A sex pilus`, `A transposon carrying the resistance cassette`, `A restriction endonuclease`, `An origin of replication`],
            correctAnswer: 1,
            explanation: `Transposons cut-and-paste (or copy-and-paste) between replicons within a cell — the chromosome-to-plasmid hop. Conjugation then handles the BETWEEN-cell step via the pilus. Two distinct mobility layers stack to spread resistance.`
          }
        ]
      }
    },
    {
      id: 'bac3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Three horizontal routes, three diagnostics: DNase kills transformation; contact required = conjugation; phage required = transduction
- Griffith found transformation; Avery proved DNA (DNase abolished it)
- Transduction: generalized = random fragment, lytic mispackaging; specialized = flanking genes, sloppy prophage excision; lysogenic conversion = the phage's own toxin genes
- Conjugation: F$^+$ x F$^-$ → both F$^+$ (rolling circle); Hfr transfers chromosome in map order, recipient stays F$^-$; F' carries hitchhiker genes
- Transposons move genes BETWEEN replicons inside a cell; plasmids move them BETWEEN cells; operons make regulation fast
- No meiosis anywhere — bacterial 'sex' is unidirectional donation`
    },
    {
      id: 'bac3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Transfer Experiments

<details>
<summary><b>Example 1: Design controls to identify the mechanism</b></summary>

**Question:** Strain A (streptomycin-resistant) transfers resistance to strain B in mixed culture. Design a three-condition experiment to determine the mechanism, and give the expected results for conjugation.

**Solution:**
1. Condition 1 — add DNase to the co-culture: conjugation unaffected (DNA travels through the pilus, protected).
2. Condition 2 — separate strains with a 0.2 micron filter (U-tube): conjugation ABOLISHED (contact required); transformation and transduction persist.
3. Condition 3 — use cell-free filtrate of strain A on strain B: conjugation gives NO transfer (a filtrate has no cells); transduction would (phage particles pass filters).
4. Conjugation signature: transfer in mixed culture only, DNase-resistant, filter-blocked, filtrate-negative.

**MCAT Strategy:** Memorize the 3x3 grid of mechanism vs. DNase/filter/filtrate — nearly every genetics-transfer passage is one cell of that grid.
</details>

<details>
<summary><b>Example 2: Read an interrupted-mating map</b></summary>

**Question:** In an Hfr cross, recipients acquire azi-r at 9 min, ton-r at 11 min, lac+ at 18 min, gal+ at 25 min. A different Hfr strain (same species, different F integration site) transfers gal+ first. Reconcile, and state what the times give you.

**Solution:**
1. Entry times are proportional to each gene's DISTANCE from the F integration point (the transfer origin) — the time axis is literally a map axis (minutes became the E. coli map unit).
2. A different integration site (or orientation) changes the starting point and direction, so gene ORDER of entry changes, but the relative SPACING between genes is consistent.
3. Combining several Hfr strains' data yields one circular chromosome map — an early proof of chromosome circularity.

**MCAT Strategy:** Time-of-entry = genetic distance; different Hfr strains = different clock-start positions on the same circle.
</details>

<details>
<summary><b>Example 3: Predict the outcome of an F-prime cross</b></summary>

**Question:** An F' lac+ cell mates with an F-minus lac-minus recipient. What is the recipient's genotype and phenotype afterward, and how does this differ from an Hfr cross transferring lac+?

**Solution:**
1. F' transfer moves the whole plasmid efficiently: the recipient becomes F' lac+ / lac-minus — a partial diploid (merodiploid) carrying two lac copies, and it can now donate too.
2. Phenotype: Lac+ (the plasmid copy complements), and merodiploids are the tool that defined cis vs trans action in the lac operon (e.g., lacI works in trans, operator only in cis).
3. Hfr contrast: chromosomal lac+ arrives as a linear fragment that must RECOMBINE to be kept, recipient stays F-minus, and no stable diploid forms.

**MCAT Strategy:** F' = stable partial diploid (complementation tests); Hfr = recombination required. When a question builds cis/trans logic, an F' merodiploid is hiding in it.
</details>`
    }
  ]
};
