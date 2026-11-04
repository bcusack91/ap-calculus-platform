// Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW
export const mcatMicrobialGeneticsPart4Data = {
  topicSlug: 'mcat-microbiology-genetics-mcat',
  sections: [
    {
      id: 'mg4-intro',
      type: 'text' as const,
      content: `# Microbial Genetics

**Part 4 of 4 — Viral Genetics & MCAT Integration**

> Phage life cycles and the Baltimore classes are taught in the Viruses lesson; this part covers the genetics built on them.

### Prophages and Induction

A temperate phage can integrate its genome into the host chromosome as a **prophage**, which is copied passively with the chromosome. A phage **repressor** keeps the lytic genes off and makes the lysogen **immune** to superinfection by the same phage. **Induction:** DNA damage, such as UV light, leads to destruction of the repressor; the prophage excises, enters the lytic cycle, and the cell lyses. If excision is imprecise at that moment, host genes beside the insertion site ride along into the next cell the phage infects: specialized transduction.

<!-- yield:low -->
- The damage sensor is the host SOS response: activated RecA promotes self-cleavage of the phage repressor.
<!-- /yield -->

### Hershey-Chase: DNA Is the Genetic Material of Phage

T2 phage were grown with **$^{35}$S**, which labels protein (methionine and cysteine; DNA contains no sulfur), or with **$^{32}$P**, which labels DNA (its phosphate backbone; protein contains almost no phosphorus). After infection, a blender sheared the attached phage coats off the cells, and centrifugation pelleted the cells while the empty coats stayed in the supernatant. **$^{32}$P went into the cells and turned up in progeny phage; $^{35}$S stayed outside.** The material that enters and is inherited is DNA. It is the phage counterpart of the Avery, MacLeod and McCarty experiment, in which only DNase destroyed the pneumococcal "transforming principle".

### Mapping and Counting Genes in Phage

- **Phage crosses:** infect cells with two mutants at once (high multiplicity). The genomes recombine inside the cell, and recombinant frequency rises with the distance between the mutations, which gives fine-scale maps of mutation sites inside one gene.
- **Complementation test:** put two recessive mutants in one cell (co-infection, or a merodiploid in bacteria). If the phenotype is **wild type**, they **complement**: each genome supplies the product the other lacks, so the mutations are in **different genes**. If the phenotype is mutant, they fail to complement and are almost certainly in the **same gene**. The test works only for recessive mutations: a dominant mutation gives the mutant phenotype even beside a working copy. Its control is the **cis** arrangement (both mutations on one genome, a wild-type copy on the other), which must look wild type.
- **Complementation groups:** every mutation that fails to complement the others joins one group, and each group is one gene. Counting groups counts the genes the screen has hit.

| | Complementation | Recombination |
|---|---|---|
| How common | In nearly every co-infected cell | Rare (frequency reflects distance) |
| Changes a genome? | No: two mutant genomes share products | Yes: a wild-type genome is built |
| Heritable wild type? | No: progeny carry the parental mutations | Yes |
| Between two mutations in one gene? | No | Yes |

<!-- yield:low -->
- Benzer's rII system: rII mutants of T4 plaque on E. coli B but not on E. coli K(λ). Crossing two rII mutants on B and plating on K selects only wild-type recombinants. Recombinants come in two reciprocal classes and only wild type is scored, so total recombination is twice the wild-type frequency: 0.001 wild-type plaques means 0.2 map units. The complementation unit was named the cistron.
- A rare exception: intragenic complementation, in which two mutant subunits of one multimeric protein can together form a partly working protein.
<!-- /yield -->

### Why Viruses Mutate So Fast

RNA viruses copy their genomes with an **RNA-dependent RNA polymerase**, and retroviruses with **reverse transcriptase**. Most of these enzymes **lack 3′→5′ proofreading** (coronaviruses are a rare exception), so their error rates run thousands of times or more above cellular DNA replication, which is proofread and then mismatch-repaired. DNA viruses use proofreading DNA polymerases and are far more stable.

- An infected patient carries a swarm of related variants (a quasispecies), so drug-resistant variants exist **before** treatment. This is the fluctuation-test logic: in bacterial cultures, resistance mutations arise at random during growth, before the selecting agent arrives, rather than in response to it. Combination therapy, as for HIV, is the answer: a variant resistant to all drugs at once is far rarer.
- In surface proteins, the same error rate drives **antigenic drift**.

<!-- yield:low -->
- Order-of-magnitude rates: RNA polymerases and reverse transcriptase make about one error per $10^{4}$ to $10^{5}$ nucleotides copied; proofread and repaired cellular DNA replication, about one per $10^{9}$ to $10^{10}$.
<!-- /yield -->

### Recombination and Reassortment

- **Recombination:** when two strains infect one cell, the polymerase can switch templates and produce a hybrid genome. Retroviruses package two RNA copies, so reverse transcriptase can switch between them.
- **Reassortment:** influenza's genome is **8 separate RNA segments**. A cell infected by two strains can package segments from both parents into one virion.
- **Antigenic drift** = gradual point mutations in the surface proteins hemagglutinin (HA) and neuraminidase (NA), so last year's antibodies bind less well: seasonal epidemics and annual vaccine updates.
- **Antigenic shift** = reassortment brings in a new HA or NA segment, for example from an avian strain, with pigs as a classic mixing vessel. The population has no immunity: pandemic risk. Only segmented viruses can shift.

### Integration: Which Mechanism Moved the Gene?

| Clue in the passage | Mechanism |
|---------------------|-----------|
| New trait appears only in descendants; counts fluctuate between parallel cultures | Spontaneous mutation, then selection |
| Transfer stopped by DNase | Transformation |
| Transfer needs cell contact, resists DNase; gene on a plasmid with transfer genes | Conjugation |
| Transfer crosses a filter, resists DNase, needs a phage receptor | Transduction |
| Gene moves between chromosome and plasmid inside one cell, flanked by IS elements | Transposition |
| New spacer in the CRISPR array; immunity to one phage only | CRISPR acquisition |
| Virus gains whole segments from another strain | Reassortment (shift) |
| Scattered point changes accumulate in HA or NA | Drift |`
    },
    {
      id: 'mg4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Experiment Reading

**Problem 1.** In one patient, a carbapenem-resistance gene first sits on a Klebsiella chromosome between two copies of an insertion sequence. Later the same block is on a large plasmid with pilus genes and two other resistance genes, in Klebsiella and then in E. coli.

- **(a)** Which mechanism moved the block from the chromosome to the plasmid?
- **(b)** Which mechanism carried it from Klebsiella into E. coli?
- **(c)** What lab results would confirm the between-cell step?
- **(d)** Why could treating with one of the other two drugs still enrich carbapenem resistance?

**(a) Transposition.** A resistance gene between two copies of an insertion sequence is a composite transposon. It changed location inside one cell, chromosome → plasmid, which is transposition, a within-cell move.

**(b) Conjugation.** The plasmid is an R plasmid: resistance genes plus transfer (pilus) genes, so it can cross species through a mating bridge. Independent mutation cannot explain an identical block in two species on one plasmid.

**(c) The two controls.** Transfer would be unaffected by DNase, which rules out naked DNA, and blocked by a filter that keeps the cells apart, because conjugation needs contact.

**(d) Co-selection.** Any one of the three drugs selects for the whole plasmid. Separate within-cell moves (transposition) from between-cell moves (conjugation, transduction, transformation): most resistance passages chain one of each.

**Problem 2.** Five recessive mutants with the same phenotype are tested in all pairs. Wild type (complementation) appears for every pair EXCEPT 1 + 3 and 2 + 4.

- **(a)** Which mutants must share a gene?
- **(b)** Where does mutant 5 belong?
- **(c)** How many genes are there?
- **(d)** Can two mutants in one group ever give wild-type progeny, and what would that measure?

**(a) Group the failures.** Failure to complement puts mutations in the same gene: 1 and 3 form one group, 2 and 4 another.

**(b) On its own.** Mutant 5 complements every other mutant, so it is a third group by itself.

**(c) Three genes.** Three complementation groups = three genes: {1, 3}, {2, 4} and {5}. Draw the grid, circle the failures, and group by them; mutants that complement everything stand alone.

**(d) Rarely, by recombination.** Two mutants within one group can still give rare wild-type progeny by recombination; that tests the distance between sites, not gene identity.

**Problem 3.** Isolate A (year 1) and isolate B (year 2) differ only by 7 amino acid changes scattered through HA. Isolate C (year 3) has an HA segment that matches a bird strain far better than any human strain; its other seven segments match isolate B.

- **(a)** What kind of change separates A from B, and what season should follow?
- **(b)** What kind of change separates B from C?
- **(c)** What public-health risk does isolate C carry?
- **(d)** Which kind of genome does each change require?

**(a) Antigenic drift.** Scattered point changes in one surface protein = antigenic drift. Existing immunity still partly works, so expect a typical season and an updated vaccine.

**(b) Antigenic shift.** A whole foreign HA segment on a human-strain background = reassortment = antigenic shift.

**(c) Pandemic potential.** The population has little immunity to the new HA, so C carries pandemic potential.

**(d) Segments for shift.** Any RNA virus can drift, but only a segmented genome allows the B → C step; an unsegmented RNA virus could only drift and recombine. Whole segments swapped = shift; small changes accumulating = drift.

<!-- yield:low -->
**Problem 4 (low-yield).** Two rII mutants are crossed on E. coli B, and the progeny are plated on E. coli K(λ), where only wild type grows. Wild-type plaques are 0.001 of the total progeny.

- **(a)** Why does each crossover give only one visible recombinant?
- **(b)** What is the map distance between the two mutations?

**(a) One class seen.** Each crossover makes one wild-type and one double-mutant recombinant, and only wild type grows on K(λ).

**(b) Double it.** Total recombinants are 2 × 0.001 = 0.002, or 0.2 map units.
<!-- /yield -->`
    },
    {
      id: 'mg4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Viral Genetics & Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `Phages labeled with $^{32}$P or with $^{35}$S infect bacteria. After blending and centrifugation, $^{32}$P is in the cell pellet and later appears in progeny phage, while $^{35}$S stays in the supernatant. This shows that:`,
            options: [`Protein enters the cell but is degraded on entry`, `DNA, not protein, enters the cell and is passed to progeny`, `Both enter the cell, but only DNA is replicated`, `Protein enters the cell but is exported before lysis`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The sulfur label marks protein and the phosphorus label marks DNA. Only the phosphorus label entered the cells and was passed to progeny, while the sulfur label stayed outside with the sheared-off coats. If protein had entered, by any route, the sulfur label would have been found in the pellet.`
          },
          {
            question: `Two recessive phage mutants, each unable to grow alone on a host strain, are used to co-infect that host. Nearly every co-infected cell lyses and releases progeny. The best conclusion is that the mutations:`,
            options: [`Lie in different genes and complement each other`, `Lie in the same gene and recombined in every cell`, `Are dominant, so either copy restores growth`, `Reverted to wild type during the co-infection`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Rescue in nearly every co-infected cell is complementation: each genome supplies the product the other lacks, so the mutations are in different genes. Recombination and reversion are rare events, too rare to rescue nearly every cell, and the stem says both mutations are recessive.`
          },
          {
            question: `In pairwise co-infection tests, mutants 1 and 2 complement, mutants 2 and 3 complement, but mutants 1 and 3 do not. How many genes do the three mutations define?`,
            options: [`Three genes, one disrupted by each mutant`, `One gene, since all three share a phenotype`, `Two genes, with mutants 1 and 3 in one`, `None can be counted without recombination data`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Mutants 1 and 3 fail to complement, so they are in the same gene. Mutant 2 complements both, so it is in a second gene. Shared phenotype does not mean a shared gene, and complementation alone is enough to count genes; recombination data would map sites, not count genes.`
          },
          {
            question: `RNA viruses such as influenza, and retroviruses such as HIV, accumulate mutations far faster than DNA viruses mainly because their genome-copying enzymes:`,
            options: [`Lack 3′→5′ proofreading activity`, `Synthesize new strands in the 3′-to-5′ direction`, `Insert random host DNA into each new genome`, `Are blocked by host mismatch-repair proteins`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Without a proofreading exonuclease, misincorporated nucleotides stay in the genome, so RNA-dependent RNA polymerases and reverse transcriptase leave far more errors per copy. All these polymerases still synthesize 5′ to 3′, host DNA is not inserted into each genome, and host mismatch repair does not act on viral RNA.`
          },
          {
            question: `A pig cell co-infected with a human and an avian influenza strain releases a virus carrying the avian hemagglutinin segment and the human strain's other segments. This event is:`,
            options: [`Antigenic drift by point mutations in hemagglutinin`, `Lysogenic conversion by an integrated provirus`, `Recombination within one unsegmented genome`, `Antigenic shift by reassortment of segments`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `A whole segment from another strain was swapped in, which is reassortment, the basis of antigenic shift. Drift is gradual point mutation, influenza does not integrate into the host genome, and its genome is segmented, so no single-molecule recombination was needed to combine the two parents.`
          },
          {
            question: `In mixed culture, a tetracycline-resistance gene passes from Salmonella to Shigella. Transfer requires direct cell contact and is unaffected by DNase, and the new Shigella recipients can then pass the resistance on to a third strain. The gene moved between the cells by:`,
            options: [`Transformation by DNA released from lysed donor cells`, `Generalized transduction by a phage of the donor`, `Transposition out of the donor's chromosome`, `Conjugative transfer of a resistance plasmid`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `A contact requirement, DNase resistance and recipients that become donors themselves identify conjugation of an R plasmid, which carries transfer genes along with resistance and can cross species. DNase would stop transformation, a phage needs no cell contact, and transposition moves a gene within one cell, not between cells.`
          },
          {
            question: `A culture of lysogenic bacteria is exposed to UV light, and hours later most cells lyse, releasing phage. The UV triggered lysis because DNA damage:`,
            options: [`Mutated the prophage into a virulent, lytic phage`, `Led to destruction of the repressor that keeps the prophage silent`, `Activated the host's restriction enzyme, which cut the chromosome`, `Lowered cAMP, so CAP could no longer keep the lytic genes off`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `The phage repressor keeps a prophage silent. DNA damage leads to its destruction, so the prophage excises and runs the lytic program in most cells at once. Mutation is far too rare to switch most cells, the host's restriction system spares its own methylated chromosome, and CAP is a lac activator, not the lysogeny switch.`
          }
        ]
      }
    },
    {
      id: 'mg4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Prophage and induction.** A phage repressor keeps the prophage silent; DNA damage leads to the repressor's destruction, and lysis.
- **Hershey-Chase.** $^{32}$P (DNA) entered the cells and reached progeny; $^{35}$S (protein) stayed outside → DNA is the genetic material.
- **Complementation vs. recombination.** Rescue in nearly every co-infected cell means different genes; rare heritable wild type is recombination.
- **Drift vs. shift.** Unproofread RNA copying drives drift in HA and NA; a swapped whole segment is shift, with pandemic risk.

**Common traps**

- **Shared phenotype, shared gene.** Mutants with one phenotype can lie in different genes; only failure to complement groups them.
- **Any virus can shift.** Only segmented genomes such as influenza's reassort; unsegmented viruses can only drift and recombine.
- **Resistance waits for the drug.** Error-prone copying makes resistant variants before treatment, which is why combination therapy works.
- **Complementation tests dominant mutants.** It works only for recessive mutations, with the cis arrangement as the control.

<!-- yield:low -->
**Low-yield extras**

SOS/RecA-driven repressor cleavage; Benzer's rII system, the cistron, and doubling the wild-type recombinant frequency to get map distance; intragenic complementation; order-of-magnitude error rates.
<!-- /yield -->`
    }
  ]
};
