// Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW
export const mcatMicrobialGeneticsPart1Data = {
  topicSlug: 'mcat-microbiology-genetics-mcat',
  sections: [
    {
      id: 'mg1-intro',
      type: 'text' as const,
      content: `# Microbial Genetics

**Part 1 of 4 — The Bacterial Genome, Mutation & Selection**

> This lesson goes deeper, and more experimental, than the survey in the Bacteria lesson (Part 3). Phage life cycles are in the Viruses lesson; the operon tables are in Transcription.

### One Circular Chromosome, One Copy

A typical bacterium carries a single **circular chromosome**, compacted by supercoiling into the **nucleoid** (no nuclear envelope, no nucleosomes) and replicated from **one origin** in both directions.

<!-- yield:low -->
- For scale: the E. coli chromosome is about 4.6 million base pairs.
<!-- /yield -->

The defining genetic fact is **haploidy**: one copy of each gene. The MCAT builds on four consequences:

- **No masking.** A recessive loss-of-function mutation shows its phenotype once the existing protein is diluted out by division. There is no second allele to cover it, so mutant hunts are direct.
- **No meiosis.** Eukaryotes shuffle alleles by independent assortment and by crossing over in **prophase I** of meiosis. Bacteria divide clonally by binary fission and recombine only when foreign DNA enters, one-way and partial (Part 2).
- **Partial diploids are special.** Two copies of a gene exist only in a **merodiploid**, such as a cell carrying an F′ plasmid with a chromosomal segment (Part 2). That is the one setting where dominance, complementation and cis/trans tests work in bacteria.
- **Numbers favor rare events.** If a given mutation arises once per $10^{8}$ divisions, growing an overnight culture of $10^{9}$ cells takes about $10^{9}$ divisions, so that mutation has already arisen about ten separate times, before any drug is added (and each early mutant has kept dividing into a clone).

### Plasmids: DNA Outside the Chromosome

**Plasmids** are small, usually circular, double-stranded DNA molecules with their **own origin of replication** (extragenomic DNA). They are dispensable under ordinary conditions, carry conditionally valuable genes, and can be lost over many generations unless something selects for them.

| Plasmid | Carries | Why it matters |
|---------|---------|----------------|
| **F (fertility)** | Transfer genes, including those for the sex pilus | Makes its host a conjugation donor (Part 2) |
| **R (resistance)** | One or several resistance genes, usually plus transfer genes | Multidrug resistance can spread in one mating |
| **Virulence** | Toxin, adhesin or capsule genes | Can turn a harmless strain into a pathogen |

- **Copy number** varies: F is kept at about one copy per cell, cloning vectors at dozens to hundreds. More copies means more gene dosage (more enzyme, often a higher level of resistance).
- An **episome** is a plasmid that can also integrate into the chromosome. F is the classic case: integrated F makes an **Hfr** cell (Part 2).
- A cloning vector needs an origin, a **selectable marker** and a cloning site.

<!-- yield:low -->
- Col plasmids encode bacteriocins (colicins) that kill related strains, and acridine dyes are used to "cure" cells of plasmids in the lab.
<!-- /yield -->

### Mutation Classes and How They Look in Data

| Class | Change | Typical Western blot readout |
|-------|--------|------------------------------|
| Silent | Codon → synonymous codon (the code is **degenerate**; most synonyms differ at the third, wobble base) | Normal protein |
| Missense | One amino acid replaced | Normal-size band; activity may change |
| Nonsense | Codon → premature stop | **Truncated** (smaller) band |
| Frameshift | Insertion or deletion not a multiple of 3 | Garbled downstream sequence, usually an early stop, so a smaller band |
| Promoter | Altered transcription signal | Normal size, less or no protein |

A **reversion**, a second mutation that restores function, is rare but easy to score, and it powers the Ames test below. Insertions by transposons are a major natural mutagen (Part 3).

### Auxotrophs, Prototrophs, Selection and Screening

- A **prototroph** (wild type) grows on **minimal medium** (salts plus a carbon source) and makes everything else itself. An **auxotroph** has lost a biosynthetic gene and grows only when the end product is supplied: a leu$^-$ strain grows on complete medium or on minimal plus leucine, never on minimal alone. Auxotrophic markers are the scoring system of every classic transfer and mapping experiment.
- **Selection:** only the wanted cells can grow (minimal medium selects prototrophs; a drug plate selects resistant cells). **Screening:** every cell grows, and you find the wanted ones by inspection.
- **Blue-white screening** uses both. Ampicillin SELECTS any cell carrying the plasmid; X-gal SCREENS for the insert. An insert in the cloning site disrupts the plasmid's lacZ fragment, so no β-galactosidase forms and the colony stays **white**. A blue colony carries empty, resealed vector.
- **Ames test:** a histidine-auxotroph strain of Salmonella is plated on histidine-free medium with the test chemical, so only **revertants** (his$^-$ → his$^+$) form colonies. More revertants than the no-chemical background means a mutagen, and so a likely carcinogen. A **liver enzyme extract (S9)** is added because many compounds become mutagenic only after liver metabolism.

### Do Mutations Come Before Selection? Two Proofs

**The fluctuation test.** Many small parallel cultures are grown WITHOUT phage, then each is plated onto phage. If the phage INDUCED resistance, every culture would give about the same count. Instead the counts fluctuated wildly: most cultures had zero or a few resistant cells, and a few had "jackpots" of hundreds, because a mutation early in a culture's growth leaves a large resistant clone. The control, repeated samples from ONE large culture, gave uniform counts, so the spread is biological rather than sampling error. Conclusion: mutations arise **at random, before** exposure.

<!-- yield:low -->
- The fluctuation test is the Luria-Delbrück experiment (1943), done with phage resistance in E. coli.
<!-- /yield -->

**Lederberg replica plating.** Colonies on a nonselective **master plate** are pressed onto sterile velvet and stamped, in register, onto plates containing the drug or phage. Resistant colonies appear at the **same positions** on every replica. Picking cells from those positions on the never-exposed master plate yields resistant cells, so selection revealed variants that already existed. Stamping onto minimal medium finds auxotrophs the same way: they are the colonies present on complete medium but missing on minimal.`
    },
    {
      id: 'mg1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Genome, Mutation & Selection** 🎯`,
      exercise: {
        questions: [
          {
            question: `A colony grows on complete medium and on minimal medium supplemented with leucine, but not on unsupplemented minimal medium. The strain is best described as:`,
            options: [`A prototroph that grows only on enriched media`, `A leucine auxotroph with a defective biosynthesis gene`, `A revertant that has regained leucine synthesis`, `A mutant unable to import leucine from the medium`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Growth only when leucine is supplied means the strain cannot make leucine itself: a leucine auxotroph. A prototroph would grow on plain minimal medium, and so would a revertant that regained leucine synthesis. A strain unable to import leucine could not be rescued by adding leucine to the plate.`
          },
          {
            question: `Twenty small parallel cultures, grown without phage, are each plated on phage. Most yield 0 to 3 resistant colonies, but two yield over 100. Ten samples from one large culture yield 28 to 35 colonies each. These results show that resistance mutations:`,
            options: [`Were induced by phage contact in a fixed fraction of cells`, `Spread between cells by conjugation within each culture`, `Arose at random times during growth, before phage exposure`, `Reflect sampling error in the plating method itself`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Induction by phage would give every culture about the same count. The jackpots fit mutations that struck at different generations before plating: an early mutation leaves a big resistant clone. The uniform counts from one large culture rule out sampling error, and conjugation is not needed to explain a clone of descendants.`
          },
          {
            question: `In replica plating, cells picked from the master plate at positions matching streptomycin-resistant colonies on the replicas grow on streptomycin, although they never contacted the drug. This shows that:`,
            options: [`Resistance preexisted in those cells, and the drug only selected it`, `Streptomycin diffused back onto the master plate through the velvet`, `Contact with the velvet pad induced resistance mutations`, `Resistant cells arose by mutation after reaching the replicas`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The master-plate cells were never exposed to streptomycin, yet they are already resistant, so the resistance existed before selection and the drug only revealed it. Drug carryback to the master plate and velvet-induced mutation are not what the experiment found, and mutation after transfer to the replicas could not make the never-exposed master-plate cells resistant.`
          },
          {
            question: `A Western blot shows that a mutant strain's protein runs far smaller than the wild-type protein. The mutation is most likely:`,
            options: [`A missense change in the enzyme's active site`, `A nonsense or frameshift mutation`, `A silent change at a codon's third position`, `A promoter change that lowers transcription`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `A premature stop, made directly by a nonsense mutation or soon after a frameshift, truncates the protein, so the band runs smaller. A missense change keeps the length, a silent change keeps the whole sequence, and a promoter mutation lowers the amount of protein without changing its size.`
          },
          {
            question: `A gene is ligated into a vector carrying a lacZ fragment, E. coli is transformed, and cells are plated on ampicillin plus X-gal. Which colonies should be picked, and why?`,
            options: [`Blue colonies, because their β-galactosidase shows the insert is expressed`, `White colonies, because they carry the plasmid and the insert disrupted lacZ`, `White colonies, because they lack the plasmid and so have no lacZ fragment`, `Blue colonies, because ampicillin kills cells whose plasmid carries an insert`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Ampicillin selects cells with any plasmid, so every colony carries one; cells without the plasmid die. Among them, an insert in the cloning site disrupts the lacZ fragment, giving no β-galactosidase and a white colony. Blue colonies hold empty vector, and ampicillin does not distinguish plasmids with and without an insert.`
          },
          {
            question: `In an Ames test, a compound gives no more his$^+$ revertant colonies than background when tested alone, but many more when liver enzyme extract is added. The best conclusion is that the compound:`,
            options: [`Is detoxified by liver enzymes into a harmless product`, `Serves as a histidine source that feeds the auxotroph`, `Is a procarcinogen that liver enzymes convert into a mutagen`, `Mutates DNA directly but needs the extract to enter cells`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Revertants rise only with the liver extract, so liver enzymes convert the compound into a mutagen: it is a procarcinogen. Detoxification would lower the count, a histidine source would raise growth even without the extract, and a direct mutagen would raise revertants on its own.`
          }
        ]
      }
    },
    {
      id: 'mg1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- One circular chromosome in a nucleoid, one origin; haploid, so recessive mutations show at once and only merodiploids (F′) allow dominance and complementation tests
- No meiosis in bacteria (crossing over in eukaryotes is in prophase I); bacterial recombination needs DNA from outside
- Plasmids = extragenomic, self-replicating DNA: F (conjugation), R (resistance, often several genes plus transfer genes), virulence; copy number sets gene dosage; episome = plasmid that can integrate (F → Hfr)
- Mutation readouts: silent (degenerate code, wobble base) and missense keep size; nonsense and frameshift truncate; promoter mutations lower the amount
- Auxotroph = needs the end product supplied; prototroph = grows on minimal medium; selection kills or blocks the unwanted, screening only marks them (ampicillin selects, X-gal screens: white = insert)
- Ames test = his$^-$ reversion on histidine-free plates, liver extract for metabolic activation
- Fluctuation test (jackpots in parallel cultures, uniform counts from one culture) and replica plating (same positions, resistance recovered from the unexposed master) both prove mutations come BEFORE selection

<!-- yield:low -->
- Low-yield extras: the E. coli chromosome is about 4.6 million base pairs; Col plasmids encode colicins; acridine dyes cure plasmids
<!-- /yield -->`
    },
    {
      id: 'mg1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Reading Selection Experiments

<details>
<summary><b>Example 1: Read a fluctuation table</b></summary>

**Question:** Set 1, ten separate small cultures plated on phage: 0, 0, 1, 0, 64, 0, 2, 0, 0, 9 resistant colonies. Set 2, ten samples from one big culture: 11, 9, 12, 8, 10, 11, 9, 10, 12, 8. Which hypothesis does each set test, and what is the conclusion?

**Solution:**
1. Both sets have a similar mean (about 8 and about 10), but Set 1's spread is enormous and Set 2's is small.
2. Set 2 is the control: drawing many samples from ONE culture measures plating noise alone. That noise is small.
3. If phage induced resistance on the plate, Set 1 would look like Set 2. Its jackpot (64), and to a lesser degree the 9, mean resistance arose earlier in some cultures than others, during growth without phage.
4. Conclusion: mutations are random, preexisting events, and the phage only selects them.

**MCAT Strategy:** The tell is variance, not the mean. Big variance across independent cultures plus small variance within one culture means mutation came before selection.
</details>

<details>
<summary><b>Example 2: Find an auxotroph and name its requirement</b></summary>

**Question:** A mutagenized master plate on complete medium is replica-plated onto four plates: minimal, minimal + histidine, minimal + leucine, and complete. Colony 7 grows only on complete and on minimal + leucine. Identify it and explain why the master plate matters.

**Solution:**
1. Missing on minimal but present on complete medium means colony 7 is an auxotroph.
2. Growth is restored by leucine alone, so it is a leucine auxotroph (leu$^-$); the defect is in leucine biosynthesis.
3. The master plate is the stock: colony 7 cannot be recovered from a plate it never grew on, so you pick it from the matching position on the master.
4. This is screening by elimination: you cannot directly select for a cell that does NOT grow, so you compare replicas.

**MCAT Strategy:** Absent on the selective replica, present on the master = the mutant you want. Then supplement one nutrient at a time to name it.
</details>

<details>
<summary><b>Example 3: Design an Ames test with its controls</b></summary>

**Question:** A food additive must be screened for mutagenicity. List the plates you need and what each one rules out.

**Solution:**
1. His$^-$ tester strain, no additive: background spontaneous revertants. Every other count is judged against it.
2. Additive without liver extract: detects a direct mutagen.
3. Additive plus liver extract: detects a compound that becomes mutagenic only after metabolism.
4. A known mutagen: positive control, showing the strain can revert under these conditions.
5. Read the result as a dose-dependent rise in his$^+$ colonies above background. Growth itself is the readout, because only revertants can grow without histidine.

**MCAT Strategy:** An Ames passage almost always turns on the liver extract. A compound that is positive only with the extract is a procarcinogen.
</details>`
    }
  ]
};
