// Authored 2026-10-29 by Opus 5.5 — PENDING FABLE REVIEW
export const mcatMicrobialGeneticsPart2Data = {
  topicSlug: 'mcat-microbiology-genetics-mcat',
  sections: [
    {
      id: 'mg2-intro',
      type: 'text' as const,
      content: `# Microbial Genetics

**Part 2 of 4 — Horizontal Gene Transfer in Depth**

Vertical transfer (parent to daughter) is clonal. **Horizontal** transfer moves DNA between cells, even between species, by three routes. Because genes jump between unrelated lineages, bacterial ancestry looks more like a network than a strictly branching tree.

### Transformation: Naked DNA

- **Competence** is a regulated physiological state, often switched on at high cell density or under stress, in which surface proteins bind environmental DNA released by lysed neighbors. One strand is imported while the other is degraded, and the imported strand replaces the matching resident sequence by **homologous recombination**. A linear chromosomal fragment that fails to recombine is lost.
- Some species, pneumococcus among them, are naturally competent. Others, including lab E. coli, must be made competent artificially.
- **Co-transformation:** two markers can enter one cell on a single imported fragment only if they lie close together, so co-transformation frequency falls off quickly with distance.

<!-- yield:low -->
- Artificial competence: calcium chloride plus a brief heat shock, or electroporation (electric pulses that open transient pores).
<!-- /yield -->

**Griffith** mixed heat-killed smooth (S, encapsulated, lethal) pneumococci with live rough (R, unencapsulated, harmless) cells. Neither alone killed mice, but the mixture did, and live S cells were recovered: a heritable "transforming principle" had passed from dead cells to live ones.

**Avery, MacLeod and McCarty** asked what that principle was by destroying one candidate at a time in the S-cell extract. Protease: transformation persists. RNase: persists. **DNase: abolished.** The logic is subtractive: if activity survives removal of a molecule, that molecule is not required, so the transforming principle is DNA.

### Transduction: DNA in a Phage Coat

- **Generalized transduction.** During a lytic cycle the phage chops up the host chromosome and packages DNA by the "headful." Occasionally a capsid fills with a random host fragment instead of phage DNA. The resulting transducing particle injects only host DNA, so it cannot make phage and the recipient survives; the fragment must recombine to be kept. **Any gene** can move, at low frequency.
- **Co-transduction.** A headful is only roughly 1 to 2 percent of the chromosome (no more than about 2 minutes of the E. coli map), so two genes arrive together only if they are physically close. High co-transduction frequency = close together, which gives fine-scale maps.
- **Specialized transduction.** A temperate phage integrated at one specific site excises imprecisely when induced and takes along the host genes **flanking** its insertion site. Only those genes move.

<!-- yield:low -->
- Lambda integrates between the gal and bio genes, so its specialized transducing particles carry gal or bio; generalized transducers in the lab include P1 (E. coli) and P22 (Salmonella).
<!-- /yield -->

Lysogenic conversion, where the phage's OWN genes (such as toxin genes) change the host, is covered in the Viruses lesson.

### Conjugation: DNA Through a Bridge

- **F$^+$ × F$^-$.** The F plasmid encodes the **sex pilus**. The pilus contacts an F$^-$ cell and retracts to form a mating bridge. Transfer starts at F's **origin of transfer (oriT)**: a single strand crosses, and both cells synthesize its complement. Both cells end up F$^+$, and chromosomal genes almost never move.

<!-- yield:low -->
- Mechanics: a relaxase nicks F at oriT, and the strand is transferred by rolling-circle replication.
<!-- /yield -->

- **Hfr (high frequency of recombination).** F integrates into the chromosome by homologous recombination between insertion sequences present on both F and the chromosome. Different integration sites and orientations give different Hfr strains. Transfer still starts at oriT, inside F, so chromosomal genes follow in map order and the rest of F would arrive only after the entire chromosome, about 100 minutes. Mating pairs nearly always break first, so the recipient gains donor genes (which must recombine) but stays **F$^-$**.
- **Gradient of transfer:** because pairs break apart at random times, genes near oriT appear in more recombinants than distal genes, a second, frequency-based way to order genes.

- **Interrupted mating.** Hfr and F$^-$ cells are mixed, samples are blended at intervals to break the pairs, and recombinants are scored. The minute at which each donor marker first appears ranks the genes by distance from oriT, so the E. coli map is calibrated in **minutes** (100 for the whole chromosome). Different Hfr strains give circularly permuted orders that overlay into one **circular** map.
- **F′.** If an integrated F excises imprecisely it carries adjacent chromosomal genes. Transferring this F′ makes the recipient a **merodiploid**, with one chromosomal and one F′ copy of those genes, and an F′ donor itself. Merodiploids are how lac operon cis/trans logic was worked out (Part 3).
- **R plasmids** combine several resistance genes with transfer genes, often with a broad host range, so one mating can make a sensitive cell a multidrug-resistant donor, even across species. That is why horizontal transfer outpaces mutation: mutation makes resistance rarely and in one lineage, while a plasmid delivers a finished resistance gene to many recipients at once.

### Telling the Three Apart

| Test | Transformation | Transduction | Conjugation |
|------|----------------|--------------|-------------|
| DNase in the medium | **Abolished** | Unaffected (capsid protects DNA) | Unaffected (bridge protects DNA) |
| Filter (U-tube) that blocks cells but passes DNA and phage | Persists | Persists | **Abolished** |
| Cell-free filtrate of the donor culture | Works, and DNase-sensitive | Works, and DNase-resistant | **No transfer** |
| What the experiment needs | Competent recipient | Phage that infects the recipient | Donor with F or another conjugative plasmid |`
    },
    {
      id: 'mg2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Transformation, Transduction & Conjugation** 🎯`,
      exercise: {
        questions: [
          {
            question: `An extract of heat-killed S pneumococci converts R cells into S cells. Treating the extract with protease or with RNase leaves this transformation intact, while DNase abolishes it. This design supports the conclusion that:`,
            options: [`Protein and RNA together carry the capsule trait`, `DNase damages the R cells' DNA-uptake machinery`, `DNA is the transforming principle`, `Transformation needs an intact capsule in the extract`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Each enzyme removes one candidate. Activity survives removal of protein and of RNA, so neither is required; only removing DNA abolishes it, so DNA is the transforming principle. DNase is applied to the extract, not to the recipients' uptake machinery. And the transformed cells keep making capsules for generations, which only inherited genes, not a carried-over capsule, can explain.`
          },
          {
            question: `In an interrupted-mating experiment, donor markers first appear in recombinants at: a$^+$ 6 min, b$^+$ 14 min, c$^+$ 15 min, d$^+$ 31 min. Which conclusion follows?`,
            options: [`Marker d lies closest to the origin of transfer`, `Markers a and d lie 31 minutes apart on the map`, `Marker b lies closer to marker a than it does to marker c`, `Markers b and c lie about 1 minute apart on the map`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Entry time measures distance from the origin of transfer, so distances come from subtracting entry times: b (14 min) and c (15 min) are about 1 minute apart, while b is 8 minutes from a, so b sits much closer to c than to a. Marker a, not d, is closest to the origin; d is the last to enter and so the farthest. The 31 minutes is d's distance from the origin, not from a: a and d are 25 minutes apart in this direction.`
          },
          {
            question: `After induction of a lysogen, a temperate phage transfers only host genes lying right beside its chromosomal insertion site, and no others. This is:`,
            options: [`Specialized transduction after imprecise prophage excision`, `Generalized transduction after random packaging of host DNA`, `Lysogenic conversion by genes in the phage genome`, `Hfr conjugation starting from the prophage site`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Only the genes next to the integration site move, the signature of a prophage that excised imprecisely and took its neighbors along: specialized transduction. Random packaging of host fragments can move any gene, lysogenic conversion is about the phage's own genes, and Hfr transfer needs an integrated F plasmid and a mating bridge, not a phage.`
          },
          {
            question: `Gene transfer between two strains persists when they are separated by a filter that blocks cells, is unaffected by DNase, and is reproduced by a cell-free filtrate of the donor culture. The mechanism is:`,
            options: [`Transformation by free DNA`, `Transposition between replicons`, `Conjugation through a pilus`, `Transduction by phage`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Transfer across a cell-blocking filter rules out conjugation, and resistance to DNase rules out naked DNA, so the DNA travels inside phage particles, which also explains why a cell-free filtrate works. Transposition moves DNA within a cell, not between cells.`
          },
          {
            question: `In generalized transduction selecting for gene X, 70 percent of transductants also receive gene Y, but only 1 percent receive gene Z. The best interpretation is that:`,
            options: [`Gene Y lies much closer to gene X on the chromosome than gene Z`, `Gene Z lies closer to gene X but is expressed less often`, `Genes Y and Z sit on separate plasmids in the donor cell`, `Gene Z moves only by specialized transduction instead`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Two genes ride in one transducing particle only if they fit within one headful of DNA, so frequent co-transduction means physical closeness. Gene Y is close to X; gene Z is far. Expression is irrelevant to packaging, and nothing in the data points to plasmids or to a second transfer mechanism.`
          },
          {
            question: `An F′ lac$^+$ donor mates with an F$^-$ lac$^-$ recipient. Afterward, the recipient is best described as:`,
            options: [`A haploid lac$^+$ recombinant that remains F$^-$`, `An Hfr strain with F integrated next to lac`, `A partial diploid for lac that can now donate it`, `A lac$^+$ cell whose chromosomal lac was replaced`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The whole F′ crosses and keeps replicating as a plasmid, so the recipient carries its own chromosomal lac$^-$ plus the F′ lac$^+$: a partial diploid (merodiploid) and now an F′ donor. A recombinant that stays F$^-$ is the Hfr outcome. Nothing integrates F into the chromosome here, and the chromosomal copy is not replaced.`
          }
        ]
      }
    },
    {
      id: 'mg2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Horizontal transfer makes bacterial ancestry a network, not a tree
- Transformation: competent cells import one strand of naked DNA and recombine it in; high co-transformation = close markers; Griffith found the transforming principle, Avery-MacLeod-McCarty showed only DNase abolished it
- Generalized transduction = lytic headful mispackaging, any gene, recipient survives; co-transduction frequency = closeness; specialized = imprecise prophage excision, flanking genes only
- F$^+$ × F$^-$: single strand from oriT, both become F$^+$, chromosome rarely moves; Hfr = F integrated via insertion-sequence homology, genes enter in map order, recipient stays F$^-$
- Interrupted mating: entry minutes = map distance (100-minute E. coli map); different Hfr strains overlay into a circle; genes near oriT also appear in more recombinants (gradient of transfer)
- F′ = imprecisely excised F with chromosomal genes → merodiploid recipient; R plasmids move multidrug resistance in one step, across species
- Discriminators: DNase kills only transformation; a cell-blocking filter kills only conjugation; a cell-free filtrate transfers by phage (or by DNA if DNase-sensitive)

<!-- yield:low -->
- Low-yield extras: artificial competence by calcium chloride plus heat shock or electroporation; lambda's gal/bio neighbors and the P1/P22 generalized transducers; relaxase and rolling-circle transfer
<!-- /yield -->`
    },
    {
      id: 'mg2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Transfer and Mapping Experiments

<details>
<summary><b>Example 1: Turn interrupted-mating minutes into a map</b></summary>

**Question:** An Hfr strain (streptomycin-sensitive, prototroph) is mated with an F$^-$ strain (streptomycin-resistant, auxotrophic for markers a, b, c and d). Samples are blended at intervals and plated on streptomycin medium lacking the relevant nutrient. Markers first appear at: a 5 min, b 12 min, c 20 min, d 32 min. A second Hfr strain transfers c first (3 min), then b (11 min), then a (18 min). Build the map.

**Solution:**
1. The plates do two jobs: streptomycin kills the donors (counterselection), and the missing nutrient lets only recombinants grow.
2. Strain 1 gives the order a, b, c, d with spacings a-b 7, b-c 8, c-d 12 minutes.
3. Strain 2 runs the other way from a different start: c-b 8 minutes and b-a 7 minutes, the same spacings. Its origin sits 3 minutes from c on the c-d side, pointing toward c.
4. Different origins and directions, identical distances: one map, entered from different points. Data from enough Hfr strains close the circle.

**MCAT Strategy:** Subtract entry times to get distances; never read the absolute minute as a gene's fixed "address" unless you know where that Hfr's origin sits.
</details>

<details>
<summary><b>Example 2: Why the Hfr recipient stays F$^-$, and why the genes must recombine</b></summary>

**Question:** After an Hfr × F$^-$ mating, recipients have donor genes, yet nearly all are still F$^-$ and none carries a donor plasmid. Explain both observations.

**Solution:**
1. Transfer starts at oriT inside the integrated F, so only part of F leads; the rest is at the far end, behind the entire chromosome (about 100 minutes).
2. Mating pairs break long before that, so the complete F almost never arrives and the recipient stays F$^-$.
3. What does arrive is a linear chromosomal fragment with no origin of replication. It persists only if homologous recombination swaps it into the recipient chromosome.
4. Contrast: in F$^+$ × F$^-$ the whole plasmid crosses and recircularizes, so the recipient becomes F$^+$ but gains no chromosomal genes.

**MCAT Strategy:** F$^+$ donors transfer the plasmid and not the chromosome; Hfr donors transfer the chromosome and not the plasmid.
</details>

<details>
<summary><b>Example 3: Identify the mechanism from three controls</b></summary>

**Question:** Strain A transfers a resistance gene to strain B in mixed culture. Results: (i) DNase in the medium has no effect; (ii) a U-tube filter separating A and B has no effect; (iii) a recipient mutant lacking the surface receptor of a phage that A carries receives nothing. Name the mechanism.

**Solution:**
1. No DNase effect rules out transformation.
2. Transfer across the filter rules out conjugation, which needs contact.
3. Losing transfer when the recipient cannot bind the phage ties transfer to phage infection: transduction.
4. To decide generalized or specialized, ask which genes move: any marker, at low frequency (generalized), or only the genes beside the prophage site (specialized).

**MCAT Strategy:** Run every transfer passage through the same three questions: Does DNase stop it? Does a filter stop it? Does it need a phage?
</details>`
    }
  ]
};
