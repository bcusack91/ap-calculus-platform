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

A temperate phage can integrate its genome into the host chromosome as a **prophage**, which is copied passively with the chromosome. A phage **repressor** keeps the lytic genes off and makes the lysogen **immune** to superinfection by the same phage. **Induction:** DNA damage, such as UV light, leads to destruction of the repressor; the prophage excises, enters the lytic cycle, and the cell lyses. If excision is imprecise at that moment, host genes beside the insertion site ride along: specialized transduction (Part 2).

<!-- yield:low -->
- The damage sensor is the host SOS response: activated RecA promotes self-cleavage of the phage repressor.
<!-- /yield -->

### Hershey-Chase: DNA Is the Genetic Material of Phage

T2 phage were grown with **$^{35}$S**, which labels protein (methionine and cysteine; DNA contains no sulfur), or with **$^{32}$P**, which labels DNA (its phosphate backbone; protein contains almost no phosphorus). After infection, a blender sheared the attached phage coats off the cells, and centrifugation pelleted the cells while the empty coats stayed in the supernatant. **$^{32}$P went into the cells and turned up in progeny phage; $^{35}$S stayed outside.** The material that enters and is inherited is DNA. It is the phage counterpart of the Avery experiment (Part 2).

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

- An infected patient carries a swarm of related variants (a quasispecies), so drug-resistant variants exist **before** treatment, the fluctuation-test logic of Part 1. Combination therapy, as for HIV, is the answer: a variant resistant to all drugs at once is far rarer.
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
            question: `A carbapenem-resistance gene appears in E. coli after co-culture with resistant Klebsiella. Transfer is unaffected by DNase, is blocked by a filter that keeps the cells apart, and the gene sits on a large plasmid with pilus genes. The gene moved between the cells by:`,
            options: [`Transformation by DNA released from lysed donor cells`, `Generalized transduction by a phage of the donor`, `Transposition out of the donor's chromosome`, `Conjugative transfer of a resistance plasmid`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `A contact requirement, DNase resistance and a plasmid that carries pilus genes together identify conjugation of an R plasmid, which can cross species. DNase would stop transformation, a phage would pass the filter, and transposition moves a gene within one cell, not between cells.`
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

- Prophage = integrated temperate phage; its repressor keeps lytic genes off and blocks superinfection; DNA damage → repressor destroyed → induction (imprecise excision = specialized transduction)
- Hershey-Chase: $^{32}$P (DNA) entered cells and reached progeny; $^{35}$S (protein) stayed outside → DNA is the genetic material
- Complementation = wild type in nearly every co-infected cell → different genes; failure → same gene; complementation groups = genes; recessive mutations only, with the cis arrangement as the control
- Recombination = rare, builds a heritable wild-type genome, works within one gene, frequency maps distance
- RNA polymerases and reverse transcriptase lack proofreading → swarms of variants, preexisting drug resistance (combination therapy), antigenic drift
- Influenza: 8 segments → reassortment → antigenic shift (new HA or NA, pandemic risk); drift = point mutations (annual vaccines)
- Integration habit: DNase? contact? phage? within one cell? whole segments or point changes? Each clue names one mechanism

<!-- yield:low -->
- Low-yield extras: SOS/RecA-driven repressor cleavage; Benzer's rII system, the cistron, and doubling the wild-type recombinant frequency to get map distance; intragenic complementation; order-of-magnitude error rates
<!-- /yield -->`
    },
    {
      id: 'mg4-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Experiment Reading

<details>
<summary><b>Example 1: Sort five mutants into genes</b></summary>

**Question:** Five recessive mutants with the same phenotype are tested in all pairs. Wild type (complementation) appears for every pair EXCEPT 1 + 3 and 2 + 4. How many genes are there, and which mutants share one?

**Solution:**
1. Failure to complement puts mutations in the same gene: 1 and 3 form one group, 2 and 4 another.
2. Mutant 5 complements every other mutant, so it is a third group on its own.
3. Three complementation groups = three genes: {1, 3}, {2, 4} and {5}.
4. Two mutants within one group can still give rare wild-type progeny by recombination; that tests distance between sites, not gene identity.

**MCAT Strategy:** Draw the grid, circle the failures, and group by them. Mutants that complement everything stand alone.
</details>

<details>
<summary><b>Example 2: A resistance-spread scenario, step by step</b></summary>

**Question:** In a hospital, carbapenem resistance first appears in one patient's Klebsiella, then in E. coli from the same patient. Sequencing shows (i) in an early Klebsiella isolate the resistance gene is on the chromosome, between two copies of an insertion sequence; (ii) in later Klebsiella and in the E. coli, the same IS-flanked block sits on a large plasmid that carries pilus genes; (iii) the plasmid also carries two other resistance genes. Which mechanism did each step use, and what follows clinically?

**Solution:**
1. Chromosome → plasmid inside one Klebsiella cell: an IS-flanked block that changed location is a composite transposon, so the step is transposition.
2. Klebsiella → E. coli: a plasmid with transfer genes crossing species is conjugation of an R plasmid. A lab test would show transfer that resists DNase and is blocked by a filter.
3. Clinically, any one of the three drugs now selects for the whole plasmid, so treating with an unrelated antibiotic can still enrich carbapenem resistance.
4. Not mutation: the identical block in two species, on one plasmid, cannot be explained by independent mutation.

**MCAT Strategy:** Separate within-cell moves (transposition) from between-cell moves (conjugation, transduction, transformation). Most resistance passages chain one of each.
</details>

<details>
<summary><b>Example 3: Drift or shift from sequence data?</b></summary>

**Question:** Isolate A (year 1) and isolate B (year 2) differ only by 7 amino acid changes scattered through HA. Isolate C (year 3) has an HA segment that matches a bird strain far better than any human strain, while its other seven segments match isolate B. Classify each change and predict the public-health effect.

**Solution:**
1. A → B: scattered point changes in one surface protein = antigenic drift. Existing immunity still partly works, so expect a typical season and an updated vaccine.
2. B → C: a whole foreign HA segment on a human-strain background = reassortment = antigenic shift.
3. Little population immunity to the new HA means pandemic potential.
4. Only a segmented genome allows step 2; an unsegmented RNA virus could only drift and recombine.

**MCAT Strategy:** Whole segments swapped = shift; small changes accumulating = drift.
</details>

<!-- yield:low -->
**Low-yield worked example: fine-structure distance from a phage cross.** Two rII mutants are crossed on E. coli B, and the progeny are plated on E. coli K(λ), where only wild type grows. Wild-type plaques are 0.001 of the total progeny. Each crossover makes one wild-type and one double-mutant recombinant, and only wild type is seen, so total recombinants are 2 × 0.001 = 0.002, or 0.2 map units.
<!-- /yield -->`
    }
  ]
};
